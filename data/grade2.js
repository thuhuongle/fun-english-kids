// ============================================
// LỚP 2 - GIÁO TRÌNH 12 THÁNG - 3 CẤP ĐỘ
// ============================================
GRADE_DATA[2] = {};
GRADE_DATA[2].info = {
    levels: [
        { id: 1, name: 'Beginner', nameVi: 'Người mới bắt đầu', months: [1,2,3,4], color: '#4ECDC4', icon: '🌱' },
        { id: 2, name: 'Elementary', nameVi: 'Cơ bản', months: [5,6,7,8], color: '#A855F7', icon: '🌿' },
        { id: 3, name: 'Pre-Intermediate', nameVi: 'Nâng cao', months: [9,10,11,12], color: '#FF6B9D', icon: '🌳' },
    ],
    months: [
        { month: 1, title: 'Rau củ & Đồ uống', topics: ['vegetables', 'drinks', 'classroom_actions'] },
        { month: 2, title: 'Chăm sóc thú cưng', topics: ['pet_care', 'colors_advanced', 'numbers_11_20'] },
        { month: 3, title: 'Tính từ & Giới từ', topics: ['adjectives_basic', 'prepositions'] },
        { month: 4, title: 'Ôn tập cấp 1', topics: ['review_beginner'] },
        { month: 5, title: 'Bốn mùa', topics: ['seasons', 'hobbies', 'holidays'] },
        { month: 6, title: 'Mua sắm & Nấu ăn', topics: ['shopping', 'cooking'] },
        { month: 7, title: 'Ngoài trời', topics: ['garden', 'playground', 'directions'] },
        { month: 8, title: 'Ôn tập cấp 2', topics: ['review_elementary'] },
        { month: 9, title: 'Vũ trụ & Đại dương', topics: ['space', 'ocean_life'] },
        { month: 10, title: 'Khủng long & Cổ tích', topics: ['dinosaurs', 'fairy_tales'] },
        { month: 11, title: 'Phát minh & Môi trường', topics: ['inventions', 'environment'] },
        { month: 12, title: 'Nghề nghiệp & Du lịch', topics: ['professions_advanced', 'travel'] },
    ]
};

