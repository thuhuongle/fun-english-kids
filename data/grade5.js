// ============================================
// LỚP 5 - GIÁO TRÌNH 12 THÁNG - 3 CẤP ĐỘ
// Giao tiếp cơ bản hàng ngày (age 10-11)
// ============================================
GRADE_DATA[5] = {};
GRADE_DATA[5].info = {
    levels: [
        { id: 1, name: 'Intermediate', nameVi: 'Trung cấp', months: [1,2,3,4], color: '#4ECDC4', icon: '🌱' },
        { id: 2, name: 'Upper-Intermediate', nameVi: 'Trung cấp cao', months: [5,6,7,8], color: '#A855F7', icon: '🌿' },
        { id: 3, name: 'Pre-Advanced', nameVi: 'Tiền nâng cao', months: [9,10,11,12], color: '#FF6B9D', icon: '🌳' },
    ],
    months: [
        { month: 1, title: 'Du lịch thế giới', topics: ['travel', 'travel_activities'] },
        { month: 2, title: 'Nghề nghiệp tương lai', topics: ['jobs_advanced', 'jobs_skills'] },
        { month: 3, title: 'Sức khỏe và đời sống', topics: ['health', 'health_habits'] },
        { month: 4, title: 'Truyền thông và mạng xã hội', topics: ['media', 'media_actions'] },
        { month: 5, title: 'Bảo vệ môi trường', topics: ['environment', 'environment_actions'] },
        { month: 6, title: 'Văn hóa và phong tục', topics: ['culture', 'culture_items'] },
        { month: 7, title: 'Lịch sử thú vị', topics: ['history', 'history_people'] },
        { month: 8, title: 'Kinh tế đơn giản', topics: ['economy', 'economy_actions'] },
        { month: 9, title: 'Kiến trúc quanh em', topics: ['architecture', 'architecture_styles'] },
        { month: 10, title: 'Quyền và nghĩa vụ', topics: ['law', 'law_rights'] },
        { month: 11, title: 'Tư duy và sáng tạo', topics: ['philosophy', 'philosophy_values'] },
        { month: 12, title: 'Tổng ôn tập', topics: ['review_all_5a', 'review_all_5b'] },
    ]
};

