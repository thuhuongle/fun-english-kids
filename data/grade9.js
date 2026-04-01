// ============================================
// LỚP 9 - ÔN THI VÀO 10 - 3 CẤP ĐỘ
// ============================================
GRADE_DATA[9] = {};
GRADE_DATA[9].info = {
    levels: [
        { id: 1, name: 'Pre-Intermediate', nameVi: 'Trung bình sơ cấp', months: [1,2,3,4], color: '#4ECDC4', icon: '📗' },
        { id: 2, name: 'Intermediate', nameVi: 'Trung cấp', months: [5,6,7,8], color: '#A855F7', icon: '📘' },
        { id: 3, name: 'Upper-Intermediate', nameVi: 'Trung cao cấp', months: [9,10,11,12], color: '#FF6B9D', icon: '📕' },
    ],
    months: [
        { month: 1, title: 'Môi trường địa phương', topics: ['local_environment', 'rural_life'] },
        { month: 2, title: 'Trang phục & Thời trang', topics: ['clothing', 'fashion_trends'] },
        { month: 3, title: 'Lễ hội & Kỷ niệm', topics: ['celebrations', 'festivals'] },
        { month: 4, title: 'Ôn tập cấp 1', topics: ['review_level1'] },
        { month: 5, title: 'Học ngoại ngữ', topics: ['learning_language', 'study_methods'] },
        { month: 6, title: 'Truyền thông', topics: ['the_media', 'social_media'] },
        { month: 7, title: 'Tiết kiệm năng lượng', topics: ['saving_energy', 'green_living'] },
        { month: 8, title: 'Ôn tập cấp 2', topics: ['review_level2'] },
        { month: 9, title: 'Môi trường', topics: ['the_environment', 'pollution'] },
        { month: 10, title: 'Thiên tai', topics: ['natural_disasters', 'disaster_prep'] },
        { month: 11, title: 'Các nước nói tiếng Anh', topics: ['english_countries', 'world_cultures'] },
        { month: 12, title: 'Ôn thi vào lớp 10', topics: ['exam_review'] },
    ]
};

