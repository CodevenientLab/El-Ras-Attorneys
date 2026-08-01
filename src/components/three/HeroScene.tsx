import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function GoldForm() {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.25;
    ref.current.rotation.x += delta * 0.08;
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.28, 180, 24, 2, 3]} />
      <meshStandardMaterial
        color="#C7A65A"
        metalness={0.85}
        roughness={0.25}
        emissive="#0B3B2E"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

/**
 * Used only in the hero, as the brief calls for R3F "only where
 * appropriate" — everywhere else relies on CSS/SVG for performance.
 */
export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} dpr={[1, 1.75]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={40} color="#E4CD98" />
        <pointLight position={[-3, -2, -2]} intensity={20} color="#0B3B2E" />
        <GoldForm />
      </Suspense>
    </Canvas>
  );
}
