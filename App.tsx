import { AppNavigation } from './src/app.navigation';
import { ThemeProvider } from './src/State/Context/ThemeContext';


export default function App() {
  return (
    <ThemeProvider>
      <AppNavigation></AppNavigation>
    </ThemeProvider>
  );
}
