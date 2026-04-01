// ============================================
// LỚP 12 - LUYỆN THI - 3 CẤP ĐỘ
// ============================================
GRADE_DATA[12] = {};
GRADE_DATA[12].info = {
    levels: [
        { id: 1, name: 'Intermediate', nameVi: 'Trung cấp', months: [1,2,3,4], color: '#4ECDC4', icon: '📗' },
        { id: 2, name: 'Upper-Intermediate', nameVi: 'Trung cao cấp', months: [5,6,7,8], color: '#A855F7', icon: '📘' },
        { id: 3, name: 'Advanced', nameVi: 'Nâng cao', months: [9,10,11,12], color: '#FF6B9D', icon: '📕' },
    ],
    months: [
        { month: 1, title: 'Cuộc sống gia đình', topics: ['home_life', 'family_values'] },
        { month: 2, title: 'Đa dạng văn hóa', topics: ['cultural_diversity', 'cross_cultural'] },
        { month: 3, title: 'Cách giao tiếp xã hội', topics: ['ways_of_socializing', 'etiquette'] },
        { month: 4, title: 'Ôn tập cấp 1', topics: ['review_level1'] },
        { month: 5, title: 'Giáo dục phổ thông', topics: ['school_education', 'teaching_methods'] },
        { month: 6, title: 'Giáo dục đại học', topics: ['higher_education', 'university_life'] },
        { month: 7, title: 'Nghề nghiệp tương lai', topics: ['future_jobs', 'career_skills'] },
        { month: 8, title: 'Ôn tập cấp 2', topics: ['review_level2'] },
        { month: 9, title: 'Cải cách kinh tế', topics: ['economic_reforms', 'globalization'] },
        { month: 10, title: 'Loài có nguy cơ tuyệt chủng', topics: ['endangered_species_12', 'conservation_efforts'] },
        { month: 11, title: 'Sa mạc & Kỳ quan thế giới', topics: ['deserts', 'wonders_of_the_world'] },
        { month: 12, title: 'Ôn thi tốt nghiệp & đại học', topics: ['exam_preparation'] },
    ]
};

