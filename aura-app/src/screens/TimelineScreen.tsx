import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import Animated, { FadeInDown, FadeInLeft } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme/theme';

const TimelineEvent = ({ time, title, description, icon, isLast, delay }: { time: string, title: string, description: string, icon: any, isLast?: boolean, delay: number }) => (
  <Animated.View entering={FadeInLeft.delay(delay).duration(500)} style={styles.eventContainer}>
    {/* Left Column (Time & Line) */}
    <View style={styles.leftCol}>
      <Text style={styles.eventTime}>{time}</Text>
      <View style={styles.iconNode}>
        <MaterialCommunityIcons name={icon} size={16} color={theme.colors.background} />
      </View>
      {!isLast && <View style={styles.connectingLine} />}
    </View>

    {/* Right Column (Card) */}
    <View style={styles.rightCol}>
      <View style={[styles.eventCard, styles.highlightDummy]}>
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.eventDesc}>{description}</Text>
      </View>
    </View>
  </Animated.View>
);

export default function TimelineScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeInDown.delay(100).duration(500)}>
        <Text style={styles.title}>ACTIVITY TIMELINE</Text>
        <Text style={styles.subtitle}>RECENT LOGS</Text>
      </Animated.View>

      <View style={styles.timelineList}>
        {/* TODO: DUMMY_DATA - Replace all timeline events with actual activity data from your backend */}
        <TimelineEvent 
          time="10:42 AM" 
          title="Morning Greeting" 
          description="KIRU initiated sequence: 'Good morning! Ready to tackle the day?'" 
          icon="white-balance-sunny" 
          delay={200}
        />
        <TimelineEvent 
          time="11:15 AM" 
          title="Mood Shift Detected" 
          description="User audio analysis showed signs of stress. Played calming lo-fi track." 
          icon="waveform" 
          delay={400}
        />
        <TimelineEvent 
          time="01:30 PM" 
          title="Arcade Session" 
          description="Completed 3 rounds of 'Neon Reflex'. User score improved by 12%." 
          icon="gamepad" 
          delay={600}
        />
        <TimelineEvent 
          time="03:00 PM" 
          title="Memory Stored" 
          description="Saved new user preference: 'Prefers dark ambient for focus sessions.'" 
          icon="database" 
          delay={800}
        />
        <TimelineEvent 
          time="05:45 PM" 
          title="System Sync" 
          description="Synchronized memories with cloud server. No anomalies detected." 
          icon="cloud-sync" 
          isLast={true}
          delay={1000}
        />
      </View>

      {/* Cross-navigation: link to related screens */}
      <Animated.View entering={FadeInDown.delay(1200).duration(500)} style={styles.linksSection}>
        <Text style={styles.linksTitle}>QUICK LINKS</Text>
        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('Emotions')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="heart-pulse" size={20} color={theme.colors.secondaryContainer} />
          <Text style={styles.linkText}>Current Emotions</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.colors.outline} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('Memory')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="database-outline" size={20} color={theme.colors.tertiaryContainer} />
          <Text style={styles.linkText}>Stored Memories</Text>
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
    color: theme.colors.primaryContainer,
    marginBottom: 24,
  },
  timelineList: {
    marginTop: 8,
    marginBottom: 32,
  },
  eventContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  leftCol: {
    width: 80,
    alignItems: 'center',
    marginRight: 16,
  },
  eventTime: {
    ...theme.typography.labelCaps,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 8,
  },
  iconNode: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  connectingLine: {
    position: 'absolute',
    top: 40,
    bottom: -40,
    width: 2,
    backgroundColor: 'rgba(0, 242, 255, 0.15)',
    zIndex: 1,
  },
  rightCol: {
    flex: 1,
  },
  eventCard: {
    padding: 16,
    borderRadius: theme.radii.lg,
    backgroundColor: 'rgba(10, 15, 30, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(132, 148, 149, 0.15)',
  },
  highlightDummy: {
    borderStyle: 'dashed',
    borderColor: theme.colors.secondaryContainer,
  },
  eventTitle: {
    ...theme.typography.titleMd,
    color: theme.colors.onBackground,
    marginBottom: 4,
  },
  eventDesc: {
    ...theme.typography.bodySm,
    color: theme.colors.onSurfaceVariant,
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
