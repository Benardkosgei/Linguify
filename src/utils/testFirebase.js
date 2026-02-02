import { firestore } from '../config/firebase';
import { COLLECTIONS } from '../constants/collections';

export const testFirebaseConnection = async () => {
  try {
    console.log('🔥 Testing Firebase connection...');
    
    // Test read access only (since write is disabled in rules)
    console.log('Testing read access...');
    
    // Try to read from one of your actual collections
    const collections = [
      COLLECTIONS.KALENJIN_NAMES,
      COLLECTIONS.BASIC_WORDS,
      COLLECTIONS.DOWRY,
      COLLECTIONS.SUBTRIBES
    ];
    
    let readSuccess = false;
    
    for (const collectionName of collections) {
      try {
        console.log(`Trying to read from: ${collectionName}`);
        const snapshot = await firestore().collection(collectionName).limit(1).get();
        console.log(`✅ Successfully read from ${collectionName} (${snapshot.size} docs)`);
        readSuccess = true;
        break; // If one works, we're good
      } catch (error) {
        console.log(`⚠️  Could not read from ${collectionName}: ${error.message}`);
      }
    }
    
    if (readSuccess) {
      console.log('✅ Firebase Firestore read access successful!');
      console.log('📝 Note: Write access is disabled (which is fine for your app)');
      return true;
    } else {
      console.log('❌ Could not read from any collections');
      return false;
    }
    
  } catch (error) {
    console.error('❌ Firebase connection failed:', error);
    
    if (error.code === 'permission-denied') {
      console.log('🚫 Permission denied - Check your Firestore security rules');
      console.log('🔗 Go to: https://console.firebase.google.com/project/linguify-b6ce4/firestore/rules');
    }
    
    return false;
  }
};

export const testCollections = async () => {
  console.log('📚 Testing collections...');
  
  const collections = [
    COLLECTIONS.KALENJIN_NAMES,
    COLLECTIONS.BASIC_WORDS,
    COLLECTIONS.DOWRY,
    COLLECTIONS.SUBTRIBES
  ];
  
  const results = {};
  
  for (const collection of collections) {
    try {
      const snapshot = await firestore().collection(collection).limit(5).get();
      const docCount = snapshot.size;
      
      if (docCount > 0) {
        console.log(`✅ Collection "${collection}" exists with ${docCount} documents`);
        
        // Show sample data
        const sampleDoc = snapshot.docs[0].data();
        console.log(`   Sample data:`, sampleDoc);
        
        results[collection] = {
          exists: true,
          count: docCount,
          sample: sampleDoc
        };
      } else {
        console.log(`⚠️  Collection "${collection}" exists but is empty`);
        results[collection] = {
          exists: true,
          count: 0,
          sample: null
        };
      }
    } catch (error) {
      console.log(`❌ Collection "${collection}" error:`, error.message);
      results[collection] = {
        exists: false,
        error: error.message
      };
    }
  }
  
  return results;
};

export const testSpecificQuery = async (collectionName, itemId) => {
  try {
    console.log(`🔍 Testing query for collection: ${collectionName}`);
    
    const snapshot = await firestore()
      .collection(collectionName)
      .limit(10)
      .get();
    
    console.log(`✅ Query successful! Found ${snapshot.size} documents`);
    
    const data = [];
    snapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return data;
  } catch (error) {
    console.error(`❌ Query failed for ${collectionName}:`, error);
    return null;
  }
};

export const runFullFirebaseTest = async () => {
  console.log('🚀 Starting comprehensive Firebase test...');
  console.log('=====================================');
  
  // Test 1: Basic connection
  const connectionTest = await testFirebaseConnection();
  
  if (!connectionTest) {
    console.log('❌ Basic connection failed. Check your Firebase configuration.');
    return false;
  }
  
  // Test 2: Collections
  const collectionsTest = await testCollections();
  
  // Test 3: Sample queries
  console.log('\n🔍 Testing sample queries...');
  
  for (const [collectionName, result] of Object.entries(collectionsTest)) {
    if (result.exists && result.count > 0) {
      const queryData = await testSpecificQuery(collectionName, 1);
      if (queryData) {
        console.log(`✅ Sample query for "${collectionName}" returned ${queryData.length} items`);
      }
    }
  }
  
  console.log('\n🎉 Firebase test completed!');
  console.log('=====================================');
  
  return true;
};