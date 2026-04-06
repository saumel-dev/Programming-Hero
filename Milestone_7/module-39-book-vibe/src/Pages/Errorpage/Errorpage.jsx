import React, { useEffect, useRef, useState } from 'react';

const glitchKeyframes = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');

  @keyframes glitch1 {
    0%, 100% { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
    20%       { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
    40%       { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 0); }
    60%       { clip-path: inset(10% 0 80% 0); transform: translate(3px, 0); }
    80%       { clip-path: inset(55% 0 30% 0); transform: translate(-3px, 0); }
  }
  @keyframes glitch2 {
    0%, 100% { clip-path: inset(80% 0 5% 0); transform: translate(4px, 0); }
    25%       { clip-path: inset(20% 0 60% 0); transform: translate(-4px, 0); }
    50%       { clip-path: inset(50% 0 25% 0); transform: translate(2px, 0); }
    75%       { clip-path: inset(5% 0 85% 0); transform: translate(-3px, 0); }
  }
  @keyframes scanline {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  @keyframes flicker {
    0%, 97%, 100% { opacity: 1; }
    98%            { opacity: 0.6; }
    99%            { opacity: 0.9; }
  }
  @keyframes noise {
    0%  { background-position: 0 0; }
    10% { background-position: -5% -10%; }
    20% { background-position: -15% 5%; }
    30% { background-position: 7% -25%; }
    40% { background-position: 20% 25%; }
    50% { background-position: -25% 10%; }
    60% { background-position: 15% 5%; }
    70% { background-position: 0% 15%; }
    80% { background-position: 25% 35%; }
    90% { background-position: -10% 10%; }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; } 50% { opacity: 0; }
  }
  @keyframes pulseGlow {
    0%, 100% { text-shadow: 0 0 8px #ff2d55, 0 0 20px #ff2d5566; }
    50%       { text-shadow: 0 0 20px #ff2d55, 0 0 60px #ff2d5599, 0 0 100px #ff2d5533; }
  }
  @keyframes drift {
    0%   { transform: translateY(0px) rotate(0deg); }
    33%  { transform: translateY(-12px) rotate(1deg); }
    66%  { transform: translateY(6px) rotate(-1deg); }
    100% { transform: translateY(0px) rotate(0deg); }
  }
`;

export default function Errorpage() {
  const canvasRef = useRef(null);
  const [glitching, setGlitching] = useState(false);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 45, 85, ${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  // Random glitch trigger
  useEffect(() => {
    const trigger = () => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 300 + Math.random() * 400);
    };
    const id = setInterval(trigger, 2800 + Math.random() * 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{glitchKeyframes}</style>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .ep-root {
          min-height: 100vh;
          background: #080810;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Mono', monospace;
          overflow: hidden;
          position: relative;
          animation: flicker 8s infinite;
        }

        /* noise overlay */
        .ep-root::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.04;
          pointer-events: none;
          animation: noise 0.4s steps(1) infinite;
          z-index: 0;
        }

        /* scanline */
        .ep-scanline {
          position: fixed; left: 0; right: 0; top: 0;
          height: 120px;
          background: linear-gradient(to bottom, transparent, rgba(255,45,85,0.04), transparent);
          animation: scanline 6s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        /* grid lines */
        .ep-grid {
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(255,45,85,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,45,85,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        canvas.ep-canvas {
          position: fixed; inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        /* card */
        .ep-card {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 24px;
          animation: fadeUp 0.9s cubic-bezier(.16,1,.3,1) both;
        }

        /* 404 hero */
        .ep-hero {
          position: relative;
          display: inline-block;
          animation: drift 7s ease-in-out infinite;
        }
        .ep-404 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(120px, 22vw, 220px);
          line-height: 1;
          color: #fff;
          letter-spacing: -4px;
          animation: pulseGlow 3s ease-in-out infinite;
          user-select: none;
        }
        .ep-404-ghost {
          position: absolute; inset: 0;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(120px, 22vw, 220px);
          line-height: 1;
          letter-spacing: -4px;
          user-select: none;
        }
        .ep-404-ghost.g1 {
          color: #00f0ff;
          animation: glitch1 0.18s steps(1) infinite;
          opacity: ${glitching ? 0.85 : 0};
          transition: opacity 0.05s;
        }
        .ep-404-ghost.g2 {
          color: #ff2d55;
          animation: glitch2 0.18s steps(1) infinite;
          opacity: ${glitching ? 0.85 : 0};
          transition: opacity 0.05s;
        }

        .ep-tag {
          display: inline-block;
          margin-top: 8px;
          margin-bottom: 28px;
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #ff2d55;
          border: 1px solid rgba(255,45,85,0.35);
          padding: 5px 14px;
          animation: fadeUp 0.9s 0.15s cubic-bezier(.16,1,.3,1) both;
        }

        .ep-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(22px, 4vw, 36px);
          color: #fff;
          margin-bottom: 14px;
          animation: fadeUp 0.9s 0.25s cubic-bezier(.16,1,.3,1) both;
        }

        .ep-desc {
          font-size: 13px;
          line-height: 1.8;
          color: rgba(255,255,255,0.38);
          max-width: 380px;
          margin: 0 auto 40px;
          animation: fadeUp 0.9s 0.35s cubic-bezier(.16,1,.3,1) both;
        }

        .ep-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeUp 0.9s 0.45s cubic-bezier(.16,1,.3,1) both;
        }

        .ep-btn {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 13px 28px;
          cursor: pointer;
          border: none;
          text-decoration: none;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .ep-btn:hover { transform: translateY(-2px); }
        .ep-btn:active { transform: translateY(0); }

        .ep-btn-primary {
          background: #ff2d55;
          color: #fff;
          box-shadow: 0 0 24px rgba(255,45,85,0.45);
        }
        .ep-btn-primary:hover { box-shadow: 0 0 40px rgba(255,45,85,0.7); }

        .ep-btn-ghost {
          background: transparent;
          color: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.15);
        }
        .ep-btn-ghost:hover { color: #fff; border-color: rgba(255,255,255,0.4); }

        .ep-cursor {
          display: inline-block;
          width: 10px;
          height: 1.1em;
          background: #ff2d55;
          vertical-align: middle;
          margin-left: 4px;
          animation: blink 1s step-end infinite;
        }

        .ep-code {
          margin-top: 52px;
          font-size: 10px;
          color: rgba(255,255,255,0.12);
          letter-spacing: 1px;
          animation: fadeUp 0.9s 0.55s cubic-bezier(.16,1,.3,1) both;
        }

        .ep-vline {
          position: fixed;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(255,45,85,0.25) 30%, rgba(255,45,85,0.25) 70%, transparent);
        }
        .ep-vline.left  { left: 40px; }
        .ep-vline.right { right: 40px; }
      `}</style>

      <div className="ep-root">
        <canvas ref={canvasRef} className="ep-canvas" />
        <div className="ep-grid" />
        <div className="ep-scanline" />
        <div className="ep-vline left" />
        <div className="ep-vline right" />

        <div className="ep-card">
          <div className="ep-hero">
            <div className="ep-404">404</div>
            <div className="ep-404-ghost g1">404</div>
            <div className="ep-404-ghost g2">404</div>
          </div>

          <div className="ep-tag">System Error</div>

          <h1 className="ep-title">
            Page Not Found<span className="ep-cursor" />
          </h1>

          <p className="ep-desc">
            The page you're looking for has drifted into the void.
            It may have been moved, deleted, or it never existed.
          </p>

          <div className="ep-actions">
            <a href="/" className="ep-btn ep-btn-primary">← Go Home</a>
            <button className="ep-btn ep-btn-ghost" onClick={() => window.history.back()}>
              Go Back
            </button>
          </div>

          <p className="ep-code">ERR_PAGE_NOT_FOUND · 0x00000404</p>
        </div>
      </div>
    </>
  );
}