// ============================================
// TỪ VỰNG - 400+ từ chia theo chủ đề
// ============================================
GRADE_DATA[5].vocab = {
    // === THÁNG 1: Du lịch thế giới ===
    travel: {
        name: 'Du lịch',
        level: 1,
        month: 1,
        words: [
            { en: 'Passport', vi: 'Hộ chiếu', emoji: '🛂', phonetic: '/ˈpæspɔːrt/' },
            { en: 'Luggage', vi: 'Hành lý', emoji: '🧳', phonetic: '/ˈlʌɡɪdʒ/' },
            { en: 'Tourist', vi: 'Khách du lịch', emoji: '🧑‍🦰', phonetic: '/ˈtʊrɪst/' },
            { en: 'Destination', vi: 'Điểm đến', emoji: '📍', phonetic: '/ˌdestɪˈneɪʃən/' },
            { en: 'Ticket', vi: 'Vé', emoji: '🎫', phonetic: '/ˈtɪkɪt/' },
            { en: 'Hotel', vi: 'Khách sạn', emoji: '🏨', phonetic: '/hoʊˈtel/' },
            { en: 'Souvenir', vi: 'Quà lưu niệm', emoji: '🎁', phonetic: '/ˌsuːvəˈnɪr/' },
            { en: 'Map', vi: 'Bản đồ', emoji: '🗺️', phonetic: '/mæp/' },
            { en: 'Guide', vi: 'Hướng dẫn viên', emoji: '🧑‍💼', phonetic: '/ɡaɪd/' },
            { en: 'Journey', vi: 'Hành trình', emoji: '🛤️', phonetic: '/ˈdʒɜːrni/' },
        ]
    },
    travel_activities: {
        name: 'Hoạt động du lịch',
        level: 1,
        month: 1,
        words: [
            { en: 'Explore', vi: 'Khám phá', emoji: '🔍', phonetic: '/ɪkˈsplɔːr/' },
            { en: 'Sightseeing', vi: 'Ngắm cảnh', emoji: '👀', phonetic: '/ˈsaɪtsiːɪŋ/' },
            { en: 'Hiking', vi: 'Đi bộ đường dài', emoji: '🥾', phonetic: '/ˈhaɪkɪŋ/' },
            { en: 'Camping', vi: 'Cắm trại', emoji: '⛺', phonetic: '/ˈkæmpɪŋ/' },
            { en: 'Snorkeling', vi: 'Lặn biển', emoji: '🤿', phonetic: '/ˈsnɔːrkəlɪŋ/' },
            { en: 'Photograph', vi: 'Chụp ảnh', emoji: '📸', phonetic: '/ˈfoʊtəɡræf/' },
            { en: 'Reservation', vi: 'Đặt chỗ', emoji: '📋', phonetic: '/ˌrezərˈveɪʃən/' },
            { en: 'Departure', vi: 'Khởi hành', emoji: '🛫', phonetic: '/dɪˈpɑːrtʃər/' },
            { en: 'Arrival', vi: 'Đến nơi', emoji: '🛬', phonetic: '/əˈraɪvəl/' },
            { en: 'Currency', vi: 'Tiền tệ', emoji: '💱', phonetic: '/ˈkʌrənsi/' },
        ]
    },

    // === THÁNG 2: Nghề nghiệp tương lai ===
    jobs_advanced: {
        name: 'Nghề nghiệp nâng cao',
        level: 1,
        month: 2,
        words: [
            { en: 'Engineer', vi: 'Kỹ sư', emoji: '👷', phonetic: '/ˌendʒɪˈnɪr/' },
            { en: 'Architect', vi: 'Kiến trúc sư', emoji: '📐', phonetic: '/ˈɑːrkɪtekt/' },
            { en: 'Journalist', vi: 'Nhà báo', emoji: '📰', phonetic: '/ˈdʒɜːrnəlɪst/' },
            { en: 'Programmer', vi: 'Lập trình viên', emoji: '💻', phonetic: '/ˈproʊɡræmər/' },
            { en: 'Veterinarian', vi: 'Bác sĩ thú y', emoji: '🐾', phonetic: '/ˌvetərɪˈneriən/' },
            { en: 'Astronaut', vi: 'Phi hành gia', emoji: '🧑‍🚀', phonetic: '/ˈæstrənɔːt/' },
            { en: 'Lawyer', vi: 'Luật sư', emoji: '⚖️', phonetic: '/ˈlɔɪər/' },
            { en: 'Dentist', vi: 'Nha sĩ', emoji: '🦷', phonetic: '/ˈdentɪst/' },
            { en: 'Firefighter', vi: 'Lính cứu hỏa', emoji: '🧑‍🚒', phonetic: '/ˈfaɪərfaɪtər/' },
            { en: 'Translator', vi: 'Phiên dịch viên', emoji: '🌐', phonetic: '/trænˈsleɪtər/' },
        ]
    },
    jobs_skills: {
        name: 'Kỹ năng nghề nghiệp',
        level: 1,
        month: 2,
        words: [
            { en: 'Leadership', vi: 'Khả năng lãnh đạo', emoji: '👑', phonetic: '/ˈliːdərʃɪp/' },
            { en: 'Teamwork', vi: 'Làm việc nhóm', emoji: '👥', phonetic: '/ˈtiːmwɜːrk/' },
            { en: 'Experience', vi: 'Kinh nghiệm', emoji: '📈', phonetic: '/ɪkˈspɪriəns/' },
            { en: 'Salary', vi: 'Lương', emoji: '💰', phonetic: '/ˈsæləri/' },
            { en: 'Interview', vi: 'Phỏng vấn', emoji: '🎤', phonetic: '/ˈɪntərvjuː/' },
            { en: 'Resume', vi: 'Hồ sơ xin việc', emoji: '📄', phonetic: '/rɪˈzjuːmeɪ/' },
            { en: 'Skill', vi: 'Kỹ năng', emoji: '🎯', phonetic: '/skɪl/' },
            { en: 'Career', vi: 'Sự nghiệp', emoji: '🏢', phonetic: '/kəˈrɪr/' },
            { en: 'Qualification', vi: 'Bằng cấp', emoji: '🎓', phonetic: '/ˌkwɒlɪfɪˈkeɪʃən/' },
            { en: 'Deadline', vi: 'Hạn chót', emoji: '⏰', phonetic: '/ˈdedlaɪn/' },
        ]
    },

    // === THÁNG 3: Sức khỏe và đời sống ===
    health: {
        name: 'Sức khỏe',
        level: 1,
        month: 3,
        words: [
            { en: 'Nutrition', vi: 'Dinh dưỡng', emoji: '🥗', phonetic: '/njuːˈtrɪʃən/' },
            { en: 'Vitamin', vi: 'Vitamin', emoji: '💊', phonetic: '/ˈvaɪtəmɪn/' },
            { en: 'Exercise', vi: 'Tập thể dục', emoji: '🏋️', phonetic: '/ˈeksərsaɪz/' },
            { en: 'Hygiene', vi: 'Vệ sinh', emoji: '🧼', phonetic: '/ˈhaɪdʒiːn/' },
            { en: 'Symptom', vi: 'Triệu chứng', emoji: '🤒', phonetic: '/ˈsɪmptəm/' },
            { en: 'Medicine', vi: 'Thuốc', emoji: '💊', phonetic: '/ˈmedɪsɪn/' },
            { en: 'Vaccine', vi: 'Vắc-xin', emoji: '💉', phonetic: '/højvækˈsiːn/' },
            { en: 'Allergy', vi: 'Dị ứng', emoji: '🤧', phonetic: '/ˈælərdʒi/' },
            { en: 'Fitness', vi: 'Thể lực', emoji: '💪', phonetic: '/ˈfɪtnəs/' },
            { en: 'Checkup', vi: 'Khám sức khỏe', emoji: '🩺', phonetic: '/ˈtʃekʌp/' },
        ]
    },
    health_habits: {
        name: 'Thói quen tốt',
        level: 1,
        month: 3,
        words: [
            { en: 'Stretch', vi: 'Giãn cơ', emoji: '🧘', phonetic: '/stretʃ/' },
            { en: 'Hydrate', vi: 'Uống đủ nước', emoji: '💧', phonetic: '/ˈhaɪdreɪt/' },
            { en: 'Rest', vi: 'Nghỉ ngơi', emoji: '😴', phonetic: '/rest/' },
            { en: 'Meditation', vi: 'Thiền', emoji: '🧘', phonetic: '/ˌmedɪˈteɪʃən/' },
            { en: 'Balanced diet', vi: 'Chế độ ăn cân bằng', emoji: '⚖️', phonetic: '/ˈbælənst ˈdaɪət/' },
            { en: 'Posture', vi: 'Tư thế', emoji: '🧍', phonetic: '/ˈpɒstʃər/' },
            { en: 'Sunscreen', vi: 'Kem chống nắng', emoji: '🧴', phonetic: '/ˈsʌnskriːn/' },
            { en: 'First aid', vi: 'Sơ cứu', emoji: '🩹', phonetic: '/fɜːrst eɪd/' },
            { en: 'Immune system', vi: 'Hệ miễn dịch', emoji: '🛡️', phonetic: '/ɪˈmjuːn ˈsɪstəm/' },
            { en: 'Mental health', vi: 'Sức khỏe tinh thần', emoji: '🧠', phonetic: '/ˈmentəl helθ/' },
        ]
    },

    // === THÁNG 4: Truyền thông và mạng xã hội ===
    media: {
        name: 'Truyền thông',
        level: 1,
        month: 4,
        words: [
            { en: 'Newspaper', vi: 'Báo', emoji: '📰', phonetic: '/ˈnjuːzpeɪpər/' },
            { en: 'Magazine', vi: 'Tạp chí', emoji: '📖', phonetic: '/ˌmæɡəˈziːn/' },
            { en: 'Television', vi: 'Truyền hình', emoji: '📺', phonetic: '/ˈtelɪvɪʒən/' },
            { en: 'Radio', vi: 'Đài phát thanh', emoji: '📻', phonetic: '/ˈreɪdioʊ/' },
            { en: 'Broadcast', vi: 'Phát sóng', emoji: '📡', phonetic: '/ˈbrɔːdkæst/' },
            { en: 'Headline', vi: 'Tiêu đề', emoji: '📋', phonetic: '/ˈhedlaɪn/' },
            { en: 'Reporter', vi: 'Phóng viên', emoji: '🎙️', phonetic: '/rɪˈpɔːrtər/' },
            { en: 'Article', vi: 'Bài viết', emoji: '📝', phonetic: '/ˈɑːrtɪkəl/' },
            { en: 'Advertisement', vi: 'Quảng cáo', emoji: '📢', phonetic: '/ˌædvərˈtaɪzmənt/' },
            { en: 'Audience', vi: 'Khán giả', emoji: '👥', phonetic: '/ˈɔːdiəns/' },
        ]
    },
    media_actions: {
        name: 'Hành động truyền thông',
        level: 1,
        month: 4,
        words: [
            { en: 'Subscribe', vi: 'Đăng ký', emoji: '🔔', phonetic: '/səbˈskraɪb/' },
            { en: 'Publish', vi: 'Xuất bản', emoji: '📤', phonetic: '/ˈpʌblɪʃ/' },
            { en: 'Share', vi: 'Chia sẻ', emoji: '🔗', phonetic: '/ʃer/' },
            { en: 'Comment', vi: 'Bình luận', emoji: '💬', phonetic: '/ˈkɒment/' },
            { en: 'Stream', vi: 'Phát trực tiếp', emoji: '🎥', phonetic: '/striːm/' },
            { en: 'Record', vi: 'Ghi hình', emoji: '⏺️', phonetic: '/rɪˈkɔːrd/' },
            { en: 'Edit', vi: 'Chỉnh sửa', emoji: '✂️', phonetic: '/ˈedɪt/' },
            { en: 'Interview', vi: 'Phỏng vấn', emoji: '🎤', phonetic: '/ˈɪntərvjuː/' },
            { en: 'Inform', vi: 'Thông báo', emoji: 'ℹ️', phonetic: '/ɪnˈfɔːrm/' },
            { en: 'Review', vi: 'Đánh giá', emoji: '⭐', phonetic: '/rɪˈvjuː/' },
        ]
    },

    // === THÁNG 5: Bảo vệ môi trường ===
    environment: {
        name: 'Môi trường',
        level: 2,
        month: 5,
        words: [
            { en: 'Pollution', vi: 'Ô nhiễm', emoji: '🏭', phonetic: '/pəˈluːʃən/' },
            { en: 'Deforestation', vi: 'Phá rừng', emoji: '🪓', phonetic: '/diːˌfɒrɪˈsteɪʃən/' },
            { en: 'Endangered', vi: 'Có nguy cơ tuyệt chủng', emoji: '🐼', phonetic: '/ɪnˈdeɪndʒərd/' },
            { en: 'Renewable', vi: 'Tái tạo được', emoji: '♻️', phonetic: '/rɪˈnjuːəbəl/' },
            { en: 'Solar energy', vi: 'Năng lượng mặt trời', emoji: '☀️', phonetic: '/ˈsoʊlər ˈenərdʒi/' },
            { en: 'Carbon footprint', vi: 'Dấu chân các-bon', emoji: '👣', phonetic: '/ˈkɑːrbən ˈfʊtprɪnt/' },
            { en: 'Greenhouse', vi: 'Nhà kính', emoji: '🏠', phonetic: '/ˈɡriːnhaʊs/' },
            { en: 'Wildlife', vi: 'Động vật hoang dã', emoji: '🦁', phonetic: '/ˈwaɪldlaɪf/' },
            { en: 'Biodiversity', vi: 'Đa dạng sinh học', emoji: '🌿', phonetic: '/ˌbaɪoʊdaɪˈvɜːrsɪti/' },
            { en: 'Sustainability', vi: 'Bền vững', emoji: '🌍', phonetic: '/səˌsteɪnəˈbɪlɪti/' },
        ]
    },
    environment_actions: {
        name: 'Hành động bảo vệ',
        level: 2,
        month: 5,
        words: [
            { en: 'Recycle', vi: 'Tái chế', emoji: '♻️', phonetic: '/riːˈsaɪkəl/' },
            { en: 'Reduce', vi: 'Giảm thiểu', emoji: '📉', phonetic: '/rɪˈdjuːs/' },
            { en: 'Reuse', vi: 'Tái sử dụng', emoji: '🔄', phonetic: '/riːˈjuːz/' },
            { en: 'Conserve', vi: 'Bảo tồn', emoji: '🌿', phonetic: '/kənˈsɜːrv/' },
            { en: 'Plant', vi: 'Trồng cây', emoji: '🌱', phonetic: '/plænt/' },
            { en: 'Clean up', vi: 'Dọn dẹp', emoji: '🧹', phonetic: '/kliːn ʌp/' },
            { en: 'Protect', vi: 'Bảo vệ', emoji: '🛡️', phonetic: '/prəˈtekt/' },
            { en: 'Preserve', vi: 'Gìn giữ', emoji: '💚', phonetic: '/prɪˈzɜːrv/' },
            { en: 'Compost', vi: 'Ủ phân', emoji: '🍂', phonetic: '/ˈkɒmpɒst/' },
            { en: 'Campaign', vi: 'Chiến dịch', emoji: '📢', phonetic: '/kæmˈpeɪn/' },
        ]
    },

    // === THÁNG 6: Văn hóa và phong tục ===
    culture: {
        name: 'Văn hóa',
        level: 2,
        month: 6,
        words: [
            { en: 'Heritage', vi: 'Di sản', emoji: '🏛️', phonetic: '/ˈherɪtɪdʒ/' },
            { en: 'Custom', vi: 'Phong tục', emoji: '🎎', phonetic: '/ˈkʌstəm/' },
            { en: 'Folklore', vi: 'Văn hóa dân gian', emoji: '📜', phonetic: '/ˈfoʊklɔːr/' },
            { en: 'Ceremony', vi: 'Nghi lễ', emoji: '🎊', phonetic: '/ˈserɪmoʊni/' },
            { en: 'Ancestor', vi: 'Tổ tiên', emoji: '👴', phonetic: '/ˈænsestər/' },
            { en: 'Diversity', vi: 'Sự đa dạng', emoji: '🌈', phonetic: '/daɪˈvɜːrsɪti/' },
            { en: 'Religion', vi: 'Tôn giáo', emoji: '🕊️', phonetic: '/rɪˈlɪdʒən/' },
            { en: 'Language', vi: 'Ngôn ngữ', emoji: '🗣️', phonetic: '/ˈlæŋɡwɪdʒ/' },
            { en: 'Symbol', vi: 'Biểu tượng', emoji: '🔣', phonetic: '/ˈsɪmbəl/' },
            { en: 'Identity', vi: 'Bản sắc', emoji: '🪪', phonetic: '/aɪˈdentɪti/' },
        ]
    },
    culture_items: {
        name: 'Văn hóa vật thể',
        level: 2,
        month: 6,
        words: [
            { en: 'Temple', vi: 'Ngôi đền', emoji: '⛩️', phonetic: '/ˈtempəl/' },
            { en: 'Pagoda', vi: 'Chùa', emoji: '🛕', phonetic: '/pəˈɡoʊdə/' },
            { en: 'Sculpture', vi: 'Tác phẩm điêu khắc', emoji: '🗿', phonetic: '/ˈskʌlptʃər/' },
            { en: 'Pottery', vi: 'Đồ gốm', emoji: '🏺', phonetic: '/ˈpɒtəri/' },
            { en: 'Silk', vi: 'Lụa', emoji: '🧵', phonetic: '/sɪlk/' },
            { en: 'Lantern', vi: 'Đèn lồng', emoji: '🏮', phonetic: '/ˈlæntərn/' },
            { en: 'Calligraphy', vi: 'Thư pháp', emoji: '✍️', phonetic: '/kəˈlɪɡrəfi/' },
            { en: 'Handicraft', vi: 'Đồ thủ công', emoji: '🧶', phonetic: '/ˈhændikræft/' },
            { en: 'Costume', vi: 'Trang phục truyền thống', emoji: '👘', phonetic: '/ˈkɒstjuːm/' },
            { en: 'Artifact', vi: 'Hiện vật', emoji: '🏺', phonetic: '/ˈɑːrtɪfækt/' },
        ]
    },

    // === THÁNG 7: Lịch sử thú vị ===
    history: {
        name: 'Lịch sử',
        level: 2,
        month: 7,
        words: [
            { en: 'Ancient', vi: 'Cổ đại', emoji: '🏛️', phonetic: '/ˈeɪnʃənt/' },
            { en: 'Medieval', vi: 'Trung cổ', emoji: '🏰', phonetic: '/ˌmediˈiːvəl/' },
            { en: 'Modern', vi: 'Hiện đại', emoji: '🏙️', phonetic: '/ˈmɒdərn/' },
            { en: 'Dynasty', vi: 'Triều đại', emoji: '👑', phonetic: '/ˈdaɪnəsti/' },
            { en: 'Empire', vi: 'Đế chế', emoji: '🏰', phonetic: '/ˈempaɪər/' },
            { en: 'Revolution', vi: 'Cách mạng', emoji: '✊', phonetic: '/ˌrevəˈluːʃən/' },
            { en: 'Discovery', vi: 'Khám phá', emoji: '🔍', phonetic: '/dɪˈskʌvəri/' },
            { en: 'Civilization', vi: 'Nền văn minh', emoji: '🌐', phonetic: '/ˌsɪvɪlaɪˈzeɪʃən/' },
            { en: 'Artifact', vi: 'Hiện vật lịch sử', emoji: '🏺', phonetic: '/ˈɑːrtɪfækt/' },
            { en: 'Chronicle', vi: 'Biên niên sử', emoji: '📜', phonetic: '/ˈkrɒnɪkəl/' },
        ]
    },
    history_people: {
        name: 'Nhân vật lịch sử',
        level: 2,
        month: 7,
        words: [
            { en: 'King', vi: 'Vua', emoji: '👑', phonetic: '/kɪŋ/' },
            { en: 'Queen', vi: 'Nữ hoàng', emoji: '👸', phonetic: '/kwiːn/' },
            { en: 'Emperor', vi: 'Hoàng đế', emoji: '🤴', phonetic: '/ˈempərər/' },
            { en: 'Warrior', vi: 'Chiến binh', emoji: '⚔️', phonetic: '/ˈwɒriər/' },
            { en: 'Explorer', vi: 'Nhà thám hiểm', emoji: '🧭', phonetic: '/ɪkˈsplɔːrər/' },
            { en: 'Inventor', vi: 'Nhà phát minh', emoji: '💡', phonetic: '/ɪnˈventər/' },
            { en: 'Philosopher', vi: 'Nhà triết học', emoji: '🤔', phonetic: '/fɪˈlɒsəfər/' },
            { en: 'Hero', vi: 'Anh hùng', emoji: '🦸', phonetic: '/ˈhɪroʊ/' },
            { en: 'Leader', vi: 'Nhà lãnh đạo', emoji: '🧑‍💼', phonetic: '/ˈliːdər/' },
            { en: 'Pioneer', vi: 'Người tiên phong', emoji: '🚀', phonetic: '/ˌpaɪəˈnɪr/' },
        ]
    },

    // === THÁNG 8: Kinh tế đơn giản ===
    economy: {
        name: 'Kinh tế',
        level: 2,
        month: 8,
        words: [
            { en: 'Market', vi: 'Thị trường', emoji: '📊', phonetic: '/ˈmɑːrkɪt/' },
            { en: 'Trade', vi: 'Thương mại', emoji: '🤝', phonetic: '/treɪd/' },
            { en: 'Export', vi: 'Xuất khẩu', emoji: '📦', phonetic: '/ɪkˈspɔːrt/' },
            { en: 'Import', vi: 'Nhập khẩu', emoji: '📥', phonetic: '/ɪmˈpɔːrt/' },
            { en: 'Currency', vi: 'Tiền tệ', emoji: '💱', phonetic: '/ˈkʌrənsi/' },
            { en: 'Budget', vi: 'Ngân sách', emoji: '💵', phonetic: '/ˈbʌdʒɪt/' },
            { en: 'Investment', vi: 'Đầu tư', emoji: '📈', phonetic: '/ɪnˈvestmənt/' },
            { en: 'Profit', vi: 'Lợi nhuận', emoji: '💰', phonetic: '/ˈprɒfɪt/' },
            { en: 'Tax', vi: 'Thuế', emoji: '🏦', phonetic: '/tæks/' },
            { en: 'Industry', vi: 'Ngành công nghiệp', emoji: '🏭', phonetic: '/ˈɪndəstri/' },
        ]
    },
    economy_actions: {
        name: 'Hành động kinh tế',
        level: 2,
        month: 8,
        words: [
            { en: 'Produce', vi: 'Sản xuất', emoji: '🏭', phonetic: '/prəˈdjuːs/' },
            { en: 'Consume', vi: 'Tiêu thụ', emoji: '🛒', phonetic: '/kənˈsjuːm/' },
            { en: 'Distribute', vi: 'Phân phối', emoji: '🚚', phonetic: '/dɪˈstrɪbjuːt/' },
            { en: 'Advertise', vi: 'Quảng cáo', emoji: '📢', phonetic: '/ˈædvərtaɪz/' },
            { en: 'Negotiate', vi: 'Đàm phán', emoji: '🤝', phonetic: '/nɪˈɡoʊʃieɪt/' },
            { en: 'Manufacture', vi: 'Chế tạo', emoji: '⚙️', phonetic: '/ˌmænjuˈfæktʃər/' },
            { en: 'Supply', vi: 'Cung cấp', emoji: '📦', phonetic: '/səˈplaɪ/' },
            { en: 'Demand', vi: 'Nhu cầu', emoji: '📊', phonetic: '/dɪˈmænd/' },
            { en: 'Compete', vi: 'Cạnh tranh', emoji: '🏁', phonetic: '/kəmˈpiːt/' },
            { en: 'Borrow', vi: 'Vay mượn', emoji: '🏦', phonetic: '/ˈbɒroʊ/' },
        ]
    },

    // === THÁNG 9: Kiến trúc quanh em ===
    architecture: {
        name: 'Kiến trúc',
        level: 3,
        month: 9,
        words: [
            { en: 'Building', vi: 'Tòa nhà', emoji: '🏢', phonetic: '/ˈbɪldɪŋ/' },
            { en: 'Bridge', vi: 'Cầu', emoji: '🌉', phonetic: '/brɪdʒ/' },
            { en: 'Tower', vi: 'Tháp', emoji: '🗼', phonetic: '/ˈtaʊər/' },
            { en: 'Skyscraper', vi: 'Nhà chọc trời', emoji: '🏙️', phonetic: '/ˈskaɪskreɪpər/' },
            { en: 'Monument', vi: 'Đài tưởng niệm', emoji: '🗿', phonetic: '/ˈmɒnjumənt/' },
            { en: 'Cathedral', vi: 'Nhà thờ lớn', emoji: '⛪', phonetic: '/kəˈθiːdrəl/' },
            { en: 'Palace', vi: 'Cung điện', emoji: '🏰', phonetic: '/ˈpælɪs/' },
            { en: 'Pyramid', vi: 'Kim tự tháp', emoji: '🔺', phonetic: '/ˈpɪrəmɪd/' },
            { en: 'Dome', vi: 'Mái vòm', emoji: '🕌', phonetic: '/doʊm/' },
            { en: 'Foundation', vi: 'Nền móng', emoji: '🧱', phonetic: '/faʊnˈdeɪʃən/' },
        ]
    },
    architecture_styles: {
        name: 'Phong cách kiến trúc',
        level: 3,
        month: 9,
        words: [
            { en: 'Design', vi: 'Thiết kế', emoji: '📐', phonetic: '/dɪˈzaɪn/' },
            { en: 'Structure', vi: 'Cấu trúc', emoji: '🏗️', phonetic: '/ˈstrʌktʃər/' },
            { en: 'Column', vi: 'Cột trụ', emoji: '🏛️', phonetic: '/ˈkɒləm/' },
            { en: 'Arch', vi: 'Vòm cung', emoji: '🌉', phonetic: '/ɑːrtʃ/' },
            { en: 'Balcony', vi: 'Ban công', emoji: '🏠', phonetic: '/ˈbælkəni/' },
            { en: 'Staircase', vi: 'Cầu thang', emoji: '🪜', phonetic: '/ˈsterkeɪs/' },
            { en: 'Corridor', vi: 'Hành lang', emoji: '🚪', phonetic: '/ˈkɒrɪdɔːr/' },
            { en: 'Renovation', vi: 'Cải tạo', emoji: '🔨', phonetic: '/ˌrenəˈveɪʃən/' },
            { en: 'Blueprint', vi: 'Bản thiết kế', emoji: '📝', phonetic: '/ˈbluːprɪnt/' },
            { en: 'Landscape', vi: 'Cảnh quan', emoji: '🌳', phonetic: '/ˈlændskeɪp/' },
        ]
    },

    // === THÁNG 10: Quyền và nghĩa vụ ===
    law: {
        name: 'Pháp luật',
        level: 3,
        month: 10,
        words: [
            { en: 'Law', vi: 'Luật pháp', emoji: '⚖️', phonetic: '/lɔː/' },
            { en: 'Rule', vi: 'Quy tắc', emoji: '📏', phonetic: '/ruːl/' },
            { en: 'Justice', vi: 'Công lý', emoji: '⚖️', phonetic: '/ˈdʒʌstɪs/' },
            { en: 'Court', vi: 'Tòa án', emoji: '🏛️', phonetic: '/kɔːrt/' },
            { en: 'Judge', vi: 'Thẩm phán', emoji: '👨‍⚖️', phonetic: '/dʒʌdʒ/' },
            { en: 'Witness', vi: 'Nhân chứng', emoji: '👁️', phonetic: '/ˈwɪtnəs/' },
            { en: 'Evidence', vi: 'Bằng chứng', emoji: '🔍', phonetic: '/ˈevɪdəns/' },
            { en: 'Punishment', vi: 'Hình phạt', emoji: '⛔', phonetic: '/ˈpʌnɪʃmənt/' },
            { en: 'Contract', vi: 'Hợp đồng', emoji: '📄', phonetic: '/ˈkɒntrækt/' },
            { en: 'Constitution', vi: 'Hiến pháp', emoji: '📜', phonetic: '/ˌkɒnstɪˈtjuːʃən/' },
        ]
    },
    law_rights: {
        name: 'Quyền con người',
        level: 3,
        month: 10,
        words: [
            { en: 'Freedom', vi: 'Tự do', emoji: '🕊️', phonetic: '/ˈfriːdəm/' },
            { en: 'Equality', vi: 'Bình đẳng', emoji: '⚖️', phonetic: '/ɪˈkwɒlɪti/' },
            { en: 'Education', vi: 'Giáo dục', emoji: '🎓', phonetic: '/ˌedʒuˈkeɪʃən/' },
            { en: 'Privacy', vi: 'Quyền riêng tư', emoji: '🔒', phonetic: '/ˈpraɪvəsi/' },
            { en: 'Safety', vi: 'An toàn', emoji: '🛡️', phonetic: '/ˈseɪfti/' },
            { en: 'Respect', vi: 'Tôn trọng', emoji: '🙏', phonetic: '/rɪˈspekt/' },
            { en: 'Responsibility', vi: 'Trách nhiệm', emoji: '✅', phonetic: '/rɪˌspɒnsɪˈbɪlɪti/' },
            { en: 'Citizen', vi: 'Công dân', emoji: '🧑', phonetic: '/ˈsɪtɪzən/' },
            { en: 'Vote', vi: 'Bỏ phiếu', emoji: '🗳️', phonetic: '/voʊt/' },
            { en: 'Democracy', vi: 'Dân chủ', emoji: '🏛️', phonetic: '/dɪˈmɒkrəsi/' },
        ]
    },

    // === THÁNG 11: Tư duy và sáng tạo ===
    philosophy: {
        name: 'Tư duy',
        level: 3,
        month: 11,
        words: [
            { en: 'Wisdom', vi: 'Trí tuệ', emoji: '🦉', phonetic: '/ˈwɪzdəm/' },
            { en: 'Logic', vi: 'Logic', emoji: '🧠', phonetic: '/ˈlɒdʒɪk/' },
            { en: 'Reason', vi: 'Lý do', emoji: '💡', phonetic: '/ˈriːzən/' },
            { en: 'Theory', vi: 'Lý thuyết', emoji: '📖', phonetic: '/ˈθɪəri/' },
            { en: 'Hypothesis', vi: 'Giả thuyết', emoji: '🤔', phonetic: '/haɪˈpɒθəsɪs/' },
            { en: 'Debate', vi: 'Tranh luận', emoji: '🗣️', phonetic: '/dɪˈbeɪt/' },
            { en: 'Argument', vi: 'Lập luận', emoji: '💬', phonetic: '/ˈɑːrɡjumənt/' },
            { en: 'Conclusion', vi: 'Kết luận', emoji: '🏁', phonetic: '/kənˈkluːʒən/' },
            { en: 'Perspective', vi: 'Góc nhìn', emoji: '👁️', phonetic: '/pərˈspektɪv/' },
            { en: 'Critical thinking', vi: 'Tư duy phản biện', emoji: '🧐', phonetic: '/ˈkrɪtɪkəl ˈθɪŋkɪŋ/' },
        ]
    },
    philosophy_values: {
        name: 'Giá trị sống',
        level: 3,
        month: 11,
        words: [
            { en: 'Honesty', vi: 'Trung thực', emoji: '💎', phonetic: '/ˈɒnɪsti/' },
            { en: 'Kindness', vi: 'Lòng tốt', emoji: '💛', phonetic: '/ˈkaɪndnəs/' },
            { en: 'Patience', vi: 'Kiên nhẫn', emoji: '⏳', phonetic: '/ˈpeɪʃəns/' },
            { en: 'Courage', vi: 'Lòng dũng cảm', emoji: '🦁', phonetic: '/ˈkʌrɪdʒ/' },
            { en: 'Empathy', vi: 'Sự đồng cảm', emoji: '🤝', phonetic: '/ˈempəθi/' },
            { en: 'Integrity', vi: 'Chính trực', emoji: '✨', phonetic: '/ɪnˈteɡrɪti/' },
            { en: 'Perseverance', vi: 'Sự kiên trì', emoji: '💪', phonetic: '/ˌpɜːrsɪˈvɪrəns/' },
            { en: 'Gratitude', vi: 'Lòng biết ơn', emoji: '🙏', phonetic: '/ˈɡrætɪtjuːd/' },
            { en: 'Compassion', vi: 'Lòng trắc ẩn', emoji: '❤️', phonetic: '/kəmˈpæʃən/' },
            { en: 'Tolerance', vi: 'Sự khoan dung', emoji: '🌈', phonetic: '/ˈtɒlərəns/' },
        ]
    },

    // === THÁNG 12: Tổng ôn tập ===
    review_all_5a: {
        name: 'Ôn tập tổng hợp A',
        level: 3,
        month: 12,
        words: [
            { en: 'Global', vi: 'Toàn cầu', emoji: '🌍', phonetic: '/ˈɡloʊbəl/' },
            { en: 'Generation', vi: 'Thế hệ', emoji: '👨‍👩‍👧‍👦', phonetic: '/ˌdʒenəˈreɪʃən/' },
            { en: 'Innovation', vi: 'Đổi mới', emoji: '💡', phonetic: '/ˌɪnəˈveɪʃən/' },
            { en: 'Technology', vi: 'Công nghệ', emoji: '💻', phonetic: '/tekˈnɒlədʒi/' },
            { en: 'Achievement', vi: 'Thành tựu', emoji: '🏆', phonetic: '/əˈtʃiːvmənt/' },
            { en: 'Opportunity', vi: 'Cơ hội', emoji: '🚪', phonetic: '/ˌɒpərˈtjuːnɪti/' },
            { en: 'Challenge', vi: 'Thử thách', emoji: '🎯', phonetic: '/ˈtʃælɪndʒ/' },
            { en: 'Solution', vi: 'Giải pháp', emoji: '🔑', phonetic: '/səˈluːʃən/' },
            { en: 'Community', vi: 'Cộng đồng', emoji: '🏘️', phonetic: '/kəˈmjuːnɪti/' },
            { en: 'Future', vi: 'Tương lai', emoji: '🔮', phonetic: '/ˈfjuːtʃər/' },
        ]
    },
    review_all_5b: {
        name: 'Ôn tập tổng hợp B',
        level: 3,
        month: 12,
        words: [
            { en: 'Cooperation', vi: 'Hợp tác', emoji: '🤝', phonetic: '/koʊˌɒpəˈreɪʃən/' },
            { en: 'Communication', vi: 'Giao tiếp', emoji: '💬', phonetic: '/kəˌmjuːnɪˈkeɪʃən/' },
            { en: 'Confidence', vi: 'Sự tự tin', emoji: '💪', phonetic: '/ˈkɒnfɪdəns/' },
            { en: 'Determination', vi: 'Sự quyết tâm', emoji: '🎯', phonetic: '/dɪˌtɜːrmɪˈneɪʃən/' },
            { en: 'Inspiration', vi: 'Cảm hứng', emoji: '✨', phonetic: '/ˌɪnspɪˈreɪʃən/' },
            { en: 'Independence', vi: 'Sự độc lập', emoji: '🗽', phonetic: '/ˌɪndɪˈpendəns/' },
            { en: 'Progress', vi: 'Tiến bộ', emoji: '📈', phonetic: '/ˈprɒɡres/' },
            { en: 'Tradition', vi: 'Truyền thống', emoji: '🏮', phonetic: '/trəˈdɪʃən/' },
            { en: 'Harmony', vi: 'Hài hòa', emoji: '☯️', phonetic: '/ˈhɑːrməni/' },
            { en: 'Celebration', vi: 'Sự kỉ niệm', emoji: '🎉', phonetic: '/ˌselɪˈbreɪʃən/' },
        ]
    },
};