// ============================================
// TỪ VỰNG - 250+ từ chia theo chủ đề
// ============================================
GRADE_DATA[2].vocab = {
    // === THÁNG 1 ===
    vegetables: {
        name: 'Rau củ',
        level: 1,
        month: 1,
        words: [
            { en: 'Carrot', vi: 'Cà rốt', emoji: '🥕', phonetic: '/ˈkærət/' },
            { en: 'Tomato', vi: 'Cà chua', emoji: '🍅', phonetic: '/təˈmeɪtoʊ/' },
            { en: 'Potato', vi: 'Khoai tây', emoji: '🥔', phonetic: '/pəˈteɪtoʊ/' },
            { en: 'Onion', vi: 'Hành tây', emoji: '🧅', phonetic: '/ˈʌnjən/' },
            { en: 'Corn', vi: 'Ngô / Bắp', emoji: '🌽', phonetic: '/kɔːrn/' },
            { en: 'Pumpkin', vi: 'Bí ngô', emoji: '🎃', phonetic: '/ˈpʌmpkɪn/' },
            { en: 'Cucumber', vi: 'Dưa chuột', emoji: '🥒', phonetic: '/ˈkjuːkʌmbər/' },
            { en: 'Pepper', vi: 'Ớt', emoji: '🌶️', phonetic: '/ˈpepər/' },
            { en: 'Cabbage', vi: 'Bắp cải', emoji: '🥬', phonetic: '/ˈkæbɪdʒ/' },
            { en: 'Mushroom', vi: 'Nấm', emoji: '🍄', phonetic: '/ˈmʌʃruːm/' },
        ]
    },
    drinks: {
        name: 'Đồ uống',
        level: 1,
        month: 1,
        words: [
            { en: 'Water', vi: 'Nước lọc', emoji: '💧', phonetic: '/ˈwɔːtər/' },
            { en: 'Juice', vi: 'Nước ép', emoji: '🧃', phonetic: '/dʒuːs/' },
            { en: 'Milk', vi: 'Sữa', emoji: '🥛', phonetic: '/mɪlk/' },
            { en: 'Tea', vi: 'Trà', emoji: '🍵', phonetic: '/tiː/' },
            { en: 'Smoothie', vi: 'Sinh tố', emoji: '🥤', phonetic: '/ˈsmuːði/' },
            { en: 'Lemonade', vi: 'Nước chanh', emoji: '🍋', phonetic: '/ˌleməˈneɪd/' },
            { en: 'Hot chocolate', vi: 'Sô cô la nóng', emoji: '☕', phonetic: '/hɒt ˈtʃɒklət/' },
            { en: 'Coconut water', vi: 'Nước dừa', emoji: '🥥', phonetic: '/ˈkoʊkənʌt ˈwɔːtər/' },
            { en: 'Soda', vi: 'Nước ngọt có ga', emoji: '🥤', phonetic: '/ˈsoʊdə/' },
            { en: 'Milkshake', vi: 'Sữa lắc', emoji: '🥛', phonetic: '/ˈmɪlkʃeɪk/' },
        ]
    },
    classroom_actions: {
        name: 'Hoạt động lớp học',
        level: 1,
        month: 1,
        words: [
            { en: 'Read', vi: 'Đọc', emoji: '📖', phonetic: '/riːd/' },
            { en: 'Write', vi: 'Viết', emoji: '✍️', phonetic: '/raɪt/' },
            { en: 'Listen', vi: 'Nghe', emoji: '👂', phonetic: '/ˈlɪsən/' },
            { en: 'Speak', vi: 'Nói', emoji: '🗣️', phonetic: '/spiːk/' },
            { en: 'Draw', vi: 'Vẽ', emoji: '🎨', phonetic: '/drɔː/' },
            { en: 'Count', vi: 'Đếm', emoji: '🔢', phonetic: '/kaʊnt/' },
            { en: 'Sing', vi: 'Hát', emoji: '🎤', phonetic: '/sɪŋ/' },
            { en: 'Open', vi: 'Mở', emoji: '📂', phonetic: '/ˈoʊpən/' },
            { en: 'Close', vi: 'Đóng', emoji: '📁', phonetic: '/kloʊz/' },
            { en: 'Raise hand', vi: 'Giơ tay', emoji: '✋', phonetic: '/reɪz hænd/' },
        ]
    },

    // === THÁNG 2 ===
    pet_care: {
        name: 'Chăm sóc thú cưng',
        level: 1,
        month: 2,
        words: [
            { en: 'Feed', vi: 'Cho ăn', emoji: '🍽️', phonetic: '/fiːd/' },
            { en: 'Walk', vi: 'Dắt đi dạo', emoji: '🚶', phonetic: '/wɔːk/' },
            { en: 'Bath', vi: 'Tắm', emoji: '🛁', phonetic: '/bæθ/' },
            { en: 'Pet', vi: 'Vuốt ve', emoji: '🤲', phonetic: '/pet/' },
            { en: 'Cage', vi: 'Lồng', emoji: '🏠', phonetic: '/keɪdʒ/' },
            { en: 'Bowl', vi: 'Bát ăn', emoji: '🥣', phonetic: '/boʊl/' },
            { en: 'Leash', vi: 'Dây xích', emoji: '🔗', phonetic: '/liːʃ/' },
            { en: 'Collar', vi: 'Vòng cổ', emoji: '⭕', phonetic: '/ˈkɒlər/' },
            { en: 'Toy', vi: 'Đồ chơi', emoji: '🧸', phonetic: '/tɔɪ/' },
            { en: 'Vet', vi: 'Bác sĩ thú y', emoji: '👨‍⚕️', phonetic: '/vet/' },
        ]
    },
    colors_advanced: {
        name: 'Màu sắc nâng cao',
        level: 1,
        month: 2,
        words: [
            { en: 'Gold', vi: 'Màu vàng kim', emoji: '🥇', phonetic: '/ɡoʊld/' },
            { en: 'Silver', vi: 'Màu bạc', emoji: '🥈', phonetic: '/ˈsɪlvər/' },
            { en: 'Cream', vi: 'Màu kem', emoji: '🍦', phonetic: '/kriːm/' },
            { en: 'Beige', vi: 'Màu be', emoji: '🏖️', phonetic: '/beɪʒ/' },
            { en: 'Turquoise', vi: 'Màu ngọc lam', emoji: '💎', phonetic: '/ˈtɜːrkwɔɪz/' },
            { en: 'Maroon', vi: 'Màu nâu đỏ', emoji: '🟤', phonetic: '/məˈruːn/' },
            { en: 'Navy', vi: 'Màu xanh đậm', emoji: '🔵', phonetic: '/ˈneɪvi/' },
            { en: 'Coral', vi: 'Màu san hô', emoji: '🪸', phonetic: '/ˈkɔːrəl/' },
            { en: 'Lavender', vi: 'Màu oải hương', emoji: '💜', phonetic: '/ˈlævəndər/' },
            { en: 'Peach', vi: 'Màu đào', emoji: '🍑', phonetic: '/piːtʃ/' },
        ]
    },
    numbers_11_20: {
        name: 'Số 11 đến 20',
        level: 1,
        month: 2,
        words: [
            { en: 'Eleven', vi: 'Mười một', emoji: '1️⃣1️⃣', phonetic: '/ɪˈlevən/' },
            { en: 'Twelve', vi: 'Mười hai', emoji: '1️⃣2️⃣', phonetic: '/twelv/' },
            { en: 'Thirteen', vi: 'Mười ba', emoji: '1️⃣3️⃣', phonetic: '/ˌθɜːrˈtiːn/' },
            { en: 'Fourteen', vi: 'Mười bốn', emoji: '1️⃣4️⃣', phonetic: '/ˌfɔːrˈtiːn/' },
            { en: 'Fifteen', vi: 'Mười lăm', emoji: '1️⃣5️⃣', phonetic: '/ˌfɪfˈtiːn/' },
            { en: 'Sixteen', vi: 'Mười sáu', emoji: '1️⃣6️⃣', phonetic: '/ˌsɪksˈtiːn/' },
            { en: 'Seventeen', vi: 'Mười bảy', emoji: '1️⃣7️⃣', phonetic: '/ˌsevənˈtiːn/' },
            { en: 'Eighteen', vi: 'Mười tám', emoji: '1️⃣8️⃣', phonetic: '/ˌeɪˈtiːn/' },
            { en: 'Nineteen', vi: 'Mười chín', emoji: '1️⃣9️⃣', phonetic: '/ˌnaɪnˈtiːn/' },
            { en: 'Twenty', vi: 'Hai mươi', emoji: '2️⃣0️⃣', phonetic: '/ˈtwenti/' },
        ]
    },

    // === THÁNG 3 ===
    adjectives_basic: {
        name: 'Tính từ cơ bản',
        level: 1,
        month: 3,
        words: [
            { en: 'Tall', vi: 'Cao', emoji: '📏', phonetic: '/tɔːl/' },
            { en: 'Short', vi: 'Thấp / Ngắn', emoji: '📐', phonetic: '/ʃɔːrt/' },
            { en: 'Fast', vi: 'Nhanh', emoji: '⚡', phonetic: '/fæst/' },
            { en: 'Slow', vi: 'Chậm', emoji: '🐌', phonetic: '/sloʊ/' },
            { en: 'Strong', vi: 'Khỏe', emoji: '💪', phonetic: '/strɒŋ/' },
            { en: 'Weak', vi: 'Yếu', emoji: '😓', phonetic: '/wiːk/' },
            { en: 'Heavy', vi: 'Nặng', emoji: '🏋️', phonetic: '/ˈhevi/' },
            { en: 'Light', vi: 'Nhẹ', emoji: '🪶', phonetic: '/laɪt/' },
            { en: 'Clean', vi: 'Sạch', emoji: '✨', phonetic: '/kliːn/' },
            { en: 'Dirty', vi: 'Bẩn', emoji: '🤢', phonetic: '/ˈdɜːrti/' },
        ]
    },
    prepositions: {
        name: 'Giới từ',
        level: 1,
        month: 3,
        words: [
            { en: 'In', vi: 'Trong', emoji: '📦', phonetic: '/ɪn/' },
            { en: 'On', vi: 'Trên', emoji: '⬆️', phonetic: '/ɒn/' },
            { en: 'Under', vi: 'Dưới', emoji: '⬇️', phonetic: '/ˈʌndər/' },
            { en: 'Behind', vi: 'Phía sau', emoji: '🔙', phonetic: '/bɪˈhaɪnd/' },
            { en: 'Next to', vi: 'Bên cạnh', emoji: '↔️', phonetic: '/nekst tuː/' },
            { en: 'Between', vi: 'Ở giữa', emoji: '↕️', phonetic: '/bɪˈtwiːn/' },
            { en: 'Above', vi: 'Phía trên', emoji: '☝️', phonetic: '/əˈbʌv/' },
            { en: 'Below', vi: 'Phía dưới', emoji: '👇', phonetic: '/bɪˈloʊ/' },
            { en: 'Inside', vi: 'Bên trong', emoji: '🏠', phonetic: '/ˌɪnˈsaɪd/' },
            { en: 'Outside', vi: 'Bên ngoài', emoji: '🌳', phonetic: '/ˌaʊtˈsaɪd/' },
        ]
    },

    // === THÁNG 5 ===
    seasons: {
        name: 'Bốn mùa',
        level: 2,
        month: 5,
        words: [
            { en: 'Spring', vi: 'Mùa xuân', emoji: '🌸', phonetic: '/sprɪŋ/' },
            { en: 'Summer', vi: 'Mùa hè', emoji: '☀️', phonetic: '/ˈsʌmər/' },
            { en: 'Autumn', vi: 'Mùa thu', emoji: '🍂', phonetic: '/ˈɔːtəm/' },
            { en: 'Winter', vi: 'Mùa đông', emoji: '❄️', phonetic: '/ˈwɪntər/' },
            { en: 'Warm', vi: 'Ấm áp', emoji: '🌤️', phonetic: '/wɔːrm/' },
            { en: 'Cool', vi: 'Mát mẻ', emoji: '🌬️', phonetic: '/kuːl/' },
            { en: 'Bloom', vi: 'Nở hoa', emoji: '🌺', phonetic: '/bluːm/' },
            { en: 'Leaf', vi: 'Lá cây', emoji: '🍃', phonetic: '/liːf/' },
            { en: 'Snowflake', vi: 'Bông tuyết', emoji: '❄️', phonetic: '/ˈsnoʊfleɪk/' },
            { en: 'Sunshine', vi: 'Ánh nắng', emoji: '🌞', phonetic: '/ˈsʌnʃaɪn/' },
        ]
    },
    hobbies: {
        name: 'Sở thích',
        level: 2,
        month: 5,
        words: [
            { en: 'Reading', vi: 'Đọc sách', emoji: '📚', phonetic: '/ˈriːdɪŋ/' },
            { en: 'Painting', vi: 'Vẽ tranh', emoji: '🎨', phonetic: '/ˈpeɪntɪŋ/' },
            { en: 'Swimming', vi: 'Bơi lội', emoji: '🏊', phonetic: '/ˈswɪmɪŋ/' },
            { en: 'Cooking', vi: 'Nấu ăn', emoji: '🍳', phonetic: '/ˈkʊkɪŋ/' },
            { en: 'Dancing', vi: 'Nhảy múa', emoji: '💃', phonetic: '/ˈdænsɪŋ/' },
            { en: 'Singing', vi: 'Ca hát', emoji: '🎤', phonetic: '/ˈsɪŋɪŋ/' },
            { en: 'Gardening', vi: 'Làm vườn', emoji: '🌻', phonetic: '/ˈɡɑːrdənɪŋ/' },
            { en: 'Cycling', vi: 'Đạp xe', emoji: '🚲', phonetic: '/ˈsaɪklɪŋ/' },
            { en: 'Fishing', vi: 'Câu cá', emoji: '🎣', phonetic: '/ˈfɪʃɪŋ/' },
            { en: 'Camping', vi: 'Cắm trại', emoji: '⛺', phonetic: '/ˈkæmpɪŋ/' },
        ]
    },
    holidays: {
        name: 'Ngày lễ',
        level: 2,
        month: 5,
        words: [
            { en: 'Tet', vi: 'Tết Nguyên Đán', emoji: '🧧', phonetic: '/tet/' },
            { en: 'Valentine', vi: 'Lễ tình nhân', emoji: '💝', phonetic: '/ˈvæləntaɪn/' },
            { en: "Children's Day", vi: 'Ngày Thiếu nhi', emoji: '🧒', phonetic: '/ˈtʃɪldrənz deɪ/' },
            { en: "Women's Day", vi: 'Ngày Phụ nữ', emoji: '💐', phonetic: '/ˈwɪmɪnz deɪ/' },
            { en: "Teachers' Day", vi: 'Ngày Nhà giáo', emoji: '👩‍🏫', phonetic: '/ˈtiːtʃərz deɪ/' },
            { en: 'Mid-Autumn', vi: 'Trung Thu', emoji: '🥮', phonetic: '/mɪd ˈɔːtəm/' },
            { en: 'National Day', vi: 'Quốc khánh', emoji: '🇻🇳', phonetic: '/ˈnæʃənəl deɪ/' },
            { en: 'Thanksgiving', vi: 'Lễ Tạ Ơn', emoji: '🦃', phonetic: '/ˌθæŋksˈɡɪvɪŋ/' },
            { en: 'Celebration', vi: 'Lễ kỷ niệm', emoji: '🎊', phonetic: '/ˌseləˈbreɪʃən/' },
            { en: 'Festival', vi: 'Lễ hội', emoji: '🎉', phonetic: '/ˈfestɪvəl/' },
        ]
    },

    // === THÁNG 6 ===
    shopping: {
        name: 'Mua sắm',
        level: 2,
        month: 6,
        words: [
            { en: 'Buy', vi: 'Mua', emoji: '🛒', phonetic: '/baɪ/' },
            { en: 'Sell', vi: 'Bán', emoji: '💰', phonetic: '/sel/' },
            { en: 'Price', vi: 'Giá tiền', emoji: '🏷️', phonetic: '/praɪs/' },
            { en: 'Cheap', vi: 'Rẻ', emoji: '💲', phonetic: '/tʃiːp/' },
            { en: 'Expensive', vi: 'Đắt', emoji: '💎', phonetic: '/ɪkˈspensɪv/' },
            { en: 'Money', vi: 'Tiền', emoji: '💵', phonetic: '/ˈmʌni/' },
            { en: 'Coin', vi: 'Đồng xu', emoji: '🪙', phonetic: '/kɔɪn/' },
            { en: 'Bag', vi: 'Túi xách', emoji: '🛍️', phonetic: '/bæɡ/' },
            { en: 'Receipt', vi: 'Hóa đơn', emoji: '🧾', phonetic: '/rɪˈsiːt/' },
            { en: 'Customer', vi: 'Khách hàng', emoji: '🧑', phonetic: '/ˈkʌstəmər/' },
        ]
    },
    cooking: {
        name: 'Nấu ăn',
        level: 2,
        month: 6,
        words: [
            { en: 'Cook', vi: 'Nấu', emoji: '👨‍🍳', phonetic: '/kʊk/' },
            { en: 'Bake', vi: 'Nướng bánh', emoji: '🧁', phonetic: '/beɪk/' },
            { en: 'Fry', vi: 'Chiên / Rán', emoji: '🍳', phonetic: '/fraɪ/' },
            { en: 'Boil', vi: 'Luộc / Đun sôi', emoji: '🫕', phonetic: '/bɔɪl/' },
            { en: 'Mix', vi: 'Trộn', emoji: '🥣', phonetic: '/mɪks/' },
            { en: 'Cut', vi: 'Cắt', emoji: '🔪', phonetic: '/kʌt/' },
            { en: 'Stir', vi: 'Khuấy', emoji: '🥄', phonetic: '/stɜːr/' },
            { en: 'Recipe', vi: 'Công thức', emoji: '📋', phonetic: '/ˈresəpi/' },
            { en: 'Ingredient', vi: 'Nguyên liệu', emoji: '🥕', phonetic: '/ɪnˈɡriːdiənt/' },
            { en: 'Taste', vi: 'Nếm / Vị', emoji: '👅', phonetic: '/teɪst/' },
        ]
    },

    // === THÁNG 7 ===
    garden: {
        name: 'Khu vườn',
        level: 2,
        month: 7,
        words: [
            { en: 'Flower', vi: 'Hoa', emoji: '🌸', phonetic: '/ˈflaʊər/' },
            { en: 'Seed', vi: 'Hạt giống', emoji: '🌰', phonetic: '/siːd/' },
            { en: 'Soil', vi: 'Đất', emoji: '🪴', phonetic: '/sɔɪl/' },
            { en: 'Water', vi: 'Tưới nước', emoji: '💧', phonetic: '/ˈwɔːtər/' },
            { en: 'Grow', vi: 'Mọc / Lớn lên', emoji: '🌱', phonetic: '/ɡroʊ/' },
            { en: 'Plant', vi: 'Trồng cây', emoji: '🌿', phonetic: '/plænt/' },
            { en: 'Root', vi: 'Rễ cây', emoji: '🌳', phonetic: '/ruːt/' },
            { en: 'Stem', vi: 'Thân cây', emoji: '🌾', phonetic: '/stem/' },
            { en: 'Petal', vi: 'Cánh hoa', emoji: '🌺', phonetic: '/ˈpetəl/' },
            { en: 'Butterfly', vi: 'Con bướm', emoji: '🦋', phonetic: '/ˈbʌtərflaɪ/' },
        ]
    },
    playground: {
        name: 'Sân chơi',
        level: 2,
        month: 7,
        words: [
            { en: 'Slide', vi: 'Cầu trượt', emoji: '🛝', phonetic: '/slaɪd/' },
            { en: 'Swing', vi: 'Xích đu', emoji: '🎠', phonetic: '/swɪŋ/' },
            { en: 'Seesaw', vi: 'Bập bênh', emoji: '⚖️', phonetic: '/ˈsiːsɔː/' },
            { en: 'Climb', vi: 'Leo trèo', emoji: '🧗', phonetic: '/klaɪm/' },
            { en: 'Sandbox', vi: 'Hố cát', emoji: '🏖️', phonetic: '/ˈsændbɒks/' },
            { en: 'Jump rope', vi: 'Nhảy dây', emoji: '🤸', phonetic: '/dʒʌmp roʊp/' },
            { en: 'Hide', vi: 'Trốn', emoji: '🙈', phonetic: '/haɪd/' },
            { en: 'Seek', vi: 'Tìm', emoji: '🔍', phonetic: '/siːk/' },
            { en: 'Race', vi: 'Chạy đua', emoji: '🏃', phonetic: '/reɪs/' },
            { en: 'Team', vi: 'Đội', emoji: '🤝', phonetic: '/tiːm/' },
        ]
    },
    directions: {
        name: 'Chỉ đường',
        level: 2,
        month: 7,
        words: [
            { en: 'Left', vi: 'Bên trái', emoji: '⬅️', phonetic: '/left/' },
            { en: 'Right', vi: 'Bên phải', emoji: '➡️', phonetic: '/raɪt/' },
            { en: 'Straight', vi: 'Thẳng', emoji: '⬆️', phonetic: '/streɪt/' },
            { en: 'Turn', vi: 'Rẽ / Quẹo', emoji: '🔄', phonetic: '/tɜːrn/' },
            { en: 'North', vi: 'Phía bắc', emoji: '🧭', phonetic: '/nɔːrθ/' },
            { en: 'South', vi: 'Phía nam', emoji: '🧭', phonetic: '/saʊθ/' },
            { en: 'East', vi: 'Phía đông', emoji: '🧭', phonetic: '/iːst/' },
            { en: 'West', vi: 'Phía tây', emoji: '🧭', phonetic: '/west/' },
            { en: 'Near', vi: 'Gần', emoji: '📍', phonetic: '/nɪr/' },
            { en: 'Far', vi: 'Xa', emoji: '🌍', phonetic: '/fɑːr/' },
        ]
    },

    // === THÁNG 9 ===
    space: {
        name: 'Vũ trụ',
        level: 3,
        month: 9,
        words: [
            { en: 'Star', vi: 'Ngôi sao', emoji: '⭐', phonetic: '/stɑːr/' },
            { en: 'Moon', vi: 'Mặt trăng', emoji: '🌙', phonetic: '/muːn/' },
            { en: 'Sun', vi: 'Mặt trời', emoji: '☀️', phonetic: '/sʌn/' },
            { en: 'Planet', vi: 'Hành tinh', emoji: '🪐', phonetic: '/ˈplænɪt/' },
            { en: 'Rocket', vi: 'Tên lửa', emoji: '🚀', phonetic: '/ˈrɒkɪt/' },
            { en: 'Astronaut', vi: 'Nhà du hành vũ trụ', emoji: '👨‍🚀', phonetic: '/ˈæstrənɔːt/' },
            { en: 'Galaxy', vi: 'Thiên hà', emoji: '🌌', phonetic: '/ˈɡæləksi/' },
            { en: 'Telescope', vi: 'Kính viễn vọng', emoji: '🔭', phonetic: '/ˈtelɪskoʊp/' },
            { en: 'Comet', vi: 'Sao chổi', emoji: '☄️', phonetic: '/ˈkɒmɪt/' },
            { en: 'Earth', vi: 'Trái Đất', emoji: '🌍', phonetic: '/ɜːrθ/' },
        ]
    },
    ocean_life: {
        name: 'Đời sống đại dương',
        level: 3,
        month: 9,
        words: [
            { en: 'Coral', vi: 'San hô', emoji: '🪸', phonetic: '/ˈkɔːrəl/' },
            { en: 'Seaweed', vi: 'Rong biển', emoji: '🌿', phonetic: '/ˈsiːwiːd/' },
            { en: 'Wave', vi: 'Sóng biển', emoji: '🌊', phonetic: '/weɪv/' },
            { en: 'Shell', vi: 'Vỏ sò', emoji: '🐚', phonetic: '/ʃel/' },
            { en: 'Pearl', vi: 'Ngọc trai', emoji: '🦪', phonetic: '/pɜːrl/' },
            { en: 'Anchor', vi: 'Mỏ neo', emoji: '⚓', phonetic: '/ˈæŋkər/' },
            { en: 'Submarine', vi: 'Tàu ngầm', emoji: '🛥️', phonetic: '/ˌsʌbməˈriːn/' },
            { en: 'Island', vi: 'Hòn đảo', emoji: '🏝️', phonetic: '/ˈaɪlənd/' },
            { en: 'Tide', vi: 'Thủy triều', emoji: '🌊', phonetic: '/taɪd/' },
            { en: 'Diver', vi: 'Thợ lặn', emoji: '🤿', phonetic: '/ˈdaɪvər/' },
        ]
    },

    // === THÁNG 10 ===
    dinosaurs: {
        name: 'Khủng long',
        level: 3,
        month: 10,
        words: [
            { en: 'Dinosaur', vi: 'Khủng long', emoji: '🦕', phonetic: '/ˈdaɪnəsɔːr/' },
            { en: 'Fossil', vi: 'Hóa thạch', emoji: '🦴', phonetic: '/ˈfɒsəl/' },
            { en: 'Extinct', vi: 'Tuyệt chủng', emoji: '💀', phonetic: '/ɪkˈstɪŋkt/' },
            { en: 'Giant', vi: 'Khổng lồ', emoji: '🦖', phonetic: '/ˈdʒaɪənt/' },
            { en: 'Skeleton', vi: 'Bộ xương', emoji: '💀', phonetic: '/ˈskelɪtən/' },
            { en: 'Claw', vi: 'Móng vuốt', emoji: '🦎', phonetic: '/klɔː/' },
            { en: 'Tail', vi: 'Đuôi', emoji: '🦕', phonetic: '/teɪl/' },
            { en: 'Egg', vi: 'Trứng', emoji: '🥚', phonetic: '/eɡ/' },
            { en: 'Volcano', vi: 'Núi lửa', emoji: '🌋', phonetic: '/vɒlˈkeɪnoʊ/' },
            { en: 'Roar', vi: 'Gầm / Rống', emoji: '🦖', phonetic: '/rɔːr/' },
        ]
    },
    fairy_tales: {
        name: 'Truyện cổ tích',
        level: 3,
        month: 10,
        words: [
            { en: 'Prince', vi: 'Hoàng tử', emoji: '🤴', phonetic: '/prɪns/' },
            { en: 'Princess', vi: 'Công chúa', emoji: '👸', phonetic: '/ˌprɪnˈses/' },
            { en: 'Castle', vi: 'Lâu đài', emoji: '🏰', phonetic: '/ˈkæsəl/' },
            { en: 'Dragon', vi: 'Rồng', emoji: '🐉', phonetic: '/ˈdræɡən/' },
            { en: 'Magic', vi: 'Phép thuật', emoji: '🪄', phonetic: '/ˈmædʒɪk/' },
            { en: 'Fairy', vi: 'Tiên', emoji: '🧚', phonetic: '/ˈferi/' },
            { en: 'Knight', vi: 'Hiệp sĩ', emoji: '⚔️', phonetic: '/naɪt/' },
            { en: 'Wizard', vi: 'Phù thủy', emoji: '🧙', phonetic: '/ˈwɪzərd/' },
            { en: 'Kingdom', vi: 'Vương quốc', emoji: '👑', phonetic: '/ˈkɪŋdəm/' },
            { en: 'Treasure', vi: 'Kho báu', emoji: '💎', phonetic: '/ˈtreʒər/' },
        ]
    },

    // === THÁNG 11 ===
    inventions: {
        name: 'Phát minh',
        level: 3,
        month: 11,
        words: [
            { en: 'Telephone', vi: 'Điện thoại', emoji: '📞', phonetic: '/ˈteləfoʊn/' },
            { en: 'Computer', vi: 'Máy tính', emoji: '💻', phonetic: '/kəmˈpjuːtər/' },
            { en: 'Light bulb', vi: 'Bóng đèn', emoji: '💡', phonetic: '/laɪt bʌlb/' },
            { en: 'Camera', vi: 'Máy ảnh', emoji: '📷', phonetic: '/ˈkæmərə/' },
            { en: 'Wheel', vi: 'Bánh xe', emoji: '🛞', phonetic: '/wiːl/' },
            { en: 'Engine', vi: 'Động cơ', emoji: '⚙️', phonetic: '/ˈendʒɪn/' },
            { en: 'Electricity', vi: 'Điện', emoji: '⚡', phonetic: '/ɪˌlekˈtrɪsəti/' },
            { en: 'Robot', vi: 'Người máy', emoji: '🤖', phonetic: '/ˈroʊbɒt/' },
            { en: 'Airplane', vi: 'Máy bay', emoji: '✈️', phonetic: '/ˈerpleɪn/' },
            { en: 'Internet', vi: 'Mạng internet', emoji: '🌐', phonetic: '/ˈɪntərnet/' },
        ]
    },
    environment: {
        name: 'Môi trường',
        level: 3,
        month: 11,
        words: [
            { en: 'Recycle', vi: 'Tái chế', emoji: '♻️', phonetic: '/riːˈsaɪkəl/' },
            { en: 'Trash', vi: 'Rác', emoji: '🗑️', phonetic: '/træʃ/' },
            { en: 'Pollution', vi: 'Ô nhiễm', emoji: '🏭', phonetic: '/pəˈluːʃən/' },
            { en: 'Forest', vi: 'Rừng', emoji: '🌲', phonetic: '/ˈfɔːrɪst/' },
            { en: 'River', vi: 'Sông', emoji: '🏞️', phonetic: '/ˈrɪvər/' },
            { en: 'Mountain', vi: 'Núi', emoji: '⛰️', phonetic: '/ˈmaʊntən/' },
            { en: 'Clean', vi: 'Sạch sẽ', emoji: '✨', phonetic: '/kliːn/' },
            { en: 'Save', vi: 'Bảo vệ / Tiết kiệm', emoji: '💚', phonetic: '/seɪv/' },
            { en: 'Nature', vi: 'Thiên nhiên', emoji: '🌿', phonetic: '/ˈneɪtʃər/' },
            { en: 'Energy', vi: 'Năng lượng', emoji: '🔋', phonetic: '/ˈenərdʒi/' },
        ]
    },

    // === THÁNG 12 ===
    professions_advanced: {
        name: 'Nghề nghiệp nâng cao',
        level: 3,
        month: 12,
        words: [
            { en: 'Scientist', vi: 'Nhà khoa học', emoji: '🔬', phonetic: '/ˈsaɪəntɪst/' },
            { en: 'Engineer', vi: 'Kỹ sư', emoji: '👷', phonetic: '/ˌendʒɪˈnɪr/' },
            { en: 'Architect', vi: 'Kiến trúc sư', emoji: '🏗️', phonetic: '/ˈɑːrkɪtekt/' },
            { en: 'Journalist', vi: 'Nhà báo', emoji: '📰', phonetic: '/ˈdʒɜːrnəlɪst/' },
            { en: 'Lawyer', vi: 'Luật sư', emoji: '⚖️', phonetic: '/ˈlɔːjər/' },
            { en: 'Programmer', vi: 'Lập trình viên', emoji: '💻', phonetic: '/ˈproʊɡræmər/' },
            { en: 'Photographer', vi: 'Nhiếp ảnh gia', emoji: '📸', phonetic: '/fəˈtɒɡrəfər/' },
            { en: 'Musician', vi: 'Nhạc sĩ', emoji: '🎵', phonetic: '/mjuˈzɪʃən/' },
            { en: 'Athlete', vi: 'Vận động viên', emoji: '🏅', phonetic: '/ˈæθliːt/' },
            { en: 'Astronaut', vi: 'Phi hành gia', emoji: '👨‍🚀', phonetic: '/ˈæstrənɔːt/' },
        ]
    },
    travel: {
        name: 'Du lịch',
        level: 3,
        month: 12,
        words: [
            { en: 'Passport', vi: 'Hộ chiếu', emoji: '🛂', phonetic: '/ˈpæspɔːrt/' },
            { en: 'Suitcase', vi: 'Va li', emoji: '🧳', phonetic: '/ˈsuːtkeɪs/' },
            { en: 'Hotel', vi: 'Khách sạn', emoji: '🏨', phonetic: '/hoʊˈtel/' },
            { en: 'Map', vi: 'Bản đồ', emoji: '🗺️', phonetic: '/mæp/' },
            { en: 'Ticket', vi: 'Vé', emoji: '🎫', phonetic: '/ˈtɪkɪt/' },
            { en: 'Airport', vi: 'Sân bay', emoji: '🛫', phonetic: '/ˈerpɔːrt/' },
            { en: 'Tourist', vi: 'Khách du lịch', emoji: '🧑‍🦰', phonetic: '/ˈtʊrɪst/' },
            { en: 'Souvenir', vi: 'Quà lưu niệm', emoji: '🎁', phonetic: '/ˌsuːvəˈnɪr/' },
            { en: 'Beach', vi: 'Bãi biển', emoji: '🏖️', phonetic: '/biːtʃ/' },
            { en: 'Adventure', vi: 'Phiêu lưu', emoji: '🗻', phonetic: '/ədˈventʃər/' },
        ]
    },
};

