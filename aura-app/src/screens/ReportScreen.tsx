import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme/theme';

export default function ReportScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeInDown.delay(100).duration(500)} style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="chevron-left" size={32} color={theme.colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>RESONANCE REPORT</Text>
        <View style={{ width: 32 }} />
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(200).duration(700)} style={[styles.mainCard, styles.highlightDummy]}>
        <View style={styles.scoreCircle}>
          {/* TODO: DUMMY_DATA - Replace with dynamic resonance score from your backend */}
          <Text style={styles.scoreText}>94</Text>
          <Text style={styles.scoreLabel}>/ 100</Text>
        </View>
        <Text style={styles.cardTitle}>High Resonance</Text>
        <Text style={styles.cardDesc}>Your interaction patterns indicate a strong neural alignment with KIRU.</Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400).duration(500)}>
        <Text style={styles.sectionTitle}>DETAILED METRICS</Text>
      </Animated.View>
      
      <Animated.View entering={FadeInDown.delay(500).duration(500)} style={styles.metricsGrid}>
        {/* TODO: DUMMY_DATA - Replace all metric values with dynamic stats from your backend */}
        <View style={[styles.metricCard, styles.highlightDummy]}>
          <MaterialCommunityIcons name="message-text" size={24} color={theme.colors.primaryContainer} />
          <Text style={styles.metricValue}>1,042</Text>
          <Text style={styles.metricLabel}>Total Exchanges</Text>
        </View>

        <View style={[styles.metricCard, styles.highlightDummy]}>
          <MaterialCommunityIcons name="clock-time-four" size={24} color={theme.colors.secondaryContainer} />
          <Text style={styles.metricValue}>42h 15m</Text>
          <Text style={styles.metricLabel}>Active Time</Text>
        </View>

        <View style={[styles.metricCard, styles.highlightDummy]}>
          <MaterialCommunityIcons name="brain" size={24} color={theme.colors.tertiaryContainer} />
          <Text style={styles.metricValue}>Level 12</Text>
          <Text style={styles.metricLabel}>Neural Depth</Text>
        </View>

        <View style={[styles.metricCard, styles.highlightDummy]}>
          <MaterialCommunityIcons name="heart-pulse" size={24} color={theme.colors.secondary} />
          <Text style={styles.metricValue}>Optimistic</Text>
          <Text style={styles.metricLabel}>Avg. Sentiment</Text>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(600).duration(500)}>
        <TouchableOpacity style={styles.exportButton} activeOpacity={0.8}>
          <MaterialCommunityIcons name="export" size={20} color={theme.colors.background} />
          <Text style={styles.exportText}>EXPORT LOGS</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Cross-navigation: navigate elsewhere */}
      <Animated.View entering={FadeInDown.delay(700).duration(500)} style={styles.linksSection}>
        <Text style={styles.linksTitle}>EXPLORE</Text>
        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('MainTabs', { screen: 'Emotions' })}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="heart-pulse" size={20} color={theme.colors.secondaryContainer} />
          <Text style={styles.linkText}>Emotional Analysis</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.colors.outline} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('MainTabs', { screen: 'Timeline' })}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="timeline-clock-outline" size={20} color={theme.colors.primaryContainer} />
          <Text style={styles.linkText}>Activity Timeline</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.colors.outline} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('Arcade')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="gamepad-variant-outline" size={20} color={theme.colors.tertiaryContainer} />
          <Text style={styles.linkText}>Enter Arcade</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.colors.outline} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('MainTabs', { screen: 'Home' })}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="robot-outline" size={20} color={theme.colors.primaryContainer} />
          <Text style={styles.linkText}>Back to Dashboard</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.colors.outline} />
        </TouchableOpacity>
      </Animated.View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.marginMobile,
    paddingTop: Platform.OS === 'ios' ? 60 : 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  backButton: {
    padding: 4,
  },
  title: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.primary,
  },
  mainCard: {
    padding: 24,
    borderRadius: theme.radii.lg,
    backgroundColor: 'rgba(10, 15, 30, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(0, 242, 255, 0.2)',
    alignItems: 'center',
    marginBottom: 32,
  },
  highlightDummy: {
    borderStyle: 'dashed',
    borderColor: theme.colors.secondaryContainer,
  },
  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: theme.colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: theme.colors.primaryContainer,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  scoreText: {
    ...theme.typography.displayLg,
    color: theme.colors.primaryContainer,
    marginBottom: -8,
  },
  scoreLabel: {
    ...theme.typography.labelCaps,
    color: theme.colors.onSurfaceVariant,
  },
  cardTitle: {
    ...theme.typography.titleMd,
    color: theme.colors.onBackground,
    marginBottom: 8,
  },
  cardDesc: {
    ...theme.typography.bodySm,
    color: theme.colors.onSurfaceVariant,
    textAlign: 'center',
  },
  sectionTitle: {
    ...theme.typography.labelCaps,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 16,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  metricCard: {
    width: '47%',
    padding: 16,
    borderRadius: theme.radii.md,
    backgroundColor: theme.colors.surfaceBright,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  metricValue: {
    ...theme.typography.dataNum,
    color: theme.colors.onBackground,
    marginTop: 12,
    marginBottom: 4,
  },
  metricLabel: {
    ...theme.typography.labelCaps,
    fontSize: 10,
    color: theme.colors.onSurfaceVariant,
    textAlign: 'center',
  },
  exportButton: {
    backgroundColor: theme.colors.primaryContainer,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: theme.radii.full,
    gap: 8,
    marginBottom: 32,
  },
  exportText: {
    ...theme.typography.labelCaps,
    color: theme.colors.background,
  },
  linksSection: {
    gap: 0,
  },
  linksTitle: {
    ...theme.typography.labelCaps,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 12,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
    gap: 12,
  },
  linkText: {
    ...theme.typography.bodySm,
    color: theme.colors.onBackground,
    flex: 1,
  },
});
