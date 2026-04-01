// ============================================
// LỚP 1 - GIÁO TRÌNH 12 THÁNG - 3 CẤP ĐỘ
// ============================================
GRADE_DATA[1] = {};
GRADE_DATA[1].info = {
    levels: [
        { id: 1, name: 'Beginner', nameVi: 'Người mới bắt đầu', months: [1,2,3,4], color: '#4ECDC4', icon: '🌱' },
        { id: 2, name: 'Elementary', nameVi: 'Cơ bản', months: [5,6,7,8], color: '#A855F7', icon: '🌿' },
        { id: 3, name: 'Pre-Intermediate', nameVi: 'Nâng cao', months: [9,10,11,12], color: '#FF6B9D', icon: '🌳' },
    ],
    months: [
        { month: 1, title: 'Chào bạn!', topics: ['greetings', 'family', 'colors_basic'] },
        { month: 2, title: 'Thế giới quanh em', topics: ['animals_pet', 'fruits', 'numbers_1_10'] },
        { month: 3, title: 'Lớp học vui', topics: ['school', 'body', 'shapes'] },
        { month: 4, title: 'Mỗi ngày của em', topics: ['food_drink', 'clothes', 'actions_basic'] },
        { month: 5, title: 'Thiên nhiên', topics: ['animals_farm', 'weather', 'nature'] },
        { month: 6, title: 'Ngôi nhà của em', topics: ['house_rooms', 'furniture', 'kitchen'] },
        { month: 7, title: 'Vui chơi', topics: ['toys', 'sports', 'feelings'] },
        { month: 8, title: 'Cộng đồng', topics: ['jobs', 'transport', 'places'] },
        { month: 9, title: 'Khám phá', topics: ['animals_wild', 'sea_animals', 'insects'] },
        { month: 10, title: 'Thời gian', topics: ['days_week', 'months_year', 'time'] },
        { month: 11, title: 'Thế giới rộng lớn', topics: ['countries', 'festivals', 'music'] },
        { month: 12, title: 'Tổng ôn tập', topics: ['review_vocab', 'review_grammar', 'review_all'] },
    ]
};

