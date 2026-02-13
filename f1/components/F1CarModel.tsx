"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface F1CarModelProps {
    rotation?: [number, number, number];
    wireframe?: boolean;
}

export default function F1CarModel({ rotation = [0, 0, 0], wireframe = false }: F1CarModelProps) {
    const carRef = useRef<THREE.Group>(null);

    // Carbon fiber material
    const carbonMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#0a0a0a"),
        metalness: 0.4,
        roughness: 0.3,
        wireframe,
    });

    // Yellow accent material (Red Bull Racing yellow)
    const wingMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ef4444"),
        metalness: 0.9,
        roughness: 0.2,
        wireframe,
    });

    // Metallic material (wheels, halo)
    const metallicMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#888888"),
        metalness: 1.0,
        roughness: 0.2,
        wireframe,
    });

    // Rubber material for tires
    const rubberMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#1a1a1a"),
        metalness: 0.1,
        roughness: 0.9,
        wireframe,
    });

    useFrame(() => {
        if (carRef.current) {
            carRef.current.rotation.set(...rotation);
        }
    });

    return (
        <group ref={carRef} position={[0, 0.3, 0]}>
            {/* Main Chassis */}
            <mesh position={[0, 0.15, 0]} material={carbonMaterial}>
                <boxGeometry args={[0.8, 0.25, 3.5]} />
            </mesh>

            {/* Cockpit */}
            <mesh position={[0, 0.35, -0.3]} material={carbonMaterial}>
                <boxGeometry args={[0.6, 0.15, 1.2]} />
            </mesh>

            {/* Halo Device */}
            <mesh position={[0, 0.5, -0.3]} material={metallicMaterial}>
                <torusGeometry args={[0.35, 0.025, 16, 32, Math.PI]} />
            </mesh>

            {/* Engine Cover with Shark Fin */}
            <mesh position={[0, 0.3, 1]} material={carbonMaterial}>
                <boxGeometry args={[0.7, 0.2, 1.5]} />
            </mesh>

            {/* Shark Fin */}
            <mesh position={[0, 0.5, 1.5]} rotation={[Math.PI / 2, 0, 0]} material={carbonMaterial}>
                <coneGeometry args={[0.35, 0.6, 3]} />
            </mesh>

            {/* Air Intake */}
            <mesh position={[0, 0.45, 0.2]} material={carbonMaterial}>
                <boxGeometry args={[0.4, 0.15, 0.3]} />
            </mesh>

            {/* Front Wing - Main Plane */}
            <mesh position={[0, 0.05, -1.6]} material={carbonMaterial}>
                <boxGeometry args={[1.6, 0.02, 0.3]} />
            </mesh>

            {/* Front Wing - Blue Accent */}
            <mesh position={[0, 0.08, -1.65]} material={wingMaterial}>
                <boxGeometry args={[1.55, 0.015, 0.15]} />
            </mesh>

            {/* Front Wing - Upper Element */}
            <mesh position={[0, 0.12, -1.55]} material={carbonMaterial}>
                <boxGeometry args={[1.5, 0.015, 0.2]} />
            </mesh>

            {/* Rear Wing - Main Plane */}
            <mesh position={[0, 0.6, 1.8]} material={carbonMaterial}>
                <boxGeometry args={[1.4, 0.02, 0.4]} />
            </mesh>

            {/* Rear Wing - Upper Element */}
            <mesh position={[0, 0.7, 1.8]} material={carbonMaterial}>
                <boxGeometry args={[1.35, 0.015, 0.35]} />
            </mesh>

            {/* Rear Wing - Blue Accent */}
            <mesh position={[0, 0.65, 1.85]} material={wingMaterial}>
                <boxGeometry args={[1.38, 0.015, 0.1]} />
            </mesh>

            {/* Rear Wing Supports */}
            <mesh position={[-0.6, 0.4, 1.8]} material={carbonMaterial}>
                <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
            </mesh>
            <mesh position={[0.6, 0.4, 1.8]} material={carbonMaterial}>
                <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
            </mesh>

            {/* Sidepods - Left */}
            <mesh position={[-0.5, 0.15, 0.5]} material={carbonMaterial}>
                <boxGeometry args={[0.25, 0.2, 1.5]} />
            </mesh>

            {/* Sidepods - Right */}
            <mesh position={[0.5, 0.15, 0.5]} material={carbonMaterial}>
                <boxGeometry args={[0.25, 0.2, 1.5]} />
            </mesh>

            {/* Front Left Wheel */}
            <group position={[-0.7, 0.15, -1.2]} rotation={[0, 0.1, 0]}>
                {/* Rim */}
                <mesh material={metallicMaterial}>
                    <cylinderGeometry args={[0.2, 0.2, 0.15, 16]} />
                </mesh>
                {/* Tire */}
                <mesh material={rubberMaterial}>
                    <torusGeometry args={[0.2, 0.1, 16, 32]} />
                </mesh>
            </group>

            {/* Front Right Wheel */}
            <group position={[0.7, 0.15, -1.2]} rotation={[0, 0.1, 0]}>
                <mesh material={metallicMaterial}>
                    <cylinderGeometry args={[0.2, 0.2, 0.15, 16]} />
                </mesh>
                <mesh material={rubberMaterial}>
                    <torusGeometry args={[0.2, 0.1, 16, 32]} />
                </mesh>
            </group>

            {/* Rear Left Wheel */}
            <group position={[-0.7, 0.2, 1.3]}>
                <mesh material={metallicMaterial}>
                    <cylinderGeometry args={[0.25, 0.25, 0.2, 16]} />
                </mesh>
                <mesh material={rubberMaterial}>
                    <torusGeometry args={[0.25, 0.12, 16, 32]} />
                </mesh>
            </group>

            {/* Rear Right Wheel */}
            <group position={[0.7, 0.2, 1.3]}>
                <mesh material={metallicMaterial}>
                    <cylinderGeometry args={[0.25, 0.25, 0.2, 16]} />
                </mesh>
                <mesh material={rubberMaterial}>
                    <torusGeometry args={[0.25, 0.12, 16, 32]} />
                </mesh>
            </group>

            {/* Nose Cone */}
            <mesh position={[0, 0.1, -1.9]} rotation={[Math.PI / 2, 0, 0]} material={carbonMaterial}>
                <coneGeometry args={[0.15, 0.4, 8]} />
            </mesh>
        </group>
    );
}
