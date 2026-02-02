import { firestore } from '../config/firebase';
import { SAMPLE_CONTENT } from '../data/sampleContent';
import { getCollectionName } from '../constants/contentStructure';

export const importMaasaiContent = async () => {
  try {
    console.log('🚀 Starting Maasai content import...');
    
    const maasaiContent = SAMPLE_CONTENT.maasai;
    if (!maasaiContent) {
      throw new Error('No Maasai content found in sample data');
    }

    let totalImported = 0;
    const results = {};

    // Import each category
    for (const [categoryKey, items] of Object.entries(maasaiContent)) {
      try {
        const collectionName = getCollectionName('maasai', categoryKey);
        
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
            language: 'maasai',
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

    console.log(`🎉 Maasai import completed! Total items: ${totalImported}`);
    
    return {
      success: true,
      totalImported,
      results,
      message: `Successfully imported ${totalImported} Maasai items across ${Object.keys(results).length} categories`
    };

  } catch (error) {
    console.error('💥 Maasai import failed:', error);
    return {
      success: false,
      error: error.message,
      message: `Import failed: ${error.message}`
    };
  }
};

// Quick import function for console use
export const quickImportMaasai = () => {
  console.log('🔄 Quick importing Maasai content...');
  return importMaasaiContent()
    .then(result => {
      console.log('📊 Import result:', result);
      return result;
    })
    .catch(error => {
      console.error('💥 Quick import failed:', error);
      return { success: false, error: error.message };
    });
};