// ============================================
// LỚP 6 - GIÁO TRÌNH 12 THÁNG - 3 CẤP ĐỘ
// ============================================
GRADE_DATA[6] = {};
GRADE_DATA[6].info = {
    levels: [
        { id: 1, name: 'Pre-Intermediate', nameVi: 'Sơ trung cấp', months: [1,2,3,4], color: '#4ECDC4', icon: '🌱' },
        { id: 2, name: 'Intermediate', nameVi: 'Trung cấp', months: [5,6,7,8], color: '#A855F7', icon: '🌿' },
        { id: 3, name: 'Upper-Intermediate', nameVi: 'Trung cấp cao', months: [9,10,11,12], color: '#FF6B9D', icon: '🌳' },
    ],
    months: [
        { month: 1, title: 'Trường học & Bạn bè', topics: ['school_life', 'school_subjects', 'school_activities'] },
        { month: 2, title: 'Gia đình & Mối quan hệ', topics: ['family_relationships', 'family_activities', 'personality'] },
        { month: 3, title: 'Sở thích & Thời gian rảnh', topics: ['hobbies_advanced', 'indoor_activities'] },
        { month: 4, title: 'Ôn tập cấp 1', topics: ['review_pre_intermediate'] },
        { month: 5, title: 'Đồ ăn & Thức uống', topics: ['food_drink', 'cooking_methods', 'restaurants'] },
        { month: 6, title: 'Thể thao & Trò chơi', topics: ['sports', 'games_competition'] },
        { month: 7, title: 'Thế giới quanh ta', topics: ['world_around_us', 'geography'] },
        { month: 8, title: 'Ôn tập cấp 2', topics: ['review_intermediate'] },
        { month: 9, title: 'Sức khỏe & Lối sống', topics: ['health', 'healthy_lifestyle'] },
        { month: 10, title: 'Lễ hội & Thành phố', topics: ['festivals', 'cities'] },
        { month: 11, title: 'Người nổi tiếng & Thiên nhiên', topics: ['famous_people', 'nature'] },
        { month: 12, title: 'Tổng ôn tập', topics: ['review_upper_intermediate'] },
    ]
};

