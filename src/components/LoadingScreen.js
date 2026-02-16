"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if this is the first load
    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");

    if (hasLoaded) {
      // Skip loading screen if already loaded in this session
      setIsLoading(false);
      return;
    }

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    // Hide loading screen after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasLoadedBefore", "true");
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Logo with pulse animation */}
        <div className="loading-logo">
          <div className="logo-glow"></div>
          <Image
            src="/logo.png"
            alt="GameGenesis"
            width={120}
            height={120}
            className="logo-image"
            priority
          />
        </div>

        {/* Site Title */}
        <h1 className="loading-title">GameGenesis</h1>

        {/* Loading Bar */}
        <div className="loading-bar-container">
          <div
            className="loading-bar-fill"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="loading-text">Loading Experience...</p>
      </div>
    </div>
  );
}
