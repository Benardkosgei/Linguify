import { SAMPLE_CONTENT } from '../data/sampleContent';
import { getCollectionName } from '../constants/contentStructure';

export const debugImport = () => {
  console.log('🔍 DEBUG: Checking import configuration...');
  
  const languageId = 'kiswahili';
  const sampleContent = SAMPLE_CONTENT[languageId];
  
  console.log('Available sample content categories:', Object.keys(sampleContent));
  
  Object.keys(sampleContent).forEach(categoryId => {
    console.log(`\n📂 Category: ${categoryId}`);
    console.log(`  Items count: ${sampleContent[categoryId].length}`);
    
    const collectionName = getCollectionName(languageId, categoryId);
    console.log(`  Collection name: ${collectionName}`);
    
    if (sampleContent[categoryId].length > 0) {
      console.log(`  Sample item:`, sampleContent[categoryId][0]);
    }
  });
};

export const testSingleImport = async (categoryId = 'basic_words') => {
  console.log(`🧪 Testing single import for: ${categoryId}`);
  
  try {
    const { contentImporter } = await import('./contentImporter');
    const result = await contentImporter.importSampleContent('kiswahili', categoryId);
    
    console.log('Import result:', result);
    return result;
  } catch (error) {
    console.error('Test import failed:', error);
    return { success: false, error: error.message };
  }
};