// ============================================
// TỪ VỰNG - 250+ từ chia theo chủ đề
// ============================================
GRADE_DATA[6].vocab = {
    // === THÁNG 1 ===
    school_life: {
        name: 'Cuộc sống học đường',
        level: 1,
        month: 1,
        words: [
            { en: 'Classmate', vi: 'Bạn cùng lớp', emoji: '👫', phonetic: '/ˈklæsmeɪt/' },
            { en: 'Timetable', vi: 'Thời khóa biểu', emoji: '📅', phonetic: '/ˈtaɪmteɪbəl/' },
            { en: 'Uniform', vi: 'Đồng phục', emoji: '👔', phonetic: '/ˈjuːnɪfɔːrm/' },
            { en: 'Canteen', vi: 'Căng tin', emoji: '🍽️', phonetic: '/kænˈtiːn/' },
            { en: 'Assembly', vi: 'Buổi chào cờ', emoji: '🏫', phonetic: '/əˈsembli/' },
            { en: 'Playground', vi: 'Sân chơi', emoji: '🏃', phonetic: '/ˈpleɪɡraʊnd/' },
            { en: 'Laboratory', vi: 'Phòng thí nghiệm', emoji: '🔬', phonetic: '/ˈlæbrətɔːri/' },
            { en: 'Library', vi: 'Thư viện', emoji: '📚', phonetic: '/ˈlaɪbreri/' },
            { en: 'Semester', vi: 'Học kỳ', emoji: '📆', phonetic: '/sɪˈmestər/' },
            { en: 'Scholarship', vi: 'Học bổng', emoji: '🎓', phonetic: '/ˈskɒlərʃɪp/' },
        ]
    },
    school_subjects: {
        name: 'Môn học',
        level: 1,
        month: 1,
        words: [
            { en: 'Mathematics', vi: 'Toán học', emoji: '🔢', phonetic: '/ˌmæθəˈmætɪks/' },
            { en: 'Literature', vi: 'Ngữ văn', emoji: '📖', phonetic: '/ˈlɪtərətʃər/' },
            { en: 'Geography', vi: 'Địa lý', emoji: '🌍', phonetic: '/dʒiˈɒɡrəfi/' },
            { en: 'History', vi: 'Lịch sử', emoji: '🏛️', phonetic: '/ˈhɪstəri/' },
            { en: 'Biology', vi: 'Sinh học', emoji: '🧬', phonetic: '/baɪˈɒlədʒi/' },
            { en: 'Physics', vi: 'Vật lý', emoji: '⚛️', phonetic: '/ˈfɪzɪks/' },
            { en: 'Chemistry', vi: 'Hóa học', emoji: '🧪', phonetic: '/ˈkemɪstri/' },
            { en: 'Physical education', vi: 'Giáo dục thể chất', emoji: '🏅', phonetic: '/ˌfɪzɪkəl ˌedʒuˈkeɪʃən/' },
            { en: 'Information technology', vi: 'Tin học', emoji: '💻', phonetic: '/ˌɪnfərˈmeɪʃən tekˈnɒlədʒi/' },
            { en: 'Civic education', vi: 'Giáo dục công dân', emoji: '🏛️', phonetic: '/ˈsɪvɪk ˌedʒuˈkeɪʃən/' },
        ]
    },
    school_activities: {
        name: 'Hoạt động trường học',
        level: 1,
        month: 1,
        words: [
            { en: 'Presentation', vi: 'Bài thuyết trình', emoji: '🎤', phonetic: '/ˌprezənˈteɪʃən/' },
            { en: 'Experiment', vi: 'Thí nghiệm', emoji: '🔬', phonetic: '/ɪkˈsperɪmənt/' },
            { en: 'Homework', vi: 'Bài tập về nhà', emoji: '📝', phonetic: '/ˈhoʊmwɜːrk/' },
            { en: 'Examination', vi: 'Kỳ thi', emoji: '📋', phonetic: '/ɪɡˌzæmɪˈneɪʃən/' },
            { en: 'Competition', vi: 'Cuộc thi', emoji: '🏆', phonetic: '/ˌkɒmpəˈtɪʃən/' },
            { en: 'Project', vi: 'Dự án', emoji: '📊', phonetic: '/ˈprɒdʒekt/' },
            { en: 'Field trip', vi: 'Chuyến tham quan', emoji: '🚌', phonetic: '/fiːld trɪp/' },
            { en: 'Debate', vi: 'Tranh luận', emoji: '🗣️', phonetic: '/dɪˈbeɪt/' },
            { en: 'Rehearsal', vi: 'Buổi tập dượt', emoji: '🎭', phonetic: '/rɪˈhɜːrsəl/' },
            { en: 'Volunteer', vi: 'Tình nguyện viên', emoji: '🤝', phonetic: '/ˌvɒlənˈtɪr/' },
        ]
    },

    // === THÁNG 2 ===
    family_relationships: {
        name: 'Mối quan hệ gia đình',
        level: 1,
        month: 2,
        words: [
            { en: 'Relative', vi: 'Người thân', emoji: '👨‍👩‍👧‍👦', phonetic: '/ˈrelətɪv/' },
            { en: 'Generation', vi: 'Thế hệ', emoji: '👴👨👦', phonetic: '/ˌdʒenəˈreɪʃən/' },
            { en: 'Ancestor', vi: 'Tổ tiên', emoji: '🏛️', phonetic: '/ˈænsestər/' },
            { en: 'Sibling', vi: 'Anh chị em ruột', emoji: '👫', phonetic: '/ˈsɪblɪŋ/' },
            { en: 'Nephew', vi: 'Cháu trai', emoji: '👦', phonetic: '/ˈnefjuː/' },
            { en: 'Niece', vi: 'Cháu gái', emoji: '👧', phonetic: '/niːs/' },
            { en: 'Stepmother', vi: 'Mẹ kế', emoji: '👩', phonetic: '/ˈstepmʌðər/' },
            { en: 'Grandfather', vi: 'Ông nội / ngoại', emoji: '👴', phonetic: '/ˈɡrændfɑːðər/' },
            { en: 'Grandmother', vi: 'Bà nội / ngoại', emoji: '👵', phonetic: '/ˈɡrændmʌðər/' },
            { en: 'Cousin', vi: 'Anh chị em họ', emoji: '🧑', phonetic: '/ˈkʌzən/' },
        ]
    },
    family_activities: {
        name: 'Hoạt động gia đình',
        level: 1,
        month: 2,
        words: [
            { en: 'Reunion', vi: 'Đoàn tụ', emoji: '🏠', phonetic: '/riːˈjuːniən/' },
            { en: 'Gathering', vi: 'Buổi họp mặt', emoji: '👨‍👩‍👧‍👦', phonetic: '/ˈɡæðərɪŋ/' },
            { en: 'Housework', vi: 'Việc nhà', emoji: '🧹', phonetic: '/ˈhaʊswɜːrk/' },
            { en: 'Barbecue', vi: 'Tiệc nướng ngoài trời', emoji: '🍖', phonetic: '/ˈbɑːrbɪkjuː/' },
            { en: 'Gardening', vi: 'Làm vườn', emoji: '🌻', phonetic: '/ˈɡɑːrdnɪŋ/' },
            { en: 'Celebrate', vi: 'Kỷ niệm / Ăn mừng', emoji: '🎉', phonetic: '/ˈselɪbreɪt/' },
            { en: 'Tradition', vi: 'Truyền thống', emoji: '🏮', phonetic: '/trəˈdɪʃən/' },
            { en: 'Responsibility', vi: 'Trách nhiệm', emoji: '✅', phonetic: '/rɪˌspɒnsəˈbɪləti/' },
            { en: 'Appreciate', vi: 'Trân trọng', emoji: '💖', phonetic: '/əˈpriːʃieɪt/' },
            { en: 'Support', vi: 'Hỗ trợ', emoji: '🤗', phonetic: '/səˈpɔːrt/' },
        ]
    },
    personality: {
        name: 'Tính cách',
        level: 1,
        month: 2,
        words: [
            { en: 'Generous', vi: 'Hào phóng', emoji: '🎁', phonetic: '/ˈdʒenərəs/' },
            { en: 'Confident', vi: 'Tự tin', emoji: '💪', phonetic: '/ˈkɒnfɪdənt/' },
            { en: 'Curious', vi: 'Tò mò', emoji: '🔍', phonetic: '/ˈkjʊəriəs/' },
            { en: 'Patient', vi: 'Kiên nhẫn', emoji: '⏳', phonetic: '/ˈpeɪʃənt/' },
            { en: 'Honest', vi: 'Thật thà', emoji: '✋', phonetic: '/ˈɒnɪst/' },
            { en: 'Cheerful', vi: 'Vui vẻ', emoji: '😊', phonetic: '/ˈtʃɪərfʊl/' },
            { en: 'Hardworking', vi: 'Chăm chỉ', emoji: '📚', phonetic: '/ˈhɑːrdwɜːrkɪŋ/' },
            { en: 'Creative', vi: 'Sáng tạo', emoji: '🎨', phonetic: '/kriˈeɪtɪv/' },
            { en: 'Reliable', vi: 'Đáng tin cậy', emoji: '🤝', phonetic: '/rɪˈlaɪəbəl/' },
            { en: 'Sensitive', vi: 'Nhạy cảm', emoji: '💐', phonetic: '/ˈsensətɪv/' },
        ]
    },

    // === THÁNG 3 ===
    hobbies_advanced: {
        name: 'Sở thích nâng cao',
        level: 1,
        month: 3,
        words: [
            { en: 'Photography', vi: 'Nhiếp ảnh', emoji: '📸', phonetic: '/fəˈtɒɡrəfi/' },
            { en: 'Calligraphy', vi: 'Thư pháp', emoji: '🖋️', phonetic: '/kəˈlɪɡrəfi/' },
            { en: 'Gardening', vi: 'Làm vườn', emoji: '🌷', phonetic: '/ˈɡɑːrdnɪŋ/' },
            { en: 'Origami', vi: 'Gấp giấy', emoji: '🦢', phonetic: '/ˌɔːrɪˈɡɑːmi/' },
            { en: 'Pottery', vi: 'Gốm sứ', emoji: '🏺', phonetic: '/ˈpɒtəri/' },
            { en: 'Skateboarding', vi: 'Trượt ván', emoji: '🛹', phonetic: '/ˈskeɪtbɔːrdɪŋ/' },
            { en: 'Knitting', vi: 'Đan len', emoji: '🧶', phonetic: '/ˈnɪtɪŋ/' },
            { en: 'Volunteering', vi: 'Hoạt động tình nguyện', emoji: '🤝', phonetic: '/ˌvɒlənˈtɪrɪŋ/' },
            { en: 'Collecting', vi: 'Sưu tầm', emoji: '🗂️', phonetic: '/kəˈlektɪŋ/' },
            { en: 'Bird-watching', vi: 'Ngắm chim', emoji: '🦜', phonetic: '/bɜːrd wɒtʃɪŋ/' },
        ]
    },
    indoor_activities: {
        name: 'Hoạt động trong nhà',
        level: 1,
        month: 3,
        words: [
            { en: 'Board game', vi: 'Trò chơi bàn cờ', emoji: '🎲', phonetic: '/bɔːrd ɡeɪm/' },
            { en: 'Puzzle', vi: 'Xếp hình', emoji: '🧩', phonetic: '/ˈpʌzəl/' },
            { en: 'Video game', vi: 'Trò chơi điện tử', emoji: '🎮', phonetic: '/ˈvɪdioʊ ɡeɪm/' },
            { en: 'Karaoke', vi: 'Hát karaoke', emoji: '🎤', phonetic: '/ˌkæriˈoʊki/' },
            { en: 'Baking', vi: 'Nướng bánh', emoji: '🧁', phonetic: '/ˈbeɪkɪŋ/' },
            { en: 'Chess', vi: 'Cờ vua', emoji: '♟️', phonetic: '/tʃes/' },
            { en: 'Drawing', vi: 'Vẽ tranh', emoji: '🎨', phonetic: '/ˈdrɔːɪŋ/' },
            { en: 'Journaling', vi: 'Viết nhật ký', emoji: '📓', phonetic: '/ˈdʒɜːrnəlɪŋ/' },
            { en: 'Meditation', vi: 'Thiền', emoji: '🧘', phonetic: '/ˌmedɪˈteɪʃən/' },
            { en: 'Storytelling', vi: 'Kể chuyện', emoji: '📖', phonetic: '/ˈstɔːritelɪŋ/' },
        ]
    },

    // === THÁNG 5 ===
    food_drink: {
        name: 'Đồ ăn & Thức uống',
        level: 2,
        month: 5,
        words: [
            { en: 'Appetizer', vi: 'Món khai vị', emoji: '🥗', phonetic: '/ˈæpɪtaɪzər/' },
            { en: 'Main course', vi: 'Món chính', emoji: '🍛', phonetic: '/meɪn kɔːrs/' },
            { en: 'Dessert', vi: 'Món tráng miệng', emoji: '🍰', phonetic: '/dɪˈzɜːrt/' },
            { en: 'Beverage', vi: 'Đồ uống', emoji: '🥤', phonetic: '/ˈbevərɪdʒ/' },
            { en: 'Ingredient', vi: 'Nguyên liệu', emoji: '🧄', phonetic: '/ɪnˈɡriːdiənt/' },
            { en: 'Recipe', vi: 'Công thức nấu ăn', emoji: '📋', phonetic: '/ˈresəpi/' },
            { en: 'Nutrition', vi: 'Dinh dưỡng', emoji: '🥦', phonetic: '/njuːˈtrɪʃən/' },
            { en: 'Seafood', vi: 'Hải sản', emoji: '🦐', phonetic: '/ˈsiːfuːd/' },
            { en: 'Spicy', vi: 'Cay', emoji: '🌶️', phonetic: '/ˈspaɪsi/' },
            { en: 'Delicious', vi: 'Ngon', emoji: '😋', phonetic: '/dɪˈlɪʃəs/' },
        ]
    },
    cooking_methods: {
        name: 'Cách nấu ăn',
        level: 2,
        month: 5,
        words: [
            { en: 'Stir-fry', vi: 'Xào', emoji: '🍳', phonetic: '/stɜːr fraɪ/' },
            { en: 'Steam', vi: 'Hấp', emoji: '♨️', phonetic: '/stiːm/' },
            { en: 'Grill', vi: 'Nướng', emoji: '🔥', phonetic: '/ɡrɪl/' },
            { en: 'Boil', vi: 'Luộc', emoji: '🫕', phonetic: '/bɔɪl/' },
            { en: 'Roast', vi: 'Quay', emoji: '🍗', phonetic: '/roʊst/' },
            { en: 'Chop', vi: 'Chặt / Thái', emoji: '🔪', phonetic: '/tʃɒp/' },
            { en: 'Marinate', vi: 'Ướp gia vị', emoji: '🧂', phonetic: '/ˈmærɪneɪt/' },
            { en: 'Simmer', vi: 'Ninh / Om', emoji: '🍲', phonetic: '/ˈsɪmər/' },
            { en: 'Blend', vi: 'Xay sinh tố', emoji: '🥤', phonetic: '/blend/' },
            { en: 'Slice', vi: 'Cắt lát', emoji: '🍰', phonetic: '/slaɪs/' },
        ]
    },
    restaurants: {
        name: 'Nhà hàng',
        level: 2,
        month: 5,
        words: [
            { en: 'Menu', vi: 'Thực đơn', emoji: '📜', phonetic: '/ˈmenjuː/' },
            { en: 'Waiter', vi: 'Người phục vụ nam', emoji: '🤵', phonetic: '/ˈweɪtər/' },
            { en: 'Waitress', vi: 'Người phục vụ nữ', emoji: '🤵‍♀️', phonetic: '/ˈweɪtrəs/' },
            { en: 'Bill', vi: 'Hóa đơn', emoji: '🧾', phonetic: '/bɪl/' },
            { en: 'Tip', vi: 'Tiền bo', emoji: '💵', phonetic: '/tɪp/' },
            { en: 'Reservation', vi: 'Đặt bàn', emoji: '📞', phonetic: '/ˌrezərˈveɪʃən/' },
            { en: 'Order', vi: 'Gọi món', emoji: '📝', phonetic: '/ˈɔːrdər/' },
            { en: 'Chopsticks', vi: 'Đũa', emoji: '🥢', phonetic: '/ˈtʃɒpstɪks/' },
            { en: 'Specialty', vi: 'Món đặc sản', emoji: '⭐', phonetic: '/ˈspeʃəlti/' },
            { en: 'Serve', vi: 'Phục vụ', emoji: '🍽️', phonetic: '/sɜːrv/' },
        ]
    },

    // === THÁNG 6 ===
    sports: {
        name: 'Thể thao',
        level: 2,
        month: 6,
        words: [
            { en: 'Badminton', vi: 'Cầu lông', emoji: '🏸', phonetic: '/ˈbædmɪntən/' },
            { en: 'Table tennis', vi: 'Bóng bàn', emoji: '🏓', phonetic: '/ˈteɪbəl ˈtenɪs/' },
            { en: 'Volleyball', vi: 'Bóng chuyền', emoji: '🏐', phonetic: '/ˈvɒlibɔːl/' },
            { en: 'Martial arts', vi: 'Võ thuật', emoji: '🥋', phonetic: '/ˈmɑːrʃəl ɑːrts/' },
            { en: 'Athletics', vi: 'Điền kinh', emoji: '🏃', phonetic: '/æθˈletɪks/' },
            { en: 'Gymnastics', vi: 'Thể dục dụng cụ', emoji: '🤸', phonetic: '/dʒɪmˈnæstɪks/' },
            { en: 'Cycling', vi: 'Đạp xe', emoji: '🚴', phonetic: '/ˈsaɪklɪŋ/' },
            { en: 'Archery', vi: 'Bắn cung', emoji: '🏹', phonetic: '/ˈɑːrtʃəri/' },
            { en: 'Wrestling', vi: 'Đấu vật', emoji: '🤼', phonetic: '/ˈreslɪŋ/' },
            { en: 'Championship', vi: 'Giải vô địch', emoji: '🏆', phonetic: '/ˈtʃæmpiənʃɪp/' },
        ]
    },
    games_competition: {
        name: 'Trò chơi & Thi đấu',
        level: 2,
        month: 6,
        words: [
            { en: 'Opponent', vi: 'Đối thủ', emoji: '🆚', phonetic: '/əˈpoʊnənt/' },
            { en: 'Teammate', vi: 'Đồng đội', emoji: '🤝', phonetic: '/ˈtiːmmeɪt/' },
            { en: 'Score', vi: 'Điểm số', emoji: '🔢', phonetic: '/skɔːr/' },
            { en: 'Referee', vi: 'Trọng tài', emoji: '🧑‍⚖️', phonetic: '/ˌrefəˈriː/' },
            { en: 'Champion', vi: 'Nhà vô địch', emoji: '🥇', phonetic: '/ˈtʃæmpiən/' },
            { en: 'Medal', vi: 'Huy chương', emoji: '🏅', phonetic: '/ˈmedəl/' },
            { en: 'Stadium', vi: 'Sân vận động', emoji: '🏟️', phonetic: '/ˈsteɪdiəm/' },
            { en: 'Tournament', vi: 'Giải đấu', emoji: '🏆', phonetic: '/ˈtʊrnəmənt/' },
            { en: 'Practice', vi: 'Luyện tập', emoji: '💪', phonetic: '/ˈpræktɪs/' },
            { en: 'Victory', vi: 'Chiến thắng', emoji: '🎉', phonetic: '/ˈvɪktəri/' },
        ]
    },

    // === THÁNG 7 ===
    world_around_us: {
        name: 'Thế giới quanh ta',
        level: 2,
        month: 7,
        words: [
            { en: 'Continent', vi: 'Châu lục', emoji: '🌍', phonetic: '/ˈkɒntɪnənt/' },
            { en: 'Population', vi: 'Dân số', emoji: '👥', phonetic: '/ˌpɒpjuˈleɪʃən/' },
            { en: 'Culture', vi: 'Văn hóa', emoji: '🎭', phonetic: '/ˈkʌltʃər/' },
            { en: 'Climate', vi: 'Khí hậu', emoji: '🌡️', phonetic: '/ˈklaɪmət/' },
            { en: 'Landmark', vi: 'Địa danh', emoji: '🗼', phonetic: '/ˈlændmɑːrk/' },
            { en: 'Border', vi: 'Biên giới', emoji: '🗺️', phonetic: '/ˈbɔːrdər/' },
            { en: 'Capital', vi: 'Thủ đô', emoji: '🏛️', phonetic: '/ˈkæpɪtəl/' },
            { en: 'Currency', vi: 'Tiền tệ', emoji: '💱', phonetic: '/ˈkʌrənsi/' },
            { en: 'Language', vi: 'Ngôn ngữ', emoji: '🗣️', phonetic: '/ˈlæŋɡwɪdʒ/' },
            { en: 'Nation', vi: 'Quốc gia', emoji: '🏳️', phonetic: '/ˈneɪʃən/' },
        ]
    },
    geography: {
        name: 'Địa lý',
        level: 2,
        month: 7,
        words: [
            { en: 'Peninsula', vi: 'Bán đảo', emoji: '🏝️', phonetic: '/pəˈnɪnsjələ/' },
            { en: 'Desert', vi: 'Sa mạc', emoji: '🏜️', phonetic: '/ˈdezərt/' },
            { en: 'Rainforest', vi: 'Rừng nhiệt đới', emoji: '🌴', phonetic: '/ˈreɪnfɔːrɪst/' },
            { en: 'Volcano', vi: 'Núi lửa', emoji: '🌋', phonetic: '/vɒlˈkeɪnoʊ/' },
            { en: 'Waterfall', vi: 'Thác nước', emoji: '💦', phonetic: '/ˈwɔːtərfɔːl/' },
            { en: 'Valley', vi: 'Thung lũng', emoji: '🏞️', phonetic: '/ˈvæli/' },
            { en: 'Ocean', vi: 'Đại dương', emoji: '🌊', phonetic: '/ˈoʊʃən/' },
            { en: 'Island', vi: 'Hòn đảo', emoji: '🏝️', phonetic: '/ˈaɪlənd/' },
            { en: 'Mountain range', vi: 'Dãy núi', emoji: '⛰️', phonetic: '/ˈmaʊntən reɪndʒ/' },
            { en: 'Plateau', vi: 'Cao nguyên', emoji: '🏔️', phonetic: '/plæˈtoʊ/' },
        ]
    },

    // === THÁNG 9 ===
    health: {
        name: 'Sức khỏe',
        level: 3,
        month: 9,
        words: [
            { en: 'Symptom', vi: 'Triệu chứng', emoji: '🤒', phonetic: '/ˈsɪmptəm/' },
            { en: 'Fever', vi: 'Sốt', emoji: '🌡️', phonetic: '/ˈfiːvər/' },
            { en: 'Headache', vi: 'Đau đầu', emoji: '🤕', phonetic: '/ˈhedeɪk/' },
            { en: 'Toothache', vi: 'Đau răng', emoji: '🦷', phonetic: '/ˈtuːθeɪk/' },
            { en: 'Stomachache', vi: 'Đau bụng', emoji: '🤢', phonetic: '/ˈstʌməkeɪk/' },
            { en: 'Medicine', vi: 'Thuốc', emoji: '💊', phonetic: '/ˈmedɪsən/' },
            { en: 'Pharmacy', vi: 'Nhà thuốc', emoji: '🏥', phonetic: '/ˈfɑːrməsi/' },
            { en: 'Vaccination', vi: 'Tiêm chủng', emoji: '💉', phonetic: '/ˌvæksɪˈneɪʃən/' },
            { en: 'Allergy', vi: 'Dị ứng', emoji: '🤧', phonetic: '/ˈælədʒi/' },
            { en: 'Recovery', vi: 'Hồi phục', emoji: '💚', phonetic: '/rɪˈkʌvəri/' },
        ]
    },
    healthy_lifestyle: {
        name: 'Lối sống lành mạnh',
        level: 3,
        month: 9,
        words: [
            { en: 'Exercise', vi: 'Tập thể dục', emoji: '🏋️', phonetic: '/ˈeksərsaɪz/' },
            { en: 'Balanced diet', vi: 'Chế độ ăn cân bằng', emoji: '🥗', phonetic: '/ˈbælənst ˈdaɪət/' },
            { en: 'Hygiene', vi: 'Vệ sinh', emoji: '🧼', phonetic: '/ˈhaɪdʒiːn/' },
            { en: 'Sleep', vi: 'Giấc ngủ', emoji: '😴', phonetic: '/sliːp/' },
            { en: 'Vitamin', vi: 'Vitamin', emoji: '💊', phonetic: '/ˈvaɪtəmɪn/' },
            { en: 'Protein', vi: 'Chất đạm', emoji: '🥩', phonetic: '/ˈproʊtiːn/' },
            { en: 'Fiber', vi: 'Chất xơ', emoji: '🥬', phonetic: '/ˈfaɪbər/' },
            { en: 'Obesity', vi: 'Béo phì', emoji: '⚖️', phonetic: '/oʊˈbiːsəti/' },
            { en: 'Stretching', vi: 'Giãn cơ', emoji: '🤸', phonetic: '/ˈstretʃɪŋ/' },
            { en: 'Wellness', vi: 'Sức khỏe tốt', emoji: '🌟', phonetic: '/ˈwelnəs/' },
        ]
    },

    // === THÁNG 10 ===
    festivals: {
        name: 'Lễ hội',
        level: 3,
        month: 10,
        words: [
            { en: 'Lunar New Year', vi: 'Tết Nguyên Đán', emoji: '🧧', phonetic: '/ˈluːnər njuː jɪr/' },
            { en: 'Mid-Autumn', vi: 'Trung thu', emoji: '🥮', phonetic: '/mɪd ˈɔːtəm/' },
            { en: 'Lantern', vi: 'Đèn lồng', emoji: '🏮', phonetic: '/ˈlæntərn/' },
            { en: 'Fireworks', vi: 'Pháo hoa', emoji: '🎆', phonetic: '/ˈfaɪərwɜːrks/' },
            { en: 'Dragon dance', vi: 'Múa rồng', emoji: '🐉', phonetic: '/ˈdræɡən dæns/' },
            { en: 'Ceremony', vi: 'Nghi lễ', emoji: '🎊', phonetic: '/ˈserəmoʊni/' },
            { en: 'Decoration', vi: 'Trang trí', emoji: '🎀', phonetic: '/ˌdekəˈreɪʃən/' },
            { en: 'Parade', vi: 'Diễu hành', emoji: '🎺', phonetic: '/pəˈreɪd/' },
            { en: 'Costume', vi: 'Trang phục', emoji: '👘', phonetic: '/ˈkɒstjuːm/' },
            { en: 'Worship', vi: 'Thờ cúng', emoji: '🙏', phonetic: '/ˈwɜːrʃɪp/' },
        ]
    },
    cities: {
        name: 'Thành phố',
        level: 3,
        month: 10,
        words: [
            { en: 'Skyscraper', vi: 'Tòa nhà chọc trời', emoji: '🏙️', phonetic: '/ˈskaɪskreɪpər/' },
            { en: 'Suburb', vi: 'Vùng ngoại ô', emoji: '🏘️', phonetic: '/ˈsʌbɜːrb/' },
            { en: 'Downtown', vi: 'Trung tâm thành phố', emoji: '🌆', phonetic: '/ˈdaʊntaʊn/' },
            { en: 'Traffic jam', vi: 'Tắc đường', emoji: '🚗', phonetic: '/ˈtræfɪk dʒæm/' },
            { en: 'Public transport', vi: 'Giao thông công cộng', emoji: '🚌', phonetic: '/ˈpʌblɪk ˈtrænspɔːrt/' },
            { en: 'Pedestrian', vi: 'Người đi bộ', emoji: '🚶', phonetic: '/pəˈdestriən/' },
            { en: 'Monument', vi: 'Tượng đài', emoji: '🗽', phonetic: '/ˈmɒnjumənt/' },
            { en: 'Museum', vi: 'Bảo tàng', emoji: '🏛️', phonetic: '/mjuˈziːəm/' },
            { en: 'Cathedral', vi: 'Nhà thờ lớn', emoji: '⛪', phonetic: '/kəˈθiːdrəl/' },
            { en: 'Marketplace', vi: 'Chợ', emoji: '🏪', phonetic: '/ˈmɑːrkɪtpleɪs/' },
        ]
    },

    // === THÁNG 11 ===
    famous_people: {
        name: 'Người nổi tiếng',
        level: 3,
        month: 11,
        words: [
            { en: 'Scientist', vi: 'Nhà khoa học', emoji: '🔬', phonetic: '/ˈsaɪəntɪst/' },
            { en: 'Inventor', vi: 'Nhà phát minh', emoji: '💡', phonetic: '/ɪnˈventər/' },
            { en: 'Explorer', vi: 'Nhà thám hiểm', emoji: '🧭', phonetic: '/ɪkˈsplɔːrər/' },
            { en: 'Politician', vi: 'Chính trị gia', emoji: '🏛️', phonetic: '/ˌpɒləˈtɪʃən/' },
            { en: 'Composer', vi: 'Nhà soạn nhạc', emoji: '🎼', phonetic: '/kəmˈpoʊzər/' },
            { en: 'Achievement', vi: 'Thành tựu', emoji: '🏆', phonetic: '/əˈtʃiːvmənt/' },
            { en: 'Biography', vi: 'Tiểu sử', emoji: '📖', phonetic: '/baɪˈɒɡrəfi/' },
            { en: 'Influence', vi: 'Ảnh hưởng', emoji: '🌟', phonetic: '/ˈɪnfluəns/' },
            { en: 'Contribution', vi: 'Đóng góp', emoji: '🤲', phonetic: '/ˌkɒntrɪˈbjuːʃən/' },
            { en: 'Inspiration', vi: 'Cảm hứng', emoji: '✨', phonetic: '/ˌɪnspɪˈreɪʃən/' },
        ]
    },
    nature: {
        name: 'Thiên nhiên',
        level: 3,
        month: 11,
        words: [
            { en: 'Ecosystem', vi: 'Hệ sinh thái', emoji: '🌿', phonetic: '/ˈiːkoʊsɪstəm/' },
            { en: 'Species', vi: 'Loài', emoji: '🦋', phonetic: '/ˈspiːʃiːz/' },
            { en: 'Habitat', vi: 'Môi trường sống', emoji: '🏞️', phonetic: '/ˈhæbɪtæt/' },
            { en: 'Endangered', vi: 'Có nguy cơ tuyệt chủng', emoji: '🐼', phonetic: '/ɪnˈdeɪndʒərd/' },
            { en: 'Conservation', vi: 'Bảo tồn', emoji: '💚', phonetic: '/ˌkɒnsərˈveɪʃən/' },
            { en: 'Biodiversity', vi: 'Đa dạng sinh học', emoji: '🌍', phonetic: '/ˌbaɪoʊdaɪˈvɜːrsəti/' },
            { en: 'Wildlife', vi: 'Động vật hoang dã', emoji: '🦁', phonetic: '/ˈwaɪldlaɪf/' },
            { en: 'Deforestation', vi: 'Phá rừng', emoji: '🪓', phonetic: '/diːˌfɔːrɪˈsteɪʃən/' },
            { en: 'Coral reef', vi: 'Rạn san hô', emoji: '🪸', phonetic: '/ˈkɔːrəl riːf/' },
            { en: 'Migration', vi: 'Di cư', emoji: '🦅', phonetic: '/maɪˈɡreɪʃən/' },
        ]
    },
};

