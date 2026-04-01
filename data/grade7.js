// ============================================
// LỚP 7 - GIÁO TRÌNH 12 THÁNG - 3 CẤP ĐỘ
// ============================================
GRADE_DATA[7] = {};
GRADE_DATA[7].info = {
    levels: [
        { id: 1, name: 'Pre-Intermediate', nameVi: 'Sơ trung cấp', months: [1,2,3,4], color: '#4ECDC4', icon: '🌱' },
        { id: 2, name: 'Intermediate', nameVi: 'Trung cấp', months: [5,6,7,8], color: '#A855F7', icon: '🌿' },
        { id: 3, name: 'Upper-Intermediate', nameVi: 'Trung cấp cao', months: [9,10,11,12], color: '#FF6B9D', icon: '🌳' },
    ],
    months: [
        { month: 1, title: 'Thông tin cá nhân', topics: ['personal_info', 'appearance', 'hobbies_interests'] },
        { month: 2, title: 'Thói quen hàng ngày', topics: ['daily_routines', 'time_management'] },
        { month: 3, title: 'Cộng đồng', topics: ['community_service', 'neighborhood'] },
        { month: 4, title: 'Ôn tập cấp 1', topics: ['review_pre_intermediate'] },
        { month: 5, title: 'Âm nhạc & Phim ảnh', topics: ['music', 'films'] },
        { month: 6, title: 'Truyền hình & Truyền thông', topics: ['television', 'media'] },
        { month: 7, title: 'Giao thông & Ô nhiễm', topics: ['traffic', 'pollution'] },
        { month: 8, title: 'Ôn tập cấp 2', topics: ['review_intermediate'] },
        { month: 9, title: 'Lễ hội thế giới', topics: ['festivals_worldwide', 'celebrations'] },
        { month: 10, title: 'Năng lượng & Môi trường', topics: ['energy', 'green_living'] },
        { month: 11, title: 'Du lịch & Khám phá', topics: ['travel_experiences', 'destinations'] },
        { month: 12, title: 'Tổng ôn tập', topics: ['review_upper_intermediate'] },
    ]
};

