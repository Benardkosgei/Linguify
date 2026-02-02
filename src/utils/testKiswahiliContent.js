import { firestore } from '../config/firebase';

export const testKiswahiliContent = async () => {
  try {
    console.log('🧪 Testing Kiswahili content access...');
    
    // Test basic_words collection
    const basicWordsSnapshot = await firestore()
      .collection('kiswahili_basic_words')
      .limit(5)
      .get();
    
    console.log(`📚 Basic Words: ${basicWordsSnapshot.size} documents found`);
    basicWordsSnapshot.forEach(doc => {
      console.log(`  - ${doc.id}:`, doc.data());
    });
    
    // Test greetings collection
    const greetingsSnapshot = await firestore()
      .collection('kiswahili_greetings')
      .limit(3)
      .get();
    
    console.log(`👋 Greetings: ${greetingsSnapshot.size} documents found`);
    greetingsSnapshot.forEach(doc => {
      console.log(`  - ${doc.id}:`, doc.data());
    });
    
    // Test numbers collection
    const numbersSnapshot = await firestore()
      .collection('kiswahili_numbers')
      .limit(3)
      .get();
    
    console.log(`🔢 Numbers: ${numbersSnapshot.size} documents found`);
    numbersSnapshot.forEach(doc => {
      console.log(`  - ${doc.id}:`, doc.data());
    });
    
    console.log('✅ Kiswahili content test completed successfully!');
    return true;
    
  } catch (error) {
    console.error('❌ Error testing Kiswahili content:', error);
    return false;
  }
};

export const testSpecificCollection = async (collectionName) => {
  try {
    console.log(`🧪 Testing collection: ${collectionName}`);
    
    const snapshot = await firestore()
      .collection(collectionName)
      .limit(10)
      .get();
    
    console.log(`📊 Collection ${collectionName}: ${snapshot.size} documents found`);
    
    if (snapshot.size > 0) {
      snapshot.forEach((doc, index) => {
        if (index < 3) { // Show first 3 documents
          console.log(`  - ${doc.id}:`, doc.data());
        }
      });
    }
    
    return snapshot.size;
    
  } catch (error) {
    console.error(`❌ Error testing collection ${collectionName}:`, error);
    return 0;
  }
};