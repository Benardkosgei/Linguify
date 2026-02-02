import { 
  StyleSheet, 
  Text, 
  View, 
  Dimensions, 
  TouchableOpacity, 
  StatusBar,
  SafeAreaView 
} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get("window").height;

const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1F2937" />
      
      <View style={styles.content}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="translate" size={80} color="white" />
          </View>
          
          <Text style={styles.mainTitle}>
            Learn Today{'\n'}
            <Text style={styles.accentText}>Earn Tomorrow</Text>
          </Text>
          
          <Text style={styles.subtitle}>
            Enhance your language learning journey with Linguify - 
            From Kiswahili to local languages, master Kenya's diverse languages and discover rich cultural heritage
          </Text>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <MaterialIcons name="public" size={32} color="#10B981" />
            <Text style={styles.featureText}>Kenyan Languages</Text>
          </View>
          <View style={styles.featureItem}>
            <MaterialIcons name="quiz" size={32} color="#3B82F6" />
            <Text style={styles.featureText}>Interactive Learning</Text>
          </View>
          <View style={styles.featureItem}>
            <MaterialIcons name="history-edu" size={32} color="#F59E0B" />
            <Text style={styles.featureText}>Cultural Heritage</Text>
          </View>
        </View>

        {/* CTA Button */}
        <TouchableOpacity 
          style={styles.ctaButton} 
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.8}
        >
          <Text style={styles.ctaButtonText}>Get Started</Text>
          <MaterialIcons name="arrow-forward" size={24} color="#1F2937" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Dashboard
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2937',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 40,
  },
  heroSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  mainTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 48,
  },
  accentText: {
    color: '#10B981',
  },
  subtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 48,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 48,
    paddingHorizontal: 20,
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
  },
  featureText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '600',
  },
  ctaButton: {
    backgroundColor: '#10B981',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  ctaButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginRight: 8,
  },
});