// ============================================
// TỪ VỰNG - 250+ từ chia theo chủ đề
// ============================================
GRADE_DATA[7].vocab = {
    // === THÁNG 1 ===
    personal_info: {
        name: 'Thông tin cá nhân',
        level: 1,
        month: 1,
        words: [
            { en: 'Nationality', vi: 'Quốc tịch', emoji: '🏳️', phonetic: '/ˌnæʃəˈnæləti/' },
            { en: 'Occupation', vi: 'Nghề nghiệp', emoji: '💼', phonetic: '/ˌɒkjuˈpeɪʃən/' },
            { en: 'Date of birth', vi: 'Ngày sinh', emoji: '🎂', phonetic: '/deɪt ɒv bɜːrθ/' },
            { en: 'Marital status', vi: 'Tình trạng hôn nhân', emoji: '💍', phonetic: '/ˈmærɪtəl ˈsteɪtəs/' },
            { en: 'Identity card', vi: 'Chứng minh nhân dân', emoji: '🪪', phonetic: '/aɪˈdentəti kɑːrd/' },
            { en: 'Permanent address', vi: 'Địa chỉ thường trú', emoji: '🏠', phonetic: '/ˈpɜːrmənənt əˈdres/' },
            { en: 'Temporary', vi: 'Tạm thời', emoji: '⏱️', phonetic: '/ˈtempəreri/' },
            { en: 'Background', vi: 'Lai lịch / Nền tảng', emoji: '📋', phonetic: '/ˈbækɡraʊnd/' },
            { en: 'Characteristic', vi: 'Đặc điểm', emoji: '🔍', phonetic: '/ˌkærəktəˈrɪstɪk/' },
            { en: 'Personality', vi: 'Tính cách', emoji: '😊', phonetic: '/ˌpɜːrsəˈnæləti/' },
        ]
    },
    appearance: {
        name: 'Ngoại hình',
        level: 1,
        month: 1,
        words: [
            { en: 'Slender', vi: 'Mảnh khảnh', emoji: '🧍', phonetic: '/ˈslendər/' },
            { en: 'Chubby', vi: 'Mũm mĩm', emoji: '🧸', phonetic: '/ˈtʃʌbi/' },
            { en: 'Freckles', vi: 'Tàn nhang', emoji: '😊', phonetic: '/ˈfrekəlz/' },
            { en: 'Complexion', vi: 'Nước da', emoji: '🎨', phonetic: '/kəmˈplekʃən/' },
            { en: 'Curly hair', vi: 'Tóc xoăn', emoji: '👩‍🦱', phonetic: '/ˈkɜːrli her/' },
            { en: 'Straight hair', vi: 'Tóc thẳng', emoji: '👩', phonetic: '/streɪt her/' },
            { en: 'Beard', vi: 'Râu', emoji: '🧔', phonetic: '/bɪrd/' },
            { en: 'Dimple', vi: 'Lúm đồng tiền', emoji: '😄', phonetic: '/ˈdɪmpəl/' },
            { en: 'Scar', vi: 'Vết sẹo', emoji: '🩹', phonetic: '/skɑːr/' },
            { en: 'Glasses', vi: 'Kính mắt', emoji: '👓', phonetic: '/ˈɡlæsɪz/' },
        ]
    },
    hobbies_interests: {
        name: 'Sở thích & Đam mê',
        level: 1,
        month: 1,
        words: [
            { en: 'Passionate', vi: 'Đam mê', emoji: '🔥', phonetic: '/ˈpæʃənət/' },
            { en: 'Enthusiast', vi: 'Người đam mê', emoji: '⭐', phonetic: '/ɪnˈθjuːziæst/' },
            { en: 'Leisure', vi: 'Thời gian rảnh rỗi', emoji: '🏖️', phonetic: '/ˈleʒər/' },
            { en: 'Pastime', vi: 'Trò tiêu khiển', emoji: '🎯', phonetic: '/ˈpæstaɪm/' },
            { en: 'Amateur', vi: 'Nghiệp dư', emoji: '🌟', phonetic: '/ˈæmətər/' },
            { en: 'Professional', vi: 'Chuyên nghiệp', emoji: '🏅', phonetic: '/prəˈfeʃənəl/' },
            { en: 'Talented', vi: 'Tài năng', emoji: '🎭', phonetic: '/ˈtæləntɪd/' },
            { en: 'Skillful', vi: 'Khéo léo', emoji: '🎨', phonetic: '/ˈskɪlfʊl/' },
            { en: 'Dedicated', vi: 'Tận tâm', emoji: '💪', phonetic: '/ˈdedɪkeɪtɪd/' },
            { en: 'Participate', vi: 'Tham gia', emoji: '🤝', phonetic: '/pɑːrˈtɪsɪpeɪt/' },
        ]
    },

    // === THÁNG 2 ===
    daily_routines: {
        name: 'Thói quen hàng ngày',
        level: 1,
        month: 2,
        words: [
            { en: 'Alarm clock', vi: 'Đồng hồ báo thức', emoji: '⏰', phonetic: '/əˈlɑːrm klɒk/' },
            { en: 'Commute', vi: 'Đi lại hàng ngày', emoji: '🚌', phonetic: '/kəˈmjuːt/' },
            { en: 'Chores', vi: 'Việc vặt', emoji: '🧹', phonetic: '/tʃɔːrz/' },
            { en: 'Schedule', vi: 'Lịch trình', emoji: '📅', phonetic: '/ˈskedʒuːl/' },
            { en: 'Routine', vi: 'Thói quen', emoji: '🔄', phonetic: '/ruːˈtiːn/' },
            { en: 'Punctual', vi: 'Đúng giờ', emoji: '⏱️', phonetic: '/ˈpʌŋktʃuəl/' },
            { en: 'Organize', vi: 'Sắp xếp', emoji: '📂', phonetic: '/ˈɔːrɡənaɪz/' },
            { en: 'Productive', vi: 'Năng suất', emoji: '📈', phonetic: '/prəˈdʌktɪv/' },
            { en: 'Habit', vi: 'Thói quen', emoji: '✅', phonetic: '/ˈhæbɪt/' },
            { en: 'Frequently', vi: 'Thường xuyên', emoji: '🔁', phonetic: '/ˈfriːkwəntli/' },
        ]
    },
    time_management: {
        name: 'Quản lý thời gian',
        level: 1,
        month: 2,
        words: [
            { en: 'Priority', vi: 'Ưu tiên', emoji: '🎯', phonetic: '/praɪˈɒrəti/' },
            { en: 'Deadline', vi: 'Hạn chót', emoji: '⏳', phonetic: '/ˈdedlaɪn/' },
            { en: 'Efficient', vi: 'Hiệu quả', emoji: '⚡', phonetic: '/ɪˈfɪʃənt/' },
            { en: 'Postpone', vi: 'Hoãn lại', emoji: '📆', phonetic: '/poʊstˈpoʊn/' },
            { en: 'Duration', vi: 'Khoảng thời gian', emoji: '⏱️', phonetic: '/djʊˈreɪʃən/' },
            { en: 'Immediately', vi: 'Ngay lập tức', emoji: '🏃', phonetic: '/ɪˈmiːdiətli/' },
            { en: 'Meanwhile', vi: 'Trong khi đó', emoji: '⏰', phonetic: '/ˈmiːnwaɪl/' },
            { en: 'Gradually', vi: 'Dần dần', emoji: '📊', phonetic: '/ˈɡrædʒuəli/' },
            { en: 'Procrastinate', vi: 'Trì hoãn', emoji: '😴', phonetic: '/prəˈkræstɪneɪt/' },
            { en: 'Multitask', vi: 'Làm nhiều việc cùng lúc', emoji: '🤹', phonetic: '/ˈmʌltiːtæsk/' },
        ]
    },

    // === THÁNG 3 ===
    community_service: {
        name: 'Hoạt động cộng đồng',
        level: 1,
        month: 3,
        words: [
            { en: 'Volunteer', vi: 'Tình nguyện viên', emoji: '🤝', phonetic: '/ˌvɒlənˈtɪr/' },
            { en: 'Charity', vi: 'Từ thiện', emoji: '💝', phonetic: '/ˈtʃærəti/' },
            { en: 'Donation', vi: 'Quyên góp', emoji: '🎁', phonetic: '/doʊˈneɪʃən/' },
            { en: 'Campaign', vi: 'Chiến dịch', emoji: '📢', phonetic: '/kæmˈpeɪn/' },
            { en: 'Shelter', vi: 'Nơi trú ẩn', emoji: '🏠', phonetic: '/ˈʃeltər/' },
            { en: 'Orphanage', vi: 'Trại trẻ mồ côi', emoji: '👶', phonetic: '/ˈɔːrfənɪdʒ/' },
            { en: 'Elderly', vi: 'Người cao tuổi', emoji: '👴', phonetic: '/ˈeldərli/' },
            { en: 'Fundraising', vi: 'Gây quỹ', emoji: '💰', phonetic: '/ˈfʌndreɪzɪŋ/' },
            { en: 'Awareness', vi: 'Nhận thức', emoji: '💡', phonetic: '/əˈwernəs/' },
            { en: 'Impact', vi: 'Tác động', emoji: '💥', phonetic: '/ˈɪmpækt/' },
        ]
    },
    neighborhood: {
        name: 'Khu phố',
        level: 1,
        month: 3,
        words: [
            { en: 'Resident', vi: 'Cư dân', emoji: '🏘️', phonetic: '/ˈrezɪdənt/' },
            { en: 'Community center', vi: 'Trung tâm cộng đồng', emoji: '🏢', phonetic: '/kəˈmjuːnəti ˈsentər/' },
            { en: 'Convenience store', vi: 'Cửa hàng tiện lợi', emoji: '🏪', phonetic: '/kənˈviːniəns stɔːr/' },
            { en: 'Clinic', vi: 'Phòng khám', emoji: '🏥', phonetic: '/ˈklɪnɪk/' },
            { en: 'Sidewalk', vi: 'Vỉa hè', emoji: '🚶', phonetic: '/ˈsaɪdwɔːk/' },
            { en: 'Crossroad', vi: 'Ngã tư', emoji: '🚦', phonetic: '/ˈkrɒsroʊd/' },
            { en: 'Alley', vi: 'Hẻm / Ngõ', emoji: '🏘️', phonetic: '/ˈæli/' },
            { en: 'Fence', vi: 'Hàng rào', emoji: '🏡', phonetic: '/fens/' },
            { en: 'Security', vi: 'An ninh', emoji: '🔒', phonetic: '/sɪˈkjʊrəti/' },
            { en: 'Facility', vi: 'Cơ sở vật chất', emoji: '🏗️', phonetic: '/fəˈsɪləti/' },
        ]
    },

    // === THÁNG 5 ===
    music: {
        name: 'Âm nhạc',
        level: 2,
        month: 5,
        words: [
            { en: 'Melody', vi: 'Giai điệu', emoji: '🎵', phonetic: '/ˈmelədi/' },
            { en: 'Rhythm', vi: 'Nhịp điệu', emoji: '🥁', phonetic: '/ˈrɪðəm/' },
            { en: 'Lyrics', vi: 'Lời bài hát', emoji: '📝', phonetic: '/ˈlɪrɪks/' },
            { en: 'Choir', vi: 'Dàn hợp xướng', emoji: '🎤', phonetic: '/kwaɪər/' },
            { en: 'Orchestra', vi: 'Dàn nhạc giao hưởng', emoji: '🎻', phonetic: '/ˈɔːrkɪstrə/' },
            { en: 'Genre', vi: 'Thể loại', emoji: '🎶', phonetic: '/ˈʒɒnrə/' },
            { en: 'Concert', vi: 'Buổi hòa nhạc', emoji: '🎤', phonetic: '/ˈkɒnsərt/' },
            { en: 'Instrument', vi: 'Nhạc cụ', emoji: '🎸', phonetic: '/ˈɪnstrəmənt/' },
            { en: 'Composer', vi: 'Nhà soạn nhạc', emoji: '🎼', phonetic: '/kəmˈpoʊzər/' },
            { en: 'Performance', vi: 'Buổi biểu diễn', emoji: '🎭', phonetic: '/pərˈfɔːrməns/' },
        ]
    },
    films: {
        name: 'Phim ảnh',
        level: 2,
        month: 5,
        words: [
            { en: 'Documentary', vi: 'Phim tài liệu', emoji: '🎬', phonetic: '/ˌdɒkjuˈmentəri/' },
            { en: 'Animation', vi: 'Phim hoạt hình', emoji: '🎞️', phonetic: '/ˌænɪˈmeɪʃən/' },
            { en: 'Horror', vi: 'Phim kinh dị', emoji: '👻', phonetic: '/ˈhɒrər/' },
            { en: 'Comedy', vi: 'Phim hài', emoji: '😂', phonetic: '/ˈkɒmədi/' },
            { en: 'Director', vi: 'Đạo diễn', emoji: '🎬', phonetic: '/daɪˈrektər/' },
            { en: 'Screenplay', vi: 'Kịch bản phim', emoji: '📜', phonetic: '/ˈskriːnpleɪ/' },
            { en: 'Subtitle', vi: 'Phụ đề', emoji: '📝', phonetic: '/ˈsʌbtaɪtəl/' },
            { en: 'Blockbuster', vi: 'Phim bom tấn', emoji: '💥', phonetic: '/ˈblɒkbʌstər/' },
            { en: 'Actress', vi: 'Nữ diễn viên', emoji: '🎭', phonetic: '/ˈæktrəs/' },
            { en: 'Scene', vi: 'Cảnh phim', emoji: '🎥', phonetic: '/siːn/' },
        ]
    },

    // === THÁNG 6 ===
    television: {
        name: 'Truyền hình',
        level: 2,
        month: 6,
        words: [
            { en: 'Channel', vi: 'Kênh truyền hình', emoji: '📺', phonetic: '/ˈtʃænəl/' },
            { en: 'Broadcast', vi: 'Phát sóng', emoji: '📡', phonetic: '/ˈbrɔːdkæst/' },
            { en: 'Programme', vi: 'Chương trình', emoji: '📋', phonetic: '/ˈproʊɡræm/' },
            { en: 'Remote control', vi: 'Điều khiển từ xa', emoji: '🎮', phonetic: '/rɪˈmoʊt kənˈtroʊl/' },
            { en: 'News anchor', vi: 'Người dẫn chương trình thời sự', emoji: '🗞️', phonetic: '/njuːz ˈæŋkər/' },
            { en: 'Advertisement', vi: 'Quảng cáo', emoji: '📢', phonetic: '/ˌædvərˈtaɪzmənt/' },
            { en: 'Reality show', vi: 'Chương trình truyền hình thực tế', emoji: '🌟', phonetic: '/riˈæləti ʃoʊ/' },
            { en: 'Episode', vi: 'Tập phim', emoji: '▶️', phonetic: '/ˈepɪsoʊd/' },
            { en: 'Audience', vi: 'Khán giả', emoji: '👥', phonetic: '/ˈɔːdiəns/' },
            { en: 'Streaming', vi: 'Phát trực tuyến', emoji: '🌐', phonetic: '/ˈstriːmɪŋ/' },
        ]
    },
    media: {
        name: 'Truyền thông',
        level: 2,
        month: 6,
        words: [
            { en: 'Journalist', vi: 'Nhà báo', emoji: '📰', phonetic: '/ˈdʒɜːrnəlɪst/' },
            { en: 'Headline', vi: 'Tiêu đề', emoji: '📰', phonetic: '/ˈhedlaɪn/' },
            { en: 'Article', vi: 'Bài báo', emoji: '📄', phonetic: '/ˈɑːrtɪkəl/' },
            { en: 'Interview', vi: 'Phỏng vấn', emoji: '🎙️', phonetic: '/ˈɪntərvjuː/' },
            { en: 'Social media', vi: 'Mạng xã hội', emoji: '📱', phonetic: '/ˈsoʊʃəl ˈmiːdiə/' },
            { en: 'Reliable', vi: 'Đáng tin cậy', emoji: '✅', phonetic: '/rɪˈlaɪəbəl/' },
            { en: 'Source', vi: 'Nguồn tin', emoji: '🔍', phonetic: '/sɔːrs/' },
            { en: 'Fake news', vi: 'Tin giả', emoji: '❌', phonetic: '/feɪk njuːz/' },
            { en: 'Editor', vi: 'Biên tập viên', emoji: '✏️', phonetic: '/ˈedɪtər/' },
            { en: 'Publication', vi: 'Ấn phẩm', emoji: '📚', phonetic: '/ˌpʌblɪˈkeɪʃən/' },
        ]
    },

    // === THÁNG 7 ===
    traffic: {
        name: 'Giao thông',
        level: 2,
        month: 7,
        words: [
            { en: 'Intersection', vi: 'Ngã tư', emoji: '🚦', phonetic: '/ˌɪntərˈsekʃən/' },
            { en: 'Highway', vi: 'Đường cao tốc', emoji: '🛣️', phonetic: '/ˈhaɪweɪ/' },
            { en: 'Pavement', vi: 'Vỉa hè', emoji: '🚶', phonetic: '/ˈpeɪvmənt/' },
            { en: 'Roundabout', vi: 'Bùng binh', emoji: '🔄', phonetic: '/ˈraʊndəbaʊt/' },
            { en: 'Speed limit', vi: 'Giới hạn tốc độ', emoji: '🚗', phonetic: '/spiːd ˈlɪmɪt/' },
            { en: 'Zebra crossing', vi: 'Vạch kẻ đường dành cho người đi bộ', emoji: '🦓', phonetic: '/ˈzebrə ˈkrɒsɪŋ/' },
            { en: 'Traffic light', vi: 'Đèn giao thông', emoji: '🚦', phonetic: '/ˈtræfɪk laɪt/' },
            { en: 'Helmet', vi: 'Mũ bảo hiểm', emoji: '⛑️', phonetic: '/ˈhelmɪt/' },
            { en: 'License', vi: 'Bằng lái xe', emoji: '🪪', phonetic: '/ˈlaɪsəns/' },
            { en: 'Congestion', vi: 'Ùn tắc giao thông', emoji: '🚗', phonetic: '/kənˈdʒestʃən/' },
        ]
    },
    pollution: {
        name: 'Ô nhiễm',
        level: 2,
        month: 7,
        words: [
            { en: 'Air pollution', vi: 'Ô nhiễm không khí', emoji: '🏭', phonetic: '/er pəˈluːʃən/' },
            { en: 'Water pollution', vi: 'Ô nhiễm nước', emoji: '🚰', phonetic: '/ˈwɔːtər pəˈluːʃən/' },
            { en: 'Noise pollution', vi: 'Ô nhiễm tiếng ồn', emoji: '🔊', phonetic: '/nɔɪz pəˈluːʃən/' },
            { en: 'Emission', vi: 'Khí thải', emoji: '💨', phonetic: '/ɪˈmɪʃən/' },
            { en: 'Toxic', vi: 'Độc hại', emoji: '☠️', phonetic: '/ˈtɒksɪk/' },
            { en: 'Greenhouse effect', vi: 'Hiệu ứng nhà kính', emoji: '🌡️', phonetic: '/ˈɡriːnhaʊs ɪˈfekt/' },
            { en: 'Global warming', vi: 'Sự nóng lên toàn cầu', emoji: '🌍', phonetic: '/ˈɡloʊbəl ˈwɔːrmɪŋ/' },
            { en: 'Waste', vi: 'Chất thải', emoji: '🗑️', phonetic: '/weɪst/' },
            { en: 'Contaminate', vi: 'Làm ô nhiễm', emoji: '⚠️', phonetic: '/kənˈtæmɪneɪt/' },
            { en: 'Smog', vi: 'Sương mù ô nhiễm', emoji: '🌫️', phonetic: '/smɒɡ/' },
        ]
    },

    // === THÁNG 9 ===
    festivals_worldwide: {
        name: 'Lễ hội thế giới',
        level: 3,
        month: 9,
        words: [
            { en: 'Carnival', vi: 'Lễ hội hóa trang', emoji: '🎭', phonetic: '/ˈkɑːrnɪvəl/' },
            { en: 'Thanksgiving', vi: 'Lễ Tạ ơn', emoji: '🦃', phonetic: '/ˈθæŋksɡɪvɪŋ/' },
            { en: 'Diwali', vi: 'Lễ hội Ánh sáng', emoji: '🪔', phonetic: '/dɪˈwɑːli/' },
            { en: 'Oktoberfest', vi: 'Lễ hội Bia Đức', emoji: '🍺', phonetic: '/ɒkˈtoʊbərfest/' },
            { en: 'Cherry blossom', vi: 'Hoa anh đào', emoji: '🌸', phonetic: '/ˈtʃeri ˈblɒsəm/' },
            { en: 'Ancestor worship', vi: 'Thờ cúng tổ tiên', emoji: '🙏', phonetic: '/ˈænsestər ˈwɜːrʃɪp/' },
            { en: 'Procession', vi: 'Đám rước', emoji: '🎺', phonetic: '/prəˈseʃən/' },
            { en: 'Spectacular', vi: 'Ngoạn mục', emoji: '🤩', phonetic: '/spekˈtækjulər/' },
            { en: 'Heritage', vi: 'Di sản', emoji: '🏛️', phonetic: '/ˈherɪtɪdʒ/' },
            { en: 'Ritual', vi: 'Nghi thức', emoji: '📿', phonetic: '/ˈrɪtʃuəl/' },
        ]
    },
    celebrations: {
        name: 'Các dịp kỷ niệm',
        level: 3,
        month: 9,
        words: [
            { en: 'Anniversary', vi: 'Kỷ niệm', emoji: '🎊', phonetic: '/ˌænɪˈvɜːrsəri/' },
            { en: 'Congratulations', vi: 'Chúc mừng', emoji: '🎉', phonetic: '/kənˌɡrætʃuˈleɪʃənz/' },
            { en: 'Feast', vi: 'Bữa tiệc', emoji: '🍽️', phonetic: '/fiːst/' },
            { en: 'Toast', vi: 'Nâng cốc chúc mừng', emoji: '🥂', phonetic: '/toʊst/' },
            { en: 'Blessing', vi: 'Phước lành', emoji: '🙏', phonetic: '/ˈblesɪŋ/' },
            { en: 'Gratitude', vi: 'Lòng biết ơn', emoji: '💖', phonetic: '/ˈɡrætɪtjuːd/' },
            { en: 'Occasion', vi: 'Dịp', emoji: '📅', phonetic: '/əˈkeɪʒən/' },
            { en: 'Commemorate', vi: 'Tưởng niệm', emoji: '🕯️', phonetic: '/kəˈmeməreɪt/' },
            { en: 'Traditional', vi: 'Truyền thống', emoji: '🏮', phonetic: '/trəˈdɪʃənəl/' },
            { en: 'Solemn', vi: 'Trang nghiêm', emoji: '🎩', phonetic: '/ˈsɒləm/' },
        ]
    },

    // === THÁNG 10 ===
    energy: {
        name: 'Năng lượng',
        level: 3,
        month: 10,
        words: [
            { en: 'Solar energy', vi: 'Năng lượng mặt trời', emoji: '☀️', phonetic: '/ˈsoʊlər ˈenərdʒi/' },
            { en: 'Wind power', vi: 'Năng lượng gió', emoji: '🌬️', phonetic: '/wɪnd ˈpaʊər/' },
            { en: 'Hydroelectric', vi: 'Thủy điện', emoji: '💧', phonetic: '/ˌhaɪdroʊɪˈlektrɪk/' },
            { en: 'Nuclear', vi: 'Hạt nhân', emoji: '⚛️', phonetic: '/ˈnjuːkliər/' },
            { en: 'Renewable', vi: 'Tái tạo được', emoji: '♻️', phonetic: '/rɪˈnjuːəbəl/' },
            { en: 'Non-renewable', vi: 'Không tái tạo được', emoji: '⛽', phonetic: '/nɒn rɪˈnjuːəbəl/' },
            { en: 'Fossil fuel', vi: 'Nhiên liệu hóa thạch', emoji: '🛢️', phonetic: '/ˈfɒsəl fjuːəl/' },
            { en: 'Electricity', vi: 'Điện', emoji: '⚡', phonetic: '/ɪˌlekˈtrɪsəti/' },
            { en: 'Generator', vi: 'Máy phát điện', emoji: '🔌', phonetic: '/ˈdʒenəreɪtər/' },
            { en: 'Consumption', vi: 'Sự tiêu thụ', emoji: '📊', phonetic: '/kənˈsʌmpʃən/' },
        ]
    },
    green_living: {
        name: 'Sống xanh',
        level: 3,
        month: 10,
        words: [
            { en: 'Sustainable', vi: 'Bền vững', emoji: '🌱', phonetic: '/səˈsteɪnəbəl/' },
            { en: 'Eco-friendly', vi: 'Thân thiện với môi trường', emoji: '💚', phonetic: '/ˈiːkoʊ ˈfrendli/' },
            { en: 'Carbon footprint', vi: 'Dấu chân carbon', emoji: '👣', phonetic: '/ˈkɑːrbən ˈfʊtprɪnt/' },
            { en: 'Biodegradable', vi: 'Có thể phân hủy sinh học', emoji: '🍃', phonetic: '/ˌbaɪoʊdɪˈɡreɪdəbəl/' },
            { en: 'Compost', vi: 'Phân hữu cơ', emoji: '🌿', phonetic: '/ˈkɒmpɒst/' },
            { en: 'Reusable', vi: 'Có thể tái sử dụng', emoji: '🔄', phonetic: '/riːˈjuːzəbəl/' },
            { en: 'Organic', vi: 'Hữu cơ', emoji: '🥦', phonetic: '/ɔːrˈɡænɪk/' },
            { en: 'Conserve', vi: 'Tiết kiệm / Bảo tồn', emoji: '💡', phonetic: '/kənˈsɜːrv/' },
            { en: 'Reduce', vi: 'Giảm thiểu', emoji: '📉', phonetic: '/rɪˈdjuːs/' },
            { en: 'Pollution-free', vi: 'Không ô nhiễm', emoji: '🌈', phonetic: '/pəˈluːʃən friː/' },
        ]
    },

    // === THÁNG 11 ===
    travel_experiences: {
        name: 'Trải nghiệm du lịch',
        level: 3,
        month: 11,
        words: [
            { en: 'Itinerary', vi: 'Lịch trình du lịch', emoji: '🗺️', phonetic: '/aɪˈtɪnəreri/' },
            { en: 'Accommodation', vi: 'Chỗ ở', emoji: '🏨', phonetic: '/əˌkɒməˈdeɪʃən/' },
            { en: 'Backpacker', vi: 'Người du lịch bụi', emoji: '🎒', phonetic: '/ˈbækpækər/' },
            { en: 'Excursion', vi: 'Chuyến tham quan', emoji: '🚌', phonetic: '/ɪkˈskɜːrʒən/' },
            { en: 'Cuisine', vi: 'Ẩm thực', emoji: '🍜', phonetic: '/kwɪˈziːn/' },
            { en: 'Souvenir', vi: 'Quà lưu niệm', emoji: '🎁', phonetic: '/ˌsuːvəˈnɪr/' },
            { en: 'Departure', vi: 'Khởi hành', emoji: '🛫', phonetic: '/dɪˈpɑːrtʃər/' },
            { en: 'Arrival', vi: 'Đến nơi', emoji: '🛬', phonetic: '/əˈraɪvəl/' },
            { en: 'Immigration', vi: 'Nhập cảnh', emoji: '🛂', phonetic: '/ˌɪmɪˈɡreɪʃən/' },
            { en: 'Luggage', vi: 'Hành lý', emoji: '🧳', phonetic: '/ˈlʌɡɪdʒ/' },
        ]
    },
    destinations: {
        name: 'Điểm đến',
        level: 3,
        month: 11,
        words: [
            { en: 'Resort', vi: 'Khu nghỉ dưỡng', emoji: '🏖️', phonetic: '/rɪˈzɔːrt/' },
            { en: 'Attraction', vi: 'Điểm tham quan', emoji: '🎢', phonetic: '/əˈtrækʃən/' },
            { en: 'Scenery', vi: 'Phong cảnh', emoji: '🏞️', phonetic: '/ˈsiːnəri/' },
            { en: 'Monument', vi: 'Tượng đài / Di tích', emoji: '🗽', phonetic: '/ˈmɒnjumənt/' },
            { en: 'Pagoda', vi: 'Chùa', emoji: '🛕', phonetic: '/pəˈɡoʊdə/' },
            { en: 'Tropical', vi: 'Nhiệt đới', emoji: '🌴', phonetic: '/ˈtrɒpɪkəl/' },
            { en: 'Breathtaking', vi: 'Ngoạn mục', emoji: '🤩', phonetic: '/ˈbreθteɪkɪŋ/' },
            { en: 'Hospitality', vi: 'Lòng hiếu khách', emoji: '🤗', phonetic: '/ˌhɒspɪˈtæləti/' },
            { en: 'Picturesque', vi: 'Đẹp như tranh vẽ', emoji: '🖼️', phonetic: '/ˌpɪktʃəˈresk/' },
            { en: 'Explore', vi: 'Khám phá', emoji: '🧭', phonetic: '/ɪkˈsplɔːr/' },
        ]
    },
};

