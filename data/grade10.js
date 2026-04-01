// ============================================
// LỚP 10 - THPT - 3 CẤP ĐỘ
// ============================================
GRADE_DATA[10] = {};
GRADE_DATA[10].info = {
    levels: [
        { id: 1, name: 'Pre-Intermediate', nameVi: 'Trung bình sơ cấp', months: [1,2,3,4], color: '#4ECDC4', icon: '📗' },
        { id: 2, name: 'Intermediate', nameVi: 'Trung cấp', months: [5,6,7,8], color: '#A855F7', icon: '📘' },
        { id: 3, name: 'Upper-Intermediate', nameVi: 'Trung cao cấp', months: [9,10,11,12], color: '#FF6B9D', icon: '📕' },
    ],
    months: [
        { month: 1, title: 'Cuộc sống gia đình', topics: ['family_life', 'household_chores'] },
        { month: 2, title: 'Trường học', topics: ['school_life', 'education_system'] },
        { month: 3, title: 'Âm nhạc', topics: ['music', 'musical_instruments'] },
        { month: 4, title: 'Ôn tập cấp 1', topics: ['review_level1'] },
        { month: 5, title: 'Giáo dục đặc biệt', topics: ['special_education', 'disability'] },
        { month: 6, title: 'Công nghệ', topics: ['technology', 'inventions'] },
        { month: 7, title: 'Bảo tồn', topics: ['conservation', 'wildlife'] },
        { month: 8, title: 'Ôn tập cấp 2', topics: ['review_level2'] },
        { month: 9, title: 'Truyền thông đại chúng', topics: ['mass_media', 'journalism'] },
        { month: 10, title: 'Phương pháp học mới', topics: ['new_ways_to_learn', 'e_learning'] },
        { month: 11, title: 'Loài có nguy cơ tuyệt chủng', topics: ['endangered_species', 'animal_protection'] },
        { month: 12, title: 'Vườn quốc gia', topics: ['national_parks', 'ecotourism'] },
    ]
};

