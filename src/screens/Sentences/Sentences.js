import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  StatusBar 
} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Sentences = () => {
  const sentences = [
    { kalenjin: 'Chamgei', english: 'Hello' },
    { kalenjin: 'Amunee nee?', english: 'How are you?' },
    { kalenjin: 'Amunee kogeny', english: 'I am fine' },
    { kalenjin: 'Kainet ap nee?', english: 'What is your name?' },
    { kalenjin: 'Kainet ap….. ', english: 'My name is…..' },
    { kalenjin: 'Achamin angen', english: 'I love you' },
    { kalenjin: 'Mutyo', english: 'Thank you' },
    { kalenjin: 'Sai we', english: 'Goodbye' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#EC4899" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Learn Sentences</Text>
        <Text style={styles.headerSubtitle}>Master basic Kalenjin conversations</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{sentences.length}</Text>
          <Text style={styles.statLabel}>Sentences</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {sentences.map((sentence, index) => (
          <View key={index} style={styles.sentenceCard}>
            <View style={styles.sentenceHeader}>
              <View style={styles.sentenceNumber}>
                <Text style={styles.sentenceNumberText}>{index + 1}</Text>
              </View>
              <TouchableOpacity style={styles.audioButton}>
                <MaterialIcons name="volume-up" size={24} color="#EC4899" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.sentenceContent}>
              <Text style={styles.kalenjinText}>{sentence.kalenjin}</Text>
              <Text style={styles.englishText}>{sentence.english}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Sentences

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#EC4899',
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
    color: 'rgba(255,255,255,0.9)',
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
    borderLeftColor: '#EC4899',
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
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sentenceCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sentenceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 0,
  },
  sentenceNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EC4899',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sentenceNumberText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  audioButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FDF2F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sentenceContent: {
    padding: 20,
    paddingTop: 16,
  },
  kalenjinText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    lineHeight: 28,
  },
  englishText: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 22,
  },
});
