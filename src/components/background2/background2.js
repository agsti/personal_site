import React, { useRef, useState } from "react"
import { MathUtils } from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  Lightformer,
} from "@react-three/drei"
import colors from "../../css/colors"
import { SparkStorm } from "./spark_storm.js"

export const Background2 = () => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: -1,
      }}
      camera={{ fov: 100, position: [0, 0, 30] }}
      onCreated={({ gl, size, camera }) => {
        if (size.width < 600) {
          camera.position.z = 45
        }
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[-10, 10, 5]}
        shadow-mapSize={[256, 256]}
        shadow-bias={-0.0001}
        castShadow
      >
        <SparkStorm
          count={50}
          colors={[colors.accent1, "white", colors.accent2]}
        />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.1}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 4}
        />
      </directionalLight>
    </Canvas>
  )
}
