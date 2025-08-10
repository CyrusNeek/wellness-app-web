import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
export default function Chip({label, onPress}:{label:string; onPress?:()=>void}){
  return (<Pressable onPress={onPress} style={styles.chip}><Text style={styles.txt}>{label}</Text></Pressable>);
}
const styles = StyleSheet.create({ chip:{ backgroundColor:'#3A82F7', borderRadius:12, paddingVertical:10, paddingHorizontal:12 }, txt:{ color:'#fff', fontWeight:'600', fontSize:14 } });
