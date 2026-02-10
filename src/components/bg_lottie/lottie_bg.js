import React from "react"
import Lottie from "react-lottie"
import * as animationData from "./bg_anim.json"

export const LottieBg = () => {
  // Check if we're in the browser (not SSR)
  if (typeof window === "undefined") {
    return null
  }

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  return (
    <Lottie
      style={{
        position: "absolute",
        zIndex: "-2",
        minHeight: "100vh",
      }}
      options={defaultOptions}
    />
  )
}