// ============================================
// TỪ VỰNG - 400+ từ chia theo chủ đề
// ============================================
GRADE_DATA[1].vocab = {
    // === THÁNG 1 ===
    greetings: {
        name: 'Chào hỏi',
        level: 1,
        month: 1,
        words: [
            { en: 'Hello', vi: 'Xin chào', emoji: '👋', phonetic: '/həˈloʊ/' },
            { en: 'Hi', vi: 'Chào', emoji: '🙋', phonetic: '/haɪ/' },
            { en: 'Goodbye', vi: 'Tạm biệt', emoji: '👋', phonetic: '/ɡʊdˈbaɪ/' },
            { en: 'Thank you', vi: 'Cảm ơn', emoji: '🙏', phonetic: '/θæŋk juː/' },
            { en: 'Sorry', vi: 'Xin lỗi', emoji: '😔', phonetic: '/ˈsɒri/' },
            { en: 'Please', vi: 'Làm ơn', emoji: '🤲', phonetic: '/pliːz/' },
            { en: 'Yes', vi: 'Vâng / Có', emoji: '✅', phonetic: '/jes/' },
            { en: 'No', vi: 'Không', emoji: '❌', phonetic: '/noʊ/' },
            { en: 'Friend', vi: 'Bạn bè', emoji: '🤝', phonetic: '/frend/' },
            { en: 'Teacher', vi: 'Giáo viên', emoji: '👩‍🏫', phonetic: '/ˈtiːtʃər/' },
        ]
    },
    family: {
        name: 'Gia đình',
        level: 1,
        month: 1,
        words: [
            { en: 'Mom', vi: 'Mẹ', emoji: '👩', phonetic: '/mɒm/' },
            { en: 'Dad', vi: 'Bố', emoji: '👨', phonetic: '/dæd/' },
            { en: 'Sister', vi: 'Chị / Em gái', emoji: '👧', phonetic: '/ˈsɪstər/' },
            { en: 'Brother', vi: 'Anh / Em trai', emoji: '👦', phonetic: '/ˈbrʌðər/' },
            { en: 'Baby', vi: 'Em bé', emoji: '👶', phonetic: '/ˈbeɪbi/' },
            { en: 'Grandma', vi: 'Bà', emoji: '👵', phonetic: '/ˈɡrænmɑː/' },
            { en: 'Grandpa', vi: 'Ông', emoji: '👴', phonetic: '/ˈɡrænpɑː/' },
            { en: 'Family', vi: 'Gia đình', emoji: '👨‍👩‍👧‍👦', phonetic: '/ˈfæməli/' },
            { en: 'Boy', vi: 'Con trai', emoji: '👦', phonetic: '/bɔɪ/' },
            { en: 'Girl', vi: 'Con gái', emoji: '👧', phonetic: '/ɡɜːrl/' },
        ]
    },
    colors_basic: {
        name: 'Màu sắc cơ bản',
        level: 1,
        month: 1,
        words: [
            { en: 'Red', vi: 'Màu đỏ', emoji: '🔴', phonetic: '/red/' },
            { en: 'Blue', vi: 'Màu xanh dương', emoji: '🔵', phonetic: '/bluː/' },
            { en: 'Green', vi: 'Màu xanh lá', emoji: '🟢', phonetic: '/ɡriːn/' },
            { en: 'Yellow', vi: 'Màu vàng', emoji: '🟡', phonetic: '/ˈjeloʊ/' },
            { en: 'Pink', vi: 'Màu hồng', emoji: '🩷', phonetic: '/pɪŋk/' },
            { en: 'Orange', vi: 'Màu cam', emoji: '🟠', phonetic: '/ˈɒrɪndʒ/' },
            { en: 'White', vi: 'Màu trắng', emoji: '⚪', phonetic: '/waɪt/' },
            { en: 'Black', vi: 'Màu đen', emoji: '⚫', phonetic: '/blæk/' },
            { en: 'Purple', vi: 'Màu tím', emoji: '🟣', phonetic: '/ˈpɜːrpəl/' },
            { en: 'Brown', vi: 'Màu nâu', emoji: '🟤', phonetic: '/braʊn/' },
        ]
    },

    // === THÁNG 2 ===
    animals_pet: {
        name: 'Động vật nuôi',
        level: 1,
        month: 2,
        words: [
            { en: 'Cat', vi: 'Con mèo', emoji: '🐱', phonetic: '/kæt/' },
            { en: 'Dog', vi: 'Con chó', emoji: '🐶', phonetic: '/dɒɡ/' },
            { en: 'Bird', vi: 'Con chim', emoji: '🐦', phonetic: '/bɜːrd/' },
            { en: 'Fish', vi: 'Con cá', emoji: '🐟', phonetic: '/fɪʃ/' },
            { en: 'Rabbit', vi: 'Con thỏ', emoji: '🐰', phonetic: '/ˈræbɪt/' },
            { en: 'Hamster', vi: 'Chuột hamster', emoji: '🐹', phonetic: '/ˈhæmstər/' },
            { en: 'Turtle', vi: 'Con rùa', emoji: '🐢', phonetic: '/ˈtɜːrtl/' },
            { en: 'Parrot', vi: 'Con vẹt', emoji: '🦜', phonetic: '/ˈpærət/' },
            { en: 'Kitten', vi: 'Mèo con', emoji: '🐱', phonetic: '/ˈkɪtən/' },
            { en: 'Puppy', vi: 'Chó con', emoji: '🐶', phonetic: '/ˈpʌpi/' },
        ]
    },
    fruits: {
        name: 'Trái cây',
        level: 1,
        month: 2,
        words: [
            { en: 'Apple', vi: 'Quả táo', emoji: '🍎', phonetic: '/ˈæp.əl/' },
            { en: 'Banana', vi: 'Quả chuối', emoji: '🍌', phonetic: '/bəˈnænə/' },
            { en: 'Orange', vi: 'Quả cam', emoji: '🍊', phonetic: '/ˈɒrɪndʒ/' },
            { en: 'Grape', vi: 'Quả nho', emoji: '🍇', phonetic: '/ɡreɪp/' },
            { en: 'Mango', vi: 'Quả xoài', emoji: '🥭', phonetic: '/ˈmæŋɡoʊ/' },
            { en: 'Strawberry', vi: 'Quả dâu', emoji: '🍓', phonetic: '/ˈstrɔːberi/' },
            { en: 'Watermelon', vi: 'Dưa hấu', emoji: '🍉', phonetic: '/ˈwɔːtərmelən/' },
            { en: 'Lemon', vi: 'Quả chanh', emoji: '🍋', phonetic: '/ˈlemən/' },
            { en: 'Peach', vi: 'Quả đào', emoji: '🍑', phonetic: '/piːtʃ/' },
            { en: 'Cherry', vi: 'Quả cherry', emoji: '🍒', phonetic: '/ˈtʃeri/' },
        ]
    },
    numbers_1_10: {
        name: 'Số đếm 1-10',
        level: 1,
        month: 2,
        words: [
            { en: 'One', vi: 'Một', emoji: '1️⃣', phonetic: '/wʌn/' },
            { en: 'Two', vi: 'Hai', emoji: '2️⃣', phonetic: '/tuː/' },
            { en: 'Three', vi: 'Ba', emoji: '3️⃣', phonetic: '/θriː/' },
            { en: 'Four', vi: 'Bốn', emoji: '4️⃣', phonetic: '/fɔːr/' },
            { en: 'Five', vi: 'Năm', emoji: '5️⃣', phonetic: '/faɪv/' },
            { en: 'Six', vi: 'Sáu', emoji: '6️⃣', phonetic: '/sɪks/' },
            { en: 'Seven', vi: 'Bảy', emoji: '7️⃣', phonetic: '/ˈsevən/' },
            { en: 'Eight', vi: 'Tám', emoji: '8️⃣', phonetic: '/eɪt/' },
            { en: 'Nine', vi: 'Chín', emoji: '9️⃣', phonetic: '/naɪn/' },
            { en: 'Ten', vi: 'Mười', emoji: '🔟', phonetic: '/ten/' },
        ]
    },

    // === THÁNG 3 ===
    school: {
        name: 'Trường học',
        level: 1,
        month: 3,
        words: [
            { en: 'Book', vi: 'Quyển sách', emoji: '📖', phonetic: '/bʊk/' },
            { en: 'Pen', vi: 'Cây bút', emoji: '🖊️', phonetic: '/pen/' },
            { en: 'Pencil', vi: 'Bút chì', emoji: '✏️', phonetic: '/ˈpensəl/' },
            { en: 'Eraser', vi: 'Cục tẩy', emoji: '🧽', phonetic: '/ɪˈreɪsər/' },
            { en: 'Ruler', vi: 'Thước kẻ', emoji: '📏', phonetic: '/ˈruːlər/' },
            { en: 'Bag', vi: 'Cặp sách', emoji: '🎒', phonetic: '/bæɡ/' },
            { en: 'Desk', vi: 'Bàn học', emoji: '🪑', phonetic: '/desk/' },
            { en: 'Chair', vi: 'Ghế', emoji: '💺', phonetic: '/tʃer/' },
            { en: 'Board', vi: 'Bảng', emoji: '📋', phonetic: '/bɔːrd/' },
            { en: 'School', vi: 'Trường học', emoji: '🏫', phonetic: '/skuːl/' },
        ]
    },
    body: {
        name: 'Cơ thể',
        level: 1,
        month: 3,
        words: [
            { en: 'Head', vi: 'Đầu', emoji: '🗣️', phonetic: '/hed/' },
            { en: 'Eye', vi: 'Mắt', emoji: '👁️', phonetic: '/aɪ/' },
            { en: 'Ear', vi: 'Tai', emoji: '👂', phonetic: '/ɪr/' },
            { en: 'Nose', vi: 'Mũi', emoji: '👃', phonetic: '/noʊz/' },
            { en: 'Mouth', vi: 'Miệng', emoji: '👄', phonetic: '/maʊθ/' },
            { en: 'Hand', vi: 'Bàn tay', emoji: '✋', phonetic: '/hænd/' },
            { en: 'Foot', vi: 'Bàn chân', emoji: '🦶', phonetic: '/fʊt/' },
            { en: 'Arm', vi: 'Cánh tay', emoji: '💪', phonetic: '/ɑːrm/' },
            { en: 'Leg', vi: 'Chân', emoji: '🦵', phonetic: '/leɡ/' },
            { en: 'Hair', vi: 'Tóc', emoji: '💇', phonetic: '/her/' },
        ]
    },
    shapes: {
        name: 'Hình dạng',
        level: 1,
        month: 3,
        words: [
            { en: 'Circle', vi: 'Hình tròn', emoji: '⭕', phonetic: '/ˈsɜːrkəl/' },
            { en: 'Square', vi: 'Hình vuông', emoji: '🟦', phonetic: '/skwer/' },
            { en: 'Triangle', vi: 'Hình tam giác', emoji: '🔺', phonetic: '/ˈtraɪæŋɡəl/' },
            { en: 'Star', vi: 'Ngôi sao', emoji: '⭐', phonetic: '/stɑːr/' },
            { en: 'Heart', vi: 'Hình trái tim', emoji: '❤️', phonetic: '/hɑːrt/' },
            { en: 'Diamond', vi: 'Hình thoi', emoji: '💎', phonetic: '/ˈdaɪmənd/' },
            { en: 'Rectangle', vi: 'Hình chữ nhật', emoji: '🟩', phonetic: '/ˈrektæŋɡəl/' },
            { en: 'Oval', vi: 'Hình bầu dục', emoji: '🥚', phonetic: '/ˈoʊvəl/' },
        ]
    },

    // === THÁNG 4 ===
    food_drink: {
        name: 'Thức ăn & Đồ uống',
        level: 1,
        month: 4,
        words: [
            { en: 'Rice', vi: 'Cơm', emoji: '🍚', phonetic: '/raɪs/' },
            { en: 'Bread', vi: 'Bánh mì', emoji: '🍞', phonetic: '/bred/' },
            { en: 'Egg', vi: 'Quả trứng', emoji: '🥚', phonetic: '/eɡ/' },
            { en: 'Milk', vi: 'Sữa', emoji: '🥛', phonetic: '/mɪlk/' },
            { en: 'Water', vi: 'Nước', emoji: '💧', phonetic: '/ˈwɔːtər/' },
            { en: 'Juice', vi: 'Nước ép', emoji: '🧃', phonetic: '/dʒuːs/' },
            { en: 'Cake', vi: 'Bánh ngọt', emoji: '🎂', phonetic: '/keɪk/' },
            { en: 'Candy', vi: 'Kẹo', emoji: '🍬', phonetic: '/ˈkændi/' },
            { en: 'Chicken', vi: 'Thịt gà', emoji: '🍗', phonetic: '/ˈtʃɪkɪn/' },
            { en: 'Noodle', vi: 'Mì', emoji: '🍜', phonetic: '/ˈnuːdəl/' },
        ]
    },
    clothes: {
        name: 'Quần áo',
        level: 1,
        month: 4,
        words: [
            { en: 'Shirt', vi: 'Áo sơ mi', emoji: '👔', phonetic: '/ʃɜːrt/' },
            { en: 'Pants', vi: 'Quần dài', emoji: '👖', phonetic: '/pænts/' },
            { en: 'Dress', vi: 'Váy', emoji: '👗', phonetic: '/dres/' },
            { en: 'Shoes', vi: 'Giày', emoji: '👟', phonetic: '/ʃuːz/' },
            { en: 'Hat', vi: 'Mũ', emoji: '🧢', phonetic: '/hæt/' },
            { en: 'Socks', vi: 'Tất / Vớ', emoji: '🧦', phonetic: '/sɒks/' },
            { en: 'Jacket', vi: 'Áo khoác', emoji: '🧥', phonetic: '/ˈdʒækɪt/' },
            { en: 'Skirt', vi: 'Chân váy', emoji: '👗', phonetic: '/skɜːrt/' },
            { en: 'Boots', vi: 'Ủng', emoji: '👢', phonetic: '/buːts/' },
            { en: 'Glasses', vi: 'Kính', emoji: '👓', phonetic: '/ˈɡlæsɪz/' },
        ]
    },
    actions_basic: {
        name: 'Hành động cơ bản',
        level: 1,
        month: 4,
        words: [
            { en: 'Run', vi: 'Chạy', emoji: '🏃', phonetic: '/rʌn/' },
            { en: 'Walk', vi: 'Đi bộ', emoji: '🚶', phonetic: '/wɔːk/' },
            { en: 'Jump', vi: 'Nhảy', emoji: '🤸', phonetic: '/dʒʌmp/' },
            { en: 'Eat', vi: 'Ăn', emoji: '🍽️', phonetic: '/iːt/' },
            { en: 'Drink', vi: 'Uống', emoji: '🥤', phonetic: '/drɪŋk/' },
            { en: 'Sleep', vi: 'Ngủ', emoji: '😴', phonetic: '/sliːp/' },
            { en: 'Read', vi: 'Đọc', emoji: '📖', phonetic: '/riːd/' },
            { en: 'Write', vi: 'Viết', emoji: '✍️', phonetic: '/raɪt/' },
            { en: 'Play', vi: 'Chơi', emoji: '🎮', phonetic: '/pleɪ/' },
            { en: 'Sing', vi: 'Hát', emoji: '🎤', phonetic: '/sɪŋ/' },
        ]
    },

    // === THÁNG 5 ===
    animals_farm: {
        name: 'Động vật trang trại',
        level: 2,
        month: 5,
        words: [
            { en: 'Cow', vi: 'Con bò', emoji: '🐄', phonetic: '/kaʊ/' },
            { en: 'Pig', vi: 'Con heo', emoji: '🐷', phonetic: '/pɪɡ/' },
            { en: 'Chicken', vi: 'Con gà', emoji: '🐔', phonetic: '/ˈtʃɪkɪn/' },
            { en: 'Duck', vi: 'Con vịt', emoji: '🦆', phonetic: '/dʌk/' },
            { en: 'Horse', vi: 'Con ngựa', emoji: '🐴', phonetic: '/hɔːrs/' },
            { en: 'Sheep', vi: 'Con cừu', emoji: '🐑', phonetic: '/ʃiːp/' },
            { en: 'Goat', vi: 'Con dê', emoji: '🐐', phonetic: '/ɡoʊt/' },
            { en: 'Donkey', vi: 'Con lừa', emoji: '🫏', phonetic: '/ˈdɒŋki/' },
            { en: 'Rooster', vi: 'Gà trống', emoji: '🐓', phonetic: '/ˈruːstər/' },
            { en: 'Turkey', vi: 'Gà tây', emoji: '🦃', phonetic: '/ˈtɜːrki/' },
        ]
    },
    weather: {
        name: 'Thời tiết',
        level: 2,
        month: 5,
        words: [
            { en: 'Sun', vi: 'Mặt trời', emoji: '☀️', phonetic: '/sʌn/' },
            { en: 'Rain', vi: 'Mưa', emoji: '🌧️', phonetic: '/reɪn/' },
            { en: 'Cloud', vi: 'Mây', emoji: '☁️', phonetic: '/klaʊd/' },
            { en: 'Wind', vi: 'Gió', emoji: '💨', phonetic: '/wɪnd/' },
            { en: 'Snow', vi: 'Tuyết', emoji: '❄️', phonetic: '/snoʊ/' },
            { en: 'Hot', vi: 'Nóng', emoji: '🥵', phonetic: '/hɒt/' },
            { en: 'Cold', vi: 'Lạnh', emoji: '🥶', phonetic: '/koʊld/' },
            { en: 'Rainbow', vi: 'Cầu vồng', emoji: '🌈', phonetic: '/ˈreɪnboʊ/' },
            { en: 'Storm', vi: 'Bão', emoji: '⛈️', phonetic: '/stɔːrm/' },
            { en: 'Sunny', vi: 'Nắng', emoji: '🌞', phonetic: '/ˈsʌni/' },
        ]
    },
    nature: {
        name: 'Thiên nhiên',
        level: 2,
        month: 5,
        words: [
            { en: 'Tree', vi: 'Cái cây', emoji: '🌳', phonetic: '/triː/' },
            { en: 'Flower', vi: 'Bông hoa', emoji: '🌸', phonetic: '/ˈflaʊər/' },
            { en: 'Grass', vi: 'Cỏ', emoji: '🌿', phonetic: '/ɡræs/' },
            { en: 'River', vi: 'Sông', emoji: '🏞️', phonetic: '/ˈrɪvər/' },
            { en: 'Mountain', vi: 'Núi', emoji: '⛰️', phonetic: '/ˈmaʊntən/' },
            { en: 'Sea', vi: 'Biển', emoji: '🌊', phonetic: '/siː/' },
            { en: 'Sky', vi: 'Bầu trời', emoji: '🌌', phonetic: '/skaɪ/' },
            { en: 'Moon', vi: 'Mặt trăng', emoji: '🌙', phonetic: '/muːn/' },
            { en: 'Rock', vi: 'Đá', emoji: '🪨', phonetic: '/rɒk/' },
            { en: 'Leaf', vi: 'Lá cây', emoji: '🍃', phonetic: '/liːf/' },
        ]
    },

    // === THÁNG 6 ===
    house_rooms: {
        name: 'Phòng trong nhà',
        level: 2,
        month: 6,
        words: [
            { en: 'House', vi: 'Ngôi nhà', emoji: '🏠', phonetic: '/haʊs/' },
            { en: 'Room', vi: 'Phòng', emoji: '🚪', phonetic: '/ruːm/' },
            { en: 'Bedroom', vi: 'Phòng ngủ', emoji: '🛏️', phonetic: '/ˈbedruːm/' },
            { en: 'Kitchen', vi: 'Nhà bếp', emoji: '🍳', phonetic: '/ˈkɪtʃɪn/' },
            { en: 'Bathroom', vi: 'Phòng tắm', emoji: '🛁', phonetic: '/ˈbæθruːm/' },
            { en: 'Garden', vi: 'Vườn', emoji: '🌻', phonetic: '/ˈɡɑːrdən/' },
            { en: 'Door', vi: 'Cửa', emoji: '🚪', phonetic: '/dɔːr/' },
            { en: 'Window', vi: 'Cửa sổ', emoji: '🪟', phonetic: '/ˈwɪndoʊ/' },
            { en: 'Floor', vi: 'Sàn nhà', emoji: '🏠', phonetic: '/flɔːr/' },
            { en: 'Roof', vi: 'Mái nhà', emoji: '🏠', phonetic: '/ruːf/' },
        ]
    },
    furniture: {
        name: 'Đồ nội thất',
        level: 2,
        month: 6,
        words: [
            { en: 'Bed', vi: 'Giường', emoji: '🛏️', phonetic: '/bed/' },
            { en: 'Table', vi: 'Cái bàn', emoji: '🪑', phonetic: '/ˈteɪbəl/' },
            { en: 'Chair', vi: 'Cái ghế', emoji: '💺', phonetic: '/tʃer/' },
            { en: 'Sofa', vi: 'Ghế sofa', emoji: '🛋️', phonetic: '/ˈsoʊfə/' },
            { en: 'Lamp', vi: 'Đèn', emoji: '💡', phonetic: '/læmp/' },
            { en: 'Clock', vi: 'Đồng hồ', emoji: '🕐', phonetic: '/klɒk/' },
            { en: 'Mirror', vi: 'Gương', emoji: '🪞', phonetic: '/ˈmɪrər/' },
            { en: 'Shelf', vi: 'Kệ sách', emoji: '📚', phonetic: '/ʃelf/' },
            { en: 'Pillow', vi: 'Gối', emoji: '🛏️', phonetic: '/ˈpɪloʊ/' },
            { en: 'Blanket', vi: 'Chăn', emoji: '🛏️', phonetic: '/ˈblæŋkɪt/' },
        ]
    },
    kitchen: {
        name: 'Nhà bếp',
        level: 2,
        month: 6,
        words: [
            { en: 'Cup', vi: 'Cái ly', emoji: '☕', phonetic: '/kʌp/' },
            { en: 'Plate', vi: 'Cái đĩa', emoji: '🍽️', phonetic: '/pleɪt/' },
            { en: 'Spoon', vi: 'Cái muỗng', emoji: '🥄', phonetic: '/spuːn/' },
            { en: 'Fork', vi: 'Cái nĩa', emoji: '🍴', phonetic: '/fɔːrk/' },
            { en: 'Knife', vi: 'Con dao', emoji: '🔪', phonetic: '/naɪf/' },
            { en: 'Bowl', vi: 'Cái tô', emoji: '🥣', phonetic: '/boʊl/' },
            { en: 'Pot', vi: 'Cái nồi', emoji: '🍲', phonetic: '/pɒt/' },
            { en: 'Pan', vi: 'Cái chảo', emoji: '🍳', phonetic: '/pæn/' },
            { en: 'Bottle', vi: 'Chai', emoji: '🍼', phonetic: '/ˈbɒtəl/' },
            { en: 'Glass', vi: 'Cốc thủy tinh', emoji: '🥛', phonetic: '/ɡlæs/' },
        ]
    },

    // === THÁNG 7 ===
    toys: {
        name: 'Đồ chơi',
        level: 2,
        month: 7,
        words: [
            { en: 'Ball', vi: 'Quả bóng', emoji: '⚽', phonetic: '/bɔːl/' },
            { en: 'Doll', vi: 'Búp bê', emoji: '🎎', phonetic: '/dɒl/' },
            { en: 'Robot', vi: 'Rô bốt', emoji: '🤖', phonetic: '/ˈroʊbɒt/' },
            { en: 'Teddy bear', vi: 'Gấu bông', emoji: '🧸', phonetic: '/ˈtedi ber/' },
            { en: 'Puzzle', vi: 'Xếp hình', emoji: '🧩', phonetic: '/ˈpʌzəl/' },
            { en: 'Kite', vi: 'Diều', emoji: '🪁', phonetic: '/kaɪt/' },
            { en: 'Drum', vi: 'Trống', emoji: '🥁', phonetic: '/drʌm/' },
            { en: 'Balloon', vi: 'Bóng bay', emoji: '🎈', phonetic: '/bəˈluːn/' },
            { en: 'Blocks', vi: 'Khối xếp hình', emoji: '🧱', phonetic: '/blɒks/' },
            { en: 'Train', vi: 'Tàu hỏa', emoji: '🚂', phonetic: '/treɪn/' },
        ]
    },
    sports: {
        name: 'Thể thao',
        level: 2,
        month: 7,
        words: [
            { en: 'Soccer', vi: 'Bóng đá', emoji: '⚽', phonetic: '/ˈsɒkər/' },
            { en: 'Swimming', vi: 'Bơi lội', emoji: '🏊', phonetic: '/ˈswɪmɪŋ/' },
            { en: 'Running', vi: 'Chạy bộ', emoji: '🏃', phonetic: '/ˈrʌnɪŋ/' },
            { en: 'Dancing', vi: 'Nhảy múa', emoji: '💃', phonetic: '/ˈdænsɪŋ/' },
            { en: 'Cycling', vi: 'Đạp xe', emoji: '🚴', phonetic: '/ˈsaɪklɪŋ/' },
            { en: 'Tennis', vi: 'Quần vợt', emoji: '🎾', phonetic: '/ˈtenɪs/' },
            { en: 'Basketball', vi: 'Bóng rổ', emoji: '🏀', phonetic: '/ˈbæskɪtbɔːl/' },
            { en: 'Skating', vi: 'Trượt băng', emoji: '⛸️', phonetic: '/ˈskeɪtɪŋ/' },
            { en: 'Climbing', vi: 'Leo núi', emoji: '🧗', phonetic: '/ˈklaɪmɪŋ/' },
            { en: 'Yoga', vi: 'Yoga', emoji: '🧘', phonetic: '/ˈjoʊɡə/' },
        ]
    },
    feelings: {
        name: 'Cảm xúc',
        level: 2,
        month: 7,
        words: [
            { en: 'Happy', vi: 'Vui vẻ', emoji: '😊', phonetic: '/ˈhæpi/' },
            { en: 'Sad', vi: 'Buồn', emoji: '😢', phonetic: '/sæd/' },
            { en: 'Angry', vi: 'Tức giận', emoji: '😠', phonetic: '/ˈæŋɡri/' },
            { en: 'Scared', vi: 'Sợ hãi', emoji: '😨', phonetic: '/skerd/' },
            { en: 'Tired', vi: 'Mệt mỏi', emoji: '😴', phonetic: '/ˈtaɪərd/' },
            { en: 'Hungry', vi: 'Đói', emoji: '🤤', phonetic: '/ˈhʌŋɡri/' },
            { en: 'Thirsty', vi: 'Khát', emoji: '🥤', phonetic: '/ˈθɜːrsti/' },
            { en: 'Excited', vi: 'Hào hứng', emoji: '🤩', phonetic: '/ɪkˈsaɪtɪd/' },
            { en: 'Sick', vi: 'Bệnh', emoji: '🤒', phonetic: '/sɪk/' },
            { en: 'Brave', vi: 'Dũng cảm', emoji: '💪', phonetic: '/breɪv/' },
        ]
    },

    // === THÁNG 8 ===
    jobs: {
        name: 'Nghề nghiệp',
        level: 2,
        month: 8,
        words: [
            { en: 'Doctor', vi: 'Bác sĩ', emoji: '👨‍⚕️', phonetic: '/ˈdɒktər/' },
            { en: 'Teacher', vi: 'Giáo viên', emoji: '👩‍🏫', phonetic: '/ˈtiːtʃər/' },
            { en: 'Police', vi: 'Cảnh sát', emoji: '👮', phonetic: '/pəˈliːs/' },
            { en: 'Farmer', vi: 'Nông dân', emoji: '👨‍🌾', phonetic: '/ˈfɑːrmər/' },
            { en: 'Cook', vi: 'Đầu bếp', emoji: '👨‍🍳', phonetic: '/kʊk/' },
            { en: 'Driver', vi: 'Tài xế', emoji: '🚗', phonetic: '/ˈdraɪvər/' },
            { en: 'Singer', vi: 'Ca sĩ', emoji: '🎤', phonetic: '/ˈsɪŋər/' },
            { en: 'Pilot', vi: 'Phi công', emoji: '👨‍✈️', phonetic: '/ˈpaɪlət/' },
            { en: 'Nurse', vi: 'Y tá', emoji: '👩‍⚕️', phonetic: '/nɜːrs/' },
            { en: 'Artist', vi: 'Họa sĩ', emoji: '🎨', phonetic: '/ˈɑːrtɪst/' },
        ]
    },
    transport: {
        name: 'Phương tiện',
        level: 2,
        month: 8,
        words: [
            { en: 'Car', vi: 'Xe ô tô', emoji: '🚗', phonetic: '/kɑːr/' },
            { en: 'Bus', vi: 'Xe buýt', emoji: '🚌', phonetic: '/bʌs/' },
            { en: 'Bike', vi: 'Xe đạp', emoji: '🚲', phonetic: '/baɪk/' },
            { en: 'Train', vi: 'Tàu hỏa', emoji: '🚂', phonetic: '/treɪn/' },
            { en: 'Plane', vi: 'Máy bay', emoji: '✈️', phonetic: '/pleɪn/' },
            { en: 'Ship', vi: 'Tàu thủy', emoji: '🚢', phonetic: '/ʃɪp/' },
            { en: 'Taxi', vi: 'Xe taxi', emoji: '🚕', phonetic: '/ˈtæksi/' },
            { en: 'Boat', vi: 'Thuyền', emoji: '⛵', phonetic: '/boʊt/' },
            { en: 'Truck', vi: 'Xe tải', emoji: '🚚', phonetic: '/trʌk/' },
            { en: 'Helicopter', vi: 'Trực thăng', emoji: '🚁', phonetic: '/ˈhelɪkɒptər/' },
        ]
    },
    places: {
        name: 'Địa điểm',
        level: 2,
        month: 8,
        words: [
            { en: 'Park', vi: 'Công viên', emoji: '🏞️', phonetic: '/pɑːrk/' },
            { en: 'Hospital', vi: 'Bệnh viện', emoji: '🏥', phonetic: '/ˈhɒspɪtəl/' },
            { en: 'Market', vi: 'Chợ', emoji: '🏬', phonetic: '/ˈmɑːrkɪt/' },
            { en: 'Library', vi: 'Thư viện', emoji: '📚', phonetic: '/ˈlaɪbreri/' },
            { en: 'Zoo', vi: 'Vườn thú', emoji: '🦁', phonetic: '/zuː/' },
            { en: 'Beach', vi: 'Bãi biển', emoji: '🏖️', phonetic: '/biːtʃ/' },
            { en: 'Church', vi: 'Nhà thờ', emoji: '⛪', phonetic: '/tʃɜːrtʃ/' },
            { en: 'Cinema', vi: 'Rạp phim', emoji: '🎬', phonetic: '/ˈsɪnəmə/' },
            { en: 'Airport', vi: 'Sân bay', emoji: '🛫', phonetic: '/ˈerpɔːrt/' },
            { en: 'Store', vi: 'Cửa hàng', emoji: '🏪', phonetic: '/stɔːr/' },
        ]
    },

    // === THÁNG 9 ===
    animals_wild: {
        name: 'Động vật hoang dã',
        level: 3,
        month: 9,
        words: [
            { en: 'Lion', vi: 'Sư tử', emoji: '🦁', phonetic: '/ˈlaɪən/' },
            { en: 'Tiger', vi: 'Con hổ', emoji: '🐯', phonetic: '/ˈtaɪɡər/' },
            { en: 'Elephant', vi: 'Con voi', emoji: '🐘', phonetic: '/ˈelɪfənt/' },
            { en: 'Monkey', vi: 'Con khỉ', emoji: '🐒', phonetic: '/ˈmʌŋki/' },
            { en: 'Bear', vi: 'Con gấu', emoji: '🐻', phonetic: '/ber/' },
            { en: 'Giraffe', vi: 'Hươu cao cổ', emoji: '🦒', phonetic: '/dʒɪˈræf/' },
            { en: 'Zebra', vi: 'Ngựa vằn', emoji: '🦓', phonetic: '/ˈziːbrə/' },
            { en: 'Panda', vi: 'Gấu trúc', emoji: '🐼', phonetic: '/ˈpændə/' },
            { en: 'Fox', vi: 'Con cáo', emoji: '🦊', phonetic: '/fɒks/' },
            { en: 'Wolf', vi: 'Con sói', emoji: '🐺', phonetic: '/wʊlf/' },
        ]
    },
    sea_animals: {
        name: 'Động vật biển',
        level: 3,
        month: 9,
        words: [
            { en: 'Whale', vi: 'Cá voi', emoji: '🐳', phonetic: '/weɪl/' },
            { en: 'Shark', vi: 'Cá mập', emoji: '🦈', phonetic: '/ʃɑːrk/' },
            { en: 'Dolphin', vi: 'Cá heo', emoji: '🐬', phonetic: '/ˈdɒlfɪn/' },
            { en: 'Octopus', vi: 'Bạch tuộc', emoji: '🐙', phonetic: '/ˈɒktəpəs/' },
            { en: 'Crab', vi: 'Con cua', emoji: '🦀', phonetic: '/kræb/' },
            { en: 'Jellyfish', vi: 'Sứa', emoji: '🪼', phonetic: '/ˈdʒeliːfɪʃ/' },
            { en: 'Starfish', vi: 'Sao biển', emoji: '⭐', phonetic: '/ˈstɑːrfɪʃ/' },
            { en: 'Seahorse', vi: 'Cá ngựa', emoji: '🐴', phonetic: '/ˈsiːhɔːrs/' },
            { en: 'Shrimp', vi: 'Con tôm', emoji: '🦐', phonetic: '/ʃrɪmp/' },
            { en: 'Seal', vi: 'Hải cẩu', emoji: '🦭', phonetic: '/siːl/' },
        ]
    },
    insects: {
        name: 'Côn trùng',
        level: 3,
        month: 9,
        words: [
            { en: 'Butterfly', vi: 'Con bướm', emoji: '🦋', phonetic: '/ˈbʌtərflaɪ/' },
            { en: 'Bee', vi: 'Con ong', emoji: '🐝', phonetic: '/biː/' },
            { en: 'Ant', vi: 'Con kiến', emoji: '🐜', phonetic: '/ænt/' },
            { en: 'Spider', vi: 'Con nhện', emoji: '🕷️', phonetic: '/ˈspaɪdər/' },
            { en: 'Ladybug', vi: 'Bọ rùa', emoji: '🐞', phonetic: '/ˈleɪdibʌɡ/' },
            { en: 'Snail', vi: 'Con ốc sên', emoji: '🐌', phonetic: '/sneɪl/' },
            { en: 'Worm', vi: 'Con sâu', emoji: '🪱', phonetic: '/wɜːrm/' },
            { en: 'Fly', vi: 'Con ruồi', emoji: '🪰', phonetic: '/flaɪ/' },
            { en: 'Mosquito', vi: 'Con muỗi', emoji: '🦟', phonetic: '/məˈskiːtoʊ/' },
            { en: 'Frog', vi: 'Con ếch', emoji: '🐸', phonetic: '/frɒɡ/' },
        ]
    },

    // === THÁNG 10 ===
    days_week: {
        name: 'Ngày trong tuần',
        level: 3,
        month: 10,
        words: [
            { en: 'Monday', vi: 'Thứ Hai', emoji: '📅', phonetic: '/ˈmʌndeɪ/' },
            { en: 'Tuesday', vi: 'Thứ Ba', emoji: '📅', phonetic: '/ˈtuːzdeɪ/' },
            { en: 'Wednesday', vi: 'Thứ Tư', emoji: '📅', phonetic: '/ˈwenzdeɪ/' },
            { en: 'Thursday', vi: 'Thứ Năm', emoji: '📅', phonetic: '/ˈθɜːrzdeɪ/' },
            { en: 'Friday', vi: 'Thứ Sáu', emoji: '📅', phonetic: '/ˈfraɪdeɪ/' },
            { en: 'Saturday', vi: 'Thứ Bảy', emoji: '📅', phonetic: '/ˈsætərdeɪ/' },
            { en: 'Sunday', vi: 'Chủ Nhật', emoji: '📅', phonetic: '/ˈsʌndeɪ/' },
            { en: 'Today', vi: 'Hôm nay', emoji: '📌', phonetic: '/təˈdeɪ/' },
            { en: 'Tomorrow', vi: 'Ngày mai', emoji: '➡️', phonetic: '/təˈmɒroʊ/' },
            { en: 'Yesterday', vi: 'Hôm qua', emoji: '⬅️', phonetic: '/ˈjestərdeɪ/' },
        ]
    },
    months_year: {
        name: 'Tháng trong năm',
        level: 3,
        month: 10,
        words: [
            { en: 'January', vi: 'Tháng Một', emoji: '❄️', phonetic: '/ˈdʒænjueri/' },
            { en: 'February', vi: 'Tháng Hai', emoji: '💕', phonetic: '/ˈfebrueri/' },
            { en: 'March', vi: 'Tháng Ba', emoji: '🌷', phonetic: '/mɑːrtʃ/' },
            { en: 'April', vi: 'Tháng Tư', emoji: '🌸', phonetic: '/ˈeɪprəl/' },
            { en: 'May', vi: 'Tháng Năm', emoji: '🌺', phonetic: '/meɪ/' },
            { en: 'June', vi: 'Tháng Sáu', emoji: '☀️', phonetic: '/dʒuːn/' },
            { en: 'July', vi: 'Tháng Bảy', emoji: '🌻', phonetic: '/dʒuˈlaɪ/' },
            { en: 'August', vi: 'Tháng Tám', emoji: '🏖️', phonetic: '/ˈɔːɡəst/' },
            { en: 'September', vi: 'Tháng Chín', emoji: '🍂', phonetic: '/sepˈtembər/' },
            { en: 'October', vi: 'Tháng Mười', emoji: '🎃', phonetic: '/ɒkˈtoʊbər/' },
            { en: 'November', vi: 'Tháng Mười Một', emoji: '🍁', phonetic: '/noʊˈvembər/' },
            { en: 'December', vi: 'Tháng Mười Hai', emoji: '🎄', phonetic: '/dɪˈsembər/' },
        ]
    },
    time: {
        name: 'Thời gian',
        level: 3,
        month: 10,
        words: [
            { en: 'Morning', vi: 'Buổi sáng', emoji: '🌅', phonetic: '/ˈmɔːrnɪŋ/' },
            { en: 'Afternoon', vi: 'Buổi chiều', emoji: '☀️', phonetic: '/ˌæftərˈnuːn/' },
            { en: 'Evening', vi: 'Buổi tối', emoji: '🌆', phonetic: '/ˈiːvnɪŋ/' },
            { en: 'Night', vi: 'Ban đêm', emoji: '🌙', phonetic: '/naɪt/' },
            { en: 'Day', vi: 'Ngày', emoji: '☀️', phonetic: '/deɪ/' },
            { en: 'Week', vi: 'Tuần', emoji: '📅', phonetic: '/wiːk/' },
            { en: 'Month', vi: 'Tháng', emoji: '📆', phonetic: '/mʌnθ/' },
            { en: 'Year', vi: 'Năm', emoji: '🗓️', phonetic: '/jɪr/' },
            { en: 'Hour', vi: 'Giờ', emoji: '🕐', phonetic: '/aʊər/' },
            { en: 'Minute', vi: 'Phút', emoji: '⏱️', phonetic: '/ˈmɪnɪt/' },
        ]
    },

    // === THÁNG 11 ===
    countries: {
        name: 'Quốc gia',
        level: 3,
        month: 11,
        words: [
            { en: 'Vietnam', vi: 'Việt Nam', emoji: '🇻🇳', phonetic: '/ˌviːetˈnæm/' },
            { en: 'America', vi: 'Nước Mỹ', emoji: '🇺🇸', phonetic: '/əˈmerɪkə/' },
            { en: 'England', vi: 'Nước Anh', emoji: '🇬🇧', phonetic: '/ˈɪŋɡlənd/' },
            { en: 'Japan', vi: 'Nhật Bản', emoji: '🇯🇵', phonetic: '/dʒəˈpæn/' },
            { en: 'Korea', vi: 'Hàn Quốc', emoji: '🇰🇷', phonetic: '/kəˈriːə/' },
            { en: 'China', vi: 'Trung Quốc', emoji: '🇨🇳', phonetic: '/ˈtʃaɪnə/' },
            { en: 'France', vi: 'Nước Pháp', emoji: '🇫🇷', phonetic: '/fræns/' },
            { en: 'Thailand', vi: 'Thái Lan', emoji: '🇹🇭', phonetic: '/ˈtaɪlænd/' },
            { en: 'Australia', vi: 'Úc', emoji: '🇦🇺', phonetic: '/ɒˈstreɪliə/' },
            { en: 'India', vi: 'Ấn Độ', emoji: '🇮🇳', phonetic: '/ˈɪndiə/' },
        ]
    },
    festivals: {
        name: 'Lễ hội',
        level: 3,
        month: 11,
        words: [
            { en: 'Birthday', vi: 'Sinh nhật', emoji: '🎂', phonetic: '/ˈbɜːrθdeɪ/' },
            { en: 'Christmas', vi: 'Giáng sinh', emoji: '🎄', phonetic: '/ˈkrɪsməs/' },
            { en: 'New Year', vi: 'Năm mới', emoji: '🎆', phonetic: '/njuː jɪr/' },
            { en: 'Halloween', vi: 'Lễ Halloween', emoji: '🎃', phonetic: '/ˌhæloʊˈiːn/' },
            { en: 'Easter', vi: 'Lễ Phục Sinh', emoji: '🐣', phonetic: '/ˈiːstər/' },
            { en: 'Party', vi: 'Bữa tiệc', emoji: '🎉', phonetic: '/ˈpɑːrti/' },
            { en: 'Gift', vi: 'Quà tặng', emoji: '🎁', phonetic: '/ɡɪft/' },
            { en: 'Candle', vi: 'Nến', emoji: '🕯️', phonetic: '/ˈkændəl/' },
            { en: 'Fireworks', vi: 'Pháo hoa', emoji: '🎆', phonetic: '/ˈfaɪərwɜːrks/' },
            { en: 'Lantern', vi: 'Đèn lồng', emoji: '🏮', phonetic: '/ˈlæntərn/' },
        ]
    },
    music: {
        name: 'Âm nhạc',
        level: 3,
        month: 11,
        words: [
            { en: 'Music', vi: 'Âm nhạc', emoji: '🎵', phonetic: '/ˈmjuːzɪk/' },
            { en: 'Song', vi: 'Bài hát', emoji: '🎶', phonetic: '/sɒŋ/' },
            { en: 'Piano', vi: 'Đàn piano', emoji: '🎹', phonetic: '/piˈænoʊ/' },
            { en: 'Guitar', vi: 'Đàn guitar', emoji: '🎸', phonetic: '/ɡɪˈtɑːr/' },
            { en: 'Drum', vi: 'Trống', emoji: '🥁', phonetic: '/drʌm/' },
            { en: 'Violin', vi: 'Vĩ cầm', emoji: '🎻', phonetic: '/ˌvaɪəˈlɪn/' },
            { en: 'Flute', vi: 'Sáo', emoji: '🎶', phonetic: '/fluːt/' },
            { en: 'Dance', vi: 'Nhảy múa', emoji: '💃', phonetic: '/dæns/' },
            { en: 'Concert', vi: 'Buổi hòa nhạc', emoji: '🎤', phonetic: '/ˈkɒnsərt/' },
            { en: 'Band', vi: 'Ban nhạc', emoji: '🎸', phonetic: '/bænd/' },
        ]
    },
};