// ============================================
// TỪ VỰNG - 20+ CHỦ ĐỀ
// ============================================
GRADE_DATA[12].vocab = {
    // === THÁNG 1 ===
    home_life: {
        name: 'Cuộc sống gia đình',
        level: 1,
        month: 1,
        words: [
            { en: 'Household', vi: 'Hộ gia đình', emoji: '🏠', phonetic: '/ˈhaʊshoʊld/' },
            { en: 'Breadwinner', vi: 'Trụ cột gia đình', emoji: '💪', phonetic: '/ˈbredwɪnər/' },
            { en: 'Obedient', vi: 'Vâng lời', emoji: '👶', phonetic: '/oʊˈbiːdiənt/' },
            { en: 'Mischievous', vi: 'Nghịch ngợm', emoji: '😈', phonetic: '/ˈmɪstʃɪvəs/' },
            { en: 'Harmonious', vi: 'Hòa thuận', emoji: '🎶', phonetic: '/hɑːrˈmoʊniəs/' },
            { en: 'Domestic', vi: 'Thuộc gia đình', emoji: '🏡', phonetic: '/dəˈmestɪk/' },
            { en: 'Nurture', vi: 'Nuôi dưỡng', emoji: '🤱', phonetic: '/ˈnɜːrtʃər/' },
            { en: 'Authority', vi: 'Quyền hạn', emoji: '👨‍👩‍👧', phonetic: '/ɔːˈθɒrəti/' },
            { en: 'Interference', vi: 'Sự can thiệp', emoji: '🚫', phonetic: '/ˌɪntərˈfɪrəns/' },
            { en: 'Confide', vi: 'Tâm sự', emoji: '💬', phonetic: '/kənˈfaɪd/' },
        ]
    },
    family_values: {
        name: 'Giá trị gia đình',
        level: 1,
        month: 1,
        words: [
            { en: 'Solidarity', vi: 'Đoàn kết', emoji: '🤝', phonetic: '/ˌsɒlɪˈdærəti/' },
            { en: 'Filial piety', vi: 'Lòng hiếu thảo', emoji: '🙏', phonetic: '/ˈfɪliəl ˈpaɪəti/' },
            { en: 'Inheritance', vi: 'Sự thừa kế', emoji: '📜', phonetic: '/ɪnˈherɪtəns/' },
            { en: 'Patriarch', vi: 'Gia trưởng', emoji: '👴', phonetic: '/ˈpeɪtriɑːrk/' },
            { en: 'Matriarch', vi: 'Nữ gia trưởng', emoji: '👵', phonetic: '/ˈmeɪtriɑːrk/' },
            { en: 'Ancestor worship', vi: 'Thờ cúng tổ tiên', emoji: '🕯️', phonetic: '/ˈænsestər ˈwɜːrʃɪp/' },
            { en: 'Resilience', vi: 'Khả năng phục hồi', emoji: '💪', phonetic: '/rɪˈzɪliəns/' },
            { en: 'Gratitude', vi: 'Lòng biết ơn', emoji: '💖', phonetic: '/ˈɡrætɪtjuːd/' },
            { en: 'Integrity', vi: 'Sự chính trực', emoji: '⚖️', phonetic: '/ɪnˈteɡrəti/' },
            { en: 'Unconditional', vi: 'Vô điều kiện', emoji: '❤️', phonetic: '/ˌʌnkənˈdɪʃənəl/' },
        ]
    },

    // === THÁNG 2 ===
    cultural_diversity: {
        name: 'Đa dạng văn hóa',
        level: 1,
        month: 2,
        words: [
            { en: 'Multicultural', vi: 'Đa văn hóa', emoji: '🌍', phonetic: '/ˌmʌltiˈkʌltʃərəl/' },
            { en: 'Ethnic group', vi: 'Nhóm dân tộc', emoji: '👥', phonetic: '/ˈeθnɪk ɡruːp/' },
            { en: 'Indigenous', vi: 'Bản địa', emoji: '🏕️', phonetic: '/ɪnˈdɪdʒɪnəs/' },
            { en: 'Assimilation', vi: 'Đồng hóa', emoji: '🔄', phonetic: '/əˌsɪmɪˈleɪʃən/' },
            { en: 'Pluralism', vi: 'Đa nguyên', emoji: '🌈', phonetic: '/ˈplʊrəlɪzəm/' },
            { en: 'Tolerance', vi: 'Sự khoan dung', emoji: '🤗', phonetic: '/ˈtɒlərəns/' },
            { en: 'Coexistence', vi: 'Sự cùng tồn tại', emoji: '☮️', phonetic: '/ˌkoʊɪɡˈzɪstəns/' },
            { en: 'Folklore', vi: 'Văn hóa dân gian', emoji: '📖', phonetic: '/ˈfoʊklɔːr/' },
            { en: 'Discrimination', vi: 'Phân biệt đối xử', emoji: '🚫', phonetic: '/dɪˌskrɪmɪˈneɪʃən/' },
            { en: 'Stereotype', vi: 'Khuôn mẫu', emoji: '🏷️', phonetic: '/ˈsteriətaɪp/' },
        ]
    },
    cross_cultural: {
        name: 'Giao thoa văn hóa',
        level: 1,
        month: 2,
        words: [
            { en: 'Globalization', vi: 'Toàn cầu hóa', emoji: '🌐', phonetic: '/ˌɡloʊbəlaɪˈzeɪʃən/' },
            { en: 'Cultural exchange', vi: 'Trao đổi văn hóa', emoji: '🤝', phonetic: '/ˈkʌltʃərəl ɪksˈtʃeɪndʒ/' },
            { en: 'Cultural shock', vi: 'Sốc văn hóa', emoji: '😲', phonetic: '/ˈkʌltʃərəl ʃɒk/' },
            { en: 'Expatriate', vi: 'Người tha hương', emoji: '✈️', phonetic: '/ˌeksˈpætriət/' },
            { en: 'Dialect', vi: 'Phương ngữ', emoji: '🗣️', phonetic: '/ˈdaɪəlekt/' },
            { en: 'Taboo', vi: 'Điều cấm kỵ', emoji: '🚫', phonetic: '/tæˈbuː/' },
            { en: 'Hospitality', vi: 'Lòng hiếu khách', emoji: '🏠', phonetic: '/ˌhɒspɪˈtæləti/' },
            { en: 'Cuisine', vi: 'Ẩm thực', emoji: '🍽️', phonetic: '/kwɪˈziːn/' },
            { en: 'Heritage', vi: 'Di sản', emoji: '🏛️', phonetic: '/ˈherɪtɪdʒ/' },
            { en: 'Cosmopolitan', vi: 'Mang tính quốc tế', emoji: '🌏', phonetic: '/ˌkɒzməˈpɒlɪtən/' },
        ]
    },

    // === THÁNG 3 ===
    ways_of_socializing: {
        name: 'Cách giao tiếp xã hội',
        level: 1,
        month: 3,
        words: [
            { en: 'Compliment', vi: 'Khen ngợi', emoji: '👏', phonetic: '/ˈkɒmplɪmənt/' },
            { en: 'Apology', vi: 'Lời xin lỗi', emoji: '🙇', phonetic: '/əˈpɒlədʒi/' },
            { en: 'Flattery', vi: 'Sự nịnh hót', emoji: '😏', phonetic: '/ˈflætəri/' },
            { en: 'Diplomacy', vi: 'Ngoại giao', emoji: '🤵', phonetic: '/dɪˈploʊməsi/' },
            { en: 'Assertive', vi: 'Quyết đoán', emoji: '💪', phonetic: '/əˈsɜːrtɪv/' },
            { en: 'Courteous', vi: 'Lịch sự', emoji: '🎩', phonetic: '/ˈkɜːrtiəs/' },
            { en: 'Gesture', vi: 'Cử chỉ', emoji: '👋', phonetic: '/ˈdʒestʃər/' },
            { en: 'Small talk', vi: 'Trò chuyện xã giao', emoji: '💬', phonetic: '/smɔːl tɔːk/' },
            { en: 'Non-verbal', vi: 'Phi ngôn ngữ', emoji: '🤷', phonetic: '/ˌnɒn ˈvɜːrbəl/' },
            { en: 'Rapport', vi: 'Mối quan hệ tốt', emoji: '🤝', phonetic: '/ræˈpɔːr/' },
        ]
    },
    etiquette: {
        name: 'Phép lịch sự',
        level: 1,
        month: 3,
        words: [
            { en: 'Protocol', vi: 'Nghi thức', emoji: '📋', phonetic: '/ˈproʊtəkɒl/' },
            { en: 'Punctuality', vi: 'Đúng giờ', emoji: '⏰', phonetic: '/ˌpʌŋktʃuˈæləti/' },
            { en: 'Formality', vi: 'Tính trang trọng', emoji: '🤵', phonetic: '/fɔːrˈmæləti/' },
            { en: 'Decorum', vi: 'Phép tắc', emoji: '🎎', phonetic: '/dɪˈkɔːrəm/' },
            { en: 'Propriety', vi: 'Sự đúng đắn', emoji: '✅', phonetic: '/prəˈpraɪəti/' },
            { en: 'Tact', vi: 'Sự khéo léo', emoji: '🧠', phonetic: '/tækt/' },
            { en: 'Inappropriate', vi: 'Không phù hợp', emoji: '❌', phonetic: '/ˌɪnəˈproʊpriət/' },
            { en: 'Etiquette', vi: 'Nghi thức xã giao', emoji: '🍽️', phonetic: '/ˈetɪket/' },
            { en: 'Courtesy', vi: 'Lịch thiệp', emoji: '🤝', phonetic: '/ˈkɜːrtəsi/' },
            { en: 'Gracious', vi: 'Lịch thiệp / Ân cần', emoji: '💐', phonetic: '/ˈɡreɪʃəs/' },
        ]
    },

    // === THÁNG 5 ===
    school_education: {
        name: 'Giáo dục phổ thông',
        level: 2,
        month: 5,
        words: [
            { en: 'Curriculum', vi: 'Chương trình học', emoji: '📚', phonetic: '/kəˈrɪkjələm/' },
            { en: 'Pedagogy', vi: 'Phương pháp sư phạm', emoji: '📐', phonetic: '/ˈpedəɡɒdʒi/' },
            { en: 'Compulsory', vi: 'Bắt buộc', emoji: '📋', phonetic: '/kəmˈpʌlsəri/' },
            { en: 'Elective', vi: 'Tự chọn', emoji: '✋', phonetic: '/ɪˈlektɪv/' },
            { en: 'Truancy', vi: 'Trốn học', emoji: '🏃', phonetic: '/ˈtruːənsi/' },
            { en: 'Literacy', vi: 'Biết đọc biết viết', emoji: '📖', phonetic: '/ˈlɪtərəsi/' },
            { en: 'Numeracy', vi: 'Biết tính toán', emoji: '🔢', phonetic: '/ˈnjuːmərəsi/' },
            { en: 'Standardized test', vi: 'Bài thi chuẩn hóa', emoji: '📝', phonetic: '/ˈstændərdaɪzd test/' },
            { en: 'Gifted', vi: 'Có năng khiếu', emoji: '🌟', phonetic: '/ˈɡɪftɪd/' },
            { en: 'Remedial', vi: 'Bổ trợ', emoji: '📘', phonetic: '/rɪˈmiːdiəl/' },
        ]
    },
    teaching_methods: {
        name: 'Phương pháp giảng dạy',
        level: 2,
        month: 5,
        words: [
            { en: 'Facilitator', vi: 'Người hỗ trợ', emoji: '🧑‍🏫', phonetic: '/fəˈsɪlɪteɪtər/' },
            { en: 'Collaborative', vi: 'Hợp tác', emoji: '🤝', phonetic: '/kəˈlæbərətɪv/' },
            { en: 'Inquiry-based', vi: 'Dựa trên khám phá', emoji: '🔍', phonetic: '/ɪnˈkwaɪəri beɪst/' },
            { en: 'Differentiated', vi: 'Phân hóa', emoji: '📊', phonetic: '/ˌdɪfəˈrenʃieɪtɪd/' },
            { en: 'Assessment', vi: 'Đánh giá', emoji: '📝', phonetic: '/əˈsesmənt/' },
            { en: 'Scaffolding', vi: 'Hỗ trợ dần', emoji: '🏗️', phonetic: '/ˈskæfəldɪŋ/' },
            { en: 'Engagement', vi: 'Sự tham gia', emoji: '🎯', phonetic: '/ɪnˈɡeɪdʒmənt/' },
            { en: 'Critical thinking', vi: 'Tư duy phản biện', emoji: '🧠', phonetic: '/ˈkrɪtɪkəl ˈθɪŋkɪŋ/' },
            { en: 'Constructivism', vi: 'Thuyết kiến tạo', emoji: '🧱', phonetic: '/kənˈstrʌktɪvɪzəm/' },
            { en: 'Blended learning', vi: 'Học kết hợp', emoji: '💻', phonetic: '/ˈblendɪd ˈlɜːrnɪŋ/' },
        ]
    },

    // === THÁNG 6 ===
    higher_education: {
        name: 'Giáo dục đại học',
        level: 2,
        month: 6,
        words: [
            { en: 'Undergraduate', vi: 'Sinh viên đại học', emoji: '🎓', phonetic: '/ˌʌndərˈɡrædʒuət/' },
            { en: 'Postgraduate', vi: 'Sau đại học', emoji: '📚', phonetic: '/ˌpoʊstˈɡrædʒuət/' },
            { en: 'Thesis', vi: 'Luận văn', emoji: '📄', phonetic: '/ˈθiːsɪs/' },
            { en: 'Dissertation', vi: 'Luận án', emoji: '📝', phonetic: '/ˌdɪsərˈteɪʃən/' },
            { en: 'Tuition fee', vi: 'Học phí', emoji: '💰', phonetic: '/tjuˈɪʃən fiː/' },
            { en: 'Scholarship', vi: 'Học bổng', emoji: '🏆', phonetic: '/ˈskɒlərʃɪp/' },
            { en: 'Research', vi: 'Nghiên cứu', emoji: '🔬', phonetic: '/rɪˈsɜːrtʃ/' },
            { en: 'Lecture', vi: 'Bài giảng', emoji: '🎤', phonetic: '/ˈlektʃər/' },
            { en: 'Dean', vi: 'Trưởng khoa', emoji: '👨‍💼', phonetic: '/diːn/' },
            { en: 'Alumni', vi: 'Cựu sinh viên', emoji: '🎓', phonetic: '/əˈlʌmnaɪ/' },
        ]
    },
    university_life: {
        name: 'Đời sống đại học',
        level: 2,
        month: 6,
        words: [
            { en: 'Campus', vi: 'Khuôn viên trường', emoji: '🏫', phonetic: '/ˈkæmpəs/' },
            { en: 'Dormitory', vi: 'Ký túc xá', emoji: '🏢', phonetic: '/ˈdɔːrmɪtɔːri/' },
            { en: 'Internship', vi: 'Thực tập', emoji: '💼', phonetic: '/ˈɪntɜːrnʃɪp/' },
            { en: 'Fraternity', vi: 'Hội sinh viên nam', emoji: '🤝', phonetic: '/frəˈtɜːrnəti/' },
            { en: 'Semester', vi: 'Học kỳ', emoji: '📅', phonetic: '/sɪˈmestər/' },
            { en: 'Credit', vi: 'Tín chỉ', emoji: '📊', phonetic: '/ˈkredɪt/' },
            { en: 'Major', vi: 'Chuyên ngành', emoji: '📚', phonetic: '/ˈmeɪdʒər/' },
            { en: 'Minor', vi: 'Ngành phụ', emoji: '📖', phonetic: '/ˈmaɪnər/' },
            { en: 'Orientation', vi: 'Định hướng', emoji: '🧭', phonetic: '/ˌɔːriənˈteɪʃən/' },
            { en: 'Commencement', vi: 'Lễ tốt nghiệp', emoji: '🎊', phonetic: '/kəˈmensmənt/' },
        ]
    },

    // === THÁNG 7 ===
    future_jobs: {
        name: 'Nghề nghiệp tương lai',
        level: 2,
        month: 7,
        words: [
            { en: 'Entrepreneur', vi: 'Doanh nhân', emoji: '💼', phonetic: '/ˌɒntrəprəˈnɜːr/' },
            { en: 'Freelancer', vi: 'Người làm tự do', emoji: '🏠', phonetic: '/ˈfriːlænsər/' },
            { en: 'Remote work', vi: 'Làm việc từ xa', emoji: '💻', phonetic: '/rɪˈmoʊt wɜːrk/' },
            { en: 'Automation', vi: 'Tự động hóa', emoji: '🤖', phonetic: '/ˌɔːtəˈmeɪʃən/' },
            { en: 'Outsourcing', vi: 'Thuê ngoài', emoji: '🌐', phonetic: '/ˈaʊtsɔːrsɪŋ/' },
            { en: 'Qualification', vi: 'Bằng cấp', emoji: '📜', phonetic: '/ˌkwɒlɪfɪˈkeɪʃən/' },
            { en: 'Competence', vi: 'Năng lực', emoji: '💪', phonetic: '/ˈkɒmpɪtəns/' },
            { en: 'Workforce', vi: 'Lực lượng lao động', emoji: '👷', phonetic: '/ˈwɜːrkfɔːrs/' },
            { en: 'Recruitment', vi: 'Tuyển dụng', emoji: '📋', phonetic: '/rɪˈkruːtmənt/' },
            { en: 'Promotion', vi: 'Thăng chức', emoji: '📈', phonetic: '/prəˈmoʊʃən/' },
        ]
    },
    career_skills: {
        name: 'Kỹ năng nghề nghiệp',
        level: 2,
        month: 7,
        words: [
            { en: 'Leadership', vi: 'Khả năng lãnh đạo', emoji: '👑', phonetic: '/ˈliːdərʃɪp/' },
            { en: 'Teamwork', vi: 'Làm việc nhóm', emoji: '🤝', phonetic: '/ˈtiːmwɜːrk/' },
            { en: 'Adaptability', vi: 'Khả năng thích nghi', emoji: '🔄', phonetic: '/əˌdæptəˈbɪləti/' },
            { en: 'Negotiation', vi: 'Đàm phán', emoji: '🤝', phonetic: '/nɪˌɡoʊʃiˈeɪʃən/' },
            { en: 'Time management', vi: 'Quản lý thời gian', emoji: '⏰', phonetic: '/taɪm ˈmænɪdʒmənt/' },
            { en: 'Problem-solving', vi: 'Giải quyết vấn đề', emoji: '🧩', phonetic: '/ˈprɒbləm ˈsɒlvɪŋ/' },
            { en: 'Networking', vi: 'Xây dựng mạng lưới', emoji: '🕸️', phonetic: '/ˈnetwɜːrkɪŋ/' },
            { en: 'Resume', vi: 'Sơ yếu lý lịch', emoji: '📄', phonetic: '/ˈrezjumeɪ/' },
            { en: 'Interview', vi: 'Phỏng vấn', emoji: '🎤', phonetic: '/ˈɪntərvjuː/' },
            { en: 'Professionalism', vi: 'Tính chuyên nghiệp', emoji: '💼', phonetic: '/prəˈfeʃənəlɪzəm/' },
        ]
    },

    // === THÁNG 9 ===
    economic_reforms: {
        name: 'Cải cách kinh tế',
        level: 3,
        month: 9,
        words: [
            { en: 'Doi Moi', vi: 'Đổi mới', emoji: '🇻🇳', phonetic: '/dɔɪ mɔɪ/' },
            { en: 'Privatization', vi: 'Tư nhân hóa', emoji: '🏢', phonetic: '/ˌpraɪvətaɪˈzeɪʃən/' },
            { en: 'Inflation', vi: 'Lạm phát', emoji: '📈', phonetic: '/ɪnˈfleɪʃən/' },
            { en: 'Subsidy', vi: 'Trợ cấp', emoji: '💰', phonetic: '/ˈsʌbsədi/' },
            { en: 'Foreign investment', vi: 'Đầu tư nước ngoài', emoji: '🌐', phonetic: '/ˈfɒrɪn ɪnˈvestmənt/' },
            { en: 'GDP', vi: 'Tổng sản phẩm quốc nội', emoji: '📊', phonetic: '/ˌdʒiː diː ˈpiː/' },
            { en: 'Trade deficit', vi: 'Thâm hụt thương mại', emoji: '📉', phonetic: '/treɪd ˈdefɪsɪt/' },
            { en: 'Free market', vi: 'Thị trường tự do', emoji: '🛒', phonetic: '/friː ˈmɑːrkɪt/' },
            { en: 'Tariff', vi: 'Thuế quan', emoji: '🏦', phonetic: '/ˈtærɪf/' },
            { en: 'Embargo', vi: 'Cấm vận', emoji: '🚫', phonetic: '/ɪmˈbɑːrɡoʊ/' },
        ]
    },
    globalization: {
        name: 'Toàn cầu hóa',
        level: 3,
        month: 9,
        words: [
            { en: 'Multinational', vi: 'Đa quốc gia', emoji: '🌍', phonetic: '/ˌmʌltiˈnæʃənəl/' },
            { en: 'Integration', vi: 'Hội nhập', emoji: '🤝', phonetic: '/ˌɪntɪˈɡreɪʃən/' },
            { en: 'Export', vi: 'Xuất khẩu', emoji: '📦', phonetic: '/ɪkˈspɔːrt/' },
            { en: 'Import', vi: 'Nhập khẩu', emoji: '🚢', phonetic: '/ɪmˈpɔːrt/' },
            { en: 'Supply chain', vi: 'Chuỗi cung ứng', emoji: '🔗', phonetic: '/səˈplaɪ tʃeɪn/' },
            { en: 'Competitiveness', vi: 'Sức cạnh tranh', emoji: '🏆', phonetic: '/kəmˈpetɪtɪvnəs/' },
            { en: 'Outsourcing', vi: 'Thuê ngoài', emoji: '🌐', phonetic: '/ˈaʊtsɔːrsɪŋ/' },
            { en: 'Industrialization', vi: 'Công nghiệp hóa', emoji: '🏭', phonetic: '/ɪnˌdʌstriəlaɪˈzeɪʃən/' },
            { en: 'Emerging market', vi: 'Thị trường mới nổi', emoji: '📈', phonetic: '/ɪˈmɜːrdʒɪŋ ˈmɑːrkɪt/' },
            { en: 'Sustainability', vi: 'Tính bền vững', emoji: '🌿', phonetic: '/səˌsteɪnəˈbɪləti/' },
        ]
    },

    // === THÁNG 10 ===
    endangered_species_12: {
        name: 'Loài có nguy cơ tuyệt chủng',
        level: 3,
        month: 10,
        words: [
            { en: 'Biodiversity', vi: 'Đa dạng sinh học', emoji: '🦋', phonetic: '/ˌbaɪoʊdaɪˈvɜːrsəti/' },
            { en: 'Habitat fragmentation', vi: 'Phân mảnh môi trường', emoji: '🏗️', phonetic: '/ˈhæbɪtæt ˌfræɡmənˈteɪʃən/' },
            { en: 'Invasive species', vi: 'Loài xâm lấn', emoji: '🐍', phonetic: '/ɪnˈveɪsɪv ˈspiːʃiːz/' },
            { en: 'Captivity', vi: 'Nuôi nhốt', emoji: '🔒', phonetic: '/kæpˈtɪvəti/' },
            { en: 'Ecosystem services', vi: 'Dịch vụ hệ sinh thái', emoji: '🌍', phonetic: '/ˈiːkoʊsɪstəm ˈsɜːrvɪsɪz/' },
            { en: 'Keystone species', vi: 'Loài chủ chốt', emoji: '🐝', phonetic: '/ˈkiːstoʊn ˈspiːʃiːz/' },
            { en: 'Red List', vi: 'Sách đỏ', emoji: '📕', phonetic: '/red lɪst/' },
            { en: 'Genetic engineering', vi: 'Công nghệ gen', emoji: '🧬', phonetic: '/dʒəˈnetɪk ˌendʒɪˈnɪrɪŋ/' },
            { en: 'Rewilding', vi: 'Tái hoang dã hóa', emoji: '🐺', phonetic: '/riːˈwaɪldɪŋ/' },
            { en: 'Anthropogenic', vi: 'Do con người gây ra', emoji: '👤', phonetic: '/ˌænθrəpəˈdʒenɪk/' },
        ]
    },
    conservation_efforts: {
        name: 'Nỗ lực bảo tồn',
        level: 3,
        month: 10,
        words: [
            { en: 'Wildlife corridor', vi: 'Hành lang sinh thái', emoji: '🌳', phonetic: '/ˈwaɪldlaɪf ˈkɒrɪdɔːr/' },
            { en: 'Seed bank', vi: 'Ngân hàng hạt giống', emoji: '🌰', phonetic: '/siːd bæŋk/' },
            { en: 'Cloning', vi: 'Nhân bản', emoji: '🧬', phonetic: '/ˈkloʊnɪŋ/' },
            { en: 'Biosphere reserve', vi: 'Khu dự trữ sinh quyển', emoji: '🌏', phonetic: '/ˈbaɪoʊsfɪr rɪˈzɜːrv/' },
            { en: 'Environmental impact', vi: 'Tác động môi trường', emoji: '📊', phonetic: '/ɪnˌvaɪrənˈmentəl ˈɪmpækt/' },
            { en: 'Sustainable development', vi: 'Phát triển bền vững', emoji: '🌱', phonetic: '/səˈsteɪnəbəl dɪˈveləpmənt/' },
            { en: 'Marine sanctuary', vi: 'Khu bảo tồn biển', emoji: '🐠', phonetic: '/məˈriːn ˈsæŋktʃueri/' },
            { en: 'Depletion', vi: 'Sự cạn kiệt', emoji: '📉', phonetic: '/dɪˈpliːʃən/' },
            { en: 'Carbon sequestration', vi: 'Thu giữ carbon', emoji: '🌲', phonetic: '/ˈkɑːrbən ˌsiːkwɪˈstreɪʃən/' },
            { en: 'Ecological footprint', vi: 'Dấu chân sinh thái', emoji: '👣', phonetic: '/ˌiːkəˈlɒdʒɪkəl ˈfʊtprɪnt/' },
        ]
    },

    // === THÁNG 11 ===
    deserts: {
        name: 'Sa mạc',
        level: 3,
        month: 11,
        words: [
            { en: 'Arid', vi: 'Khô cằn', emoji: '☀️', phonetic: '/ˈærɪd/' },
            { en: 'Oasis', vi: 'Ốc đảo', emoji: '🌴', phonetic: '/oʊˈeɪsɪs/' },
            { en: 'Dune', vi: 'Cồn cát', emoji: '🏜️', phonetic: '/djuːn/' },
            { en: 'Mirage', vi: 'Ảo ảnh', emoji: '🌊', phonetic: '/mɪˈrɑːʒ/' },
            { en: 'Nomad', vi: 'Dân du mục', emoji: '🐫', phonetic: '/ˈnoʊmæd/' },
            { en: 'Desertification', vi: 'Sa mạc hóa', emoji: '🏜️', phonetic: '/dɪˌzɜːrtɪfɪˈkeɪʃən/' },
            { en: 'Drought-resistant', vi: 'Chịu hạn', emoji: '🌵', phonetic: '/draʊt rɪˈzɪstənt/' },
            { en: 'Camel caravan', vi: 'Đoàn lạc đà', emoji: '🐪', phonetic: '/ˈkæməl ˈkærəvæn/' },
            { en: 'Sandstorm', vi: 'Bão cát', emoji: '🌪️', phonetic: '/ˈsændstɔːrm/' },
            { en: 'Scorching', vi: 'Nóng bỏng', emoji: '🔥', phonetic: '/ˈskɔːrtʃɪŋ/' },
        ]
    },
    wonders_of_the_world: {
        name: 'Kỳ quan thế giới',
        level: 3,
        month: 11,
        words: [
            { en: 'Monument', vi: 'Công trình kỷ niệm', emoji: '🗿', phonetic: '/ˈmɒnjəmənt/' },
            { en: 'Ancient', vi: 'Cổ đại', emoji: '🏛️', phonetic: '/ˈeɪnʃənt/' },
            { en: 'Archaeological', vi: 'Thuộc khảo cổ học', emoji: '🔍', phonetic: '/ˌɑːrkiəˈlɒdʒɪkəl/' },
            { en: 'Pyramid', vi: 'Kim tự tháp', emoji: '🔺', phonetic: '/ˈpɪrəmɪd/' },
            { en: 'Amphitheater', vi: 'Nhà hát vòng tròn', emoji: '🏟️', phonetic: '/ˈæmfɪθiːətər/' },
            { en: 'Excavation', vi: 'Khai quật', emoji: '⛏️', phonetic: '/ˌekskəˈveɪʃən/' },
            { en: 'Artifact', vi: 'Cổ vật', emoji: '🏺', phonetic: '/ˈɑːrtɪfækt/' },
            { en: 'Inscription', vi: 'Bản khắc', emoji: '📜', phonetic: '/ɪnˈskrɪpʃən/' },
            { en: 'Restoration', vi: 'Phục chế', emoji: '🔄', phonetic: '/ˌrestəˈreɪʃən/' },
            { en: 'UNESCO', vi: 'Tổ chức UNESCO', emoji: '🌍', phonetic: '/juːˈneskoʊ/' },
        ]
    },

    // === THÁNG 12 ===
    exam_preparation: {
        name: 'Ôn thi tốt nghiệp',
        level: 3,
        month: 12,
        words: [
            { en: 'Perseverance', vi: 'Sự kiên trì', emoji: '💪', phonetic: '/ˌpɜːrsəˈvɪrəns/' },
            { en: 'Ambition', vi: 'Tham vọng', emoji: '🎯', phonetic: '/æmˈbɪʃən/' },
            { en: 'Anticipate', vi: 'Dự đoán', emoji: '🔮', phonetic: '/ænˈtɪsɪpeɪt/' },
            { en: 'Procrastinate', vi: 'Trì hoãn', emoji: '⏳', phonetic: '/proʊˈkræstɪneɪt/' },
            { en: 'Comprehensive', vi: 'Toàn diện', emoji: '📋', phonetic: '/ˌkɒmprɪˈhensɪv/' },
            { en: 'Proficiency', vi: 'Trình độ thành thạo', emoji: '🏆', phonetic: '/prəˈfɪʃənsi/' },
            { en: 'Meticulous', vi: 'Tỉ mỉ', emoji: '🔬', phonetic: '/məˈtɪkjələs/' },
            { en: 'Eloquent', vi: 'Hùng biện', emoji: '🎤', phonetic: '/ˈeləkwənt/' },
            { en: 'Prerequisite', vi: 'Điều kiện tiên quyết', emoji: '📌', phonetic: '/priːˈrekwəzɪt/' },
            { en: 'Valedictorian', vi: 'Thủ khoa', emoji: '🎓', phonetic: '/ˌvælɪdɪkˈtɔːriən/' },
        ]
    },
};