// ============================================
// PHONICS - ADVANCED DIPHTHONGS & SILENT LETTERS
// ============================================
GRADE_DATA[7].phonics = [
    { letter: 'EA (varied)', sound: '/iː/ /e/ /eɪ/', words: [
        { word: 'Breathe', highlight: 'ea', emoji: '🌬️' },
        { word: 'Bread', highlight: 'ea', emoji: '🍞' },
        { word: 'Break', highlight: 'ea', emoji: '💥' }
    ]},
    { letter: 'OO (varied)', sound: '/uː/ /ʊ/', words: [
        { word: 'Smooth', highlight: 'oo', emoji: '✨' },
        { word: 'Flood', highlight: 'oo', emoji: '🌊' },
        { word: 'Bookmark', highlight: 'oo', emoji: '📑' }
    ]},
    { letter: 'Silent GH', sound: '(silent)', words: [
        { word: 'Through', highlight: 'gh', emoji: '➡️' },
        { word: 'Neighbour', highlight: 'gh', emoji: '🏠' },
        { word: 'Daughter', highlight: 'gh', emoji: '👧' }
    ]},
    { letter: 'Silent T', sound: '(silent)', words: [
        { word: 'Listen', highlight: 't', emoji: '👂' },
        { word: 'Castle', highlight: 't', emoji: '🏰' },
        { word: 'Whistle', highlight: 't', emoji: '📣' }
    ]},
    { letter: 'Silent L', sound: '(silent)', words: [
        { word: 'Calm', highlight: 'l', emoji: '😌' },
        { word: 'Salmon', highlight: 'l', emoji: '🐟' },
        { word: 'Half', highlight: 'l', emoji: '½' }
    ]},
    { letter: 'QU', sound: '/kw/', words: [
        { word: 'Quarter', highlight: 'Qu', emoji: '🪙' },
        { word: 'Quality', highlight: 'Qu', emoji: '⭐' },
        { word: 'Unique', highlight: 'qu', emoji: '💎' }
    ]},
    { letter: 'IOUS / EOUS', sound: '/iəs/ /əs/', words: [
        { word: 'Curious', highlight: 'ious', emoji: '🔍' },
        { word: 'Gorgeous', highlight: 'eous', emoji: '😍' },
        { word: 'Precious', highlight: 'ious', emoji: '💎' }
    ]},
    { letter: 'MENT', sound: '/mənt/', words: [
        { word: 'Advertisement', highlight: 'ment', emoji: '📢' },
        { word: 'Environment', highlight: 'ment', emoji: '🌍' },
        { word: 'Achievement', highlight: 'ment', emoji: '🏆' }
    ]},
    { letter: 'NESS', sound: '/nəs/', words: [
        { word: 'Awareness', highlight: 'ness', emoji: '💡' },
        { word: 'Darkness', highlight: 'ness', emoji: '🌑' },
        { word: 'Kindness', highlight: 'ness', emoji: '💖' }
    ]},
    { letter: 'ABLE / IBLE', sound: '/əbəl/', words: [
        { word: 'Sustainable', highlight: 'able', emoji: '🌱' },
        { word: 'Biodegradable', highlight: 'able', emoji: '🍃' },
        { word: 'Reliable', highlight: 'able', emoji: '✅' }
    ]},
    { letter: 'ANCE / ENCE', sound: '/əns/', words: [
        { word: 'Performance', highlight: 'ance', emoji: '🎭' },
        { word: 'Audience', highlight: 'ence', emoji: '👥' },
        { word: 'Influence', highlight: 'ence', emoji: '🌟' }
    ]},
    { letter: 'OU (varied)', sound: '/ʌ/ /uː/ /aʊ/', words: [
        { word: 'Tough', highlight: 'ou', emoji: '💪' },
        { word: 'Through', highlight: 'ou', emoji: '➡️' },
        { word: 'Announce', highlight: 'ou', emoji: '📢' }
    ]},
];