// ============================================
// PHONICS ĐẦY ĐỦ 26 CHỮ CÁI + BLENDS
// ============================================
GRADE_DATA[1].phonics = [
    { letter: 'A', sound: '/æ/', words: [
        { word: 'Apple', highlight: 'A', emoji: '🍎' },
        { word: 'Ant', highlight: 'A', emoji: '🐜' },
        { word: 'Arm', highlight: 'A', emoji: '💪' }
    ]},
    { letter: 'B', sound: '/b/', words: [
        { word: 'Ball', highlight: 'B', emoji: '⚽' },
        { word: 'Bear', highlight: 'B', emoji: '🐻' },
        { word: 'Banana', highlight: 'B', emoji: '🍌' }
    ]},
    { letter: 'C', sound: '/k/', words: [
        { word: 'Cat', highlight: 'C', emoji: '🐱' },
        { word: 'Car', highlight: 'C', emoji: '🚗' },
        { word: 'Cup', highlight: 'C', emoji: '☕' }
    ]},
    { letter: 'D', sound: '/d/', words: [
        { word: 'Dog', highlight: 'D', emoji: '🐶' },
        { word: 'Duck', highlight: 'D', emoji: '🦆' },
        { word: 'Door', highlight: 'D', emoji: '🚪' }
    ]},
    { letter: 'E', sound: '/e/', words: [
        { word: 'Elephant', highlight: 'E', emoji: '🐘' },
        { word: 'Egg', highlight: 'E', emoji: '🥚' },
        { word: 'Ear', highlight: 'E', emoji: '👂' }
    ]},
    { letter: 'F', sound: '/f/', words: [
        { word: 'Fish', highlight: 'F', emoji: '🐟' },
        { word: 'Flower', highlight: 'F', emoji: '🌸' },
        { word: 'Fox', highlight: 'F', emoji: '🦊' }
    ]},
    { letter: 'G', sound: '/g/', words: [
        { word: 'Grape', highlight: 'G', emoji: '🍇' },
        { word: 'Goat', highlight: 'G', emoji: '🐐' },
        { word: 'Gift', highlight: 'G', emoji: '🎁' }
    ]},
    { letter: 'H', sound: '/h/', words: [
        { word: 'Hat', highlight: 'H', emoji: '🧢' },
        { word: 'Horse', highlight: 'H', emoji: '🐴' },
        { word: 'House', highlight: 'H', emoji: '🏠' }
    ]},
    { letter: 'I', sound: '/ɪ/', words: [
        { word: 'Ice cream', highlight: 'I', emoji: '🍦' },
        { word: 'Igloo', highlight: 'I', emoji: '🏠' },
        { word: 'Insect', highlight: 'I', emoji: '🐛' }
    ]},
    { letter: 'J', sound: '/dʒ/', words: [
        { word: 'Juice', highlight: 'J', emoji: '🧃' },
        { word: 'Jelly', highlight: 'J', emoji: '🍮' },
        { word: 'Jump', highlight: 'J', emoji: '🤸' }
    ]},
    { letter: 'K', sound: '/k/', words: [
        { word: 'Kite', highlight: 'K', emoji: '🪁' },
        { word: 'King', highlight: 'K', emoji: '👑' },
        { word: 'Key', highlight: 'K', emoji: '🔑' }
    ]},
    { letter: 'L', sound: '/l/', words: [
        { word: 'Lion', highlight: 'L', emoji: '🦁' },
        { word: 'Lamp', highlight: 'L', emoji: '💡' },
        { word: 'Lemon', highlight: 'L', emoji: '🍋' }
    ]},
    { letter: 'M', sound: '/m/', words: [
        { word: 'Moon', highlight: 'M', emoji: '🌙' },
        { word: 'Monkey', highlight: 'M', emoji: '🐒' },
        { word: 'Milk', highlight: 'M', emoji: '🥛' }
    ]},
    { letter: 'N', sound: '/n/', words: [
        { word: 'Nose', highlight: 'N', emoji: '👃' },
        { word: 'Nest', highlight: 'N', emoji: '🪺' },
        { word: 'Nut', highlight: 'N', emoji: '🥜' }
    ]},
    { letter: 'O', sound: '/ɒ/', words: [
        { word: 'Orange', highlight: 'O', emoji: '🍊' },
        { word: 'Owl', highlight: 'O', emoji: '🦉' },
        { word: 'Octopus', highlight: 'O', emoji: '🐙' }
    ]},
    { letter: 'P', sound: '/p/', words: [
        { word: 'Pig', highlight: 'P', emoji: '🐷' },
        { word: 'Panda', highlight: 'P', emoji: '🐼' },
        { word: 'Pizza', highlight: 'P', emoji: '🍕' }
    ]},
    { letter: 'Q', sound: '/kw/', words: [
        { word: 'Queen', highlight: 'Q', emoji: '👸' },
        { word: 'Question', highlight: 'Q', emoji: '❓' },
        { word: 'Quilt', highlight: 'Q', emoji: '🛏️' }
    ]},
    { letter: 'R', sound: '/r/', words: [
        { word: 'Rabbit', highlight: 'R', emoji: '🐰' },
        { word: 'Rain', highlight: 'R', emoji: '🌧️' },
        { word: 'Robot', highlight: 'R', emoji: '🤖' }
    ]},
    { letter: 'S', sound: '/s/', words: [
        { word: 'Sun', highlight: 'S', emoji: '☀️' },
        { word: 'Star', highlight: 'S', emoji: '⭐' },
        { word: 'Snake', highlight: 'S', emoji: '🐍' }
    ]},
    { letter: 'T', sound: '/t/', words: [
        { word: 'Tiger', highlight: 'T', emoji: '🐯' },
        { word: 'Tree', highlight: 'T', emoji: '🌳' },
        { word: 'Train', highlight: 'T', emoji: '🚂' }
    ]},
    { letter: 'U', sound: '/ʌ/', words: [
        { word: 'Umbrella', highlight: 'U', emoji: '☂️' },
        { word: 'Unicorn', highlight: 'U', emoji: '🦄' },
        { word: 'Up', highlight: 'U', emoji: '⬆️' }
    ]},
    { letter: 'V', sound: '/v/', words: [
        { word: 'Violin', highlight: 'V', emoji: '🎻' },
        { word: 'Van', highlight: 'V', emoji: '🚐' },
        { word: 'Vase', highlight: 'V', emoji: '🏺' }
    ]},
    { letter: 'W', sound: '/w/', words: [
        { word: 'Water', highlight: 'W', emoji: '💧' },
        { word: 'Whale', highlight: 'W', emoji: '🐳' },
        { word: 'Wind', highlight: 'W', emoji: '💨' }
    ]},
    { letter: 'X', sound: '/ks/', words: [
        { word: 'Fox', highlight: 'x', emoji: '🦊' },
        { word: 'Box', highlight: 'x', emoji: '📦' },
        { word: 'Six', highlight: 'x', emoji: '6️⃣' }
    ]},
    { letter: 'Y', sound: '/j/', words: [
        { word: 'Yellow', highlight: 'Y', emoji: '🟡' },
        { word: 'Yo-yo', highlight: 'Y', emoji: '🪀' },
        { word: 'Yogurt', highlight: 'Y', emoji: '🥛' }
    ]},
    { letter: 'Z', sound: '/z/', words: [
        { word: 'Zebra', highlight: 'Z', emoji: '🦓' },
        { word: 'Zoo', highlight: 'Z', emoji: '🦁' },
        { word: 'Zero', highlight: 'Z', emoji: '0️⃣' }
    ]},
    // Blends
    { letter: 'SH', sound: '/ʃ/', words: [
        { word: 'Ship', highlight: 'Sh', emoji: '🚢' },
        { word: 'Sheep', highlight: 'Sh', emoji: '🐑' },
        { word: 'Shoe', highlight: 'Sh', emoji: '👟' }
    ]},
    { letter: 'CH', sound: '/tʃ/', words: [
        { word: 'Chair', highlight: 'Ch', emoji: '💺' },
        { word: 'Cheese', highlight: 'Ch', emoji: '🧀' },
        { word: 'Chicken', highlight: 'Ch', emoji: '🐔' }
    ]},
    { letter: 'TH', sound: '/θ/', words: [
        { word: 'Three', highlight: 'Th', emoji: '3️⃣' },
        { word: 'Thumb', highlight: 'Th', emoji: '👍' },
        { word: 'Think', highlight: 'Th', emoji: '🤔' }
    ]},
    { letter: 'PH', sound: '/f/', words: [
        { word: 'Phone', highlight: 'Ph', emoji: '📱' },
        { word: 'Photo', highlight: 'Ph', emoji: '📷' },
        { word: 'Elephant', highlight: 'ph', emoji: '🐘' }
    ]},
];

