'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Trail, PerspectiveCamera } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// --- Procedural Gear ---
function RealisticGear({ position, scale = 1, speed = 1, color = '#64748b' }: { position: [number, number, number]; scale?: number; speed?: number; color?: string }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.5 * speed;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.2, 32]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.2} />
      </mesh>
      {Array.from({ length: 16 }).map((_, i) => (
        <mesh key={i} position={[Math.cos((i * Math.PI * 2) / 16) * 1.1, Math.sin((i * Math.PI * 2) / 16) * 1.1, 0]} rotation={[0, 0, (i * Math.PI * 2) / 16]}>
          <boxGeometry args={[0.2, 0.3, 0.2]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.25, 16]} />
        <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.8} />
      </mesh>
      {/* Bolts */}
      {[0, 90, 180, 270].map((angle, i) => (
         <mesh key={i} position={[Math.cos(angle * Math.PI/180)*0.6, Math.sin(angle * Math.PI/180)*0.6, 0.1]} rotation={[Math.PI/2, 0, 0]}>
             <cylinderGeometry args={[0.08, 0.08, 0.1, 6]} />
             <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0.2} />
         </mesh>
      ))}
    </group>
  );
}

// --- High Detail Drone ---
function RealisticDrone({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const propsRef = useRef<THREE.Mesh[]>([]);

  useFrame((state, delta) => {
    if (groupRef.current) {
        // Floating animation
        groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
        groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
    // Spin propellers
    propsRef.current.forEach(p => {
        if(p) p.rotation.y += delta * 20;
    });
  });

  return (
    <group ref={groupRef} position={position} scale={0.7} rotation={[0.2, -0.5, 0]}>
      {/* Central Body (Carbon Fiber texture simulated by color/roughness) */}
      <mesh scale={[1, 0.2, 1.5]}>
        <boxGeometry />
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* Top Cover */}
      <mesh position={[0, 0.15, 0]} scale={[0.8, 0.1, 1.2]}>
         <boxGeometry />
         <meshStandardMaterial color="#334155" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Arms */}
      {[ [1, 1], [-1, 1], [1, -1], [-1, -1] ].map(([x, z], i) => (
        <group key={i} position={[x * 0.8, 0, z * 0.8]}>
            <mesh rotation={[0, 0, Math.PI/2]} scale={[0.1, 1.8, 0.1]} position={[-x*0.4, 0, -z*0.4]}>
                <cylinderGeometry />
                <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Motor */}
            <mesh position={[0, 0.1, 0]}>
                <cylinderGeometry args={[0.25, 0.25, 0.3, 16]} />
                <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.2} />
            </mesh>
            {/* Propeller Blade */}
            <mesh ref={el => { if(el) propsRef.current[i] = el }} position={[0, 0.3, 0]}>
                <boxGeometry args={[2.5, 0.02, 0.2]} />
                 <meshStandardMaterial color="#000" transparent opacity={0.3} />
            </mesh>
            {/* Prop Nut */}
            <mesh position={[0, 0.32, 0]}>
                <coneGeometry args={[0.05, 0.1, 16]} />
                <meshStandardMaterial color="#ef4444" />
            </mesh>
            {/* LED Light under arm */}
            <mesh position={[0, -0.1, 0]}>
                <sphereGeometry args={[0.08]} />
                <meshStandardMaterial color={z > 0 ? "#ef4444" : "#22c55e"} emissive={z > 0 ? "#ef4444" : "#22c55e"} emissiveIntensity={3} toneMapped={false} />
            </mesh>
        </group>
      ))}

      {/* Camera Gimbal */}
      <group position={[0, -0.3, 0.6]}>
         <mesh>
             <sphereGeometry args={[0.2]} />
             <meshStandardMaterial color="#000" metalness={1} roughness={0} />
         </mesh>
         <mesh rotation={[Math.PI/2, 0, 0]} position={[0, 0, 0.15]}>
             <cylinderGeometry args={[0.12, 0.12, 0.1]} />
             <meshStandardMaterial color="#111" />
         </mesh>
      </group>
      
      {/* Antenna */}
      <mesh position={[-0.2, 0.2, -0.6]} rotation={[0.5, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5]} />
          <meshStandardMaterial color="#000" />
      </mesh>
    </group>
  );
}

