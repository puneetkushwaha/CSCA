import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RedGeometricBackground = ({
    height = 5,
    jaggednessScale = 2.5,
    opacity = 0.6,
    reverse = false,
    planeSize = [35, 20],
    cameraPos = [0, 2, 8],
    meshPos = [0, -7, 0],
    ashCount = 50,
    ashColor = 0xff6600,
    ashSize = 0.03
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        // Fog for depth fading - Critical for the "infinite" feel
        // Using red-black fog for better branding integration
        scene.fog = new THREE.FogExp2(0x000000, 0.02);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // --- GEOMETRY RECONSTRUCTION ---
        // We revert to the "Mountain" logic instead of the flat grid
        const geometry = new THREE.PlaneGeometry(planeSize[0], planeSize[1], 50, 50);
        const positionAttribute = geometry.getAttribute('position');
        const originalPositions = new Float32Array(positionAttribute.array);

        // Create the "Aggressive" jagged mountain shape
        for (let i = 0; i < positionAttribute.count; i++) {
            const x = positionAttribute.getX(i);

            // Normalize X to 0 (left) to 1 (right) based on plane width
            let normalizedX = (x + planeSize[0] / 2) / planeSize[0];
            if (reverse) normalizedX = 1 - normalizedX;

            // Base height increases towards one side (Climb effect)
            const climbHeight = normalizedX * height;
            const jaggedness = Math.random() * jaggednessScale;

            positionAttribute.setZ(i, climbHeight + jaggedness);
        }
        positionAttribute.needsUpdate = true;
        geometry.computeVertexNormals();

        // --- LAYER 1: SOLID MESH (The Body) ---
        // This provides the dark silhouette against the lights
        const material = new THREE.MeshPhongMaterial({
            color: 0x660000, // Dark Red base
            transparent: true,
            opacity: opacity, // Controllable opacity
            flatShading: true,
            side: THREE.DoubleSide,
            emissive: 0x220000,
            emissiveIntensity: 0.2
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2.2;
        mesh.position.set(meshPos[0], meshPos[1], meshPos[2]);
        scene.add(mesh);

        // --- LAYER 2: WIREFRAME (The "Wire Wala" request) ---
        // We add a prominent wireframe overlay
        const wireframeGeometry = new THREE.WireframeGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0xff0000, // Bright Red Lines
            transparent: true,
            opacity: 0.5, // Visible but not overwhelming
            linewidth: 1
        });
        const lineSegments = new THREE.LineSegments(wireframeGeometry, lineMaterial);
        lineSegments.rotation.x = mesh.rotation.x;
        lineSegments.position.copy(mesh.position);
        // Slightly offset Z to prevent z-fighting with mesh
        lineSegments.position.y += 0.02;
        scene.add(lineSegments);

        // --- LAYER 3: VERTICES (Tech Points) ---
        // Adds that "Data/Node" aesthetic
        const pointsMaterial = new THREE.PointsMaterial({
            color: 0xff3333,
            size: 0.08,
            transparent: true,
            opacity: 0.8
        });
        const points = new THREE.Points(geometry, pointsMaterial);
        points.rotation.x = mesh.rotation.x;
        points.position.copy(mesh.position);
        points.position.y += 0.05;
        scene.add(points);

        // --- LAYER 4: ASHES (Atmosphere) ---
        const ashGeometry = new THREE.BufferGeometry();
        const ashPositions = new Float32Array(ashCount * 3);
        const ashVelocities = new Float32Array(ashCount);

        for (let i = 0; i < ashCount; i++) {
            ashPositions[i * 3] = (Math.random() - 0.5) * (planeSize[0] * 1.5);
            ashPositions[i * 3 + 1] = (Math.random() - 0.5) * 30 + 5; // Higher up
            ashPositions[i * 3 + 2] = (Math.random() - 0.5) * 15;
            ashVelocities[i] = 0.01 + Math.random() * 0.03;
        }

        ashGeometry.setAttribute('position', new THREE.BufferAttribute(ashPositions, 3));
        const ashMaterial = new THREE.PointsMaterial({
            color: ashColor,
            size: ashSize,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        const ashes = new THREE.Points(ashGeometry, ashMaterial);
        scene.add(ashes);

        // --- LIGHTING ---
        // Essential for the Phong Material to show depth
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xff0000, 20, 50);
        pointLight.position.set(0, 10, 10);
        scene.add(pointLight);

        // Spotlight for dramatic shadows
        const spotLight = new THREE.SpotLight(0xffffff, 10);
        spotLight.position.set(0, 20, 0);
        spotLight.angle = 0.5;
        spotLight.penumbra = 1;
        scene.add(spotLight);

        camera.position.set(cameraPos[0], cameraPos[1], cameraPos[2]);

        // --- ANIMATION ---
        let frame = 0;
        const animate = () => {
            frame += 0.005;

            // Subtle "Breathing" / Wave movement of the mountain
            // We modify the mesh geometry vertices directly
            // Note: WireframeGeometry is static, so it won't undulate strictly with the mesh unless recomputed.
            // For performance, we often just undulate the mesh and let the wireframe be static or simple transform.
            // However, to keep them synced without expensive re-computation:
            // We will just rotate/float the whole group or apply valid vertex shader if possible.
            // Here we'll stick to a simple float to avoid desync between Mesh and Wireframe lines.

            const floatY = Math.sin(frame * 0.5) * 0.2;
            mesh.position.y = meshPos[1] + floatY;
            lineSegments.position.y = meshPos[1] + floatY + 0.02;
            points.position.y = meshPos[1] + floatY + 0.05;

            // Animate Ashes
            const ashPos = ashGeometry.getAttribute('position');
            for (let i = 0; i < ashCount; i++) {
                let y = ashPos.getY(i);
                y += ashVelocities[i];
                if (y > 15) {
                    y = -10;
                    ashPos.setX(i, (Math.random() - 0.5) * (planeSize[0] * 1.5));
                }
                ashPos.setY(i, y);
            }
            ashPos.needsUpdate = true;

            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        // Resize Handling
        const handleResize = () => {
            if (!containerRef.current) return;
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            lineMaterial.dispose();
            pointsMaterial.dispose();
            ashGeometry.dispose();
            ashMaterial.dispose();
        };
    }, [height, jaggednessScale, opacity, reverse, planeSize, cameraPos, meshPos, ashCount, ashColor, ashSize]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-0 bg-transparent"
            // Gradient mask to blend bottom into black
            style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}
        />
    );
};

export default RedGeometricBackground;
