import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '@/components/Card';

export default function Planner(){
  return (
    <ScrollView style={styles.container} contentContainerStyle={{padding:16, gap:12}}>
      <Card><Text style={styles.title}>Today</Text><Text style={styles.muted}>Timeline: Sleep · Meals · Movement · Prompts</Text></Card>
      <Card><Text style={styles.title}>Pre-Shift</Text><Text style={styles.muted}>Nap 30m · Hydrate 500ml · Protein snack</Text></Card>
      <Card><Text style={styles.title}>Post-Shift</Text><Text style={styles.muted}>Blue-light block · Sleep window 08:30–12:30</Text></Card>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#0B0B0B' },
  title:{ color:'#fff', fontSize:18, fontWeight:'600' },
  muted:{ color:'#bdbdbd' },
});
