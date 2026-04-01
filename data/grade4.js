// ============================================
// LỚP 4 - GIÁO TRÌNH 12 THÁNG - 3 CẤP ĐỘ
// Mở rộng vốn từ và ngữ pháp (age 9-10)
// ============================================
GRADE_DATA[4] = {};
GRADE_DATA[4].info = {
    levels: [
        { id: 1, name: 'Beginner', nameVi: 'Cơ bản', months: [1,2,3,4], color: '#4ECDC4', icon: '🌱' },
        { id: 2, name: 'Intermediate', nameVi: 'Trung cấp', months: [5,6,7,8], color: '#A855F7', icon: '🌿' },
        { id: 3, name: 'Upper-Intermediate', nameVi: 'Nâng cao', months: [9,10,11,12], color: '#FF6B9D', icon: '🌳' },
    ],
    months: [
        { month: 1, title: 'Khám phá thế giới', topics: ['geography', 'weather_advanced'] },
        { month: 2, title: 'Cảm xúc của em', topics: ['emotions', 'emotions_actions'] },
        { month: 3, title: 'Thể thao và âm nhạc', topics: ['sports_advanced', 'music_instruments'] },
        { month: 4, title: 'Trong nhà bếp', topics: ['cooking', 'cooking_tools'] },
        { month: 5, title: 'Đi mua sắm', topics: ['shopping', 'shopping_places'] },
        { month: 6, title: 'Công nghệ', topics: ['technology', 'technology_actions'] },
        { month: 7, title: 'Khoa học quanh em', topics: ['science', 'science_nature'] },
        { month: 8, title: 'Cộng đồng', topics: ['community', 'community_places'] },
        { month: 9, title: 'Ngày lễ', topics: ['holidays', 'holidays_activities'] },
        { month: 10, title: 'Phương tiện giao thông', topics: ['transportation', 'transportation_rules'] },
        { month: 11, title: 'Tổng hợp nâng cao', topics: ['review_vocab_4', 'review_grammar_4'] },
        { month: 12, title: 'Tổng ôn tập', topics: ['review_all_4a', 'review_all_4b'] },
    ]
};

