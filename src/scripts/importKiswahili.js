/**
 * Quick Import Script for Kiswahili Content
 * Run this to import all Kiswahili content to Firebase
 */

import { contentImporter } from '../utils/contentImporter';
import { SAMPLE_CONTENT } from '../data/sampleContent';

export const importAllKiswahili = async () => {
  console.log('🚀 Starting Kiswahili Content Import...');
  console.log('=====================================');
  
  const languageId = 'kiswahili';
  const categories = Object.keys(SAMPLE_CONTENT[languageId]);
  
  console.log(`📚 Found ${categories.length} categories to import:`);
  categories.forEach(cat => console.log(`  - ${cat}`));
  console.log('');
  
  const results = [];
  let totalItems = 0;
  
  for (const categoryId of categories) {
    try {
      console.log(`📤 Importing ${categoryId}...`);
      
      const result = await contentImporter.importSampleContent(languageId, categoryId);
      
      if (result.success) {
        console.log(`✅ ${categoryId}: ${result.count} items imported to ${result.collection}`);
        totalItems += result.count;
      } else {
        console.log(`❌ ${categoryId}: Failed - ${result.error}`);
      }
      
      results.push({ categoryId, ...result });
      
      // Wait 1 second between imports to avoid overwhelming Firebase
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.log(`💥 ${categoryId}: Crashed - ${error.message}`);
      results.push({ categoryId, success: false, error: error.message });
    }
  }
  
  // Summary
  console.log('');
  console.log('📊 IMPORT SUMMARY');
  console.log('================');
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log(`✅ Successful: ${successful.length}/${results.length} categories`);
  console.log(`📦 Total items imported: ${totalItems}`);
  
  if (failed.length > 0) {
    console.log(`❌ Failed categories:`);
    failed.forEach(f => console.log(`  - ${f.categoryId}: ${f.error}`));
  }
  
  console.log('');
  console.log('🎉 Kiswahili import completed!');
  
  return {
    success: failed.length === 0,
    totalCategories: results.length,
    successfulCategories: successful.length,
    totalItems,
    results
  };
};

// Quick import specific category
export const importKiswahiliCategory = async (categoryId) => {
  console.log(`🚀 Importing Kiswahili ${categoryId}...`);
  
  try {
    const result = await contentImporter.importSampleContent('kiswahili', categoryId);
    
    if (result.success) {
      console.log(`✅ Success: ${result.count} items imported to ${result.collection}`);
    } else {
      console.log(`❌ Failed: ${result.error}`);
    }
    
    return result;
  } catch (error) {
    console.log(`💥 Error: ${error.message}`);
    return { success: false, error: error.message };
  }
};

// Available categories for Kiswahili
export const getKiswahiliCategories = () => {
  return Object.keys(SAMPLE_CONTENT.kiswahili);
};

// Show what will be imported
export const previewKiswahiliImport = () => {
  const categories = Object.keys(SAMPLE_CONTENT.kiswahili);
  
  console.log('📋 KISWAHILI CONTENT PREVIEW');
  console.log('============================');
  
  let totalItems = 0;
  
  categories.forEach(categoryId => {
    const items = SAMPLE_CONTENT.kiswahili[categoryId];
    totalItems += items.length;
    console.log(`📚 ${categoryId}: ${items.length} items`);
    
    // Show first 2 items as preview
    items.slice(0, 2).forEach((item, index) => {
      const preview = Object.keys(item).slice(0, 2).map(key => `${key}: ${item[key]}`).join(', ');
      console.log(`  ${index + 1}. ${preview}...`);
    });
    
    if (items.length > 2) {
      console.log(`  ... and ${items.length - 2} more items`);
    }
    console.log('');
  });
  
  console.log(`📊 Total: ${totalItems} items across ${categories.length} categories`);
  
  return { categories, totalItems };
};