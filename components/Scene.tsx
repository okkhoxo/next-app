'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';

function DigitalMonolith() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);

    // Mouse follow effect
    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();

            // Base rotation
            meshRef.current.rotation.x = Math.sin(t / 4) / 2;
            meshRef.current.rotation.y = Math.sin(t / 2) / 2;

            // Mouse interaction (parallax)
            const mouseX = state.mouse.x * 0.5;
            const mouseY = state.mouse.y * 0.5;

            meshRef.current.rotation.x += mouseY;
            meshRef.current.rotation.y += mouseX;

            // Active state animation (boot sequence/glitch)
            if (active) {
                meshRef.current.rotation.z += 0.1;
                meshRef.current.scale.x = 1 + Math.sin(t * 20) * 0.1;
                meshRef.current.scale.y = 1 + Math.cos(t * 20) * 0.1;
            } else {
                meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, 0, 0.1);
                meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, 1, 0.1);
                meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, 1, 0.1);
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

            {active && (
                <Text
                    position={[0, -2.5, 0]}
                    fontSize={0.2}
                    color="#ff0055"
                    anchorX="center"
                    anchorY="middle"
                    font="https://fonts.gstatic.com/s/gugi/v13/FwZY7-Q1x1qFrO3w.woff"
                >
                    SYSTEM REBOOTING...
                </Text>
            )}
        </Float>
    );
}

function Rig() {
    const { camera, mouse } = useThree();
    const vec = new THREE.Vector3();

    useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, 5), 0.05);
        camera.lookAt(0, 0, 0);
    });

    return null;
}

export default function Scene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <DigitalMonolith />
                <Rig />
            </Canvas>
        </div>
    );
}
