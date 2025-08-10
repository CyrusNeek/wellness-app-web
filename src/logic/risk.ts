import { useMemo } from 'react';
import type { Metrics } from './mock';
export function useRisk(metrics: Metrics){
  const readiness = Math.max(0, Math.min(100, 100 - metrics.vascularLoad - (metrics.ectopicDetected ? 10 : 0)));
  const band = readiness < 40 ? 'low' : readiness < 70 ? 'moderate' : 'high';
  const peakWindow = '14:00–17:00';
  return useMemo(()=>({ readiness, band, peakWindow }), [readiness, band, peakWindow]);
}
