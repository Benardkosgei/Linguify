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

const KiswahiliDashboard = ({navigation}) => {
  const learningModules = [
    {
      id: '1',
      icon: 'waving-hand',
      title: 'Greetings',
      description: 'Learn Kiswahili greetings and responses',
      color: '#DC2626',
      category: 'greetings',
    },
    {
      id: '2',
      icon: 'translate',
      title: 'Basic Words',
      description: 'Essential vocabulary for daily conversation',
      color: '#10B981',
      category: 'basic_words',
    },
    {
      id: '3',
      icon: 'chat-bubble',
      title: 'Common Phrases',
      description: 'Useful everyday expressions and phrases',
      color: '#3B82F6',
      category: 'common_phrases',
    },
    {
      id: '4',
      icon: 'numbers',
      title: 'Numbers',
      description: 'Learn counting from 0 to millions',
      color: '#8B5CF6',
      category: 'numbers',
    },
    {
      id: '5',
      icon: 'family-restroom',
      title: 'Family Terms',
      description: 'Family relationships and kinship',
      color: '#F59E0B',
      category: 'family',
    },
    {
      id: '6',
      icon: 'palette',
      title: 'Colors',
      description: 'Learn color names in Kiswahili',
      color: '#EF4444',
      category: 'colors',
    },
    {
      id: '7',
      icon: 'pets',
      title: 'Animals',
      description: 'Wild and domestic animals',
      color: '#06B6D4',
      category: 'animals',
    },
    {
      id: '8',
      icon: 'restaurant',
      title: 'Food & Drinks',
      description: 'Traditional and modern food terms',
      color: '#84CC16',
      category: 'food',
    },
    {
      id: '9',
      icon: 'accessibility',
      title: 'Body Parts',
      description: 'Human body parts and anatomy',
      color: '#F97316',
      category: 'body_parts',
    },
    {
      id: '10',
      icon: 'nature',
      title: 'Nature',
      description: 'Weather, geography, and natural elements',
      color: '#EC4899',
      category: 'nature',
    },
    {
      id: '11',
      icon: 'work',
      title: 'Occupations',
      description: 'Traditional and modern jobs',
      color: '#6366F1',
      category: 'occupations',
    },
    {
      id: '12',
      icon: 'calendar-today',
      title: 'Months',
      description: 'Calendar months and seasons',
      color: '#10B981',
      category: 'months',
    },
    {
      id: '13',
      icon: 'person',
      title: 'Names',
      description: 'Traditional Kiswahili names and meanings',
      color: '#8B5CF6',
      category: 'names',
    },
    {
      id: '14',
      icon: 'psychology',
      title: 'Proverbs',
      description: 'Traditional wisdom and sayings',
      color: '#F59E0B',
      category: 'proverbs',
    },
    {
      id: '15',
      icon: 'celebration',
      title: 'Cultural Practices',
      description: 'Important traditions and customs',
      color: '#EF4444',
      category: 'cultural_practices',
    },
    {
      id: '16',
      icon: 'calendar-view-week',
      title: 'Days of Week',
      description: 'Seven days and their meanings',
      color: '#06B6D4',
      category: 'days_of_week',
    },
    {
      id: '17',
      icon: 'access-time',
      title: 'Time Expressions',
      description: 'Time-related vocabulary and phrases',
      color: '#84CC16',
      category: 'time_expressions',
    },
    {
      id: '18',
      icon: 'explore',
      title: 'Directions',
      description: 'Navigation and location terms',
      color: '#F97316',
      category: 'directions',
    },
    {
      id: '19',
      icon: 'school',
      title: 'School Subjects',
      description: 'Academic subjects and education',
      color: '#EC4899',
      category: 'school_subjects',
    },
    {
      id: '20',
      icon: 'wb-sunny',
      title: 'Weather',
      description: 'Weather conditions and climate',
      color: '#6366F1',
      category: 'weather_conditions',
    }
  ];

  const practiceModules = [
    {
      id: '21',
      icon: 'chat',
      title: 'Sentences',
      description: 'Practice sentence construction',
      screen: 'Sentences',
      color: '#EC4899',
    },
    {
      id: '22',
      icon: 'quiz',
      title: 'Quiz',
      description: 'Test your Kiswahili knowledge',
      screen: 'Quiz',
      color: '#3B82F6',
    }
  ];

  const renderLearningModule = ({item}) => (
    <TouchableOpacity
      style={[styles.moduleCard, { backgroundColor: item.color }]}
      onPress={() => {
        if (item.screen) {
          navigation.navigate(item.screen);
        } else {
          navigation.navigate('KiswahiliContent', {
            title: item.title, 
            description: item.description,
            category: item.category,
            color: item.color,
            language: 'kiswahili'
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
      <StatusBar barStyle="light-content" backgroundColor="#DC2626" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Learn Kiswahili</Text>
        <Text style={styles.headerSubtitle}>Kenya's National Language - Lugha ya Taifa</Text>
      </View>

      {/* Welcome Message */}
      <View style={styles.welcomeCard}>
        <View style={styles.welcomeContent}>
          <MaterialIcons name="star" size={32} color="#FCD34D" />
          <View style={styles.welcomeText}>
            <Text style={styles.welcomeTitle}>Karibu! Welcome!</Text>
            <Text style={styles.welcomeDescription}>
              Start your journey learning Kenya's national language with 800+ authentic words, phrases, and cultural insights across 20 comprehensive categories.
            </Text>
          </View>
        </View>
        
        {/* Quick Import Button */}
        <TouchableOpacity 
          style={styles.importButton}
          onPress={() => navigation.navigate('ContentManager')}
          activeOpacity={0.8}
        >
          <MaterialIcons name="cloud-download" size={20} color="#DC2626" />
          <Text style={styles.importButtonText}>Import Kiswahili Content</Text>
        </TouchableOpacity>
        
        {/* Test Content Button */}
        <TouchableOpacity 
          style={styles.testButton}
          onPress={async () => {
            const { testKiswahiliContent } = require('../../utils/testKiswahiliContent');
            await testKiswahiliContent();
          }}
          activeOpacity={0.8}
        >
          <MaterialIcons name="bug-report" size={20} color="#3B82F6" />
          <Text style={styles.testButtonText}>Test Content Access</Text>
        </TouchableOpacity>
        
        {/* Import Expanded Content Button */}
        <TouchableOpacity 
          style={styles.expandedImportButton}
          onPress={async () => {
            const { importExpandedKiswahiliContent } = require('../../scripts/importExpandedKiswahili');
            console.log('🚀 Starting expanded content import...');
            const result = await importExpandedKiswahiliContent();
            console.log('📊 Import result:', result);
          }}
          activeOpacity={0.8}
        >
          <MaterialIcons name="system-update" size={20} color="#10B981" />
          <Text style={styles.expandedImportButtonText}>Import All 800+ Items</Text>
        </TouchableOpacity>
      </View>

      {/* Learning Modules */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Learning Modules</Text>
        <Text style={styles.sectionSubtitle}>Explore Kiswahili language and culture</Text>
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
    backgroundColor: '#DC2626',
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
    borderColor: '#DC2626',
  },
  importButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#DC2626',
  },
  testButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3B82F6',
  },
  testButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#3B82F6',
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

export default KiswahiliDashboard;