// ============================================
// TỪ VỰNG - 400+ từ chia theo chủ đề
// ============================================
GRADE_DATA[4].vocab = {
    // === THÁNG 1: Khám phá thế giới ===
    geography: {
        name: 'Địa lý',
        level: 1,
        month: 1,
        words: [
            { en: 'Continent', vi: 'Châu lục', emoji: '🌍', phonetic: '/ˈkɒntɪnənt/' },
            { en: 'Ocean', vi: 'Đại dương', emoji: '🌊', phonetic: '/ˈoʊʃən/' },
            { en: 'Island', vi: 'Hòn đảo', emoji: '🏝️', phonetic: '/ˈaɪlənd/' },
            { en: 'Desert', vi: 'Sa mạc', emoji: '🏜️', phonetic: '/ˈdezərt/' },
            { en: 'Forest', vi: 'Rừng', emoji: '🌲', phonetic: '/ˈfɒrɪst/' },
            { en: 'Valley', vi: 'Thung lũng', emoji: '🏞️', phonetic: '/ˈvæli/' },
            { en: 'Volcano', vi: 'Núi lửa', emoji: '🌋', phonetic: '/vɒlˈkeɪnoʊ/' },
            { en: 'Lake', vi: 'Hồ nước', emoji: '🏞️', phonetic: '/leɪk/' },
            { en: 'Waterfall', vi: 'Thác nước', emoji: '💧', phonetic: '/ˈwɔːtərfɔːl/' },
            { en: 'Cave', vi: 'Hang động', emoji: '🕳️', phonetic: '/keɪv/' },
        ]
    },
    weather_advanced: {
        name: 'Thời tiết nâng cao',
        level: 1,
        month: 1,
        words: [
            { en: 'Temperature', vi: 'Nhiệt độ', emoji: '🌡️', phonetic: '/ˈtemprətʃər/' },
            { en: 'Forecast', vi: 'Dự báo', emoji: '📺', phonetic: '/ˈfɔːrkæst/' },
            { en: 'Hurricane', vi: 'Bão lớn', emoji: '🌀', phonetic: '/ˈhʌrɪkeɪn/' },
            { en: 'Thunder', vi: 'Sấm sét', emoji: '⚡', phonetic: '/ˈθʌndər/' },
            { en: 'Lightning', vi: 'Tia chớp', emoji: '🌩️', phonetic: '/ˈlaɪtnɪŋ/' },
            { en: 'Fog', vi: 'Sương mù', emoji: '🌫️', phonetic: '/fɒɡ/' },
            { en: 'Drought', vi: 'Hạn hán', emoji: '☀️', phonetic: '/draʊt/' },
            { en: 'Flood', vi: 'Lũ lụt', emoji: '🌊', phonetic: '/flʌd/' },
            { en: 'Breeze', vi: 'Gió nhẹ', emoji: '🍃', phonetic: '/briːz/' },
            { en: 'Climate', vi: 'Khí hậu', emoji: '🌏', phonetic: '/ˈklaɪmɪt/' },
        ]
    },

    // === THÁNG 2: Cảm xúc của em ===
    emotions: {
        name: 'Cảm xúc',
        level: 1,
        month: 2,
        words: [
            { en: 'Proud', vi: 'Tự hào', emoji: '😤', phonetic: '/praʊd/' },
            { en: 'Nervous', vi: 'Lo lắng', emoji: '😰', phonetic: '/ˈnɜːrvəs/' },
            { en: 'Jealous', vi: 'Ghen tị', emoji: '😒', phonetic: '/ˈdʒeləs/' },
            { en: 'Lonely', vi: 'Cô đơn', emoji: '😔', phonetic: '/ˈloʊnli/' },
            { en: 'Curious', vi: 'Tò mò', emoji: '🤔', phonetic: '/ˈkjʊriəs/' },
            { en: 'Grateful', vi: 'Biết ơn', emoji: '🙏', phonetic: '/ˈɡreɪtfəl/' },
            { en: 'Confused', vi: 'Bối rối', emoji: '😵', phonetic: '/kənˈfjuːzd/' },
            { en: 'Disappointed', vi: 'Thất vọng', emoji: '😞', phonetic: '/ˌdɪsəˈpɔɪntɪd/' },
            { en: 'Surprised', vi: 'Ngạc nhiên', emoji: '😲', phonetic: '/sərˈpraɪzd/' },
            { en: 'Embarrassed', vi: 'Xấu hổ', emoji: '😳', phonetic: '/ɪmˈbærəst/' },
        ]
    },
    emotions_actions: {
        name: 'Hành động cảm xúc',
        level: 1,
        month: 2,
        words: [
            { en: 'Laugh', vi: 'Cười', emoji: '😂', phonetic: '/læf/' },
            { en: 'Cry', vi: 'Khóc', emoji: '😭', phonetic: '/kraɪ/' },
            { en: 'Smile', vi: 'Mỉm cười', emoji: '😊', phonetic: '/smaɪl/' },
            { en: 'Shout', vi: 'La hét', emoji: '🗣️', phonetic: '/ʃaʊt/' },
            { en: 'Whisper', vi: 'Thì thầm', emoji: '🤫', phonetic: '/ˈwɪspər/' },
            { en: 'Hug', vi: 'Ôm', emoji: '🤗', phonetic: '/hʌɡ/' },
            { en: 'Apologize', vi: 'Xin lỗi', emoji: '🙇', phonetic: '/əˈpɒlədʒaɪz/' },
            { en: 'Forgive', vi: 'Tha thứ', emoji: '💛', phonetic: '/fərˈɡɪv/' },
            { en: 'Encourage', vi: 'Khuyến khích', emoji: '💪', phonetic: '/ɪnˈkʌrɪdʒ/' },
            { en: 'Comfort', vi: 'An ủi', emoji: '🫂', phonetic: '/ˈkʌmfərt/' },
        ]
    },

    // === THÁNG 3: Thể thao và âm nhạc ===
    sports_advanced: {
        name: 'Thể thao nâng cao',
        level: 1,
        month: 3,
        words: [
            { en: 'Volleyball', vi: 'Bóng chuyền', emoji: '🏐', phonetic: '/ˈvɒlibɔːl/' },
            { en: 'Badminton', vi: 'Cầu lông', emoji: '🏸', phonetic: '/ˈbædmɪntən/' },
            { en: 'Gymnastics', vi: 'Thể dục dụng cụ', emoji: '🤸', phonetic: '/dʒɪmˈnæstɪks/' },
            { en: 'Wrestling', vi: 'Đấu vật', emoji: '🤼', phonetic: '/ˈreslɪŋ/' },
            { en: 'Archery', vi: 'Bắn cung', emoji: '🏹', phonetic: '/ˈɑːrtʃəri/' },
            { en: 'Champion', vi: 'Nhà vô địch', emoji: '🏆', phonetic: '/ˈtʃæmpiən/' },
            { en: 'Score', vi: 'Điểm số', emoji: '🔢', phonetic: '/skɔːr/' },
            { en: 'Team', vi: 'Đội', emoji: '👥', phonetic: '/tiːm/' },
            { en: 'Coach', vi: 'Huấn luyện viên', emoji: '👨‍🏫', phonetic: '/koʊtʃ/' },
            { en: 'Stadium', vi: 'Sân vận động', emoji: '🏟️', phonetic: '/ˈsteɪdiəm/' },
        ]
    },
    music_instruments: {
        name: 'Nhạc cụ',
        level: 1,
        month: 3,
        words: [
            { en: 'Trumpet', vi: 'Kèn trumpet', emoji: '🎺', phonetic: '/ˈtrʌmpɪt/' },
            { en: 'Saxophone', vi: 'Kèn saxophone', emoji: '🎷', phonetic: '/ˈsæksəfoʊn/' },
            { en: 'Cello', vi: 'Đàn cello', emoji: '🎻', phonetic: '/ˈtʃeloʊ/' },
            { en: 'Harmonica', vi: 'Kèn harmonica', emoji: '🎵', phonetic: '/hɑːrˈmɒnɪkə/' },
            { en: 'Melody', vi: 'Giai điệu', emoji: '🎶', phonetic: '/ˈmelədi/' },
            { en: 'Rhythm', vi: 'Nhịp điệu', emoji: '🥁', phonetic: '/ˈrɪðəm/' },
            { en: 'Choir', vi: 'Dàn hợp xướng', emoji: '🎤', phonetic: '/kwaɪər/' },
            { en: 'Orchestra', vi: 'Dàn nhạc', emoji: '🎼', phonetic: '/ˈɔːrkɪstrə/' },
            { en: 'Composer', vi: 'Nhà soạn nhạc', emoji: '✍️', phonetic: '/kəmˈpoʊzər/' },
            { en: 'Lyrics', vi: 'Lời bài hát', emoji: '📝', phonetic: '/ˈlɪrɪks/' },
        ]
    },

    // === THÁNG 4: Trong nhà bếp ===
    cooking: {
        name: 'Nấu ăn',
        level: 1,
        month: 4,
        words: [
            { en: 'Recipe', vi: 'Công thức', emoji: '📋', phonetic: '/ˈresɪpi/' },
            { en: 'Ingredient', vi: 'Nguyên liệu', emoji: '🥗', phonetic: '/ɪnˈɡriːdiənt/' },
            { en: 'Boil', vi: 'Đun sôi', emoji: '♨️', phonetic: '/bɔɪl/' },
            { en: 'Fry', vi: 'Chiên', emoji: '🍳', phonetic: '/fraɪ/' },
            { en: 'Bake', vi: 'Nướng', emoji: '🧁', phonetic: '/beɪk/' },
            { en: 'Stir', vi: 'Khuấy', emoji: '🥄', phonetic: '/stɜːr/' },
            { en: 'Chop', vi: 'Băm nhỏ', emoji: '🔪', phonetic: '/tʃɒp/' },
            { en: 'Mix', vi: 'Trộn', emoji: '🥣', phonetic: '/mɪks/' },
            { en: 'Season', vi: 'Nêm gia vị', emoji: '🧂', phonetic: '/ˈsiːzən/' },
            { en: 'Taste', vi: 'Nếm thử', emoji: '👅', phonetic: '/teɪst/' },
        ]
    },
    cooking_tools: {
        name: 'Dụng cụ nhà bếp',
        level: 1,
        month: 4,
        words: [
            { en: 'Oven', vi: 'Lò nướng', emoji: '🔥', phonetic: '/ˈʌvən/' },
            { en: 'Microwave', vi: 'Lò vi sóng', emoji: '📦', phonetic: '/ˈmaɪkroʊweɪv/' },
            { en: 'Blender', vi: 'Máy xay', emoji: '🫗', phonetic: '/ˈblendər/' },
            { en: 'Toaster', vi: 'Máy nướng bánh mì', emoji: '🍞', phonetic: '/ˈtoʊstər/' },
            { en: 'Apron', vi: 'Tạp dề', emoji: '👨‍🍳', phonetic: '/ˈeɪprən/' },
            { en: 'Spatula', vi: 'Cái xẻng', emoji: '🍳', phonetic: '/ˈspætʃʊlə/' },
            { en: 'Whisk', vi: 'Cây đánh trứng', emoji: '🥚', phonetic: '/wɪsk/' },
            { en: 'Cutting board', vi: 'Thớt', emoji: '🪵', phonetic: '/ˈkʌtɪŋ bɔːrd/' },
            { en: 'Refrigerator', vi: 'Tủ lạnh', emoji: '🧊', phonetic: '/rɪˈfrɪdʒəreɪtər/' },
            { en: 'Sink', vi: 'Bồn rửa', emoji: '🚰', phonetic: '/sɪŋk/' },
        ]
    },

    // === THÁNG 5: Đi mua sắm ===
    shopping: {
        name: 'Mua sắm',
        level: 2,
        month: 5,
        words: [
            { en: 'Price', vi: 'Giá', emoji: '💲', phonetic: '/praɪs/' },
            { en: 'Discount', vi: 'Giảm giá', emoji: '🏷️', phonetic: '/ˈdɪskaʊnt/' },
            { en: 'Receipt', vi: 'Hóa đơn', emoji: '🧾', phonetic: '/rɪˈsiːt/' },
            { en: 'Customer', vi: 'Khách hàng', emoji: '🧑', phonetic: '/ˈkʌstəmər/' },
            { en: 'Cashier', vi: 'Thu ngân', emoji: '💰', phonetic: '/kæˈʃɪr/' },
            { en: 'Cart', vi: 'Giỏ hàng', emoji: '🛒', phonetic: '/kɑːrt/' },
            { en: 'Wallet', vi: 'Ví tiền', emoji: '👛', phonetic: '/ˈwɒlɪt/' },
            { en: 'Change', vi: 'Tiền thối', emoji: '💰', phonetic: '/tʃeɪndʒ/' },
            { en: 'Bargain', vi: 'Mặc cả', emoji: '🤝', phonetic: '/ˈbɑːrɡɪn/' },
            { en: 'Sale', vi: 'Khuyến mãi', emoji: '🔖', phonetic: '/seɪl/' },
        ]
    },
    shopping_places: {
        name: 'Nơi mua sắm',
        level: 2,
        month: 5,
        words: [
            { en: 'Supermarket', vi: 'Siêu thị', emoji: '🏬', phonetic: '/ˈsuːpərmɑːrkɪt/' },
            { en: 'Bookstore', vi: 'Nhà sách', emoji: '📚', phonetic: '/ˈbʊkstɔːr/' },
            { en: 'Bakery', vi: 'Tiệm bánh', emoji: '🥐', phonetic: '/ˈbeɪkəri/' },
            { en: 'Pharmacy', vi: 'Nhà thuốc', emoji: '💊', phonetic: '/ˈfɑːrməsi/' },
            { en: 'Mall', vi: 'Trung tâm thương mại', emoji: '🏢', phonetic: '/mɔːl/' },
            { en: 'Market', vi: 'Chợ', emoji: '🏪', phonetic: '/ˈmɑːrkɪt/' },
            { en: 'Toy store', vi: 'Cửa hàng đồ chơi', emoji: '🧸', phonetic: '/tɔɪ stɔːr/' },
            { en: 'Pet shop', vi: 'Cửa hàng thú cưng', emoji: '🐾', phonetic: '/pet ʃɒp/' },
            { en: 'Clothing store', vi: 'Cửa hàng quần áo', emoji: '👗', phonetic: '/ˈkloʊðɪŋ stɔːr/' },
            { en: 'Electronics store', vi: 'Cửa hàng điện tử', emoji: '📱', phonetic: '/ɪˌlekˈtrɒnɪks stɔːr/' },
        ]
    },

    // === THÁNG 6: Công nghệ ===
    technology: {
        name: 'Công nghệ',
        level: 2,
        month: 6,
        words: [
            { en: 'Computer', vi: 'Máy tính', emoji: '💻', phonetic: '/kəmˈpjuːtər/' },
            { en: 'Tablet', vi: 'Máy tính bảng', emoji: '📱', phonetic: '/ˈtæblɪt/' },
            { en: 'Keyboard', vi: 'Bàn phím', emoji: '⌨️', phonetic: '/ˈkiːbɔːrd/' },
            { en: 'Screen', vi: 'Màn hình', emoji: '🖥️', phonetic: '/skriːn/' },
            { en: 'Mouse', vi: 'Chuột máy tính', emoji: '🖱️', phonetic: '/maʊs/' },
            { en: 'Printer', vi: 'Máy in', emoji: '🖨️', phonetic: '/ˈprɪntər/' },
            { en: 'Camera', vi: 'Máy ảnh', emoji: '📷', phonetic: '/ˈkæmərə/' },
            { en: 'Battery', vi: 'Pin', emoji: '🔋', phonetic: '/ˈbætəri/' },
            { en: 'Speaker', vi: 'Loa', emoji: '🔊', phonetic: '/ˈspiːkər/' },
            { en: 'Headphones', vi: 'Tai nghe', emoji: '🎧', phonetic: '/ˈhedfoʊnz/' },
        ]
    },
    technology_actions: {
        name: 'Hành động công nghệ',
        level: 2,
        month: 6,
        words: [
            { en: 'Download', vi: 'Tải xuống', emoji: '⬇️', phonetic: '/ˈdaʊnloʊd/' },
            { en: 'Upload', vi: 'Tải lên', emoji: '⬆️', phonetic: '/ˈʌploʊd/' },
            { en: 'Search', vi: 'Tìm kiếm', emoji: '🔍', phonetic: '/sɜːrtʃ/' },
            { en: 'Password', vi: 'Mật khẩu', emoji: '🔒', phonetic: '/ˈpæswɜːrd/' },
            { en: 'Website', vi: 'Trang web', emoji: '🌐', phonetic: '/ˈwebsaɪt/' },
            { en: 'Email', vi: 'Thư điện tử', emoji: '📧', phonetic: '/ˈiːmeɪl/' },
            { en: 'Click', vi: 'Nhấp chuột', emoji: '🖱️', phonetic: '/klɪk/' },
            { en: 'Save', vi: 'Lưu', emoji: '💾', phonetic: '/seɪv/' },
            { en: 'Delete', vi: 'Xóa', emoji: '🗑️', phonetic: '/dɪˈliːt/' },
            { en: 'Connect', vi: 'Kết nối', emoji: '🔗', phonetic: '/kəˈnekt/' },
        ]
    },

    // === THÁNG 7: Khoa học quanh em ===
    science: {
        name: 'Khoa học',
        level: 2,
        month: 7,
        words: [
            { en: 'Experiment', vi: 'Thí nghiệm', emoji: '🔬', phonetic: '/ɪkˈsperɪmənt/' },
            { en: 'Scientist', vi: 'Nhà khoa học', emoji: '👨‍🔬', phonetic: '/ˈsaɪəntɪst/' },
            { en: 'Magnet', vi: 'Nam châm', emoji: '🧲', phonetic: '/ˈmæɡnɪt/' },
            { en: 'Gravity', vi: 'Trọng lực', emoji: '🍎', phonetic: '/ˈɡrævɪti/' },
            { en: 'Energy', vi: 'Năng lượng', emoji: '⚡', phonetic: '/ˈenərdʒi/' },
            { en: 'Planet', vi: 'Hành tinh', emoji: '🪐', phonetic: '/ˈplænɪt/' },
            { en: 'Solar system', vi: 'Hệ mặt trời', emoji: '☀️', phonetic: '/ˈsoʊlər ˈsɪstəm/' },
            { en: 'Telescope', vi: 'Kính viễn vọng', emoji: '🔭', phonetic: '/ˈtelɪskoʊp/' },
            { en: 'Laboratory', vi: 'Phòng thí nghiệm', emoji: '🧪', phonetic: '/ˈlæbrətɔːri/' },
            { en: 'Microscope', vi: 'Kính hiển vi', emoji: '🔬', phonetic: '/ˈmaɪkrəskoʊp/' },
        ]
    },
    science_nature: {
        name: 'Khoa học tự nhiên',
        level: 2,
        month: 7,
        words: [
            { en: 'Oxygen', vi: 'Oxy', emoji: '💨', phonetic: '/ˈɒksɪdʒən/' },
            { en: 'Carbon', vi: 'Các-bon', emoji: '⚫', phonetic: '/ˈkɑːrbən/' },
            { en: 'Fossil', vi: 'Hóa thạch', emoji: '🦴', phonetic: '/ˈfɒsəl/' },
            { en: 'Dinosaur', vi: 'Khủng long', emoji: '🦕', phonetic: '/ˈdaɪnəsɔːr/' },
            { en: 'Earthquake', vi: 'Động đất', emoji: '🌍', phonetic: '/ˈɜːrθkweɪk/' },
            { en: 'Erosion', vi: 'Xói mòn', emoji: '🏔️', phonetic: '/ɪˈroʊʒən/' },
            { en: 'Mineral', vi: 'Khoáng chất', emoji: '💎', phonetic: '/ˈmɪnərəl/' },
            { en: 'Crystal', vi: 'Tinh thể', emoji: '🔮', phonetic: '/ˈkrɪstəl/' },
            { en: 'Habitat', vi: 'Môi trường sống', emoji: '🌿', phonetic: '/ˈhæbɪtæt/' },
            { en: 'Ecosystem', vi: 'Hệ sinh thái', emoji: '🌳', phonetic: '/ˈiːkoʊsɪstəm/' },
        ]
    },

    // === THÁNG 8: Cộng đồng ===
    community: {
        name: 'Cộng đồng',
        level: 2,
        month: 8,
        words: [
            { en: 'Neighbor', vi: 'Hàng xóm', emoji: '🏘️', phonetic: '/ˈneɪbər/' },
            { en: 'Volunteer', vi: 'Tình nguyện viên', emoji: '🤝', phonetic: '/ˌvɒlənˈtɪr/' },
            { en: 'Citizen', vi: 'Công dân', emoji: '🧑', phonetic: '/ˈsɪtɪzən/' },
            { en: 'Mayor', vi: 'Thị trưởng', emoji: '🏛️', phonetic: '/ˈmeɪər/' },
            { en: 'Ceremony', vi: 'Lễ nghi', emoji: '🎊', phonetic: '/ˈserɪmoʊni/' },
            { en: 'Charity', vi: 'Từ thiện', emoji: '❤️', phonetic: '/ˈtʃærɪti/' },
            { en: 'Donation', vi: 'Quyên góp', emoji: '🎁', phonetic: '/doʊˈneɪʃən/' },
            { en: 'Respect', vi: 'Tôn trọng', emoji: '🙏', phonetic: '/rɪˈspekt/' },
            { en: 'Culture', vi: 'Văn hóa', emoji: '🎭', phonetic: '/ˈkʌltʃər/' },
            { en: 'Tradition', vi: 'Truyền thống', emoji: '🏮', phonetic: '/trəˈdɪʃən/' },
        ]
    },
    community_places: {
        name: 'Nơi cộng đồng',
        level: 2,
        month: 8,
        words: [
            { en: 'Post office', vi: 'Bưu điện', emoji: '📮', phonetic: '/poʊst ˈɒfɪs/' },
            { en: 'Fire station', vi: 'Trạm cứu hỏa', emoji: '🚒', phonetic: '/faɪər ˈsteɪʃən/' },
            { en: 'Police station', vi: 'Đồn cảnh sát', emoji: '🚔', phonetic: '/pəˈliːs ˈsteɪʃən/' },
            { en: 'Town hall', vi: 'Tòa thị chính', emoji: '🏛️', phonetic: '/taʊn hɔːl/' },
            { en: 'Museum', vi: 'Bảo tàng', emoji: '🏛️', phonetic: '/mjuˈziːəm/' },
            { en: 'Theater', vi: 'Nhà hát', emoji: '🎭', phonetic: '/ˈθiːətər/' },
            { en: 'Stadium', vi: 'Sân vận động', emoji: '🏟️', phonetic: '/ˈsteɪdiəm/' },
            { en: 'Playground', vi: 'Sân chơi', emoji: '🎠', phonetic: '/ˈpleɪɡraʊnd/' },
            { en: 'Community center', vi: 'Trung tâm cộng đồng', emoji: '🏢', phonetic: '/kəˈmjuːnɪti ˈsentər/' },
            { en: 'Gymnasium', vi: 'Phòng thể dục', emoji: '🏋️', phonetic: '/dʒɪmˈneɪziəm/' },
        ]
    },

    // === THÁNG 9: Ngày lễ ===
    holidays: {
        name: 'Ngày lễ',
        level: 3,
        month: 9,
        words: [
            { en: 'Thanksgiving', vi: 'Lễ Tạ Ơn', emoji: '🦃', phonetic: '/ˌθæŋksˈɡɪvɪŋ/' },
            { en: 'Valentine', vi: 'Lễ tình nhân', emoji: '💕', phonetic: '/ˈvæləntaɪn/' },
            { en: 'Independence Day', vi: 'Ngày Quốc khánh', emoji: '🎆', phonetic: '/ˌɪndɪˈpendəns deɪ/' },
            { en: 'Mid-Autumn', vi: 'Trung Thu', emoji: '🥮', phonetic: '/mɪd ˈɔːtəm/' },
            { en: 'Lunar New Year', vi: 'Tết Nguyên Đán', emoji: '🧧', phonetic: '/ˈluːnər njuː jɪr/' },
            { en: 'Celebration', vi: 'Lễ kỉ niệm', emoji: '🎉', phonetic: '/ˌselɪˈbreɪʃən/' },
            { en: 'Costume', vi: 'Trang phục', emoji: '🎭', phonetic: '/ˈkɒstjuːm/' },
            { en: 'Decoration', vi: 'Trang trí', emoji: '🎀', phonetic: '/ˌdekəˈreɪʃən/' },
            { en: 'Parade', vi: 'Diễu hành', emoji: '🎪', phonetic: '/pəˈreɪd/' },
            { en: 'Festival', vi: 'Lễ hội', emoji: '🏮', phonetic: '/ˈfestɪvəl/' },
        ]
    },
    holidays_activities: {
        name: 'Hoạt động ngày lễ',
        level: 3,
        month: 9,
        words: [
            { en: 'Celebrate', vi: 'Kỉ niệm', emoji: '🥳', phonetic: '/ˈselɪbreɪt/' },
            { en: 'Decorate', vi: 'Trang trí', emoji: '🎊', phonetic: '/ˈdekəreɪt/' },
            { en: 'Gather', vi: 'Tụ họp', emoji: '👨‍👩‍👧‍👦', phonetic: '/ˈɡæðər/' },
            { en: 'Feast', vi: 'Bữa tiệc lớn', emoji: '🍽️', phonetic: '/fiːst/' },
            { en: 'Exchange', vi: 'Trao đổi', emoji: '🎁', phonetic: '/ɪksˈtʃeɪndʒ/' },
            { en: 'Worship', vi: 'Thờ cúng', emoji: '🙏', phonetic: '/ˈwɜːrʃɪp/' },
            { en: 'Perform', vi: 'Biểu diễn', emoji: '🎤', phonetic: '/pərˈfɔːrm/' },
            { en: 'Wish', vi: 'Chúc mừng', emoji: '🌟', phonetic: '/wɪʃ/' },
            { en: 'Invite', vi: 'Mời', emoji: '💌', phonetic: '/ɪnˈvaɪt/' },
            { en: 'Prepare', vi: 'Chuẩn bị', emoji: '📝', phonetic: '/prɪˈper/' },
        ]
    },

    // === THÁNG 10: Phương tiện giao thông ===
    transportation: {
        name: 'Giao thông nâng cao',
        level: 3,
        month: 10,
        words: [
            { en: 'Subway', vi: 'Tàu điện ngầm', emoji: '🚇', phonetic: '/ˈsʌbweɪ/' },
            { en: 'Ferry', vi: 'Phà', emoji: '⛴️', phonetic: '/ˈferi/' },
            { en: 'Scooter', vi: 'Xe máy tay ga', emoji: '🛵', phonetic: '/ˈskuːtər/' },
            { en: 'Ambulance', vi: 'Xe cứu thương', emoji: '🚑', phonetic: '/ˈæmbjʊləns/' },
            { en: 'Fire truck', vi: 'Xe cứu hỏa', emoji: '🚒', phonetic: '/faɪər trʌk/' },
            { en: 'Motorcycle', vi: 'Xe mô tô', emoji: '🏍️', phonetic: '/ˈmoʊtərsaɪkəl/' },
            { en: 'Tram', vi: 'Xe điện', emoji: '🚊', phonetic: '/træm/' },
            { en: 'Yacht', vi: 'Du thuyền', emoji: '🛥️', phonetic: '/jɒt/' },
            { en: 'Rocket', vi: 'Tên lửa', emoji: '🚀', phonetic: '/ˈrɒkɪt/' },
            { en: 'Parachute', vi: 'Dù', emoji: '🪂', phonetic: '/ˈpærəʃuːt/' },
        ]
    },
    transportation_rules: {
        name: 'Luật giao thông',
        level: 3,
        month: 10,
        words: [
            { en: 'Traffic light', vi: 'Đèn giao thông', emoji: '🚦', phonetic: '/ˈtræfɪk laɪt/' },
            { en: 'Crosswalk', vi: 'Vạch qua đường', emoji: '🚶', phonetic: '/ˈkrɒswɔːk/' },
            { en: 'Seatbelt', vi: 'Dây an toàn', emoji: '🔒', phonetic: '/ˈsiːtbelt/' },
            { en: 'Helmet', vi: 'Mũ bảo hiểm', emoji: '⛑️', phonetic: '/ˈhelmɪt/' },
            { en: 'Speed limit', vi: 'Giới hạn tốc độ', emoji: '🚫', phonetic: '/spiːd ˈlɪmɪt/' },
            { en: 'Parking', vi: 'Bãi đỗ xe', emoji: '🅿️', phonetic: '/ˈpɑːrkɪŋ/' },
            { en: 'Highway', vi: 'Đường cao tốc', emoji: '🛣️', phonetic: '/ˈhaɪweɪ/' },
            { en: 'Pedestrian', vi: 'Người đi bộ', emoji: '🚶', phonetic: '/pəˈdestriən/' },
            { en: 'Intersection', vi: 'Ngã tư', emoji: '🔀', phonetic: '/ˌɪntərˈsekʃən/' },
            { en: 'Sidewalk', vi: 'Vỉa hè', emoji: '🛤️', phonetic: '/ˈsaɪdwɔːk/' },
        ]
    },

    // === THÁNG 11: Tổng hợp nâng cao ===
    review_vocab_4: {
        name: 'Ôn tập từ vựng',
        level: 3,
        month: 11,
        words: [
            { en: 'Adventure', vi: 'Cuộc phiêu lưu', emoji: '🗺️', phonetic: '/ədˈventʃər/' },
            { en: 'Discovery', vi: 'Khám phá', emoji: '🔍', phonetic: '/dɪˈskʌvəri/' },
            { en: 'Achievement', vi: 'Thành tựu', emoji: '🏆', phonetic: '/əˈtʃiːvmənt/' },
            { en: 'Knowledge', vi: 'Kiến thức', emoji: '📚', phonetic: '/ˈnɒlɪdʒ/' },
            { en: 'Imagination', vi: 'Trí tưởng tượng', emoji: '💭', phonetic: '/ɪˌmædʒɪˈneɪʃən/' },
            { en: 'Cooperation', vi: 'Hợp tác', emoji: '🤝', phonetic: '/koʊˌɒpəˈreɪʃən/' },
            { en: 'Environment', vi: 'Môi trường', emoji: '🌍', phonetic: '/ɪnˈvaɪrənmənt/' },
            { en: 'Communication', vi: 'Giao tiếp', emoji: '💬', phonetic: '/kəˌmjuːnɪˈkeɪʃən/' },
            { en: 'Responsibility', vi: 'Trách nhiệm', emoji: '✅', phonetic: '/rɪˌspɒnsɪˈbɪlɪti/' },
            { en: 'Creativity', vi: 'Sáng tạo', emoji: '🎨', phonetic: '/ˌkriːeɪˈtɪvɪti/' },
        ]
    },
    review_grammar_4: {
        name: 'Ôn tập ngữ pháp',
        level: 3,
        month: 11,
        words: [
            { en: 'Although', vi: 'Mặc dù', emoji: '🔄', phonetic: '/ɔːlˈðoʊ/' },
            { en: 'Because', vi: 'Bởi vì', emoji: '➡️', phonetic: '/bɪˈkɒz/' },
            { en: 'However', vi: 'Tuy nhiên', emoji: '↩️', phonetic: '/haʊˈevər/' },
            { en: 'Therefore', vi: 'Do đó', emoji: '➡️', phonetic: '/ˈðerfɔːr/' },
            { en: 'Meanwhile', vi: 'Trong khi đó', emoji: '⏳', phonetic: '/ˈmiːnwaɪl/' },
            { en: 'Finally', vi: 'Cuối cùng', emoji: '🏁', phonetic: '/ˈfaɪnəli/' },
            { en: 'Already', vi: 'Đã rồi', emoji: '✅', phonetic: '/ɔːlˈredi/' },
            { en: 'Perhaps', vi: 'Có lẽ', emoji: '🤔', phonetic: '/pərˈhæps/' },
            { en: 'Especially', vi: 'Đặc biệt', emoji: '⭐', phonetic: '/ɪˈspeʃəli/' },
            { en: 'Recently', vi: 'Gần đây', emoji: '🕐', phonetic: '/ˈriːsəntli/' },
        ]
    },

    // === THÁNG 12: Tổng ôn tập ===
    review_all_4a: {
        name: 'Ôn tập tổng hợp A',
        level: 3,
        month: 12,
        words: [
            { en: 'Solution', vi: 'Giải pháp', emoji: '💡', phonetic: '/səˈluːʃən/' },
            { en: 'Problem', vi: 'Vấn đề', emoji: '❓', phonetic: '/ˈprɒbləm/' },
            { en: 'Opinion', vi: 'Ý kiến', emoji: '💬', phonetic: '/əˈpɪnjən/' },
            { en: 'Example', vi: 'Ví dụ', emoji: '📌', phonetic: '/ɪɡˈzæmpəl/' },
            { en: 'Compare', vi: 'So sánh', emoji: '⚖️', phonetic: '/kəmˈper/' },
            { en: 'Describe', vi: 'Mô tả', emoji: '📝', phonetic: '/dɪˈskraɪb/' },
            { en: 'Explain', vi: 'Giải thích', emoji: '🗣️', phonetic: '/ɪkˈspleɪn/' },
            { en: 'Suggest', vi: 'Đề xuất', emoji: '💡', phonetic: '/səˈdʒest/' },
            { en: 'Improve', vi: 'Cải thiện', emoji: '📈', phonetic: '/ɪmˈpruːv/' },
            { en: 'Practice', vi: 'Luyện tập', emoji: '🏋️', phonetic: '/ˈpræktɪs/' },
        ]
    },
    review_all_4b: {
        name: 'Ôn tập tổng hợp B',
        level: 3,
        month: 12,
        words: [
            { en: 'Participate', vi: 'Tham gia', emoji: '🙋', phonetic: '/pɑːrˈtɪsɪpeɪt/' },
            { en: 'Organize', vi: 'Tổ chức', emoji: '📋', phonetic: '/ˈɔːrɡənaɪz/' },
            { en: 'Develop', vi: 'Phát triển', emoji: '🌱', phonetic: '/dɪˈveləp/' },
            { en: 'Protect', vi: 'Bảo vệ', emoji: '🛡️', phonetic: '/prəˈtekt/' },
            { en: 'Recycle', vi: 'Tái chế', emoji: '♻️', phonetic: '/riːˈsaɪkəl/' },
            { en: 'Conserve', vi: 'Bảo tồn', emoji: '🌿', phonetic: '/kənˈsɜːrv/' },
            { en: 'Research', vi: 'Nghiên cứu', emoji: '🔬', phonetic: '/rɪˈsɜːrtʃ/' },
            { en: 'Present', vi: 'Trình bày', emoji: '📊', phonetic: '/prɪˈzent/' },
            { en: 'Evaluate', vi: 'Đánh giá', emoji: '📝', phonetic: '/ɪˈvæljueɪt/' },
            { en: 'Summarize', vi: 'Tóm tắt', emoji: '📄', phonetic: '/ˈsʌməraɪz/' },
        ]
    },
};

