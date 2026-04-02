const GRAMMAR_DATA = {
  1: {
    level1: [
      {
        id: 'g1_l1_tobe', title: 'Verb "to be"', titleVi: 'Dong tu "to be"', emoji: '🔤',
        explanation: 'We use "am", "is", "are" to describe things.\n• I am (I\'m)\n• He/She/It is\n• You/We/They are',
        explanationVi: 'Chung ta dung "am", "is", "are" de mo ta su vat.\n• I am (Toi la)\n• He/She/It is (Anh ay/Co ay/No la)\n• You/We/They are (Ban/Chung toi/Ho la)',
        exercises: [
          { type: 'fill', sentence: 'I ___ a student.', answer: 'am', options: ['am', 'is', 'are'] },
          { type: 'fill', sentence: 'She ___ my teacher.', answer: 'is', options: ['am', 'is', 'are'] },
          { type: 'fill', sentence: 'They ___ happy.', answer: 'are', options: ['am', 'is', 'are'] },
          { type: 'fill', sentence: 'He ___ tall.', answer: 'is', options: ['am', 'is', 'are'] },
          { type: 'fill', sentence: 'We ___ friends.', answer: 'are', options: ['am', 'is', 'are'] }
        ]
      },
      {
        id: 'g1_l1_this', title: 'This / That', titleVi: 'This / That (Day / Kia)', emoji: '👆',
        explanation: 'Use "this" for things near you. Use "that" for things far away.\n• This is a pen. (near)\n• That is a book. (far)',
        explanationVi: '"This" dung cho vat gan. "That" dung cho vat xa.\n• This is a pen. (Day la cay but - gan)\n• That is a book. (Kia la quyen sach - xa)',
        exercises: [
          { type: 'fill', sentence: '___ is my bag. (near)', answer: 'This', options: ['This', 'That'] },
          { type: 'fill', sentence: '___ is a bird. (far)', answer: 'That', options: ['This', 'That'] },
          { type: 'fill', sentence: '___ is my desk. (near)', answer: 'This', options: ['This', 'That'] },
          { type: 'fill', sentence: '___ is a tree. (far)', answer: 'That', options: ['This', 'That'] },
          { type: 'fill', sentence: '___ is my pencil. (near)', answer: 'This', options: ['This', 'That'] }
        ]
      },
      {
        id: 'g1_l1_plural', title: 'Plural Nouns', titleVi: 'Danh tu so nhieu', emoji: '📦',
        explanation: 'Add "s" to make plural.\n• one cat → two cats\n• one dog → three dogs\n• one book → four books',
        explanationVi: 'Them "s" de tao so nhieu.\n• one cat → two cats (mot con meo → hai con meo)\n• one dog → three dogs (mot con cho → ba con cho)',
        exercises: [
          { type: 'fill', sentence: 'Two ___ (cat)', answer: 'cats', options: ['cat', 'cats'] },
          { type: 'fill', sentence: 'Three ___ (pen)', answer: 'pens', options: ['pen', 'pens'] },
          { type: 'fill', sentence: 'Five ___ (book)', answer: 'books', options: ['book', 'books'] },
          { type: 'fill', sentence: 'Four ___ (ball)', answer: 'balls', options: ['ball', 'balls'] },
          { type: 'fill', sentence: 'Six ___ (toy)', answer: 'toys', options: ['toy', 'toys'] }
        ]
      }
    ],
    level2: [
      {
        id: 'g1_l2_have', title: 'Have / Has', titleVi: 'Co (Have/Has)', emoji: '🎒',
        explanation: 'Use "have" with I/You/We/They. Use "has" with He/She/It.\n• I have a bag.\n• She has a doll.',
        explanationVi: 'Dung "have" voi I/You/We/They. Dung "has" voi He/She/It.\n• I have a bag. (Toi co mot cai cap)\n• She has a doll. (Co ay co mot con bup be)',
        exercises: [
          { type: 'fill', sentence: 'I ___ a cat.', answer: 'have', options: ['have', 'has'] },
          { type: 'fill', sentence: 'He ___ a ball.', answer: 'has', options: ['have', 'has'] },
          { type: 'fill', sentence: 'They ___ toys.', answer: 'have', options: ['have', 'has'] },
          { type: 'fill', sentence: 'She ___ a book.', answer: 'has', options: ['have', 'has'] },
          { type: 'fill', sentence: 'We ___ friends.', answer: 'have', options: ['have', 'has'] }
        ]
      },
      {
        id: 'g1_l2_color', title: 'Colors with "is"', titleVi: 'Mau sac voi "is"', emoji: '🎨',
        explanation: 'Use "is" to say colors.\n• The ball is red.\n• The sky is blue.\n• The tree is green.',
        explanationVi: 'Dung "is" de noi ve mau sac.\n• The ball is red. (Qua bong mau do)\n• The sky is blue. (Bau troi mau xanh)',
        exercises: [
          { type: 'fill', sentence: 'The sun ___ yellow.', answer: 'is', options: ['is', 'are', 'am'] },
          { type: 'fill', sentence: 'The flowers ___ red.', answer: 'are', options: ['is', 'are', 'am'] },
          { type: 'fill', sentence: 'The grass ___ green.', answer: 'is', options: ['is', 'are', 'am'] },
          { type: 'fill', sentence: 'The clouds ___ white.', answer: 'are', options: ['is', 'are', 'am'] },
          { type: 'fill', sentence: 'My bag ___ blue.', answer: 'is', options: ['is', 'are', 'am'] }
        ]
      },
      {
        id: 'g1_l2_can', title: 'Can / Cannot', titleVi: 'Co the / Khong the', emoji: '💪',
        explanation: 'Use "can" to say you are able to do something.\n• I can run.\n• She can sing.\n• He cannot fly.',
        explanationVi: '"Can" nghia la co the. "Cannot" nghia la khong the.\n• I can run. (Toi co the chay)\n• He cannot fly. (Anh ay khong the bay)',
        exercises: [
          { type: 'fill', sentence: 'I ___ swim.', answer: 'can', options: ['can', 'cannot'] },
          { type: 'fill', sentence: 'Fish ___ walk.', answer: 'cannot', options: ['can', 'cannot'] },
          { type: 'fill', sentence: 'Birds ___ fly.', answer: 'can', options: ['can', 'cannot'] },
          { type: 'fill', sentence: 'She ___ read books.', answer: 'can', options: ['can', 'cannot'] },
          { type: 'fill', sentence: 'A baby ___ drive a car.', answer: 'cannot', options: ['can', 'cannot'] }
        ]
      }
    ],
    level3: [
      {
        id: 'g1_l3_where', title: 'Where is...?', titleVi: 'O dau...?', emoji: '📍',
        explanation: 'Use "Where is...?" to ask about location.\n• Where is the cat? - It is on the table.\n• Where is my book? - It is in the bag.',
        explanationVi: 'Dung "Where is...?" de hoi vi tri.\n• Where is the cat? - It is on the table. (Con meo o dau? - No o tren ban)',
        exercises: [
          { type: 'fill', sentence: 'The cat is ___ the table.', answer: 'on', options: ['on', 'in', 'under'] },
          { type: 'fill', sentence: 'The ball is ___ the box.', answer: 'in', options: ['on', 'in', 'under'] },
          { type: 'fill', sentence: 'The dog is ___ the chair.', answer: 'under', options: ['on', 'in', 'under'] },
          { type: 'fill', sentence: 'The book is ___ the desk.', answer: 'on', options: ['on', 'in', 'under'] },
          { type: 'fill', sentence: 'The pen is ___ the bag.', answer: 'in', options: ['on', 'in', 'under'] }
        ]
      },
      {
        id: 'g1_l3_like', title: 'I like / I don\'t like', titleVi: 'Toi thich / Toi khong thich', emoji: '❤️',
        explanation: 'Use "like" to say what you enjoy.\n• I like apples.\n• I don\'t like spiders.\n• She likes cats.',
        explanationVi: '"Like" nghia la thich. "Don\'t like" la khong thich.\n• I like apples. (Toi thich tao)\n• I don\'t like spiders. (Toi khong thich nhen)',
        exercises: [
          { type: 'fill', sentence: 'I ___ ice cream.', answer: 'like', options: ['like', 'likes', 'don\'t like'] },
          { type: 'fill', sentence: 'She ___ dogs.', answer: 'likes', options: ['like', 'likes'] },
          { type: 'fill', sentence: 'I ___ snakes.', answer: 'don\'t like', options: ['like', 'don\'t like'] },
          { type: 'fill', sentence: 'He ___ pizza.', answer: 'likes', options: ['like', 'likes'] },
          { type: 'fill', sentence: 'We ___ music.', answer: 'like', options: ['like', 'likes'] }
        ]
      },
      {
        id: 'g1_l3_howmany', title: 'How many...?', titleVi: 'Co bao nhieu...?', emoji: '🔢',
        explanation: 'Use "How many" to ask about number.\n• How many cats? - Three cats.\n• How many books? - Five books.',
        explanationVi: '"How many" dung de hoi so luong.\n• How many cats? - Three cats. (Co bao nhieu con meo? - Ba con meo)',
        exercises: [
          { type: 'fill', sentence: 'How ___ dogs are there?', answer: 'many', options: ['many', 'much', 'old'] },
          { type: 'fill', sentence: 'There ___ three birds.', answer: 'are', options: ['is', 'are', 'am'] },
          { type: 'fill', sentence: 'How many ___ do you have?', answer: 'books', options: ['book', 'books'] },
          { type: 'fill', sentence: 'There ___ one cat.', answer: 'is', options: ['is', 'are'] },
          { type: 'fill', sentence: 'How many ___ are there?', answer: 'chairs', options: ['chair', 'chairs'] }
        ]
      }
    ]
  },
  2: {
    level1: [
      {
        id: 'g2_l1_present', title: 'Present Simple', titleVi: 'Thi hien tai don', emoji: '⏰',
        explanation: 'Use present simple for habits and facts.\n• I play every day.\n• She plays tennis.\n• Add "s" for he/she/it.',
        explanationVi: 'Dung thi hien tai don cho thoi quen va su that.\n• I play every day. (Toi choi moi ngay)\n• She plays tennis. (Co ay choi tennis)\n• Them "s" cho he/she/it.',
        exercises: [
          { type: 'fill', sentence: 'She ___ to school every day.', answer: 'goes', options: ['go', 'goes'] },
          { type: 'fill', sentence: 'I ___ breakfast at 7 AM.', answer: 'eat', options: ['eat', 'eats'] },
          { type: 'fill', sentence: 'He ___ football after school.', answer: 'plays', options: ['play', 'plays'] },
          { type: 'fill', sentence: 'They ___ English on Monday.', answer: 'study', options: ['study', 'studies'] },
          { type: 'fill', sentence: 'My dog ___ fast.', answer: 'runs', options: ['run', 'runs'] }
        ]
      },
      {
        id: 'g2_l1_neg', title: 'Negative: don\'t / doesn\'t', titleVi: 'Phu dinh: don\'t / doesn\'t', emoji: '🚫',
        explanation: 'Use "don\'t" with I/you/we/they. Use "doesn\'t" with he/she/it.\n• I don\'t like rain.\n• She doesn\'t eat meat.',
        explanationVi: 'Dung "don\'t" voi I/you/we/they. Dung "doesn\'t" voi he/she/it.\n• I don\'t like rain. (Toi khong thich mua)\n• She doesn\'t eat meat. (Co ay khong an thit)',
        exercises: [
          { type: 'fill', sentence: 'I ___ like spinach.', answer: "don't", options: ["don't", "doesn't"] },
          { type: 'fill', sentence: 'He ___ play guitar.', answer: "doesn't", options: ["don't", "doesn't"] },
          { type: 'fill', sentence: 'They ___ watch TV at night.', answer: "don't", options: ["don't", "doesn't"] },
          { type: 'fill', sentence: 'She ___ drink coffee.', answer: "doesn't", options: ["don't", "doesn't"] },
          { type: 'fill', sentence: 'We ___ have a car.', answer: "don't", options: ["don't", "doesn't"] }
        ]
      },
      {
        id: 'g2_l1_question', title: 'Yes/No Questions', titleVi: 'Cau hoi Yes/No', emoji: '❓',
        explanation: 'Use "Do" or "Does" to make questions.\n• Do you like cats? - Yes, I do.\n• Does she sing? - No, she doesn\'t.',
        explanationVi: 'Dung "Do" hoac "Does" de dat cau hoi.\n• Do you like cats? - Yes, I do. (Ban co thich meo khong? - Co)\n• Does she sing? - No, she doesn\'t. (Co ay co hat khong? - Khong)',
        exercises: [
          { type: 'fill', sentence: '___ you like pizza?', answer: 'Do', options: ['Do', 'Does'] },
          { type: 'fill', sentence: '___ she play piano?', answer: 'Does', options: ['Do', 'Does'] },
          { type: 'fill', sentence: '___ they go to school?', answer: 'Do', options: ['Do', 'Does'] },
          { type: 'fill', sentence: '___ he speak English?', answer: 'Does', options: ['Do', 'Does'] },
          { type: 'fill', sentence: '___ we need a pen?', answer: 'Do', options: ['Do', 'Does'] }
        ]
      }
    ],
    level2: [
      {
        id: 'g2_l2_continuous', title: 'Present Continuous', titleVi: 'Thi hien tai tiep dien', emoji: '🏃',
        explanation: 'Use am/is/are + verb-ing for actions happening NOW.\n• I am reading.\n• She is singing.\n• They are playing.',
        explanationVi: 'Dung am/is/are + verb-ing cho hanh dong dang xay ra.\n• I am reading. (Toi dang doc)\n• She is singing. (Co ay dang hat)',
        exercises: [
          { type: 'fill', sentence: 'I am ___ a book. (read)', answer: 'reading', options: ['read', 'reading', 'reads'] },
          { type: 'fill', sentence: 'She is ___ a song. (sing)', answer: 'singing', options: ['sing', 'singing', 'sings'] },
          { type: 'fill', sentence: 'They are ___ football. (play)', answer: 'playing', options: ['play', 'playing', 'plays'] },
          { type: 'fill', sentence: 'He is ___ his homework. (do)', answer: 'doing', options: ['do', 'doing', 'does'] },
          { type: 'fill', sentence: 'We are ___ lunch. (eat)', answer: 'eating', options: ['eat', 'eating', 'eats'] }
        ]
      },
      {
        id: 'g2_l2_there', title: 'There is / There are', titleVi: 'Co (There is/are)', emoji: '🏠',
        explanation: 'Use "There is" for one thing. Use "There are" for many things.\n• There is a cat.\n• There are three dogs.',
        explanationVi: '"There is" cho mot vat. "There are" cho nhieu vat.\n• There is a cat. (Co mot con meo)\n• There are three dogs. (Co ba con cho)',
        exercises: [
          { type: 'fill', sentence: 'There ___ a book on the table.', answer: 'is', options: ['is', 'are'] },
          { type: 'fill', sentence: 'There ___ five students.', answer: 'are', options: ['is', 'are'] },
          { type: 'fill', sentence: 'There ___ a dog in the garden.', answer: 'is', options: ['is', 'are'] },
          { type: 'fill', sentence: 'There ___ many birds.', answer: 'are', options: ['is', 'are'] },
          { type: 'fill', sentence: 'There ___ one apple.', answer: 'is', options: ['is', 'are'] }
        ]
      },
      {
        id: 'g2_l2_prep', title: 'Prepositions: in, on, at', titleVi: 'Gioi tu: in, on, at', emoji: '📌',
        explanation: 'in = inside something. on = on a surface. at = a specific place.\n• The cat is in the box.\n• The book is on the desk.\n• I am at school.',
        explanationVi: 'in = ben trong. on = tren be mat. at = tai mot dia diem.\n• The cat is in the box. (Con meo o trong hop)\n• I am at school. (Toi o truong)',
        exercises: [
          { type: 'fill', sentence: 'The ball is ___ the box.', answer: 'in', options: ['in', 'on', 'at'] },
          { type: 'fill', sentence: 'The pen is ___ the table.', answer: 'on', options: ['in', 'on', 'at'] },
          { type: 'fill', sentence: 'I am ___ home.', answer: 'at', options: ['in', 'on', 'at'] },
          { type: 'fill', sentence: 'She is ___ the park.', answer: 'at', options: ['in', 'on', 'at'] },
          { type: 'fill', sentence: 'The fish is ___ the water.', answer: 'in', options: ['in', 'on', 'at'] }
        ]
      }
    ],
    level3: [
      {
        id: 'g2_l3_adj', title: 'Adjectives', titleVi: 'Tinh tu', emoji: '🌈',
        explanation: 'Adjectives describe nouns. They go before the noun.\n• a big dog\n• a small cat\n• a red ball',
        explanationVi: 'Tinh tu mo ta danh tu. Dat truoc danh tu.\n• a big dog (mot con cho to)\n• a small cat (mot con meo nho)',
        exercises: [
          { type: 'fill', sentence: 'The elephant is very ___.', answer: 'big', options: ['big', 'small', 'short'] },
          { type: 'fill', sentence: 'An ant is very ___.', answer: 'small', options: ['big', 'small', 'tall'] },
          { type: 'fill', sentence: 'The sun is ___.', answer: 'hot', options: ['cold', 'hot', 'slow'] },
          { type: 'fill', sentence: 'Ice cream is ___.', answer: 'cold', options: ['hot', 'cold', 'fast'] },
          { type: 'fill', sentence: 'The giraffe is very ___.', answer: 'tall', options: ['short', 'tall', 'small'] }
        ]
      },
      {
        id: 'g2_l3_wh', title: 'Wh- Questions', titleVi: 'Cau hoi Wh-', emoji: '🤔',
        explanation: 'What = thing. Where = place. Who = person. When = time.\n• What is this? - A book.\n• Where is he? - At school.\n• Who is she? - My sister.',
        explanationVi: 'What = cai gi. Where = o dau. Who = ai. When = khi nao.\n• What is this? (Day la cai gi?)\n• Where is he? (Anh ay o dau?)',
        exercises: [
          { type: 'fill', sentence: '___ is your name?', answer: 'What', options: ['What', 'Where', 'Who'] },
          { type: 'fill', sentence: '___ do you live?', answer: 'Where', options: ['What', 'Where', 'Who'] },
          { type: 'fill', sentence: '___ is your teacher?', answer: 'Who', options: ['What', 'Where', 'Who'] },
          { type: 'fill', sentence: '___ is your birthday?', answer: 'When', options: ['What', 'When', 'Who'] },
          { type: 'fill', sentence: '___ color is the sky?', answer: 'What', options: ['What', 'Where', 'When'] }
        ]
      },
      {
        id: 'g2_l3_poss', title: 'Possessive: my, your, his, her', titleVi: 'So huu: my, your, his, her', emoji: '👤',
        explanation: 'Possessive words show who owns something.\n• my book (I own it)\n• your pen (you own it)\n• his bag (he owns it)\n• her doll (she owns it)',
        explanationVi: 'Tu so huu cho biet ai so huu.\n• my book (sach cua toi)\n• your pen (but cua ban)\n• his bag (cap cua anh ay)\n• her doll (bup be cua co ay)',
        exercises: [
          { type: 'fill', sentence: 'This is ___ book. (I)', answer: 'my', options: ['my', 'your', 'his'] },
          { type: 'fill', sentence: 'Is this ___ pen? (you)', answer: 'your', options: ['my', 'your', 'her'] },
          { type: 'fill', sentence: '___ name is Tom. (he)', answer: 'His', options: ['His', 'Her', 'My'] },
          { type: 'fill', sentence: '___ name is Lan. (she)', answer: 'Her', options: ['His', 'Her', 'My'] },
          { type: 'fill', sentence: 'I love ___ family.', answer: 'my', options: ['my', 'your', 'his'] }
        ]
      }
    ]
  },
  3: {
    level1: [
      {
        id: 'g3_l1_past', title: 'Past Simple: was/were', titleVi: 'Qua khu don: was/were', emoji: '⏪',
        explanation: 'Use "was" with I/he/she/it. Use "were" with you/we/they.\n• I was happy yesterday.\n• They were at school.',
        explanationVi: 'Dung "was" voi I/he/she/it. Dung "were" voi you/we/they.\n• I was happy yesterday. (Hom qua toi vui)\n• They were at school. (Ho o truong)',
        exercises: [
          { type: 'fill', sentence: 'I ___ at home yesterday.', answer: 'was', options: ['was', 'were'] },
          { type: 'fill', sentence: 'They ___ in the park.', answer: 'were', options: ['was', 'were'] },
          { type: 'fill', sentence: 'She ___ sick last week.', answer: 'was', options: ['was', 'were'] },
          { type: 'fill', sentence: 'We ___ happy.', answer: 'were', options: ['was', 'were'] },
          { type: 'fill', sentence: 'He ___ my friend.', answer: 'was', options: ['was', 'were'] }
        ]
      },
      {
        id: 'g3_l1_pastv', title: 'Past Simple: Regular Verbs', titleVi: 'Qua khu don: Dong tu co quy tac', emoji: '📝',
        explanation: 'Add "-ed" to regular verbs for past tense.\n• play → played\n• walk → walked\n• watch → watched',
        explanationVi: 'Them "-ed" cho dong tu co quy tac o thi qua khu.\n• play → played (choi → da choi)\n• walk → walked (di bo → da di bo)',
        exercises: [
          { type: 'fill', sentence: 'I ___ TV last night. (watch)', answer: 'watched', options: ['watch', 'watched', 'watches'] },
          { type: 'fill', sentence: 'She ___ the room. (clean)', answer: 'cleaned', options: ['clean', 'cleaned', 'cleans'] },
          { type: 'fill', sentence: 'They ___ soccer yesterday. (play)', answer: 'played', options: ['play', 'played', 'plays'] },
          { type: 'fill', sentence: 'We ___ to school. (walk)', answer: 'walked', options: ['walk', 'walked', 'walks'] },
          { type: 'fill', sentence: 'He ___ his mom. (help)', answer: 'helped', options: ['help', 'helped', 'helps'] }
        ]
      },
      {
        id: 'g3_l1_irreg', title: 'Irregular Verbs', titleVi: 'Dong tu bat quy tac', emoji: '⚡',
        explanation: 'Some verbs change differently in past tense.\n• go → went\n• eat → ate\n• see → saw\n• have → had',
        explanationVi: 'Mot so dong tu thay doi dac biet o thi qua khu.\n• go → went (di → da di)\n• eat → ate (an → da an)\n• see → saw (nhin → da nhin)',
        exercises: [
          { type: 'fill', sentence: 'I ___ to school today. (go)', answer: 'went', options: ['go', 'went', 'goes'] },
          { type: 'fill', sentence: 'She ___ an apple. (eat)', answer: 'ate', options: ['eat', 'ate', 'eats'] },
          { type: 'fill', sentence: 'We ___ a movie. (see)', answer: 'saw', options: ['see', 'saw', 'sees'] },
          { type: 'fill', sentence: 'He ___ a sandwich. (have)', answer: 'had', options: ['have', 'had', 'has'] },
          { type: 'fill', sentence: 'They ___ milk. (drink)', answer: 'drank', options: ['drink', 'drank', 'drinks'] }
        ]
      }
    ],
    level2: [
      {
        id: 'g3_l2_future', title: 'Future: will', titleVi: 'Tuong lai: will', emoji: '🔮',
        explanation: 'Use "will" + verb for future.\n• I will go tomorrow.\n• She will help you.\n• We will study hard.',
        explanationVi: 'Dung "will" + dong tu cho tuong lai.\n• I will go tomorrow. (Ngay mai toi se di)\n• She will help you. (Co ay se giup ban)',
        exercises: [
          { type: 'fill', sentence: 'I ___ help you tomorrow.', answer: 'will', options: ['will', 'was', 'am'] },
          { type: 'fill', sentence: 'She will ___ a doctor.', answer: 'be', options: ['be', 'is', 'was'] },
          { type: 'fill', sentence: 'They ___ come next week.', answer: 'will', options: ['will', 'were', 'are'] },
          { type: 'fill', sentence: 'We will ___ English.', answer: 'study', options: ['study', 'studied', 'studies'] },
          { type: 'fill', sentence: 'He ___ play football later.', answer: 'will', options: ['will', 'was', 'is'] }
        ]
      },
      {
        id: 'g3_l2_comp', title: 'Comparatives', titleVi: 'So sanh hon', emoji: '📏',
        explanation: 'Add "-er" to compare two things.\n• tall → taller\n• big → bigger\n• fast → faster\n• She is taller than me.',
        explanationVi: 'Them "-er" de so sanh hai thu.\n• tall → taller (cao → cao hon)\n• She is taller than me. (Co ay cao hon toi)',
        exercises: [
          { type: 'fill', sentence: 'An elephant is ___ than a cat.', answer: 'bigger', options: ['big', 'bigger', 'biggest'] },
          { type: 'fill', sentence: 'She is ___ than her brother.', answer: 'taller', options: ['tall', 'taller', 'tallest'] },
          { type: 'fill', sentence: 'A car is ___ than a bike.', answer: 'faster', options: ['fast', 'faster', 'fastest'] },
          { type: 'fill', sentence: 'Summer is ___ than winter.', answer: 'hotter', options: ['hot', 'hotter', 'hottest'] },
          { type: 'fill', sentence: 'This book is ___ than that one.', answer: 'longer', options: ['long', 'longer', 'longest'] }
        ]
      },
      {
        id: 'g3_l2_super', title: 'Superlatives', titleVi: 'So sanh nhat', emoji: '🏆',
        explanation: 'Add "-est" to say the most.\n• tall → tallest\n• big → biggest\n• He is the tallest in the class.',
        explanationVi: 'Them "-est" de noi nhat.\n• tall → tallest (cao nhat)\n• He is the tallest in the class. (Anh ay cao nhat lop)',
        exercises: [
          { type: 'fill', sentence: 'He is the ___ boy in class.', answer: 'tallest', options: ['tall', 'taller', 'tallest'] },
          { type: 'fill', sentence: 'This is the ___ cake ever.', answer: 'best', options: ['good', 'better', 'best'] },
          { type: 'fill', sentence: 'The cheetah is the ___ animal.', answer: 'fastest', options: ['fast', 'faster', 'fastest'] },
          { type: 'fill', sentence: 'She is the ___ girl.', answer: 'smartest', options: ['smart', 'smarter', 'smartest'] },
          { type: 'fill', sentence: 'This is the ___ room.', answer: 'biggest', options: ['big', 'bigger', 'biggest'] }
        ]
      }
    ],
    level3: [
      {
        id: 'g3_l3_adverb', title: 'Adverbs of Frequency', titleVi: 'Trang tu chi tan suat', emoji: '🔄',
        explanation: 'always > usually > often > sometimes > never\n• I always brush my teeth.\n• She sometimes plays piano.\n• He never eats fish.',
        explanationVi: 'always (luon luon) > usually (thuong) > often (hay) > sometimes (thinh thoang) > never (khong bao gio)',
        exercises: [
          { type: 'fill', sentence: 'I ___ go to school on Monday. (100%)', answer: 'always', options: ['always', 'sometimes', 'never'] },
          { type: 'fill', sentence: 'She ___ eats candy. (0%)', answer: 'never', options: ['always', 'sometimes', 'never'] },
          { type: 'fill', sentence: 'He ___ plays guitar. (50%)', answer: 'sometimes', options: ['always', 'sometimes', 'never'] },
          { type: 'fill', sentence: 'We ___ eat breakfast. (90%)', answer: 'usually', options: ['usually', 'sometimes', 'never'] },
          { type: 'fill', sentence: 'They ___ go swimming. (70%)', answer: 'often', options: ['always', 'often', 'never'] }
        ]
      },
      {
        id: 'g3_l3_count', title: 'Countable & Uncountable', titleVi: 'Dem duoc & Khong dem duoc', emoji: '🥛',
        explanation: 'Countable: can count (one apple, two apples).\nUncountable: cannot count (water, milk, rice).\n• Use "much" for uncountable.\n• Use "many" for countable.',
        explanationVi: 'Dem duoc: co the dem (mot qua tao, hai qua tao).\nKhong dem duoc: khong the dem (nuoc, sua, gao).\n• Dung "much" cho khong dem duoc.\n• Dung "many" cho dem duoc.',
        exercises: [
          { type: 'fill', sentence: 'How ___ water do you need?', answer: 'much', options: ['much', 'many'] },
          { type: 'fill', sentence: 'How ___ books are there?', answer: 'many', options: ['much', 'many'] },
          { type: 'fill', sentence: 'How ___ milk is there?', answer: 'much', options: ['much', 'many'] },
          { type: 'fill', sentence: 'How ___ apples do you want?', answer: 'many', options: ['much', 'many'] },
          { type: 'fill', sentence: 'How ___ rice is left?', answer: 'much', options: ['much', 'many'] }
        ]
      },
      {
        id: 'g3_l3_must', title: 'Must / Mustn\'t', titleVi: 'Phai / Khong duoc', emoji: '⚠️',
        explanation: 'Must = you have to do it. Mustn\'t = you are not allowed.\n• You must wear a helmet.\n• You mustn\'t run in the hall.',
        explanationVi: 'Must = phai lam. Mustn\'t = khong duoc lam.\n• You must wear a helmet. (Ban phai doi mu bao hiem)\n• You mustn\'t run in the hall. (Ban khong duoc chay trong hanh lang)',
        exercises: [
          { type: 'fill', sentence: 'You ___ do your homework.', answer: 'must', options: ['must', "mustn't"] },
          { type: 'fill', sentence: 'You ___ cheat in exams.', answer: "mustn't", options: ['must', "mustn't"] },
          { type: 'fill', sentence: 'Students ___ be on time.', answer: 'must', options: ['must', "mustn't"] },
          { type: 'fill', sentence: 'You ___ talk during the test.', answer: "mustn't", options: ['must', "mustn't"] },
          { type: 'fill', sentence: 'We ___ respect our teachers.', answer: 'must', options: ['must', "mustn't"] }
        ]
      }
    ]
  },
  4: {
    level1: [
      {
        id: 'g4_l1_pastcont', title: 'Past Continuous', titleVi: 'Qua khu tiep dien', emoji: '🔙',
        explanation: 'Use was/were + verb-ing for actions in progress in the past.\n• I was reading at 8 PM.\n• They were playing when it rained.',
        explanationVi: 'Dung was/were + verb-ing cho hanh dong dang xay ra trong qua khu.\n• I was reading at 8 PM. (Luc 8h toi toi dang doc sach)',
        exercises: [
          { type: 'fill', sentence: 'I ___ sleeping when you called.', answer: 'was', options: ['was', 'were', 'am'] },
          { type: 'fill', sentence: 'They ___ playing outside.', answer: 'were', options: ['was', 'were', 'is'] },
          { type: 'fill', sentence: 'She was ___ a letter. (write)', answer: 'writing', options: ['write', 'writing', 'wrote'] },
          { type: 'fill', sentence: 'We ___ eating dinner at 7.', answer: 'were', options: ['was', 'were'] },
          { type: 'fill', sentence: 'He was ___ to music. (listen)', answer: 'listening', options: ['listen', 'listening', 'listened'] }
        ]
      },
      {
        id: 'g4_l1_goingto', title: 'Going to (future plans)', titleVi: 'Going to (du dinh)', emoji: '📅',
        explanation: 'Use "am/is/are going to" for future plans.\n• I am going to visit grandma.\n• She is going to study English.',
        explanationVi: 'Dung "am/is/are going to" cho du dinh tuong lai.\n• I am going to visit grandma. (Toi se di tham ba)',
        exercises: [
          { type: 'fill', sentence: 'I am ___ to study tonight.', answer: 'going', options: ['going', 'go', 'went'] },
          { type: 'fill', sentence: 'She ___ going to cook dinner.', answer: 'is', options: ['is', 'are', 'am'] },
          { type: 'fill', sentence: 'They ___ going to travel.', answer: 'are', options: ['is', 'are', 'am'] },
          { type: 'fill', sentence: 'He is going ___ play tennis.', answer: 'to', options: ['to', 'for', 'at'] },
          { type: 'fill', sentence: 'We are going to ___ a movie.', answer: 'watch', options: ['watch', 'watched', 'watching'] }
        ]
      },
      {
        id: 'g4_l1_should', title: 'Should / Shouldn\'t', titleVi: 'Nen / Khong nen', emoji: '💡',
        explanation: 'Should = advice (good idea). Shouldn\'t = not a good idea.\n• You should eat vegetables.\n• You shouldn\'t stay up late.',
        explanationVi: 'Should = nen (y tuong tot). Shouldn\'t = khong nen.\n• You should eat vegetables. (Ban nen an rau)\n• You shouldn\'t stay up late. (Ban khong nen thuc khuya)',
        exercises: [
          { type: 'fill', sentence: 'You ___ brush your teeth.', answer: 'should', options: ['should', "shouldn't"] },
          { type: 'fill', sentence: 'You ___ eat too much candy.', answer: "shouldn't", options: ['should', "shouldn't"] },
          { type: 'fill', sentence: 'She ___ study for the exam.', answer: 'should', options: ['should', "shouldn't"] },
          { type: 'fill', sentence: 'We ___ be polite.', answer: 'should', options: ['should', "shouldn't"] },
          { type: 'fill', sentence: 'They ___ play near the road.', answer: "shouldn't", options: ['should', "shouldn't"] }
        ]
      }
    ],
    level2: [
      {
        id: 'g4_l2_present_perf', title: 'Present Perfect (intro)', titleVi: 'Hien tai hoan thanh (gioi thieu)', emoji: '✅',
        explanation: 'Use have/has + past participle for experiences.\n• I have visited Hanoi.\n• She has eaten pho.\n• We have seen that movie.',
        explanationVi: 'Dung have/has + qua khu phan tu cho trai nghiem.\n• I have visited Hanoi. (Toi da den Ha Noi)\n• She has eaten pho. (Co ay da an pho)',
        exercises: [
          { type: 'fill', sentence: 'I have ___ to Da Nang. (be)', answer: 'been', options: ['been', 'be', 'was'] },
          { type: 'fill', sentence: 'She has ___ this book. (read)', answer: 'read', options: ['read', 'reads', 'reading'] },
          { type: 'fill', sentence: 'They have ___ the movie. (see)', answer: 'seen', options: ['seen', 'saw', 'see'] },
          { type: 'fill', sentence: 'He ___ eaten breakfast.', answer: 'has', options: ['has', 'have', 'had'] },
          { type: 'fill', sentence: 'We ___ finished our work.', answer: 'have', options: ['has', 'have', 'had'] }
        ]
      },
      {
        id: 'g4_l2_some_any', title: 'Some / Any', titleVi: 'Some / Any (mot so / bat ky)', emoji: '🛒',
        explanation: 'Some = positive sentences. Any = questions and negatives.\n• I have some apples.\n• Do you have any milk?\n• I don\'t have any money.',
        explanationVi: 'Some = cau khang dinh. Any = cau hoi va phu dinh.\n• I have some apples. (Toi co mot so tao)\n• Do you have any milk? (Ban co sua nao khong?)',
        exercises: [
          { type: 'fill', sentence: 'I have ___ friends at school.', answer: 'some', options: ['some', 'any'] },
          { type: 'fill', sentence: 'Do you have ___ questions?', answer: 'any', options: ['some', 'any'] },
          { type: 'fill', sentence: 'She doesn\'t have ___ pets.', answer: 'any', options: ['some', 'any'] },
          { type: 'fill', sentence: 'There are ___ books on the shelf.', answer: 'some', options: ['some', 'any'] },
          { type: 'fill', sentence: 'Is there ___ water left?', answer: 'any', options: ['some', 'any'] }
        ]
      },
      {
        id: 'g4_l2_conjunc', title: 'Conjunctions: and, but, or', titleVi: 'Lien tu: and, but, or', emoji: '🔗',
        explanation: 'and = add information. but = contrast. or = choice.\n• I like cats and dogs.\n• She is smart but lazy.\n• Do you want tea or coffee?',
        explanationVi: 'and = them thong tin. but = tuong phan. or = lua chon.\n• I like cats and dogs. (Toi thich meo va cho)\n• Do you want tea or coffee? (Ban muon tra hay ca phe?)',
        exercises: [
          { type: 'fill', sentence: 'I like apples ___ oranges.', answer: 'and', options: ['and', 'but', 'or'] },
          { type: 'fill', sentence: 'He is tall ___ thin.', answer: 'but', options: ['and', 'but', 'or'] },
          { type: 'fill', sentence: 'Do you want rice ___ noodles?', answer: 'or', options: ['and', 'but', 'or'] },
          { type: 'fill', sentence: 'She sings ___ dances well.', answer: 'and', options: ['and', 'but', 'or'] },
          { type: 'fill', sentence: 'I studied hard ___ I failed.', answer: 'but', options: ['and', 'but', 'or'] }
        ]
      }
    ],
    level3: [
      {
        id: 'g4_l3_relative', title: 'Relative Pronouns: who, which', titleVi: 'Dai tu quan he: who, which', emoji: '🔍',
        explanation: 'who = for people. which = for things.\n• The girl who sings is my sister.\n• The book which I read is good.',
        explanationVi: 'who = cho nguoi. which = cho vat.\n• The girl who sings is my sister. (Co gai hat la chi toi)\n• The book which I read is good. (Quyen sach toi doc rat hay)',
        exercises: [
          { type: 'fill', sentence: 'The boy ___ is running is my friend.', answer: 'who', options: ['who', 'which'] },
          { type: 'fill', sentence: 'The car ___ is red is mine.', answer: 'which', options: ['who', 'which'] },
          { type: 'fill', sentence: 'The teacher ___ teaches math is kind.', answer: 'who', options: ['who', 'which'] },
          { type: 'fill', sentence: 'The cake ___ she made is delicious.', answer: 'which', options: ['who', 'which'] },
          { type: 'fill', sentence: 'The man ___ lives next door is a doctor.', answer: 'who', options: ['who', 'which'] }
        ]
      },
      {
        id: 'g4_l3_passive_intro', title: 'Passive Voice (intro)', titleVi: 'Cau bi dong (gioi thieu)', emoji: '🔄',
        explanation: 'Active: The cat eats the fish.\nPassive: The fish is eaten by the cat.\n• Use: am/is/are + past participle',
        explanationVi: 'Chu dong: The cat eats the fish. (Con meo an con ca)\nBi dong: The fish is eaten by the cat. (Con ca bi con meo an)',
        exercises: [
          { type: 'fill', sentence: 'The cake is ___ by mom.', answer: 'made', options: ['make', 'made', 'making'] },
          { type: 'fill', sentence: 'English is ___ in many countries.', answer: 'spoken', options: ['speak', 'spoken', 'speaking'] },
          { type: 'fill', sentence: 'The door is ___ every night.', answer: 'locked', options: ['lock', 'locked', 'locking'] },
          { type: 'fill', sentence: 'The songs are ___ by the children.', answer: 'sung', options: ['sing', 'sung', 'singing'] },
          { type: 'fill', sentence: 'Rice ___ grown in Vietnam.', answer: 'is', options: ['is', 'are', 'am'] }
        ]
      },
      {
        id: 'g4_l3_if1', title: 'If clause (Type 0)', titleVi: 'Cau dieu kien loai 0', emoji: '🌡️',
        explanation: 'Type 0: If + present simple, present simple (for facts).\n• If you heat water, it boils.\n• If it rains, the ground gets wet.',
        explanationVi: 'Loai 0: If + hien tai don, hien tai don (cho su that).\n• If you heat water, it boils. (Neu ban dun nuoc, no soi)',
        exercises: [
          { type: 'fill', sentence: 'If you heat ice, it ___.', answer: 'melts', options: ['melts', 'melted', 'melt'] },
          { type: 'fill', sentence: 'If it ___, we get wet.', answer: 'rains', options: ['rains', 'rained', 'rain'] },
          { type: 'fill', sentence: 'If you mix red and blue, you ___ purple.', answer: 'get', options: ['get', 'got', 'gets'] },
          { type: 'fill', sentence: 'Plants die if they ___ get water.', answer: "don't", options: ["don't", "didn't", "won't"] },
          { type: 'fill', sentence: 'If the sun ___, it is daytime.', answer: 'shines', options: ['shines', 'shined', 'shine'] }
        ]
      }
    ]
  },
  5: {
    level1: [
      {
        id: 'g5_l1_pperf', title: 'Present Perfect vs Past Simple', titleVi: 'Hien tai hoan thanh vs Qua khu don', emoji: '⚖️',
        explanation: 'Present Perfect: experience, no specific time. Past Simple: specific time.\n• I have been to Paris. (sometime)\n• I went to Paris in 2020. (specific)',
        explanationVi: 'Hien tai hoan thanh: trai nghiem, khong co thoi gian cu the.\nQua khu don: thoi gian cu the.\n• I have been to Paris. (da tung den Paris)\n• I went to Paris in 2020. (Toi den Paris nam 2020)',
        exercises: [
          { type: 'fill', sentence: 'I ___ already eaten lunch.', answer: 'have', options: ['have', 'had', 'did'] },
          { type: 'fill', sentence: 'She ___ to Hue last summer.', answer: 'went', options: ['went', 'has gone', 'goes'] },
          { type: 'fill', sentence: 'They have ___ visited Da Lat.', answer: 'never', options: ['never', 'yesterday', 'ago'] },
          { type: 'fill', sentence: 'He ___ his homework an hour ago.', answer: 'finished', options: ['finished', 'has finished', 'finishes'] },
          { type: 'fill', sentence: 'We ___ seen this movie before.', answer: 'have', options: ['have', 'did', 'were'] }
        ]
      },
      {
        id: 'g5_l1_if1', title: 'Conditional Type 1', titleVi: 'Cau dieu kien loai 1', emoji: '🔮',
        explanation: 'If + present simple, will + verb (possible future).\n• If it rains, I will stay home.\n• If you study hard, you will pass.',
        explanationVi: 'If + hien tai don, will + dong tu (kha nang tuong lai).\n• If it rains, I will stay home. (Neu troi mua, toi se o nha)',
        exercises: [
          { type: 'fill', sentence: 'If it rains, I ___ take an umbrella.', answer: 'will', options: ['will', 'would', 'did'] },
          { type: 'fill', sentence: 'If you ___ hard, you will pass.', answer: 'study', options: ['study', 'studied', 'will study'] },
          { type: 'fill', sentence: 'If she comes, we ___ be happy.', answer: 'will', options: ['will', 'would', 'are'] },
          { type: 'fill', sentence: 'If they ___ late, the bus will leave.', answer: 'are', options: ['are', 'were', 'will be'] },
          { type: 'fill', sentence: 'I will help you if you ___ me.', answer: 'ask', options: ['ask', 'asked', 'will ask'] }
        ]
      },
      {
        id: 'g5_l1_modal', title: 'Modals: may, might, could', titleVi: 'Dong tu khiem khuyet: may, might, could', emoji: '🎯',
        explanation: 'May/might/could express possibility.\n• It may rain tomorrow.\n• She might come to the party.\n• He could be at home.',
        explanationVi: 'May/might/could dien ta kha nang.\n• It may rain tomorrow. (Ngay mai co the mua)\n• She might come to the party. (Co ay co the den buoi tiec)',
        exercises: [
          { type: 'fill', sentence: 'It ___ rain later. (possibility)', answer: 'might', options: ['might', 'must', 'will'] },
          { type: 'fill', sentence: '___ I use your pen?', answer: 'May', options: ['May', 'Must', 'Will'] },
          { type: 'fill', sentence: 'She ___ be at the library.', answer: 'could', options: ['could', 'must', 'will'] },
          { type: 'fill', sentence: 'We ___ go to the beach tomorrow.', answer: 'might', options: ['might', 'must'] },
          { type: 'fill', sentence: '___ I sit here? (permission)', answer: 'May', options: ['May', 'Must', 'Will'] }
        ]
      }
    ],
    level2: [
      {
        id: 'g5_l2_passive', title: 'Passive Voice', titleVi: 'Cau bi dong', emoji: '🔄',
        explanation: 'Subject + be + past participle (+ by agent).\n• Present: The cake is made by mom.\n• Past: The letter was written by Tom.',
        explanationVi: 'Chu ngu + be + qua khu phan tu (+ by tac nhan).\n• The cake is made by mom. (Banh duoc lam boi me)\n• The letter was written by Tom. (Thu duoc viet boi Tom)',
        exercises: [
          { type: 'fill', sentence: 'This song ___ sung by many people.', answer: 'is', options: ['is', 'are', 'was'] },
          { type: 'fill', sentence: 'The window was ___ by the boy.', answer: 'broken', options: ['break', 'broken', 'broke'] },
          { type: 'fill', sentence: 'These books ___ written in English.', answer: 'are', options: ['is', 'are', 'was'] },
          { type: 'fill', sentence: 'The house was ___ in 2000.', answer: 'built', options: ['build', 'built', 'building'] },
          { type: 'fill', sentence: 'Ao dai ___ worn in Vietnam.', answer: 'is', options: ['is', 'are', 'was'] }
        ]
      },
      {
        id: 'g5_l2_reported', title: 'Reported Speech (intro)', titleVi: 'Cau tuong thuat (gioi thieu)', emoji: '💬',
        explanation: 'Direct: "I am happy," she said.\nReported: She said (that) she was happy.\n• Change tense back one step.',
        explanationVi: 'Truc tiep: "I am happy," she said.\nTuong thuat: She said (that) she was happy.\n• Lui thi ve mot buoc.',
        exercises: [
          { type: 'fill', sentence: 'He said he ___ tired. ("I am tired")', answer: 'was', options: ['was', 'is', 'will be'] },
          { type: 'fill', sentence: 'She said she ___ English. ("I like English")', answer: 'liked', options: ['liked', 'likes', 'like'] },
          { type: 'fill', sentence: 'They said they ___ come. ("We will come")', answer: 'would', options: ['would', 'will', 'can'] },
          { type: 'fill', sentence: 'He said he ___ studying. ("I am studying")', answer: 'was', options: ['was', 'is', 'were'] },
          { type: 'fill', sentence: 'She said she ___ seen it. ("I have seen it")', answer: 'had', options: ['had', 'has', 'have'] }
        ]
      },
      {
        id: 'g5_l2_tag', title: 'Tag Questions', titleVi: 'Cau hoi duoi', emoji: '❓',
        explanation: 'Positive sentence → negative tag. Negative sentence → positive tag.\n• You are a student, aren\'t you?\n• She doesn\'t like fish, does she?',
        explanationVi: 'Cau khang dinh → tag phu dinh. Cau phu dinh → tag khang dinh.\n• You are a student, aren\'t you? (Ban la hoc sinh, phai khong?)',
        exercises: [
          { type: 'fill', sentence: 'He is a doctor, ___ he?', answer: "isn't", options: ["isn't", 'is'] },
          { type: 'fill', sentence: 'They don\'t like fish, ___ they?', answer: 'do', options: ['do', "don't"] },
          { type: 'fill', sentence: 'She can swim, ___ she?', answer: "can't", options: ["can't", 'can'] },
          { type: 'fill', sentence: 'You went to school, ___ you?', answer: "didn't", options: ["didn't", 'did'] },
          { type: 'fill', sentence: 'We are late, ___ we?', answer: "aren't", options: ["aren't", 'are'] }
        ]
      }
    ],
    level3: [
      {
        id: 'g5_l3_gerund', title: 'Gerunds & Infinitives', titleVi: 'Danh dong tu & To + V', emoji: '📚',
        explanation: 'Gerund (V-ing): enjoy, like, love, finish + V-ing.\nInfinitive (to V): want, need, decide + to V.\n• I enjoy reading.\n• I want to play.',
        explanationVi: 'Danh dong tu (V-ing): enjoy, like + V-ing.\nTo + V: want, need + to V.\n• I enjoy reading. (Toi thich doc sach)\n• I want to play. (Toi muon choi)',
        exercises: [
          { type: 'fill', sentence: 'I enjoy ___ books.', answer: 'reading', options: ['reading', 'to read', 'read'] },
          { type: 'fill', sentence: 'She wants ___ a teacher.', answer: 'to be', options: ['to be', 'being', 'be'] },
          { type: 'fill', sentence: 'They finished ___ their homework.', answer: 'doing', options: ['doing', 'to do', 'do'] },
          { type: 'fill', sentence: 'He decided ___ English.', answer: 'to study', options: ['to study', 'studying', 'study'] },
          { type: 'fill', sentence: 'We love ___ football.', answer: 'playing', options: ['playing', 'to play', 'play'] }
        ]
      },
      {
        id: 'g5_l3_relative2', title: 'Relative Clauses', titleVi: 'Menh de quan he', emoji: '🔗',
        explanation: 'who (people), which (things), where (places), when (time).\n• The city where I live is big.\n• The day when I was born is special.',
        explanationVi: 'who (nguoi), which (vat), where (noi), when (thoi gian).\n• The city where I live is big. (Thanh pho noi toi song rat lon)',
        exercises: [
          { type: 'fill', sentence: 'The school ___ I study is famous.', answer: 'where', options: ['where', 'which', 'who'] },
          { type: 'fill', sentence: 'The man ___ helped me is a teacher.', answer: 'who', options: ['who', 'which', 'where'] },
          { type: 'fill', sentence: 'The day ___ we met was rainy.', answer: 'when', options: ['when', 'where', 'which'] },
          { type: 'fill', sentence: 'The movie ___ we watched was great.', answer: 'which', options: ['which', 'who', 'where'] },
          { type: 'fill', sentence: 'The park ___ we play is near.', answer: 'where', options: ['where', 'which', 'when'] }
        ]
      },
      {
        id: 'g5_l3_phrasal', title: 'Phrasal Verbs', titleVi: 'Cum dong tu', emoji: '🧩',
        explanation: 'Verb + preposition = new meaning.\n• look after = take care of\n• give up = stop trying\n• turn on = switch on\n• put on = wear',
        explanationVi: 'Dong tu + gioi tu = nghia moi.\n• look after = cham soc\n• give up = bo cuoc\n• turn on = bat (may)\n• put on = mac (quan ao)',
        exercises: [
          { type: 'fill', sentence: 'Please turn ___ the light.', answer: 'on', options: ['on', 'off', 'up'] },
          { type: 'fill', sentence: 'I look ___ my little sister.', answer: 'after', options: ['after', 'for', 'up'] },
          { type: 'fill', sentence: 'Don\'t give ___! Keep trying.', answer: 'up', options: ['up', 'in', 'on'] },
          { type: 'fill', sentence: 'Please put ___ your jacket.', answer: 'on', options: ['on', 'off', 'up'] },
          { type: 'fill', sentence: 'Turn ___ the TV, it\'s bedtime.', answer: 'off', options: ['on', 'off', 'up'] }
        ]
      }
    ]
  },
  6: {
    level1: [
      {
        id: 'g6_l1_if2', title: 'Conditional Type 2', titleVi: 'Cau dieu kien loai 2', emoji: '💭',
        explanation: 'If + past simple, would + verb (unreal/imaginary).\n• If I had money, I would buy a car.\n• If she were here, she would help.',
        explanationVi: 'If + qua khu don, would + dong tu (khong co that).\n• If I had money, I would buy a car. (Neu toi co tien, toi se mua xe)',
        exercises: [
          { type: 'fill', sentence: 'If I ___ rich, I would travel the world.', answer: 'were', options: ['were', 'am', 'will be'] },
          { type: 'fill', sentence: 'If she studied, she ___ pass.', answer: 'would', options: ['would', 'will', 'can'] },
          { type: 'fill', sentence: 'If I ___ a bird, I would fly.', answer: 'were', options: ['were', 'am', 'was'] },
          { type: 'fill', sentence: 'If he had time, he ___ come.', answer: 'would', options: ['would', 'will', 'does'] },
          { type: 'fill', sentence: 'If we ___ a car, we would drive.', answer: 'had', options: ['had', 'have', 'has'] }
        ]
      },
      {
        id: 'g6_l1_pperfcont', title: 'Present Perfect Continuous', titleVi: 'Hien tai hoan thanh tiep dien', emoji: '⏳',
        explanation: 'Have/has been + V-ing (action started in past, still continuing).\n• I have been waiting for 2 hours.\n• She has been studying since 3 PM.',
        explanationVi: 'Have/has been + V-ing (hanh dong bat dau tu qua khu, van tiep tuc).\n• I have been waiting for 2 hours. (Toi da cho 2 tieng roi)',
        exercises: [
          { type: 'fill', sentence: 'I have been ___ for an hour. (wait)', answer: 'waiting', options: ['waiting', 'wait', 'waited'] },
          { type: 'fill', sentence: 'She ___ been studying all day.', answer: 'has', options: ['has', 'have', 'had'] },
          { type: 'fill', sentence: 'They have been ___ since morning. (work)', answer: 'working', options: ['working', 'work', 'worked'] },
          { type: 'fill', sentence: 'He has been ___ English for 3 years.', answer: 'learning', options: ['learning', 'learn', 'learned'] },
          { type: 'fill', sentence: 'We ___ been living here since 2020.', answer: 'have', options: ['have', 'has', 'had'] }
        ]
      },
      {
        id: 'g6_l1_passive2', title: 'Passive Voice (all tenses)', titleVi: 'Bi dong (cac thi)', emoji: '🔄',
        explanation: 'Present: is/are + PP\nPast: was/were + PP\nFuture: will be + PP\nPerfect: has/have been + PP',
        explanationVi: 'Hien tai: is/are + PP\nQua khu: was/were + PP\nTuong lai: will be + PP\nHoan thanh: has/have been + PP',
        exercises: [
          { type: 'fill', sentence: 'The bridge was ___ in 1990.', answer: 'built', options: ['built', 'build', 'building'] },
          { type: 'fill', sentence: 'English ___ spoken worldwide.', answer: 'is', options: ['is', 'was', 'has'] },
          { type: 'fill', sentence: 'The report will ___ finished tomorrow.', answer: 'be', options: ['be', 'been', 'being'] },
          { type: 'fill', sentence: 'The homework has ___ completed.', answer: 'been', options: ['been', 'be', 'being'] },
          { type: 'fill', sentence: 'The windows ___ cleaned yesterday.', answer: 'were', options: ['were', 'are', 'will be'] }
        ]
      }
    ],
    level2: [
      {
        id: 'g6_l2_reported2', title: 'Reported Speech (advanced)', titleVi: 'Tuong thuat (nang cao)', emoji: '🗣️',
        explanation: 'Report questions: asked if/whether.\nReport commands: told + to V.\n• He asked if I was happy.\n• She told me to sit down.',
        explanationVi: 'Tuong thuat cau hoi: asked if/whether.\nTuong thuat menh lenh: told + to V.\n• He asked if I was happy. (Anh ay hoi toi co vui khong)',
        exercises: [
          { type: 'fill', sentence: 'She asked ___ I liked coffee.', answer: 'if', options: ['if', 'that', 'to'] },
          { type: 'fill', sentence: 'He told me ___ sit down.', answer: 'to', options: ['to', 'if', 'that'] },
          { type: 'fill', sentence: 'They asked ___ we were coming.', answer: 'whether', options: ['whether', 'that', 'to'] },
          { type: 'fill', sentence: 'She told him ___ be quiet.', answer: 'to', options: ['to', 'if', 'that'] },
          { type: 'fill', sentence: 'He asked me ___ I lived.', answer: 'where', options: ['where', 'if', 'to'] }
        ]
      },
      {
        id: 'g6_l2_although', title: 'Although / However / Despite', titleVi: 'Mac du / Tuy nhien / Mac cho', emoji: '↔️',
        explanation: 'Although + clause: Although it rained, we went out.\nHowever: It rained. However, we went out.\nDespite + noun/V-ing: Despite the rain, we went out.',
        explanationVi: 'Although + menh de: Mac du troi mua, chung toi van di.\nHowever: Troi mua. Tuy nhien, chung toi van di.\nDespite + danh tu: Mac cho mua, chung toi van di.',
        exercises: [
          { type: 'fill', sentence: '___ it was cold, she went swimming.', answer: 'Although', options: ['Although', 'Despite', 'However'] },
          { type: 'fill', sentence: '___ the rain, the match continued.', answer: 'Despite', options: ['Although', 'Despite', 'However'] },
          { type: 'fill', sentence: 'He is tired. ___, he keeps working.', answer: 'However', options: ['Although', 'Despite', 'However'] },
          { type: 'fill', sentence: '___ being sick, she went to school.', answer: 'Despite', options: ['Although', 'Despite', 'However'] },
          { type: 'fill', sentence: '___ he studied hard, he didn\'t pass.', answer: 'Although', options: ['Although', 'Despite', 'However'] }
        ]
      },
      {
        id: 'g6_l2_wish', title: 'Wish + Past Simple', titleVi: 'Uoc (Wish)', emoji: '⭐',
        explanation: 'Wish + past simple for present unreal wishes.\n• I wish I had a car. (I don\'t have one)\n• She wishes she were taller. (She is not tall)',
        explanationVi: 'Wish + qua khu don cho uoc muon khong co that o hien tai.\n• I wish I had a car. (Uoc gi toi co xe - toi khong co)\n• She wishes she were taller. (Co ay uoc duoc cao hon)',
        exercises: [
          { type: 'fill', sentence: 'I wish I ___ fly.', answer: 'could', options: ['could', 'can', 'will'] },
          { type: 'fill', sentence: 'She wishes she ___ taller.', answer: 'were', options: ['were', 'is', 'was'] },
          { type: 'fill', sentence: 'I wish I ___ more money.', answer: 'had', options: ['had', 'have', 'has'] },
          { type: 'fill', sentence: 'He wishes he ___ play guitar.', answer: 'could', options: ['could', 'can', 'will'] },
          { type: 'fill', sentence: 'We wish it ___ raining.', answer: "weren't", options: ["weren't", "isn't", "won't"] }
        ]
      }
    ],
    level3: [
      {
        id: 'g6_l3_causative', title: 'Causative: have/get something done', titleVi: 'Cau truc nho lam', emoji: '🔧',
        explanation: 'Have + object + past participle (someone does it for you).\n• I had my hair cut.\n• She got her car fixed.',
        explanationVi: 'Have + tan ngu + PP (nho nguoi khac lam).\n• I had my hair cut. (Toi di cat toc)\n• She got her car fixed. (Co ay nho sua xe)',
        exercises: [
          { type: 'fill', sentence: 'I had my phone ___.', answer: 'repaired', options: ['repaired', 'repair', 'repairing'] },
          { type: 'fill', sentence: 'She got her nails ___.', answer: 'done', options: ['done', 'do', 'doing'] },
          { type: 'fill', sentence: 'We had the house ___.', answer: 'painted', options: ['painted', 'paint', 'painting'] },
          { type: 'fill', sentence: 'He got his eyes ___.', answer: 'checked', options: ['checked', 'check', 'checking'] },
          { type: 'fill', sentence: 'They had their photo ___.', answer: 'taken', options: ['taken', 'take', 'taking'] }
        ]
      },
      {
        id: 'g6_l3_used', title: 'Used to / Be used to', titleVi: 'Da tung / Quen voi', emoji: '🕰️',
        explanation: 'Used to + V: past habit (no longer true).\nBe used to + V-ing: accustomed to.\n• I used to play here. (not anymore)\n• I am used to waking up early.',
        explanationVi: 'Used to + V: thoi quen cu (khong con nua).\nBe used to + V-ing: quen voi.\n• I used to play here. (Toi da tung choi o day)\n• I am used to waking up early. (Toi quen day som)',
        exercises: [
          { type: 'fill', sentence: 'I ___ to live in Hanoi.', answer: 'used', options: ['used', 'use', 'am used'] },
          { type: 'fill', sentence: 'She is used to ___ early.', answer: 'waking', options: ['waking', 'wake', 'woke'] },
          { type: 'fill', sentence: 'He used to ___ football.', answer: 'play', options: ['play', 'playing', 'played'] },
          { type: 'fill', sentence: 'We are used to ___ in traffic.', answer: 'driving', options: ['driving', 'drive', 'drove'] },
          { type: 'fill', sentence: 'They ___ to walk to school.', answer: 'used', options: ['used', 'use', 'are used'] }
        ]
      },
      {
        id: 'g6_l3_too_enough', title: 'Too / Enough', titleVi: 'Qua / Du', emoji: '📐',
        explanation: 'Too + adj: too much (negative). Adj + enough: sufficient.\n• It is too hot. (= very hot, bad)\n• She is old enough to drive. (= sufficient age)',
        explanationVi: 'Too + adj: qua (tieu cuc). Adj + enough: du.\n• It is too hot. (Troi qua nong)\n• She is old enough to drive. (Co ay du tuoi lai xe)',
        exercises: [
          { type: 'fill', sentence: 'This coffee is ___ hot to drink.', answer: 'too', options: ['too', 'enough', 'very'] },
          { type: 'fill', sentence: 'She is tall ___ to reach the shelf.', answer: 'enough', options: ['enough', 'too', 'very'] },
          { type: 'fill', sentence: 'The bag is ___ heavy to carry.', answer: 'too', options: ['too', 'enough'] },
          { type: 'fill', sentence: 'He is smart ___ to solve this.', answer: 'enough', options: ['enough', 'too'] },
          { type: 'fill', sentence: 'It is ___ cold to go outside.', answer: 'too', options: ['too', 'enough'] }
        ]
      }
    ]
  },
  7: {
    level1: [
      {
        id: 'g7_l1_if3', title: 'Conditional Type 3', titleVi: 'Cau dieu kien loai 3', emoji: '⏪',
        explanation: 'If + past perfect, would have + PP (unreal past).\n• If I had studied, I would have passed.\n• If she had come, she would have seen it.',
        explanationVi: 'If + qua khu hoan thanh, would have + PP (khong co that qua khu).\n• If I had studied, I would have passed. (Neu toi da hoc, toi da do roi)',
        exercises: [
          { type: 'fill', sentence: 'If I had known, I ___ have helped.', answer: 'would', options: ['would', 'will', 'could'] },
          { type: 'fill', sentence: 'If she ___ studied, she would have passed.', answer: 'had', options: ['had', 'has', 'have'] },
          { type: 'fill', sentence: 'If they had come, they would have ___ it.', answer: 'seen', options: ['seen', 'see', 'saw'] },
          { type: 'fill', sentence: 'If he ___ left early, he wouldn\'t have been late.', answer: 'had', options: ['had', 'has', 'would'] },
          { type: 'fill', sentence: 'We would have won if we ___ practiced more.', answer: 'had', options: ['had', 'have', 'has'] }
        ]
      },
      {
        id: 'g7_l1_pastperf', title: 'Past Perfect', titleVi: 'Qua khu hoan thanh', emoji: '⏪',
        explanation: 'Had + past participle (action before another past action).\n• I had eaten before she came.\n• They had left when we arrived.',
        explanationVi: 'Had + PP (hanh dong xay ra truoc mot hanh dong khac trong qua khu).\n• I had eaten before she came. (Toi da an truoc khi co ay den)',
        exercises: [
          { type: 'fill', sentence: 'I ___ already eaten when she arrived.', answer: 'had', options: ['had', 'have', 'has'] },
          { type: 'fill', sentence: 'They had ___ before I came.', answer: 'left', options: ['left', 'leave', 'leaving'] },
          { type: 'fill', sentence: 'She had ___ the movie before. (see)', answer: 'seen', options: ['seen', 'saw', 'see'] },
          { type: 'fill', sentence: 'We had never ___ sushi before that day.', answer: 'tried', options: ['tried', 'try', 'trying'] },
          { type: 'fill', sentence: 'He ___ finished his work by 5 PM.', answer: 'had', options: ['had', 'has', 'have'] }
        ]
      },
      {
        id: 'g7_l1_relative3', title: 'Defining vs Non-defining Clauses', titleVi: 'MQH xac dinh vs khong xac dinh', emoji: '📎',
        explanation: 'Defining (no commas): essential info.\nNon-defining (with commas): extra info.\n• The man who lives here is kind. (defining)\n• My father, who is 50, is a doctor. (non-defining)',
        explanationVi: 'Xac dinh (khong phay): thong tin thiet yeu.\nKhong xac dinh (co phay): thong tin bo sung.\n• My father, who is 50, is a doctor. (Bo toi, nguoi 50 tuoi, la bac si)',
        exercises: [
          { type: 'fill', sentence: 'The students ___ passed the exam are happy.', answer: 'who', options: ['who', ', who', 'which'] },
          { type: 'fill', sentence: 'Hanoi, ___ is the capital, is beautiful.', answer: 'which', options: ['which', 'that', 'who'] },
          { type: 'fill', sentence: 'The book ___ I bought is interesting.', answer: 'that', options: ['that', ', which', ', who'] },
          { type: 'fill', sentence: 'My teacher, ___ is very kind, helped me.', answer: 'who', options: ['who', 'that', 'which'] },
          { type: 'fill', sentence: 'The car ___ is parked outside is mine.', answer: 'that', options: ['that', ', that', ', which'] }
        ]
      }
    ],
    level2: [
      {
        id: 'g7_l2_modal_perf', title: 'Modal Perfect', titleVi: 'Modal + have + PP', emoji: '🤔',
        explanation: 'Must have + PP: certain past.\nMight have + PP: possible past.\nShould have + PP: regret.\n• She must have left. (I\'m sure)\n• You should have studied. (regret)',
        explanationVi: 'Must have + PP: chac chan (qua khu).\nShould have + PP: le ra nen.\n• She must have left. (Chac co ay da di roi)\n• You should have studied. (Le ra ban nen hoc)',
        exercises: [
          { type: 'fill', sentence: 'She ___ have been tired. (certain)', answer: 'must', options: ['must', 'might', 'should'] },
          { type: 'fill', sentence: 'You ___ have told me. (regret)', answer: 'should', options: ['should', 'must', 'might'] },
          { type: 'fill', sentence: 'He ___ have gone home. (possible)', answer: 'might', options: ['might', 'must', 'should'] },
          { type: 'fill', sentence: 'They ___ have arrived by now. (certain)', answer: 'must', options: ['must', 'might', 'could'] },
          { type: 'fill', sentence: 'We ___ have booked earlier. (regret)', answer: 'should', options: ['should', 'must', 'might'] }
        ]
      },
      {
        id: 'g7_l2_inversion', title: 'Inversion with Negatives', titleVi: 'Dao ngu voi phu dinh', emoji: '🔃',
        explanation: 'Never have I seen...\nNot only does he..., but also...\nSeldom do we...\n• Never have I seen such beauty.\n• Not only is she smart, but also kind.',
        explanationVi: 'Dao ngu khi bat dau bang tu phu dinh.\n• Never have I seen such beauty. (Chua bao gio toi thay dep den the)\n• Not only is she smart, but also kind. (Co ay khong chi thong minh ma con tot bung)',
        exercises: [
          { type: 'fill', sentence: 'Never ___ I seen such a thing.', answer: 'have', options: ['have', 'had', 'has'] },
          { type: 'fill', sentence: 'Not only ___ she smart, but also kind.', answer: 'is', options: ['is', 'does', 'has'] },
          { type: 'fill', sentence: 'Seldom ___ we eat out.', answer: 'do', options: ['do', 'does', 'are'] },
          { type: 'fill', sentence: 'Rarely ___ he late for class.', answer: 'is', options: ['is', 'does', 'has'] },
          { type: 'fill', sentence: 'Hardly ___ she speak in public.', answer: 'does', options: ['does', 'is', 'has'] }
        ]
      },
      {
        id: 'g7_l2_suggest', title: 'Suggest / Recommend', titleVi: 'Goi y / Khuyen nghi', emoji: '💡',
        explanation: 'suggest/recommend + V-ing OR that + S + (should) V.\n• I suggest going early.\n• I suggest that you (should) study more.',
        explanationVi: 'suggest/recommend + V-ing HOAC that + S + (should) V.\n• I suggest going early. (Toi goi y di som)\n• I suggest that you study more. (Toi goi y ban nen hoc nhieu hon)',
        exercises: [
          { type: 'fill', sentence: 'I suggest ___ to the park.', answer: 'going', options: ['going', 'to go', 'go'] },
          { type: 'fill', sentence: 'She recommends that he ___ harder.', answer: 'study', options: ['study', 'studies', 'studying'] },
          { type: 'fill', sentence: 'They suggested ___ a taxi.', answer: 'taking', options: ['taking', 'to take', 'take'] },
          { type: 'fill', sentence: 'I recommend ___ this book.', answer: 'reading', options: ['reading', 'to read', 'read'] },
          { type: 'fill', sentence: 'He suggested that we ___ early.', answer: 'leave', options: ['leave', 'leaves', 'leaving'] }
        ]
      }
    ],
    level3: [
      {
        id: 'g7_l3_cleft', title: 'Cleft Sentences', titleVi: 'Cau che', emoji: '🎯',
        explanation: 'It is/was... that/who... (emphasize one part).\n• It was Tom who broke the window.\n• It is English that I love most.',
        explanationVi: 'It is/was... that/who... (nhan manh mot phan).\n• It was Tom who broke the window. (Chinh Tom da lam vo cua so)\n• It is English that I love most. (Chinh tieng Anh la mon toi yeu nhat)',
        exercises: [
          { type: 'fill', sentence: 'It ___ Lan who won the prize.', answer: 'was', options: ['was', 'is', 'were'] },
          { type: 'fill', sentence: 'It is math ___ I find difficult.', answer: 'that', options: ['that', 'who', 'which'] },
          { type: 'fill', sentence: 'It was ___ who helped me.', answer: 'she', options: ['she', 'her', 'hers'] },
          { type: 'fill', sentence: 'It ___ in 2020 that we moved.', answer: 'was', options: ['was', 'is', 'were'] },
          { type: 'fill', sentence: 'It is the students ___ need to practice.', answer: 'who', options: ['who', 'that', 'which'] }
        ]
      },
      {
        id: 'g7_l3_participle', title: 'Participle Clauses', titleVi: 'Menh de phan tu', emoji: '✂️',
        explanation: 'V-ing (active): Walking home, I saw a cat.\nPP (passive): Written in 1990, the book is famous.\n• Feeling tired, she went to bed.',
        explanationVi: 'V-ing (chu dong): Walking home, I saw a cat. (Dang di bo ve nha, toi thay mot con meo)\nPP (bi dong): Written in 1990, the book is famous.',
        exercises: [
          { type: 'fill', sentence: '___ home, I saw an accident.', answer: 'Walking', options: ['Walking', 'Walked', 'Walk'] },
          { type: 'fill', sentence: '___ in France, the cheese is expensive.', answer: 'Made', options: ['Made', 'Making', 'Make'] },
          { type: 'fill', sentence: '___ tired, he went to bed early.', answer: 'Feeling', options: ['Feeling', 'Felt', 'Feel'] },
          { type: 'fill', sentence: '___ by millions, the song became a hit.', answer: 'Loved', options: ['Loved', 'Loving', 'Love'] },
          { type: 'fill', sentence: '___ hard, she passed the exam.', answer: 'Studying', options: ['Studying', 'Studied', 'Study'] }
        ]
      },
      {
        id: 'g7_l3_neither', title: 'So / Neither / Either', titleVi: 'Cung vay / Cung khong', emoji: '👥',
        explanation: 'So + aux + S (agree positive): "I like tea." "So do I."\nNeither + aux + S (agree negative): "I don\'t like fish." "Neither do I."',
        explanationVi: 'So + tro dong tu + S (dong y khang dinh): "I like tea." "So do I." (Toi cung vay)\nNeither + tro dong tu + S (dong y phu dinh): "Neither do I." (Toi cung khong)',
        exercises: [
          { type: 'fill', sentence: '"I like coffee." "___ do I."', answer: 'So', options: ['So', 'Neither', 'Either'] },
          { type: 'fill', sentence: '"I can\'t swim." "___ can I."', answer: 'Neither', options: ['So', 'Neither', 'Either'] },
          { type: 'fill', sentence: '"She is tired." "So ___ he."', answer: 'is', options: ['is', 'does', 'has'] },
          { type: 'fill', sentence: '"I don\'t eat meat." "Neither ___ I."', answer: 'do', options: ['do', 'am', 'have'] },
          { type: 'fill', sentence: '"He has been to Paris." "So ___ she."', answer: 'has', options: ['has', 'does', 'is'] }
        ]
      }
    ]
  },
  8: {
    level1: [
      {
        id: 'g8_l1_reported3', title: 'Reported Speech (all types)', titleVi: 'Tuong thuat tong hop', emoji: '🗣️',
        explanation: 'Statements: said (that)...\nQuestions: asked if/wh-...\nCommands: told to...\nRequests: asked to...',
        explanationVi: 'Cau tran thuat: said (that)...\nCau hoi: asked if/wh-...\nMenh lenh: told to...\nYeu cau: asked to...',
        exercises: [
          { type: 'fill', sentence: '"Open the door," he said. → He told me ___ open the door.', answer: 'to', options: ['to', 'that', 'if'] },
          { type: 'fill', sentence: '"Do you like it?" → She asked ___ I liked it.', answer: 'if', options: ['if', 'to', 'that'] },
          { type: 'fill', sentence: '"I am busy." → He said ___ he was busy.', answer: 'that', options: ['that', 'if', 'to'] },
          { type: 'fill', sentence: '"Where do you live?" → She asked me ___ I lived.', answer: 'where', options: ['where', 'if', 'that'] },
          { type: 'fill', sentence: '"Please help me." → He asked me ___ help him.', answer: 'to', options: ['to', 'if', 'that'] }
        ]
      },
      {
        id: 'g8_l1_articles', title: 'Articles: a, an, the, zero', titleVi: 'Mao tu: a, an, the', emoji: '📰',
        explanation: 'a/an: non-specific, first mention.\nthe: specific, known.\nzero: general plural/uncountable.\n• I saw a cat. The cat was black.\n• Cats are cute. (general)',
        explanationVi: 'a/an: khong cu the. the: cu the, da biet.\nKhong mao tu: so nhieu chung/khong dem duoc.\n• I saw a cat. The cat was black.\n• Cats are cute. (meo noi chung)',
        exercises: [
          { type: 'fill', sentence: 'I bought ___ new phone yesterday.', answer: 'a', options: ['a', 'an', 'the', '--'] },
          { type: 'fill', sentence: '___ sun rises in the east.', answer: 'The', options: ['A', 'An', 'The', '--'] },
          { type: 'fill', sentence: 'She is ___ honest person.', answer: 'an', options: ['a', 'an', 'the'] },
          { type: 'fill', sentence: '___ water is essential for life.', answer: '--', options: ['A', 'The', '--'] },
          { type: 'fill', sentence: 'I love ___ music. (general)', answer: '--', options: ['a', 'the', '--'] }
        ]
      },
      {
        id: 'g8_l1_wish2', title: 'Wish (all forms)', titleVi: 'Cau truc Wish', emoji: '🌟',
        explanation: 'Present wish: wish + past simple.\nPast wish: wish + past perfect.\nFuture wish: wish + would.\n• I wish I had a car.\n• I wish I had studied.\n• I wish it would stop raining.',
        explanationVi: 'Uoc hien tai: wish + qua khu don.\nUoc qua khu: wish + qua khu hoan thanh.\nUoc tuong lai: wish + would.',
        exercises: [
          { type: 'fill', sentence: 'I wish I ___ taller. (present)', answer: 'were', options: ['were', 'am', 'had been'] },
          { type: 'fill', sentence: 'I wish I ___ studied harder. (past)', answer: 'had', options: ['had', 'have', 'was'] },
          { type: 'fill', sentence: 'I wish it ___ stop raining. (future)', answer: 'would', options: ['would', 'will', 'could'] },
          { type: 'fill', sentence: 'She wishes she ___ speak French.', answer: 'could', options: ['could', 'can', 'would'] },
          { type: 'fill', sentence: 'I wish I ___ gone to the party.', answer: 'had', options: ['had', 'have', 'would'] }
        ]
      }
    ],
    level2: [
      {
        id: 'g8_l2_mixed_cond', title: 'Mixed Conditionals', titleVi: 'Cau dieu kien hon hop', emoji: '🔀',
        explanation: 'Mix Type 2 and 3:\n• If I had studied (past), I would be a doctor now (present).\n• If she were braver (present), she would have spoken (past).',
        explanationVi: 'Ket hop loai 2 va 3:\n• If I had studied, I would be a doctor now. (Neu toi da hoc, bay gio toi da la bac si)',
        exercises: [
          { type: 'fill', sentence: 'If I had studied medicine, I ___ be a doctor now.', answer: 'would', options: ['would', 'will', 'had'] },
          { type: 'fill', sentence: 'If she ___ braver, she would have applied.', answer: 'were', options: ['were', 'was', 'had been'] },
          { type: 'fill', sentence: 'If he had saved money, he ___ buy a house now.', answer: 'could', options: ['could', 'can', 'had'] },
          { type: 'fill', sentence: 'If I ___ harder, I would have a better job.', answer: 'had worked', options: ['had worked', 'worked', 'work'] },
          { type: 'fill', sentence: 'If they were rich, they ___ have donated more.', answer: 'would', options: ['would', 'will', 'could'] }
        ]
      },
      {
        id: 'g8_l2_collocations', title: 'Collocations', titleVi: 'Ket hop tu', emoji: '🧲',
        explanation: 'Words that naturally go together:\n• make a decision (not do a decision)\n• take a photo (not make a photo)\n• do homework (not make homework)',
        explanationVi: 'Cac tu thuong di cung nhau:\n• make a decision (dua ra quyet dinh)\n• take a photo (chup anh)\n• do homework (lam bai tap)',
        exercises: [
          { type: 'fill', sentence: 'Can you ___ a photo of me?', answer: 'take', options: ['take', 'make', 'do'] },
          { type: 'fill', sentence: 'I need to ___ a decision.', answer: 'make', options: ['make', 'do', 'take'] },
          { type: 'fill', sentence: 'She always ___ her homework.', answer: 'does', options: ['does', 'makes', 'takes'] },
          { type: 'fill', sentence: 'Let\'s ___ a break.', answer: 'take', options: ['take', 'make', 'do'] },
          { type: 'fill', sentence: 'He ___ a mistake in the test.', answer: 'made', options: ['made', 'did', 'took'] }
        ]
      },
      {
        id: 'g8_l2_prefixes', title: 'Prefixes & Suffixes', titleVi: 'Tien to & Hau to', emoji: '🔤',
        explanation: 'Prefixes change meaning: un-, re-, dis-, im-\nSuffixes change word type: -ful, -less, -tion, -ly\n• unhappy, replay, careful, quickly',
        explanationVi: 'Tien to thay doi nghia: un- (khong), re- (lai)\nHau to thay doi loai tu: -ful (day), -less (thieu), -ly (trang tu)',
        exercises: [
          { type: 'fill', sentence: 'The opposite of happy is ___.', answer: 'unhappy', options: ['unhappy', 'dishappy', 'imhappy'] },
          { type: 'fill', sentence: 'To do again is to ___ do.', answer: 're', options: ['re', 'un', 'dis'] },
          { type: 'fill', sentence: 'Full of care = care___.', answer: 'ful', options: ['ful', 'less', 'tion'] },
          { type: 'fill', sentence: 'The opposite of possible is ___.', answer: 'impossible', options: ['impossible', 'unpossible', 'dispossible'] },
          { type: 'fill', sentence: 'Without hope = hope___.', answer: 'less', options: ['less', 'ful', 'ly'] }
        ]
      }
    ],
    level3: [
      {
        id: 'g8_l3_emphasis', title: 'Emphasis Structures', titleVi: 'Cau truc nhan manh', emoji: '❗',
        explanation: 'It is/was... that (cleft).\nWhat + S + V + is/was (pseudo-cleft).\nDo/does/did + V (emphatic do).\n• What I need is rest.\n• I do love you!',
        explanationVi: 'It is/was... that (cau che).\nWhat + S + V + is/was (gia cau che).\nDo/does/did + V (nhan manh).\n• What I need is rest. (Dieu toi can la nghi ngoi)',
        exercises: [
          { type: 'fill', sentence: '___ I need is a good sleep.', answer: 'What', options: ['What', 'That', 'It'] },
          { type: 'fill', sentence: 'I ___ enjoy reading!', answer: 'do', options: ['do', 'am', 'have'] },
          { type: 'fill', sentence: 'It ___ my mother who taught me.', answer: 'was', options: ['was', 'is', 'were'] },
          { type: 'fill', sentence: '___ she wants is peace.', answer: 'What', options: ['What', 'That', 'It'] },
          { type: 'fill', sentence: 'She ___ finish the project on time!', answer: 'did', options: ['did', 'was', 'had'] }
        ]
      },
      {
        id: 'g8_l3_linkers', title: 'Discourse Markers', titleVi: 'Lien tu van ban', emoji: '📝',
        explanation: 'Addition: moreover, furthermore, in addition\nContrast: however, nevertheless, on the other hand\nResult: therefore, consequently, as a result',
        explanationVi: 'Bo sung: moreover (hon nua), furthermore (them vao do)\nTuong phan: however (tuy nhien), nevertheless (du vay)\nKet qua: therefore (vi vay), consequently (hau qua la)',
        exercises: [
          { type: 'fill', sentence: 'He was tired. ___, he kept working.', answer: 'However', options: ['However', 'Therefore', 'Moreover'] },
          { type: 'fill', sentence: 'She studied hard. ___, she passed.', answer: 'Therefore', options: ['Therefore', 'However', 'Moreover'] },
          { type: 'fill', sentence: 'The food is good. ___, it is cheap.', answer: 'Moreover', options: ['Moreover', 'However', 'Therefore'] },
          { type: 'fill', sentence: 'It rained heavily. ___, the event was cancelled.', answer: 'Consequently', options: ['Consequently', 'Moreover', 'However'] },
          { type: 'fill', sentence: 'I was wrong. ___, I apologize.', answer: 'Therefore', options: ['Therefore', 'However', 'Furthermore'] }
        ]
      },
      {
        id: 'g8_l3_subjunctive', title: 'Subjunctive Mood', titleVi: 'That gia dinh', emoji: '📜',
        explanation: 'After suggest/recommend/insist/demand: that + S + bare V.\n• I suggest that he study more.\n• She insisted that he be on time.\n• It is important that she come.',
        explanationVi: 'Sau suggest/recommend/insist/demand: that + S + V nguyen the.\n• I suggest that he study more. (Toi goi y anh ay nen hoc nhieu hon)',
        exercises: [
          { type: 'fill', sentence: 'I suggest that she ___ early.', answer: 'arrive', options: ['arrive', 'arrives', 'arrived'] },
          { type: 'fill', sentence: 'He insisted that we ___ on time.', answer: 'be', options: ['be', 'are', 'were'] },
          { type: 'fill', sentence: 'It is essential that he ___ the truth.', answer: 'tell', options: ['tell', 'tells', 'told'] },
          { type: 'fill', sentence: 'The teacher demanded that students ___ quiet.', answer: 'be', options: ['be', 'are', 'were'] },
          { type: 'fill', sentence: 'They recommended that she ___ harder.', answer: 'work', options: ['work', 'works', 'worked'] }
        ]
      }
    ]
  },
  9: {
    level1: [
      {
        id: 'g9_l1_future_perf', title: 'Future Perfect', titleVi: 'Tuong lai hoan thanh', emoji: '🔜',
        explanation: 'Will have + PP (completed before a future time).\n• By 2030, I will have graduated.\n• She will have finished by 5 PM.',
        explanationVi: 'Will have + PP (hoan thanh truoc mot thoi diem tuong lai).\n• By 2030, I will have graduated. (Den 2030, toi se da tot nghiep)',
        exercises: [
          { type: 'fill', sentence: 'By next year, I will ___ graduated.', answer: 'have', options: ['have', 'has', 'had'] },
          { type: 'fill', sentence: 'She will have ___ by then. (finish)', answer: 'finished', options: ['finished', 'finish', 'finishing'] },
          { type: 'fill', sentence: 'By 2030, they ___ have built the bridge.', answer: 'will', options: ['will', 'would', 'shall'] },
          { type: 'fill', sentence: 'He will have ___ 10 books by December.', answer: 'read', options: ['read', 'reads', 'reading'] },
          { type: 'fill', sentence: 'We ___ have moved by next month.', answer: 'will', options: ['will', 'would', 'had'] }
        ]
      },
      {
        id: 'g9_l1_passive_modals', title: 'Passive with Modals', titleVi: 'Bi dong voi Modal', emoji: '🔄',
        explanation: 'Modal + be + PP.\n• It can be done.\n• The work must be finished.\n• She should be invited.',
        explanationVi: 'Modal + be + PP.\n• It can be done. (No co the duoc lam)\n• The work must be finished. (Cong viec phai duoc hoan thanh)',
        exercises: [
          { type: 'fill', sentence: 'This work must ___ completed today.', answer: 'be', options: ['be', 'been', 'being'] },
          { type: 'fill', sentence: 'The rules should ___ followed.', answer: 'be', options: ['be', 'been', 'being'] },
          { type: 'fill', sentence: 'The letter can ___ sent tomorrow.', answer: 'be', options: ['be', 'been', 'being'] },
          { type: 'fill', sentence: 'Homework ___ be submitted on time.', answer: 'must', options: ['must', 'is', 'has'] },
          { type: 'fill', sentence: 'She ought to ___ promoted.', answer: 'be', options: ['be', 'been', 'being'] }
        ]
      },
      {
        id: 'g9_l1_inversion2', title: 'Inversion (advanced)', titleVi: 'Dao ngu nang cao', emoji: '🔃',
        explanation: 'No sooner had... than...\nHardly had... when...\nNot until... did...\n• No sooner had I left than it rained.',
        explanationVi: 'No sooner had... than...: Vua moi... thi...\nHardly had... when...: Vua moi... thi...\nNot until... did...: Mai cho den khi... moi...',
        exercises: [
          { type: 'fill', sentence: 'No sooner ___ I arrived than it rained.', answer: 'had', options: ['had', 'have', 'did'] },
          { type: 'fill', sentence: 'Hardly ___ she spoken when he left.', answer: 'had', options: ['had', 'has', 'did'] },
          { type: 'fill', sentence: 'Not until midnight ___ he finish.', answer: 'did', options: ['did', 'had', 'was'] },
          { type: 'fill', sentence: 'Only then ___ I understand the truth.', answer: 'did', options: ['did', 'had', 'was'] },
          { type: 'fill', sentence: 'Not only ___ she sing, but she also danced.', answer: 'did', options: ['did', 'had', 'was'] }
        ]
      }
    ],
    level2: [
      {
        id: 'g9_l2_noun_clause', title: 'Noun Clauses', titleVi: 'Menh de danh tu', emoji: '📦',
        explanation: 'A clause acting as a noun:\n• What he said is true. (subject)\n• I know that she is smart. (object)\n• The fact that he lied is sad.',
        explanationVi: 'Menh de lam vai tro danh tu:\n• What he said is true. (Nhung gi anh ay noi la dung - chu ngu)\n• I know that she is smart. (Toi biet co ay thong minh - tan ngu)',
        exercises: [
          { type: 'fill', sentence: '___ he said surprised everyone.', answer: 'What', options: ['What', 'That', 'Which'] },
          { type: 'fill', sentence: 'I believe ___ she is honest.', answer: 'that', options: ['that', 'what', 'which'] },
          { type: 'fill', sentence: '___ you go doesn\'t matter.', answer: 'Where', options: ['Where', 'That', 'What'] },
          { type: 'fill', sentence: 'The question is ___ we should do.', answer: 'what', options: ['what', 'that', 'which'] },
          { type: 'fill', sentence: 'I wonder ___ she will come.', answer: 'whether', options: ['whether', 'what', 'which'] }
        ]
      },
      {
        id: 'g9_l2_linking', title: 'Linking Words (advanced)', titleVi: 'Tu noi nang cao', emoji: '🔗',
        explanation: 'Reason: owing to, due to, on account of\nPurpose: so as to, in order to, so that\nResult: so...that, such...that',
        explanationVi: 'Nguyen nhan: owing to (do), due to (do)\nMuc dich: in order to (de), so that (de cho)\nKet qua: so...that (qua...den noi)',
        exercises: [
          { type: 'fill', sentence: 'She studied hard ___ to pass.', answer: 'in order', options: ['in order', 'due', 'owing'] },
          { type: 'fill', sentence: '___ to the rain, the match was cancelled.', answer: 'Due', options: ['Due', 'In order', 'So as'] },
          { type: 'fill', sentence: 'He was ___ tired that he fell asleep.', answer: 'so', options: ['so', 'such', 'too'] },
          { type: 'fill', sentence: 'It was ___ a good movie that I watched it twice.', answer: 'such', options: ['such', 'so', 'too'] },
          { type: 'fill', sentence: 'I left early so ___ I could arrive on time.', answer: 'that', options: ['that', 'as', 'to'] }
        ]
      },
      {
        id: 'g9_l2_have_sth_done', title: 'Advanced Causative', titleVi: 'Cau truc nho lam nang cao', emoji: '🔧',
        explanation: 'Have + O + PP: get something done by someone else.\nHave + O + V: make someone do something.\nGet + O + to V: persuade someone to do.\n• I had my car washed.\n• I had him fix the door.\n• I got her to help me.',
        explanationVi: 'Have + O + PP: nho nguoi khac lam.\nHave + O + V: bao ai lam gi.\nGet + O + to V: thuyet phuc ai lam gi.',
        exercises: [
          { type: 'fill', sentence: 'I had my hair ___.', answer: 'cut', options: ['cut', 'cutting', 'to cut'] },
          { type: 'fill', sentence: 'She got him ___ the dishes.', answer: 'to wash', options: ['to wash', 'wash', 'washing'] },
          { type: 'fill', sentence: 'I had the mechanic ___ my car.', answer: 'fix', options: ['fix', 'fixed', 'to fix'] },
          { type: 'fill', sentence: 'We got the house ___.', answer: 'painted', options: ['painted', 'paint', 'to paint'] },
          { type: 'fill', sentence: 'She had her dress ___ by a tailor.', answer: 'made', options: ['made', 'make', 'making'] }
        ]
      }
    ],
    level3: [
      {
        id: 'g9_l3_advanced_passive', title: 'Advanced Passive', titleVi: 'Bi dong nang cao', emoji: '🔄',
        explanation: 'It is said/believed/reported that...\nS + is said/believed to + V.\n• It is said that he is rich.\n• He is said to be rich.',
        explanationVi: 'It is said/believed/reported that... (Nguoi ta noi/tin/bao cao rang...)\nS + is said/believed to + V.\n• He is said to be rich. (Anh ay duoc cho la giau)',
        exercises: [
          { type: 'fill', sentence: 'It is ___ that she is the best student.', answer: 'believed', options: ['believed', 'believe', 'believing'] },
          { type: 'fill', sentence: 'He is said ___ be very talented.', answer: 'to', options: ['to', 'that', 'is'] },
          { type: 'fill', sentence: 'It is ___ that the company will close.', answer: 'reported', options: ['reported', 'report', 'reporting'] },
          { type: 'fill', sentence: 'She is thought ___ have left the country.', answer: 'to', options: ['to', 'that', 'is'] },
          { type: 'fill', sentence: 'It ___ known that exercise is good.', answer: 'is', options: ['is', 'has', 'was'] }
        ]
      },
      {
        id: 'g9_l3_ellipsis', title: 'Ellipsis & Substitution', titleVi: 'Tinh luoc & Thay the', emoji: '✂️',
        explanation: 'Avoid repeating words by omitting or using substitutes.\n• "Can you help?" "I\'d like to (help)."\n• "She plays piano and he does too."\n• "I bought one, but he didn\'t (buy one)."',
        explanationVi: 'Tranh lap lai bang cach luoc bo hoac thay the.\n• "Can you help?" "I\'d like to." (Toi muon - bo help)\n• "She plays piano and he does too." (Anh ay cung vay)',
        exercises: [
          { type: 'fill', sentence: '"Will you come?" "I hope ___."', answer: 'so', options: ['so', 'it', 'to'] },
          { type: 'fill', sentence: 'She likes tea and I do ___.', answer: 'too', options: ['too', 'so', 'also'] },
          { type: 'fill', sentence: '"Are they coming?" "I think ___."', answer: 'so', options: ['so', 'too', 'it'] },
          { type: 'fill', sentence: '"Can you swim?" "Yes, I ___.', answer: 'can', options: ['can', 'do', 'am'] },
          { type: 'fill', sentence: 'He didn\'t study and neither ___ I.', answer: 'did', options: ['did', 'do', 'was'] }
        ]
      },
      {
        id: 'g9_l3_parallelism', title: 'Parallelism', titleVi: 'Cau truc song song', emoji: '⚖️',
        explanation: 'Keep the same grammatical form in lists and comparisons.\n• She likes reading, writing, and drawing. (all -ing)\n• Not: She likes reading, to write, and draws.',
        explanationVi: 'Giu cung dang ngu phap trong danh sach va so sanh.\n• She likes reading, writing, and drawing. (tat ca -ing)',
        exercises: [
          { type: 'fill', sentence: 'She enjoys reading, ___, and cooking.', answer: 'swimming', options: ['swimming', 'to swim', 'swims'] },
          { type: 'fill', sentence: 'He is smart, kind, and ___.', answer: 'hardworking', options: ['hardworking', 'works hard', 'to work hard'] },
          { type: 'fill', sentence: 'I came, I saw, I ___.', answer: 'conquered', options: ['conquered', 'conquering', 'to conquer'] },
          { type: 'fill', sentence: 'To be or not to ___.', answer: 'be', options: ['be', 'being', 'been'] },
          { type: 'fill', sentence: 'She not only sings but also ___.', answer: 'dances', options: ['dances', 'dancing', 'to dance'] }
        ]
      }
    ]
  },
  10: {
    level1: [
      {
        id: 'g10_l1_all_tenses', title: 'Tense Review', titleVi: 'On tap cac thi', emoji: '🕐',
        explanation: 'All 12 tenses review:\nPresent: Simple, Continuous, Perfect, Perfect Continuous\nPast: Simple, Continuous, Perfect, Perfect Continuous\nFuture: Simple, Continuous, Perfect, Perfect Continuous',
        explanationVi: 'On tap 12 thi:\nHien tai: Don, Tiep dien, Hoan thanh, HTTD\nQua khu: Don, Tiep dien, Hoan thanh, QKTD\nTuong lai: Don, Tiep dien, Hoan thanh, TLTD',
        exercises: [
          { type: 'fill', sentence: 'She ___ English every day. (study - present simple)', answer: 'studies', options: ['studies', 'is studying', 'has studied'] },
          { type: 'fill', sentence: 'I ___ right now. (cook - present continuous)', answer: 'am cooking', options: ['am cooking', 'cook', 'have cooked'] },
          { type: 'fill', sentence: 'They ___ to Japan twice. (be - present perfect)', answer: 'have been', options: ['have been', 'were', 'are'] },
          { type: 'fill', sentence: 'He ___ home at 6 yesterday. (come - past simple)', answer: 'came', options: ['came', 'comes', 'has come'] },
          { type: 'fill', sentence: 'By 2030, we ___ this project. (finish - future perfect)', answer: 'will have finished', options: ['will have finished', 'will finish', 'finish'] }
        ]
      },
      {
        id: 'g10_l1_word_form', title: 'Word Formation', titleVi: 'Cau tao tu', emoji: '🧱',
        explanation: 'Change word forms:\nNoun: -tion, -ment, -ness, -ity\nAdj: -ful, -less, -ous, -ive\nAdv: -ly\nVerb: -ize, -en, -ify',
        explanationVi: 'Doi dang tu:\nDanh tu: -tion, -ment, -ness\nTinh tu: -ful, -less, -ous\nTrang tu: -ly\nDong tu: -ize, -en',
        exercises: [
          { type: 'fill', sentence: 'The ___ of the project was great. (succeed)', answer: 'success', options: ['success', 'successful', 'successfully'] },
          { type: 'fill', sentence: 'She is a very ___ student. (create)', answer: 'creative', options: ['creative', 'creation', 'creatively'] },
          { type: 'fill', sentence: 'He speaks English ___. (fluent)', answer: 'fluently', options: ['fluently', 'fluent', 'fluency'] },
          { type: 'fill', sentence: 'The ___ of this word is important. (pronounce)', answer: 'pronunciation', options: ['pronunciation', 'pronouncing', 'pronounceable'] },
          { type: 'fill', sentence: 'Environmental ___ is a big issue. (pollute)', answer: 'pollution', options: ['pollution', 'polluted', 'polluting'] }
        ]
      },
      {
        id: 'g10_l1_phrasal2', title: 'Phrasal Verbs (advanced)', titleVi: 'Cum dong tu nang cao', emoji: '🧩',
        explanation: 'Common phrasal verbs:\n• carry out = perform\n• bring up = raise (a child/topic)\n• come up with = think of\n• look into = investigate\n• put up with = tolerate',
        explanationVi: 'Cum dong tu pho bien:\n• carry out = thuc hien\n• bring up = nuoi day / noi den\n• come up with = nghi ra\n• look into = dieu tra\n• put up with = chiu dung',
        exercises: [
          { type: 'fill', sentence: 'We need to carry ___ this plan.', answer: 'out', options: ['out', 'on', 'up'] },
          { type: 'fill', sentence: 'She brought ___ three children alone.', answer: 'up', options: ['up', 'out', 'in'] },
          { type: 'fill', sentence: 'He came up ___ a great idea.', answer: 'with', options: ['with', 'to', 'for'] },
          { type: 'fill', sentence: 'The police will look ___ the case.', answer: 'into', options: ['into', 'after', 'up'] },
          { type: 'fill', sentence: 'I can\'t put up ___ this noise.', answer: 'with', options: ['with', 'to', 'for'] }
        ]
      }
    ],
    level2: [
      {
        id: 'g10_l2_transformations', title: 'Sentence Transformations', titleVi: 'Viet lai cau', emoji: '🔄',
        explanation: 'Rewrite sentences keeping meaning:\n• Active ↔ Passive\n• Direct ↔ Reported\n• If clause ↔ Unless\n• Too...to ↔ Not...enough to',
        explanationVi: 'Viet lai cau giu nguyen nghia:\n• Chu dong ↔ Bi dong\n• Truc tiep ↔ Tuong thuat\n• If ↔ Unless\n• Too...to ↔ Not...enough to',
        exercises: [
          { type: 'fill', sentence: 'If you don\'t hurry, you will be late. = ___ you hurry, you will be late.', answer: 'Unless', options: ['Unless', 'If', 'Until'] },
          { type: 'fill', sentence: 'He is too young to drive. = He is not ___ enough to drive.', answer: 'old', options: ['old', 'young', 'big'] },
          { type: 'fill', sentence: 'Nobody has ever done this before. = This has never been ___ before.', answer: 'done', options: ['done', 'do', 'doing'] },
          { type: 'fill', sentence: 'She is so smart that everyone admires her. = She is ___ a smart person that everyone admires her.', answer: 'such', options: ['such', 'so', 'too'] },
          { type: 'fill', sentence: 'Although he was tired, he worked. = ___ being tired, he worked.', answer: 'Despite', options: ['Despite', 'Although', 'However'] }
        ]
      },
      {
        id: 'g10_l2_idioms', title: 'Common Idioms', titleVi: 'Thanh ngu pho bien', emoji: '🗝️',
        explanation: 'Idioms have special meanings:\n• break the ice = start a conversation\n• hit the books = study hard\n• piece of cake = very easy\n• under the weather = feeling sick',
        explanationVi: 'Thanh ngu co nghia dac biet:\n• break the ice = pha bang, bat chuyen\n• hit the books = hoc cham chi\n• piece of cake = de nhu an banh\n• under the weather = cam thay om',
        exercises: [
          { type: 'fill', sentence: 'The exam was a piece of ___. (easy)', answer: 'cake', options: ['cake', 'pie', 'bread'] },
          { type: 'fill', sentence: 'I\'m feeling under the ___. (sick)', answer: 'weather', options: ['weather', 'water', 'wind'] },
          { type: 'fill', sentence: 'Let\'s break the ___. (start talking)', answer: 'ice', options: ['ice', 'wall', 'glass'] },
          { type: 'fill', sentence: 'Time to hit the ___. (study)', answer: 'books', options: ['books', 'road', 'gym'] },
          { type: 'fill', sentence: 'She let the cat out of the ___. (told a secret)', answer: 'bag', options: ['bag', 'box', 'hat'] }
        ]
      },
      {
        id: 'g10_l2_conjunctive', title: 'Complex Conjunctions', titleVi: 'Lien tu phuc tap', emoji: '🔗',
        explanation: 'not only...but also, neither...nor, either...or, both...and, no sooner...than, hardly...when',
        explanationVi: 'not only...but also (khong chi...ma con)\nneither...nor (khong...cung khong)\neither...or (hoac...hoac)\nboth...and (ca...va)',
        exercises: [
          { type: 'fill', sentence: 'Not only is she smart, ___ also kind.', answer: 'but', options: ['but', 'and', 'or'] },
          { type: 'fill', sentence: 'Neither he ___ she came.', answer: 'nor', options: ['nor', 'or', 'and'] },
          { type: 'fill', sentence: 'Either you ___ I must go.', answer: 'or', options: ['or', 'nor', 'and'] },
          { type: 'fill', sentence: 'Both English ___ Math are important.', answer: 'and', options: ['and', 'or', 'nor'] },
          { type: 'fill', sentence: 'No sooner had I left ___ it rained.', answer: 'than', options: ['than', 'when', 'then'] }
        ]
      }
    ],
    level3: [
      {
        id: 'g10_l3_adv_clause', title: 'Adverbial Clauses', titleVi: 'Menh de trang tu', emoji: '📎',
        explanation: 'Time: when, while, before, after, as soon as\nReason: because, since, as\nCondition: if, unless, provided that\nConcession: although, even though',
        explanationVi: 'Thoi gian: when, while, before, after\nNguyen nhan: because, since\nDieu kien: if, unless, provided that\nNhuong bo: although, even though',
        exercises: [
          { type: 'fill', sentence: '___ he was tired, he continued working.', answer: 'Although', options: ['Although', 'Because', 'Unless'] },
          { type: 'fill', sentence: 'I\'ll help you ___ that you help me too.', answer: 'provided', options: ['provided', 'unless', 'although'] },
          { type: 'fill', sentence: '___ she studied hard, she passed easily.', answer: 'Since', options: ['Since', 'Although', 'Unless'] },
          { type: 'fill', sentence: 'I\'ll wait ___ you come back.', answer: 'until', options: ['until', 'unless', 'although'] },
          { type: 'fill', sentence: '___ it rains, the event will be cancelled.', answer: 'If', options: ['If', 'Although', 'Since'] }
        ]
      },
      {
        id: 'g10_l3_collocation2', title: 'Advanced Collocations', titleVi: 'Ket hop tu nang cao', emoji: '🧲',
        explanation: 'Academic collocations:\n• conduct research\n• draw a conclusion\n• raise awareness\n• pay attention\n• make progress',
        explanationVi: 'Ket hop tu hoc thuat:\n• conduct research (tien hanh nghien cuu)\n• draw a conclusion (rut ra ket luan)\n• raise awareness (nang cao nhan thuc)\n• pay attention (chu y)',
        exercises: [
          { type: 'fill', sentence: 'Scientists ___ research on climate change.', answer: 'conduct', options: ['conduct', 'make', 'do'] },
          { type: 'fill', sentence: 'We can ___ a conclusion from these facts.', answer: 'draw', options: ['draw', 'make', 'take'] },
          { type: 'fill', sentence: 'The campaign aims to ___ awareness.', answer: 'raise', options: ['raise', 'make', 'do'] },
          { type: 'fill', sentence: 'Please ___ attention to the details.', answer: 'pay', options: ['pay', 'give', 'make'] },
          { type: 'fill', sentence: 'She has ___ great progress this year.', answer: 'made', options: ['made', 'done', 'taken'] }
        ]
      },
      {
        id: 'g10_l3_error', title: 'Error Correction', titleVi: 'Sua loi', emoji: '🔍',
        explanation: 'Common grammar errors:\n• Subject-verb agreement\n• Tense consistency\n• Article usage\n• Preposition choice\n• Word form',
        explanationVi: 'Cac loi ngu phap pho bien:\n• Hoa hop chu vi\n• Nhat quan thi\n• Su dung mao tu\n• Chon gioi tu\n• Dang tu',
        exercises: [
          { type: 'fill', sentence: 'Everyone ___ their best. (correct verb)', answer: 'does', options: ['does', 'do', 'did'] },
          { type: 'fill', sentence: 'Neither of the boys ___ here. (correct verb)', answer: 'is', options: ['is', 'are', 'were'] },
          { type: 'fill', sentence: 'The news ___ surprising. (correct verb)', answer: 'is', options: ['is', 'are', 'were'] },
          { type: 'fill', sentence: 'She is interested ___ science.', answer: 'in', options: ['in', 'on', 'at'] },
          { type: 'fill', sentence: 'I look forward to ___ you.', answer: 'seeing', options: ['seeing', 'see', 'saw'] }
        ]
      }
    ]
  },
  11: {
    level1: [
      {
        id: 'g11_l1_adv_passive', title: 'Complex Passive Structures', titleVi: 'Cau truc bi dong phuc tap', emoji: '🔄',
        explanation: 'Double object passive:\n• They gave me a book. → I was given a book. / A book was given to me.\nPassive infinitive: It is expected to be finished.',
        explanationVi: 'Bi dong hai tan ngu:\n• They gave me a book. → I was given a book. / A book was given to me.\nBi dong voi to V: It is expected to be finished.',
        exercises: [
          { type: 'fill', sentence: 'I was ___ a gift by my friend.', answer: 'given', options: ['given', 'gave', 'giving'] },
          { type: 'fill', sentence: 'The project is expected to ___ completed soon.', answer: 'be', options: ['be', 'been', 'being'] },
          { type: 'fill', sentence: 'She was ___ to be the best candidate.', answer: 'considered', options: ['considered', 'consider', 'considering'] },
          { type: 'fill', sentence: 'He is ___ to have invented it.', answer: 'believed', options: ['believed', 'believe', 'believing'] },
          { type: 'fill', sentence: 'The children were ___ new uniforms.', answer: 'given', options: ['given', 'gave', 'give'] }
        ]
      },
      {
        id: 'g11_l1_subjunc2', title: 'Subjunctive & Formal Structures', titleVi: 'Gia dinh & Cau truc trang trong', emoji: '📜',
        explanation: 'It is vital/essential/important that + S + bare V.\nWere + S + to V (formal if).\n• It is vital that he attend the meeting.\n• Were I to know, I would tell you.',
        explanationVi: 'It is vital that + S + V nguyen the.\nWere + S + to V (if trang trong).\n• Were I to know, I would tell you. (Neu toi biet, toi se noi cho ban)',
        exercises: [
          { type: 'fill', sentence: 'It is essential that she ___ present.', answer: 'be', options: ['be', 'is', 'was'] },
          { type: 'fill', sentence: '___ I to win, I would donate half.', answer: 'Were', options: ['Were', 'Was', 'If'] },
          { type: 'fill', sentence: 'It is important that everyone ___ on time.', answer: 'arrive', options: ['arrive', 'arrives', 'arrived'] },
          { type: 'fill', sentence: '___ he to ask, I would agree.', answer: 'Were', options: ['Were', 'Was', 'Should'] },
          { type: 'fill', sentence: 'The boss demanded that all staff ___ the meeting.', answer: 'attend', options: ['attend', 'attends', 'attended'] }
        ]
      },
      {
        id: 'g11_l1_nominal', title: 'Nominalization', titleVi: 'Danh hoa', emoji: '📝',
        explanation: 'Turn verbs/adjectives into nouns for formal writing:\n• decide → decision\n• important → importance\n• fail → failure\n• The decision was made. (not: They decided.)',
        explanationVi: 'Doi dong tu/tinh tu thanh danh tu cho van viet trang trong:\n• decide → decision (quyet dinh)\n• important → importance (tam quan trong)',
        exercises: [
          { type: 'fill', sentence: 'The ___ of the experiment was significant. (discover)', answer: 'discovery', options: ['discovery', 'discover', 'discovering'] },
          { type: 'fill', sentence: 'The ___ of education cannot be denied. (important)', answer: 'importance', options: ['importance', 'important', 'importantly'] },
          { type: 'fill', sentence: 'The ___ to close the factory affected many. (decide)', answer: 'decision', options: ['decision', 'decide', 'deciding'] },
          { type: 'fill', sentence: 'The ___ of the project requires careful planning. (implement)', answer: 'implementation', options: ['implementation', 'implement', 'implementing'] },
          { type: 'fill', sentence: 'His ___ in the competition was outstanding. (perform)', answer: 'performance', options: ['performance', 'perform', 'performing'] }
        ]
      }
    ],
    level2: [
      {
        id: 'g11_l2_hedging', title: 'Hedging Language', titleVi: 'Ngon ngu than trong', emoji: '🛡️',
        explanation: 'Make statements less absolute:\n• It seems/appears that...\n• It is likely/unlikely that...\n• tend to, generally, arguably\n• may/might/could + V',
        explanationVi: 'Lam phat bieu bot tuyet doi:\n• It seems that... (Co ve nhu...)\n• It is likely that... (Co kha nang...)\n• tend to (co xu huong)',
        exercises: [
          { type: 'fill', sentence: 'It ___ that the economy is improving.', answer: 'seems', options: ['seems', 'is', 'has'] },
          { type: 'fill', sentence: 'Students ___ to perform better with practice.', answer: 'tend', options: ['tend', 'are', 'have'] },
          { type: 'fill', sentence: 'The result ___ be influenced by several factors.', answer: 'may', options: ['may', 'is', 'has'] },
          { type: 'fill', sentence: 'It is ___ that temperatures will rise.', answer: 'likely', options: ['likely', 'sure', 'certain'] },
          { type: 'fill', sentence: '___, this approach has limitations.', answer: 'Arguably', options: ['Arguably', 'Certainly', 'Obviously'] }
        ]
      },
      {
        id: 'g11_l2_concession', title: 'Concession Structures', titleVi: 'Cau truc nhuong bo', emoji: '↔️',
        explanation: 'Advanced concession:\n• Much as I like him, I disagree.\n• However hard she tries, she fails.\n• No matter what happens, stay calm.\n• Adj + as/though + S + V',
        explanationVi: 'Nhuong bo nang cao:\n• Much as I like him, I disagree. (Du toi thich anh ay, toi khong dong y)\n• However hard she tries, she fails. (Du co co gang the nao, co ay van that bai)',
        exercises: [
          { type: 'fill', sentence: '___ as I tried, I couldn\'t do it.', answer: 'Much', options: ['Much', 'Very', 'So'] },
          { type: 'fill', sentence: '___ hard he works, he never complains.', answer: 'However', options: ['However', 'Whatever', 'Whoever'] },
          { type: 'fill', sentence: 'No ___ what happens, don\'t give up.', answer: 'matter', options: ['matter', 'way', 'thing'] },
          { type: 'fill', sentence: 'Tired ___ she was, she kept going.', answer: 'as', options: ['as', 'but', 'and'] },
          { type: 'fill', sentence: '___ being expensive, the hotel was fully booked.', answer: 'Despite', options: ['Despite', 'Although', 'However'] }
        ]
      },
      {
        id: 'g11_l2_cohesion', title: 'Textual Cohesion', titleVi: 'Lien ket van ban', emoji: '📄',
        explanation: 'Reference: this, that, these, such, the former, the latter\nSubstitution: one, ones, do so\nConjunction: moreover, in contrast, subsequently',
        explanationVi: 'Tham chieu: this, that, such, the former (cai truoc), the latter (cai sau)\nThay the: one, do so\nLien tu: moreover (hon nua), in contrast (nguo lai)',
        exercises: [
          { type: 'fill', sentence: 'There are two options: A and B. The ___ is cheaper.', answer: 'former', options: ['former', 'latter', 'other'] },
          { type: 'fill', sentence: 'I need a pen. Can I borrow ___?', answer: 'one', options: ['one', 'it', 'that'] },
          { type: 'fill', sentence: 'She said she would help, and she did ___.', answer: 'so', options: ['so', 'it', 'that'] },
          { type: 'fill', sentence: 'The results were poor. ___, changes were made.', answer: 'Subsequently', options: ['Subsequently', 'Moreover', 'However'] },
          { type: 'fill', sentence: '___ issues need to be addressed immediately.', answer: 'Such', options: ['Such', 'These', 'Those'] }
        ]
      }
    ],
    level3: [
      {
        id: 'g11_l3_register', title: 'Register & Formality', titleVi: 'Van phong & Trang trong', emoji: '👔',
        explanation: 'Informal → Formal:\n• get → obtain\n• need → require\n• ask for → request\n• find out → discover/determine\n• help → assist',
        explanationVi: 'Khong trang trong → Trang trong:\n• get → obtain (co duoc)\n• need → require (yeu cau)\n• ask for → request (de nghi)',
        exercises: [
          { type: 'fill', sentence: 'We ___ your cooperation. (formal: need)', answer: 'require', options: ['require', 'need', 'want'] },
          { type: 'fill', sentence: 'Please ___ me with further information. (formal: give)', answer: 'provide', options: ['provide', 'give', 'send'] },
          { type: 'fill', sentence: 'The company wishes to ___ more data. (formal: get)', answer: 'obtain', options: ['obtain', 'get', 'find'] },
          { type: 'fill', sentence: 'I am writing to ___ a meeting. (formal: ask for)', answer: 'request', options: ['request', 'ask for', 'want'] },
          { type: 'fill', sentence: 'We aim to ___ the root cause. (formal: find out)', answer: 'determine', options: ['determine', 'find out', 'check'] }
        ]
      },
      {
        id: 'g11_l3_modal3', title: 'Advanced Modal Usage', titleVi: 'Modal nang cao', emoji: '🎓',
        explanation: 'Deduction:\n• must be (certain)\n• can\'t be (impossible)\n• might/could be (possible)\nPast: must/can\'t/might + have + PP',
        explanationVi: 'Suy luan:\n• must be (chac chan la)\n• can\'t be (khong the la)\n• might be (co the la)\nQua khu: must/can\'t/might + have + PP',
        exercises: [
          { type: 'fill', sentence: 'She ___ be at home. Her car is in the driveway.', answer: 'must', options: ['must', 'can\'t', 'might'] },
          { type: 'fill', sentence: 'He ___ be the thief. He was in another country.', answer: "can't", options: ["can't", 'must', 'might'] },
          { type: 'fill', sentence: 'They ___ have forgotten about the meeting.', answer: 'might', options: ['might', 'must', "can't"] },
          { type: 'fill', sentence: 'She ___ have been very young when she married.', answer: 'must', options: ['must', "can't", 'might'] },
          { type: 'fill', sentence: 'He ___ have passed. He didn\'t study at all.', answer: "can't", options: ["can't", 'must', 'should'] }
        ]
      },
      {
        id: 'g11_l3_essay', title: 'Essay Structures', titleVi: 'Cau truc bai luan', emoji: '📝',
        explanation: 'Introduction: In recent years... / It is widely acknowledged that...\nBody: Firstly... Secondly... Furthermore...\nConclusion: In conclusion... / To sum up... / All things considered...',
        explanationVi: 'Mo bai: In recent years... / It is widely acknowledged that...\nThan bai: Firstly... Secondly... Furthermore...\nKet luan: In conclusion... / To sum up...',
        exercises: [
          { type: 'fill', sentence: '___ recent years, technology has advanced rapidly.', answer: 'In', options: ['In', 'For', 'At'] },
          { type: 'fill', sentence: '___, education should be accessible to all.', answer: 'Firstly', options: ['Firstly', 'First', 'One'] },
          { type: 'fill', sentence: '___ conclusion, the benefits outweigh the drawbacks.', answer: 'In', options: ['In', 'At', 'For'] },
          { type: 'fill', sentence: 'It is widely ___ that exercise is beneficial.', answer: 'acknowledged', options: ['acknowledged', 'known', 'said'] },
          { type: 'fill', sentence: 'All things ___, the proposal should be accepted.', answer: 'considered', options: ['considered', 'thinking', 'looking'] }
        ]
      }
    ]
  },
  12: {
    level1: [
      {
        id: 'g12_l1_review', title: 'Grammar Mastery Review', titleVi: 'On tap tong hop ngu phap', emoji: '🎓',
        explanation: 'Comprehensive review of all grammar points from Grade 1-12. Focus on accuracy, speed, and application in context.',
        explanationVi: 'On tap tong hop tat ca diem ngu phap tu lop 1-12. Tap trung vao do chinh xac, toc do va ung dung trong ngu canh.',
        exercises: [
          { type: 'fill', sentence: 'Had she ___ earlier, she would have caught the train.', answer: 'left', options: ['left', 'leave', 'leaving'] },
          { type: 'fill', sentence: 'The building, ___ was built in 1900, is now a museum.', answer: 'which', options: ['which', 'that', 'who'] },
          { type: 'fill', sentence: 'Not until he arrived ___ we start the meeting.', answer: 'did', options: ['did', 'had', 'were'] },
          { type: 'fill', sentence: 'She is said ___ be the most talented in the school.', answer: 'to', options: ['to', 'that', 'is'] },
          { type: 'fill', sentence: '___ he rich, he would donate to charity.', answer: 'Were', options: ['Were', 'Was', 'Is'] }
        ]
      },
      {
        id: 'g12_l1_error2', title: 'Advanced Error Identification', titleVi: 'Nhan dien loi nang cao', emoji: '🔍',
        explanation: 'Identify and fix common errors in complex sentences:\n• Agreement errors\n• Tense errors\n• Misused modals\n• Wrong prepositions\n• Dangling modifiers',
        explanationVi: 'Nhan dien va sua loi trong cau phuc tap:\n• Loi hoa hop\n• Loi thi\n• Dung sai modal\n• Sai gioi tu\n• Bo nghia treo',
        exercises: [
          { type: 'fill', sentence: 'Each of the students ___ completed their assignment.', answer: 'has', options: ['has', 'have', 'had'] },
          { type: 'fill', sentence: 'The number of students ___ increased this year.', answer: 'has', options: ['has', 'have', 'are'] },
          { type: 'fill', sentence: 'He insisted on ___ treated fairly.', answer: 'being', options: ['being', 'be', 'been'] },
          { type: 'fill', sentence: 'I\'d rather you ___ smoke here.', answer: "didn't", options: ["didn't", "don't", "won't"] },
          { type: 'fill', sentence: 'It\'s high time we ___ action.', answer: 'took', options: ['took', 'take', 'taken'] }
        ]
      },
      {
        id: 'g12_l1_academic', title: 'Academic Writing', titleVi: 'Van hoc thuat', emoji: '🏛️',
        explanation: 'Academic conventions:\n• Impersonal structures: It can be argued...\n• Hedging: tends to, appears to\n• Formal vocab: utilize, demonstrate, significant\n• Complex sentences with multiple clauses',
        explanationVi: 'Quy uoc hoc thuat:\n• Cau truc khach quan: It can be argued...\n• Than trong: tends to, appears to\n• Tu vung trang trong: utilize, demonstrate',
        exercises: [
          { type: 'fill', sentence: 'It can be ___ that technology has both benefits and drawbacks.', answer: 'argued', options: ['argued', 'said', 'told'] },
          { type: 'fill', sentence: 'The data ___ that temperatures are rising.', answer: 'suggests', options: ['suggests', 'says', 'tells'] },
          { type: 'fill', sentence: 'This study ___ to examine the effects of pollution.', answer: 'aims', options: ['aims', 'wants', 'tries'] },
          { type: 'fill', sentence: 'The findings ___ previous research in this field.', answer: 'support', options: ['support', 'help', 'assist'] },
          { type: 'fill', sentence: '___ research is needed to confirm these results.', answer: 'Further', options: ['Further', 'More', 'Extra'] }
        ]
      }
    ],
    level2: [
      {
        id: 'g12_l2_discourse', title: 'Discourse Analysis', titleVi: 'Phan tich van ban', emoji: '📊',
        explanation: 'Understanding text organization:\n• Topic sentences\n• Supporting details\n• Logical connectors\n• Coherence and cohesion\n• Rhetorical devices',
        explanationVi: 'Hieu to chuc van ban:\n• Cau chu de\n• Chi tiet ho tro\n• Lien tu logic\n• Lien ket va mach lac\n• Bien phap tu tu',
        exercises: [
          { type: 'fill', sentence: '___ the fact that pollution has decreased, air quality remains poor.', answer: 'Despite', options: ['Despite', 'Because', 'Since'] },
          { type: 'fill', sentence: 'The author\'s main ___ is that education needs reform.', answer: 'argument', options: ['argument', 'story', 'idea'] },
          { type: 'fill', sentence: 'This evidence ___ the claim that exercise improves health.', answer: 'supports', options: ['supports', 'says', 'wants'] },
          { type: 'fill', sentence: '___ to popular belief, the Earth is not perfectly round.', answer: 'Contrary', options: ['Contrary', 'According', 'Due'] },
          { type: 'fill', sentence: 'The study ___ that further research is necessary.', answer: 'concludes', options: ['concludes', 'thinks', 'hopes'] }
        ]
      },
      {
        id: 'g12_l2_complex', title: 'Complex Sentence Patterns', titleVi: 'Mau cau phuc tap', emoji: '🏗️',
        explanation: 'Multiple clause combinations:\n• While acknowledging that..., it must be noted that...\n• Not only did... but... also...\n• The extent to which... remains...\n• It is not so much... as...',
        explanationVi: 'Ket hop nhieu menh de:\n• While acknowledging that... (Trong khi thua nhan rang...)\n• The extent to which... remains... (Muc do ma... van con...)',
        exercises: [
          { type: 'fill', sentence: 'The extent ___ which this affects society is debatable.', answer: 'to', options: ['to', 'in', 'at'] },
          { type: 'fill', sentence: 'It is not so much the cost ___ the quality that matters.', answer: 'as', options: ['as', 'but', 'than'] },
          { type: 'fill', sentence: '___ acknowledging the risks, we must proceed.', answer: 'While', options: ['While', 'Although', 'Despite'] },
          { type: 'fill', sentence: 'The ___ important the issue, the more attention it receives.', answer: 'more', options: ['more', 'most', 'much'] },
          { type: 'fill', sentence: 'Little ___ he know what awaited him.', answer: 'did', options: ['did', 'had', 'was'] }
        ]
      },
      {
        id: 'g12_l2_transformation2', title: 'Advanced Transformations', titleVi: 'Chuyen doi nang cao', emoji: '🔄',
        explanation: 'Complex sentence rewriting:\n• Cleft → Normal\n• Active → Passive (complex)\n• Direct → Indirect (complex)\n• Inversion → Normal order',
        explanationVi: 'Viet lai cau phuc tap:\n• Cau che → Cau thuong\n• Chu dong → Bi dong (phuc tap)\n• Dao ngu → Thu tu thuong',
        exercises: [
          { type: 'fill', sentence: 'It was not until midnight ___ he finished.', answer: 'that', options: ['that', 'when', 'which'] },
          { type: 'fill', sentence: 'Under no circumstances ___ you leave early.', answer: 'should', options: ['should', 'you should', 'can'] },
          { type: 'fill', sentence: 'So great ___ his surprise that he couldn\'t speak.', answer: 'was', options: ['was', 'is', 'had'] },
          { type: 'fill', sentence: 'Only after she left ___ I realize my mistake.', answer: 'did', options: ['did', 'had', 'was'] },
          { type: 'fill', sentence: 'Hardly had he sat down ___ the phone rang.', answer: 'when', options: ['when', 'than', 'that'] }
        ]
      }
    ],
    level3: [
      {
        id: 'g12_l3_exam_prep', title: 'Exam Preparation', titleVi: 'Luyen thi', emoji: '📝',
        explanation: 'National exam-style questions covering all grammar areas. Mixed difficulty with focus on commonly tested patterns.',
        explanationVi: 'Cau hoi theo dang de thi quoc gia. Do kho hon hop, tap trung vao cac mau thuong gap trong de thi.',
        exercises: [
          { type: 'fill', sentence: 'Were it not ___ his help, we would have failed.', answer: 'for', options: ['for', 'to', 'by'] },
          { type: 'fill', sentence: 'The teacher had the students ___ the exercise again.', answer: 'do', options: ['do', 'to do', 'doing'] },
          { type: 'fill', sentence: 'Scarcely had we arrived ___ it started to rain.', answer: 'when', options: ['when', 'than', 'that'] },
          { type: 'fill', sentence: 'He acted as ___ nothing had happened.', answer: 'if', options: ['if', 'that', 'though'] },
          { type: 'fill', sentence: 'The sooner you finish, the ___ you can leave.', answer: 'sooner', options: ['sooner', 'faster', 'quicker'] }
        ]
      },
      {
        id: 'g12_l3_writing', title: 'Writing Skills', titleVi: 'Ky nang viet', emoji: '✍️',
        explanation: 'Advanced writing techniques:\n• Thesis statements\n• Paragraph development\n• Transition words\n• Formal register\n• Critical thinking expressions',
        explanationVi: 'Ky thuat viet nang cao:\n• Cau luan diem\n• Phat trien doan van\n• Tu chuyen tiep\n• Van phong trang trong\n• Bieu dat tu duy phan bien',
        exercises: [
          { type: 'fill', sentence: 'This essay will ___ the advantages and disadvantages of online learning.', answer: 'examine', options: ['examine', 'look', 'see'] },
          { type: 'fill', sentence: '___ the above arguments, it can be concluded that...', answer: 'Considering', options: ['Considering', 'Looking', 'Seeing'] },
          { type: 'fill', sentence: 'The evidence ___ supports the hypothesis.', answer: 'strongly', options: ['strongly', 'very', 'much'] },
          { type: 'fill', sentence: 'On the one hand... On the ___ hand...', answer: 'other', options: ['other', 'another', 'next'] },
          { type: 'fill', sentence: 'In ___ of the evidence presented, the conclusion is clear.', answer: 'light', options: ['light', 'view', 'terms'] }
        ]
      },
      {
        id: 'g12_l3_mastery', title: 'English Mastery', titleVi: 'Thanh thao tieng Anh', emoji: '🏆',
        explanation: 'The final challenge! Mixed advanced grammar covering everything from Grade 1 to Grade 12. Prove your mastery!',
        explanationVi: 'Thu thach cuoi cung! Ngu phap nang cao hon hop tu lop 1 den lop 12. Chung minh su thanh thao cua ban!',
        exercises: [
          { type: 'fill', sentence: 'But for your help, I ___ have succeeded.', answer: "wouldn't", options: ["wouldn't", "couldn't", "shouldn't"] },
          { type: 'fill', sentence: 'So ___ was his performance that the audience stood up.', answer: 'impressive', options: ['impressive', 'impressed', 'impressing'] },
          { type: 'fill', sentence: 'It is high time the government ___ action on pollution.', answer: 'took', options: ['took', 'takes', 'take'] },
          { type: 'fill', sentence: 'The report, the findings of ___ were shocking, was published.', answer: 'which', options: ['which', 'that', 'whom'] },
          { type: 'fill', sentence: '___ what may, we will not give up.', answer: 'Come', options: ['Come', 'Coming', 'Came'] }
        ]
      }
    ]
  }
};
