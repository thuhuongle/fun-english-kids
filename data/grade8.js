// ============================================
// LỚP 8 - GIÁO TRÌNH 12 THÁNG - 3 CẤP ĐỘ
// ============================================
GRADE_DATA[8] = {};
GRADE_DATA[8].info = {
    levels: [
        { id: 1, name: 'Intermediate', nameVi: 'Trung cấp', months: [1,2,3,4], color: '#4ECDC4', icon: '🌱' },
        { id: 2, name: 'Upper-Intermediate', nameVi: 'Trung cấp cao', months: [5,6,7,8], color: '#A855F7', icon: '🌿' },
        { id: 3, name: 'Pre-Advanced', nameVi: 'Tiền nâng cao', months: [9,10,11,12], color: '#FF6B9D', icon: '🌳' },
    ],
    months: [
        { month: 1, title: 'Hoạt động giải trí', topics: ['leisure_activities', 'entertainment'] },
        { month: 2, title: 'Cuộc sống nông thôn', topics: ['countryside_life', 'farming'] },
        { month: 3, title: 'Dân tộc Việt Nam', topics: ['peoples_of_vietnam', 'cultural_diversity'] },
        { month: 4, title: 'Ôn tập cấp 1', topics: ['review_intermediate'] },
        { month: 5, title: 'Phong tục & Tập quán', topics: ['customs', 'etiquette'] },
        { month: 6, title: 'Lễ hội & Truyện dân gian', topics: ['festivals_vietnam', 'folk_tales'] },
        { month: 7, title: 'Giao tiếp & Truyền thông', topics: ['communication', 'digital_literacy'] },
        { month: 8, title: 'Ôn tập cấp 2', topics: ['review_upper_intermediate'] },
        { month: 9, title: 'Du lịch & Thiên tai', topics: ['tourism', 'natural_disasters'] },
        { month: 10, title: 'Không gian & Vũ trụ', topics: ['space', 'astronomy'] },
        { month: 11, title: 'Công nghệ & Tương lai', topics: ['technology', 'future_inventions'] },
        { month: 12, title: 'Tổng ôn tập', topics: ['review_pre_advanced'] },
    ]
};