// ============================================
// PHONICS - BLENDS & DIGRAPHS NÂNG CAO
// ============================================
GRADE_DATA[4].phonics = [
    { letter: 'BL', sound: '/bl/', words: [
        { word: 'Blend', highlight: 'Bl', emoji: '🔀' },
        { word: 'Blanket', highlight: 'Bl', emoji: '🛏️' },
        { word: 'Blossom', highlight: 'Bl', emoji: '🌸' }
    ]},
    { letter: 'CR', sound: '/kr/', words: [
        { word: 'Crystal', highlight: 'Cr', emoji: '🔮' },
        { word: 'Create', highlight: 'Cr', emoji: '🎨' },
        { word: 'Creature', highlight: 'Cr', emoji: '🐉' }
    ]},
    { letter: 'DR', sound: '/dr/', words: [
        { word: 'Dragon', highlight: 'Dr', emoji: '🐲' },
        { word: 'Dream', highlight: 'Dr', emoji: '💭' },
        { word: 'Drought', highlight: 'Dr', emoji: '☀️' }
    ]},
    { letter: 'FL', sound: '/fl/', words: [
        { word: 'Flood', highlight: 'Fl', emoji: '🌊' },
        { word: 'Flame', highlight: 'Fl', emoji: '🔥' },
        { word: 'Flutter', highlight: 'Fl', emoji: '🦋' }
    ]},
    { letter: 'GR', sound: '/ɡr/', words: [
        { word: 'Gravity', highlight: 'Gr', emoji: '🍎' },
        { word: 'Grateful', highlight: 'Gr', emoji: '🙏' },
        { word: 'Grassland', highlight: 'Gr', emoji: '🌿' }
    ]},
    { letter: 'PR', sound: '/pr/', words: [
        { word: 'Practice', highlight: 'Pr', emoji: '🏋️' },
        { word: 'Protect', highlight: 'Pr', emoji: '🛡️' },
        { word: 'Prepare', highlight: 'Pr', emoji: '📝' }
    ]},
    { letter: 'SC', sound: '/sk/', words: [
        { word: 'Science', highlight: 'Sc', emoji: '🔬' },
        { word: 'Score', highlight: 'Sc', emoji: '🔢' },
        { word: 'Scooter', highlight: 'Sc', emoji: '🛵' }
    ]},
    { letter: 'SP', sound: '/sp/', words: [
        { word: 'Speaker', highlight: 'Sp', emoji: '🔊' },
        { word: 'Speed', highlight: 'Sp', emoji: '💨' },
        { word: 'Spatula', highlight: 'Sp', emoji: '🍳' }
    ]},
    { letter: 'STR', sound: '/str/', words: [
        { word: 'Stream', highlight: 'Str', emoji: '🏞️' },
        { word: 'Strategy', highlight: 'Str', emoji: '♟️' },
        { word: 'Strength', highlight: 'Str', emoji: '💪' }
    ]},
    { letter: 'TR', sound: '/tr/', words: [
        { word: 'Traffic', highlight: 'Tr', emoji: '🚦' },
        { word: 'Tradition', highlight: 'Tr', emoji: '🏮' },
        { word: 'Trumpet', highlight: 'Tr', emoji: '🎺' }
    ]},
    { letter: 'WR', sound: '/r/', words: [
        { word: 'Write', highlight: 'Wr', emoji: '✍️' },
        { word: 'Wrestle', highlight: 'Wr', emoji: '🤼' },
        { word: 'Wreath', highlight: 'Wr', emoji: '🎄' }
    ]},
    { letter: 'KN', sound: '/n/', words: [
        { word: 'Knowledge', highlight: 'Kn', emoji: '📚' },
        { word: 'Knight', highlight: 'Kn', emoji: '⚔️' },
        { word: 'Knot', highlight: 'Kn', emoji: '🪢' }
    ]},
    { letter: 'GH', sound: '/f/', words: [
        { word: 'Laugh', highlight: 'gh', emoji: '😂' },
        { word: 'Enough', highlight: 'gh', emoji: '✅' },
        { word: 'Rough', highlight: 'gh', emoji: '🪨' }
    ]},
    { letter: 'TION', sound: '/ʃən/', words: [
        { word: 'Nation', highlight: 'tion', emoji: '🏳️' },
        { word: 'Celebration', highlight: 'tion', emoji: '🎉' },
        { word: 'Communication', highlight: 'tion', emoji: '💬' }
    ]},
    { letter: 'SION', sound: '/ʒən/', words: [
        { word: 'Television', highlight: 'sion', emoji: '📺' },
        { word: 'Decision', highlight: 'sion', emoji: '🤔' },
        { word: 'Erosion', highlight: 'sion', emoji: '🏔️' }
    ]},
];