// ============================================
// PHONICS - DIPHTHONGS & ADVANCED SOUNDS
// ============================================
GRADE_DATA[6].phonics = [
    { letter: 'OI / OY', sound: '/ɔɪ/', words: [
        { word: 'Choice', highlight: 'oi', emoji: '✅' },
        { word: 'Enjoy', highlight: 'oy', emoji: '😊' },
        { word: 'Noise', highlight: 'oi', emoji: '🔊' }
    ]},
    { letter: 'OU / OW', sound: '/aʊ/', words: [
        { word: 'Mountain', highlight: 'ou', emoji: '⛰️' },
        { word: 'Crowded', highlight: 'ow', emoji: '👥' },
        { word: 'Thousand', highlight: 'ou', emoji: '🔢' }
    ]},
    { letter: 'EI / EY', sound: '/eɪ/', words: [
        { word: 'Neighbor', highlight: 'ei', emoji: '🏠' },
        { word: 'Survey', highlight: 'ey', emoji: '📋' },
        { word: 'Weight', highlight: 'ei', emoji: '⚖️' }
    ]},
    { letter: 'OUGH', sound: '/ʌf/ /oʊ/ /ɔː/', words: [
        { word: 'Enough', highlight: 'ough', emoji: '✋' },
        { word: 'Though', highlight: 'ough', emoji: '🤔' },
        { word: 'Thought', highlight: 'ough', emoji: '💭' }
    ]},
    { letter: 'Silent K', sound: '/n/', words: [
        { word: 'Knife', highlight: 'Kn', emoji: '🔪' },
        { word: 'Knight', highlight: 'Kn', emoji: '⚔️' },
        { word: 'Knowledge', highlight: 'Kn', emoji: '📚' }
    ]},
    { letter: 'Silent W', sound: '/r/', words: [
        { word: 'Write', highlight: 'Wr', emoji: '✍️' },
        { word: 'Wrong', highlight: 'Wr', emoji: '❌' },
        { word: 'Wrestle', highlight: 'Wr', emoji: '🤼' }
    ]},
    { letter: 'Silent B', sound: '(silent)', words: [
        { word: 'Climb', highlight: 'mb', emoji: '🧗' },
        { word: 'Comb', highlight: 'mb', emoji: '💇' },
        { word: 'Thumb', highlight: 'mb', emoji: '👍' }
    ]},
    { letter: 'PH', sound: '/f/', words: [
        { word: 'Photograph', highlight: 'Ph', emoji: '📸' },
        { word: 'Pharmacy', highlight: 'Ph', emoji: '🏥' },
        { word: 'Elephant', highlight: 'ph', emoji: '🐘' }
    ]},
    { letter: 'GH', sound: '/f/ (silent)', words: [
        { word: 'Laugh', highlight: 'gh', emoji: '😂' },
        { word: 'Cough', highlight: 'gh', emoji: '🤧' },
        { word: 'Daughter', highlight: 'gh', emoji: '👧' }
    ]},
    { letter: 'TION', sound: '/ʃən/', words: [
        { word: 'Education', highlight: 'tion', emoji: '🎓' },
        { word: 'Population', highlight: 'tion', emoji: '👥' },
        { word: 'Competition', highlight: 'tion', emoji: '🏆' }
    ]},
    { letter: 'SION', sound: '/ʒən/', words: [
        { word: 'Television', highlight: 'sion', emoji: '📺' },
        { word: 'Decision', highlight: 'sion', emoji: '🤔' },
        { word: 'Occasion', highlight: 'sion', emoji: '🎉' }
    ]},
    { letter: 'TURE', sound: '/tʃər/', words: [
        { word: 'Nature', highlight: 'ture', emoji: '🌿' },
        { word: 'Culture', highlight: 'ture', emoji: '🎭' },
        { word: 'Adventure', highlight: 'ture', emoji: '🗺️' }
    ]},
];

