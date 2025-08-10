import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
export default function Layout(){
  return (<>
    <Stack screenOptions={{ headerStyle:{backgroundColor:'#0B0B0B'}, headerTintColor:'#fff', headerTitleStyle:{fontWeight:'600'} }}>
      <Stack.Screen name="index" options={{ title: 'Wellness' }} />
      <Stack.Screen name="calendar" options={{ title: 'Shift Calendar' }} />
      <Stack.Screen name="planner" options={{ title: 'Recovery Planner' }} />
      <Stack.Screen name="privacy" options={{ title: 'Privacy & Settings' }} />
    </Stack>
    <StatusBar style="light" />
  </>);
}