// ============================================
// CÂU MẪU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[4].sentences = {
    level1: [
        { sentence: ['The', 'volcano', 'is', 'very', 'hot'], emoji: '🌋', vi: 'Núi lửa rất nóng', extra: ['cold', 'a'] },
        { sentence: ['I', 'feel', 'proud', 'of', 'myself'], emoji: '😤', vi: 'Tôi tự hào về bản thân', extra: ['sad', 'the'] },
        { sentence: ['She', 'plays', 'the', 'trumpet', 'well'], emoji: '🎺', vi: 'Cô ấy thổi kèn trumpet giỏi', extra: ['bad', 'a'] },
        { sentence: ['We', 'need', 'to', 'chop', 'the', 'vegetables'], emoji: '🔪', vi: 'Chúng ta cần băm rau', extra: ['fry', 'is'] },
        { sentence: ['The', 'desert', 'is', 'very', 'dry'], emoji: '🏜️', vi: 'Sa mạc rất khô', extra: ['wet', 'a'] },
        { sentence: ['He', 'is', 'a', 'brave', 'champion'], emoji: '🏆', vi: 'Anh ấy là nhà vô địch dũng cảm', extra: ['scared', 'the'] },
        { sentence: ['I', 'can', 'hear', 'the', 'thunder'], emoji: '⚡', vi: 'Tôi có thể nghe thấy sấm', extra: ['see', 'a'] },
        { sentence: ['The', 'orchestra', 'is', 'playing', 'now'], emoji: '🎼', vi: 'Dàn nhạc đang chơi bây giờ', extra: ['singing', 'a'] },
    ],
    level2: [
        { sentence: ['The', 'scientist', 'is', 'doing', 'an', 'experiment'], emoji: '🔬', vi: 'Nhà khoa học đang làm thí nghiệm', extra: ['cooking', 'the'] },
        { sentence: ['We', 'should', 'recycle', 'plastic', 'bottles'], emoji: '♻️', vi: 'Chúng ta nên tái chế chai nhựa', extra: ['throw', 'a'] },
        { sentence: ['The', 'cashier', 'gave', 'me', 'a', 'receipt'], emoji: '🧾', vi: 'Thu ngân đưa cho tôi hóa đơn', extra: ['took', 'the'] },
        { sentence: ['I', 'downloaded', 'the', 'app', 'on', 'my', 'tablet'], emoji: '📱', vi: 'Tôi đã tải ứng dụng trên máy tính bảng', extra: ['uploaded', 'a'] },
        { sentence: ['The', 'neighbors', 'are', 'very', 'kind', 'people'], emoji: '🏘️', vi: 'Hàng xóm là những người rất tốt bụng', extra: ['mean', 'a'] },
        { sentence: ['She', 'volunteers', 'at', 'the', 'charity', 'every', 'week'], emoji: '🤝', vi: 'Cô ấy làm tình nguyện ở tổ chức từ thiện mỗi tuần', extra: ['never', 'a'] },
        { sentence: ['The', 'temperature', 'dropped', 'below', 'zero', 'degrees'], emoji: '🌡️', vi: 'Nhiệt độ giảm xuống dưới không độ', extra: ['above', 'a'] },
        { sentence: ['We', 'must', 'wear', 'a', 'helmet', 'when', 'cycling'], emoji: '⛑️', vi: 'Chúng ta phải đội mũ bảo hiểm khi đạp xe', extra: ['hat', 'the'] },
    ],
    level3: [
        { sentence: ['The', 'earthquake', 'destroyed', 'many', 'buildings', 'last', 'year'], emoji: '🌍', vi: 'Trận động đất đã phá hủy nhiều tòa nhà năm ngoái', extra: ['built', 'a'] },
        { sentence: ['Although', 'it', 'was', 'raining', 'we', 'still', 'had', 'fun'], emoji: '🌧️', vi: 'Mặc dù trời mưa, chúng tôi vẫn vui', extra: ['because', 'the'] },
        { sentence: ['The', 'pedestrians', 'must', 'use', 'the', 'crosswalk'], emoji: '🚶', vi: 'Người đi bộ phải sử dụng vạch qua đường', extra: ['highway', 'a'] },
        { sentence: ['We', 'celebrated', 'Lunar', 'New', 'Year', 'with', 'our', 'family'], emoji: '🧧', vi: 'Chúng tôi đón Tết Nguyên Đán cùng gia đình', extra: ['alone', 'the'] },
        { sentence: ['The', 'microscope', 'helps', 'us', 'see', 'tiny', 'things'], emoji: '🔬', vi: 'Kính hiển vi giúp chúng ta nhìn thấy vật nhỏ', extra: ['big', 'a'] },
        { sentence: ['She', 'described', 'the', 'beautiful', 'waterfall', 'in', 'her', 'essay'], emoji: '💧', vi: 'Cô ấy mô tả thác nước đẹp trong bài văn', extra: ['ugly', 'a'] },
    ],
};

