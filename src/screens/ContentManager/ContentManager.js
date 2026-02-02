import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { KENYAN_LANGUAGES } from '../../constants/languages';
import { CONTENT_CATEGORIES, getLanguageCategories } from '../../constants/contentStructure';
import { SAMPLE_CONTENT, generateFirebaseData } from '../../data/sampleContent';

const ContentManager = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLanguageSelect = (languageId) => {
    setSelectedLanguage(languageId);
  };

  const handleAddSampleContent = async (languageId, categoryId) => {
    setLoading(true);
    
    try {
      console.log(`Starting import for ${languageId} - ${categoryId}`);
      
      // Import the content using our utility
      const { importLanguageContent } = await import('../../utils/contentImporter');
      const result = await importLanguageContent(languageId, categoryId);
      
      if (result.success) {
        Alert.alert(
          'Success! 🎉',
          `Successfully imported ${result.count} items to ${result.collection}`,
          [{ text: 'OK' }]
        );
      } else {
        Alert.alert(
          'Import Failed',
          `Error: ${result.error}`,
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('Import error:', error);
      Alert.alert('Error', `Failed to import content: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleImportAllLanguage = async (languageId) => {
    setLoading(true);
    
    try {
      console.log(`Starting full import for ${languageId}`);
      
      Alert.alert(
        'Import All Content',
        `This will import ALL content for ${KENYAN_LANGUAGES[languageId.toUpperCase()]?.name}. This may take a few minutes. Continue?`,
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Import All', 
            onPress: async () => {
              try {
                const { importAllContent } = await import('../../utils/contentImporter');
                const result = await importAllContent(languageId);
                
                if (result.success) {
                  Alert.alert(
                    'Complete! 🎉',
                    result.summary,
                    [{ text: 'OK' }]
                  );
                } else {
                  Alert.alert(
                    'Partial Success',
                    `${result.summary}\n\nSome categories may have failed. Check console for details.`,
                    [{ text: 'OK' }]
                  );
                }
              } catch (error) {
                Alert.alert('Error', `Failed to import all content: ${error.message}`);
              } finally {
                setLoading(false);
              }
            }
          }
        ]
      );
    } catch (error) {
      Alert.alert('Error', `Failed to start import: ${error.message}`);
      setLoading(false);
    }
  };

  const renderLanguageSelector = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Select Language</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Object.values(KENYAN_LANGUAGES).map((language) => (
          <TouchableOpacity
            key={language.id}
            style={[
              styles.languageChip,
              { backgroundColor: language.color },
              selectedLanguage === language.id && styles.selectedChip
            ]}
            onPress={() => handleLanguageSelect(language.id)}
          >
            <Text style={styles.chipText}>{language.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  const renderContentCategories = () => {
    if (!selectedLanguage) return null;

    const categories = getLanguageCategories(selectedLanguage);
    const sampleContent = SAMPLE_CONTENT[selectedLanguage] || {};
    const languageName = KENYAN_LANGUAGES[selectedLanguage.toUpperCase()]?.name;

    return (
      <View style={styles.section}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>
            Content Categories for {languageName}
          </Text>
          
          {Object.keys(sampleContent).length > 0 && (
            <TouchableOpacity
              style={styles.importAllButton}
              onPress={() => handleImportAllLanguage(selectedLanguage)}
              disabled={loading}
            >
              <MaterialIcons name="cloud-upload" size={20} color="white" />
              <Text style={styles.importAllButtonText}>Import All</Text>
            </TouchableOpacity>
          )}
        </View>
        
        {categories.map((category) => {
          const hasContent = sampleContent[category.id];
          const contentCount = hasContent ? sampleContent[category.id].length : 0;
          
          return (
            <View key={category.id} style={styles.categoryCard}>
              <View style={styles.categoryHeader}>
                <MaterialIcons name={category.icon} size={32} color="#374151" />
                <View style={styles.categoryInfo}>
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                  <Text style={styles.categoryDescription}>{category.description}</Text>
                  <Text style={styles.contentStatus}>
                    {hasContent ? `${contentCount} sample items available` : 'No sample content yet'}
                  </Text>
                </View>
              </View>
              
              <View style={styles.categoryActions}>
                {hasContent && (
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => handleAddSampleContent(selectedLanguage, category.id)}
                    disabled={loading}
                  >
                    <MaterialIcons name="upload" size={20} color="white" />
                    <Text style={styles.actionButtonText}>Add to Firebase</Text>
                  </TouchableOpacity>
                )}
                
                <TouchableOpacity
                  style={[styles.actionButton, styles.secondaryButton]}
                  onPress={() => {
                    // Navigate to content creation form
                    Alert.alert('Coming Soon', 'Content creation form will be available soon');
                  }}
                >
                  <MaterialIcons name="add" size={20} color="#374151" />
                  <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>
                    Create Content
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1F2937" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Content Manager</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Instructions */}
      <View style={styles.instructionsCard}>
        <MaterialIcons name="info" size={24} color="#3B82F6" />
        <View style={styles.instructionsText}>
          <Text style={styles.instructionsTitle}>How to Add Content</Text>
          <Text style={styles.instructionsDescription}>
            1. Select a language{'\n'}
            2. Choose a content category{'\n'}
            3. Use sample content or create new content{'\n'}
            4. Upload to Firebase collections
          </Text>
        </View>
      </View>

      {renderLanguageSelector()}
      {renderContentCategories()}
      
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#1F2937',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  instructionsCard: {
    backgroundColor: '#EFF6FF',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  instructionsText: {
    flex: 1,
    marginLeft: 12,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  instructionsDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  importAllButton: {
    backgroundColor: '#10B981',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  importAllButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  languageChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    minWidth: 100,
    alignItems: 'center',
  },
  selectedChip: {
    borderWidth: 3,
    borderColor: '#FCD34D',
  },
  chipText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  categoryCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  categoryInfo: {
    flex: 1,
    marginLeft: 12,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  contentStatus: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '600',
  },
  categoryActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  secondaryButton: {
    backgroundColor: '#F3F4F6',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  secondaryButtonText: {
    color: '#374151',
  },
  bottomSpacing: {
    height: 40,
  },
});

export default ContentManager;