// ============================================
// LỚP 3 - GIÁO TRÌNH 12 THÁNG - 3 CẤP ĐỘ
// ============================================
GRADE_DATA[3] = {};
GRADE_DATA[3].info = {
    levels: [
        { id: 1, name: 'Beginner', nameVi: 'Người mới bắt đầu', months: [1,2,3,4], color: '#4ECDC4', icon: '🌱' },
        { id: 2, name: 'Elementary', nameVi: 'Cơ bản', months: [5,6,7,8], color: '#A855F7', icon: '🌿' },
        { id: 3, name: 'Pre-Intermediate', nameVi: 'Nâng cao', months: [9,10,11,12], color: '#FF6B9D', icon: '🌳' },
    ],
    months: [
        { month: 1, title: 'Chào hỏi & Thói quen', topics: ['greetings_formal', 'daily_routine'] },
        { month: 2, title: 'Bữa ăn & Môn học', topics: ['meals', 'school_subjects'] },
        { month: 3, title: 'Thời gian & So sánh', topics: ['telling_time', 'comparative_adjectives'] },
        { month: 4, title: 'Động từ & Câu hỏi', topics: ['verbs_past', 'question_words'] },
        { month: 5, title: 'Đời sống thành phố', topics: ['city_life', 'technology'] },
        { month: 6, title: 'Sức khỏe & Môi trường', topics: ['health', 'environment'] },
        { month: 7, title: 'Văn hóa & Giao tiếp', topics: ['culture', 'communication'] },
        { month: 8, title: 'Truyền thông & Nghệ thuật', topics: ['media', 'art'] },
        { month: 9, title: 'Khoa học & Lịch sử', topics: ['science', 'history'] },
        { month: 10, title: 'Địa lý & Văn học', topics: ['geography', 'literature'] },
        { month: 11, title: 'Tranh luận & Thuyết trình', topics: ['debate_vocab', 'presentation_skills'] },
        { month: 12, title: 'Viết & Ôn thi', topics: ['writing_vocab', 'test_prep'] },
    ]
};

