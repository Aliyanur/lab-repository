import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
  } from 'react-native';
  
  import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import type { RootStackParamList } from '../navigation/types';
  
  type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  };
  
  export default function HomeScreen({ navigation }: HomeScreenProps) {
    const userName = 'John Doe';
    const unreadNotifications = 5;
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>{userName}</Text>
  
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() =>
              navigation.navigate('Profile', { userId: '123' })
            }
          >
            <Text style={styles.primaryButtonText}>View Profile</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <Text style={styles.secondaryButtonText}>Settings</Text>
          </TouchableOpacity>
  
          {unreadNotifications > 0 && (
            <Text style={styles.notificationText}>
              You have {unreadNotifications} new notifications
            </Text>
          )}
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    content: {
      flex: 1,
      padding: 20,
    },
    welcomeText: {
      fontSize: 16,
      color: '#666',
    },
    userName: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    primaryButton: {
      backgroundColor: '#0066cc',
      padding: 16,
      borderRadius: 8,
      marginBottom: 12,
    },
    primaryButtonText: {
      color: '#fff',
      textAlign: 'center',
    },
    secondaryButton: {
      borderWidth: 1,
      borderColor: '#0066cc',
      padding: 16,
      borderRadius: 8,
    },
    secondaryButtonText: {
      color: '#0066cc',
      textAlign: 'center',
    },
    notificationText: {
      marginTop: 20,
      color: '#856404',
    },
  });