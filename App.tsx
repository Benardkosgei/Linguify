import React,{useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation/Navigation';
import { ErrorBoundary } from './src/components';
// Uncomment the line below to run Firebase test on app start
// import './src/utils/quickFirebaseTest';

function App(): React.JSX.Element {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);
 
  return (
     <ErrorBoundary>
       <Navigation/>
     </ErrorBoundary>
  );
}
export default App;