// ============================================
// CÂU MẪU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[1].sentences = {
    level1: [
        { sentence: ['I', 'like', 'apples'], emoji: '🍎', vi: 'Tôi thích táo', extra: ['dog', 'is'] },
        { sentence: ['The', 'cat', 'is', 'big'], emoji: '🐱', vi: 'Con mèo to', extra: ['like', 'we'] },
        { sentence: ['I', 'have', 'a', 'dog'], emoji: '🐶', vi: 'Tôi có một con chó', extra: ['is', 'the'] },
        { sentence: ['She', 'is', 'happy'], emoji: '😊', vi: 'Cô ấy vui', extra: ['cat', 'a'] },
        { sentence: ['I', 'can', 'run'], emoji: '🏃', vi: 'Tôi có thể chạy', extra: ['the', 'big'] },
        { sentence: ['This', 'is', 'my', 'book'], emoji: '📖', vi: 'Đây là quyển sách của tôi', extra: ['run', 'she'] },
        { sentence: ['The', 'sun', 'is', 'yellow'], emoji: '☀️', vi: 'Mặt trời màu vàng', extra: ['can', 'a'] },
        { sentence: ['I', 'see', 'a', 'bird'], emoji: '🐦', vi: 'Tôi thấy một con chim', extra: ['big', 'have'] },
        { sentence: ['He', 'is', 'my', 'dad'], emoji: '👨', vi: 'Anh ấy là bố tôi', extra: ['she', 'like'] },
        { sentence: ['I', 'love', 'mom'], emoji: '👩', vi: 'Con yêu mẹ', extra: ['the', 'is'] },
    ],
    level2: [
        { sentence: ['The', 'dog', 'is', 'running', 'fast'], emoji: '🐶', vi: 'Con chó đang chạy nhanh', extra: ['slow', 'cat'] },
        { sentence: ['I', 'want', 'to', 'eat', 'cake'], emoji: '🎂', vi: 'Tôi muốn ăn bánh', extra: ['is', 'she'] },
        { sentence: ['She', 'can', 'play', 'the', 'piano'], emoji: '🎹', vi: 'Cô ấy chơi được đàn piano', extra: ['run', 'he'] },
        { sentence: ['We', 'go', 'to', 'school', 'today'], emoji: '🏫', vi: 'Hôm nay chúng tôi đi học', extra: ['is', 'the'] },
        { sentence: ['The', 'bird', 'is', 'in', 'the', 'tree'], emoji: '🌳', vi: 'Con chim ở trên cây', extra: ['on', 'a'] },
        { sentence: ['I', 'like', 'to', 'swim', 'a', 'lot'], emoji: '🏊', vi: 'Tôi rất thích bơi', extra: ['run', 'is'] },
        { sentence: ['My', 'mom', 'is', 'a', 'doctor'], emoji: '👩‍⚕️', vi: 'Mẹ tôi là bác sĩ', extra: ['the', 'he'] },
        { sentence: ['It', 'is', 'very', 'cold', 'today'], emoji: '🥶', vi: 'Hôm nay rất lạnh', extra: ['hot', 'I'] },
    ],
    level3: [
        { sentence: ['The', 'elephant', 'is', 'the', 'biggest', 'animal'], emoji: '🐘', vi: 'Con voi là động vật lớn nhất', extra: ['small', 'a'] },
        { sentence: ['I', 'went', 'to', 'the', 'zoo', 'yesterday'], emoji: '🦁', vi: 'Hôm qua tôi đã đi vườn thú', extra: ['today', 'is'] },
        { sentence: ['She', 'is', 'playing', 'with', 'her', 'friends'], emoji: '👧', vi: 'Cô ấy đang chơi với bạn bè', extra: ['his', 'the'] },
        { sentence: ['We', 'love', 'to', 'learn', 'English'], emoji: '📖', vi: 'Chúng tôi thích học tiếng Anh', extra: ['is', 'a'] },
        { sentence: ['The', 'butterfly', 'is', 'very', 'beautiful'], emoji: '🦋', vi: 'Con bướm rất đẹp', extra: ['ugly', 'a'] },
        { sentence: ['My', 'birthday', 'is', 'in', 'December'], emoji: '🎂', vi: 'Sinh nhật tôi vào tháng Mười Hai', extra: ['on', 'the'] },
    ],
};

