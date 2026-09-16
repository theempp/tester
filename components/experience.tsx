'use client';
import dynamic from 'next/dynamic';
import { Component, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { beats, clamp, filmOneTime, hours, range, sceneState } from '@/lib/scroll-state';
import { Stamp, LowerPage } from './sections';
import { NoiseTexture } from './ui/noise-texture';
import { SmoothCursor } from './ui/smooth-cursor';
const BagScene=dynamic(()=>import('./bag-scene'),{ssr:false});
class SceneBoundary extends Component<{children:ReactNode;onFailure:()=>void},{failed:boolean}>{state={failed:false};static getDerivedStateFromError(){return {failed:true}}componentDidCatch(){this.props.onFailure()}render(){return this.state.failed?null:this.props.children}}
function seek(video:HTMLVideoElement|null,time:number){if(!video || video.readyState<2 || video.seeking)return;const next=Math.min(Math.round(time*24)/24,video.duration-1/24);if(Math.abs(video.currentTime-next)>1/48)video.currentTime=next;}
export default function Experience({checkoutUrl}:{checkoutUrl:string}){
 const root=useRef<HTMLDivElement>(null),runway=useRef<HTMLElement>(null),v1=useRef<HTMLVideoElement>(null),v2=useRef<HTMLVideoElement>(null),copy=useRef<HTMLHeadingElement>(null),readout=useRef<HTMLSpanElement>(null);
 const [reduced,setReduced]=useState(true),[loaded,setLoaded]=useState(false),[failed,setFailed]=useState(false),[glFailed,setGlFailed]=useState(false),[phone,setPhone]=useState(false),[date,setDate]=useState('');
 const [canvasReady,setCanvasReady]=useState(false);const onReady=useCallback(()=>setCanvasReady(true),[]);const onFailure=useCallback(()=>setGlFailed(true),[]);
 const active=loaded&&!reduced&&!failed;
 useEffect(()=>{const video=v1.current;if(!video)return;const ready=()=>{if(video.readyState>=2)setLoaded(true)};ready();video.addEventListener('loadeddata',ready);video.addEventListener('canplay',ready);return()=>{video.removeEventListener('loadeddata',ready);video.removeEventListener('canplay',ready)}},[phone,reduced]);
 useEffect(()=>{const mq=matchMedia('(prefers-reduced-motion: reduce)'),small=matchMedia('(max-width: 640px)');const sync=()=>{setReduced(mq.matches);setPhone(small.matches)};sync();mq.addEventListener('change',sync);small.addEventListener('change',sync);setDate(new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date()).replaceAll('-',' '));return()=>{mq.removeEventListener('change',sync);small.removeEventListener('change',sync)}},[]);
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  if(!active){sceneState.progress=0;sceneState.exit=0;return;}
  const el=root.current!,stage=runway.current!;
  const lenis=new Lenis({lerp:.16,smoothWheel:true});lenis.on('scroll',ScrollTrigger.update);
  const tick=(t:number)=>{lenis.raf(t*1000);const p=sceneState.progress;
   seek(v1.current,filmOneTime(p,phone));seek(v2.current,10*range(p,.24,.44));
  };gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);
  const update=(p:number)=>{
   sceneState.progress=p;el.dataset.progress=p.toFixed(5);
   const show3d=p>=.44&&canvasReady&&!glFailed;
   el.style.setProperty('--canvas-opacity',show3d?'1':'0');
   el.style.setProperty('--film1-opacity',p<.24?'1':'0');
   el.style.setProperty('--film2-opacity',p>=.24&&p<.44?'1':'0');
   el.style.setProperty('--scrim-opacity',p<.44?'1':'0');
   el.style.setProperty('--stage-white',p>=.44?'1':'0');
   el.style.setProperty('--date-opacity',p>=.56?'1':'0');
   el.style.setProperty('--hero-copy-opacity',p>=.44&&p<.52?'0':'1');
   el.dataset.part=p<.24?'1':p<.44?'2':p<.76?'3':'4';
   if(readout.current)readout.current.textContent=`${String(Math.floor(hours(p))).padStart(3,'0')}H–048H`;
   const beat=beats.find(b=>p>=b[0]&&p<b[1]);if(copy.current&&beat&&copy.current.textContent!==beat[2])copy.current.textContent=beat[2];
  };
  const st=ScrollTrigger.create({trigger:stage,start:'top top',end:'bottom bottom',scrub:true,onUpdate:s=>update(s.progress),onRefresh:s=>update(s.progress)});
  const exit=ScrollTrigger.create({trigger:stage,start:'bottom bottom',end:'bottom top',scrub:true,onUpdate:s=>{sceneState.exit=s.progress;el.style.setProperty('--exit',String(s.progress));el.dataset.released=s.progress>0?'true':'false';}});
  update(st.progress);
  const resize=()=>ScrollTrigger.refresh();window.addEventListener('resize',resize);
  return()=>{st.kill();exit.kill();gsap.ticker.remove(tick);lenis.destroy();window.removeEventListener('resize',resize)};
 },[active,phone,canvasReady,glFailed]);
 return <div ref={root} className={`experience ${active?'is-active':'is-static'}`}>
  <a className="skip-link" href="#stamp">Skip to the coffee</a>
  <div className="noise-texture" data-component="atom1-noise-texture" aria-hidden="true"><NoiseTexture frequency={.93} octaves={3}/></div><SmoothCursor/>
  <nav className="nav"><a href="#top" aria-label="Hour Zero home" className="wordmark">HOUR ZERO<span className="nav-dot">®</span></a><span className="nav-meta">CONNECTICUT / ROAST TO ORDER</span><a className="nav-buy" href="#buy">BUY <span aria-hidden="true">↗</span></a></nav>
  {['tl','tr','bl','br'].map(p=><span key={p} className={`registration ${p}`} aria-hidden="true">+</span>)}
  <div className="progress-readout"><span ref={readout}>000H–048H</span><span className="progress-caption">TIME IS THE INGREDIENT.</span></div>
  <main id="top">
   <div className="media-layers" aria-hidden="true">
    <div className="stage-white"/>
    <video ref={v1} className="film film-one" muted playsInline preload="auto" poster="/posters/roast-0.png" onLoadedData={()=>setLoaded(true)} onError={()=>setFailed(true)}><source media="(max-width: 640px)" src="/media/hero-roast-film-720.mp4" type="video/mp4"/><source src="/media/hero-roast-film.mp4" type="video/mp4"/></video>
    <video ref={v2} className="film film-two" muted playsInline preload="auto" poster="/posters/film-lock.jpg" onError={()=>setFailed(true)}><source media="(max-width: 640px)" src="/media/part2-bag-720.mp4" type="video/mp4"/><source src="/media/part2-bag.mp4" type="video/mp4"/></video>
    {!reduced&&!failed&&!glFailed&&<div className="webgl-layer"><SceneBoundary onFailure={onFailure}><BagScene date={date} onReady={onReady} onFailure={onFailure}/></SceneBoundary></div>}
    <div className="type-scrim"/>
   </div>
   <section ref={runway} className="hero-runway" aria-label="From roast to doorstep">
    <div className="hero-type">
     <div className="hero-eyebrow">SMALL BATCH. ZERO WAITING AROUND.</div>
          <div className="hero-bottom"><h1 ref={copy}>Your coffee was roasted. You just don’t know when.</h1><span className="scroll-cue">SCROLL TO START THE CLOCK <span>↓</span></span></div>
    </div>
    {active&&(glFailed||!canvasReady)&&<div className="scene-fallback"><img src="/posters/bag-static.png" alt="HOUR ZERO sealed coffee pouch"/><span>3D unavailable — static bag view</span></div>}
   </section>
   {!active&&<div className="still-story" aria-label="The roast, without motion">{[0,2,4,6,8,10].map((t,i)=><figure key={t}><img src={`/posters/roast-${t}.png`} alt={['Roaster outdoors pouring beans','Camera approaches the falling beans','The roast develops','Inside the falling curtain','Dark roasted beans','The finished roast'][i]}/><figcaption><span>{['00:00','02:32','05:04','07:36','10:08','12:40'][i]}</span>{beats[Math.min(i,4)][2]}</figcaption></figure>)}<figure className="static-bag"><img src="/posters/bag-static.png" alt="Sealed HOUR ZERO pouch"/><figcaption><span>12:40 ─ 00h</span>Same clock. It just keeps going.</figcaption></figure>{failed&&<p className="asset-warning">Media unavailable: hero-roast-film.mp4</p>}</div>}
   <div className="page-content"><div id="stamp"><Stamp date={date}/></div><LowerPage checkoutUrl={checkoutUrl} date={date}/></div>
  </main>
  <footer><a href="#top">HOUR ZERO</a><span>CONNECTICUT. SMALL BATCH. ROAST TO ORDER.</span><a href="#buy">BUY A BAG ↗</a></footer>
 </div>
}
