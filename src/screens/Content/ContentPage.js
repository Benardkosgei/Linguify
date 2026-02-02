import React, { useState, useEffect }  from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Alert, 
  StatusBar,
  TouchableOpacity,
  ActivityIndicator 
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { firestore } from '../../config/firebase';
import { COLLECTIONS } from '../../constants/collections';
const ContentPage = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const { title, description, itemid, color = '#6366F1' } = route.params;

  // Collection mapping based on item ID
  const getCollectionName = (id) => {
    // Convert string ID to number for comparison
    const numericId = parseInt(id, 10);
    console.log('Getting collection for ID:', id, 'converted to:', numericId);
    console.log('Available collections:', COLLECTIONS);
    
    switch (numericId) {
      case 1: 
        console.log('Mapping ID 1 to:', COLLECTIONS.KALENJIN_NAMES);
        return COLLECTIONS.KALENJIN_NAMES;
      case 2: 
        console.log('Mapping ID 2 to:', COLLECTIONS.BASIC_WORDS);
        return COLLECTIONS.BASIC_WORDS;
      case 3: // Clans - might not have data yet
        console.log('Clans - no collection yet for ID:', numericId);
        return 'COMING_SOON';
      case 4: 
        console.log('Mapping ID 4 to:', COLLECTIONS.DOWRY);
        return COLLECTIONS.DOWRY;
      case 5: 
        console.log('Mapping ID 5 to:', COLLECTIONS.MONTHS);
        return COLLECTIONS.MONTHS;
      case 6: 
        console.log('Mapping ID 6 to:', COLLECTIONS.LEGENDS);
        return COLLECTIONS.LEGENDS;
      case 7: // Kalenjin Tribe - could map to wise sayings or create separate
        console.log('Mapping ID 7 to:', COLLECTIONS.WISE_SAYINGS);
        return COLLECTIONS.WISE_SAYINGS;
      case 8: 
        console.log('Mapping ID 8 to:', COLLECTIONS.SUBTRIBES);
        return COLLECTIONS.SUBTRIBES;
      default: 
        console.log('No mapping found for ID:', numericId);
        return null;
    }
  };

  useEffect(() => {
    console.log('ContentPage - Loading data for ID:', itemid);
    
    const collectionName = getCollectionName(itemid);
    
    if (!collectionName) {
      console.log('No collection mapped for item ID:', itemid);
      setLoading(false);
      setError('This content section is not yet configured.');
      return;
    }
    
    if (collectionName === 'COMING_SOON') {
      console.log('Content coming soon for item ID:', itemid);
      setLoading(false);
      setError(null);
      setData([]);
      return;
    }

    console.log('Fetching from collection:', collectionName);
    
    const unsubscribe = firestore()
      .collection(collectionName)
      .onSnapshot(
        (querySnapshot) => {
          console.log('Firebase snapshot received, size:', querySnapshot.size);
          
          const items = [];
          querySnapshot.forEach(documentSnapshot => {
            const docData = documentSnapshot.data();
            console.log('Document data:', docData);
            
            items.push({
              ...docData,
              key: documentSnapshot.id,
            });
          });
          
          console.log('Total items loaded:', items.length);
          setData(items);
          setLoading(false);
          setError(null);
        },
        (error) => {
          console.error('Firebase error:', error);
          setError(error.message);
          setLoading(false);
          
          Alert.alert(
            'Firebase Error',
            `Failed to load data: ${error.message}`,
            [{ text: 'OK' }]
          );
        }
      );

    return () => {
      console.log('Unsubscribing from Firebase listener');
      unsubscribe();
    };
  }, [itemid]);
  
  const renderItem = ({ item, index }) => (
    <TouchableOpacity 
      style={styles.itemCard}
      activeOpacity={0.7}
    >
      <View style={styles.itemHeader}>
        <View style={[styles.itemNumber, { backgroundColor: color }]}>
          <Text style={styles.itemNumberText}>{index + 1}</Text>
        </View>
        <View style={styles.itemContent}>
          <Text style={styles.itemName}>{item.name || 'No name'}</Text>
          <Text style={styles.itemMeaning}>{item.meaning || 'No meaning'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={color} />
      
      {/* Header */}
      <View style={[styles.header, { backgroundColor: color }]}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerDescription}>{description}</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={color} />
            <Text style={styles.loadingText}>Loading content...</Text>
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <MaterialIcons name="error-outline" size={64} color="#EF4444" />
            <Text style={styles.errorText}>Oops! Something went wrong</Text>
            <Text style={styles.errorSubtext}>{error}</Text>
          </View>
        ) : data.length === 0 ? (
          <View style={styles.emptyContainer}>
            <MaterialIcons 
              name={getCollectionName(itemid) === 'COMING_SOON' ? "construction" : "inbox"} 
              size={64} 
              color="#9CA3AF" 
            />
            <Text style={styles.emptyText}>
              {getCollectionName(itemid) === 'COMING_SOON' ? 
                '🚧 Content Coming Soon!' : 
                'No content available'
              }
            </Text>
            <Text style={styles.emptySubtext}>
              {getCollectionName(itemid) === 'COMING_SOON' ? 
                'This section is being prepared and will be available in a future update.' : 
                'This collection appears to be empty'
              }
            </Text>
          </View>
        ) : (
          <>
            <View style={styles.statsContainer}>
              <View style={[styles.statCard, { borderLeftColor: color }]}>
                <Text style={styles.statNumber}>{data.length}</Text>
                <Text style={styles.statLabel}>Items</Text>
              </View>
            </View>
            
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.key}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.listContainer}
            />
          </>
        )}
      </View>
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
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 22,
  },
  content: {
    flex: 1,
    marginTop: -12,
  },
  statsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  itemCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 20,
  },
  itemNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemNumberText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 24,
  },
  itemMeaning: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 22,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  loadingText: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EF4444',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  errorSubtext: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374151',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default ContentPage;