// ============================================
// TỪ VỰNG - 20+ CHỦ ĐỀ
// ============================================
GRADE_DATA[9].vocab = {
    // === THÁNG 1 ===
    local_environment: {
        name: 'Môi trường địa phương',
        level: 1,
        month: 1,
        words: [
            { en: 'Neighborhood', vi: 'Khu phố', emoji: '🏘️', phonetic: '/ˈneɪbərhʊd/' },
            { en: 'Suburb', vi: 'Ngoại ô', emoji: '🏡', phonetic: '/ˈsʌbɜːrb/' },
            { en: 'Population', vi: 'Dân số', emoji: '👥', phonetic: '/ˌpɒpjuˈleɪʃən/' },
            { en: 'Pedestrian', vi: 'Người đi bộ', emoji: '🚶', phonetic: '/pəˈdestriən/' },
            { en: 'Overcrowded', vi: 'Quá đông đúc', emoji: '🏙️', phonetic: '/ˌoʊvərˈkraʊdɪd/' },
            { en: 'Facility', vi: 'Cơ sở vật chất', emoji: '🏗️', phonetic: '/fəˈsɪləti/' },
            { en: 'Residential', vi: 'Thuộc khu dân cư', emoji: '🏠', phonetic: '/ˌrezɪˈdenʃəl/' },
            { en: 'Industrial', vi: 'Thuộc công nghiệp', emoji: '🏭', phonetic: '/ɪnˈdʌstriəl/' },
            { en: 'Spacious', vi: 'Rộng rãi', emoji: '🌳', phonetic: '/ˈspeɪʃəs/' },
            { en: 'Polluted', vi: 'Bị ô nhiễm', emoji: '💨', phonetic: '/pəˈluːtɪd/' },
        ]
    },
    rural_life: {
        name: 'Cuộc sống nông thôn',
        level: 1,
        month: 1,
        words: [
            { en: 'Harvest', vi: 'Thu hoạch', emoji: '🌾', phonetic: '/ˈhɑːrvɪst/' },
            { en: 'Cultivate', vi: 'Canh tác', emoji: '🚜', phonetic: '/ˈkʌltɪveɪt/' },
            { en: 'Peasant', vi: 'Nông dân', emoji: '👨‍🌾', phonetic: '/ˈpezənt/' },
            { en: 'Pasture', vi: 'Đồng cỏ', emoji: '🌿', phonetic: '/ˈpæstʃər/' },
            { en: 'Livestock', vi: 'Gia súc', emoji: '🐄', phonetic: '/ˈlaɪvstɒk/' },
            { en: 'Irrigation', vi: 'Tưới tiêu', emoji: '💧', phonetic: '/ˌɪrɪˈɡeɪʃən/' },
            { en: 'Fertile', vi: 'Màu mỡ', emoji: '🌱', phonetic: '/ˈfɜːrtaɪl/' },
            { en: 'Countryside', vi: 'Vùng quê', emoji: '🏞️', phonetic: '/ˈkʌntrisaɪd/' },
            { en: 'Scenic', vi: 'Có phong cảnh đẹp', emoji: '🏔️', phonetic: '/ˈsiːnɪk/' },
            { en: 'Tranquil', vi: 'Yên bình', emoji: '🕊️', phonetic: '/ˈtræŋkwɪl/' },
        ]
    },

    // === THÁNG 2 ===
    clothing: {
        name: 'Trang phục',
        level: 1,
        month: 2,
        words: [
            { en: 'Costume', vi: 'Trang phục', emoji: '👘', phonetic: '/ˈkɒstjuːm/' },
            { en: 'Embroider', vi: 'Thêu', emoji: '🧵', phonetic: '/ɪmˈbrɔɪdər/' },
            { en: 'Fabric', vi: 'Vải', emoji: '🧶', phonetic: '/ˈfæbrɪk/' },
            { en: 'Sleeve', vi: 'Tay áo', emoji: '👔', phonetic: '/sliːv/' },
            { en: 'Collar', vi: 'Cổ áo', emoji: '👕', phonetic: '/ˈkɒlər/' },
            { en: 'Casual', vi: 'Bình thường', emoji: '👖', phonetic: '/ˈkæʒuəl/' },
            { en: 'Formal', vi: 'Trang trọng', emoji: '🤵', phonetic: '/ˈfɔːrməl/' },
            { en: 'Fashionable', vi: 'Hợp thời trang', emoji: '💃', phonetic: '/ˈfæʃənəbəl/' },
            { en: 'Trendy', vi: 'Thịnh hành', emoji: '✨', phonetic: '/ˈtrendi/' },
            { en: 'Traditional', vi: 'Truyền thống', emoji: '🎎', phonetic: '/trəˈdɪʃənəl/' },
        ]
    },
    fashion_trends: {
        name: 'Xu hướng thời trang',
        level: 1,
        month: 2,
        words: [
            { en: 'Accessory', vi: 'Phụ kiện', emoji: '💍', phonetic: '/əkˈsesəri/' },
            { en: 'Pattern', vi: 'Họa tiết', emoji: '🎨', phonetic: '/ˈpætərn/' },
            { en: 'Stripe', vi: 'Sọc', emoji: '🦓', phonetic: '/straɪp/' },
            { en: 'Plaid', vi: 'Ca rô', emoji: '🏁', phonetic: '/plæd/' },
            { en: 'Outfit', vi: 'Bộ trang phục', emoji: '👗', phonetic: '/ˈaʊtfɪt/' },
            { en: 'Designer', vi: 'Nhà thiết kế', emoji: '✂️', phonetic: '/dɪˈzaɪnər/' },
            { en: 'Elegant', vi: 'Thanh lịch', emoji: '🎩', phonetic: '/ˈelɪɡənt/' },
            { en: 'Wardrobe', vi: 'Tủ quần áo', emoji: '🚪', phonetic: '/ˈwɔːrdroʊb/' },
            { en: 'Tailor', vi: 'Thợ may', emoji: '🪡', phonetic: '/ˈteɪlər/' },
            { en: 'Boutique', vi: 'Cửa hàng thời trang', emoji: '🛍️', phonetic: '/buːˈtiːk/' },
        ]
    },

    // === THÁNG 3 ===
    celebrations: {
        name: 'Lễ hội & Kỷ niệm',
        level: 1,
        month: 3,
        words: [
            { en: 'Ceremony', vi: 'Nghi lễ', emoji: '🎊', phonetic: '/ˈserəmoʊni/' },
            { en: 'Procession', vi: 'Đoàn rước', emoji: '🎭', phonetic: '/prəˈseʃən/' },
            { en: 'Reunion', vi: 'Đoàn tụ', emoji: '👨‍👩‍👧‍👦', phonetic: '/riːˈjuːniən/' },
            { en: 'Feast', vi: 'Bữa tiệc lớn', emoji: '🍽️', phonetic: '/fiːst/' },
            { en: 'Decoration', vi: 'Trang trí', emoji: '🎀', phonetic: '/ˌdekəˈreɪʃən/' },
            { en: 'Fireworks', vi: 'Pháo hoa', emoji: '🎆', phonetic: '/ˈfaɪərwɜːrks/' },
            { en: 'Ritual', vi: 'Nghi thức', emoji: '🙏', phonetic: '/ˈrɪtʃuəl/' },
            { en: 'Worship', vi: 'Thờ cúng', emoji: '⛪', phonetic: '/ˈwɜːrʃɪp/' },
            { en: 'Anniversary', vi: 'Ngày kỷ niệm', emoji: '🎂', phonetic: '/ˌænɪˈvɜːrsəri/' },
            { en: 'Custom', vi: 'Phong tục', emoji: '🏮', phonetic: '/ˈkʌstəm/' },
        ]
    },
    festivals: {
        name: 'Các lễ hội',
        level: 1,
        month: 3,
        words: [
            { en: 'Lantern', vi: 'Đèn lồng', emoji: '🏮', phonetic: '/ˈlæntərn/' },
            { en: 'Harvest festival', vi: 'Lễ hội mùa gặt', emoji: '🌾', phonetic: '/ˈhɑːrvɪst ˈfestɪvəl/' },
            { en: 'Parade', vi: 'Diễu hành', emoji: '🎺', phonetic: '/pəˈreɪd/' },
            { en: 'Ancestor', vi: 'Tổ tiên', emoji: '👴', phonetic: '/ˈænsestər/' },
            { en: 'Offering', vi: 'Lễ vật', emoji: '🍊', phonetic: '/ˈɒfərɪŋ/' },
            { en: 'Incense', vi: 'Nhang / Hương', emoji: '🕯️', phonetic: '/ˈɪnsens/' },
            { en: 'Dragon dance', vi: 'Múa rồng', emoji: '🐉', phonetic: '/ˈdræɡən dæns/' },
            { en: 'Moon cake', vi: 'Bánh trung thu', emoji: '🥮', phonetic: '/muːn keɪk/' },
            { en: 'Gratitude', vi: 'Lòng biết ơn', emoji: '💖', phonetic: '/ˈɡrætɪtjuːd/' },
            { en: 'Heritage', vi: 'Di sản', emoji: '🏛️', phonetic: '/ˈherɪtɪdʒ/' },
        ]
    },

    // === THÁNG 5 ===
    learning_language: {
        name: 'Học ngoại ngữ',
        level: 2,
        month: 5,
        words: [
            { en: 'Bilingual', vi: 'Song ngữ', emoji: '🗣️', phonetic: '/baɪˈlɪŋɡwəl/' },
            { en: 'Pronunciation', vi: 'Phát âm', emoji: '🔊', phonetic: '/prəˌnʌnsiˈeɪʃən/' },
            { en: 'Vocabulary', vi: 'Từ vựng', emoji: '📖', phonetic: '/voʊˈkæbjələri/' },
            { en: 'Grammar', vi: 'Ngữ pháp', emoji: '📝', phonetic: '/ˈɡræmər/' },
            { en: 'Fluent', vi: 'Lưu loát', emoji: '💬', phonetic: '/ˈfluːənt/' },
            { en: 'Accent', vi: 'Giọng', emoji: '🎤', phonetic: '/ˈæksent/' },
            { en: 'Dialect', vi: 'Phương ngữ', emoji: '🗺️', phonetic: '/ˈdaɪəlekt/' },
            { en: 'Comprehension', vi: 'Khả năng hiểu', emoji: '🧠', phonetic: '/ˌkɒmprɪˈhenʃən/' },
            { en: 'Proficiency', vi: 'Trình độ thành thạo', emoji: '🏆', phonetic: '/prəˈfɪʃənsi/' },
            { en: 'Mother tongue', vi: 'Tiếng mẹ đẻ', emoji: '👶', phonetic: '/ˈmʌðər tʌŋ/' },
        ]
    },
    study_methods: {
        name: 'Phương pháp học',
        level: 2,
        month: 5,
        words: [
            { en: 'Memorize', vi: 'Ghi nhớ', emoji: '🧠', phonetic: '/ˈmeməraɪz/' },
            { en: 'Practice', vi: 'Luyện tập', emoji: '✏️', phonetic: '/ˈpræktɪs/' },
            { en: 'Review', vi: 'Ôn tập', emoji: '📋', phonetic: '/rɪˈvjuː/' },
            { en: 'Summarize', vi: 'Tóm tắt', emoji: '📄', phonetic: '/ˈsʌməraɪz/' },
            { en: 'Concentrate', vi: 'Tập trung', emoji: '🎯', phonetic: '/ˈkɒnsəntreɪt/' },
            { en: 'Self-study', vi: 'Tự học', emoji: '📚', phonetic: '/ˌself ˈstʌdi/' },
            { en: 'Assignment', vi: 'Bài tập', emoji: '📝', phonetic: '/əˈsaɪnmənt/' },
            { en: 'Technique', vi: 'Kỹ thuật', emoji: '🔧', phonetic: '/tekˈniːk/' },
            { en: 'Effective', vi: 'Hiệu quả', emoji: '✅', phonetic: '/ɪˈfektɪv/' },
            { en: 'Progress', vi: 'Tiến bộ', emoji: '📈', phonetic: '/ˈprɒɡres/' },
        ]
    },

    // === THÁNG 6 ===
    the_media: {
        name: 'Truyền thông',
        level: 2,
        month: 6,
        words: [
            { en: 'Journalist', vi: 'Nhà báo', emoji: '📰', phonetic: '/ˈdʒɜːrnəlɪst/' },
            { en: 'Broadcast', vi: 'Phát sóng', emoji: '📡', phonetic: '/ˈbrɔːdkæst/' },
            { en: 'Headline', vi: 'Tiêu đề', emoji: '📰', phonetic: '/ˈhedlaɪn/' },
            { en: 'Advertisement', vi: 'Quảng cáo', emoji: '📺', phonetic: '/ˌædvərˈtaɪzmənt/' },
            { en: 'Channel', vi: 'Kênh', emoji: '📻', phonetic: '/ˈtʃænəl/' },
            { en: 'Documentary', vi: 'Phim tài liệu', emoji: '🎬', phonetic: '/ˌdɒkjuˈmentəri/' },
            { en: 'Censorship', vi: 'Kiểm duyệt', emoji: '🚫', phonetic: '/ˈsensərʃɪp/' },
            { en: 'Reporter', vi: 'Phóng viên', emoji: '🎙️', phonetic: '/rɪˈpɔːrtər/' },
            { en: 'Editorial', vi: 'Bài xã luận', emoji: '✍️', phonetic: '/ˌedɪˈtɔːriəl/' },
            { en: 'Audience', vi: 'Khán giả', emoji: '👥', phonetic: '/ˈɔːdiəns/' },
        ]
    },
    social_media: {
        name: 'Mạng xã hội',
        level: 2,
        month: 6,
        words: [
            { en: 'Follower', vi: 'Người theo dõi', emoji: '👤', phonetic: '/ˈfɒloʊər/' },
            { en: 'Influence', vi: 'Ảnh hưởng', emoji: '🌟', phonetic: '/ˈɪnfluəns/' },
            { en: 'Content', vi: 'Nội dung', emoji: '📱', phonetic: '/ˈkɒntent/' },
            { en: 'Viral', vi: 'Lan truyền', emoji: '🔥', phonetic: '/ˈvaɪrəl/' },
            { en: 'Privacy', vi: 'Quyền riêng tư', emoji: '🔒', phonetic: '/ˈprɪvəsi/' },
            { en: 'Cyberbullying', vi: 'Bắt nạt trực tuyến', emoji: '😡', phonetic: '/ˈsaɪbərˌbʊliɪŋ/' },
            { en: 'Notification', vi: 'Thông báo', emoji: '🔔', phonetic: '/ˌnoʊtɪfɪˈkeɪʃən/' },
            { en: 'Interaction', vi: 'Tương tác', emoji: '💬', phonetic: '/ˌɪntərˈækʃən/' },
            { en: 'Platform', vi: 'Nền tảng', emoji: '🖥️', phonetic: '/ˈplætfɔːrm/' },
            { en: 'Algorithm', vi: 'Thuật toán', emoji: '⚙️', phonetic: '/ˈælɡərɪðəm/' },
        ]
    },

    // === THÁNG 7 ===
    saving_energy: {
        name: 'Tiết kiệm năng lượng',
        level: 2,
        month: 7,
        words: [
            { en: 'Renewable', vi: 'Tái tạo được', emoji: '♻️', phonetic: '/rɪˈnjuːəbəl/' },
            { en: 'Solar panel', vi: 'Tấm pin mặt trời', emoji: '☀️', phonetic: '/ˈsoʊlər ˈpænəl/' },
            { en: 'Wind turbine', vi: 'Tuabin gió', emoji: '🌬️', phonetic: '/wɪnd ˈtɜːrbaɪn/' },
            { en: 'Consumption', vi: 'Sự tiêu thụ', emoji: '📊', phonetic: '/kənˈsʌmpʃən/' },
            { en: 'Fossil fuel', vi: 'Nhiên liệu hóa thạch', emoji: '⛽', phonetic: '/ˈfɒsəl fjuːəl/' },
            { en: 'Insulation', vi: 'Cách nhiệt', emoji: '🧱', phonetic: '/ˌɪnsəˈleɪʃən/' },
            { en: 'Efficient', vi: 'Hiệu quả', emoji: '✅', phonetic: '/ɪˈfɪʃənt/' },
            { en: 'Carbon footprint', vi: 'Dấu chân carbon', emoji: '👣', phonetic: '/ˈkɑːrbən ˈfʊtprɪnt/' },
            { en: 'Conserve', vi: 'Bảo tồn', emoji: '💚', phonetic: '/kənˈsɜːrv/' },
            { en: 'Emission', vi: 'Khí thải', emoji: '💨', phonetic: '/ɪˈmɪʃən/' },
        ]
    },
    green_living: {
        name: 'Sống xanh',
        level: 2,
        month: 7,
        words: [
            { en: 'Biodegradable', vi: 'Phân hủy sinh học', emoji: '🍂', phonetic: '/ˌbaɪoʊdɪˈɡreɪdəbəl/' },
            { en: 'Sustainable', vi: 'Bền vững', emoji: '🌍', phonetic: '/səˈsteɪnəbəl/' },
            { en: 'Compost', vi: 'Phân ủ', emoji: '🌿', phonetic: '/ˈkɒmpɒst/' },
            { en: 'Organic', vi: 'Hữu cơ', emoji: '🥬', phonetic: '/ɔːrˈɡænɪk/' },
            { en: 'Reusable', vi: 'Có thể tái sử dụng', emoji: '🔄', phonetic: '/riːˈjuːzəbəl/' },
            { en: 'Eco-friendly', vi: 'Thân thiện môi trường', emoji: '💚', phonetic: '/ˈiːkoʊ ˈfrendli/' },
            { en: 'Greenhouse', vi: 'Nhà kính', emoji: '🏡', phonetic: '/ˈɡriːnhaʊs/' },
            { en: 'Disposal', vi: 'Sự vứt bỏ', emoji: '🗑️', phonetic: '/dɪˈspoʊzəl/' },
            { en: 'Awareness', vi: 'Nhận thức', emoji: '💡', phonetic: '/əˈwernəs/' },
            { en: 'Campaign', vi: 'Chiến dịch', emoji: '📢', phonetic: '/kæmˈpeɪn/' },
        ]
    },

    // === THÁNG 9 ===
    the_environment: {
        name: 'Môi trường',
        level: 3,
        month: 9,
        words: [
            { en: 'Deforestation', vi: 'Nạn phá rừng', emoji: '🪓', phonetic: '/diːˌfɒrɪˈsteɪʃən/' },
            { en: 'Ecosystem', vi: 'Hệ sinh thái', emoji: '🌏', phonetic: '/ˈiːkoʊsɪstəm/' },
            { en: 'Contaminate', vi: 'Làm ô nhiễm', emoji: '☠️', phonetic: '/kənˈtæmɪneɪt/' },
            { en: 'Biodiversity', vi: 'Đa dạng sinh học', emoji: '🦋', phonetic: '/ˌbaɪoʊdaɪˈvɜːrsəti/' },
            { en: 'Habitat', vi: 'Môi trường sống', emoji: '🏞️', phonetic: '/ˈhæbɪtæt/' },
            { en: 'Endangered', vi: 'Có nguy cơ tuyệt chủng', emoji: '🐼', phonetic: '/ɪnˈdeɪndʒərd/' },
            { en: 'Conservation', vi: 'Sự bảo tồn', emoji: '🛡️', phonetic: '/ˌkɒnsərˈveɪʃən/' },
            { en: 'Atmosphere', vi: 'Bầu khí quyển', emoji: '🌤️', phonetic: '/ˈætməsfɪr/' },
            { en: 'Erosion', vi: 'Sự xói mòn', emoji: '🏜️', phonetic: '/ɪˈroʊʒən/' },
            { en: 'Preservation', vi: 'Sự bảo quản', emoji: '🌲', phonetic: '/ˌprezərˈveɪʃən/' },
        ]
    },
    pollution: {
        name: 'Ô nhiễm',
        level: 3,
        month: 9,
        words: [
            { en: 'Toxic', vi: 'Độc hại', emoji: '☣️', phonetic: '/ˈtɒksɪk/' },
            { en: 'Waste', vi: 'Chất thải', emoji: '🗑️', phonetic: '/weɪst/' },
            { en: 'Sewage', vi: 'Nước thải', emoji: '🚰', phonetic: '/ˈsuːɪdʒ/' },
            { en: 'Smog', vi: 'Sương mù bẩn', emoji: '🌫️', phonetic: '/smɒɡ/' },
            { en: 'Acid rain', vi: 'Mưa axit', emoji: '🌧️', phonetic: '/ˈæsɪd reɪn/' },
            { en: 'Ozone layer', vi: 'Tầng ôzôn', emoji: '🛡️', phonetic: '/ˈoʊzoʊn ˈleɪər/' },
            { en: 'Landfill', vi: 'Bãi rác', emoji: '🏗️', phonetic: '/ˈlændfɪl/' },
            { en: 'Contamination', vi: 'Sự nhiễm bẩn', emoji: '⚠️', phonetic: '/kənˌtæmɪˈneɪʃən/' },
            { en: 'Pesticide', vi: 'Thuốc trừ sâu', emoji: '🧪', phonetic: '/ˈpestɪsaɪd/' },
            { en: 'Exhaust fume', vi: 'Khí thải', emoji: '🚗', phonetic: '/ɪɡˈzɔːst fjuːm/' },
        ]
    },

    // === THÁNG 10 ===
    natural_disasters: {
        name: 'Thiên tai',
        level: 3,
        month: 10,
        words: [
            { en: 'Earthquake', vi: 'Động đất', emoji: '🌍', phonetic: '/ˈɜːrθkweɪk/' },
            { en: 'Tsunami', vi: 'Sóng thần', emoji: '🌊', phonetic: '/tsuːˈnɑːmi/' },
            { en: 'Drought', vi: 'Hạn hán', emoji: '☀️', phonetic: '/draʊt/' },
            { en: 'Flood', vi: 'Lũ lụt', emoji: '🌊', phonetic: '/flʌd/' },
            { en: 'Hurricane', vi: 'Bão lớn', emoji: '🌀', phonetic: '/ˈhɜːrɪkeɪn/' },
            { en: 'Volcano', vi: 'Núi lửa', emoji: '🌋', phonetic: '/vɒlˈkeɪnoʊ/' },
            { en: 'Landslide', vi: 'Sạt lở đất', emoji: '⛰️', phonetic: '/ˈlændslaɪd/' },
            { en: 'Typhoon', vi: 'Bão', emoji: '🌪️', phonetic: '/taɪˈfuːn/' },
            { en: 'Avalanche', vi: 'Lở tuyết', emoji: '❄️', phonetic: '/ˈævəlæntʃ/' },
            { en: 'Wildfire', vi: 'Cháy rừng', emoji: '🔥', phonetic: '/ˈwaɪldfaɪər/' },
        ]
    },
    disaster_prep: {
        name: 'Phòng chống thiên tai',
        level: 3,
        month: 10,
        words: [
            { en: 'Evacuate', vi: 'Sơ tán', emoji: '🏃', phonetic: '/ɪˈvækjueɪt/' },
            { en: 'Shelter', vi: 'Nơi trú ẩn', emoji: '🏠', phonetic: '/ˈʃeltər/' },
            { en: 'Relief', vi: 'Cứu trợ', emoji: '🤝', phonetic: '/rɪˈliːf/' },
            { en: 'Casualty', vi: 'Thương vong', emoji: '🏥', phonetic: '/ˈkæʒuəlti/' },
            { en: 'Rescue', vi: 'Cứu hộ', emoji: '🚒', phonetic: '/ˈreskjuː/' },
            { en: 'Emergency', vi: 'Tình trạng khẩn cấp', emoji: '🚨', phonetic: '/ɪˈmɜːrdʒənsi/' },
            { en: 'Survivor', vi: 'Người sống sót', emoji: '💪', phonetic: '/sərˈvaɪvər/' },
            { en: 'Aftermath', vi: 'Hậu quả', emoji: '🏚️', phonetic: '/ˈæftərmæθ/' },
            { en: 'Forecast', vi: 'Dự báo', emoji: '📡', phonetic: '/ˈfɔːrkæst/' },
            { en: 'Preparedness', vi: 'Sự sẵn sàng', emoji: '📋', phonetic: '/prɪˈperdnəs/' },
        ]
    },

    // === THÁNG 11 ===
    english_countries: {
        name: 'Các nước nói tiếng Anh',
        level: 3,
        month: 11,
        words: [
            { en: 'Commonwealth', vi: 'Khối thịnh vượng chung', emoji: '🌏', phonetic: '/ˈkɒmənwelθ/' },
            { en: 'Monarchy', vi: 'Chế độ quân chủ', emoji: '👑', phonetic: '/ˈmɒnərki/' },
            { en: 'Parliament', vi: 'Nghị viện', emoji: '🏛️', phonetic: '/ˈpɑːrləmənt/' },
            { en: 'Constitution', vi: 'Hiến pháp', emoji: '📜', phonetic: '/ˌkɒnstɪˈtjuːʃən/' },
            { en: 'Federation', vi: 'Liên bang', emoji: '🤝', phonetic: '/ˌfedəˈreɪʃən/' },
            { en: 'Multicultural', vi: 'Đa văn hóa', emoji: '🌍', phonetic: '/ˌmʌltiˈkʌltʃərəl/' },
            { en: 'Indigenous', vi: 'Bản địa', emoji: '🏕️', phonetic: '/ɪnˈdɪdʒɪnəs/' },
            { en: 'Diverse', vi: 'Đa dạng', emoji: '🌈', phonetic: '/daɪˈvɜːrs/' },
            { en: 'Immigration', vi: 'Nhập cư', emoji: '✈️', phonetic: '/ˌɪmɪˈɡreɪʃən/' },
            { en: 'Landmark', vi: 'Địa danh nổi tiếng', emoji: '🗽', phonetic: '/ˈlændmɑːrk/' },
        ]
    },
    world_cultures: {
        name: 'Văn hóa thế giới',
        level: 3,
        month: 11,
        words: [
            { en: 'Cuisine', vi: 'Ẩm thực', emoji: '🍽️', phonetic: '/kwɪˈziːn/' },
            { en: 'Architecture', vi: 'Kiến trúc', emoji: '🏗️', phonetic: '/ˈɑːrkɪtektʃər/' },
            { en: 'Civilization', vi: 'Nền văn minh', emoji: '🏛️', phonetic: '/ˌsɪvɪlaɪˈzeɪʃən/' },
            { en: 'Tradition', vi: 'Truyền thống', emoji: '🎎', phonetic: '/trəˈdɪʃən/' },
            { en: 'Literature', vi: 'Văn học', emoji: '📚', phonetic: '/ˈlɪtərətʃər/' },
            { en: 'Philosophy', vi: 'Triết học', emoji: '🤔', phonetic: '/fɪˈlɒsəfi/' },
            { en: 'Stereotype', vi: 'Khuôn mẫu', emoji: '🏷️', phonetic: '/ˈsteriətaɪp/' },
            { en: 'Etiquette', vi: 'Phép lịch sự', emoji: '🤵', phonetic: '/ˈetɪket/' },
            { en: 'Symbol', vi: 'Biểu tượng', emoji: '🔣', phonetic: '/ˈsɪmbəl/' },
            { en: 'Identity', vi: 'Bản sắc', emoji: '🪪', phonetic: '/aɪˈdentəti/' },
        ]
    },

    // === THÁNG 12 ===
    exam_review: {
        name: 'Ôn thi vào 10',
        level: 3,
        month: 12,
        words: [
            { en: 'Achievement', vi: 'Thành tựu', emoji: '🏆', phonetic: '/əˈtʃiːvmənt/' },
            { en: 'Determine', vi: 'Xác định', emoji: '🎯', phonetic: '/dɪˈtɜːrmɪn/' },
            { en: 'Phenomenon', vi: 'Hiện tượng', emoji: '🔬', phonetic: '/fɪˈnɒmɪnən/' },
            { en: 'Consequence', vi: 'Hậu quả', emoji: '⚡', phonetic: '/ˈkɒnsɪkwəns/' },
            { en: 'Contribute', vi: 'Đóng góp', emoji: '🤲', phonetic: '/kənˈtrɪbjuːt/' },
            { en: 'Responsibility', vi: 'Trách nhiệm', emoji: '💼', phonetic: '/rɪˌspɒnsəˈbɪləti/' },
            { en: 'Communicate', vi: 'Giao tiếp', emoji: '💬', phonetic: '/kəˈmjuːnɪkeɪt/' },
            { en: 'Cooperation', vi: 'Sự hợp tác', emoji: '🤝', phonetic: '/koʊˌɒpəˈreɪʃən/' },
            { en: 'Appreciate', vi: 'Đánh giá cao', emoji: '👏', phonetic: '/əˈpriːʃieɪt/' },
            { en: 'Significant', vi: 'Quan trọng', emoji: '⭐', phonetic: '/sɪɡˈnɪfɪkənt/' },
        ]
    },
};

