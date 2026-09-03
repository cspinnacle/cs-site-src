"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  accent: boolean;
}

interface Pulse {
  from: number;
  to: number;
  t: number;
}

const NODE_DENSITY = 0.00009;
const MAX_NODES = 70;
const MIN_NODES = 22;
const LINK_DIST = 150;

const LINK_LIGHT = "22, 35, 61";
const LINK_DARK = "220, 225, 235";
const KEYWORD = "47, 166, 166";
const STRING = "227, 165, 72";

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const linkColor = document.documentElement.getAttribute("data-theme") === "dark" ? LINK_DARK : LINK_LIGHT;
    const linkOpacity = document.documentElement.getAttribute("data-theme") === "dark" ? 0.1 : 0.16;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let raf = 0;

    function seed() {
      const count = Math.round(
        Math.max(MIN_NODES, Math.min(MAX_NODES, width * height * NODE_DENSITY))
      );
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() < 0.15 ? 2.6 : 1.5,
        accent: Math.random() < 0.15,
      }));
      pulses = [];
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function frame() {
      ctx!.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            ctx!.strokeStyle = `rgba(${linkColor}, ${(1 - dist / LINK_DIST) * linkOpacity})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      if (!reduced && nodes.length > 1 && Math.random() < 0.025) {
        const from = Math.floor(Math.random() * nodes.length);
        const to = Math.floor(Math.random() * nodes.length);
        if (to !== from && Math.hypot(nodes[from].x - nodes[to].x, nodes[from].y - nodes[to].y) < LINK_DIST) {
          pulses.push({ from, to, t: 0 });
        }
      }

      pulses = pulses.filter((p) => p.t <= 1);
      for (const p of pulses) {
        const a = nodes[p.from];
        const b = nodes[p.to];
        if (!a || !b) continue;
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        ctx!.fillStyle = `rgba(${STRING}, 0.85)`;
        ctx!.beginPath();
        ctx!.arc(x, y, 2, 0, Math.PI * 2);
        ctx!.fill();
        p.t += 0.025;
      }

      for (const n of nodes) {
        ctx!.fillStyle = n.accent ? `rgba(${STRING}, 0.5)` : `rgba(${KEYWORD}, 0.4)`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (!reduced) raf = requestAnimationFrame(frame);
    }

    resize();
    frame();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}
