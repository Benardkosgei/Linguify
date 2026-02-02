import { firestore } from '../config/firebase';
import { COLLECTIONS } from '../constants/collections';

// Test script to verify Firebase connection and data fetching
export class FirebaseTestScript {
  constructor() {
    this.results = {
      connection: null,
      collections: {},
      totalTests: 0,
      passedTests: 0,
      failedTests: 0,
      startTime: null,
      endTime: null
    };
  }

  // Helper method to log with timestamp
  log(message, type = 'info') {
    const timestamp = new Date().toLocaleTimeString();
    const prefix = {
      info: '📋',
      success: '✅',
      error: '❌',
      warning: '⚠️',
      test: '🧪'
    }[type] || '📋';
    
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  // Test basic Firebase connection
  async testConnection() {
    this.log('Testing Firebase connection...', 'test');
    this.results.totalTests++;
    
    try {
      // Try to access Firestore instance
      const db = firestore();
      
      if (!db) {
        throw new Error('Firestore instance is null');
      }
      
      this.log('Firebase Firestore instance created successfully', 'success');
      this.results.connection = { success: true, message: 'Connected' };
      this.results.passedTests++;
      return true;
    } catch (error) {
      this.log(`Firebase connection failed: ${error.message}`, 'error');
      this.results.connection = { success: false, error: error.message };
      this.results.failedTests++;
      return false;
    }
  }

  // Test fetching data from a specific collection
  async testCollection(collectionName, displayName = null) {
    const name = displayName || collectionName;
    this.log(`Testing collection: ${name}`, 'test');
    this.results.totalTests++;
    
    try {
      const startTime = Date.now();
      const snapshot = await firestore()
        .collection(collectionName)
        .limit(10)
        .get();
      
      const fetchTime = Date.now() - startTime;
      const docCount = snapshot.size;
      
      if (docCount === 0) {
        this.log(`Collection "${name}" exists but is empty`, 'warning');
        this.results.collections[collectionName] = {
          success: true,
          count: 0,
          fetchTime,
          isEmpty: true,
          sampleData: null
        };
      } else {
        // Get sample data from first document
        const firstDoc = snapshot.docs[0];
        const sampleData = firstDoc.data();
        
        this.log(`Collection "${name}" - Found ${docCount} documents (${fetchTime}ms)`, 'success');
        this.log(`Sample data structure: ${Object.keys(sampleData).join(', ')}`, 'info');
        
        this.results.collections[collectionName] = {
          success: true,
          count: docCount,
          fetchTime,
          isEmpty: false,
          sampleData: sampleData,
          sampleKeys: Object.keys(sampleData)
        };
      }
      
      this.results.passedTests++;
      return true;
    } catch (error) {
      this.log(`Collection "${name}" failed: ${error.message}`, 'error');
      this.results.collections[collectionName] = {
        success: false,
        error: error.message,
        errorCode: error.code
      };
      this.results.failedTests++;
      return false;
    }
  }

  // Test all collections defined in constants
  async testAllCollections() {
    this.log('Testing all collections...', 'test');
    
    const collections = [
      { name: COLLECTIONS.KALENJIN_NAMES, display: 'Kalenjin Names' },
      { name: COLLECTIONS.BASIC_WORDS, display: 'Basic Words' },
      { name: COLLECTIONS.DOWRY, display: 'Dowry' },
      { name: COLLECTIONS.SUBTRIBES, display: 'Subtribes' },
      { name: COLLECTIONS.WISE_SAYINGS, display: 'Wise Sayings' },
      { name: COLLECTIONS.LEGENDS, display: 'Legends' },
      { name: COLLECTIONS.MONTHS, display: 'Months' }
    ];
    
    for (const collection of collections) {
      await this.testCollection(collection.name, collection.display);
    }
  }

  // Test specific queries that your app uses
  async testAppQueries() {
    this.log('Testing app-specific queries...', 'test');
    
    // Test the queries used in ContentPage
    const testCases = [
      { itemId: 1, collection: COLLECTIONS.KALENJIN_NAMES, name: 'Names Query' },
      { itemId: 2, collection: COLLECTIONS.BASIC_WORDS, name: 'Basic Words Query' },
      { itemId: 4, collection: COLLECTIONS.DOWRY, name: 'Dowry Query' },
      { itemId: 5, collection: COLLECTIONS.MONTHS, name: 'Months Query' },
      { itemId: 6, collection: COLLECTIONS.LEGENDS, name: 'Legends Query' },
      { itemId: 7, collection: COLLECTIONS.WISE_SAYINGS, name: 'Wise Sayings Query' },
      { itemId: 8, collection: COLLECTIONS.SUBTRIBES, name: 'Subtribes Query' }
    ];
    
    for (const testCase of testCases) {
      this.results.totalTests++;
      
      try {
        this.log(`Testing ${testCase.name} (ItemID: ${testCase.itemId})`, 'test');
        
        const startTime = Date.now();
        const snapshot = await firestore()
          .collection(testCase.collection)
          .onSnapshot(() => {}, () => {}); // Test listener setup
        
        const fetchTime = Date.now() - startTime;
        
        this.log(`${testCase.name} listener setup successful (${fetchTime}ms)`, 'success');
        this.results.passedTests++;
        
        // Clean up listener
        if (typeof snapshot === 'function') {
          snapshot();
        }
      } catch (error) {
        this.log(`${testCase.name} failed: ${error.message}`, 'error');
        this.results.failedTests++;
      }
    }
  }

  // Performance test - measure fetch times
  async performanceTest() {
    this.log('Running performance tests...', 'test');
    
    const performanceResults = {};
    
    for (const [collectionName, result] of Object.entries(this.results.collections)) {
      if (result.success && !result.isEmpty) {
        this.results.totalTests++;
        
        try {
          // Test multiple fetch sizes
          const sizes = [1, 5, 10, 20];
          const times = {};
          
          for (const size of sizes) {
            const startTime = Date.now();
            await firestore().collection(collectionName).limit(size).get();
            times[`${size}_docs`] = Date.now() - startTime;
          }
          
          performanceResults[collectionName] = times;
          this.log(`Performance test for ${collectionName} completed`, 'success');
          this.results.passedTests++;
        } catch (error) {
          this.log(`Performance test for ${collectionName} failed: ${error.message}`, 'error');
          this.results.failedTests++;
        }
      }
    }
    
    this.results.performance = performanceResults;
  }

  // Generate detailed report
  generateReport() {
    const duration = this.results.endTime - this.results.startTime;
    
    this.log('='.repeat(50), 'info');
    this.log('FIREBASE TEST REPORT', 'info');
    this.log('='.repeat(50), 'info');
    this.log(`Test Duration: ${duration}ms`, 'info');
    this.log(`Total Tests: ${this.results.totalTests}`, 'info');
    this.log(`Passed: ${this.results.passedTests}`, 'success');
    this.log(`Failed: ${this.results.failedTests}`, this.results.failedTests > 0 ? 'error' : 'info');
    this.log(`Success Rate: ${((this.results.passedTests / this.results.totalTests) * 100).toFixed(1)}%`, 'info');
    
    // Connection status
    this.log('\nCONNECTION STATUS:', 'info');
    if (this.results.connection.success) {
      this.log('Firebase connection: WORKING', 'success');
    } else {
      this.log(`Firebase connection: FAILED - ${this.results.connection.error}`, 'error');
    }
    
    // Collections status
    this.log('\nCOLLECTIONS STATUS:', 'info');
    for (const [collection, result] of Object.entries(this.results.collections)) {
      if (result.success) {
        if (result.isEmpty) {
          this.log(`${collection}: EMPTY (0 documents)`, 'warning');
        } else {
          this.log(`${collection}: OK (${result.count} docs, ${result.fetchTime}ms)`, 'success');
          this.log(`  Sample fields: ${result.sampleKeys.join(', ')}`, 'info');
        }
      } else {
        this.log(`${collection}: FAILED - ${result.error}`, 'error');
      }
    }
    
    // Performance results
    if (this.results.performance) {
      this.log('\nPERFORMANCE RESULTS:', 'info');
      for (const [collection, times] of Object.entries(this.results.performance)) {
        this.log(`${collection}:`, 'info');
        for (const [size, time] of Object.entries(times)) {
          this.log(`  ${size}: ${time}ms`, 'info');
        }
      }
    }
    
    this.log('='.repeat(50), 'info');
    
    return this.results;
  }

  // Run all tests
  async runAllTests() {
    this.log('Starting Firebase Test Script...', 'test');
    this.results.startTime = Date.now();
    
    try {
      // Test 1: Basic connection
      const connectionOk = await this.testConnection();
      
      if (!connectionOk) {
        this.log('Connection failed, skipping other tests', 'error');
        this.results.endTime = Date.now();
        return this.generateReport();
      }
      
      // Test 2: All collections
      await this.testAllCollections();
      
      // Test 3: App-specific queries
      await this.testAppQueries();
      
      // Test 4: Performance
      await this.performanceTest();
      
      this.results.endTime = Date.now();
      return this.generateReport();
      
    } catch (error) {
      this.log(`Test script crashed: ${error.message}`, 'error');
      this.results.endTime = Date.now();
      return this.generateReport();
    }
  }
}

// Convenience function to run tests
export const runFirebaseTests = async () => {
  const testScript = new FirebaseTestScript();
  return await testScript.runAllTests();
};

// Quick test function
export const quickFirebaseTest = async () => {
  console.log('🚀 Running Quick Firebase Test...');
  
  try {
    // Test connection
    const db = firestore();
    console.log('✅ Firebase instance created');
    
    // Test one collection
    const snapshot = await db.collection(COLLECTIONS.KALENJIN_NAMES).limit(1).get();
    console.log(`✅ Sample query successful - ${snapshot.size} documents`);
    
    console.log('🎉 Quick test PASSED!');
    return true;
  } catch (error) {
    console.log(`❌ Quick test FAILED: ${error.message}`);
    return false;
  }
};