// ============================================
// TỪ VỰNG - 20+ CHỦ ĐỀ
// ============================================
GRADE_DATA[10].vocab = {
    // === THÁNG 1 ===
    family_life: {
        name: 'Cuộc sống gia đình',
        level: 1,
        month: 1,
        words: [
            { en: 'Breadwinner', vi: 'Trụ cột gia đình', emoji: '💪', phonetic: '/ˈbredwɪnər/' },
            { en: 'Generation', vi: 'Thế hệ', emoji: '👨‍👩‍👧‍👦', phonetic: '/ˌdʒenəˈreɪʃən/' },
            { en: 'Upbringing', vi: 'Sự nuôi dạy', emoji: '👶', phonetic: '/ˈʌpbrɪŋɪŋ/' },
            { en: 'Responsibility', vi: 'Trách nhiệm', emoji: '💼', phonetic: '/rɪˌspɒnsəˈbɪləti/' },
            { en: 'Sibling', vi: 'Anh chị em ruột', emoji: '👫', phonetic: '/ˈsɪblɪŋ/' },
            { en: 'Harmony', vi: 'Sự hòa hợp', emoji: '🎶', phonetic: '/ˈhɑːrməni/' },
            { en: 'Nuclear family', vi: 'Gia đình hạt nhân', emoji: '👨‍👩‍👧', phonetic: '/ˈnjuːkliər ˈfæməli/' },
            { en: 'Extended family', vi: 'Đại gia đình', emoji: '👪', phonetic: '/ɪkˈstendɪd ˈfæməli/' },
            { en: 'Sacrifice', vi: 'Hy sinh', emoji: '❤️', phonetic: '/ˈsækrɪfaɪs/' },
            { en: 'Bond', vi: 'Sợi dây gắn kết', emoji: '🤝', phonetic: '/bɒnd/' },
        ]
    },
    household_chores: {
        name: 'Việc nhà',
        level: 1,
        month: 1,
        words: [
            { en: 'Laundry', vi: 'Giặt giũ', emoji: '🧺', phonetic: '/ˈlɔːndri/' },
            { en: 'Vacuuming', vi: 'Hút bụi', emoji: '🧹', phonetic: '/ˈvækjuːmɪŋ/' },
            { en: 'Ironing', vi: 'Là/ủi đồ', emoji: '👔', phonetic: '/ˈaɪərnɪŋ/' },
            { en: 'Grocery shopping', vi: 'Đi chợ', emoji: '🛒', phonetic: '/ˈɡroʊsəri ˈʃɒpɪŋ/' },
            { en: 'Mow the lawn', vi: 'Cắt cỏ', emoji: '🌿', phonetic: '/moʊ ðə lɔːn/' },
            { en: 'Sweep', vi: 'Quét', emoji: '🧹', phonetic: '/swiːp/' },
            { en: 'Tidy up', vi: 'Dọn dẹp', emoji: '🏠', phonetic: '/ˈtaɪdi ʌp/' },
            { en: 'Dishwashing', vi: 'Rửa bát', emoji: '🍽️', phonetic: '/ˈdɪʃwɒʃɪŋ/' },
            { en: 'Dusting', vi: 'Lau bụi', emoji: '✨', phonetic: '/ˈdʌstɪŋ/' },
            { en: 'Babysitting', vi: 'Trông trẻ', emoji: '👶', phonetic: '/ˈbeɪbiˌsɪtɪŋ/' },
        ]
    },

    // === THÁNG 2 ===
    school_life: {
        name: 'Đời sống học đường',
        level: 1,
        month: 2,
        words: [
            { en: 'Curriculum', vi: 'Chương trình học', emoji: '📚', phonetic: '/kəˈrɪkjələm/' },
            { en: 'Semester', vi: 'Học kỳ', emoji: '📅', phonetic: '/sɪˈmestər/' },
            { en: 'Scholarship', vi: 'Học bổng', emoji: '🎓', phonetic: '/ˈskɒlərʃɪp/' },
            { en: 'Extracurricular', vi: 'Ngoại khóa', emoji: '⚽', phonetic: '/ˌekstrəkəˈrɪkjələr/' },
            { en: 'Principal', vi: 'Hiệu trưởng', emoji: '👨‍💼', phonetic: '/ˈprɪnsəpəl/' },
            { en: 'Discipline', vi: 'Kỷ luật', emoji: '📏', phonetic: '/ˈdɪsəplɪn/' },
            { en: 'Academic', vi: 'Thuộc học thuật', emoji: '🎓', phonetic: '/ˌækəˈdemɪk/' },
            { en: 'Dormitory', vi: 'Ký túc xá', emoji: '🏢', phonetic: '/ˈdɔːrmɪtɔːri/' },
            { en: 'Attendance', vi: 'Sự chuyên cần', emoji: '✅', phonetic: '/əˈtendəns/' },
            { en: 'Assessment', vi: 'Đánh giá', emoji: '📝', phonetic: '/əˈsesmənt/' },
        ]
    },
    education_system: {
        name: 'Hệ thống giáo dục',
        level: 1,
        month: 2,
        words: [
            { en: 'Compulsory', vi: 'Bắt buộc', emoji: '📋', phonetic: '/kəmˈpʌlsəri/' },
            { en: 'Tuition', vi: 'Học phí', emoji: '💰', phonetic: '/tjuˈɪʃən/' },
            { en: 'Enrollment', vi: 'Tuyển sinh', emoji: '📄', phonetic: '/ɪnˈroʊlmənt/' },
            { en: 'Graduate', vi: 'Tốt nghiệp', emoji: '🎓', phonetic: '/ˈɡrædʒueɪt/' },
            { en: 'Vocational', vi: 'Nghề nghiệp', emoji: '🔧', phonetic: '/voʊˈkeɪʃənəl/' },
            { en: 'Literacy', vi: 'Biết chữ', emoji: '📖', phonetic: '/ˈlɪtərəsi/' },
            { en: 'Qualification', vi: 'Bằng cấp', emoji: '📜', phonetic: '/ˌkwɒlɪfɪˈkeɪʃən/' },
            { en: 'Pedagogy', vi: 'Phương pháp sư phạm', emoji: '📐', phonetic: '/ˈpedəɡɒdʒi/' },
            { en: 'Syllabus', vi: 'Đề cương', emoji: '📋', phonetic: '/ˈsɪləbəs/' },
            { en: 'Examination', vi: 'Kỳ thi', emoji: '✍️', phonetic: '/ɪɡˌzæmɪˈneɪʃən/' },
        ]
    },

    // === THÁNG 3 ===
    music: {
        name: 'Âm nhạc',
        level: 1,
        month: 3,
        words: [
            { en: 'Melody', vi: 'Giai điệu', emoji: '🎵', phonetic: '/ˈmelədi/' },
            { en: 'Rhythm', vi: 'Nhịp điệu', emoji: '🥁', phonetic: '/ˈrɪðəm/' },
            { en: 'Composer', vi: 'Nhà soạn nhạc', emoji: '🎼', phonetic: '/kəmˈpoʊzər/' },
            { en: 'Orchestra', vi: 'Dàn nhạc', emoji: '🎻', phonetic: '/ˈɔːrkɪstrə/' },
            { en: 'Concert', vi: 'Buổi hòa nhạc', emoji: '🎤', phonetic: '/ˈkɒnsərt/' },
            { en: 'Genre', vi: 'Thể loại', emoji: '🎧', phonetic: '/ˈʒɒnrə/' },
            { en: 'Lyrics', vi: 'Lời bài hát', emoji: '📝', phonetic: '/ˈlɪrɪks/' },
            { en: 'Harmony', vi: 'Hòa âm', emoji: '🎶', phonetic: '/ˈhɑːrməni/' },
            { en: 'Classical', vi: 'Cổ điển', emoji: '🎻', phonetic: '/ˈklæsɪkəl/' },
            { en: 'Performance', vi: 'Buổi biểu diễn', emoji: '🎭', phonetic: '/pərˈfɔːrməns/' },
        ]
    },
    musical_instruments: {
        name: 'Nhạc cụ',
        level: 1,
        month: 3,
        words: [
            { en: 'Violin', vi: 'Đàn vĩ cầm', emoji: '🎻', phonetic: '/ˌvaɪəˈlɪn/' },
            { en: 'Piano', vi: 'Đàn piano', emoji: '🎹', phonetic: '/piˈænoʊ/' },
            { en: 'Guitar', vi: 'Đàn ghi ta', emoji: '🎸', phonetic: '/ɡɪˈtɑːr/' },
            { en: 'Trumpet', vi: 'Kèn trumpet', emoji: '🎺', phonetic: '/ˈtrʌmpɪt/' },
            { en: 'Flute', vi: 'Sáo', emoji: '🪈', phonetic: '/fluːt/' },
            { en: 'Saxophone', vi: 'Kèn saxophone', emoji: '🎷', phonetic: '/ˈsæksəfoʊn/' },
            { en: 'Cello', vi: 'Đàn cello', emoji: '🎻', phonetic: '/ˈtʃeloʊ/' },
            { en: 'Harp', vi: 'Đàn hạc', emoji: '🎵', phonetic: '/hɑːrp/' },
            { en: 'Accordion', vi: 'Đàn accordion', emoji: '🪗', phonetic: '/əˈkɔːrdiən/' },
            { en: 'Tambourine', vi: 'Trống lắc', emoji: '🪘', phonetic: '/ˌtæmbəˈriːn/' },
        ]
    },

    // === THÁNG 5 ===
    special_education: {
        name: 'Giáo dục đặc biệt',
        level: 2,
        month: 5,
        words: [
            { en: 'Disability', vi: 'Khuyết tật', emoji: '♿', phonetic: '/ˌdɪsəˈbɪləti/' },
            { en: 'Braille', vi: 'Chữ nổi Braille', emoji: '📖', phonetic: '/breɪl/' },
            { en: 'Sign language', vi: 'Ngôn ngữ ký hiệu', emoji: '🤟', phonetic: '/saɪn ˈlæŋɡwɪdʒ/' },
            { en: 'Inclusive', vi: 'Hòa nhập', emoji: '🤗', phonetic: '/ɪnˈkluːsɪv/' },
            { en: 'Accessible', vi: 'Dễ tiếp cận', emoji: '🚪', phonetic: '/əkˈsesəbəl/' },
            { en: 'Mentor', vi: 'Người hướng dẫn', emoji: '👨‍🏫', phonetic: '/ˈmentɔːr/' },
            { en: 'Determination', vi: 'Sự quyết tâm', emoji: '💪', phonetic: '/dɪˌtɜːrmɪˈneɪʃən/' },
            { en: 'Overcome', vi: 'Vượt qua', emoji: '🏔️', phonetic: '/ˌoʊvərˈkʌm/' },
            { en: 'Visually impaired', vi: 'Khiếm thị', emoji: '👓', phonetic: '/ˈvɪʒuəli ɪmˈperd/' },
            { en: 'Hearing impaired', vi: 'Khiếm thính', emoji: '👂', phonetic: '/ˈhɪrɪŋ ɪmˈperd/' },
        ]
    },
    disability: {
        name: 'Khuyết tật & Hòa nhập',
        level: 2,
        month: 5,
        words: [
            { en: 'Wheelchair', vi: 'Xe lăn', emoji: '♿', phonetic: '/ˈwiːltʃer/' },
            { en: 'Prosthetic', vi: 'Chân/tay giả', emoji: '🦿', phonetic: '/prɒsˈθetɪk/' },
            { en: 'Therapy', vi: 'Trị liệu', emoji: '🏥', phonetic: '/ˈθerəpi/' },
            { en: 'Rehabilitation', vi: 'Phục hồi chức năng', emoji: '🔄', phonetic: '/ˌriːhəˌbɪlɪˈteɪʃən/' },
            { en: 'Empathy', vi: 'Sự đồng cảm', emoji: '💖', phonetic: '/ˈempəθi/' },
            { en: 'Prejudice', vi: 'Định kiến', emoji: '🚫', phonetic: '/ˈpredʒudɪs/' },
            { en: 'Discrimination', vi: 'Phân biệt đối xử', emoji: '⚖️', phonetic: '/dɪˌskrɪmɪˈneɪʃən/' },
            { en: 'Integration', vi: 'Hội nhập', emoji: '🤝', phonetic: '/ˌɪntɪˈɡreɪʃən/' },
            { en: 'Charity', vi: 'Từ thiện', emoji: '💝', phonetic: '/ˈtʃærəti/' },
            { en: 'Volunteer', vi: 'Tình nguyện viên', emoji: '🙋', phonetic: '/ˌvɒlənˈtɪr/' },
        ]
    },

    // === THÁNG 6 ===
    technology: {
        name: 'Công nghệ',
        level: 2,
        month: 6,
        words: [
            { en: 'Artificial intelligence', vi: 'Trí tuệ nhân tạo', emoji: '🤖', phonetic: '/ˌɑːrtɪˈfɪʃəl ɪnˈtelɪdʒəns/' },
            { en: 'Automation', vi: 'Tự động hóa', emoji: '⚙️', phonetic: '/ˌɔːtəˈmeɪʃən/' },
            { en: 'Innovation', vi: 'Sự đổi mới', emoji: '💡', phonetic: '/ˌɪnəˈveɪʃən/' },
            { en: 'Database', vi: 'Cơ sở dữ liệu', emoji: '💾', phonetic: '/ˈdeɪtəbeɪs/' },
            { en: 'Software', vi: 'Phần mềm', emoji: '💻', phonetic: '/ˈsɒftwer/' },
            { en: 'Hardware', vi: 'Phần cứng', emoji: '🖥️', phonetic: '/ˈhɑːrdwer/' },
            { en: 'Cybersecurity', vi: 'An ninh mạng', emoji: '🔒', phonetic: '/ˈsaɪbərsɪˌkjʊrəti/' },
            { en: 'Biotechnology', vi: 'Công nghệ sinh học', emoji: '🧬', phonetic: '/ˌbaɪoʊtekˈnɒlədʒi/' },
            { en: 'Smartphone', vi: 'Điện thoại thông minh', emoji: '📱', phonetic: '/ˈsmɑːrtfoʊn/' },
            { en: 'Application', vi: 'Ứng dụng', emoji: '📲', phonetic: '/ˌæplɪˈkeɪʃən/' },
        ]
    },
    inventions: {
        name: 'Phát minh & Sáng chế',
        level: 2,
        month: 6,
        words: [
            { en: 'Patent', vi: 'Bằng sáng chế', emoji: '📜', phonetic: '/ˈpætənt/' },
            { en: 'Breakthrough', vi: 'Bước đột phá', emoji: '🚀', phonetic: '/ˈbreɪkθruː/' },
            { en: 'Prototype', vi: 'Nguyên mẫu', emoji: '🔧', phonetic: '/ˈproʊtətaɪp/' },
            { en: 'Revolutionary', vi: 'Mang tính cách mạng', emoji: '🌟', phonetic: '/ˌrevəˈluːʃəneri/' },
            { en: 'Experiment', vi: 'Thí nghiệm', emoji: '🧪', phonetic: '/ɪkˈsperɪmənt/' },
            { en: 'Discovery', vi: 'Khám phá', emoji: '🔬', phonetic: '/dɪˈskʌvəri/' },
            { en: 'Laboratory', vi: 'Phòng thí nghiệm', emoji: '🏗️', phonetic: '/ˈlæbrətɔːri/' },
            { en: 'Hypothesis', vi: 'Giả thuyết', emoji: '🤔', phonetic: '/haɪˈpɒθəsɪs/' },
            { en: 'Analyze', vi: 'Phân tích', emoji: '📊', phonetic: '/ˈænəlaɪz/' },
            { en: 'Innovator', vi: 'Nhà đổi mới', emoji: '💡', phonetic: '/ˈɪnəveɪtər/' },
        ]
    },

    // === THÁNG 7 ===
    conservation: {
        name: 'Bảo tồn',
        level: 2,
        month: 7,
        words: [
            { en: 'Sanctuary', vi: 'Khu bảo tồn', emoji: '🏞️', phonetic: '/ˈsæŋktʃueri/' },
            { en: 'Poaching', vi: 'Săn bắn trộm', emoji: '🚫', phonetic: '/ˈpoʊtʃɪŋ/' },
            { en: 'Reforestation', vi: 'Tái trồng rừng', emoji: '🌲', phonetic: '/ˌriːfɒrɪˈsteɪʃən/' },
            { en: 'Biodegradable', vi: 'Phân hủy sinh học', emoji: '🍂', phonetic: '/ˌbaɪoʊdɪˈɡreɪdəbəl/' },
            { en: 'Preserve', vi: 'Bảo tồn', emoji: '💚', phonetic: '/prɪˈzɜːrv/' },
            { en: 'Extinction', vi: 'Sự tuyệt chủng', emoji: '💀', phonetic: '/ɪkˈstɪŋkʃən/' },
            { en: 'Habitat loss', vi: 'Mất môi trường sống', emoji: '🏜️', phonetic: '/ˈhæbɪtæt lɒs/' },
            { en: 'Sustainable', vi: 'Bền vững', emoji: '🌍', phonetic: '/səˈsteɪnəbəl/' },
            { en: 'Ecosystem', vi: 'Hệ sinh thái', emoji: '🌏', phonetic: '/ˈiːkoʊsɪstəm/' },
            { en: 'Restoration', vi: 'Khôi phục', emoji: '🔄', phonetic: '/ˌrestəˈreɪʃən/' },
        ]
    },
    wildlife: {
        name: 'Đời sống hoang dã',
        level: 2,
        month: 7,
        words: [
            { en: 'Predator', vi: 'Thú ăn thịt', emoji: '🦁', phonetic: '/ˈpredətər/' },
            { en: 'Prey', vi: 'Con mồi', emoji: '🦌', phonetic: '/preɪ/' },
            { en: 'Migration', vi: 'Sự di cư', emoji: '🦅', phonetic: '/maɪˈɡreɪʃən/' },
            { en: 'Hibernation', vi: 'Ngủ đông', emoji: '🐻', phonetic: '/ˌhaɪbərˈneɪʃən/' },
            { en: 'Camouflage', vi: 'Ngụy trang', emoji: '🦎', phonetic: '/ˈkæməflɑːʒ/' },
            { en: 'Endangered', vi: 'Có nguy cơ tuyệt chủng', emoji: '🐼', phonetic: '/ɪnˈdeɪndʒərd/' },
            { en: 'Species', vi: 'Loài', emoji: '🧬', phonetic: '/ˈspiːʃiːz/' },
            { en: 'Food chain', vi: 'Chuỗi thức ăn', emoji: '🔗', phonetic: '/fuːd tʃeɪn/' },
            { en: 'Breeding', vi: 'Sinh sản', emoji: '🐣', phonetic: '/ˈbriːdɪŋ/' },
            { en: 'Nocturnal', vi: 'Hoạt động về đêm', emoji: '🦉', phonetic: '/nɒkˈtɜːrnəl/' },
        ]
    },

    // === THÁNG 9 ===
    mass_media: {
        name: 'Truyền thông đại chúng',
        level: 3,
        month: 9,
        words: [
            { en: 'Press conference', vi: 'Họp báo', emoji: '🎙️', phonetic: '/pres ˈkɒnfərəns/' },
            { en: 'Circulation', vi: 'Số lượng phát hành', emoji: '📰', phonetic: '/ˌsɜːrkjəˈleɪʃən/' },
            { en: 'Tabloid', vi: 'Báo lá cải', emoji: '📰', phonetic: '/ˈtæblɔɪd/' },
            { en: 'Propaganda', vi: 'Tuyên truyền', emoji: '📢', phonetic: '/ˌprɒpəˈɡændə/' },
            { en: 'Correspondent', vi: 'Phóng viên thường trú', emoji: '✍️', phonetic: '/ˌkɒrɪˈspɒndənt/' },
            { en: 'Censorship', vi: 'Kiểm duyệt', emoji: '🚫', phonetic: '/ˈsensərʃɪp/' },
            { en: 'Publication', vi: 'Ấn phẩm', emoji: '📖', phonetic: '/ˌpʌblɪˈkeɪʃən/' },
            { en: 'Subscription', vi: 'Đăng ký dài hạn', emoji: '📧', phonetic: '/səbˈskrɪpʃən/' },
            { en: 'Paparazzi', vi: 'Tay săn ảnh', emoji: '📸', phonetic: '/ˌpæpəˈrætsi/' },
            { en: 'Objectivity', vi: 'Tính khách quan', emoji: '⚖️', phonetic: '/ˌɒbdʒekˈtɪvəti/' },
        ]
    },
    journalism: {
        name: 'Báo chí',
        level: 3,
        month: 9,
        words: [
            { en: 'Editorial', vi: 'Bài xã luận', emoji: '✍️', phonetic: '/ˌedɪˈtɔːriəl/' },
            { en: 'Column', vi: 'Chuyên mục', emoji: '📰', phonetic: '/ˈkɒləm/' },
            { en: 'Headline', vi: 'Tiêu đề', emoji: '📰', phonetic: '/ˈhedlaɪn/' },
            { en: 'Deadline', vi: 'Hạn chót', emoji: '⏰', phonetic: '/ˈdedlaɪn/' },
            { en: 'Source', vi: 'Nguồn tin', emoji: '🔍', phonetic: '/sɔːrs/' },
            { en: 'Anonymous', vi: 'Ẩn danh', emoji: '🕵️', phonetic: '/əˈnɒnɪməs/' },
            { en: 'Investigation', vi: 'Điều tra', emoji: '🔎', phonetic: '/ɪnˌvestɪˈɡeɪʃən/' },
            { en: 'Breaking news', vi: 'Tin nóng', emoji: '🔴', phonetic: '/ˈbreɪkɪŋ njuːz/' },
            { en: 'Bias', vi: 'Thiên kiến', emoji: '↔️', phonetic: '/ˈbaɪəs/' },
            { en: 'Exclusive', vi: 'Độc quyền', emoji: '⭐', phonetic: '/ɪkˈskluːsɪv/' },
        ]
    },

    // === THÁNG 10 ===
    new_ways_to_learn: {
        name: 'Phương pháp học mới',
        level: 3,
        month: 10,
        words: [
            { en: 'Distance learning', vi: 'Học từ xa', emoji: '🏠', phonetic: '/ˈdɪstəns ˈlɜːrnɪŋ/' },
            { en: 'Virtual classroom', vi: 'Lớp học ảo', emoji: '💻', phonetic: '/ˈvɜːrtʃuəl ˈklæsruːm/' },
            { en: 'Interactive', vi: 'Tương tác', emoji: '🖱️', phonetic: '/ˌɪntərˈæktɪv/' },
            { en: 'Self-paced', vi: 'Tự điều chỉnh tốc độ', emoji: '⏱️', phonetic: '/ˌself ˈpeɪst/' },
            { en: 'Multimedia', vi: 'Đa phương tiện', emoji: '🎥', phonetic: '/ˌmʌltiˈmiːdiə/' },
            { en: 'Tutorial', vi: 'Bài hướng dẫn', emoji: '📹', phonetic: '/tjuːˈtɔːriəl/' },
            { en: 'Webinar', vi: 'Hội thảo trực tuyến', emoji: '🌐', phonetic: '/ˈwebɪnɑːr/' },
            { en: 'Collaborate', vi: 'Cộng tác', emoji: '🤝', phonetic: '/kəˈlæbəreɪt/' },
            { en: 'Forum', vi: 'Diễn đàn', emoji: '💬', phonetic: '/ˈfɔːrəm/' },
            { en: 'Certificate', vi: 'Chứng chỉ', emoji: '📜', phonetic: '/sərˈtɪfɪkət/' },
        ]
    },
    e_learning: {
        name: 'Học trực tuyến',
        level: 3,
        month: 10,
        words: [
            { en: 'Platform', vi: 'Nền tảng', emoji: '🖥️', phonetic: '/ˈplætfɔːrm/' },
            { en: 'Subscription', vi: 'Đăng ký', emoji: '📧', phonetic: '/səbˈskrɪpʃən/' },
            { en: 'Podcast', vi: 'Podcast', emoji: '🎧', phonetic: '/ˈpɒdkæst/' },
            { en: 'Bandwidth', vi: 'Băng thông', emoji: '📶', phonetic: '/ˈbændwɪdθ/' },
            { en: 'Upload', vi: 'Tải lên', emoji: '⬆️', phonetic: '/ˌʌpˈloʊd/' },
            { en: 'Download', vi: 'Tải xuống', emoji: '⬇️', phonetic: '/ˌdaʊnˈloʊd/' },
            { en: 'Feedback', vi: 'Phản hồi', emoji: '💬', phonetic: '/ˈfiːdbæk/' },
            { en: 'Assessment', vi: 'Đánh giá', emoji: '📝', phonetic: '/əˈsesmənt/' },
            { en: 'Gamification', vi: 'Trò chơi hóa', emoji: '🎮', phonetic: '/ˌɡeɪmɪfɪˈkeɪʃən/' },
            { en: 'Module', vi: 'Mô-đun', emoji: '📦', phonetic: '/ˈmɒdjuːl/' },
        ]
    },

    // === THÁNG 11 ===
    endangered_species: {
        name: 'Loài có nguy cơ tuyệt chủng',
        level: 3,
        month: 11,
        words: [
            { en: 'Rhinoceros', vi: 'Tê giác', emoji: '🦏', phonetic: '/raɪˈnɒsərəs/' },
            { en: 'Orangutan', vi: 'Đười ươi', emoji: '🦧', phonetic: '/ɔːˈræŋuːtæn/' },
            { en: 'Giant panda', vi: 'Gấu trúc', emoji: '🐼', phonetic: '/ˌdʒaɪənt ˈpændə/' },
            { en: 'Sea turtle', vi: 'Rùa biển', emoji: '🐢', phonetic: '/siː ˈtɜːrtəl/' },
            { en: 'Snow leopard', vi: 'Báo tuyết', emoji: '🐆', phonetic: '/snoʊ ˈlepərd/' },
            { en: 'Captive breeding', vi: 'Nhân giống trong nuôi nhốt', emoji: '🐣', phonetic: '/ˈkæptɪv ˈbriːdɪŋ/' },
            { en: 'Ivory', vi: 'Ngà voi', emoji: '🦷', phonetic: '/ˈaɪvəri/' },
            { en: 'Trafficking', vi: 'Buôn bán trái phép', emoji: '🚫', phonetic: '/ˈtræfɪkɪŋ/' },
            { en: 'Conservation status', vi: 'Tình trạng bảo tồn', emoji: '📊', phonetic: '/ˌkɒnsərˈveɪʃən ˈsteɪtəs/' },
            { en: 'Vulnerability', vi: 'Sự dễ bị tổn thương', emoji: '⚠️', phonetic: '/ˌvʌlnərəˈbɪləti/' },
        ]
    },
    animal_protection: {
        name: 'Bảo vệ động vật',
        level: 3,
        month: 11,
        words: [
            { en: 'Shelter', vi: 'Nơi trú ẩn', emoji: '🏠', phonetic: '/ˈʃeltər/' },
            { en: 'Rescue center', vi: 'Trung tâm cứu hộ', emoji: '🏥', phonetic: '/ˈreskjuː ˈsentər/' },
            { en: 'Habitat', vi: 'Môi trường sống', emoji: '🌿', phonetic: '/ˈhæbɪtæt/' },
            { en: 'Population decline', vi: 'Suy giảm số lượng', emoji: '📉', phonetic: '/ˌpɒpjuˈleɪʃən dɪˈklaɪn/' },
            { en: 'Legislation', vi: 'Luật pháp', emoji: '📜', phonetic: '/ˌledʒɪsˈleɪʃən/' },
            { en: 'Awareness campaign', vi: 'Chiến dịch nâng cao nhận thức', emoji: '📢', phonetic: '/əˈwernəs kæmˈpeɪn/' },
            { en: 'Donation', vi: 'Quyên góp', emoji: '💰', phonetic: '/doʊˈneɪʃən/' },
            { en: 'Ecosystem balance', vi: 'Cân bằng hệ sinh thái', emoji: '⚖️', phonetic: '/ˈiːkoʊsɪstəm ˈbæləns/' },
            { en: 'Genetic diversity', vi: 'Đa dạng di truyền', emoji: '🧬', phonetic: '/dʒəˈnetɪk daɪˈvɜːrsəti/' },
            { en: 'Advocate', vi: 'Người ủng hộ', emoji: '🗣️', phonetic: '/ˈædvəkeɪt/' },
        ]
    },

    // === THÁNG 12 ===
    national_parks: {
        name: 'Vườn quốc gia',
        level: 3,
        month: 12,
        words: [
            { en: 'Reserve', vi: 'Khu bảo tồn', emoji: '🏞️', phonetic: '/rɪˈzɜːrv/' },
            { en: 'Ranger', vi: 'Kiểm lâm', emoji: '🧑‍🌾', phonetic: '/ˈreɪndʒər/' },
            { en: 'Trail', vi: 'Đường mòn', emoji: '🥾', phonetic: '/treɪl/' },
            { en: 'Waterfall', vi: 'Thác nước', emoji: '🌊', phonetic: '/ˈwɔːtərfɔːl/' },
            { en: 'Canopy', vi: 'Tán cây', emoji: '🌳', phonetic: '/ˈkænəpi/' },
            { en: 'Biodiversity', vi: 'Đa dạng sinh học', emoji: '🦋', phonetic: '/ˌbaɪoʊdaɪˈvɜːrsəti/' },
            { en: 'Wilderness', vi: 'Vùng hoang dã', emoji: '🏕️', phonetic: '/ˈwɪldərnəs/' },
            { en: 'Landscape', vi: 'Phong cảnh', emoji: '🖼️', phonetic: '/ˈlændskeɪp/' },
            { en: 'Expedition', vi: 'Chuyến thám hiểm', emoji: '🧭', phonetic: '/ˌekspɪˈdɪʃən/' },
            { en: 'Flora and fauna', vi: 'Hệ thực vật và động vật', emoji: '🌺', phonetic: '/ˈflɔːrə ænd ˈfɔːnə/' },
        ]
    },
    ecotourism: {
        name: 'Du lịch sinh thái',
        level: 3,
        month: 12,
        words: [
            { en: 'Sustainable tourism', vi: 'Du lịch bền vững', emoji: '🌿', phonetic: '/səˈsteɪnəbəl ˈtʊrɪzəm/' },
            { en: 'Conservation area', vi: 'Khu bảo tồn', emoji: '🛡️', phonetic: '/ˌkɒnsərˈveɪʃən ˈeriə/' },
            { en: 'Carbon neutral', vi: 'Trung hòa carbon', emoji: '🌍', phonetic: '/ˈkɑːrbən ˈnjuːtrəl/' },
            { en: 'Trekking', vi: 'Đi bộ đường dài', emoji: '🥾', phonetic: '/ˈtrekɪŋ/' },
            { en: 'Birdwatching', vi: 'Ngắm chim', emoji: '🐦', phonetic: '/ˈbɜːrdwɒtʃɪŋ/' },
            { en: 'Kayaking', vi: 'Chèo thuyền kayak', emoji: '🛶', phonetic: '/ˈkaɪækɪŋ/' },
            { en: 'Indigenous culture', vi: 'Văn hóa bản địa', emoji: '🏕️', phonetic: '/ɪnˈdɪdʒɪnəs ˈkʌltʃər/' },
            { en: 'Eco-lodge', vi: 'Nhà nghỉ sinh thái', emoji: '🏡', phonetic: '/ˈiːkoʊ lɒdʒ/' },
            { en: 'Responsible travel', vi: 'Du lịch có trách nhiệm', emoji: '✅', phonetic: '/rɪˈspɒnsəbəl ˈtrævəl/' },
            { en: 'Heritage site', vi: 'Di sản', emoji: '🏛️', phonetic: '/ˈherɪtɪdʒ saɪt/' },
        ]
    },
};