// ============================================
// TỪ VỰNG - 250+ từ chia theo chủ đề
// ============================================
GRADE_DATA[8].vocab = {
    // === THÁNG 1 ===
    leisure_activities: {
        name: 'Hoạt động giải trí',
        level: 1,
        month: 1,
        words: [
            { en: 'Socializing', vi: 'Giao lưu', emoji: '🤝', phonetic: '/ˈsoʊʃəlaɪzɪŋ/' },
            { en: 'Surfing the Internet', vi: 'Lướt mạng', emoji: '🌐', phonetic: '/ˈsɜːrfɪŋ ðə ˈɪntərnet/' },
            { en: 'Window shopping', vi: 'Đi dạo ngắm hàng', emoji: '🛍️', phonetic: '/ˈwɪndoʊ ˈʃɒpɪŋ/' },
            { en: 'Leisure', vi: 'Giải trí / Nghỉ ngơi', emoji: '🏖️', phonetic: '/ˈleʒər/' },
            { en: 'Relaxation', vi: 'Sự thư giãn', emoji: '🧘', phonetic: '/ˌriːlækˈseɪʃən/' },
            { en: 'Amusement park', vi: 'Công viên giải trí', emoji: '🎢', phonetic: '/əˈmjuːzmənt pɑːrk/' },
            { en: 'Exhibition', vi: 'Triển lãm', emoji: '🖼️', phonetic: '/ˌeksɪˈbɪʃən/' },
            { en: 'Recreation', vi: 'Hoạt động giải trí', emoji: '🎯', phonetic: '/ˌrekriˈeɪʃən/' },
            { en: 'Entertaining', vi: 'Giải trí / Thú vị', emoji: '🎭', phonetic: '/ˌentərˈteɪnɪŋ/' },
            { en: 'Addiction', vi: 'Sự nghiện', emoji: '⚠️', phonetic: '/əˈdɪkʃən/' },
        ]
    },
    entertainment: {
        name: 'Giải trí',
        level: 1,
        month: 1,
        words: [
            { en: 'Manga', vi: 'Truyện tranh Nhật Bản', emoji: '📚', phonetic: '/ˈmæŋɡə/' },
            { en: 'Podcast', vi: 'Chương trình phát thanh kỹ thuật số', emoji: '🎧', phonetic: '/ˈpɒdkæst/' },
            { en: 'Virtual reality', vi: 'Thực tế ảo', emoji: '🥽', phonetic: '/ˈvɜːrtʃuəl riˈæləti/' },
            { en: 'Cosplay', vi: 'Hóa trang nhân vật', emoji: '🎭', phonetic: '/ˈkɒspleɪ/' },
            { en: 'Live stream', vi: 'Phát trực tiếp', emoji: '📱', phonetic: '/laɪv striːm/' },
            { en: 'Binge-watch', vi: 'Xem liền nhiều tập', emoji: '📺', phonetic: '/bɪndʒ wɒtʃ/' },
            { en: 'Subscriber', vi: 'Người đăng ký theo dõi', emoji: '🔔', phonetic: '/səbˈskraɪbər/' },
            { en: 'Trendy', vi: 'Thời thượng', emoji: '✨', phonetic: '/ˈtrendi/' },
            { en: 'Content creator', vi: 'Người sáng tạo nội dung', emoji: '🎬', phonetic: '/ˈkɒntent kriˈeɪtər/' },
            { en: 'Influencer', vi: 'Người có ảnh hưởng', emoji: '⭐', phonetic: '/ˈɪnfluənsər/' },
        ]
    },

    // === THÁNG 2 ===
    countryside_life: {
        name: 'Cuộc sống nông thôn',
        level: 1,
        month: 2,
        words: [
            { en: 'Harvest', vi: 'Thu hoạch', emoji: '🌾', phonetic: '/ˈhɑːrvɪst/' },
            { en: 'Paddy field', vi: 'Ruộng lúa', emoji: '🌾', phonetic: '/ˈpædi fiːld/' },
            { en: 'Buffalo', vi: 'Trâu', emoji: '🐃', phonetic: '/ˈbʌfəloʊ/' },
            { en: 'Peaceful', vi: 'Yên bình', emoji: '🕊️', phonetic: '/ˈpiːsfʊl/' },
            { en: 'Landscape', vi: 'Phong cảnh', emoji: '🏞️', phonetic: '/ˈlændskeɪp/' },
            { en: 'Villager', vi: 'Dân làng', emoji: '👨‍🌾', phonetic: '/ˈvɪlɪdʒər/' },
            { en: 'Cottage', vi: 'Nhà tranh / Nhà nhỏ', emoji: '🏡', phonetic: '/ˈkɒtɪdʒ/' },
            { en: 'Livestock', vi: 'Gia súc', emoji: '🐄', phonetic: '/ˈlaɪvstɒk/' },
            { en: 'Orchard', vi: 'Vườn cây ăn quả', emoji: '🍎', phonetic: '/ˈɔːrtʃərd/' },
            { en: 'Irrigation', vi: 'Tưới tiêu', emoji: '💦', phonetic: '/ˌɪrɪˈɡeɪʃən/' },
        ]
    },
    farming: {
        name: 'Nông nghiệp',
        level: 1,
        month: 2,
        words: [
            { en: 'Plough', vi: 'Cày', emoji: '🚜', phonetic: '/plaʊ/' },
            { en: 'Sow', vi: 'Gieo hạt', emoji: '🌱', phonetic: '/soʊ/' },
            { en: 'Fertilizer', vi: 'Phân bón', emoji: '🧪', phonetic: '/ˈfɜːrtəlaɪzər/' },
            { en: 'Pesticide', vi: 'Thuốc trừ sâu', emoji: '🧴', phonetic: '/ˈpestɪsaɪd/' },
            { en: 'Crop', vi: 'Vụ mùa', emoji: '🌿', phonetic: '/krɒp/' },
            { en: 'Yield', vi: 'Sản lượng', emoji: '📊', phonetic: '/jiːld/' },
            { en: 'Drought', vi: 'Hạn hán', emoji: '☀️', phonetic: '/draʊt/' },
            { en: 'Cultivate', vi: 'Canh tác', emoji: '👨‍🌾', phonetic: '/ˈkʌltɪveɪt/' },
            { en: 'Organic farming', vi: 'Nông nghiệp hữu cơ', emoji: '🥬', phonetic: '/ɔːrˈɡænɪk ˈfɑːrmɪŋ/' },
            { en: 'Sustainable agriculture', vi: 'Nông nghiệp bền vững', emoji: '🌱', phonetic: '/səˈsteɪnəbəl ˈæɡrɪkʌltʃər/' },
        ]
    },

    // === THÁNG 3 ===
    peoples_of_vietnam: {
        name: 'Dân tộc Việt Nam',
        level: 1,
        month: 3,
        words: [
            { en: 'Ethnic group', vi: 'Dân tộc', emoji: '👥', phonetic: '/ˈeθnɪk ɡruːp/' },
            { en: 'Minority', vi: 'Thiểu số', emoji: '🏔️', phonetic: '/maɪˈnɒrəti/' },
            { en: 'Majority', vi: 'Đa số', emoji: '👥', phonetic: '/məˈdʒɒrəti/' },
            { en: 'Traditional costume', vi: 'Trang phục truyền thống', emoji: '👘', phonetic: '/trəˈdɪʃənəl ˈkɒstjuːm/' },
            { en: 'Stilt house', vi: 'Nhà sàn', emoji: '🏠', phonetic: '/stɪlt haʊs/' },
            { en: 'Dialect', vi: 'Phương ngữ', emoji: '🗣️', phonetic: '/ˈdaɪəlekt/' },
            { en: 'Handicraft', vi: 'Đồ thủ công mỹ nghệ', emoji: '🧶', phonetic: '/ˈhændikræft/' },
            { en: 'Terraced field', vi: 'Ruộng bậc thang', emoji: '🏞️', phonetic: '/ˈterəst fiːld/' },
            { en: 'Preserve', vi: 'Bảo tồn / Gìn giữ', emoji: '💚', phonetic: '/prɪˈzɜːrv/' },
            { en: 'Indigenous', vi: 'Bản địa', emoji: '🌿', phonetic: '/ɪnˈdɪdʒənəs/' },
        ]
    },
    cultural_diversity: {
        name: 'Đa dạng văn hóa',
        level: 1,
        month: 3,
        words: [
            { en: 'Diversity', vi: 'Sự đa dạng', emoji: '🌈', phonetic: '/daɪˈvɜːrsəti/' },
            { en: 'Unity', vi: 'Sự đoàn kết', emoji: '🤝', phonetic: '/ˈjuːnəti/' },
            { en: 'Tradition', vi: 'Truyền thống', emoji: '🏮', phonetic: '/trəˈdɪʃən/' },
            { en: 'Folklore', vi: 'Văn hóa dân gian', emoji: '📖', phonetic: '/ˈfoʊklɔːr/' },
            { en: 'Ancestor', vi: 'Tổ tiên', emoji: '👴', phonetic: '/ˈænsestər/' },
            { en: 'Identity', vi: 'Bản sắc', emoji: '🪪', phonetic: '/aɪˈdentəti/' },
            { en: 'Unique', vi: 'Độc đáo', emoji: '💎', phonetic: '/juːˈniːk/' },
            { en: 'Ceremony', vi: 'Nghi lễ', emoji: '🎊', phonetic: '/ˈserəmoʊni/' },
            { en: 'Symbol', vi: 'Biểu tượng', emoji: '🔣', phonetic: '/ˈsɪmbəl/' },
            { en: 'Harmonious', vi: 'Hài hòa', emoji: '☯️', phonetic: '/hɑːrˈmoʊniəs/' },
        ]
    },

    // === THÁNG 5 ===
    customs: {
        name: 'Phong tục tập quán',
        level: 2,
        month: 5,
        words: [
            { en: 'Greeting', vi: 'Chào hỏi', emoji: '👋', phonetic: '/ˈɡriːtɪŋ/' },
            { en: 'Hospitality', vi: 'Lòng hiếu khách', emoji: '🤗', phonetic: '/ˌhɒspɪˈtæləti/' },
            { en: 'Superstition', vi: 'Mê tín', emoji: '🔮', phonetic: '/ˌsuːpərˈstɪʃən/' },
            { en: 'Taboo', vi: 'Điều cấm kỵ', emoji: '🚫', phonetic: '/təˈbuː/' },
            { en: 'Courtesy', vi: 'Phép lịch sự', emoji: '🎩', phonetic: '/ˈkɜːrtəsi/' },
            { en: 'Bow', vi: 'Cúi chào', emoji: '🙇', phonetic: '/baʊ/' },
            { en: 'Gesture', vi: 'Cử chỉ', emoji: '🤲', phonetic: '/ˈdʒestʃər/' },
            { en: 'Respectful', vi: 'Tôn trọng', emoji: '🙏', phonetic: '/rɪˈspektfʊl/' },
            { en: 'Custom', vi: 'Phong tục', emoji: '🏮', phonetic: '/ˈkʌstəm/' },
            { en: 'Manner', vi: 'Cách cư xử', emoji: '🤵', phonetic: '/ˈmænər/' },
        ]
    },
    etiquette: {
        name: 'Nghi thức xã giao',
        level: 2,
        month: 5,
        words: [
            { en: 'Dress code', vi: 'Quy tắc trang phục', emoji: '👔', phonetic: '/dres koʊd/' },
            { en: 'Table manners', vi: 'Phép tắc trên bàn ăn', emoji: '🍽️', phonetic: '/ˈteɪbəl ˈmænərz/' },
            { en: 'Compliment', vi: 'Lời khen', emoji: '😊', phonetic: '/ˈkɒmplɪmənt/' },
            { en: 'Apology', vi: 'Lời xin lỗi', emoji: '🙏', phonetic: '/əˈpɒlədʒi/' },
            { en: 'Polite', vi: 'Lịch sự', emoji: '🤵', phonetic: '/pəˈlaɪt/' },
            { en: 'Inappropriate', vi: 'Không phù hợp', emoji: '❌', phonetic: '/ˌɪnəˈproʊpriət/' },
            { en: 'Etiquette', vi: 'Nghi thức xã giao', emoji: '📋', phonetic: '/ˈetɪket/' },
            { en: 'Formal', vi: 'Trang trọng', emoji: '🎩', phonetic: '/ˈfɔːrməl/' },
            { en: 'Informal', vi: 'Thân mật', emoji: '😄', phonetic: '/ɪnˈfɔːrməl/' },
            { en: 'Behavior', vi: 'Hành vi', emoji: '🔍', phonetic: '/bɪˈheɪvjər/' },
        ]
    },

    // === THÁNG 6 ===
    festivals_vietnam: {
        name: 'Lễ hội Việt Nam',
        level: 2,
        month: 6,
        words: [
            { en: 'Incense', vi: 'Hương / Nhang', emoji: '🕯️', phonetic: '/ˈɪnsens/' },
            { en: 'Offering', vi: 'Lễ vật', emoji: '🍲', phonetic: '/ˈɒfərɪŋ/' },
            { en: 'Pagoda festival', vi: 'Hội chùa', emoji: '🛕', phonetic: '/pəˈɡoʊdə ˈfestɪvəl/' },
            { en: 'Lion dance', vi: 'Múa lân', emoji: '🦁', phonetic: '/ˈlaɪən dæns/' },
            { en: 'Boat race', vi: 'Đua thuyền', emoji: '🚣', phonetic: '/boʊt reɪs/' },
            { en: 'Bamboo', vi: 'Tre', emoji: '🎋', phonetic: '/bæmˈbuː/' },
            { en: 'Prosperity', vi: 'Sự thịnh vượng', emoji: '💰', phonetic: '/prɒˈsperəti/' },
            { en: 'Reunion', vi: 'Đoàn tụ', emoji: '👨‍👩‍👧‍👦', phonetic: '/riːˈjuːniən/' },
            { en: 'Blessing', vi: 'Phước lành', emoji: '🙏', phonetic: '/ˈblesɪŋ/' },
            { en: 'Festive', vi: 'Mang không khí lễ hội', emoji: '🎉', phonetic: '/ˈfestɪv/' },
        ]
    },
    folk_tales: {
        name: 'Truyện dân gian',
        level: 2,
        month: 6,
        words: [
            { en: 'Legend', vi: 'Truyền thuyết', emoji: '📜', phonetic: '/ˈledʒənd/' },
            { en: 'Moral', vi: 'Bài học đạo đức', emoji: '📖', phonetic: '/ˈmɔːrəl/' },
            { en: 'Hero', vi: 'Anh hùng', emoji: '🦸', phonetic: '/ˈhɪroʊ/' },
            { en: 'Villain', vi: 'Nhân vật phản diện', emoji: '🦹', phonetic: '/ˈvɪlən/' },
            { en: 'Fairy tale', vi: 'Truyện cổ tích', emoji: '🧚', phonetic: '/ˈferi teɪl/' },
            { en: 'Myth', vi: 'Thần thoại', emoji: '🐉', phonetic: '/mɪθ/' },
            { en: 'Fable', vi: 'Truyện ngụ ngôn', emoji: '🦊', phonetic: '/ˈfeɪbəl/' },
            { en: 'Plot', vi: 'Cốt truyện', emoji: '📋', phonetic: '/plɒt/' },
            { en: 'Character', vi: 'Nhân vật', emoji: '🎭', phonetic: '/ˈkærəktər/' },
            { en: 'Narrator', vi: 'Người kể chuyện', emoji: '🗣️', phonetic: '/ˈnæreɪtər/' },
        ]
    },

    // === THÁNG 7 ===
    communication: {
        name: 'Giao tiếp',
        level: 2,
        month: 7,
        words: [
            { en: 'Body language', vi: 'Ngôn ngữ cơ thể', emoji: '🤲', phonetic: '/ˈbɒdi ˈlæŋɡwɪdʒ/' },
            { en: 'Eye contact', vi: 'Giao tiếp bằng mắt', emoji: '👁️', phonetic: '/aɪ ˈkɒntækt/' },
            { en: 'Persuade', vi: 'Thuyết phục', emoji: '💬', phonetic: '/pərˈsweɪd/' },
            { en: 'Negotiate', vi: 'Thương lượng', emoji: '🤝', phonetic: '/nɪˈɡoʊʃieɪt/' },
            { en: 'Misunderstanding', vi: 'Sự hiểu lầm', emoji: '❓', phonetic: '/ˌmɪsʌndərˈstændɪŋ/' },
            { en: 'Empathy', vi: 'Sự đồng cảm', emoji: '💖', phonetic: '/ˈempəθi/' },
            { en: 'Assertive', vi: 'Quyết đoán', emoji: '💪', phonetic: '/əˈsɜːrtɪv/' },
            { en: 'Fluent', vi: 'Lưu loát', emoji: '🗣️', phonetic: '/ˈfluːənt/' },
            { en: 'Tone', vi: 'Giọng điệu', emoji: '🎵', phonetic: '/toʊn/' },
            { en: 'Interpret', vi: 'Phiên dịch / Diễn giải', emoji: '🔄', phonetic: '/ɪnˈtɜːrprɪt/' },
        ]
    },
    digital_literacy: {
        name: 'Kỹ năng số',
        level: 2,
        month: 7,
        words: [
            { en: 'Cyberbullying', vi: 'Bắt nạt trên mạng', emoji: '😢', phonetic: '/ˈsaɪbərbʊliɪŋ/' },
            { en: 'Privacy', vi: 'Quyền riêng tư', emoji: '🔒', phonetic: '/ˈprɪvəsi/' },
            { en: 'Password', vi: 'Mật khẩu', emoji: '🔑', phonetic: '/ˈpæswɜːrd/' },
            { en: 'Scam', vi: 'Lừa đảo', emoji: '⚠️', phonetic: '/skæm/' },
            { en: 'Verify', vi: 'Xác minh', emoji: '✅', phonetic: '/ˈverɪfaɪ/' },
            { en: 'Download', vi: 'Tải xuống', emoji: '⬇️', phonetic: '/ˈdaʊnloʊd/' },
            { en: 'Upload', vi: 'Tải lên', emoji: '⬆️', phonetic: '/ˈʌploʊd/' },
            { en: 'Hashtag', vi: 'Thẻ bắt đầu bằng dấu thăng', emoji: '#️⃣', phonetic: '/ˈhæʃtæɡ/' },
            { en: 'Algorithm', vi: 'Thuật toán', emoji: '🔢', phonetic: '/ˈælɡərɪðəm/' },
            { en: 'Digital footprint', vi: 'Dấu chân kỹ thuật số', emoji: '👣', phonetic: '/ˈdɪdʒɪtəl ˈfʊtprɪnt/' },
        ]
    },

    // === THÁNG 9 ===
    tourism: {
        name: 'Du lịch',
        level: 3,
        month: 9,
        words: [
            { en: 'Ecotourism', vi: 'Du lịch sinh thái', emoji: '🌿', phonetic: '/ˈiːkoʊtʊrɪzəm/' },
            { en: 'Heritage site', vi: 'Di sản', emoji: '🏛️', phonetic: '/ˈherɪtɪdʒ saɪt/' },
            { en: 'Landmark', vi: 'Địa danh nổi tiếng', emoji: '🗼', phonetic: '/ˈlændmɑːrk/' },
            { en: 'Hospitality', vi: 'Ngành dịch vụ khách sạn', emoji: '🏨', phonetic: '/ˌhɒspɪˈtæləti/' },
            { en: 'Brochure', vi: 'Tờ rơi quảng cáo', emoji: '📄', phonetic: '/broʊˈʃʊr/' },
            { en: 'Tour guide', vi: 'Hướng dẫn viên du lịch', emoji: '🧑‍🏫', phonetic: '/tʊr ɡaɪd/' },
            { en: 'Sightseeing', vi: 'Ngắm cảnh', emoji: '📸', phonetic: '/ˈsaɪtsiːɪŋ/' },
            { en: 'Budget travel', vi: 'Du lịch tiết kiệm', emoji: '💰', phonetic: '/ˈbʌdʒɪt ˈtrævəl/' },
            { en: 'Cultural exchange', vi: 'Giao lưu văn hóa', emoji: '🌍', phonetic: '/ˈkʌltʃərəl ɪksˈtʃeɪndʒ/' },
            { en: 'Destination', vi: 'Điểm đến', emoji: '📍', phonetic: '/ˌdestɪˈneɪʃən/' },
        ]
    },
    natural_disasters: {
        name: 'Thiên tai',
        level: 3,
        month: 9,
        words: [
            { en: 'Earthquake', vi: 'Động đất', emoji: '🌍', phonetic: '/ˈɜːrθkweɪk/' },
            { en: 'Tsunami', vi: 'Sóng thần', emoji: '🌊', phonetic: '/tsuːˈnɑːmi/' },
            { en: 'Typhoon', vi: 'Bão', emoji: '🌀', phonetic: '/taɪˈfuːn/' },
            { en: 'Flood', vi: 'Lũ lụt', emoji: '🌊', phonetic: '/flʌd/' },
            { en: 'Landslide', vi: 'Sạt lở đất', emoji: '⛰️', phonetic: '/ˈlændslaɪd/' },
            { en: 'Evacuation', vi: 'Sơ tán', emoji: '🏃', phonetic: '/ɪˌvækjuˈeɪʃən/' },
            { en: 'Emergency', vi: 'Tình trạng khẩn cấp', emoji: '🚨', phonetic: '/ɪˈmɜːrdʒənsi/' },
            { en: 'Relief', vi: 'Cứu trợ', emoji: '🤝', phonetic: '/rɪˈliːf/' },
            { en: 'Aftermath', vi: 'Hậu quả', emoji: '💔', phonetic: '/ˈæftərmæθ/' },
            { en: 'Preparedness', vi: 'Sự chuẩn bị sẵn sàng', emoji: '🎒', phonetic: '/prɪˈperədnəs/' },
        ]
    },

    // === THÁNG 10 ===
    space: {
        name: 'Không gian vũ trụ',
        level: 3,
        month: 10,
        words: [
            { en: 'Galaxy', vi: 'Thiên hà', emoji: '🌌', phonetic: '/ˈɡæləksi/' },
            { en: 'Constellation', vi: 'Chòm sao', emoji: '⭐', phonetic: '/ˌkɒnstəˈleɪʃən/' },
            { en: 'Astronaut', vi: 'Phi hành gia', emoji: '👨‍🚀', phonetic: '/ˈæstrənɔːt/' },
            { en: 'Satellite', vi: 'Vệ tinh', emoji: '🛰️', phonetic: '/ˈsætəlaɪt/' },
            { en: 'Orbit', vi: 'Quỹ đạo', emoji: '🔄', phonetic: '/ˈɔːrbɪt/' },
            { en: 'Space station', vi: 'Trạm vũ trụ', emoji: '🏗️', phonetic: '/speɪs ˈsteɪʃən/' },
            { en: 'Telescope', vi: 'Kính viễn vọng', emoji: '🔭', phonetic: '/ˈtelɪskoʊp/' },
            { en: 'Gravity', vi: 'Trọng lực', emoji: '🍎', phonetic: '/ˈɡrævəti/' },
            { en: 'Solar system', vi: 'Hệ Mặt Trời', emoji: '☀️', phonetic: '/ˈsoʊlər ˈsɪstəm/' },
            { en: 'Black hole', vi: 'Hố đen', emoji: '🕳️', phonetic: '/blæk hoʊl/' },
        ]
    },
    astronomy: {
        name: 'Thiên văn học',
        level: 3,
        month: 10,
        words: [
            { en: 'Meteor', vi: 'Sao băng', emoji: '☄️', phonetic: '/ˈmiːtiər/' },
            { en: 'Comet', vi: 'Sao chổi', emoji: '☄️', phonetic: '/ˈkɒmɪt/' },
            { en: 'Eclipse', vi: 'Nhật thực / Nguyệt thực', emoji: '🌑', phonetic: '/ɪˈklɪps/' },
            { en: 'Atmosphere', vi: 'Khí quyển', emoji: '🌤️', phonetic: '/ˈætməsfɪr/' },
            { en: 'Exploration', vi: 'Sự thám hiểm', emoji: '🚀', phonetic: '/ˌekspləˈreɪʃən/' },
            { en: 'Spacecraft', vi: 'Tàu vũ trụ', emoji: '🚀', phonetic: '/ˈspeɪskræft/' },
            { en: 'Lunar', vi: 'Thuộc về mặt trăng', emoji: '🌙', phonetic: '/ˈluːnər/' },
            { en: 'Alien', vi: 'Người ngoài hành tinh', emoji: '👽', phonetic: '/ˈeɪliən/' },
            { en: 'Universe', vi: 'Vũ trụ', emoji: '🌌', phonetic: '/ˈjuːnɪvɜːrs/' },
            { en: 'Light year', vi: 'Năm ánh sáng', emoji: '💫', phonetic: '/laɪt jɪr/' },
        ]
    },

    // === THÁNG 11 ===
    technology: {
        name: 'Công nghệ',
        level: 3,
        month: 11,
        words: [
            { en: 'Artificial intelligence', vi: 'Trí tuệ nhân tạo', emoji: '🤖', phonetic: '/ˌɑːrtɪˈfɪʃəl ɪnˈtelɪdʒəns/' },
            { en: 'Automation', vi: 'Tự động hóa', emoji: '⚙️', phonetic: '/ˌɔːtəˈmeɪʃən/' },
            { en: 'Innovation', vi: 'Đổi mới / Sáng kiến', emoji: '💡', phonetic: '/ˌɪnəˈveɪʃən/' },
            { en: 'Robotics', vi: 'Công nghệ rô bốt', emoji: '🤖', phonetic: '/roʊˈbɒtɪks/' },
            { en: 'Biotechnology', vi: 'Công nghệ sinh học', emoji: '🧬', phonetic: '/ˌbaɪoʊtekˈnɒlədʒi/' },
            { en: 'Smartphone', vi: 'Điện thoại thông minh', emoji: '📱', phonetic: '/ˈsmɑːrtfoʊn/' },
            { en: 'Wireless', vi: 'Không dây', emoji: '📡', phonetic: '/ˈwaɪərləs/' },
            { en: 'Database', vi: 'Cơ sở dữ liệu', emoji: '🗄️', phonetic: '/ˈdeɪtəbeɪs/' },
            { en: 'Cybersecurity', vi: 'An ninh mạng', emoji: '🛡️', phonetic: '/ˈsaɪbərsɪˈkjʊrəti/' },
            { en: 'Application', vi: 'Ứng dụng', emoji: '📲', phonetic: '/ˌæplɪˈkeɪʃən/' },
        ]
    },
    future_inventions: {
        name: 'Phát minh tương lai',
        level: 3,
        month: 11,
        words: [
            { en: 'Self-driving car', vi: 'Xe tự lái', emoji: '🚗', phonetic: '/self ˈdraɪvɪŋ kɑːr/' },
            { en: '3D printing', vi: 'In 3D', emoji: '🖨️', phonetic: '/θriː diː ˈprɪntɪŋ/' },
            { en: 'Drone', vi: 'Máy bay không người lái', emoji: '🛸', phonetic: '/droʊn/' },
            { en: 'Renewable energy', vi: 'Năng lượng tái tạo', emoji: '♻️', phonetic: '/rɪˈnjuːəbəl ˈenərdʒi/' },
            { en: 'Nanotechnology', vi: 'Công nghệ nano', emoji: '🔬', phonetic: '/ˌnænoʊtekˈnɒlədʒi/' },
            { en: 'Hologram', vi: 'Ảnh ba chiều', emoji: '🌟', phonetic: '/ˈhɒləɡræm/' },
            { en: 'Wearable device', vi: 'Thiết bị đeo được', emoji: '⌚', phonetic: '/ˈwerəbəl dɪˈvaɪs/' },
            { en: 'Sustainable', vi: 'Bền vững', emoji: '🌱', phonetic: '/səˈsteɪnəbəl/' },
            { en: 'Breakthrough', vi: 'Bước đột phá', emoji: '🚀', phonetic: '/ˈbreɪkθruː/' },
            { en: 'Revolution', vi: 'Cuộc cách mạng', emoji: '⚡', phonetic: '/ˌrevəˈluːʃən/' },
        ]
    },
};

