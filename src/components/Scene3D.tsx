'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Gear({ position, scale = 1, speed = 1, color = '#00d4ff' }: { position: [number, number, number]; scale?: number; speed?: number; color?: string }) {
  const meshRef = useRef<THREE.Group>(null);
  
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Gear body */}
        <mesh rotation={[0, 0, 0]}>
          <cylinderGeometry args={[1, 1, 0.3, 32]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Gear teeth */}
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh key={i} position={[Math.cos((i * Math.PI * 2) / 12) * 1.15, 0, Math.sin((i * Math.PI * 2) / 12) * 1.15]} rotation={[Math.PI / 2, 0, (i * Math.PI * 2) / 12]}>
            <boxGeometry args={[0.3, 0.3, 0.35]} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
          </mesh>
        ))}
        {/* Center hole */}
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.35, 16]} />
          <meshStandardMaterial color="#0a0f1c" metalness={0.5} roughness={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

function Propeller({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const meshRef = useRef<THREE.Group>(null);
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.3}>
      <group ref={meshRef} position={position} scale={scale}>
        {/* Propeller hub */}
        <mesh>
          <cylinderGeometry args={[0.15, 0.15, 0.2, 16]} />
          <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Propeller blades */}
        {[0, 120, 240].map((angle, i) => (
          <mesh key={i} position={[0, 0.05, 0]} rotation={[0, (angle * Math.PI) / 180, 0]}>
            <boxGeometry args={[2, 0.05, 0.2]} />
            <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.3} transparent opacity={0.9} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function DroneFrame({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={position} scale={0.5}>
        {/* Center body */}
        <mesh>
          <boxGeometry args={[1.5, 0.4, 1.5]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Arms */}
        {[[1.5, 0, 1.5], [-1.5, 0, 1.5], [1.5, 0, -1.5], [-1.5, 0, -1.5]].map((pos, i) => (
          <group key={i}>
            <mesh position={[pos[0] * 0.5, 0, pos[2] * 0.5]} rotation={[0, Math.atan2(pos[2], pos[0]), 0]}>
              <boxGeometry args={[2, 0.15, 0.15]} />
              <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Motor mount */}
            <mesh position={[pos[0], 0, pos[2]]}>
              <cylinderGeometry args={[0.3, 0.3, 0.3, 16]} />
              <meshStandardMaterial color="#00d4ff" metalness={0.9} roughness={0.1} emissive="#00d4ff" emissiveIntensity={0.3} />
            </mesh>
          </group>
        ))}
        {/* LED lights */}
        <mesh position={[0, -0.2, 0.8]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={2} />
        </mesh>
        <mesh position={[0, -0.2, -0.8]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} />
        </mesh>
      </group>
    </Float>
  );
}

function CircuitBoard({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.4}>
      <group position={position} rotation={[0.3, 0.5, 0]}>
        {/* PCB base */}
        <mesh>
          <boxGeometry args={[2, 0.1, 1.5]} />
          <meshStandardMaterial color="#0a5c36" metalness={0.3} roughness={0.7} />
        </mesh>
        {/* IC chips */}
        {[[-0.5, 0.1, 0], [0.5, 0.1, 0.3], [0.3, 0.1, -0.4]].map((pos, i) => (
          <mesh key={i} position={pos as [number, number, number]}>
            <boxGeometry args={[0.4, 0.15, 0.4]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
          </mesh>
        ))}
        {/* Traces */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={i} position={[-0.8 + i * 0.2, 0.06, 0.5]}>
            <boxGeometry args={[0.02, 0.01, 0.8]} />
            <meshStandardMaterial color="#c0a000" metalness={1} roughness={0.1} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function RobotArm({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={0.3}>
      <group position={position} scale={0.4}>
        {/* Base */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 1, 0.5, 16]} />
          <meshStandardMaterial color="#2a2a3e" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* First joint */}
        <mesh position={[0, 0.8, 0]}>
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="#00d4ff" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* First arm segment */}
        <mesh position={[0, 1.8, 0]}>
          <cylinderGeometry args={[0.2, 0.25, 2, 16]} />
          <meshStandardMaterial color="#3a3a4e" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Second joint */}
        <mesh position={[0, 2.8, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#7c3aed" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Second arm segment */}
        <mesh position={[0.8, 2.8, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <cylinderGeometry args={[0.15, 0.2, 1.5, 16]} />
          <meshStandardMaterial color="#3a3a4e" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Gripper */}
        <group position={[1.5, 2.3, 0]}>
          <mesh position={[0, 0, 0.15]} rotation={[0, 0, 0.3]}>
            <boxGeometry args={[0.4, 0.1, 0.08]} />
            <meshStandardMaterial color="#ff6b35" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0, -0.15]} rotation={[0, 0, -0.3]}>
            <boxGeometry args={[0.4, 0.1, 0.08]} />
            <meshStandardMaterial color="#ff6b35" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
        <spotLight position={[0, 20, 0]} intensity={0.8} angle={0.3} penumbra={1} color="#ffffff" />
        
        {/* Gears */}
        <Gear position={[-8, 4, -5]} scale={0.8} speed={1.2} color="#00d4ff" />
        <Gear position={[9, -3, -8]} scale={0.6} speed={0.8} color="#7c3aed" />
        <Gear position={[-6, -5, -6]} scale={0.5} speed={1.5} color="#ff6b35" />
        
        {/* Drone */}
        <DroneFrame position={[6, 3, -4]} />
        
        {/* Propellers */}
        <Propeller position={[-4, 2, -3]} scale={0.3} />
        <Propeller position={[4, -4, -5]} scale={0.25} />
        
        {/* Circuit Board */}
        <CircuitBoard position={[7, -2, -6]} />
        <CircuitBoard position={[-7, 0, -7]} />
        
        {/* Robot Arm */}
        <RobotArm position={[-5, -3, -4]} />
        
        <Environment preset="night" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}
