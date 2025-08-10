import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import Gauge from '@/components/Gauge';
import Card from '@/components/Card';
import MetricTile from '@/components/MetricTile';
import Chip from '@/components/Chip';
import { useMockMetrics } from '@/logic/mock';
import { useRisk } from '@/logic/risk';

export default function Dashboard(){
  const metrics = useMockMetrics();
  const risk = useRisk(metrics);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{padding:16, gap:12}}>
      <Card>
        <View style={styles.row}>
          <View style={{alignItems:'center', width:120}}>
            <Gauge value={risk.readiness} size={80} />
            <Text style={styles.muted}>Readiness</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.title}>Today’s Readiness</Text>
            <Text style={styles.value}>{risk.band.toUpperCase()}</Text>
            <Text style={styles.muted}>Peak window: {risk.peakWindow}</Text>
          </View>
        </View>
      </Card>

      <View style={styles.row3}>
        <MetricTile title="Vascular Load" value={metrics.vascularLoad.toFixed(0)} unit="/100" />
        <MetricTile title="Heart Rhythm" value={metrics.ectopicDetected ? 'Irregular' : 'Stable'} />
        <MetricTile title="Antioxidant" value={(metrics.antioxidantIndex||0).toFixed(0)} unit="/100" />
      </View>

      <Card>
        <Text style={styles.title}>Next Shift</Text>
        <Text style={styles.muted}>ICU Night Shift · 19:00–07:00 · Acuity: High</Text>
        <View style={{flexDirection:'row', gap:8, marginTop:8, flexWrap:'wrap'}}>
          <Chip label="Hydrate 250ml" />
          <Chip label="3-min breathing" />
          <Chip label="Protein snack 1h" />
        </View>
        <View style={{flexDirection:'row', gap:12, marginTop:12}}>
          <Link href="/planner" asChild><Pressable style={styles.btn}><Text style={styles.btnText}>Open Planner</Text></Pressable></Link>
          <Link href="/calendar" asChild><Pressable style={styles.btnAlt}><Text style={styles.btnText}>Calendar</Text></Pressable></Link>
        </View>
      </Card>

      <Card>
        <Text style={styles.title}>Privacy</Text>
        <Text style={styles.muted}>Health data remains on-device. You control what’s shared.</Text>
        <Link href="/privacy" asChild><Pressable style={[styles.btn,{marginTop:8}]}><Text style={styles.btnText}>Review Settings</Text></Pressable></Link>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#0B0B0B' },
  row:{ flexDirection:'row', alignItems:'center', gap:12 },
  row3:{ flexDirection:'row', gap:12, paddingHorizontal:16 },
  title:{ color:'#fff', fontSize:18, fontWeight:'600' },
  value:{ color:'#24D282', fontSize:16, fontWeight:'700', marginTop:4 },
  muted:{ color:'#bdbdbd' },
  btn:{ backgroundColor:'#3A82F7', paddingVertical:10, paddingHorizontal:14, borderRadius:12 },
  btnAlt:{ backgroundColor:'#202027', paddingVertical:10, paddingHorizontal:14, borderRadius:12 },
  btnText:{ color:'#fff', fontWeight:'600' }
});