// ============================================
// PHONICS - ADVANCED PATTERNS & WORD STRESS
// ============================================
GRADE_DATA[8].phonics = [
    { letter: 'Silent P', sound: '(silent)', words: [
        { word: 'Psychology', highlight: 'Ps', emoji: '🧠' },
        { word: 'Pneumonia', highlight: 'Pn', emoji: '🤒' },
        { word: 'Pseudonym', highlight: 'Ps', emoji: '✍️' }
    ]},
    { letter: 'Silent H', sound: '(silent)', words: [
        { word: 'Honest', highlight: 'H', emoji: '✋' },
        { word: 'Honour', highlight: 'H', emoji: '🏅' },
        { word: 'Heir', highlight: 'H', emoji: '👑' }
    ]},
    { letter: 'OUGH (5 sounds)', sound: '/ʌf/ /oʊ/ /uː/ /ɔː/ /ɒf/', words: [
        { word: 'Rough', highlight: 'ough', emoji: '🪨' },
        { word: 'Thorough', highlight: 'ough', emoji: '✅' },
        { word: 'Dough', highlight: 'ough', emoji: '🍞' }
    ]},
    { letter: 'IOUS / EOUS', sound: '/əs/ /iəs/', words: [
        { word: 'Mysterious', highlight: 'ious', emoji: '🔮' },
        { word: 'Courageous', highlight: 'eous', emoji: '🦁' },
        { word: 'Harmonious', highlight: 'ious', emoji: '☯️' }
    ]},
    { letter: 'MENT', sound: '/mənt/', words: [
        { word: 'Environment', highlight: 'ment', emoji: '🌍' },
        { word: 'Achievement', highlight: 'ment', emoji: '🏆' },
        { word: 'Entertainment', highlight: 'ment', emoji: '🎭' }
    ]},
    { letter: 'TION / SION', sound: '/ʃən/ /ʒən/', words: [
        { word: 'Innovation', highlight: 'tion', emoji: '💡' },
        { word: 'Exploration', highlight: 'tion', emoji: '🚀' },
        { word: 'Television', highlight: 'sion', emoji: '📺' }
    ]},
    { letter: 'TURE / SURE', sound: '/tʃər/ /ʒər/', words: [
        { word: 'Agriculture', highlight: 'ture', emoji: '🌾' },
        { word: 'Creature', highlight: 'ture', emoji: '🐉' },
        { word: 'Measure', highlight: 'sure', emoji: '📏' }
    ]},
    { letter: 'NESS / LESS', sound: '/nəs/ /ləs/', words: [
        { word: 'Preparedness', highlight: 'ness', emoji: '🎒' },
        { word: 'Wireless', highlight: 'less', emoji: '📡' },
        { word: 'Darkness', highlight: 'ness', emoji: '🌑' }
    ]},
    { letter: 'ATE', sound: '/eɪt/ /ət/', words: [
        { word: 'Cultivate', highlight: 'ate', emoji: '🌱' },
        { word: 'Negotiate', highlight: 'ate', emoji: '🤝' },
        { word: 'Climate', highlight: 'ate', emoji: '🌤️' }
    ]},
    { letter: 'AL / FUL', sound: '/əl/ /fʊl/', words: [
        { word: 'Cultural', highlight: 'al', emoji: '🎭' },
        { word: 'Respectful', highlight: 'ful', emoji: '🙏' },
        { word: 'Peaceful', highlight: 'ful', emoji: '🕊️' }
    ]},
    { letter: 'OLOGY', sound: '/ɒlədʒi/', words: [
        { word: 'Technology', highlight: 'ology', emoji: '💻' },
        { word: 'Psychology', highlight: 'ology', emoji: '🧠' },
        { word: 'Biotechnology', highlight: 'ology', emoji: '🧬' }
    ]},
    { letter: 'PREFIX: UN / DIS / MIS', sound: '(prefix)', words: [
        { word: 'Unusual', highlight: 'Un', emoji: '❓' },
        { word: 'Disaster', highlight: 'Dis', emoji: '🌪️' },
        { word: 'Misunderstanding', highlight: 'Mis', emoji: '😕' }
    ]},
];

