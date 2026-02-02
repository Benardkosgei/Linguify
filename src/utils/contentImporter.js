import { firestore } from '../config/firebase';
import { SAMPLE_CONTENT, generateFirebaseData } from '../data/sampleContent';
import { getCollectionName } from '../constants/contentStructure';

/**
 * Content Importer Utility
 * Helps import sample content into Firebase collections
 */

export class ContentImporter {
  constructor() {
    this.db = firestore();
  }

  /**
   * Import sample content for a specific language and category
   */
  async importSampleContent(languageId, categoryId) {
    try {
      console.log(`Starting import for ${languageId} - ${categoryId}`);
      
      const collectionName = getCollectionName(languageId, categoryId);
      if (!collectionName) {
        throw new Error(`No collection mapping found for ${languageId} - ${categoryId}`);
      }

      console.log(`Collection name resolved to: ${collectionName}`);

      const sampleData = generateFirebaseData(languageId, categoryId);
      if (sampleData.length === 0) {
        throw new Error(`No sample data available for ${languageId} - ${categoryId}`);
      }

      console.log(`Generated ${sampleData.length} items for import`);

      const batch = this.db.batch();
      const collectionRef = this.db.collection(collectionName);

      sampleData.forEach((item, index) => {
        const docId = `${languageId}_${categoryId}_${index + 1}`;
        const docRef = collectionRef.doc(docId);
        console.log(`Adding document ${docId} to batch`);
        batch.set(docRef, item);
      });

      console.log(`Committing batch with ${sampleData.length} documents`);
      await batch.commit();
      
      console.log(`✅ Successfully imported ${sampleData.length} items to ${collectionName}`);
      return {
        success: true,
        count: sampleData.length,
        collection: collectionName
      };

    } catch (error) {
      console.error(`❌ Import failed for ${languageId} - ${categoryId}:`, error);
      console.error('Error details:', error.message);
      console.error('Error stack:', error.stack);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Import all available content for a language
   */
  async importAllLanguageContent(languageId) {
    const results = [];
    const languageContent = SAMPLE_CONTENT[languageId];
    
    if (!languageContent) {
      return { success: false, error: `No content available for ${languageId}` };
    }

    for (const categoryId of Object.keys(languageContent)) {
      const result = await this.importSampleContent(languageId, categoryId);
      results.push({ categoryId, ...result });
      
      // Add delay between imports to avoid overwhelming Firebase
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    const successful = results.filter(r => r.success).length;
    const total = results.length;

    return {
      success: successful === total,
      results,
      summary: `${successful}/${total} categories imported successfully`
    };
  }

  /**
   * Check if content already exists in a collection
   */
  async checkExistingContent(languageId, categoryId) {
    try {
      const collectionName = getCollectionName(languageId, categoryId);
      const snapshot = await this.db.collection(collectionName).limit(1).get();
      
      return {
        exists: !snapshot.empty,
        count: snapshot.size,
        collection: collectionName
      };
    } catch (error) {
      return {
        exists: false,
        error: error.message
      };
    }
  }

  /**
   * Add custom content item
   */
  async addCustomContent(languageId, categoryId, contentItem) {
    try {
      const collectionName = getCollectionName(languageId, categoryId);
      const docRef = this.db.collection(collectionName).doc();
      
      const dataToAdd = {
        ...contentItem,
        id: docRef.id,
        language: languageId,
        category: categoryId,
        created_at: new Date().toISOString(),
        source: 'custom'
      };

      await docRef.set(dataToAdd);
      
      return {
        success: true,
        id: docRef.id,
        collection: collectionName
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Get content statistics for all languages
   */
  async getContentStatistics() {
    const stats = {};
    
    for (const languageId of Object.keys(SAMPLE_CONTENT)) {
      stats[languageId] = {};
      const languageContent = SAMPLE_CONTENT[languageId];
      
      for (const categoryId of Object.keys(languageContent)) {
        try {
          const collectionName = getCollectionName(languageId, categoryId);
          const snapshot = await this.db.collection(collectionName).get();
          
          stats[languageId][categoryId] = {
            collection: collectionName,
            count: snapshot.size,
            sampleAvailable: languageContent[categoryId].length
          };
        } catch (error) {
          stats[languageId][categoryId] = {
            error: error.message,
            sampleAvailable: languageContent[categoryId].length
          };
        }
      }
    }
    
    return stats;
  }
}

// Export singleton instance
export const contentImporter = new ContentImporter();

// Helper functions for easy use
export const importLanguageContent = async (languageId, categoryId) => {
  return await contentImporter.importSampleContent(languageId, categoryId);
};

export const importAllContent = async (languageId) => {
  return await contentImporter.importAllLanguageContent(languageId);
};

export const checkContentExists = async (languageId, categoryId) => {
  return await contentImporter.checkExistingContent(languageId, categoryId);
};

export const addContent = async (languageId, categoryId, item) => {
  return await contentImporter.addCustomContent(languageId, categoryId, item);
};