"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Shapes() {
  return (
    <div className="row-span-1 row-start-1 mx-auto -mt-6 w-full max-w-[470px] scale-[0.9] md:col-span-1 md:col-start-2 md:mr-[0.25rem] md:-mt-8 md:max-w-[620px] md:scale-[0.98] lg:mr-[-1rem] lg:max-w-[710px] lg:scale-[1.06] xl:mr-[-1.5rem] xl:max-w-[780px] xl:scale-[1.1]">
      <div className="aspect-square">
        <Canvas
          className="z-0"
          shadows
          gl={{ antialias: false }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 24], fov: 28.5, near: 1, far: 40 }}
        >
          <Suspense fallback={null}>
            <Geometries />
            <ContactShadows
              position={[0, -3.5, 0]}
              opacity={0.65}
              scale={48}
              blur={1}
              far={9}
            />
            <Environment preset="studio" />
          </Suspense>
        </Canvas>
      </div>
      <div className="pointer-events-none mt-2 flex items-center justify-center gap-3 text-center md:mt-4 md:justify-start">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300 md:text-base">
          Click the shapes
        </p>
        <span className="animate-[bounce_1.8s_ease-in-out_infinite] text-3xl text-yellow-300 md:text-4xl">
          ↗
        </span>
      </div>
    </div>
  );
}

function Geometries() {
  const geometries = [
    {
      position: [0, 0, 0],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(3),
    },
    {
      position: [1, -0.75, 4],
      r: 0.4,
      geometry: new THREE.CapsuleGeometry(0.5, 1.6, 2, 16),
    },
    {
      position: [-1.4, 2, -4],
      r: 0.6,
      geometry: new THREE.DodecahedronGeometry(1.5),
    },
    {
      position: [-0.8, -0.75, 5],
      r: 0.5,
      geometry: new THREE.TorusGeometry(0.6, 0.25, 16, 32),
    },
    {
      position: [1.6, 1.6, -4],
      r: 0.7,
      geometry: new THREE.OctahedronGeometry(1.5),
    },
  ];

  const soundEffects = [
    new Audio("/sounds/hit2.ogg"),
    new Audio("/sounds/hit3.ogg"),
    new Audio("/sounds/hit4.ogg"),
  ];

  const materials = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
    new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({
      roughness: 0,
      metalness: 0.5,
      color: 0x2980b9,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      roughness: 0.1,
      metalness: 0.5,
    }),
  ];

  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2)}
      geometry={geometry}
      soundEffects={soundEffects}
      materials={materials}
      r={r}
    />
  ));
}

function Geometry({ r, position, geometry, soundEffects, materials }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  const getRandomMaterial = () => gsap.utils.random(materials);
  const startingMaterial = getRandomMaterial();

  function handleClick(e) {
    const mesh = e.object;

    gsap.utils.random(soundEffects).play();

    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });

    mesh.material = getRandomMaterial();
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "elastic.out(1,0.3)",
        delay: gsap.utils.random(0, 0.5),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          material={startingMaterial}
          onClick={handleClick}
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          visible={visible}
        ></mesh>
      </Float>
    </group>
  );
}