// ============================================
// SPELLING THEO CẤP ĐỘ
// ============================================
GRADE_DATA[1].spelling = {
    level1: [
        { word: 'CAT', emoji: '🐱', vi: 'Con mèo' },
        { word: 'DOG', emoji: '🐶', vi: 'Con chó' },
        { word: 'SUN', emoji: '☀️', vi: 'Mặt trời' },
        { word: 'RED', emoji: '🔴', vi: 'Màu đỏ' },
        { word: 'EGG', emoji: '🥚', vi: 'Quả trứng' },
        { word: 'HAT', emoji: '🧢', vi: 'Cái mũ' },
        { word: 'CUP', emoji: '☕', vi: 'Cái ly' },
        { word: 'PEN', emoji: '🖊️', vi: 'Cây bút' },
        { word: 'BIG', emoji: '💪', vi: 'To, lớn' },
        { word: 'RUN', emoji: '🏃', vi: 'Chạy' },
        { word: 'MOM', emoji: '👩', vi: 'Mẹ' },
        { word: 'DAD', emoji: '👨', vi: 'Bố' },
        { word: 'BUS', emoji: '🚌', vi: 'Xe buýt' },
        { word: 'BOX', emoji: '📦', vi: 'Hộp' },
        { word: 'BED', emoji: '🛏️', vi: 'Giường' },
    ],
    level2: [
        { word: 'FISH', emoji: '🐟', vi: 'Con cá' },
        { word: 'BIRD', emoji: '🐦', vi: 'Con chim' },
        { word: 'MILK', emoji: '🥛', vi: 'Sữa' },
        { word: 'BLUE', emoji: '🔵', vi: 'Màu xanh' },
        { word: 'CAKE', emoji: '🎂', vi: 'Bánh' },
        { word: 'TREE', emoji: '🌳', vi: 'Cây' },
        { word: 'STAR', emoji: '⭐', vi: 'Ngôi sao' },
        { word: 'MOON', emoji: '🌙', vi: 'Trăng' },
        { word: 'RAIN', emoji: '🌧️', vi: 'Mưa' },
        { word: 'SHIP', emoji: '🚢', vi: 'Tàu' },
        { word: 'BOOK', emoji: '📖', vi: 'Sách' },
        { word: 'HAND', emoji: '✋', vi: 'Bàn tay' },
        { word: 'DUCK', emoji: '🦆', vi: 'Con vịt' },
        { word: 'SING', emoji: '🎤', vi: 'Hát' },
        { word: 'JUMP', emoji: '🤸', vi: 'Nhảy' },
    ],
    level3: [
        { word: 'APPLE', emoji: '🍎', vi: 'Quả táo' },
        { word: 'HAPPY', emoji: '😊', vi: 'Vui vẻ' },
        { word: 'WATER', emoji: '💧', vi: 'Nước' },
        { word: 'HORSE', emoji: '🐴', vi: 'Ngựa' },
        { word: 'TIGER', emoji: '🐯', vi: 'Con hổ' },
        { word: 'TRAIN', emoji: '🚂', vi: 'Tàu hỏa' },
        { word: 'QUEEN', emoji: '👸', vi: 'Nữ hoàng' },
        { word: 'PLANE', emoji: '✈️', vi: 'Máy bay' },
        { word: 'BEACH', emoji: '🏖️', vi: 'Bãi biển' },
        { word: 'SNAKE', emoji: '🐍', vi: 'Con rắn' },
        { word: 'GRAPE', emoji: '🍇', vi: 'Quả nho' },
        { word: 'CHAIR', emoji: '💺', vi: 'Cái ghế' },
        { word: 'SEVEN', emoji: '7️⃣', vi: 'Số bảy' },
        { word: 'DANCE', emoji: '💃', vi: 'Nhảy múa' },
        { word: 'PARTY', emoji: '🎉', vi: 'Bữa tiệc' },
    ],
};

