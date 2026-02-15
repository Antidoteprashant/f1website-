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

    // --- Materials ---

    // Carbon fiber: dark, slightly metallic, distinct roughness
    const carbonMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#111111"),
        metalness: 0.6,
        roughness: 0.4,
        wireframe,
    });

    // Matte Blue (Dark Navy) for the main body - Red Bull style
    const bodyBlueMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#060a18"), // Very dark blue
        metalness: 0.3,
        roughness: 0.6,
        wireframe,
    });

    // Yellow accent (Nose, Airbox)
    const yellowMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#fcd303"),
        metalness: 0.2,
        roughness: 0.3,
        emissive: new THREE.Color("#fcd303"),
        emissiveIntensity: 0.1,
        wireframe,
    });

    // Red accent (Bull details)
    const redMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ff0022"),
        metalness: 0.2,
        roughness: 0.3,
        wireframe,
    });

    // Metallic (Rims, Halo structure)
    const metallicMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#aaaaaa"),
        metalness: 0.9,
        roughness: 0.1,
        wireframe,
    });

    // Rubber (Tires) - Dark grey, rough
    const rubberMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#1a1a1a"),
        metalness: 0.1,
        roughness: 0.9,
        wireframe,
    });

    // Mirror / Glass
    const glassMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#000000"),
        metalness: 1.0,
        roughness: 0.0,
        transparent: true,
        opacity: 0.8,
        wireframe,
    });

    // Brake Light (Emissive)
    const brakeLightMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ff0000"),
        emissive: new THREE.Color("#ff0000"),
        emissiveIntensity: 2.0,
        toneMapped: false,
        wireframe,
    });

    useFrame(() => {
        if (carRef.current) {
            carRef.current.rotation.set(...rotation);
        }
    });

    return (
        <group ref={carRef} position={[0, 0.3, 0]}>
            {/* --- Main Body --- */}

            {/* Central Monocoque */}
            <mesh position={[0, 0.2, 0.2]} material={bodyBlueMaterial}>
                <boxGeometry args={[0.5, 0.25, 2.5]} />
            </mesh>

            {/* Nose Cone - Tapered */}
            <mesh position={[0, 0.15, -1.6]} rotation={[Math.PI / 2, 0, 0]} material={bodyBlueMaterial}>
                <cylinderGeometry args={[0.08, 0.25, 1.4, 16]} />
            </mesh>
            {/* Nose Tip - Yellow */}
            <mesh position={[0, 0.15, -2.35]} rotation={[Math.PI / 2, 0, 0]} material={yellowMaterial}>
                <cylinderGeometry args={[0.02, 0.08, 0.1, 16]} />
            </mesh>

            {/* Sidepods - Detailed */}
            {/* Left Sidepod */}
            <group position={[-0.45, 0.15, 0.5]}>
                <mesh material={bodyBlueMaterial} position={[0, 0, 0]}>
                    <boxGeometry args={[0.4, 0.25, 1.8]} />
                </mesh>
                {/* Intake slope */}
                <mesh position={[0, 0.05, -0.95]} rotation={[Math.PI / 4, 0, 0]} material={carbonMaterial}>
                    <boxGeometry args={[0.38, 0.1, 0.2]} />
                </mesh>
            </group>
            {/* Right Sidepod */}
            <group position={[0.45, 0.15, 0.5]}>
                <mesh material={bodyBlueMaterial} position={[0, 0, 0]}>
                    <boxGeometry args={[0.4, 0.25, 1.8]} />
                </mesh>
                {/* Intake slope */}
                <mesh position={[0, 0.05, -0.95]} rotation={[Math.PI / 4, 0, 0]} material={carbonMaterial}>
                    <boxGeometry args={[0.38, 0.1, 0.2]} />
                </mesh>
            </group>

            {/* Engine Cover & Shark Fin */}
            <mesh position={[0, 0.35, 0.8]} material={bodyBlueMaterial}>
                <boxGeometry args={[0.3, 0.25, 1.5]} />
            </mesh>
            <mesh position={[0, 0.55, 1.0]} material={bodyBlueMaterial}>
                <boxGeometry args={[0.05, 0.3, 1.2]} />
            </mesh>
            {/* Airbox (Yellow Top) */}
            <mesh position={[0, 0.5, 0.1]} material={yellowMaterial}>
                <boxGeometry args={[0.2, 0.15, 0.3]} />
            </mesh>


            {/* Cockpit Area */}
            <mesh position={[0, 0.3, -0.4]} material={carbonMaterial}>
                <boxGeometry args={[0.35, 0.2, 0.8]} />
            </mesh>
            {/* Halo - Thick Loop */}
            <mesh position={[0, 0.45, -0.5]} rotation={[0.2, 0, 0]} material={carbonMaterial}>
                <torusGeometry args={[0.25, 0.03, 8, 16, Math.PI]} />
            </mesh>
            <mesh position={[0, 0.45, -0.5]} rotation={[0, 0, 0]} material={carbonMaterial}>
                <cylinderGeometry args={[0.02, 0.02, 0.3]} />
            </mesh>


            {/* --- Wings --- */}

            {/* Front Wing Main */}
            <group position={[0, 0.05, -2.1]}>
                <mesh material={carbonMaterial}>
                    <boxGeometry args={[1.8, 0.02, 0.3]} />
                </mesh>
                {/* Endplates */}
                <mesh position={[-0.9, 0.1, 0]} material={carbonMaterial}>
                    <boxGeometry args={[0.02, 0.2, 0.3]} />
                </mesh>
                <mesh position={[0.9, 0.1, 0]} material={carbonMaterial}>
                    <boxGeometry args={[0.02, 0.2, 0.3]} />
                </mesh>
                {/* Flaps (Red Accent) */}
                <mesh position={[0, 0.04, -0.05]} rotation={[-0.2, 0, 0]} material={redMaterial}>
                    <boxGeometry args={[1.7, 0.01, 0.15]} />
                </mesh>
            </group>


            {/* Rear Wing */}
            <group position={[0, 0.7, 1.9]}>
                {/* Main Element */}
                <mesh material={carbonMaterial}>
                    <boxGeometry args={[1.0, 0.02, 0.4]} />
                </mesh>
                {/* DRS Flap (Yellow) */}
                <mesh position={[0, 0.15, 0.05]} rotation={[0.2, 0, 0]} material={yellowMaterial}>
                    <boxGeometry args={[1.0, 0.02, 0.2]} />
                </mesh>
                {/* Endplates */}
                <mesh position={[-0.51, -0.2, 0]} material={bodyBlueMaterial}>
                    <boxGeometry args={[0.02, 0.6, 0.5]} />
                </mesh>
                <mesh position={[0.51, -0.2, 0]} material={bodyBlueMaterial}>
                    <boxGeometry args={[0.02, 0.6, 0.5]} />
                </mesh>
            </group>
            {/* Rear Wing Supports */}
            <mesh position={[0, 0.4, 1.7]} rotation={[-0.2, 0, 0]} material={carbonMaterial}>
                <boxGeometry args={[0.05, 0.4, 0.2]} />
            </mesh>


            {/* --- Floor --- */}
            <mesh position={[0, 0.05, 0.2]} material={carbonMaterial}>
                <boxGeometry args={[1.4, 0.02, 3.5]} />
            </mesh>


            {/* --- Wheels --- */}
            {/* Front Left */}
            <Wheel position={[-0.8, 0.33, -1.4]} rotation={[0, 0, 0]} rubber={rubberMaterial} metal={metallicMaterial} yellow={yellowMaterial} />
            {/* Front Right */}
            <Wheel position={[0.8, 0.33, -1.4]} rotation={[0, 0, 0]} rubber={rubberMaterial} metal={metallicMaterial} yellow={yellowMaterial} />
            {/* Rear Left */}
            <Wheel position={[-0.8, 0.33, 1.4]} rotation={[0, 0, 0]} widthScale={1.4} rubber={rubberMaterial} metal={metallicMaterial} yellow={yellowMaterial} />
            {/* Rear Right */}
            <Wheel position={[0.8, 0.33, 1.4]} rotation={[0, 0, 0]} widthScale={1.4} rubber={rubberMaterial} metal={metallicMaterial} yellow={yellowMaterial} />

            {/* Rear Light */}
            <mesh position={[0, 0.25, 2.0]} material={brakeLightMaterial}>
                <boxGeometry args={[0.1, 0.1, 0.05]} />
            </mesh>

        </group>
    );
}

// Sub-component for Wheel to reduce repetition
function Wheel({ position, rotation, widthScale = 1, rubber, metal, yellow }: any) {
    return (
        <group position={position} rotation={rotation}>
            {/* Tire */}
            <mesh rotation={[0, 0, Math.PI / 2]} material={rubber}>
                <cylinderGeometry args={[0.33, 0.33, 0.35 * widthScale, 32]} />
            </mesh>
            {/* Rim */}
            <mesh rotation={[0, 0, Math.PI / 2]} material={metal}>
                <cylinderGeometry args={[0.2, 0.2, 0.36 * widthScale, 16]} />
            </mesh>
            {/* Rim Detail (Nut) */}
            <mesh position={widthScale > 1 ? [-0.2, 0, 0] : [0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={yellow}>
                <cylinderGeometry args={[0.05, 0.05, 0.1, 6]} />
            </mesh>
        </group>
    );
}