// ============================================
// PHONICS - PHÁT ÂM NÂNG CAO
// ============================================
GRADE_DATA[5].phonics = [
    { letter: 'OUGH', sound: '/ʌf/', words: [
        { word: 'Enough', highlight: 'ough', emoji: '✅' },
        { word: 'Rough', highlight: 'ough', emoji: '🪨' },
        { word: 'Tough', highlight: 'ough', emoji: '💪' }
    ]},
    { letter: 'OUGH', sound: '/oʊ/', words: [
        { word: 'Though', highlight: 'ough', emoji: '🤔' },
        { word: 'Dough', highlight: 'ough', emoji: '🍞' },
        { word: 'Although', highlight: 'ough', emoji: '↩️' }
    ]},
    { letter: 'TION', sound: '/ʃən/', words: [
        { word: 'Education', highlight: 'tion', emoji: '🎓' },
        { word: 'Revolution', highlight: 'tion', emoji: '✊' },
        { word: 'Pollution', highlight: 'tion', emoji: '🏭' }
    ]},
    { letter: 'SION', sound: '/ʒən/', words: [
        { word: 'Television', highlight: 'sion', emoji: '📺' },
        { word: 'Decision', highlight: 'sion', emoji: '🤔' },
        { word: 'Conclusion', highlight: 'sion', emoji: '🏁' }
    ]},
    { letter: 'TURE', sound: '/tʃər/', words: [
        { word: 'Culture', highlight: 'ture', emoji: '🎭' },
        { word: 'Architecture', highlight: 'ture', emoji: '🏛️' },
        { word: 'Adventure', highlight: 'ture', emoji: '🗺️' }
    ]},
    { letter: 'MENT', sound: '/mənt/', words: [
        { word: 'Environment', highlight: 'ment', emoji: '🌍' },
        { word: 'Achievement', highlight: 'ment', emoji: '🏆' },
        { word: 'Investment', highlight: 'ment', emoji: '📈' }
    ]},
    { letter: 'NESS', sound: '/nəs/', words: [
        { word: 'Kindness', highlight: 'ness', emoji: '💛' },
        { word: 'Fitness', highlight: 'ness', emoji: '💪' },
        { word: 'Wilderness', highlight: 'ness', emoji: '🌲' }
    ]},
    { letter: 'ABLE', sound: '/əbəl/', words: [
        { word: 'Renewable', highlight: 'able', emoji: '♻️' },
        { word: 'Comfortable', highlight: 'able', emoji: '🛋️' },
        { word: 'Sustainable', highlight: 'able', emoji: '🌍' }
    ]},
    { letter: 'IBLE', sound: '/ɪbəl/', words: [
        { word: 'Responsible', highlight: 'ible', emoji: '✅' },
        { word: 'Possible', highlight: 'ible', emoji: '💫' },
        { word: 'Invisible', highlight: 'ible', emoji: '👻' }
    ]},
    { letter: 'ANCE', sound: '/əns/', words: [
        { word: 'Tolerance', highlight: 'ance', emoji: '🌈' },
        { word: 'Performance', highlight: 'ance', emoji: '🎭' },
        { word: 'Ambulance', highlight: 'ance', emoji: '🚑' }
    ]},
    { letter: 'ENCE', sound: '/əns/', words: [
        { word: 'Evidence', highlight: 'ence', emoji: '🔍' },
        { word: 'Independence', highlight: 'ence', emoji: '🗽' },
        { word: 'Confidence', highlight: 'ence', emoji: '💪' }
    ]},
    { letter: 'IOUS', sound: '/iəs/', words: [
        { word: 'Curious', highlight: 'ious', emoji: '🤔' },
        { word: 'Serious', highlight: 'ious', emoji: '😐' },
        { word: 'Previous', highlight: 'ious', emoji: '⬅️' }
    ]},
    { letter: 'EOUS', sound: '/iəs/', words: [
        { word: 'Courageous', highlight: 'eous', emoji: '🦁' },
        { word: 'Gorgeous', highlight: 'eous', emoji: '✨' },
        { word: 'Advantageous', highlight: 'eous', emoji: '👍' }
    ]},
    { letter: 'IGHT', sound: '/aɪt/', words: [
        { word: 'Highlight', highlight: 'ight', emoji: '🌟' },
        { word: 'Midnight', highlight: 'ight', emoji: '🌙' },
        { word: 'Copyright', highlight: 'ight', emoji: '©️' }
    ]},
    { letter: 'OLOGY', sound: '/ɒlədʒi/', words: [
        { word: 'Technology', highlight: 'ology', emoji: '💻' },
        { word: 'Biology', highlight: 'ology', emoji: '🧬' },
        { word: 'Ecology', highlight: 'ology', emoji: '🌿' }
    ]},
];

