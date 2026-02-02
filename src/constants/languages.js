// Kenyan Languages Configuration
export const KENYAN_LANGUAGES = {
  KISWAHILI: {
    id: 'kiswahili',
    name: 'Kiswahili',
    nativeName: 'Kiswahili',
    region: 'National Language',
    speakers: '15+ million',
    available: true,
    color: '#DC2626',
    status: 'National & Official Language'
  },
  KIKUYU: {
    id: 'kikuyu',
    name: 'Kikuyu',
    nativeName: 'Gĩkũyũ',
    region: 'Central Kenya',
    speakers: '8.1 million',
    available: true,
    color: '#6366F1',
  },
  LUHYA: {
    id: 'luhya',
    name: 'Luhya',
    nativeName: 'Luluhya',
    region: 'Western Kenya',
    speakers: '6.8 million',
    available: true,
    color: '#10B981',
  },
  LUO: {
    id: 'luo',
    name: 'Luo',
    nativeName: 'Dholuo',
    region: 'Nyanza',
    speakers: '4.4 million',
    available: true,
    color: '#F59E0B',
  },
  KAMBA: {
    id: 'kamba',
    name: 'Kamba',
    nativeName: 'Kikamba',
    region: 'Eastern Kenya',
    speakers: '4.3 million',
    available: true,
    color: '#EF4444',
  },
  KALENJIN: {
    id: 'kalenjin',
    name: 'Kalenjin',
    nativeName: 'Kalenjin',
    region: 'Rift Valley',
    speakers: '5.3 million',
    available: true,
    color: '#8B5CF6',
    dialects: ['Keiyo', 'Nandi', 'Kipsigis', 'Marakwet', 'Pokot', 'Sabaot', 'Tugen']
  },
  KISII: {
    id: 'kisii',
    name: 'Kisii',
    nativeName: 'Ekegusii',
    region: 'Nyanza Highlands',
    speakers: '2.2 million',
    available: true,
    color: '#06B6D4',
  },
  MERU: {
    id: 'meru',
    name: 'Meru',
    nativeName: 'Kimeru',
    region: 'Mount Kenya Region',
    speakers: '1.9 million',
    available: false,
    color: '#84CC16',
  },
  MIJIKENDA: {
    id: 'mijikenda',
    name: 'Mijikenda',
    nativeName: 'Mijikenda',
    region: 'Coastal Kenya',
    speakers: '2.1 million',
    available: false,
    color: '#F97316',
    dialects: ['Giriama', 'Digo', 'Duruma', 'Kamba', 'Kauma', 'Chonyi', 'Jibana', 'Kambe', 'Ribe']
  },
  TURKANA: {
    id: 'turkana',
    name: 'Turkana',
    nativeName: 'Ngaturkana',
    region: 'Northern Kenya',
    speakers: '1.0 million',
    available: false,
    color: '#EC4899',
  },
  MAASAI: {
    id: 'maasai',
    name: 'Maasai',
    nativeName: 'ɔl Maa',
    region: 'Southern Kenya/Northern Tanzania',
    speakers: '1.5 million',
    available: true,
    color: '#3B82F6',
  },
};

// Language categories for organization
export const LANGUAGE_CATEGORIES = {
  OFFICIAL: {
    name: 'Official Languages',
    languages: ['KISWAHILI'],
    description: 'Kenya\'s national and official languages'
  },
  BANTU: {
    name: 'Bantu Languages',
    languages: ['KIKUYU', 'LUHYA', 'KAMBA', 'KISII', 'MERU', 'MIJIKENDA'],
    description: 'The largest language family in Kenya'
  },
  NILOTIC: {
    name: 'Nilotic Languages',
    languages: ['LUO', 'KALENJIN', 'TURKANA', 'MAASAI'],
    description: 'Languages from the Nile Valley region'
  }
};

// Get available languages
export const getAvailableLanguages = () => {
  return Object.values(KENYAN_LANGUAGES).filter(lang => lang.available);
};

// Get coming soon languages
export const getComingSoonLanguages = () => {
  return Object.values(KENYAN_LANGUAGES).filter(lang => !lang.available);
};

// Get language by ID
export const getLanguageById = (id) => {
  return Object.values(KENYAN_LANGUAGES).find(lang => lang.id === id);
};