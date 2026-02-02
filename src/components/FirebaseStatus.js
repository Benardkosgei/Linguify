import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { firestore } from '../config/firebase';

const FirebaseStatus = () => {
  const [status, setStatus] = useState('checking');
  const [error, setError] = useState(null);

  const checkFirebaseStatus = async () => {
    setStatus('checking');
    setError(null);
    
    try {
      // Try to read from your actual collections instead of test collection
      const collections = ['Kalenjin Names', 'basicwords', 'dowry', 'subtribes'];
      let readSuccess = false;
      
      for (const collectionName of collections) {
        try {
          const testRef = firestore().collection(collectionName);
          const snapshot = await testRef.limit(1).get();
          console.log(`✅ Successfully read from ${collectionName}`);
          readSuccess = true;
          break; // If one works, we're good
        } catch (collectionError) {
          console.log(`Could not read from ${collectionName}:`, collectionError.message);
        }
      }
      
      if (readSuccess) {
        setStatus('connected');
        console.log('✅ Firebase is working!');
      } else {
        setStatus('no-data');
      }
      
    } catch (err) {
      setError(err);
      
      if (err.code === 'permission-denied') {
        setStatus('permission-denied');
      } else {
        setStatus('error');
      }
      
      console.error('Firebase error:', err);
    }
  };

  useEffect(() => {
    checkFirebaseStatus();
  }, []);

  const openFirebaseConsole = () => {
    Linking.openURL('https://console.firebase.google.com/project/linguify-b6ce4/firestore/rules');
  };

  const renderStatus = () => {
    switch (status) {
      case 'checking':
        return (
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>🔄 Checking Firebase...</Text>
          </View>
        );
        
      case 'connected':
        return (
          <View style={[styles.statusContainer, styles.success]}>
            <Text style={styles.statusText}>✅ Firebase Connected!</Text>
            <Text style={styles.helpText}>Read access working properly</Text>
          </View>
        );
        
      case 'no-data':
        return (
          <View style={[styles.statusContainer, styles.warning]}>
            <Text style={styles.statusText}>⚠️ Connected but No Data</Text>
            <Text style={styles.helpText}>
              Firebase is connected but your collections appear to be empty.
              Make sure you have data in your Firestore collections.
            </Text>
            <TouchableOpacity style={styles.button} onPress={openFirebaseConsole}>
              <Text style={styles.buttonText}>Open Firebase Console</Text>
            </TouchableOpacity>
          </View>
        );
        
      case 'permission-denied':
        return (
          <View style={[styles.statusContainer, styles.warning]}>
            <Text style={styles.statusText}>🚫 Permission Denied</Text>
            <Text style={styles.helpText}>
              Your Firestore security rules are blocking access.
            </Text>
            <TouchableOpacity style={styles.button} onPress={openFirebaseConsole}>
              <Text style={styles.buttonText}>Open Firebase Console</Text>
            </TouchableOpacity>
            <Text style={styles.ruleText}>
              Add this rule for development:{'\n'}
              allow read, write: if true;
            </Text>
          </View>
        );
        
      case 'error':
        return (
          <View style={[styles.statusContainer, styles.error]}>
            <Text style={styles.statusText}>❌ Firebase Error</Text>
            <Text style={styles.helpText}>
              {error?.message || 'Unknown error occurred'}
            </Text>
            <TouchableOpacity style={styles.button} onPress={checkFirebaseStatus}>
              <Text style={styles.buttonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        );
        
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderStatus()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  statusContainer: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  success: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
    borderWidth: 1,
  },
  warning: {
    backgroundColor: '#fff3cd',
    borderColor: '#ffeaa7',
    borderWidth: 1,
  },
  error: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    borderWidth: 1,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  helpText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  ruleText: {
    fontSize: 12,
    fontFamily: 'monospace',
    backgroundColor: '#f8f9fa',
    padding: 8,
    borderRadius: 4,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default FirebaseStatus;