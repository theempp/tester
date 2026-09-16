'use client';
// Magic UI smooth-cursor: spring replaced with GSAP to keep one animation engine.
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
export function SmoothCursor(){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{if(matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches)return;const el=ref.current!;const x=gsap.quickTo(el,'x',{duration:.18,ease:'power2.out'}),y=gsap.quickTo(el,'y',{duration:.18,ease:'power2.out'});const move=(e:PointerEvent)=>{el.style.visibility='visible';x(e.clientX);y(e.clientY)};window.addEventListener('pointermove',move);return()=>{window.removeEventListener('pointermove',move);x.tween.kill();y.tween.kill()}},[]);return <div ref={ref} className="smooth-cursor" aria-hidden="true"/>}