// ============================================
// PHONICS - WORD STRESS & INTONATION
// ============================================
GRADE_DATA[9].phonics = [
    { letter: 'Stress: Oo', sound: 'First syllable stress', words: [
        { word: 'ENergy', highlight: 'EN', emoji: '🔋' },
        { word: 'CElebrate', highlight: 'CE', emoji: '🎉' },
        { word: 'ENvironment', highlight: 'EN', emoji: '🌍' }
    ]},
    { letter: 'Stress: oO', sound: 'Second syllable stress', words: [
        { word: 'diSASter', highlight: 'SAS', emoji: '🌪️' },
        { word: 'polLUtion', highlight: 'LU', emoji: '💨' },
        { word: 'proDUCtion', highlight: 'DUC', emoji: '🏭' }
    ]},
    { letter: 'Stress: oOo', sound: 'Second of three', words: [
        { word: 'eFFIcient', highlight: 'FI', emoji: '✅' },
        { word: 'reLIable', highlight: 'LI', emoji: '🤝' },
        { word: 'reCYcling', highlight: 'CY', emoji: '♻️' }
    ]},
    { letter: '-tion', sound: '/ʃən/', words: [
        { word: 'Celebration', highlight: 'tion', emoji: '🎊' },
        { word: 'Population', highlight: 'tion', emoji: '👥' },
        { word: 'Conservation', highlight: 'tion', emoji: '🛡️' }
    ]},
    { letter: '-sion', sound: '/ʒən/', words: [
        { word: 'Television', highlight: 'sion', emoji: '📺' },
        { word: 'Decision', highlight: 'sion', emoji: '🤔' },
        { word: 'Conclusion', highlight: 'sion', emoji: '✅' }
    ]},
    { letter: '-ment', sound: '/mənt/', words: [
        { word: 'Environment', highlight: 'ment', emoji: '🌍' },
        { word: 'Achievement', highlight: 'ment', emoji: '🏆' },
        { word: 'Advertisement', highlight: 'ment', emoji: '📢' }
    ]},
    { letter: '-ness', sound: '/nəs/', words: [
        { word: 'Awareness', highlight: 'ness', emoji: '💡' },
        { word: 'Preparedness', highlight: 'ness', emoji: '📋' },
        { word: 'Effectiveness', highlight: 'ness', emoji: '🎯' }
    ]},
    { letter: '-able/-ible', sound: '/əbəl/', words: [
        { word: 'Renewable', highlight: 'able', emoji: '♻️' },
        { word: 'Sustainable', highlight: 'able', emoji: '🌱' },
        { word: 'Responsible', highlight: 'ible', emoji: '💼' }
    ]},
    { letter: 'Silent letters', sound: 'Chữ câm', words: [
        { word: 'kNowledge', highlight: 'k', emoji: '🧠' },
        { word: 'foreigN', highlight: 'g', emoji: '🌏' },
        { word: 'fasciNate', highlight: 'c', emoji: '✨' }
    ]},
    { letter: 'Linking sounds', sound: 'Nối âm', words: [
        { word: 'turn_off', highlight: 'n_o', emoji: '🔌' },
        { word: 'look_at', highlight: 'k_a', emoji: '👀' },
        { word: 'pick_up', highlight: 'k_u', emoji: '📦' }
    ]},
    { letter: 'Intonation ↗️', sound: 'Rising (Yes/No Q)', words: [
        { word: 'Is it raining? ↗️', highlight: '↗️', emoji: '🌧️' },
        { word: 'Do you recycle? ↗️', highlight: '↗️', emoji: '♻️' },
        { word: 'Can you help? ↗️', highlight: '↗️', emoji: '🤝' }
    ]},
    { letter: 'Intonation ↘️', sound: 'Falling (Wh- Q)', words: [
        { word: 'Where is the shelter? ↘️', highlight: '↘️', emoji: '🏠' },
        { word: 'What happened? ↘️', highlight: '↘️', emoji: '❓' },
        { word: 'How can we help? ↘️', highlight: '↘️', emoji: '💬' }
    ]},
];

