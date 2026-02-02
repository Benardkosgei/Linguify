import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  FlatList,
  StatusBar 
} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation } from '@react-navigation/native';
import { KENYAN_LANGUAGES } from '../../constants/languages';

const Home = () => {
  const navigation = useNavigation();
  
  // Convert language constants to array format for FlatList
  const languages = Object.values(KENYAN_LANGUAGES).map((lang, index) => ({
    id: (index + 1).toString(),
    name: `Learn ${lang.name}`,
    description: `${lang.region} - ${lang.speakers} speakers`,
    color: lang.color,
    available: lang.available,
    nativeName: lang.nativeName
  }));

  const handleLanguageSelect = (language) => {
    if (language.available) {
      if (language.name.includes('Kiswahili')) {
        navigation.navigate('KiswahiliDashboard');
      } else if (language.name.includes('Kikuyu')) {
        navigation.navigate('KikuyuDashboard');
      } else if (language.name.includes('Luhya')) {
        navigation.navigate('LuhyaDashboard');
      } else if (language.name.includes('Maasai')) {
        navigation.navigate('MaasaiDashboard');
      } else if (language.name.includes('Luo')) {
        navigation.navigate('LuoDashboard');
      } else if (language.name.includes('Kalenjin')) {
        navigation.navigate('KalenjinDashboard');
      } else if (language.name.includes('Kisii')) {
        navigation.navigate('KisiiDashboard');
      } else if (language.name.includes('Kamba')) {
        navigation.navigate('KambaDashboard');
      } else {
        // For other available languages
        navigation.navigate('DashboardTwo');
      }
    }
  };

  const renderLanguageCard = ({ item }) => (
    <TouchableOpacity 
      style={[
        styles.languageCard, 
        { backgroundColor: item.available ? item.color : '#9CA3AF' },
        item.name.includes('Kiswahili') && styles.nationalLanguageCard
      ]}
      onPress={() => handleLanguageSelect(item)}
      activeOpacity={0.8}
      disabled={!item.available}
    >
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <View style={styles.iconContainer}>
            <MaterialIcons 
              name={item.available ? "translate" : item.name.includes('Kiswahili') ? "star" : "lock"} 
              size={32} 
              color="white" 
            />
          </View>
          {item.name.includes('Kiswahili') && (
            <View style={styles.nationalBadge}>
              <Text style={styles.nationalBadgeText}>National Language</Text>
            </View>
          )}
          {!item.available && !item.name.includes('Kiswahili') && (
            <View style={styles.comingSoonBadge}>
              <Text style={styles.comingSoonText}>Coming Soon</Text>
            </View>
          )}
        </View>
        
        <View style={styles.cardBody}>
          <Text style={styles.languageName}>{item.name}</Text>
          {item.nativeName && (
            <Text style={styles.nativeName}>({item.nativeName})</Text>
          )}
          <Text style={styles.languageDescription}>{item.description}</Text>
        </View>
        
        <View style={styles.cardFooter}>
          <MaterialIcons 
            name="arrow-forward" 
            size={24} 
            color={item.available ? "white" : "rgba(255,255,255,0.5)"} 
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1F2937" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Choose Your Language</Text>
        <Text style={styles.headerSubtitle}>
          From Kiswahili to local languages - Begin your Kenyan cultural learning journey
        </Text>
      </View>

      {/* Language List */}
      <FlatList
        data={languages}
        renderItem={renderLanguageCard}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  )
}

export default Home
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
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 22,
  },
  listContainer: {
    padding: 20,
    paddingTop: 24,
  },
  languageCard: {
    borderRadius: 20,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  nationalLanguageCard: {
    borderWidth: 2,
    borderColor: '#FCD34D',
    elevation: 6,
  },
  cardContent: {
    padding: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  comingSoonBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  comingSoonText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  nationalBadge: {
    backgroundColor: '#FCD34D',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  nationalBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#92400E',
  },
  cardBody: {
    marginBottom: 20,
  },
  languageName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  nativeName: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  languageDescription: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 22,
  },
  cardFooter: {
    alignItems: 'flex-end',
  },
});