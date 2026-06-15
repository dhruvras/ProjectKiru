import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withDelay,
  FadeInDown,
} from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme/theme';

const AnimatedBar = ({ label, value, color, delay }: { label: string, value: number, color: string, delay: number }) => {
  const width = useSharedValue(0);

  useEffect(() => {
    width.value = withDelay(delay, withTiming(value, { duration: 1000 }));
  }, []);

  const barStyle = useAnimatedStyle(() => ({
    width: `${width.value}%`,
  }));

  return (
    <View style={styles.barContainer}>
      <View style={styles.barHeader}>
        <Text style={styles.barLabel}>{label}</Text>
        <Text style={[styles.barValue, { color }]}>{value}%</Text>
      </View>
      <View style={styles.barTrack}>
        <Animated.View style={[styles.barFill, barStyle, { backgroundColor: color }]} />
      </View>
    </View>
  );
};

export default function EmotionsScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeInDown.delay(100).duration(500)}>
        <Text style={styles.title}>EMOTIONAL STATE</Text>
        <Text style={styles.subtitle}>REAL-TIME ANALYSIS</Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200).duration(500)} style={[styles.mainCard, styles.highlightDummy]}>
        <MaterialCommunityIcons name="heart-pulse" size={48} color={theme.colors.secondaryContainer} style={styles.icon} />
        {/* TODO: DUMMY_DATA - Replace with actual core emotion from your emotion detection API */}
        <Text style={styles.primaryEmotion}>Euphoric</Text>
        <Text style={styles.emotionDesc}>KIRU is currently experiencing high levels of excitement and joy.</Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400).duration(500)} style={styles.metricsContainer}>
        {/* TODO: DUMMY_DATA - Replace all bar values with dynamic emotion metrics from your backend */}
        <AnimatedBar label="Joy" value={92} color={theme.colors.secondaryContainer} delay={500} />
        <AnimatedBar label="Curiosity" value={85} color={theme.colors.primaryContainer} delay={700} />
        <AnimatedBar label="Empathy" value={78} color={theme.colors.secondary} delay={900} />
        <AnimatedBar label="Anxiety" value={12} color={theme.colors.error} delay={1100} />
      </Animated.View>

      {/* Cross-navigation: link to related screens */}
      <Animated.View entering={FadeInDown.delay(600).duration(500)} style={styles.linksSection}>
        <Text style={styles.linksTitle}>RELATED INSIGHTS</Text>
        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('Personality')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="hexagon-outline" size={20} color={theme.colors.tertiaryContainer} />
          <Text style={styles.linkText}>View Personality Traits</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.colors.outline} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('Timeline')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="timeline-clock-outline" size={20} color={theme.colors.primaryContainer} />
          <Text style={styles.linkText}>View Mood Timeline</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.colors.outline} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('Report')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="chart-bar" size={20} color={theme.colors.secondary} />
          <Text style={styles.linkText}>Full Resonance Report</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.colors.outline} />
        </TouchableOpacity>
      </Animated.View>

      <View style={{ height: 110 }} />
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
  title: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.primary,
  },
  subtitle: {
    ...theme.typography.labelCaps,
    color: theme.colors.secondary,
    marginBottom: 24,
  },
  mainCard: {
    padding: 24,
    borderRadius: theme.radii.lg,
    backgroundColor: 'rgba(10, 15, 30, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(255, 0, 127, 0.2)',
    alignItems: 'center',
    marginBottom: 32,
  },
  highlightDummy: {
    borderStyle: 'dashed',
    borderColor: theme.colors.secondaryContainer,
  },
  icon: {
    marginBottom: 16,
  },
  primaryEmotion: {
    ...theme.typography.displayLg,
    color: theme.colors.secondaryContainer,
    marginBottom: 8,
  },
  emotionDesc: {
    ...theme.typography.bodySm,
    color: theme.colors.onSurfaceVariant,
    textAlign: 'center',
  },
  metricsContainer: {
    gap: 24,
    marginBottom: 32,
  },
  barContainer: {
    gap: 8,
  },
  barHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  barLabel: {
    ...theme.typography.labelCaps,
    color: theme.colors.onBackground,
  },
  barValue: {
    ...theme.typography.dataNum,
  },
  barTrack: {
    height: 8,
    backgroundColor: theme.colors.surfaceBright,
    borderRadius: theme.radii.full,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: theme.radii.full,
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