// ============================================
// CÂU MẪU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[9].sentences = {
    level1: [
        { sentence: ['The', 'neighborhood', 'has', 'many', 'tall', 'buildings'], emoji: '🏘️', vi: 'Khu phố có nhiều tòa nhà cao', extra: ['few', 'a'] },
        { sentence: ['She', 'wears', 'a', 'traditional', 'costume', 'at', 'the', 'festival'], emoji: '👘', vi: 'Cô ấy mặc trang phục truyền thống tại lễ hội', extra: ['modern', 'in'] },
        { sentence: ['People', 'decorate', 'their', 'houses', 'for', 'Tet'], emoji: '🏮', vi: 'Mọi người trang trí nhà cửa cho Tết', extra: ['clean', 'at'] },
        { sentence: ['The', 'countryside', 'is', 'more', 'tranquil', 'than', 'the', 'city'], emoji: '🏞️', vi: 'Vùng quê yên bình hơn thành phố', extra: ['noisy', 'less'] },
        { sentence: ['Farmers', 'cultivate', 'rice', 'in', 'the', 'field'], emoji: '🌾', vi: 'Nông dân trồng lúa ngoài đồng', extra: ['factory', 'on'] },
        { sentence: ['This', 'area', 'is', 'overcrowded', 'and', 'polluted'], emoji: '🏙️', vi: 'Khu vực này đông đúc và ô nhiễm', extra: ['clean', 'or'] },
        { sentence: ['The', 'fabric', 'of', 'the', 'ao', 'dai', 'is', 'silk'], emoji: '🧵', vi: 'Vải của áo dài là lụa', extra: ['cotton', 'a'] },
        { sentence: ['They', 'hold', 'a', 'ceremony', 'every', 'year'], emoji: '🎊', vi: 'Họ tổ chức lễ hàng năm', extra: ['party', 'the'] },
    ],
    level2: [
        { sentence: ['Learning', 'a', 'foreign', 'language', 'requires', 'practice'], emoji: '🗣️', vi: 'Học ngoại ngữ đòi hỏi sự luyện tập', extra: ['luck', 'the'] },
        { sentence: ['The', 'journalist', 'reported', 'the', 'news', 'on', 'television'], emoji: '📺', vi: 'Nhà báo đưa tin trên truyền hình', extra: ['radio', 'in'] },
        { sentence: ['We', 'should', 'use', 'renewable', 'energy', 'sources'], emoji: '☀️', vi: 'Chúng ta nên sử dụng nguồn năng lượng tái tạo', extra: ['fossil', 'a'] },
        { sentence: ['Social', 'media', 'can', 'influence', 'young', 'people'], emoji: '📱', vi: 'Mạng xã hội có thể ảnh hưởng đến giới trẻ', extra: ['old', 'a'] },
        { sentence: ['She', 'is', 'fluent', 'in', 'both', 'English', 'and', 'French'], emoji: '🌍', vi: 'Cô ấy lưu loát cả tiếng Anh và tiếng Pháp', extra: ['bad', 'or'] },
        { sentence: ['Turning', 'off', 'lights', 'helps', 'conserve', 'energy'], emoji: '💡', vi: 'Tắt đèn giúp tiết kiệm năng lượng', extra: ['waste', 'on'] },
        { sentence: ['The', 'documentary', 'raised', 'awareness', 'about', 'pollution'], emoji: '🎬', vi: 'Bộ phim tài liệu nâng cao nhận thức về ô nhiễm', extra: ['cartoon', 'for'] },
        { sentence: ['He', 'summarized', 'the', 'lesson', 'to', 'review', 'it'], emoji: '📋', vi: 'Anh ấy tóm tắt bài để ôn tập', extra: ['forgot', 'a'] },
    ],
    level3: [
        { sentence: ['Deforestation', 'destroys', 'the', 'natural', 'habitat', 'of', 'animals'], emoji: '🪓', vi: 'Phá rừng hủy hoại môi trường sống tự nhiên của động vật', extra: ['creates', 'a'] },
        { sentence: ['The', 'earthquake', 'caused', 'severe', 'damage', 'to', 'the', 'city'], emoji: '🌍', vi: 'Trận động đất gây thiệt hại nghiêm trọng cho thành phố', extra: ['minor', 'a'] },
        { sentence: ['People', 'were', 'evacuated', 'before', 'the', 'typhoon', 'arrived'], emoji: '🌪️', vi: 'Người dân đã được sơ tán trước khi bão đến', extra: ['after', 'a'] },
        { sentence: ['Australia', 'is', 'a', 'multicultural', 'and', 'diverse', 'country'], emoji: '🌏', vi: 'Úc là một đất nước đa văn hóa và đa dạng', extra: ['small', 'the'] },
        { sentence: ['Toxic', 'waste', 'contaminates', 'the', 'water', 'supply'], emoji: '☣️', vi: 'Chất thải độc hại làm ô nhiễm nguồn nước', extra: ['cleans', 'a'] },
        { sentence: ['The', 'rescue', 'team', 'helped', 'the', 'survivors', 'after', 'the', 'flood'], emoji: '🚒', vi: 'Đội cứu hộ đã giúp đỡ những người sống sót sau lũ', extra: ['before', 'a'] },
    ],
};