// ============================================
// CÂU MẪU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[5].sentences = {
    level1: [
        { sentence: ['I', 'packed', 'my', 'luggage', 'for', 'the', 'trip'], emoji: '🧳', vi: 'Tôi đã đóng hành lý cho chuyến đi', extra: ['unpacked', 'a'] },
        { sentence: ['The', 'engineer', 'designed', 'a', 'new', 'bridge'], emoji: '🌉', vi: 'Kỹ sư đã thiết kế một cây cầu mới', extra: ['old', 'the'] },
        { sentence: ['We', 'should', 'exercise', 'every', 'day'], emoji: '🏋️', vi: 'Chúng ta nên tập thể dục mỗi ngày', extra: ['never', 'a'] },
        { sentence: ['The', 'reporter', 'wrote', 'an', 'interesting', 'article'], emoji: '📝', vi: 'Phóng viên đã viết một bài báo thú vị', extra: ['boring', 'the'] },
        { sentence: ['She', 'wants', 'to', 'become', 'an', 'astronaut'], emoji: '🧑‍🚀', vi: 'Cô ấy muốn trở thành phi hành gia', extra: ['was', 'the'] },
        { sentence: ['The', 'tourist', 'bought', 'many', 'souvenirs'], emoji: '🎁', vi: 'Khách du lịch mua nhiều quà lưu niệm', extra: ['sold', 'a'] },
        { sentence: ['Good', 'hygiene', 'keeps', 'us', 'healthy'], emoji: '🧼', vi: 'Vệ sinh tốt giữ chúng ta khỏe mạnh', extra: ['sick', 'the'] },
        { sentence: ['He', 'reads', 'the', 'newspaper', 'every', 'morning'], emoji: '📰', vi: 'Anh ấy đọc báo mỗi sáng', extra: ['night', 'a'] },
    ],
    level2: [
        { sentence: ['Pollution', 'is', 'a', 'serious', 'problem', 'in', 'many', 'cities'], emoji: '🏭', vi: 'Ô nhiễm là vấn đề nghiêm trọng ở nhiều thành phố', extra: ['small', 'the'] },
        { sentence: ['The', 'ancient', 'temple', 'was', 'built', 'five', 'hundred', 'years', 'ago'], emoji: '⛩️', vi: 'Ngôi đền cổ được xây năm trăm năm trước', extra: ['modern', 'a'] },
        { sentence: ['We', 'must', 'reduce', 'our', 'carbon', 'footprint'], emoji: '👣', vi: 'Chúng ta phải giảm dấu chân các-bon', extra: ['increase', 'the'] },
        { sentence: ['The', 'emperor', 'ruled', 'a', 'powerful', 'empire'], emoji: '🏰', vi: 'Hoàng đế cai trị một đế chế hùng mạnh', extra: ['weak', 'the'] },
        { sentence: ['Many', 'countries', 'export', 'and', 'import', 'goods', 'daily'], emoji: '📦', vi: 'Nhiều quốc gia xuất nhập khẩu hàng hóa hàng ngày', extra: ['never', 'the'] },
        { sentence: ['The', 'heritage', 'site', 'attracts', 'millions', 'of', 'tourists'], emoji: '🏛️', vi: 'Di sản thu hút hàng triệu khách du lịch', extra: ['repels', 'a'] },
        { sentence: ['Solar', 'energy', 'is', 'a', 'renewable', 'resource'], emoji: '☀️', vi: 'Năng lượng mặt trời là nguồn tài nguyên tái tạo', extra: ['limited', 'the'] },
        { sentence: ['The', 'inventor', 'created', 'a', 'machine', 'that', 'changed', 'history'], emoji: '💡', vi: 'Nhà phát minh đã tạo ra cỗ máy thay đổi lịch sử', extra: ['destroyed', 'an'] },
    ],
    level3: [
        { sentence: ['Critical', 'thinking', 'helps', 'us', 'make', 'better', 'decisions'], emoji: '🧐', vi: 'Tư duy phản biện giúp chúng ta đưa ra quyết định tốt hơn', extra: ['worse', 'a'] },
        { sentence: ['The', 'constitution', 'protects', 'the', 'rights', 'of', 'every', 'citizen'], emoji: '📜', vi: 'Hiến pháp bảo vệ quyền lợi của mọi công dân', extra: ['ignores', 'a'] },
        { sentence: ['Perseverance', 'and', 'patience', 'are', 'important', 'values', 'in', 'life'], emoji: '💪', vi: 'Kiên trì và kiên nhẫn là giá trị quan trọng trong cuộc sống', extra: ['useless', 'the'] },
        { sentence: ['The', 'skyscraper', 'has', 'an', 'amazing', 'architectural', 'design'], emoji: '🏙️', vi: 'Nhà chọc trời có thiết kế kiến trúc tuyệt vời', extra: ['terrible', 'a'] },
        { sentence: ['Biodiversity', 'is', 'essential', 'for', 'a', 'healthy', 'ecosystem'], emoji: '🌿', vi: 'Đa dạng sinh học là thiết yếu cho hệ sinh thái khỏe mạnh', extra: ['unnecessary', 'the'] },
        { sentence: ['Democracy', 'gives', 'people', 'the', 'right', 'to', 'vote'], emoji: '🗳️', vi: 'Dân chủ cho mọi người quyền bỏ phiếu', extra: ['prevents', 'a'] },
    ],
};