// ============================================
// PHONICS - ADVANCED CONNECTED SPEECH
// ============================================
GRADE_DATA[12].phonics = [
    { letter: 'Stress in compounds', sound: 'Trọng âm từ ghép', words: [
        { word: 'FREE market', highlight: 'FREE', emoji: '🛒' },
        { word: 'TRADE deficit', highlight: 'TRADE', emoji: '📉' },
        { word: 'SAND storm', highlight: 'SAND', emoji: '🌪️' }
    ]},
    { letter: 'Stress in phrases', sound: 'Trọng âm cụm từ', words: [
        { word: 'a BLACK bird (chim đen)', highlight: 'BLACK', emoji: '🐦' },
        { word: 'a BLACKbird (chim sáo)', highlight: 'BLACK', emoji: '🎵' },
        { word: 'hot DOG (chó nóng) vs HOT dog (xúc xích)', highlight: 'varies', emoji: '🌭' }
    ]},
    { letter: 'Weak/Strong forms', sound: 'Dạng yếu/mạnh', words: [
        { word: 'was /wəz/ vs /wɒz/', highlight: 'was', emoji: '🔄' },
        { word: 'are /ər/ vs /ɑːr/', highlight: 'are', emoji: '🔄' },
        { word: 'them /ðəm/ vs /ðem/', highlight: 'them', emoji: '🔄' }
    ]},
    { letter: 'Catenation', sound: 'Nối âm nâng cao', words: [
        { word: 'pick_it_up', highlight: 'k_i / t_u', emoji: '📦' },
        { word: 'turn_it_off', highlight: 'n_i / t_o', emoji: '🔌' },
        { word: 'come_in_and_sit_down', highlight: 'linked', emoji: '🪑' }
    ]},
    { letter: 'Juncture', sound: 'Ranh giới từ', words: [
        { word: 'an aim vs a name', highlight: 'boundary', emoji: '🎯' },
        { word: 'I scream vs ice cream', highlight: 'boundary', emoji: '🍦' },
        { word: 'great ape vs grey tape', highlight: 'boundary', emoji: '🦍' }
    ]},
    { letter: '-ation', sound: '/ˈeɪʃən/ stress', words: [
        { word: 'globaliZAtion', highlight: 'ZA', emoji: '🌍' },
        { word: 'priVAtiZAtion', highlight: 'ZA', emoji: '🏢' },
        { word: 'industrialiZAtion', highlight: 'ZA', emoji: '🏭' }
    ]},
    { letter: '-eous/-ious', sound: '/iəs/', words: [
        { word: 'Courteous', highlight: 'eous', emoji: '🎩' },
        { word: 'Harmonious', highlight: 'ious', emoji: '🎶' },
        { word: 'Conscientious', highlight: 'ious', emoji: '✅' }
    ]},
    { letter: 'Emphatic stress', sound: 'Nhấn mạnh đặc biệt', words: [
        { word: 'I NEVER said that', highlight: 'NEVER', emoji: '🚫' },
        { word: 'It was ABSOLUTELY amazing', highlight: 'ABSOLUTELY', emoji: '🤩' },
        { word: 'That is TOTALLY wrong', highlight: 'TOTALLY', emoji: '❌' }
    ]},
    { letter: 'Rhythm groups', sound: 'Nhóm nhịp', words: [
        { word: 'The BOOKs | on the TABLE | are MINE', highlight: '|', emoji: '📚' },
        { word: 'She WORKS | in a BANK | near HERE', highlight: '|', emoji: '🏦' },
        { word: 'I THINK | we should GO | right NOW', highlight: '|', emoji: '🏃' }
    ]},
    { letter: 'Tone groups', sound: 'Nhóm thanh điệu', words: [
        { word: 'If you STUDY hard ↗️ | you will PASS ↘️', highlight: '↗️↘️', emoji: '📖' },
        { word: 'FIRST ↗️ | do your HOMEwork ↘️', highlight: '↗️↘️', emoji: '📝' },
        { word: 'She\'s NICE ↗️ | but STRICT ↘️', highlight: '↗️↘️', emoji: '👩‍🏫' }
    ]},
    { letter: 'Minimal pairs', sound: 'Cặp từ tối thiểu', words: [
        { word: 'desert /ˈdezərt/ vs dessert /dɪˈzɜːrt/', highlight: 'stress', emoji: '🏜️' },
        { word: 'export /ˈekspɔːrt/ vs /ɪkˈspɔːrt/', highlight: 'stress', emoji: '📦' },
        { word: 'refuse /ˈrefjuːs/ vs /rɪˈfjuːz/', highlight: 'stress', emoji: '🗑️' }
    ]},
];

