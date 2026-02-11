"use client";

import { useRef, useEffect } from "react";
import { MotionValue, useTransform } from "framer-motion";

interface ZondaScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames: number;
    imageFolderPath: string;
}

export default function ZondaScrollCanvas({
    scrollYProgress,
    totalFrames,
    imageFolderPath,
}: ZondaScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const frameIndexRef = useRef(0);

    // Map scroll progress to frame index
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);

    // Preload all images
    useEffect(() => {
        const images: HTMLImageElement[] = [];

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            // Format: ezgif-frame-001.jpg to ezgif-frame-181.jpg
            const frameNumber = i.toString().padStart(3, "0");
            img.src = `${imageFolderPath}/ezgif-frame-${frameNumber}.jpg`;
            images.push(img);
        }

        imagesRef.current = images;
    }, [totalFrames, imageFolderPath]);

    // Draw frame on canvas based on scroll
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const render = () => {
            const currentFrameIndex = Math.min(
                Math.floor(frameIndex.get()),
                totalFrames - 1
            );

            if (frameIndexRef.current !== currentFrameIndex) {
                frameIndexRef.current = currentFrameIndex;

                const img = imagesRef.current[currentFrameIndex];

                if (img && img.complete) {
                    // Set canvas size with device pixel ratio for sharp rendering
                    const dpr = window.devicePixelRatio || 1;
                    const { width, height } = canvas.getBoundingClientRect();

                    canvas.width = width * dpr;
                    canvas.height = height * dpr;

                    ctx.scale(dpr, dpr);
                    ctx.clearRect(0, 0, width, height);

                    // Calculate aspect ratio for object-fit: contain
                    const imgRatio = img.width / img.height;
                    const canvasRatio = width / height;

                    let drawWidth = width;
                    let drawHeight = height;
                    let offsetX = 0;
                    let offsetY = 0;

                    if (imgRatio > canvasRatio) {
                        // Image is wider
                        drawHeight = width / imgRatio;
                        offsetY = (height - drawHeight) / 2;
                    } else {
                        // Image is taller
                        drawWidth = height * imgRatio;
                        offsetX = (width - drawWidth) / 2;
                    }

                    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                }
            }
        };

        const unsubscribe = frameIndex.on("change", render);
        render(); // Initial render

        return () => {
            unsubscribe();
        };
    }, [frameIndex, totalFrames]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const currentFrameIndex = Math.min(
                Math.floor(frameIndex.get()),
                totalFrames - 1
            );

            const img = imagesRef.current[currentFrameIndex];
            if (!img || !img.complete) return;

            const dpr = window.devicePixelRatio || 1;
            const { width, height } = canvas.getBoundingClientRect();

            canvas.width = width * dpr;
            canvas.height = height * dpr;

            ctx.scale(dpr, dpr);
            ctx.clearRect(0, 0, width, height);

            const imgRatio = img.width / img.height;
            const canvasRatio = width / height;

            let drawWidth = width;
            let drawHeight = height;
            let offsetX = 0;
            let offsetY = 0;

            if (imgRatio > canvasRatio) {
                drawHeight = width / imgRatio;
                offsetY = (height - drawHeight) / 2;
            } else {
                drawWidth = height * imgRatio;
                offsetX = (width - drawWidth) / 2;
            }

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [frameIndex, totalFrames]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 0 }}
        />
    );
}