// ============================================
// SPELLING THEO CẤP ĐỘ
// ============================================
GRADE_DATA[5].spelling = {
    level1: [
        { word: 'PASSPORT', emoji: '🛂', vi: 'Hộ chiếu' },
        { word: 'LUGGAGE', emoji: '🧳', vi: 'Hành lý' },
        { word: 'TOURIST', emoji: '🧑‍🦰', vi: 'Khách du lịch' },
        { word: 'ENGINEER', emoji: '👷', vi: 'Kỹ sư' },
        { word: 'LAWYER', emoji: '⚖️', vi: 'Luật sư' },
        { word: 'VITAMIN', emoji: '💊', vi: 'Vitamin' },
        { word: 'HYGIENE', emoji: '🧼', vi: 'Vệ sinh' },
        { word: 'SYMPTOM', emoji: '🤒', vi: 'Triệu chứng' },
        { word: 'ARTICLE', emoji: '📝', vi: 'Bài viết' },
        { word: 'HEADLINE', emoji: '📋', vi: 'Tiêu đề' },
        { word: 'JOURNEY', emoji: '🛤️', vi: 'Hành trình' },
        { word: 'CAMPING', emoji: '⛺', vi: 'Cắm trại' },
    ],
    level2: [
        { word: 'POLLUTION', emoji: '🏭', vi: 'Ô nhiễm' },
        { word: 'HERITAGE', emoji: '🏛️', vi: 'Di sản' },
        { word: 'FOLKLORE', emoji: '📜', vi: 'Văn hóa dân gian' },
        { word: 'MEDIEVAL', emoji: '🏰', vi: 'Trung cổ' },
        { word: 'DYNASTY', emoji: '👑', vi: 'Triều đại' },
        { word: 'CURRENCY', emoji: '💱', vi: 'Tiền tệ' },
        { word: 'INDUSTRY', emoji: '🏭', vi: 'Ngành công nghiệp' },
        { word: 'ANCESTOR', emoji: '👴', vi: 'Tổ tiên' },
        { word: 'EMPEROR', emoji: '🤴', vi: 'Hoàng đế' },
        { word: 'RENEWABLE', emoji: '♻️', vi: 'Tái tạo được' },
        { word: 'WILDLIFE', emoji: '🦁', vi: 'Động vật hoang dã' },
        { word: 'MONUMENT', emoji: '🗿', vi: 'Đài tưởng niệm' },
    ],
    level3: [
        { word: 'SKYSCRAPER', emoji: '🏙️', vi: 'Nhà chọc trời' },
        { word: 'CATHEDRAL', emoji: '⛪', vi: 'Nhà thờ lớn' },
        { word: 'DEMOCRACY', emoji: '🏛️', vi: 'Dân chủ' },
        { word: 'CONSTITUTION', emoji: '📜', vi: 'Hiến pháp' },
        { word: 'PERSPECTIVE', emoji: '👁️', vi: 'Góc nhìn' },
        { word: 'HYPOTHESIS', emoji: '🤔', vi: 'Giả thuyết' },
        { word: 'PERSEVERANCE', emoji: '💪', vi: 'Sự kiên trì' },
        { word: 'COMPASSION', emoji: '❤️', vi: 'Lòng trắc ẩn' },
        { word: 'BIODIVERSITY', emoji: '🌿', vi: 'Đa dạng sinh học' },
        { word: 'SUSTAINABILITY', emoji: '🌍', vi: 'Bền vững' },
        { word: 'CIVILIZATION', emoji: '🌐', vi: 'Nền văn minh' },
        { word: 'INDEPENDENCE', emoji: '🗽', vi: 'Sự độc lập' },
    ],
};

