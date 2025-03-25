export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  accent: string;
  error: string;
  border: string;
}

export interface Theme {
  dark: boolean;
  colors: ThemeColors;
}

export const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#FF1E6C',      // Neon pink
    secondary: '#00F9FF',    // Neon cyan
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#1A1A1A',
    textSecondary: '#757575',
    accent: '#7B42F6',       // Neon purple
    error: '#FF3B30',
    border: '#E0E0E0',
  },
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#FF1E6C',      // Neon pink
    secondary: '#00F9FF',    // Neon cyan
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#BBBBBB',
    accent: '#7B42F6',       // Neon purple
    error: '#FF453A',
    border: '#2C2C2C',
  },
};
