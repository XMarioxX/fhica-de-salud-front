import { ThemeProvider } from '@/app/provider/themeProvider';
import ChildComponent from '@/app/components/test';

const SimpleApp = () => {
  return (
    <ThemeProvider>
      <ChildComponent />
    </ThemeProvider>
  );
};

export default SimpleApp;
