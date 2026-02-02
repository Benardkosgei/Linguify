import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Alert 
} from 'react-native';
import { Card, Title, Button, ActivityIndicator } from 'react-native-paper';
import { 
  testFirebaseConnection, 
  testCollections, 
  runFullFirebaseTest 
} from '../../utils/testFirebase';

const TestFirebase = () => {
  const [testing, setTesting] = useState(false);
  const [results, setResults] = useState(null);

  const runBasicTest = async () => {
    setTesting(true);
    setResults(null);
    
    try {
      console.log('Starting basic Firebase test...');
      const isConnected = await testFirebaseConnection();
      
      setResults({
        type: 'basic',
        success: isConnected,
        message: isConnected ? 'Firebase connection successful!' : 'Firebase connection failed!'
      });
      
      Alert.alert(
        'Test Result',
        isConnected ? '✅ Firebase Connected!' : '❌ Connection Failed',
        [{ text: 'OK' }]
      );
    } catch (error) {
      setResults({
        type: 'basic',
        success: false,
        message: `Error: ${error.message}`
      });
    } finally {
      setTesting(false);
    }
  };

  const runCollectionTest = async () => {
    setTesting(true);
    setResults(null);
    
    try {
      console.log('Starting collections test...');
      const collectionsResult = await testCollections();
      
      setResults({
        type: 'collections',
        success: true,
        data: collectionsResult
      });
      
      Alert.alert(
        'Collections Test',
        'Check console for detailed results',
        [{ text: 'OK' }]
      );
    } catch (error) {
      setResults({
        type: 'collections',
        success: false,
        message: `Error: ${error.message}`
      });
    } finally {
      setTesting(false);
    }
  };

  const runFullTest = async () => {
    setTesting(true);
    setResults(null);
    
    try {
      console.log('Starting full Firebase test...');
      const success = await runFullFirebaseTest();
      
      setResults({
        type: 'full',
        success: success,
        message: success ? 'All tests passed!' : 'Some tests failed - check console'
      });
      
      Alert.alert(
        'Full Test Complete',
        success ? '✅ All tests passed!' : '⚠️ Check console for details',
        [{ text: 'OK' }]
      );
    } catch (error) {
      setResults({
        type: 'full',
        success: false,
        message: `Error: ${error.message}`
      });
    } finally {
      setTesting(false);
    }
  };

  const renderResults = () => {
    if (!results) return null;

    return (
      <Card style={styles.resultCard}>
        <Card.Content>
          <Title style={[styles.resultTitle, { color: results.success ? 'green' : 'red' }]}>
            {results.success ? '✅ Success' : '❌ Failed'}
          </Title>
          <Text style={styles.resultText}>{results.message}</Text>
          
          {results.type === 'collections' && results.data && (
            <View style={styles.collectionsResult}>
              <Text style={styles.subTitle}>Collections Status:</Text>
              {Object.entries(results.data).map(([collection, info]) => (
                <Text key={collection} style={styles.collectionItem}>
                  • {collection}: {info.exists ? `✅ ${info.count} docs` : '❌ Not found'}
                </Text>
              ))}
            </View>
          )}
        </Card.Content>
      </Card>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Firebase Connectivity Test</Title>
          <Text style={styles.description}>
            Test your Firebase connection and data collections
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Test Options</Title>
          
          <Button
            mode="contained"
            onPress={runBasicTest}
            disabled={testing}
            style={styles.button}
            icon="firebase"
          >
            Test Basic Connection
          </Button>

          <Button
            mode="contained"
            onPress={runCollectionTest}
            disabled={testing}
            style={styles.button}
            icon="database"
          >
            Test Collections
          </Button>

          <Button
            mode="contained"
            onPress={runFullTest}
            disabled={testing}
            style={[styles.button, styles.primaryButton]}
            icon="rocket-launch"
          >
            Run Full Test Suite
          </Button>

          {testing && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#007AFF" />
              <Text style={styles.loadingText}>Testing Firebase...</Text>
            </View>
          )}
        </Card.Content>
      </Card>

      {renderResults()}

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Instructions</Title>
          <Text style={styles.instruction}>
            1. <Text style={styles.bold}>Basic Connection:</Text> Tests if Firebase is properly initialized
          </Text>
          <Text style={styles.instruction}>
            2. <Text style={styles.bold}>Collections Test:</Text> Checks if your data collections exist
          </Text>
          <Text style={styles.instruction}>
            3. <Text style={styles.bold}>Full Test:</Text> Comprehensive test of all Firebase features
          </Text>
          <Text style={styles.note}>
            💡 Check the console/logs for detailed test results
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 16,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginTop: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    marginVertical: 8,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  resultCard: {
    margin: 16,
    elevation: 4,
    backgroundColor: '#f9f9f9',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 16,
    marginTop: 8,
  },
  collectionsResult: {
    marginTop: 16,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  collectionItem: {
    fontSize: 14,
    marginVertical: 2,
    fontFamily: 'monospace',
  },
  instruction: {
    fontSize: 14,
    marginVertical: 4,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
  note: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 12,
    textAlign: 'center',
  },
});

export default TestFirebase;