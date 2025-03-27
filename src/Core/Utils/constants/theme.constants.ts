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
    primary: '#E94560',      // Neon pink
    secondary: '#16C79A',    // Teal
    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: '#212529',
    textSecondary: '#6C757D',
    accent: '#8A2BE2',       // Purple
    error: '#DC3545',
    border: '#DEE2E6',
  },
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#E94560',      // Neon pink
    secondary: '#16C79A',    // Teal
    background: '#1A1A2E',
    surface: '#16213E',
    text: '#FFFFFF',
    textSecondary: '#ADB5BD',
    accent: '#8A2BE2',       // Purple
    error: '#DC3545',
    border: '#343A40',
  },
};