// ============================================
// PHONICS - WORD STRESS & CONNECTED SPEECH
// ============================================
GRADE_DATA[10].phonics = [
    { letter: 'Stress: Ooo', sound: 'First of three', words: [
        { word: 'FAMily', highlight: 'FAM', emoji: '👨‍👩‍👧‍👦' },
        { word: 'MELody', highlight: 'MEL', emoji: '🎵' },
        { word: 'TECHnology', highlight: 'TECH', emoji: '💻' }
    ]},
    { letter: 'Stress: oOo', sound: 'Second of three', words: [
        { word: 'reSPONsible', highlight: 'SPON', emoji: '💼' },
        { word: 'comPOser', highlight: 'PO', emoji: '🎼' },
        { word: 'diSAbility', highlight: 'SA', emoji: '♿' }
    ]},
    { letter: 'Stress: ooOo', sound: 'Third of four', words: [
        { word: 'autoMATion', highlight: 'MA', emoji: '⚙️' },
        { word: 'innoVAtion', highlight: 'VA', emoji: '💡' },
        { word: 'conservATion', highlight: 'VA', emoji: '🌍' }
    ]},
    { letter: '-ity', sound: '/əti/', words: [
        { word: 'Diversity', highlight: 'ity', emoji: '🌈' },
        { word: 'Objectivity', highlight: 'ity', emoji: '⚖️' },
        { word: 'Electricity', highlight: 'ity', emoji: '⚡' }
    ]},
    { letter: '-ous', sound: '/əs/', words: [
        { word: 'Dangerous', highlight: 'ous', emoji: '⚠️' },
        { word: 'Anonymous', highlight: 'ous', emoji: '🕵️' },
        { word: 'Indigenous', highlight: 'ous', emoji: '🏕️' }
    ]},
    { letter: '-ive', sound: '/ɪv/', words: [
        { word: 'Interactive', highlight: 'ive', emoji: '🖱️' },
        { word: 'Inclusive', highlight: 'ive', emoji: '🤗' },
        { word: 'Exclusive', highlight: 'ive', emoji: '⭐' }
    ]},
    { letter: '-ment', sound: '/mənt/', words: [
        { word: 'Assessment', highlight: 'ment', emoji: '📝' },
        { word: 'Enrollment', highlight: 'ment', emoji: '📄' },
        { word: 'Environment', highlight: 'ment', emoji: '🌍' }
    ]},
    { letter: 'Elision', sound: 'Nuốt âm', words: [
        { word: 'las(t) month', highlight: 't', emoji: '📅' },
        { word: 'nex(t) week', highlight: 't', emoji: '📆' },
        { word: 'mus(t) be', highlight: 't', emoji: '✅' }
    ]},
    { letter: 'Assimilation', sound: 'Đồng hóa âm', words: [
        { word: 'ten bars → tem bars', highlight: 'n→m', emoji: '🔄' },
        { word: 'good boy → goob boy', highlight: 'd→b', emoji: '👦' },
        { word: 'in Paris → im Paris', highlight: 'n→m', emoji: '🗼' }
    ]},
    { letter: 'Weak forms', sound: 'Dạng yếu', words: [
        { word: 'can /kən/', highlight: 'can', emoji: '💪' },
        { word: 'have /həv/', highlight: 'have', emoji: '✋' },
        { word: 'for /fər/', highlight: 'for', emoji: '➡️' }
    ]},
    { letter: 'Contrastive stress', sound: 'Nhấn đối lập', words: [
        { word: 'I said BLUE, not RED', highlight: 'BLUE', emoji: '🔵' },
        { word: 'SHE plays, not HE', highlight: 'SHE', emoji: '👩' },
        { word: 'We WALK, not RUN', highlight: 'WALK', emoji: '🚶' }
    ]},
];

