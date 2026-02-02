/**
 * Quick Import Utilities
 * Simple functions to import content from anywhere in the app
 */

import { contentImporter } from './contentImporter';

// Quick import all Kiswahili content
export const importKiswahili = async () => {
  console.log('🚀 Quick Kiswahili Import Starting...');
  
  try {
    const result = await contentImporter.importAllLanguageContent('kiswahili');
    
    if (result.success) {
      console.log('🎉 SUCCESS! All Kiswahili content imported');
      console.log(result.summary);
    } else {
      console.log('⚠️ PARTIAL SUCCESS');
      console.log(result.summary);
      console.log('Check individual results:', result.results);
    }
    
    return result;
  } catch (error) {
    console.error('💥 IMPORT FAILED:', error.message);
    return { success: false, error: error.message };
  }
};

// Import specific category
export const importCategory = async (language, category) => {
  console.log(`🚀 Importing ${language} ${category}...`);
  
  try {
    const result = await contentImporter.importSampleContent(language, category);
    
    if (result.success) {
      console.log(`✅ SUCCESS: ${result.count} items imported`);
    } else {
      console.log(`❌ FAILED: ${result.error}`);
    }
    
    return result;
  } catch (error) {
    console.error('💥 ERROR:', error.message);
    return { success: false, error: error.message };
  }
};

// Check what exists before importing
export const checkExisting = async (language, category) => {
  try {
    const result = await contentImporter.checkExistingContent(language, category);
    
    if (result.exists) {
      console.log(`📊 ${language} ${category}: ${result.count} items already exist`);
    } else {
      console.log(`📭 ${language} ${category}: No existing content`);
    }
    
    return result;
  } catch (error) {
    console.error('💥 CHECK FAILED:', error.message);
    return { exists: false, error: error.message };
  }
};

// Global functions for easy console access
if (typeof global !== 'undefined') {
  global.importKiswahili = importKiswahili;
  global.importCategory = importCategory;
  global.checkExisting = checkExisting;
}