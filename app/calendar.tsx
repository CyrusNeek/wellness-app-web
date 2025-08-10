import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '@/components/Card';

export default function Calendar(){
  return (
    <ScrollView style={styles.container} contentContainerStyle={{padding:16, gap:12}}>
      <Card>
        <Text style={styles.title}>August</Text>
        <Text style={styles.muted}>Demo calendar… (integrate AirlineOps/Hospital API)</Text>
      </Card>
      <Card>
        <Text style={styles.title}>Shift Detail</Text>
        <Text style={styles.muted}>19:00–07:00 · ICU (High)</Text>
        <Text style={styles.muted}>Recommended pre-shift plan: Nap 30–45m at 16:30; light meal at 17:00; hydrate 500ml.</Text>
      </Card>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#0B0B0B' },
  title:{ color:'#fff', fontSize:18, fontWeight:'600' },
  muted:{ color:'#bdbdbd' },
});