// ============================================
// CÂU MẪU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[8].sentences = {
    level1: [
        { sentence: ['Many', 'teenagers', 'enjoy', 'surfing', 'the', 'Internet', 'after', 'school'], emoji: '🌐', vi: 'Nhiều thanh thiếu niên thích lướt mạng sau giờ học', extra: ['before', 'a'] },
        { sentence: ['The', 'countryside', 'is', 'peaceful', 'with', 'green', 'paddy', 'fields'], emoji: '🌾', vi: 'Nông thôn yên bình với những cánh đồng lúa xanh', extra: ['noisy', 'the'] },
        { sentence: ['Vietnam', 'has', 'fifty-four', 'ethnic', 'groups', 'living', 'together'], emoji: '👥', vi: 'Việt Nam có năm mươi tư dân tộc cùng sinh sống', extra: ['separately', 'a'] },
        { sentence: ['Each', 'ethnic', 'group', 'has', 'its', 'own', 'traditional', 'costume'], emoji: '👘', vi: 'Mỗi dân tộc có trang phục truyền thống riêng', extra: ['their', 'modern'] },
        { sentence: ['The', 'villagers', 'harvest', 'rice', 'twice', 'a', 'year'], emoji: '🌾', vi: 'Dân làng thu hoạch lúa hai lần một năm', extra: ['once', 'the'] },
        { sentence: ['Stilt', 'houses', 'are', 'common', 'in', 'the', 'mountainous', 'areas'], emoji: '🏠', vi: 'Nhà sàn phổ biến ở vùng núi', extra: ['rare', 'a'] },
        { sentence: ['Binge-watching', 'TV', 'shows', 'can', 'become', 'an', 'addiction'], emoji: '📺', vi: 'Xem liền nhiều tập phim có thể trở thành nghiện', extra: ['hobby', 'a'] },
        { sentence: ['The', 'terraced', 'fields', 'in', 'Sapa', 'are', 'very', 'beautiful'], emoji: '🏞️', vi: 'Ruộng bậc thang ở Sa Pa rất đẹp', extra: ['ugly', 'a'] },
    ],
    level2: [
        { sentence: ['We', 'should', 'show', 'respect', 'for', 'other', 'cultures', 'and', 'customs'], emoji: '🙏', vi: 'Chúng ta nên tôn trọng văn hóa và phong tục khác', extra: ['must', 'to'] },
        { sentence: ['The', 'legend', 'teaches', 'us', 'an', 'important', 'moral', 'lesson'], emoji: '📖', vi: 'Truyền thuyết dạy chúng ta một bài học đạo đức quan trọng', extra: ['a', 'boring'] },
        { sentence: ['The', 'lion', 'dance', 'is', 'performed', 'during', 'the', 'Mid-Autumn', 'festival'], emoji: '🦁', vi: 'Múa lân được biểu diễn trong Tết Trung thu', extra: ['after', 'a'] },
        { sentence: ['Body', 'language', 'is', 'an', 'important', 'part', 'of', 'communication'], emoji: '🤲', vi: 'Ngôn ngữ cơ thể là phần quan trọng của giao tiếp', extra: ['a', 'minor'] },
        { sentence: ['You', 'should', 'protect', 'your', 'privacy', 'on', 'social', 'media'], emoji: '🔒', vi: 'Bạn nên bảo vệ quyền riêng tư trên mạng xã hội', extra: ['expose', 'his'] },
        { sentence: ['The', 'fable', 'tells', 'about', 'a', 'clever', 'fox', 'and', 'a', 'crow'], emoji: '🦊', vi: 'Truyện ngụ ngôn kể về một con cáo khôn ngoan và con quạ', extra: ['stupid', 'the'] },
        { sentence: ['Table', 'manners', 'are', 'different', 'in', 'each', 'country'], emoji: '🍽️', vi: 'Phép tắc trên bàn ăn khác nhau ở mỗi quốc gia', extra: ['same', 'a'] },
        { sentence: ['Cyberbullying', 'is', 'a', 'serious', 'problem', 'among', 'students'], emoji: '😢', vi: 'Bắt nạt trên mạng là vấn đề nghiêm trọng trong học sinh', extra: ['minor', 'the'] },
    ],
    level3: [
        { sentence: ['The', 'earthquake', 'destroyed', 'many', 'buildings', 'in', 'the', 'city'], emoji: '🌍', vi: 'Trận động đất đã phá hủy nhiều tòa nhà trong thành phố', extra: ['built', 'a'] },
        { sentence: ['Scientists', 'discovered', 'a', 'new', 'galaxy', 'using', 'a', 'powerful', 'telescope'], emoji: '🌌', vi: 'Các nhà khoa học phát hiện thiên hà mới bằng kính viễn vọng mạnh', extra: ['old', 'the'] },
        { sentence: ['Artificial', 'intelligence', 'will', 'change', 'how', 'we', 'live', 'and', 'work'], emoji: '🤖', vi: 'Trí tuệ nhân tạo sẽ thay đổi cách chúng ta sống và làm việc', extra: ['keep', 'the'] },
        { sentence: ['The', 'evacuation', 'plan', 'helped', 'save', 'thousands', 'of', 'lives'], emoji: '🏃', vi: 'Kế hoạch sơ tán giúp cứu sống hàng nghìn người', extra: ['endanger', 'a'] },
        { sentence: ['Self-driving', 'cars', 'are', 'a', 'breakthrough', 'in', 'modern', 'technology'], emoji: '🚗', vi: 'Xe tự lái là bước đột phá trong công nghệ hiện đại', extra: ['ancient', 'the'] },
        { sentence: ['Ecotourism', 'helps', 'protect', 'the', 'environment', 'and', 'local', 'cultures'], emoji: '🌿', vi: 'Du lịch sinh thái giúp bảo vệ môi trường và văn hóa địa phương', extra: ['damage', 'a'] },
        { sentence: ['The', 'astronauts', 'spent', 'six', 'months', 'on', 'the', 'space', 'station'], emoji: '👨‍🚀', vi: 'Các phi hành gia đã ở trên trạm vũ trụ sáu tháng', extra: ['days', 'a'] },
        { sentence: ['Drones', 'are', 'used', 'for', 'delivering', 'goods', 'and', 'filming'], emoji: '🛸', vi: 'Máy bay không người lái được dùng để giao hàng và quay phim', extra: ['destroying', 'the'] },
    ],
};