// ============================================
// CÂU MẪU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[10].sentences = {
    level1: [
        { sentence: ['My', 'mother', 'is', 'the', 'breadwinner', 'of', 'our', 'family'], emoji: '💪', vi: 'Mẹ tôi là trụ cột của gia đình chúng tôi', extra: ['his', 'a'] },
        { sentence: ['Students', 'must', 'follow', 'the', 'school', 'curriculum'], emoji: '📚', vi: 'Học sinh phải theo chương trình học', extra: ['can', 'a'] },
        { sentence: ['She', 'plays', 'the', 'violin', 'in', 'the', 'orchestra'], emoji: '🎻', vi: 'Cô ấy chơi đàn vĩ cầm trong dàn nhạc', extra: ['on', 'a'] },
        { sentence: ['Household', 'chores', 'should', 'be', 'shared', 'equally'], emoji: '🧹', vi: 'Việc nhà nên được chia sẻ đều nhau', extra: ['unfairly', 'a'] },
        { sentence: ['The', 'concert', 'was', 'a', 'wonderful', 'performance'], emoji: '🎤', vi: 'Buổi hòa nhạc là một buổi biểu diễn tuyệt vời', extra: ['terrible', 'the'] },
        { sentence: ['Education', 'is', 'compulsory', 'for', 'all', 'children'], emoji: '📋', vi: 'Giáo dục là bắt buộc cho tất cả trẻ em', extra: ['optional', 'some'] },
        { sentence: ['Three', 'generations', 'live', 'together', 'in', 'my', 'house'], emoji: '👪', vi: 'Ba thế hệ sống cùng nhau trong nhà tôi', extra: ['apart', 'her'] },
        { sentence: ['Classical', 'music', 'helps', 'me', 'concentrate', 'on', 'studying'], emoji: '🎶', vi: 'Nhạc cổ điển giúp tôi tập trung học bài', extra: ['distract', 'in'] },
    ],
    level2: [
        { sentence: ['People', 'with', 'disabilities', 'deserve', 'equal', 'opportunities'], emoji: '♿', vi: 'Người khuyết tật xứng đáng được cơ hội bình đẳng', extra: ['fewer', 'a'] },
        { sentence: ['Artificial', 'intelligence', 'is', 'changing', 'the', 'way', 'we', 'live'], emoji: '🤖', vi: 'Trí tuệ nhân tạo đang thay đổi cách chúng ta sống', extra: ['keeping', 'a'] },
        { sentence: ['The', 'sanctuary', 'protects', 'endangered', 'animals', 'from', 'poaching'], emoji: '🏞️', vi: 'Khu bảo tồn bảo vệ động vật nguy cấp khỏi săn trộm', extra: ['exposes', 'to'] },
        { sentence: ['Scientists', 'made', 'a', 'breakthrough', 'in', 'biotechnology'], emoji: '🧬', vi: 'Các nhà khoa học đã có bước đột phá trong công nghệ sinh học', extra: ['failure', 'on'] },
        { sentence: ['Inclusive', 'education', 'benefits', 'all', 'students'], emoji: '🤗', vi: 'Giáo dục hòa nhập mang lại lợi ích cho tất cả học sinh', extra: ['harms', 'some'] },
        { sentence: ['The', 'predator', 'hides', 'and', 'waits', 'for', 'its', 'prey'], emoji: '🦁', vi: 'Thú ăn thịt ẩn nấp và chờ con mồi', extra: ['runs', 'their'] },
    ],
    level3: [
        { sentence: ['The', 'tabloid', 'published', 'an', 'exclusive', 'story', 'about', 'the', 'celebrity'], emoji: '📰', vi: 'Báo lá cải đăng bài độc quyền về người nổi tiếng', extra: ['common', 'a'] },
        { sentence: ['Distance', 'learning', 'allows', 'students', 'to', 'study', 'at', 'their', 'own', 'pace'], emoji: '🏠', vi: 'Học từ xa cho phép học sinh học theo tốc độ riêng', extra: ['prevents', 'a'] },
        { sentence: ['The', 'rhinoceros', 'is', 'critically', 'endangered', 'due', 'to', 'poaching'], emoji: '🦏', vi: 'Tê giác đang cực kỳ nguy cấp do nạn săn trộm', extra: ['safe', 'for'] },
        { sentence: ['National', 'parks', 'preserve', 'biodiversity', 'and', 'natural', 'landscapes'], emoji: '🏞️', vi: 'Vườn quốc gia bảo tồn đa dạng sinh học và cảnh quan tự nhiên', extra: ['destroy', 'or'] },
        { sentence: ['The', 'ranger', 'guided', 'the', 'expedition', 'through', 'the', 'wilderness'], emoji: '🧭', vi: 'Kiểm lâm dẫn đoàn thám hiểm qua vùng hoang dã', extra: ['lost', 'into'] },
        { sentence: ['Captive', 'breeding', 'programs', 'help', 'increase', 'the', 'population', 'of', 'endangered', 'species'], emoji: '🐣', vi: 'Chương trình nhân giống giúp tăng số lượng loài nguy cấp', extra: ['decrease', 'a'] },
    ],
};

