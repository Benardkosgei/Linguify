import { firestore } from '../config/firebase';
import { SAMPLE_CONTENT } from '../data/sampleContent';
import { getCollectionName } from '../constants/contentStructure';

export const importExpandedKiswahiliContent = async () => {
  try {
    console.log('🚀 Starting expanded Kiswahili content import...');
    
    const language = 'kiswahili';
    const content = SAMPLE_CONTENT[language];
    
    if (!content) {
      throw new Error(`No content found for language: ${language}`);
    }

    // All categories including new ones
    const categories = [
      'basic_words', 'greetings', 'numbers', 'family', 'colors', 'animals', 
      'food', 'body_parts', 'nature', 'occupations', 'months', 'names', 
      'proverbs', 'cultural_practices', 'days_of_week', 'time_expressions', 
      'directions', 'common_phrases', 'school_subjects', 'weather_conditions'
    ];

    let totalImported = 0;
    const results = {};

    for (const category of categories) {
      try {
        console.log(`📚 Importing ${category}...`);
        
        const categoryData = content[category];
        if (!categoryData || !Array.isArray(categoryData)) {
          console.log(`⚠️ No data found for category: ${category}`);
          continue;
        }

        const collectionName = getCollectionName(language, category);
        if (!collectionName) {
          console.log(`⚠️ No collection name for category: ${category}`);
          continue;
        }

        // Clear existing data first
        const existingDocs = await firestore()
          .collection(collectionName)
          .get();
        
        if (!existingDocs.empty) {
          console.log(`🗑️ Clearing ${existingDocs.size} existing documents from ${collectionName}`);
          const batch = firestore().batch();
          existingDocs.docs.forEach(doc => {
            batch.delete(doc.ref);
          });
          await batch.commit();
        }

        // Import new data in batches
        const batchSize = 500; // Firestore batch limit
        let imported = 0;
        
        for (let i = 0; i < categoryData.length; i += batchSize) {
          const batch = firestore().batch();
          const batchData = categoryData.slice(i, i + batchSize);
          
          batchData.forEach((item, index) => {
            const docId = `${collectionName}_${i + index + 1}`;
            const docRef = firestore().collection(collectionName).doc(docId);
            batch.set(docRef, {
              ...item,
              imported_at: new Date(),
              language: language,
              category: category
            });
          });
          
          await batch.commit();
          imported += batchData.length;
          console.log(`✅ Imported batch ${Math.floor(i/batchSize) + 1} for ${category}: ${batchData.length} items`);
        }

        results[category] = imported;
        totalImported += imported;
        console.log(`✅ Successfully imported ${imported} items to ${collectionName}`);
        
      } catch (error) {
        console.error(`❌ Error importing ${category}:`, error);
        results[category] = { error: error.message };
      }
    }

    console.log('\n🎉 EXPANDED KISWAHILI IMPORT COMPLETE!');
    console.log('📊 Import Summary:');
    console.log(`📚 Total Categories: ${categories.length}`);
    console.log(`📝 Total Items Imported: ${totalImported}`);
    console.log('\n📋 Category Breakdown:');
    
    Object.entries(results).forEach(([category, count]) => {
      if (typeof count === 'number') {
        console.log(`  ${category}: ${count} items`);
      } else {
        console.log(`  ${category}: ERROR - ${count.error}`);
      }
    });

    return {
      success: true,
      totalImported,
      results,
      message: `Successfully imported ${totalImported} items across ${Object.keys(results).length} categories`
    };

  } catch (error) {
    console.error('❌ Expanded Kiswahili import failed:', error);
    return {
      success: false,
      error: error.message,
      message: 'Import failed'
    };
  }
};

// Quick test function
export const testExpandedContent = async () => {
  try {
    console.log('🧪 Testing expanded Kiswahili content...');
    
    const categories = ['days_of_week', 'time_expressions', 'directions', 'common_phrases', 'school_subjects', 'weather_conditions'];
    
    for (const category of categories) {
      const collectionName = getCollectionName('kiswahili', category);
      const snapshot = await firestore()
        .collection(collectionName)
        .limit(3)
        .get();
      
      console.log(`📚 ${category}: ${snapshot.size} documents`);
      snapshot.forEach(doc => {
        console.log(`  - ${doc.id}:`, Object.keys(doc.data()).join(', '));
      });
    }
    
    console.log('✅ Expanded content test completed!');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
};