// ============================================
// SPELLING THEO CẤP ĐỘ
// ============================================
GRADE_DATA[9].spelling = {
    level1: [
        { word: 'SUBURB', emoji: '🏡', vi: 'Ngoại ô' },
        { word: 'COSTUME', emoji: '👘', vi: 'Trang phục' },
        { word: 'HARVEST', emoji: '🌾', vi: 'Thu hoạch' },
        { word: 'FABRIC', emoji: '🧶', vi: 'Vải' },
        { word: 'COLLAR', emoji: '👕', vi: 'Cổ áo' },
        { word: 'FORMAL', emoji: '🤵', vi: 'Trang trọng' },
        { word: 'PARADE', emoji: '🎺', vi: 'Diễu hành' },
        { word: 'CUSTOM', emoji: '🏮', vi: 'Phong tục' },
        { word: 'SCENIC', emoji: '🏔️', vi: 'Phong cảnh đẹp' },
        { word: 'CASUAL', emoji: '👖', vi: 'Bình thường' },
        { word: 'RITUAL', emoji: '🙏', vi: 'Nghi thức' },
        { word: 'FERTILE', emoji: '🌱', vi: 'Màu mỡ' },
    ],
    level2: [
        { word: 'BILINGUAL', emoji: '🗣️', vi: 'Song ngữ' },
        { word: 'BROADCAST', emoji: '📡', vi: 'Phát sóng' },
        { word: 'HEADLINE', emoji: '📰', vi: 'Tiêu đề' },
        { word: 'RENEWABLE', emoji: '♻️', vi: 'Tái tạo được' },
        { word: 'EFFICIENT', emoji: '✅', vi: 'Hiệu quả' },
        { word: 'ALGORITHM', emoji: '⚙️', vi: 'Thuật toán' },
        { word: 'AUDIENCE', emoji: '👥', vi: 'Khán giả' },
        { word: 'EMISSION', emoji: '💨', vi: 'Khí thải' },
        { word: 'ORGANIC', emoji: '🥬', vi: 'Hữu cơ' },
        { word: 'CAMPAIGN', emoji: '📢', vi: 'Chiến dịch' },
        { word: 'TECHNIQUE', emoji: '🔧', vi: 'Kỹ thuật' },
        { word: 'FLUENT', emoji: '💬', vi: 'Lưu loát' },
    ],
    level3: [
        { word: 'DEFORESTATION', emoji: '🪓', vi: 'Nạn phá rừng' },
        { word: 'EARTHQUAKE', emoji: '🌍', vi: 'Động đất' },
        { word: 'HURRICANE', emoji: '🌀', vi: 'Bão lớn' },
        { word: 'ECOSYSTEM', emoji: '🌏', vi: 'Hệ sinh thái' },
        { word: 'BIODIVERSITY', emoji: '🦋', vi: 'Đa dạng sinh học' },
        { word: 'PARLIAMENT', emoji: '🏛️', vi: 'Nghị viện' },
        { word: 'CONTAMINATE', emoji: '☠️', vi: 'Làm ô nhiễm' },
        { word: 'CIVILIZATION', emoji: '🏛️', vi: 'Nền văn minh' },
        { word: 'EVACUATION', emoji: '🏃', vi: 'Sự sơ tán' },
        { word: 'CONSEQUENCE', emoji: '⚡', vi: 'Hậu quả' },
        { word: 'PHENOMENON', emoji: '🔬', vi: 'Hiện tượng' },
        { word: 'SUSTAINABLE', emoji: '🌱', vi: 'Bền vững' },
    ],
};