// ============================================
// TỪ VỰNG - 250+ từ chia theo chủ đề
// ============================================
GRADE_DATA[3].vocab = {
    // === THÁNG 1 ===
    greetings_formal: {
        name: 'Chào hỏi trang trọng',
        level: 1,
        month: 1,
        words: [
            { en: 'Good morning', vi: 'Chào buổi sáng', emoji: '🌅', phonetic: '/ɡʊd ˈmɔːrnɪŋ/' },
            { en: 'Good afternoon', vi: 'Chào buổi chiều', emoji: '☀️', phonetic: '/ɡʊd ˌæftərˈnuːn/' },
            { en: 'Good evening', vi: 'Chào buổi tối', emoji: '🌆', phonetic: '/ɡʊd ˈiːvnɪŋ/' },
            { en: 'Nice to meet you', vi: 'Rất vui được gặp bạn', emoji: '🤝', phonetic: '/naɪs tuː miːt juː/' },
            { en: 'How are you?', vi: 'Bạn khỏe không?', emoji: '😊', phonetic: '/haʊ ɑːr juː/' },
            { en: 'I am fine', vi: 'Tôi khỏe', emoji: '👍', phonetic: '/aɪ æm faɪn/' },
            { en: 'Excuse me', vi: 'Xin phép', emoji: '🙇', phonetic: '/ɪkˈskjuːz miː/' },
            { en: 'Welcome', vi: 'Chào mừng', emoji: '🎉', phonetic: '/ˈwelkəm/' },
            { en: 'See you later', vi: 'Hẹn gặp lại', emoji: '👋', phonetic: '/siː juː ˈleɪtər/' },
            { en: 'Have a nice day', vi: 'Chúc một ngày tốt lành', emoji: '🌈', phonetic: '/hæv ə naɪs deɪ/' },
        ]
    },
    daily_routine: {
        name: 'Thói quen hàng ngày',
        level: 1,
        month: 1,
        words: [
            { en: 'Wake up', vi: 'Thức dậy', emoji: '⏰', phonetic: '/weɪk ʌp/' },
            { en: 'Brush teeth', vi: 'Đánh răng', emoji: '🪥', phonetic: '/brʌʃ tiːθ/' },
            { en: 'Get dressed', vi: 'Mặc quần áo', emoji: '👕', phonetic: '/ɡet drest/' },
            { en: 'Eat breakfast', vi: 'Ăn sáng', emoji: '🍳', phonetic: '/iːt ˈbrekfəst/' },
            { en: 'Go to school', vi: 'Đi học', emoji: '🏫', phonetic: '/ɡoʊ tuː skuːl/' },
            { en: 'Do homework', vi: 'Làm bài tập', emoji: '📝', phonetic: '/duː ˈhoʊmwɜːrk/' },
            { en: 'Take a shower', vi: 'Tắm', emoji: '🚿', phonetic: '/teɪk ə ˈʃaʊər/' },
            { en: 'Go to bed', vi: 'Đi ngủ', emoji: '🛏️', phonetic: '/ɡoʊ tuː bed/' },
            { en: 'Study', vi: 'Học bài', emoji: '📚', phonetic: '/ˈstʌdi/' },
            { en: 'Exercise', vi: 'Tập thể dục', emoji: '🏋️', phonetic: '/ˈeksərsaɪz/' },
        ]
    },

    // === THÁNG 2 ===
    meals: {
        name: 'Bữa ăn',
        level: 1,
        month: 2,
        words: [
            { en: 'Breakfast', vi: 'Bữa sáng', emoji: '🍳', phonetic: '/ˈbrekfəst/' },
            { en: 'Lunch', vi: 'Bữa trưa', emoji: '🍱', phonetic: '/lʌntʃ/' },
            { en: 'Dinner', vi: 'Bữa tối', emoji: '🍽️', phonetic: '/ˈdɪnər/' },
            { en: 'Snack', vi: 'Bữa ăn nhẹ', emoji: '🍪', phonetic: '/snæk/' },
            { en: 'Dessert', vi: 'Món tráng miệng', emoji: '🍰', phonetic: '/dɪˈzɜːrt/' },
            { en: 'Delicious', vi: 'Ngon', emoji: '😋', phonetic: '/dɪˈlɪʃəs/' },
            { en: 'Hungry', vi: 'Đói', emoji: '🤤', phonetic: '/ˈhʌŋɡri/' },
            { en: 'Full', vi: 'No', emoji: '😊', phonetic: '/fʊl/' },
            { en: 'Spicy', vi: 'Cay', emoji: '🌶️', phonetic: '/ˈspaɪsi/' },
            { en: 'Sour', vi: 'Chua', emoji: '🍋', phonetic: '/ˈsaʊər/' },
        ]
    },
    school_subjects: {
        name: 'Môn học',
        level: 1,
        month: 2,
        words: [
            { en: 'Math', vi: 'Toán', emoji: '🔢', phonetic: '/mæθ/' },
            { en: 'Science', vi: 'Khoa học', emoji: '🔬', phonetic: '/ˈsaɪəns/' },
            { en: 'English', vi: 'Tiếng Anh', emoji: '🇬🇧', phonetic: '/ˈɪŋɡlɪʃ/' },
            { en: 'Vietnamese', vi: 'Tiếng Việt', emoji: '🇻🇳', phonetic: '/ˌviːetnəˈmiːz/' },
            { en: 'Art', vi: 'Mỹ thuật', emoji: '🎨', phonetic: '/ɑːrt/' },
            { en: 'Music', vi: 'Âm nhạc', emoji: '🎵', phonetic: '/ˈmjuːzɪk/' },
            { en: 'PE', vi: 'Thể dục', emoji: '⚽', phonetic: '/piː iː/' },
            { en: 'History', vi: 'Lịch sử', emoji: '📜', phonetic: '/ˈhɪstəri/' },
            { en: 'Geography', vi: 'Địa lý', emoji: '🌍', phonetic: '/dʒiˈɒɡrəfi/' },
            { en: 'Computer', vi: 'Tin học', emoji: '💻', phonetic: '/kəmˈpjuːtər/' },
        ]
    },

    // === THÁNG 3 ===
    telling_time: {
        name: 'Xem giờ',
        level: 1,
        month: 3,
        words: [
            { en: "O'clock", vi: 'Giờ đúng', emoji: '🕐', phonetic: '/əˈklɒk/' },
            { en: 'Half past', vi: 'Rưỡi', emoji: '🕧', phonetic: '/hæf pæst/' },
            { en: 'Quarter past', vi: 'Mười lăm phút', emoji: '🕐', phonetic: '/ˈkwɔːrtər pæst/' },
            { en: 'Quarter to', vi: 'Kém mười lăm', emoji: '🕐', phonetic: '/ˈkwɔːrtər tuː/' },
            { en: 'Early', vi: 'Sớm', emoji: '🌅', phonetic: '/ˈɜːrli/' },
            { en: 'Late', vi: 'Muộn / Trễ', emoji: '⏰', phonetic: '/leɪt/' },
            { en: 'Noon', vi: 'Giữa trưa', emoji: '☀️', phonetic: '/nuːn/' },
            { en: 'Midnight', vi: 'Nửa đêm', emoji: '🌙', phonetic: '/ˈmɪdnaɪt/' },
            { en: 'Schedule', vi: 'Thời khóa biểu', emoji: '📋', phonetic: '/ˈskedʒuːl/' },
            { en: 'Alarm', vi: 'Báo thức', emoji: '⏰', phonetic: '/əˈlɑːrm/' },
        ]
    },
    comparative_adjectives: {
        name: 'Tính từ so sánh',
        level: 1,
        month: 3,
        words: [
            { en: 'Bigger', vi: 'To hơn', emoji: '📏', phonetic: '/ˈbɪɡər/' },
            { en: 'Smaller', vi: 'Nhỏ hơn', emoji: '🤏', phonetic: '/ˈsmɔːlər/' },
            { en: 'Taller', vi: 'Cao hơn', emoji: '📐', phonetic: '/ˈtɔːlər/' },
            { en: 'Shorter', vi: 'Thấp hơn', emoji: '📐', phonetic: '/ˈʃɔːrtər/' },
            { en: 'Faster', vi: 'Nhanh hơn', emoji: '⚡', phonetic: '/ˈfæstər/' },
            { en: 'Slower', vi: 'Chậm hơn', emoji: '🐌', phonetic: '/ˈsloʊər/' },
            { en: 'Better', vi: 'Tốt hơn', emoji: '👍', phonetic: '/ˈbetər/' },
            { en: 'Worse', vi: 'Tệ hơn', emoji: '👎', phonetic: '/wɜːrs/' },
            { en: 'More beautiful', vi: 'Đẹp hơn', emoji: '🌸', phonetic: '/mɔːr ˈbjuːtɪfəl/' },
            { en: 'The best', vi: 'Tốt nhất', emoji: '🏆', phonetic: '/ðə best/' },
        ]
    },

    // === THÁNG 4 ===
    verbs_past: {
        name: 'Động từ quá khứ',
        level: 1,
        month: 4,
        words: [
            { en: 'Went', vi: 'Đã đi', emoji: '🚶', phonetic: '/went/' },
            { en: 'Ate', vi: 'Đã ăn', emoji: '🍽️', phonetic: '/eɪt/' },
            { en: 'Saw', vi: 'Đã thấy', emoji: '👁️', phonetic: '/sɔː/' },
            { en: 'Made', vi: 'Đã làm', emoji: '🔨', phonetic: '/meɪd/' },
            { en: 'Came', vi: 'Đã đến', emoji: '🏠', phonetic: '/keɪm/' },
            { en: 'Played', vi: 'Đã chơi', emoji: '🎮', phonetic: '/pleɪd/' },
            { en: 'Studied', vi: 'Đã học', emoji: '📚', phonetic: '/ˈstʌdid/' },
            { en: 'Watched', vi: 'Đã xem', emoji: '📺', phonetic: '/wɒtʃt/' },
            { en: 'Bought', vi: 'Đã mua', emoji: '🛒', phonetic: '/bɔːt/' },
            { en: 'Gave', vi: 'Đã cho / Đã tặng', emoji: '🎁', phonetic: '/ɡeɪv/' },
        ]
    },
    question_words: {
        name: 'Từ để hỏi',
        level: 1,
        month: 4,
        words: [
            { en: 'What', vi: 'Cái gì', emoji: '❓', phonetic: '/wɒt/' },
            { en: 'Where', vi: 'Ở đâu', emoji: '📍', phonetic: '/wer/' },
            { en: 'When', vi: 'Khi nào', emoji: '🕐', phonetic: '/wen/' },
            { en: 'Who', vi: 'Ai', emoji: '🧑', phonetic: '/huː/' },
            { en: 'Why', vi: 'Tại sao', emoji: '🤔', phonetic: '/waɪ/' },
            { en: 'How', vi: 'Như thế nào', emoji: '💭', phonetic: '/haʊ/' },
            { en: 'How many', vi: 'Bao nhiêu (đếm được)', emoji: '🔢', phonetic: '/haʊ ˈmeni/' },
            { en: 'How much', vi: 'Bao nhiêu (không đếm được)', emoji: '💰', phonetic: '/haʊ mʌtʃ/' },
            { en: 'Which', vi: 'Cái nào', emoji: '👆', phonetic: '/wɪtʃ/' },
            { en: 'Whose', vi: 'Của ai', emoji: '🏷️', phonetic: '/huːz/' },
        ]
    },

    // === THÁNG 5 ===
    city_life: {
        name: 'Đời sống thành phố',
        level: 2,
        month: 5,
        words: [
            { en: 'Building', vi: 'Tòa nhà', emoji: '🏢', phonetic: '/ˈbɪldɪŋ/' },
            { en: 'Traffic', vi: 'Giao thông', emoji: '🚦', phonetic: '/ˈtræfɪk/' },
            { en: 'Crosswalk', vi: 'Vạch qua đường', emoji: '🚶', phonetic: '/ˈkrɒswɔːk/' },
            { en: 'Sidewalk', vi: 'Vỉa hè', emoji: '🛤️', phonetic: '/ˈsaɪdwɔːk/' },
            { en: 'Downtown', vi: 'Trung tâm thành phố', emoji: '🏙️', phonetic: '/ˌdaʊnˈtaʊn/' },
            { en: 'Subway', vi: 'Tàu điện ngầm', emoji: '🚇', phonetic: '/ˈsʌbweɪ/' },
            { en: 'Skyscraper', vi: 'Tòa nhà chọc trời', emoji: '🏗️', phonetic: '/ˈskaɪskreɪpər/' },
            { en: 'Neighborhood', vi: 'Khu phố', emoji: '🏘️', phonetic: '/ˈneɪbərhʊd/' },
            { en: 'Apartment', vi: 'Căn hộ', emoji: '🏠', phonetic: '/əˈpɑːrtmənt/' },
            { en: 'Pollution', vi: 'Ô nhiễm', emoji: '🏭', phonetic: '/pəˈluːʃən/' },
        ]
    },
    technology: {
        name: 'Công nghệ',
        level: 2,
        month: 5,
        words: [
            { en: 'Tablet', vi: 'Máy tính bảng', emoji: '📱', phonetic: '/ˈtæblɪt/' },
            { en: 'Laptop', vi: 'Máy tính xách tay', emoji: '💻', phonetic: '/ˈlæptɒp/' },
            { en: 'Keyboard', vi: 'Bàn phím', emoji: '⌨️', phonetic: '/ˈkiːbɔːrd/' },
            { en: 'Mouse', vi: 'Chuột máy tính', emoji: '🖱️', phonetic: '/maʊs/' },
            { en: 'Screen', vi: 'Màn hình', emoji: '🖥️', phonetic: '/skriːn/' },
            { en: 'Password', vi: 'Mật khẩu', emoji: '🔒', phonetic: '/ˈpæswɜːrd/' },
            { en: 'Download', vi: 'Tải xuống', emoji: '⬇️', phonetic: '/ˈdaʊnloʊd/' },
            { en: 'Website', vi: 'Trang web', emoji: '🌐', phonetic: '/ˈwebsaɪt/' },
            { en: 'Battery', vi: 'Pin', emoji: '🔋', phonetic: '/ˈbætəri/' },
            { en: 'Printer', vi: 'Máy in', emoji: '🖨️', phonetic: '/ˈprɪntər/' },
        ]
    },

    // === THÁNG 6 ===
    health: {
        name: 'Sức khỏe',
        level: 2,
        month: 6,
        words: [
            { en: 'Healthy', vi: 'Khỏe mạnh', emoji: '💪', phonetic: '/ˈhelθi/' },
            { en: 'Sick', vi: 'Ốm / Bệnh', emoji: '🤒', phonetic: '/sɪk/' },
            { en: 'Fever', vi: 'Sốt', emoji: '🌡️', phonetic: '/ˈfiːvər/' },
            { en: 'Cough', vi: 'Ho', emoji: '🤧', phonetic: '/kɒf/' },
            { en: 'Medicine', vi: 'Thuốc', emoji: '💊', phonetic: '/ˈmedɪsɪn/' },
            { en: 'Dentist', vi: 'Nha sĩ', emoji: '🦷', phonetic: '/ˈdentɪst/' },
            { en: 'Vitamin', vi: 'Vitamin', emoji: '💊', phonetic: '/ˈvaɪtəmɪn/' },
            { en: 'Rest', vi: 'Nghỉ ngơi', emoji: '😴', phonetic: '/rest/' },
            { en: 'Headache', vi: 'Đau đầu', emoji: '🤕', phonetic: '/ˈhedeɪk/' },
            { en: 'Stomach ache', vi: 'Đau bụng', emoji: '🤢', phonetic: '/ˈstʌmək eɪk/' },
        ]
    },
    environment: {
        name: 'Môi trường',
        level: 2,
        month: 6,
        words: [
            { en: 'Climate', vi: 'Khí hậu', emoji: '🌤️', phonetic: '/ˈklaɪmət/' },
            { en: 'Protect', vi: 'Bảo vệ', emoji: '🛡️', phonetic: '/prəˈtekt/' },
            { en: 'Endangered', vi: 'Có nguy cơ tuyệt chủng', emoji: '🐼', phonetic: '/ɪnˈdeɪndʒərd/' },
            { en: 'Habitat', vi: 'Môi trường sống', emoji: '🌿', phonetic: '/ˈhæbɪtæt/' },
            { en: 'Ocean', vi: 'Đại dương', emoji: '🌊', phonetic: '/ˈoʊʃən/' },
            { en: 'Desert', vi: 'Sa mạc', emoji: '🏜️', phonetic: '/ˈdezərt/' },
            { en: 'Rainforest', vi: 'Rừng nhiệt đới', emoji: '🌴', phonetic: '/ˈreɪnfɔːrɪst/' },
            { en: 'Drought', vi: 'Hạn hán', emoji: '☀️', phonetic: '/draʊt/' },
            { en: 'Flood', vi: 'Lũ lụt', emoji: '🌊', phonetic: '/flʌd/' },
            { en: 'Wildlife', vi: 'Động vật hoang dã', emoji: '🦁', phonetic: '/ˈwaɪldlaɪf/' },
        ]
    },

    // === THÁNG 7 ===
    culture: {
        name: 'Văn hóa',
        level: 2,
        month: 7,
        words: [
            { en: 'Tradition', vi: 'Truyền thống', emoji: '🎎', phonetic: '/trəˈdɪʃən/' },
            { en: 'Custom', vi: 'Phong tục', emoji: '🏮', phonetic: '/ˈkʌstəm/' },
            { en: 'Costume', vi: 'Trang phục', emoji: '👘', phonetic: '/ˈkɒstjuːm/' },
            { en: 'Ceremony', vi: 'Nghi lễ', emoji: '🎊', phonetic: '/ˈserəmoʊni/' },
            { en: 'Heritage', vi: 'Di sản', emoji: '🏛️', phonetic: '/ˈherɪtɪdʒ/' },
            { en: 'Temple', vi: 'Đền / Chùa', emoji: '⛩️', phonetic: '/ˈtempəl/' },
            { en: 'Legend', vi: 'Truyền thuyết', emoji: '📖', phonetic: '/ˈledʒənd/' },
            { en: 'Symbol', vi: 'Biểu tượng', emoji: '🔣', phonetic: '/ˈsɪmbəl/' },
            { en: 'Flag', vi: 'Lá cờ', emoji: '🚩', phonetic: '/flæɡ/' },
            { en: 'Language', vi: 'Ngôn ngữ', emoji: '🗣️', phonetic: '/ˈlæŋɡwɪdʒ/' },
        ]
    },
    communication: {
        name: 'Giao tiếp',
        level: 2,
        month: 7,
        words: [
            { en: 'Agree', vi: 'Đồng ý', emoji: '✅', phonetic: '/əˈɡriː/' },
            { en: 'Disagree', vi: 'Không đồng ý', emoji: '❌', phonetic: '/ˌdɪsəˈɡriː/' },
            { en: 'Explain', vi: 'Giải thích', emoji: '💬', phonetic: '/ɪkˈspleɪn/' },
            { en: 'Suggest', vi: 'Đề nghị', emoji: '💡', phonetic: '/səˈdʒest/' },
            { en: 'Promise', vi: 'Hứa', emoji: '🤞', phonetic: '/ˈprɒmɪs/' },
            { en: 'Apologize', vi: 'Xin lỗi', emoji: '🙏', phonetic: '/əˈpɒlədʒaɪz/' },
            { en: 'Compliment', vi: 'Khen ngợi', emoji: '👏', phonetic: '/ˈkɒmplɪmənt/' },
            { en: 'Invite', vi: 'Mời', emoji: '💌', phonetic: '/ɪnˈvaɪt/' },
            { en: 'Refuse', vi: 'Từ chối', emoji: '🙅', phonetic: '/rɪˈfjuːz/' },
            { en: 'Request', vi: 'Yêu cầu', emoji: '📩', phonetic: '/rɪˈkwest/' },
        ]
    },

    // === THÁNG 8 ===
    media: {
        name: 'Truyền thông',
        level: 2,
        month: 8,
        words: [
            { en: 'Newspaper', vi: 'Báo giấy', emoji: '📰', phonetic: '/ˈnjuːzpeɪpər/' },
            { en: 'Magazine', vi: 'Tạp chí', emoji: '📖', phonetic: '/ˌmæɡəˈziːn/' },
            { en: 'Television', vi: 'Truyền hình', emoji: '📺', phonetic: '/ˈtelɪvɪʒən/' },
            { en: 'Radio', vi: 'Đài phát thanh', emoji: '📻', phonetic: '/ˈreɪdioʊ/' },
            { en: 'News', vi: 'Tin tức', emoji: '📢', phonetic: '/njuːz/' },
            { en: 'Reporter', vi: 'Phóng viên', emoji: '🎙️', phonetic: '/rɪˈpɔːrtər/' },
            { en: 'Interview', vi: 'Phỏng vấn', emoji: '🎤', phonetic: '/ˈɪntərvjuː/' },
            { en: 'Channel', vi: 'Kênh', emoji: '📡', phonetic: '/ˈtʃænəl/' },
            { en: 'Broadcast', vi: 'Phát sóng', emoji: '📡', phonetic: '/ˈbrɔːdkæst/' },
            { en: 'Headline', vi: 'Tiêu đề', emoji: '📝', phonetic: '/ˈhedlaɪn/' },
        ]
    },
    art: {
        name: 'Nghệ thuật',
        level: 2,
        month: 8,
        words: [
            { en: 'Painting', vi: 'Bức tranh', emoji: '🖼️', phonetic: '/ˈpeɪntɪŋ/' },
            { en: 'Sculpture', vi: 'Tác phẩm điêu khắc', emoji: '🗿', phonetic: '/ˈskʌlptʃər/' },
            { en: 'Gallery', vi: 'Phòng tranh', emoji: '🏛️', phonetic: '/ˈɡæləri/' },
            { en: 'Museum', vi: 'Bảo tàng', emoji: '🏛️', phonetic: '/mjuˈziːəm/' },
            { en: 'Canvas', vi: 'Khung vẽ', emoji: '🎨', phonetic: '/ˈkænvəs/' },
            { en: 'Portrait', vi: 'Chân dung', emoji: '🖼️', phonetic: '/ˈpɔːrtrɪt/' },
            { en: 'Sketch', vi: 'Phác thảo', emoji: '✏️', phonetic: '/sketʃ/' },
            { en: 'Watercolor', vi: 'Màu nước', emoji: '🎨', phonetic: '/ˈwɔːtərkʌlər/' },
            { en: 'Exhibition', vi: 'Triển lãm', emoji: '🖼️', phonetic: '/ˌeksɪˈbɪʃən/' },
            { en: 'Creative', vi: 'Sáng tạo', emoji: '💡', phonetic: '/kriˈeɪtɪv/' },
        ]
    },

    // === THÁNG 9 ===
    science: {
        name: 'Khoa học',
        level: 3,
        month: 9,
        words: [
            { en: 'Experiment', vi: 'Thí nghiệm', emoji: '🧪', phonetic: '/ɪkˈsperɪmənt/' },
            { en: 'Laboratory', vi: 'Phòng thí nghiệm', emoji: '🔬', phonetic: '/ˈlæbrətɔːri/' },
            { en: 'Microscope', vi: 'Kính hiển vi', emoji: '🔬', phonetic: '/ˈmaɪkrəskoʊp/' },
            { en: 'Hypothesis', vi: 'Giả thuyết', emoji: '🤔', phonetic: '/haɪˈpɒθəsɪs/' },
            { en: 'Discover', vi: 'Khám phá', emoji: '🔍', phonetic: '/dɪˈskʌvər/' },
            { en: 'Gravity', vi: 'Trọng lực', emoji: '🍎', phonetic: '/ˈɡrævəti/' },
            { en: 'Magnet', vi: 'Nam châm', emoji: '🧲', phonetic: '/ˈmæɡnɪt/' },
            { en: 'Chemical', vi: 'Hóa chất', emoji: '⚗️', phonetic: '/ˈkemɪkəl/' },
            { en: 'Temperature', vi: 'Nhiệt độ', emoji: '🌡️', phonetic: '/ˈtemprətʃər/' },
            { en: 'Research', vi: 'Nghiên cứu', emoji: '📊', phonetic: '/rɪˈsɜːrtʃ/' },
        ]
    },
    history: {
        name: 'Lịch sử',
        level: 3,
        month: 9,
        words: [
            { en: 'Ancient', vi: 'Cổ đại', emoji: '🏛️', phonetic: '/ˈeɪnʃənt/' },
            { en: 'Empire', vi: 'Đế chế', emoji: '👑', phonetic: '/ˈempaɪər/' },
            { en: 'Battle', vi: 'Trận chiến', emoji: '⚔️', phonetic: '/ˈbætəl/' },
            { en: 'King', vi: 'Vua', emoji: '👑', phonetic: '/kɪŋ/' },
            { en: 'Queen', vi: 'Nữ hoàng', emoji: '👸', phonetic: '/kwiːn/' },
            { en: 'Dynasty', vi: 'Triều đại', emoji: '🏯', phonetic: '/ˈdaɪnəsti/' },
            { en: 'Independence', vi: 'Độc lập', emoji: '🗽', phonetic: '/ˌɪndɪˈpendəns/' },
            { en: 'Revolution', vi: 'Cách mạng', emoji: '✊', phonetic: '/ˌrevəˈluːʃən/' },
            { en: 'Monument', vi: 'Tượng đài', emoji: '🗿', phonetic: '/ˈmɒnjumənt/' },
            { en: 'Century', vi: 'Thế kỷ', emoji: '📅', phonetic: '/ˈsentʃəri/' },
        ]
    },

    // === THÁNG 10 ===
    geography: {
        name: 'Địa lý',
        level: 3,
        month: 10,
        words: [
            { en: 'Continent', vi: 'Châu lục', emoji: '🌍', phonetic: '/ˈkɒntɪnənt/' },
            { en: 'Capital', vi: 'Thủ đô', emoji: '🏛️', phonetic: '/ˈkæpɪtəl/' },
            { en: 'Population', vi: 'Dân số', emoji: '👥', phonetic: '/ˌpɒpjuˈleɪʃən/' },
            { en: 'Border', vi: 'Biên giới', emoji: '🗺️', phonetic: '/ˈbɔːrdər/' },
            { en: 'Peninsula', vi: 'Bán đảo', emoji: '🏝️', phonetic: '/pəˈnɪnsjələ/' },
            { en: 'Valley', vi: 'Thung lũng', emoji: '🏔️', phonetic: '/ˈvæli/' },
            { en: 'Volcano', vi: 'Núi lửa', emoji: '🌋', phonetic: '/vɒlˈkeɪnoʊ/' },
            { en: 'Glacier', vi: 'Sông băng', emoji: '🧊', phonetic: '/ˈɡleɪʃər/' },
            { en: 'Equator', vi: 'Đường xích đạo', emoji: '🌐', phonetic: '/ɪˈkweɪtər/' },
            { en: 'Compass', vi: 'La bàn', emoji: '🧭', phonetic: '/ˈkʌmpəs/' },
        ]
    },
    literature: {
        name: 'Văn học',
        level: 3,
        month: 10,
        words: [
            { en: 'Story', vi: 'Câu chuyện', emoji: '📖', phonetic: '/ˈstɔːri/' },
            { en: 'Character', vi: 'Nhân vật', emoji: '🧑', phonetic: '/ˈkærəktər/' },
            { en: 'Author', vi: 'Tác giả', emoji: '✍️', phonetic: '/ˈɔːθər/' },
            { en: 'Poem', vi: 'Bài thơ', emoji: '📜', phonetic: '/ˈpoʊɪm/' },
            { en: 'Novel', vi: 'Tiểu thuyết', emoji: '📚', phonetic: '/ˈnɒvəl/' },
            { en: 'Plot', vi: 'Cốt truyện', emoji: '📋', phonetic: '/plɒt/' },
            { en: 'Hero', vi: 'Anh hùng', emoji: '🦸', phonetic: '/ˈhɪroʊ/' },
            { en: 'Villain', vi: 'Nhân vật phản diện', emoji: '🦹', phonetic: '/ˈvɪlən/' },
            { en: 'Chapter', vi: 'Chương', emoji: '📑', phonetic: '/ˈtʃæptər/' },
            { en: 'Fairy tale', vi: 'Truyện cổ tích', emoji: '🧚', phonetic: '/ˈferi teɪl/' },
        ]
    },

    // === THÁNG 11 ===
    debate_vocab: {
        name: 'Từ vựng tranh luận',
        level: 3,
        month: 11,
        words: [
            { en: 'Opinion', vi: 'Ý kiến', emoji: '💭', phonetic: '/əˈpɪnjən/' },
            { en: 'Argument', vi: 'Lập luận', emoji: '🗣️', phonetic: '/ˈɑːrɡjumənt/' },
            { en: 'Evidence', vi: 'Bằng chứng', emoji: '📋', phonetic: '/ˈevɪdəns/' },
            { en: 'Reason', vi: 'Lý do', emoji: '🤔', phonetic: '/ˈriːzən/' },
            { en: 'Support', vi: 'Ủng hộ', emoji: '👍', phonetic: '/səˈpɔːrt/' },
            { en: 'Oppose', vi: 'Phản đối', emoji: '👎', phonetic: '/əˈpoʊz/' },
            { en: 'Fact', vi: 'Sự thật', emoji: '✅', phonetic: '/fækt/' },
            { en: 'Conclusion', vi: 'Kết luận', emoji: '🏁', phonetic: '/kənˈkluːʒən/' },
            { en: 'Example', vi: 'Ví dụ', emoji: '📌', phonetic: '/ɪɡˈzæmpəl/' },
            { en: 'Compare', vi: 'So sánh', emoji: '⚖️', phonetic: '/kəmˈper/' },
        ]
    },
    presentation_skills: {
        name: 'Kỹ năng thuyết trình',
        level: 3,
        month: 11,
        words: [
            { en: 'Introduce', vi: 'Giới thiệu', emoji: '🎤', phonetic: '/ˌɪntrəˈdjuːs/' },
            { en: 'Slide', vi: 'Trang trình chiếu', emoji: '📊', phonetic: '/slaɪd/' },
            { en: 'Topic', vi: 'Chủ đề', emoji: '📌', phonetic: '/ˈtɒpɪk/' },
            { en: 'Audience', vi: 'Khán giả', emoji: '👥', phonetic: '/ˈɔːdiəns/' },
            { en: 'Confident', vi: 'Tự tin', emoji: '💪', phonetic: '/ˈkɒnfɪdənt/' },
            { en: 'Prepare', vi: 'Chuẩn bị', emoji: '📝', phonetic: '/prɪˈper/' },
            { en: 'Practice', vi: 'Luyện tập', emoji: '🔄', phonetic: '/ˈpræktɪs/' },
            { en: 'Summary', vi: 'Tóm tắt', emoji: '📋', phonetic: '/ˈsʌməri/' },
            { en: 'Gesture', vi: 'Cử chỉ', emoji: '🤲', phonetic: '/ˈdʒestʃər/' },
            { en: 'Applause', vi: 'Vỗ tay', emoji: '👏', phonetic: '/əˈplɔːz/' },
        ]
    },

    // === THÁNG 12 ===
    writing_vocab: {
        name: 'Từ vựng viết',
        level: 3,
        month: 12,
        words: [
            { en: 'Paragraph', vi: 'Đoạn văn', emoji: '📝', phonetic: '/ˈpærəɡræf/' },
            { en: 'Sentence', vi: 'Câu', emoji: '✍️', phonetic: '/ˈsentəns/' },
            { en: 'Title', vi: 'Tiêu đề', emoji: '📋', phonetic: '/ˈtaɪtəl/' },
            { en: 'Introduction', vi: 'Phần mở đầu', emoji: '📖', phonetic: '/ˌɪntrəˈdʌkʃən/' },
            { en: 'Body', vi: 'Phần thân bài', emoji: '📄', phonetic: '/ˈbɒdi/' },
            { en: 'Ending', vi: 'Phần kết', emoji: '🏁', phonetic: '/ˈendɪŋ/' },
            { en: 'Draft', vi: 'Bản nháp', emoji: '📝', phonetic: '/dræft/' },
            { en: 'Edit', vi: 'Chỉnh sửa', emoji: '✏️', phonetic: '/ˈedɪt/' },
            { en: 'Spelling', vi: 'Chính tả', emoji: '🔤', phonetic: '/ˈspelɪŋ/' },
            { en: 'Grammar', vi: 'Ngữ pháp', emoji: '📚', phonetic: '/ˈɡræmər/' },
        ]
    },
    test_prep: {
        name: 'Ôn thi',
        level: 3,
        month: 12,
        words: [
            { en: 'Quiz', vi: 'Bài kiểm tra ngắn', emoji: '📝', phonetic: '/kwɪz/' },
            { en: 'Exam', vi: 'Bài thi', emoji: '📋', phonetic: '/ɪɡˈzæm/' },
            { en: 'Score', vi: 'Điểm số', emoji: '💯', phonetic: '/skɔːr/' },
            { en: 'Review', vi: 'Ôn tập', emoji: '🔄', phonetic: '/rɪˈvjuː/' },
            { en: 'Answer', vi: 'Câu trả lời', emoji: '✅', phonetic: '/ˈænsər/' },
            { en: 'Question', vi: 'Câu hỏi', emoji: '❓', phonetic: '/ˈkwestʃən/' },
            { en: 'Correct', vi: 'Đúng', emoji: '✅', phonetic: '/kəˈrekt/' },
            { en: 'Mistake', vi: 'Lỗi sai', emoji: '❌', phonetic: '/mɪˈsteɪk/' },
            { en: 'Certificate', vi: 'Chứng chỉ', emoji: '🏅', phonetic: '/sərˈtɪfɪkət/' },
            { en: 'Graduate', vi: 'Tốt nghiệp', emoji: '🎓', phonetic: '/ˈɡrædʒuət/' },
        ]
    },
};

