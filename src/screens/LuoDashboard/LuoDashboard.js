import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LuoDashboard = ({navigation}) => {
  const learningModules = [
    {
      id: '1',
      icon: 'waving-hand',
      title: 'Greetings',
      description: 'Learn Luo greetings and responses',
      color: '#F59E0B',
      category: 'greetings',
    },
    {
      id: '2',
      icon: 'translate',
      title: 'Basic Words',
      description: 'Essential Dholuo vocabulary',
      color: '#10B981',
      category: 'basic_words',
    },
    {
      id: '3',
      icon: 'numbers',
      title: 'Numbers',
      description: 'Learn counting in Dholuo',
      color: '#EF4444',
      category: 'numbers',
    },
    {
      id: '4',
      icon: 'family-restroom',
      title: 'Family Terms',
      description: 'Family relationships and kinship',
      color: '#8B5CF6',
      category: 'family',
    },
    {
      id: '5',
      icon: 'palette',
      title: 'Colors',
      description: 'Learn color names in Luo',
      color: '#F59E0B',
      category: 'colors',
    },
    {
      id: '6',
      icon: 'pets',
      title: 'Animals',
      description: 'Livestock and wild animals',
      color: '#DC2626',
      category: 'animals',
    },
    {
      id: '7',
      icon: 'restaurant',
      title: 'Food & Drinks',
      description: 'Traditional Luo cuisine',
      color: '#06B6D4',
      category: 'food',
    },
    {
      id: '8',
      icon: 'accessibility',
      title: 'Body Parts',
      description: 'Human body parts in Dholuo',
      color: '#84CC16',
      category: 'body_parts',
    },
    {
      id: '9',
      icon: 'nature',
      title: 'Nature',
      description: 'Natural elements and environment',
      color: '#F97316',
      category: 'nature',
    },
    {
      id: '10',
      icon: 'work',
      title: 'Occupations',
      description: 'Traditional and modern jobs',
      color: '#EC4899',
      category: 'occupations',
    },
    {
      id: '11',
      icon: 'calendar-today',
      title: 'Months',
      description: 'Calendar months and seasons',
      color: '#6366F1',
      category: 'months',
    },
    {
      id: '12',
      icon: 'person',
      title: 'Names',
      description: 'Traditional Luo names and meanings',
      color: '#10B981',
      category: 'names',
    },
    {
      id: '13',
      icon: 'psychology',
      title: 'Proverbs',
      description: 'Traditional wisdom and sayings',
      color: '#8B5CF6',
      category: 'proverbs',
    },
    {
      id: '14',
      icon: 'celebration',
      title: 'Cultural Practices',
      description: 'Important ceremonies and traditions',
      color: '#F59E0B',
      category: 'cultural_practices',
    }
  ];

  const practiceModules = [
    {
      id: '15',
      icon: 'chat',
      title: 'Sentences',
      description: 'Practice sentence construction',
      screen: 'Sentences',
      color: '#EC4899',
    },
    {
      id: '16',
      icon: 'quiz',
      title: 'Quiz',
      description: 'Test your Luo knowledge',
      screen: 'Quiz',
      color: '#F59E0B',
    }
  ];

  const renderLearningModule = ({item}) => (
    <TouchableOpacity
      style={[styles.moduleCard, { backgroundColor: item.color }]}
      onPress={() => {
        if (item.screen) {
          navigation.navigate(item.screen);
        } else {
          navigation.navigate('LuoContent', {
            title: item.title, 
            description: item.description,
            category: item.category,
            color: item.color,
            language: 'luo'
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
      <StatusBar barStyle="light-content" backgroundColor="#F59E0B" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Learn Luo</Text>
        <Text style={styles.headerSubtitle}>Dholuo - The Language of Lake Victoria</Text>
      </View>

      {/* Welcome Message */}
      <View style={styles.welcomeCard}>
        <View style={styles.welcomeContent}>
          <MaterialIcons name="star" size={32} color="#FCD34D" />
          <View style={styles.welcomeText}>
            <Text style={styles.welcomeTitle}>Nadi! Welcome!</Text>
            <Text style={styles.welcomeDescription}>
              Explore the rich language of the Luo people with 600+ authentic words, phrases, and cultural insights across 14 comprehensive categories.
            </Text>
          </View>
        </View>
        
        {/* Quick Import Button */}
        <TouchableOpacity 
          style={styles.importButton}
          onPress={() => navigation.navigate('ContentManager')}
          activeOpacity={0.8}
        >
          <MaterialIcons name="cloud-download" size={20} color="#F59E0B" />
          <Text style={styles.importButtonText}>Import Luo Content</Text>
        </TouchableOpacity>
        
        {/* Import All Content Button */}
        <TouchableOpacity 
          style={styles.expandedImportButton}
          onPress={async () => {
            console.log('🚀 Starting Luo content import...');
            const { importLuoContent } = require('../../scripts/importLuo');
            const result = await importLuoContent();
            console.log('📊 Import result:', result);
          }}
          activeOpacity={0.8}
        >
          <MaterialIcons name="system-update" size={20} color="#10B981" />
          <Text style={styles.expandedImportButtonText}>Import All 600+ Items</Text>
        </TouchableOpacity>
      </View>

      {/* Learning Modules */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Learning Modules</Text>
        <Text style={styles.sectionSubtitle}>Explore Dholuo language and culture</Text>
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
    backgroundColor: '#F59E0B',
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
  welcomeCard: {
    backgroundColor: '#FEF3C7',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: '#FCD34D',
  },
  welcomeContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  welcomeText: {
    flex: 1,
    marginLeft: 16,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#92400E',
    marginBottom: 8,
  },
  welcomeDescription: {
    fontSize: 16,
    color: '#A16207',
    lineHeight: 22,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#F59E0B',
  },
  importButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#F59E0B',
  },
  expandedImportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#10B981',
  },
  expandedImportButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#10B981',
  },
});

export default LuoDashboard;