// ============================================
// NGHE HIỂU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[9].listening = {
    level1: [
        { word: 'Neighborhood', options: [{ emoji: '🏘️', label: 'Neighborhood' }, { emoji: '🏡', label: 'Suburb' }, { emoji: '🏙️', label: 'City' }, { emoji: '🏞️', label: 'Countryside' }], correct: 0 },
        { word: 'Harvest', options: [{ emoji: '🌱', label: 'Plant' }, { emoji: '🌾', label: 'Harvest' }, { emoji: '💧', label: 'Irrigate' }, { emoji: '🚜', label: 'Cultivate' }], correct: 1 },
        { word: 'Ceremony', options: [{ emoji: '🎭', label: 'Procession' }, { emoji: '🎆', label: 'Fireworks' }, { emoji: '🎊', label: 'Ceremony' }, { emoji: '🎀', label: 'Decoration' }], correct: 2 },
        { word: 'Heritage', options: [{ emoji: '🏮', label: 'Lantern' }, { emoji: '🍊', label: 'Offering' }, { emoji: '💖', label: 'Gratitude' }, { emoji: '🏛️', label: 'Heritage' }], correct: 3 },
        { word: 'Costume', options: [{ emoji: '👘', label: 'Costume' }, { emoji: '👗', label: 'Outfit' }, { emoji: '👔', label: 'Sleeve' }, { emoji: '🧵', label: 'Fabric' }], correct: 0 },
        { word: 'Fashionable', options: [{ emoji: '🤵', label: 'Formal' }, { emoji: '💃', label: 'Fashionable' }, { emoji: '👖', label: 'Casual' }, { emoji: '✨', label: 'Trendy' }], correct: 1 },
    ],
    level2: [
        { word: 'Pronunciation', options: [{ emoji: '🔊', label: 'Pronunciation' }, { emoji: '📖', label: 'Vocabulary' }, { emoji: '📝', label: 'Grammar' }, { emoji: '🎤', label: 'Accent' }], correct: 0 },
        { word: 'Documentary', options: [{ emoji: '📰', label: 'Headline' }, { emoji: '🎬', label: 'Documentary' }, { emoji: '📺', label: 'Advertisement' }, { emoji: '📻', label: 'Channel' }], correct: 1 },
        { word: 'Solar panel', options: [{ emoji: '🌬️', label: 'Wind turbine' }, { emoji: '⛽', label: 'Fossil fuel' }, { emoji: '☀️', label: 'Solar panel' }, { emoji: '🔋', label: 'Battery' }], correct: 2 },
        { word: 'Compost', options: [{ emoji: '♻️', label: 'Recycle' }, { emoji: '🥬', label: 'Organic' }, { emoji: '🔄', label: 'Reusable' }, { emoji: '🌿', label: 'Compost' }], correct: 3 },
        { word: 'Broadcast', options: [{ emoji: '📡', label: 'Broadcast' }, { emoji: '🎙️', label: 'Reporter' }, { emoji: '✍️', label: 'Editorial' }, { emoji: '📰', label: 'Journalist' }], correct: 0 },
        { word: 'Algorithm', options: [{ emoji: '📱', label: 'Content' }, { emoji: '⚙️', label: 'Algorithm' }, { emoji: '🔔', label: 'Notification' }, { emoji: '🖥️', label: 'Platform' }], correct: 1 },
        { word: 'Greenhouse', options: [{ emoji: '🍂', label: 'Biodegradable' }, { emoji: '🌍', label: 'Sustainable' }, { emoji: '🏡', label: 'Greenhouse' }, { emoji: '🗑️', label: 'Disposal' }], correct: 2 },
        { word: 'Awareness', options: [{ emoji: '📢', label: 'Campaign' }, { emoji: '🔄', label: 'Reusable' }, { emoji: '🌿', label: 'Compost' }, { emoji: '💡', label: 'Awareness' }], correct: 3 },
    ],
    level3: [
        { word: 'Earthquake', options: [{ emoji: '🌍', label: 'Earthquake' }, { emoji: '🌊', label: 'Tsunami' }, { emoji: '🌋', label: 'Volcano' }, { emoji: '🌪️', label: 'Typhoon' }], correct: 0 },
        { word: 'Evacuate', options: [{ emoji: '🚒', label: 'Rescue' }, { emoji: '🏃', label: 'Evacuate' }, { emoji: '🏠', label: 'Shelter' }, { emoji: '🤝', label: 'Relief' }], correct: 1 },
        { word: 'Biodiversity', options: [{ emoji: '🌏', label: 'Ecosystem' }, { emoji: '🏞️', label: 'Habitat' }, { emoji: '🦋', label: 'Biodiversity' }, { emoji: '🛡️', label: 'Conservation' }], correct: 2 },
        { word: 'Landmark', options: [{ emoji: '🌈', label: 'Diverse' }, { emoji: '✈️', label: 'Immigration' }, { emoji: '🌍', label: 'Multicultural' }, { emoji: '🗽', label: 'Landmark' }], correct: 3 },
        { word: 'Tsunami', options: [{ emoji: '🌊', label: 'Tsunami' }, { emoji: '🌀', label: 'Hurricane' }, { emoji: '☀️', label: 'Drought' }, { emoji: '❄️', label: 'Avalanche' }], correct: 0 },
        { word: 'Parliament', options: [{ emoji: '👑', label: 'Monarchy' }, { emoji: '🏛️', label: 'Parliament' }, { emoji: '📜', label: 'Constitution' }, { emoji: '🤝', label: 'Federation' }], correct: 1 },
    ],
};