// ============================================
// PHONICS - VOWEL SOUNDS
// ============================================
GRADE_DATA[3].phonics = [
    { letter: 'AI', sound: '/eɪ/', words: [
        { word: 'Rain', highlight: 'ai', emoji: '🌧️' },
        { word: 'Train', highlight: 'ai', emoji: '🚂' },
        { word: 'Paint', highlight: 'ai', emoji: '🎨' }
    ]},
    { letter: 'AY', sound: '/eɪ/', words: [
        { word: 'Play', highlight: 'ay', emoji: '🎮' },
        { word: 'Day', highlight: 'ay', emoji: '☀️' },
        { word: 'Say', highlight: 'ay', emoji: '🗣️' }
    ]},
    { letter: 'EA', sound: '/iː/', words: [
        { word: 'Read', highlight: 'ea', emoji: '📖' },
        { word: 'Beach', highlight: 'ea', emoji: '🏖️' },
        { word: 'Team', highlight: 'ea', emoji: '🤝' }
    ]},
    { letter: 'EE', sound: '/iː/', words: [
        { word: 'Tree', highlight: 'ee', emoji: '🌳' },
        { word: 'Bee', highlight: 'ee', emoji: '🐝' },
        { word: 'Sleep', highlight: 'ee', emoji: '😴' }
    ]},
    { letter: 'OA', sound: '/oʊ/', words: [
        { word: 'Boat', highlight: 'oa', emoji: '⛵' },
        { word: 'Coat', highlight: 'oa', emoji: '🧥' },
        { word: 'Road', highlight: 'oa', emoji: '🛤️' }
    ]},
    { letter: 'OO', sound: '/uː/', words: [
        { word: 'Moon', highlight: 'oo', emoji: '🌙' },
        { word: 'Food', highlight: 'oo', emoji: '🍽️' },
        { word: 'School', highlight: 'oo', emoji: '🏫' }
    ]},
    { letter: 'OU', sound: '/aʊ/', words: [
        { word: 'House', highlight: 'ou', emoji: '🏠' },
        { word: 'Mouse', highlight: 'ou', emoji: '🐭' },
        { word: 'Cloud', highlight: 'ou', emoji: '☁️' }
    ]},
    { letter: 'OW', sound: '/aʊ/', words: [
        { word: 'Cow', highlight: 'ow', emoji: '🐄' },
        { word: 'Flower', highlight: 'ow', emoji: '🌸' },
        { word: 'Town', highlight: 'ow', emoji: '🏘️' }
    ]},
    { letter: 'IE', sound: '/aɪ/', words: [
        { word: 'Pie', highlight: 'ie', emoji: '🥧' },
        { word: 'Tie', highlight: 'ie', emoji: '👔' },
        { word: 'Die', highlight: 'ie', emoji: '🎲' }
    ]},
    { letter: 'IGH', sound: '/aɪ/', words: [
        { word: 'Night', highlight: 'igh', emoji: '🌙' },
        { word: 'Light', highlight: 'igh', emoji: '💡' },
        { word: 'Flight', highlight: 'igh', emoji: '✈️' }
    ]},
];