// ============================================
// PHONICS - CONSONANT BLENDS
// ============================================
GRADE_DATA[2].phonics = [
    { letter: 'BL', sound: '/bl/', words: [
        { word: 'Black', highlight: 'Bl', emoji: '⚫' },
        { word: 'Blue', highlight: 'Bl', emoji: '🔵' },
        { word: 'Blow', highlight: 'Bl', emoji: '💨' }
    ]},
    { letter: 'BR', sound: '/br/', words: [
        { word: 'Bread', highlight: 'Br', emoji: '🍞' },
        { word: 'Brush', highlight: 'Br', emoji: '🪥' },
        { word: 'Bridge', highlight: 'Br', emoji: '🌉' }
    ]},
    { letter: 'CL', sound: '/kl/', words: [
        { word: 'Clock', highlight: 'Cl', emoji: '🕐' },
        { word: 'Cloud', highlight: 'Cl', emoji: '☁️' },
        { word: 'Clap', highlight: 'Cl', emoji: '👏' }
    ]},
    { letter: 'CR', sound: '/kr/', words: [
        { word: 'Crab', highlight: 'Cr', emoji: '🦀' },
        { word: 'Crown', highlight: 'Cr', emoji: '👑' },
        { word: 'Cry', highlight: 'Cr', emoji: '😢' }
    ]},
    { letter: 'DR', sound: '/dr/', words: [
        { word: 'Drum', highlight: 'Dr', emoji: '🥁' },
        { word: 'Dragon', highlight: 'Dr', emoji: '🐉' },
        { word: 'Dress', highlight: 'Dr', emoji: '👗' }
    ]},
    { letter: 'FL', sound: '/fl/', words: [
        { word: 'Flag', highlight: 'Fl', emoji: '🚩' },
        { word: 'Flower', highlight: 'Fl', emoji: '🌸' },
        { word: 'Fly', highlight: 'Fl', emoji: '🪰' }
    ]},
    { letter: 'FR', sound: '/fr/', words: [
        { word: 'Frog', highlight: 'Fr', emoji: '🐸' },
        { word: 'Fruit', highlight: 'Fr', emoji: '🍎' },
        { word: 'Friend', highlight: 'Fr', emoji: '🤝' }
    ]},
    { letter: 'GL', sound: '/ɡl/', words: [
        { word: 'Glass', highlight: 'Gl', emoji: '🥛' },
        { word: 'Globe', highlight: 'Gl', emoji: '🌍' },
        { word: 'Glue', highlight: 'Gl', emoji: '🧴' }
    ]},
    { letter: 'GR', sound: '/ɡr/', words: [
        { word: 'Grape', highlight: 'Gr', emoji: '🍇' },
        { word: 'Green', highlight: 'Gr', emoji: '🟢' },
        { word: 'Grow', highlight: 'Gr', emoji: '🌱' }
    ]},
    { letter: 'PL', sound: '/pl/', words: [
        { word: 'Plant', highlight: 'Pl', emoji: '🌿' },
        { word: 'Plate', highlight: 'Pl', emoji: '🍽️' },
        { word: 'Play', highlight: 'Pl', emoji: '🎮' }
    ]},
    { letter: 'PR', sound: '/pr/', words: [
        { word: 'Prince', highlight: 'Pr', emoji: '🤴' },
        { word: 'Present', highlight: 'Pr', emoji: '🎁' },
        { word: 'Pray', highlight: 'Pr', emoji: '🙏' }
    ]},
    { letter: 'SL', sound: '/sl/', words: [
        { word: 'Slide', highlight: 'Sl', emoji: '🛝' },
        { word: 'Sleep', highlight: 'Sl', emoji: '😴' },
        { word: 'Slow', highlight: 'Sl', emoji: '🐌' }
    ]},
    { letter: 'SM', sound: '/sm/', words: [
        { word: 'Smile', highlight: 'Sm', emoji: '😊' },
        { word: 'Small', highlight: 'Sm', emoji: '🤏' },
        { word: 'Smell', highlight: 'Sm', emoji: '👃' }
    ]},
    { letter: 'SN', sound: '/sn/', words: [
        { word: 'Snake', highlight: 'Sn', emoji: '🐍' },
        { word: 'Snow', highlight: 'Sn', emoji: '❄️' },
        { word: 'Snail', highlight: 'Sn', emoji: '🐌' }
    ]},
    { letter: 'SP', sound: '/sp/', words: [
        { word: 'Spider', highlight: 'Sp', emoji: '🕷️' },
        { word: 'Spoon', highlight: 'Sp', emoji: '🥄' },
        { word: 'Star', highlight: 'Sp', emoji: '⭐' }
    ]},
    { letter: 'ST', sound: '/st/', words: [
        { word: 'Star', highlight: 'St', emoji: '⭐' },
        { word: 'Stone', highlight: 'St', emoji: '🪨' },
        { word: 'Stop', highlight: 'St', emoji: '🛑' }
    ]},
    { letter: 'SW', sound: '/sw/', words: [
        { word: 'Swim', highlight: 'Sw', emoji: '🏊' },
        { word: 'Sweet', highlight: 'Sw', emoji: '🍬' },
        { word: 'Swing', highlight: 'Sw', emoji: '🎠' }
    ]},
    { letter: 'TR', sound: '/tr/', words: [
        { word: 'Tree', highlight: 'Tr', emoji: '🌳' },
        { word: 'Train', highlight: 'Tr', emoji: '🚂' },
        { word: 'Truck', highlight: 'Tr', emoji: '🚚' }
    ]},
];

