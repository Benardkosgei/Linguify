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
  runFirebaseTests, 
  quickFirebaseTest, 
  FirebaseTestScript 
} from '../../utils/firebaseTestScript';

const FirebaseTestScreen = () => {
  const [testing, setTesting] = useState(false);
  const [results, setResults] = useState(null);
  const [testType, setTestType] = useState(null);
  const [consoleLog, setConsoleLog] = useState([]);

  const runQuickTest = async () => {
    setTesting(true);
    setTestType('quick');
    setResults(null);
    
    try {
      console.log('='.repeat(50));
      console.log('STARTING QUICK TEST');
      console.log('='.repeat(50));
      
      const success = await quickFirebaseTest();
      
      setResults({
        type: 'quick',
        success: success,
        message: success ? 'Quick test passed!' : 'Quick test failed - check console'
      });
      
      Alert.alert(
        'Quick Test Complete',
        success ? '✅ Firebase is working!' : '❌ Test failed - check console',
        [{ text: 'OK' }]
      );
    } catch (error) {
      setResults({
        type: 'quick',
        success: false,
        message: `Error: ${error.message}`
      });
    } finally {
      setTesting(false);
    }
  };

  const runFullTest = async () => {
    setTesting(true);
    setTestType('full');
    setResults(null);
    setConsoleLog([]);
    
    try {
      console.log('='.repeat(50));
      console.log('STARTING FULL TEST SUITE');
      console.log('='.repeat(50));
      
      const testResults = await runFirebaseTests();
      
      // Capture key results for display
      const logEntries = [
        `🎉 TEST COMPLETED: ${testResults.passedTests}/${testResults.totalTests} tests passed`,
        `⏱️ Duration: ${testResults.endTime - testResults.startTime}ms`,
        `🔥 Connection: ${testResults.connection.success ? 'SUCCESS' : 'FAILED'}`,
        '',
        '📚 COLLECTIONS:',
        ...Object.entries(testResults.collections).map(([collection, info]) => 
          `  • ${collection}: ${info.success ? 
            (info.isEmpty ? 'EMPTY (0 docs)' : `SUCCESS (${info.count} docs, ${info.fetchTime}ms)`) : 
            `FAILED - ${info.error}`
          }`
        )
      ];
      
      if (testResults.performance) {
        logEntries.push('', '⚡ PERFORMANCE:');
        Object.entries(testResults.performance).forEach(([collection, times]) => {
          logEntries.push(`  • ${collection}:`);
          Object.entries(times).forEach(([size, time]) => {
            logEntries.push(`    - ${size}: ${time}ms`);
          });
        });
      }
      
      setConsoleLog(logEntries);
      
      setResults({
        type: 'full',
        success: testResults.failedTests === 0,
        data: testResults,
        message: `Tests completed: ${testResults.passedTests}/${testResults.totalTests} passed`
      });
      
      Alert.alert(
        'Full Test Complete',
        `${testResults.passedTests}/${testResults.totalTests} tests passed\nDetailed results shown below`,
        [{ text: 'OK' }]
      );
    } catch (error) {
      setResults({
        type: 'full',
        success: false,
        message: `Error: ${error.message}`
      });
      setConsoleLog([`❌ ERROR: ${error.message}`]);
    } finally {
      setTesting(false);
    }
  };

  const runCustomTest = async () => {
    setTesting(true);
    setTestType('custom');
    setResults(null);
    
    try {
      console.log('='.repeat(50));
      console.log('STARTING CUSTOM TEST');
      console.log('='.repeat(50));
      
      const testScript = new FirebaseTestScript();
      
      // Run only connection and collections tests
      await testScript.testConnection();
      await testScript.testAllCollections();
      
      testScript.results.endTime = Date.now();
      const report = testScript.generateReport();
      
      setResults({
        type: 'custom',
        success: report.failedTests === 0,
        data: report,
        message: `Custom test completed: ${report.passedTests}/${report.totalTests} passed`
      });
      
    } catch (error) {
      setResults({
        type: 'custom',
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
          
          {results.type === 'full' && results.data && (
            <View style={styles.detailedResults}>
              <Text style={styles.subTitle}>Test Summary:</Text>
              <Text style={styles.resultItem}>• Total Tests: {results.data.totalTests}</Text>
              <Text style={styles.resultItem}>• Passed: {results.data.passedTests}</Text>
              <Text style={styles.resultItem}>• Failed: {results.data.failedTests}</Text>
              <Text style={styles.resultItem}>• Duration: {results.data.endTime - results.data.startTime}ms</Text>
              
              <Text style={styles.subTitle}>Collections:</Text>
              {Object.entries(results.data.collections).map(([collection, info]) => (
                <Text key={collection} style={styles.collectionItem}>
                  • {collection}: {info.success ? 
                    (info.isEmpty ? '⚠️ Empty' : `✅ ${info.count} docs`) : 
                    '❌ Failed'
                  }
                </Text>
              ))}
            </View>
          )}
          
          {consoleLog.length > 0 && (
            <View style={styles.consoleContainer}>
              <Text style={styles.subTitle}>Detailed Results:</Text>
              <ScrollView style={styles.consoleLog} nestedScrollEnabled={true}>
                {consoleLog.map((line, index) => (
                  <Text key={index} style={styles.consoleLine}>
                    {line}
                  </Text>
                ))}
              </ScrollView>
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
          <Title style={styles.title}>Firebase Test Suite</Title>
          <Text style={styles.description}>
            Comprehensive testing tools for Firebase connection and data fetching
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Test Options</Title>
          
          <Button
            mode="contained"
            onPress={runQuickTest}
            disabled={testing}
            style={styles.button}
            icon="flash"
          >
            Quick Test (30 seconds)
          </Button>

          <Button
            mode="contained"
            onPress={runCustomTest}
            disabled={testing}
            style={styles.button}
            icon="cog"
          >
            Custom Test (Collections Only)
          </Button>

          <Button
            mode="contained"
            onPress={runFullTest}
            disabled={testing}
            style={[styles.button, styles.primaryButton]}
            icon="rocket-launch"
          >
            Full Test Suite (2-3 minutes)
          </Button>

          <Button
            mode="contained"
            onPress={async () => {
              setTesting(true);
              try {
                console.log('🚀 Starting Kiswahili Import...');
                const { importAllKiswahili } = await import('../../scripts/importKiswahili');
                const result = await importAllKiswahili();
                
                Alert.alert(
                  'Import Complete!',
                  `Successfully imported ${result.totalItems} items across ${result.successfulCategories} categories`,
                  [{ text: 'OK' }]
                );
              } catch (error) {
                Alert.alert('Import Failed', error.message);
              } finally {
                setTesting(false);
              }
            }}
            disabled={testing}
            style={[styles.button, { backgroundColor: '#10B981' }]}
            icon="cloud-upload"
          >
            Import All Kiswahili Content
          </Button>

          {testing && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#007AFF" />
              <Text style={styles.loadingText}>
                Running {testType} test... Check console for live updates
              </Text>
            </View>
          )}
        </Card.Content>
      </Card>

      {renderResults()}

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.cardTitle}>Test Descriptions</Title>
          <Text style={styles.instruction}>
            🔥 <Text style={styles.bold}>Quick Test:</Text> Basic connection and one sample query
          </Text>
          <Text style={styles.instruction}>
            ⚙️ <Text style={styles.bold}>Custom Test:</Text> Connection + all collections testing
          </Text>
          <Text style={styles.instruction}>
            🚀 <Text style={styles.bold}>Full Suite:</Text> Complete testing including performance benchmarks
          </Text>
          <Text style={styles.note}>
            💡 All test results are logged to console with detailed information
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
    textAlign: 'center',
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
  detailedResults: {
    marginTop: 16,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 8,
  },
  resultItem: {
    fontSize: 14,
    marginVertical: 2,
    fontFamily: 'monospace',
  },
  collectionItem: {
    fontSize: 14,
    marginVertical: 2,
    fontFamily: 'monospace',
  },
  consoleContainer: {
    marginTop: 16,
  },
  consoleLog: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 12,
    maxHeight: 300,
  },
  consoleLine: {
    fontSize: 12,
    color: '#00ff00',
    fontFamily: 'monospace',
    marginVertical: 1,
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

export default FirebaseTestScreen;