// ============================================
// CÂU MẪU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[3].sentences = {
    level1: [
        { sentence: ['I', 'wake', 'up', 'at', 'six', "o'clock"], emoji: '⏰', vi: 'Tôi thức dậy lúc sáu giờ', extra: ['sleep', 'in'] },
        { sentence: ['She', 'ate', 'breakfast', 'this', 'morning'], emoji: '🍳', vi: 'Cô ấy đã ăn sáng sáng nay', extra: ['dinner', 'a'] },
        { sentence: ['What', 'is', 'your', 'favorite', 'subject?'], emoji: '📚', vi: 'Môn học yêu thích của bạn là gì?', extra: ['who', 'the'] },
        { sentence: ['The', 'elephant', 'is', 'bigger', 'than', 'the', 'dog'], emoji: '🐘', vi: 'Con voi to hơn con chó', extra: ['smaller', 'a'] },
        { sentence: ['We', 'went', 'to', 'school', 'yesterday'], emoji: '🏫', vi: 'Hôm qua chúng tôi đã đi học', extra: ['today', 'a'] },
        { sentence: ['Where', 'did', 'you', 'buy', 'this', 'book?'], emoji: '📖', vi: 'Bạn đã mua cuốn sách này ở đâu?', extra: ['when', 'a'] },
        { sentence: ['It', 'is', 'half', 'past', 'seven', 'now'], emoji: '🕐', vi: 'Bây giờ là bảy giờ rưỡi', extra: ['quarter', 'a'] },
        { sentence: ['Nice', 'to', 'meet', 'you', 'today'], emoji: '🤝', vi: 'Rất vui được gặp bạn hôm nay', extra: ['see', 'a'] },
    ],
    level2: [
        { sentence: ['The', 'traffic', 'in', 'the', 'city', 'is', 'very', 'busy'], emoji: '🚦', vi: 'Giao thông trong thành phố rất đông đúc', extra: ['quiet', 'a'] },
        { sentence: ['She', 'downloaded', 'a', 'new', 'app', 'on', 'her', 'tablet'], emoji: '📱', vi: 'Cô ấy đã tải ứng dụng mới trên máy tính bảng', extra: ['old', 'the'] },
        { sentence: ['I', 'feel', 'sick', 'and', 'have', 'a', 'fever'], emoji: '🤒', vi: 'Tôi cảm thấy ốm và bị sốt', extra: ['healthy', 'the'] },
        { sentence: ['We', 'should', 'protect', 'the', 'rainforest'], emoji: '🌴', vi: 'Chúng ta nên bảo vệ rừng nhiệt đới', extra: ['destroy', 'a'] },
        { sentence: ['The', 'reporter', 'is', 'on', 'television', 'now'], emoji: '📺', vi: 'Phóng viên đang lên truyền hình', extra: ['radio', 'a'] },
        { sentence: ['This', 'painting', 'is', 'very', 'creative', 'and', 'beautiful'], emoji: '🖼️', vi: 'Bức tranh này rất sáng tạo và đẹp', extra: ['ugly', 'a'] },
        { sentence: ['I', 'agree', 'with', 'your', 'opinion'], emoji: '✅', vi: 'Tôi đồng ý với ý kiến của bạn', extra: ['disagree', 'my'] },
        { sentence: ['The', 'temple', 'is', 'a', 'famous', 'heritage', 'site'], emoji: '⛩️', vi: 'Ngôi đền là di sản nổi tiếng', extra: ['new', 'the'] },
    ],
    level3: [
        { sentence: ['The', 'scientist', 'discovered', 'a', 'new', 'chemical'], emoji: '🧪', vi: 'Nhà khoa học đã khám phá ra hóa chất mới', extra: ['old', 'the'] },
        { sentence: ['The', 'ancient', 'dynasty', 'ruled', 'for', 'many', 'centuries'], emoji: '👑', vi: 'Triều đại cổ đã cai trị trong nhiều thế kỷ', extra: ['modern', 'a'] },
        { sentence: ['The', 'author', 'wrote', 'a', 'famous', 'novel'], emoji: '📚', vi: 'Tác giả đã viết một cuốn tiểu thuyết nổi tiếng', extra: ['read', 'the'] },
        { sentence: ['Asia', 'is', 'the', 'largest', 'continent', 'in', 'the', 'world'], emoji: '🌍', vi: 'Châu Á là châu lục lớn nhất thế giới', extra: ['smallest', 'a'] },
        { sentence: ['She', 'prepared', 'a', 'presentation', 'for', 'the', 'audience'], emoji: '🎤', vi: 'Cô ấy đã chuẩn bị bài thuyết trình cho khán giả', extra: ['forgot', 'an'] },
        { sentence: ['I', 'studied', 'hard', 'and', 'got', 'a', 'good', 'score'], emoji: '💯', vi: 'Tôi đã học chăm và đạt điểm tốt', extra: ['bad', 'the'] },
    ],
};

