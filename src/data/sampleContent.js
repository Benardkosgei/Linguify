// Sample Content Data for All Kenyan Languages
// This file contains starter content that can be imported into Firebase

export const SAMPLE_CONTENT = {
  // KISWAHILI CONTENT - COMPREHENSIVE
  kiswahili: {
    basic_words: [
      // Greetings & Courtesy
      { word: 'Habari', meaning: 'News/How are you', pronunciation: 'ha-BA-ri', category: 'greeting' },
      { word: 'Asante', meaning: 'Thank you', pronunciation: 'a-SAN-te', category: 'courtesy' },
      { word: 'Karibu', meaning: 'Welcome', pronunciation: 'ka-RI-bu', category: 'courtesy' },
      { word: 'Pole', meaning: 'Sorry/Sympathy', pronunciation: 'PO-le', category: 'courtesy' },
      { word: 'Samahani', meaning: 'Excuse me/Forgive me', pronunciation: 'sa-ma-HA-ni', category: 'courtesy' },
      
      // Common Adjectives
      { word: 'Mzuri', meaning: 'Good/Fine/Beautiful', pronunciation: 'm-ZU-ri', category: 'adjective' },
      { word: 'Mbaya', meaning: 'Bad', pronunciation: 'm-BA-ya', category: 'adjective' },
      { word: 'Mkubwa', meaning: 'Big/Large', pronunciation: 'm-KU-bwa', category: 'adjective' },
      { word: 'Mdogo', meaning: 'Small/Little', pronunciation: 'm-DO-go', category: 'adjective' },
      { word: 'Mrefu', meaning: 'Tall/Long', pronunciation: 'm-RE-fu', category: 'adjective' },
      { word: 'Mfupi', meaning: 'Short', pronunciation: 'm-FU-pi', category: 'adjective' },
      { word: 'Mzima', meaning: 'Healthy/Whole', pronunciation: 'm-ZI-ma', category: 'adjective' },
      { word: 'Mpya', meaning: 'New', pronunciation: 'm-PYA', category: 'adjective' },
      { word: 'Mzee', meaning: 'Old', pronunciation: 'm-ZE-e', category: 'adjective' },
      
      // Essential Nouns
      { word: 'Chakula', meaning: 'Food', pronunciation: 'cha-KU-la', category: 'noun' },
      { word: 'Maji', meaning: 'Water', pronunciation: 'MA-ji', category: 'noun' },
      { word: 'Nyumba', meaning: 'House', pronunciation: 'NYUM-ba', category: 'noun' },
      { word: 'Rafiki', meaning: 'Friend', pronunciation: 'ra-FI-ki', category: 'noun' },
      { word: 'Shule', meaning: 'School', pronunciation: 'SHU-le', category: 'noun' },
      { word: 'Kazi', meaning: 'Work/Job', pronunciation: 'KA-zi', category: 'noun' },
      { word: 'Pesa', meaning: 'Money', pronunciation: 'PE-sa', category: 'noun' },
      { word: 'Kitabu', meaning: 'Book', pronunciation: 'ki-TA-bu', category: 'noun' },
      { word: 'Mti', meaning: 'Tree', pronunciation: 'M-ti', category: 'noun' },
      { word: 'Barabara', meaning: 'Road', pronunciation: 'ba-ra-BA-ra', category: 'noun' },
      
      // Common Verbs
      { word: 'Kwenda', meaning: 'To go', pronunciation: 'KWEN-da', category: 'verb' },
      { word: 'Kuja', meaning: 'To come', pronunciation: 'KU-ja', category: 'verb' },
      { word: 'Kula', meaning: 'To eat', pronunciation: 'KU-la', category: 'verb' },
      { word: 'Kunywa', meaning: 'To drink', pronunciation: 'ku-NYW-a', category: 'verb' },
      { word: 'Kulala', meaning: 'To sleep', pronunciation: 'ku-LA-la', category: 'verb' },
      { word: 'Kusoma', meaning: 'To read/study', pronunciation: 'ku-SO-ma', category: 'verb' },
      { word: 'Kuandika', meaning: 'To write', pronunciation: 'ku-an-DI-ka', category: 'verb' },
      { word: 'Kusema', meaning: 'To say/speak', pronunciation: 'ku-SE-ma', category: 'verb' },
      { word: 'Kuona', meaning: 'To see', pronunciation: 'ku-O-na', category: 'verb' },
      { word: 'Kusikia', meaning: 'To hear', pronunciation: 'ku-si-KI-a', category: 'verb' },
      
      // Time & Direction
      { word: 'Leo', meaning: 'Today', pronunciation: 'LE-o', category: 'time' },
      { word: 'Jana', meaning: 'Yesterday', pronunciation: 'JA-na', category: 'time' },
      { word: 'Kesho', meaning: 'Tomorrow', pronunciation: 'KE-sho', category: 'time' },
      { word: 'Sasa', meaning: 'Now', pronunciation: 'SA-sa', category: 'time' },
      { word: 'Hapa', meaning: 'Here', pronunciation: 'HA-pa', category: 'direction' },
      { word: 'Pale', meaning: 'There', pronunciation: 'PA-le', category: 'direction' },
      { word: 'Mbele', meaning: 'Front/Forward', pronunciation: 'm-BE-le', category: 'direction' },
      { word: 'Nyuma', meaning: 'Behind/Back', pronunciation: 'nyu-MA', category: 'direction' },
      
      // More Essential Verbs
      { word: 'Kupenda', meaning: 'To love/like', pronunciation: 'ku-PEN-da', category: 'verb' },
      { word: 'Kucheka', meaning: 'To laugh', pronunciation: 'ku-CHE-ka', category: 'verb' },
      { word: 'Kulia', meaning: 'To cry', pronunciation: 'ku-LI-a', category: 'verb' },
      { word: 'Kufanya', meaning: 'To do/make', pronunciation: 'ku-FA-nya', category: 'verb' },
      { word: 'Kupata', meaning: 'To get/find', pronunciation: 'ku-PA-ta', category: 'verb' },
      { word: 'Kutoa', meaning: 'To give/remove', pronunciation: 'ku-TO-a', category: 'verb' },
      { word: 'Kuchukua', meaning: 'To take', pronunciation: 'ku-chu-KU-a', category: 'verb' },
      { word: 'Kuimba', meaning: 'To sing', pronunciation: 'ku-IM-ba', category: 'verb' },
      { word: 'Kucheza', meaning: 'To play/dance', pronunciation: 'ku-CHE-za', category: 'verb' },
      { word: 'Kufundisha', meaning: 'To teach', pronunciation: 'ku-fun-DI-sha', category: 'verb' },
      { word: 'Kujifunza', meaning: 'To learn', pronunciation: 'ku-ji-FUN-za', category: 'verb' },
      { word: 'Kuongea', meaning: 'To talk/speak', pronunciation: 'ku-on-GE-a', category: 'verb' },
      { word: 'Kuuliza', meaning: 'To ask', pronunciation: 'ku-u-LI-za', category: 'verb' },
      { word: 'Kujibu', meaning: 'To answer', pronunciation: 'ku-JI-bu', category: 'verb' },
      { word: 'Kufikiria', meaning: 'To think', pronunciation: 'ku-fi-ki-RI-a', category: 'verb' },
      { word: 'Kujua', meaning: 'To know', pronunciation: 'ku-JU-a', category: 'verb' },
      { word: 'Kufahamu', meaning: 'To understand', pronunciation: 'ku-fa-HA-mu', category: 'verb' },
      { word: 'Kusahau', meaning: 'To forget', pronunciation: 'ku-sa-HA-u', category: 'verb' },
      { word: 'Kukumbuka', meaning: 'To remember', pronunciation: 'ku-kum-BU-ka', category: 'verb' },
      { word: 'Kuamka', meaning: 'To wake up', pronunciation: 'ku-AM-ka', category: 'verb' },
      { word: 'Kuoga', meaning: 'To bathe', pronunciation: 'ku-O-ga', category: 'verb' },
      { word: 'Kuvaa', meaning: 'To wear/dress', pronunciation: 'ku-VA-a', category: 'verb' },
      { word: 'Kuvua', meaning: 'To undress', pronunciation: 'ku-VU-a', category: 'verb' },
      
      // More Nouns - Household Items
      { word: 'Meza', meaning: 'Table', pronunciation: 'ME-za', category: 'noun' },
      { word: 'Kiti', meaning: 'Chair', pronunciation: 'KI-ti', category: 'noun' },
      { word: 'Kitanda', meaning: 'Bed', pronunciation: 'ki-TAN-da', category: 'noun' },
      { word: 'Mlango', meaning: 'Door', pronunciation: 'm-LAN-go', category: 'noun' },
      { word: 'Dirisha', meaning: 'Window', pronunciation: 'di-RI-sha', category: 'noun' },
      { word: 'Paa', meaning: 'Roof', pronunciation: 'PA-a', category: 'noun' },
      { word: 'Ukuta', meaning: 'Wall', pronunciation: 'u-KU-ta', category: 'noun' },
      { word: 'Sakafu', meaning: 'Floor', pronunciation: 'sa-KA-fu', category: 'noun' },
      { word: 'Jiko', meaning: 'Kitchen/Stove', pronunciation: 'JI-ko', category: 'noun' },
      { word: 'Choo', meaning: 'Toilet', pronunciation: 'CHO-o', category: 'noun' },
      { word: 'Bafu', meaning: 'Bathroom', pronunciation: 'BA-fu', category: 'noun' },
      { word: 'Chumba', meaning: 'Room', pronunciation: 'CHUM-ba', category: 'noun' },
      
      // Transportation
      { word: 'Gari', meaning: 'Car', pronunciation: 'GA-ri', category: 'noun' },
      { word: 'Basi', meaning: 'Bus', pronunciation: 'BA-si', category: 'noun' },
      { word: 'Pikipiki', meaning: 'Motorcycle', pronunciation: 'pi-ki-PI-ki', category: 'noun' },
      { word: 'Baiskeli', meaning: 'Bicycle', pronunciation: 'bai-ske-LI', category: 'noun' },
      { word: 'Ndege', meaning: 'Airplane/Bird', pronunciation: 'n-DE-ge', category: 'noun' },
      { word: 'Meli', meaning: 'Ship', pronunciation: 'ME-li', category: 'noun' },
      { word: 'Treni', meaning: 'Train', pronunciation: 'TRE-ni', category: 'noun' },
      
      // Technology & Modern Life
      { word: 'Simu', meaning: 'Phone', pronunciation: 'SI-mu', category: 'noun' },
      { word: 'Kompyuta', meaning: 'Computer', pronunciation: 'kom-pyu-TA', category: 'noun' },
      { word: 'Televisheni', meaning: 'Television', pronunciation: 'te-le-vi-SHE-ni', category: 'noun' },
      { word: 'Redio', meaning: 'Radio', pronunciation: 'RE-di-o', category: 'noun' },
      { word: 'Intaneti', meaning: 'Internet', pronunciation: 'in-ta-NE-ti', category: 'noun' },
      { word: 'Barua pepe', meaning: 'Email', pronunciation: 'ba-RU-a PE-pe', category: 'noun' },
      
      // Emotions & Feelings
      { word: 'Furaha', meaning: 'Joy/Happiness', pronunciation: 'fu-RA-ha', category: 'emotion' },
      { word: 'Huzuni', meaning: 'Sadness', pronunciation: 'hu-ZU-ni', category: 'emotion' },
      { word: 'Hasira', meaning: 'Anger', pronunciation: 'ha-SI-ra', category: 'emotion' },
      { word: 'Hofu', meaning: 'Fear', pronunciation: 'HO-fu', category: 'emotion' },
      { word: 'Mapenzi', meaning: 'Love', pronunciation: 'ma-PEN-zi', category: 'emotion' },
      { word: 'Chuki', meaning: 'Hate', pronunciation: 'CHU-ki', category: 'emotion' },
      { word: 'Wivu', meaning: 'Jealousy', pronunciation: 'WI-vu', category: 'emotion' },
      { word: 'Subira', meaning: 'Patience', pronunciation: 'su-BI-ra', category: 'emotion' },
      { word: 'Haraka', meaning: 'Hurry/Rush', pronunciation: 'ha-RA-ka', category: 'emotion' },
      
      // Weather & Climate
      { word: 'Hali ya hewa', meaning: 'Weather', pronunciation: 'HA-li ya HE-wa', category: 'weather' },
      { word: 'Jua', meaning: 'Sun', pronunciation: 'JU-a', category: 'weather' },
      { word: 'Mwanga', meaning: 'Light', pronunciation: 'mwan-GA', category: 'weather' },
      { word: 'Giza', meaning: 'Darkness', pronunciation: 'GI-za', category: 'weather' },
      { word: 'Mvua', meaning: 'Rain', pronunciation: 'm-VU-a', category: 'weather' },
      { word: 'Theluji', meaning: 'Snow', pronunciation: 'the-LU-ji', category: 'weather' },
      { word: 'Upepo', meaning: 'Wind', pronunciation: 'u-PE-po', category: 'weather' },
      { word: 'Kimbo', meaning: 'Fog', pronunciation: 'KIM-bo', category: 'weather' }
    ],
    
    greetings: [
      // Basic Greetings
      { greeting: 'Hujambo', response: 'Sijambo', context: 'Formal greeting - How are you?', time_of_day: 'any' },
      { greeting: 'Habari yako', response: 'Nzuri', context: 'How are your affairs?', time_of_day: 'any' },
      { greeting: 'Mambo', response: 'Poa', context: 'Casual greeting - What\'s up?', time_of_day: 'any' },
      { greeting: 'Vipi', response: 'Poa', context: 'Very casual - How\'s it going?', time_of_day: 'any' },
      { greeting: 'Salamu', response: 'Salamu', context: 'Peace greeting (Arabic origin)', time_of_day: 'any' },
      { greeting: 'Shikamoo', response: 'Marahaba', context: 'Respectful greeting to elders', time_of_day: 'any' },
      
      // Time-specific Greetings
      { greeting: 'Habari za asubuhi', response: 'Nzuri', context: 'Morning greeting', time_of_day: 'morning' },
      { greeting: 'Habari za mchana', response: 'Nzuri', context: 'Afternoon greeting', time_of_day: 'afternoon' },
      { greeting: 'Habari za jioni', response: 'Nzuri', context: 'Evening greeting', time_of_day: 'evening' },
      { greeting: 'Habari za usiku', response: 'Nzuri', context: 'Night greeting', time_of_day: 'night' },
      { greeting: 'Habari za alfajiri', response: 'Nzuri', context: 'Dawn greeting', time_of_day: 'dawn' },
      { greeting: 'Habari za adhuhuri', response: 'Nzuri', context: 'Noon greeting', time_of_day: 'noon' },
      { greeting: 'Habari za magharibi', response: 'Nzuri', context: 'Sunset greeting', time_of_day: 'sunset' },
      
      // Specific Context Greetings
      { greeting: 'Habari za kazi', response: 'Nzuri', context: 'How is work?', time_of_day: 'any' },
      { greeting: 'Habari za nyumbani', response: 'Nzuri', context: 'How are things at home?', time_of_day: 'any' },
      { greeting: 'Habari za safari', response: 'Nzuri', context: 'How was your journey?', time_of_day: 'any' },
      { greeting: 'Habari za familia', response: 'Nzuri', context: 'How is the family?', time_of_day: 'any' },
      { greeting: 'Habari za shule', response: 'Nzuri', context: 'How is school?', time_of_day: 'any' },
      { greeting: 'Habari za biashara', response: 'Nzuri', context: 'How is business?', time_of_day: 'any' },
      { greeting: 'Habari za afya', response: 'Nzuri', context: 'How is your health?', time_of_day: 'any' },
      { greeting: 'Habari za watoto', response: 'Nzuri', context: 'How are the children?', time_of_day: 'any' },
      { greeting: 'Habari za mazazi', response: 'Nzuri', context: 'How are the parents?', time_of_day: 'any' },
      { greeting: 'Habari za kijiji', response: 'Nzuri', context: 'How is the village?', time_of_day: 'any' },
      
      // Welcoming Greetings
      { greeting: 'Karibu nyumbani', response: 'Asante', context: 'Welcome home', time_of_day: 'any' },
      { greeting: 'Karibu Kenya', response: 'Asante', context: 'Welcome to Kenya', time_of_day: 'any' },
      { greeting: 'Karibu chakula', response: 'Asante', context: 'Welcome to eat', time_of_day: 'any' },
      { greeting: 'Karibu kiti', response: 'Asante', context: 'Welcome, have a seat', time_of_day: 'any' },
      
      // Farewells
      { greeting: 'Kwaheri', response: 'Kwaheri', context: 'Goodbye (formal)', time_of_day: 'any' },
      { greeting: 'Tutaonana', response: 'Tutaonana', context: 'See you later', time_of_day: 'any' },
      { greeting: 'Tutaonana baadaye', response: 'Sawa', context: 'See you later', time_of_day: 'any' },
      { greeting: 'Tutaonana kesho', response: 'Sawa', context: 'See you tomorrow', time_of_day: 'any' },
      { greeting: 'Lala salama', response: 'Nawe pia', context: 'Sleep well', time_of_day: 'night' },
      { greeting: 'Usiku mwema', response: 'Nawe pia', context: 'Good night', time_of_day: 'night' },
      { greeting: 'Safari njema', response: 'Asante', context: 'Have a good journey', time_of_day: 'any' },
      { greeting: 'Kazi njema', response: 'Asante', context: 'Have good work', time_of_day: 'any' },
      { greeting: 'Siku njema', response: 'Nawe pia', context: 'Have a good day', time_of_day: 'any' },
      { greeting: 'Wiki njema', response: 'Nawe pia', context: 'Have a good week', time_of_day: 'any' },
      
      // Religious/Spiritual Greetings
      { greeting: 'Assalamu alaikum', response: 'Wa alaikum salaam', context: 'Islamic greeting - Peace be upon you', time_of_day: 'any' },
      { greeting: 'Mungu akubariki', response: 'Amina', context: 'May God bless you', time_of_day: 'any' },
      { greeting: 'Baraka za Mungu', response: 'Amina', context: 'God\'s blessings', time_of_day: 'any' }
    ],
    
    numbers: [
      { number: 0, word: 'Sifuri', pronunciation: 'si-FU-ri' },
      { number: 1, word: 'Moja', pronunciation: 'MO-ja' },
      { number: 2, word: 'Mbili', pronunciation: 'm-BI-li' },
      { number: 3, word: 'Tatu', pronunciation: 'TA-tu' },
      { number: 4, word: 'Nne', pronunciation: 'NNE' },
      { number: 5, word: 'Tano', pronunciation: 'TA-no' },
      { number: 6, word: 'Sita', pronunciation: 'SI-ta' },
      { number: 7, word: 'Saba', pronunciation: 'SA-ba' },
      { number: 8, word: 'Nane', pronunciation: 'NA-ne' },
      { number: 9, word: 'Tisa', pronunciation: 'TI-sa' },
      { number: 10, word: 'Kumi', pronunciation: 'KU-mi' },
      { number: 11, word: 'Kumi na moja', pronunciation: 'KU-mi na MO-ja' },
      { number: 12, word: 'Kumi na mbili', pronunciation: 'KU-mi na m-BI-li' },
      { number: 13, word: 'Kumi na tatu', pronunciation: 'KU-mi na TA-tu' },
      { number: 14, word: 'Kumi na nne', pronunciation: 'KU-mi na NNE' },
      { number: 15, word: 'Kumi na tano', pronunciation: 'KU-mi na TA-no' },
      { number: 16, word: 'Kumi na sita', pronunciation: 'KU-mi na SI-ta' },
      { number: 17, word: 'Kumi na saba', pronunciation: 'KU-mi na SA-ba' },
      { number: 18, word: 'Kumi na nane', pronunciation: 'KU-mi na NA-ne' },
      { number: 19, word: 'Kumi na tisa', pronunciation: 'KU-mi na TI-sa' },
      { number: 20, word: 'Ishirini', pronunciation: 'i-shi-RI-ni' },
      { number: 21, word: 'Ishirini na moja', pronunciation: 'i-shi-RI-ni na MO-ja' },
      { number: 30, word: 'Thelathini', pronunciation: 'the-la-THI-ni' },
      { number: 40, word: 'Arobaini', pronunciation: 'a-ro-ba-I-ni' },
      { number: 50, word: 'Hamsini', pronunciation: 'ham-SI-ni' },
      { number: 60, word: 'Sitini', pronunciation: 'si-TI-ni' },
      { number: 70, word: 'Sabini', pronunciation: 'sa-BI-ni' },
      { number: 80, word: 'Themanini', pronunciation: 'the-ma-NI-ni' },
      { number: 90, word: 'Tisini', pronunciation: 'ti-SI-ni' },
      { number: 100, word: 'Mia moja', pronunciation: 'MI-a MO-ja' },
      { number: 200, word: 'Mia mbili', pronunciation: 'MI-a m-BI-li' },
      { number: 500, word: 'Mia tano', pronunciation: 'MI-a TA-no' },
      { number: 1000, word: 'Elfu moja', pronunciation: 'EL-fu MO-ja' },
      { number: 2000, word: 'Elfu mbili', pronunciation: 'EL-fu m-BI-li' },
      { number: 10000, word: 'Elfu kumi', pronunciation: 'EL-fu KU-mi' },
      { number: 100000, word: 'Laki moja', pronunciation: 'LA-ki MO-ja' },
      { number: 1000000, word: 'Milioni moja', pronunciation: 'mi-li-O-ni MO-ja' }
    ],
    
    family: [
      // Immediate Family
      { relationship: 'Father', term: 'Baba', gender_specific: 'no', context: 'Universal term' },
      { relationship: 'Mother', term: 'Mama', gender_specific: 'no', context: 'Universal term' },
      { relationship: 'Son', term: 'Mwana wa kiume', gender_specific: 'yes', context: 'Male child' },
      { relationship: 'Daughter', term: 'Mwana wa kike', gender_specific: 'yes', context: 'Female child' },
      { relationship: 'Child', term: 'Mtoto', gender_specific: 'no', context: 'General term for child' },
      { relationship: 'Children', term: 'Watoto', gender_specific: 'no', context: 'Plural of child' },
      { relationship: 'Baby', term: 'Mtoto mchanga', gender_specific: 'no', context: 'Very young child' },
      { relationship: 'Firstborn', term: 'Mzaliwa wa kwanza', gender_specific: 'no', context: 'First child' },
      { relationship: 'Lastborn', term: 'Mtoto wa mwisho', gender_specific: 'no', context: 'Last child' },
      
      // Siblings
      { relationship: 'Brother', term: 'Kaka', gender_specific: 'no', context: 'Older brother' },
      { relationship: 'Brother', term: 'Ndugu', gender_specific: 'no', context: 'Brother/sibling' },
      { relationship: 'Sister', term: 'Dada', gender_specific: 'no', context: 'Older sister' },
      { relationship: 'Sister', term: 'Ndugu', gender_specific: 'no', context: 'Sister/sibling' },
      { relationship: 'Younger brother', term: 'Kaka mdogo', gender_specific: 'no', context: 'Younger male sibling' },
      { relationship: 'Younger sister', term: 'Dada mdogo', gender_specific: 'no', context: 'Younger female sibling' },
      { relationship: 'Twin', term: 'Pacha', gender_specific: 'no', context: 'Twin sibling' },
      { relationship: 'Twins', term: 'Mapacha', gender_specific: 'no', context: 'Twin siblings' },
      
      // Grandparents
      { relationship: 'Grandfather', term: 'Babu', gender_specific: 'no', context: 'Paternal/maternal' },
      { relationship: 'Grandmother', term: 'Bibi', gender_specific: 'no', context: 'Paternal/maternal' },
      { relationship: 'Great grandfather', term: 'Babu mkuu', gender_specific: 'no', context: 'Father\'s/mother\'s grandfather' },
      { relationship: 'Great grandmother', term: 'Bibi mkuu', gender_specific: 'no', context: 'Father\'s/mother\'s grandmother' },
      
      // Aunts and Uncles
      { relationship: 'Uncle', term: 'Mjomba', gender_specific: 'no', context: 'Mother\'s brother' },
      { relationship: 'Uncle', term: 'Baba mdogo', gender_specific: 'no', context: 'Father\'s younger brother' },
      { relationship: 'Uncle', term: 'Baba mkubwa', gender_specific: 'no', context: 'Father\'s older brother' },
      { relationship: 'Aunt', term: 'Shangazi', gender_specific: 'no', context: 'Father\'s sister' },
      { relationship: 'Aunt', term: 'Mama mdogo', gender_specific: 'no', context: 'Mother\'s younger sister' },
      { relationship: 'Aunt', term: 'Mama mkubwa', gender_specific: 'no', context: 'Mother\'s older sister' },
      { relationship: 'Aunt', term: 'Nyina', gender_specific: 'no', context: 'Mother\'s sister (some regions)' },
      
      // Marriage Relations
      { relationship: 'Husband', term: 'Mume', gender_specific: 'no', context: 'Spouse' },
      { relationship: 'Wife', term: 'Mke', gender_specific: 'no', context: 'Spouse' },
      { relationship: 'Co-wife', term: 'Mke mwenzake', gender_specific: 'no', context: 'In polygamous marriage' },
      { relationship: 'Fiancé', term: 'Mchumba', gender_specific: 'no', context: 'Engaged partner' },
      { relationship: 'Boyfriend', term: 'Mpenzi', gender_specific: 'no', context: 'Male romantic partner' },
      { relationship: 'Girlfriend', term: 'Mpenzi', gender_specific: 'no', context: 'Female romantic partner' },
      
      // In-laws
      { relationship: 'Father-in-law', term: 'Baba mkwe', gender_specific: 'no', context: 'Spouse\'s father' },
      { relationship: 'Mother-in-law', term: 'Mama mkwe', gender_specific: 'no', context: 'Spouse\'s mother' },
      { relationship: 'Son-in-law', term: 'Mkwe', gender_specific: 'no', context: 'Daughter\'s husband' },
      { relationship: 'Daughter-in-law', term: 'Mkwe', gender_specific: 'no', context: 'Son\'s wife' },
      { relationship: 'Brother-in-law', term: 'Shemeji', gender_specific: 'no', context: 'Spouse\'s brother or sister\'s husband' },
      { relationship: 'Sister-in-law', term: 'Shemeji', gender_specific: 'no', context: 'Spouse\'s sister or brother\'s wife' },
      
      // Extended Family
      { relationship: 'Cousin', term: 'Binamu', gender_specific: 'no', context: 'Any cousin' },
      { relationship: 'Nephew', term: 'Mpwa', gender_specific: 'no', context: 'Brother\'s/sister\'s son' },
      { relationship: 'Niece', term: 'Mpwa', gender_specific: 'no', context: 'Brother\'s/sister\'s daughter' },
      { relationship: 'Grandchild', term: 'Mjukuu', gender_specific: 'no', context: 'Child\'s child' },
      { relationship: 'Grandson', term: 'Mjukuu wa kiume', gender_specific: 'yes', context: 'Male grandchild' },
      { relationship: 'Granddaughter', term: 'Mjukuu wa kike', gender_specific: 'yes', context: 'Female grandchild' },
      
      // Step Relations
      { relationship: 'Stepfather', term: 'Baba wa kambo', gender_specific: 'no', context: 'Mother\'s new husband' },
      { relationship: 'Stepmother', term: 'Mama wa kambo', gender_specific: 'no', context: 'Father\'s new wife' },
      { relationship: 'Stepchild', term: 'Mtoto wa kambo', gender_specific: 'no', context: 'Spouse\'s child from previous marriage' },
      { relationship: 'Half-brother', term: 'Kaka wa nusu', gender_specific: 'no', context: 'Same father or mother, different parent' },
      { relationship: 'Half-sister', term: 'Dada wa nusu', gender_specific: 'no', context: 'Same father or mother, different parent' },
      
      // Adoptive Relations
      { relationship: 'Adopted child', term: 'Mtoto wa kulea', gender_specific: 'no', context: 'Non-biological child raised as own' },
      { relationship: 'Foster parent', term: 'Mzazi wa kulea', gender_specific: 'no', context: 'Non-biological parent' },
      
      // Family Roles
      { relationship: 'Head of family', term: 'Mkuu wa familia', gender_specific: 'no', context: 'Family leader' },
      { relationship: 'Breadwinner', term: 'Mlezi', gender_specific: 'no', context: 'Main provider' },
      { relationship: 'Elder', term: 'Mzee', gender_specific: 'no', context: 'Respected older family member' },
      { relationship: 'Ancestor', term: 'Mzazi wa kale', gender_specific: 'no', context: 'Deceased family member' }
    ],
    
    colors: [
      { color: 'Red', word: 'Nyekundu', description: 'Color of blood, fire' },
      { color: 'Blue', word: 'Buluu', description: 'Color of sky, ocean' },
      { color: 'Green', word: 'Kijani', description: 'Color of grass, leaves' },
      { color: 'Yellow', word: 'Njano', description: 'Color of sun, banana' },
      { color: 'Black', word: 'Nyeusi', description: 'Color of night, coal' },
      { color: 'White', word: 'Nyeupe', description: 'Color of milk, clouds' },
      { color: 'Brown', word: 'Kahawia', description: 'Color of coffee, earth' },
      { color: 'Orange', word: 'Machungwa', description: 'Color of orange fruit' },
      { color: 'Purple', word: 'Zambarau', description: 'Color of eggplant' },
      { color: 'Pink', word: 'Waridi', description: 'Color of rose flower' },
      { color: 'Gray', word: 'Kijivu', description: 'Color of ash, elephant' }
    ],
    
    animals: [
      // Big Five & Safari Animals
      { animal: 'Lion', word: 'Simba', sound: 'Kunguruma', habitat: 'Savanna' },
      { animal: 'Elephant', word: 'Tembo', sound: 'Kupiga kelele', habitat: 'Forest/Savanna' },
      { animal: 'Leopard', word: 'Chui', sound: 'Kunguruma', habitat: 'Forest' },
      { animal: 'Rhinoceros', word: 'Kifaru', sound: 'Kupiga kelele', habitat: 'Savanna' },
      { animal: 'Buffalo', word: 'Nyati', sound: 'Kuungua', habitat: 'Grassland' },
      
      // Other Wild Animals
      { animal: 'Giraffe', word: 'Twiga', sound: 'Kimya', habitat: 'Savanna' },
      { animal: 'Zebra', word: 'Punda milia', sound: 'Kulia', habitat: 'Grassland' },
      { animal: 'Hippopotamus', word: 'Kiboko', sound: 'Kukoroma', habitat: 'River/Lake' },
      { animal: 'Crocodile', word: 'Mamba', sound: 'Kimya', habitat: 'River/Lake' },
      { animal: 'Cheetah', word: 'Duma', sound: 'Kulia', habitat: 'Savanna' },
      { animal: 'Hyena', word: 'Fisi', sound: 'Kucheka', habitat: 'Savanna' },
      { animal: 'Warthog', word: 'Ngiri', sound: 'Kukoroma', habitat: 'Savanna' },
      { animal: 'Antelope', word: 'Swala', sound: 'Kulia', habitat: 'Grassland' },
      { animal: 'Gazelle', word: 'Swala', sound: 'Kulia', habitat: 'Grassland' },
      { animal: 'Wildebeest', word: 'Nyumbu', sound: 'Kuungua', habitat: 'Grassland' },
      { animal: 'Baboon', word: 'Nyani mkubwa', sound: 'Kupiga kelele', habitat: 'Forest/Rocks' },
      { animal: 'Monkey', word: 'Nyani', sound: 'Kupiga kelele', habitat: 'Forest' },
      { animal: 'Ostrich', word: 'Mbuni', sound: 'Kukoroma', habitat: 'Savanna' },
      
      // Domestic Animals
      { animal: 'Dog', word: 'Mbwa', sound: 'Kubweka', habitat: 'Domestic' },
      { animal: 'Cat', word: 'Paka', sound: 'Kunyauka', habitat: 'Domestic' },
      { animal: 'Cow', word: 'Ng\'ombe', sound: 'Kuungua', habitat: 'Farm' },
      { animal: 'Bull', word: 'Ng\'ombe dume', sound: 'Kuungua', habitat: 'Farm' },
      { animal: 'Calf', word: 'Ndama', sound: 'Kulia', habitat: 'Farm' },
      { animal: 'Goat', word: 'Mbuzi', sound: 'Kulia', habitat: 'Farm' },
      { animal: 'Sheep', word: 'Kondoo', sound: 'Kulia', habitat: 'Farm' },
      { animal: 'Pig', word: 'Nguruwe', sound: 'Kukoroma', habitat: 'Farm' },
      { animal: 'Chicken', word: 'Kuku', sound: 'Kuwika', habitat: 'Farm' },
      { animal: 'Rooster', word: 'Jogoo', sound: 'Kuwika', habitat: 'Farm' },
      { animal: 'Duck', word: 'Bata', sound: 'Kukoroma', habitat: 'Farm/Water' },
      { animal: 'Turkey', word: 'Bata mzinga', sound: 'Kukoroma', habitat: 'Farm' },
      { animal: 'Donkey', word: 'Punda', sound: 'Kulia', habitat: 'Farm' },
      { animal: 'Horse', word: 'Farasi', sound: 'Kukaribisha', habitat: 'Farm' },
      { animal: 'Camel', word: 'Ngamia', sound: 'Kukoroma', habitat: 'Desert' },
      
      // Birds
      { animal: 'Bird', word: 'Ndege', sound: 'Kuimba', habitat: 'Sky/Trees' },
      { animal: 'Eagle', word: 'Tai', sound: 'Kulia', habitat: 'Mountains' },
      { animal: 'Owl', word: 'Bundi', sound: 'Kulia', habitat: 'Trees' },
      { animal: 'Crow', word: 'Kunguru', sound: 'Kulia', habitat: 'Various' },
      { animal: 'Dove', word: 'Njiwa', sound: 'Kuimba', habitat: 'Trees' },
      { animal: 'Parrot', word: 'Kasuku', sound: 'Kuongea', habitat: 'Forest' },
      { animal: 'Peacock', word: 'Tausi', sound: 'Kulia', habitat: 'Forest' },
      { animal: 'Flamingo', word: 'Heroe', sound: 'Kulia', habitat: 'Lakes' },
      
      // Reptiles & Amphibians
      { animal: 'Snake', word: 'Nyoka', sound: 'Kimya', habitat: 'Various' },
      { animal: 'Lizard', word: 'Mjusi', sound: 'Kimya', habitat: 'Rocks/Trees' },
      { animal: 'Chameleon', word: 'Kinyonga', sound: 'Kimya', habitat: 'Trees' },
      { animal: 'Turtle', word: 'Kobe', sound: 'Kimya', habitat: 'Water/Land' },
      { animal: 'Frog', word: 'Chura', sound: 'Kulia', habitat: 'Water' },
      
      // Insects
      { animal: 'Bee', word: 'Nyuki', sound: 'Kuvuma', habitat: 'Flowers' },
      { animal: 'Butterfly', word: 'Kipepeo', sound: 'Kimya', habitat: 'Flowers' },
      { animal: 'Ant', word: 'Mchwa', sound: 'Kimya', habitat: 'Ground' },
      { animal: 'Spider', word: 'Buibui', sound: 'Kimya', habitat: 'Webs' },
      { animal: 'Mosquito', word: 'Mbu', sound: 'Kuvuma', habitat: 'Water areas' },
      { animal: 'Fly', word: 'Inzi', sound: 'Kuvuma', habitat: 'Various' },
      { animal: 'Grasshopper', word: 'Panzi', sound: 'Kulia', habitat: 'Grass' },
      
      // Aquatic Animals
      { animal: 'Fish', word: 'Samaki', sound: 'Kimya', habitat: 'Water' },
      { animal: 'Shark', word: 'Papa', sound: 'Kimya', habitat: 'Ocean' },
      { animal: 'Whale', word: 'Nyangumi', sound: 'Kulia', habitat: 'Ocean' },
      { animal: 'Dolphin', word: 'Pomboo', sound: 'Kulia', habitat: 'Ocean' },
      { animal: 'Octopus', word: 'Pweza', sound: 'Kimya', habitat: 'Ocean' },
      { animal: 'Crab', word: 'Kaa', sound: 'Kimya', habitat: 'Beach/Ocean' }
    ],
    
    food: [
      { item: 'Rice', word: 'Mchele/Wali', type: 'Staple', preparation: 'Boiled' },
      { item: 'Maize meal', word: 'Ugali', type: 'Staple', preparation: 'Cooked with water' },
      { item: 'Beans', word: 'Maharagwe', type: 'Protein', preparation: 'Boiled/Stewed' },
      { item: 'Meat', word: 'Nyama', type: 'Protein', preparation: 'Roasted/Stewed' },
      { item: 'Fish', word: 'Samaki', type: 'Protein', preparation: 'Fried/Grilled' },
      { item: 'Chicken', word: 'Kuku', type: 'Protein', preparation: 'Various ways' },
      { item: 'Vegetables', word: 'Mboga', type: 'Vegetable', preparation: 'Cooked/Raw' },
      { item: 'Spinach', word: 'Mchicha', type: 'Vegetable', preparation: 'Cooked' },
      { item: 'Cabbage', word: 'Kabichi', type: 'Vegetable', preparation: 'Cooked/Raw' },
      { item: 'Tomato', word: 'Nyanya', type: 'Vegetable', preparation: 'Raw/Cooked' },
      { item: 'Onion', word: 'Kitunguu', type: 'Vegetable', preparation: 'Cooked' },
      { item: 'Banana', word: 'Ndizi', type: 'Fruit', preparation: 'Raw/Cooked' },
      { item: 'Orange', word: 'Chungwa', type: 'Fruit', preparation: 'Raw' },
      { item: 'Mango', word: 'Embe', type: 'Fruit', preparation: 'Raw' },
      { item: 'Pineapple', word: 'Nanasi', type: 'Fruit', preparation: 'Raw' },
      { item: 'Coconut', word: 'Nazi', type: 'Fruit', preparation: 'Raw/Cooked' },
      { item: 'Bread', word: 'Mkate', type: 'Staple', preparation: 'Baked' },
      { item: 'Tea', word: 'Chai', type: 'Drink', preparation: 'Brewed' },
      { item: 'Coffee', word: 'Kahawa', type: 'Drink', preparation: 'Brewed' },
      { item: 'Water', word: 'Maji', type: 'Drink', preparation: 'Pure' },
      { item: 'Milk', word: 'Maziwa', type: 'Drink', preparation: 'Fresh/Boiled' }
    ],
    
    body_parts: [
      { body_part: 'Head', word: 'Kichwa', pronunciation: 'ki-CHW-a' },
      { body_part: 'Hair', word: 'Nywele', pronunciation: 'ny-WE-le' },
      { body_part: 'Face', word: 'Uso', pronunciation: 'U-so' },
      { body_part: 'Eye', word: 'Jicho', pronunciation: 'JI-cho' },
      { body_part: 'Nose', word: 'Pua', pronunciation: 'PU-a' },
      { body_part: 'Mouth', word: 'Mdomo', pronunciation: 'm-DO-mo' },
      { body_part: 'Teeth', word: 'Meno', pronunciation: 'ME-no' },
      { body_part: 'Tongue', word: 'Ulimi', pronunciation: 'u-LI-mi' },
      { body_part: 'Ear', word: 'Sikio', pronunciation: 'si-KI-o' },
      { body_part: 'Neck', word: 'Shingo', pronunciation: 'SHI-ngo' },
      { body_part: 'Shoulder', word: 'Bega', pronunciation: 'BE-ga' },
      { body_part: 'Arm', word: 'Mkono', pronunciation: 'm-KO-no' },
      { body_part: 'Hand', word: 'Mkono', pronunciation: 'm-KO-no' },
      { body_part: 'Finger', word: 'Kidole', pronunciation: 'ki-DO-le' },
      { body_part: 'Chest', word: 'Kifua', pronunciation: 'ki-FU-a' },
      { body_part: 'Back', word: 'Mgongo', pronunciation: 'm-GO-ngo' },
      { body_part: 'Stomach', word: 'Tumbo', pronunciation: 'TUM-bo' },
      { body_part: 'Leg', word: 'Mguu', pronunciation: 'm-GU-u' },
      { body_part: 'Knee', word: 'Goti', pronunciation: 'GO-ti' },
      { body_part: 'Foot', word: 'Mguu', pronunciation: 'm-GU-u' }
    ],
    
    nature: [
      { element: 'Sun', word: 'Jua', description: 'Source of light and heat', season: 'all' },
      { element: 'Moon', word: 'Mwezi', description: 'Night light', season: 'all' },
      { element: 'Stars', word: 'Nyota', description: 'Night sky lights', season: 'all' },
      { element: 'Rain', word: 'Mvua', description: 'Water from sky', season: 'rainy' },
      { element: 'Wind', word: 'Upepo', description: 'Moving air', season: 'all' },
      { element: 'Cloud', word: 'Wingu', description: 'Sky formation', season: 'all' },
      { element: 'Lightning', word: 'Umeme', description: 'Electric flash', season: 'rainy' },
      { element: 'Thunder', word: 'Radi', description: 'Sound of lightning', season: 'rainy' },
      { element: 'Fire', word: 'Moto', description: 'Burning flame', season: 'all' },
      { element: 'Water', word: 'Maji', description: 'Life source', season: 'all' },
      { element: 'Earth', word: 'Ardhi', description: 'Ground/soil', season: 'all' },
      { element: 'Mountain', word: 'Mlima', description: 'High land formation', season: 'all' },
      { element: 'River', word: 'Mto', description: 'Flowing water', season: 'all' },
      { element: 'Lake', word: 'Ziwa', description: 'Large water body', season: 'all' },
      { element: 'Ocean', word: 'Bahari', description: 'Vast water body', season: 'all' },
      { element: 'Forest', word: 'Msitu', description: 'Many trees together', season: 'all' },
      { element: 'Tree', word: 'Mti', description: 'Tall plant with trunk', season: 'all' },
      { element: 'Flower', word: 'Ua', description: 'Colorful plant part', season: 'all' },
      { element: 'Grass', word: 'Majani', description: 'Ground covering plant', season: 'all' }
    ],
    
    occupations: [
      { occupation: 'Teacher', word: 'Mwalimu', description: 'Educates students', tools: 'Books, chalk, board' },
      { occupation: 'Doctor', word: 'Daktari', description: 'Treats sick people', tools: 'Medicine, stethoscope' },
      { occupation: 'Farmer', word: 'Mkulima', description: 'Grows crops', tools: 'Hoe, seeds, water' },
      { occupation: 'Driver', word: 'Dereva', description: 'Operates vehicles', tools: 'Car, license' },
      { occupation: 'Cook', word: 'Mpishi', description: 'Prepares food', tools: 'Pots, ingredients' },
      { occupation: 'Builder', word: 'Mjenzi', description: 'Constructs buildings', tools: 'Cement, bricks, tools' },
      { occupation: 'Tailor', word: 'Mshonaji', description: 'Makes clothes', tools: 'Sewing machine, fabric' },
      { occupation: 'Shopkeeper', word: 'Mfanyabiashara', description: 'Sells goods', tools: 'Shop, products' },
      { occupation: 'Police', word: 'Polisi', description: 'Maintains law and order', tools: 'Uniform, radio' },
      { occupation: 'Nurse', word: 'Muuguzi', description: 'Cares for patients', tools: 'Medicine, uniform' },
      { occupation: 'Mechanic', word: 'Fundi', description: 'Repairs machines', tools: 'Tools, spare parts' },
      { occupation: 'Fisherman', word: 'Mvuvi', description: 'Catches fish', tools: 'Net, boat, hooks' },
      { occupation: 'Carpenter', word: 'Seremala', description: 'Works with wood', tools: 'Saw, hammer, nails' },
      { occupation: 'Barber', word: 'Kinyozi', description: 'Cuts hair', tools: 'Scissors, razor' },
      { occupation: 'Lawyer', word: 'Wakili', description: 'Legal advisor', tools: 'Law books, documents' }
    ],
    
    months: [
      { month: 'January', word: 'Januari', season: 'Dry season', activities: 'Harvesting, land preparation' },
      { month: 'February', word: 'Februari', season: 'Dry season', activities: 'Land preparation, planting' },
      { month: 'March', word: 'Machi', season: 'Long rains begin', activities: 'Planting season' },
      { month: 'April', word: 'Aprili', season: 'Long rains', activities: 'Crop growing, weeding' },
      { month: 'May', word: 'Mei', season: 'Long rains', activities: 'Crop maintenance' },
      { month: 'June', word: 'Juni', season: 'Cool season', activities: 'Harvesting early crops' },
      { month: 'July', word: 'Julai', season: 'Cool/dry season', activities: 'Main harvest time' },
      { month: 'August', word: 'Agosti', season: 'Cool/dry season', activities: 'Post-harvest activities' },
      { month: 'September', word: 'Septemba', season: 'Dry season', activities: 'Land preparation' },
      { month: 'October', word: 'Oktoba', season: 'Short rains begin', activities: 'Second planting season' },
      { month: 'November', word: 'Novemba', season: 'Short rains', activities: 'Crop growing' },
      { month: 'December', word: 'Desemba', season: 'Short rains end', activities: 'Harvesting, celebrations' }
    ],
    
    proverbs: [
      { 
        proverb: 'Haraka haraka haina baraka', 
        meaning: 'Hurry hurry has no blessing', 
        context: 'Patience and careful work bring better results', 
        lesson: 'Take time to do things properly' 
      },
      { 
        proverb: 'Umoja ni nguvu, utengano ni udhaifu', 
        meaning: 'Unity is strength, division is weakness', 
        context: 'Working together achieves more than working alone', 
        lesson: 'Cooperation and teamwork are important' 
      },
      { 
        proverb: 'Asiyefunzwa na mamaye hufunzwa na ulimwengu', 
        meaning: 'One who is not taught by their mother will be taught by the world', 
        context: 'Early education and guidance prevent harsh life lessons', 
        lesson: 'Listen to wise counsel from elders' 
      },
      { 
        proverb: 'Mchagua jembe si mkulima', 
        meaning: 'One who chooses the hoe is not a farmer', 
        context: 'Being picky about tools shows lack of commitment to work', 
        lesson: 'True workers use whatever tools are available' 
      },
      { 
        proverb: 'Kidole kimoja hakivunji chawa', 
        meaning: 'One finger cannot kill a louse', 
        context: 'Some tasks require cooperation and teamwork', 
        lesson: 'Unity and cooperation are necessary for success' 
      },
      { 
        proverb: 'Mti hauanguki kwa pigo la moja', 
        meaning: 'A tree does not fall with one strike', 
        context: 'Great achievements require persistent effort', 
        lesson: 'Persistence and patience lead to success' 
      },
      { 
        proverb: 'Penye nia pana njia', 
        meaning: 'Where there is a will, there is a way', 
        context: 'Determination helps overcome obstacles', 
        lesson: 'Strong desire and commitment find solutions' 
      },
      { 
        proverb: 'Ukweli hauogopi upelelezi', 
        meaning: 'Truth does not fear investigation', 
        context: 'Honest people welcome scrutiny', 
        lesson: 'Always speak and live truthfully' 
      }
    ],
    
    names: [
      { name: 'Amina', meaning: 'Trustworthy, faithful', gender: 'female', occasion: 'general' },
      { name: 'Hassan', meaning: 'Handsome, good', gender: 'male', occasion: 'general' },
      { name: 'Fatuma', meaning: 'Captivating, charming', gender: 'female', occasion: 'general' },
      { name: 'Omar', meaning: 'Long-lived, flourishing', gender: 'male', occasion: 'general' },
      { name: 'Zainab', meaning: 'Fragrant flower', gender: 'female', occasion: 'general' },
      { name: 'Ali', meaning: 'Elevated, noble', gender: 'male', occasion: 'general' },
      { name: 'Khadija', meaning: 'Premature child', gender: 'female', occasion: 'early_birth' },
      { name: 'Ibrahim', meaning: 'Father of many', gender: 'male', occasion: 'general' },
      { name: 'Maryam', meaning: 'Beloved, wished for child', gender: 'female', occasion: 'general' },
      { name: 'Yusuf', meaning: 'God increases', gender: 'male', occasion: 'blessing' },
      { name: 'Aisha', meaning: 'Living, prosperous', gender: 'female', occasion: 'general' },
      { name: 'Hamisi', meaning: 'Born on Thursday', gender: 'male', occasion: 'thursday' },
      { name: 'Subira', meaning: 'Patience', gender: 'female', occasion: 'difficult_times' },
      { name: 'Baraka', meaning: 'Blessing', gender: 'male', occasion: 'blessing' },
      { name: 'Rehema', meaning: 'Compassion, mercy', gender: 'female', occasion: 'general' },
      { name: 'Salim', meaning: 'Safe, peaceful', gender: 'male', occasion: 'peace' },
      { name: 'Neema', meaning: 'Grace, blessing', gender: 'female', occasion: 'blessing' },
      { name: 'Juma', meaning: 'Born on Friday', gender: 'male', occasion: 'friday' },
      { name: 'Furaha', meaning: 'Joy, happiness', gender: 'female', occasion: 'celebration' },
      { name: 'Rashid', meaning: 'Rightly guided', gender: 'male', occasion: 'wisdom' }
    ],
    
    cultural_practices: [
      { 
        practice: 'Harambee', 
        description: 'Community coming together to help with projects or support someone in need', 
        occasion: 'Community development, emergencies, celebrations', 
        significance: 'Promotes unity, mutual support, and collective responsibility' 
      },
      { 
        practice: 'Ugali eating tradition', 
        description: 'Eating ugali with hands, sharing from common plate, respecting elders\' portions', 
        occasion: 'Daily meals, family gatherings', 
        significance: 'Shows respect, unity, and traditional values' 
      },
      { 
        practice: 'Greeting elders', 
        description: 'Special respectful greetings for older people, using both hands when shaking', 
        occasion: 'Daily interactions, formal meetings', 
        significance: 'Shows respect for age and wisdom' 
      },
      { 
        practice: 'Wedding ceremonies', 
        description: 'Traditional marriage customs including dowry negotiations, ceremonies', 
        occasion: 'Marriage celebrations', 
        significance: 'Unites families, preserves cultural traditions' 
      },
      { 
        practice: 'Naming ceremonies', 
        description: 'Special ceremonies to name newborn children, often after ancestors', 
        occasion: 'Birth of children', 
        significance: 'Connects child to family history and cultural identity' 
      },
      { 
        practice: 'Storytelling', 
        description: 'Evening stories told by elders to teach morals and preserve history', 
        occasion: 'Evening gatherings, cultural events', 
        significance: 'Passes down wisdom, values, and cultural knowledge' 
      }
    ],
    
    // NEW COMPREHENSIVE CATEGORIES
    
    days_of_week: [
      { day: 'Monday', word: 'Jumatatu', pronunciation: 'ju-ma-TA-tu', meaning: 'First day' },
      { day: 'Tuesday', word: 'Jumanne', pronunciation: 'ju-MAN-ne', meaning: 'Second day' },
      { day: 'Wednesday', word: 'Jumatano', pronunciation: 'ju-ma-TA-no', meaning: 'Third day' },
      { day: 'Thursday', word: 'Alhamisi', pronunciation: 'al-ha-MI-si', meaning: 'Fifth day (Arabic origin)' },
      { day: 'Friday', word: 'Ijumaa', pronunciation: 'i-ju-MA-a', meaning: 'Gathering day (Arabic origin)' },
      { day: 'Saturday', word: 'Jumamosi', pronunciation: 'ju-ma-MO-si', meaning: 'First day' },
      { day: 'Sunday', word: 'Jumapili', pronunciation: 'ju-ma-PI-li', meaning: 'Second day' }
    ],
    
    time_expressions: [
      { expression: 'Morning', word: 'Asubuhi', pronunciation: 'a-su-BU-hi', context: '6 AM - 12 PM' },
      { expression: 'Noon', word: 'Adhuhuri', pronunciation: 'a-dhu-HU-ri', context: '12 PM exactly' },
      { expression: 'Afternoon', word: 'Mchana', pronunciation: 'm-CHA-na', context: '12 PM - 6 PM' },
      { expression: 'Evening', word: 'Jioni', pronunciation: 'ji-O-ni', context: '6 PM - 9 PM' },
      { expression: 'Night', word: 'Usiku', pronunciation: 'u-SI-ku', context: '9 PM - 6 AM' },
      { expression: 'Dawn', word: 'Alfajiri', pronunciation: 'al-fa-JI-ri', context: 'Early morning' },
      { expression: 'Sunset', word: 'Magharibi', pronunciation: 'ma-gha-RI-bi', context: 'Evening prayer time' },
      { expression: 'Midnight', word: 'Usiku wa manane', pronunciation: 'u-SI-ku wa ma-NA-ne', context: '12 AM' },
      { expression: 'Hour', word: 'Saa', pronunciation: 'SA-a', context: 'Time unit' },
      { expression: 'Minute', word: 'Dakika', pronunciation: 'da-KI-ka', context: 'Time unit' },
      { expression: 'Second', word: 'Sekunde', pronunciation: 'se-KUN-de', context: 'Time unit' },
      { expression: 'Week', word: 'Wiki', pronunciation: 'WI-ki', context: 'Seven days' },
      { expression: 'Month', word: 'Mwezi', pronunciation: 'mwe-ZI', context: 'Calendar month' },
      { expression: 'Year', word: 'Mwaka', pronunciation: 'mwa-KA', context: 'Calendar year' },
      { expression: 'Early', word: 'Mapema', pronunciation: 'ma-PE-ma', context: 'Before expected time' },
      { expression: 'Late', word: 'Chelewa', pronunciation: 'che-LE-wa', context: 'After expected time' },
      { expression: 'On time', word: 'Kwa wakati', pronunciation: 'kwa wa-KA-ti', context: 'Punctual' }
    ],
    
    directions: [
      { direction: 'North', word: 'Kaskazini', pronunciation: 'kas-ka-ZI-ni', context: 'Compass direction' },
      { direction: 'South', word: 'Kusini', pronunciation: 'ku-SI-ni', context: 'Compass direction' },
      { direction: 'East', word: 'Mashariki', pronunciation: 'ma-sha-RI-ki', context: 'Compass direction' },
      { direction: 'West', word: 'Magharibi', pronunciation: 'ma-gha-RI-bi', context: 'Compass direction' },
      { direction: 'Left', word: 'Kushoto', pronunciation: 'ku-SHO-to', context: 'Relative direction' },
      { direction: 'Right', word: 'Kulia', pronunciation: 'ku-LI-a', context: 'Relative direction' },
      { direction: 'Straight', word: 'Moja kwa moja', pronunciation: 'MO-ja kwa MO-ja', context: 'Direct path' },
      { direction: 'Up', word: 'Juu', pronunciation: 'JU-u', context: 'Higher position' },
      { direction: 'Down', word: 'Chini', pronunciation: 'CHI-ni', context: 'Lower position' },
      { direction: 'Inside', word: 'Ndani', pronunciation: 'n-DA-ni', context: 'Interior' },
      { direction: 'Outside', word: 'Nje', pronunciation: 'NJE', context: 'Exterior' },
      { direction: 'Near', word: 'Karibu', pronunciation: 'ka-RI-bu', context: 'Close distance' },
      { direction: 'Far', word: 'Mbali', pronunciation: 'm-BA-li', context: 'Distant' },
      { direction: 'Between', word: 'Kati', pronunciation: 'KA-ti', context: 'In the middle' },
      { direction: 'Around', word: 'Kuzunguka', pronunciation: 'ku-zu-ngu-KA', context: 'Surrounding' }
    ],
    
    common_phrases: [
      { phrase: 'How much?', translation: 'Bei gani?', pronunciation: 'BEI ga-ni?', context: 'Shopping/bargaining' },
      { phrase: 'I don\'t understand', translation: 'Sielewi', pronunciation: 'si-e-LE-wi', context: 'Communication difficulty' },
      { phrase: 'Please help me', translation: 'Tafadhali nisaidie', pronunciation: 'ta-fa-DHA-li ni-sai-DI-e', context: 'Asking for assistance' },
      { phrase: 'Where is...?', translation: 'Wapi...?', pronunciation: 'WA-pi...?', context: 'Asking for location' },
      { phrase: 'I am lost', translation: 'Nimepotea', pronunciation: 'ni-me-po-TE-a', context: 'Need directions' },
      { phrase: 'Call the police', translation: 'Mwite polisi', pronunciation: 'mwi-TE po-LI-si', context: 'Emergency' },
      { phrase: 'I need a doctor', translation: 'Nahitaji daktari', pronunciation: 'na-hi-TA-ji dak-TA-ri', context: 'Medical emergency' },
      { phrase: 'How are you?', translation: 'Hujambo?', pronunciation: 'hu-JAM-bo?', context: 'Greeting' },
      { phrase: 'What is your name?', translation: 'Jina lako ni nani?', pronunciation: 'JI-na LA-ko ni NA-ni?', context: 'Introduction' },
      { phrase: 'My name is...', translation: 'Jina langu ni...', pronunciation: 'JI-na LAN-gu ni...', context: 'Introduction' },
      { phrase: 'Nice to meet you', translation: 'Nimefurahi kukutana nawe', pronunciation: 'ni-me-fu-RA-hi ku-ku-ta-NA na-WE', context: 'Introduction' },
      { phrase: 'See you later', translation: 'Tutaonana baadaye', pronunciation: 'tu-ta-o-na-NA ba-a-DA-ye', context: 'Farewell' },
      { phrase: 'Good luck', translation: 'Bahati njema', pronunciation: 'ba-HA-ti NJE-ma', context: 'Encouragement' },
      { phrase: 'Congratulations', translation: 'Hongera', pronunciation: 'hon-GE-ra', context: 'Celebration' },
      { phrase: 'I\'m sorry', translation: 'Samahani', pronunciation: 'sa-ma-HA-ni', context: 'Apology' },
      { phrase: 'Excuse me', translation: 'Samahani', pronunciation: 'sa-ma-HA-ni', context: 'Getting attention' },
      { phrase: 'You\'re welcome', translation: 'Karibu', pronunciation: 'ka-RI-bu', context: 'Response to thanks' },
      { phrase: 'I love you', translation: 'Nakupenda', pronunciation: 'na-ku-PEN-da', context: 'Affection' },
      { phrase: 'Happy birthday', translation: 'Heri ya siku ya kuzaliwa', pronunciation: 'HE-ri ya SI-ku ya ku-za-LI-wa', context: 'Birthday wishes' },
      { phrase: 'Merry Christmas', translation: 'Heri ya Krismasi', pronunciation: 'HE-ri ya kris-MA-si', context: 'Holiday greeting' }
    ],
    
    school_subjects: [
      { subject: 'Mathematics', word: 'Hisabati', pronunciation: 'hi-sa-BA-ti', description: 'Numbers and calculations' },
      { subject: 'Science', word: 'Sayansi', pronunciation: 'sa-YAN-si', description: 'Natural world study' },
      { subject: 'History', word: 'Historia', pronunciation: 'his-to-RI-a', description: 'Past events study' },
      { subject: 'Geography', word: 'Jiografia', pronunciation: 'ji-o-gra-FI-a', description: 'Earth and places study' },
      { subject: 'English', word: 'Kiingereza', pronunciation: 'ki-in-ge-RE-za', description: 'English language' },
      { subject: 'Kiswahili', word: 'Kiswahili', pronunciation: 'ki-swa-HI-li', description: 'Swahili language' },
      { subject: 'Art', word: 'Sanaa', pronunciation: 'sa-NA-a', description: 'Creative expression' },
      { subject: 'Music', word: 'Muziki', pronunciation: 'mu-ZI-ki', description: 'Musical education' },
      { subject: 'Physical Education', word: 'Mazoezi ya mwili', pronunciation: 'ma-zo-E-zi ya mwi-LI', description: 'Body fitness' },
      { subject: 'Religious Education', word: 'Elimu ya dini', pronunciation: 'e-LI-mu ya DI-ni', description: 'Spiritual learning' }
    ],
    
    weather_conditions: [
      { condition: 'Sunny', word: 'Jua kali', pronunciation: 'JU-a KA-li', description: 'Bright sunshine' },
      { condition: 'Cloudy', word: 'Mawingu', pronunciation: 'ma-wi-NGU', description: 'Sky covered with clouds' },
      { condition: 'Rainy', word: 'Mvua', pronunciation: 'm-VU-a', description: 'Water falling from sky' },
      { condition: 'Stormy', word: 'Dhoruba', pronunciation: 'dho-RU-ba', description: 'Severe weather with wind and rain' },
      { condition: 'Windy', word: 'Upepo mkali', pronunciation: 'u-PE-po m-KA-li', description: 'Strong air movement' },
      { condition: 'Hot', word: 'Joto', pronunciation: 'JO-to', description: 'High temperature' },
      { condition: 'Cold', word: 'Baridi', pronunciation: 'ba-RI-di', description: 'Low temperature' },
      { condition: 'Humid', word: 'Unyevu', pronunciation: 'u-nye-VU', description: 'Moist air' },
      { condition: 'Dry', word: 'Kavu', pronunciation: 'KA-vu', description: 'No moisture' },
      { condition: 'Foggy', word: 'Ukungu', pronunciation: 'u-ku-NGU', description: 'Thick mist' }
    ]
  },

  // KIKUYU CONTENT - COMPREHENSIVE
  kikuyu: {
    basic_words: [
      // Greetings & Courtesy
      { word: 'Wega', meaning: 'Good/Fine', pronunciation: 'WE-ga', category: 'adjective' },
      { word: 'Nĩ wega', meaning: 'It is good', pronunciation: 'ni WE-ga', category: 'phrase' },
      { word: 'Ngatho', meaning: 'Thank you', pronunciation: 'nga-THO', category: 'courtesy' },
      { word: 'Ũhoro', meaning: 'News/Matter', pronunciation: 'u-HO-ro', category: 'noun' },
      { word: 'Thayũ', meaning: 'Peace', pronunciation: 'tha-YU', category: 'noun' },
      { word: 'Ũgima', meaning: 'Health/Wellness', pronunciation: 'u-GI-ma', category: 'noun' },
      
      // Common Adjectives
      { word: 'Mũnene', meaning: 'Big/Large', pronunciation: 'mu-NE-ne', category: 'adjective' },
      { word: 'Mũnini', meaning: 'Small/Little', pronunciation: 'mu-NI-ni', category: 'adjective' },
      { word: 'Mũraihu', meaning: 'Tall/Long', pronunciation: 'mu-RAI-hu', category: 'adjective' },
      { word: 'Mũkuhi', meaning: 'Short', pronunciation: 'mu-KU-hi', category: 'adjective' },
      { word: 'Mũtheru', meaning: 'Clean/Pure', pronunciation: 'mu-THE-ru', category: 'adjective' },
      { word: 'Mũthũku', meaning: 'Dirty', pronunciation: 'mu-THU-ku', category: 'adjective' },
      { word: 'Mũhiũ', meaning: 'New', pronunciation: 'mu-HI-u', category: 'adjective' },
      { word: 'Mũkũrũ', meaning: 'Old', pronunciation: 'mu-KU-ru', category: 'adjective' },
      { word: 'Mũrũaru', meaning: 'Beautiful', pronunciation: 'mu-ru-A-ru', category: 'adjective' },
      
      // Essential Nouns
      { word: 'Irio', meaning: 'Food', pronunciation: 'I-rio', category: 'noun' },
      { word: 'Maaĩ', meaning: 'Water', pronunciation: 'ma-A-i', category: 'noun' },
      { word: 'Nyũmba', meaning: 'House', pronunciation: 'NYUM-ba', category: 'noun' },
      { word: 'Mũcii', meaning: 'Home', pronunciation: 'mu-CI-i', category: 'noun' },
      { word: 'Mũrata', meaning: 'Friend', pronunciation: 'mu-RA-ta', category: 'noun' },
      { word: 'Gĩthomo', meaning: 'School', pronunciation: 'gi-THO-mo', category: 'noun' },
      { word: 'Wĩra', meaning: 'Work/Job', pronunciation: 'wi-RA', category: 'noun' },
      { word: 'Betha', meaning: 'Money', pronunciation: 'BE-tha', category: 'noun' },
      { word: 'Ibuku', meaning: 'Book', pronunciation: 'i-BU-ku', category: 'noun' },
      { word: 'Mũtĩ', meaning: 'Tree', pronunciation: 'mu-TI', category: 'noun' },
      { word: 'Njĩra', meaning: 'Road/Path', pronunciation: 'nji-RA', category: 'noun' },
      
      // Common Verbs
      { word: 'Gũthiĩ', meaning: 'To go', pronunciation: 'gu-THI-i', category: 'verb' },
      { word: 'Gũũka', meaning: 'To come', pronunciation: 'gu-U-ka', category: 'verb' },
      { word: 'Kũrĩa', meaning: 'To eat', pronunciation: 'ku-RI-a', category: 'verb' },
      { word: 'Kũnyua', meaning: 'To drink', pronunciation: 'ku-NYU-a', category: 'verb' },
      { word: 'Gũkoma', meaning: 'To sleep', pronunciation: 'gu-KO-ma', category: 'verb' },
      { word: 'Gũthoma', meaning: 'To read/study', pronunciation: 'gu-THO-ma', category: 'verb' },
      { word: 'Kwandĩka', meaning: 'To write', pronunciation: 'kwan-DI-ka', category: 'verb' },
      { word: 'Kwaria', meaning: 'To speak/talk', pronunciation: 'kwa-RI-a', category: 'verb' },
      { word: 'Kuona', meaning: 'To see', pronunciation: 'ku-O-na', category: 'verb' },
      { word: 'Kũigua', meaning: 'To hear', pronunciation: 'ku-I-gua', category: 'verb' },
      { word: 'Gwenda', meaning: 'To love/want', pronunciation: 'gwen-DA', category: 'verb' },
      { word: 'Gũtheka', meaning: 'To laugh', pronunciation: 'gu-THE-ka', category: 'verb' },
      { word: 'Kũrĩra', meaning: 'To cry', pronunciation: 'ku-RI-ra', category: 'verb' },
      { word: 'Gwĩka', meaning: 'To do/make', pronunciation: 'gwi-KA', category: 'verb' },
      
      // Time & Direction
      { word: 'Ũmũthĩ', meaning: 'Today', pronunciation: 'u-mu-THI', category: 'time' },
      { word: 'Ira', meaning: 'Yesterday', pronunciation: 'I-ra', category: 'time' },
      { word: 'Rũciũ', meaning: 'Tomorrow', pronunciation: 'ru-CI-u', category: 'time' },
      { word: 'Rĩu', meaning: 'Now', pronunciation: 'RI-u', category: 'time' },
      { word: 'Haha', meaning: 'Here', pronunciation: 'HA-ha', category: 'direction' },
      { word: 'Kũu', meaning: 'There', pronunciation: 'KU-u', category: 'direction' },
      { word: 'Mbere', meaning: 'Front/Before', pronunciation: 'm-BE-re', category: 'direction' },
      { word: 'Thuutha', meaning: 'Behind/After', pronunciation: 'thu-U-tha', category: 'direction' },
      
      // Emotions & Feelings
      { word: 'Gĩkeno', meaning: 'Joy/Happiness', pronunciation: 'gi-KE-no', category: 'emotion' },
      { word: 'Kĩeha', meaning: 'Sadness/Pain', pronunciation: 'ki-E-ha', category: 'emotion' },
      { word: 'Marakara', meaning: 'Anger', pronunciation: 'ma-ra-KA-ra', category: 'emotion' },
      { word: 'Gwĩtigĩra', meaning: 'Fear', pronunciation: 'gwi-ti-GI-ra', category: 'emotion' },
      { word: 'Wendani', meaning: 'Love', pronunciation: 'wen-DA-ni', category: 'emotion' },
      { word: 'Ũthiũ', meaning: 'Hatred', pronunciation: 'u-THI-u', category: 'emotion' },
      { word: 'Ũũru', meaning: 'Jealousy', pronunciation: 'u-U-ru', category: 'emotion' },
      { word: 'Gĩkirĩria', meaning: 'Patience', pronunciation: 'gi-ki-RI-ria', category: 'emotion' }
    ],
    
    greetings: [
      // Basic Greetings
      { greeting: 'Wĩ mwega?', response: 'Ndĩ mwega', context: 'How are you?', time_of_day: 'any' },
      { greeting: 'Wĩ na thayũ?', response: 'Ndĩ na thayũ', context: 'Are you at peace?', time_of_day: 'any' },
      { greeting: 'Ũhoro waku?', response: 'Nĩ mwega', context: 'How are your affairs?', time_of_day: 'any' },
      { greeting: 'Wĩ na ũgima?', response: 'Ndĩ na ũgima', context: 'Are you healthy?', time_of_day: 'any' },
      
      // Time-specific Greetings
      { greeting: 'Rũciũ rwega', response: 'Ĩĩ rwega', context: 'Good morning', time_of_day: 'morning' },
      { greeting: 'Mũthenya mwega', response: 'Ĩĩ mwega', context: 'Good day', time_of_day: 'afternoon' },
      { greeting: 'Hwaĩ-inĩ mwega', response: 'Ĩĩ mwega', context: 'Good evening', time_of_day: 'evening' },
      { greeting: 'Ũtukũ mwega', response: 'Ĩĩ mwega', context: 'Good night', time_of_day: 'night' },
      
      // Specific Context Greetings
      { greeting: 'Wĩra ũguo?', response: 'Nĩ mwega', context: 'How is work?', time_of_day: 'any' },
      { greeting: 'Mũciĩ ũguo?', response: 'Nĩ mwega', context: 'How is home?', time_of_day: 'any' },
      { greeting: 'Rũgendo rwaku?', response: 'Nĩ rwega', context: 'How was your journey?', time_of_day: 'any' },
      { greeting: 'Andũ a mũciĩ?', response: 'Nĩ mega', context: 'How are the people at home?', time_of_day: 'any' },
      { greeting: 'Ciana ciaku?', response: 'Nĩ njega', context: 'How are your children?', time_of_day: 'any' },
      
      // Welcoming Greetings
      { greeting: 'Wamũkĩra', response: 'Ngatho', context: 'Welcome', time_of_day: 'any' },
      { greeting: 'Wamũkĩra mũciĩ', response: 'Ngatho', context: 'Welcome home', time_of_day: 'any' },
      { greeting: 'Wamũkĩra irio', response: 'Ngatho', context: 'Welcome to eat', time_of_day: 'any' },
      
      // Farewells
      { greeting: 'Tigwo na thayũ', response: 'Ũtigwo na thayũ', context: 'Stay in peace', time_of_day: 'any' },
      { greeting: 'Thiĩ na thayũ', response: 'Ngatho', context: 'Go in peace', time_of_day: 'any' },
      { greeting: 'Tũgũcemanĩria', response: 'Ĩĩ tũgũcemanĩria', context: 'We shall meet again', time_of_day: 'any' },
      { greeting: 'Koma na thayũ', response: 'Nawe ũkome na thayũ', context: 'Sleep in peace', time_of_day: 'night' },
      
      // Religious/Spiritual Greetings
      { greeting: 'Ngai akũrathime', response: 'Ameni', context: 'May God bless you', time_of_day: 'any' },
      { greeting: 'Irathimo cia Ngai', response: 'Ameni', context: 'God\'s blessings', time_of_day: 'any' }
    ],
    
    numbers: [
      { number: 0, word: 'Kĩhĩtũ', pronunciation: 'ki-HI-tu' },
      { number: 1, word: 'Ĩmwe', pronunciation: 'i-MWE' },
      { number: 2, word: 'Igĩrĩ', pronunciation: 'i-gi-RI' },
      { number: 3, word: 'Ithatũ', pronunciation: 'i-tha-TU' },
      { number: 4, word: 'Inya', pronunciation: 'I-nya' },
      { number: 5, word: 'Ithano', pronunciation: 'i-tha-NO' },
      { number: 6, word: 'Ithathatũ', pronunciation: 'i-tha-tha-TU' },
      { number: 7, word: 'Mũgwanja', pronunciation: 'mu-gwan-JA' },
      { number: 8, word: 'Inyanya', pronunciation: 'i-nya-NYA' },
      { number: 9, word: 'Kenda', pronunciation: 'KEN-da' },
      { number: 10, word: 'Ikũmi', pronunciation: 'i-KU-mi' },
      { number: 11, word: 'Ikũmi na ĩmwe', pronunciation: 'i-KU-mi na i-MWE' },
      { number: 12, word: 'Ikũmi na igĩrĩ', pronunciation: 'i-KU-mi na i-gi-RI' },
      { number: 15, word: 'Ikũmi na ithano', pronunciation: 'i-KU-mi na i-tha-NO' },
      { number: 20, word: 'Mĩrongo ĩĩrĩ', pronunciation: 'mi-ron-GO i-i-RI' },
      { number: 30, word: 'Mĩrongo ĩtatũ', pronunciation: 'mi-ron-GO i-ta-TU' },
      { number: 40, word: 'Mĩrongo ĩna', pronunciation: 'mi-ron-GO i-NA' },
      { number: 50, word: 'Mĩrongo ĩthano', pronunciation: 'mi-ron-GO i-tha-NO' },
      { number: 60, word: 'Mĩrongo ĩthathatũ', pronunciation: 'mi-ron-GO i-tha-tha-TU' },
      { number: 70, word: 'Mĩrongo mũgwanja', pronunciation: 'mi-ron-GO mu-gwan-JA' },
      { number: 80, word: 'Mĩrongo ĩnyanya', pronunciation: 'mi-ron-GO i-nya-NYA' },
      { number: 90, word: 'Mĩrongo kenda', pronunciation: 'mi-ron-GO KEN-da' },
      { number: 100, word: 'Igana', pronunciation: 'i-GA-na' },
      { number: 200, word: 'Magana meerĩ', pronunciation: 'ma-GA-na me-e-RI' },
      { number: 500, word: 'Magana mathano', pronunciation: 'ma-GA-na ma-tha-NO' },
      { number: 1000, word: 'Ngiri', pronunciation: 'ngi-RI' },
      { number: 2000, word: 'Ngiri igĩrĩ', pronunciation: 'ngi-RI i-gi-RI' },
      { number: 10000, word: 'Ngiri ikũmi', pronunciation: 'ngi-RI i-KU-mi' },
      { number: 100000, word: 'Ngiri igana', pronunciation: 'ngi-RI i-GA-na' },
      { number: 1000000, word: 'Milioni ĩmwe', pronunciation: 'mi-li-O-ni i-MWE' }
    ],
    
    family: [
      // Immediate Family
      { relationship: 'Father', term: 'Baba', gender_specific: 'no', context: 'Universal term' },
      { relationship: 'Mother', term: 'Maitu', gender_specific: 'no', context: 'Our mother' },
      { relationship: 'Son', term: 'Mũriũ', gender_specific: 'yes', context: 'Male child' },
      { relationship: 'Daughter', term: 'Mwarĩ', gender_specific: 'yes', context: 'Female child' },
      { relationship: 'Child', term: 'Mwana', gender_specific: 'no', context: 'General term for child' },
      { relationship: 'Children', term: 'Ciana', gender_specific: 'no', context: 'Plural of child' },
      { relationship: 'Baby', term: 'Kaana', gender_specific: 'no', context: 'Very young child' },
      { relationship: 'Firstborn', term: 'Irigithathi', gender_specific: 'no', context: 'First child' },
      
      // Siblings
      { relationship: 'Brother', term: 'Mũrũ wa maitũ', gender_specific: 'no', context: 'Brother (son of our mother)' },
      { relationship: 'Sister', term: 'Mwarĩ wa maitũ', gender_specific: 'no', context: 'Sister (daughter of our mother)' },
      { relationship: 'Elder brother', term: 'Mũkũrũ', gender_specific: 'no', context: 'Older male sibling' },
      { relationship: 'Elder sister', term: 'Mũkũrũ', gender_specific: 'no', context: 'Older female sibling' },
      { relationship: 'Younger sibling', term: 'Mũnini', gender_specific: 'no', context: 'Younger brother or sister' },
      
      // Grandparents
      { relationship: 'Grandfather', term: 'Guka', gender_specific: 'no', context: 'Paternal/maternal grandfather' },
      { relationship: 'Grandmother', term: 'Cucu', gender_specific: 'no', context: 'Paternal/maternal grandmother' },
      { relationship: 'Great grandfather', term: 'Guka mũkũrũ', gender_specific: 'no', context: 'Great grandfather' },
      { relationship: 'Great grandmother', term: 'Cucu mũkũrũ', gender_specific: 'no', context: 'Great grandmother' },
      
      // Aunts and Uncles
      { relationship: 'Uncle', term: 'Mũmĩ', gender_specific: 'no', context: 'Mother\'s brother' },
      { relationship: 'Uncle', term: 'Baba mũnini', gender_specific: 'no', context: 'Father\'s younger brother' },
      { relationship: 'Uncle', term: 'Baba mũkũrũ', gender_specific: 'no', context: 'Father\'s older brother' },
      { relationship: 'Aunt', term: 'Nyina mũnini', gender_specific: 'no', context: 'Father\'s sister' },
      { relationship: 'Aunt', term: 'Maitu mũnini', gender_specific: 'no', context: 'Mother\'s younger sister' },
      { relationship: 'Aunt', term: 'Maitu mũkũrũ', gender_specific: 'no', context: 'Mother\'s older sister' },
      
      // Marriage Relations
      { relationship: 'Husband', term: 'Mũthuuri', gender_specific: 'no', context: 'Male spouse' },
      { relationship: 'Wife', term: 'Mũtumia', gender_specific: 'no', context: 'Female spouse' },
      { relationship: 'Co-wife', term: 'Mũtumia ũngĩ', gender_specific: 'no', context: 'Another wife in polygamous marriage' },
      
      // In-laws
      { relationship: 'Father-in-law', term: 'Mũthoni-we', gender_specific: 'no', context: 'Spouse\'s father' },
      { relationship: 'Mother-in-law', term: 'Nyina-we', gender_specific: 'no', context: 'Spouse\'s mother' },
      { relationship: 'Son-in-law', term: 'Mũthoni', gender_specific: 'no', context: 'Daughter\'s husband' },
      { relationship: 'Daughter-in-law', term: 'Mũtumia wa mũriũ', gender_specific: 'no', context: 'Son\'s wife' },
      
      // Extended Family
      { relationship: 'Cousin', term: 'Mũrũ wa mũmĩ', gender_specific: 'no', context: 'Uncle\'s child' },
      { relationship: 'Nephew', term: 'Mũriũ wa mwarĩ', gender_specific: 'no', context: 'Sister\'s son' },
      { relationship: 'Niece', term: 'Mwarĩ wa mwarĩ', gender_specific: 'no', context: 'Sister\'s daughter' },
      { relationship: 'Grandchild', term: 'Mũriũ wa mũriũ', gender_specific: 'no', context: 'Child\'s child' },
      
      // Family Roles
      { relationship: 'Head of family', term: 'Mũtongoria wa mũciĩ', gender_specific: 'no', context: 'Family leader' },
      { relationship: 'Elder', term: 'Mũthuuri mũkũrũ', gender_specific: 'no', context: 'Respected older family member' },
      { relationship: 'Ancestor', term: 'Mũriũ wa tene', gender_specific: 'no', context: 'Deceased family member' }
    ],
    
    colors: [
      { color: 'Red', word: 'Mũtune', description: 'Color of blood, fire' },
      { color: 'Blue', word: 'Mũbirũ', description: 'Color of sky, water' },
      { color: 'Green', word: 'Mũruru', description: 'Color of grass, leaves' },
      { color: 'Yellow', word: 'Mũnjano', description: 'Color of sun, banana' },
      { color: 'Black', word: 'Mũiru', description: 'Color of night, charcoal' },
      { color: 'White', word: 'Mũerũ', description: 'Color of milk, clouds' },
      { color: 'Brown', word: 'Mũkahawia', description: 'Color of coffee, earth' },
      { color: 'Orange', word: 'Mũcungwa', description: 'Color of orange fruit' },
      { color: 'Purple', word: 'Mũtune-birũ', description: 'Mixed red and blue' },
      { color: 'Pink', word: 'Mũtune mũhũthũ', description: 'Light red color' },
      { color: 'Gray', word: 'Mũthũngũ', description: 'Color of ash' }
    ],
    
    animals: [
      // Wild Animals
      { animal: 'Lion', word: 'Mũrũaru', sound: 'Kũrũrũma', habitat: 'Werũ' },
      { animal: 'Elephant', word: 'Njogu', sound: 'Kũrĩra', habitat: 'Mũtitũ' },
      { animal: 'Leopard', word: 'Ngarĩ', sound: 'Kũrũrũma', habitat: 'Mũtitũ' },
      { animal: 'Buffalo', word: 'Mbogo', sound: 'Kũrũrũma', habitat: 'Werũ' },
      { animal: 'Zebra', word: 'Mbũgĩ', sound: 'Kũrĩra', habitat: 'Werũ' },
      { animal: 'Giraffe', word: 'Ndũũa', sound: 'Kĩmya', habitat: 'Werũ' },
      { animal: 'Monkey', word: 'Nkima', sound: 'Kũrĩra', habitat: 'Mũtitũ' },
      { animal: 'Baboon', word: 'Kĩmemia', sound: 'Kũrĩra', habitat: 'Mahiga' },
      
      // Domestic Animals
      { animal: 'Cow', word: 'Ng\'ombe', sound: 'Kũrũrũma', habitat: 'Mũgũnda' },
      { animal: 'Goat', word: 'Mbũri', sound: 'Kũrĩra', habitat: 'Mũgũnda' },
      { animal: 'Sheep', word: 'Ng\'ondu', sound: 'Kũrĩra', habitat: 'Mũgũnda' },
      { animal: 'Chicken', word: 'Ngũkũ', sound: 'Kũrĩra', habitat: 'Mũciĩ' },
      { animal: 'Dog', word: 'Ngui', sound: 'Kũbũka', habitat: 'Mũciĩ' },
      { animal: 'Cat', word: 'Njamba', sound: 'Kũnyaũka', habitat: 'Mũciĩ' },
      { animal: 'Donkey', word: 'Ndigiri', sound: 'Kũrĩra', habitat: 'Mũgũnda' },
      
      // Birds
      { animal: 'Bird', word: 'Nyoni', sound: 'Kũina', habitat: 'Mĩtĩ' },
      { animal: 'Eagle', word: 'Nderi', sound: 'Kũrĩra', habitat: 'Irĩma' },
      { animal: 'Crow', word: 'Kagogo', sound: 'Kũrĩra', habitat: 'Mĩtĩ' },
      { animal: 'Dove', word: 'Ndutura', sound: 'Kũina', habitat: 'Mĩtĩ' },
      
      // Insects
      { animal: 'Bee', word: 'Njũkĩ', sound: 'Kũvuma', habitat: 'Mahũa' },
      { animal: 'Butterfly', word: 'Kĩhuruta', sound: 'Kĩmya', habitat: 'Mahũa' },
      { animal: 'Ant', word: 'Thigirĩ', sound: 'Kĩmya', habitat: 'Thĩ' },
      { animal: 'Spider', word: 'Mbũmbũĩ', sound: 'Kĩmya', habitat: 'Nyũmba' }
    ],
    
    food: [
      { item: 'Ugali', word: 'Ũgalĩ', type: 'Staple', preparation: 'Cooked with water' },
      { item: 'Rice', word: 'Mũcere', type: 'Staple', preparation: 'Boiled' },
      { item: 'Beans', word: 'Njahĩ', type: 'Protein', preparation: 'Boiled/Stewed' },
      { item: 'Meat', word: 'Nyama', type: 'Protein', preparation: 'Roasted/Stewed' },
      { item: 'Vegetables', word: 'Mboga', type: 'Vegetable', preparation: 'Cooked' },
      { item: 'Sweet potato', word: 'Ngwacĩ', type: 'Tuber', preparation: 'Boiled/Roasted' },
      { item: 'Irish potato', word: 'Waru', type: 'Tuber', preparation: 'Boiled/Fried' },
      { item: 'Banana', word: 'Irigũ', type: 'Fruit', preparation: 'Raw/Cooked' },
      { item: 'Maize', word: 'Mbembe', type: 'Grain', preparation: 'Roasted/Ground' },
      { item: 'Milk', word: 'Iria', type: 'Dairy', preparation: 'Fresh/Fermented' },
      { item: 'Tea', word: 'Cai', type: 'Beverage', preparation: 'Boiled with milk' },
      { item: 'Water', word: 'Maaĩ', type: 'Beverage', preparation: 'Fresh' },
      { item: 'Honey', word: 'Ũũkĩ', type: 'Sweet', preparation: 'Natural' },
      { item: 'Salt', word: 'Cumbĩ', type: 'Seasoning', preparation: 'Added to food' },
      { item: 'Oil', word: 'Maguta', type: 'Fat', preparation: 'For cooking' }
    ],
    
    body_parts: [
      { body_part: 'Head', word: 'Mũtwe', pronunciation: 'mu-TWE' },
      { body_part: 'Hair', word: 'Njuĩrĩ', pronunciation: 'nju-I-ri' },
      { body_part: 'Face', word: 'Ũthiũ', pronunciation: 'u-THI-u' },
      { body_part: 'Eye', word: 'Riitho', pronunciation: 'ri-I-tho' },
      { body_part: 'Nose', word: 'Iniũrũ', pronunciation: 'i-ni-U-ru' },
      { body_part: 'Mouth', word: 'Kanua', pronunciation: 'ka-NU-a' },
      { body_part: 'Ear', word: 'Gũtũ', pronunciation: 'gu-TU' },
      { body_part: 'Neck', word: 'Ngingo', pronunciation: 'ngi-NGO' },
      { body_part: 'Shoulder', word: 'Kĩande', pronunciation: 'ki-AN-de' },
      { body_part: 'Arm', word: 'Guoko', pronunciation: 'gu-O-ko' },
      { body_part: 'Hand', word: 'Guoko', pronunciation: 'gu-O-ko' },
      { body_part: 'Finger', word: 'Kĩara', pronunciation: 'ki-A-ra' },
      { body_part: 'Chest', word: 'Gĩthũri', pronunciation: 'gi-THU-ri' },
      { body_part: 'Back', word: 'Mũgongo', pronunciation: 'mu-gon-GO' },
      { body_part: 'Stomach', word: 'Nda', pronunciation: 'N-da' },
      { body_part: 'Leg', word: 'Kũgũrũ', pronunciation: 'ku-gu-RU' },
      { body_part: 'Foot', word: 'Kũgũrũ', pronunciation: 'ku-gu-RU' },
      { body_part: 'Toe', word: 'Kĩara kĩa kũgũrũ', pronunciation: 'ki-A-ra ki-a ku-gu-RU' }
    ],
    
    nature: [
      { element: 'Sun', word: 'Riũa', description: 'Source of light and heat', season: 'all' },
      { element: 'Moon', word: 'Mweri', description: 'Night light', season: 'all' },
      { element: 'Star', word: 'Njata', description: 'Points of light in sky', season: 'all' },
      { element: 'Sky', word: 'Igũrũ', description: 'Space above earth', season: 'all' },
      { element: 'Cloud', word: 'Itu', description: 'Water vapor in sky', season: 'rainy' },
      { element: 'Rain', word: 'Mbura', description: 'Water from clouds', season: 'rainy' },
      { element: 'Wind', word: 'Rũhuho', description: 'Moving air', season: 'all' },
      { element: 'Mountain', word: 'Kĩrĩma', description: 'High land formation', season: 'all' },
      { element: 'River', word: 'Rũũĩ', description: 'Flowing water', season: 'all' },
      { element: 'Lake', word: 'Iria', description: 'Large body of water', season: 'all' },
      { element: 'Forest', word: 'Mũtitũ', description: 'Dense trees area', season: 'all' },
      { element: 'Tree', word: 'Mũtĩ', description: 'Woody plant', season: 'all' },
      { element: 'Grass', word: 'Nyeki', description: 'Ground covering plants', season: 'all' },
      { element: 'Stone', word: 'Ihiga', description: 'Hard mineral matter', season: 'all' },
      { element: 'Earth', word: 'Thĩ', description: 'Ground/soil', season: 'all' }
    ],
    
    occupations: [
      { occupation: 'Teacher', word: 'Mũrutani', description: 'Educates students', tools: 'Books, chalk' },
      { occupation: 'Doctor', word: 'Mũganga', description: 'Treats sick people', tools: 'Medicine' },
      { occupation: 'Farmer', word: 'Mũrĩmi', description: 'Grows crops', tools: 'Hoe, seeds' },
      { occupation: 'Blacksmith', word: 'Mũturi', description: 'Works with metal', tools: 'Hammer, fire' },
      { occupation: 'Potter', word: 'Mũũmbi', description: 'Makes clay pots', tools: 'Clay, hands' },
      { occupation: 'Hunter', word: 'Mũguĩmi', description: 'Hunts wild animals', tools: 'Spear, bow' },
      { occupation: 'Herder', word: 'Mũrĩithi', description: 'Takes care of livestock', tools: 'Stick, rope' },
      { occupation: 'Builder', word: 'Mwaki', description: 'Constructs houses', tools: 'Tools, materials' },
      { occupation: 'Trader', word: 'Mũcuranĩri', description: 'Buys and sells goods', tools: 'Goods, money' },
      { occupation: 'Elder', word: 'Mũthuuri mũkũrũ', description: 'Community leader', tools: 'Wisdom, staff' },
      { occupation: 'Warrior', word: 'Mũthigari', description: 'Protects community', tools: 'Spear, shield' },
      { occupation: 'Medicine man', word: 'Mũgo', description: 'Traditional healer', tools: 'Herbs, knowledge' }
    ],
    
    months: [
      { month: 'January', word: 'Mũgaa', season: 'Dry season', activities: 'Land preparation' },
      { month: 'February', word: 'Njengũ', season: 'Short rains', activities: 'Planting beans' },
      { month: 'March', word: 'Mwere wa gathatũ', season: 'Long rains start', activities: 'Planting maize' },
      { month: 'April', word: 'Mwere wa kana', season: 'Long rains', activities: 'Weeding' },
      { month: 'May', word: 'Mwere wa gatano', season: 'Long rains', activities: 'Crop care' },
      { month: 'June', word: 'Mwere wa gatandatũ', season: 'Cold season', activities: 'Harvesting' },
      { month: 'July', word: 'Mwere wa mũgwanja', season: 'Cold season', activities: 'Storage' },
      { month: 'August', word: 'Mwere wa kanana', season: 'Dry season', activities: 'Land clearing' },
      { month: 'September', word: 'Mwere wa kenda', season: 'Dry season', activities: 'Preparation' },
      { month: 'October', word: 'Mwere wa ikũmi', season: 'Short rains', activities: 'Planting' },
      { month: 'November', word: 'Mwere wa ikũmi na ũmwe', season: 'Short rains', activities: 'Weeding' },
      { month: 'December', word: 'Mwere wa ikũmi na eerĩ', season: 'Harvest time', activities: 'Harvesting' }
    ],
    
    proverbs: [
      { 
        proverb: 'Mũtĩ ũrĩa ũkũrĩte ndũkuuagwo nĩ rũhuho', 
        meaning: 'A tree that has grown strong is not blown down by wind', 
        context: 'Experience and maturity provide stability', 
        lesson: 'Wisdom and experience help overcome challenges' 
      },
      { 
        proverb: 'Gĩkũyũ kĩrĩa gĩtarĩ mũndũ gĩtirĩ kĩene', 
        meaning: 'A Kikuyu without people has no strength', 
        context: 'Community support is essential for success', 
        lesson: 'Unity and cooperation are vital for achievement' 
      },
      { 
        proverb: 'Mwana ũtarĩ wa gwaku ndakũrĩrĩra thĩ', 
        meaning: 'A child who is not yours will not cry for you on the ground', 
        context: 'Blood relations are strongest bonds', 
        lesson: 'Family loyalty is natural and enduring' 
      },
      { 
        proverb: 'Kĩrĩra kĩa mũndũ mũkũrũ gĩtirĩ na maaĩ', 
        meaning: 'An old person\'s crying has no tears', 
        context: 'Elders have experienced much pain already', 
        lesson: 'Respect the wisdom that comes from suffering' 
      },
      { 
        proverb: 'Mũgũnda ũrĩa ũtarĩmĩtwo ndũciaraga', 
        meaning: 'A field that is not cultivated does not produce', 
        context: 'Hard work is necessary for success', 
        lesson: 'Effort and preparation lead to results' 
      },
      { 
        proverb: 'Njamba ĩrĩa ĩtarĩ na mĩkĩra ndĩnyiitaga nyamũ', 
        meaning: 'A cat without claws does not catch mice', 
        context: 'Proper tools are needed for any task', 
        lesson: 'Preparation and right equipment ensure success' 
      }
    ],
    
    names: [
      { name: 'Wanjiku', meaning: 'Born during the harvest season', gender: 'female', occasion: 'harvest' },
      { name: 'Kamau', meaning: 'Quiet warrior', gender: 'male', occasion: 'general' },
      { name: 'Nyawira', meaning: 'Hard worker', gender: 'female', occasion: 'general' },
      { name: 'Mwangi', meaning: 'Rapid one', gender: 'male', occasion: 'general' },
      { name: 'Wambui', meaning: 'Singer of songs', gender: 'female', occasion: 'celebration' },
      { name: 'Kariuki', meaning: 'Reborn one', gender: 'male', occasion: 'after loss' },
      { name: 'Wanjiru', meaning: 'Born of the fig tree', gender: 'female', occasion: 'under fig tree' },
      { name: 'Githinji', meaning: 'Butcher/meat cutter', gender: 'male', occasion: 'occupation' },
      { name: 'Wangari', meaning: 'Born of the leopard', gender: 'female', occasion: 'strength' },
      { name: 'Mũturi', meaning: 'Blacksmith', gender: 'male', occasion: 'occupation' },
      { name: 'Njoki', meaning: 'Born during the return', gender: 'female', occasion: 'homecoming' },
      { name: 'Gĩthĩnji', meaning: 'Small forest', gender: 'male', occasion: 'nature' },
      { name: 'Wangechi', meaning: 'Born of the hyena', gender: 'female', occasion: 'night birth' },
      { name: 'Mwai', meaning: 'Good fortune', gender: 'male', occasion: 'blessing' },
      { name: 'Nyokabi', meaning: 'Born of the Maasai', gender: 'female', occasion: 'mixed heritage' },
      { name: 'Kĩmani', meaning: 'Born of the right hand', gender: 'male', occasion: 'blessing' },
      { name: 'Waithera', meaning: 'Born of the journey', gender: 'female', occasion: 'travel' },
      { name: 'Mũrage', meaning: 'Inheritance', gender: 'male', occasion: 'family continuity' },
      { name: 'Wanjũgũna', meaning: 'Born of the young bull', gender: 'female', occasion: 'strength' },
      { name: 'Kĩmũtai', meaning: 'Born of the Maasai', gender: 'male', occasion: 'mixed heritage' }
    ],
    
    cultural_practices: [
      { 
        practice: 'Ngũgĩo (Circumcision)', 
        description: 'Traditional rite of passage for boys and girls into adulthood', 
        occasion: 'Coming of age ceremonies', 
        significance: 'Marks transition to adult responsibilities and community membership' 
      },
      { 
        practice: 'Kĩrĩra (Crying ceremony)', 
        description: 'Mourning ritual for the deceased with specific songs and dances', 
        occasion: 'Death and burial ceremonies', 
        significance: 'Honors the dead and provides community support to bereaved' 
      },
      { 
        practice: 'Ngũgĩo ya Mũciĩ (House blessing)', 
        description: 'Ceremony to bless a new home with traditional rituals', 
        occasion: 'New house construction completion', 
        significance: 'Ensures prosperity and protection for the household' 
      },
      { 
        practice: 'Mambura (Rain ceremony)', 
        description: 'Community ritual to pray for rain during dry seasons', 
        occasion: 'Drought periods', 
        significance: 'Demonstrates unity in seeking divine intervention for survival' 
      },
      { 
        practice: 'Kũragurio (Marriage ceremony)', 
        description: 'Traditional wedding with dowry negotiations and celebrations', 
        occasion: 'Marriage unions', 
        significance: 'Unites two families and establishes social bonds' 
      },
      { 
        practice: 'Mũgũnda wa Ngai (God\'s garden)', 
        description: 'Sacred grove where traditional prayers and offerings are made', 
        occasion: 'Religious ceremonies and community prayers', 
        significance: 'Maintains connection with ancestral spirits and Ngai (God)' 
      }
    ]
  },

  // LUHYA CONTENT
  luhya: {
    names: [
      { name: 'Wafula', meaning: 'Born during rainy season', gender: 'male', occasion: 'rain' },
      { name: 'Nafula', meaning: 'Born during rainy season', gender: 'female', occasion: 'rain' },
      { name: 'Wekesa', meaning: 'Born during harvest', gender: 'male', occasion: 'harvest' },
      { name: 'Nekesa', meaning: 'Born during harvest', gender: 'female', occasion: 'harvest' },
      { name: 'Wanjala', meaning: 'Born during famine', gender: 'male', occasion: 'hardship' }
    ],
    basic_words: [
      { word: 'Bulahi', meaning: 'Good', pronunciation: 'bu-LA-hi', category: 'adjective' },
      { word: 'Enyumba', meaning: 'House', pronunciation: 'e-NYUM-ba', category: 'noun' },
      { word: 'Amatsi', meaning: 'Water', pronunciation: 'a-MAT-si', category: 'noun' },
      { word: 'Obusuma', meaning: 'Ugali/Food', pronunciation: 'o-bu-SU-ma', category: 'noun' },
      { word: 'Omukhuwa', meaning: 'Friend', pronunciation: 'o-mu-KHU-wa', category: 'noun' }
    ],
    greetings: [
      { greeting: 'Muraho?', response: 'Muraho', context: 'How are you?', time_of_day: 'any' },
      { greeting: 'Wasalire otya?', response: 'Wasalire bulahi', context: 'How did you sleep?', time_of_day: 'morning' },
      { greeting: 'Mwasukha?', response: 'Mwasukha', context: 'Good evening', time_of_day: 'evening' }
    ]
  },

  // LUO CONTENT - COMPREHENSIVE
  luo: {
    basic_words: [
      // Greetings & Courtesy
      { word: 'Nadi', meaning: 'How/What', pronunciation: 'NA-di', category: 'greeting' },
      { word: 'Ber', meaning: 'Good/Fine', pronunciation: 'BER', category: 'courtesy' },
      { word: 'Erokamano', meaning: 'Thank you', pronunciation: 'e-ro-ka-MA-no', category: 'courtesy' },
      { word: 'Kik', meaning: 'Sorry/Excuse me', pronunciation: 'KIK', category: 'courtesy' },
      { word: 'Wuon', meaning: 'Sir/Mister', pronunciation: 'WU-on', category: 'courtesy' },
      { word: 'Min', meaning: 'Madam/Mrs', pronunciation: 'MIN', category: 'courtesy' },
      
      // Common Adjectives
      { word: 'Ber', meaning: 'Good/Beautiful', pronunciation: 'BER', category: 'adjective' },
      { word: 'Rach', meaning: 'Bad/Evil', pronunciation: 'RACH', category: 'adjective' },
      { word: 'Duongʼ', meaning: 'Big/Large', pronunciation: 'du-ONG', category: 'adjective' },
      { word: 'Matin', meaning: 'Small/Little', pronunciation: 'ma-TIN', category: 'adjective' },
      { word: 'Bor', meaning: 'Tall/Long', pronunciation: 'BOR', category: 'adjective' },
      { word: 'Machiek', meaning: 'Short', pronunciation: 'ma-CHI-ek', category: 'adjective' },
      { word: 'Manyien', meaning: 'New', pronunciation: 'ma-NYI-en', category: 'adjective' },
      { word: 'Moti', meaning: 'Old', pronunciation: 'MO-ti', category: 'adjective' },
      { word: 'Rachar', meaning: 'Red', pronunciation: 'ra-CHAR', category: 'adjective' },
      { word: 'Marachar', meaning: 'White', pronunciation: 'ma-ra-CHAR', category: 'adjective' },
      
      // Essential Nouns
      { word: 'Chiemo', meaning: 'Food', pronunciation: 'chi-E-mo', category: 'noun' },
      { word: 'Pi', meaning: 'Water', pronunciation: 'PI', category: 'noun' },
      { word: 'Ot', meaning: 'House', pronunciation: 'OT', category: 'noun' },
      { word: 'Dala', meaning: 'Home/Homestead', pronunciation: 'DA-la', category: 'noun' },
      { word: 'Osiep', meaning: 'Friend', pronunciation: 'o-SI-ep', category: 'noun' },
      { word: 'Skul', meaning: 'School', pronunciation: 'SKUL', category: 'noun' },
      { word: 'Tich', meaning: 'Work/Job', pronunciation: 'TICH', category: 'noun' },
      { word: 'Pesa', meaning: 'Money', pronunciation: 'PE-sa', category: 'noun' },
      { word: 'Buk', meaning: 'Book', pronunciation: 'BUK', category: 'noun' },
      { word: 'Yath', meaning: 'Tree', pronunciation: 'YATH', category: 'noun' },
      { word: 'Yo', meaning: 'Road/Path', pronunciation: 'YO', category: 'noun' },
      
      // Common Verbs
      { word: 'Dhi', meaning: 'To go', pronunciation: 'DHI', category: 'verb' },
      { word: 'Biro', meaning: 'To come', pronunciation: 'BI-ro', category: 'verb' },
      { word: 'Chamo', meaning: 'To eat', pronunciation: 'CHA-mo', category: 'verb' },
      { word: 'Madho', meaning: 'To drink', pronunciation: 'MA-dho', category: 'verb' },
      { word: 'Nindo', meaning: 'To sleep', pronunciation: 'NIN-do', category: 'verb' },
      { word: 'Som', meaning: 'To read/study', pronunciation: 'SOM', category: 'verb' },
      { word: 'Ndiko', meaning: 'To write', pronunciation: 'ndi-KO', category: 'verb' },
      { word: 'Wacho', meaning: 'To say/speak', pronunciation: 'WA-cho', category: 'verb' },
      { word: 'Neno', meaning: 'To see', pronunciation: 'NE-no', category: 'verb' },
      { word: 'Winjo', meaning: 'To hear', pronunciation: 'WIN-jo', category: 'verb' },
      
      // Time & Direction
      { word: 'Kiny', meaning: 'Today', pronunciation: 'KINY', category: 'time' },
      { word: 'Nyoro', meaning: 'Tomorrow', pronunciation: 'NYO-ro', category: 'time' },
      { word: 'Nyoro', meaning: 'Yesterday', pronunciation: 'NYO-ro', category: 'time' },
      { word: 'Saa', meaning: 'Hour/Time', pronunciation: 'SAA', category: 'time' },
      { word: 'Wuok chiengʼ', meaning: 'Morning', pronunciation: 'wu-ok CHI-eng', category: 'time' },
      { word: 'Odhiambo', meaning: 'Evening', pronunciation: 'o-dhi-AM-bo', category: 'time' }
    ],

    greetings: [
      { greeting: 'Nadi?', response: 'Ber', meaning: 'How are you? - Fine', pronunciation: 'NA-di / BER', context: 'General greeting', time_of_day: 'any', cultural_note: 'Most common Luo greeting' },
      { greeting: 'Oyawore nadi?', response: 'Ayawore maber', meaning: 'How did you sleep? - I slept well', pronunciation: 'o-ya-WO-re NA-di / a-ya-WO-re ma-BER', context: 'Morning greeting', time_of_day: 'morning', cultural_note: 'Traditional morning greeting showing care' },
      { greeting: 'Oimore nadi?', response: 'Oimore maber', meaning: 'How was your day? - My day was good', pronunciation: 'oi-MO-re NA-di / oi-MO-re ma-BER', context: 'Evening greeting', time_of_day: 'evening', cultural_note: 'Shows interest in someone\'s daily activities' },
      { greeting: 'Misawa', response: 'Misawa', meaning: 'Good morning', pronunciation: 'mi-SA-wa', context: 'Morning greeting', time_of_day: 'morning', cultural_note: 'Formal morning greeting' },
      { greeting: 'Ochiengʼ ober', response: 'Ee, ober', meaning: 'The day is good - Yes, it is good', pronunciation: 'o-CHI-eng o-BER / EE o-BER', context: 'Daytime greeting', time_of_day: 'day', cultural_note: 'Acknowledging a beautiful day' },
      { greeting: 'Amosi', response: 'Amosi', meaning: 'Good evening', pronunciation: 'a-MO-si', context: 'Evening greeting', time_of_day: 'evening', cultural_note: 'Respectful evening greeting' },
      { greeting: 'Inindo maber', response: 'In bende', meaning: 'Sleep well - You too', pronunciation: 'i-NIN-do ma-BER / IN BEN-de', context: 'Goodnight', time_of_day: 'night', cultural_note: 'Wishing someone peaceful sleep' },
      { greeting: 'Biro maber', response: 'Erokamano', meaning: 'Welcome - Thank you', pronunciation: 'BI-ro ma-BER / e-ro-ka-MA-no', context: 'Welcoming someone', time_of_day: 'any', cultural_note: 'Warm welcome to visitors' },
      { greeting: 'Dhiyo maber', response: 'Odhi maber', meaning: 'Go well - It goes well', pronunciation: 'DHI-yo ma-BER / O-dhi ma-BER', context: 'Farewell', time_of_day: 'any', cultural_note: 'Blessing for safe journey' },
      { greeting: 'Tich dhi nade?', response: 'Dhi maber', meaning: 'How is work going? - Going well', pronunciation: 'TICH dhi NA-de / dhi ma-BER', context: 'Work inquiry', time_of_day: 'any', cultural_note: 'Shows interest in someone\'s livelihood' }
    ],

    numbers: [
      { number: 1, word: 'Achiel', pronunciation: 'a-CHI-el' },
      { number: 2, word: 'Ariyo', pronunciation: 'a-RI-yo' },
      { number: 3, word: 'Adek', pronunciation: 'a-DEK' },
      { number: 4, word: 'Angʼwen', pronunciation: 'ang-WEN' },
      { number: 5, word: 'Abich', pronunciation: 'a-BICH' },
      { number: 6, word: 'Auchiel', pronunciation: 'au-CHI-el' },
      { number: 7, word: 'Abiriyo', pronunciation: 'a-bi-RI-yo' },
      { number: 8, word: 'Aboro', pronunciation: 'a-BO-ro' },
      { number: 9, word: 'Ochiko', pronunciation: 'o-CHI-ko' },
      { number: 10, word: 'Apar', pronunciation: 'a-PAR' },
      { number: 11, word: 'Apar gi achiel', pronunciation: 'a-PAR gi a-CHI-el' },
      { number: 12, word: 'Apar gi ariyo', pronunciation: 'a-PAR gi a-RI-yo' },
      { number: 15, word: 'Apar gi abich', pronunciation: 'a-PAR gi a-BICH' },
      { number: 20, word: 'Piero ariyo', pronunciation: 'pi-E-ro a-RI-yo' },
      { number: 30, word: 'Piero adek', pronunciation: 'pi-E-ro a-DEK' },
      { number: 40, word: 'Piero angʼwen', pronunciation: 'pi-E-ro ang-WEN' },
      { number: 50, word: 'Piero abich', pronunciation: 'pi-E-ro a-BICH' },
      { number: 100, word: 'Mia achiel', pronunciation: 'MI-a a-CHI-el' },
      { number: 1000, word: 'Gana achiel', pronunciation: 'GA-na a-CHI-el' }
    ],

    family: [
      { relationship: 'Wuoro', meaning: 'Father', pronunciation: 'wu-O-ro', gender: 'male', cultural_note: 'Head of the family, highly respected' },
      { relationship: 'Mama', meaning: 'Mother', pronunciation: 'MA-ma', gender: 'female', cultural_note: 'Caregiver and nurturer of the family' },
      { relationship: 'Wuowi', meaning: 'Son', pronunciation: 'wu-O-wi', gender: 'male', cultural_note: 'Male child, carries family name' },
      { relationship: 'Nyar', meaning: 'Daughter', pronunciation: 'NYAR', gender: 'female', cultural_note: 'Female child, often named after circumstances' },
      { relationship: 'Owadgi', meaning: 'Brother', pronunciation: 'o-WAD-gi', gender: 'male', cultural_note: 'Male sibling, important family bond' },
      { relationship: 'Nyamin', meaning: 'Sister', pronunciation: 'nya-MIN', gender: 'female', cultural_note: 'Female sibling, close family relationship' },
      { relationship: 'Dani', meaning: 'Grandfather', pronunciation: 'DA-ni', gender: 'male', cultural_note: 'Elder, keeper of family traditions' },
      { relationship: 'Dayo', meaning: 'Grandmother', pronunciation: 'DA-yo', gender: 'female', cultural_note: 'Elder woman, source of wisdom' },
      { relationship: 'Kwar', meaning: 'Uncle (father\'s brother)', pronunciation: 'KWAR', gender: 'male', cultural_note: 'Important male relative, second father' },
      { relationship: 'Mama kwar', meaning: 'Aunt (father\'s sister)', pronunciation: 'MA-ma kwar', gender: 'female', cultural_note: 'Father\'s sister, respected family member' },
      { relationship: 'Ner', meaning: 'Uncle (mother\'s brother)', pronunciation: 'NER', gender: 'male', cultural_note: 'Mother\'s brother, special relationship with nephews/nieces' },
      { relationship: 'Mama ner', meaning: 'Aunt (mother\'s sister)', pronunciation: 'MA-ma ner', gender: 'female', cultural_note: 'Mother\'s sister, like a second mother' },
      { relationship: 'Nyiekwa', meaning: 'Grandchild', pronunciation: 'nyi-E-kwa', gender: 'neutral', cultural_note: 'Beloved grandchildren, future of the family' },
      { relationship: 'Jaod', meaning: 'In-law', pronunciation: 'ja-OD', gender: 'neutral', cultural_note: 'Family member through marriage' },
      { relationship: 'Nyawara', meaning: 'Wife', pronunciation: 'nya-WA-ra', gender: 'female', cultural_note: 'Married woman, partner in life' }
    ],

    colors: [
      { color: 'Rachar', meaning: 'Red', pronunciation: 'ra-CHAR', description: 'Color of blood, earth, and sunset' },
      { color: 'Marachar', meaning: 'White', pronunciation: 'ma-ra-CHAR', description: 'Color of milk, clouds, and purity' },
      { color: 'Rateng', meaning: 'Black', pronunciation: 'ra-TENG', description: 'Color of night, charcoal, and fertile soil' },
      { color: 'Rayadh', meaning: 'Green', pronunciation: 'ra-YADH', description: 'Color of grass, leaves, and growing crops' },
      { color: 'Ratek', meaning: 'Blue', pronunciation: 'ra-TEK', description: 'Color of sky and Lake Victoria' },
      { color: 'Rawer', meaning: 'Yellow', pronunciation: 'ra-WER', description: 'Color of sun, ripe bananas, and maize' },
      { color: 'Makwar', meaning: 'Brown', pronunciation: 'ma-KWAR', description: 'Color of tree bark and dried grass' },
      { color: 'Mapenj', meaning: 'Pink', pronunciation: 'ma-PENJ', description: 'Light red color, like dawn sky' },
      { color: 'Mabor', meaning: 'Gray', pronunciation: 'ma-BOR', description: 'Color of ash and cloudy sky' },
      { color: 'Makech', meaning: 'Orange', pronunciation: 'ma-KECH', description: 'Color of ripe mangoes and sunset' }
    ],

    animals: [
      { animal: 'Dhiang', meaning: 'Cow/Cattle', pronunciation: 'DHI-ang', habitat: 'homestead', cultural_note: 'Most important livestock, symbol of wealth' },
      { animal: 'Rombe', meaning: 'Goat', pronunciation: 'ROM-be', habitat: 'homestead', cultural_note: 'Common livestock, used for ceremonies' },
      { animal: 'Rombo', meaning: 'Sheep', pronunciation: 'ROM-bo', habitat: 'homestead', cultural_note: 'Kept for wool and meat' },
      { animal: 'Guok', meaning: 'Dog', pronunciation: 'GU-ok', habitat: 'homestead', cultural_note: 'Guardian of the home, hunting companion' },
      { animal: 'Oyiego', meaning: 'Cat', pronunciation: 'o-yi-E-go', habitat: 'homestead', cultural_note: 'Keeps rodents away from grain stores' },
      { animal: 'Gweno', meaning: 'Chicken', pronunciation: 'gwe-NO', habitat: 'homestead', cultural_note: 'Source of eggs and meat, used in rituals' },
      { animal: 'Sibuor', meaning: 'Lion', pronunciation: 'si-BU-or', habitat: 'wild', cultural_note: 'King of beasts, symbol of courage' },
      { animal: 'Kwach', meaning: 'Leopard', pronunciation: 'KWACH', habitat: 'wild', cultural_note: 'Stealthy hunter, respected and feared' },
      { animal: 'Tembo', meaning: 'Elephant', pronunciation: 'TEM-bo', habitat: 'wild', cultural_note: 'Largest land animal, symbol of strength' },
      { animal: 'Nyangʼ', meaning: 'Crocodile', pronunciation: 'NYANG', habitat: 'water', cultural_note: 'Dangerous water predator, totem animal' },
      { animal: 'Rech', meaning: 'Fish', pronunciation: 'RECH', habitat: 'water', cultural_note: 'Important food source from Lake Victoria' },
      { animal: 'Winyo', meaning: 'Bird', pronunciation: 'WIN-yo', habitat: 'air', cultural_note: 'Messengers, some species are totems' },
      { animal: 'Ongʼech', meaning: 'Monkey', pronunciation: 'on-GECH', habitat: 'trees', cultural_note: 'Clever animals, sometimes crop raiders' },
      { animal: 'Nyathi', meaning: 'Buffalo', pronunciation: 'nya-THI', habitat: 'wild', cultural_note: 'Strong wild animal, dangerous when provoked' },
      { animal: 'Bunde', meaning: 'Hyena', pronunciation: 'BUN-de', habitat: 'wild', cultural_note: 'Scavenger, associated with witchcraft in folklore' }
    ],

    food: [
      { item: 'Kuon', meaning: 'Ugali (cornmeal staple)', pronunciation: 'KU-on', preparation: 'cooked', cultural_note: 'Main staple food, eaten with every meal' },
      { item: 'Rech', meaning: 'Fish', pronunciation: 'RECH', preparation: 'fried/stewed', cultural_note: 'Primary protein from Lake Victoria' },
      { item: 'Aliya', meaning: 'Vegetables/Greens', pronunciation: 'a-LI-ya', preparation: 'boiled', cultural_note: 'Nutritious leafy vegetables, often wild' },
      { item: 'Nyoyo', meaning: 'Millet', pronunciation: 'nyo-YO', preparation: 'porridge', cultural_note: 'Traditional grain, very nutritious' },
      { item: 'Kal', meaning: 'Sorghum', pronunciation: 'KAL', preparation: 'porridge/beer', cultural_note: 'Drought-resistant grain, used for brewing' },
      { item: 'Oduma', meaning: 'Sweet potatoes', pronunciation: 'o-DU-ma', preparation: 'boiled/roasted', cultural_note: 'Important root crop, especially during dry season' },
      { item: 'Nyuka', meaning: 'Groundnuts/Peanuts', pronunciation: 'nyu-KA', preparation: 'roasted/sauce', cultural_note: 'Protein-rich nuts, made into paste' },
      { item: 'Chak', meaning: 'Meat', pronunciation: 'CHAK', preparation: 'roasted/stewed', cultural_note: 'Usually beef, goat, or chicken' },
      { item: 'Chak dhiang', meaning: 'Beef', pronunciation: 'chak DHI-ang', preparation: 'roasted', cultural_note: 'Most prized meat, eaten during celebrations' },
      { item: 'Mor', meaning: 'Sauce/Stew', pronunciation: 'MOR', preparation: 'cooked', cultural_note: 'Accompanies ugali, made with vegetables or meat' },
      { item: 'Chak gweno', meaning: 'Chicken', pronunciation: 'chak gwe-NO', preparation: 'stewed', cultural_note: 'Special occasion meat, often for guests' },
      { item: 'Apwoyo', meaning: 'Beans', pronunciation: 'ap-WO-yo', preparation: 'boiled', cultural_note: 'Important protein source, often mixed with maize' },
      { item: 'Bel', meaning: 'Milk', pronunciation: 'BEL', preparation: 'fresh/sour', cultural_note: 'From cows and goats, sometimes fermented' },
      { item: 'Mor aliya', meaning: 'Vegetable stew', pronunciation: 'mor a-LI-ya', preparation: 'cooked', cultural_note: 'Healthy accompaniment to ugali' },
      { item: 'Kong', meaning: 'Maize/Corn', pronunciation: 'KONG', preparation: 'various', cultural_note: 'Modern staple, ground into flour for ugali' }
    ],

    body_parts: [
      { body_part: 'Wi', meaning: 'Head', pronunciation: 'WI' },
      { body_part: 'Wangʼ', meaning: 'Eye', pronunciation: 'WANG' },
      { body_part: 'It', meaning: 'Ear', pronunciation: 'IT' },
      { body_part: 'Um', meaning: 'Nose', pronunciation: 'UM' },
      { body_part: 'Dhok', meaning: 'Mouth', pronunciation: 'DHOK' },
      { body_part: 'Lep', meaning: 'Tongue', pronunciation: 'LEP' },
      { body_part: 'Lak', meaning: 'Tooth', pronunciation: 'LAK' },
      { body_part: 'Ngʼut', meaning: 'Neck', pronunciation: 'NGUT' },
      { body_part: 'Badi', meaning: 'Body', pronunciation: 'BA-di' },
      { body_part: 'Agoko', meaning: 'Arm', pronunciation: 'a-GO-ko' },
      { body_part: 'Lwet', meaning: 'Hand', pronunciation: 'LWET' },
      { body_part: 'Chwech', meaning: 'Finger', pronunciation: 'CHWECH' },
      { body_part: 'Fuond', meaning: 'Chest', pronunciation: 'fu-OND' },
      { body_part: 'Ich', meaning: 'Stomach/Belly', pronunciation: 'ICH' },
      { body_part: 'Ngʼe', meaning: 'Back', pronunciation: 'NGE' },
      { body_part: 'Em', meaning: 'Leg', pronunciation: 'EM' },
      { body_part: 'Tiend', meaning: 'Foot', pronunciation: 'ti-END' },
      { body_part: 'Chuny', meaning: 'Heart', pronunciation: 'CHU-ny' },
      { body_part: 'Paro', meaning: 'Mind/Thoughts', pronunciation: 'PA-ro' },
      { body_part: 'Remb', meaning: 'Blood', pronunciation: 'REMB' }
    ],

    nature: [
      { element: 'Chiengʼ', meaning: 'Sun', pronunciation: 'CHI-eng', description: 'Source of light and warmth' },
      { element: 'Dwe', meaning: 'Moon', pronunciation: 'DWE', description: 'Night light, marks months' },
      { element: 'Sulwe', meaning: 'Star', pronunciation: 'SUL-we', description: 'Points of light in night sky' },
      { element: 'Boche polo', meaning: 'Sky', pronunciation: 'BO-che PO-lo', description: 'The heavens above' },
      { element: 'Koth', meaning: 'Rain', pronunciation: 'KOTH', description: 'Life-giving water from sky' },
      { element: 'Yamo', meaning: 'Wind', pronunciation: 'YA-mo', description: 'Moving air, brings weather changes' },
      { element: 'Bor polo', meaning: 'Cloud', pronunciation: 'bor PO-lo', description: 'Water vapor in sky' },
      { element: 'Lowo', meaning: 'Earth/Soil', pronunciation: 'LO-wo', description: 'Ground we walk on, grows crops' },
      { element: 'Got', meaning: 'Mountain/Hill', pronunciation: 'GOT', description: 'High land formation' },
      { element: 'Aora', meaning: 'River', pronunciation: 'a-O-ra', description: 'Flowing water, source of life' },
      { element: 'Nam', meaning: 'Lake', pronunciation: 'NAM', description: 'Large body of water like Victoria' },
      { element: 'Bungu', meaning: 'Forest', pronunciation: 'BUN-gu', description: 'Dense area of trees' },
      { element: 'Lum', meaning: 'Grass', pronunciation: 'LUM', description: 'Ground covering, food for animals' },
      { element: 'Kite', meaning: 'Stone/Rock', pronunciation: 'KI-te', description: 'Hard mineral formation' },
      { element: 'Mach', meaning: 'Fire', pronunciation: 'MACH', description: 'Flame for cooking and warmth' }
    ],

    occupations: [
      { occupation: 'Japuonj', meaning: 'Teacher', pronunciation: 'ja-PU-onj', description: 'One who educates children and adults' },
      { occupation: 'Jathieth', meaning: 'Doctor/Healer', pronunciation: 'ja-THI-eth', description: 'Medical practitioner, traditional or modern' },
      { occupation: 'Japur', meaning: 'Farmer', pronunciation: 'ja-PUR', description: 'One who cultivates crops' },
      { occupation: 'Jakwath', meaning: 'Fisherman', pronunciation: 'ja-KWATH', description: 'One who catches fish from lake or river' },
      { occupation: 'Jachiel', meaning: 'Trader/Merchant', pronunciation: 'ja-CHI-el', description: 'One who buys and sells goods' },
      { occupation: 'Jager', meaning: 'Builder/Constructor', pronunciation: 'ja-GER', description: 'One who constructs houses and buildings' },
      { occupation: 'Jalos', meaning: 'Herder', pronunciation: 'ja-LOS', description: 'One who tends cattle and livestock' },
      { occupation: 'Jathurwa', meaning: 'Blacksmith', pronunciation: 'ja-THUR-wa', description: 'Traditional metalworker, makes tools' },
      { occupation: 'Jatelo', meaning: 'Leader/Chief', pronunciation: 'ja-TE-lo', description: 'Community leader, decision maker' },
      { occupation: 'Jajuogi', meaning: 'Traditional healer', pronunciation: 'ja-ju-O-gi', description: 'Spiritual healer using herbs and rituals' },
      { occupation: 'Jachielo', meaning: 'Hunter', pronunciation: 'ja-chi-E-lo', description: 'One who hunts wild animals' },
      { occupation: 'Jatwech', meaning: 'Potter', pronunciation: 'ja-TWECH', description: 'One who makes clay pots and vessels' },
      { occupation: 'Jalos dhok', meaning: 'Shepherd', pronunciation: 'ja-los DHOK', description: 'One who tends sheep and goats' },
      { occupation: 'Jariemb', meaning: 'Singer/Musician', pronunciation: 'ja-ri-EMB', description: 'Traditional musician and storyteller' },
      { occupation: 'Jatend', meaning: 'Walker/Messenger', pronunciation: 'ja-TEND', description: 'One who carries messages between communities' }
    ],

    months: [
      { month: 'Dwe mar achiel', meaning: 'First month (January)', pronunciation: 'dwe mar a-CHI-el', season: 'dry', activities: 'Land preparation' },
      { month: 'Dwe mar ariyo', meaning: 'Second month (February)', pronunciation: 'dwe mar a-RI-yo', season: 'dry', activities: 'Waiting for rains' },
      { month: 'Dwe mar adek', meaning: 'Third month (March)', pronunciation: 'dwe mar a-DEK', season: 'wet', activities: 'First planting season' },
      { month: 'Dwe mar angʼwen', meaning: 'Fourth month (April)', pronunciation: 'dwe mar ang-WEN', season: 'wet', activities: 'Heavy rains, planting' },
      { month: 'Dwe mar abich', meaning: 'Fifth month (May)', pronunciation: 'dwe mar a-BICH', season: 'wet', activities: 'Crop growth' },
      { month: 'Dwe mar auchiel', meaning: 'Sixth month (June)', pronunciation: 'dwe mar au-CHI-el', season: 'dry', activities: 'Dry season begins' },
      { month: 'Dwe mar abiriyo', meaning: 'Seventh month (July)', pronunciation: 'dwe mar a-bi-RI-yo', season: 'dry', activities: 'Cool dry season' },
      { month: 'Dwe mar aboro', meaning: 'Eighth month (August)', pronunciation: 'dwe mar a-BO-ro', season: 'dry', activities: 'Land preparation' },
      { month: 'Dwe mar ochiko', meaning: 'Ninth month (September)', pronunciation: 'dwe mar o-CHI-ko', season: 'wet', activities: 'Second planting season' },
      { month: 'Dwe mar apar', meaning: 'Tenth month (October)', pronunciation: 'dwe mar a-PAR', season: 'wet', activities: 'Short rains' },
      { month: 'Dwe mar apar gi achiel', meaning: 'Eleventh month (November)', pronunciation: 'dwe mar a-PAR gi a-CHI-el', season: 'wet', activities: 'Harvest time' },
      { month: 'Dwe mar apar gi ariyo', meaning: 'Twelfth month (December)', pronunciation: 'dwe mar a-PAR gi a-RI-yo', season: 'dry', activities: 'Celebrations, dry season' }
    ],

    names: [
      { name: 'Otieno', meaning: 'Born at night', gender: 'male', occasion: 'night birth', cultural_note: 'Very common Luo name' },
      { name: 'Achieng', meaning: 'Born during sunshine', gender: 'female', occasion: 'day birth', cultural_note: 'Popular name for girls born during day' },
      { name: 'Ouma', meaning: 'Born when grandmother was present', gender: 'male', occasion: 'family presence', cultural_note: 'Honors grandmother\'s presence at birth' },
      { name: 'Awino', meaning: 'Born with umbilical cord around neck', gender: 'female', occasion: 'birth complication', cultural_note: 'Marks unusual birth circumstances' },
      { name: 'Ochieng', meaning: 'Born during the day', gender: 'male', occasion: 'day birth', cultural_note: 'Male version of day birth name' },
      { name: 'Adhiambo', meaning: 'Born in the evening', gender: 'female', occasion: 'evening birth', cultural_note: 'Evening birth name for girls' },
      { name: 'Odhiambo', meaning: 'Born in the evening', gender: 'male', occasion: 'evening birth', cultural_note: 'Evening birth name for boys' },
      { name: 'Akoth', meaning: 'Born during rain', gender: 'female', occasion: 'rainy weather', cultural_note: 'Rain is considered blessing' },
      { name: 'Okoth', meaning: 'Born during rain', gender: 'male', occasion: 'rainy weather', cultural_note: 'Male rain birth name' },
      { name: 'Anyango', meaning: 'Born in the morning', gender: 'female', occasion: 'morning birth', cultural_note: 'Morning birth brings good fortune' },
      { name: 'Onyango', meaning: 'Born in the morning', gender: 'male', occasion: 'morning birth', cultural_note: 'Male morning birth name' },
      { name: 'Apiyo', meaning: 'First-born twin', gender: 'female', occasion: 'twin birth', cultural_note: 'Special name for first twin' },
      { name: 'Opiyo', meaning: 'First-born twin', gender: 'male', occasion: 'twin birth', cultural_note: 'Male first twin name' },
      { name: 'Adongo', meaning: 'Second-born twin', gender: 'female', occasion: 'twin birth', cultural_note: 'Name for second twin girl' },
      { name: 'Odongo', meaning: 'Second-born twin', gender: 'male', occasion: 'twin birth', cultural_note: 'Name for second twin boy' }
    ],

    proverbs: [
      { proverb: 'Nyathi ma ok owinjo wach min mare to owinjo mar joma moko', meaning: 'A child who doesn\'t listen to their mother will listen to strangers', lesson: 'Importance of parental guidance', context: 'Child discipline and respect' },
      { proverb: 'Wuon ma ok ongʼeyo kaka nyathi mare chamo to ok ongʼeyo kaka otho', meaning: 'A father who doesn\'t know how his child eats doesn\'t know how they die', lesson: 'Parents must be involved in children\'s lives', context: 'Parental responsibility' },
      { proverb: 'Dhiang ma ok nyal luwo bangʼ jatende to ok nyal bedo gi jatende', meaning: 'A cow that cannot follow its owner cannot stay with its owner', lesson: 'Loyalty and obedience are essential', context: 'Relationships and loyalty' },
      { proverb: 'Pi ma ok mol ok nyal luoko kidi', meaning: 'Water that doesn\'t flow cannot move a stone', lesson: 'Persistence and continuous effort achieve results', context: 'Hard work and determination' },
      { proverb: 'Winyo ma ok nyal wer ok nyal bedo e yath', meaning: 'A bird that cannot sing cannot stay in the tree', lesson: 'Everyone must contribute their talents', context: 'Community participation' },
      { proverb: 'Nyathi ma ok owinjo wach to owinjo buya', meaning: 'A child who doesn\'t listen to words will listen to the stick', lesson: 'Consequences follow disobedience', context: 'Discipline and learning' },
      { proverb: 'Ot ma ok gi osiep ok nyal siko', meaning: 'A home without friends cannot survive', lesson: 'Community and friendship are vital', context: 'Social relationships' },
      { proverb: 'Rech ma ok nyal ui ok nyal bedo e pi', meaning: 'A fish that cannot swim cannot live in water', lesson: 'Must master essential skills for survival', context: 'Competence and survival' },
      { proverb: 'Yath ma ok nyal nyalo yamo ok nyal siko', meaning: 'A tree that cannot bend with the wind cannot survive', lesson: 'Flexibility and adaptation are necessary', context: 'Adaptability' },
      { proverb: 'Jachielo ma ok ongʼeyo bungu ok nyal yudo le', meaning: 'A hunter who doesn\'t know the forest cannot find game', lesson: 'Knowledge of environment is crucial', context: 'Preparation and knowledge' }
    ],

    cultural_practices: [
      { practice: 'Tero buru', meaning: 'Dowry payment', occasion: 'Marriage', significance: 'Formal union between families', description: 'Groom\'s family pays bride price to bride\'s family' },
      { practice: 'Nyombo', meaning: 'Funeral rites', occasion: 'Death', significance: 'Honoring the deceased', description: 'Traditional burial ceremonies with singing and dancing' },
      { practice: 'Juogi', meaning: 'Ancestral spirits', occasion: 'Various', significance: 'Connection with ancestors', description: 'Belief in spirits of deceased family members' },
      { practice: 'Ohangla', meaning: 'Traditional dance', occasion: 'Celebrations', significance: 'Cultural expression', description: 'Energetic dance with drums and traditional instruments' },
      { practice: 'Duol', meaning: 'Cleansing ceremony', occasion: 'After tragedy', significance: 'Spiritual purification', description: 'Ritual cleansing after death or misfortune' },
      { practice: 'Chik', meaning: 'Traditional laws', occasion: 'Governance', significance: 'Social order', description: 'Customary laws governing community behavior' },
      { practice: 'Tero nyithindo', meaning: 'Child naming', occasion: 'Birth', significance: 'Identity and belonging', description: 'Ceremony to officially name and welcome child' },
      { practice: 'Liel', meaning: 'Initiation rites', occasion: 'Coming of age', significance: 'Transition to adulthood', description: 'Traditional ceremonies marking maturity' },
      { practice: 'Sigana', meaning: 'Storytelling', occasion: 'Evenings', significance: 'Cultural transmission', description: 'Oral tradition of passing down history and values' },
      { practice: 'Golo', meaning: 'Traditional medicine', occasion: 'Illness', significance: 'Healing practices', description: 'Use of herbs and spiritual healing methods' }
    ]
  },

  // KAMBA CONTENT
  kamba: {
    names: [
      { name: 'Musyoka', meaning: 'Born during market day', gender: 'male', occasion: 'market' },
      { name: 'Nduku', meaning: 'Born at night', gender: 'female', occasion: 'night' },
      { name: 'Mutua', meaning: 'Born during rain', gender: 'male', occasion: 'rain' },
      { name: 'Kavata', meaning: 'Born during dry season', gender: 'female', occasion: 'drought' },
      { name: 'Kioko', meaning: 'Born during celebration', gender: 'male', occasion: 'celebration' }
    ],
    basic_words: [
      { word: 'Wega', meaning: 'Good', pronunciation: 'WE-ga', category: 'adjective' },
      { word: 'Nyumba', meaning: 'House', pronunciation: 'NYUM-ba', category: 'noun' },
      { word: 'Maai', meaning: 'Water', pronunciation: 'MA-ai', category: 'noun' },
      { word: 'Kyakula', meaning: 'Food', pronunciation: 'kya-KU-la', category: 'noun' },
      { word: 'Murata', meaning: 'Friend', pronunciation: 'mu-RA-ta', category: 'noun' }
    ],
    greetings: [
      { greeting: 'Wakwa?', response: 'Niwakwa', context: 'How are you?', time_of_day: 'any' },
      { greeting: 'Wakomaa?', response: 'Nwakomaa', context: 'How did you sleep?', time_of_day: 'morning' },
      { greeting: 'Mwaseo?', response: 'Mwaseo', context: 'Good evening', time_of_day: 'evening' }
    ]
  },

  // MAASAI CONTENT - COMPREHENSIVE
  maasai: {
    basic_words: [
      // Greetings & Courtesy
      { word: 'Supa', response: 'Supa', meaning: 'Hello/How are you', pronunciation: 'SU-pa', category: 'greeting' },
      { word: 'Ashe', meaning: 'Thank you', pronunciation: 'A-she', category: 'courtesy' },
      { word: 'Karibu', meaning: 'Welcome', pronunciation: 'ka-RI-bu', category: 'courtesy' },
      { word: 'Pole', meaning: 'Sorry/Sympathy', pronunciation: 'PO-le', category: 'courtesy' },
      { word: 'Samahani', meaning: 'Excuse me/Forgive me', pronunciation: 'sa-ma-HA-ni', category: 'courtesy' },
      
      // Common Adjectives
      { word: 'Sidai', meaning: 'Good/Fine/Beautiful', pronunciation: 'si-DAI', category: 'adjective' },
      { word: 'Keriaa', meaning: 'Bad', pronunciation: 'ke-RI-aa', category: 'adjective' },
      { word: 'Kitok', meaning: 'Big/Large', pronunciation: 'ki-TOK', category: 'adjective' },
      { word: 'Kichaa', meaning: 'Small/Little', pronunciation: 'ki-CHAA', category: 'adjective' },
      { word: 'Kiraiyu', meaning: 'Tall/Long', pronunciation: 'ki-RAI-yu', category: 'adjective' },
      { word: 'Kichoro', meaning: 'Short', pronunciation: 'ki-CHO-ro', category: 'adjective' },
      { word: 'Kinyeji', meaning: 'New', pronunciation: 'ki-nye-JI', category: 'adjective' },
      { word: 'Kinyamaa', meaning: 'Old', pronunciation: 'ki-nya-MAA', category: 'adjective' },
      { word: 'Kitua', meaning: 'Red/Beautiful', pronunciation: 'ki-TU-a', category: 'adjective' },
      
      // Essential Nouns
      { word: 'Nkiri', meaning: 'Food', pronunciation: 'n-KI-ri', category: 'noun' },
      { word: 'Enkare', meaning: 'Water', pronunciation: 'en-KA-re', category: 'noun' },
      { word: 'Enkaji', meaning: 'House', pronunciation: 'en-KA-ji', category: 'noun' },
      { word: 'Enkang', meaning: 'Homestead/Village', pronunciation: 'en-KANG', category: 'noun' },
      { word: 'Esidai', meaning: 'Friend', pronunciation: 'e-si-DAI', category: 'noun' },
      { word: 'Enkutoto', meaning: 'School', pronunciation: 'en-ku-TO-to', category: 'noun' },
      { word: 'Enkishon', meaning: 'Work/Job', pronunciation: 'en-ki-SHON', category: 'noun' },
      { word: 'Entito', meaning: 'Money', pronunciation: 'en-TI-to', category: 'noun' },
      { word: 'Enkitabu', meaning: 'Book', pronunciation: 'en-ki-TA-bu', category: 'noun' },
      { word: 'Olturot', meaning: 'Tree', pronunciation: 'ol-tu-ROT', category: 'noun' },
      { word: 'Empukel', meaning: 'Road/Path', pronunciation: 'em-pu-KEL', category: 'noun' },
      
      // Common Verbs
      { word: 'Alo', meaning: 'To go', pronunciation: 'A-lo', category: 'verb' },
      { word: 'Ijo', meaning: 'To come', pronunciation: 'I-jo', category: 'verb' },
      { word: 'Amu', meaning: 'To eat', pronunciation: 'A-mu', category: 'verb' },
      { word: 'Anywa', meaning: 'To drink', pronunciation: 'a-NYW-a', category: 'verb' },
      { word: 'Isinko', meaning: 'To sleep', pronunciation: 'i-sin-KO', category: 'verb' },
      { word: 'Asoma', meaning: 'To read/study', pronunciation: 'a-SO-ma', category: 'verb' },
      { word: 'Aandika', meaning: 'To write', pronunciation: 'a-an-DI-ka', category: 'verb' },
      { word: 'Ayu', meaning: 'To say/speak', pronunciation: 'A-yu', category: 'verb' },
      { word: 'Anyit', meaning: 'To see', pronunciation: 'a-NYIT', category: 'verb' },
      { word: 'Arikia', meaning: 'To hear', pronunciation: 'a-ri-KI-a', category: 'verb' },
      { word: 'Apenda', meaning: 'To love/like', pronunciation: 'a-PEN-da', category: 'verb' },
      { word: 'Acheka', meaning: 'To laugh', pronunciation: 'a-CHE-ka', category: 'verb' },
      { word: 'Alia', meaning: 'To cry', pronunciation: 'a-LI-a', category: 'verb' },
      { word: 'Afanya', meaning: 'To do/make', pronunciation: 'a-FA-nya', category: 'verb' },
      
      // Time & Direction
      { word: 'Taata', meaning: 'Today', pronunciation: 'TA-a-ta', category: 'time' },
      { word: 'Nkong', meaning: 'Yesterday', pronunciation: 'n-KONG', category: 'time' },
      { word: 'Taisere', meaning: 'Tomorrow', pronunciation: 'tai-SE-re', category: 'time' },
      { word: 'Taata', meaning: 'Now', pronunciation: 'TA-a-ta', category: 'time' },
      { word: 'Kuna', meaning: 'Here', pronunciation: 'KU-na', category: 'direction' },
      { word: 'Kuko', meaning: 'There', pronunciation: 'KU-ko', category: 'direction' },
      { word: 'Embae', meaning: 'Front/Forward', pronunciation: 'em-BA-e', category: 'direction' },
      { word: 'Emurua', meaning: 'Behind/Back', pronunciation: 'e-mu-RU-a', category: 'direction' },
      
      // Emotions & Feelings
      { word: 'Enkishon', meaning: 'Joy/Happiness', pronunciation: 'en-ki-SHON', category: 'emotion' },
      { word: 'Enkiama', meaning: 'Sadness/Pain', pronunciation: 'en-ki-A-ma', category: 'emotion' },
      { word: 'Enkishon naibor', meaning: 'Anger', pronunciation: 'en-ki-SHON nai-BOR', category: 'emotion' },
      { word: 'Enkishon narok', meaning: 'Fear', pronunciation: 'en-ki-SHON na-ROK', category: 'emotion' },
      { word: 'Enkishon sidai', meaning: 'Love', pronunciation: 'en-ki-SHON si-DAI', category: 'emotion' },
      { word: 'Enkishon keriaa', meaning: 'Hatred', pronunciation: 'en-ki-SHON ke-RI-aa', category: 'emotion' },
      
      // Pastoral Life
      { word: 'Inkishu', meaning: 'Cattle', pronunciation: 'in-ki-SHU', category: 'livestock' },
      { word: 'Ilkiama', meaning: 'Goats', pronunciation: 'il-ki-A-ma', category: 'livestock' },
      { word: 'Ilkeri', meaning: 'Sheep', pronunciation: 'il-KE-ri', category: 'livestock' },
      { word: 'Ilkiama naibor', meaning: 'Donkeys', pronunciation: 'il-ki-A-ma nai-BOR', category: 'livestock' },
      { word: 'Oltumuren', meaning: 'Herder/Warrior', pronunciation: 'ol-tu-mu-REN', category: 'occupation' },
      { word: 'Enkiama', meaning: 'Milk', pronunciation: 'en-ki-A-ma', category: 'food' },
      { word: 'Enkutoto', meaning: 'Meat', pronunciation: 'en-ku-TO-to', category: 'food' },
      { word: 'Enkiama naibor', meaning: 'Blood', pronunciation: 'en-ki-A-ma nai-BOR', category: 'food' }
    ],
    
    greetings: [
      // Basic Greetings
      { greeting: 'Supa', response: 'Supa', context: 'Hello - How are you?', time_of_day: 'any' },
      { greeting: 'Takwenya?', response: 'Sidai', context: 'How are you?', time_of_day: 'any' },
      { greeting: 'Kasserian ingera?', response: 'Sidai', context: 'How are the children?', time_of_day: 'any' },
      { greeting: 'Meishoo?', response: 'Sidai', context: 'How are things?', time_of_day: 'any' },
      
      // Time-specific Greetings
      { greeting: 'Supa asubuhi', response: 'Supa', context: 'Good morning', time_of_day: 'morning' },
      { greeting: 'Supa mchana', response: 'Supa', context: 'Good afternoon', time_of_day: 'afternoon' },
      { greeting: 'Supa jioni', response: 'Supa', context: 'Good evening', time_of_day: 'evening' },
      { greeting: 'Supa usiku', response: 'Supa', context: 'Good night', time_of_day: 'night' },
      
      // Specific Context Greetings
      { greeting: 'Inkishu oo?', response: 'Sidai', context: 'How are the cattle?', time_of_day: 'any' },
      { greeting: 'Ilkiama oo?', response: 'Sidai', context: 'How are the goats?', time_of_day: 'any' },
      { greeting: 'Enkang oo?', response: 'Sidai', context: 'How is the homestead?', time_of_day: 'any' },
      { greeting: 'Oltumuren oo?', response: 'Sidai', context: 'How are the warriors?', time_of_day: 'any' },
      { greeting: 'Inkera oo?', response: 'Sidai', context: 'How are the children?', time_of_day: 'any' },
      { greeting: 'Ilkiok oo?', response: 'Sidai', context: 'How are the elders?', time_of_day: 'any' },
      
      // Welcoming Greetings
      { greeting: 'Karibu enkang', response: 'Ashe', context: 'Welcome to the homestead', time_of_day: 'any' },
      { greeting: 'Karibu nkiri', response: 'Ashe', context: 'Welcome to eat', time_of_day: 'any' },
      { greeting: 'Karibu enkare', response: 'Ashe', context: 'Welcome to drink', time_of_day: 'any' },
      
      // Farewells
      { greeting: 'Sere', response: 'Sere', context: 'Goodbye', time_of_day: 'any' },
      { greeting: 'Meishoo enkishon', response: 'Sidai', context: 'May you have good work', time_of_day: 'any' },
      { greeting: 'Meishoo olng\'weno', response: 'Sidai', context: 'May you have good health', time_of_day: 'any' },
      { greeting: 'Sinko sidai', response: 'Ashe', context: 'Sleep well', time_of_day: 'night' },
      
      // Blessings
      { greeting: 'Enkai naibor', response: 'Ashe', context: 'May God bless you', time_of_day: 'any' },
      { greeting: 'Meishoo inkishu', response: 'Ashe', context: 'May you have many cattle', time_of_day: 'any' },
      { greeting: 'Meishoo inkera', response: 'Ashe', context: 'May you have many children', time_of_day: 'any' }
    ],
    
    numbers: [
      { number: 0, word: 'Matapaala', pronunciation: 'ma-ta-PA-a-la' },
      { number: 1, word: 'Nabo', pronunciation: 'NA-bo' },
      { number: 2, word: 'Are', pronunciation: 'A-re' },
      { number: 3, word: 'Okuni', pronunciation: 'o-KU-ni' },
      { number: 4, word: 'Oongwan', pronunciation: 'o-on-GWAN' },
      { number: 5, word: 'Oimiet', pronunciation: 'oi-MI-et' },
      { number: 6, word: 'Ile', pronunciation: 'I-le' },
      { number: 7, word: 'Naapishana', pronunciation: 'na-a-pi-SHA-na' },
      { number: 8, word: 'Isiet', pronunciation: 'i-SI-et' },
      { number: 9, word: 'Naudo', pronunciation: 'nau-DO' },
      { number: 10, word: 'Tomon', pronunciation: 'to-MON' },
      { number: 11, word: 'Tomon o nabo', pronunciation: 'to-MON o NA-bo' },
      { number: 12, word: 'Tomon o are', pronunciation: 'to-MON o A-re' },
      { number: 15, word: 'Tomon o oimiet', pronunciation: 'to-MON o oi-MI-et' },
      { number: 20, word: 'Tikitam', pronunciation: 'ti-ki-TAM' },
      { number: 30, word: 'Tikitam o tomon', pronunciation: 'ti-ki-TAM o to-MON' },
      { number: 40, word: 'Tikitam are', pronunciation: 'ti-ki-TAM A-re' },
      { number: 50, word: 'Tikitam are o tomon', pronunciation: 'ti-ki-TAM A-re o to-MON' },
      { number: 60, word: 'Tikitam okuni', pronunciation: 'ti-ki-TAM o-KU-ni' },
      { number: 70, word: 'Tikitam okuni o tomon', pronunciation: 'ti-ki-TAM o-KU-ni o to-MON' },
      { number: 80, word: 'Tikitam oongwan', pronunciation: 'ti-ki-TAM o-on-GWAN' },
      { number: 90, word: 'Tikitam oongwan o tomon', pronunciation: 'ti-ki-TAM o-on-GWAN o to-MON' },
      { number: 100, word: 'Ip', pronunciation: 'IP' },
      { number: 200, word: 'Ip are', pronunciation: 'IP A-re' },
      { number: 500, word: 'Ip oimiet', pronunciation: 'IP oi-MI-et' },
      { number: 1000, word: 'Elfu', pronunciation: 'EL-fu' },
      { number: 2000, word: 'Elfu are', pronunciation: 'EL-fu A-re' },
      { number: 10000, word: 'Elfu tomon', pronunciation: 'EL-fu to-MON' }
    ],
    
    family: [
      // Immediate Family
      { relationship: 'Father', term: 'Papa', gender_specific: 'no', context: 'Universal term' },
      { relationship: 'Mother', term: 'Yeyo', gender_specific: 'no', context: 'Universal term' },
      { relationship: 'Son', term: 'Olayioni', gender_specific: 'yes', context: 'Male child' },
      { relationship: 'Daughter', term: 'Entito', gender_specific: 'yes', context: 'Female child' },
      { relationship: 'Child', term: 'Enkera', gender_specific: 'no', context: 'General term for child' },
      { relationship: 'Children', term: 'Inkera', gender_specific: 'no', context: 'Plural of child' },
      { relationship: 'Baby', term: 'Enkera naichaa', gender_specific: 'no', context: 'Very young child' },
      { relationship: 'Firstborn', term: 'Enkera e mbae', gender_specific: 'no', context: 'First child' },
      
      // Siblings
      { relationship: 'Brother', term: 'Olayioni', gender_specific: 'no', context: 'Male sibling' },
      { relationship: 'Sister', term: 'Entito', gender_specific: 'no', context: 'Female sibling' },
      { relationship: 'Elder brother', term: 'Olayioni kitok', gender_specific: 'no', context: 'Older male sibling' },
      { relationship: 'Elder sister', term: 'Entito kitok', gender_specific: 'no', context: 'Older female sibling' },
      { relationship: 'Younger sibling', term: 'Enkera naichaa', gender_specific: 'no', context: 'Younger brother or sister' },
      
      // Grandparents
      { relationship: 'Grandfather', term: 'Kokoo', gender_specific: 'no', context: 'Paternal/maternal grandfather' },
      { relationship: 'Grandmother', term: 'Koko', gender_specific: 'no', context: 'Paternal/maternal grandmother' },
      { relationship: 'Great grandfather', term: 'Kokoo kitok', gender_specific: 'no', context: 'Great grandfather' },
      { relationship: 'Great grandmother', term: 'Koko kitok', gender_specific: 'no', context: 'Great grandmother' },
      
      // Aunts and Uncles
      { relationship: 'Uncle', term: 'Papa naichaa', gender_specific: 'no', context: 'Father\'s brother' },
      { relationship: 'Aunt', term: 'Yeyo naichaa', gender_specific: 'no', context: 'Mother\'s sister' },
      { relationship: 'Uncle', term: 'Oltumuren', gender_specific: 'no', context: 'Mother\'s brother (warrior)' },
      { relationship: 'Aunt', term: 'Entito kitok', gender_specific: 'no', context: 'Father\'s sister' },
      
      // Marriage Relations
      { relationship: 'Husband', term: 'Oltumuren', gender_specific: 'no', context: 'Male spouse/warrior' },
      { relationship: 'Wife', term: 'Entito', gender_specific: 'no', context: 'Female spouse' },
      { relationship: 'Co-wife', term: 'Entito naibor', gender_specific: 'no', context: 'Another wife in polygamous marriage' },
      
      // In-laws
      { relationship: 'Father-in-law', term: 'Papa kitok', gender_specific: 'no', context: 'Spouse\'s father' },
      { relationship: 'Mother-in-law', term: 'Yeyo kitok', gender_specific: 'no', context: 'Spouse\'s mother' },
      { relationship: 'Son-in-law', term: 'Oltumuren naichaa', gender_specific: 'no', context: 'Daughter\'s husband' },
      { relationship: 'Daughter-in-law', term: 'Entito naichaa', gender_specific: 'no', context: 'Son\'s wife' },
      
      // Extended Family
      { relationship: 'Cousin', term: 'Enkera e oltumuren', gender_specific: 'no', context: 'Uncle\'s child' },
      { relationship: 'Nephew', term: 'Olayioni naichaa', gender_specific: 'no', context: 'Sister\'s son' },
      { relationship: 'Niece', term: 'Entito naichaa', gender_specific: 'no', context: 'Sister\'s daughter' },
      { relationship: 'Grandchild', term: 'Enkera e enkera', gender_specific: 'no', context: 'Child\'s child' },
      
      // Age Sets & Social Roles
      { relationship: 'Warrior', term: 'Olmurran', gender_specific: 'yes', context: 'Young male warrior' },
      { relationship: 'Elder', term: 'Ilkiok', gender_specific: 'no', context: 'Respected older person' },
      { relationship: 'Age-mate', term: 'Ilkiama', gender_specific: 'no', context: 'Same age group member' },
      { relationship: 'Clan member', term: 'Iloshon', gender_specific: 'no', context: 'Same clan member' }
    ],
    
    colors: [
      { color: 'Red', word: 'Narok', description: 'Color of blood, traditional cloth' },
      { color: 'Blue', word: 'Naibor', description: 'Color of sky, water' },
      { color: 'Green', word: 'Nasirian', description: 'Color of grass, leaves' },
      { color: 'Yellow', word: 'Nasirian kitok', description: 'Color of sun, gold' },
      { color: 'Black', word: 'Narok kitok', description: 'Color of night, cattle' },
      { color: 'White', word: 'Naibor kitok', description: 'Color of milk, clouds' },
      { color: 'Brown', word: 'Nasirian narok', description: 'Color of earth, cattle' },
      { color: 'Orange', word: 'Narok nasirian', description: 'Mixed red and yellow' },
      { color: 'Purple', word: 'Narok naibor', description: 'Mixed red and blue' },
      { color: 'Pink', word: 'Narok naichaa', description: 'Light red color' },
      { color: 'Gray', word: 'Naibor narok', description: 'Color of ash, stones' }
    ],
    
    animals: [
      // Livestock (Most Important)
      { animal: 'Cattle', word: 'Inkishu', sound: 'Moo', habitat: 'Grazing lands' },
      { animal: 'Bull', word: 'Oltumuren enkishu', sound: 'Moo kitok', habitat: 'Grazing lands' },
      { animal: 'Cow', word: 'Entito enkishu', sound: 'Moo', habitat: 'Grazing lands' },
      { animal: 'Calf', word: 'Enkishu naichaa', sound: 'Moo naichaa', habitat: 'Near homestead' },
      { animal: 'Goat', word: 'Ilkiama', sound: 'Maa', habitat: 'Grazing lands' },
      { animal: 'Sheep', word: 'Ilkeri', sound: 'Baa', habitat: 'Grazing lands' },
      { animal: 'Donkey', word: 'Ilkiama naibor', sound: 'Hee-haw', habitat: 'Transport' },
      
      // Wild Animals
      { animal: 'Lion', word: 'Olng\'wesi', sound: 'Roar', habitat: 'Savanna' },
      { animal: 'Elephant', word: 'Oltome', sound: 'Trumpet', habitat: 'Forest/Savanna' },
      { animal: 'Leopard', word: 'Olng\'wesi naichaa', sound: 'Growl', habitat: 'Forest' },
      { animal: 'Buffalo', word: 'Olaro', sound: 'Snort', habitat: 'Grassland' },
      { animal: 'Zebra', word: 'Olkeri nasirian', sound: 'Neigh', habitat: 'Savanna' },
      { animal: 'Giraffe', word: 'Olmeut', sound: 'Silent', habitat: 'Acacia trees' },
      { animal: 'Rhinoceros', word: 'Emunyo', sound: 'Snort', habitat: 'Thick bush' },
      { animal: 'Hippopotamus', word: 'Oltome naichaa', sound: 'Grunt', habitat: 'Rivers' },
      { animal: 'Hyena', word: 'Olng\'ojine', sound: 'Laugh', habitat: 'Savanna' },
      { animal: 'Cheetah', word: 'Olng\'wesi nasirian', sound: 'Chirp', habitat: 'Open plains' },
      
      // Birds
      { animal: 'Eagle', word: 'Oltome naibor', sound: 'Screech', habitat: 'Mountains' },
      { animal: 'Ostrich', word: 'Olng\'wesi kitok', sound: 'Boom', habitat: 'Open plains' },
      { animal: 'Vulture', word: 'Olkinyei', sound: 'Hiss', habitat: 'Scavenging' },
      { animal: 'Dove', word: 'Enkutoto naichaa', sound: 'Coo', habitat: 'Trees' },
      
      // Insects & Small Animals
      { animal: 'Bee', word: 'Olkinyei naichaa', sound: 'Buzz', habitat: 'Flowers' },
      { animal: 'Ant', word: 'Enkutoto', sound: 'Silent', habitat: 'Ground' },
      { animal: 'Snake', word: 'Olkinyei narok', sound: 'Hiss', habitat: 'Various' },
      { animal: 'Lizard', word: 'Enkutoto nasirian', sound: 'Silent', habitat: 'Rocks' }
    ],
    
    food: [
      { item: 'Milk', word: 'Enkiama', type: 'Dairy', preparation: 'Fresh/Fermented' },
      { item: 'Meat', word: 'Enkutoto', type: 'Protein', preparation: 'Roasted/Boiled' },
      { item: 'Blood', word: 'Enkiama narok', type: 'Protein', preparation: 'Fresh/Mixed with milk' },
      { item: 'Ugali', word: 'Enkiri', type: 'Staple', preparation: 'Cooked with water' },
      { item: 'Rice', word: 'Enkiri naibor', type: 'Staple', preparation: 'Boiled' },
      { item: 'Beans', word: 'Ilkiama nasirian', type: 'Protein', preparation: 'Boiled' },
      { item: 'Vegetables', word: 'Enkutoto nasirian', type: 'Vegetable', preparation: 'Cooked' },
      { item: 'Honey', word: 'Enkiama nasirian', type: 'Sweet', preparation: 'Natural' },
      { item: 'Fat', word: 'Enkiama kitok', type: 'Fat', preparation: 'From animals' },
      { item: 'Tea', word: 'Enkare narok', type: 'Beverage', preparation: 'Boiled with milk' },
      { item: 'Water', word: 'Enkare', type: 'Beverage', preparation: 'Fresh from wells' },
      { item: 'Porridge', word: 'Enkiri naichaa', type: 'Staple', preparation: 'Cooked thin' },
      { item: 'Soup', word: 'Enkutoto naichaa', type: 'Liquid', preparation: 'Boiled with bones' },
      { item: 'Salt', word: 'Enkiama naibor', type: 'Seasoning', preparation: 'Added to food' }
    ],
    
    body_parts: [
      { body_part: 'Head', word: 'Olkop', pronunciation: 'ol-KOP' },
      { body_part: 'Hair', word: 'Enkutoto olkop', pronunciation: 'en-ku-TO-to ol-KOP' },
      { body_part: 'Face', word: 'Enkop', pronunciation: 'en-KOP' },
      { body_part: 'Eye', word: 'Enkishon', pronunciation: 'en-ki-SHON' },
      { body_part: 'Nose', word: 'Enkishon naichaa', pronunciation: 'en-ki-SHON nai-CHAA' },
      { body_part: 'Mouth', word: 'Enkutoto', pronunciation: 'en-ku-TO-to' },
      { body_part: 'Ear', word: 'Enkishon naibor', pronunciation: 'en-ki-SHON nai-BOR' },
      { body_part: 'Neck', word: 'Enkop naichaa', pronunciation: 'en-KOP nai-CHAA' },
      { body_part: 'Shoulder', word: 'Enkishon kitok', pronunciation: 'en-ki-SHON ki-TOK' },
      { body_part: 'Arm', word: 'Olkeri', pronunciation: 'ol-KE-ri' },
      { body_part: 'Hand', word: 'Enkishon olkeri', pronunciation: 'en-ki-SHON ol-KE-ri' },
      { body_part: 'Finger', word: 'Enkishon naichaa', pronunciation: 'en-ki-SHON nai-CHAA' },
      { body_part: 'Chest', word: 'Enkop kitok', pronunciation: 'en-KOP ki-TOK' },
      { body_part: 'Back', word: 'Emurua', pronunciation: 'e-mu-RU-a' },
      { body_part: 'Stomach', word: 'Enkutoto kitok', pronunciation: 'en-ku-TO-to ki-TOK' },
      { body_part: 'Leg', word: 'Olkeri kitok', pronunciation: 'ol-KE-ri ki-TOK' },
      { body_part: 'Foot', word: 'Enkishon olkeri', pronunciation: 'en-ki-SHON ol-KE-ri' }
    ],
    
    nature: [
      { element: 'Sun', word: 'Enkai', description: 'Source of light and life', season: 'all' },
      { element: 'Moon', word: 'Olapa', description: 'Night light', season: 'all' },
      { element: 'Star', word: 'Enkishon enkai', description: 'Points of light in sky', season: 'all' },
      { element: 'Sky', word: 'Enkai kitok', description: 'Space above earth', season: 'all' },
      { element: 'Cloud', word: 'Enkare enkai', description: 'Water vapor in sky', season: 'rainy' },
      { element: 'Rain', word: 'Enkare', description: 'Water from sky', season: 'rainy' },
      { element: 'Wind', word: 'Enkishon enkai', description: 'Moving air', season: 'all' },
      { element: 'Mountain', word: 'Oldonyo', description: 'High land formation', season: 'all' },
      { element: 'River', word: 'Enkare kitok', description: 'Flowing water', season: 'all' },
      { element: 'Lake', word: 'Enkare narok', description: 'Large body of water', season: 'all' },
      { element: 'Forest', word: 'Olturot kitok', description: 'Dense trees area', season: 'all' },
      { element: 'Tree', word: 'Olturot', description: 'Woody plant', season: 'all' },
      { element: 'Grass', word: 'Enkutoto nasirian', description: 'Ground covering for cattle', season: 'all' },
      { element: 'Stone', word: 'Enkishon narok', description: 'Hard mineral matter', season: 'all' },
      { element: 'Earth', word: 'Enkop narok', description: 'Ground/soil', season: 'all' }
    ],
    
    occupations: [
      { occupation: 'Warrior', word: 'Olmurran', description: 'Protects cattle and community', tools: 'Spear, shield, club' },
      { occupation: 'Elder', word: 'Ilkiok', description: 'Community leader and decision maker', tools: 'Wisdom, staff' },
      { occupation: 'Herder', word: 'Oltumuren', description: 'Takes care of livestock', tools: 'Stick, rope' },
      { occupation: 'Medicine man', word: 'Oloiboni', description: 'Traditional healer and prophet', tools: 'Herbs, divination tools' },
      { occupation: 'Blacksmith', word: 'Olkiama', description: 'Works with metal for tools', tools: 'Hammer, fire, metal' },
      { occupation: 'Trader', word: 'Oltumuren naibor', description: 'Exchanges cattle and goods', tools: 'Cattle, goods' },
      { occupation: 'Hunter', word: 'Oltome', description: 'Hunts wild animals', tools: 'Spear, bow, arrows' },
      { occupation: 'Teacher', word: 'Oltumuren enkutoto', description: 'Educates children', tools: 'Knowledge, stories' },
      { occupation: 'Builder', word: 'Olkiama naibor', description: 'Constructs houses and kraals', tools: 'Wood, mud, dung' },
      { occupation: 'Singer', word: 'Oltumuren enkishon', description: 'Performs traditional songs', tools: 'Voice, rhythm' },
      { occupation: 'Dancer', word: 'Olmurran enkishon', description: 'Performs traditional dances', tools: 'Body, rhythm, costume' },
      { occupation: 'Storyteller', word: 'Ilkiok enkutoto', description: 'Preserves oral traditions', tools: 'Memory, voice' }
    ],
    
    months: [
      { month: 'January', word: 'Oladalalu', season: 'Dry season', activities: 'Cattle grazing, well digging' },
      { month: 'February', word: 'Oladine', season: 'Dry season', activities: 'Long distance grazing' },
      { month: 'March', word: 'Oloilaguruone', season: 'Short rains start', activities: 'Preparing for rains' },
      { month: 'April', word: 'Oladalu', season: 'Long rains', activities: 'Cattle breeding, milk abundance' },
      { month: 'May', word: 'Oloilaguruone', season: 'Long rains', activities: 'Green pastures, ceremonies' },
      { month: 'June', word: 'Oladine', season: 'Cold season', activities: 'Cattle fattening' },
      { month: 'July', word: 'Oladalalu', season: 'Cold season', activities: 'Traditional ceremonies' },
      { month: 'August', word: 'Oloilaguruone', season: 'Dry season begins', activities: 'Cattle movement' },
      { month: 'September', word: 'Oladalu', season: 'Dry season', activities: 'Water source management' },
      { month: 'October', word: 'Oladine', season: 'Short rains', activities: 'Cattle breeding' },
      { month: 'November', word: 'Oladalalu', season: 'Short rains', activities: 'Milk production increase' },
      { month: 'December', word: 'Oloilaguruone', season: 'Dry season', activities: 'Cattle sales, ceremonies' }
    ],
    
    proverbs: [
      { 
        proverb: 'Meishoo enkishon oltumuren', 
        meaning: 'May the warrior have good work', 
        context: 'Blessing for success in endeavors', 
        lesson: 'Hard work and dedication bring success' 
      },
      { 
        proverb: 'Inkishu sidai, oltumuren sidai', 
        meaning: 'Good cattle, good warrior', 
        context: 'Wealth and character go together', 
        lesson: 'Material prosperity reflects personal virtue' 
      },
      { 
        proverb: 'Enkera naichaa, enkang naichaa', 
        meaning: 'Small child, small homestead', 
        context: 'Everything starts small and grows', 
        lesson: 'Patience and nurturing lead to growth' 
      },
      { 
        proverb: 'Enkare sidai, inkishu sidai', 
        meaning: 'Good water, good cattle', 
        context: 'Good resources lead to prosperity', 
        lesson: 'Quality foundation ensures quality results' 
      },
      { 
        proverb: 'Olmurran nabo, enkang nabo', 
        meaning: 'One warrior, one homestead', 
        context: 'Unity and focus bring strength', 
        lesson: 'Concentrated effort is more effective than scattered attempts' 
      },
      { 
        proverb: 'Ilkiok sidai, inkera sidai', 
        meaning: 'Good elders, good children', 
        context: 'Leadership quality affects the community', 
        lesson: 'Good leadership produces good followers' 
      },
      { 
        proverb: 'Enkiama narok, oltumuren narok', 
        meaning: 'Red milk, red warrior', 
        context: 'Strength comes from proper nourishment', 
        lesson: 'Good nutrition builds strong people' 
      }
    ],
    
    names: [
      { name: 'Sankale', meaning: 'God has given', gender: 'male', occasion: 'blessing' },
      { name: 'Nasirian', meaning: 'One who brings happiness', gender: 'female', occasion: 'joy' },
      { name: 'Oltumuren', meaning: 'The herder', gender: 'male', occasion: 'pastoral life' },
      { name: 'Entito', meaning: 'The woman', gender: 'female', occasion: 'general' },
      { name: 'Sankari', meaning: 'God is great', gender: 'male', occasion: 'praise' },
      { name: 'Nasieku', meaning: 'One who is blessed', gender: 'female', occasion: 'blessing' },
      { name: 'Olkinyei', meaning: 'The red one', gender: 'male', occasion: 'strength' },
      { name: 'Naserian', meaning: 'One who brings peace', gender: 'female', occasion: 'peace' },
      { name: 'Sankale', meaning: 'Gift from God', gender: 'male', occasion: 'divine gift' },
      { name: 'Nasirian', meaning: 'The happy one', gender: 'female', occasion: 'celebration' },
      { name: 'Olkiama', meaning: 'The wealthy one', gender: 'male', occasion: 'prosperity' },
      { name: 'Nasipai', meaning: 'One who is loved', gender: 'female', occasion: 'love' },
      { name: 'Sankori', meaning: 'God protects', gender: 'male', occasion: 'protection' },
      { name: 'Nasimiyu', meaning: 'One who endures', gender: 'female', occasion: 'perseverance' },
      { name: 'Olkinyei', meaning: 'The brave one', gender: 'male', occasion: 'courage' },
      { name: 'Naserian', meaning: 'Peaceful one', gender: 'female', occasion: 'harmony' },
      { name: 'Sankale', meaning: 'Blessed by God', gender: 'male', occasion: 'divine favor' },
      { name: 'Nasieku', meaning: 'The fortunate one', gender: 'female', occasion: 'good fortune' },
      { name: 'Olkiama', meaning: 'The provider', gender: 'male', occasion: 'responsibility' },
      { name: 'Nasipai', meaning: 'Beloved daughter', gender: 'female', occasion: 'affection' }
    ],
    
    cultural_practices: [
      { 
        practice: 'Eunoto (Warrior graduation)', 
        description: 'Ceremony marking transition from warrior to elder status', 
        occasion: 'Age-set graduation every 7-15 years', 
        significance: 'Marks maturity and readiness for marriage and leadership responsibilities' 
      },
      { 
        practice: 'Enkipaata (Junior warrior initiation)', 
        description: 'Ceremony initiating young men into warrior class', 
        occasion: 'Boys reaching warrior age (15-18 years)', 
        significance: 'Grants permission to carry spears and protect cattle' 
      },
      { 
        practice: 'Enkishon (Blessing ceremony)', 
        description: 'Elder\'s blessing ritual for important life events', 
        occasion: 'Before journeys, marriages, or major decisions', 
        significance: 'Seeks divine protection and community support' 
      },
      { 
        practice: 'Olng\'weno (Cattle blessing)', 
        description: 'Ritual blessing of cattle for health and fertility', 
        occasion: 'Beginning of grazing seasons or after disease', 
        significance: 'Ensures cattle prosperity, the foundation of Maasai wealth' 
      },
      { 
        practice: 'Enkutoto (Naming ceremony)', 
        description: 'Traditional ceremony for naming newborn children', 
        occasion: 'Birth of children', 
        significance: 'Connects child to clan identity and ancestral protection' 
      },
      { 
        practice: 'Enkishon enkang (Homestead blessing)', 
        description: 'Ceremony to bless new homestead construction', 
        occasion: 'Building new family compounds', 
        significance: 'Ensures protection, fertility, and prosperity for the family' 
      },
      { 
        practice: 'Olkiama (Wealth ceremony)', 
        description: 'Celebration of successful cattle accumulation', 
        occasion: 'Achievement of significant cattle wealth', 
        significance: 'Recognizes success and establishes social status in community' 
      }
    ]
  },

  // KALENJIN CONTENT - COMPREHENSIVE
  kalenjin: {
    basic_words: [
      // Greetings & Courtesy
      { word: 'Chamge', meaning: 'Hello/How are you', pronunciation: 'CHAM-ge', category: 'greeting' },
      { word: 'Asante', meaning: 'Thank you', pronunciation: 'a-SAN-te', category: 'courtesy' },
      { word: 'Kore', meaning: 'Please/Welcome', pronunciation: 'KO-re', category: 'courtesy' },
      { word: 'Kirui', meaning: 'Sorry/Excuse me', pronunciation: 'ki-RU-i', category: 'courtesy' },
      { word: 'Mzee', meaning: 'Elder/Sir', pronunciation: 'M-zee', category: 'courtesy' },
      { word: 'Mama', meaning: 'Mother/Madam', pronunciation: 'MA-ma', category: 'courtesy' },
      
      // Common Adjectives
      { word: 'Kipsigis', meaning: 'Good/Beautiful', pronunciation: 'kip-SI-gis', category: 'adjective' },
      { word: 'Makech', meaning: 'Bad/Evil', pronunciation: 'ma-KECH', category: 'adjective' },
      { word: 'Kitil', meaning: 'Big/Large', pronunciation: 'ki-TIL', category: 'adjective' },
      { word: 'Kichok', meaning: 'Small/Little', pronunciation: 'ki-CHOK', category: 'adjective' },
      { word: 'Kimuren', meaning: 'Tall/Long', pronunciation: 'ki-mu-REN', category: 'adjective' },
      { word: 'Kichiek', meaning: 'Short', pronunciation: 'ki-CHI-ek', category: 'adjective' },
      { word: 'Kipsigei', meaning: 'New', pronunciation: 'kip-si-GEI', category: 'adjective' },
      { word: 'Kimuren', meaning: 'Old', pronunciation: 'ki-mu-REN', category: 'adjective' },
      { word: 'Kipsigis', meaning: 'Red', pronunciation: 'kip-SI-gis', category: 'adjective' },
      { word: 'Kiplamai', meaning: 'White', pronunciation: 'kip-la-MAI', category: 'adjective' },
      
      // Essential Nouns
      { word: 'Muren', meaning: 'Food', pronunciation: 'mu-REN', category: 'noun' },
      { word: 'Peek', meaning: 'Water', pronunciation: 'PEEK', category: 'noun' },
      { word: 'Kot', meaning: 'House', pronunciation: 'KOT', category: 'noun' },
      { word: 'Kokwet', meaning: 'Home/Village', pronunciation: 'kok-WET', category: 'noun' },
      { word: 'Chito', meaning: 'Friend', pronunciation: 'CHI-to', category: 'noun' },
      { word: 'Sukul', meaning: 'School', pronunciation: 'su-KUL', category: 'noun' },
      { word: 'Tich', meaning: 'Work/Job', pronunciation: 'TICH', category: 'noun' },
      { word: 'Pesa', meaning: 'Money', pronunciation: 'PE-sa', category: 'noun' },
      { word: 'Buk', meaning: 'Book', pronunciation: 'BUK', category: 'noun' },
      { word: 'Keringet', meaning: 'Tree', pronunciation: 'ke-rin-GET', category: 'noun' },
      { word: 'Ortinwek', meaning: 'Road/Path', pronunciation: 'or-tin-WEK', category: 'noun' },
      
      // Common Verbs
      { word: 'Wendi', meaning: 'To go', pronunciation: 'WEN-di', category: 'verb' },
      { word: 'Bii', meaning: 'To come', pronunciation: 'BII', category: 'verb' },
      { word: 'Cham', meaning: 'To eat', pronunciation: 'CHAM', category: 'verb' },
      { word: 'Nywani', meaning: 'To drink', pronunciation: 'ny-WA-ni', category: 'verb' },
      { word: 'Lal', meaning: 'To sleep', pronunciation: 'LAL', category: 'verb' },
      { word: 'Som', meaning: 'To read/study', pronunciation: 'SOM', category: 'verb' },
      { word: 'Andik', meaning: 'To write', pronunciation: 'an-DIK', category: 'verb' },
      { word: 'Ngal', meaning: 'To say/speak', pronunciation: 'NGAL', category: 'verb' },
      { word: 'Nen', meaning: 'To see', pronunciation: 'NEN', category: 'verb' },
      { word: 'Winj', meaning: 'To hear', pronunciation: 'WINJ', category: 'verb' },
      
      // Time & Direction
      { word: 'Raini', meaning: 'Today', pronunciation: 'rai-NI', category: 'time' },
      { word: 'Mutai', meaning: 'Tomorrow', pronunciation: 'mu-TAI', category: 'time' },
      { word: 'Mamit', meaning: 'Yesterday', pronunciation: 'ma-MIT', category: 'time' },
      { word: 'Sait', meaning: 'Hour/Time', pronunciation: 'SAIT', category: 'time' },
      { word: 'Koong', meaning: 'Morning', pronunciation: 'KO-ong', category: 'time' },
      { word: 'Kararan', meaning: 'Evening', pronunciation: 'ka-ra-RAN', category: 'time' }
    ],

    greetings: [
      { greeting: 'Chamge?', response: 'Chamge', meaning: 'How are you? - Fine', pronunciation: 'CHAM-ge', context: 'General greeting', time_of_day: 'any', cultural_note: 'Most common Kalenjin greeting' },
      { greeting: 'Chamge koong?', response: 'Chamge mising', meaning: 'How is the morning? - The morning is good', pronunciation: 'CHAM-ge KO-ong / CHAM-ge mi-SING', context: 'Morning greeting', time_of_day: 'morning', cultural_note: 'Traditional morning greeting' },
      { greeting: 'Chamge kararan?', response: 'Chamge mising', meaning: 'How is the evening? - The evening is good', pronunciation: 'CHAM-ge ka-ra-RAN / CHAM-ge mi-SING', context: 'Evening greeting', time_of_day: 'evening', cultural_note: 'Respectful evening greeting' },
      { greeting: 'Kore bik', response: 'Asante', meaning: 'Please sit - Thank you', pronunciation: 'KO-re bik / a-SAN-te', context: 'Welcoming someone', time_of_day: 'any', cultural_note: 'Hospitality greeting for visitors' },
      { greeting: 'Chamge tugul?', response: 'Chamge mising', meaning: 'How is everyone? - Everyone is fine', pronunciation: 'CHAM-ge tu-GUL / CHAM-ge mi-SING', context: 'Family inquiry', time_of_day: 'any', cultural_note: 'Shows concern for entire family' },
      { greeting: 'Kipsigis raini', response: 'Ee, kipsigis', meaning: 'Good day - Yes, good', pronunciation: 'kip-SI-gis rai-NI / EE kip-SI-gis', context: 'Daytime greeting', time_of_day: 'day', cultural_note: 'Acknowledging a beautiful day' },
      { greeting: 'Lal mising', response: 'In ak', meaning: 'Sleep well - You too', pronunciation: 'lal mi-SING / in ak', context: 'Goodnight', time_of_day: 'night', cultural_note: 'Wishing peaceful sleep' },
      { greeting: 'Bii mising', response: 'Asante', meaning: 'Come well/Welcome - Thank you', pronunciation: 'BII mi-SING / a-SAN-te', context: 'Welcoming someone', time_of_day: 'any', cultural_note: 'Warm welcome to visitors' },
      { greeting: 'Wendi mising', response: 'Asante', meaning: 'Go well - Thank you', pronunciation: 'WEN-di mi-SING / a-SAN-te', context: 'Farewell', time_of_day: 'any', cultural_note: 'Blessing for safe journey' },
      { greeting: 'Tich ne chamge?', response: 'Tich mising', meaning: 'How is work? - Work is good', pronunciation: 'tich ne CHAM-ge / tich mi-SING', context: 'Work inquiry', time_of_day: 'any', cultural_note: 'Shows interest in livelihood' }
    ],

    numbers: [
      { number: 1, word: 'Aeng', pronunciation: 'A-eng' },
      { number: 2, word: 'Aeng ak aeng', pronunciation: 'A-eng ak A-eng' },
      { number: 3, word: 'Somok', pronunciation: 'SO-mok' },
      { number: 4, word: 'Angwan', pronunciation: 'ANG-wan' },
      { number: 5, word: 'Mut', pronunciation: 'MUT' },
      { number: 6, word: 'Mut ak aeng', pronunciation: 'MUT ak A-eng' },
      { number: 7, word: 'Tisap', pronunciation: 'ti-SAP' },
      { number: 8, word: 'Sisit', pronunciation: 'si-SIT' },
      { number: 9, word: 'Sokol', pronunciation: 'so-KOL' },
      { number: 10, word: 'Taman', pronunciation: 'ta-MAN' },
      { number: 11, word: 'Taman ak aeng', pronunciation: 'ta-MAN ak A-eng' },
      { number: 12, word: 'Taman ak aeng ak aeng', pronunciation: 'ta-MAN ak A-eng ak A-eng' },
      { number: 15, word: 'Taman ak mut', pronunciation: 'ta-MAN ak MUT' },
      { number: 20, word: 'Tikitam', pronunciation: 'ti-ki-TAM' },
      { number: 30, word: 'Tikitam ak taman', pronunciation: 'ti-ki-TAM ak ta-MAN' },
      { number: 40, word: 'Tikitam ak tikitam', pronunciation: 'ti-ki-TAM ak ti-ki-TAM' },
      { number: 50, word: 'Tikitam ak tikitam ak taman', pronunciation: 'ti-ki-TAM ak ti-ki-TAM ak ta-MAN' },
      { number: 100, word: 'Ip aeng', pronunciation: 'IP A-eng' },
      { number: 1000, word: 'Kipsigis aeng', pronunciation: 'kip-SI-gis A-eng' }
    ],

    family: [
      { relationship: 'Papa', meaning: 'Father', pronunciation: 'PA-pa', gender: 'male', cultural_note: 'Head of family, decision maker' },
      { relationship: 'Mama', meaning: 'Mother', pronunciation: 'MA-ma', gender: 'female', cultural_note: 'Caregiver and family organizer' },
      { relationship: 'Lakwet', meaning: 'Son', pronunciation: 'lak-WET', gender: 'male', cultural_note: 'Male child, inherits family name' },
      { relationship: 'Chepyosok', meaning: 'Daughter', pronunciation: 'che-pyo-SOK', gender: 'female', cultural_note: 'Female child, named after circumstances' },
      { relationship: 'Bororiet', meaning: 'Brother', pronunciation: 'bo-ro-RI-et', gender: 'male', cultural_note: 'Male sibling, important family bond' },
      { relationship: 'Chepkurui', meaning: 'Sister', pronunciation: 'chep-ku-RUI', gender: 'female', cultural_note: 'Female sibling, close relationship' },
      { relationship: 'Kogo', meaning: 'Grandfather', pronunciation: 'KO-go', gender: 'male', cultural_note: 'Elder, keeper of traditions and wisdom' },
      { relationship: 'Chepkogo', meaning: 'Grandmother', pronunciation: 'chep-KO-go', gender: 'female', cultural_note: 'Elder woman, source of cultural knowledge' },
      { relationship: 'Kiptaiyat', meaning: 'Uncle (father\'s brother)', pronunciation: 'kip-tai-YAT', gender: 'male', cultural_note: 'Important male relative, second father' },
      { relationship: 'Cheptaiyat', meaning: 'Aunt (father\'s sister)', pronunciation: 'chep-tai-YAT', gender: 'female', cultural_note: 'Father\'s sister, respected family member' },
      { relationship: 'Kiprotich', meaning: 'Uncle (mother\'s brother)', pronunciation: 'ki-pro-TICH', gender: 'male', cultural_note: 'Mother\'s brother, special relationship' },
      { relationship: 'Cheprotich', meaning: 'Aunt (mother\'s sister)', pronunciation: 'che-pro-TICH', gender: 'female', cultural_note: 'Mother\'s sister, like second mother' },
      { relationship: 'Chepkurui', meaning: 'Grandchild', pronunciation: 'chep-ku-RUI', gender: 'neutral', cultural_note: 'Beloved grandchildren, future of family' },
      { relationship: 'Kiptaiyat', meaning: 'In-law', pronunciation: 'kip-tai-YAT', gender: 'neutral', cultural_note: 'Family member through marriage' },
      { relationship: 'Chepkemoi', meaning: 'Wife', pronunciation: 'chep-ke-MOI', gender: 'female', cultural_note: 'Married woman, life partner' }
    ],

    colors: [
      { color: 'Kipsigis', meaning: 'Red', pronunciation: 'kip-SI-gis', description: 'Color of blood, earth, and traditional ochre' },
      { color: 'Kiplamai', meaning: 'White', pronunciation: 'kip-la-MAI', description: 'Color of milk, clouds, and purity' },
      { color: 'Kipketer', meaning: 'Black', pronunciation: 'kip-KE-ter', description: 'Color of night, charcoal, and fertile soil' },
      { color: 'Kipkoimet', meaning: 'Green', pronunciation: 'kip-koi-MET', description: 'Color of grass, leaves, and growing crops' },
      { color: 'Kipkoech', meaning: 'Blue', pronunciation: 'kip-KO-ech', description: 'Color of sky and distant mountains' },
      { color: 'Kiplagat', meaning: 'Yellow', pronunciation: 'kip-la-GAT', description: 'Color of sun, ripe grain, and honey' },
      { color: 'Kipkemoi', meaning: 'Brown', pronunciation: 'kip-ke-MOI', description: 'Color of tree bark and dried grass' },
      { color: 'Kipchoge', meaning: 'Orange', pronunciation: 'kip-CHO-ge', description: 'Color of sunset and ripe fruits' },
      { color: 'Kipkirui', meaning: 'Gray', pronunciation: 'kip-ki-RUI', description: 'Color of ash and cloudy sky' },
      { color: 'Kiptoo', meaning: 'Purple', pronunciation: 'kip-TOO', description: 'Color of certain flowers and berries' }
    ],

    animals: [
      { animal: 'Tugul', meaning: 'Cow/Cattle', pronunciation: 'tu-GUL', habitat: 'homestead', cultural_note: 'Most important livestock, symbol of wealth' },
      { animal: 'Chepkut', meaning: 'Goat', pronunciation: 'chep-KUT', habitat: 'homestead', cultural_note: 'Common livestock, used for ceremonies' },
      { animal: 'Chepsigei', meaning: 'Sheep', pronunciation: 'chep-si-GEI', habitat: 'homestead', cultural_note: 'Kept for wool and meat' },
      { animal: 'Kipsigis', meaning: 'Dog', pronunciation: 'kip-SI-gis', habitat: 'homestead', cultural_note: 'Guardian of home, hunting companion' },
      { animal: 'Chepkurui', meaning: 'Cat', pronunciation: 'chep-ku-RUI', habitat: 'homestead', cultural_note: 'Keeps rodents away from grain stores' },
      { animal: 'Kokoek', meaning: 'Chicken', pronunciation: 'ko-KO-ek', habitat: 'homestead', cultural_note: 'Source of eggs and meat, used in rituals' },
      { animal: 'Ng\'etundo', meaning: 'Lion', pronunciation: 'nge-tun-DO', habitat: 'wild', cultural_note: 'King of beasts, symbol of courage' },
      { animal: 'Chepkoimet', meaning: 'Leopard', pronunciation: 'chep-koi-MET', habitat: 'wild', cultural_note: 'Stealthy hunter, respected and feared' },
      { animal: 'Kipketer', meaning: 'Elephant', pronunciation: 'kip-KE-ter', habitat: 'wild', cultural_note: 'Largest land animal, symbol of strength' },
      { animal: 'Chepkoech', meaning: 'Buffalo', pronunciation: 'chep-KO-ech', habitat: 'wild', cultural_note: 'Strong wild animal, dangerous when provoked' },
      { animal: 'Kiplagat', meaning: 'Antelope', pronunciation: 'kip-la-GAT', habitat: 'wild', cultural_note: 'Swift graceful animal, hunted for meat' },
      { animal: 'Chepkemoi', meaning: 'Bird', pronunciation: 'chep-ke-MOI', habitat: 'air', cultural_note: 'Messengers, some species are totems' },
      { animal: 'Kipchoge', meaning: 'Monkey', pronunciation: 'kip-CHO-ge', habitat: 'trees', cultural_note: 'Clever animals, sometimes crop raiders' },
      { animal: 'Kiptoo', meaning: 'Hyena', pronunciation: 'kip-TOO', habitat: 'wild', cultural_note: 'Scavenger, associated with night and mystery' },
      { animal: 'Kipkirui', meaning: 'Hare', pronunciation: 'kip-ki-RUI', habitat: 'wild', cultural_note: 'Clever trickster in traditional stories' }
    ],

    food: [
      { item: 'Mursik', meaning: 'Fermented milk', pronunciation: 'mur-SIK', preparation: 'fermented', cultural_note: 'Traditional drink, very nutritious and culturally important' },
      { item: 'Kimiet', meaning: 'Ugali (cornmeal)', pronunciation: 'ki-MI-et', preparation: 'cooked', cultural_note: 'Main staple food, eaten with every meal' },
      { item: 'Chepkut', meaning: 'Meat', pronunciation: 'chep-KUT', preparation: 'roasted/stewed', cultural_note: 'Usually beef, goat, or chicken' },
      { item: 'Sukuma wiki', meaning: 'Vegetables/Greens', pronunciation: 'su-ku-ma WI-ki', preparation: 'boiled', cultural_note: 'Nutritious leafy vegetables' },
      { item: 'Wimbi', meaning: 'Millet', pronunciation: 'WIM-bi', preparation: 'porridge', cultural_note: 'Traditional grain, very nutritious' },
      { item: 'Mtama', meaning: 'Sorghum', pronunciation: 'm-TA-ma', preparation: 'porridge/beer', cultural_note: 'Drought-resistant grain, used for brewing' },
      { item: 'Viazi', meaning: 'Sweet potatoes', pronunciation: 'vi-A-zi', preparation: 'boiled/roasted', cultural_note: 'Important root crop, especially during dry season' },
      { item: 'Karanga', meaning: 'Groundnuts/Peanuts', pronunciation: 'ka-RAN-ga', preparation: 'roasted/sauce', cultural_note: 'Protein-rich nuts, made into paste' },
      { item: 'Nyama ya ng\'ombe', meaning: 'Beef', pronunciation: 'nya-ma ya ngo-MBE', preparation: 'roasted', cultural_note: 'Most prized meat, eaten during celebrations' },
      { item: 'Maharage', meaning: 'Beans', pronunciation: 'ma-ha-RA-ge', preparation: 'boiled', cultural_note: 'Important protein source, often mixed with maize' },
      { item: 'Maziwa', meaning: 'Milk', pronunciation: 'ma-ZI-wa', preparation: 'fresh/sour', cultural_note: 'From cows and goats, sometimes fermented' },
      { item: 'Mahindi', meaning: 'Maize/Corn', pronunciation: 'ma-HIN-di', preparation: 'various', cultural_note: 'Modern staple, ground into flour for ugali' },
      { item: 'Asali', meaning: 'Honey', pronunciation: 'a-SA-li', preparation: 'raw', cultural_note: 'Traditional sweetener, used for brewing honey beer' },
      { item: 'Busaa', meaning: 'Traditional beer', pronunciation: 'bu-SAA', preparation: 'fermented', cultural_note: 'Made from millet or sorghum, for ceremonies' },
      { item: 'Chepkurui', meaning: 'Traditional vegetables', pronunciation: 'chep-ku-RUI', preparation: 'boiled', cultural_note: 'Wild and cultivated greens, very nutritious' }
    ],

    body_parts: [
      { body_part: 'Kogo', meaning: 'Head', pronunciation: 'KO-go' },
      { body_part: 'Kipsigei', meaning: 'Eye', pronunciation: 'kip-si-GEI' },
      { body_part: 'Kiptaiyat', meaning: 'Ear', pronunciation: 'kip-tai-YAT' },
      { body_part: 'Kipkoech', meaning: 'Nose', pronunciation: 'kip-KO-ech' },
      { body_part: 'Kipkemoi', meaning: 'Mouth', pronunciation: 'kip-ke-MOI' },
      { body_part: 'Kiplagat', meaning: 'Tongue', pronunciation: 'kip-la-GAT' },
      { body_part: 'Kipchoge', meaning: 'Tooth', pronunciation: 'kip-CHO-ge' },
      { body_part: 'Kiptoo', meaning: 'Neck', pronunciation: 'kip-TOO' },
      { body_part: 'Kipkirui', meaning: 'Body', pronunciation: 'kip-ki-RUI' },
      { body_part: 'Chepkurui', meaning: 'Arm', pronunciation: 'chep-ku-RUI' },
      { body_part: 'Chepkemoi', meaning: 'Hand', pronunciation: 'chep-ke-MOI' },
      { body_part: 'Chepkoech', meaning: 'Finger', pronunciation: 'chep-KO-ech' },
      { body_part: 'Chepsigei', meaning: 'Chest', pronunciation: 'chep-si-GEI' },
      { body_part: 'Chepkut', meaning: 'Stomach/Belly', pronunciation: 'chep-KUT' },
      { body_part: 'Cheptaiyat', meaning: 'Back', pronunciation: 'chep-tai-YAT' },
      { body_part: 'Cheprotich', meaning: 'Leg', pronunciation: 'che-pro-TICH' },
      { body_part: 'Chepkoimet', meaning: 'Foot', pronunciation: 'chep-koi-MET' },
      { body_part: 'Chepketer', meaning: 'Heart', pronunciation: 'chep-KE-ter' },
      { body_part: 'Cheplagat', meaning: 'Mind/Thoughts', pronunciation: 'chep-la-GAT' },
      { body_part: 'Chepchoge', meaning: 'Blood', pronunciation: 'chep-CHO-ge' }
    ],

    nature: [
      { element: 'Asista', meaning: 'Sun', pronunciation: 'a-SIS-ta', description: 'Source of light and warmth' },
      { element: 'Arawa', meaning: 'Moon', pronunciation: 'a-RA-wa', description: 'Night light, marks months' },
      { element: 'Chepkurui', meaning: 'Star', pronunciation: 'chep-ku-RUI', description: 'Points of light in night sky' },
      { element: 'Kipsigei', meaning: 'Sky', pronunciation: 'kip-si-GEI', description: 'The heavens above' },
      { element: 'Ropta', meaning: 'Rain', pronunciation: 'ROP-ta', description: 'Life-giving water from sky' },
      { element: 'Kipkoimet', meaning: 'Wind', pronunciation: 'kip-koi-MET', description: 'Moving air, brings weather changes' },
      { element: 'Chepkoech', meaning: 'Cloud', pronunciation: 'chep-KO-ech', description: 'Water vapor in sky' },
      { element: 'Ngolong', meaning: 'Earth/Soil', pronunciation: 'ngo-LONG', description: 'Ground we walk on, grows crops' },
      { element: 'Tulwet', meaning: 'Mountain/Hill', pronunciation: 'tul-WET', description: 'High land formation' },
      { element: 'Kipketer', meaning: 'River', pronunciation: 'kip-KE-ter', description: 'Flowing water, source of life' },
      { element: 'Chepkemoi', meaning: 'Forest', pronunciation: 'chep-ke-MOI', description: 'Dense area of trees' },
      { element: 'Chepsigei', meaning: 'Grass', pronunciation: 'chep-si-GEI', description: 'Ground covering, food for animals' },
      { element: 'Kiptaiyat', meaning: 'Stone/Rock', pronunciation: 'kip-tai-YAT', description: 'Hard mineral formation' },
      { element: 'Mat', meaning: 'Fire', pronunciation: 'MAT', description: 'Flame for cooking and warmth' },
      { element: 'Keringet', meaning: 'Tree', pronunciation: 'ke-rin-GET', description: 'Tall plant, source of wood and shade' }
    ],

    occupations: [
      { occupation: 'Kipkorir', meaning: 'Teacher', pronunciation: 'kip-ko-RIR', description: 'One who educates children and adults' },
      { occupation: 'Kiptaiyat', meaning: 'Doctor/Healer', pronunciation: 'kip-tai-YAT', description: 'Medical practitioner, traditional or modern' },
      { occupation: 'Kipkemoi', meaning: 'Farmer', pronunciation: 'kip-ke-MOI', description: 'One who cultivates crops' },
      { occupation: 'Kiplagat', meaning: 'Herder', pronunciation: 'kip-la-GAT', description: 'One who tends cattle and livestock' },
      { occupation: 'Kipchoge', meaning: 'Trader/Merchant', pronunciation: 'kip-CHO-ge', description: 'One who buys and sells goods' },
      { occupation: 'Kiptoo', meaning: 'Builder/Constructor', pronunciation: 'kip-TOO', description: 'One who constructs houses and buildings' },
      { occupation: 'Kipkirui', meaning: 'Blacksmith', pronunciation: 'kip-ki-RUI', description: 'Traditional metalworker, makes tools' },
      { occupation: 'Kipsigei', meaning: 'Leader/Chief', pronunciation: 'kip-si-GEI', description: 'Community leader, decision maker' },
      { occupation: 'Kipkoech', meaning: 'Traditional healer', pronunciation: 'kip-KO-ech', description: 'Spiritual healer using herbs and rituals' },
      { occupation: 'Kiptaiyat', meaning: 'Hunter', pronunciation: 'kip-tai-YAT', description: 'One who hunts wild animals' },
      { occupation: 'Chepkurui', meaning: 'Potter', pronunciation: 'chep-ku-RUI', description: 'One who makes clay pots and vessels' },
      { occupation: 'Chepkemoi', meaning: 'Weaver', pronunciation: 'chep-ke-MOI', description: 'One who weaves baskets and mats' },
      { occupation: 'Cheprotich', meaning: 'Midwife', pronunciation: 'che-pro-TICH', description: 'Traditional birth attendant' },
      { occupation: 'Chepkoech', meaning: 'Singer/Musician', pronunciation: 'chep-KO-ech', description: 'Traditional musician and storyteller' },
      { occupation: 'Chepsigei', meaning: 'Messenger', pronunciation: 'chep-si-GEI', description: 'One who carries messages between communities' }
    ],

    months: [
      { month: 'Mulgul', meaning: 'January', pronunciation: 'mul-GUL', season: 'dry', activities: 'Land preparation, cattle grazing' },
      { month: 'Ng\'atyaato', meaning: 'February', pronunciation: 'nga-tya-A-to', season: 'dry', activities: 'Waiting for rains, tool preparation' },
      { month: 'Kiptaamo', meaning: 'March', pronunciation: 'kip-ta-A-mo', season: 'wet', activities: 'First planting season begins' },
      { month: 'Iwootkuut', meaning: 'April', pronunciation: 'i-woot-KU-ut', season: 'wet', activities: 'Heavy rains, main planting' },
      { month: 'Mamuut', meaning: 'May', pronunciation: 'ma-MU-ut', season: 'wet', activities: 'Crop growth, weeding' },
      { month: 'Paagi', meaning: 'June', pronunciation: 'pa-A-gi', season: 'dry', activities: 'Dry season begins, harvesting early crops' },
      { month: 'Ng\'eiyeet', meaning: 'July', pronunciation: 'ngei-YE-et', season: 'dry', activities: 'Cool dry season, cattle movement' },
      { month: 'Rooptui', meaning: 'August', pronunciation: 'roop-TU-i', season: 'dry', activities: 'Land preparation for second season' },
      { month: 'Bureet', meaning: 'September', pronunciation: 'bu-RE-et', season: 'wet', activities: 'Second planting season' },
      { month: 'Epeeso', meaning: 'October', pronunciation: 'e-pe-E-so', season: 'wet', activities: 'Short rains, late planting' },
      { month: 'Kipsuunde ne taai', meaning: 'November', pronunciation: 'kip-su-un-de ne ta-AI', season: 'wet', activities: 'Harvest time, celebrations' },
      { month: 'Kipsuunde ne aeng', meaning: 'December', pronunciation: 'kip-su-un-de ne A-eng', season: 'dry', activities: 'Major harvest, ceremonies, dry season' }
    ],

    names: [
      { name: 'Kipkorir', meaning: 'Born during harvest time', gender: 'male', occasion: 'harvest season', cultural_note: 'Very common Kalenjin name' },
      { name: 'Chepkorir', meaning: 'Born during harvest time', gender: 'female', occasion: 'harvest season', cultural_note: 'Female version of harvest name' },
      { name: 'Kiptaiyat', meaning: 'Born during ceremony', gender: 'male', occasion: 'ceremonial event', cultural_note: 'Marks important cultural celebration' },
      { name: 'Cheptaiyat', meaning: 'Born during ceremony', gender: 'female', occasion: 'ceremonial event', cultural_note: 'Female ceremonial birth name' },
      { name: 'Kiplagat', meaning: 'Born during sunny weather', gender: 'male', occasion: 'sunny day', cultural_note: 'Sunshine brings good fortune' },
      { name: 'Cheplagat', meaning: 'Born during sunny weather', gender: 'female', occasion: 'sunny day', cultural_note: 'Female sunshine birth name' },
      { name: 'Kipchoge', meaning: 'Born during milking time', gender: 'male', occasion: 'milking time', cultural_note: 'Connects to pastoral lifestyle' },
      { name: 'Chepchoge', meaning: 'Born during milking time', gender: 'female', occasion: 'milking time', cultural_note: 'Female milking time name' },
      { name: 'Kiptoo', meaning: 'Born during rain', gender: 'male', occasion: 'rainy weather', cultural_note: 'Rain is considered blessing' },
      { name: 'Cheptoo', meaning: 'Born during rain', gender: 'female', occasion: 'rainy weather', cultural_note: 'Female rain birth name' },
      { name: 'Kipkirui', meaning: 'Born during difficult times', gender: 'male', occasion: 'hardship', cultural_note: 'Marks challenging circumstances' },
      { name: 'Chepkirui', meaning: 'Born during difficult times', gender: 'female', occasion: 'hardship', cultural_note: 'Female hardship birth name' },
      { name: 'Kipsigei', meaning: 'Born during celebration', gender: 'male', occasion: 'festive time', cultural_note: 'Marks joyous occasions' },
      { name: 'Chepsigei', meaning: 'Born during celebration', gender: 'female', occasion: 'festive time', cultural_note: 'Female celebration name' },
      { name: 'Kipkemoi', meaning: 'Born during grazing time', gender: 'male', occasion: 'cattle grazing', cultural_note: 'Pastoral activity name' },
      { name: 'Chepkemoi', meaning: 'Born during grazing time', gender: 'female', occasion: 'cattle grazing', cultural_note: 'Female grazing time name' }
    ],

    proverbs: [
      { proverb: 'Tugul ma mi kipsigis ko tugul ma mi makech', meaning: 'Not all cattle that look good are actually good', lesson: 'Appearances can be deceiving', context: 'Wisdom about judging by looks' },
      { proverb: 'Lakwet ma ok winjo wach papa ne ko winjo wach chito', meaning: 'A child who doesn\'t listen to father will listen to strangers', lesson: 'Importance of parental guidance', context: 'Child discipline and respect' },
      { proverb: 'Peek ma ok mol ko ok nyal luoko kite', meaning: 'Water that doesn\'t flow cannot move stones', lesson: 'Persistence and continuous effort achieve results', context: 'Hard work and determination' },
      { proverb: 'Keringet ma ok nyal nyalo yamo ko ok nyal sik', meaning: 'A tree that cannot bend with wind cannot survive', lesson: 'Flexibility and adaptation are necessary', context: 'Adaptability in life' },
      { proverb: 'Chito ma ok nen tugul ne ko ok nen makech ne', meaning: 'A friend who doesn\'t see your cattle doesn\'t see your problems', lesson: 'True friends share in both prosperity and hardship', context: 'Friendship and loyalty' },
      { proverb: 'Kokwet ma ok gi chito ko ok nyal sik', meaning: 'A home without friends cannot survive', lesson: 'Community and friendship are vital', context: 'Social relationships' },
      { proverb: 'Muren ma ok cham raini ko ok cham mutai', meaning: 'Food not eaten today won\'t be eaten tomorrow', lesson: 'Take opportunities when they come', context: 'Seizing opportunities' },
      { proverb: 'Kipkorir ma ok ngey sukul ko ok ngey tich', meaning: 'A teacher who doesn\'t know school doesn\'t know work', lesson: 'Knowledge of your field is essential', context: 'Professional competence' },
      { proverb: 'Tugul tugul ko mi kipsigis, ak tugul tugul ko mi makech', meaning: 'Not all cattle are good, and not all cattle are bad', lesson: 'Avoid generalizations, judge individually', context: 'Fair judgment' },
      { proverb: 'Lakwet ma ok som ko ok nyal korir', meaning: 'A child who doesn\'t study cannot harvest knowledge', lesson: 'Education requires effort and dedication', context: 'Importance of education' }
    ],

    cultural_practices: [
      { practice: 'Tumdo', meaning: 'Circumcision ceremony', occasion: 'Coming of age', significance: 'Transition from childhood to adulthood', description: 'Traditional initiation rite for boys and girls' },
      { practice: 'Koito', meaning: 'Marriage ceremony', occasion: 'Wedding', significance: 'Union of two families', description: 'Traditional wedding with dowry payment and celebrations' },
      { practice: 'Kipsigis', meaning: 'Blessing ceremony', occasion: 'Various life events', significance: 'Seeking divine favor', description: 'Elder\'s blessing for important undertakings' },
      { practice: 'Chepkurui', meaning: 'Naming ceremony', occasion: 'Birth', significance: 'Identity and belonging', description: 'Traditional ceremony to name and welcome newborn' },
      { practice: 'Tugul koito', meaning: 'Cattle blessing', occasion: 'Seasonal ceremonies', significance: 'Livestock prosperity', description: 'Ritual blessing of cattle for health and fertility' },
      { practice: 'Kokwet koito', meaning: 'Community gathering', occasion: 'Important decisions', significance: 'Democratic participation', description: 'Traditional council meeting for community issues' },
      { practice: 'Mursik koito', meaning: 'Milk ceremony', occasion: 'Hospitality', significance: 'Welcome and respect', description: 'Offering fermented milk to honored guests' },
      { practice: 'Keringet koito', meaning: 'Tree planting ceremony', occasion: 'Environmental conservation', significance: 'Ecological responsibility', description: 'Traditional practice of planting trees for future generations' },
      { practice: 'Ropta koito', meaning: 'Rain ceremony', occasion: 'Drought periods', significance: 'Seeking divine intervention', description: 'Traditional rainmaking ceremony during dry seasons' },
      { practice: 'Kipsigei koito', meaning: 'Celebration ceremony', occasion: 'Achievements', significance: 'Community recognition', description: 'Traditional celebration of individual or community success' }
    ]
  },

  // KISII CONTENT - COMPREHENSIVE
  kisii: {
    basic_words: [
      // Greetings & Courtesy
      { word: 'Bwairire?', meaning: 'How are you?', pronunciation: 'bwa-i-RI-re', category: 'greeting' },
      { word: 'Nigosima', meaning: 'Thank you', pronunciation: 'ni-go-SI-ma', category: 'courtesy' },
      { word: 'Karibuni', meaning: 'Welcome', pronunciation: 'ka-ri-BU-ni', category: 'courtesy' },
      { word: 'Mbaimbai', meaning: 'Sorry/Excuse me', pronunciation: 'm-bai-MBAI', category: 'courtesy' },
      { word: 'Tata', meaning: 'Father/Sir', pronunciation: 'TA-ta', category: 'courtesy' },
      { word: 'Mama', meaning: 'Mother/Madam', pronunciation: 'MA-ma', category: 'courtesy' },
      
      // Common Adjectives
      { word: 'Chinene', meaning: 'Good/Beautiful', pronunciation: 'chi-NE-ne', category: 'adjective' },
      { word: 'Chibi', meaning: 'Bad/Evil', pronunciation: 'CHI-bi', category: 'adjective' },
      { word: 'Chinene', meaning: 'Big/Large', pronunciation: 'chi-NE-ne', category: 'adjective' },
      { word: 'Chinto', meaning: 'Small/Little', pronunciation: 'CHIN-to', category: 'adjective' },
      { word: 'Chirefu', meaning: 'Tall/Long', pronunciation: 'chi-RE-fu', category: 'adjective' },
      { word: 'Chifupi', meaning: 'Short', pronunciation: 'chi-FU-pi', category: 'adjective' },
      { word: 'Chisya', meaning: 'New', pronunciation: 'CHI-sya', category: 'adjective' },
      { word: 'Chikuru', meaning: 'Old', pronunciation: 'chi-KU-ru', category: 'adjective' },
      { word: 'Chitune', meaning: 'Red', pronunciation: 'chi-TU-ne', category: 'adjective' },
      { word: 'Chiera', meaning: 'White', pronunciation: 'chi-E-ra', category: 'adjective' },
      
      // Essential Nouns
      { word: 'Ebiryo', meaning: 'Food', pronunciation: 'e-BI-ryo', category: 'noun' },
      { word: 'Amate', meaning: 'Water', pronunciation: 'a-MA-te', category: 'noun' },
      { word: 'Enyomba', meaning: 'House', pronunciation: 'e-NYOM-ba', category: 'noun' },
      { word: 'Omochie', meaning: 'Home/Village', pronunciation: 'o-mo-CHI-e', category: 'noun' },
      { word: 'Omosacha', meaning: 'Friend', pronunciation: 'o-mo-SA-cha', category: 'noun' },
      { word: 'Esikuru', meaning: 'School', pronunciation: 'e-si-KU-ru', category: 'noun' },
      { word: 'Omurimo', meaning: 'Work/Job', pronunciation: 'o-mu-RI-mo', category: 'noun' },
      { word: 'Chuma', meaning: 'Money', pronunciation: 'CHU-ma', category: 'noun' },
      { word: 'Egetabu', meaning: 'Book', pronunciation: 'e-ge-TA-bu', category: 'noun' },
      { word: 'Omoti', meaning: 'Tree', pronunciation: 'o-MO-ti', category: 'noun' },
      { word: 'Enjira', meaning: 'Road/Path', pronunciation: 'en-JI-ra', category: 'noun' },
      
      // Common Verbs
      { word: 'Genda', meaning: 'To go', pronunciation: 'GEN-da', category: 'verb' },
      { word: 'Cha', meaning: 'To come', pronunciation: 'CHA', category: 'verb' },
      { word: 'Rya', meaning: 'To eat', pronunciation: 'RYA', category: 'verb' },
      { word: 'Nywa', meaning: 'To drink', pronunciation: 'NYW-a', category: 'verb' },
      { word: 'Raramo', meaning: 'To sleep', pronunciation: 'ra-RA-mo', category: 'verb' },
      { word: 'Soma', meaning: 'To read/study', pronunciation: 'SO-ma', category: 'verb' },
      { word: 'Andika', meaning: 'To write', pronunciation: 'an-DI-ka', category: 'verb' },
      { word: 'Bwera', meaning: 'To say/speak', pronunciation: 'BWE-ra', category: 'verb' },
      { word: 'Rora', meaning: 'To see', pronunciation: 'RO-ra', category: 'verb' },
      { word: 'Igwa', meaning: 'To hear', pronunciation: 'IG-wa', category: 'verb' },
      
      // Time & Direction
      { word: 'Rero', meaning: 'Today', pronunciation: 'RE-ro', category: 'time' },
      { word: 'Mambia', meaning: 'Tomorrow', pronunciation: 'mam-BI-a', category: 'time' },
      { word: 'Igoro', meaning: 'Yesterday', pronunciation: 'i-GO-ro', category: 'time' },
      { word: 'Esaa', meaning: 'Hour/Time', pronunciation: 'e-SAA', category: 'time' },
      { word: 'Bwairire', meaning: 'Morning', pronunciation: 'bwa-i-RI-re', category: 'time' },
      { word: 'Amagoroba', meaning: 'Evening', pronunciation: 'a-ma-go-RO-ba', category: 'time' }
    ],

    greetings: [
      { greeting: 'Bwairire?', response: 'Bwairire', meaning: 'How are you? - Fine', pronunciation: 'bwa-i-RI-re', context: 'General greeting', time_of_day: 'any', cultural_note: 'Most common Kisii greeting' },
      { greeting: 'Mwaramukire naki?', response: 'Mwaramukire', meaning: 'How did you wake up? - We woke up well', pronunciation: 'mwa-ra-mu-KI-re NA-ki', context: 'Morning greeting', time_of_day: 'morning', cultural_note: 'Traditional morning greeting' },
      { greeting: 'Mwairire naki?', response: 'Mwairire', meaning: 'How are you all? - We are fine', pronunciation: 'mwa-i-RI-re NA-ki', context: 'Family greeting', time_of_day: 'any', cultural_note: 'Shows concern for entire family' },
      { greeting: 'Karibuni', response: 'Nigosima', meaning: 'Welcome - Thank you', pronunciation: 'ka-ri-BU-ni / ni-go-SI-ma', context: 'Welcoming someone', time_of_day: 'any', cultural_note: 'Warm welcome to visitors' },
      { greeting: 'Mwairire amagoroba?', response: 'Mwairire', meaning: 'How are you this evening? - We are fine', pronunciation: 'mwa-i-RI-re a-ma-go-RO-ba', context: 'Evening greeting', time_of_day: 'evening', cultural_note: 'Respectful evening greeting' },
      { greeting: 'Richa rinene', response: 'Ee, rinene', meaning: 'The day is good - Yes, it is good', pronunciation: 'ri-CHA ri-NE-ne / EE ri-NE-ne', context: 'Daytime greeting', time_of_day: 'day', cultural_note: 'Acknowledging a beautiful day' },
      { greeting: 'Raramo chinene', response: 'Nawe', meaning: 'Sleep well - You too', pronunciation: 'ra-RA-mo chi-NE-ne / NA-we', context: 'Goodnight', time_of_day: 'night', cultural_note: 'Wishing peaceful sleep' },
      { greeting: 'Cha chinene', response: 'Nigosima', meaning: 'Come well/Welcome - Thank you', pronunciation: 'CHA chi-NE-ne / ni-go-SI-ma', context: 'Welcoming someone', time_of_day: 'any', cultural_note: 'Blessing for visitors' },
      { greeting: 'Genda chinene', response: 'Nigosima', meaning: 'Go well - Thank you', pronunciation: 'GEN-da chi-NE-ne / ni-go-SI-ma', context: 'Farewell', time_of_day: 'any', cultural_note: 'Blessing for safe journey' },
      { greeting: 'Omurimo gukenda nte?', response: 'Gukenda chinene', meaning: 'How is work going? - Going well', pronunciation: 'o-mu-RI-mo gu-KEN-da nte / gu-KEN-da chi-NE-ne', context: 'Work inquiry', time_of_day: 'any', cultural_note: 'Shows interest in livelihood' }
    ],

    numbers: [
      { number: 1, word: 'Emo', pronunciation: 'E-mo' },
      { number: 2, word: 'Ebiri', pronunciation: 'e-BI-ri' },
      { number: 3, word: 'Esato', pronunciation: 'e-SA-to' },
      { number: 4, word: 'Enya', pronunciation: 'E-nya' },
      { number: 5, word: 'Etano', pronunciation: 'e-TA-no' },
      { number: 6, word: 'Omokano', pronunciation: 'o-mo-KA-no' },
      { number: 7, word: 'Amasaba', pronunciation: 'a-ma-SA-ba' },
      { number: 8, word: 'Emonane', pronunciation: 'e-mo-NA-ne' },
      { number: 9, word: 'Kenda', pronunciation: 'KEN-da' },
      { number: 10, word: 'Ikumi', pronunciation: 'i-KU-mi' },
      { number: 11, word: 'Ikumi na emo', pronunciation: 'i-KU-mi na E-mo' },
      { number: 12, word: 'Ikumi na ebiri', pronunciation: 'i-KU-mi na e-BI-ri' },
      { number: 15, word: 'Ikumi na etano', pronunciation: 'i-KU-mi na e-TA-no' },
      { number: 20, word: 'Amakumi abiri', pronunciation: 'a-ma-KU-mi a-BI-ri' },
      { number: 30, word: 'Amakumi asato', pronunciation: 'a-ma-KU-mi a-SA-to' },
      { number: 40, word: 'Amakumi ana', pronunciation: 'a-ma-KU-mi A-na' },
      { number: 50, word: 'Amakumi atano', pronunciation: 'a-ma-KU-mi a-TA-no' },
      { number: 100, word: 'Igana', pronunciation: 'i-GA-na' },
      { number: 1000, word: 'Chilifu', pronunciation: 'chi-LI-fu' }
    ],

    family: [
      { relationship: 'Tata', meaning: 'Father', pronunciation: 'TA-ta', gender: 'male', cultural_note: 'Head of family, respected authority figure' },
      { relationship: 'Mama', meaning: 'Mother', pronunciation: 'MA-ma', gender: 'female', cultural_note: 'Caregiver and family organizer' },
      { relationship: 'Omwana', meaning: 'Child', pronunciation: 'om-WA-na', gender: 'neutral', cultural_note: 'Beloved children, future of family' },
      { relationship: 'Omoiseke', meaning: 'Son', pronunciation: 'o-moi-SE-ke', gender: 'male', cultural_note: 'Male child, inherits family name' },
      { relationship: 'Omoiseke', meaning: 'Daughter', pronunciation: 'o-moi-SE-ke', gender: 'female', cultural_note: 'Female child, precious to family' },
      { relationship: 'Omwana wa buna', meaning: 'Brother', pronunciation: 'om-WA-na wa BU-na', gender: 'male', cultural_note: 'Male sibling, important family bond' },
      { relationship: 'Omwana wa buna', meaning: 'Sister', pronunciation: 'om-WA-na wa BU-na', gender: 'female', cultural_note: 'Female sibling, close relationship' },
      { relationship: 'Sokoro', meaning: 'Grandfather', pronunciation: 'so-KO-ro', gender: 'male', cultural_note: 'Elder, keeper of traditions and wisdom' },
      { relationship: 'Nyawira', meaning: 'Grandmother', pronunciation: 'nya-WI-ra', gender: 'female', cultural_note: 'Elder woman, source of cultural knowledge' },
      { relationship: 'Tata omoke', meaning: 'Uncle (father\'s brother)', pronunciation: 'TA-ta o-MO-ke', gender: 'male', cultural_note: 'Important male relative, second father' },
      { relationship: 'Mama omoke', meaning: 'Aunt (father\'s sister)', pronunciation: 'MA-ma o-MO-ke', gender: 'female', cultural_note: 'Father\'s sister, respected family member' },
      { relationship: 'Nyawira omoke', meaning: 'Uncle (mother\'s brother)', pronunciation: 'nya-WI-ra o-MO-ke', gender: 'male', cultural_note: 'Mother\'s brother, special relationship' },
      { relationship: 'Nyawira omoke', meaning: 'Aunt (mother\'s sister)', pronunciation: 'nya-WI-ra o-MO-ke', gender: 'female', cultural_note: 'Mother\'s sister, like second mother' },
      { relationship: 'Omochukuru', meaning: 'Grandchild', pronunciation: 'o-mo-chu-KU-ru', gender: 'neutral', cultural_note: 'Beloved grandchildren, future of family' },
      { relationship: 'Omokwegani', meaning: 'In-law', pronunciation: 'o-mo-kwe-GA-ni', gender: 'neutral', cultural_note: 'Family member through marriage' },
      { relationship: 'Omokungu', meaning: 'Wife', pronunciation: 'o-mo-KUN-gu', gender: 'female', cultural_note: 'Married woman, life partner' }
    ],

    colors: [
      { color: 'Chitune', meaning: 'Red', pronunciation: 'chi-TU-ne', description: 'Color of blood, earth, and traditional ochre' },
      { color: 'Chiera', meaning: 'White', pronunciation: 'chi-E-ra', description: 'Color of milk, clouds, and purity' },
      { color: 'Chiiru', meaning: 'Black', pronunciation: 'chi-I-ru', description: 'Color of night, charcoal, and fertile soil' },
      { color: 'Chisagane', meaning: 'Green', pronunciation: 'chi-sa-GA-ne', description: 'Color of grass, leaves, and growing crops' },
      { color: 'Chisambururu', meaning: 'Blue', pronunciation: 'chi-sam-bu-RU-ru', description: 'Color of sky and distant hills' },
      { color: 'Chinjano', meaning: 'Yellow', pronunciation: 'chin-JA-no', description: 'Color of sun, ripe bananas, and maize' },
      { color: 'Chikahawa', meaning: 'Brown', pronunciation: 'chi-ka-HA-wa', description: 'Color of tree bark and dried grass' },
      { color: 'Chipinki', meaning: 'Pink', pronunciation: 'chi-PIN-ki', description: 'Light red color, like dawn sky' },
      { color: 'Chijivu', meaning: 'Gray', pronunciation: 'chi-JI-vu', description: 'Color of ash and cloudy sky' },
      { color: 'Chichungwa', meaning: 'Orange', pronunciation: 'chi-CHUN-gwa', description: 'Color of ripe oranges and sunset' }
    ],

    animals: [
      { animal: 'Ente', meaning: 'Cow/Cattle', pronunciation: 'EN-te', habitat: 'homestead', cultural_note: 'Most important livestock, symbol of wealth' },
      { animal: 'Embori', meaning: 'Goat', pronunciation: 'em-BO-ri', habitat: 'homestead', cultural_note: 'Common livestock, used for ceremonies' },
      { animal: 'Engondoro', meaning: 'Sheep', pronunciation: 'en-gon-DO-ro', habitat: 'homestead', cultural_note: 'Kept for wool and meat' },
      { animal: 'Embwa', meaning: 'Dog', pronunciation: 'em-BWA', habitat: 'homestead', cultural_note: 'Guardian of home, hunting companion' },
      { animal: 'Ekanyau', meaning: 'Cat', pronunciation: 'e-ka-NYAU', habitat: 'homestead', cultural_note: 'Keeps rodents away from grain stores' },
      { animal: 'Enkoko', meaning: 'Chicken', pronunciation: 'en-KO-ko', habitat: 'homestead', cultural_note: 'Source of eggs and meat, used in rituals' },
      { animal: 'Entambwe', meaning: 'Lion', pronunciation: 'en-TAM-bwe', habitat: 'wild', cultural_note: 'King of beasts, symbol of courage' },
      { animal: 'Engwe', meaning: 'Leopard', pronunciation: 'EN-gwe', habitat: 'wild', cultural_note: 'Stealthy hunter, respected and feared' },
      { animal: 'Enjogu', meaning: 'Elephant', pronunciation: 'en-JO-gu', habitat: 'wild', cultural_note: 'Largest land animal, symbol of strength' },
      { animal: 'Embogo', meaning: 'Buffalo', pronunciation: 'em-BO-go', habitat: 'wild', cultural_note: 'Strong wild animal, dangerous when provoked' },
      { animal: 'Empongo', meaning: 'Antelope', pronunciation: 'em-PON-go', habitat: 'wild', cultural_note: 'Swift graceful animal, hunted for meat' },
      { animal: 'Enyoni', meaning: 'Bird', pronunciation: 'e-NYO-ni', habitat: 'air', cultural_note: 'Messengers, some species are totems' },
      { animal: 'Enkende', meaning: 'Monkey', pronunciation: 'en-KEN-de', habitat: 'trees', cultural_note: 'Clever animals, sometimes crop raiders' },
      { animal: 'Enfisi', meaning: 'Hyena', pronunciation: 'en-FI-si', habitat: 'wild', cultural_note: 'Scavenger, associated with night and mystery' },
      { animal: 'Akameme', meaning: 'Hare', pronunciation: 'a-ka-ME-me', habitat: 'wild', cultural_note: 'Clever trickster in traditional stories' }
    ],

    food: [
      { item: 'Obokima', meaning: 'Ugali (cornmeal)', pronunciation: 'o-bo-KI-ma', preparation: 'cooked', cultural_note: 'Main staple food, eaten with every meal' },
      { item: 'Amanyama', meaning: 'Meat', pronunciation: 'a-ma-NYA-ma', preparation: 'roasted/stewed', cultural_note: 'Usually beef, goat, or chicken' },
      { item: 'Chinkorogi', meaning: 'Vegetables/Greens', pronunciation: 'chin-ko-RO-gi', preparation: 'boiled', cultural_note: 'Nutritious leafy vegetables, often wild' },
      { item: 'Obusuma', meaning: 'Millet porridge', pronunciation: 'o-bu-SU-ma', preparation: 'porridge', cultural_note: 'Traditional grain porridge, very nutritious' },
      { item: 'Amasere', meaning: 'Sorghum', pronunciation: 'a-ma-SE-re', preparation: 'porridge/beer', cultural_note: 'Traditional grain, used for brewing' },
      { item: 'Chinaki', meaning: 'Sweet potatoes', pronunciation: 'chi-NA-ki', preparation: 'boiled/roasted', cultural_note: 'Important root crop, especially during dry season' },
      { item: 'Ebinyebwa', meaning: 'Groundnuts/Peanuts', pronunciation: 'e-bi-nye-BWA', preparation: 'roasted/sauce', cultural_note: 'Protein-rich nuts, made into paste' },
      { item: 'Amanyama g\'ente', meaning: 'Beef', pronunciation: 'a-ma-NYA-ma gen-TE', preparation: 'roasted', cultural_note: 'Most prized meat, eaten during celebrations' },
      { item: 'Ebinyama', meaning: 'Beans', pronunciation: 'e-bi-NYA-ma', preparation: 'boiled', cultural_note: 'Important protein source, often mixed with maize' },
      { item: 'Amate g\'ente', meaning: 'Milk', pronunciation: 'a-MA-te gen-TE', preparation: 'fresh/sour', cultural_note: 'From cows and goats, sometimes fermented' },
      { item: 'Ebigori', meaning: 'Maize/Corn', pronunciation: 'e-bi-GO-ri', preparation: 'various', cultural_note: 'Modern staple, ground into flour for ugali' },
      { item: 'Obwoki', meaning: 'Honey', pronunciation: 'ob-WO-ki', preparation: 'raw', cultural_note: 'Traditional sweetener, used for brewing honey beer' },
      { item: 'Amarwa', meaning: 'Traditional beer', pronunciation: 'a-MAR-wa', preparation: 'fermented', cultural_note: 'Made from millet or sorghum, for ceremonies' },
      { item: 'Chinkorogi cha kisii', meaning: 'Traditional vegetables', pronunciation: 'chin-ko-RO-gi cha ki-SII', preparation: 'boiled', cultural_note: 'Wild and cultivated greens, very nutritious' },
      { item: 'Egesarate', meaning: 'Traditional porridge', pronunciation: 'e-ge-sa-RA-te', preparation: 'cooked', cultural_note: 'Nutritious porridge made from mixed grains' }
    ],

    body_parts: [
      { body_part: 'Omutwe', meaning: 'Head', pronunciation: 'o-mut-WE' },
      { body_part: 'Eriiso', meaning: 'Eye', pronunciation: 'e-ri-I-so' },
      { body_part: 'Okutwi', meaning: 'Ear', pronunciation: 'o-kut-WI' },
      { body_part: 'Enyindo', meaning: 'Nose', pronunciation: 'e-nyin-DO' },
      { body_part: 'Akanwa', meaning: 'Mouth', pronunciation: 'a-kan-WA' },
      { body_part: 'Orurimi', meaning: 'Tongue', pronunciation: 'o-ru-RI-mi' },
      { body_part: 'Erino', meaning: 'Tooth', pronunciation: 'e-ri-NO' },
      { body_part: 'Obwingo', meaning: 'Neck', pronunciation: 'ob-WIN-go' },
      { body_part: 'Omubiri', meaning: 'Body', pronunciation: 'o-mu-BI-ri' },
      { body_part: 'Okuboko', meaning: 'Arm', pronunciation: 'o-ku-BO-ko' },
      { body_part: 'Engalo', meaning: 'Hand', pronunciation: 'en-GA-lo' },
      { body_part: 'Echara', meaning: 'Finger', pronunciation: 'e-CHA-ra' },
      { body_part: 'Eifuba', meaning: 'Chest', pronunciation: 'ei-FU-ba' },
      { body_part: 'Enda', meaning: 'Stomach/Belly', pronunciation: 'EN-da' },
      { body_part: 'Omugongo', meaning: 'Back', pronunciation: 'o-mu-GON-go' },
      { body_part: 'Okuguru', meaning: 'Leg', pronunciation: 'o-ku-GU-ru' },
      { body_part: 'Ekigere', meaning: 'Foot', pronunciation: 'e-ki-GE-re' },
      { body_part: 'Omwoyo', meaning: 'Heart', pronunciation: 'om-WO-yo' },
      { body_part: 'Obwongo', meaning: 'Mind/Thoughts', pronunciation: 'ob-WON-go' },
      { body_part: 'Amasagati', meaning: 'Blood', pronunciation: 'a-ma-sa-GA-ti' }
    ],

    nature: [
      { element: 'Erioba', meaning: 'Sun', pronunciation: 'e-ri-O-ba', description: 'Source of light and warmth' },
      { element: 'Okwezi', meaning: 'Moon', pronunciation: 'ok-WE-zi', description: 'Night light, marks months' },
      { element: 'Enyenyezi', meaning: 'Star', pronunciation: 'e-nye-nye-ZI', description: 'Points of light in night sky' },
      { element: 'Eggulu', meaning: 'Sky', pronunciation: 'eg-GU-lu', description: 'The heavens above' },
      { element: 'Embura', meaning: 'Rain', pronunciation: 'em-BU-ra', description: 'Life-giving water from sky' },
      { element: 'Omuyaga', meaning: 'Wind', pronunciation: 'o-mu-YA-ga', description: 'Moving air, brings weather changes' },
      { element: 'Eire', meaning: 'Cloud', pronunciation: 'EI-re', description: 'Water vapor in sky' },
      { element: 'Ettaka', meaning: 'Earth/Soil', pronunciation: 'et-TA-ka', description: 'Ground we walk on, grows crops' },
      { element: 'Omusozi', meaning: 'Mountain/Hill', pronunciation: 'o-mu-SO-zi', description: 'High land formation' },
      { element: 'Omugga', meaning: 'River', pronunciation: 'o-mug-GA', description: 'Flowing water, source of life' },
      { element: 'Ekisagara', meaning: 'Forest', pronunciation: 'e-ki-sa-GA-ra', description: 'Dense area of trees' },
      { element: 'Omuddo', meaning: 'Grass', pronunciation: 'o-mud-DO', description: 'Ground covering, food for animals' },
      { element: 'Ejjinja', meaning: 'Stone/Rock', pronunciation: 'ej-JIN-ja', description: 'Hard mineral formation' },
      { element: 'Omuliro', meaning: 'Fire', pronunciation: 'o-mu-LI-ro', description: 'Flame for cooking and warmth' },
      { element: 'Omuti', meaning: 'Tree', pronunciation: 'o-mu-TI', description: 'Tall plant, source of wood and shade' }
    ],

    occupations: [
      { occupation: 'Omwarimu', meaning: 'Teacher', pronunciation: 'om-wa-RI-mu', description: 'One who educates children and adults' },
      { occupation: 'Omusawo', meaning: 'Doctor/Healer', pronunciation: 'o-mu-SA-wo', description: 'Medical practitioner, traditional or modern' },
      { occupation: 'Omurimi', meaning: 'Farmer', pronunciation: 'o-mu-RI-mi', description: 'One who cultivates crops' },
      { occupation: 'Omulesi', meaning: 'Herder', pronunciation: 'o-mu-LE-si', description: 'One who tends cattle and livestock' },
      { occupation: 'Omusubuzi', meaning: 'Trader/Merchant', pronunciation: 'o-mu-su-BU-zi', description: 'One who buys and sells goods' },
      { occupation: 'Omuzimbi', meaning: 'Builder/Constructor', pronunciation: 'o-mu-ZIM-bi', description: 'One who constructs houses and buildings' },
      { occupation: 'Omuweesi', meaning: 'Blacksmith', pronunciation: 'o-mu-WE-e-si', description: 'Traditional metalworker, makes tools' },
      { occupation: 'Omukulembeze', meaning: 'Leader/Chief', pronunciation: 'o-mu-ku-lem-BE-ze', description: 'Community leader, decision maker' },
      { occupation: 'Omufumu', meaning: 'Traditional healer', pronunciation: 'o-mu-FU-mu', description: 'Spiritual healer using herbs and rituals' },
      { occupation: 'Omuyiggi', meaning: 'Hunter', pronunciation: 'o-mu-YIG-gi', description: 'One who hunts wild animals' },
      { occupation: 'Omubumbi', meaning: 'Potter', pronunciation: 'o-mu-BUM-bi', description: 'One who makes clay pots and vessels' },
      { occupation: 'Omuluka', meaning: 'Weaver', pronunciation: 'o-mu-LU-ka', description: 'One who weaves baskets and mats' },
      { occupation: 'Omuzaalisa', meaning: 'Midwife', pronunciation: 'o-mu-za-a-LI-sa', description: 'Traditional birth attendant' },
      { occupation: 'Omuyimbi', meaning: 'Singer/Musician', pronunciation: 'o-mu-YIM-bi', description: 'Traditional musician and storyteller' },
      { occupation: 'Omutumwa', meaning: 'Messenger', pronunciation: 'o-mu-TUM-wa', description: 'One who carries messages between communities' }
    ],

    months: [
      { month: 'Okwokubanza', meaning: 'January', pronunciation: 'ok-wo-ku-BAN-za', season: 'dry', activities: 'Land preparation, planning' },
      { month: 'Okwakabiri', meaning: 'February', pronunciation: 'ok-wa-ka-BI-ri', season: 'dry', activities: 'Tool preparation, waiting for rains' },
      { month: 'Okwakasatu', meaning: 'March', pronunciation: 'ok-wa-ka-SA-tu', season: 'wet', activities: 'First planting season begins' },
      { month: 'Okwakana', meaning: 'April', pronunciation: 'ok-wa-ka-NA', season: 'wet', activities: 'Heavy rains, main planting' },
      { month: 'Okwakataano', meaning: 'May', pronunciation: 'ok-wa-ka-ta-A-no', season: 'wet', activities: 'Crop growth, weeding' },
      { month: 'Okwamukaaga', meaning: 'June', pronunciation: 'ok-wa-mu-ka-A-ga', season: 'dry', activities: 'Dry season begins, early harvest' },
      { month: 'Okwamushanju', meaning: 'July', pronunciation: 'ok-wa-mu-SHAN-ju', season: 'dry', activities: 'Cool dry season, harvest' },
      { month: 'Okwamunaana', meaning: 'August', pronunciation: 'ok-wa-mu-na-A-na', season: 'dry', activities: 'Main harvest season' },
      { month: 'Okwamwenda', meaning: 'September', pronunciation: 'ok-wa-MWEN-da', season: 'wet', activities: 'Second planting season' },
      { month: 'Okwaikumi', meaning: 'October', pronunciation: 'ok-wai-KU-mi', season: 'wet', activities: 'Short rains, late planting' },
      { month: 'Okwaikumi na kumwe', meaning: 'November', pronunciation: 'ok-wai-KU-mi na KUM-we', season: 'wet', activities: 'Harvest time, celebrations' },
      { month: 'Okwaikumi na ibiri', meaning: 'December', pronunciation: 'ok-wai-KU-mi na i-BI-ri', season: 'dry', activities: 'Major harvest, ceremonies, dry season' }
    ],

    names: [
      { name: 'Nyaboke', meaning: 'Born during harvest time', gender: 'female', occasion: 'harvest season', cultural_note: 'Very common Kisii name for girls' },
      { name: 'Bosire', meaning: 'Born during evening', gender: 'male', occasion: 'evening birth', cultural_note: 'Popular name for boys born in evening' },
      { name: 'Kerubo', meaning: 'Born during rain', gender: 'female', occasion: 'rainy weather', cultural_note: 'Rain is considered blessing' },
      { name: 'Ondieki', meaning: 'Born during ceremony', gender: 'male', occasion: 'ceremonial event', cultural_note: 'Marks important cultural celebration' },
      { name: 'Moraa', meaning: 'Born during sunny weather', gender: 'female', occasion: 'sunny day', cultural_note: 'Sunshine brings good fortune' },
      { name: 'Mong\'are', meaning: 'Born during difficult times', gender: 'male', occasion: 'hardship', cultural_note: 'Marks challenging circumstances' },
      { name: 'Kwamboka', meaning: 'Born during crossing (river/journey)', gender: 'female', occasion: 'travel/journey', cultural_note: 'Marks birth during travel' },
      { name: 'Ombati', meaning: 'Born during war/conflict', gender: 'male', occasion: 'conflict time', cultural_note: 'Historical name marking troubled times' },
      { name: 'Kemunto', meaning: 'Born during celebration', gender: 'female', occasion: 'festive time', cultural_note: 'Marks joyous occasions' },
      { name: 'Magara', meaning: 'Born during market day', gender: 'male', occasion: 'market day', cultural_note: 'Connects to trade and commerce' },
      { name: 'Gesare', meaning: 'Born during planting season', gender: 'female', occasion: 'planting time', cultural_note: 'Agricultural activity name' },
      { name: 'Nyarangi', meaning: 'Born during grazing time', gender: 'female', occasion: 'cattle grazing', cultural_note: 'Pastoral activity name' },
      { name: 'Omwando', meaning: 'Born during migration', gender: 'male', occasion: 'movement/migration', cultural_note: 'Marks family movement' },
      { name: 'Chepkemoi', meaning: 'Born during milking time', gender: 'female', occasion: 'milking time', cultural_note: 'Connects to pastoral lifestyle' },
      { name: 'Mokua', meaning: 'Born during dry season', gender: 'male', occasion: 'dry season', cultural_note: 'Seasonal birth name' }
    ],

    proverbs: [
      { proverb: 'Omwana ataigwa mama we taigwa abanto bamwe', meaning: 'A child who doesn\'t listen to their mother won\'t listen to others', lesson: 'Importance of parental guidance', context: 'Child discipline and respect' },
      { proverb: 'Ente emwe teyomba egesaiga', meaning: 'One cow doesn\'t make a herd', lesson: 'Unity and cooperation are essential', context: 'Community and teamwork' },
      { proverb: 'Amate agatamola gatakwata amabwe', meaning: 'Water that doesn\'t flow doesn\'t move stones', lesson: 'Persistence and continuous effort achieve results', context: 'Hard work and determination' },
      { proverb: 'Omuti ogutakwata omuyaga gutatemwa', meaning: 'A tree that doesn\'t bend with wind doesn\'t break', lesson: 'Flexibility and adaptation are necessary', context: 'Adaptability in life' },
      { proverb: 'Omosacha ataona ente zaawe taona ebibi byaawe', meaning: 'A friend who doesn\'t see your cattle doesn\'t see your problems', lesson: 'True friends share in both prosperity and hardship', context: 'Friendship and loyalty' },
      { proverb: 'Enyomba etaine abasacha teyomera', meaning: 'A home without friends doesn\'t prosper', lesson: 'Community and friendship are vital', context: 'Social relationships' },
      { proverb: 'Ebiryo ebitariibwa rero bitariibwa mambia', meaning: 'Food not eaten today won\'t be eaten tomorrow', lesson: 'Take opportunities when they come', context: 'Seizing opportunities' },
      { proverb: 'Omwarimu atamanya esikuru tamanya omurimo', meaning: 'A teacher who doesn\'t know school doesn\'t know work', lesson: 'Knowledge of your field is essential', context: 'Professional competence' },
      { proverb: 'Ente zose tizinene, kandi ente zose tizibi', meaning: 'Not all cattle are good, and not all cattle are bad', lesson: 'Avoid generalizations, judge individually', context: 'Fair judgment' },
      { proverb: 'Omwana atasoma takwata obwongo', meaning: 'A child who doesn\'t study doesn\'t gain wisdom', lesson: 'Education requires effort and dedication', context: 'Importance of education' }
    ],

    cultural_practices: [
      { practice: 'Egesaku', meaning: 'Circumcision ceremony', occasion: 'Coming of age', significance: 'Transition from childhood to adulthood', description: 'Traditional initiation rite for boys and girls' },
      { practice: 'Obwengane', meaning: 'Marriage ceremony', occasion: 'Wedding', significance: 'Union of two families', description: 'Traditional wedding with dowry payment and celebrations' },
      { practice: 'Egesarate', meaning: 'Blessing ceremony', occasion: 'Various life events', significance: 'Seeking divine favor', description: 'Elder\'s blessing for important undertakings' },
      { practice: 'Egetuko', meaning: 'Naming ceremony', occasion: 'Birth', significance: 'Identity and belonging', description: 'Traditional ceremony to name and welcome newborn' },
      { practice: 'Omogusii', meaning: 'Ancestral worship', occasion: 'Spiritual ceremonies', significance: 'Connection with ancestors', description: 'Rituals to honor and communicate with ancestors' },
      { practice: 'Chinkorogi', meaning: 'Harvest ceremony', occasion: 'Harvest season', significance: 'Thanksgiving for good harvest', description: 'Community celebration of successful harvest' },
      { practice: 'Amate ceremony', meaning: 'Water blessing', occasion: 'Drought periods', significance: 'Seeking rain and water', description: 'Traditional rainmaking ceremony during dry seasons' },
      { practice: 'Ente ceremony', meaning: 'Cattle blessing', occasion: 'Livestock ceremonies', significance: 'Livestock prosperity', description: 'Ritual blessing of cattle for health and fertility' },
      { practice: 'Omochie gathering', meaning: 'Community meeting', occasion: 'Important decisions', significance: 'Democratic participation', description: 'Traditional council meeting for community issues' },
      { practice: 'Egesarate festival', meaning: 'Cultural festival', occasion: 'Annual celebrations', significance: 'Cultural preservation', description: 'Annual festival celebrating Kisii culture and traditions' }
    ]
  },

  // KAMBA CONTENT - COMPREHENSIVE
  kamba: {
    basic_words: [
      // Greetings & Courtesy
      { word: 'Wĩ ata?', meaning: 'How are you?', pronunciation: 'WII a-ta', category: 'greeting' },
      { word: 'Nĩnasya', meaning: 'Thank you', pronunciation: 'nii-na-SYA', category: 'courtesy' },
      { word: 'Karibu', meaning: 'Welcome', pronunciation: 'ka-RI-bu', category: 'courtesy' },
      { word: 'Ngwĩkĩla', meaning: 'Sorry/Excuse me', pronunciation: 'ngwii-kii-la', category: 'courtesy' },
      { word: 'Tata', meaning: 'Father/Sir', pronunciation: 'TA-ta', category: 'courtesy' },
      { word: 'Mau', meaning: 'Mother/Madam', pronunciation: 'MAU', category: 'courtesy' },
      
      // Common Adjectives
      { word: 'Nzeo', meaning: 'Good/Beautiful', pronunciation: 'n-ZE-o', category: 'adjective' },
      { word: 'Mũũru', meaning: 'Bad/Evil', pronunciation: 'muu-u-ru', category: 'adjective' },
      { word: 'Nene', meaning: 'Big/Large', pronunciation: 'NE-ne', category: 'adjective' },
      { word: 'Nini', meaning: 'Small/Little', pronunciation: 'NI-ni', category: 'adjective' },
      { word: 'Ndaĩ', meaning: 'Tall/Long', pronunciation: 'n-DAI', category: 'adjective' },
      { word: 'Mũfupi', meaning: 'Short', pronunciation: 'muu-fu-pi', category: 'adjective' },
      { word: 'Mũya', meaning: 'New', pronunciation: 'MUU-ya', category: 'adjective' },
      { word: 'Mũkũũ', meaning: 'Old', pronunciation: 'muu-kuu-u', category: 'adjective' },
      { word: 'Mũtune', meaning: 'Red', pronunciation: 'muu-tu-ne', category: 'adjective' },
      { word: 'Mũeũ', meaning: 'White', pronunciation: 'muu-e-uu', category: 'adjective' },
      
      // Essential Nouns
      { word: 'Kyakulya', meaning: 'Food', pronunciation: 'kya-ku-LYA', category: 'noun' },
      { word: 'Maĩ', meaning: 'Water', pronunciation: 'ma-II', category: 'noun' },
      { word: 'Nyũmba', meaning: 'House', pronunciation: 'nyuum-ba', category: 'noun' },
      { word: 'Mũciĩ', meaning: 'Home/Village', pronunciation: 'muu-ci-ii', category: 'noun' },
      { word: 'Mũrata', meaning: 'Friend', pronunciation: 'muu-ra-ta', category: 'noun' },
      { word: 'Sukũũ', meaning: 'School', pronunciation: 'su-kuu-u', category: 'noun' },
      { word: 'Wĩra', meaning: 'Work/Job', pronunciation: 'wii-ra', category: 'noun' },
      { word: 'Mbesa', meaning: 'Money', pronunciation: 'm-be-sa', category: 'noun' },
      { word: 'Ibuku', meaning: 'Book', pronunciation: 'i-bu-ku', category: 'noun' },
      { word: 'Mũtĩ', meaning: 'Tree', pronunciation: 'muu-tii', category: 'noun' },
      { word: 'Njĩla', meaning: 'Road/Path', pronunciation: 'n-jii-la', category: 'noun' },
      
      // Common Verbs
      { word: 'Kwenda', meaning: 'To go', pronunciation: 'kwen-da', category: 'verb' },
      { word: 'Kũũka', meaning: 'To come', pronunciation: 'kuu-u-ka', category: 'verb' },
      { word: 'Kulya', meaning: 'To eat', pronunciation: 'ku-lya', category: 'verb' },
      { word: 'Kunyua', meaning: 'To drink', pronunciation: 'ku-nyu-a', category: 'verb' },
      { word: 'Kũkoma', meaning: 'To sleep', pronunciation: 'kuu-ko-ma', category: 'verb' },
      { word: 'Kusoma', meaning: 'To read/study', pronunciation: 'ku-so-ma', category: 'verb' },
      { word: 'Kwandĩka', meaning: 'To write', pronunciation: 'kwan-dii-ka', category: 'verb' },
      { word: 'Kwĩa', meaning: 'To say/speak', pronunciation: 'kwii-a', category: 'verb' },
      { word: 'Kuona', meaning: 'To see', pronunciation: 'ku-o-na', category: 'verb' },
      { word: 'Kũigua', meaning: 'To hear', pronunciation: 'kuu-i-gu-a', category: 'verb' },
      
      // Time & Direction
      { word: 'Ũmũnthĩ', meaning: 'Today', pronunciation: 'uu-muun-thii', category: 'time' },
      { word: 'Rũciũ', meaning: 'Tomorrow', pronunciation: 'ruu-ci-uu', category: 'time' },
      { word: 'Ira', meaning: 'Yesterday', pronunciation: 'I-ra', category: 'time' },
      { word: 'Saa', meaning: 'Hour/Time', pronunciation: 'SAA', category: 'time' },
      { word: 'Rũciinĩ', meaning: 'Morning', pronunciation: 'ruu-ci-i-nii', category: 'time' },
      { word: 'Hwaĩ-inĩ', meaning: 'Evening', pronunciation: 'hwai-i-nii', category: 'time' }
    ],

    greetings: [
      { greeting: 'Wĩ ata?', response: 'Nĩ nzeo', meaning: 'How are you? - I am fine', pronunciation: 'WII a-ta / nii n-ZE-o', context: 'General greeting', time_of_day: 'any', cultural_note: 'Most common Kamba greeting' },
      { greeting: 'Wakĩla ata?', response: 'Nĩ nzeo', meaning: 'How did you wake up? - I am fine', pronunciation: 'wa-kii-la a-ta / nii n-ZE-o', context: 'Morning greeting', time_of_day: 'morning', cultural_note: 'Traditional morning greeting' },
      { greeting: 'Mũciĩ nĩ mwega?', response: 'Nĩ mwega', meaning: 'Is home well? - It is well', pronunciation: 'muu-ci-ii nii mwe-ga / nii mwe-ga', context: 'Family greeting', time_of_day: 'any', cultural_note: 'Shows concern for entire family' },
      { greeting: 'Karibu', response: 'Nĩnasya', meaning: 'Welcome - Thank you', pronunciation: 'ka-RI-bu / nii-na-SYA', context: 'Welcoming someone', time_of_day: 'any', cultural_note: 'Warm welcome to visitors' },
      { greeting: 'Hwaĩ-inĩ nĩ mwega?', response: 'Nĩ mwega', meaning: 'Is the evening good? - It is good', pronunciation: 'hwai-i-nii nii mwe-ga / nii mwe-ga', context: 'Evening greeting', time_of_day: 'evening', cultural_note: 'Respectful evening greeting' },
      { greeting: 'Mũthenya nĩ mwega', response: 'Ĩĩ, nĩ mwega', meaning: 'The day is good - Yes, it is good', pronunciation: 'muu-the-nya nii mwe-ga / ii-i nii mwe-ga', context: 'Daytime greeting', time_of_day: 'day', cultural_note: 'Acknowledging a beautiful day' },
      { greeting: 'Koma nzeo', response: 'Nawe', meaning: 'Sleep well - You too', pronunciation: 'ko-ma n-ZE-o / na-we', context: 'Goodnight', time_of_day: 'night', cultural_note: 'Wishing peaceful sleep' },
      { greeting: 'Ũka nzeo', response: 'Nĩnasya', meaning: 'Come well/Welcome - Thank you', pronunciation: 'uu-ka n-ZE-o / nii-na-SYA', context: 'Welcoming someone', time_of_day: 'any', cultural_note: 'Blessing for visitors' },
      { greeting: 'Thiĩ nzeo', response: 'Nĩnasya', meaning: 'Go well - Thank you', pronunciation: 'thi-ii n-ZE-o / nii-na-SYA', context: 'Farewell', time_of_day: 'any', cultural_note: 'Blessing for safe journey' },
      { greeting: 'Wĩra nĩ mwega?', response: 'Nĩ mwega', meaning: 'Is work good? - It is good', pronunciation: 'wii-ra nii mwe-ga / nii mwe-ga', context: 'Work inquiry', time_of_day: 'any', cultural_note: 'Shows interest in livelihood' }
    ],

    numbers: [
      { number: 1, word: 'Ĩmwe', pronunciation: 'ii-mwe' },
      { number: 2, word: 'Ĩĩlĩ', pronunciation: 'ii-i-lii' },
      { number: 3, word: 'Ĩtatũ', pronunciation: 'ii-ta-tuu' },
      { number: 4, word: 'Ĩnya', pronunciation: 'ii-nya' },
      { number: 5, word: 'Ĩtano', pronunciation: 'ii-ta-no' },
      { number: 6, word: 'Ĩtandatũ', pronunciation: 'ii-tan-da-tuu' },
      { number: 7, word: 'Mũonza', pronunciation: 'muu-on-za' },
      { number: 8, word: 'Nyaanya', pronunciation: 'nya-a-nya' },
      { number: 9, word: 'Kenda', pronunciation: 'ken-da' },
      { number: 10, word: 'Ikũmi', pronunciation: 'i-kuu-mi' },
      { number: 11, word: 'Ikũmi na ĩmwe', pronunciation: 'i-kuu-mi na ii-mwe' },
      { number: 12, word: 'Ikũmi na ĩĩlĩ', pronunciation: 'i-kuu-mi na ii-i-lii' },
      { number: 15, word: 'Ikũmi na ĩtano', pronunciation: 'i-kuu-mi na ii-ta-no' },
      { number: 20, word: 'Mĩongo ĩĩlĩ', pronunciation: 'mii-on-go ii-i-lii' },
      { number: 30, word: 'Mĩongo ĩtatũ', pronunciation: 'mii-on-go ii-ta-tuu' },
      { number: 40, word: 'Mĩongo ĩnya', pronunciation: 'mii-on-go ii-nya' },
      { number: 50, word: 'Mĩongo ĩtano', pronunciation: 'mii-on-go ii-ta-no' },
      { number: 100, word: 'Igana', pronunciation: 'i-ga-na' },
      { number: 1000, word: 'Ngiri', pronunciation: 'ngi-ri' }
    ],

    family: [
      { relationship: 'Tata', meaning: 'Father', pronunciation: 'TA-ta', gender: 'male', cultural_note: 'Head of family, respected authority figure' },
      { relationship: 'Mau', meaning: 'Mother', pronunciation: 'MAU', gender: 'female', cultural_note: 'Caregiver and family organizer' },
      { relationship: 'Mwana', meaning: 'Child', pronunciation: 'mwa-na', gender: 'neutral', cultural_note: 'Beloved children, future of family' },
      { relationship: 'Mũndũ mũme', meaning: 'Son', pronunciation: 'muun-duu muu-me', gender: 'male', cultural_note: 'Male child, inherits family name' },
      { relationship: 'Mũndũ mũka', meaning: 'Daughter', pronunciation: 'muun-duu muu-ka', gender: 'female', cultural_note: 'Female child, precious to family' },
      { relationship: 'Mũrũ wa nyina', meaning: 'Brother', pronunciation: 'muu-ruu wa nyi-na', gender: 'male', cultural_note: 'Male sibling, important family bond' },
      { relationship: 'Mwarĩ wa nyina', meaning: 'Sister', pronunciation: 'mwa-rii wa nyi-na', gender: 'female', cultural_note: 'Female sibling, close relationship' },
      { relationship: 'Guka', meaning: 'Grandfather', pronunciation: 'GU-ka', gender: 'male', cultural_note: 'Elder, keeper of traditions and wisdom' },
      { relationship: 'Cucu', meaning: 'Grandmother', pronunciation: 'CU-cu', gender: 'female', cultural_note: 'Elder woman, source of cultural knowledge' },
      { relationship: 'Baba mũnini', meaning: 'Uncle (father\'s brother)', pronunciation: 'BA-ba muu-ni-ni', gender: 'male', cultural_note: 'Important male relative, second father' },
      { relationship: 'Mau mũnini', meaning: 'Aunt (father\'s sister)', pronunciation: 'MAU muu-ni-ni', gender: 'female', cultural_note: 'Father\'s sister, respected family member' },
      { relationship: 'Maitu', meaning: 'Uncle (mother\'s brother)', pronunciation: 'mai-tu', gender: 'male', cultural_note: 'Mother\'s brother, special relationship' },
      { relationship: 'Nyina mũnini', meaning: 'Aunt (mother\'s sister)', pronunciation: 'nyi-na muu-ni-ni', gender: 'female', cultural_note: 'Mother\'s sister, like second mother' },
      { relationship: 'Mũkũũ', meaning: 'Grandchild', pronunciation: 'muu-kuu-u', gender: 'neutral', cultural_note: 'Beloved grandchildren, future of family' },
      { relationship: 'Mũthoni-we', meaning: 'In-law', pronunciation: 'muu-tho-ni-we', gender: 'neutral', cultural_note: 'Family member through marriage' },
      { relationship: 'Mũka', meaning: 'Wife', pronunciation: 'muu-ka', gender: 'female', cultural_note: 'Married woman, life partner' }
    ],

    colors: [
      { color: 'Mũtune', meaning: 'Red', pronunciation: 'muu-tu-ne', description: 'Color of blood, earth, and traditional ochre' },
      { color: 'Mũeũ', meaning: 'White', pronunciation: 'muu-e-uu', description: 'Color of milk, clouds, and purity' },
      { color: 'Mũĩrũ', meaning: 'Black', pronunciation: 'muu-ii-ruu', description: 'Color of night, charcoal, and fertile soil' },
      { color: 'Mũthanĩ', meaning: 'Green', pronunciation: 'muu-tha-nii', description: 'Color of grass, leaves, and growing crops' },
      { color: 'Mũbirũ', meaning: 'Blue', pronunciation: 'muu-bi-ruu', description: 'Color of sky and distant hills' },
      { color: 'Mũnzaũ', meaning: 'Yellow', pronunciation: 'muun-za-uu', description: 'Color of sun, ripe bananas, and maize' },
      { color: 'Mũkahawa', meaning: 'Brown', pronunciation: 'muu-ka-ha-wa', description: 'Color of tree bark and dried grass' },
      { color: 'Mũpinki', meaning: 'Pink', pronunciation: 'muu-pin-ki', description: 'Light red color, like dawn sky' },
      { color: 'Mũjivu', meaning: 'Gray', pronunciation: 'muu-ji-vu', description: 'Color of ash and cloudy sky' },
      { color: 'Mũchungwa', meaning: 'Orange', pronunciation: 'muu-chun-gwa', description: 'Color of ripe oranges and sunset' }
    ],

    animals: [
      { animal: 'Ng\'ombe', meaning: 'Cow/Cattle', pronunciation: 'ngo-mbe', habitat: 'homestead', cultural_note: 'Most important livestock, symbol of wealth' },
      { animal: 'Mbũzi', meaning: 'Goat', pronunciation: 'm-buu-zi', habitat: 'homestead', cultural_note: 'Common livestock, used for ceremonies' },
      { animal: 'Ng\'ondu', meaning: 'Sheep', pronunciation: 'ngo-ndu', habitat: 'homestead', cultural_note: 'Kept for wool and meat' },
      { animal: 'Ngui', meaning: 'Dog', pronunciation: 'ngu-i', habitat: 'homestead', cultural_note: 'Guardian of home, hunting companion' },
      { animal: 'Nyau', meaning: 'Cat', pronunciation: 'nya-u', habitat: 'homestead', cultural_note: 'Keeps rodents away from grain stores' },
      { animal: 'Ngũkũ', meaning: 'Chicken', pronunciation: 'nguu-kuu', habitat: 'homestead', cultural_note: 'Source of eggs and meat, used in rituals' },
      { animal: 'Mũrũaru', meaning: 'Lion', pronunciation: 'muu-ruu-a-ru', habitat: 'wild', cultural_note: 'King of beasts, symbol of courage' },
      { animal: 'Ngo', meaning: 'Leopard', pronunciation: 'NGO', habitat: 'wild', cultural_note: 'Stealthy hunter, respected and feared' },
      { animal: 'Nzou', meaning: 'Elephant', pronunciation: 'n-zou', habitat: 'wild', cultural_note: 'Largest land animal, symbol of strength' },
      { animal: 'Mbogo', meaning: 'Buffalo', pronunciation: 'm-bo-go', habitat: 'wild', cultural_note: 'Strong wild animal, dangerous when provoked' },
      { animal: 'Swala', meaning: 'Antelope', pronunciation: 'swa-la', habitat: 'wild', cultural_note: 'Swift graceful animal, hunted for meat' },
      { animal: 'Nyoni', meaning: 'Bird', pronunciation: 'nyo-ni', habitat: 'air', cultural_note: 'Messengers, some species are totems' },
      { animal: 'Nkima', meaning: 'Monkey', pronunciation: 'n-ki-ma', habitat: 'trees', cultural_note: 'Clever animals, sometimes crop raiders' },
      { animal: 'Mbiti', meaning: 'Hyena', pronunciation: 'm-bi-ti', habitat: 'wild', cultural_note: 'Scavenger, associated with night and mystery' },
      { animal: 'Mbũa', meaning: 'Hare', pronunciation: 'm-buu-a', habitat: 'wild', cultural_note: 'Clever trickster in traditional stories' }
    ],

    food: [
      { item: 'Ũgalĩ', meaning: 'Ugali (cornmeal)', pronunciation: 'uu-ga-lii', preparation: 'cooked', cultural_note: 'Main staple food, eaten with every meal' },
      { item: 'Nyama', meaning: 'Meat', pronunciation: 'nya-ma', preparation: 'roasted/stewed', cultural_note: 'Usually beef, goat, or chicken' },
      { item: 'Mboga', meaning: 'Vegetables/Greens', pronunciation: 'm-bo-ga', preparation: 'boiled', cultural_note: 'Nutritious leafy vegetables, often wild' },
      { item: 'Mũere', meaning: 'Millet porridge', pronunciation: 'muu-e-re', preparation: 'porridge', cultural_note: 'Traditional grain porridge, very nutritious' },
      { item: 'Mũbia', meaning: 'Sorghum', pronunciation: 'muu-bi-a', preparation: 'porridge/beer', cultural_note: 'Traditional grain, used for brewing' },
      { item: 'Ngwaci', meaning: 'Sweet potatoes', pronunciation: 'ngwa-ci', preparation: 'boiled/roasted', cultural_note: 'Important root crop, especially during dry season' },
      { item: 'Njũgũ', meaning: 'Groundnuts/Peanuts', pronunciation: 'n-juu-guu', preparation: 'roasted/sauce', cultural_note: 'Protein-rich nuts, made into paste' },
      { item: 'Nyama ya ng\'ombe', meaning: 'Beef', pronunciation: 'nya-ma ya ngo-mbe', preparation: 'roasted', cultural_note: 'Most prized meat, eaten during celebrations' },
      { item: 'Mboco', meaning: 'Beans', pronunciation: 'm-bo-co', preparation: 'boiled', cultural_note: 'Important protein source, often mixed with maize' },
      { item: 'Iria', meaning: 'Milk', pronunciation: 'i-ri-a', preparation: 'fresh/sour', cultural_note: 'From cows and goats, sometimes fermented' },
      { item: 'Mbemba', meaning: 'Maize/Corn', pronunciation: 'm-bem-ba', preparation: 'various', cultural_note: 'Modern staple, ground into flour for ugali' },
      { item: 'Ũũkĩ', meaning: 'Honey', pronunciation: 'uu-u-kii', preparation: 'raw', cultural_note: 'Traditional sweetener, used for brewing honey beer' },
      { item: 'Ũkĩ', meaning: 'Traditional beer', pronunciation: 'uu-kii', preparation: 'fermented', cultural_note: 'Made from millet or sorghum, for ceremonies' },
      { item: 'Mboga ya Kĩkamba', meaning: 'Traditional vegetables', pronunciation: 'm-bo-ga ya kii-kam-ba', preparation: 'boiled', cultural_note: 'Wild and cultivated greens, very nutritious' },
      { item: 'Mũtomo', meaning: 'Traditional porridge', pronunciation: 'muu-to-mo', preparation: 'cooked', cultural_note: 'Nutritious porridge made from mixed grains' }
    ],

    body_parts: [
      { body_part: 'Mũtwe', meaning: 'Head', pronunciation: 'muut-we' },
      { body_part: 'Riitho', meaning: 'Eye', pronunciation: 'ri-i-tho' },
      { body_part: 'Gũtũ', meaning: 'Ear', pronunciation: 'guu-tuu' },
      { body_part: 'Inyũa', meaning: 'Nose', pronunciation: 'i-nyuu-a' },
      { body_part: 'Kanua', meaning: 'Mouth', pronunciation: 'ka-nu-a' },
      { body_part: 'Rũrĩmĩ', meaning: 'Tongue', pronunciation: 'ruu-rii-mii' },
      { body_part: 'Igego', meaning: 'Tooth', pronunciation: 'i-ge-go' },
      { body_part: 'Ngingo', meaning: 'Neck', pronunciation: 'ngi-ngo' },
      { body_part: 'Mwĩrĩ', meaning: 'Body', pronunciation: 'mwii-rii' },
      { body_part: 'Gũoko', meaning: 'Arm', pronunciation: 'guu-o-ko' },
      { body_part: 'Guoko', meaning: 'Hand', pronunciation: 'gu-o-ko' },
      { body_part: 'Kĩara', meaning: 'Finger', pronunciation: 'kii-a-ra' },
      { body_part: 'Gĩthũri', meaning: 'Chest', pronunciation: 'gii-thuu-ri' },
      { body_part: 'Nda', meaning: 'Stomach/Belly', pronunciation: 'n-da' },
      { body_part: 'Mũgongo', meaning: 'Back', pronunciation: 'muu-gon-go' },
      { body_part: 'Kũgũrũ', meaning: 'Leg', pronunciation: 'kuu-guu-ruu' },
      { body_part: 'Kĩgere', meaning: 'Foot', pronunciation: 'kii-ge-re' },
      { body_part: 'Ngoro', meaning: 'Heart', pronunciation: 'ngo-ro' },
      { body_part: 'Meciiria', meaning: 'Mind/Thoughts', pronunciation: 'me-ci-i-ri-a' },
      { body_part: 'Thakame', meaning: 'Blood', pronunciation: 'tha-ka-me' }
    ],

    nature: [
      { element: 'Riũa', meaning: 'Sun', pronunciation: 'ri-uu-a', description: 'Source of light and warmth' },
      { element: 'Mweri', meaning: 'Moon', pronunciation: 'mwe-ri', description: 'Night light, marks months' },
      { element: 'Njata', meaning: 'Star', pronunciation: 'n-ja-ta', description: 'Points of light in night sky' },
      { element: 'Igũrũ', meaning: 'Sky', pronunciation: 'i-guu-ruu', description: 'The heavens above' },
      { element: 'Mbura', meaning: 'Rain', pronunciation: 'm-bu-ra', description: 'Life-giving water from sky' },
      { element: 'Rũhuho', meaning: 'Wind', pronunciation: 'ruu-hu-ho', description: 'Moving air, brings weather changes' },
      { element: 'Itu', meaning: 'Cloud', pronunciation: 'I-tu', description: 'Water vapor in sky' },
      { element: 'Thĩ', meaning: 'Earth/Soil', pronunciation: 'THII', description: 'Ground we walk on, grows crops' },
      { element: 'Kĩrĩma', meaning: 'Mountain/Hill', pronunciation: 'kii-rii-ma', description: 'High land formation' },
      { element: 'Rũũĩ', meaning: 'River', pronunciation: 'ruu-u-ii', description: 'Flowing water, source of life' },
      { element: 'Mũtitũ', meaning: 'Forest', pronunciation: 'muu-ti-tuu', description: 'Dense area of trees' },
      { element: 'Nyeki', meaning: 'Grass', pronunciation: 'nye-ki', description: 'Ground covering, food for animals' },
      { element: 'Ihiga', meaning: 'Stone/Rock', pronunciation: 'i-hi-ga', description: 'Hard mineral formation' },
      { element: 'Mwaki', meaning: 'Fire', pronunciation: 'mwa-ki', description: 'Flame for cooking and warmth' },
      { element: 'Mũtĩ', meaning: 'Tree', pronunciation: 'muu-tii', description: 'Tall plant, source of wood and shade' }
    ],

    occupations: [
      { occupation: 'Mũrutani', meaning: 'Teacher', pronunciation: 'muu-ru-ta-ni', description: 'One who educates children and adults' },
      { occupation: 'Mũthondeki', meaning: 'Doctor/Healer', pronunciation: 'muu-thon-de-ki', description: 'Medical practitioner, traditional or modern' },
      { occupation: 'Mũrĩmi', meaning: 'Farmer', pronunciation: 'muu-rii-mi', description: 'One who cultivates crops' },
      { occupation: 'Mũrĩithi', meaning: 'Herder', pronunciation: 'muu-ri-i-thi', description: 'One who tends cattle and livestock' },
      { occupation: 'Mũthũngi', meaning: 'Trader/Merchant', pronunciation: 'muu-thuun-gi', description: 'One who buys and sells goods' },
      { occupation: 'Mwaki', meaning: 'Builder/Constructor', pronunciation: 'mwa-ki', description: 'One who constructs houses and buildings' },
      { occupation: 'Mũturi', meaning: 'Blacksmith', pronunciation: 'muu-tu-ri', description: 'Traditional metalworker, makes tools' },
      { occupation: 'Mũtongoria', meaning: 'Leader/Chief', pronunciation: 'muu-ton-go-ri-a', description: 'Community leader, decision maker' },
      { occupation: 'Mũgo', meaning: 'Traditional healer', pronunciation: 'muu-go', description: 'Spiritual healer using herbs and rituals' },
      { occupation: 'Mũguĩmi', meaning: 'Hunter', pronunciation: 'muu-gu-ii-mi', description: 'One who hunts wild animals' },
      { occupation: 'Mũũmbi', meaning: 'Potter', pronunciation: 'muu-u-mbi', description: 'One who makes clay pots and vessels' },
      { occupation: 'Mũtumi', meaning: 'Weaver', pronunciation: 'muu-tu-mi', description: 'One who weaves baskets and mats' },
      { occupation: 'Mũciarithia', meaning: 'Midwife', pronunciation: 'muu-ci-a-ri-thi-a', description: 'Traditional birth attendant' },
      { occupation: 'Mũini', meaning: 'Singer/Musician', pronunciation: 'muu-i-ni', description: 'Traditional musician and storyteller' },
      { occupation: 'Mũtũmia', meaning: 'Messenger', pronunciation: 'muu-tuu-mi-a', description: 'One who carries messages between communities' }
    ],

    months: [
      { month: 'Mwai wa mbee', meaning: 'January', pronunciation: 'mwai wa m-be-e', season: 'dry', activities: 'Land preparation, planning' },
      { month: 'Mwai wa keerĩ', meaning: 'February', pronunciation: 'mwai wa ke-e-rii', season: 'dry', activities: 'Tool preparation, waiting for rains' },
      { month: 'Mwai wa gatatũ', meaning: 'March', pronunciation: 'mwai wa ga-ta-tuu', season: 'wet', activities: 'First planting season begins' },
      { month: 'Mwai wa kana', meaning: 'April', pronunciation: 'mwai wa ka-na', season: 'wet', activities: 'Heavy rains, main planting' },
      { month: 'Mwai wa gatano', meaning: 'May', pronunciation: 'mwai wa ga-ta-no', season: 'wet', activities: 'Crop growth, weeding' },
      { month: 'Mwai wa gatandatũ', meaning: 'June', pronunciation: 'mwai wa ga-tan-da-tuu', season: 'dry', activities: 'Dry season begins, early harvest' },
      { month: 'Mwai wa mũgwanja', meaning: 'July', pronunciation: 'mwai wa muu-gwan-ja', season: 'dry', activities: 'Cool dry season, harvest' },
      { month: 'Mwai wa kanana', meaning: 'August', pronunciation: 'mwai wa ka-na-na', season: 'dry', activities: 'Main harvest season' },
      { month: 'Mwai wa kenda', meaning: 'September', pronunciation: 'mwai wa ken-da', season: 'wet', activities: 'Second planting season' },
      { month: 'Mwai wa ikũmi', meaning: 'October', pronunciation: 'mwai wa i-kuu-mi', season: 'wet', activities: 'Short rains, late planting' },
      { month: 'Mwai wa ikũmi na ũmwe', meaning: 'November', pronunciation: 'mwai wa i-kuu-mi na uum-we', season: 'wet', activities: 'Harvest time, celebrations' },
      { month: 'Mwai wa ikũmi na eerĩ', meaning: 'December', pronunciation: 'mwai wa i-kuu-mi na e-e-rii', season: 'dry', activities: 'Major harvest, ceremonies, dry season' }
    ],

    names: [
      { name: 'Musyoka', meaning: 'Born during market day', gender: 'male', occasion: 'market day', cultural_note: 'Very common Kamba name connecting to trade' },
      { name: 'Kavata', meaning: 'Born during dry season', gender: 'female', occasion: 'dry season', cultural_note: 'Seasonal birth name for girls' },
      { name: 'Mutua', meaning: 'Born during rain', gender: 'male', occasion: 'rainy weather', cultural_note: 'Rain is considered blessing' },
      { name: 'Nduku', meaning: 'Born during night', gender: 'female', occasion: 'night birth', cultural_note: 'Night birth name for girls' },
      { name: 'Kioko', meaning: 'Born during celebration', gender: 'male', occasion: 'festive time', cultural_note: 'Marks joyous occasions' },
      { name: 'Wayua', meaning: 'Born during sunny weather', gender: 'female', occasion: 'sunny day', cultural_note: 'Sunshine brings good fortune' },
      { name: 'Muthama', meaning: 'Born during difficult times', gender: 'male', occasion: 'hardship', cultural_note: 'Marks challenging circumstances' },
      { name: 'Katua', meaning: 'Born during journey', gender: 'female', occasion: 'travel/journey', cultural_note: 'Marks birth during travel' },
      { name: 'Nzomo', meaning: 'Born during harvest', gender: 'male', occasion: 'harvest season', cultural_note: 'Agricultural activity name' },
      { name: 'Mumbua', meaning: 'Born during planting season', gender: 'female', occasion: 'planting time', cultural_note: 'Farming season name' },
      { name: 'Kilonzo', meaning: 'Born during ceremony', gender: 'male', occasion: 'ceremonial event', cultural_note: 'Marks important cultural celebration' },
      { name: 'Syombua', meaning: 'Born during grazing time', gender: 'female', occasion: 'cattle grazing', cultural_note: 'Pastoral activity name' },
      { name: 'Mwangi', meaning: 'Born during migration', gender: 'male', occasion: 'movement/migration', cultural_note: 'Marks family movement' },
      { name: 'Kalondu', meaning: 'Born during milking time', gender: 'female', occasion: 'milking time', cultural_note: 'Connects to pastoral lifestyle' },
      { name: 'Muema', meaning: 'Born during good times', gender: 'male', occasion: 'prosperity', cultural_note: 'Marks period of abundance' }
    ],

    proverbs: [
      { proverb: 'Mwana ũtaigua mau wake ndaigua a andu angĩ', meaning: 'A child who doesn\'t listen to their mother won\'t listen to others', lesson: 'Importance of parental guidance', context: 'Child discipline and respect' },
      { proverb: 'Ng\'ombe ĩmwe ndĩthondekaga rũũru', meaning: 'One cow doesn\'t make a herd', lesson: 'Unity and cooperation are essential', context: 'Community and teamwork' },
      { proverb: 'Maĩ matathiĩaga ndĩthiĩaga mahiga', meaning: 'Water that doesn\'t flow doesn\'t move stones', lesson: 'Persistence and continuous effort achieve results', context: 'Hard work and determination' },
      { proverb: 'Mũtĩ ũtakwataga rũhuho ndũtemaga', meaning: 'A tree that doesn\'t bend with wind doesn\'t break', lesson: 'Flexibility and adaptation are necessary', context: 'Adaptability in life' },
      { proverb: 'Mũrata ũtaonaga ng\'ombe ciaku ndaonaga mathina maku', meaning: 'A friend who doesn\'t see your cattle doesn\'t see your problems', lesson: 'True friends share in both prosperity and hardship', context: 'Friendship and loyalty' },
      { proverb: 'Mũciĩ ũtaine arata ndũgaagĩra', meaning: 'A home without friends doesn\'t prosper', lesson: 'Community and friendship are vital', context: 'Social relationships' },
      { proverb: 'Kyakulya kĩtarĩĩtwo ũmũnthĩ kĩtarĩĩtwo rũciũ', meaning: 'Food not eaten today won\'t be eaten tomorrow', lesson: 'Take opportunities when they come', context: 'Seizing opportunities' },
      { proverb: 'Mũrutani ũtamenyaga sukũũ ndamenyaga wĩra', meaning: 'A teacher who doesn\'t know school doesn\'t know work', lesson: 'Knowledge of your field is essential', context: 'Professional competence' },
      { proverb: 'Ng\'ombe ciothe ti nzeo, na ng\'ombe ciothe ti nũũru', meaning: 'Not all cattle are good, and not all cattle are bad', lesson: 'Avoid generalizations, judge individually', context: 'Fair judgment' },
      { proverb: 'Mwana ũtasomaga ndakwataga ũũgĩ', meaning: 'A child who doesn\'t study doesn\'t gain wisdom', lesson: 'Education requires effort and dedication', context: 'Importance of education' }
    ],

    cultural_practices: [
      { practice: 'Kilumi', meaning: 'Circumcision ceremony', occasion: 'Coming of age', significance: 'Transition from childhood to adulthood', description: 'Traditional initiation rite for boys and girls' },
      { practice: 'Ndũũo', meaning: 'Marriage ceremony', occasion: 'Wedding', significance: 'Union of two families', description: 'Traditional wedding with dowry payment and celebrations' },
      { practice: 'Kũrathima', meaning: 'Blessing ceremony', occasion: 'Various life events', significance: 'Seeking divine favor', description: 'Elder\'s blessing for important undertakings' },
      { practice: 'Kũhe rĩĩtwa', meaning: 'Naming ceremony', occasion: 'Birth', significance: 'Identity and belonging', description: 'Traditional ceremony to name and welcome newborn' },
      { practice: 'Kũhooya maitu', meaning: 'Ancestral worship', occasion: 'Spiritual ceremonies', significance: 'Connection with ancestors', description: 'Rituals to honor and communicate with ancestors' },
      { practice: 'Ngũgũ', meaning: 'Harvest ceremony', occasion: 'Harvest season', significance: 'Thanksgiving for good harvest', description: 'Community celebration of successful harvest' },
      { practice: 'Kũhooya mbura', meaning: 'Rain ceremony', occasion: 'Drought periods', significance: 'Seeking rain and water', description: 'Traditional rainmaking ceremony during dry seasons' },
      { practice: 'Kũrathima ng\'ombe', meaning: 'Cattle blessing', occasion: 'Livestock ceremonies', significance: 'Livestock prosperity', description: 'Ritual blessing of cattle for health and fertility' },
      { practice: 'Baraza', meaning: 'Community meeting', occasion: 'Important decisions', significance: 'Democratic participation', description: 'Traditional council meeting for community issues' },
      { practice: 'Mũcemanio', meaning: 'Cultural festival', occasion: 'Annual celebrations', significance: 'Cultural preservation', description: 'Annual festival celebrating Kamba culture and traditions' }
    ]
  },

  // LUHYA CONTENT - COMPREHENSIVE
  luhya: {
    basic_words: [
      // Greetings & Courtesy
      { word: 'Muraho?', meaning: 'How are you?', pronunciation: 'mu-RA-ho', category: 'greeting' },
      { word: 'Webale', meaning: 'Thank you', pronunciation: 'we-BA-le', category: 'courtesy' },
      { word: 'Karibu', meaning: 'Welcome', pronunciation: 'ka-RI-bu', category: 'courtesy' },
      { word: 'Musonyiwe', meaning: 'Sorry/Excuse me', pronunciation: 'mu-son-YI-we', category: 'courtesy' },
      { word: 'Papa', meaning: 'Father/Sir', pronunciation: 'PA-pa', category: 'courtesy' },
      { word: 'Mama', meaning: 'Mother/Madam', pronunciation: 'MA-ma', category: 'courtesy' },
      
      // Common Adjectives
      { word: 'Bulahi', meaning: 'Good/Beautiful', pronunciation: 'bu-LA-hi', category: 'adjective' },
      { word: 'Bubi', meaning: 'Bad/Evil', pronunciation: 'BU-bi', category: 'adjective' },
      { word: 'Bunene', meaning: 'Big/Large', pronunciation: 'bu-NE-ne', category: 'adjective' },
      { word: 'Butoto', meaning: 'Small/Little', pronunciation: 'bu-TO-to', category: 'adjective' },
      { word: 'Bulai', meaning: 'Tall/Long', pronunciation: 'bu-LAI', category: 'adjective' },
      { word: 'Bufupi', meaning: 'Short', pronunciation: 'bu-FU-pi', category: 'adjective' },
      { word: 'Bupya', meaning: 'New', pronunciation: 'bu-PYA', category: 'adjective' },
      { word: 'Bukulu', meaning: 'Old', pronunciation: 'bu-KU-lu', category: 'adjective' },
      { word: 'Butune', meaning: 'Red', pronunciation: 'bu-TU-ne', category: 'adjective' },
      { word: 'Bueru', meaning: 'White', pronunciation: 'bu-E-ru', category: 'adjective' },
      
      // Essential Nouns
      { word: 'Ebyakulya', meaning: 'Food', pronunciation: 'e-bya-ku-LYA', category: 'noun' },
      { word: 'Amanji', meaning: 'Water', pronunciation: 'a-man-JI', category: 'noun' },
      { word: 'Enju', meaning: 'House', pronunciation: 'en-JU', category: 'noun' },
      { word: 'Ewaka', meaning: 'Home/Village', pronunciation: 'e-WA-ka', category: 'noun' },
      { word: 'Omukwano', meaning: 'Friend', pronunciation: 'o-mu-kwa-NO', category: 'noun' },
      { word: 'Esukulu', meaning: 'School', pronunciation: 'e-su-KU-lu', category: 'noun' },
      { word: 'Emilimu', meaning: 'Work/Job', pronunciation: 'e-mi-LI-mu', category: 'noun' },
      { word: 'Ensimbi', meaning: 'Money', pronunciation: 'en-sim-BI', category: 'noun' },
      { word: 'Ekitabu', meaning: 'Book', pronunciation: 'e-ki-ta-BU', category: 'noun' },
      { word: 'Omuti', meaning: 'Tree', pronunciation: 'o-mu-TI', category: 'noun' },
      { word: 'Enjira', meaning: 'Road/Path', pronunciation: 'en-JI-ra', category: 'noun' },
      
      // Common Verbs
      { word: 'Kugenda', meaning: 'To go', pronunciation: 'ku-gen-DA', category: 'verb' },
      { word: 'Kujja', meaning: 'To come', pronunciation: 'ku-JJA', category: 'verb' },
      { word: 'Okulya', meaning: 'To eat', pronunciation: 'o-ku-LYA', category: 'verb' },
      { word: 'Okunywa', meaning: 'To drink', pronunciation: 'o-ku-nywa', category: 'verb' },
      { word: 'Okwebaka', meaning: 'To sleep', pronunciation: 'ok-we-ba-KA', category: 'verb' },
      { word: 'Okusoma', meaning: 'To read/study', pronunciation: 'o-ku-so-MA', category: 'verb' },
      { word: 'Okuwandika', meaning: 'To write', pronunciation: 'o-ku-wan-di-KA', category: 'verb' },
      { word: 'Okwogera', meaning: 'To say/speak', pronunciation: 'ok-wo-ge-RA', category: 'verb' },
      { word: 'Okulaba', meaning: 'To see', pronunciation: 'o-ku-la-BA', category: 'verb' },
      { word: 'Okuwulira', meaning: 'To hear', pronunciation: 'o-ku-wu-li-RA', category: 'verb' },
      
      // Time & Direction
      { word: 'Lero', meaning: 'Today', pronunciation: 'LE-ro', category: 'time' },
      { word: 'Enkya', meaning: 'Tomorrow', pronunciation: 'en-KYA', category: 'time' },
      { word: 'Jjo', meaning: 'Yesterday', pronunciation: 'JJO', category: 'time' },
      { word: 'Essaawa', meaning: 'Hour/Time', pronunciation: 'es-sa-a-WA', category: 'time' },
      { word: 'Enkya ku makya', meaning: 'Morning', pronunciation: 'en-KYA ku ma-KYA', category: 'time' },
      { word: 'Akawungeezi', meaning: 'Evening', pronunciation: 'a-ka-wun-ge-e-ZI', category: 'time' }
    ],

    greetings: [
      { greeting: 'Muraho?', response: 'Muraho', meaning: 'How are you? - Fine', pronunciation: 'mu-RA-ho', context: 'General greeting', time_of_day: 'any', cultural_note: 'Most common Luhya greeting' },
      { greeting: 'Mwasuze mutya?', response: 'Bulungi', meaning: 'How did you wake up? - Well', pronunciation: 'mwa-su-ze mu-TYA / bu-lun-GI', context: 'Morning greeting', time_of_day: 'morning', cultural_note: 'Traditional morning greeting' },
      { greeting: 'Muli mutya?', response: 'Tuli bulungi', meaning: 'How are you all? - We are fine', pronunciation: 'mu-li mu-TYA / tu-li bu-lun-GI', context: 'Family greeting', time_of_day: 'any', cultural_note: 'Shows concern for entire family' },
      { greeting: 'Karibu', response: 'Webale', meaning: 'Welcome - Thank you', pronunciation: 'ka-RI-bu / we-BA-le', context: 'Welcoming someone', time_of_day: 'any', cultural_note: 'Warm welcome to visitors' },
      { greeting: 'Olwawungeezi lulungi?', response: 'Lulungi', meaning: 'Is the evening good? - It is good', pronunciation: 'ol-wa-wun-ge-e-zi lu-lun-GI / lu-lun-GI', context: 'Evening greeting', time_of_day: 'evening', cultural_note: 'Respectful evening greeting' },
      { greeting: 'Olunaku lulungi', response: 'Eee, lulungi', meaning: 'The day is good - Yes, it is good', pronunciation: 'o-lu-na-ku lu-lun-GI / e-e-e lu-lun-GI', context: 'Daytime greeting', time_of_day: 'day', cultural_note: 'Acknowledging a beautiful day' },
      { greeting: 'Webake bulungi', response: 'Nawe', meaning: 'Sleep well - You too', pronunciation: 'we-ba-ke bu-lun-GI / na-WE', context: 'Goodnight', time_of_day: 'night', cultural_note: 'Wishing peaceful sleep' },
      { greeting: 'Jja bulungi', response: 'Webale', meaning: 'Come well/Welcome - Thank you', pronunciation: 'JJA bu-lun-GI / we-BA-le', context: 'Welcoming someone', time_of_day: 'any', cultural_note: 'Blessing for visitors' },
      { greeting: 'Genda bulungi', response: 'Webale', meaning: 'Go well - Thank you', pronunciation: 'gen-da bu-lun-GI / we-BA-le', context: 'Farewell', time_of_day: 'any', cultural_note: 'Blessing for safe journey' },
      { greeting: 'Emilimu egenda etya?', response: 'Egenda bulungi', meaning: 'How is work going? - Going well', pronunciation: 'e-mi-LI-mu e-gen-da e-TYA / e-gen-da bu-lun-GI', context: 'Work inquiry', time_of_day: 'any', cultural_note: 'Shows interest in livelihood' }
    ],

    numbers: [
      { number: 1, word: 'Kamo', pronunciation: 'ka-MO' },
      { number: 2, word: 'Bibiri', pronunciation: 'bi-BI-ri' },
      { number: 3, word: 'Bisatu', pronunciation: 'bi-sa-TU' },
      { number: 4, word: 'Bina', pronunciation: 'BI-na' },
      { number: 5, word: 'Bitaano', pronunciation: 'bi-ta-a-NO' },
      { number: 6, word: 'Mukaaga', pronunciation: 'mu-ka-a-GA' },
      { number: 7, word: 'Musanvu', pronunciation: 'mu-san-VU' },
      { number: 8, word: 'Munaana', pronunciation: 'mu-na-a-NA' },
      { number: 9, word: 'Mwenda', pronunciation: 'mwen-DA' },
      { number: 10, word: 'Ikumi', pronunciation: 'i-ku-MI' },
      { number: 11, word: 'Ikumi na kamo', pronunciation: 'i-ku-MI na ka-MO' },
      { number: 12, word: 'Ikumi na bibiri', pronunciation: 'i-ku-MI na bi-BI-ri' },
      { number: 15, word: 'Ikumi na bitaano', pronunciation: 'i-ku-MI na bi-ta-a-NO' },
      { number: 20, word: 'Amakumi abiri', pronunciation: 'a-ma-ku-MI a-BI-ri' },
      { number: 30, word: 'Amakumi asatu', pronunciation: 'a-ma-ku-MI a-sa-TU' },
      { number: 40, word: 'Amakumi ana', pronunciation: 'a-ma-ku-MI a-NA' },
      { number: 50, word: 'Amakumi ataano', pronunciation: 'a-ma-ku-MI a-ta-a-NO' },
      { number: 100, word: 'Kikumi', pronunciation: 'ki-ku-MI' },
      { number: 1000, word: 'Lukumi', pronunciation: 'lu-ku-MI' }
    ],

    family: [
      { relationship: 'Papa', meaning: 'Father', pronunciation: 'PA-pa', gender: 'male', cultural_note: 'Head of family, respected authority figure' },
      { relationship: 'Mama', meaning: 'Mother', pronunciation: 'MA-ma', gender: 'female', cultural_note: 'Caregiver and family organizer' },
      { relationship: 'Omwana', meaning: 'Child', pronunciation: 'om-wa-NA', gender: 'neutral', cultural_note: 'Beloved children, future of family' },
      { relationship: 'Omulenzi', meaning: 'Son', pronunciation: 'o-mu-len-ZI', gender: 'male', cultural_note: 'Male child, inherits family name' },
      { relationship: 'Omuwala', meaning: 'Daughter', pronunciation: 'o-mu-wa-LA', gender: 'female', cultural_note: 'Female child, precious to family' },
      { relationship: 'Muganda', meaning: 'Brother', pronunciation: 'mu-gan-DA', gender: 'male', cultural_note: 'Male sibling, important family bond' },
      { relationship: 'Mwannyina', meaning: 'Sister', pronunciation: 'mwan-nyi-NA', gender: 'female', cultural_note: 'Female sibling, close relationship' },
      { relationship: 'Jjajja', meaning: 'Grandfather', pronunciation: 'JJA-jja', gender: 'male', cultural_note: 'Elder, keeper of traditions and wisdom' },
      { relationship: 'Nyaabo', meaning: 'Grandmother', pronunciation: 'nya-a-BO', gender: 'female', cultural_note: 'Elder woman, source of cultural knowledge' },
      { relationship: 'Kojja', meaning: 'Uncle (father\'s brother)', pronunciation: 'ko-JJA', gender: 'male', cultural_note: 'Important male relative, second father' },
      { relationship: 'Ssenga', meaning: 'Aunt (father\'s sister)', pronunciation: 'ssen-GA', gender: 'female', cultural_note: 'Father\'s sister, respected family member' },
      { relationship: 'Maama omuto', meaning: 'Uncle (mother\'s brother)', pronunciation: 'ma-a-ma o-mu-TO', gender: 'male', cultural_note: 'Mother\'s brother, special relationship' },
      { relationship: 'Maama omukulu', meaning: 'Aunt (mother\'s sister)', pronunciation: 'ma-a-ma o-mu-ku-LU', gender: 'female', cultural_note: 'Mother\'s sister, like second mother' },
      { relationship: 'Omuzzukulu', meaning: 'Grandchild', pronunciation: 'o-muz-zu-ku-LU', gender: 'neutral', cultural_note: 'Beloved grandchildren, future of family' },
      { relationship: 'Mukoddomi', meaning: 'In-law', pronunciation: 'mu-kod-do-MI', gender: 'neutral', cultural_note: 'Family member through marriage' },
      { relationship: 'Mukyala', meaning: 'Wife', pronunciation: 'mu-kya-LA', gender: 'female', cultural_note: 'Married woman, life partner' }
    ],

    colors: [
      { color: 'Butune', meaning: 'Red', pronunciation: 'bu-TU-ne', description: 'Color of blood, earth, and traditional ochre' },
      { color: 'Bueru', meaning: 'White', pronunciation: 'bu-E-ru', description: 'Color of milk, clouds, and purity' },
      { color: 'Buddugavu', meaning: 'Black', pronunciation: 'bud-du-ga-VU', description: 'Color of night, charcoal, and fertile soil' },
      { color: 'Bulabira', meaning: 'Green', pronunciation: 'bu-la-BI-ra', description: 'Color of grass, leaves, and growing crops' },
      { color: 'Bulangira', meaning: 'Blue', pronunciation: 'bu-lan-gi-RA', description: 'Color of sky and distant hills' },
      { color: 'Bujjanjalo', meaning: 'Yellow', pronunciation: 'buj-jan-ja-LO', description: 'Color of sun, ripe bananas, and maize' },
      { color: 'Bukadde', meaning: 'Brown', pronunciation: 'bu-kad-DE', description: 'Color of tree bark and dried grass' },
      { color: 'Bupinki', meaning: 'Pink', pronunciation: 'bu-pin-KI', description: 'Light red color, like dawn sky' },
      { color: 'Bujivu', meaning: 'Gray', pronunciation: 'bu-ji-VU', description: 'Color of ash and cloudy sky' },
      { color: 'Bujjanjalo obulungi', meaning: 'Orange', pronunciation: 'buj-jan-ja-LO o-bu-lun-GI', description: 'Color of ripe oranges and sunset' }
    ],

    animals: [
      { animal: 'Ente', meaning: 'Cow/Cattle', pronunciation: 'en-TE', habitat: 'homestead', cultural_note: 'Most important livestock, symbol of wealth' },
      { animal: 'Embuzi', meaning: 'Goat', pronunciation: 'em-bu-ZI', habitat: 'homestead', cultural_note: 'Common livestock, used for ceremonies' },
      { animal: 'Endiga', meaning: 'Sheep', pronunciation: 'en-di-GA', habitat: 'homestead', cultural_note: 'Kept for wool and meat' },
      { animal: 'Embwa', meaning: 'Dog', pronunciation: 'em-BWA', habitat: 'homestead', cultural_note: 'Guardian of home, hunting companion' },
      { animal: 'Akanyau', meaning: 'Cat', pronunciation: 'a-ka-nyau', habitat: 'homestead', cultural_note: 'Keeps rodents away from grain stores' },
      { animal: 'Enkoko', meaning: 'Chicken', pronunciation: 'en-ko-KO', habitat: 'homestead', cultural_note: 'Source of eggs and meat, used in rituals' },
      { animal: 'Empologoma', meaning: 'Lion', pronunciation: 'em-po-lo-go-MA', habitat: 'wild', cultural_note: 'King of beasts, symbol of courage' },
      { animal: 'Engo', meaning: 'Leopard', pronunciation: 'en-GO', habitat: 'wild', cultural_note: 'Stealthy hunter, respected and feared' },
      { animal: 'Enjovu', meaning: 'Elephant', pronunciation: 'en-jo-VU', habitat: 'wild', cultural_note: 'Largest land animal, symbol of strength' },
      { animal: 'Embogo', meaning: 'Buffalo', pronunciation: 'em-bo-GO', habitat: 'wild', cultural_note: 'Strong wild animal, dangerous when provoked' },
      { animal: 'Empongo', meaning: 'Antelope', pronunciation: 'em-pon-GO', habitat: 'wild', cultural_note: 'Swift graceful animal, hunted for meat' },
      { animal: 'Ennyonyi', meaning: 'Bird', pronunciation: 'en-nyo-NYI', habitat: 'air', cultural_note: 'Messengers, some species are totems' },
      { animal: 'Enkima', meaning: 'Monkey', pronunciation: 'en-ki-MA', habitat: 'trees', cultural_note: 'Clever animals, sometimes crop raiders' },
      { animal: 'Empisi', meaning: 'Hyena', pronunciation: 'em-pi-SI', habitat: 'wild', cultural_note: 'Scavenger, associated with night and mystery' },
      { animal: 'Akamyu', meaning: 'Hare', pronunciation: 'a-ka-MYU', habitat: 'wild', cultural_note: 'Clever trickster in traditional stories' }
    ],

    food: [
      { item: 'Obusima', meaning: 'Ugali (cornmeal)', pronunciation: 'o-bu-si-MA', preparation: 'cooked', cultural_note: 'Main staple food, eaten with every meal' },
      { item: 'Ennyama', meaning: 'Meat', pronunciation: 'en-nya-MA', preparation: 'roasted/stewed', cultural_note: 'Usually beef, goat, or chicken' },
      { item: 'Emboga', meaning: 'Vegetables/Greens', pronunciation: 'em-bo-GA', preparation: 'boiled', cultural_note: 'Nutritious leafy vegetables, often wild' },
      { item: 'Obulo', meaning: 'Millet porridge', pronunciation: 'o-bu-LO', preparation: 'porridge', cultural_note: 'Traditional grain porridge, very nutritious' },
      { item: 'Amasere', meaning: 'Sorghum', pronunciation: 'a-ma-se-RE', preparation: 'porridge/beer', cultural_note: 'Traditional grain, used for brewing' },
      { item: 'Ebyamagufa', meaning: 'Sweet potatoes', pronunciation: 'e-bya-ma-gu-FA', preparation: 'boiled/roasted', cultural_note: 'Important root crop, especially during dry season' },
      { item: 'Ebinyebwa', meaning: 'Groundnuts/Peanuts', pronunciation: 'e-bi-nye-BWA', preparation: 'roasted/sauce', cultural_note: 'Protein-rich nuts, made into paste' },
      { item: 'Ennyama y\'ente', meaning: 'Beef', pronunciation: 'en-nya-ma yen-TE', preparation: 'roasted', cultural_note: 'Most prized meat, eaten during celebrations' },
      { item: 'Ebijanjalo', meaning: 'Beans', pronunciation: 'e-bi-jan-ja-LO', preparation: 'boiled', cultural_note: 'Important protein source, often mixed with maize' },
      { item: 'Amata', meaning: 'Milk', pronunciation: 'a-ma-TA', preparation: 'fresh/sour', cultural_note: 'From cows and goats, sometimes fermented' },
      { item: 'Emmere', meaning: 'Maize/Corn', pronunciation: 'em-me-RE', preparation: 'various', cultural_note: 'Modern staple, ground into flour for ugali' },
      { item: 'Omubisi gw\'enjuki', meaning: 'Honey', pronunciation: 'o-mu-bi-si gwen-ju-KI', preparation: 'raw', cultural_note: 'Traditional sweetener, used for brewing honey beer' },
      { item: 'Amaluwa', meaning: 'Traditional beer', pronunciation: 'a-ma-lu-WA', preparation: 'fermented', cultural_note: 'Made from millet or sorghum, for ceremonies' },
      { item: 'Emboga za Luhya', meaning: 'Traditional vegetables', pronunciation: 'em-bo-ga za lu-HYA', preparation: 'boiled', cultural_note: 'Wild and cultivated greens, very nutritious' },
      { item: 'Obusuma', meaning: 'Traditional porridge', pronunciation: 'o-bu-su-MA', preparation: 'cooked', cultural_note: 'Nutritious porridge made from mixed grains' }
    ],

    body_parts: [
      { body_part: 'Omutwe', meaning: 'Head', pronunciation: 'o-mut-WE' },
      { body_part: 'Eriiso', meaning: 'Eye', pronunciation: 'e-ri-i-SO' },
      { body_part: 'Okutu', meaning: 'Ear', pronunciation: 'o-ku-TU' },
      { body_part: 'Ennyindo', meaning: 'Nose', pronunciation: 'en-nyin-DO' },
      { body_part: 'Akamwa', meaning: 'Mouth', pronunciation: 'a-kam-WA' },
      { body_part: 'Olulimi', meaning: 'Tongue', pronunciation: 'o-lu-li-MI' },
      { body_part: 'Erinnyo', meaning: 'Tooth', pronunciation: 'e-rin-NYO' },
      { body_part: 'Ensingo', meaning: 'Neck', pronunciation: 'en-sin-GO' },
      { body_part: 'Omubiri', meaning: 'Body', pronunciation: 'o-mu-bi-RI' },
      { body_part: 'Omukono', meaning: 'Arm', pronunciation: 'o-mu-ko-NO' },
      { body_part: 'Engalo', meaning: 'Hand', pronunciation: 'en-ga-LO' },
      { body_part: 'Olugalo', meaning: 'Finger', pronunciation: 'o-lu-ga-LO' },
      { body_part: 'Ekifuba', meaning: 'Chest', pronunciation: 'e-ki-fu-BA' },
      { body_part: 'Olubuto', meaning: 'Stomach/Belly', pronunciation: 'o-lu-bu-TO' },
      { body_part: 'Omugongo', meaning: 'Back', pronunciation: 'o-mu-gon-GO' },
      { body_part: 'Okugulu', meaning: 'Leg', pronunciation: 'o-ku-gu-LU' },
      { body_part: 'Ekigere', meaning: 'Foot', pronunciation: 'e-ki-ge-RE' },
      { body_part: 'Omutima', meaning: 'Heart', pronunciation: 'o-mu-ti-MA' },
      { body_part: 'Ebirowoozo', meaning: 'Mind/Thoughts', pronunciation: 'e-bi-ro-wo-o-ZO' },
      { body_part: 'Omusaayi', meaning: 'Blood', pronunciation: 'o-mu-sa-a-YI' }
    ],

    nature: [
      { element: 'Enjuba', meaning: 'Sun', pronunciation: 'en-ju-BA', description: 'Source of light and warmth' },
      { element: 'Omwezi', meaning: 'Moon', pronunciation: 'om-we-ZI', description: 'Night light, marks months' },
      { element: 'Emmunyeenye', meaning: 'Star', pronunciation: 'em-mu-nye-e-NYE', description: 'Points of light in night sky' },
      { element: 'Eggulu', meaning: 'Sky', pronunciation: 'eg-gu-LU', description: 'The heavens above' },
      { element: 'Enkuba', meaning: 'Rain', pronunciation: 'en-ku-BA', description: 'Life-giving water from sky' },
      { element: 'Empewo', meaning: 'Wind', pronunciation: 'em-pe-WO', description: 'Moving air, brings weather changes' },
      { element: 'Ekire', meaning: 'Cloud', pronunciation: 'e-ki-RE', description: 'Water vapor in sky' },
      { element: 'Ettaka', meaning: 'Earth/Soil', pronunciation: 'et-ta-KA', description: 'Ground we walk on, grows crops' },
      { element: 'Olusozi', meaning: 'Mountain/Hill', pronunciation: 'o-lu-so-ZI', description: 'High land formation' },
      { element: 'Omugga', meaning: 'River', pronunciation: 'o-mug-GA', description: 'Flowing water, source of life' },
      { element: 'Ekibira', meaning: 'Forest', pronunciation: 'e-ki-bi-RA', description: 'Dense area of trees' },
      { element: 'Omuddo', meaning: 'Grass', pronunciation: 'o-mud-DO', description: 'Ground covering, food for animals' },
      { element: 'Ejjinja', meaning: 'Stone/Rock', pronunciation: 'ej-jin-JA', description: 'Hard mineral formation' },
      { element: 'Omuliro', meaning: 'Fire', pronunciation: 'o-mu-li-RO', description: 'Flame for cooking and warmth' },
      { element: 'Omuti', meaning: 'Tree', pronunciation: 'o-mu-TI', description: 'Tall plant, source of wood and shade' }
    ],

    occupations: [
      { occupation: 'Omusomesa', meaning: 'Teacher', pronunciation: 'o-mu-so-me-SA', description: 'One who educates children and adults' },
      { occupation: 'Omusawo', meaning: 'Doctor/Healer', pronunciation: 'o-mu-sa-WO', description: 'Medical practitioner, traditional or modern' },
      { occupation: 'Omulimi', meaning: 'Farmer', pronunciation: 'o-mu-li-MI', description: 'One who cultivates crops' },
      { occupation: 'Omulunzi', meaning: 'Herder', pronunciation: 'o-mu-lun-ZI', description: 'One who tends cattle and livestock' },
      { occupation: 'Omusuubuzi', meaning: 'Trader/Merchant', pronunciation: 'o-mu-su-u-bu-ZI', description: 'One who buys and sells goods' },
      { occupation: 'Omuzimbi', meaning: 'Builder/Constructor', pronunciation: 'o-mu-zim-BI', description: 'One who constructs houses and buildings' },
      { occupation: 'Omuweesi', meaning: 'Blacksmith', pronunciation: 'o-mu-we-e-SI', description: 'Traditional metalworker, makes tools' },
      { occupation: 'Omukulembeze', meaning: 'Leader/Chief', pronunciation: 'o-mu-ku-lem-be-ZE', description: 'Community leader, decision maker' },
      { occupation: 'Omufumu', meaning: 'Traditional healer', pronunciation: 'o-mu-fu-MU', description: 'Spiritual healer using herbs and rituals' },
      { occupation: 'Omuyiggi', meaning: 'Hunter', pronunciation: 'o-mu-yig-GI', description: 'One who hunts wild animals' },
      { occupation: 'Omubumbi', meaning: 'Potter', pronunciation: 'o-mu-bum-BI', description: 'One who makes clay pots and vessels' },
      { occupation: 'Omuluka', meaning: 'Weaver', pronunciation: 'o-mu-lu-KA', description: 'One who weaves baskets and mats' },
      { occupation: 'Omuzaalisa', meaning: 'Midwife', pronunciation: 'o-mu-za-a-li-SA', description: 'Traditional birth attendant' },
      { occupation: 'Omuyimbi', meaning: 'Singer/Musician', pronunciation: 'o-mu-yim-BI', description: 'Traditional musician and storyteller' },
      { occupation: 'Omutumwa', meaning: 'Messenger', pronunciation: 'o-mu-tum-WA', description: 'One who carries messages between communities' }
    ],

    months: [
      { month: 'Janwali', meaning: 'January', pronunciation: 'jan-wa-LI', season: 'dry', activities: 'Land preparation, planning' },
      { month: 'Febwali', meaning: 'February', pronunciation: 'feb-wa-LI', season: 'dry', activities: 'Tool preparation, waiting for rains' },
      { month: 'Maaki', meaning: 'March', pronunciation: 'ma-a-KI', season: 'wet', activities: 'First planting season begins' },
      { month: 'Epulo', meaning: 'April', pronunciation: 'e-pu-LO', season: 'wet', activities: 'Heavy rains, main planting' },
      { month: 'Maayi', meaning: 'May', pronunciation: 'ma-a-YI', season: 'wet', activities: 'Crop growth, weeding' },
      { month: 'Juuni', meaning: 'June', pronunciation: 'ju-u-NI', season: 'dry', activities: 'Dry season begins, early harvest' },
      { month: 'Julaayi', meaning: 'July', pronunciation: 'ju-la-a-YI', season: 'dry', activities: 'Cool dry season, harvest' },
      { month: 'Agusito', meaning: 'August', pronunciation: 'a-gu-si-TO', season: 'dry', activities: 'Main harvest season' },
      { month: 'Sebuttemba', meaning: 'September', pronunciation: 'se-but-tem-BA', season: 'wet', activities: 'Second planting season' },
      { month: 'Okitobba', meaning: 'October', pronunciation: 'o-ki-tob-BA', season: 'wet', activities: 'Short rains, late planting' },
      { month: 'Novemba', meaning: 'November', pronunciation: 'no-vem-BA', season: 'wet', activities: 'Harvest time, celebrations' },
      { month: 'Desemba', meaning: 'December', pronunciation: 'de-sem-BA', season: 'dry', activities: 'Major harvest, ceremonies, dry season' }
    ],

    names: [
      { name: 'Wafula', meaning: 'Born during rainy season', gender: 'male', occasion: 'rain', cultural_note: 'Very common Luhya name connecting to rain blessing' },
      { name: 'Nafula', meaning: 'Born during rainy season', gender: 'female', occasion: 'rain', cultural_note: 'Female version of rain season name' },
      { name: 'Wekesa', meaning: 'Born during harvest time', gender: 'male', occasion: 'harvest season', cultural_note: 'Agricultural season name for boys' },
      { name: 'Nekesa', meaning: 'Born during harvest time', gender: 'female', occasion: 'harvest season', cultural_note: 'Female harvest season name' },
      { name: 'Wanjala', meaning: 'Born during famine/difficult times', gender: 'male', occasion: 'hardship', cultural_note: 'Marks challenging circumstances' },
      { name: 'Nanjala', meaning: 'Born during famine/difficult times', gender: 'female', occasion: 'hardship', cultural_note: 'Female hardship birth name' },
      { name: 'Wasike', meaning: 'Born during locust invasion', gender: 'male', occasion: 'locust season', cultural_note: 'Historical name marking agricultural challenges' },
      { name: 'Nasike', meaning: 'Born during locust invasion', gender: 'female', occasion: 'locust season', cultural_note: 'Female locust season name' },
      { name: 'Wanyama', meaning: 'Born when animals were around', gender: 'male', occasion: 'animal presence', cultural_note: 'Pastoral activity name' },
      { name: 'Nanyama', meaning: 'Born when animals were around', gender: 'female', occasion: 'animal presence', cultural_note: 'Female animal presence name' },
      { name: 'Wanyonyi', meaning: 'Born when birds were singing', gender: 'male', occasion: 'bird season', cultural_note: 'Nature-connected name' },
      { name: 'Nanyonyi', meaning: 'Born when birds were singing', gender: 'female', occasion: 'bird season', cultural_note: 'Female bird season name' },
      { name: 'Wekulo', meaning: 'Born during ceremony', gender: 'male', occasion: 'ceremonial event', cultural_note: 'Marks important cultural celebration' },
      { name: 'Nekulo', meaning: 'Born during ceremony', gender: 'female', occasion: 'ceremonial event', cultural_note: 'Female ceremonial birth name' },
      { name: 'Wamukota', meaning: 'Born during market day', gender: 'male', occasion: 'market day', cultural_note: 'Connects to trade and commerce' }
    ],

    proverbs: [
      { proverb: 'Omwana ataliwulira maama we taliwulira bantu balala', meaning: 'A child who doesn\'t listen to their mother won\'t listen to others', lesson: 'Importance of parental guidance', context: 'Child discipline and respect' },
      { proverb: 'Ente emu tezikolera kisibo', meaning: 'One cow doesn\'t make a herd', lesson: 'Unity and cooperation are essential', context: 'Community and teamwork' },
      { proverb: 'Amazzi agatakulukuta tegasimbula majinja', meaning: 'Water that doesn\'t flow doesn\'t move stones', lesson: 'Persistence and continuous effort achieve results', context: 'Hard work and determination' },
      { proverb: 'Omuti ogutakwata mpewo tegumenyeka', meaning: 'A tree that doesn\'t bend with wind doesn\'t break', lesson: 'Flexibility and adaptation are necessary', context: 'Adaptability in life' },
      { proverb: 'Omukwano atalaba ente zo talaba bizibu byo', meaning: 'A friend who doesn\'t see your cattle doesn\'t see your problems', lesson: 'True friends share in both prosperity and hardship', context: 'Friendship and loyalty' },
      { proverb: 'Enju eterimu mikwano teekulaakulana', meaning: 'A home without friends doesn\'t prosper', lesson: 'Community and friendship are vital', context: 'Social relationships' },
      { proverb: 'Emmere etaliibwa leero teriibwa nkya', meaning: 'Food not eaten today won\'t be eaten tomorrow', lesson: 'Take opportunities when they come', context: 'Seizing opportunities' },
      { proverb: 'Omusomesa atamanya sukulu tamanya mulimu', meaning: 'A teacher who doesn\'t know school doesn\'t know work', lesson: 'Knowledge of your field is essential', context: 'Professional competence' },
      { proverb: 'Ente zonna tezilungi, era ente zonna tezibi', meaning: 'Not all cattle are good, and not all cattle are bad', lesson: 'Avoid generalizations, judge individually', context: 'Fair judgment' },
      { proverb: 'Omwana atasoma takwata magezi', meaning: 'A child who doesn\'t study doesn\'t gain wisdom', lesson: 'Education requires effort and dedication', context: 'Importance of education' }
    ],

    cultural_practices: [
      { practice: 'Khusuna', meaning: 'Circumcision ceremony', occasion: 'Coming of age', significance: 'Transition from childhood to adulthood', description: 'Traditional initiation rite for boys and girls' },
      { practice: 'Khufukula', meaning: 'Marriage ceremony', occasion: 'Wedding', significance: 'Union of two families', description: 'Traditional wedding with dowry payment and celebrations' },
      { practice: 'Khusabila', meaning: 'Blessing ceremony', occasion: 'Various life events', significance: 'Seeking divine favor', description: 'Elder\'s blessing for important undertakings' },
      { practice: 'Khuwa lisina', meaning: 'Naming ceremony', occasion: 'Birth', significance: 'Identity and belonging', description: 'Traditional ceremony to name and welcome newborn' },
      { practice: 'Khusabila basamia', meaning: 'Ancestral worship', occasion: 'Spiritual ceremonies', significance: 'Connection with ancestors', description: 'Rituals to honor and communicate with ancestors' },
      { practice: 'Khukungula', meaning: 'Harvest ceremony', occasion: 'Harvest season', significance: 'Thanksgiving for good harvest', description: 'Community celebration of successful harvest' },
      { practice: 'Khusabila imbula', meaning: 'Rain ceremony', occasion: 'Drought periods', significance: 'Seeking rain and water', description: 'Traditional rainmaking ceremony during dry seasons' },
      { practice: 'Khusabila ente', meaning: 'Cattle blessing', occasion: 'Livestock ceremonies', significance: 'Livestock prosperity', description: 'Ritual blessing of cattle for health and fertility' },
      { practice: 'Baraza', meaning: 'Community meeting', occasion: 'Important decisions', significance: 'Democratic participation', description: 'Traditional council meeting for community issues' },
      { practice: 'Luhya festival', meaning: 'Cultural festival', occasion: 'Annual celebrations', significance: 'Cultural preservation', description: 'Annual festival celebrating Luhya culture and traditions' }
    ]
  }
};

// Helper function to get sample content for a language and category
export const getSampleContent = (languageId, categoryId) => {
  const langContent = SAMPLE_CONTENT[languageId];
  if (!langContent) return [];
  
  return langContent[categoryId] || [];
};

// Function to generate Firebase collection data
export const generateFirebaseData = (languageId, categoryId) => {
  const content = getSampleContent(languageId, categoryId);
  return content.map((item, index) => ({
    id: `${languageId}_${categoryId}_${index + 1}`,
    ...item,
    created_at: new Date().toISOString(),
    language: languageId,
    category: categoryId
  }));
};