// ============================================
// CÂU MẪU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[7].sentences = {
    level1: [
        { sentence: ['She', 'is', 'passionate', 'about', 'playing', 'the', 'piano'], emoji: '🎹', vi: 'Cô ấy đam mê chơi đàn piano', extra: ['he', 'on'] },
        { sentence: ['My', 'daily', 'routine', 'starts', 'at', 'six', 'o\'clock'], emoji: '⏰', vi: 'Thói quen hàng ngày của tôi bắt đầu lúc sáu giờ', extra: ['his', 'in'] },
        { sentence: ['He', 'has', 'curly', 'hair', 'and', 'wears', 'glasses'], emoji: '👓', vi: 'Anh ấy có tóc xoăn và đeo kính', extra: ['she', 'or'] },
        { sentence: ['We', 'should', 'be', 'punctual', 'for', 'every', 'class'], emoji: '⏱️', vi: 'Chúng ta nên đúng giờ cho mỗi tiết học', extra: ['must', 'some'] },
        { sentence: ['The', 'volunteers', 'donate', 'food', 'to', 'the', 'shelter'], emoji: '🤝', vi: 'Các tình nguyện viên quyên góp thực phẩm cho nơi trú ẩn', extra: ['a', 'from'] },
        { sentence: ['There', 'is', 'a', 'convenience', 'store', 'near', 'my', 'house'], emoji: '🏪', vi: 'Có một cửa hàng tiện lợi gần nhà tôi', extra: ['far', 'the'] },
        { sentence: ['She', 'is', 'a', 'talented', 'and', 'dedicated', 'musician'], emoji: '🎵', vi: 'Cô ấy là một nhạc sĩ tài năng và tận tâm', extra: ['he', 'or'] },
        { sentence: ['I', 'always', 'organize', 'my', 'schedule', 'every', 'week'], emoji: '📅', vi: 'Tôi luôn sắp xếp lịch trình hàng tuần', extra: ['never', 'his'] },
    ],
    level2: [
        { sentence: ['The', 'documentary', 'about', 'nature', 'was', 'really', 'interesting'], emoji: '🎬', vi: 'Bộ phim tài liệu về thiên nhiên rất thú vị', extra: ['a', 'boring'] },
        { sentence: ['The', 'orchestra', 'performed', 'a', 'beautiful', 'melody', 'at', 'the', 'concert'], emoji: '🎻', vi: 'Dàn nhạc trình diễn giai điệu tuyệt đẹp tại buổi hòa nhạc', extra: ['ugly', 'an'] },
        { sentence: ['You', 'must', 'wear', 'a', 'helmet', 'when', 'riding', 'a', 'motorbike'], emoji: '⛑️', vi: 'Bạn phải đội mũ bảo hiểm khi đi xe máy', extra: ['should', 'the'] },
        { sentence: ['Air', 'pollution', 'is', 'a', 'serious', 'problem', 'in', 'big', 'cities'], emoji: '🏭', vi: 'Ô nhiễm không khí là vấn đề nghiêm trọng ở các thành phố lớn', extra: ['minor', 'the'] },
        { sentence: ['The', 'news', 'anchor', 'broadcasts', 'the', 'latest', 'headlines'], emoji: '📰', vi: 'Người dẫn chương trình phát sóng tin tức mới nhất', extra: ['oldest', 'a'] },
        { sentence: ['We', 'should', 'not', 'trust', 'fake', 'news', 'on', 'social', 'media'], emoji: '❌', vi: 'Chúng ta không nên tin tin giả trên mạng xã hội', extra: ['must', 'in'] },
        { sentence: ['The', 'speed', 'limit', 'on', 'this', 'road', 'is', 'forty', 'kilometers'], emoji: '🚗', vi: 'Giới hạn tốc độ trên đường này là bốn mươi ki lô mét', extra: ['that', 'sixty'] },
        { sentence: ['Greenhouse', 'gases', 'cause', 'global', 'warming', 'to', 'increase'], emoji: '🌡️', vi: 'Khí nhà kính khiến sự nóng lên toàn cầu gia tăng', extra: ['decrease', 'a'] },
    ],
    level3: [
        { sentence: ['The', 'carnival', 'is', 'a', 'spectacular', 'event', 'in', 'Brazil'], emoji: '🎭', vi: 'Lễ hội hóa trang là sự kiện ngoạn mục ở Brazil', extra: ['boring', 'the'] },
        { sentence: ['Solar', 'energy', 'is', 'a', 'renewable', 'source', 'of', 'power'], emoji: '☀️', vi: 'Năng lượng mặt trời là nguồn năng lượng tái tạo', extra: ['non-renewable', 'the'] },
        { sentence: ['We', 'should', 'use', 'reusable', 'bags', 'to', 'reduce', 'waste'], emoji: '🔄', vi: 'Chúng ta nên dùng túi tái sử dụng để giảm chất thải', extra: ['increase', 'the'] },
        { sentence: ['The', 'itinerary', 'includes', 'visiting', 'three', 'famous', 'pagodas'], emoji: '🗺️', vi: 'Lịch trình bao gồm tham quan ba ngôi chùa nổi tiếng', extra: ['excludes', 'a'] },
        { sentence: ['The', 'backpackers', 'enjoyed', 'the', 'breathtaking', 'scenery'], emoji: '🏞️', vi: 'Những người du lịch bụi thưởng thức phong cảnh ngoạn mục', extra: ['boring', 'a'] },
        { sentence: ['Fossil', 'fuels', 'are', 'non-renewable', 'energy', 'sources'], emoji: '🛢️', vi: 'Nhiên liệu hóa thạch là nguồn năng lượng không tái tạo được', extra: ['renewable', 'the'] },
        { sentence: ['The', 'local', 'cuisine', 'is', 'famous', 'for', 'its', 'unique', 'flavors'], emoji: '🍜', vi: 'Ẩm thực địa phương nổi tiếng với hương vị độc đáo', extra: ['common', 'the'] },
        { sentence: ['Many', 'communities', 'organize', 'fundraising', 'campaigns', 'for', 'charity'], emoji: '💝', vi: 'Nhiều cộng đồng tổ chức chiến dịch gây quỹ từ thiện', extra: ['few', 'against'] },
    ],
};