// ============================================
// SPELLING THEO CẤP ĐỘ
// ============================================
GRADE_DATA[3].spelling = {
    level1: [
        { word: 'BRUSH', emoji: '🪥', vi: 'Đánh răng' },
        { word: 'LUNCH', emoji: '🍱', vi: 'Bữa trưa' },
        { word: 'EARLY', emoji: '🌅', vi: 'Sớm' },
        { word: 'STUDY', emoji: '📚', vi: 'Học bài' },
        { word: 'WHERE', emoji: '📍', vi: 'Ở đâu' },
        { word: 'WATCH', emoji: '📺', vi: 'Xem' },
        { word: 'SNACK', emoji: '🍪', vi: 'Ăn nhẹ' },
        { word: 'SPICY', emoji: '🌶️', vi: 'Cay' },
        { word: 'ALARM', emoji: '⏰', vi: 'Báo thức' },
        { word: 'WORSE', emoji: '👎', vi: 'Tệ hơn' },
        { word: 'WHOSE', emoji: '🏷️', vi: 'Của ai' },
        { word: 'FEVER', emoji: '🌡️', vi: 'Sốt' },
    ],
    level2: [
        { word: 'TRAFFIC', emoji: '🚦', vi: 'Giao thông' },
        { word: 'SCREEN', emoji: '🖥️', vi: 'Màn hình' },
        { word: 'HEALTH', emoji: '💪', vi: 'Sức khỏe' },
        { word: 'DESERT', emoji: '🏜️', vi: 'Sa mạc' },
        { word: 'TEMPLE', emoji: '⛩️', vi: 'Đền chùa' },
        { word: 'INVITE', emoji: '💌', vi: 'Mời' },
        { word: 'CHANNEL', emoji: '📡', vi: 'Kênh' },
        { word: 'MUSEUM', emoji: '🏛️', vi: 'Bảo tàng' },
        { word: 'CUSTOM', emoji: '🏮', vi: 'Phong tục' },
        { word: 'SKETCH', emoji: '✏️', vi: 'Phác thảo' },
        { word: 'TABLET', emoji: '📱', vi: 'Máy tính bảng' },
        { word: 'LEGEND', emoji: '📖', vi: 'Truyền thuyết' },
    ],
    level3: [
        { word: 'ANCIENT', emoji: '🏛️', vi: 'Cổ đại' },
        { word: 'CHAPTER', emoji: '📑', vi: 'Chương' },
        { word: 'CAPITAL', emoji: '🏛️', vi: 'Thủ đô' },
        { word: 'VOLCANO', emoji: '🌋', vi: 'Núi lửa' },
        { word: 'OPINION', emoji: '💭', vi: 'Ý kiến' },
        { word: 'HISTORY', emoji: '📜', vi: 'Lịch sử' },
        { word: 'GRAVITY', emoji: '🍎', vi: 'Trọng lực' },
        { word: 'SUMMARY', emoji: '📋', vi: 'Tóm tắt' },
        { word: 'GRAMMAR', emoji: '📚', vi: 'Ngữ pháp' },
        { word: 'EXAMPLE', emoji: '📌', vi: 'Ví dụ' },
        { word: 'CORRECT', emoji: '✅', vi: 'Đúng' },
        { word: 'CENTURY', emoji: '📅', vi: 'Thế kỷ' },
    ],
};

