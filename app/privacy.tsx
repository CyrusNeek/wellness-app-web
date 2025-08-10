import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import Card from '@/components/Card';

export default function Privacy(){
  const [shareAnon, setShareAnon] = useState(false);
  const [watchPrompts, setWatchPrompts] = useState(true);
  const [bedtime, setBedtime] = useState(true);
  return (
    <ScrollView style={styles.container} contentContainerStyle={{padding:16, gap:12}}>
      <Card><Text style={styles.title}>Privacy & Settings</Text></Card>
      <Card><Row label="Share anonymized wellness counters" value={shareAnon} onChange={setShareAnon} /></Card>
      <Card><Row label="Enable micro-prompts on watch" value={watchPrompts} onChange={setWatchPrompts} /></Card>
      <Card><Row label="Allow bedtime guidance" value={bedtime} onChange={setBedtime} /></Card>
      <Card>
        <Text style={styles.muted}>What’s shared: aggregate counts only (e.g., % prompts followed). No raw health data leaves your device.</Text>
      </Card>
    </ScrollView>
  );
}

function Row({label, value, onChange}:{label:string; value:boolean; onChange:(v:boolean)=>void}){
  return (
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <Text style={{color:'#fff', fontSize:16}}>{label}</Text>
      <Switch value={value} onValueChange={onChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#0B0B0B' },
  title:{ color:'#fff', fontSize:18, fontWeight:'600' },
  muted:{ color:'#bdbdbd' },
});