// ============================================
// SPELLING THEO CẤP ĐỘ
// ============================================
GRADE_DATA[7].spelling = {
    level1: [
        { word: 'NATIONALITY', emoji: '🏳️', vi: 'Quốc tịch' },
        { word: 'APPEARANCE', emoji: '👤', vi: 'Ngoại hình' },
        { word: 'PASSIONATE', emoji: '🔥', vi: 'Đam mê' },
        { word: 'COMMUTE', emoji: '🚌', vi: 'Đi lại hàng ngày' },
        { word: 'PUNCTUAL', emoji: '⏱️', vi: 'Đúng giờ' },
        { word: 'CHARITY', emoji: '💝', vi: 'Từ thiện' },
        { word: 'SCHEDULE', emoji: '📅', vi: 'Lịch trình' },
        { word: 'VOLUNTEER', emoji: '🤝', vi: 'Tình nguyện viên' },
        { word: 'SIDEWALK', emoji: '🚶', vi: 'Vỉa hè' },
        { word: 'RESIDENT', emoji: '🏘️', vi: 'Cư dân' },
        { word: 'ORGANIZE', emoji: '📂', vi: 'Sắp xếp' },
        { word: 'DONATION', emoji: '🎁', vi: 'Quyên góp' },
    ],
    level2: [
        { word: 'ORCHESTRA', emoji: '🎻', vi: 'Dàn nhạc giao hưởng' },
        { word: 'DOCUMENTARY', emoji: '🎬', vi: 'Phim tài liệu' },
        { word: 'BROADCAST', emoji: '📡', vi: 'Phát sóng' },
        { word: 'ADVERTISEMENT', emoji: '📢', vi: 'Quảng cáo' },
        { word: 'INTERSECTION', emoji: '🚦', vi: 'Ngã tư' },
        { word: 'CONGESTION', emoji: '🚗', vi: 'Ùn tắc' },
        { word: 'EMISSION', emoji: '💨', vi: 'Khí thải' },
        { word: 'GREENHOUSE', emoji: '🌡️', vi: 'Nhà kính' },
        { word: 'JOURNALIST', emoji: '📰', vi: 'Nhà báo' },
        { word: 'CONTAMINATE', emoji: '⚠️', vi: 'Làm ô nhiễm' },
        { word: 'BLOCKBUSTER', emoji: '💥', vi: 'Phim bom tấn' },
        { word: 'ROUNDABOUT', emoji: '🔄', vi: 'Bùng binh' },
    ],
    level3: [
        { word: 'THANKSGIVING', emoji: '🦃', vi: 'Lễ Tạ ơn' },
        { word: 'SPECTACULAR', emoji: '🤩', vi: 'Ngoạn mục' },
        { word: 'HYDROELECTRIC', emoji: '💧', vi: 'Thủy điện' },
        { word: 'SUSTAINABLE', emoji: '🌱', vi: 'Bền vững' },
        { word: 'BIODEGRADABLE', emoji: '🍃', vi: 'Phân hủy sinh học' },
        { word: 'ACCOMMODATION', emoji: '🏨', vi: 'Chỗ ở' },
        { word: 'ITINERARY', emoji: '🗺️', vi: 'Lịch trình du lịch' },
        { word: 'BREATHTAKING', emoji: '🤩', vi: 'Ngoạn mục' },
        { word: 'PICTURESQUE', emoji: '🖼️', vi: 'Đẹp như tranh vẽ' },
        { word: 'COMMEMORATE', emoji: '🕯️', vi: 'Tưởng niệm' },
        { word: 'HOSPITALITY', emoji: '🤗', vi: 'Lòng hiếu khách' },
        { word: 'CONSUMPTION', emoji: '📊', vi: 'Sự tiêu thụ' },
    ],
};