// ============================================
// SPELLING THEO CẤP ĐỘ
// ============================================
GRADE_DATA[4].spelling = {
    level1: [
        { word: 'OCEAN', emoji: '🌊', vi: 'Đại dương' },
        { word: 'ISLAND', emoji: '🏝️', vi: 'Hòn đảo' },
        { word: 'DESERT', emoji: '🏜️', vi: 'Sa mạc' },
        { word: 'PROUD', emoji: '😤', vi: 'Tự hào' },
        { word: 'SMILE', emoji: '😊', vi: 'Mỉm cười' },
        { word: 'SCORE', emoji: '🔢', vi: 'Điểm số' },
        { word: 'COACH', emoji: '👨‍🏫', vi: 'Huấn luyện viên' },
        { word: 'RECIPE', emoji: '📋', vi: 'Công thức' },
        { word: 'THUNDER', emoji: '⚡', vi: 'Sấm sét' },
        { word: 'CLIMATE', emoji: '🌏', vi: 'Khí hậu' },
        { word: 'VALLEY', emoji: '🏞️', vi: 'Thung lũng' },
        { word: 'FOREST', emoji: '🌲', vi: 'Rừng' },
    ],
    level2: [
        { word: 'DISCOUNT', emoji: '🏷️', vi: 'Giảm giá' },
        { word: 'CUSTOMER', emoji: '🧑', vi: 'Khách hàng' },
        { word: 'COMPUTER', emoji: '💻', vi: 'Máy tính' },
        { word: 'KEYBOARD', emoji: '⌨️', vi: 'Bàn phím' },
        { word: 'DOWNLOAD', emoji: '⬇️', vi: 'Tải xuống' },
        { word: 'SCIENTIST', emoji: '👨‍🔬', vi: 'Nhà khoa học' },
        { word: 'VOLUNTEER', emoji: '🤝', vi: 'Tình nguyện viên' },
        { word: 'NEIGHBOR', emoji: '🏘️', vi: 'Hàng xóm' },
        { word: 'BATTERY', emoji: '🔋', vi: 'Pin' },
        { word: 'PHARMACY', emoji: '💊', vi: 'Nhà thuốc' },
        { word: 'DINOSAUR', emoji: '🦕', vi: 'Khủng long' },
        { word: 'MAGNET', emoji: '🧲', vi: 'Nam châm' },
    ],
    level3: [
        { word: 'AMBULANCE', emoji: '🚑', vi: 'Xe cứu thương' },
        { word: 'PARACHUTE', emoji: '🪂', vi: 'Dù' },
        { word: 'CELEBRATE', emoji: '🥳', vi: 'Kỉ niệm' },
        { word: 'DECORATION', emoji: '🎀', vi: 'Trang trí' },
        { word: 'PEDESTRIAN', emoji: '🚶', vi: 'Người đi bộ' },
        { word: 'KNOWLEDGE', emoji: '📚', vi: 'Kiến thức' },
        { word: 'EXPERIMENT', emoji: '🔬', vi: 'Thí nghiệm' },
        { word: 'MICROSCOPE', emoji: '🔬', vi: 'Kính hiển vi' },
        { word: 'EARTHQUAKE', emoji: '🌍', vi: 'Động đất' },
        { word: 'ECOSYSTEM', emoji: '🌳', vi: 'Hệ sinh thái' },
        { word: 'ENVIRONMENT', emoji: '🌍', vi: 'Môi trường' },
        { word: 'IMAGINATION', emoji: '💭', vi: 'Trí tưởng tượng' },
    ],
};

