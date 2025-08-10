import { useEffect, useState } from 'react';
export type Metrics = { vascularLoad: number; ectopicDetected: boolean; antioxidantIndex?: number; };
export function useMockMetrics(): Metrics {
  const [m, setM] = useState<Metrics>({ vascularLoad: 42, ectopicDetected:false, antioxidantIndex:65 });
  useEffect(()=>{
    const t = setInterval(()=>{
      setM(prev=>{
        const vl = Math.max(10, Math.min(95, prev.vascularLoad + (Math.random()*10-5)));
        const ectopic = Math.random() < 0.05;
        const ai = Math.max(30, Math.min(90, (prev.antioxidantIndex||60) + (Math.random()*6-3)));
        return { vascularLoad: vl, ectopicDetected: ectopic, antioxidantIndex: ai };
      });
    }, 5000);
    return ()=>clearInterval(t);
  },[]);
  return m;
}
