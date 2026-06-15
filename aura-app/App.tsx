import React, { useCallback } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { 
  Sora_600SemiBold,
  Sora_700Bold,
  Sora_800ExtraBold 
} from '@expo-google-fonts/sora';
import { 
  Inter_400Regular 
} from '@expo-google-fonts/inter';
import { 
  JetBrainsMono_500Medium,
  JetBrainsMono_700Bold 
} from '@expo-google-fonts/jetbrains-mono';

import AppNavigation from './src/navigation';
import { theme } from './src/theme/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora_600SemiBold,
    Sora_700Bold,
    Sora_800ExtraBold,
    Inter_400Regular,
    JetBrainsMono_500Medium,
    JetBrainsMono_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