// ============================================
// SPELLING THEO CẤP ĐỘ
// ============================================
GRADE_DATA[10].spelling = {
    level1: [
        { word: 'SIBLING', emoji: '👫', vi: 'Anh chị em ruột' },
        { word: 'HARMONY', emoji: '🎶', vi: 'Sự hòa hợp' },
        { word: 'LAUNDRY', emoji: '🧺', vi: 'Giặt giũ' },
        { word: 'SEMESTER', emoji: '📅', vi: 'Học kỳ' },
        { word: 'ORCHESTRA', emoji: '🎻', vi: 'Dàn nhạc' },
        { word: 'RHYTHM', emoji: '🥁', vi: 'Nhịp điệu' },
        { word: 'GUITAR', emoji: '🎸', vi: 'Đàn ghi ta' },
        { word: 'DISCIPLINE', emoji: '📏', vi: 'Kỷ luật' },
        { word: 'SACRIFICE', emoji: '❤️', vi: 'Hy sinh' },
        { word: 'SYLLABUS', emoji: '📋', vi: 'Đề cương' },
        { word: 'ACCORDION', emoji: '🪗', vi: 'Đàn accordion' },
        { word: 'CURRICULUM', emoji: '📚', vi: 'Chương trình học' },
    ],
    level2: [
        { word: 'DISABILITY', emoji: '♿', vi: 'Khuyết tật' },
        { word: 'INNOVATION', emoji: '💡', vi: 'Sự đổi mới' },
        { word: 'SANCTUARY', emoji: '🏞️', vi: 'Khu bảo tồn' },
        { word: 'AUTOMATION', emoji: '⚙️', vi: 'Tự động hóa' },
        { word: 'CAMOUFLAGE', emoji: '🦎', vi: 'Ngụy trang' },
        { word: 'PREJUDICE', emoji: '🚫', vi: 'Định kiến' },
        { word: 'LABORATORY', emoji: '🧪', vi: 'Phòng thí nghiệm' },
        { word: 'HYPOTHESIS', emoji: '🤔', vi: 'Giả thuyết' },
        { word: 'MIGRATION', emoji: '🦅', vi: 'Sự di cư' },
        { word: 'NOCTURNAL', emoji: '🦉', vi: 'Hoạt động về đêm' },
        { word: 'WHEELCHAIR', emoji: '♿', vi: 'Xe lăn' },
        { word: 'REHABILITATION', emoji: '🔄', vi: 'Phục hồi chức năng' },
    ],
    level3: [
        { word: 'CORRESPONDENT', emoji: '✍️', vi: 'Phóng viên thường trú' },
        { word: 'RHINOCEROS', emoji: '🦏', vi: 'Tê giác' },
        { word: 'BIODIVERSITY', emoji: '🦋', vi: 'Đa dạng sinh học' },
        { word: 'CYBERSECURITY', emoji: '🔒', vi: 'An ninh mạng' },
        { word: 'GAMIFICATION', emoji: '🎮', vi: 'Trò chơi hóa' },
        { word: 'INVESTIGATION', emoji: '🔎', vi: 'Điều tra' },
        { word: 'VULNERABILITY', emoji: '⚠️', vi: 'Dễ bị tổn thương' },
        { word: 'PROPAGANDA', emoji: '📢', vi: 'Tuyên truyền' },
        { word: 'WILDERNESS', emoji: '🏕️', vi: 'Vùng hoang dã' },
        { word: 'EXPEDITION', emoji: '🧭', vi: 'Chuyến thám hiểm' },
        { word: 'TRAFFICKING', emoji: '🚫', vi: 'Buôn bán trái phép' },
        { word: 'BIOTECHNOLOGY', emoji: '🧬', vi: 'Công nghệ sinh học' },
    ],
};

