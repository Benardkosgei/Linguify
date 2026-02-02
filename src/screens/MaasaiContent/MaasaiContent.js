import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { firestore } from '../../config/firebase';
import { getCollectionName } from '../../constants/contentStructure';

const MaasaiContent = ({ route, navigation }) => {
  const { title, description, category, color, language } = route.params;
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadContent();
  }, [category, language]);

  const loadContent = () => {
    try {
      setLoading(true);
      setError(null);

      const collectionName = getCollectionName(language, category);
      
      if (!collectionName) {
        setError(`No collection found for ${category}`);
        setLoading(false);
        return;
      }

      console.log(`Loading content from collection: ${collectionName}`);

      const unsubscribe = firestore()
        .collection(collectionName)
        .onSnapshot(
          (snapshot) => {
            const contentData = [];
            snapshot.forEach((doc) => {
              const data = doc.data();
              contentData.push({
                id: doc.id,
                ...data
              });
            });

            console.log(`Loaded ${contentData.length} items from ${collectionName}`);
            setContent(contentData);
            setLoading(false);
          },
          (error) => {
            console.error('Error loading content:', error);
            setError(`Failed to load content: ${error.message}`);
            setLoading(false);
          }
        );

      return unsubscribe;
    } catch (error) {
      console.error('Error setting up content listener:', error);
      setError(`Error: ${error.message}`);
      setLoading(false);
    }
  };

  const renderContentItem = ({ item }) => (
    <View style={styles.contentCard}>
      <View style={styles.contentHeader}>
        <Text style={styles.contentTitle}>
          {item.name || item.word || item.greeting || item.number || item.relationship || 
           item.color || item.animal || item.item || item.body_part || item.element || 
           item.occupation || item.month || item.proverb || item.practice || item.title}
        </Text>
        {item.pronunciation && (
          <TouchableOpacity style={styles.pronunciationButton}>
            <MaterialIcons name="volume-up" size={20} color={color} />
          </TouchableOpacity>
        )}
      </View>
      
      <Text style={styles.contentMeaning}>
        {item.meaning || item.response || item.word || item.term || item.description || 
         item.sound || item.type || item.habitat || item.preparation || item.season || 
         item.context || item.lesson || item.occasion || item.significance || item.story}
      </Text>

      {item.pronunciation && (
        <Text style={styles.pronunciation}>
          Pronunciation: {item.pronunciation}
        </Text>
      )}

      {item.context && (
        <Text style={styles.context}>
          Context: {item.context}
        </Text>
      )}

      {item.cultural_note && (
        <View style={styles.culturalNote}>
          <MaterialIcons name="info" size={16} color="#3B82F6" />
          <Text style={styles.culturalNoteText}>{item.cultural_note}</Text>
        </View>
      )}
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <MaterialIcons name="library-books" size={64} color="#9CA3AF" />
      <Text style={styles.emptyTitle}>No Content Available</Text>
      <Text style={styles.emptyDescription}>
        Content for this category hasn't been imported yet.
      </Text>
      <TouchableOpacity 
        style={[styles.importButton, { backgroundColor: color }]}
        onPress={() => {
          Alert.alert(
            'Import Content',
            'Would you like to import Maasai content for this category?',
            [
              { text: 'Cancel', style: 'cancel' },
              { 
                text: 'Import', 
                onPress: () => navigation.navigate('ContentManager')
              }
            ]
          );
        }}
      >
        <MaterialIcons name="download" size={20} color="white" />
        <Text style={styles.importButtonText}>Import Content</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={color} />
      
      <View style={[styles.header, { backgroundColor: color }]}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerSubtitle}>{description}</Text>
        </View>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={color} />
          <Text style={styles.loadingText}>Loading {title.toLowerCase()}...</Text>
        </View>
      ) : error ? (
        <View style={styles.errorState}>
          <MaterialIcons name="error-outline" size={64} color="#EF4444" />
          <Text style={styles.errorTitle}>Error Loading Content</Text>
          <Text style={styles.errorDescription}>{error}</Text>
        </View>
      ) : content.length === 0 ? (
        renderEmptyState()
      ) : (
        <FlatList
          data={content}
          renderItem={renderContentItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          ListHeaderComponent={() => (
            <View style={styles.statsHeader}>
              <MaterialIcons name="library-books" size={20} color={color} />
              <Text style={[styles.statsText, { color }]}>
                {content.length} {content.length === 1 ? 'item' : 'items'} available
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6B7280',
  },
  statsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  statsText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  contentList: {
    padding: 20,
  },
  contentCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  contentTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginRight: 12,
  },
  pronunciationButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentMeaning: {
    fontSize: 16,
    color: '#4B5563',
    lineHeight: 22,
    marginBottom: 8,
  },
  pronunciation: {
    fontSize: 14,
    color: '#6B7280',
    fontStyle: 'italic',
    marginBottom: 4,
  },
  context: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  culturalNote: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EEF2FF',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  culturalNoteText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#4338CA',
    lineHeight: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374151',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  importButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  importButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  errorState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374151',
    marginTop: 16,
    marginBottom: 8,
  },
  errorDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
});

export default MaasaiContent;