// ============================================
// CÂU MẪU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[12].sentences = {
    level1: [
        { sentence: ['A', 'harmonious', 'family', 'is', 'built', 'on', 'mutual', 'respect'], emoji: '🏠', vi: 'Một gia đình hòa thuận được xây dựng trên sự tôn trọng lẫn nhau', extra: ['hatred', 'by'] },
        { sentence: ['Cultural', 'diversity', 'enriches', 'society', 'and', 'promotes', 'tolerance'], emoji: '🌍', vi: 'Đa dạng văn hóa làm phong phú xã hội và thúc đẩy khoan dung', extra: ['weakens', 'or'] },
        { sentence: ['Good', 'etiquette', 'requires', 'punctuality', 'and', 'courtesy'], emoji: '🎩', vi: 'Nghi thức tốt đòi hỏi đúng giờ và lịch thiệp', extra: ['rudeness', 'or'] },
        { sentence: ['He', 'confides', 'in', 'his', 'mother', 'about', 'his', 'problems'], emoji: '💬', vi: 'Anh ấy tâm sự với mẹ về những vấn đề của mình', extra: ['hides', 'from'] },
        { sentence: ['Non-verbal', 'gestures', 'play', 'an', 'important', 'role', 'in', 'communication'], emoji: '👋', vi: 'Cử chỉ phi ngôn ngữ đóng vai trò quan trọng trong giao tiếp', extra: ['minor', 'for'] },
        { sentence: ['Filial', 'piety', 'is', 'a', 'core', 'value', 'in', 'Vietnamese', 'culture'], emoji: '🙏', vi: 'Lòng hiếu thảo là giá trị cốt lõi trong văn hóa Việt Nam', extra: ['foreign', 'of'] },
        { sentence: ['The', 'expatriate', 'experienced', 'cultural', 'shock', 'when', 'first', 'arriving'], emoji: '😲', vi: 'Người tha hương trải qua sốc văn hóa khi mới đến', extra: ['never', 'before'] },
        { sentence: ['Being', 'courteous', 'and', 'tactful', 'helps', 'build', 'rapport'], emoji: '🤝', vi: 'Lịch sự và khéo léo giúp xây dựng mối quan hệ tốt', extra: ['rude', 'destroy'] },
    ],
    level2: [
        { sentence: ['The', 'university', 'offers', 'scholarships', 'to', 'outstanding', 'undergraduates'], emoji: '🎓', vi: 'Trường đại học cấp học bổng cho sinh viên xuất sắc', extra: ['average', 'from'] },
        { sentence: ['Critical', 'thinking', 'is', 'essential', 'for', 'academic', 'success'], emoji: '🧠', vi: 'Tư duy phản biện là yếu tố thiết yếu cho thành công học thuật', extra: ['unnecessary', 'against'] },
        { sentence: ['Entrepreneurs', 'need', 'adaptability', 'and', 'problem-solving', 'skills'], emoji: '💼', vi: 'Doanh nhân cần khả năng thích nghi và kỹ năng giải quyết vấn đề', extra: ['laziness', 'or'] },
        { sentence: ['The', 'internship', 'provided', 'valuable', 'professional', 'experience'], emoji: '💼', vi: 'Kỳ thực tập mang lại kinh nghiệm chuyên môn quý giá', extra: ['useless', 'a'] },
        { sentence: ['Blended', 'learning', 'combines', 'online', 'and', 'face-to-face', 'instruction'], emoji: '💻', vi: 'Học kết hợp phối trộn hướng dẫn trực tuyến và trực tiếp', extra: ['separates', 'or'] },
        { sentence: ['She', 'wrote', 'her', 'thesis', 'on', 'sustainable', 'development', 'in', 'Vietnam'], emoji: '📄', vi: 'Cô ấy viết luận văn về phát triển bền vững ở Việt Nam', extra: ['his', 'for'] },
    ],
    level3: [
        { sentence: ['The', 'Doi', 'Moi', 'policy', 'transformed', 'Vietnam\'s', 'economy', 'significantly'], emoji: '🇻🇳', vi: 'Chính sách Đổi mới đã biến đổi đáng kể nền kinh tế Việt Nam', extra: ['slightly', 'a'] },
        { sentence: ['Desertification', 'threatens', 'millions', 'of', 'people', 'in', 'arid', 'regions'], emoji: '🏜️', vi: 'Sa mạc hóa đe dọa hàng triệu người ở các vùng khô cằn', extra: ['helps', 'wet'] },
        { sentence: ['The', 'archaeological', 'excavation', 'revealed', 'ancient', 'artifacts'], emoji: '⛏️', vi: 'Cuộc khai quật khảo cổ phát hiện các cổ vật', extra: ['modern', 'hid'] },
        { sentence: ['Habitat', 'fragmentation', 'is', 'a', 'major', 'threat', 'to', 'biodiversity'], emoji: '🏗️', vi: 'Phân mảnh môi trường là mối đe dọa lớn với đa dạng sinh học', extra: ['benefit', 'minor'] },
        { sentence: ['Carbon', 'sequestration', 'helps', 'mitigate', 'the', 'effects', 'of', 'climate', 'change'], emoji: '🌲', vi: 'Thu giữ carbon giúp giảm thiểu tác động của biến đổi khí hậu', extra: ['worsen', 'cause'] },
        { sentence: ['UNESCO', 'designated', 'the', 'pyramid', 'as', 'a', 'World', 'Heritage', 'Site'], emoji: '🔺', vi: 'UNESCO công nhận kim tự tháp là Di sản thế giới', extra: ['rejected', 'an'] },
        { sentence: ['Foreign', 'investment', 'has', 'contributed', 'to', 'rapid', 'industrialization'], emoji: '🏭', vi: 'Đầu tư nước ngoài đã đóng góp vào công nghiệp hóa nhanh chóng', extra: ['slow', 'against'] },
        { sentence: ['The', 'nomads', 'crossed', 'the', 'scorching', 'desert', 'by', 'camel', 'caravan'], emoji: '🐫', vi: 'Dân du mục băng qua sa mạc nóng bỏng bằng đoàn lạc đà', extra: ['frozen', 'by'] },
    ],
};

