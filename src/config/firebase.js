import { firebase } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

// Firebase configuration is automatically loaded from:
// - android/app/google-services.json (Android)
// - ios/GoogleService-Info.plist (iOS)

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp();
}

// Export both firebase and firestore for convenience
export { firestore };
export default firebase;