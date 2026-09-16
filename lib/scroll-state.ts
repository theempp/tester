export const sceneState = { progress: 0, exit: 0, ready: false };
export const clamp = (x:number, a=0,b=1)=>Math.min(b,Math.max(a,x));
export const range = (p:number,a:number,b:number)=>clamp((p-a)/(b-a));
export const smooth = (x:number)=>x*x*(3-2*x);
export function hours(p:number) { return p<.44?0:p<.76?6*range(p,.44,.76):6+42*range(p,.76,1); }
export function clockText(p:number) {
 if(p<.24){const s=Math.floor(760*range(p,0,.24));return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;}
 return `${String(Math.floor(hours(p))).padStart(2,'0')}h`;
}
export const beats = [
 [0,.04,'Your coffee was roasted. You just don’t know when.'],
 [.04,.10,'This one started when you did.'],
 [.10,.15,'First crack. Nine minutes, fourteen seconds.'],
 [.15,.20,'The part that decides how it tastes.'],
 [.20,.24,'Twelve forty. Done.'],
 [.24,.30,'Same clock. It just keeps going.'],
 [.30,.38,'It goes straight into the bag.'],
 [.38,.44,'Sealed the same day.'],
 [.44,.52,''],
 [.52,.68,'Roasted to order. Printed, not implied.'],
 [.68,.76,'Then it leaves.'],
 [.76,.88,'48 hours.'],
 [.88,1.01,'On your step.'],
] as const;
// Piecewise mapping holds the curtain while accelerating the first-crack passage.
export function filmOneTime(p:number,phone=false){
 const knots=phone?[[0,0],[.10,2.5],[.15,6.4],[.18,7.5],[.24,10]]:[[0,0],[.10,2.5],[.15,6.4],[.20,7.5],[.24,10]];
 for(let i=1;i<knots.length;i++){if(p<=knots[i][0])return knots[i-1][1]+range(p,knots[i-1][0],knots[i][0])*(knots[i][1]-knots[i-1][1]);}return 10;
}
