import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

interface GridLayoutProps {
  children: React.ReactNode;
  columns?: number;
  spacing?: number;
}

export function GridLayout({
  children,
  columns = 2,
  spacing = 12,
}: GridLayoutProps) {
  const { width } = useWindowDimensions();

  // Calculate width of each item
  const itemWidth = (width - spacing * (columns + 1)) / columns;

  const items = Array.isArray(children) ? children : [children];
  const rows: React.ReactNode[][] = [];

  for (let i = 0; i < items.length; i += columns) {
    rows.push(items.slice(i, i + columns));
  }

  return (
    <View style={[styles.container, { padding: spacing }]}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={[styles.row, { marginBottom: spacing }]}>
          {row.map((item, colIndex) => (
            <View
              key={colIndex}
              style={{
                width: itemWidth,
                marginRight: colIndex < columns - 1 ? spacing : 0,
              }}
            >
              {item}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

interface CardProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function Card({ title, subtitle, children }: CardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100vh', // important for web
    backgroundColor: '#f9f9f9', // temporary background for visibility
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap', // allows wrapping on web
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)', // visible on web
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },

  cardSubtitle: {
    fontSize: 13,
    color: '#666',
  },
});