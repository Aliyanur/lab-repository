import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ route, navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>User ID: {route?.params?.userId ?? 'N/A'}</Text>

      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}