// ============================================
// SPELLING THEO CẤP ĐỘ
// ============================================
GRADE_DATA[12].spelling = {
    level1: [
        { word: 'OBEDIENT', emoji: '👶', vi: 'Vâng lời' },
        { word: 'HARMONIOUS', emoji: '🎶', vi: 'Hòa thuận' },
        { word: 'SOLIDARITY', emoji: '🤝', vi: 'Đoàn kết' },
        { word: 'TOLERANCE', emoji: '🤗', vi: 'Sự khoan dung' },
        { word: 'STEREOTYPE', emoji: '🏷️', vi: 'Khuôn mẫu' },
        { word: 'COURTESY', emoji: '🤝', vi: 'Lịch thiệp' },
        { word: 'DIPLOMACY', emoji: '🤵', vi: 'Ngoại giao' },
        { word: 'PUNCTUALITY', emoji: '⏰', vi: 'Đúng giờ' },
        { word: 'ETIQUETTE', emoji: '🍽️', vi: 'Nghi thức xã giao' },
        { word: 'MISCHIEVOUS', emoji: '😈', vi: 'Nghịch ngợm' },
        { word: 'HOSPITALITY', emoji: '🏠', vi: 'Lòng hiếu khách' },
        { word: 'COSMOPOLITAN', emoji: '🌏', vi: 'Mang tính quốc tế' },
    ],
    level2: [
        { word: 'UNDERGRADUATE', emoji: '🎓', vi: 'Sinh viên đại học' },
        { word: 'DISSERTATION', emoji: '📝', vi: 'Luận án' },
        { word: 'ENTREPRENEUR', emoji: '💼', vi: 'Doanh nhân' },
        { word: 'ADAPTABILITY', emoji: '🔄', vi: 'Khả năng thích nghi' },
        { word: 'NEGOTIATION', emoji: '🤝', vi: 'Đàm phán' },
        { word: 'COLLABORATIVE', emoji: '🤝', vi: 'Hợp tác' },
        { word: 'SCAFFOLDING', emoji: '🏗️', vi: 'Hỗ trợ dần' },
        { word: 'CONSTRUCTIVISM', emoji: '🧱', vi: 'Thuyết kiến tạo' },
        { word: 'PROFESSIONALISM', emoji: '💼', vi: 'Tính chuyên nghiệp' },
        { word: 'COMMENCEMENT', emoji: '🎊', vi: 'Lễ tốt nghiệp' },
        { word: 'RECRUITMENT', emoji: '📋', vi: 'Tuyển dụng' },
        { word: 'QUALIFICATION', emoji: '📜', vi: 'Bằng cấp' },
    ],
    level3: [
        { word: 'PRIVATIZATION', emoji: '🏢', vi: 'Tư nhân hóa' },
        { word: 'DESERTIFICATION', emoji: '🏜️', vi: 'Sa mạc hóa' },
        { word: 'ARCHAEOLOGICAL', emoji: '🔍', vi: 'Thuộc khảo cổ' },
        { word: 'ANTHROPOGENIC', emoji: '👤', vi: 'Do con người gây ra' },
        { word: 'INDUSTRIALIZATION', emoji: '🏭', vi: 'Công nghiệp hóa' },
        { word: 'AMPHITHEATER', emoji: '🏟️', vi: 'Nhà hát vòng tròn' },
        { word: 'PERSEVERANCE', emoji: '💪', vi: 'Sự kiên trì' },
        { word: 'COMPREHENSIVE', emoji: '📋', vi: 'Toàn diện' },
        { word: 'PREREQUISITE', emoji: '📌', vi: 'Điều kiện tiên quyết' },
        { word: 'VALEDICTORIAN', emoji: '🎓', vi: 'Thủ khoa' },
        { word: 'PROCRASTINATE', emoji: '⏳', vi: 'Trì hoãn' },
        { word: 'SEQUESTRATION', emoji: '🌲', vi: 'Thu giữ' },
    ],
};

