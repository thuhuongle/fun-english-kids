const READING_DATA = {
  1: {
    level1: [
      {
        id: 'g1_l1_family',
        title: 'My Family',
        titleVi: 'Gia dinh toi',
        emoji: '👨‍👩‍👧‍👦',
        passage: 'My name is Lan. I am seven years old. I live with my family. My father is a teacher. My mother is a doctor. I have one brother. His name is Minh. We are a happy family.',
        vocabulary: [
          { word: 'family', meaning: 'gia dinh', phonetic: '/ˈfæm.ə.li/' },
          { word: 'father', meaning: 'bo', phonetic: '/ˈfɑː.ðər/' },
          { word: 'mother', meaning: 'me', phonetic: '/ˈmʌð.ər/' },
          { word: 'brother', meaning: 'anh/em trai', phonetic: '/ˈbrʌð.ər/' }
        ],
        questions: [
          { question: 'How old is Lan?', options: ['Six', 'Seven', 'Eight', 'Nine'], correct: 1 },
          { question: 'What does her father do?', options: ['Doctor', 'Driver', 'Teacher', 'Cook'], correct: 2 },
          { question: 'What is her brother\'s name?', options: ['Nam', 'Minh', 'Tuan', 'Duc'], correct: 1 },
          { question: 'How many brothers does Lan have?', options: ['None', 'One', 'Two', 'Three'], correct: 1 }
        ]
      },
      {
        id: 'g1_l1_pet',
        title: 'My Pet',
        titleVi: 'Thu cung cua toi',
        emoji: '🐕',
        passage: 'I have a pet dog. His name is Lucky. Lucky is brown and white. He is small and cute. Lucky likes to run in the garden. I play with Lucky every day. I love my pet dog.',
        vocabulary: [
          { word: 'pet', meaning: 'thu cung', phonetic: '/pet/' },
          { word: 'brown', meaning: 'mau nau', phonetic: '/braʊn/' },
          { word: 'small', meaning: 'nho', phonetic: '/smɔːl/' },
          { word: 'garden', meaning: 'vuon', phonetic: '/ˈɡɑːr.dən/' }
        ],
        questions: [
          { question: 'What is the pet\'s name?', options: ['Buddy', 'Lucky', 'Max', 'Rex'], correct: 1 },
          { question: 'What color is Lucky?', options: ['Black and white', 'Brown and white', 'Brown and black', 'All white'], correct: 1 },
          { question: 'Where does Lucky like to run?', options: ['In the house', 'In the park', 'In the garden', 'In the street'], correct: 2 },
          { question: 'What kind of pet is Lucky?', options: ['A cat', 'A dog', 'A bird', 'A fish'], correct: 1 }
        ]
      }
    ],
    level2: [
      {
        id: 'g1_l2_school',
        title: 'My School',
        titleVi: 'Truong hoc cua toi',
        emoji: '🏫',
        passage: 'I go to school every day. My school is big. I have many friends at school. My teacher is Miss Hoa. She is very nice. I like to read books at school. I learn English and Math.',
        vocabulary: [
          { word: 'school', meaning: 'truong hoc', phonetic: '/skuːl/' },
          { word: 'teacher', meaning: 'giao vien', phonetic: '/ˈtiː.tʃər/' },
          { word: 'friends', meaning: 'ban be', phonetic: '/frendz/' },
          { word: 'books', meaning: 'sach', phonetic: '/bʊks/' }
        ],
        questions: [
          { question: 'How often does the child go to school?', options: ['Sometimes', 'Every day', 'Once a week', 'Never'], correct: 1 },
          { question: 'What is the teacher\'s name?', options: ['Miss Lan', 'Miss Hoa', 'Miss Mai', 'Miss Thu'], correct: 1 },
          { question: 'Is the school big or small?', options: ['Small', 'Big', 'Very small', 'Tiny'], correct: 1 },
          { question: 'What does the child like to do at school?', options: ['Sleep', 'Read books', 'Play games', 'Draw pictures'], correct: 1 }
        ]
      },
      {
        id: 'g1_l2_toys',
        title: 'My Toys',
        titleVi: 'Do choi cua toi',
        emoji: '🧸',
        passage: 'I have many toys. I have a teddy bear. It is soft and brown. I have a red car too. My favorite toy is my doll. Her name is Lily. I play with my toys after school.',
        vocabulary: [
          { word: 'toys', meaning: 'do choi', phonetic: '/tɔɪz/' },
          { word: 'teddy bear', meaning: 'gau bong', phonetic: '/ˈted.i beər/' },
          { word: 'favorite', meaning: 'yeu thich', phonetic: '/ˈfeɪ.vər.ɪt/' },
          { word: 'doll', meaning: 'bup be', phonetic: '/dɑːl/' }
        ],
        questions: [
          { question: 'What color is the car?', options: ['Blue', 'Green', 'Red', 'Yellow'], correct: 2 },
          { question: 'What is the doll\'s name?', options: ['Daisy', 'Lily', 'Rose', 'Lucy'], correct: 1 },
          { question: 'What is the favorite toy?', options: ['The car', 'The teddy bear', 'The doll', 'The ball'], correct: 2 },
          { question: 'When does the child play with toys?', options: ['Before school', 'At school', 'After school', 'At night'], correct: 2 }
        ]
      }
    ],
    level3: [
      {
        id: 'g1_l3_park',
        title: 'The Park',
        titleVi: 'Cong vien',
        emoji: '🌳',
        passage: 'Today is Sunday. I go to the park with my mom. The park is very big and green. I can see many trees and flowers. I play on the swing. My mom sits on a bench. I am very happy at the park.',
        vocabulary: [
          { word: 'park', meaning: 'cong vien', phonetic: '/pɑːrk/' },
          { word: 'trees', meaning: 'cay', phonetic: '/triːz/' },
          { word: 'swing', meaning: 'xich du', phonetic: '/swɪŋ/' },
          { word: 'happy', meaning: 'vui ve', phonetic: '/ˈhæp.i/' }
        ],
        questions: [
          { question: 'What day is it?', options: ['Saturday', 'Sunday', 'Monday', 'Friday'], correct: 1 },
          { question: 'Who goes to the park with the child?', options: ['Dad', 'Mom', 'Brother', 'Sister'], correct: 1 },
          { question: 'What does the child play on?', options: ['The slide', 'The swing', 'The seesaw', 'The sand'], correct: 1 },
          { question: 'What does mom do at the park?', options: ['She plays', 'She runs', 'She sits on a bench', 'She swims'], correct: 2 }
        ]
      },
      {
        id: 'g1_l3_food',
        title: 'My Food',
        titleVi: 'Mon an cua toi',
        emoji: '🍚',
        passage: 'I eat three meals a day. For breakfast, I eat bread and drink milk. For lunch, I eat rice and chicken. For dinner, I eat noodles. I like fruit too. My favorite fruit is banana. I drink water every day.',
        vocabulary: [
          { word: 'breakfast', meaning: 'bua sang', phonetic: '/ˈbrek.fəst/' },
          { word: 'lunch', meaning: 'bua trua', phonetic: '/lʌntʃ/' },
          { word: 'dinner', meaning: 'bua toi', phonetic: '/ˈdɪn.ər/' },
          { word: 'fruit', meaning: 'trai cay', phonetic: '/fruːt/' }
        ],
        questions: [
          { question: 'How many meals does the child eat a day?', options: ['One', 'Two', 'Three', 'Four'], correct: 2 },
          { question: 'What does the child eat for breakfast?', options: ['Rice', 'Bread', 'Noodles', 'Fruit'], correct: 1 },
          { question: 'What is the favorite fruit?', options: ['Apple', 'Orange', 'Banana', 'Mango'], correct: 2 },
          { question: 'What does the child eat for dinner?', options: ['Rice', 'Bread', 'Chicken', 'Noodles'], correct: 3 }
        ]
      }
    ]
  },
  2: {
    level1: [
      {
        id: 'g2_l1_house',
        title: 'My House',
        titleVi: 'Ngoi nha cua toi',
        emoji: '🏠',
        passage: 'I live in a house with my family. My house has four rooms. There is a living room, a kitchen, and two bedrooms. The living room has a big TV. The kitchen is small but clean. My bedroom has a bed and a desk. I like my house very much.',
        vocabulary: [
          { word: 'house', meaning: 'ngoi nha', phonetic: '/haʊs/' },
          { word: 'kitchen', meaning: 'nha bep', phonetic: '/ˈkɪtʃ.ən/' },
          { word: 'bedroom', meaning: 'phong ngu', phonetic: '/ˈbed.ruːm/' },
          { word: 'living room', meaning: 'phong khach', phonetic: '/ˈlɪv.ɪŋ ruːm/' }
        ],
        questions: [
          { question: 'How many rooms does the house have?', options: ['Two', 'Three', 'Four', 'Five'], correct: 2 },
          { question: 'What is in the living room?', options: ['A bed', 'A big TV', 'A desk', 'A stove'], correct: 1 },
          { question: 'How many bedrooms are there?', options: ['One', 'Two', 'Three', 'Four'], correct: 1 },
          { question: 'What is the kitchen like?', options: ['Big and dirty', 'Big and clean', 'Small but clean', 'Small and dirty'], correct: 2 }
        ]
      },
      {
        id: 'g2_l1_friends',
        title: 'My Friends',
        titleVi: 'Ban be cua toi',
        emoji: '👫',
        passage: 'I have two best friends. Their names are Hoa and Nam. Hoa likes to draw pictures. She draws flowers and animals. Nam likes to play soccer. We play together at recess. After school, we walk home together. I am happy to have good friends.',
        vocabulary: [
          { word: 'friends', meaning: 'ban be', phonetic: '/frendz/' },
          { word: 'draw', meaning: 've', phonetic: '/drɔː/' },
          { word: 'soccer', meaning: 'bong da', phonetic: '/ˈsɑː.kər/' },
          { word: 'together', meaning: 'cung nhau', phonetic: '/təˈɡeð.ər/' }
        ],
        questions: [
          { question: 'How many best friends does the child have?', options: ['One', 'Two', 'Three', 'Four'], correct: 1 },
          { question: 'What does Hoa like to do?', options: ['Play soccer', 'Draw pictures', 'Read books', 'Sing songs'], correct: 1 },
          { question: 'What does Nam like to play?', options: ['Basketball', 'Tennis', 'Soccer', 'Baseball'], correct: 2 },
          { question: 'When do they play together?', options: ['In the morning', 'At recess', 'At night', 'On weekends'], correct: 1 }
        ]
      }
    ],
    level2: [
      {
        id: 'g2_l2_zoo',
        title: 'The Zoo',
        titleVi: 'So thu',
        emoji: '🦁',
        passage: 'Last Sunday, my family went to the zoo. We saw many animals. The elephants were very big. The monkeys were funny. They jumped from tree to tree. I liked the pandas the most. They were eating bamboo. We took many photos. It was a fun day.',
        vocabulary: [
          { word: 'zoo', meaning: 'so thu', phonetic: '/zuː/' },
          { word: 'elephants', meaning: 'nhung con voi', phonetic: '/ˈel.ɪ.fənts/' },
          { word: 'monkeys', meaning: 'nhung con khi', phonetic: '/ˈmʌŋ.kiz/' },
          { word: 'bamboo', meaning: 'tre', phonetic: '/ˌbæmˈbuː/' }
        ],
        questions: [
          { question: 'When did the family go to the zoo?', options: ['Last Saturday', 'Last Sunday', 'Last Monday', 'Last Friday'], correct: 1 },
          { question: 'Which animal was very big?', options: ['Monkeys', 'Pandas', 'Elephants', 'Lions'], correct: 2 },
          { question: 'What were the pandas eating?', options: ['Leaves', 'Bamboo', 'Fruit', 'Grass'], correct: 1 },
          { question: 'Which animal did the child like the most?', options: ['Elephants', 'Monkeys', 'Lions', 'Pandas'], correct: 3 }
        ]
      },
      {
        id: 'g2_l2_birthday',
        title: 'My Birthday',
        titleVi: 'Sinh nhat cua toi',
        emoji: '🎂',
        passage: 'Yesterday was my birthday. I am eight years old now. My mom made a chocolate cake. My friends came to my party. We played games and sang songs. I got many presents. My favorite present was a new bicycle. It is blue and shiny. I had a wonderful birthday.',
        vocabulary: [
          { word: 'birthday', meaning: 'sinh nhat', phonetic: '/ˈbɜːrθ.deɪ/' },
          { word: 'cake', meaning: 'banh', phonetic: '/keɪk/' },
          { word: 'presents', meaning: 'qua tang', phonetic: '/ˈprez.ənts/' },
          { word: 'bicycle', meaning: 'xe dap', phonetic: '/ˈbaɪ.sɪ.kəl/' }
        ],
        questions: [
          { question: 'How old is the child now?', options: ['Six', 'Seven', 'Eight', 'Nine'], correct: 2 },
          { question: 'What kind of cake did mom make?', options: ['Vanilla', 'Strawberry', 'Chocolate', 'Lemon'], correct: 2 },
          { question: 'What was the favorite present?', options: ['A toy', 'A book', 'A bicycle', 'A game'], correct: 2 },
          { question: 'What color is the bicycle?', options: ['Red', 'Blue', 'Green', 'Yellow'], correct: 1 }
        ]
      }
    ],
    level3: [
      {
        id: 'g2_l3_seasons',
        title: 'Seasons',
        titleVi: 'Cac mua',
        emoji: '🌸',
        passage: 'There are four seasons in a year. Spring is warm and flowers bloom. Summer is hot and sunny. We can swim in summer. Autumn is cool and leaves fall from the trees. Winter is cold and we wear warm clothes. My favorite season is summer because I love swimming.',
        vocabulary: [
          { word: 'seasons', meaning: 'cac mua', phonetic: '/ˈsiː.zənz/' },
          { word: 'spring', meaning: 'mua xuan', phonetic: '/sprɪŋ/' },
          { word: 'autumn', meaning: 'mua thu', phonetic: '/ˈɔː.təm/' },
          { word: 'winter', meaning: 'mua dong', phonetic: '/ˈwɪn.tər/' }
        ],
        questions: [
          { question: 'How many seasons are there in a year?', options: ['Two', 'Three', 'Four', 'Five'], correct: 2 },
          { question: 'What happens in spring?', options: ['Leaves fall', 'Flowers bloom', 'It snows', 'It is hot'], correct: 1 },
          { question: 'What is the favorite season?', options: ['Spring', 'Summer', 'Autumn', 'Winter'], correct: 1 },
          { question: 'What do we wear in winter?', options: ['Shorts', 'Warm clothes', 'Swimsuits', 'T-shirts'], correct: 1 }
        ]
      },
      {
        id: 'g2_l3_routine',
        title: 'Daily Routine',
        titleVi: 'Sinh hoat hang ngay',
        emoji: '⏰',
        passage: 'I wake up at six o\'clock every morning. I brush my teeth and wash my face. Then I eat breakfast with my family. I go to school at seven. After school, I do my homework. In the evening, I watch TV with my parents. I go to bed at nine o\'clock.',
        vocabulary: [
          { word: 'wake up', meaning: 'thuc day', phonetic: '/weɪk ʌp/' },
          { word: 'brush', meaning: 'danh (rang)', phonetic: '/brʌʃ/' },
          { word: 'homework', meaning: 'bai tap ve nha', phonetic: '/ˈhoʊm.wɜːrk/' },
          { word: 'evening', meaning: 'buoi toi', phonetic: '/ˈiːv.nɪŋ/' }
        ],
        questions: [
          { question: 'What time does the child wake up?', options: ['Five o\'clock', 'Six o\'clock', 'Seven o\'clock', 'Eight o\'clock'], correct: 1 },
          { question: 'What does the child do after waking up?', options: ['Eat breakfast', 'Go to school', 'Brush teeth and wash face', 'Watch TV'], correct: 2 },
          { question: 'What time does the child go to school?', options: ['Six', 'Seven', 'Eight', 'Nine'], correct: 1 },
          { question: 'What time does the child go to bed?', options: ['Eight o\'clock', 'Nine o\'clock', 'Ten o\'clock', 'Seven o\'clock'], correct: 1 }
        ]
      }
    ]
  },
  3: {
    level1: [
      {
        id: 'g3_l1_neighborhood',
        title: 'My Neighborhood',
        titleVi: 'Khu pho cua toi',
        emoji: '🏘️',
        passage: 'I live in a nice neighborhood. There are many houses on my street. Next to my house, there is a small shop. It sells candy and drinks. Across the street, there is a beautiful park with tall trees. My neighbors are very friendly. Every morning, I see Mr. Tuan walking his dog. On weekends, children play together in the park.',
        vocabulary: [
          { word: 'neighborhood', meaning: 'khu pho', phonetic: '/ˈneɪ.bər.hʊd/' },
          { word: 'street', meaning: 'duong pho', phonetic: '/striːt/' },
          { word: 'neighbors', meaning: 'hang xom', phonetic: '/ˈneɪ.bərz/' },
          { word: 'friendly', meaning: 'than thien', phonetic: '/ˈfrend.li/' }
        ],
        questions: [
          { question: 'What is next to the child\'s house?', options: ['A park', 'A school', 'A small shop', 'A hospital'], correct: 2 },
          { question: 'What does the shop sell?', options: ['Books and toys', 'Candy and drinks', 'Clothes and shoes', 'Fruits and vegetables'], correct: 1 },
          { question: 'What does Mr. Tuan do every morning?', options: ['Goes to work', 'Walks his dog', 'Reads newspaper', 'Rides a bike'], correct: 1 },
          { question: 'Where do children play on weekends?', options: ['At school', 'In the park', 'In the shop', 'At home'], correct: 1 }
        ]
      },
      {
        id: 'g3_l1_shopping',
        title: 'Shopping',
        titleVi: 'Di mua sam',
        emoji: '🛒',
        passage: 'Today, I went shopping with my mom at the supermarket. We needed to buy food for the week. First, we got some vegetables like carrots and tomatoes. Then, we bought some fish and chicken. Mom also picked some apples and oranges. I asked mom to buy me some chocolate. She said yes because I was a good boy. We paid at the counter and went home.',
        vocabulary: [
          { word: 'shopping', meaning: 'mua sam', phonetic: '/ˈʃɑː.pɪŋ/' },
          { word: 'supermarket', meaning: 'sieu thi', phonetic: '/ˈsuː.pər.mɑːr.kɪt/' },
          { word: 'vegetables', meaning: 'rau cu', phonetic: '/ˈvedʒ.tə.bəlz/' },
          { word: 'counter', meaning: 'quay tinh tien', phonetic: '/ˈkaʊn.tər/' }
        ],
        questions: [
          { question: 'Where did they go shopping?', options: ['At the market', 'At the mall', 'At the supermarket', 'At the shop'], correct: 2 },
          { question: 'What vegetables did they buy?', options: ['Potatoes and onions', 'Carrots and tomatoes', 'Beans and corn', 'Lettuce and peas'], correct: 1 },
          { question: 'What did the child ask mom to buy?', options: ['Ice cream', 'Candy', 'Chocolate', 'Cookies'], correct: 2 },
          { question: 'What fruits did mom pick?', options: ['Bananas and grapes', 'Apples and oranges', 'Mangoes and pears', 'Watermelon and peach'], correct: 1 }
        ]
      }
    ],
    level2: [
      {
        id: 'g3_l2_sports',
        title: 'Sports Day',
        titleVi: 'Ngay hoi the thao',
        emoji: '🏅',
        passage: 'Last Friday was Sports Day at our school. All students joined the activities. There was a running race, a jumping contest, and a tug of war. My class joined the running race. I ran as fast as I could. I came in second place and got a silver medal. My friend Hung won first place. He got a gold medal. Everyone cheered loudly. It was the best day of the year.',
        vocabulary: [
          { word: 'race', meaning: 'cuoc dua', phonetic: '/reɪs/' },
          { word: 'contest', meaning: 'cuoc thi', phonetic: '/ˈkɑːn.test/' },
          { word: 'medal', meaning: 'huy chuong', phonetic: '/ˈmed.əl/' },
          { word: 'cheered', meaning: 'co vu', phonetic: '/tʃɪrd/' }
        ],
        questions: [
          { question: 'When was Sports Day?', options: ['Last Monday', 'Last Wednesday', 'Last Friday', 'Last Sunday'], correct: 2 },
          { question: 'What place did the child come in?', options: ['First', 'Second', 'Third', 'Fourth'], correct: 1 },
          { question: 'Who won first place?', options: ['Nam', 'Hung', 'Minh', 'Tuan'], correct: 1 },
          { question: 'Which activity did the class join?', options: ['Jumping contest', 'Tug of war', 'Running race', 'Swimming'], correct: 2 }
        ]
      },
      {
        id: 'g3_l2_cooking',
        title: 'Cooking',
        titleVi: 'Nau an',
        emoji: '👩‍🍳',
        passage: 'On Saturday morning, I helped my grandmother cook lunch. We made chicken soup together. First, grandmother washed the chicken and cut the vegetables. Then, she put everything in a big pot with water. I helped her add salt and pepper. The soup cooked for one hour. It smelled delicious. When the soup was ready, the whole family sat down to eat together. Everyone said the soup was very good.',
        vocabulary: [
          { word: 'cook', meaning: 'nau an', phonetic: '/kʊk/' },
          { word: 'soup', meaning: 'sup/canh', phonetic: '/suːp/' },
          { word: 'delicious', meaning: 'ngon', phonetic: '/dɪˈlɪʃ.əs/' },
          { word: 'ingredients', meaning: 'nguyen lieu', phonetic: '/ɪnˈɡriː.di.ənts/' }
        ],
        questions: [
          { question: 'Who did the child cook with?', options: ['Mother', 'Father', 'Grandmother', 'Sister'], correct: 2 },
          { question: 'What did they cook?', options: ['Fried rice', 'Chicken soup', 'Noodles', 'Pancakes'], correct: 1 },
          { question: 'How long did the soup cook?', options: ['30 minutes', 'One hour', 'Two hours', '15 minutes'], correct: 1 },
          { question: 'What did the child help add?', options: ['Sugar and oil', 'Salt and pepper', 'Garlic and ginger', 'Soy sauce'], correct: 1 }
        ]
      }
    ],
    level3: [
      {
        id: 'g3_l3_weather',
        title: 'Weather',
        titleVi: 'Thoi tiet',
        emoji: '🌦️',
        passage: 'The weather changes every season in Vietnam. In summer, it is very hot and sometimes there are heavy rains. In winter, the north is cold but the south stays warm. When it rains, I bring my umbrella to school. On sunny days, I wear my hat and sunglasses. Last week, there was a big storm. The wind was very strong and many trees fell down. My dad said we should always check the weather before going out.',
        vocabulary: [
          { word: 'weather', meaning: 'thoi tiet', phonetic: '/ˈweð.ər/' },
          { word: 'umbrella', meaning: 'o/du', phonetic: '/ʌmˈbrel.ə/' },
          { word: 'storm', meaning: 'bao', phonetic: '/stɔːrm/' },
          { word: 'temperature', meaning: 'nhiet do', phonetic: '/ˈtem.prə.tʃər/' }
        ],
        questions: [
          { question: 'What happens in summer in Vietnam?', options: ['It is cold', 'It snows', 'It is hot with heavy rains', 'It is cool'], correct: 2 },
          { question: 'What does the child bring when it rains?', options: ['A jacket', 'An umbrella', 'A raincoat', 'Boots'], correct: 1 },
          { question: 'What happened last week?', options: ['A flood', 'A big storm', 'A snowfall', 'An earthquake'], correct: 1 },
          { question: 'What did dad say to do before going out?', options: ['Eat breakfast', 'Do homework', 'Check the weather', 'Call a friend'], correct: 2 }
        ]
      },
      {
        id: 'g3_l3_holidays',
        title: 'Holidays',
        titleVi: 'Ngay le',
        emoji: '🎉',
        passage: 'My favorite holiday is Tet, the Vietnamese New Year. Before Tet, my family cleans the house and buys new clothes. My mom cooks special food like banh chung and spring rolls. On New Year\'s Eve, we have a big dinner together. Children get lucky money in red envelopes. I visit my grandparents and wish them a happy new year. We also watch fireworks at midnight. Tet is a time for family and happiness.',
        vocabulary: [
          { word: 'holiday', meaning: 'ngay le', phonetic: '/ˈhɑː.lə.deɪ/' },
          { word: 'celebrate', meaning: 'ki niem', phonetic: '/ˈsel.ə.breɪt/' },
          { word: 'fireworks', meaning: 'phao hoa', phonetic: '/ˈfaɪr.wɜːrks/' },
          { word: 'envelope', meaning: 'phong bi', phonetic: '/ˈen.və.loʊp/' }
        ],
        questions: [
          { question: 'What is the child\'s favorite holiday?', options: ['Christmas', 'Tet', 'Halloween', 'Mid-Autumn'], correct: 1 },
          { question: 'What do children get during Tet?', options: ['Toys', 'Candy', 'Lucky money in red envelopes', 'New books'], correct: 2 },
          { question: 'What special food does mom cook?', options: ['Pizza', 'Banh chung and spring rolls', 'Fried chicken', 'Cake'], correct: 1 },
          { question: 'What do they watch at midnight?', options: ['TV shows', 'Movies', 'Fireworks', 'Dancing'], correct: 2 }
        ]
      }
    ]
  },
  4: {
    level1: [
      {
        id: 'g4_l1_countries',
        title: 'Countries',
        titleVi: 'Cac quoc gia',
        emoji: '🌍',
        passage: 'There are many countries in the world. Each country has its own flag, language, and culture. Japan is famous for sushi and cherry blossoms. France is known for the Eiffel Tower and delicious bread. Brazil is the largest country in South America and people there love soccer. Australia has unique animals like kangaroos and koalas. Vietnam is my home country. It has beautiful beaches and tasty food. I want to visit many countries when I grow up.',
        vocabulary: [
          { word: 'countries', meaning: 'cac quoc gia', phonetic: '/ˈkʌn.triz/' },
          { word: 'culture', meaning: 'van hoa', phonetic: '/ˈkʌl.tʃər/' },
          { word: 'famous', meaning: 'noi tieng', phonetic: '/ˈfeɪ.məs/' },
          { word: 'unique', meaning: 'doc dao', phonetic: '/juːˈniːk/' }
        ],
        questions: [
          { question: 'What is Japan famous for?', options: ['Pizza and pasta', 'Sushi and cherry blossoms', 'Tacos and pyramids', 'Chocolate and cheese'], correct: 1 },
          { question: 'Which country has the Eiffel Tower?', options: ['England', 'Germany', 'France', 'Italy'], correct: 2 },
          { question: 'What unique animals does Australia have?', options: ['Pandas and tigers', 'Lions and zebras', 'Kangaroos and koalas', 'Elephants and monkeys'], correct: 2 },
          { question: 'Which is the largest country in South America?', options: ['Argentina', 'Colombia', 'Peru', 'Brazil'], correct: 3 }
        ]
      },
      {
        id: 'g4_l1_inventions',
        title: 'Inventions',
        titleVi: 'Nhung phat minh',
        emoji: '💡',
        passage: 'Inventions have changed the way people live. Long ago, people did not have electricity or cars. Thomas Edison invented the light bulb in 1879. Before that, people used candles to see at night. Alexander Graham Bell invented the telephone so people could talk to each other from far away. The Wright Brothers built the first airplane in 1903. Today, we have computers and smartphones that help us every day. These inventions make our lives easier and more comfortable.',
        vocabulary: [
          { word: 'inventions', meaning: 'phat minh', phonetic: '/ɪnˈven.ʃənz/' },
          { word: 'electricity', meaning: 'dien', phonetic: '/ɪˌlek.trɪˈsɪs.ə.ti/' },
          { word: 'telephone', meaning: 'dien thoai', phonetic: '/ˈtel.ə.foʊn/' },
          { word: 'airplane', meaning: 'may bay', phonetic: '/ˈer.pleɪn/' }
        ],
        questions: [
          { question: 'Who invented the light bulb?', options: ['Alexander Bell', 'Thomas Edison', 'Wright Brothers', 'Isaac Newton'], correct: 1 },
          { question: 'What did people use before light bulbs?', options: ['Flashlights', 'Lamps', 'Candles', 'Torches'], correct: 2 },
          { question: 'When was the first airplane built?', options: ['1879', '1895', '1903', '1920'], correct: 2 },
          { question: 'Who invented the telephone?', options: ['Thomas Edison', 'Alexander Graham Bell', 'Wright Brothers', 'Albert Einstein'], correct: 1 }
        ]
      }
    ],
    level2: [
      {
        id: 'g4_l2_ocean',
        title: 'Ocean Life',
        titleVi: 'Cuoc song dai duong',
        emoji: '🐙',
        passage: 'The ocean is home to millions of living things. It covers more than seventy percent of the Earth. The ocean has five main parts called oceans. They are the Pacific, Atlantic, Indian, Southern, and Arctic Oceans. Many animals live in the ocean, including fish, dolphins, whales, and sea turtles. Coral reefs are like underwater cities where colorful fish live. The deepest part of the ocean is the Mariana Trench. It is deeper than Mount Everest is tall. We must protect the ocean and keep it clean.',
        vocabulary: [
          { word: 'ocean', meaning: 'dai duong', phonetic: '/ˈoʊ.ʃən/' },
          { word: 'coral reef', meaning: 'ran san ho', phonetic: '/ˈkɔːr.əl riːf/' },
          { word: 'dolphins', meaning: 'ca heo', phonetic: '/ˈdɑːl.fɪnz/' },
          { word: 'protect', meaning: 'bao ve', phonetic: '/prəˈtekt/' }
        ],
        questions: [
          { question: 'How much of Earth does the ocean cover?', options: ['Fifty percent', 'Sixty percent', 'Seventy percent', 'Eighty percent'], correct: 2 },
          { question: 'How many main oceans are there?', options: ['Three', 'Four', 'Five', 'Six'], correct: 2 },
          { question: 'What is the deepest part of the ocean?', options: ['Atlantic Trench', 'Pacific Trench', 'Mariana Trench', 'Indian Trench'], correct: 2 },
          { question: 'What are coral reefs compared to?', options: ['Underwater mountains', 'Underwater cities', 'Underwater forests', 'Underwater deserts'], correct: 1 }
        ]
      },
      {
        id: 'g4_l2_space',
        title: 'Space',
        titleVi: 'Khong gian vu tru',
        emoji: '🚀',
        passage: 'Space is the area beyond the Earth\'s atmosphere. Our solar system has eight planets that orbit the Sun. Mercury is the closest planet to the Sun, and Neptune is the farthest. Earth is the only planet where we know life exists. The Moon orbits the Earth and we can see it at night. In 1969, astronauts first walked on the Moon. Stars are huge balls of hot gas that shine in the night sky. Scientists use telescopes to study objects far away in space. Space is full of mysteries waiting to be discovered.',
        vocabulary: [
          { word: 'planet', meaning: 'hanh tinh', phonetic: '/ˈplæn.ɪt/' },
          { word: 'orbit', meaning: 'quay quanh', phonetic: '/ˈɔːr.bɪt/' },
          { word: 'astronaut', meaning: 'phi hanh gia', phonetic: '/ˈæs.trə.nɑːt/' },
          { word: 'telescope', meaning: 'kinh vien vong', phonetic: '/ˈtel.ə.skoʊp/' }
        ],
        questions: [
          { question: 'How many planets are in our solar system?', options: ['Six', 'Seven', 'Eight', 'Nine'], correct: 2 },
          { question: 'Which planet is closest to the Sun?', options: ['Venus', 'Mercury', 'Mars', 'Earth'], correct: 1 },
          { question: 'When did astronauts first walk on the Moon?', options: ['1959', '1965', '1969', '1975'], correct: 2 },
          { question: 'What are stars made of?', options: ['Rock and dust', 'Ice and water', 'Hot gas', 'Metal and stone'], correct: 2 }
        ]
      }
    ],
    level3: [
      {
        id: 'g4_l3_recycling',
        title: 'Recycling',
        titleVi: 'Tai che',
        emoji: '♻️',
        passage: 'Recycling means turning old things into new things. Instead of throwing away paper, plastic, and glass, we can recycle them. When we recycle paper, fewer trees are cut down. Plastic bottles can be turned into new products like bags or clothes. Glass can be melted and made into new bottles. At school, we have different bins for different types of waste. The blue bin is for paper, the yellow bin is for plastic, and the green bin is for glass. Everyone should recycle to help protect our planet and reduce pollution.',
        vocabulary: [
          { word: 'recycling', meaning: 'tai che', phonetic: '/riːˈsaɪ.klɪŋ/' },
          { word: 'plastic', meaning: 'nhua', phonetic: '/ˈplæs.tɪk/' },
          { word: 'pollution', meaning: 'o nhiem', phonetic: '/pəˈluː.ʃən/' },
          { word: 'waste', meaning: 'rac thai', phonetic: '/weɪst/' }
        ],
        questions: [
          { question: 'What does recycling mean?', options: ['Throwing things away', 'Burning old things', 'Turning old things into new things', 'Buying new things'], correct: 2 },
          { question: 'What color bin is for paper?', options: ['Green', 'Yellow', 'Blue', 'Red'], correct: 2 },
          { question: 'What can plastic bottles be turned into?', options: ['Food and drinks', 'Bags or clothes', 'Toys and games', 'Buildings'], correct: 1 },
          { question: 'Why should we recycle?', options: ['To save money', 'To have fun', 'To protect our planet', 'To make friends'], correct: 2 }
        ]
      },
      {
        id: 'g4_l3_famous',
        title: 'Famous People',
        titleVi: 'Nhung nguoi noi tieng',
        emoji: '⭐',
        passage: 'Many famous people have done amazing things to change the world. Marie Curie was a scientist who discovered radium. She won two Nobel Prizes, which is very rare. Albert Einstein was a genius who came up with the theory of relativity. He changed how we understand time and space. Nguyen Trai was a famous Vietnamese poet and hero. He helped free Vietnam from foreign rule. These people worked very hard and never gave up on their dreams. Their achievements inspire us to do great things too.',
        vocabulary: [
          { word: 'scientist', meaning: 'nha khoa hoc', phonetic: '/ˈsaɪ.ən.tɪst/' },
          { word: 'discovered', meaning: 'phat hien', phonetic: '/dɪˈskʌv.ərd/' },
          { word: 'genius', meaning: 'thien tai', phonetic: '/ˈdʒiː.ni.əs/' },
          { word: 'achievements', meaning: 'thanh tuu', phonetic: '/əˈtʃiːv.mənts/' }
        ],
        questions: [
          { question: 'What did Marie Curie discover?', options: ['Electricity', 'Gravity', 'Radium', 'Penicillin'], correct: 2 },
          { question: 'How many Nobel Prizes did Marie Curie win?', options: ['One', 'Two', 'Three', 'Four'], correct: 1 },
          { question: 'What is Albert Einstein famous for?', options: ['The light bulb', 'The telephone', 'The theory of relativity', 'The airplane'], correct: 2 },
          { question: 'Who was Nguyen Trai?', options: ['A scientist', 'A painter', 'A Vietnamese poet and hero', 'A musician'], correct: 2 }
        ]
      }
    ]
  },
  5: {
    level1: [
      {
        id: 'g5_l1_egypt',
        title: 'Ancient Egypt',
        titleVi: 'Ai Cap co dai',
        emoji: '🏛️',
        passage: 'Ancient Egypt was one of the greatest civilizations in history. It began over five thousand years ago along the Nile River in Africa. The ancient Egyptians built enormous pyramids as tombs for their kings, called pharaohs. The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World. Egyptians also created a writing system called hieroglyphics, which used pictures and symbols. They were skilled in mathematics and medicine. The Egyptians believed in many gods and preserved dead bodies as mummies. The Sphinx, a statue with a lion body and human head, still stands near the pyramids today. Ancient Egypt teaches us how creative and intelligent early humans were.',
        vocabulary: [
          { word: 'civilization', meaning: 'nen van minh', phonetic: '/ˌsɪv.əl.əˈzeɪ.ʃən/' },
          { word: 'pyramid', meaning: 'kim tu thap', phonetic: '/ˈpɪr.ə.mɪd/' },
          { word: 'pharaoh', meaning: 'pharaoh/vua Ai Cap', phonetic: '/ˈfer.oʊ/' },
          { word: 'hieroglyphics', meaning: 'chu tuong hinh', phonetic: '/ˌhaɪ.roʊˈɡlɪf.ɪks/' }
        ],
        questions: [
          { question: 'Where did ancient Egypt develop?', options: ['Along the Amazon River', 'Along the Nile River', 'Along the Mekong River', 'Along the Danube River'], correct: 1 },
          { question: 'What were the pyramids used for?', options: ['Schools', 'Markets', 'Tombs for pharaohs', 'Temples for worship'], correct: 2 },
          { question: 'What was the Egyptian writing system called?', options: ['Alphabet', 'Cuneiform', 'Hieroglyphics', 'Calligraphy'], correct: 2 },
          { question: 'What is the Sphinx?', options: ['A pyramid', 'A river', 'A statue with lion body and human head', 'A type of writing'], correct: 2 }
        ]
      },
      {
        id: 'g5_l1_rainforests',
        title: 'Rainforests',
        titleVi: 'Rung nhiet doi',
        emoji: '🌴',
        passage: 'Rainforests are thick forests that receive a lot of rain throughout the year. They are found near the equator in countries like Brazil, Indonesia, and the Congo. The Amazon Rainforest is the largest in the world, covering an area almost as big as Australia. Rainforests are incredibly important because they produce about twenty percent of the world\'s oxygen. They are home to more than half of all plant and animal species on Earth. Many medicines come from plants found only in rainforests. However, rainforests are being cut down for farming and logging. This is called deforestation. Scientists warn that losing rainforests could speed up climate change and cause many species to go extinct.',
        vocabulary: [
          { word: 'rainforest', meaning: 'rung nhiet doi', phonetic: '/ˈreɪn.fɔːr.ɪst/' },
          { word: 'equator', meaning: 'xich dao', phonetic: '/ɪˈkweɪ.tər/' },
          { word: 'species', meaning: 'loai', phonetic: '/ˈspiː.ʃiːz/' },
          { word: 'deforestation', meaning: 'pha rung', phonetic: '/diːˌfɔːr.ɪˈsteɪ.ʃən/' }
        ],
        questions: [
          { question: 'What is the largest rainforest in the world?', options: ['Congo Rainforest', 'Amazon Rainforest', 'Borneo Rainforest', 'Daintree Rainforest'], correct: 1 },
          { question: 'How much of the world\'s oxygen do rainforests produce?', options: ['Ten percent', 'Twenty percent', 'Thirty percent', 'Fifty percent'], correct: 1 },
          { question: 'Why are rainforests being cut down?', options: ['For tourism', 'For farming and logging', 'For building cities', 'For mining gold'], correct: 1 },
          { question: 'Where are rainforests usually found?', options: ['Near the North Pole', 'Near the equator', 'In deserts', 'On mountains'], correct: 1 }
        ]
      }
    ],
    level2: [
      {
        id: 'g5_l2_technology',
        title: 'Technology',
        titleVi: 'Cong nghe',
        emoji: '💻',
        passage: 'Technology has changed our lives in many wonderful ways. Thirty years ago, most people did not have computers at home. Now, almost everyone carries a smartphone that is more powerful than early computers. The internet allows us to find information, watch videos, and talk to people around the world instantly. Students can learn online and access thousands of books digitally. Robots are being used in factories to build cars and other products. Drones can deliver packages and even help farmers check their crops. However, spending too much time on screens can affect our health. It is important to use technology wisely and take breaks to exercise and enjoy nature.',
        vocabulary: [
          { word: 'technology', meaning: 'cong nghe', phonetic: '/tekˈnɑː.lə.dʒi/' },
          { word: 'smartphone', meaning: 'dien thoai thong minh', phonetic: '/ˈsmɑːrt.foʊn/' },
          { word: 'internet', meaning: 'mang internet', phonetic: '/ˈɪn.tər.net/' },
          { word: 'digital', meaning: 'ky thuat so', phonetic: '/ˈdɪdʒ.ɪ.təl/' }
        ],
        questions: [
          { question: 'What do drones help farmers do?', options: ['Plant seeds', 'Water crops', 'Check their crops', 'Harvest vegetables'], correct: 2 },
          { question: 'What can affect our health from too much technology use?', options: ['Too much screen time', 'Too much reading', 'Too much walking', 'Too much talking'], correct: 0 },
          { question: 'What did most people not have at home thirty years ago?', options: ['Televisions', 'Computers', 'Telephones', 'Radios'], correct: 1 },
          { question: 'What are robots used for in factories?', options: ['Cleaning floors', 'Cooking food', 'Building cars and products', 'Teaching students'], correct: 2 }
        ]
      },
      {
        id: 'g5_l2_music',
        title: 'Music',
        titleVi: 'Am nhac',
        emoji: '🎵',
        passage: 'Music is a universal language that connects people all around the world. Every culture has its own types of music and instruments. In Vietnam, traditional instruments include the dan tranh and the dan bau. Classical music from Europe uses instruments like the violin, piano, and flute. In America, jazz and hip-hop were created by African American communities. Music can change our mood. Happy music can make us feel energetic, while slow music can help us relax. Many studies show that learning to play a musical instrument helps children do better in school. It improves memory, concentration, and creativity. Whether you listen to pop, rock, or traditional folk music, music makes our lives richer and more enjoyable.',
        vocabulary: [
          { word: 'instrument', meaning: 'nhac cu', phonetic: '/ˈɪn.strə.mənt/' },
          { word: 'traditional', meaning: 'truyen thong', phonetic: '/trəˈdɪʃ.ən.əl/' },
          { word: 'rhythm', meaning: 'nhip dieu', phonetic: '/ˈrɪð.əm/' },
          { word: 'creativity', meaning: 'su sang tao', phonetic: '/ˌkriː.eɪˈtɪv.ə.ti/' }
        ],
        questions: [
          { question: 'Which is a traditional Vietnamese instrument?', options: ['Piano', 'Guitar', 'Dan tranh', 'Violin'], correct: 2 },
          { question: 'Where was jazz created?', options: ['Europe', 'Asia', 'America', 'Africa'], correct: 2 },
          { question: 'How does learning music help children?', options: ['It makes them taller', 'It improves memory and concentration', 'It helps them run faster', 'It makes them sleepy'], correct: 1 },
          { question: 'What can slow music help us do?', options: ['Run faster', 'Feel angry', 'Relax', 'Study harder'], correct: 2 }
        ]
      }
    ],
    level3: [
      {
        id: 'g5_l3_climate',
        title: 'Climate Change',
        titleVi: 'Bien doi khi hau',
        emoji: '🌡️',
        passage: 'Climate change is one of the biggest challenges facing our planet today. The Earth\'s temperature has been rising because of greenhouse gases like carbon dioxide. These gases trap heat in the atmosphere, similar to how a greenhouse keeps plants warm. Burning fossil fuels such as coal, oil, and gas for energy releases large amounts of carbon dioxide. Cutting down forests makes the problem worse because trees absorb carbon dioxide. As temperatures rise, ice at the North and South Poles is melting, causing sea levels to go up. This threatens coastal cities and low-lying islands. Extreme weather events like hurricanes and droughts are becoming more common. To fight climate change, we can use renewable energy from the sun and wind, plant more trees, and reduce waste.',
        vocabulary: [
          { word: 'climate', meaning: 'khi hau', phonetic: '/ˈklaɪ.mət/' },
          { word: 'greenhouse', meaning: 'nha kinh', phonetic: '/ˈɡriːn.haʊs/' },
          { word: 'atmosphere', meaning: 'khi quyen', phonetic: '/ˈæt.mə.sfɪr/' },
          { word: 'renewable', meaning: 'tai tao', phonetic: '/rɪˈnuː.ə.bəl/' }
        ],
        questions: [
          { question: 'What causes Earth\'s temperature to rise?', options: ['Volcanic eruptions', 'Greenhouse gases', 'Ocean currents', 'Solar flares'], correct: 1 },
          { question: 'What happens when polar ice melts?', options: ['More rain falls', 'Sea levels go up', 'Temperatures drop', 'Forests grow'], correct: 1 },
          { question: 'Why does cutting down forests make climate change worse?', options: ['Trees block the wind', 'Trees produce carbon dioxide', 'Trees absorb carbon dioxide', 'Trees cool the ocean'], correct: 2 },
          { question: 'What is an example of renewable energy?', options: ['Coal', 'Oil', 'Natural gas', 'Solar energy'], correct: 3 }
        ]
      },
      {
        id: 'g5_l3_careers',
        title: 'Careers',
        titleVi: 'Nghe nghiep',
        emoji: '👩‍💼',
        passage: 'Choosing a career is an important decision that everyone must make. There are many different types of jobs in the world. Doctors and nurses help sick people get better. Engineers design buildings, bridges, and machines. Teachers educate children and help them learn new skills. Artists create paintings, music, and films that enrich our lives. Scientists conduct experiments to discover new things about the world. In the modern world, new careers are appearing all the time. People can now work as app developers, social media managers, or environmental consultants. To prepare for a good career, it is important to study hard, develop useful skills, and find something you are passionate about. Remember that every job is important and contributes to society.',
        vocabulary: [
          { word: 'career', meaning: 'nghe nghiep', phonetic: '/kəˈrɪr/' },
          { word: 'engineer', meaning: 'ky su', phonetic: '/ˌen.dʒɪˈnɪr/' },
          { word: 'experiment', meaning: 'thi nghiem', phonetic: '/ɪkˈsper.ə.mənt/' },
          { word: 'passionate', meaning: 'dam me', phonetic: '/ˈpæʃ.ən.ət/' }
        ],
        questions: [
          { question: 'What do engineers do?', options: ['Cook food', 'Design buildings and machines', 'Teach children', 'Grow crops'], correct: 1 },
          { question: 'Which is a modern career mentioned in the passage?', options: ['Farmer', 'Blacksmith', 'App developer', 'Sailor'], correct: 2 },
          { question: 'What should you find to prepare for a good career?', options: ['A lot of money', 'Something you are passionate about', 'Famous friends', 'An easy job'], correct: 1 },
          { question: 'What do scientists do?', options: ['Build houses', 'Conduct experiments', 'Drive trucks', 'Sell products'], correct: 1 }
        ]
      }
    ]
  },
  6: {
    level1: [
      {
        id: 'g6_l1_cultures',
        title: 'World Cultures',
        titleVi: 'Van hoa the gioi',
        emoji: '🌏',
        passage: 'The world is home to thousands of different cultures, each with unique traditions, beliefs, and ways of life. In India, people celebrate Diwali, the Festival of Lights, by lighting oil lamps and setting off fireworks. In Mexico, the Day of the Dead is a colorful celebration where families honor their deceased loved ones with altars and marigold flowers. Japanese culture values harmony and respect, which is reflected in their tea ceremonies and the practice of bowing when greeting others. African cultures are incredibly diverse, with over two thousand languages spoken across the continent. In many African communities, storytelling is an important way to pass down history and values from one generation to the next. Understanding different cultures helps us appreciate diversity and become more open-minded global citizens.',
        vocabulary: [
          { word: 'culture', meaning: 'van hoa', phonetic: '/ˈkʌl.tʃər/' },
          { word: 'tradition', meaning: 'truyen thong', phonetic: '/trəˈdɪʃ.ən/' },
          { word: 'diversity', meaning: 'su da dang', phonetic: '/daɪˈvɜːr.sə.ti/' },
          { word: 'generation', meaning: 'the he', phonetic: '/ˌdʒen.əˈreɪ.ʃən/' }
        ],
        questions: [
          { question: 'What is Diwali also known as?', options: ['Festival of Colors', 'Festival of Lights', 'Festival of Music', 'Festival of Food'], correct: 1 },
          { question: 'How many languages are spoken in Africa?', options: ['Over five hundred', 'Over one thousand', 'Over two thousand', 'Over five thousand'], correct: 2 },
          { question: 'What do Japanese tea ceremonies reflect?', options: ['Wealth and power', 'Harmony and respect', 'Speed and efficiency', 'Competition and skill'], correct: 1 },
          { question: 'What flower is used in the Day of the Dead celebrations?', options: ['Rose', 'Lotus', 'Marigold', 'Sunflower'], correct: 2 }
        ]
      },
      {
        id: 'g6_l1_foodscience',
        title: 'Food Science',
        titleVi: 'Khoa hoc thuc pham',
        emoji: '🔬',
        passage: 'Food science is the study of how food is produced, preserved, and prepared. Scientists study the nutrients in food to help people eat healthier diets. Proteins, found in meat, fish, and beans, help our bodies grow and repair themselves. Carbohydrates in rice, bread, and pasta give us energy for daily activities. Vitamins and minerals in fruits and vegetables keep our immune system strong. Food preservation techniques like freezing, canning, and drying help food last longer without spoiling. Fermentation is an ancient method used to make foods like yogurt, cheese, and pickles. Modern food scientists also work on making food safer by testing for harmful bacteria. Understanding food science helps us make better choices about what we eat and how we store our food.',
        vocabulary: [
          { word: 'nutrients', meaning: 'chat dinh duong', phonetic: '/ˈnuː.tri.ənts/' },
          { word: 'protein', meaning: 'chat dam', phonetic: '/ˈproʊ.tiːn/' },
          { word: 'preservation', meaning: 'bao quan', phonetic: '/ˌprez.ərˈveɪ.ʃən/' },
          { word: 'fermentation', meaning: 'len men', phonetic: '/ˌfɜːr.menˈteɪ.ʃən/' }
        ],
        questions: [
          { question: 'What do proteins help our bodies do?', options: ['Sleep better', 'Grow and repair', 'See in the dark', 'Run faster'], correct: 1 },
          { question: 'Which foods are sources of carbohydrates?', options: ['Meat and fish', 'Rice and bread', 'Fruits and vegetables', 'Milk and cheese'], correct: 1 },
          { question: 'What is fermentation used to make?', options: ['Bread and cake', 'Yogurt and cheese', 'Soup and salad', 'Juice and tea'], correct: 1 },
          { question: 'What do modern food scientists test for?', options: ['Taste', 'Color', 'Harmful bacteria', 'Texture'], correct: 2 }
        ]
      }
    ],
    level2: [
      {
        id: 'g6_l2_socialmedia',
        title: 'Social Media',
        titleVi: 'Mang xa hoi',
        emoji: '📱',
        passage: 'Social media platforms like Facebook, Instagram, and TikTok have become a major part of modern life. Billions of people around the world use these platforms to share photos, videos, and messages with friends and family. Social media can be useful for staying connected, learning new things, and even finding jobs. Many small businesses use social media to advertise their products and reach customers. However, social media also has negative effects. Spending too much time scrolling through posts can lead to anxiety and lower self-esteem, especially among young people. Cyberbullying is another serious problem that can happen online. False information, or fake news, spreads quickly on social media and can mislead people. It is important to think critically about what we see online, limit our screen time, and treat others with respect on the internet.',
        vocabulary: [
          { word: 'platform', meaning: 'nen tang', phonetic: '/ˈplæt.fɔːrm/' },
          { word: 'cyberbullying', meaning: 'bat nat truc tuyen', phonetic: '/ˈsaɪ.bər.bʊl.i.ɪŋ/' },
          { word: 'self-esteem', meaning: 'long tu trong', phonetic: '/ˌself.ɪˈstiːm/' },
          { word: 'critical', meaning: 'co tu duy phan bien', phonetic: '/ˈkrɪt.ɪ.kəl/' }
        ],
        questions: [
          { question: 'What can spending too much time on social media lead to?', options: ['Better grades', 'More exercise', 'Anxiety and lower self-esteem', 'Improved eyesight'], correct: 2 },
          { question: 'How do small businesses use social media?', options: ['To hire employees', 'To advertise products', 'To pay taxes', 'To train workers'], correct: 1 },
          { question: 'What is fake news?', options: ['Funny stories', 'True information', 'False information', 'Old news'], correct: 2 },
          { question: 'What should we do about what we see online?', options: ['Believe everything', 'Share everything', 'Think critically', 'Ignore everything'], correct: 2 }
        ]
      },
      {
        id: 'g6_l2_volunteering',
        title: 'Volunteering',
        titleVi: 'Tinh nguyen',
        emoji: '🤝',
        passage: 'Volunteering means giving your time and skills to help others without being paid. There are many ways to volunteer in your community. You can help clean up parks and beaches, serve food at shelters for homeless people, or visit elderly residents at care homes. Some volunteers teach children to read or help them with homework after school. Others volunteer at animal shelters, taking care of abandoned dogs and cats. International organizations like the Red Cross rely on volunteers to provide disaster relief around the world. Volunteering has many benefits beyond helping others. It allows you to learn new skills, meet interesting people, and gain experience that can help your future career. Studies show that volunteers often feel happier and more connected to their communities. Even small acts of kindness can make a big difference in someone\'s life.',
        vocabulary: [
          { word: 'volunteer', meaning: 'tinh nguyen vien', phonetic: '/ˌvɑː.lənˈtɪr/' },
          { word: 'community', meaning: 'cong dong', phonetic: '/kəˈmjuː.nə.ti/' },
          { word: 'shelter', meaning: 'noi tru an', phonetic: '/ˈʃel.tər/' },
          { word: 'disaster', meaning: 'tham hoa', phonetic: '/dɪˈzæs.tər/' }
        ],
        questions: [
          { question: 'What does volunteering mean?', options: ['Working for a salary', 'Helping others without pay', 'Starting a business', 'Going to school'], correct: 1 },
          { question: 'What organization relies on volunteers for disaster relief?', options: ['United Nations', 'Red Cross', 'World Bank', 'NASA'], correct: 1 },
          { question: 'What benefit do volunteers often feel?', options: ['Tired and bored', 'Happier and more connected', 'Stressed and worried', 'Lonely and sad'], correct: 1 },
          { question: 'What can you volunteer to do at animal shelters?', options: ['Buy animals', 'Sell animals', 'Take care of abandoned animals', 'Train animals for shows'], correct: 2 }
        ]
      }
    ],
    level3: [
      {
        id: 'g6_l3_body',
        title: 'Human Body',
        titleVi: 'Co the con nguoi',
        emoji: '🫀',
        passage: 'The human body is an incredibly complex machine made up of trillions of cells working together. The skeletal system provides structure and protection, with 206 bones in an adult body. Muscles attached to bones allow us to move, and the heart is the strongest muscle, pumping blood throughout the body. The circulatory system carries oxygen and nutrients to every cell through a network of blood vessels. The respiratory system brings oxygen into the body through the lungs when we breathe. The digestive system breaks down food into nutrients that the body can use for energy and growth. The nervous system, controlled by the brain, sends electrical signals throughout the body to coordinate all our movements and senses. The immune system protects us from diseases caused by bacteria and viruses. Each system depends on the others, showing how beautifully connected the human body truly is.',
        vocabulary: [
          { word: 'skeleton', meaning: 'bo xuong', phonetic: '/ˈskel.ə.tən/' },
          { word: 'circulatory', meaning: 'tuan hoan', phonetic: '/ˈsɜːr.kjə.lə.tɔːr.i/' },
          { word: 'respiratory', meaning: 'ho hap', phonetic: '/ˈres.pər.ə.tɔːr.i/' },
          { word: 'immune', meaning: 'mien dich', phonetic: '/ɪˈmjuːn/' }
        ],
        questions: [
          { question: 'How many bones are in an adult body?', options: ['106', '156', '206', '256'], correct: 2 },
          { question: 'What is the strongest muscle in the body?', options: ['Bicep', 'Thigh muscle', 'Heart', 'Jaw muscle'], correct: 2 },
          { question: 'What does the respiratory system do?', options: ['Digests food', 'Brings oxygen into the body', 'Pumps blood', 'Protects from diseases'], correct: 1 },
          { question: 'What controls the nervous system?', options: ['The heart', 'The lungs', 'The brain', 'The stomach'], correct: 2 }
        ]
      },
      {
        id: 'g6_l3_energy',
        title: 'Energy',
        titleVi: 'Nang luong',
        emoji: '⚡',
        passage: 'Energy is the ability to do work, and it comes in many different forms. Fossil fuels like coal, oil, and natural gas have been our main energy sources for over a century. However, burning these fuels releases carbon dioxide and other pollutants that harm the environment. Renewable energy sources are becoming increasingly important as alternatives. Solar panels convert sunlight into electricity, while wind turbines use the power of moving air. Hydroelectric dams generate electricity from flowing water. Geothermal energy harnesses heat from deep inside the Earth. Nuclear power plants produce large amounts of energy but create radioactive waste that is difficult to store safely. Many countries are now investing in clean energy to reduce their dependence on fossil fuels. Vietnam has great potential for solar and wind energy due to its tropical climate and long coastline. Saving energy by turning off lights and using efficient appliances is something everyone can do to help.',
        vocabulary: [
          { word: 'fossil fuel', meaning: 'nhien lieu hoa thach', phonetic: '/ˈfɑː.səl fjuːəl/' },
          { word: 'solar', meaning: 'nang luong mat troi', phonetic: '/ˈsoʊ.lər/' },
          { word: 'turbine', meaning: 'tua bin', phonetic: '/ˈtɜːr.baɪn/' },
          { word: 'hydroelectric', meaning: 'thuy dien', phonetic: '/ˌhaɪ.droʊ.ɪˈlek.trɪk/' }
        ],
        questions: [
          { question: 'What problem does burning fossil fuels cause?', options: ['It creates water', 'It releases pollutants', 'It makes food', 'It builds roads'], correct: 1 },
          { question: 'How do solar panels work?', options: ['They burn gas', 'They convert sunlight to electricity', 'They use wind', 'They heat water'], correct: 1 },
          { question: 'Why does Vietnam have good potential for solar energy?', options: ['It has many rivers', 'It has tropical climate', 'It has mountains', 'It has forests'], correct: 1 },
          { question: 'What is a problem with nuclear power?', options: ['It is too expensive', 'It creates radioactive waste', 'It uses too much water', 'It is too slow'], correct: 1 }
        ]
      }
    ]
  },
  7: {
    level1: [
      {
        id: 'g7_l1_renaissance',
        title: 'Renaissance',
        titleVi: 'Thoi Phuc Hung',
        emoji: '🎨',
        passage: 'The Renaissance was a period of cultural rebirth that began in Italy in the fourteenth century and spread across Europe over the next three hundred years. The word Renaissance comes from the French word meaning rebirth, referring to the renewed interest in ancient Greek and Roman art, literature, and philosophy. Before the Renaissance, the medieval period was dominated by religious themes in art and limited scientific inquiry. During the Renaissance, artists like Leonardo da Vinci and Michelangelo created masterpieces that showed the beauty and complexity of the human form. Da Vinci was not only a painter but also an inventor, scientist, and engineer who designed flying machines centuries before the airplane was built. The printing press, invented by Johannes Gutenberg around 1440, revolutionized the spread of knowledge by making books affordable for ordinary people. Renaissance thinkers emphasized humanism, the idea that human beings have great potential and should explore the world through reason and observation. This period laid the foundation for modern science, art, and democratic thinking that continues to influence our world today.',
        vocabulary: [
          { word: 'renaissance', meaning: 'phuc hung', phonetic: '/ˈren.ə.sɑːns/' },
          { word: 'humanism', meaning: 'chu nghia nhan van', phonetic: '/ˈhjuː.mə.nɪ.zəm/' },
          { word: 'masterpiece', meaning: 'kiet tac', phonetic: '/ˈmæs.tər.piːs/' },
          { word: 'philosophy', meaning: 'triet hoc', phonetic: '/fɪˈlɑː.sə.fi/' }
        ],
        questions: [
          { question: 'Where did the Renaissance begin?', options: ['France', 'England', 'Italy', 'Germany'], correct: 2 },
          { question: 'What does the word Renaissance mean?', options: ['Revolution', 'Rebirth', 'Religion', 'Reform'], correct: 1 },
          { question: 'Who invented the printing press?', options: ['Leonardo da Vinci', 'Michelangelo', 'Johannes Gutenberg', 'Galileo'], correct: 2 },
          { question: 'What did humanism emphasize?', options: ['Religious authority', 'Military power', 'Human potential and reason', 'Artistic tradition'], correct: 2 }
        ]
      },
      {
        id: 'g7_l1_migration',
        title: 'Migration',
        titleVi: 'Di cu',
        emoji: '🗺️',
        passage: 'Migration is the movement of people from one place to another, and it has shaped human history for thousands of years. People migrate for many reasons, including seeking better economic opportunities, escaping war or persecution, reuniting with family members, or pursuing education. There are two main types of migration: internal migration, which occurs within a country, and international migration, which involves crossing national borders. In Vietnam, many people have migrated from rural areas to cities like Ho Chi Minh City and Hanoi in search of better jobs and higher incomes. This urbanization has led to rapid growth in these cities but has also created challenges such as overcrowding, pollution, and strain on public services. Globally, the United Nations estimates that there are approximately 281 million international migrants. Refugees are a special category of migrants who flee their home countries due to war, violence, or persecution. Countries and international organizations work together to provide refugees with shelter, food, and legal protection. Migration brings cultural diversity and economic benefits to host countries, but it also requires careful policies to ensure integration and social harmony.',
        vocabulary: [
          { word: 'migration', meaning: 'di cu', phonetic: '/maɪˈɡreɪ.ʃən/' },
          { word: 'refugee', meaning: 'nguoi ti nan', phonetic: '/ˌref.juˈdʒiː/' },
          { word: 'urbanization', meaning: 'do thi hoa', phonetic: '/ˌɜːr.bən.əˈzeɪ.ʃən/' },
          { word: 'persecution', meaning: 'su buc hai', phonetic: '/ˌpɜːr.sɪˈkjuː.ʃən/' }
        ],
        questions: [
          { question: 'What is internal migration?', options: ['Moving to another country', 'Moving within a country', 'Moving to another continent', 'Moving overseas'], correct: 1 },
          { question: 'Why do many Vietnamese people migrate to cities?', options: ['Better weather', 'Better jobs and income', 'Better food', 'Better air quality'], correct: 1 },
          { question: 'How many international migrants does the UN estimate?', options: ['About 100 million', 'About 200 million', 'About 281 million', 'About 500 million'], correct: 2 },
          { question: 'What challenges does urbanization create?', options: ['Better healthcare', 'More parks', 'Overcrowding and pollution', 'Lower prices'], correct: 2 }
        ]
      }
    ],
    level2: [
      {
        id: 'g7_l2_ai',
        title: 'AI Technology',
        titleVi: 'Cong nghe tri tue nhan tao',
        emoji: '🤖',
        passage: 'Artificial intelligence, commonly known as AI, refers to computer systems that can perform tasks normally requiring human intelligence. AI technology has advanced rapidly in recent years, transforming industries from healthcare to transportation. Machine learning, a subset of AI, allows computers to learn from data and improve their performance without being explicitly programmed. For example, streaming services like Netflix and Spotify use machine learning algorithms to recommend movies and songs based on your viewing and listening history. In healthcare, AI systems can analyze medical images to detect diseases like cancer earlier and more accurately than human doctors in some cases. Self-driving cars use AI to process information from cameras and sensors to navigate roads safely. Virtual assistants like Siri and Google Assistant use natural language processing to understand and respond to human speech. However, AI also raises important concerns about job displacement, privacy, and bias in decision-making. As AI becomes more powerful, society must develop ethical guidelines to ensure this technology benefits everyone fairly. The future of AI holds both exciting possibilities and serious responsibilities.',
        vocabulary: [
          { word: 'artificial intelligence', meaning: 'tri tue nhan tao', phonetic: '/ˌɑːr.tɪˈfɪʃ.əl ɪnˈtel.ə.dʒəns/' },
          { word: 'algorithm', meaning: 'thuat toan', phonetic: '/ˈæl.ɡə.rɪð.əm/' },
          { word: 'data', meaning: 'du lieu', phonetic: '/ˈdeɪ.tə/' },
          { word: 'ethical', meaning: 'dao duc', phonetic: '/ˈeθ.ɪ.kəl/' }
        ],
        questions: [
          { question: 'What does machine learning allow computers to do?', options: ['Replace humans completely', 'Learn from data and improve', 'Think like humans', 'Feel emotions'], correct: 1 },
          { question: 'How do streaming services use AI?', options: ['To create movies', 'To recommend content', 'To sell advertisements', 'To build websites'], correct: 1 },
          { question: 'What concern does AI raise about employment?', options: ['Higher salaries', 'More vacation days', 'Job displacement', 'Better working conditions'], correct: 2 },
          { question: 'What does natural language processing help AI do?', options: ['Draw pictures', 'Understand human speech', 'Play music', 'Cook food'], correct: 1 }
        ]
      },
      {
        id: 'g7_l2_mentalhealth',
        title: 'Mental Health',
        titleVi: 'Suc khoe tam than',
        emoji: '🧠',
        passage: 'Mental health is just as important as physical health, yet it is often overlooked or stigmatized in many societies. Mental health refers to our emotional, psychological, and social well-being, affecting how we think, feel, and act in daily life. Common mental health challenges include anxiety, depression, and stress, which can affect people of any age, gender, or background. For teenagers, academic pressure, social media comparisons, and relationship issues can significantly impact mental well-being. Warning signs of mental health problems include persistent sadness, withdrawal from friends and activities, changes in eating or sleeping habits, and difficulty concentrating. It is important to recognize that seeking help for mental health is a sign of strength, not weakness. Talking to a trusted adult, counselor, or therapist can make a tremendous difference. Regular exercise, adequate sleep, maintaining social connections, and practicing mindfulness are all proven strategies for protecting mental health. Schools and workplaces are increasingly recognizing the importance of mental health support programs. Breaking the stigma around mental health starts with open conversations and education.',
        vocabulary: [
          { word: 'mental health', meaning: 'suc khoe tam than', phonetic: '/ˈmen.təl helθ/' },
          { word: 'anxiety', meaning: 'lo lang', phonetic: '/æŋˈzaɪ.ə.ti/' },
          { word: 'stigma', meaning: 'su ky thi', phonetic: '/ˈstɪɡ.mə/' },
          { word: 'mindfulness', meaning: 'chanh niem', phonetic: '/ˈmaɪnd.fəl.nəs/' }
        ],
        questions: [
          { question: 'What does mental health affect?', options: ['Only our thoughts', 'Only our feelings', 'How we think, feel, and act', 'Only our physical body'], correct: 2 },
          { question: 'What is a warning sign of mental health problems?', options: ['Eating more vegetables', 'Exercising regularly', 'Persistent sadness and withdrawal', 'Reading more books'], correct: 2 },
          { question: 'What is seeking help for mental health a sign of?', options: ['Weakness', 'Failure', 'Strength', 'Laziness'], correct: 2 },
          { question: 'What strategy helps protect mental health?', options: ['Staying up late', 'Avoiding friends', 'Regular exercise and adequate sleep', 'Using more social media'], correct: 2 }
        ]
      }
    ],
    level3: [
      {
        id: 'g7_l3_biodiversity',
        title: 'Biodiversity',
        titleVi: 'Da dang sinh hoc',
        emoji: '🦋',
        passage: 'Biodiversity refers to the variety of all living things on Earth, from the smallest bacteria to the largest whales. Scientists have identified approximately 8.7 million species on our planet, but many more remain undiscovered, particularly in deep oceans and tropical rainforests. Biodiversity is essential for the health of ecosystems because each species plays a specific role in maintaining the balance of nature. Bees and butterflies pollinate flowers, enabling plants to reproduce and produce the fruits and vegetables humans depend on for food. Predators like wolves and sharks control the populations of other animals, preventing overgrazing and maintaining healthy ecosystems. Wetlands filter water naturally, while forests regulate climate patterns and prevent soil erosion. Unfortunately, biodiversity is declining at an alarming rate due to habitat destruction, pollution, climate change, and overexploitation of natural resources. The International Union for Conservation of Nature reports that over 40,000 species are currently threatened with extinction. Conservation efforts, including establishing protected areas, enforcing wildlife protection laws, and restoring damaged habitats, are crucial for preserving biodiversity. Each individual can contribute by supporting sustainable products, reducing waste, and learning about the natural world around them.',
        vocabulary: [
          { word: 'biodiversity', meaning: 'da dang sinh hoc', phonetic: '/ˌbaɪ.oʊ.daɪˈvɜːr.sə.ti/' },
          { word: 'ecosystem', meaning: 'he sinh thai', phonetic: '/ˈiː.koʊˌsɪs.təm/' },
          { word: 'extinction', meaning: 'su tuyet chung', phonetic: '/ɪkˈstɪŋk.ʃən/' },
          { word: 'conservation', meaning: 'bao ton', phonetic: '/ˌkɑːn.sərˈveɪ.ʃən/' }
        ],
        questions: [
          { question: 'How many species have scientists identified?', options: ['About 1 million', 'About 5 million', 'About 8.7 million', 'About 15 million'], correct: 2 },
          { question: 'Why are bees important for biodiversity?', options: ['They make honey', 'They pollinate flowers', 'They eat insects', 'They build nests'], correct: 1 },
          { question: 'How many species are threatened with extinction?', options: ['Over 10,000', 'Over 20,000', 'Over 40,000', 'Over 100,000'], correct: 2 },
          { question: 'What is NOT a cause of biodiversity decline?', options: ['Habitat destruction', 'Pollution', 'Conservation efforts', 'Climate change'], correct: 2 }
        ]
      },
      {
        id: 'g7_l3_urban',
        title: 'Urban Planning',
        titleVi: 'Quy hoach do thi',
        emoji: '🏙️',
        passage: 'Urban planning is the process of designing and organizing cities to make them functional, sustainable, and livable for their residents. As more than half of the world\'s population now lives in urban areas, effective city planning has become increasingly important. Good urban planning considers transportation systems, housing, green spaces, public services, and environmental sustainability. Efficient public transportation, including buses, trains, and bike lanes, reduces traffic congestion and air pollution while making cities more accessible. Mixed-use zoning, which combines residential, commercial, and recreational areas, creates walkable neighborhoods where people can live, work, and play without long commutes. Green infrastructure, such as parks, gardens, and tree-lined streets, improves air quality, reduces urban heat, and provides spaces for recreation and relaxation. Smart city technologies use sensors and data analytics to manage resources like water, electricity, and waste more efficiently. Ho Chi Minh City and Hanoi are both facing challenges of rapid urbanization, including traffic congestion, flooding, and air pollution. Urban planners in Vietnam are working on solutions such as new metro systems, improved drainage infrastructure, and stricter building regulations. Successful urban planning requires input from diverse stakeholders, including residents, businesses, and environmental experts.',
        vocabulary: [
          { word: 'urban', meaning: 'do thi', phonetic: '/ˈɜːr.bən/' },
          { word: 'infrastructure', meaning: 'co so ha tang', phonetic: '/ˈɪn.frə.strʌk.tʃər/' },
          { word: 'sustainable', meaning: 'ben vung', phonetic: '/səˈsteɪ.nə.bəl/' },
          { word: 'congestion', meaning: 'tac nghen', phonetic: '/kənˈdʒes.tʃən/' }
        ],
        questions: [
          { question: 'What percentage of the world\'s population lives in urban areas?', options: ['About 30%', 'About 40%', 'More than 50%', 'About 70%'], correct: 2 },
          { question: 'What does mixed-use zoning combine?', options: ['Only homes', 'Residential, commercial, and recreational areas', 'Only factories', 'Only parks'], correct: 1 },
          { question: 'What challenge does Ho Chi Minh City face?', options: ['Cold weather', 'Lack of people', 'Traffic congestion and flooding', 'Too many parks'], correct: 2 },
          { question: 'What do smart city technologies use to manage resources?', options: ['Paper records', 'Sensors and data analytics', 'Manual labor only', 'Traditional methods'], correct: 1 }
        ]
      }
    ]
  },
  8: {
    level1: [
      {
        id: 'g8_l1_industrial',
        title: 'Industrial Revolution',
        titleVi: 'Cach mang cong nghiep',
        emoji: '🏭',
        passage: 'The Industrial Revolution, which began in Britain in the late eighteenth century, was one of the most transformative periods in human history. Before industrialization, most people lived in rural areas and made goods by hand in their homes or small workshops. The invention of the steam engine by James Watt in 1769 powered factories and railways, enabling mass production and faster transportation of goods. Textile factories were among the first industries to mechanize, with machines like the spinning jenny and power loom dramatically increasing cloth production. The revolution brought about enormous economic growth and created a new middle class of factory owners and merchants. Cities expanded rapidly as workers migrated from the countryside to find employment in factories. However, working conditions in early factories were often terrible, with long hours, low wages, dangerous machinery, and child labor being common. Housing in industrial cities was frequently overcrowded and unsanitary, leading to the spread of diseases like cholera and typhoid. These conditions eventually led to social reforms, including labor laws that limited working hours, banned child labor, and improved workplace safety. The Industrial Revolution also had significant environmental consequences, as burning coal released massive amounts of pollution into the air and waterways. Despite its challenges, the Industrial Revolution fundamentally changed how goods were produced and distributed, setting the stage for the modern industrial economy.',
        vocabulary: [
          { word: 'industrialization', meaning: 'cong nghiep hoa', phonetic: '/ɪnˌdʌs.tri.ə.ləˈzeɪ.ʃən/' },
          { word: 'mechanize', meaning: 'co gioi hoa', phonetic: '/ˈmek.ə.naɪz/' },
          { word: 'revolution', meaning: 'cach mang', phonetic: '/ˌrev.əˈluː.ʃən/' },
          { word: 'reform', meaning: 'cai cach', phonetic: '/rɪˈfɔːrm/' }
        ],
        questions: [
          { question: 'Where did the Industrial Revolution begin?', options: ['France', 'Germany', 'Britain', 'United States'], correct: 2 },
          { question: 'What did James Watt invent?', options: ['The telephone', 'The steam engine', 'The light bulb', 'The printing press'], correct: 1 },
          { question: 'What was a common problem in early factories?', options: ['Too few workers', 'Child labor and long hours', 'Too much pay', 'Too many holidays'], correct: 1 },
          { question: 'What social changes resulted from poor working conditions?', options: ['More factories', 'Labor laws and reforms', 'Higher prices', 'Less education'], correct: 1 }
        ]
      },
      {
        id: 'g8_l1_genetics',
        title: 'Genetics',
        titleVi: 'Di truyen hoc',
        emoji: '🧬',
        passage: 'Genetics is the branch of biology that studies how traits are passed from parents to their offspring through genes. Every living organism carries DNA, a complex molecule that contains the instructions for building and maintaining life. DNA is organized into structures called chromosomes, and humans have 46 chromosomes arranged in 23 pairs. Gregor Mendel, an Austrian monk, is considered the father of genetics for his pioneering experiments with pea plants in the 1860s. He discovered that traits like flower color and plant height follow predictable patterns of inheritance. Each gene comes in different versions called alleles, and some alleles are dominant while others are recessive. A dominant allele will express its trait even if only one copy is present, while a recessive allele requires two copies to be expressed. Modern genetics has advanced far beyond Mendel\'s work. The Human Genome Project, completed in 2003, mapped all the genes in human DNA. This breakthrough has enabled scientists to identify genes associated with diseases like cancer, diabetes, and heart disease. Gene therapy, a cutting-edge medical technique, aims to treat genetic disorders by replacing faulty genes with healthy ones. Genetic engineering also allows scientists to modify organisms for agricultural purposes, creating crops that are more resistant to disease and drought. However, genetic technology raises ethical questions about privacy, discrimination, and the boundaries of human intervention in nature.',
        vocabulary: [
          { word: 'genetics', meaning: 'di truyen hoc', phonetic: '/dʒəˈnet.ɪks/' },
          { word: 'chromosome', meaning: 'nhiem sac the', phonetic: '/ˈkroʊ.mə.soʊm/' },
          { word: 'dominant', meaning: 'troi', phonetic: '/ˈdɑː.mɪ.nənt/' },
          { word: 'recessive', meaning: 'lan', phonetic: '/rɪˈses.ɪv/' }
        ],
        questions: [
          { question: 'How many chromosomes do humans have?', options: ['23', '36', '46', '52'], correct: 2 },
          { question: 'Who is considered the father of genetics?', options: ['Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'Isaac Newton'], correct: 1 },
          { question: 'When was the Human Genome Project completed?', options: ['1993', '1998', '2003', '2010'], correct: 2 },
          { question: 'What does gene therapy aim to do?', options: ['Clone organisms', 'Replace faulty genes with healthy ones', 'Create new species', 'Remove all genes'], correct: 1 }
        ]
      }
    ],
    level2: [
      {
        id: 'g8_l2_cybersecurity',
        title: 'Cybersecurity',
        titleVi: 'An ninh mang',
        emoji: '🔒',
        passage: 'Cybersecurity is the practice of protecting computer systems, networks, and data from digital attacks, theft, and damage. As our world becomes increasingly connected through the internet, cybersecurity has become essential for individuals, businesses, and governments alike. Cybercriminals use various methods to exploit vulnerabilities in digital systems. Phishing attacks involve sending deceptive emails or messages that trick people into revealing personal information such as passwords or credit card numbers. Malware, short for malicious software, includes viruses, ransomware, and spyware that can damage computers or steal data. Ransomware attacks encrypt a victim\'s files and demand payment for their release, costing businesses billions of dollars annually. Protecting yourself online requires several important practices. Using strong, unique passwords for each account and enabling two-factor authentication adds extra layers of security. Keeping software and operating systems updated patches known vulnerabilities that hackers might exploit. Being cautious about clicking links in emails from unknown senders helps prevent phishing attacks. Organizations invest heavily in firewalls, encryption, and security monitoring systems to protect their networks. Cybersecurity professionals are in high demand worldwide, making it a promising career field for students interested in technology and problem-solving. As technology continues to evolve, so do the threats, making cybersecurity an ongoing and critical challenge.',
        vocabulary: [
          { word: 'cybersecurity', meaning: 'an ninh mang', phonetic: '/ˈsaɪ.bər.sɪˌkjʊr.ə.ti/' },
          { word: 'phishing', meaning: 'lua dao truc tuyen', phonetic: '/ˈfɪʃ.ɪŋ/' },
          { word: 'malware', meaning: 'phan mem doc hai', phonetic: '/ˈmæl.wer/' },
          { word: 'encryption', meaning: 'ma hoa', phonetic: '/ɪnˈkrɪp.ʃən/' }
        ],
        questions: [
          { question: 'What is phishing?', options: ['A type of fishing', 'Deceptive messages to steal information', 'A computer virus', 'A security software'], correct: 1 },
          { question: 'What does ransomware do?', options: ['Speeds up computers', 'Encrypts files and demands payment', 'Protects networks', 'Updates software'], correct: 1 },
          { question: 'What is two-factor authentication?', options: ['Using two computers', 'An extra layer of security', 'Having two passwords', 'Using two browsers'], correct: 1 },
          { question: 'Why are cybersecurity professionals in high demand?', options: ['They work fewer hours', 'Threats continue to evolve', 'They earn less', 'There are too many of them'], correct: 1 }
        ]
      },
      {
        id: 'g8_l2_trade',
        title: 'Global Trade',
        titleVi: 'Thuong mai toan cau',
        emoji: '🚢',
        passage: 'Global trade is the exchange of goods and services between countries, and it plays a vital role in the modern world economy. Countries trade with each other because no single nation can produce everything its people need efficiently. The theory of comparative advantage, developed by economist David Ricardo, explains that countries benefit by specializing in producing goods they can make most efficiently and trading for the rest. For example, Vietnam is one of the world\'s largest exporters of rice, coffee, and textiles because it has favorable conditions for agriculture and manufacturing. In return, Vietnam imports machinery, electronics, and petroleum products. International trade is facilitated by organizations like the World Trade Organization, which sets rules for trade between nations and helps resolve disputes. Free trade agreements, such as the Comprehensive and Progressive Agreement for Trans-Pacific Partnership, reduce tariffs and barriers between member countries, encouraging economic cooperation. Container shipping revolutionized global trade by making it cheaper and faster to transport goods across oceans. However, global trade also has drawbacks, including environmental impacts from shipping, potential exploitation of workers in developing countries, and economic vulnerability when supply chains are disrupted by events like pandemics or natural disasters. Balancing the benefits and challenges of global trade remains an important issue for policymakers worldwide.',
        vocabulary: [
          { word: 'trade', meaning: 'thuong mai', phonetic: '/treɪd/' },
          { word: 'export', meaning: 'xuat khau', phonetic: '/ɪkˈspɔːrt/' },
          { word: 'import', meaning: 'nhap khau', phonetic: '/ɪmˈpɔːrt/' },
          { word: 'tariff', meaning: 'thue quan', phonetic: '/ˈtær.ɪf/' }
        ],
        questions: [
          { question: 'What does the theory of comparative advantage suggest?', options: ['Countries should be self-sufficient', 'Countries should specialize and trade', 'Countries should not trade', 'Countries should all produce the same goods'], correct: 1 },
          { question: 'What is Vietnam a major exporter of?', options: ['Cars and electronics', 'Rice, coffee, and textiles', 'Oil and gas', 'Diamonds and gold'], correct: 1 },
          { question: 'What organization sets rules for international trade?', options: ['United Nations', 'World Bank', 'World Trade Organization', 'International Monetary Fund'], correct: 2 },
          { question: 'What revolutionized the transportation of goods across oceans?', options: ['Airplanes', 'Container shipping', 'Trains', 'Trucks'], correct: 1 }
        ]
      }
    ],
    level3: [
      {
        id: 'g8_l3_philosophy',
        title: 'Philosophy',
        titleVi: 'Triet hoc',
        emoji: '🤔',
        passage: 'Philosophy, derived from the Greek words meaning love of wisdom, is the study of fundamental questions about existence, knowledge, values, reason, and the nature of reality. Ancient Greek philosophers like Socrates, Plato, and Aristotle laid the foundations for Western philosophical thought over two thousand years ago. Socrates developed the Socratic method, a form of questioning designed to stimulate critical thinking and expose contradictions in people\'s beliefs. Plato, his student, proposed the Theory of Forms, arguing that the physical world is merely a shadow of a higher reality of perfect, eternal forms. Aristotle, Plato\'s student, took a more empirical approach, emphasizing observation and classification of the natural world. Eastern philosophy developed independently, with Confucianism in China emphasizing social harmony, respect for elders, and moral virtue. Buddhism, originating in India, teaches that suffering arises from attachment and desire, and that enlightenment can be achieved through meditation and ethical living. Vietnamese philosophy has been influenced by both Confucianism and Buddhism, along with indigenous traditions. In the modern era, existentialist philosophers like Jean-Paul Sartre argued that individuals must create their own meaning in an inherently meaningless universe. Philosophy continues to be relevant today, helping us examine ethical dilemmas in medicine, technology, politics, and everyday life. Critical thinking skills developed through philosophical study are valuable in virtually every career and aspect of human experience.',
        vocabulary: [
          { word: 'philosophy', meaning: 'triet hoc', phonetic: '/fɪˈlɑː.sə.fi/' },
          { word: 'empirical', meaning: 'thuc nghiem', phonetic: '/ɪmˈpɪr.ɪ.kəl/' },
          { word: 'existentialism', meaning: 'chu nghia hien sinh', phonetic: '/ˌeɡ.zɪˈsten.ʃəl.ɪ.zəm/' },
          { word: 'ethical', meaning: 'dao duc', phonetic: '/ˈeθ.ɪ.kəl/' }
        ],
        questions: [
          { question: 'What does philosophy mean in Greek?', options: ['Love of life', 'Love of wisdom', 'Love of nature', 'Love of art'], correct: 1 },
          { question: 'What did Socrates develop?', options: ['Theory of Forms', 'The Socratic method', 'Empirical observation', 'Existentialism'], correct: 1 },
          { question: 'What does Confucianism emphasize?', options: ['Individual freedom', 'Social harmony and respect', 'Scientific discovery', 'Military strength'], correct: 1 },
          { question: 'What did existentialist philosophers argue?', options: ['Life has predetermined meaning', 'Individuals must create their own meaning', 'Science explains everything', 'Philosophy is unnecessary'], correct: 1 }
        ]
      },
      {
        id: 'g8_l3_spaceexploration',
        title: 'Space Exploration',
        titleVi: 'Kham pha vu tru',
        emoji: '🛸',
        passage: 'Space exploration represents humanity\'s quest to understand the universe beyond our planet and has led to remarkable achievements over the past seven decades. The Space Age began in 1957 when the Soviet Union launched Sputnik, the first artificial satellite, into orbit around Earth. This event triggered the Space Race between the Soviet Union and the United States, culminating in NASA\'s Apollo 11 mission in 1969, when astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon. Since then, space agencies have launched numerous robotic missions to explore other planets in our solar system. NASA\'s Mars rovers, including Curiosity and Perseverance, have provided valuable data about the Red Planet\'s geology and potential for past microbial life. The International Space Station, a collaborative project involving fifteen countries, has been continuously occupied since 2000, serving as a laboratory for scientific research in microgravity. Private companies like SpaceX, founded by Elon Musk, are revolutionizing space travel by developing reusable rockets that significantly reduce launch costs. SpaceX\'s Starship is designed to carry humans to Mars, potentially making interplanetary colonization a reality within the coming decades. The James Webb Space Telescope, launched in 2021, has provided unprecedented views of distant galaxies, exoplanets, and the early universe. Space exploration has also yielded practical benefits for life on Earth, including satellite communications, weather forecasting, GPS navigation, and medical technologies originally developed for astronauts. Despite the enormous costs and risks involved, space exploration continues to inspire wonder and push the boundaries of human knowledge and capability.',
        vocabulary: [
          { word: 'satellite', meaning: 've tinh', phonetic: '/ˈsæt.əl.aɪt/' },
          { word: 'microgravity', meaning: 'vi trong luc', phonetic: '/ˌmaɪ.kroʊˈɡræv.ə.ti/' },
          { word: 'colonization', meaning: 'thuoc dia hoa/dinh cu', phonetic: '/ˌkɑː.lə.nəˈzeɪ.ʃən/' },
          { word: 'exoplanet', meaning: 'ngoai hanh tinh', phonetic: '/ˈek.soʊˌplæn.ɪt/' }
        ],
        questions: [
          { question: 'What was the first artificial satellite?', options: ['Apollo', 'Sputnik', 'Voyager', 'Hubble'], correct: 1 },
          { question: 'How many countries collaborate on the International Space Station?', options: ['Five', 'Ten', 'Fifteen', 'Twenty'], correct: 2 },
          { question: 'What is SpaceX\'s Starship designed for?', options: ['Orbiting Earth', 'Carrying humans to Mars', 'Studying the Sun', 'Mining asteroids'], correct: 1 },
          { question: 'When was the James Webb Space Telescope launched?', options: ['2015', '2018', '2021', '2023'], correct: 2 }
        ]
      }
    ]
  },
  9: {
    level1: [
      {
        id: 'g9_l1_democracy',
        title: 'Democracy',
        titleVi: 'Dan chu',
        emoji: '🗳️',
        passage: 'Democracy is a system of government in which power is vested in the people, who exercise it directly or through elected representatives. The concept of democracy originated in ancient Athens, Greece, around the fifth century BCE, where citizens gathered in assemblies to vote on laws and policies directly. However, this early form of democracy was limited, as only free adult male citizens could participate, excluding women, slaves, and foreigners. Modern democracy has evolved significantly from its ancient roots. Representative democracy, the most common form today, allows citizens to elect officials who make decisions on their behalf in legislative bodies such as parliaments and congresses. Key principles of democracy include the rule of law, protection of individual rights and freedoms, separation of powers between branches of government, free and fair elections, freedom of speech and press, and an independent judiciary. These principles work together to prevent the concentration of power and protect citizens from government overreach. Different countries practice democracy in various forms. The United States has a presidential system with a strong separation of powers, while the United Kingdom operates under a parliamentary system where the prime minister is the leader of the majority party in Parliament. Constitutional democracies use written constitutions to define government structure and protect fundamental rights. Challenges to democracy in the modern world include voter apathy, the spread of misinformation, political polarization, corruption, and the influence of money in politics. Despite these challenges, democracy remains the most widely adopted system of governance globally, with international organizations actively promoting democratic values and human rights. The strength of a democracy ultimately depends on the active and informed participation of its citizens.',
        vocabulary: [
          { word: 'democracy', meaning: 'dan chu', phonetic: '/dɪˈmɑː.krə.si/' },
          { word: 'representative', meaning: 'dai dien', phonetic: '/ˌrep.rɪˈzen.tə.tɪv/' },
          { word: 'constitution', meaning: 'hien phap', phonetic: '/ˌkɑːn.stɪˈtuː.ʃən/' },
          { word: 'judiciary', meaning: 'tu phap', phonetic: '/dʒuːˈdɪʃ.i.er.i/' }
        ],
        questions: [
          { question: 'Where did democracy originate?', options: ['Rome', 'Athens', 'Egypt', 'Persia'], correct: 1 },
          { question: 'What is representative democracy?', options: ['Citizens vote on every law', 'Citizens elect officials to make decisions', 'A king makes all decisions', 'Military leaders govern'], correct: 1 },
          { question: 'Which is NOT a principle of democracy?', options: ['Rule of law', 'Free elections', 'Concentration of power', 'Freedom of speech'], correct: 2 },
          { question: 'What is a challenge to modern democracy?', options: ['Too many voters', 'Voter apathy and misinformation', 'Too many parties', 'Too much transparency'], correct: 1 }
        ]
      },
      {
        id: 'g9_l1_quantum',
        title: 'Quantum Physics',
        titleVi: 'Vat ly luong tu',
        emoji: '⚛️',
        passage: 'Quantum physics is the branch of science that studies the behavior of matter and energy at the smallest scales, dealing with atoms and subatomic particles. Unlike classical physics, which describes the predictable motion of everyday objects, quantum physics reveals a world that operates according to fundamentally different rules. One of the most revolutionary concepts in quantum physics is wave-particle duality, which states that particles like electrons and photons can behave both as waves and as particles, depending on how they are observed. Werner Heisenberg\'s Uncertainty Principle established that it is impossible to simultaneously know both the exact position and momentum of a particle with perfect accuracy. This is not due to limitations in our measuring instruments but is a fundamental property of nature itself. Quantum superposition allows particles to exist in multiple states simultaneously until they are measured, at which point they collapse into a single definite state. This concept inspired the famous thought experiment known as Schrodinger\'s Cat, where a hypothetical cat in a box is simultaneously alive and dead until observed. Quantum entanglement, which Einstein famously called spooky action at a distance, describes how two particles can become connected so that measuring one instantly affects the other, regardless of the distance between them. These principles have practical applications in modern technology. Quantum computing uses superposition and entanglement to process information in ways that classical computers cannot, potentially solving complex problems in minutes that would take traditional computers thousands of years. Quantum mechanics also underlies technologies we use every day, including lasers, transistors, MRI machines, and LED displays. Research in quantum physics continues to challenge our understanding of reality and push the boundaries of what technology can achieve.',
        vocabulary: [
          { word: 'quantum', meaning: 'luong tu', phonetic: '/ˈkwɑːn.təm/' },
          { word: 'subatomic', meaning: 'ha nguyen tu', phonetic: '/ˌsʌb.əˈtɑː.mɪk/' },
          { word: 'superposition', meaning: 'chong chat', phonetic: '/ˌsuː.pər.pəˈzɪʃ.ən/' },
          { word: 'entanglement', meaning: 'vuong mac luong tu', phonetic: '/ɪnˈtæŋ.ɡəl.mənt/' }
        ],
        questions: [
          { question: 'What does wave-particle duality mean?', options: ['Particles only act as waves', 'Particles can behave as both waves and particles', 'Waves and particles are the same', 'Particles cannot be measured'], correct: 1 },
          { question: 'What does Heisenberg\'s Uncertainty Principle state?', options: ['Everything is uncertain', 'Position and momentum cannot both be known exactly', 'Particles do not move', 'Energy cannot be measured'], correct: 1 },
          { question: 'What did Einstein call quantum entanglement?', options: ['Beautiful mathematics', 'Spooky action at a distance', 'The greatest discovery', 'Impossible physics'], correct: 1 },
          { question: 'What everyday technology relies on quantum mechanics?', options: ['Bicycles', 'Pencils', 'Lasers and transistors', 'Clocks and watches'], correct: 2 }
        ]
      }
    ],
    level2: [
      {
        id: 'g9_l2_bioethics',
        title: 'Bioethics',
        titleVi: 'Dao duc sinh hoc',
        emoji: '⚕️',
        passage: 'Bioethics is the study of ethical issues arising from advances in biology, medicine, and biotechnology. As scientific capabilities expand, society faces increasingly complex moral dilemmas about what we should and should not do with these powerful technologies. One of the most debated topics in bioethics is genetic engineering, particularly the use of CRISPR technology to edit human genes. While gene editing offers the potential to eliminate hereditary diseases like sickle cell anemia and cystic fibrosis, it also raises concerns about creating designer babies, where parents could select traits like intelligence, appearance, or athletic ability. The ethical principle of autonomy recognizes individuals\' right to make informed decisions about their own bodies and medical treatments. However, this principle becomes complicated when decisions affect others, such as in the case of vaccination, where individual choices can impact public health. Organ transplantation saves thousands of lives each year, but the shortage of available organs raises ethical questions about fair allocation, organ trafficking, and whether financial incentives should be offered to donors. The development of artificial organs and xenotransplantation, using animal organs in humans, presents both promising solutions and new ethical challenges. Clinical trials for new drugs and treatments must balance the potential benefits of medical advancement against the risks to research participants. Informed consent, where participants fully understand the risks and voluntarily agree to participate, is a cornerstone of ethical research. End-of-life care, including euthanasia and assisted suicide, remains one of the most emotionally charged bioethical debates, with different countries and cultures holding vastly different views. Bioethics committees in hospitals and research institutions play a crucial role in reviewing proposals and ensuring that medical research and practice respect human dignity and rights.',
        vocabulary: [
          { word: 'bioethics', meaning: 'dao duc sinh hoc', phonetic: '/ˌbaɪ.oʊˈeθ.ɪks/' },
          { word: 'autonomy', meaning: 'quyen tu chu', phonetic: '/ɔːˈtɑː.nə.mi/' },
          { word: 'consent', meaning: 'su dong y', phonetic: '/kənˈsent/' },
          { word: 'euthanasia', meaning: 'an tu', phonetic: '/ˌjuː.θəˈneɪ.ʒə/' }
        ],
        questions: [
          { question: 'What technology can be used to edit human genes?', options: ['MRI', 'X-ray', 'CRISPR', 'Ultrasound'], correct: 2 },
          { question: 'What does the principle of autonomy recognize?', options: ['Government control over health', 'Individuals\' right to make medical decisions', 'Doctors\' authority over patients', 'Religious laws about medicine'], correct: 1 },
          { question: 'What is xenotransplantation?', options: ['Cloning humans', 'Using animal organs in humans', 'Growing organs in labs', 'Transplanting between humans'], correct: 1 },
          { question: 'What is informed consent?', options: ['Signing any document', 'Fully understanding risks and voluntarily agreeing', 'Being forced to participate', 'Doctors making decisions alone'], correct: 1 }
        ]
      },
      {
        id: 'g9_l2_globalization',
        title: 'Globalization',
        titleVi: 'Toan cau hoa',
        emoji: '🌐',
        passage: 'Globalization is the process by which the world has become increasingly interconnected through trade, communication, technology, and cultural exchange. While international trade has existed for centuries, the pace of globalization accelerated dramatically in the late twentieth century with the advent of the internet, containerized shipping, and international trade agreements. Economic globalization has enabled multinational corporations to establish operations across multiple countries, taking advantage of lower labor costs, access to raw materials, and new consumer markets. This has contributed to significant economic growth in many developing nations, lifting hundreds of millions of people out of poverty. Vietnam has been one of the major beneficiaries of economic globalization, transforming from one of the world\'s poorest countries to a middle-income nation through export-oriented manufacturing and foreign investment. Cultural globalization involves the spread of ideas, values, and practices across national borders. English has become the dominant language of international business and academia, while American movies, music, and fast food chains have become ubiquitous worldwide. However, critics argue that cultural globalization can lead to the erosion of local traditions and languages, creating a homogenized global culture. Technological globalization has connected billions of people through the internet and social media, enabling instant communication and access to information regardless of geographical location. The COVID-19 pandemic exposed both the strengths and vulnerabilities of our globalized world, demonstrating how quickly diseases can spread across borders while also showing how international cooperation can lead to rapid vaccine development. Critics of globalization point to growing income inequality, environmental degradation from increased industrial production and shipping, and the exploitation of workers in developing countries. Finding a balance between the benefits of global integration and protecting local communities and environments remains one of the defining challenges of our time.',
        vocabulary: [
          { word: 'globalization', meaning: 'toan cau hoa', phonetic: '/ˌɡloʊ.bəl.əˈzeɪ.ʃən/' },
          { word: 'multinational', meaning: 'da quoc gia', phonetic: '/ˌmʌl.tiˈnæʃ.ən.əl/' },
          { word: 'homogenized', meaning: 'dong nhat hoa', phonetic: '/hoʊˈmɑː.dʒə.naɪzd/' },
          { word: 'inequality', meaning: 'bat binh dang', phonetic: '/ˌɪn.ɪˈkwɑː.lə.ti/' }
        ],
        questions: [
          { question: 'What accelerated globalization in the late twentieth century?', options: ['Wars', 'Famine', 'Internet and trade agreements', 'Colonization'], correct: 2 },
          { question: 'How has Vietnam benefited from globalization?', options: ['Through isolationism', 'Through export-oriented manufacturing', 'Through military expansion', 'Through resource extraction only'], correct: 1 },
          { question: 'What concern do critics have about cultural globalization?', options: ['Too many languages', 'Erosion of local traditions', 'Too much art', 'Excessive sports'], correct: 1 },
          { question: 'What did the COVID-19 pandemic reveal about globalization?', options: ['It has no weaknesses', 'Both strengths and vulnerabilities', 'Only negative effects', 'It should be stopped'], correct: 1 }
        ]
      }
    ],
    level3: [
      {
        id: 'g9_l3_literature',
        title: 'Literature Analysis',
        titleVi: 'Phan tich van hoc',
        emoji: '📚',
        passage: 'Literature analysis is the careful examination and interpretation of literary texts to uncover deeper meanings, themes, and artistic techniques employed by authors. A skilled reader looks beyond the surface narrative to explore how elements like symbolism, metaphor, irony, and narrative perspective contribute to a work\'s overall meaning and impact. Symbolism, the use of objects or events to represent abstract ideas, is one of the most powerful literary devices. In F. Scott Fitzgerald\'s novel, the green light across the bay symbolizes unattainable dreams and the illusion of the American Dream. Metaphor creates implicit comparisons between unlike things, enriching language and deepening understanding. When Shakespeare wrote that the world is a stage, he invited readers to consider how people perform roles in their daily lives. Irony, the contrast between appearance and reality, comes in several forms. Dramatic irony occurs when the audience knows something that characters do not, creating tension and suspense. Situational irony happens when outcomes differ dramatically from expectations. Narrative perspective profoundly shapes how stories are told and interpreted. A first-person narrator provides intimate access to a character\'s thoughts but may be unreliable. An omniscient third-person narrator offers a broader view but may create emotional distance. Historical and cultural context is essential for understanding literature. Works written during periods of colonialism, war, or social upheaval often reflect and critique the conditions of their time. Vietnamese literature, from the Tale of Kieu by Nguyen Du to modern works, provides rich material for analysis, exploring themes of loyalty, sacrifice, social justice, and national identity. Feminist, postcolonial, and psychoanalytic literary criticism each offer different lenses through which to interpret texts, revealing how literature both reflects and shapes societal values. Developing strong analytical skills in literature enhances critical thinking, empathy, and communication abilities that are valuable in all areas of life.',
        vocabulary: [
          { word: 'symbolism', meaning: 'chu nghia bieu tuong', phonetic: '/ˈsɪm.bəl.ɪ.zəm/' },
          { word: 'metaphor', meaning: 'an du', phonetic: '/ˈmet.ə.fɔːr/' },
          { word: 'irony', meaning: 'su mai mia/nghich ly', phonetic: '/ˈaɪ.rə.ni/' },
          { word: 'narrative', meaning: 'tu su', phonetic: '/ˈnær.ə.tɪv/' }
        ],
        questions: [
          { question: 'What does literary symbolism involve?', options: ['Using simple language', 'Objects representing abstract ideas', 'Writing long sentences', 'Using only real events'], correct: 1 },
          { question: 'What is dramatic irony?', options: ['When characters laugh', 'When the audience knows what characters do not', 'When the plot is funny', 'When the ending is happy'], correct: 1 },
          { question: 'What is a weakness of first-person narration?', options: ['It is too detailed', 'The narrator may be unreliable', 'It uses too many characters', 'It is always boring'], correct: 1 },
          { question: 'Which Vietnamese literary work is mentioned?', options: ['The Quiet American', 'The Tale of Kieu', 'Dream of the Red Chamber', 'The Art of War'], correct: 1 }
        ]
      },
      {
        id: 'g9_l3_sustainability',
        title: 'Sustainability',
        titleVi: 'Phat trien ben vung',
        emoji: '🌱',
        passage: 'Sustainability refers to meeting the needs of the present generation without compromising the ability of future generations to meet their own needs. This concept, popularized by the 1987 Brundtland Report, encompasses three interconnected pillars: environmental protection, economic development, and social equity. Environmental sustainability requires managing natural resources responsibly, reducing pollution, and preserving biodiversity. The concept of ecological footprint measures how much of the Earth\'s resources an individual, community, or country consumes compared to what the planet can regenerate. Currently, humanity\'s ecological footprint exceeds the Earth\'s capacity by about seventy-five percent, meaning we would need approximately 1.75 Earths to sustain our current consumption levels. Economic sustainability involves creating systems that generate prosperity without depleting natural resources or creating excessive inequality. The circular economy model, which emphasizes reusing, repairing, and recycling materials rather than the traditional take-make-dispose approach, offers a promising framework for sustainable economic growth. Companies increasingly recognize that sustainable business practices can reduce costs, attract environmentally conscious consumers, and ensure long-term viability. Social sustainability focuses on ensuring that all people have access to basic needs like food, clean water, healthcare, education, and housing. The United Nations\' seventeen Sustainable Development Goals, adopted in 2015, provide a comprehensive framework addressing poverty, inequality, climate change, environmental degradation, and justice. Vietnam has made significant progress toward several of these goals, particularly in poverty reduction and education access. Individual actions, such as reducing energy consumption, choosing sustainable products, minimizing food waste, and supporting ethical businesses, collectively make a meaningful impact. However, systemic changes in government policies, corporate practices, and international cooperation are essential for achieving true sustainability on a global scale.',
        vocabulary: [
          { word: 'sustainability', meaning: 'su ben vung', phonetic: '/səˌsteɪ.nəˈbɪl.ə.ti/' },
          { word: 'ecological', meaning: 'sinh thai', phonetic: '/ˌiː.kəˈlɑː.dʒɪ.kəl/' },
          { word: 'circular economy', meaning: 'kinh te tuan hoan', phonetic: '/ˈsɜːr.kjə.lər ɪˈkɑː.nə.mi/' },
          { word: 'equity', meaning: 'cong bang', phonetic: '/ˈek.wə.ti/' }
        ],
        questions: [
          { question: 'What are the three pillars of sustainability?', options: ['Land, sea, and air', 'Past, present, and future', 'Environment, economy, and social equity', 'Food, water, and energy'], correct: 2 },
          { question: 'How many Earths would we need at current consumption?', options: ['About 1.25', 'About 1.75', 'About 2.5', 'About 3.0'], correct: 1 },
          { question: 'What does the circular economy emphasize?', options: ['Making more products', 'Reusing, repairing, and recycling', 'Consuming more resources', 'Building more factories'], correct: 1 },
          { question: 'How many Sustainable Development Goals did the UN adopt?', options: ['Ten', 'Fifteen', 'Seventeen', 'Twenty'], correct: 2 }
        ]
      }
    ]
  },
  10: {
    level1: [
      {
        id: 'g10_l1_economics',
        title: 'Economic Systems',
        titleVi: 'He thong kinh te',
        emoji: '📊',
        passage: 'Economic systems are the frameworks through which societies organize the production, distribution, and consumption of goods and services. The three primary economic systems are market economies, command economies, and mixed economies, each reflecting different philosophies about how resources should be allocated. In a market economy, also known as capitalism, private individuals and businesses make most economic decisions based on supply and demand. Prices are determined by market forces, and competition between businesses drives innovation and efficiency. The United States and most Western European nations operate primarily as market economies, though with varying degrees of government regulation. A command economy, associated with socialism and communism, places economic decision-making in the hands of a central government that owns most means of production and determines what goods are produced, how they are produced, and for whom. Historically, the Soviet Union and Maoist China operated as command economies, though both systems faced significant challenges including inefficiency, shortages, and lack of consumer choice. Most modern economies are mixed economies that combine elements of both market and command systems. Governments in mixed economies typically provide public goods like infrastructure, education, and healthcare while allowing private enterprise to operate in most sectors. Vietnam operates a socialist-oriented market economy, which combines state ownership of key industries with market mechanisms and private sector development. This model has facilitated Vietnam\'s remarkable economic growth since the Doi Moi reforms of 1986. Economists continue to debate the optimal balance between government intervention and free market forces. The 2008 global financial crisis demonstrated that unregulated markets can produce devastating consequences, while excessive government control can stifle innovation and economic freedom. Understanding different economic systems helps citizens make informed decisions about policies that affect their livelihoods and communities.',
        vocabulary: [
          { word: 'capitalism', meaning: 'chu nghia tu ban', phonetic: '/ˈkæp.ɪ.təl.ɪ.zəm/' },
          { word: 'socialism', meaning: 'chu nghia xa hoi', phonetic: '/ˈsoʊ.ʃəl.ɪ.zəm/' },
          { word: 'supply and demand', meaning: 'cung va cau', phonetic: '/səˈplaɪ ənd dɪˈmænd/' },
          { word: 'regulation', meaning: 'quy dinh', phonetic: '/ˌreɡ.jəˈleɪ.ʃən/' }
        ],
        questions: [
          { question: 'What determines prices in a market economy?', options: ['The government', 'Supply and demand', 'Religious leaders', 'International organizations'], correct: 1 },
          { question: 'What type of economy does Vietnam have?', options: ['Pure market economy', 'Command economy', 'Socialist-oriented market economy', 'Traditional economy'], correct: 2 },
          { question: 'When did Vietnam\'s Doi Moi reforms begin?', options: ['1976', '1986', '1996', '2006'], correct: 1 },
          { question: 'What did the 2008 financial crisis demonstrate?', options: ['Markets always work perfectly', 'Unregulated markets can cause devastating consequences', 'Government should control everything', 'Economics is irrelevant'], correct: 1 }
        ]
      },
      {
        id: 'g10_l1_neuroscience',
        title: 'Neuroscience',
        titleVi: 'Khoa hoc than kinh',
        emoji: '🧠',
        passage: 'Neuroscience is the scientific study of the nervous system, particularly the brain, which is arguably the most complex organ in the known universe. The human brain contains approximately 86 billion neurons, each connected to thousands of others through synapses, creating an intricate network capable of processing vast amounts of information simultaneously. Neurons communicate through both electrical impulses and chemical signals called neurotransmitters. Different neurotransmitters serve different functions: dopamine is associated with pleasure and reward, serotonin helps regulate mood and sleep, and acetylcholine plays a crucial role in memory and learning. Neuroplasticity, the brain\'s ability to reorganize and form new neural connections throughout life, is one of the most significant discoveries in modern neuroscience. This means that the brain is not fixed after childhood but continues to change and adapt in response to experience, learning, and even injury. Studies have shown that musicians who practice regularly develop larger brain regions associated with motor control and hearing. Similarly, bilingual individuals show enhanced cognitive flexibility and delayed onset of dementia. Advances in neuroimaging technologies like functional MRI and PET scans have allowed scientists to observe brain activity in real time, revolutionizing our understanding of how different brain regions contribute to specific functions. The prefrontal cortex, located behind the forehead, is responsible for decision-making, planning, and impulse control, and continues developing until the mid-twenties, which explains some of the risk-taking behavior common in adolescents. Research in neuroscience has important applications in treating neurological disorders such as Alzheimer\'s disease, Parkinson\'s disease, epilepsy, and depression. Brain-computer interfaces represent an exciting frontier, potentially allowing paralyzed individuals to control devices with their thoughts alone.',
        vocabulary: [
          { word: 'neuron', meaning: 'te bao than kinh', phonetic: '/ˈnʊr.ɑːn/' },
          { word: 'synapse', meaning: 'khop than kinh', phonetic: '/ˈsɪn.æps/' },
          { word: 'neurotransmitter', meaning: 'chat dan truyen than kinh', phonetic: '/ˌnʊr.oʊ.trænsˈmɪt̬.ər/' },
          { word: 'neuroplasticity', meaning: 'tinh de uon cua than kinh', phonetic: '/ˌnʊr.oʊ.plæsˈtɪs.ə.ti/' }
        ],
        questions: [
          { question: 'How many neurons does the human brain contain?', options: ['About 10 billion', 'About 50 billion', 'About 86 billion', 'About 100 billion'], correct: 2 },
          { question: 'What neurotransmitter is associated with pleasure and reward?', options: ['Serotonin', 'Dopamine', 'Acetylcholine', 'Adrenaline'], correct: 1 },
          { question: 'What is neuroplasticity?', options: ['Brain damage', 'The brain\'s ability to form new connections', 'A type of surgery', 'A brain disease'], correct: 1 },
          { question: 'Until what age does the prefrontal cortex develop?', options: ['Late teens', 'Early twenties', 'Mid-twenties', 'Thirties'], correct: 2 }
        ]
      }
    ],
    level2: [
      {
        id: 'g10_l2_medialiteracy',
        title: 'Media Literacy',
        titleVi: 'Hieu biet truyen thong',
        emoji: '📰',
        passage: 'Media literacy is the ability to critically analyze, evaluate, and create media content across various platforms and formats. In today\'s information-saturated environment, where people encounter thousands of media messages daily through social media, news websites, television, podcasts, and advertisements, media literacy has become an essential skill for informed citizenship. Understanding media literacy begins with recognizing that all media messages are constructed by someone with a particular purpose, perspective, and intended audience. News organizations, while ideally striving for objectivity, inevitably make choices about which stories to cover, which sources to interview, and how to frame issues. These editorial decisions can significantly influence public perception and opinion. Confirmation bias, the tendency to seek out and believe information that confirms our existing beliefs while dismissing contradictory evidence, makes individuals particularly vulnerable to misinformation. The rise of social media has democratized information sharing, allowing anyone to publish content that can reach millions. However, this has also facilitated the rapid spread of misinformation and disinformation. Misinformation refers to false information shared unintentionally, while disinformation is deliberately created and distributed to deceive. Deepfake technology, which uses artificial intelligence to create convincing but fabricated videos, represents a particularly concerning development for media authenticity. Developing strong media literacy skills involves several practices: checking multiple sources before accepting claims as true, examining the credentials and potential biases of authors and organizations, distinguishing between news reporting and opinion, recognizing emotional manipulation in advertising and propaganda, and understanding how algorithms curate the content we see online, creating filter bubbles that limit our exposure to diverse perspectives. Educational institutions worldwide are increasingly incorporating media literacy into their curricula, recognizing its importance for democratic participation and critical thinking. Vietnam\'s education system has begun emphasizing digital literacy skills to prepare students for navigating the complex modern media landscape responsibly.',
        vocabulary: [
          { word: 'media literacy', meaning: 'hieu biet truyen thong', phonetic: '/ˈmiː.di.ə ˈlɪt.ər.ə.si/' },
          { word: 'misinformation', meaning: 'thong tin sai lech', phonetic: '/ˌmɪs.ɪn.fərˈmeɪ.ʃən/' },
          { word: 'disinformation', meaning: 'thong tin gia', phonetic: '/ˌdɪs.ɪn.fərˈmeɪ.ʃən/' },
          { word: 'confirmation bias', meaning: 'thien kien xac nhan', phonetic: '/ˌkɑːn.fərˈmeɪ.ʃən ˈbaɪ.əs/' }
        ],
        questions: [
          { question: 'What is the difference between misinformation and disinformation?', options: ['They mean the same thing', 'Misinformation is unintentional while disinformation is deliberate', 'Disinformation is always online', 'Misinformation is more dangerous'], correct: 1 },
          { question: 'What is confirmation bias?', options: ['Seeking information that confirms existing beliefs', 'Believing everything online', 'Only reading newspapers', 'Watching too much TV'], correct: 0 },
          { question: 'What does deepfake technology use?', options: ['Photography', 'Traditional editing', 'Artificial intelligence', 'Hand drawing'], correct: 2 },
          { question: 'What are filter bubbles?', options: ['Water filters', 'Algorithms limiting exposure to diverse perspectives', 'Email filters', 'Air purifiers'], correct: 1 }
        ]
      },
      {
        id: 'g10_l2_climatepolicy',
        title: 'Climate Policy',
        titleVi: 'Chinh sach khi hau',
        emoji: '🌍',
        passage: 'Climate policy encompasses the strategies, regulations, and international agreements designed to address the causes and consequences of climate change. The scientific consensus, supported by organizations like the Intergovernmental Panel on Climate Change, is that human activities, particularly the burning of fossil fuels and deforestation, are the primary drivers of global warming. The Paris Agreement of 2015 was a landmark international treaty in which 196 countries committed to limiting global temperature increase to well below two degrees Celsius above pre-industrial levels, with efforts to limit it to 1.5 degrees. Each country submitted nationally determined contributions outlining their specific emissions reduction targets and strategies. Carbon pricing mechanisms, including carbon taxes and cap-and-trade systems, aim to make polluting more expensive, thereby incentivizing businesses and consumers to reduce their carbon footprint. The European Union\'s Emissions Trading System is the world\'s largest carbon market, covering approximately forty percent of the EU\'s greenhouse gas emissions. Renewable energy policies, including subsidies for solar and wind power, feed-in tariffs, and renewable portfolio standards, have driven remarkable growth in clean energy deployment globally. The cost of solar panels has dropped by more than ninety percent since 2010, making solar energy competitive with or cheaper than fossil fuels in many regions. Climate adaptation policies focus on preparing communities for the unavoidable impacts of climate change, such as rising sea levels, more frequent extreme weather events, and changing agricultural conditions. Vietnam, one of the countries most vulnerable to climate change due to its extensive coastline and low-lying Mekong Delta, has developed comprehensive adaptation strategies including improved sea walls, drought-resistant crop varieties, and early warning systems for natural disasters. Climate justice advocates argue that the costs and benefits of climate action should be distributed fairly, noting that developing countries contribute least to climate change but often suffer its worst consequences. The transition to a low-carbon economy presents both challenges and opportunities, with the potential to create millions of new jobs in renewable energy, energy efficiency, and sustainable agriculture.',
        vocabulary: [
          { word: 'emissions', meaning: 'khi thai', phonetic: '/ɪˈmɪʃ.ənz/' },
          { word: 'carbon footprint', meaning: 'dau chan carbon', phonetic: '/ˈkɑːr.bən ˈfʊt.prɪnt/' },
          { word: 'adaptation', meaning: 'thich ung', phonetic: '/ˌæd.æpˈteɪ.ʃən/' },
          { word: 'treaty', meaning: 'hiep uoc', phonetic: '/ˈtriː.ti/' }
        ],
        questions: [
          { question: 'What temperature limit does the Paris Agreement target?', options: ['1 degree Celsius', 'Well below 2 degrees Celsius', '3 degrees Celsius', '5 degrees Celsius'], correct: 1 },
          { question: 'How much has the cost of solar panels dropped since 2010?', options: ['About 50%', 'About 70%', 'More than 90%', 'About 30%'], correct: 2 },
          { question: 'Why is Vietnam particularly vulnerable to climate change?', options: ['It has too many factories', 'Its extensive coastline and low-lying delta', 'It has no forests', 'It uses too much energy'], correct: 1 },
          { question: 'What do carbon pricing mechanisms aim to do?', options: ['Make clean energy more expensive', 'Make polluting more expensive', 'Reduce taxes', 'Increase oil production'], correct: 1 }
        ]
      }
    ],
    level3: [
      {
        id: 'g10_l3_identity',
        title: 'Cultural Identity',
        titleVi: 'Ban sac van hoa',
        emoji: '🎭',
        passage: 'Cultural identity refers to the sense of belonging and identification that individuals feel with a particular cultural group, shaped by shared language, traditions, values, beliefs, and historical experiences. In an increasingly globalized world, questions of cultural identity have become particularly significant as people navigate between local traditions and global influences. Language is often considered the cornerstone of cultural identity, serving not merely as a means of communication but as a repository of a people\'s history, worldview, and collective wisdom. The United Nations estimates that a language dies approximately every two weeks, and with each lost language, unique cultural knowledge disappears irretrievably. Efforts to preserve endangered languages, including language revitalization programs and digital documentation projects, have become important components of cultural preservation. Vietnamese cultural identity draws from a rich tapestry of influences, including indigenous Viet traditions, Chinese Confucian philosophy, French colonial legacy, and contemporary global culture. Traditional practices like ancestor worship, Tet celebrations, and the ao dai reflect deep cultural values that continue to evolve while maintaining their essential character. The experience of diaspora communities illustrates the complex dynamics of cultural identity. Vietnamese communities abroad, such as those in the United States, France, and Australia, often maintain strong connections to their heritage while simultaneously adapting to and contributing to their adopted cultures, creating unique hybrid identities. Social media and digital technology have introduced new dimensions to cultural identity formation, particularly among young people who may identify more strongly with global online communities than with traditional local cultures. This has sparked debates about cultural authenticity and the distinction between cultural appreciation and cultural appropriation. Philosophers like Charles Taylor have argued that recognition of cultural identity is not merely a matter of courtesy but a fundamental human need, and that misrecognition or non-recognition can inflict real harm. Multicultural societies face the ongoing challenge of celebrating diversity while fostering social cohesion, requiring policies that respect cultural differences without creating division.',
        vocabulary: [
          { word: 'identity', meaning: 'ban sac', phonetic: '/aɪˈden.tə.ti/' },
          { word: 'diaspora', meaning: 'cong dong hai ngoai', phonetic: '/daɪˈæs.pər.ə/' },
          { word: 'appropriation', meaning: 'chiem dung', phonetic: '/əˌproʊ.priˈeɪ.ʃən/' },
          { word: 'multicultural', meaning: 'da van hoa', phonetic: '/ˌmʌl.tiˈkʌl.tʃər.əl/' }
        ],
        questions: [
          { question: 'How often does a language die according to the UN?', options: ['Every day', 'Every week', 'Every two weeks', 'Every month'], correct: 2 },
          { question: 'What is considered the cornerstone of cultural identity?', options: ['Food', 'Music', 'Language', 'Clothing'], correct: 2 },
          { question: 'What do diaspora communities often create?', options: ['New countries', 'Hybrid identities', 'New languages', 'New religions'], correct: 1 },
          { question: 'What does Charles Taylor argue about cultural recognition?', options: ['It is unimportant', 'It is a fundamental human need', 'It causes conflict', 'It should be avoided'], correct: 1 }
        ]
      },
      {
        id: 'g10_l3_innovation',
        title: 'Innovation',
        titleVi: 'Doi moi sang tao',
        emoji: '💡',
        passage: 'Innovation is the process of translating new ideas, inventions, or discoveries into goods, services, or processes that create value for society. Throughout history, waves of innovation have transformed human civilization, from the agricultural revolution that enabled permanent settlements to the digital revolution that has reshaped virtually every aspect of modern life. Disruptive innovation, a concept introduced by Harvard professor Clayton Christensen, describes how new technologies or business models can overturn established industries. Companies like Netflix disrupted the video rental industry, while ride-sharing services like Uber and Grab have transformed urban transportation. The innovation ecosystem encompasses the network of institutions, policies, and resources that support the development and commercialization of new ideas. Universities conduct basic research that generates new knowledge, while venture capital firms provide funding for startups to develop and scale innovative products. Government policies, including patent protection, research grants, and tax incentives for research and development, play crucial roles in fostering innovation. Vietnam has been investing in building its innovation capacity through initiatives like the National Innovation Center and various technology incubators in Ho Chi Minh City and Hanoi. The country\'s growing technology sector has produced successful startups in fintech, e-commerce, and artificial intelligence. Open innovation, which involves collaborating with external partners rather than relying solely on internal resources, has become increasingly popular among both large corporations and startups. Frugal innovation, developing affordable solutions for resource-constrained environments, is particularly relevant for developing economies. India\'s Tata Nano, designed as the world\'s cheapest car, exemplifies this approach. However, innovation also raises important questions about its social impact, including job displacement through automation, digital divides between those with and without access to technology, and the environmental costs of rapid technological change. Responsible innovation frameworks encourage developers and policymakers to consider the broader social and ethical implications of new technologies alongside their economic potential.',
        vocabulary: [
          { word: 'innovation', meaning: 'doi moi sang tao', phonetic: '/ˌɪn.əˈveɪ.ʃən/' },
          { word: 'disruptive', meaning: 'mang tinh dot pha', phonetic: '/dɪsˈrʌp.tɪv/' },
          { word: 'ecosystem', meaning: 'he sinh thai', phonetic: '/ˈiː.koʊˌsɪs.təm/' },
          { word: 'venture capital', meaning: 'von mao hiem', phonetic: '/ˈven.tʃər ˈkæp.ɪ.təl/' }
        ],
        questions: [
          { question: 'Who introduced the concept of disruptive innovation?', options: ['Steve Jobs', 'Clayton Christensen', 'Elon Musk', 'Bill Gates'], correct: 1 },
          { question: 'What is frugal innovation?', options: ['Expensive innovation', 'Affordable solutions for constrained environments', 'Government-only innovation', 'Secret innovation'], correct: 1 },
          { question: 'What role do venture capital firms play?', options: ['They conduct research', 'They provide funding for startups', 'They enforce patents', 'They regulate industries'], correct: 1 },
          { question: 'What concern does innovation raise about employment?', options: ['Too many jobs', 'Job displacement through automation', 'Higher salaries', 'Shorter work weeks'], correct: 1 }
        ]
      }
    ]
  },
  11: {
    level1: [
      {
        id: 'g11_l1_intlaw',
        title: 'International Law',
        titleVi: 'Luat quoc te',
        emoji: '⚖️',
        passage: 'International law is the body of rules, norms, and standards that govern the conduct of states and other international actors in their relations with one another. Unlike domestic law, which is enforced by national governments within their territories, international law operates in a decentralized system where there is no single authority with the power to enforce compliance universally. The foundations of modern international law can be traced to the Treaty of Westphalia in 1648, which established the principle of state sovereignty, recognizing each state\'s exclusive authority over its territory and internal affairs. The United Nations, founded in 1945 after the devastation of World War Two, serves as the primary international organization for maintaining peace, promoting human rights, and facilitating cooperation among nations. The UN Charter established fundamental principles including the prohibition of the use of force between states, the obligation to settle disputes peacefully, and the right of peoples to self-determination. The International Court of Justice, the principal judicial organ of the United Nations, adjudicates disputes between states and provides advisory opinions on legal questions. However, its jurisdiction is limited to cases where both parties consent to its authority. International humanitarian law, codified primarily in the Geneva Conventions, establishes rules for the conduct of armed conflict, protecting civilians, prisoners of war, and the wounded. The International Criminal Court, established by the Rome Statute in 2002, prosecutes individuals for genocide, war crimes, crimes against humanity, and the crime of aggression. Human rights law has evolved significantly since the adoption of the Universal Declaration of Human Rights in 1948, with subsequent treaties addressing civil and political rights, economic and social rights, racial discrimination, women\'s rights, and children\'s rights. International trade law, administered primarily through the World Trade Organization, regulates commerce between nations, resolving disputes and establishing fair trading practices. International environmental law has gained prominence with agreements like the Paris Climate Accord and the Convention on Biological Diversity. Vietnam actively participates in international law, having ratified numerous treaties and engaging in dispute resolution mechanisms, particularly regarding sovereignty in the South China Sea. The effectiveness of international law depends largely on the willingness of states to comply voluntarily, as enforcement mechanisms remain limited compared to domestic legal systems.',
        vocabulary: [
          { word: 'sovereignty', meaning: 'chu quyen', phonetic: '/ˈsɑː.vrən.ti/' },
          { word: 'jurisdiction', meaning: 'quyen tai phan', phonetic: '/ˌdʒʊr.ɪsˈdɪk.ʃən/' },
          { word: 'humanitarian', meaning: 'nhan dao', phonetic: '/hjuːˌmæn.ɪˈter.i.ən/' },
          { word: 'ratify', meaning: 'phe chuan', phonetic: '/ˈræt.ə.faɪ/' }
        ],
        questions: [
          { question: 'What did the Treaty of Westphalia establish?', options: ['International trade rules', 'The principle of state sovereignty', 'Human rights standards', 'Environmental protections'], correct: 1 },
          { question: 'When was the International Criminal Court established?', options: ['1948', '1969', '1998', '2002'], correct: 3 },
          { question: 'What does international humanitarian law primarily protect?', options: ['Trade agreements', 'Environmental resources', 'Civilians and prisoners in armed conflict', 'Intellectual property'], correct: 2 },
          { question: 'What is a key limitation of the International Court of Justice?', options: ['It is too expensive', 'Both parties must consent to its authority', 'It only handles criminal cases', 'It only operates in Europe'], correct: 1 }
        ]
      },
      {
        id: 'g11_l1_cognitive',
        title: 'Cognitive Science',
        titleVi: 'Khoa hoc nhan thuc',
        emoji: '🔬',
        passage: 'Cognitive science is an interdisciplinary field that studies the nature of the mind and intelligence, drawing from psychology, neuroscience, linguistics, philosophy, computer science, and anthropology. At its core, cognitive science seeks to understand how people perceive, think, learn, remember, and make decisions. The field emerged in the 1950s as a response to behaviorism, which had dominated psychology by focusing exclusively on observable behaviors while ignoring internal mental processes. The cognitive revolution brought renewed attention to mental representations, problem-solving strategies, and the computational processes underlying thought. One fundamental concept in cognitive science is working memory, the limited mental workspace where we temporarily hold and manipulate information. Research by George Miller established that working memory can typically hold about seven items simultaneously, though strategies like chunking can effectively increase this capacity. Long-term memory, by contrast, appears to have virtually unlimited storage capacity, though retrieving information depends on how well it was encoded and organized. Cognitive load theory, developed by John Sweller, has important implications for education, demonstrating that instruction should be designed to manage the demands placed on working memory to optimize learning. Dual-process theory proposes that human cognition operates through two distinct systems. System one is fast, automatic, and intuitive, handling routine tasks and quick judgments with minimal effort. System two is slow, deliberate, and analytical, engaged when we solve complex problems or make careful decisions. Most cognitive biases, systematic errors in thinking, arise from over-reliance on the quick judgments of System one. The study of language acquisition has revealed that children possess remarkable innate abilities to learn language, with most acquiring the basic grammar of their native language by age five without formal instruction. Noam Chomsky\'s theory of universal grammar proposes that humans are born with an innate language faculty that provides the fundamental framework for all human languages. Cognitive science research has practical applications in numerous fields, including artificial intelligence development, user interface design, educational methodology, clinical psychology, and marketing strategies.',
        vocabulary: [
          { word: 'cognition', meaning: 'nhan thuc', phonetic: '/kɑːɡˈnɪʃ.ən/' },
          { word: 'interdisciplinary', meaning: 'lien nganh', phonetic: '/ˌɪn.tər.ˈdɪs.ə.plɪn.er.i/' },
          { word: 'cognitive bias', meaning: 'thien kien nhan thuc', phonetic: '/ˈkɑːɡ.nə.tɪv ˈbaɪ.əs/' },
          { word: 'acquisition', meaning: 'thi duc', phonetic: '/ˌæk.wɪˈzɪʃ.ən/' }
        ],
        questions: [
          { question: 'How many items can working memory typically hold?', options: ['About three', 'About five', 'About seven', 'About twelve'], correct: 2 },
          { question: 'What is System one in dual-process theory?', options: ['Slow and analytical', 'Fast and intuitive', 'Creative and artistic', 'Logical and mathematical'], correct: 1 },
          { question: 'By what age do most children acquire basic grammar?', options: ['Age two', 'Age three', 'Age five', 'Age seven'], correct: 2 },
          { question: 'Who proposed the theory of universal grammar?', options: ['George Miller', 'John Sweller', 'Noam Chomsky', 'Daniel Kahneman'], correct: 2 }
        ]
      }
    ],
    level2: [
      {
        id: 'g11_l2_digitalethics',
        title: 'Digital Ethics',
        titleVi: 'Dao duc ky thuat so',
        emoji: '🔐',
        passage: 'Digital ethics examines the moral principles and values that should guide the development, deployment, and use of digital technologies in society. As technology becomes increasingly embedded in every aspect of human life, from healthcare and education to governance and social interaction, the ethical implications of digital systems have become urgently important. Privacy in the digital age presents unprecedented challenges. Technology companies collect vast amounts of personal data through search engines, social media platforms, smartphone applications, and internet-connected devices. This data is analyzed using sophisticated algorithms to create detailed profiles of individuals, which are then used for targeted advertising, content personalization, and predictive analytics. The Cambridge Analytica scandal of 2018 revealed how personal data harvested from millions of Facebook users was used to influence political campaigns, raising serious questions about democratic processes and informed consent in the digital era. Surveillance capitalism, a term coined by scholar Shoshana Zuboff, describes the economic system in which human experience is treated as raw material for commercial data extraction. The right to privacy, enshrined in the Universal Declaration of Human Rights, must be balanced against the legitimate uses of data for public health, security, and service improvement. The European Union\'s General Data Protection Regulation has established comprehensive privacy protections, including the right to be forgotten and requirements for explicit consent before data collection. Algorithmic bias represents another critical ethical concern. Machine learning systems trained on historical data can perpetuate and amplify existing societal biases related to race, gender, age, and socioeconomic status, leading to discriminatory outcomes in hiring, lending, criminal justice, and healthcare. Ensuring fairness, transparency, and accountability in algorithmic decision-making requires diverse development teams, rigorous testing, and ongoing monitoring. The digital divide, the gap between those who have access to digital technologies and those who do not, raises questions of equity and social justice. Approximately three billion people worldwide still lack internet access, limiting their educational opportunities, economic participation, and access to essential services. Vietnam has made significant progress in expanding internet access, with over seventy percent of the population now online, but disparities between urban and rural areas persist.',
        vocabulary: [
          { word: 'digital ethics', meaning: 'dao duc ky thuat so', phonetic: '/ˈdɪdʒ.ɪ.təl ˈeθ.ɪks/' },
          { word: 'surveillance', meaning: 'giam sat', phonetic: '/sərˈveɪ.ləns/' },
          { word: 'algorithmic bias', meaning: 'thien kien thuat toan', phonetic: '/ˌæl.ɡəˈrɪð.mɪk ˈbaɪ.əs/' },
          { word: 'transparency', meaning: 'minh bach', phonetic: '/trænsˈper.ən.si/' }
        ],
        questions: [
          { question: 'What did the Cambridge Analytica scandal involve?', options: ['Data theft from banks', 'Personal data used to influence political campaigns', 'Hacking of government systems', 'Illegal financial transactions'], correct: 1 },
          { question: 'Who coined the term surveillance capitalism?', options: ['Mark Zuckerberg', 'Shoshana Zuboff', 'Tim Berners-Lee', 'Edward Snowden'], correct: 1 },
          { question: 'What can algorithmic bias lead to?', options: ['Better algorithms', 'Faster computers', 'Discriminatory outcomes', 'More privacy'], correct: 2 },
          { question: 'What percentage of Vietnam\'s population is online?', options: ['About 50%', 'About 60%', 'Over 70%', 'Over 90%'], correct: 2 }
        ]
      },
      {
        id: 'g11_l2_publichealth',
        title: 'Public Health',
        titleVi: 'Y te cong cong',
        emoji: '🏥',
        passage: 'Public health is the science and practice of protecting and improving the health of entire populations through disease prevention, health promotion, and the creation of conditions in which people can be healthy. Unlike clinical medicine, which focuses on treating individual patients, public health takes a population-level approach, addressing the social, environmental, and behavioral determinants that influence health outcomes. Epidemiology, the study of how diseases spread and affect populations, is a cornerstone of public health practice. Epidemiologists use statistical methods and surveillance systems to track disease outbreaks, identify risk factors, and evaluate the effectiveness of interventions. The field gained unprecedented public attention during the COVID-19 pandemic, which demonstrated both the power and limitations of public health infrastructure globally. Vaccination programs represent one of the greatest achievements in public health history, having eradicated smallpox and nearly eliminated diseases like polio and measles. However, vaccine hesitancy, fueled by misinformation and mistrust, has emerged as a significant threat to public health progress. The World Health Organization has identified vaccine hesitancy as one of the top ten threats to global health. Social determinants of health, including income, education, housing, food security, and access to healthcare, have a profound impact on health outcomes. Research consistently shows that people living in poverty experience higher rates of chronic diseases, shorter life expectancies, and reduced access to quality healthcare. Health equity, the principle that everyone should have a fair opportunity to attain their full health potential, requires addressing these systemic inequalities. Vietnam\'s public health system has achieved notable successes, including significant reductions in child mortality, expanded immunization coverage, and improved maternal health outcomes. The country\'s handling of infectious disease outbreaks has been recognized internationally for its effectiveness in contact tracing, quarantine measures, and community engagement. Mental health has emerged as an increasingly important component of public health, with the global burden of depression and anxiety disorders growing substantially. Integrating mental health services into primary healthcare systems and reducing stigma are critical priorities for public health systems worldwide.',
        vocabulary: [
          { word: 'epidemiology', meaning: 'dich te hoc', phonetic: '/ˌep.ɪ.diː.miˈɑː.lə.dʒi/' },
          { word: 'vaccination', meaning: 'tiem chung', phonetic: '/ˌvæk.sɪˈneɪ.ʃən/' },
          { word: 'determinant', meaning: 'yeu to quyet dinh', phonetic: '/dɪˈtɜːr.mɪ.nənt/' },
          { word: 'equity', meaning: 'cong bang', phonetic: '/ˈek.wə.ti/' }
        ],
        questions: [
          { question: 'How does public health differ from clinical medicine?', options: ['It is more expensive', 'It focuses on populations rather than individuals', 'It only treats emergencies', 'It uses no technology'], correct: 1 },
          { question: 'What disease has vaccination eradicated?', options: ['Malaria', 'Tuberculosis', 'Smallpox', 'Cholera'], correct: 2 },
          { question: 'What has the WHO identified as a top health threat?', options: ['Air pollution', 'Vaccine hesitancy', 'Water scarcity', 'Noise pollution'], correct: 1 },
          { question: 'What principle states everyone should have fair health opportunities?', options: ['Health equality', 'Health equity', 'Health freedom', 'Health priority'], correct: 1 }
        ]
      }
    ],
    level3: [
      {
        id: 'g11_l3_postmodernism',
        title: 'Postmodernism',
        titleVi: 'Chu nghia hau hien dai',
        emoji: '🎪',
        passage: 'Postmodernism is a broad intellectual and cultural movement that emerged in the mid-twentieth century, characterized by skepticism toward grand narratives, a questioning of objective truth, and an embrace of plurality and ambiguity. While difficult to define precisely because it resists fixed definitions by nature, postmodernism has profoundly influenced philosophy, art, architecture, literature, and social theory. The movement arose partly as a reaction against modernism\'s confidence in reason, progress, and universal values. French philosopher Jean-Francois Lyotard famously defined postmodernism as incredulity toward metanarratives, the overarching stories that societies tell themselves to justify their institutions and practices, such as the Enlightenment narrative of inevitable progress through reason and science. Jacques Derrida\'s concept of deconstruction challenged the idea that texts have fixed, stable meanings, arguing instead that meaning is always deferred and that binary oppositions like good and evil or nature and culture are unstable constructions rather than natural categories. Michel Foucault examined how power operates through institutions and knowledge systems, arguing that what societies consider to be truth is inseparable from the power structures that produce and maintain it. His analyses of prisons, hospitals, and educational institutions revealed how these institutions shape and discipline individuals in ways that serve dominant interests. In architecture, postmodernism rejected the austere functionalism of modernist buildings in favor of playful combinations of historical styles, ornamentation, and ironic references. In literature, postmodern writers like Jorge Luis Borges, Italo Calvino, and Thomas Pynchon employed techniques such as metafiction, where the narrative draws attention to its own artificiality, unreliable narrators, temporal fragmentation, and the blurring of boundaries between fiction and reality. Postmodern art, exemplified by Andy Warhol\'s pop art, challenged traditional distinctions between high art and popular culture, questioning the very concept of artistic originality. Critics of postmodernism argue that its extreme relativism undermines the possibility of moral judgment and political action, making it impossible to distinguish between truth and falsehood or to advocate for justice. Some scholars have suggested that we have now entered a post-postmodern era characterized by a return to sincerity, engagement with real-world problems, and a recognition that while absolute truth may be unattainable, pragmatic approximations of truth are necessary for meaningful discourse and democratic governance.',
        vocabulary: [
          { word: 'postmodernism', meaning: 'chu nghia hau hien dai', phonetic: '/ˌpoʊstˈmɑː.dər.nɪ.zəm/' },
          { word: 'metanarrative', meaning: 'dai tu su', phonetic: '/ˌmet.əˈnær.ə.tɪv/' },
          { word: 'deconstruction', meaning: 'giai cau truc', phonetic: '/ˌdiː.kənˈstrʌk.ʃən/' },
          { word: 'relativism', meaning: 'chu nghia tuong doi', phonetic: '/ˈrel.ə.tɪ.vɪ.zəm/' }
        ],
        questions: [
          { question: 'How did Lyotard define postmodernism?', options: ['Love of progress', 'Incredulity toward metanarratives', 'Faith in science', 'Return to tradition'], correct: 1 },
          { question: 'What did Derrida\'s deconstruction challenge?', options: ['Mathematical formulas', 'The idea that texts have fixed meanings', 'Scientific methods', 'Musical compositions'], correct: 1 },
          { question: 'What did Foucault examine?', options: ['How nature works', 'How power operates through institutions', 'How art is created', 'How languages evolve'], correct: 1 },
          { question: 'What criticism is made of postmodernism?', options: ['It is too scientific', 'Its relativism undermines moral judgment', 'It is too traditional', 'It ignores art'], correct: 1 }
        ]
      },
      {
        id: 'g11_l3_geopolitics',
        title: 'Geopolitics',
        titleVi: 'Dia chinh tri',
        emoji: '🗺️',
        passage: 'Geopolitics is the study of how geographical factors, including location, natural resources, climate, and topography, influence political power, international relations, and strategic decision-making. The field examines how states compete for influence, form alliances, and pursue their national interests within the constraints and opportunities presented by geography. Classical geopolitical theories emerged in the late nineteenth and early twentieth centuries. Halford Mackinder\'s Heartland Theory proposed that whoever controlled the vast interior of Eurasia, which he called the Heartland, would command sufficient resources and strategic position to dominate world politics. Alfred Thayer Mahan, by contrast, emphasized the importance of sea power, arguing that nations with strong navies and control of maritime trade routes would achieve global dominance. Nicholas Spykman\'s Rimland Theory suggested that the coastal areas surrounding the Heartland, rather than the interior, held the key to world power. In the contemporary era, geopolitics has evolved to encompass new dimensions of power and competition. Energy geopolitics examines how control of oil, natural gas, and renewable energy resources shapes international relations, with the transition to clean energy creating new geopolitical dynamics. Cyber geopolitics addresses how nations project power and conduct espionage in the digital domain, with cyberattacks becoming an increasingly common tool of statecraft. The South China Sea has become one of the most significant geopolitical flashpoints of the twenty-first century, with overlapping territorial claims by China, Vietnam, the Philippines, Malaysia, Brunei, and Taiwan. Vietnam has consistently maintained its sovereignty over the Paracel and Spratly Islands based on historical evidence and international law, particularly the United Nations Convention on the Law of the Sea. The strategic importance of this waterway, through which approximately one-third of global shipping passes, makes it a focal point for great power competition between China and the United States. The Belt and Road Initiative, China\'s massive infrastructure and investment program spanning Asia, Europe, and Africa, represents a significant geopolitical strategy to expand economic influence and create new trade networks. Vietnam\'s geopolitical strategy involves maintaining balanced relationships with major powers while actively participating in regional organizations like ASEAN to promote multilateral cooperation, peaceful dispute resolution, and rules-based international order.',
        vocabulary: [
          { word: 'geopolitics', meaning: 'dia chinh tri', phonetic: '/ˌdʒiː.oʊˈpɑː.lə.tɪks/' },
          { word: 'sovereignty', meaning: 'chu quyen', phonetic: '/ˈsɑː.vrən.ti/' },
          { word: 'maritime', meaning: 'hang hai', phonetic: '/ˈmær.ɪ.taɪm/' },
          { word: 'multilateral', meaning: 'da phuong', phonetic: '/ˌmʌl.tiˈlæt̬.ər.əl/' }
        ],
        questions: [
          { question: 'What does Mackinder\'s Heartland Theory propose?', options: ['Sea power determines dominance', 'Control of Eurasia\'s interior is key to world power', 'Air power is most important', 'Trade routes determine power'], correct: 1 },
          { question: 'What percentage of global shipping passes through the South China Sea?', options: ['About 10%', 'About 20%', 'About 33%', 'About 50%'], correct: 2 },
          { question: 'What is the Belt and Road Initiative?', options: ['A military alliance', 'An environmental treaty', 'China\'s infrastructure and investment program', 'A space exploration project'], correct: 2 },
          { question: 'What organization does Vietnam participate in for regional cooperation?', options: ['NATO', 'EU', 'ASEAN', 'OPEC'], correct: 2 }
        ]
      }
    ]
  },
  12: {
    level1: [
      {
        id: 'g12_l1_epistemology',
        title: 'Epistemology',
        titleVi: 'Nhan thuc luan',
        emoji: '📖',
        passage: 'Epistemology, derived from the Greek words episteme meaning knowledge and logos meaning study, is the branch of philosophy concerned with the nature, sources, limits, and validity of human knowledge. It addresses fundamental questions that have occupied thinkers for millennia: What does it mean to truly know something? How can we distinguish justified belief from mere opinion? What are the foundations upon which reliable knowledge rests? Rationalism, championed by philosophers like Rene Descartes, Baruch Spinoza, and Gottfried Leibniz, holds that reason and logical deduction are the primary sources of knowledge. Descartes\' famous proposition, I think therefore I am, exemplified the rationalist approach by attempting to establish an indubitable foundation for knowledge through pure reason alone. He employed methodological doubt, systematically questioning all beliefs until arriving at something that could not be doubted. Empiricism, associated with John Locke, George Berkeley, and David Hume, counters that knowledge derives primarily from sensory experience. Locke argued that the mind begins as a blank slate, or tabula rasa, and that all ideas originate from either direct sensory experience or reflection upon that experience. Hume\'s analysis of causation posed a profound challenge to both rationalism and naive empiricism, demonstrating that we never actually observe causal connections but merely perceive constant conjunctions of events, leading to the problem of induction, which questions whether past experience can reliably predict future outcomes. Immanuel Kant attempted to synthesize rationalism and empiricism in his Critique of Pure Reason, arguing that while all knowledge begins with experience, the mind actively structures that experience through innate categories of understanding such as space, time, and causality. In the twentieth century, epistemology underwent significant transformations. Karl Popper proposed falsificationism as a criterion for scientific knowledge, arguing that a theory is scientific only if it can potentially be proven false through observation or experiment. Thomas Kuhn\'s concept of paradigm shifts challenged the view of scientific progress as a linear accumulation of knowledge, suggesting instead that science undergoes periodic revolutions in which fundamental assumptions are overturned. Contemporary epistemology engages with questions about testimonial knowledge, the role of social context in knowledge formation, and the epistemological challenges posed by digital information environments where traditional gatekeepers of knowledge have been displaced by decentralized, often unreliable sources.',
        vocabulary: [
          { word: 'epistemology', meaning: 'nhan thuc luan', phonetic: '/ɪˌpɪs.təˈmɑː.lə.dʒi/' },
          { word: 'rationalism', meaning: 'chu nghia duy ly', phonetic: '/ˈræʃ.ən.əl.ɪ.zəm/' },
          { word: 'empiricism', meaning: 'chu nghia kinh nghiem', phonetic: '/ɪmˈpɪr.ɪ.sɪ.zəm/' },
          { word: 'falsificationism', meaning: 'chu nghia bac bo', phonetic: '/ˌfɑːl.sɪ.fɪˈkeɪ.ʃən.ɪ.zəm/' }
        ],
        questions: [
          { question: 'What does epistemology study?', options: ['The nature of beauty', 'The nature of knowledge', 'The nature of morality', 'The nature of existence'], correct: 1 },
          { question: 'What concept did Locke introduce about the mind?', options: ['Innate ideas', 'Tabula rasa (blank slate)', 'Stream of consciousness', 'Collective unconscious'], correct: 1 },
          { question: 'What did Kant attempt to do in his philosophy?', options: ['Reject all knowledge', 'Synthesize rationalism and empiricism', 'Prove God exists', 'Eliminate science'], correct: 1 },
          { question: 'What did Popper propose as a criterion for scientific knowledge?', options: ['Verifiability', 'Falsifiability', 'Popularity', 'Simplicity'], correct: 1 }
        ]
      },
      {
        id: 'g12_l1_behavioral_econ',
        title: 'Behavioral Economics',
        titleVi: 'Kinh te hoc hanh vi',
        emoji: '📈',
        passage: 'Behavioral economics is a field that combines insights from psychology and economics to understand how people actually make financial and economic decisions, which often deviate significantly from the rational actor model assumed by traditional economic theory. Classical economics assumes that individuals are rational agents who consistently maximize their utility by carefully weighing costs and benefits, processing all available information, and making optimal choices. Behavioral economists have demonstrated through extensive research that human decision-making is systematically influenced by cognitive biases, emotions, social pressures, and contextual factors that traditional models fail to account for. Daniel Kahneman and Amos Tversky, whose partnership produced groundbreaking research in this field, identified prospect theory, which describes how people evaluate potential gains and losses asymmetrically. Their research showed that the pain of losing a certain amount is psychologically approximately twice as powerful as the pleasure of gaining the same amount, a phenomenon known as loss aversion. This explains why investors often hold losing stocks too long, hoping to avoid realizing losses, while selling winning stocks too quickly to lock in gains. The anchoring effect demonstrates how initial information disproportionately influences subsequent judgments. When people are given a random number before estimating the population of a country, their estimates are systematically biased toward that arbitrary anchor. The endowment effect shows that people value things they already own more highly than identical items they do not possess, complicating market transactions and negotiations. Richard Thaler, who won the Nobel Prize in Economics in 2017, developed the concept of nudging, designing choice architectures that guide people toward better decisions without restricting their freedom. For example, making organ donation the default option rather than requiring people to opt in dramatically increases donation rates. Governments and organizations worldwide have established behavioral insights teams, sometimes called nudge units, to apply these principles to public policy. Mental accounting, another key concept, describes how people categorize money differently depending on its source or intended use, treating a tax refund differently from earned income despite their identical monetary value. The sunk cost fallacy leads people to continue investing in failing projects because of resources already committed rather than evaluating future prospects objectively. Behavioral economics has important applications in personal finance, retirement planning, healthcare decisions, environmental policy, and consumer protection, helping design systems that account for predictable human irrationalities rather than assuming them away.',
        vocabulary: [
          { word: 'behavioral economics', meaning: 'kinh te hoc hanh vi', phonetic: '/bɪˈheɪv.jər.əl ˌiː.kəˈnɑː.mɪks/' },
          { word: 'cognitive bias', meaning: 'thien kien nhan thuc', phonetic: '/ˈkɑːɡ.nə.tɪv ˈbaɪ.əs/' },
          { word: 'loss aversion', meaning: 'ne tranh mat mat', phonetic: '/lɑːs əˈvɜːr.ʒən/' },
          { word: 'nudging', meaning: 'thuc day/huong dan', phonetic: '/ˈnʌdʒ.ɪŋ/' }
        ],
        questions: [
          { question: 'What does prospect theory describe?', options: ['How markets crash', 'How people evaluate gains and losses asymmetrically', 'How companies set prices', 'How governments collect taxes'], correct: 1 },
          { question: 'What is loss aversion?', options: ['Fear of winning', 'The pain of losing feels twice as strong as the pleasure of gaining', 'Avoiding all risks', 'Never investing money'], correct: 1 },
          { question: 'What concept did Richard Thaler develop?', options: ['Prospect theory', 'Anchoring effect', 'Nudging', 'Loss aversion'], correct: 2 },
          { question: 'What is the sunk cost fallacy?', options: ['Refusing to invest', 'Continuing failed projects due to past investment', 'Always choosing the cheapest option', 'Saving too much money'], correct: 1 }
        ]
      }
    ],
    level2: [
      {
        id: 'g12_l2_aiethics',
        title: 'AI Ethics',
        titleVi: 'Dao duc tri tue nhan tao',
        emoji: '🤖',
        passage: 'As artificial intelligence systems become increasingly sophisticated and pervasive, the ethical frameworks governing their development and deployment have emerged as one of the most consequential challenges of the twenty-first century. AI ethics encompasses a broad range of concerns, from algorithmic fairness and transparency to existential questions about the future relationship between humans and intelligent machines. The alignment problem, one of the central challenges in AI safety, concerns ensuring that AI systems pursue goals that are genuinely aligned with human values and intentions. As AI systems become more capable, the consequences of misalignment between machine objectives and human welfare could become increasingly severe. A simple example is a recommendation algorithm optimized for user engagement that ends up promoting sensational or divisive content because such content generates more clicks, thereby undermining social cohesion despite never being designed with malicious intent. Algorithmic accountability requires that developers and deployers of AI systems take responsibility for the outcomes their systems produce. However, the complexity and opacity of modern machine learning models, particularly deep neural networks with billions of parameters, make it difficult to explain how specific decisions are reached, creating what is known as the black box problem. The European Union\'s proposed AI Act represents one of the most comprehensive attempts to regulate artificial intelligence, classifying AI systems by risk level and imposing strict requirements on high-risk applications in areas such as healthcare, education, employment, and law enforcement. Autonomous weapons systems that can select and engage targets without meaningful human control raise profound ethical questions about the morality of delegating life-and-death decisions to machines. The Campaign to Stop Killer Robots advocates for a preemptive international treaty banning fully autonomous weapons. The displacement of human workers by AI-driven automation presents significant economic and social challenges, with some estimates suggesting that up to thirty percent of existing jobs could be automated within the next two decades. Proposed solutions include universal basic income, retraining programs, and redesigning work to leverage uniquely human capabilities like creativity, empathy, and complex social interaction. The concentration of AI development capabilities among a small number of large technology companies and wealthy nations raises concerns about technological inequality and the potential for AI to exacerbate existing power imbalances. Ensuring that AI benefits are distributed equitably across societies and nations requires intentional policies, international cooperation, and inclusive governance structures that give voice to diverse stakeholders.',
        vocabulary: [
          { word: 'alignment', meaning: 'su lien ket/phu hop', phonetic: '/əˈlaɪn.mənt/' },
          { word: 'accountability', meaning: 'trach nhiem giai trinh', phonetic: '/əˌkaʊn.təˈbɪl.ə.ti/' },
          { word: 'autonomous', meaning: 'tu dong/tu chu', phonetic: '/ɔːˈtɑː.nə.məs/' },
          { word: 'displacement', meaning: 'su thay the', phonetic: '/dɪsˈpleɪs.mənt/' }
        ],
        questions: [
          { question: 'What is the alignment problem in AI?', options: ['Making AI systems faster', 'Ensuring AI goals align with human values', 'Training AI to be creative', 'Building better hardware'], correct: 1 },
          { question: 'What is the black box problem?', options: ['AI systems are too large', 'It is difficult to explain how AI reaches decisions', 'AI needs more data', 'AI is too expensive'], correct: 1 },
          { question: 'What percentage of jobs could be automated in the next two decades?', options: ['Up to 10%', 'Up to 20%', 'Up to 30%', 'Up to 50%'], correct: 2 },
          { question: 'What does the Campaign to Stop Killer Robots advocate for?', options: ['More robot soldiers', 'A treaty banning fully autonomous weapons', 'Better robot design', 'Robot rights'], correct: 1 }
        ]
      },
      {
        id: 'g12_l2_constitutional',
        title: 'Constitutional Law',
        titleVi: 'Luat hien phap',
        emoji: '📜',
        passage: 'Constitutional law is the body of law that defines the relationship between different branches of government, establishes the fundamental rights of citizens, and sets the framework within which all other laws must operate. A constitution serves as the supreme law of a nation, and any legislation or government action that contradicts it may be struck down as unconstitutional. The concept of constitutionalism, the idea that government power should be limited and defined by a fundamental law, has roots in ancient political thought but gained its modern form during the Enlightenment and the revolutionary movements of the eighteenth century. The United States Constitution, ratified in 1788, is the oldest written national constitution still in force, establishing a federal system with three branches of government: legislative, executive, and judicial. The principle of separation of powers, articulated by Montesquieu, distributes governmental authority among these branches to prevent the concentration of power, with each branch possessing checks and balances on the others. Judicial review, the power of courts to examine legislation and government actions for constitutional compliance, was established in the landmark 1803 case Marbury v. Madison and has since become a feature of constitutional systems worldwide. The Bill of Rights, the first ten amendments to the US Constitution, guarantees fundamental freedoms including freedom of speech, religion, and the press, the right to bear arms, protection against unreasonable searches, and the right to due process. Constitutional rights are not absolute, however, and courts must frequently balance competing interests, such as individual liberty versus public safety or free speech versus protection from harm. Vietnam\'s Constitution, most recently amended in 2013, establishes the country\'s political system, affirms the leading role of the Communist Party, and guarantees citizens\' rights and duties including the right to education, healthcare, and participation in state management. Constitutional courts or equivalent bodies exist in many countries to interpret constitutional provisions and resolve disputes between branches of government. The process of constitutional amendment varies significantly across nations, from the relatively flexible amendment procedures of some parliamentary systems to the deliberately arduous process required in the United States, reflecting different perspectives on the appropriate balance between constitutional stability and adaptability. Comparative constitutional law has become an important field of study as nations increasingly look to each other\'s constitutional experiences when drafting or reforming their own fundamental laws.',
        vocabulary: [
          { word: 'constitution', meaning: 'hien phap', phonetic: '/ˌkɑːn.stɪˈtuː.ʃən/' },
          { word: 'judicial review', meaning: 'giam sat tu phap', phonetic: '/dʒuːˈdɪʃ.əl rɪˈvjuː/' },
          { word: 'amendment', meaning: 'su sua doi/bo sung', phonetic: '/əˈmend.mənt/' },
          { word: 'checks and balances', meaning: 'kiem soat va can bang', phonetic: '/tʃeks ənd ˈbæl.ən.sɪz/' }
        ],
        questions: [
          { question: 'What is the oldest written national constitution still in force?', options: ['British Constitution', 'French Constitution', 'US Constitution', 'German Basic Law'], correct: 2 },
          { question: 'Who articulated the principle of separation of powers?', options: ['John Locke', 'Montesquieu', 'Thomas Jefferson', 'Jean-Jacques Rousseau'], correct: 1 },
          { question: 'What case established judicial review in the US?', options: ['Brown v. Board', 'Roe v. Wade', 'Marbury v. Madison', 'Miranda v. Arizona'], correct: 2 },
          { question: 'When was Vietnam\'s Constitution most recently amended?', options: ['2003', '2008', '2013', '2018'], correct: 2 }
        ]
      }
    ],
    level3: [
      {
        id: 'g12_l3_criticaltheory',
        title: 'Critical Theory',
        titleVi: 'Ly thuyet phe phan',
        emoji: '🔍',
        passage: 'Critical theory is a broad tradition of social and philosophical analysis that seeks to critique and transform society by revealing the structures of power, domination, and inequality that are often hidden beneath the surface of everyday life. Originating with the Frankfurt School in the 1930s, critical theory has evolved into a diverse set of approaches that continue to shape academic discourse and social movements worldwide. The Frankfurt School, established at the Institute for Social Research in Frankfurt, Germany, brought together scholars including Max Horkheimer, Theodor Adorno, Herbert Marcuse, and Walter Benjamin, who sought to develop a theory of society that went beyond the limitations of both orthodox Marxism and positivist social science. Horkheimer distinguished between traditional theory, which seeks to describe and explain social phenomena objectively, and critical theory, which aims to evaluate society against normative ideals of justice, freedom, and human flourishing while actively working toward social transformation. Adorno and Horkheimer\'s Dialectic of Enlightenment, published in 1947, argued that the Enlightenment\'s promise of liberation through reason had paradoxically produced new forms of domination through the culture industry and instrumental rationality, reducing human beings to mere consumers and objects of bureaucratic administration. Jurgen Habermas, the most prominent second-generation Frankfurt School thinker, developed the theory of communicative action, arguing that genuine human emancipation requires the creation of conditions for undistorted communication, where all participants can freely exchange reasons and reach consensus without coercion. His concept of the public sphere describes the social spaces where citizens can engage in rational debate about matters of common concern, and he has analyzed how commercial media and political manipulation can distort and undermine this democratic potential. Critical theory has branched into numerous specialized approaches, including critical race theory, which examines how legal systems and social institutions perpetuate racial inequality, feminist critical theory, which analyzes the intersection of gender with other forms of social power, postcolonial theory, which critiques the ongoing effects of colonialism and imperialism on formerly colonized peoples and nations, and critical pedagogy, which reimagines education as a practice of liberation rather than mere knowledge transmission. The relevance of critical theory extends to contemporary debates about surveillance capitalism, algorithmic governance, environmental justice, and the relationship between technology and power. While critics charge that critical theory can become excessively abstract, politically biased, or nihilistic in its critique of existing institutions, its practitioners argue that understanding the hidden mechanisms of social power is an essential prerequisite for meaningful democratic participation and social justice.',
        vocabulary: [
          { word: 'critical theory', meaning: 'ly thuyet phe phan', phonetic: '/ˈkrɪt.ɪ.kəl ˈθɪr.i/' },
          { word: 'emancipation', meaning: 'giai phong', phonetic: '/ɪˌmæn.sɪˈpeɪ.ʃən/' },
          { word: 'hegemony', meaning: 'quyen ba chu', phonetic: '/hɪˈdʒem.ə.ni/' },
          { word: 'dialectic', meaning: 'bien chung', phonetic: '/ˌdaɪ.əˈlek.tɪk/' }
        ],
        questions: [
          { question: 'Where did the Frankfurt School originate?', options: ['Paris, France', 'London, England', 'Frankfurt, Germany', 'Vienna, Austria'], correct: 2 },
          { question: 'What did Horkheimer distinguish between?', options: ['Science and art', 'Traditional theory and critical theory', 'History and philosophy', 'Politics and economics'], correct: 1 },
          { question: 'What is Habermas\'s concept about democratic discussion?', options: ['The marketplace', 'The public sphere', 'The private sector', 'The classroom'], correct: 1 },
          { question: 'What does critical race theory examine?', options: ['Biological differences', 'How institutions perpetuate racial inequality', 'Athletic performance', 'Cultural celebrations'], correct: 1 }
        ]
      },
      {
        id: 'g12_l3_future',
        title: 'Future Studies',
        titleVi: 'Nghien cuu tuong lai',
        emoji: '🔮',
        passage: 'Future studies, also known as futurology or foresight, is an interdisciplinary field that systematically explores, creates, and tests possible, probable, and preferable futures to inform present-day decision-making. Unlike prophecy or prediction, which claim to know what will happen, future studies acknowledges fundamental uncertainty and instead develops multiple scenarios to help individuals, organizations, and governments prepare for a range of possible developments. The field employs various methodologies including trend analysis, which identifies and extrapolates current patterns of change, scenario planning, which develops coherent narratives about alternative futures, Delphi surveys, which gather and synthesize expert opinions, horizon scanning, which identifies emerging signals of change, and backcasting, which works backward from a desired future to determine the steps needed to achieve it. Several megatrends are likely to shape the coming decades significantly. Demographic shifts, including population aging in developed countries and continued growth in Africa and South Asia, will transform labor markets, healthcare systems, and geopolitical balances. The continued acceleration of technological change, particularly in artificial intelligence, biotechnology, nanotechnology, and quantum computing, promises both remarkable opportunities and profound disruptions. Climate change and resource scarcity will increasingly force societies to fundamentally reconsider their relationship with the natural environment and restructure economic systems around sustainability principles. The concept of the technological singularity, popularized by inventor Ray Kurzweil, posits that artificial intelligence will eventually surpass human intelligence, leading to a period of rapid and unpredictable change that current human minds cannot fully comprehend. While this remains speculative, the accelerating pace of AI development has made these discussions increasingly relevant to policymakers and ethicists. Space colonization, once firmly in the realm of science fiction, is now being pursued seriously by both national space agencies and private companies, with plans for permanent human settlements on the Moon and Mars potentially materializing within the coming decades. The future of work is another critical area of inquiry, as automation, remote work technologies, and the gig economy are fundamentally transforming how, where, and for whom people work. Future studies plays an important role in policy development, corporate strategy, and education, helping decision-makers move beyond reactive responses to proactive planning. Vietnam\'s development strategy requires forward-looking analysis to navigate the opportunities and challenges of technological transformation, climate adaptation, demographic change, and evolving global economic and political dynamics. Ultimately, future studies reminds us that the future is not something that simply happens to us but is something we actively create through the choices and actions we take today.',
        vocabulary: [
          { word: 'futurology', meaning: 'tuong lai hoc', phonetic: '/ˌfjuː.tʃəˈrɑː.lə.dʒi/' },
          { word: 'scenario', meaning: 'kich ban', phonetic: '/səˈner.i.oʊ/' },
          { word: 'megatrend', meaning: 'xu huong lon', phonetic: '/ˈmeɡ.ə.trend/' },
          { word: 'singularity', meaning: 'diem ky di', phonetic: '/ˌsɪŋ.ɡjəˈler.ə.ti/' }
        ],
        questions: [
          { question: 'How does future studies differ from prophecy?', options: ['It uses magic', 'It acknowledges uncertainty and develops multiple scenarios', 'It claims to know the exact future', 'It only looks at the past'], correct: 1 },
          { question: 'What is backcasting?', options: ['Predicting the past', 'Working backward from a desired future', 'Analyzing current trends', 'Surveying experts'], correct: 1 },
          { question: 'What does the technological singularity posit?', options: ['Technology will stop advancing', 'AI will surpass human intelligence', 'Humans will merge with robots', 'Computers will be banned'], correct: 1 },
          { question: 'What reminder does future studies provide?', options: ['The future is predetermined', 'We cannot change anything', 'The future is created by our choices today', 'Only governments shape the future'], correct: 2 }
        ]
      }
    ]
  }
};