// ============================================
// CÂU MẪU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[6].sentences = {
    level1: [
        { sentence: ['My', 'favourite', 'subject', 'is', 'Mathematics'], emoji: '🔢', vi: 'Môn học yêu thích của tôi là Toán', extra: ['his', 'are'] },
        { sentence: ['She', 'has', 'three', 'siblings', 'in', 'her', 'family'], emoji: '👫', vi: 'Cô ấy có ba anh chị em trong gia đình', extra: ['my', 'on'] },
        { sentence: ['My', 'grandmother', 'is', 'very', 'generous', 'and', 'kind'], emoji: '👵', vi: 'Bà tôi rất hào phóng và tốt bụng', extra: ['your', 'or'] },
        { sentence: ['I', 'enjoy', 'photography', 'in', 'my', 'free', 'time'], emoji: '📸', vi: 'Tôi thích nhiếp ảnh khi rảnh rỗi', extra: ['his', 'on'] },
        { sentence: ['We', 'have', 'a', 'school', 'assembly', 'every', 'Monday'], emoji: '🏫', vi: 'Chúng tôi có buổi chào cờ mỗi thứ Hai', extra: ['an', 'never'] },
        { sentence: ['He', 'is', 'confident', 'when', 'giving', 'a', 'presentation'], emoji: '🎤', vi: 'Anh ấy tự tin khi thuyết trình', extra: ['she', 'after'] },
        { sentence: ['Our', 'class', 'went', 'on', 'a', 'field', 'trip', 'yesterday'], emoji: '🚌', vi: 'Lớp chúng tôi đi tham quan hôm qua', extra: ['their', 'today'] },
        { sentence: ['Playing', 'chess', 'helps', 'improve', 'your', 'thinking'], emoji: '♟️', vi: 'Chơi cờ vua giúp cải thiện tư duy', extra: ['his', 'reduce'] },
    ],
    level2: [
        { sentence: ['The', 'recipe', 'requires', 'five', 'different', 'ingredients'], emoji: '📋', vi: 'Công thức cần năm nguyên liệu khác nhau', extra: ['a', 'same'] },
        { sentence: ['Badminton', 'is', 'one', 'of', 'the', 'most', 'popular', 'sports'], emoji: '🏸', vi: 'Cầu lông là một trong những môn thể thao phổ biến nhất', extra: ['a', 'least'] },
        { sentence: ['The', 'referee', 'stopped', 'the', 'match', 'after', 'the', 'foul'], emoji: '🧑‍⚖️', vi: 'Trọng tài dừng trận đấu sau lỗi phạm quy', extra: ['before', 'a'] },
        { sentence: ['Asia', 'is', 'the', 'largest', 'continent', 'in', 'the', 'world'], emoji: '🌍', vi: 'Châu Á là châu lục lớn nhất thế giới', extra: ['smallest', 'a'] },
        { sentence: ['The', 'desert', 'has', 'very', 'little', 'rainfall', 'each', 'year'], emoji: '🏜️', vi: 'Sa mạc có rất ít mưa mỗi năm', extra: ['much', 'a'] },
        { sentence: ['Could', 'I', 'see', 'the', 'menu', 'please'], emoji: '📜', vi: 'Cho tôi xem thực đơn được không', extra: ['should', 'a'] },
        { sentence: ['She', 'ordered', 'a', 'delicious', 'seafood', 'main', 'course'], emoji: '🦐', vi: 'Cô ấy gọi một món hải sản chính ngon', extra: ['he', 'the'] },
        { sentence: ['The', 'champion', 'received', 'a', 'gold', 'medal'], emoji: '🥇', vi: 'Nhà vô địch nhận được huy chương vàng', extra: ['silver', 'the'] },
    ],
    level3: [
        { sentence: ['You', 'should', 'eat', 'a', 'balanced', 'diet', 'every', 'day'], emoji: '🥗', vi: 'Bạn nên ăn uống cân bằng mỗi ngày', extra: ['must', 'the'] },
        { sentence: ['The', 'doctor', 'prescribed', 'medicine', 'for', 'his', 'fever'], emoji: '💊', vi: 'Bác sĩ kê thuốc cho cơn sốt của anh ấy', extra: ['her', 'from'] },
        { sentence: ['We', 'celebrate', 'Lunar', 'New', 'Year', 'with', 'fireworks'], emoji: '🎆', vi: 'Chúng tôi đón Tết Nguyên Đán với pháo hoa', extra: ['they', 'without'] },
        { sentence: ['The', 'skyscrapers', 'make', 'the', 'city', 'look', 'modern'], emoji: '🏙️', vi: 'Những tòa nhà chọc trời làm thành phố trông hiện đại', extra: ['a', 'ancient'] },
        { sentence: ['Many', 'endangered', 'species', 'need', 'conservation', 'efforts'], emoji: '🐼', vi: 'Nhiều loài có nguy cơ tuyệt chủng cần nỗ lực bảo tồn', extra: ['few', 'some'] },
        { sentence: ['The', 'scientist', 'made', 'a', 'great', 'contribution', 'to', 'physics'], emoji: '🔬', vi: 'Nhà khoa học đã đóng góp lớn cho vật lý', extra: ['small', 'an'] },
        { sentence: ['Deforestation', 'destroys', 'the', 'natural', 'habitat', 'of', 'wildlife'], emoji: '🪓', vi: 'Phá rừng hủy hoại môi trường sống của động vật hoang dã', extra: ['creates', 'a'] },
        { sentence: ['The', 'dragon', 'dance', 'is', 'a', 'tradition', 'during', 'Tet'], emoji: '🐉', vi: 'Múa rồng là truyền thống trong dịp Tết', extra: ['after', 'the'] },
    ],
};