// ============================================
// NGHE HIỂU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[12].listening = {
    level1: [
        { word: 'Harmonious', options: [{ emoji: '🎶', label: 'Harmonious' }, { emoji: '😈', label: 'Mischievous' }, { emoji: '👶', label: 'Obedient' }, { emoji: '🤱', label: 'Nurture' }], correct: 0 },
        { word: 'Tolerance', options: [{ emoji: '🚫', label: 'Discrimination' }, { emoji: '🤗', label: 'Tolerance' }, { emoji: '🏷️', label: 'Stereotype' }, { emoji: '🔄', label: 'Assimilation' }], correct: 1 },
        { word: 'Diplomacy', options: [{ emoji: '👏', label: 'Compliment' }, { emoji: '🙇', label: 'Apology' }, { emoji: '🤵', label: 'Diplomacy' }, { emoji: '😏', label: 'Flattery' }], correct: 2 },
        { word: 'Cosmopolitan', options: [{ emoji: '✈️', label: 'Expatriate' }, { emoji: '🗣️', label: 'Dialect' }, { emoji: '🚫', label: 'Taboo' }, { emoji: '🌏', label: 'Cosmopolitan' }], correct: 3 },
        { word: 'Solidarity', options: [{ emoji: '🤝', label: 'Solidarity' }, { emoji: '🙏', label: 'Filial piety' }, { emoji: '📜', label: 'Inheritance' }, { emoji: '💪', label: 'Resilience' }], correct: 0 },
        { word: 'Courtesy', options: [{ emoji: '📋', label: 'Protocol' }, { emoji: '🤝', label: 'Courtesy' }, { emoji: '🎎', label: 'Decorum' }, { emoji: '✅', label: 'Propriety' }], correct: 1 },
    ],
    level2: [
        { word: 'Thesis', options: [{ emoji: '📄', label: 'Thesis' }, { emoji: '📝', label: 'Dissertation' }, { emoji: '🎤', label: 'Lecture' }, { emoji: '🔬', label: 'Research' }], correct: 0 },
        { word: 'Freelancer', options: [{ emoji: '💼', label: 'Entrepreneur' }, { emoji: '🏠', label: 'Freelancer' }, { emoji: '🌐', label: 'Outsourcing' }, { emoji: '💻', label: 'Remote work' }], correct: 1 },
        { word: 'Scaffolding', options: [{ emoji: '🤝', label: 'Collaborative' }, { emoji: '🔍', label: 'Inquiry-based' }, { emoji: '🏗️', label: 'Scaffolding' }, { emoji: '📊', label: 'Differentiated' }], correct: 2 },
        { word: 'Commencement', options: [{ emoji: '📅', label: 'Semester' }, { emoji: '💼', label: 'Internship' }, { emoji: '📚', label: 'Major' }, { emoji: '🎊', label: 'Commencement' }], correct: 3 },
        { word: 'Recruitment', options: [{ emoji: '📋', label: 'Recruitment' }, { emoji: '📈', label: 'Promotion' }, { emoji: '👷', label: 'Workforce' }, { emoji: '💪', label: 'Competence' }], correct: 0 },
        { word: 'Adaptability', options: [{ emoji: '👑', label: 'Leadership' }, { emoji: '🔄', label: 'Adaptability' }, { emoji: '🤝', label: 'Negotiation' }, { emoji: '🧩', label: 'Problem-solving' }], correct: 1 },
        { word: 'Resume', options: [{ emoji: '🤝', label: 'Teamwork' }, { emoji: '🕸️', label: 'Networking' }, { emoji: '📄', label: 'Resume' }, { emoji: '🎤', label: 'Interview' }], correct: 2 },
        { word: 'Alumni', options: [{ emoji: '👨‍💼', label: 'Dean' }, { emoji: '🏫', label: 'Campus' }, { emoji: '🧭', label: 'Orientation' }, { emoji: '🎓', label: 'Alumni' }], correct: 3 },
    ],
    level3: [
        { word: 'Inflation', options: [{ emoji: '📈', label: 'Inflation' }, { emoji: '💰', label: 'Subsidy' }, { emoji: '📉', label: 'Trade deficit' }, { emoji: '🏦', label: 'Tariff' }], correct: 0 },
        { word: 'Oasis', options: [{ emoji: '🏜️', label: 'Dune' }, { emoji: '🌴', label: 'Oasis' }, { emoji: '🌊', label: 'Mirage' }, { emoji: '🐫', label: 'Nomad' }], correct: 1 },
        { word: 'Artifact', options: [{ emoji: '🗿', label: 'Monument' }, { emoji: '🔺', label: 'Pyramid' }, { emoji: '🏺', label: 'Artifact' }, { emoji: '📜', label: 'Inscription' }], correct: 2 },
        { word: 'Rewilding', options: [{ emoji: '🧬', label: 'Cloning' }, { emoji: '🌰', label: 'Seed bank' }, { emoji: '🐝', label: 'Keystone species' }, { emoji: '🐺', label: 'Rewilding' }], correct: 3 },
        { word: 'Embargo', options: [{ emoji: '🚫', label: 'Embargo' }, { emoji: '🏢', label: 'Privatization' }, { emoji: '🌐', label: 'Multinational' }, { emoji: '📦', label: 'Export' }], correct: 0 },
        { word: 'Desertification', options: [{ emoji: '🌪️', label: 'Sandstorm' }, { emoji: '🏜️', label: 'Desertification' }, { emoji: '🌵', label: 'Drought-resistant' }, { emoji: '🔥', label: 'Scorching' }], correct: 1 },
    ],
};