// ============================================
// CÂU MẪU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[2].sentences = {
    level1: [
        { sentence: ['I', 'like', 'to', 'eat', 'carrots'], emoji: '🥕', vi: 'Tôi thích ăn cà rốt', extra: ['drink', 'she'] },
        { sentence: ['The', 'cat', 'is', 'under', 'the', 'table'], emoji: '🐱', vi: 'Con mèo ở dưới bàn', extra: ['on', 'a'] },
        { sentence: ['She', 'drinks', 'milk', 'every', 'day'], emoji: '🥛', vi: 'Cô ấy uống sữa mỗi ngày', extra: ['eat', 'he'] },
        { sentence: ['My', 'dog', 'is', 'very', 'fast'], emoji: '🐶', vi: 'Con chó của tôi rất nhanh', extra: ['slow', 'the'] },
        { sentence: ['There', 'are', 'twelve', 'eggs'], emoji: '🥚', vi: 'Có mười hai quả trứng', extra: ['is', 'one'] },
        { sentence: ['The', 'flower', 'is', 'very', 'beautiful'], emoji: '🌸', vi: 'Bông hoa rất đẹp', extra: ['ugly', 'a'] },
        { sentence: ['Please', 'open', 'your', 'book'], emoji: '📖', vi: 'Hãy mở sách ra', extra: ['close', 'my'] },
        { sentence: ['I', 'can', 'count', 'to', 'twenty'], emoji: '🔢', vi: 'Tôi đếm được đến hai mươi', extra: ['sing', 'is'] },
    ],
    level2: [
        { sentence: ['In', 'spring', 'the', 'flowers', 'bloom'], emoji: '🌸', vi: 'Vào mùa xuân hoa nở', extra: ['winter', 'a'] },
        { sentence: ['My', 'hobby', 'is', 'reading', 'books'], emoji: '📚', vi: 'Sở thích của tôi là đọc sách', extra: ['his', 'the'] },
        { sentence: ['I', 'want', 'to', 'buy', 'a', 'toy'], emoji: '🧸', vi: 'Tôi muốn mua một món đồ chơi', extra: ['sell', 'is'] },
        { sentence: ['Turn', 'left', 'at', 'the', 'corner'], emoji: '⬅️', vi: 'Rẽ trái ở góc đường', extra: ['right', 'a'] },
        { sentence: ['She', 'is', 'cooking', 'in', 'the', 'kitchen'], emoji: '🍳', vi: 'Cô ấy đang nấu ăn trong bếp', extra: ['he', 'on'] },
        { sentence: ['We', 'play', 'on', 'the', 'slide'], emoji: '🛝', vi: 'Chúng tôi chơi cầu trượt', extra: ['in', 'a'] },
        { sentence: ['The', 'children', 'celebrate', 'Tet', 'happily'], emoji: '🧧', vi: 'Các em nhỏ vui vẻ đón Tết', extra: ['sadly', 'a'] },
        { sentence: ['Let', 'us', 'plant', 'a', 'tree', 'together'], emoji: '🌳', vi: 'Hãy cùng nhau trồng cây', extra: ['cut', 'the'] },
    ],
    level3: [
        { sentence: ['The', 'astronaut', 'travels', 'to', 'the', 'moon'], emoji: '🌙', vi: 'Nhà du hành bay đến mặt trăng', extra: ['sun', 'a'] },
        { sentence: ['Dinosaurs', 'lived', 'millions', 'of', 'years', 'ago'], emoji: '🦕', vi: 'Khủng long sống cách đây hàng triệu năm', extra: ['today', 'in'] },
        { sentence: ['The', 'princess', 'lives', 'in', 'a', 'beautiful', 'castle'], emoji: '🏰', vi: 'Công chúa sống trong lâu đài đẹp', extra: ['ugly', 'on'] },
        { sentence: ['We', 'should', 'recycle', 'to', 'save', 'the', 'earth'], emoji: '♻️', vi: 'Chúng ta nên tái chế để bảo vệ trái đất', extra: ['waste', 'a'] },
        { sentence: ['The', 'scientist', 'invented', 'a', 'new', 'robot'], emoji: '🤖', vi: 'Nhà khoa học đã phát minh ra rô bốt mới', extra: ['old', 'the'] },
        { sentence: ['I', 'packed', 'my', 'suitcase', 'for', 'the', 'trip'], emoji: '🧳', vi: 'Tôi đã xếp va li cho chuyến đi', extra: ['her', 'a'] },
    ],
};

