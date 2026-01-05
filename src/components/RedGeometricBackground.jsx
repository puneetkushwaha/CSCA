import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RedGeometricBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Geometry - Low Poly Plane
        const geometry = new THREE.PlaneGeometry(35, 20, 30, 30);
        const positionAttribute = geometry.getAttribute('position');
        const originalPositions = new Float32Array(positionAttribute.array);

        // Create a L-to-R climbing height gradient for the mountains
        for (let i = 0; i < positionAttribute.count; i++) {
            const x = positionAttribute.getX(i);

            // Normalize X to 0 (left) to 1 (right)
            const normalizedX = (x + 17.5) / 35;

            // Base height increases towards the right, plus jagged peaks
            const climbHeight = normalizedX * 5;
            const jaggedness = Math.random() * 2.5;

            positionAttribute.setZ(i, climbHeight + jaggedness);
        }
        positionAttribute.needsUpdate = true;
        geometry.computeVertexNormals();

        // Mesh Material (Subtle base)
        const material = new THREE.MeshPhongMaterial({
            color: 0x660000,
            transparent: true,
            opacity: 0.6,
            flatShading: true,
            side: THREE.DoubleSide
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2.1; // Slightly more upright for better incline view
        mesh.position.y = -7; // Lowered to show taller peaks on the right
        scene.add(mesh);

        // Wireframe / Edges (The Plexus Look)
        const wireframe = new THREE.WireframeGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 0.8
        });
        const lineSegments = new THREE.LineSegments(wireframe, lineMaterial);
        lineSegments.rotation.x = mesh.rotation.x;
        lineSegments.position.y = mesh.position.y;
        scene.add(lineSegments);

        // Vertices (Points)
        const pointsMaterial = new THREE.PointsMaterial({
            color: 0xff0000,
            size: 0.1,
            transparent: true,
            opacity: 1.0
        });
        const points = new THREE.Points(geometry, pointsMaterial);
        points.rotation.x = mesh.rotation.x;
        points.position.y = mesh.position.y;
        scene.add(points);

        // Subtle Ashes / Sparks System
        const ashCount = 50;
        const ashGeometry = new THREE.BufferGeometry();
        const ashPositions = new Float32Array(ashCount * 3);
        const ashVelocities = new Float32Array(ashCount);

        for (let i = 0; i < ashCount; i++) {
            ashPositions[i * 3] = (Math.random() - 0.5) * 20; // X
            ashPositions[i * 3 + 1] = Math.random() * -5; // Y
            ashPositions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z
            ashVelocities[i] = 0.005 + Math.random() * 0.01;
        }

        ashGeometry.setAttribute('position', new THREE.BufferAttribute(ashPositions, 3));
        const ashMaterial = new THREE.PointsMaterial({
            color: 0xff6600,
            size: 0.03,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        const ashes = new THREE.Points(ashGeometry, ashMaterial);
        scene.add(ashes);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xff0000, 30);
        pointLight.position.set(0, 5, 5);
        scene.add(pointLight);

        camera.position.z = 8;
        camera.position.y = 2;

        // Animation
        let frame = 0;
        const animate = () => {
            frame += 0.005;

            // Subtle wave movement
            const pos = geometry.getAttribute('position');
            for (let i = 0; i < pos.count; i++) {
                const z = originalPositions[i * 3 + 2] + Math.sin(frame + i * 0.2) * 0.15;
                pos.setZ(i, z);
            }
            pos.needsUpdate = true;

            // Animate Ashes upwards
            const ashPos = ashGeometry.getAttribute('position');
            for (let i = 0; i < ashCount; i++) {
                ashPos.setY(i, ashPos.getY(i) + ashVelocities[i]);

                // Reset ash if it goes too high
                if (ashPos.getY(i) > 6) {
                    ashPos.setY(i, -4);
                    ashPos.setX(i, (Math.random() - 0.5) * 20);
                }
            }
            ashPos.needsUpdate = true;

            // Removed rotation for static mountain feel

            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        // Resize Handling
        const handleResize = () => {
            if (!containerRef.current) return;
            const width = containerRef.current.offsetWidth;
            const height = containerRef.current.offsetHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial call

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
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none z-0 bg-transparent overflow-hidden"
            style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)' }}
        />
    );
};

export default RedGeometricBackground;