// ============================================
// SPELLING THEO CẤP ĐỘ
// ============================================
GRADE_DATA[8].spelling = {
    level1: [
        { word: 'LEISURE', emoji: '🏖️', vi: 'Giải trí' },
        { word: 'EXHIBITION', emoji: '🖼️', vi: 'Triển lãm' },
        { word: 'HARVEST', emoji: '🌾', vi: 'Thu hoạch' },
        { word: 'BUFFALO', emoji: '🐃', vi: 'Trâu' },
        { word: 'PEACEFUL', emoji: '🕊️', vi: 'Yên bình' },
        { word: 'MINORITY', emoji: '🏔️', vi: 'Thiểu số' },
        { word: 'HANDICRAFT', emoji: '🧶', vi: 'Thủ công mỹ nghệ' },
        { word: 'DIVERSITY', emoji: '🌈', vi: 'Sự đa dạng' },
        { word: 'LIVESTOCK', emoji: '🐄', vi: 'Gia súc' },
        { word: 'IRRIGATION', emoji: '💦', vi: 'Tưới tiêu' },
        { word: 'FOLKLORE', emoji: '📖', vi: 'Văn hóa dân gian' },
        { word: 'INDIGENOUS', emoji: '🌿', vi: 'Bản địa' },
    ],
    level2: [
        { word: 'SUPERSTITION', emoji: '🔮', vi: 'Mê tín' },
        { word: 'HOSPITALITY', emoji: '🤗', vi: 'Lòng hiếu khách' },
        { word: 'ETIQUETTE', emoji: '📋', vi: 'Nghi thức xã giao' },
        { word: 'PROSPERITY', emoji: '💰', vi: 'Sự thịnh vượng' },
        { word: 'COMMUNICATE', emoji: '💬', vi: 'Giao tiếp' },
        { word: 'CYBERBULLYING', emoji: '😢', vi: 'Bắt nạt trên mạng' },
        { word: 'NEGOTIATE', emoji: '🤝', vi: 'Thương lượng' },
        { word: 'ALGORITHM', emoji: '🔢', vi: 'Thuật toán' },
        { word: 'PERSUADE', emoji: '💬', vi: 'Thuyết phục' },
        { word: 'NARRATOR', emoji: '🗣️', vi: 'Người kể chuyện' },
        { word: 'INAPPROPRIATE', emoji: '❌', vi: 'Không phù hợp' },
        { word: 'COMPLIMENT', emoji: '😊', vi: 'Lời khen' },
    ],
    level3: [
        { word: 'EARTHQUAKE', emoji: '🌍', vi: 'Động đất' },
        { word: 'EVACUATION', emoji: '🏃', vi: 'Sơ tán' },
        { word: 'CONSTELLATION', emoji: '⭐', vi: 'Chòm sao' },
        { word: 'ATMOSPHERE', emoji: '🌤️', vi: 'Khí quyển' },
        { word: 'ARTIFICIAL', emoji: '🤖', vi: 'Nhân tạo' },
        { word: 'BIOTECHNOLOGY', emoji: '🧬', vi: 'Công nghệ sinh học' },
        { word: 'CYBERSECURITY', emoji: '🛡️', vi: 'An ninh mạng' },
        { word: 'NANOTECHNOLOGY', emoji: '🔬', vi: 'Công nghệ nano' },
        { word: 'ECOTOURISM', emoji: '🌿', vi: 'Du lịch sinh thái' },
        { word: 'PREPAREDNESS', emoji: '🎒', vi: 'Sự chuẩn bị' },
        { word: 'BREAKTHROUGH', emoji: '🚀', vi: 'Bước đột phá' },
        { word: 'REVOLUTION', emoji: '⚡', vi: 'Cuộc cách mạng' },
    ],
};

