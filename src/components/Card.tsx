import React from 'react';
import { View, StyleSheet } from 'react-native';
export default function Card({children}:{children:React.ReactNode}){
  return <View style={styles.card}>{children}</View>;
}
const styles = StyleSheet.create({
  card:{ backgroundColor:'#121212', borderColor:'#262626', borderWidth:1, borderRadius:16, padding:16 }
});
