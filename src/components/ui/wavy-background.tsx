"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
    children,
    className,
    containerClassName,
    colors,
    waveWidth = 50,
    backgroundFill = "black",
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    ...props
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    colors?: string[];
    waveWidth?: number;
    backgroundFill?: string;
    blur?: number;
    speed?: "slow" | "fast";
    waveOpacity?: number;
    [key: string]: unknown; // ✅ Fixed `any` issue
}) => {
    const noise = createNoise3D();
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationRef = useRef<number | null>(null);
    const [isSafari, setIsSafari] = useState(false);

    // ✅ Wrap `getSpeed` inside `useCallback` for dependency stability
    const getSpeed = useCallback(() => (speed === "fast" ? 0.002 : 0.001), [speed]);

    const waveColors = colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee",
    ];

    // ✅ `useCallback` now correctly includes `getSpeed`
    const init = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let nt = 0;

        const drawWave = (n: number) => {
            nt += getSpeed();
            for (let i = 0; i < n; i++) {
                ctx.beginPath();
                ctx.lineWidth = waveWidth;
                ctx.strokeStyle = waveColors[i % waveColors.length];
                for (let x = 0; x < ctx.canvas.width; x += 5) {
                    const y = noise(x / 800, 0.3 * i, nt) * 100;
                    ctx.lineTo(x, y + ctx.canvas.height * 0.5);
                }
                ctx.stroke();
                ctx.closePath();
            }
        };

        const render = () => {
            ctx.fillStyle = backgroundFill;
            ctx.globalAlpha = waveOpacity;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            drawWave(5);
            animationRef.current = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [backgroundFill, blur, waveOpacity, waveWidth, waveColors, noise, getSpeed]); // ✅ `getSpeed` is now included

    useEffect(() => {
        const cleanup = init();
        return () => {
            if (cleanup) cleanup();
        };
    }, [init]);

    useEffect(() => {
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
        );
    }, []);

    return (
        <div
            className={cn(
                "h-screen flex flex-col items-center justify-center",
                containerClassName
            )}
        >
            <canvas
                className="absolute inset-0 z-0"
                ref={canvasRef}
                id="canvas"
                style={isSafari ? { filter: `blur(${blur}px)` } : {}}
            ></canvas>
            <div className={cn("relative z-10", className)} {...props}>
                {children}
            </div>
        </div>
    );
};