// ============================================
// NGHE HIỂU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[8].listening = {
    level1: [
        { word: 'Exhibition', options: [{ emoji: '🖼️', label: 'Exhibition' }, { emoji: '🎢', label: 'Amusement park' }, { emoji: '🎭', label: 'Entertainment' }, { emoji: '🧘', label: 'Relaxation' }], correct: 0 },
        { word: 'Buffalo', options: [{ emoji: '🐄', label: 'Livestock' }, { emoji: '🐃', label: 'Buffalo' }, { emoji: '🐎', label: 'Horse' }, { emoji: '🐑', label: 'Sheep' }], correct: 1 },
        { word: 'Handicraft', options: [{ emoji: '🏠', label: 'Stilt house' }, { emoji: '🏞️', label: 'Terraced field' }, { emoji: '🧶', label: 'Handicraft' }, { emoji: '🗣️', label: 'Dialect' }], correct: 2 },
        { word: 'Harmonious', options: [{ emoji: '💎', label: 'Unique' }, { emoji: '🔣', label: 'Symbol' }, { emoji: '🏮', label: 'Tradition' }, { emoji: '☯️', label: 'Harmonious' }], correct: 3 },
        { word: 'Cottage', options: [{ emoji: '🏡', label: 'Cottage' }, { emoji: '🌾', label: 'Paddy field' }, { emoji: '🍎', label: 'Orchard' }, { emoji: '👨‍🌾', label: 'Villager' }], correct: 0 },
        { word: 'Influencer', options: [{ emoji: '🔔', label: 'Subscriber' }, { emoji: '⭐', label: 'Influencer' }, { emoji: '🎬', label: 'Content creator' }, { emoji: '📱', label: 'Live stream' }], correct: 1 },
    ],
    level2: [
        { word: 'Courtesy', options: [{ emoji: '🎩', label: 'Courtesy' }, { emoji: '🔮', label: 'Superstition' }, { emoji: '🚫', label: 'Taboo' }, { emoji: '🤵', label: 'Manner' }], correct: 0 },
        { word: 'Fable', options: [{ emoji: '📜', label: 'Legend' }, { emoji: '🦊', label: 'Fable' }, { emoji: '🐉', label: 'Myth' }, { emoji: '🧚', label: 'Fairy tale' }], correct: 1 },
        { word: 'Empathy', options: [{ emoji: '💪', label: 'Assertive' }, { emoji: '🗣️', label: 'Fluent' }, { emoji: '💖', label: 'Empathy' }, { emoji: '❓', label: 'Misunderstanding' }], correct: 2 },
        { word: 'Algorithm', options: [{ emoji: '🔒', label: 'Privacy' }, { emoji: '⬇️', label: 'Download' }, { emoji: '✅', label: 'Verify' }, { emoji: '🔢', label: 'Algorithm' }], correct: 3 },
        { word: 'Incense', options: [{ emoji: '🕯️', label: 'Incense' }, { emoji: '🍲', label: 'Offering' }, { emoji: '🎋', label: 'Bamboo' }, { emoji: '💰', label: 'Prosperity' }], correct: 0 },
        { word: 'Villain', options: [{ emoji: '🦸', label: 'Hero' }, { emoji: '🦹', label: 'Villain' }, { emoji: '🎭', label: 'Character' }, { emoji: '🗣️', label: 'Narrator' }], correct: 1 },
    ],
    level3: [
        { word: 'Tsunami', options: [{ emoji: '🌊', label: 'Tsunami' }, { emoji: '🌀', label: 'Typhoon' }, { emoji: '🌍', label: 'Earthquake' }, { emoji: '⛰️', label: 'Landslide' }], correct: 0 },
        { word: 'Satellite', options: [{ emoji: '🔭', label: 'Telescope' }, { emoji: '🛰️', label: 'Satellite' }, { emoji: '🚀', label: 'Spacecraft' }, { emoji: '🔄', label: 'Orbit' }], correct: 1 },
        { word: 'Automation', options: [{ emoji: '💡', label: 'Innovation' }, { emoji: '🤖', label: 'Robotics' }, { emoji: '⚙️', label: 'Automation' }, { emoji: '📱', label: 'Smartphone' }], correct: 2 },
        { word: 'Hologram', options: [{ emoji: '🛸', label: 'Drone' }, { emoji: '🖨️', label: '3D printing' }, { emoji: '⌚', label: 'Wearable' }, { emoji: '🌟', label: 'Hologram' }], correct: 3 },
        { word: 'Ecotourism', options: [{ emoji: '🌿', label: 'Ecotourism' }, { emoji: '🏛️', label: 'Heritage site' }, { emoji: '📸', label: 'Sightseeing' }, { emoji: '📍', label: 'Destination' }], correct: 0 },
        { word: 'Eclipse', options: [{ emoji: '☄️', label: 'Meteor' }, { emoji: '🌑', label: 'Eclipse' }, { emoji: '☄️', label: 'Comet' }, { emoji: '🌙', label: 'Lunar' }], correct: 1 },
    ],
};
