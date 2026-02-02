import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  StatusBar,
  ScrollView 
} from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'What is the Kalenjin word for "Hello"?',
      options: ['Chamgei', 'Amunee nee?', 'Mutyo', 'Sai we'],
      answer: 'Chamgei',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "How are you?"?',
      options: ['Amunee kogeny', 'Kainet ap nee?', 'Amunee nee?', 'Achamin angen'],
      answer: 'Amunee nee?',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "I am fine"?',
      options: ['Achamin angen', 'Amunee kogeny', 'Kainet ap nee?', 'Mutyo'],
      answer: 'Amunee kogeny',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "What is your name?"?',
      options: ['Kainet ap nee?', 'Kainet ap….. ', 'Amunee nee?', 'Chamgei'],
      answer: 'Kainet ap nee?',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "My name is….."?',
      options: ['Kainet ap….. ', 'Kainet ap nee?', 'Amunee kogeny', 'Achamin angen'],
      answer: 'Kainet ap….. ',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "I love you"?',
      options: ['Achamin angen', 'Mutyo', 'Sai we', 'Chamgei'],
      answer: 'Achamin angen',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "Thank you"?',
      options: ['Mutyo', 'Achamin angen', 'Sai we', 'Amunee nee?'],
      answer: 'Mutyo',
      selectedOption: null,
    },
    {
      question: 'What is the Kalenjin word for "Goodbye"?',
      options: ['Sai we', 'Mutyo', 'Chamgei', 'Amunee kogeny'],
      answer: 'Sai we',
      selectedOption: null,
    },
  ]);

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (questionIndex, option) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].selectedOption = option;
    setQuestions(newQuestions);
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question) => {
      if (question.selectedOption === question.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowScore(true);
  };

  const handleReset = () => {
    const resetQuestions = questions.map(question => ({
      ...question,
      selectedOption: null,
    }));
    setQuestions(resetQuestions);
    setScore(0);
    setShowScore(false);
  };

  const renderOption = (option, questionIndex, optionIndex) => {
    const isSelected = questions[questionIndex].selectedOption === option;
    return (
      <TouchableOpacity
        key={optionIndex}
        style={[styles.optionButton, isSelected && styles.selectedOption]}
        onPress={() => handleOptionSelect(questionIndex, option)}
        activeOpacity={0.7}
      >
        <View style={[styles.optionCircle, isSelected && styles.selectedCircle]}>
          {isSelected && <MaterialIcons name="check" size={16} color="white" />}
        </View>
        <Text style={[styles.optionText, isSelected && styles.selectedOptionText]}>
          {option}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3B82F6" />
      
      {showScore ? (
        <View style={styles.scoreContainer}>
          <View style={styles.scoreCard}>
            <MaterialIcons name="emoji-events" size={80} color="#F59E0B" />
            <Text style={styles.scoreTitle}>Quiz Complete!</Text>
            <Text style={styles.scoreText}>
              Your score: {score}/{questions.length}
            </Text>
            <Text style={styles.scorePercentage}>
              {Math.round((score / questions.length) * 100)}%
            </Text>
            <TouchableOpacity style={styles.retryButton} onPress={handleReset}>
              <MaterialIcons name="refresh" size={20} color="white" />
              <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <ScrollView style={styles.scrollView}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Kalenjin Quiz</Text>
            <Text style={styles.headerSubtitle}>Test your knowledge</Text>
          </View>

          {/* Progress */}
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>
              Question {questions.findIndex(q => !q.selectedOption) + 1 || questions.length} of {questions.length}
            </Text>
            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill, 
                  { width: `${(questions.filter(q => q.selectedOption).length / questions.length) * 100}%` }
                ]} 
              />
            </View>
          </View>

          {/* Questions */}
          {questions.map((question, questionIndex) => (
            <View key={questionIndex} style={styles.questionCard}>
              <Text style={styles.questionNumber}>Question {questionIndex + 1}</Text>
              <Text style={styles.questionText}>{question.question}</Text>
              
              <View style={styles.optionsContainer}>
                {question.options.map((option, optionIndex) => 
                  renderOption(option, questionIndex, optionIndex)
                )}
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit Quiz</Text>
            <MaterialIcons name="send" size={20} color="white" />
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3B82F6',
    paddingTop: 20,
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
  progressContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 4,
  },
  questionCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  questionNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B82F6',
    marginBottom: 8,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 20,
    lineHeight: 24,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    backgroundColor: '#F9FAFB',
  },
  selectedOption: {
    borderColor: '#3B82F6',
    backgroundColor: '#EFF6FF',
  },
  optionCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCircle: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  optionText: {
    fontSize: 16,
    color: '#374151',
    flex: 1,
  },
  selectedOptionText: {
    color: '#1F2937',
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#3B82F6',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scoreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  scoreCard: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 40,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    width: '100%',
  },
  scoreTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 20,
    marginBottom: 16,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  scorePercentage: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3B82F6',
    marginBottom: 32,
  },
  retryButton: {
    backgroundColor: '#10B981',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
