import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme/theme';

export default function ArcadeScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View entering={FadeInDown.delay(100).duration(500)} style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="chevron-left" size={32} color={theme.colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>KIRU ARCADE</Text>
        <View style={{ width: 32 }} />
      </Animated.View>
      
      <Animated.View entering={FadeInDown.delay(200).duration(500)}>
        <Text style={styles.subtitle}>NEURAL MINIGAMES</Text>
      </Animated.View>

      <View style={styles.gamesList}>
        {/* TODO: DUMMY_DATA - Replace with actual minigames or features from your backend */}
        <Animated.View entering={FadeInDown.delay(300).duration(500)} style={[styles.gameCard, styles.highlightDummy]}>
          <View style={styles.gameIconWrapper}>
            <MaterialCommunityIcons name="gamepad-circle" size={40} color={theme.colors.secondaryContainer} />
          </View>
          <View style={styles.gameInfo}>
            <Text style={styles.gameTitle}>Neon Reflex</Text>
            <Text style={styles.gameDesc}>Test your reaction time against KIRU's neural net.</Text>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playButtonText}>PLAY</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(450).duration(500)} style={[styles.gameCard, styles.highlightDummy]}>
          <View style={styles.gameIconWrapper}>
            <MaterialCommunityIcons name="brain" size={40} color={theme.colors.primaryContainer} />
          </View>
          <View style={styles.gameInfo}>
            <Text style={styles.gameTitle}>Memory Match</Text>
            <Text style={styles.gameDesc}>Match sequence patterns to boost sync rate.</Text>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playButtonText}>PLAY</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(600).duration(500)} style={[styles.gameCard, styles.highlightDummy]}>
          <View style={styles.gameIconWrapper}>
            <MaterialCommunityIcons name="puzzle-outline" size={40} color={theme.colors.tertiaryContainer} />
          </View>
          <View style={styles.gameInfo}>
            <Text style={styles.gameTitle}>Cipher Break</Text>
            <Text style={styles.gameDesc}>Decode encrypted messages from KIRU's subconscious.</Text>
          </View>
          <TouchableOpacity style={[styles.playButton, { backgroundColor: theme.colors.tertiaryContainer }]}>
            <Text style={styles.playButtonText}>PLAY</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      <Animated.View entering={FadeInDown.delay(750).duration(500)} style={styles.statsCard}>
        <Text style={styles.statsTitle}>YOUR HIGHSCORES</Text>
        {/* TODO: DUMMY_DATA - Replace with dynamic highscores from your database */}
        <View style={[styles.statRow, styles.highlightDummy]}>
          <Text style={styles.statLabel}>Neon Reflex</Text>
          <Text style={styles.statValue}>1,240 XP</Text>
        </View>
        <View style={[styles.statRow, styles.highlightDummy]}>
          <Text style={styles.statLabel}>Memory Match</Text>
          <Text style={styles.statValue}>890 XP</Text>
        </View>
        <View style={[styles.statRow, styles.highlightDummy]}>
          <Text style={styles.statLabel}>Cipher Break</Text>
          <Text style={styles.statValue}>560 XP</Text>
        </View>
      </Animated.View>

      {/* Cross-navigation: navigate elsewhere */}
      <Animated.View entering={FadeInDown.delay(900).duration(500)} style={styles.linksSection}>
        <Text style={styles.linksTitle}>MORE</Text>
        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('Report')}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="chart-bar" size={20} color={theme.colors.secondary} />
          <Text style={styles.linkText}>View Resonance Report</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.colors.outline} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkRow} 
          onPress={() => navigation.navigate('MainTabs', { screen: 'Personality' })}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons name="hexagon-outline" size={20} color={theme.colors.tertiaryContainer} />
          <Text style={styles.linkText}>Personality Profile</Text>
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
    marginBottom: 4,
  },
  backButton: {
    padding: 4,
  },
  title: {
    ...theme.typography.headlineLgMobile,
    color: theme.colors.primary,
  },
  subtitle: {
    ...theme.typography.labelCaps,
    color: theme.colors.tertiaryContainer,
    marginBottom: 24,
    textAlign: 'center',
  },
  gamesList: {
    gap: 16,
    marginBottom: 24,
  },
  gameCard: {
    padding: 16,
    borderRadius: theme.radii.lg,
    backgroundColor: 'rgba(10, 15, 30, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(0, 242, 255, 0.15)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  highlightDummy: {
    borderStyle: 'dashed',
    borderColor: theme.colors.secondaryContainer,
  },
  gameIconWrapper: {
    width: 56,
    height: 56,
    borderRadius: theme.radii.md,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  gameInfo: {
    flex: 1,
  },
  gameTitle: {
    ...theme.typography.titleMd,
    color: theme.colors.onBackground,
    marginBottom: 4,
  },
  gameDesc: {
    ...theme.typography.bodySm,
    color: theme.colors.onSurfaceVariant,
  },
  playButton: {
    backgroundColor: theme.colors.primaryContainer,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: theme.radii.full,
    marginLeft: 8,
  },
  playButtonText: {
    ...theme.typography.labelCaps,
    color: theme.colors.background,
  },
  statsCard: {
    padding: 20,
    borderRadius: theme.radii.lg,
    backgroundColor: theme.colors.surfaceBright,
    marginBottom: 24,
  },
  statsTitle: {
    ...theme.typography.labelCaps,
    color: theme.colors.onBackground,
    marginBottom: 16,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  statLabel: {
    ...theme.typography.bodyLg,
    color: theme.colors.onSurfaceVariant,
  },
  statValue: {
    ...theme.typography.dataNum,
    color: theme.colors.primaryContainer,
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