// ============================================
// SPELLING THEO CẤP ĐỘ
// ============================================
GRADE_DATA[6].spelling = {
    level1: [
        { word: 'UNIFORM', emoji: '👔', vi: 'Đồng phục' },
        { word: 'LIBRARY', emoji: '📚', vi: 'Thư viện' },
        { word: 'HISTORY', emoji: '🏛️', vi: 'Lịch sử' },
        { word: 'SIBLING', emoji: '👫', vi: 'Anh chị em ruột' },
        { word: 'PATIENT', emoji: '⏳', vi: 'Kiên nhẫn' },
        { word: 'CURIOUS', emoji: '🔍', vi: 'Tò mò' },
        { word: 'POTTERY', emoji: '🏺', vi: 'Gốm sứ' },
        { word: 'ORIGAMI', emoji: '🦢', vi: 'Gấp giấy' },
        { word: 'PROJECT', emoji: '📊', vi: 'Dự án' },
        { word: 'CANTEEN', emoji: '🍽️', vi: 'Căng tin' },
        { word: 'SUBJECT', emoji: '📖', vi: 'Môn học' },
        { word: 'CHEERFUL', emoji: '😊', vi: 'Vui vẻ' },
    ],
    level2: [
        { word: 'INGREDIENT', emoji: '🧄', vi: 'Nguyên liệu' },
        { word: 'NUTRITION', emoji: '🥦', vi: 'Dinh dưỡng' },
        { word: 'BADMINTON', emoji: '🏸', vi: 'Cầu lông' },
        { word: 'CHAMPION', emoji: '🥇', vi: 'Nhà vô địch' },
        { word: 'CONTINENT', emoji: '🌍', vi: 'Châu lục' },
        { word: 'WATERFALL', emoji: '💦', vi: 'Thác nước' },
        { word: 'OPPONENT', emoji: '🆚', vi: 'Đối thủ' },
        { word: 'MARINATE', emoji: '🧂', vi: 'Ướp gia vị' },
        { word: 'CURRENCY', emoji: '💱', vi: 'Tiền tệ' },
        { word: 'PENINSULA', emoji: '🏝️', vi: 'Bán đảo' },
        { word: 'TOURNAMENT', emoji: '🏆', vi: 'Giải đấu' },
        { word: 'POPULATION', emoji: '👥', vi: 'Dân số' },
    ],
    level3: [
        { word: 'VACCINATION', emoji: '💉', vi: 'Tiêm chủng' },
        { word: 'BIODIVERSITY', emoji: '🌍', vi: 'Đa dạng sinh học' },
        { word: 'ENDANGERED', emoji: '🐼', vi: 'Có nguy cơ tuyệt chủng' },
        { word: 'SKYSCRAPER', emoji: '🏙️', vi: 'Tòa nhà chọc trời' },
        { word: 'PEDESTRIAN', emoji: '🚶', vi: 'Người đi bộ' },
        { word: 'DECORATION', emoji: '🎀', vi: 'Trang trí' },
        { word: 'ACHIEVEMENT', emoji: '🏆', vi: 'Thành tựu' },
        { word: 'INSPIRATION', emoji: '✨', vi: 'Cảm hứng' },
        { word: 'CONSERVATION', emoji: '💚', vi: 'Bảo tồn' },
        { word: 'DEFORESTATION', emoji: '🪓', vi: 'Phá rừng' },
        { word: 'CONTRIBUTION', emoji: '🤲', vi: 'Đóng góp' },
        { word: 'ECOSYSTEM', emoji: '🌿', vi: 'Hệ sinh thái' },
    ],
};

