export const theme = {
  colors: {
    // Foundations
    background: '#050508',
    surface: '#0A0F1E', // At 60% opacity for glass effect in usage
    surfaceSolid: '#131317',
    surfaceBright: '#39393d',
    
    // Accents
    primary: '#e1fdff',
    primaryContainer: '#00f2ff', // Electric Teal
    onPrimaryContainer: '#006a71',
    
    secondary: '#ffb1c4',
    secondaryContainer: '#ff007f', // Hot Pink
    
    tertiaryContainer: '#bd00ff', // Neon Purple
    
    // Alerts/Warnings
    error: '#ffb4ab',
    errorContainer: '#93000a',
    
    // Text
    onBackground: '#e5e1e7',
    onSurfaceVariant: '#b9cacb',
    
    // Borders
    outline: '#849495',
    outlineVariant: '#3a494b',
  },
  typography: {
    displayLg: {
      fontFamily: 'Sora_800ExtraBold',
      fontSize: 42,
      lineHeight: 48,
      letterSpacing: -0.84, // -0.02em
    },
    headlineLg: {
      fontFamily: 'Sora_700Bold',
      fontSize: 32,
      lineHeight: 40,
    },
    headlineLgMobile: {
      fontFamily: 'Sora_700Bold',
      fontSize: 24,
      lineHeight: 32,
    },
    titleMd: {
      fontFamily: 'Sora_600SemiBold',
      fontSize: 20,
      lineHeight: 28,
    },
    bodyLg: {
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      lineHeight: 24,
    },
    bodySm: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      lineHeight: 20,
    },
    labelCaps: {
      fontFamily: 'JetBrainsMono_700Bold',
      fontSize: 12,
      lineHeight: 16,
      letterSpacing: 1.2, // 0.1em
      textTransform: 'uppercase' as const,
    },
    dataNum: {
      fontFamily: 'JetBrainsMono_500Medium',
      fontSize: 18,
      lineHeight: 24,
    },
  },
  spacing: {
    unit: 4,
    gutter: 16,
    marginMobile: 20,
    containerGap: 12,
  },
  radii: {
    sm: 4,
    DEFAULT: 8,
    md: 12,
    lg: 16, // For cards
    xl: 24, // For buttons
    full: 9999,
  }
};
