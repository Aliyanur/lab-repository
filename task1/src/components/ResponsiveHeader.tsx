import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ResponsiveHeaderProps {
  title: string;
  leftAction?: {
    icon: string;
    onPress: () => void;
  };
  rightAction?: {
    icon: string;
    onPress: () => void;
  };
}

export function ResponsiveHeader({
  title,
  leftAction,
  rightAction,
}: ResponsiveHeaderProps) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions(); // ✅ removed height

  const isTablet = width >= 768;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />

      <View
        style={[
          styles.header,
          {
            paddingTop: Platform.OS === 'android' ? insets.top : 0,
            height: 56 + (Platform.OS === 'android' ? insets.top : 0),
          },
        ]}
      >
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            {leftAction && (
              <TouchableOpacity onPress={leftAction.onPress}>
                <Text style={styles.icon}>{leftAction.icon}</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.headerCenter}>
            <Text
              style={[
                styles.title,
                isTablet && { fontSize: 22 },
              ]}
            >
              {title}
            </Text>
          </View>

          <View style={styles.headerRight}>
            {rightAction && (
              <TouchableOpacity onPress={rightAction.onPress}>
                <Text style={styles.icon}>{rightAction.icon}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export function ResponsiveContainer({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const isTablet = width >= 768;

  return (
    <View style={[styles.container, { paddingTop: insets.top + 56 }]}>
      {isTablet ? (
        <View style={styles.tabletLayout}>
          <View style={styles.sidebar}>
            <Text>Navigation</Text>
          </View>
          <View style={styles.content}>{children}</View>
        </View>
      ) : (
        children
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#0066cc',
  },

  header: {
    backgroundColor: '#0066cc',
  },

  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 10,
  },

  headerLeft: { width: 50 },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerRight: { width: 50 },

  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  icon: {
    color: '#fff',
    fontSize: 20,
  },

  container: { flex: 1 },

  tabletLayout: {
    flexDirection: 'row',
    flex: 1,
  },

  sidebar: {
    width: 200,
    backgroundColor: '#eee',
  },

  content: {
    flex: 1,
  },
});