import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const DashboardTwo = ({navigation}) => {
  const learningModules = [
    {
      id: '1',
      icon: 'person',
      title: 'Names & Meanings',
      description: 'Discover the beauty of Kalenjin names',
      color: '#6366F1',
      gradient: ['#6366F1', '#8B5CF6'],
    },
    {
      id: '2',
      icon: 'translate',
      title: 'Basic Words',
      description: 'Essential vocabulary for daily conversation',
      color: '#10B981',
      gradient: ['#10B981', '#059669'],
    },
    {
      id: '3',
      icon: 'groups',
      title: 'Clans (Ortinweek)',
      description: 'Traditional clan system and heritage',
      color: '#F59E0B',
      gradient: ['#F59E0B', '#D97706'],
    },
    {
      id: '4',
      icon: 'card-giftcard',
      title: 'Dowry Traditions',
      description: 'Cultural practices and customs',
      color: '#EF4444',
      gradient: ['#EF4444', '#DC2626'],
    },
    {
      id: '5',
      icon: 'calendar-today',
      title: 'Months (Araek)',
      description: 'Traditional calendar system',
      color: '#8B5CF6',
      gradient: ['#8B5CF6', '#7C3AED'],
    },
    {
      id: '6',
      icon: 'auto-stories',
      title: 'Legends',
      description: 'Ancient stories and folklore',
      color: '#06B6D4',
      gradient: ['#06B6D4', '#0891B2'],
    },
    {
      id: '7',
      icon: 'psychology',
      title: 'Wise Sayings',
      description: 'Traditional wisdom and proverbs',
      color: '#84CC16',
      gradient: ['#84CC16', '#65A30D'],
    },
    {
      id: '8',
      icon: 'account-tree',
      title: 'Sub-tribes',
      description: 'Kalenjin community structure',
      color: '#F97316',
      gradient: ['#F97316', '#EA580C'],
    }
  ];

  const practiceModules = [
    {
      id: '9',
      icon: 'chat',
      title: 'Sentences',
      description: 'Practice sentence construction',
      screen: 'Sentences',
      color: '#EC4899',
      gradient: ['#EC4899', '#DB2777'],
    },
    {
      id: '10',
      icon: 'quiz',
      title: 'Quiz',
      description: 'Test your knowledge',
      screen: 'Quiz',
      color: '#3B82F6',
      gradient: ['#3B82F6', '#2563EB'],
    },
    {
      id: '11',
      icon: 'settings',
      title: 'Content Manager',
      description: 'Manage app content',
      screen: 'ContentManager',
      color: '#8B5CF6',
      gradient: ['#8B5CF6', '#7C3AED'],
    },
    {
      id: '12',
      icon: 'science',
      title: 'Firebase Tools',
      description: 'Test Firebase connection',
      screen: 'FirebaseTestScreen',
      color: '#F97316',
      gradient: ['#F97316', '#EA580C'],
    }
  ];

  const renderLearningModule = ({item}) => (
    <TouchableOpacity
      style={[styles.moduleCard, { backgroundColor: item.color }]}
      onPress={() => {
        if (item.screen) {
          navigation.navigate(item.screen);
        } else {
          navigation.navigate('Content', {
            title: item.title, 
            description: item.description,
            itemid: item.id,
            color: item.color
          });
        }
      }}
      activeOpacity={0.8}
    >
      <View style={styles.moduleContent}>
        <View style={styles.iconContainer}>
          <MaterialIcons name={item.icon} size={32} color="white" />
        </View>
        <View style={styles.moduleText}>
          <Text style={styles.moduleTitle}>{item.title}</Text>
          <Text style={styles.moduleDescription}>{item.description}</Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color="rgba(255,255,255,0.8)" />
      </View>
    </TouchableOpacity>
  );

  const renderPracticeModule = ({item}) => (
    <TouchableOpacity
      style={[styles.practiceCard, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate(item.screen)}
      activeOpacity={0.8}
    >
      <MaterialIcons name={item.icon} size={28} color="white" />
      <Text style={styles.practiceTitle}>{item.title}</Text>
      <Text style={styles.practiceDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#1F2937" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Learn Kalenjin</Text>
        <Text style={styles.headerSubtitle}>Part of Kenya's rich linguistic heritage - Discover Kalenjin language and culture</Text>
      </View>

      {/* History Section */}
      <TouchableOpacity
        style={styles.historyCard}
        onPress={() => navigation.navigate('About')}
        activeOpacity={0.8}
      >
        <View style={styles.historyContent}>
          <MaterialIcons name="history-edu" size={32} color="white" />
          <View style={styles.historyText}>
            <Text style={styles.historyTitle}>Keiyo History</Text>
            <Text style={styles.historyDescription}>Learn about our rich heritage</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="rgba(255,255,255,0.8)" />
        </View>
      </TouchableOpacity>

      {/* Learning Modules */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Learning Modules</Text>
        <Text style={styles.sectionSubtitle}>Explore language and culture</Text>
      </View>

      <View style={styles.modulesList}>
        {learningModules.map((item) => renderLearningModule({ item }))}
      </View>

      {/* Practice Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Practice</Text>
        <Text style={styles.sectionSubtitle}>Test your knowledge</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.practiceList}
      >
        {practiceModules.map((item) => renderPracticeModule({ item }))}
      </ScrollView>

      {/* Quick Import Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Developer Tools</Text>
        <Text style={styles.sectionSubtitle}>Content management</Text>
      </View>

      <TouchableOpacity
        style={styles.importButton}
        onPress={async () => {
          try {
            console.log('🔍 Running debug check...');
            const { debugImport } = await import('../../utils/debugImport');
            debugImport();
            
            console.log('🧪 Testing single category import...');
            const { testSingleImport } = await import('../../utils/debugImport');
            const result = await testSingleImport('basic_words');
            
            if (result.success) {
              alert(`Debug test successful! Imported ${result.count} items`);
            } else {
              alert(`Debug test failed: ${result.error}`);
            }
          } catch (error) {
            alert(`Debug failed: ${error.message}`);
            console.error('Debug error:', error);
          }
        }}
        activeOpacity={0.8}
      >
        <View style={styles.importButtonContent}>
          <MaterialIcons name="bug-report" size={32} color="white" />
          <View style={styles.importButtonText}>
            <Text style={styles.importButtonTitle}>Debug Import Issue</Text>
            <Text style={styles.importButtonDescription}>Test single category import</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="rgba(255,255,255,0.8)" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.importButton, { backgroundColor: '#10B981' }]}
        onPress={async () => {
          try {
            console.log('🚀 Starting Kiswahili Import...');
            const { importKiswahili } = await import('../../utils/quickImport');
            const result = await importKiswahili();
            
            if (result.success) {
              alert(`Success! Imported ${result.totalItems || 'all'} Kiswahili items`);
            } else {
              alert(`Import completed with some issues. Check console for details.`);
            }
          } catch (error) {
            alert(`Import failed: ${error.message}`);
            console.error('Import error:', error);
          }
        }}
        activeOpacity={0.8}
      >
        <View style={styles.importButtonContent}>
          <MaterialIcons name="cloud-upload" size={32} color="white" />
          <View style={styles.importButtonText}>
            <Text style={styles.importButtonTitle}>Import Kiswahili Content</Text>
            <Text style={styles.importButtonDescription}>Add 300+ items to Firebase</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="rgba(255,255,255,0.8)" />
        </View>
      </TouchableOpacity>
      
      {/* Bottom spacing */}
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
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 22,
  },
  historyCard: {
    backgroundColor: '#374151',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  historyContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyText: {
    flex: 1,
    marginLeft: 16,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  historyDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginTop: 32,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  modulesList: {
    paddingHorizontal: 20,
  },
  moduleCard: {
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  moduleContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moduleText: {
    flex: 1,
    marginLeft: 16,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  moduleDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 20,
  },
  practiceList: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  practiceCard: {
    width: 160,
    height: 120,
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  practiceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
    textAlign: 'center',
  },
  practiceDescription: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginTop: 4,
  },
  bottomSpacing: {
    height: 40,
  },
  importButton: {
    backgroundColor: '#10B981',
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  importButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  importButtonText: {
    flex: 1,
    marginLeft: 16,
  },
  importButtonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  importButtonDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
});

export default DashboardTwo;
