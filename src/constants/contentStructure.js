// Content Structure for All Kenyan Languages
export const CONTENT_CATEGORIES = {
  NAMES: {
    id: 'names',
    title: 'Names & Meanings',
    icon: 'person',
    description: 'Traditional names and their meanings',
    fields: ['name', 'meaning', 'gender', 'occasion']
  },
  BASIC_WORDS: {
    id: 'basic_words',
    title: 'Basic Words',
    icon: 'translate',
    description: 'Essential vocabulary for daily conversation',
    fields: ['word', 'meaning', 'pronunciation', 'category']
  },
  GREETINGS: {
    id: 'greetings',
    title: 'Greetings',
    icon: 'waving-hand',
    description: 'Common greetings and responses',
    fields: ['greeting', 'response', 'context', 'time_of_day']
  },
  NUMBERS: {
    id: 'numbers',
    title: 'Numbers',
    icon: 'numbers',
    description: 'Counting system and numbers',
    fields: ['number', 'word', 'pronunciation']
  },
  FAMILY: {
    id: 'family',
    title: 'Family Terms',
    icon: 'family-restroom',
    description: 'Family relationships and kinship terms',
    fields: ['relationship', 'term', 'gender_specific', 'context']
  },
  COLORS: {
    id: 'colors',
    title: 'Colors',
    icon: 'palette',
    description: 'Color names and descriptions',
    fields: ['color', 'word', 'description']
  },
  ANIMALS: {
    id: 'animals',
    title: 'Animals',
    icon: 'pets',
    description: 'Animal names and sounds',
    fields: ['animal', 'word', 'sound', 'habitat']
  },
  FOOD: {
    id: 'food',
    title: 'Food & Drinks',
    icon: 'restaurant',
    description: 'Traditional and modern food terms',
    fields: ['item', 'word', 'type', 'preparation']
  },
  BODY_PARTS: {
    id: 'body_parts',
    title: 'Body Parts',
    icon: 'accessibility',
    description: 'Human body parts and anatomy',
    fields: ['body_part', 'word', 'pronunciation']
  },
  NATURE: {
    id: 'nature',
    title: 'Nature',
    icon: 'nature',
    description: 'Natural elements and weather',
    fields: ['element', 'word', 'description', 'season']
  },
  PROVERBS: {
    id: 'proverbs',
    title: 'Proverbs & Sayings',
    icon: 'psychology',
    description: 'Traditional wisdom and proverbs',
    fields: ['proverb', 'meaning', 'context', 'lesson']
  },
  CULTURAL_PRACTICES: {
    id: 'cultural_practices',
    title: 'Cultural Practices',
    icon: 'celebration',
    description: 'Traditional ceremonies and customs',
    fields: ['practice', 'description', 'occasion', 'significance']
  },
  MONTHS: {
    id: 'months',
    title: 'Months & Calendar',
    icon: 'calendar-today',
    description: 'Traditional calendar system',
    fields: ['month', 'word', 'season', 'activities']
  },
  OCCUPATIONS: {
    id: 'occupations',
    title: 'Occupations',
    icon: 'work',
    description: 'Traditional and modern occupations',
    fields: ['occupation', 'word', 'description', 'tools']
  },
  LEGENDS: {
    id: 'legends',
    title: 'Legends & Stories',
    icon: 'auto-stories',
    description: 'Traditional stories and folklore',
    fields: ['title', 'story', 'moral', 'characters']
  },
  DAYS_OF_WEEK: {
    id: 'days_of_week',
    title: 'Days of the Week',
    icon: 'calendar-view-week',
    description: 'Seven days of the week',
    fields: ['day', 'word', 'pronunciation', 'meaning']
  },
  TIME_EXPRESSIONS: {
    id: 'time_expressions',
    title: 'Time Expressions',
    icon: 'access-time',
    description: 'Time-related vocabulary',
    fields: ['expression', 'word', 'pronunciation', 'context']
  },
  DIRECTIONS: {
    id: 'directions',
    title: 'Directions',
    icon: 'explore',
    description: 'Directional and location terms',
    fields: ['direction', 'word', 'pronunciation', 'context']
  },
  COMMON_PHRASES: {
    id: 'common_phrases',
    title: 'Common Phrases',
    icon: 'chat-bubble',
    description: 'Useful everyday expressions',
    fields: ['phrase', 'translation', 'pronunciation', 'context']
  },
  SCHOOL_SUBJECTS: {
    id: 'school_subjects',
    title: 'School Subjects',
    icon: 'school',
    description: 'Academic subjects and education',
    fields: ['subject', 'word', 'pronunciation', 'description']
  },
  WEATHER_CONDITIONS: {
    id: 'weather_conditions',
    title: 'Weather Conditions',
    icon: 'wb-sunny',
    description: 'Weather and climate terms',
    fields: ['condition', 'word', 'pronunciation', 'description']
  }
};