// ============================================
// NGHE HIỂU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[5].listening = {
    level1: [
        { word: 'Passport', options: [{ emoji: '🛂', label: 'Passport' }, { emoji: '🎫', label: 'Ticket' }, { emoji: '🗺️', label: 'Map' }, { emoji: '🧳', label: 'Luggage' }], correct: 0 },
        { word: 'Engineer', options: [{ emoji: '👨‍⚕️', label: 'Doctor' }, { emoji: '👷', label: 'Engineer' }, { emoji: '👨‍🍳', label: 'Chef' }, { emoji: '👩‍🏫', label: 'Teacher' }], correct: 1 },
        { word: 'Vaccine', options: [{ emoji: '💊', label: 'Medicine' }, { emoji: '🩺', label: 'Checkup' }, { emoji: '💉', label: 'Vaccine' }, { emoji: '🤧', label: 'Allergy' }], correct: 2 },
        { word: 'Television', options: [{ emoji: '📻', label: 'Radio' }, { emoji: '📰', label: 'Newspaper' }, { emoji: '📖', label: 'Magazine' }, { emoji: '📺', label: 'Television' }], correct: 3 },
        { word: 'Camping', options: [{ emoji: '⛺', label: 'Camping' }, { emoji: '🤿', label: 'Snorkeling' }, { emoji: '🥾', label: 'Hiking' }, { emoji: '📸', label: 'Photography' }], correct: 0 },
        { word: 'Astronaut', options: [{ emoji: '👷', label: 'Engineer' }, { emoji: '🧑‍🚀', label: 'Astronaut' }, { emoji: '🧑‍🚒', label: 'Firefighter' }, { emoji: '⚖️', label: 'Lawyer' }], correct: 1 },
        { word: 'Hygiene', options: [{ emoji: '💪', label: 'Fitness' }, { emoji: '🏋️', label: 'Exercise' }, { emoji: '🧼', label: 'Hygiene' }, { emoji: '💊', label: 'Vitamin' }], correct: 2 },
        { word: 'Souvenir', options: [{ emoji: '🎫', label: 'Ticket' }, { emoji: '🗺️', label: 'Map' }, { emoji: '🏨', label: 'Hotel' }, { emoji: '🎁', label: 'Souvenir' }], correct: 3 },
    ],
    level2: [
        { word: 'Pollution', options: [{ emoji: '🏭', label: 'Pollution' }, { emoji: '♻️', label: 'Recycle' }, { emoji: '🌱', label: 'Plant' }, { emoji: '🧹', label: 'Clean up' }], correct: 0 },
        { word: 'Temple', options: [{ emoji: '🏰', label: 'Palace' }, { emoji: '⛩️', label: 'Temple' }, { emoji: '⛪', label: 'Cathedral' }, { emoji: '🕌', label: 'Dome' }], correct: 1 },
        { word: 'Dynasty', options: [{ emoji: '✊', label: 'Revolution' }, { emoji: '🏰', label: 'Empire' }, { emoji: '👑', label: 'Dynasty' }, { emoji: '🌐', label: 'Civilization' }], correct: 2 },
        { word: 'Industry', options: [{ emoji: '📊', label: 'Market' }, { emoji: '💱', label: 'Currency' }, { emoji: '💰', label: 'Profit' }, { emoji: '🏭', label: 'Industry' }], correct: 3 },
        { word: 'Heritage', options: [{ emoji: '🏛️', label: 'Heritage' }, { emoji: '📜', label: 'Folklore' }, { emoji: '🎎', label: 'Custom' }, { emoji: '🎊', label: 'Ceremony' }], correct: 0 },
        { word: 'Emperor', options: [{ emoji: '⚔️', label: 'Warrior' }, { emoji: '🤴', label: 'Emperor' }, { emoji: '👸', label: 'Queen' }, { emoji: '🦸', label: 'Hero' }], correct: 1 },
        { word: 'Sculpture', options: [{ emoji: '🏺', label: 'Pottery' }, { emoji: '🧵', label: 'Silk' }, { emoji: '🗿', label: 'Sculpture' }, { emoji: '✍️', label: 'Calligraphy' }], correct: 2 },
        { word: 'Biodiversity', options: [{ emoji: '🏭', label: 'Pollution' }, { emoji: '👣', label: 'Carbon footprint' }, { emoji: '☀️', label: 'Solar energy' }, { emoji: '🌿', label: 'Biodiversity' }], correct: 3 },
    ],
    level3: [
        { word: 'Skyscraper', options: [{ emoji: '🏙️', label: 'Skyscraper' }, { emoji: '🌉', label: 'Bridge' }, { emoji: '🗼', label: 'Tower' }, { emoji: '🏰', label: 'Palace' }], correct: 0 },
        { word: 'Constitution', options: [{ emoji: '⚖️', label: 'Justice' }, { emoji: '📜', label: 'Constitution' }, { emoji: '📄', label: 'Contract' }, { emoji: '📏', label: 'Rule' }], correct: 1 },
        { word: 'Perseverance', options: [{ emoji: '💎', label: 'Honesty' }, { emoji: '⏳', label: 'Patience' }, { emoji: '💪', label: 'Perseverance' }, { emoji: '🦁', label: 'Courage' }], correct: 2 },
        { word: 'Democracy', options: [{ emoji: '⚖️', label: 'Justice' }, { emoji: '🕊️', label: 'Freedom' }, { emoji: '⚖️', label: 'Equality' }, { emoji: '🏛️', label: 'Democracy' }], correct: 3 },
        { word: 'Pyramid', options: [{ emoji: '🔺', label: 'Pyramid' }, { emoji: '🕌', label: 'Dome' }, { emoji: '🏛️', label: 'Column' }, { emoji: '🌉', label: 'Arch' }], correct: 0 },
        { word: 'Compassion', options: [{ emoji: '🌈', label: 'Tolerance' }, { emoji: '❤️', label: 'Compassion' }, { emoji: '🤝', label: 'Empathy' }, { emoji: '🙏', label: 'Gratitude' }], correct: 1 },
        { word: 'Blueprint', options: [{ emoji: '🔨', label: 'Renovation' }, { emoji: '🏗️', label: 'Structure' }, { emoji: '📝', label: 'Blueprint' }, { emoji: '📐', label: 'Design' }], correct: 2 },
        { word: 'Sustainability', options: [{ emoji: '🌱', label: 'Plant' }, { emoji: '🧹', label: 'Clean up' }, { emoji: '📢', label: 'Campaign' }, { emoji: '🌍', label: 'Sustainability' }], correct: 3 },
    ],
};
