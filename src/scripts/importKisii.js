import { firestore } from '../config/firebase';
import { SAMPLE_CONTENT } from '../data/sampleContent';
import { getCollectionName } from '../constants/contentStructure';

export const importKisiiContent = async () => {
  try {
    console.log('🚀 Starting Kisii content import...');
    
    const kisiiContent = SAMPLE_CONTENT.kisii;
    if (!kisiiContent) {
      throw new Error('No Kisii content found in sample data');
    }

    let totalImported = 0;
    const results = {};

    // Import each category
    for (const [categoryKey, items] of Object.entries(kisiiContent)) {
      try {
        const collectionName = getCollectionName('kisii', categoryKey);
        
        if (!collectionName) {
          console.warn(`⚠️ No collection name found for category: ${categoryKey}`);
          continue;
        }

        console.log(`📚 Importing ${items.length} items to ${collectionName}...`);
        
        const batch = firestore().batch();
        
        items.forEach((item, index) => {
          const docRef = firestore().collection(collectionName).doc();
          batch.set(docRef, {
            ...item,
            createdAt: new Date(),
            language: 'kisii',
            category: categoryKey,
            order: index
          });
        });

        await batch.commit();
        
        results[categoryKey] = {
          success: true,
          count: items.length,
          collection: collectionName
        };
        
        totalImported += items.length;
        console.log(`✅ Successfully imported ${items.length} ${categoryKey} items`);
        
      } catch (error) {
        console.error(`❌ Error importing ${categoryKey}:`, error);
        results[categoryKey] = {
          success: false,
          error: error.message
        };
      }
    }

    console.log(`🎉 Kisii import completed! Total items: ${totalImported}`);
    
    return {
      success: true,
      totalImported,
      results,
      message: `Successfully imported ${totalImported} Kisii items across ${Object.keys(results).length} categories`
    };

  } catch (error) {
    console.error('💥 Kisii import failed:', error);
    return {
      success: false,
      error: error.message,
      message: `Import failed: ${error.message}`
    };
  }
};

// Quick import function for console use
export const quickImportKisii = () => {
  console.log('🔄 Quick importing Kisii content...');
  return importKisiiContent()
    .then(result => {
      console.log('📊 Import result:', result);
      return result;
    })
    .catch(error => {
      console.error('💥 Quick import failed:', error);
      return { success: false, error: error.message };
    });
};