// Language-specific content mapping
export const LANGUAGE_CONTENT_MAP = {
  kiswahili: {
    available_categories: ['basic_words', 'greetings', 'numbers', 'family', 'colors', 'animals', 'food', 'body_parts', 'nature', 'occupations', 'months', 'names', 'proverbs', 'cultural_practices', 'days_of_week', 'time_expressions', 'directions', 'common_phrases', 'school_subjects', 'weather_conditions'],
    priority_categories: ['greetings', 'basic_words', 'numbers', 'common_phrases'],
    collection_prefix: 'kiswahili_'
  },
  kikuyu: {
    available_categories: ['basic_words', 'greetings', 'numbers', 'family', 'colors', 'animals', 'food', 'body_parts', 'nature', 'occupations', 'months', 'names', 'proverbs', 'cultural_practices'],
    priority_categories: ['greetings', 'basic_words', 'numbers'],
    collection_prefix: 'kikuyu_'
  },
  luhya: {
    available_categories: ['NAMES', 'BASIC_WORDS', 'GREETINGS', 'NUMBERS', 'FAMILY', 'CULTURAL_PRACTICES'],
    priority_categories: ['NAMES', 'GREETINGS', 'BASIC_WORDS'],
    collection_prefix: 'luhya_'
  },
  luo: {
    available_categories: ['basic_words', 'greetings', 'numbers', 'family', 'colors', 'animals', 'food', 'body_parts', 'nature', 'occupations', 'months', 'names', 'proverbs', 'cultural_practices'],
    priority_categories: ['greetings', 'basic_words', 'numbers'],
    collection_prefix: 'luo_'
  },
  kamba: {
    available_categories: ['basic_words', 'greetings', 'numbers', 'family', 'colors', 'animals', 'food', 'body_parts', 'nature', 'occupations', 'months', 'names', 'proverbs', 'cultural_practices'],
    priority_categories: ['greetings', 'basic_words', 'numbers'],
    collection_prefix: 'kamba_'
  },
  kalenjin: {
    available_categories: ['NAMES', 'BASIC_WORDS', 'GREETINGS', 'NUMBERS', 'FAMILY', 'CULTURAL_PRACTICES', 'MONTHS', 'PROVERBS', 'LEGENDS'],
    priority_categories: ['NAMES', 'BASIC_WORDS', 'CULTURAL_PRACTICES'],
    collection_prefix: 'kalenjin_',
    // Current collections (already implemented)
    existing_collections: {
      'NAMES': 'Kalenjin Names',
      'BASIC_WORDS': 'basicwords',
      'CULTURAL_PRACTICES': 'dowry',
      'MONTHS': 'months',
      'PROVERBS': 'kalenjin_wise_sayings',
      'LEGENDS': 'legends'
    }
  },
  kisii: {
    available_categories: ['basic_words', 'greetings', 'numbers', 'family', 'colors', 'animals', 'food', 'body_parts', 'nature', 'occupations', 'months', 'names', 'proverbs', 'cultural_practices'],
    priority_categories: ['greetings', 'basic_words', 'numbers'],
    collection_prefix: 'kisii_'
  },
  meru: {
    available_categories: ['NAMES', 'BASIC_WORDS', 'GREETINGS', 'NUMBERS', 'FAMILY', 'CULTURAL_PRACTICES'],
    priority_categories: ['NAMES', 'GREETINGS', 'BASIC_WORDS'],
    collection_prefix: 'meru_'
  },
  mijikenda: {
    available_categories: ['NAMES', 'BASIC_WORDS', 'GREETINGS', 'NUMBERS', 'FAMILY', 'CULTURAL_PRACTICES', 'LEGENDS'],
    priority_categories: ['NAMES', 'GREETINGS', 'BASIC_WORDS'],
    collection_prefix: 'mijikenda_'
  },
  turkana: {
    available_categories: ['NAMES', 'BASIC_WORDS', 'GREETINGS', 'NUMBERS', 'FAMILY', 'ANIMALS', 'NATURE'],
    priority_categories: ['NAMES', 'GREETINGS', 'BASIC_WORDS'],
    collection_prefix: 'turkana_'
  },
  maasai: {
    available_categories: ['basic_words', 'greetings', 'numbers', 'family', 'colors', 'animals', 'food', 'body_parts', 'nature', 'occupations', 'months', 'names', 'proverbs', 'cultural_practices'],
    priority_categories: ['greetings', 'basic_words', 'numbers'],
    collection_prefix: 'maasai_'
  }
};

// Helper functions
export const getLanguageCategories = (languageId) => {
  const langConfig = LANGUAGE_CONTENT_MAP[languageId];
  if (!langConfig) {
    console.log(`No language config found for: ${languageId}`);
    return [];
  }
  
  return langConfig.available_categories.map(catId => {
    // Find category by ID (not by key)
    const category = Object.values(CONTENT_CATEGORIES).find(cat => cat.id === catId) || 
                    CONTENT_CATEGORIES[catId.toUpperCase()];
    
    if (!category) {
      console.log(`Category not found: ${catId}`);
      return null;
    }
    
    return {
      ...category,
      collection_name: `${langConfig.collection_prefix}${catId}`
    };
  }).filter(Boolean); // Remove null entries
};

export const getPriorityCategories = (languageId) => {
  const langConfig = LANGUAGE_CONTENT_MAP[languageId];
  if (!langConfig) return [];
  
  return langConfig.priority_categories.map(catId => CONTENT_CATEGORIES[catId]);
};

export const getCollectionName = (languageId, categoryId) => {
  const langConfig = LANGUAGE_CONTENT_MAP[languageId];
  if (!langConfig) {
    console.log(`No language config found for: ${languageId}`);
    return null;
  }
  
  // Check if it's an existing collection (for Kalenjin)
  if (langConfig.existing_collections && langConfig.existing_collections[categoryId.toUpperCase()]) {
    return langConfig.existing_collections[categoryId.toUpperCase()];
  }
  
  // Check if category exists in CONTENT_CATEGORIES
  const categoryKey = categoryId.toUpperCase();
  if (!CONTENT_CATEGORIES[categoryKey]) {
    console.log(`No category found for: ${categoryId} (${categoryKey})`);
    // Try to find by id
    const foundCategory = Object.values(CONTENT_CATEGORIES).find(cat => cat.id === categoryId);
    if (foundCategory) {
      return `${langConfig.collection_prefix}${categoryId}`;
    }
    return null;
  }
  
  // Generate new collection name
  return `${langConfig.collection_prefix}${categoryId}`;
};