// ============================================
// NGHE HIỂU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[1].listening = {
    level1: [
        { word: 'Cat', options: [{ emoji: '🐱', label: 'Cat' }, { emoji: '🐶', label: 'Dog' }, { emoji: '🐦', label: 'Bird' }, { emoji: '🐟', label: 'Fish' }], correct: 0 },
        { word: 'Apple', options: [{ emoji: '🍌', label: 'Banana' }, { emoji: '🍎', label: 'Apple' }, { emoji: '🍊', label: 'Orange' }, { emoji: '🍇', label: 'Grape' }], correct: 1 },
        { word: 'Dog', options: [{ emoji: '🐰', label: 'Rabbit' }, { emoji: '🐱', label: 'Cat' }, { emoji: '🐶', label: 'Dog' }, { emoji: '🐦', label: 'Bird' }], correct: 2 },
        { word: 'Red', options: [{ emoji: '🔵', label: 'Blue' }, { emoji: '🟢', label: 'Green' }, { emoji: '🟡', label: 'Yellow' }, { emoji: '🔴', label: 'Red' }], correct: 3 },
        { word: 'Mom', options: [{ emoji: '👩', label: 'Mom' }, { emoji: '👨', label: 'Dad' }, { emoji: '👶', label: 'Baby' }, { emoji: '👧', label: 'Girl' }], correct: 0 },
        { word: 'Hand', options: [{ emoji: '👁️', label: 'Eye' }, { emoji: '👂', label: 'Ear' }, { emoji: '✋', label: 'Hand' }, { emoji: '👃', label: 'Nose' }], correct: 2 },
        { word: 'Book', options: [{ emoji: '✏️', label: 'Pencil' }, { emoji: '📖', label: 'Book' }, { emoji: '🖊️', label: 'Pen' }, { emoji: '🎒', label: 'Bag' }], correct: 1 },
        { word: 'Banana', options: [{ emoji: '🍎', label: 'Apple' }, { emoji: '🍊', label: 'Orange' }, { emoji: '🍇', label: 'Grape' }, { emoji: '🍌', label: 'Banana' }], correct: 3 },
    ],
    level2: [
        { word: 'Elephant', options: [{ emoji: '🐘', label: 'Elephant' }, { emoji: '🦁', label: 'Lion' }, { emoji: '🐯', label: 'Tiger' }, { emoji: '🐻', label: 'Bear' }], correct: 0 },
        { word: 'Rain', options: [{ emoji: '☀️', label: 'Sun' }, { emoji: '🌧️', label: 'Rain' }, { emoji: '❄️', label: 'Snow' }, { emoji: '💨', label: 'Wind' }], correct: 1 },
        { word: 'Doctor', options: [{ emoji: '👩‍🏫', label: 'Teacher' }, { emoji: '👮', label: 'Police' }, { emoji: '👨‍⚕️', label: 'Doctor' }, { emoji: '👨‍🍳', label: 'Cook' }], correct: 2 },
        { word: 'Airplane', options: [{ emoji: '🚗', label: 'Car' }, { emoji: '🚌', label: 'Bus' }, { emoji: '🚂', label: 'Train' }, { emoji: '✈️', label: 'Plane' }], correct: 3 },
        { word: 'Happy', options: [{ emoji: '😊', label: 'Happy' }, { emoji: '😢', label: 'Sad' }, { emoji: '😠', label: 'Angry' }, { emoji: '😨', label: 'Scared' }], correct: 0 },
        { word: 'Kitchen', options: [{ emoji: '🛏️', label: 'Bedroom' }, { emoji: '🍳', label: 'Kitchen' }, { emoji: '🛁', label: 'Bathroom' }, { emoji: '🌻', label: 'Garden' }], correct: 1 },
        { word: 'Soccer', options: [{ emoji: '🎾', label: 'Tennis' }, { emoji: '🏀', label: 'Basketball' }, { emoji: '⚽', label: 'Soccer' }, { emoji: '🏊', label: 'Swimming' }], correct: 2 },
        { word: 'Bicycle', options: [{ emoji: '🚗', label: 'Car' }, { emoji: '🚌', label: 'Bus' }, { emoji: '🚂', label: 'Train' }, { emoji: '🚲', label: 'Bike' }], correct: 3 },
    ],
    level3: [
        { word: 'Butterfly', options: [{ emoji: '🦋', label: 'Butterfly' }, { emoji: '🐝', label: 'Bee' }, { emoji: '🐜', label: 'Ant' }, { emoji: '🕷️', label: 'Spider' }], correct: 0 },
        { word: 'Wednesday', options: [{ emoji: '📅', label: 'Monday' }, { emoji: '📅', label: 'Wednesday' }, { emoji: '📅', label: 'Friday' }, { emoji: '📅', label: 'Sunday' }], correct: 1 },
        { word: 'Guitar', options: [{ emoji: '🎹', label: 'Piano' }, { emoji: '🥁', label: 'Drum' }, { emoji: '🎸', label: 'Guitar' }, { emoji: '🎻', label: 'Violin' }], correct: 2 },
        { word: 'December', options: [{ emoji: '🌷', label: 'March' }, { emoji: '☀️', label: 'June' }, { emoji: '🍂', label: 'September' }, { emoji: '🎄', label: 'December' }], correct: 3 },
        { word: 'Dolphin', options: [{ emoji: '🐬', label: 'Dolphin' }, { emoji: '🦈', label: 'Shark' }, { emoji: '🐳', label: 'Whale' }, { emoji: '🐙', label: 'Octopus' }], correct: 0 },
        { word: 'Christmas', options: [{ emoji: '🎃', label: 'Halloween' }, { emoji: '🎄', label: 'Christmas' }, { emoji: '🐣', label: 'Easter' }, { emoji: '🎆', label: 'New Year' }], correct: 1 },
        { word: 'Vietnam', options: [{ emoji: '🇯🇵', label: 'Japan' }, { emoji: '🇨🇳', label: 'China' }, { emoji: '🇻🇳', label: 'Vietnam' }, { emoji: '🇰🇷', label: 'Korea' }], correct: 2 },
        { word: 'Australia', options: [{ emoji: '🇬🇧', label: 'England' }, { emoji: '🇫🇷', label: 'France' }, { emoji: '🇮🇳', label: 'India' }, { emoji: '🇦🇺', label: 'Australia' }], correct: 3 },
    ],
};
