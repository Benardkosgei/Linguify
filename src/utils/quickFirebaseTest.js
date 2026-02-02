// Quick Firebase test - can be imported and run anywhere
import { runFullFirebaseTest } from './testFirebase';

// Function to run a quick test and log results
export const quickTest = async () => {
  console.log('🔥 Quick Firebase Test Starting...');
  console.log('===================================');
  
  try {
    const result = await runFullFirebaseTest();
    
    if (result) {
      console.log('🎉 SUCCESS: Firebase is working correctly!');
    } else {
      console.log('❌ FAILED: Firebase has issues - check logs above');
    }
  } catch (error) {
    console.log('💥 ERROR: Firebase test crashed:', error.message);
  }
  
  console.log('===================================');
  return result;
};

// Auto-run if this file is imported
// Uncomment the line below to auto-test when imported
// quickTest();