// ============================================
// SPELLING THEO CẤP ĐỘ
// ============================================
GRADE_DATA[2].spelling = {
    level1: [
        { word: 'CORN', emoji: '🌽', vi: 'Ngô' },
        { word: 'MILK', emoji: '🥛', vi: 'Sữa' },
        { word: 'READ', emoji: '📖', vi: 'Đọc' },
        { word: 'FEED', emoji: '🍽️', vi: 'Cho ăn' },
        { word: 'GOLD', emoji: '🥇', vi: 'Vàng' },
        { word: 'TALL', emoji: '📏', vi: 'Cao' },
        { word: 'FAST', emoji: '⚡', vi: 'Nhanh' },
        { word: 'OPEN', emoji: '📂', vi: 'Mở' },
        { word: 'NEXT', emoji: '↔️', vi: 'Bên cạnh' },
        { word: 'BATH', emoji: '🛁', vi: 'Tắm' },
        { word: 'SING', emoji: '🎤', vi: 'Hát' },
        { word: 'CAGE', emoji: '🏠', vi: 'Lồng' },
    ],
    level2: [
        { word: 'SLIDE', emoji: '🛝', vi: 'Cầu trượt' },
        { word: 'SWING', emoji: '🎠', vi: 'Xích đu' },
        { word: 'CLIMB', emoji: '🧗', vi: 'Leo trèo' },
        { word: 'PLANT', emoji: '🌿', vi: 'Trồng cây' },
        { word: 'PRICE', emoji: '🏷️', vi: 'Giá tiền' },
        { word: 'MONEY', emoji: '💵', vi: 'Tiền' },
        { word: 'BLOOM', emoji: '🌺', vi: 'Nở hoa' },
        { word: 'HOBBY', emoji: '🎨', vi: 'Sở thích' },
        { word: 'TASTE', emoji: '👅', vi: 'Nếm' },
        { word: 'NORTH', emoji: '🧭', vi: 'Phía bắc' },
        { word: 'SWEET', emoji: '🍬', vi: 'Ngọt' },
        { word: 'FRESH', emoji: '🌿', vi: 'Tươi' },
    ],
    level3: [
        { word: 'PLANET', emoji: '🪐', vi: 'Hành tinh' },
        { word: 'ROCKET', emoji: '🚀', vi: 'Tên lửa' },
        { word: 'CASTLE', emoji: '🏰', vi: 'Lâu đài' },
        { word: 'DRAGON', emoji: '🐉', vi: 'Rồng' },
        { word: 'FOSSIL', emoji: '🦴', vi: 'Hóa thạch' },
        { word: 'FOREST', emoji: '🌲', vi: 'Rừng' },
        { word: 'ISLAND', emoji: '🏝️', vi: 'Hòn đảo' },
        { word: 'RECYCLE', emoji: '♻️', vi: 'Tái chế' },
        { word: 'TICKET', emoji: '🎫', vi: 'Vé' },
        { word: 'WIZARD', emoji: '🧙', vi: 'Phù thủy' },
        { word: 'TRAVEL', emoji: '🧳', vi: 'Du lịch' },
        { word: 'ENERGY', emoji: '🔋', vi: 'Năng lượng' },
    ],
};

