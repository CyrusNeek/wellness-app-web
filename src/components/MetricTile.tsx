import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Card from './Card';
export default function MetricTile({title, value, unit}:{title:string; value:string; unit?:string}){
  return (<Card><Text style={styles.title}>{title}</Text><Text style={styles.value}>{value}{unit?unit:''}</Text></Card>);
}
const styles = StyleSheet.create({ title:{ color:'#fff', fontSize:14 }, value:{ color:'#fff', fontSize:16, fontWeight:'700', marginTop:6 } });
