import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

interface AdaptiveLayoutProps {
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

export function AdaptiveLayout({
  header,
  content,
  footer,
}: AdaptiveLayoutProps) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={styles.container}>
      {header && <View style={styles.header}>{header}</View>}

      <ScrollView style={styles.main}>
        {isTablet ? (
          <View style={styles.tablet}>{content}</View>
        ) : (
          <View style={styles.phone}>{content}</View>
        )}
      </ScrollView>

      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  header: {
    backgroundColor: '#0066cc',
    padding: 16,
  },

  main: { flex: 1 },

  phone: { padding: 16 },

  tablet: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },

  footer: {
    padding: 16,
    backgroundColor: '#eee',
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
  },

  title: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
});