// ============================================
// NGHE HIỂU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[4].listening = {
    level1: [
        { word: 'Volcano', options: [{ emoji: '🌋', label: 'Volcano' }, { emoji: '⛰️', label: 'Mountain' }, { emoji: '🏝️', label: 'Island' }, { emoji: '🏜️', label: 'Desert' }], correct: 0 },
        { word: 'Thunder', options: [{ emoji: '🌧️', label: 'Rain' }, { emoji: '⚡', label: 'Thunder' }, { emoji: '❄️', label: 'Snow' }, { emoji: '🌫️', label: 'Fog' }], correct: 1 },
        { word: 'Curious', options: [{ emoji: '😊', label: 'Happy' }, { emoji: '😢', label: 'Sad' }, { emoji: '🤔', label: 'Curious' }, { emoji: '😠', label: 'Angry' }], correct: 2 },
        { word: 'Trumpet', options: [{ emoji: '🎹', label: 'Piano' }, { emoji: '🎸', label: 'Guitar' }, { emoji: '🎻', label: 'Violin' }, { emoji: '🎺', label: 'Trumpet' }], correct: 3 },
        { word: 'Desert', options: [{ emoji: '🏜️', label: 'Desert' }, { emoji: '🌲', label: 'Forest' }, { emoji: '🌊', label: 'Ocean' }, { emoji: '🏞️', label: 'Valley' }], correct: 0 },
        { word: 'Badminton', options: [{ emoji: '⚽', label: 'Soccer' }, { emoji: '🏸', label: 'Badminton' }, { emoji: '🏀', label: 'Basketball' }, { emoji: '🎾', label: 'Tennis' }], correct: 1 },
        { word: 'Recipe', options: [{ emoji: '🍳', label: 'Fry' }, { emoji: '🔪', label: 'Chop' }, { emoji: '📋', label: 'Recipe' }, { emoji: '🥄', label: 'Stir' }], correct: 2 },
        { word: 'Waterfall', options: [{ emoji: '🏞️', label: 'Valley' }, { emoji: '🌊', label: 'Ocean' }, { emoji: '🕳️', label: 'Cave' }, { emoji: '💧', label: 'Waterfall' }], correct: 3 },
    ],
    level2: [
        { word: 'Microscope', options: [{ emoji: '🔬', label: 'Microscope' }, { emoji: '🔭', label: 'Telescope' }, { emoji: '🧲', label: 'Magnet' }, { emoji: '🧪', label: 'Laboratory' }], correct: 0 },
        { word: 'Supermarket', options: [{ emoji: '📚', label: 'Bookstore' }, { emoji: '🏬', label: 'Supermarket' }, { emoji: '💊', label: 'Pharmacy' }, { emoji: '🥐', label: 'Bakery' }], correct: 1 },
        { word: 'Keyboard', options: [{ emoji: '🖥️', label: 'Screen' }, { emoji: '🖱️', label: 'Mouse' }, { emoji: '⌨️', label: 'Keyboard' }, { emoji: '🖨️', label: 'Printer' }], correct: 2 },
        { word: 'Volunteer', options: [{ emoji: '🧑', label: 'Citizen' }, { emoji: '🏛️', label: 'Mayor' }, { emoji: '🏘️', label: 'Neighbor' }, { emoji: '🤝', label: 'Volunteer' }], correct: 3 },
        { word: 'Dinosaur', options: [{ emoji: '🦕', label: 'Dinosaur' }, { emoji: '🦴', label: 'Fossil' }, { emoji: '💎', label: 'Crystal' }, { emoji: '🌍', label: 'Earthquake' }], correct: 0 },
        { word: 'Museum', options: [{ emoji: '🚒', label: 'Fire station' }, { emoji: '🏛️', label: 'Museum' }, { emoji: '🚔', label: 'Police station' }, { emoji: '📮', label: 'Post office' }], correct: 1 },
        { word: 'Helmet', options: [{ emoji: '🧢', label: 'Hat' }, { emoji: '👓', label: 'Glasses' }, { emoji: '⛑️', label: 'Helmet' }, { emoji: '🔒', label: 'Seatbelt' }], correct: 2 },
        { word: 'Ecosystem', options: [{ emoji: '💨', label: 'Oxygen' }, { emoji: '🔮', label: 'Crystal' }, { emoji: '🦴', label: 'Fossil' }, { emoji: '🌳', label: 'Ecosystem' }], correct: 3 },
    ],
    level3: [
        { word: 'Celebration', options: [{ emoji: '🎉', label: 'Celebration' }, { emoji: '🎭', label: 'Costume' }, { emoji: '🎀', label: 'Decoration' }, { emoji: '🎪', label: 'Parade' }], correct: 0 },
        { word: 'Ambulance', options: [{ emoji: '🚒', label: 'Fire truck' }, { emoji: '🚑', label: 'Ambulance' }, { emoji: '🚔', label: 'Police car' }, { emoji: '🚇', label: 'Subway' }], correct: 1 },
        { word: 'Intersection', options: [{ emoji: '🅿️', label: 'Parking' }, { emoji: '🛣️', label: 'Highway' }, { emoji: '🔀', label: 'Intersection' }, { emoji: '🛤️', label: 'Sidewalk' }], correct: 2 },
        { word: 'Creativity', options: [{ emoji: '📚', label: 'Knowledge' }, { emoji: '🤝', label: 'Cooperation' }, { emoji: '💬', label: 'Communication' }, { emoji: '🎨', label: 'Creativity' }], correct: 3 },
        { word: 'Environment', options: [{ emoji: '🌍', label: 'Environment' }, { emoji: '🏆', label: 'Achievement' }, { emoji: '💭', label: 'Imagination' }, { emoji: '✅', label: 'Responsibility' }], correct: 0 },
        { word: 'Parachute', options: [{ emoji: '🚀', label: 'Rocket' }, { emoji: '🪂', label: 'Parachute' }, { emoji: '🛥️', label: 'Yacht' }, { emoji: '🏍️', label: 'Motorcycle' }], correct: 1 },
        { word: 'Earthquake', options: [{ emoji: '🌋', label: 'Volcano' }, { emoji: '🌊', label: 'Flood' }, { emoji: '🌍', label: 'Earthquake' }, { emoji: '🌀', label: 'Hurricane' }], correct: 2 },
        { word: 'Responsibility', options: [{ emoji: '💡', label: 'Solution' }, { emoji: '📌', label: 'Example' }, { emoji: '📈', label: 'Improve' }, { emoji: '✅', label: 'Responsibility' }], correct: 3 },
    ],
};