// ============================================
// NGHE HIỂU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[7].listening = {
    level1: [
        { word: 'Nationality', options: [{ emoji: '🏳️', label: 'Nationality' }, { emoji: '💼', label: 'Occupation' }, { emoji: '🎂', label: 'Date of birth' }, { emoji: '😊', label: 'Personality' }], correct: 0 },
        { word: 'Curly hair', options: [{ emoji: '👩', label: 'Straight hair' }, { emoji: '👩‍🦱', label: 'Curly hair' }, { emoji: '🧔', label: 'Beard' }, { emoji: '👓', label: 'Glasses' }], correct: 1 },
        { word: 'Charity', options: [{ emoji: '📢', label: 'Campaign' }, { emoji: '🎁', label: 'Donation' }, { emoji: '💝', label: 'Charity' }, { emoji: '🤝', label: 'Volunteer' }], correct: 2 },
        { word: 'Crossroad', options: [{ emoji: '🏪', label: 'Store' }, { emoji: '🏥', label: 'Clinic' }, { emoji: '🚶', label: 'Sidewalk' }, { emoji: '🚦', label: 'Crossroad' }], correct: 3 },
        { word: 'Deadline', options: [{ emoji: '⏳', label: 'Deadline' }, { emoji: '🎯', label: 'Priority' }, { emoji: '📆', label: 'Postpone' }, { emoji: '⚡', label: 'Efficient' }], correct: 0 },
        { word: 'Orphanage', options: [{ emoji: '🏠', label: 'Shelter' }, { emoji: '👶', label: 'Orphanage' }, { emoji: '👴', label: 'Elderly' }, { emoji: '💰', label: 'Fundraising' }], correct: 1 },
    ],
    level2: [
        { word: 'Orchestra', options: [{ emoji: '🎻', label: 'Orchestra' }, { emoji: '🎤', label: 'Choir' }, { emoji: '🎸', label: 'Instrument' }, { emoji: '🎼', label: 'Composer' }], correct: 0 },
        { word: 'Animation', options: [{ emoji: '🎬', label: 'Documentary' }, { emoji: '🎞️', label: 'Animation' }, { emoji: '👻', label: 'Horror' }, { emoji: '😂', label: 'Comedy' }], correct: 1 },
        { word: 'Helmet', options: [{ emoji: '🚗', label: 'Speed limit' }, { emoji: '🪪', label: 'License' }, { emoji: '⛑️', label: 'Helmet' }, { emoji: '🚦', label: 'Traffic light' }], correct: 2 },
        { word: 'Smog', options: [{ emoji: '💨', label: 'Emission' }, { emoji: '☠️', label: 'Toxic' }, { emoji: '🗑️', label: 'Waste' }, { emoji: '🌫️', label: 'Smog' }], correct: 3 },
        { word: 'Episode', options: [{ emoji: '▶️', label: 'Episode' }, { emoji: '📺', label: 'Channel' }, { emoji: '📡', label: 'Broadcast' }, { emoji: '📢', label: 'Advertisement' }], correct: 0 },
        { word: 'Subtitle', options: [{ emoji: '🎥', label: 'Scene' }, { emoji: '📝', label: 'Subtitle' }, { emoji: '📜', label: 'Screenplay' }, { emoji: '🎭', label: 'Actress' }], correct: 1 },
    ],
    level3: [
        { word: 'Carnival', options: [{ emoji: '🎭', label: 'Carnival' }, { emoji: '🦃', label: 'Thanksgiving' }, { emoji: '🪔', label: 'Diwali' }, { emoji: '🌸', label: 'Cherry blossom' }], correct: 0 },
        { word: 'Hydroelectric', options: [{ emoji: '☀️', label: 'Solar' }, { emoji: '💧', label: 'Hydroelectric' }, { emoji: '🌬️', label: 'Wind power' }, { emoji: '⚛️', label: 'Nuclear' }], correct: 1 },
        { word: 'Luggage', options: [{ emoji: '🗺️', label: 'Itinerary' }, { emoji: '🎁', label: 'Souvenir' }, { emoji: '🧳', label: 'Luggage' }, { emoji: '🛂', label: 'Immigration' }], correct: 2 },
        { word: 'Picturesque', options: [{ emoji: '🏖️', label: 'Resort' }, { emoji: '🎢', label: 'Attraction' }, { emoji: '🏞️', label: 'Scenery' }, { emoji: '🖼️', label: 'Picturesque' }], correct: 3 },
        { word: 'Ritual', options: [{ emoji: '📿', label: 'Ritual' }, { emoji: '🎊', label: 'Anniversary' }, { emoji: '🥂', label: 'Toast' }, { emoji: '🙏', label: 'Blessing' }], correct: 0 },
        { word: 'Compost', options: [{ emoji: '🔄', label: 'Reusable' }, { emoji: '🌿', label: 'Compost' }, { emoji: '💚', label: 'Eco-friendly' }, { emoji: '🥦', label: 'Organic' }], correct: 1 },
    ],
};