// ============================================
// NGHE HIỂU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[3].listening = {
    level1: [
        { word: 'Breakfast', options: [{ emoji: '🍳', label: 'Breakfast' }, { emoji: '🍱', label: 'Lunch' }, { emoji: '🍽️', label: 'Dinner' }, { emoji: '🍪', label: 'Snack' }], correct: 0 },
        { word: 'Wake up', options: [{ emoji: '🛏️', label: 'Go to bed' }, { emoji: '⏰', label: 'Wake up' }, { emoji: '📚', label: 'Study' }, { emoji: '🏋️', label: 'Exercise' }], correct: 1 },
        { word: 'Geography', options: [{ emoji: '🔢', label: 'Math' }, { emoji: '🔬', label: 'Science' }, { emoji: '🌍', label: 'Geography' }, { emoji: '📜', label: 'History' }], correct: 2 },
        { word: 'Midnight', options: [{ emoji: '🌅', label: 'Early' }, { emoji: '☀️', label: 'Noon' }, { emoji: '⏰', label: 'Late' }, { emoji: '🌙', label: 'Midnight' }], correct: 3 },
        { word: 'Bigger', options: [{ emoji: '📏', label: 'Bigger' }, { emoji: '🤏', label: 'Smaller' }, { emoji: '⚡', label: 'Faster' }, { emoji: '🐌', label: 'Slower' }], correct: 0 },
        { word: 'Went', options: [{ emoji: '🍽️', label: 'Ate' }, { emoji: '🚶', label: 'Went' }, { emoji: '👁️', label: 'Saw' }, { emoji: '🔨', label: 'Made' }], correct: 1 },
        { word: 'Why', options: [{ emoji: '❓', label: 'What' }, { emoji: '📍', label: 'Where' }, { emoji: '🤔', label: 'Why' }, { emoji: '🕐', label: 'When' }], correct: 2 },
        { word: 'Sour', options: [{ emoji: '🌶️', label: 'Spicy' }, { emoji: '😋', label: 'Delicious' }, { emoji: '😊', label: 'Full' }, { emoji: '🍋', label: 'Sour' }], correct: 3 },
    ],
    level2: [
        { word: 'Subway', options: [{ emoji: '🚇', label: 'Subway' }, { emoji: '🚦', label: 'Traffic' }, { emoji: '🏢', label: 'Building' }, { emoji: '🏘️', label: 'Neighborhood' }], correct: 0 },
        { word: 'Password', options: [{ emoji: '🖥️', label: 'Screen' }, { emoji: '🔒', label: 'Password' }, { emoji: '⌨️', label: 'Keyboard' }, { emoji: '🖱️', label: 'Mouse' }], correct: 1 },
        { word: 'Medicine', options: [{ emoji: '🌡️', label: 'Fever' }, { emoji: '🤧', label: 'Cough' }, { emoji: '💊', label: 'Medicine' }, { emoji: '🦷', label: 'Dentist' }], correct: 2 },
        { word: 'Drought', options: [{ emoji: '🌊', label: 'Flood' }, { emoji: '🌴', label: 'Rainforest' }, { emoji: '🌊', label: 'Ocean' }, { emoji: '☀️', label: 'Drought' }], correct: 3 },
        { word: 'Tradition', options: [{ emoji: '🎎', label: 'Tradition' }, { emoji: '🏮', label: 'Custom' }, { emoji: '👘', label: 'Costume' }, { emoji: '🎊', label: 'Ceremony' }], correct: 0 },
        { word: 'Gallery', options: [{ emoji: '🗿', label: 'Sculpture' }, { emoji: '🏛️', label: 'Gallery' }, { emoji: '🖼️', label: 'Painting' }, { emoji: '🎨', label: 'Canvas' }], correct: 1 },
        { word: 'Refuse', options: [{ emoji: '💌', label: 'Invite' }, { emoji: '💡', label: 'Suggest' }, { emoji: '🙅', label: 'Refuse' }, { emoji: '✅', label: 'Agree' }], correct: 2 },
        { word: 'Headline', options: [{ emoji: '📻', label: 'Radio' }, { emoji: '📡', label: 'Channel' }, { emoji: '🎙️', label: 'Reporter' }, { emoji: '📝', label: 'Headline' }], correct: 3 },
    ],
    level3: [
        { word: 'Microscope', options: [{ emoji: '🔬', label: 'Microscope' }, { emoji: '🧪', label: 'Experiment' }, { emoji: '⚗️', label: 'Chemical' }, { emoji: '🌡️', label: 'Temperature' }], correct: 0 },
        { word: 'Dynasty', options: [{ emoji: '⚔️', label: 'Battle' }, { emoji: '🏯', label: 'Dynasty' }, { emoji: '👑', label: 'Empire' }, { emoji: '🗿', label: 'Monument' }], correct: 1 },
        { word: 'Glacier', options: [{ emoji: '🌋', label: 'Volcano' }, { emoji: '🏔️', label: 'Valley' }, { emoji: '🧊', label: 'Glacier' }, { emoji: '🌐', label: 'Equator' }], correct: 2 },
        { word: 'Villain', options: [{ emoji: '✍️', label: 'Author' }, { emoji: '📑', label: 'Chapter' }, { emoji: '🦸', label: 'Hero' }, { emoji: '🦹', label: 'Villain' }], correct: 3 },
        { word: 'Evidence', options: [{ emoji: '📋', label: 'Evidence' }, { emoji: '💭', label: 'Opinion' }, { emoji: '🗣️', label: 'Argument' }, { emoji: '🤔', label: 'Reason' }], correct: 0 },
        { word: 'Audience', options: [{ emoji: '📌', label: 'Topic' }, { emoji: '👥', label: 'Audience' }, { emoji: '📊', label: 'Slide' }, { emoji: '💪', label: 'Confident' }], correct: 1 },
        { word: 'Grammar', options: [{ emoji: '📝', label: 'Draft' }, { emoji: '🔤', label: 'Spelling' }, { emoji: '📚', label: 'Grammar' }, { emoji: '✏️', label: 'Edit' }], correct: 2 },
        { word: 'Certificate', options: [{ emoji: '❓', label: 'Question' }, { emoji: '✅', label: 'Answer' }, { emoji: '💯', label: 'Score' }, { emoji: '🏅', label: 'Certificate' }], correct: 3 },
    ],
};