// ============================================
// NGHE HIỂU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[2].listening = {
    level1: [
        { word: 'Carrot', options: [{ emoji: '🥕', label: 'Carrot' }, { emoji: '🥔', label: 'Potato' }, { emoji: '🍅', label: 'Tomato' }, { emoji: '🌽', label: 'Corn' }], correct: 0 },
        { word: 'Juice', options: [{ emoji: '🥛', label: 'Milk' }, { emoji: '🧃', label: 'Juice' }, { emoji: '🍵', label: 'Tea' }, { emoji: '💧', label: 'Water' }], correct: 1 },
        { word: 'Write', options: [{ emoji: '📖', label: 'Read' }, { emoji: '🗣️', label: 'Speak' }, { emoji: '✍️', label: 'Write' }, { emoji: '👂', label: 'Listen' }], correct: 2 },
        { word: 'Leash', options: [{ emoji: '🥣', label: 'Bowl' }, { emoji: '🏠', label: 'Cage' }, { emoji: '🧸', label: 'Toy' }, { emoji: '🔗', label: 'Leash' }], correct: 3 },
        { word: 'Silver', options: [{ emoji: '🥈', label: 'Silver' }, { emoji: '🥇', label: 'Gold' }, { emoji: '🟤', label: 'Maroon' }, { emoji: '🔵', label: 'Navy' }], correct: 0 },
        { word: 'Fifteen', options: [{ emoji: '1️⃣3️⃣', label: 'Thirteen' }, { emoji: '1️⃣5️⃣', label: 'Fifteen' }, { emoji: '1️⃣7️⃣', label: 'Seventeen' }, { emoji: '1️⃣9️⃣', label: 'Nineteen' }], correct: 1 },
        { word: 'Heavy', options: [{ emoji: '🪶', label: 'Light' }, { emoji: '⚡', label: 'Fast' }, { emoji: '🏋️', label: 'Heavy' }, { emoji: '💪', label: 'Strong' }], correct: 2 },
        { word: 'Under', options: [{ emoji: '⬆️', label: 'On' }, { emoji: '📦', label: 'In' }, { emoji: '🔙', label: 'Behind' }, { emoji: '⬇️', label: 'Under' }], correct: 3 },
    ],
    level2: [
        { word: 'Spring', options: [{ emoji: '🌸', label: 'Spring' }, { emoji: '☀️', label: 'Summer' }, { emoji: '🍂', label: 'Autumn' }, { emoji: '❄️', label: 'Winter' }], correct: 0 },
        { word: 'Camping', options: [{ emoji: '🎣', label: 'Fishing' }, { emoji: '⛺', label: 'Camping' }, { emoji: '🏊', label: 'Swimming' }, { emoji: '🚲', label: 'Cycling' }], correct: 1 },
        { word: 'Money', options: [{ emoji: '🏷️', label: 'Price' }, { emoji: '🧾', label: 'Receipt' }, { emoji: '💵', label: 'Money' }, { emoji: '🪙', label: 'Coin' }], correct: 2 },
        { word: 'Boil', options: [{ emoji: '🔪', label: 'Cut' }, { emoji: '🍳', label: 'Fry' }, { emoji: '🧁', label: 'Bake' }, { emoji: '🫕', label: 'Boil' }], correct: 3 },
        { word: 'Seed', options: [{ emoji: '🌰', label: 'Seed' }, { emoji: '🌺', label: 'Petal' }, { emoji: '🌳', label: 'Root' }, { emoji: '🌾', label: 'Stem' }], correct: 0 },
        { word: 'Swing', options: [{ emoji: '🛝', label: 'Slide' }, { emoji: '🎠', label: 'Swing' }, { emoji: '⚖️', label: 'Seesaw' }, { emoji: '🏖️', label: 'Sandbox' }], correct: 1 },
        { word: 'Straight', options: [{ emoji: '⬅️', label: 'Left' }, { emoji: '🔄', label: 'Turn' }, { emoji: '⬆️', label: 'Straight' }, { emoji: '➡️', label: 'Right' }], correct: 2 },
        { word: 'Tet', options: [{ emoji: '🎃', label: 'Halloween' }, { emoji: '🦃', label: 'Thanksgiving' }, { emoji: '🎄', label: 'Christmas' }, { emoji: '🧧', label: 'Tet' }], correct: 3 },
    ],
    level3: [
        { word: 'Rocket', options: [{ emoji: '🚀', label: 'Rocket' }, { emoji: '🔭', label: 'Telescope' }, { emoji: '🪐', label: 'Planet' }, { emoji: '☄️', label: 'Comet' }], correct: 0 },
        { word: 'Coral', options: [{ emoji: '🌊', label: 'Wave' }, { emoji: '🪸', label: 'Coral' }, { emoji: '🐚', label: 'Shell' }, { emoji: '🌿', label: 'Seaweed' }], correct: 1 },
        { word: 'Fossil', options: [{ emoji: '🦕', label: 'Dinosaur' }, { emoji: '💀', label: 'Skeleton' }, { emoji: '🦴', label: 'Fossil' }, { emoji: '🌋', label: 'Volcano' }], correct: 2 },
        { word: 'Wizard', options: [{ emoji: '🤴', label: 'Prince' }, { emoji: '⚔️', label: 'Knight' }, { emoji: '🧚', label: 'Fairy' }, { emoji: '🧙', label: 'Wizard' }], correct: 3 },
        { word: 'Recycle', options: [{ emoji: '♻️', label: 'Recycle' }, { emoji: '🗑️', label: 'Trash' }, { emoji: '🏭', label: 'Pollution' }, { emoji: '🔋', label: 'Energy' }], correct: 0 },
        { word: 'Suitcase', options: [{ emoji: '🗺️', label: 'Map' }, { emoji: '🧳', label: 'Suitcase' }, { emoji: '🎫', label: 'Ticket' }, { emoji: '🛂', label: 'Passport' }], correct: 1 },
        { word: 'Engineer', options: [{ emoji: '🔬', label: 'Scientist' }, { emoji: '📰', label: 'Journalist' }, { emoji: '👷', label: 'Engineer' }, { emoji: '⚖️', label: 'Lawyer' }], correct: 2 },
        { word: 'Internet', options: [{ emoji: '📷', label: 'Camera' }, { emoji: '💡', label: 'Light bulb' }, { emoji: '⚙️', label: 'Engine' }, { emoji: '🌐', label: 'Internet' }], correct: 3 },
    ],
};