// ============================================
// NGHE HIỂU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[10].listening = {
    level1: [
        { word: 'Breadwinner', options: [{ emoji: '💪', label: 'Breadwinner' }, { emoji: '👶', label: 'Upbringing' }, { emoji: '👫', label: 'Sibling' }, { emoji: '🤝', label: 'Bond' }], correct: 0 },
        { word: 'Scholarship', options: [{ emoji: '📅', label: 'Semester' }, { emoji: '🎓', label: 'Scholarship' }, { emoji: '📏', label: 'Discipline' }, { emoji: '✅', label: 'Attendance' }], correct: 1 },
        { word: 'Composer', options: [{ emoji: '🎤', label: 'Concert' }, { emoji: '🎧', label: 'Genre' }, { emoji: '🎼', label: 'Composer' }, { emoji: '🥁', label: 'Rhythm' }], correct: 2 },
        { word: 'Tambourine', options: [{ emoji: '🎸', label: 'Guitar' }, { emoji: '🎹', label: 'Piano' }, { emoji: '🎺', label: 'Trumpet' }, { emoji: '🪘', label: 'Tambourine' }], correct: 3 },
        { word: 'Laundry', options: [{ emoji: '🧺', label: 'Laundry' }, { emoji: '🧹', label: 'Vacuuming' }, { emoji: '👔', label: 'Ironing' }, { emoji: '🍽️', label: 'Dishwashing' }], correct: 0 },
        { word: 'Dormitory', options: [{ emoji: '📚', label: 'Curriculum' }, { emoji: '🏢', label: 'Dormitory' }, { emoji: '📝', label: 'Assessment' }, { emoji: '📋', label: 'Syllabus' }], correct: 1 },
    ],
    level2: [
        { word: 'Braille', options: [{ emoji: '📖', label: 'Braille' }, { emoji: '🤟', label: 'Sign language' }, { emoji: '♿', label: 'Wheelchair' }, { emoji: '🦿', label: 'Prosthetic' }], correct: 0 },
        { word: 'Prototype', options: [{ emoji: '📜', label: 'Patent' }, { emoji: '🔧', label: 'Prototype' }, { emoji: '🧪', label: 'Experiment' }, { emoji: '🔬', label: 'Discovery' }], correct: 1 },
        { word: 'Poaching', options: [{ emoji: '🌲', label: 'Reforestation' }, { emoji: '💚', label: 'Preserve' }, { emoji: '🚫', label: 'Poaching' }, { emoji: '💀', label: 'Extinction' }], correct: 2 },
        { word: 'Nocturnal', options: [{ emoji: '🦁', label: 'Predator' }, { emoji: '🦅', label: 'Migration' }, { emoji: '🐻', label: 'Hibernation' }, { emoji: '🦉', label: 'Nocturnal' }], correct: 3 },
        { word: 'Cybersecurity', options: [{ emoji: '🔒', label: 'Cybersecurity' }, { emoji: '💻', label: 'Software' }, { emoji: '🖥️', label: 'Hardware' }, { emoji: '💾', label: 'Database' }], correct: 0 },
        { word: 'Camouflage', options: [{ emoji: '🔗', label: 'Food chain' }, { emoji: '🦎', label: 'Camouflage' }, { emoji: '🐣', label: 'Breeding' }, { emoji: '🧬', label: 'Species' }], correct: 1 },
        { word: 'Empathy', options: [{ emoji: '🚫', label: 'Prejudice' }, { emoji: '⚖️', label: 'Discrimination' }, { emoji: '💖', label: 'Empathy' }, { emoji: '🤝', label: 'Integration' }], correct: 2 },
        { word: 'Advocate', options: [{ emoji: '📉', label: 'Decline' }, { emoji: '📜', label: 'Legislation' }, { emoji: '💰', label: 'Donation' }, { emoji: '🗣️', label: 'Advocate' }], correct: 3 },
    ],
    level3: [
        { word: 'Tabloid', options: [{ emoji: '📰', label: 'Tabloid' }, { emoji: '🎙️', label: 'Press conference' }, { emoji: '📢', label: 'Propaganda' }, { emoji: '📖', label: 'Publication' }], correct: 0 },
        { word: 'Webinar', options: [{ emoji: '💻', label: 'Virtual classroom' }, { emoji: '🌐', label: 'Webinar' }, { emoji: '📹', label: 'Tutorial' }, { emoji: '🎧', label: 'Podcast' }], correct: 1 },
        { word: 'Ivory', options: [{ emoji: '🦏', label: 'Rhinoceros' }, { emoji: '🐼', label: 'Giant panda' }, { emoji: '🦷', label: 'Ivory' }, { emoji: '🐢', label: 'Sea turtle' }], correct: 2 },
        { word: 'Heritage site', options: [{ emoji: '🥾', label: 'Trail' }, { emoji: '🌳', label: 'Canopy' }, { emoji: '🖼️', label: 'Landscape' }, { emoji: '🏛️', label: 'Heritage site' }], correct: 3 },
        { word: 'Ranger', options: [{ emoji: '🧑‍🌾', label: 'Ranger' }, { emoji: '🏞️', label: 'Reserve' }, { emoji: '🏕️', label: 'Wilderness' }, { emoji: '🧭', label: 'Expedition' }], correct: 0 },
        { word: 'Gamification', options: [{ emoji: '📦', label: 'Module' }, { emoji: '🎮', label: 'Gamification' }, { emoji: '💬', label: 'Feedback' }, { emoji: '📝', label: 'Assessment' }], correct: 1 },
    ],
};
