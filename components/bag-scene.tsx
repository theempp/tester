'use client';
import { Suspense, useLayoutEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { sceneState, range, smooth } from '@/lib/scroll-state';
const dummy=new THREE.Object3D();
function World({date,onReady}:{date:string;onReady:()=>void}){
 const gltf=useGLTF('/models/hour-zero-bag.glb','/draco/');
 const object=useMemo(()=>gltf.scene.clone(true),[gltf.scene]);
 const group=useRef<THREE.Group>(null);
 const {gl,scene,camera,size}=useThree();
 const bean=object.getObjectByName('CoffeeBean') as THREE.Mesh|undefined;
 const seam=object.getObjectByName('BottomSeam');
 const authored=useMemo(()=>{const items:{mesh:THREE.Mesh;original:THREE.Material|THREE.Material[];clean:THREE.Material|THREE.Material[]}[]=[];object.traverse(o=>{if(o instanceof THREE.Mesh){const arr=Array.isArray(o.material)?o.material:[o.material];arr.forEach(m=>{if(m.name==='FilmLockProjection')m.toneMapped=false});const base=arr.find(m=>m.name!=='FilmLockProjection')!;items.push({mesh:o,original:o.material,clean:Array.isArray(o.material)?arr.map(m=>m.name==='FilmLockProjection'?base:m):o.material});}});return items},[object]);
 const printNames=['Wordmark','LabelRule','SpecOrigin','SpecProcess','SpecVariety','DateCaption'];
 useLayoutEffect(()=>{if(bean)bean.visible=false;object.traverse(o=>{if(o instanceof THREE.Mesh){o.frustumCulled=false;}});gl.compileAsync(scene,camera).then(onReady);},[bean,object,gl,scene,camera,onReady]);
 useFrame(()=>{
  const cam=camera as THREE.OrthographicCamera;const h=3/.567;cam.left=-h*(size.width/size.height)/2;cam.right=h*(size.width/size.height)/2;cam.top=h/2;cam.bottom=-h/2;cam.zoom=1;cam.position.set(0,2.008,10);cam.rotation.set(0,0,0);cam.updateProjectionMatrix();
  const p=sceneState.progress;const turn=range(p,.52,.68);const left=smooth(range(p,.68,.76));const rip=range(p,.76,.88);const release=sceneState.exit;
  for(const item of authored){item.mesh.material=turn<.25?item.original:item.clean;if(printNames.includes(item.mesh.name)||item.mesh.name==='FlushValve')item.mesh.visible=turn>=.25;}
  if(group.current){group.current.position.x=-(h*size.width/size.height)*.245*left;group.current.position.y=release*h;group.current.rotation.y=-Math.PI*2*(1-smooth(turn));}
  if(seam){seam.rotation.x=rip*1.4;seam.position.z=rip*.14;}
 });
 return <>
  <ambientLight intensity={1.4}/><directionalLight position={[-3,4,6]} intensity={1.7}/><directionalLight position={[3,1,4]} intensity={.55}/>
  <group ref={group} position={[0,0,0]}><primitive object={object}/><Html className="bag-live-date" position={[.15,1.185,.272]} transform scale={.032} style={{pointerEvents:'none',whiteSpace:'nowrap',color:'#555448',fontSize:12}} occlude>{date}</Html></group>
 </>;
}
export default function BagScene({date,onReady,onFailure}:{date:string;onReady:()=>void;onFailure:()=>void}){
 return <Canvas orthographic camera={{position:[0,2.008,10],zoom:1,near:.1,far:50}} gl={{alpha:true,antialias:true,powerPreference:'high-performance'}} dpr={[1,1.5]} onCreated={({gl,camera,size})=>{
  const c=camera as THREE.OrthographicCamera;const height=3/.567;const width=height*size.width/size.height;c.left=-width/2;c.right=width/2;c.top=height/2;c.bottom=-height/2;c.zoom=1;c.updateProjectionMatrix();gl.setClearColor(0x000000,0);gl.domElement.addEventListener('webglcontextlost',onFailure);
 }} resize={{scroll:false}}><Suspense fallback={null}><World date={date} onReady={onReady}/></Suspense></Canvas>
}
