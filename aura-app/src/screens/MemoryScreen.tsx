import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme/theme';

const MemoryChip = ({ text, category }: { text: string, category: 'like' | 'fact' | 'goal' }) => {
  const getColors = () => {
    switch (category) {
      case 'like': return { border: theme.colors.secondaryContainer, bg: theme.colors.secondaryContainer + '20', icon: 'heart' as const };
      case 'fact': return { border: theme.colors.primaryContainer, bg: theme.colors.primaryContainer + '20', icon: 'information' as const };
      case 'goal': return { border: theme.colors.tertiaryContainer, bg: theme.colors.tertiaryContainer + '20', icon: 'flag' as const };
    }
  };
  
  const colors = getColors();

  return (
    <View style={[styles.memoryChip, { borderColor: colors.border, backgroundColor: colors.bg }, styles.highlightDummy]}>
      <MaterialCommunityIcons name={colors.icon} size={16} color={colors.border} style={styles.chipIcon} />
      <Text style={styles.chipText}>{text}</Text>
    </View>
  );
};

export default function MemoryScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeInDown.delay(100).duration(500)}>
        <Text style={styles.title}>LONG-TERM MEMORY</Text>
        <Text style={styles.subtitle}>USER CONTEXT DATABASE</Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200).duration(500)} style={styles.summaryCard}>
        <View style={styles.summaryRow}>
          <View style={styles.summaryStatBox}>
            {/* TODO: DUMMY_DATA - Replace memory count with actual data */}
            <Text style={styles.summaryStatNum}>42</Text>
            <Text style={styles.summaryStatLabel}>FACTS STORED</Text>
          </View>
          <View style={styles.summaryStatBox}>
            {/* TODO: DUMMY_DATA - Replace with actual uptime or last sync time */}
            <Text style={styles.summaryStatNum}>3d</Text>
            <Text style={styles.summaryStatLabel}>LAST SYNC</Text>
          </View>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(300).duration(500)} style={styles.memorySection}>
        <Text style={styles.sectionTitle}>LIKES & PREFERENCES</Text>
        <View style={styles.chipContainer}>
          {/* TODO: DUMMY_DATA - Replace with actual user preferences from your database */}
          <MemoryChip category="like" text="Cyberpunk Aesthetics" />
          <MemoryChip category="like" text="Lo-Fi Music" />
          <MemoryChip category="like" text="Late Night Coding" />
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400).duration(500)} style={styles.memorySection}>
        <Text style={styles.sectionTitle}>KNOWN FACTS</Text>
        <View style={styles.chipContainer}>
          {/* TODO: DUMMY_DATA - Replace with actual user facts from your database */}
          <MemoryChip category="fact" text="Works as a Developer" />
          <MemoryChip category="fact" text="Lives in Tokyo time zone" />
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(500).duration(500)} style={styles.memorySection}>
        <Text style={styles.sectionTitle}>ACTIVE GOALS</Text>
        <View style={styles.chipContainer}>
          {/* TODO: DUMMY_DATA - Replace with actual user goals from your database */}
          <MemoryChip category="goal" text="Finish KIRU project" />
          <MemoryChip category="goal" text="Drink more water" />
        </View>
      </Animated.View>

      {/* Cross-navigation: link to related screens */}
      <Animated.View entering={FadeInDown.delay(600).duration(500)} style={styles.linksSection}>
        <Text style={styles.linksTitle}>RELATED</Text>
        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('Personality')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="hexagon-outline" size={20} color={theme.colors.tertiaryContainer} />
          <Text style={styles.linkText}>Personality Traits</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.colors.outline} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('Timeline')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="timeline-clock-outline" size={20} color={theme.colors.primaryContainer} />
          <Text style={styles.linkText}>Activity Timeline</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.colors.outline} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('Emotions')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="heart-pulse" size={20} color={theme.colors.secondaryContainer} />
          <Text style={styles.linkText}>Emotional State</Text>
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
    color: theme.colors.tertiaryContainer,
    marginBottom: 24,
  },
  summaryCard: {
    padding: 16,
    borderRadius: theme.radii.lg,
    backgroundColor: 'rgba(10, 15, 30, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(132, 148, 149, 0.15)',
    marginBottom: 24,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 16,
  },
  summaryStatBox: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
  summaryStatNum: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.primaryContainer,
  },
  summaryStatLabel: {
    ...theme.typography.labelCaps,
    fontSize: 9,
    color: theme.colors.onSurfaceVariant,
    marginTop: 4,
  },
  memorySection: {
    marginBottom: 24,
  },
  sectionTitle: {
    ...theme.typography.labelCaps,
    color: theme.colors.onSurfaceVariant,
    marginBottom: 12,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  memoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: theme.radii.full,
    borderWidth: 1,
  },
  highlightDummy: {
    borderStyle: 'dashed',
  },
  chipIcon: {
    marginRight: 6,
  },
  chipText: {
    ...theme.typography.bodySm,
    color: theme.colors.onBackground,
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
