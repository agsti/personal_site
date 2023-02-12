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
import { EffectComposer, DepthOfField } from "@react-three/postprocessing"
import colors from "../css/colors"

const possibleColors = [
  colors.accent1,
  colors.accent2,
  colors.light2,
  colors.light3,
]
const RandomGeometry = () => {
  const [index, _] = useState(MathUtils.randInt(1, 4))
  switch (index) {
    case 1:
      return <icosahedronGeometry args={[1, 0]} />
    case 2:
      return <dodecahedronGeometry args={[1, 0]} />
    case 3:
      return <octahedronGeometry args={[1, 0]} />
    case 4:
      return <torusKnotGeometry args={[1, 0.5, 100, 16]} />
  }
}

const RandomBlock = (props) => {
  const mesh = useRef(null)

  const [pos, setPosition] = useState([
    MathUtils.randFloatSpread(10),
    MathUtils.randFloatSpread(10),
    MathUtils.randFloat(0, -10),
  ])
  const [rotation, setRotation] = useState([
    MathUtils.randFloatSpread(10),
    MathUtils.randFloatSpread(10),
    MathUtils.randFloatSpread(10),
  ])
  const [scale, setScale] = useState(MathUtils.randFloat(0, 2))
  const [color_i, _] = useState(MathUtils.randInt(0, possibleColors.length - 1))
  const color = possibleColors[color_i]
  return (
    <mesh
      position={pos}
      rotation={rotation}
      receiveShadow
      castShadow
      ref={mesh}
      scale={scale}
    >
      <RandomGeometry />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export const NewBackground = () => {
  const count = 10
  const elements = Array.from({ length: count }, (_, i) => {
    return <RandomBlock key={i} />
  })
  console.log(elements)
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: -1,
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[-10, 10, 5]}
        shadow-mapSize={[256, 256]}
        shadow-bias={-0.0001}
        castShadow
      >
        <orthographicCamera attach="shadow-camera" args={[-15, 15, -15, 15]} />
      </directionalLight>
      <Environment resolution={32}>
        <Lightformer position={[10, 10, 10]} scale={10} intensity={4} />
        <Lightformer
          position={[10, 0, -10]}
          scale={10}
          color="red"
          intensity={6}
        />
        <Lightformer position={[-10, -10, -10]} scale={10} intensity={4} />
        <AccumulativeShadows
          temporal
          frames={Infinity}
          alphaTest={1}
          blend={200}
          limit={1500}
          scale={25}
          position={[0, -0.05, 0]}
        >
          <RandomizedLight
            amount={1}
            mapSize={512}
            radius={5}
            ambient={0.5}
            position={[-10, 10, 5]}
            size={10}
            bias={0.001}
          />
        </AccumulativeShadows>
        {/* Effects */}
        {/* <EffectComposer> */}
        {/*   <DepthOfField target={[0, 0, 0]} focusRange={0.15} bokehScale={8} /> */}
        {/* </EffectComposer> */}
      </Environment>
      {elements}
    </Canvas>
  )
}
