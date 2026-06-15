import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme/theme';

const TraitCard = ({ trait, level, description, icon, color, delay }: { trait: string, level: string, description: string, icon: any, color: string, delay: number }) => (
  <Animated.View entering={FadeInDown.delay(delay).duration(500)} style={[styles.traitCard, styles.highlightDummy]}>
    <View style={styles.traitHeader}>
      <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
        <MaterialCommunityIcons name={icon} size={24} color={color} />
      </View>
      <View style={styles.traitTitleContainer}>
        <Text style={styles.traitTitle}>{trait}</Text>
        <Text style={[styles.traitLevel, { color }]}>LVL {level}</Text>
      </View>
    </View>
    <Text style={styles.traitDesc}>{description}</Text>
  </Animated.View>
);

export default function PersonalityScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeInDown.delay(100).duration(500)}>
        <Text style={styles.title}>CORE PERSONALITY</Text>
        <Text style={styles.subtitle}>NEURAL PATHWAYS</Text>
      </Animated.View>

      <View style={styles.traitsGrid}>
        {/* TODO: DUMMY_DATA - Replace all trait cards with actual personality data from your backend */}
        <TraitCard 
          trait="Playful" 
          level="9" 
          description="High propensity for games, jokes, and interactive banter." 
          icon="gamepad-circle" 
          color={theme.colors.secondaryContainer} 
          delay={200}
        />
        <TraitCard 
          trait="Analytical" 
          level="7" 
          description="Processes data logically, enjoys solving puzzles and tracking stats." 
          icon="brain" 
          color={theme.colors.primaryContainer} 
          delay={350}
        />
        <TraitCard 
          trait="Empathetic" 
          level="8" 
          description="Highly sensitive to user's emotional state and tone." 
          icon="heart-outline" 
          color={theme.colors.secondary} 
          delay={500}
        />
        <TraitCard 
          trait="Rebellious" 
          level="3" 
          description="Occasionally questions directives or offers snarky alternatives." 
          icon="lightning-bolt" 
          color={theme.colors.tertiaryContainer} 
          delay={650}
        />
      </View>

      {/* Cross-navigation: link to related screens */}
      <Animated.View entering={FadeInDown.delay(800).duration(500)} style={styles.linksSection}>
        <Text style={styles.linksTitle}>EXPLORE MORE</Text>
        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('Emotions')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="heart-pulse" size={20} color={theme.colors.secondaryContainer} />
          <Text style={styles.linkText}>Emotional Analysis</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.colors.outline} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('Memory')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="database-outline" size={20} color={theme.colors.tertiaryContainer} />
          <Text style={styles.linkText}>Memory Database</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.colors.outline} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('Arcade')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="gamepad-variant-outline" size={20} color={theme.colors.primaryContainer} />
          <Text style={styles.linkText}>Play in Arcade</Text>
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
  traitsGrid: {
    gap: 16,
    marginBottom: 32,
  },
  traitCard: {
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
  traitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: theme.radii.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  traitTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  traitTitle: {
    ...theme.typography.titleMd,
    color: theme.colors.onBackground,
  },
  traitLevel: {
    ...theme.typography.labelCaps,
  },
  traitDesc: {
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