// ============================================
// NGHE HIỂU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[6].listening = {
    level1: [
        { word: 'Timetable', options: [{ emoji: '📅', label: 'Timetable' }, { emoji: '📋', label: 'Examination' }, { emoji: '📝', label: 'Homework' }, { emoji: '📆', label: 'Semester' }], correct: 0 },
        { word: 'Biology', options: [{ emoji: '🧪', label: 'Chemistry' }, { emoji: '🧬', label: 'Biology' }, { emoji: '⚛️', label: 'Physics' }, { emoji: '🔢', label: 'Mathematics' }], correct: 1 },
        { word: 'Nephew', options: [{ emoji: '👧', label: 'Niece' }, { emoji: '🧑', label: 'Cousin' }, { emoji: '👦', label: 'Nephew' }, { emoji: '👫', label: 'Sibling' }], correct: 2 },
        { word: 'Generous', options: [{ emoji: '💪', label: 'Confident' }, { emoji: '🔍', label: 'Curious' }, { emoji: '⏳', label: 'Patient' }, { emoji: '🎁', label: 'Generous' }], correct: 3 },
        { word: 'Origami', options: [{ emoji: '🦢', label: 'Origami' }, { emoji: '🏺', label: 'Pottery' }, { emoji: '📸', label: 'Photography' }, { emoji: '🖋️', label: 'Calligraphy' }], correct: 0 },
        { word: 'Chess', options: [{ emoji: '🧩', label: 'Puzzle' }, { emoji: '♟️', label: 'Chess' }, { emoji: '🎲', label: 'Board game' }, { emoji: '🎮', label: 'Video game' }], correct: 1 },
        { word: 'Presentation', options: [{ emoji: '📊', label: 'Project' }, { emoji: '🏆', label: 'Competition' }, { emoji: '🎤', label: 'Presentation' }, { emoji: '🗣️', label: 'Debate' }], correct: 2 },
        { word: 'Reliable', options: [{ emoji: '😊', label: 'Cheerful' }, { emoji: '🎨', label: 'Creative' }, { emoji: '✋', label: 'Honest' }, { emoji: '🤝', label: 'Reliable' }], correct: 3 },
    ],
    level2: [
        { word: 'Dessert', options: [{ emoji: '🍰', label: 'Dessert' }, { emoji: '🥗', label: 'Appetizer' }, { emoji: '🍛', label: 'Main course' }, { emoji: '🥤', label: 'Beverage' }], correct: 0 },
        { word: 'Archery', options: [{ emoji: '🏸', label: 'Badminton' }, { emoji: '🏹', label: 'Archery' }, { emoji: '🤸', label: 'Gymnastics' }, { emoji: '🚴', label: 'Cycling' }], correct: 1 },
        { word: 'Volcano', options: [{ emoji: '🏜️', label: 'Desert' }, { emoji: '💦', label: 'Waterfall' }, { emoji: '🌋', label: 'Volcano' }, { emoji: '🏞️', label: 'Valley' }], correct: 2 },
        { word: 'Reservation', options: [{ emoji: '📜', label: 'Menu' }, { emoji: '🧾', label: 'Bill' }, { emoji: '📝', label: 'Order' }, { emoji: '📞', label: 'Reservation' }], correct: 3 },
        { word: 'Stadium', options: [{ emoji: '🏟️', label: 'Stadium' }, { emoji: '🏅', label: 'Medal' }, { emoji: '🏆', label: 'Tournament' }, { emoji: '🆚', label: 'Opponent' }], correct: 0 },
        { word: 'Peninsula', options: [{ emoji: '🏜️', label: 'Desert' }, { emoji: '🏝️', label: 'Peninsula' }, { emoji: '🌴', label: 'Rainforest' }, { emoji: '⛰️', label: 'Mountain' }], correct: 1 },
    ],
    level3: [
        { word: 'Pharmacy', options: [{ emoji: '🏥', label: 'Pharmacy' }, { emoji: '💊', label: 'Medicine' }, { emoji: '💉', label: 'Vaccination' }, { emoji: '🤧', label: 'Allergy' }], correct: 0 },
        { word: 'Lantern', options: [{ emoji: '🎆', label: 'Fireworks' }, { emoji: '🏮', label: 'Lantern' }, { emoji: '🎀', label: 'Decoration' }, { emoji: '👘', label: 'Costume' }], correct: 1 },
        { word: 'Pedestrian', options: [{ emoji: '🏙️', label: 'Skyscraper' }, { emoji: '🏘️', label: 'Suburb' }, { emoji: '🚶', label: 'Pedestrian' }, { emoji: '🌆', label: 'Downtown' }], correct: 2 },
        { word: 'Migration', options: [{ emoji: '🌿', label: 'Ecosystem' }, { emoji: '🦋', label: 'Species' }, { emoji: '🏞️', label: 'Habitat' }, { emoji: '🦅', label: 'Migration' }], correct: 3 },
        { word: 'Ceremony', options: [{ emoji: '🎊', label: 'Ceremony' }, { emoji: '🎺', label: 'Parade' }, { emoji: '🐉', label: 'Dragon dance' }, { emoji: '🙏', label: 'Worship' }], correct: 0 },
        { word: 'Explorer', options: [{ emoji: '🔬', label: 'Scientist' }, { emoji: '🧭', label: 'Explorer' }, { emoji: '💡', label: 'Inventor' }, { emoji: '🎼', label: 'Composer' }], correct: 1 },
    ],
};