// --- Industrial Robot Arm ---
function IndustrialArm({ position }: { position: [number, number, number] }) {
    const groupRef = useRef<THREE.Group>(null);
    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <group ref={groupRef} position={position} scale={0.6}>
             {/* Base */}
             <mesh position={[0, -1, 0]}>
                 <cylinderGeometry args={[1, 1.2, 0.5, 32]} />
                 <meshStandardMaterial color="#ea580c" metalness={0.7} roughness={0.3} />
             </mesh>
             {/* Turret */}
             <mesh position={[0, -0.5, 0]}>
                 <cylinderGeometry args={[0.8, 0.8, 0.8, 32]} />
                 <meshStandardMaterial color="#c2410c" metalness={0.8} roughness={0.2} />
             </mesh>
             {/* Lower Arm */}
             <group position={[0, 0, 0]} rotation={[0, 0, 0.3]}>
                 <mesh position={[0, 1.5, 0]}>
                     <boxGeometry args={[0.6, 3.5, 0.6]} />
                     <meshStandardMaterial color="#ea580c" metalness={0.6} roughness={0.4} />
                 </mesh>
                  {/* Hydraulic Piston */}
                 <mesh position={[0.5, 1, 0]} rotation={[0, 0, -0.1]}>
                      <cylinderGeometry args={[0.1, 0.1, 2]} />
                      <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0.1} />
                 </mesh>
             </group>
             {/* Upper Arm Joint */}
             <mesh position={[-1, 3, 0]} rotation={[1.57, 0, 0]}>
                 <cylinderGeometry args={[0.5, 0.5, 0.8, 32]} />
                 <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
             </mesh>
             {/* Upper Arm */}
             <group position={[-1, 3, 0]} rotation={[0, 0, -0.5]}>
                 <mesh position={[0, 1.5, 0]}>
                     <boxGeometry args={[0.5, 3, 0.5]} />
                     <meshStandardMaterial color="#ea580c" metalness={0.6} roughness={0.4} />
                 </mesh>
                 {/* Wrist */}
                 <mesh position={[0, 3, 0]}>
                    <sphereGeometry args={[0.4]} />
                    <meshStandardMaterial color="#334155" />
                 </mesh>
                 {/* Gripper */}
                 <group position={[0, 3.4, 0]}>
                    <mesh position={[0.2, 0.3, 0]} rotation={[0, 0, -0.2]}>
                        <boxGeometry args={[0.1, 0.6, 0.2]} />
                        <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0.2} />
                    </mesh>
                    <mesh position={[-0.2, 0.3, 0]} rotation={[0, 0, 0.2]}>
                        <boxGeometry args={[0.1, 0.6, 0.2]} />
                        <meshStandardMaterial color="#94a3b8" metalness={1} roughness={0.2} />
                    </mesh>
                 </group>
             </group>
          </group>
        </Float>
    )
}

function FloatingParticles() {
    const count = 300;
    const mesh = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
        const temp = [];
        for(let i=0; i<count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const xFactor = -50 + Math.random() * 100;
            const yFactor = -50 + Math.random() * 100;
            const zFactor = -50 + Math.random() * 100;
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        if(!mesh.current) return;
        particles.forEach((particle, i) => {
           let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
           t = particle.t += speed / 2;
           const a = Math.cos(t) + Math.sin(t * 1) / 10;
           const b = Math.sin(t) + Math.cos(t * 2) / 10;
           const s = Math.cos(t);
           
           dummy.position.set(
               (particle.mx / 10) * a + xFactor + Math.cos((t/10) * factor) + (Math.sin(t * 1) * factor) / 10,
               (particle.my / 10) * b + yFactor + Math.sin((t/10) * factor) + (Math.cos(t * 2) * factor) / 10,
               (particle.my / 10) * b + zFactor + Math.cos((t/10) * factor) + (Math.sin(t * 3) * factor) / 10
           );
           dummy.scale.set(s, s, s);
           dummy.rotation.set(s * 5, s * 5, s * 5);
           dummy.updateMatrix();
           mesh.current!.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} transparent opacity={0.4} />
        </instancedMesh>
    )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0" style={{ zIndex: -1 }}>
      <Canvas 
        gl={{ antialias: true, toneMapping: THREE.ReinhardToneMapping, toneMappingExposure: 1.5 }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
        <ambientLight intensity={0.1} />
        <spotLight position={[50, 50, -10]} angle={0.15} penumbra={1} intensity={2} color="#00d4ff" castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ff0000" />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ff00" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <FloatingParticles />

        <RealisticGear position={[-8, 4, -8]} scale={1.5} color="#475569" speed={0.5} />
        <RealisticGear position={[9, -6, -10]} scale={2} color="#334155" speed={-0.3} />
        <RealisticGear position={[-10, -5, -12]} scale={1} color="#1e293b" speed={0.8} />

        <RealisticDrone position={[5, 2, -2]} />
        <IndustrialArm position={[-6, -2, -5]} />

        {/* Post Processing for the "Wow" Glow */}
        <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.4} />
        </EffectComposer>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
      </Canvas>
    </div>
  );
}
