'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial, Text, ScrollControls, Scroll, useScroll } from '@react-three/drei';
import * as THREE from 'three';

function DigitalMonolith() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            meshRef.current.rotation.x = Math.sin(t / 4) / 2;
            meshRef.current.rotation.y = Math.sin(t / 2) / 2;

            if (active) {
                meshRef.current.rotation.z += 0.1;
                meshRef.current.scale.setScalar(1 + Math.sin(t * 20) * 0.1);
            } else {
                meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, 0, 0.1);
                meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, 1, 0.1));
            }
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={() => setActive(!active)}
                scale={active ? 1.2 : 1}
            >
                <icosahedronGeometry args={[1.5, 0]} />
                <MeshDistortMaterial
                    color={active ? "#ff0055" : (hovered ? "#d946ef" : "#a855f7")}
                    emissive={active ? "#ff0055" : "#a855f7"}
                    emissiveIntensity={active ? 3 : 0.5}
                    roughness={0.1}
                    metalness={0.8}
                    wireframe={true}
                    distort={active ? 0.6 : 0.3}
                    speed={active ? 5 : 1.5}
                />
            </mesh>
        </Float>
    );
}

function ScrollContent() {
    const scroll = useScroll();
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current) {
            // Rotate the entire group based on scroll
            groupRef.current.rotation.y = scroll.offset * Math.PI * 2;
        }
    });

    const fontUrl = "https://fonts.gstatic.com/s/kiranghaerang/v13/QldMNRRz0N-o_NqM6j8p5nK8.woff"; // Kirang Haerang

    return (
        <group ref={groupRef}>
            {/* Section 1: Hero */}
            <group position={[0, 0, 0]}>
                <Text
                    font={fontUrl}
                    fontSize={1.5}
                    position={[0, 2.5, 0]}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                >
                    NEANDER
                </Text>
                <Text
                    font={fontUrl}
                    fontSize={0.5}
                    position={[0, -2.5, 0]}
                    color="#a855f7"
                    anchorX="center"
                    anchorY="middle"
                >
                    SCROLL TO EXPLORE
                </Text>
            </group>

            {/* Section 2: Services (Orbiting) */}
            <group rotation={[0, Math.PI / 2, 0]} position={[5, 0, 0]}>
                <Text font={fontUrl} fontSize={1} position={[0, 2, 0]} color="#d946ef">
                    AI SOLUTIONS
                </Text>
                <Text font={fontUrl} fontSize={0.5} position={[0, 1, 0]} color="#ffffff">
                    Personalized Analysis
                </Text>
            </group>

            <group rotation={[0, Math.PI, 0]} position={[0, 0, -5]}>
                <Text font={fontUrl} fontSize={1} position={[0, 2, 0]} color="#00ffff">
                    MEDIA ART
                </Text>
                <Text font={fontUrl} fontSize={0.5} position={[0, 1, 0]} color="#ffffff">
                    Immersive Projection
                </Text>
            </group>

            <group rotation={[0, -Math.PI / 2, 0]} position={[-5, 0, 0]}>
                <Text font={fontUrl} fontSize={1} position={[0, 2, 0]} color="#ff0055">
                    SCENT TECH
                </Text>
                <Text font={fontUrl} fontSize={0.5} position={[0, 1, 0]} color="#ffffff">
                    Olfactory Branding
                </Text>
            </group>
        </group>
    );
}

export default function Scene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <ScrollControls pages={4} damping={0.3}>
                    <DigitalMonolith />
                    <ScrollContent />
                </ScrollControls>
            </Canvas>
        </div>
    );
}
