// ============================================
// LỚP 11 - THPT - 3 CẤP ĐỘ
// ============================================
GRADE_DATA[11] = {};
GRADE_DATA[11].info = {
    levels: [
        { id: 1, name: 'Intermediate', nameVi: 'Trung cấp', months: [1,2,3,4], color: '#4ECDC4', icon: '📗' },
        { id: 2, name: 'Upper-Intermediate', nameVi: 'Trung cao cấp', months: [5,6,7,8], color: '#A855F7', icon: '📘' },
        { id: 3, name: 'Advanced', nameVi: 'Nâng cao', months: [9,10,11,12], color: '#FF6B9D', icon: '📕' },
    ],
    months: [
        { month: 1, title: 'Tình bạn', topics: ['friendship', 'relationships'] },
        { month: 2, title: 'Trải nghiệm cá nhân', topics: ['personal_experiences', 'emotions'] },
        { month: 3, title: 'Lễ kỷ niệm', topics: ['celebrations_11', 'cultural_events'] },
        { month: 4, title: 'Ôn tập cấp 1', topics: ['review_level1'] },
        { month: 5, title: 'Công tác tình nguyện', topics: ['volunteer_work', 'community_service'] },
        { month: 6, title: 'Các cuộc thi', topics: ['competitions', 'sports_events'] },
        { month: 7, title: 'Sách & Văn học', topics: ['books', 'literary_genres'] },
        { month: 8, title: 'Ôn tập cấp 2', topics: ['review_level2'] },
        { month: 9, title: 'Dân số thế giới', topics: ['world_population', 'urbanization'] },
        { month: 10, title: 'Không gian vũ trụ', topics: ['space', 'astronomy'] },
        { month: 11, title: 'Bưu chính & Viễn thông', topics: ['the_post_office', 'telecommunications'] },
        { month: 12, title: 'Thiên nhiên & Bảo vệ', topics: ['nature_11', 'environmental_action'] },
    ]
};

// ============================================
// TỪ VỰNG - 20+ CHỦ ĐỀ
// ============================================
GRADE_DATA[11].vocab = {
    // === THÁNG 1 ===
    friendship: {
        name: 'Tình bạn',
        level: 1,
        month: 1,
        words: [
            { en: 'Acquaintance', vi: 'Người quen', emoji: '🤝', phonetic: '/əˈkweɪntəns/' },
            { en: 'Mutual', vi: 'Lẫn nhau', emoji: '🔄', phonetic: '/ˈmjuːtʃuəl/' },
            { en: 'Loyalty', vi: 'Lòng trung thành', emoji: '🛡️', phonetic: '/ˈlɔɪəlti/' },
            { en: 'Companion', vi: 'Bạn đồng hành', emoji: '👫', phonetic: '/kəmˈpæniən/' },
            { en: 'Trustworthy', vi: 'Đáng tin cậy', emoji: '💎', phonetic: '/ˈtrʌstwɜːrði/' },
            { en: 'Intimate', vi: 'Thân mật', emoji: '💗', phonetic: '/ˈɪntɪmət/' },
            { en: 'Sympathetic', vi: 'Thông cảm', emoji: '🤗', phonetic: '/ˌsɪmpəˈθetɪk/' },
            { en: 'Considerate', vi: 'Chu đáo', emoji: '💐', phonetic: '/kənˈsɪdərət/' },
            { en: 'Generous', vi: 'Hào phóng', emoji: '🎁', phonetic: '/ˈdʒenərəs/' },
            { en: 'Sincere', vi: 'Chân thành', emoji: '❤️', phonetic: '/sɪnˈsɪr/' },
        ]
    },
    relationships: {
        name: 'Các mối quan hệ',
        level: 1,
        month: 1,
        words: [
            { en: 'Conflict', vi: 'Xung đột', emoji: '⚡', phonetic: '/ˈkɒnflɪkt/' },
            { en: 'Reconcile', vi: 'Hòa giải', emoji: '🤝', phonetic: '/ˈrekənsaɪl/' },
            { en: 'Betrayal', vi: 'Sự phản bội', emoji: '💔', phonetic: '/bɪˈtreɪəl/' },
            { en: 'Forgiveness', vi: 'Sự tha thứ', emoji: '🕊️', phonetic: '/fərˈɡɪvnəs/' },
            { en: 'Compromise', vi: 'Thỏa hiệp', emoji: '⚖️', phonetic: '/ˈkɒmprəmaɪz/' },
            { en: 'Empathize', vi: 'Đồng cảm', emoji: '💖', phonetic: '/ˈempəθaɪz/' },
            { en: 'Supportive', vi: 'Hay giúp đỡ', emoji: '🙌', phonetic: '/səˈpɔːrtɪv/' },
            { en: 'Misunderstanding', vi: 'Sự hiểu lầm', emoji: '😕', phonetic: '/ˌmɪsʌndərˈstændɪŋ/' },
            { en: 'Affection', vi: 'Tình cảm', emoji: '💕', phonetic: '/əˈfekʃən/' },
            { en: 'Commitment', vi: 'Cam kết', emoji: '📝', phonetic: '/kəˈmɪtmənt/' },
        ]
    },

    // === THÁNG 2 ===
    personal_experiences: {
        name: 'Trải nghiệm cá nhân',
        level: 1,
        month: 2,
        words: [
            { en: 'Memorable', vi: 'Đáng nhớ', emoji: '🌟', phonetic: '/ˈmemərəbəl/' },
            { en: 'Embarrassing', vi: 'Xấu hổ', emoji: '😳', phonetic: '/ɪmˈbærəsɪŋ/' },
            { en: 'Thrilling', vi: 'Hồi hộp', emoji: '🎢', phonetic: '/ˈθrɪlɪŋ/' },
            { en: 'Overwhelming', vi: 'Choáng ngợp', emoji: '😮', phonetic: '/ˌoʊvərˈwelmɪŋ/' },
            { en: 'Nostalgic', vi: 'Hoài niệm', emoji: '📸', phonetic: '/nɒˈstældʒɪk/' },
            { en: 'Challenging', vi: 'Thử thách', emoji: '🏔️', phonetic: '/ˈtʃælɪndʒɪŋ/' },
            { en: 'Rewarding', vi: 'Bổ ích', emoji: '🏆', phonetic: '/rɪˈwɔːrdɪŋ/' },
            { en: 'Regret', vi: 'Hối tiếc', emoji: '😔', phonetic: '/rɪˈɡret/' },
            { en: 'Achievement', vi: 'Thành tựu', emoji: '🎯', phonetic: '/əˈtʃiːvmənt/' },
            { en: 'Milestone', vi: 'Cột mốc', emoji: '🏁', phonetic: '/ˈmaɪlstoʊn/' },
        ]
    },
    emotions: {
        name: 'Cảm xúc',
        level: 1,
        month: 2,
        words: [
            { en: 'Anxious', vi: 'Lo lắng', emoji: '😰', phonetic: '/ˈæŋkʃəs/' },
            { en: 'Frustrated', vi: 'Bực bội', emoji: '😤', phonetic: '/ˈfrʌstreɪtɪd/' },
            { en: 'Grateful', vi: 'Biết ơn', emoji: '🙏', phonetic: '/ˈɡreɪtfəl/' },
            { en: 'Enthusiastic', vi: 'Nhiệt tình', emoji: '🔥', phonetic: '/ɪnˌθjuːziˈæstɪk/' },
            { en: 'Depressed', vi: 'Chán nản', emoji: '😞', phonetic: '/dɪˈprest/' },
            { en: 'Relieved', vi: 'Nhẹ nhõm', emoji: '😌', phonetic: '/rɪˈliːvd/' },
            { en: 'Astonished', vi: 'Kinh ngạc', emoji: '😲', phonetic: '/əˈstɒnɪʃt/' },
            { en: 'Contented', vi: 'Hài lòng', emoji: '😊', phonetic: '/kənˈtentɪd/' },
            { en: 'Indifferent', vi: 'Thờ ơ', emoji: '😐', phonetic: '/ɪnˈdɪfərənt/' },
            { en: 'Passionate', vi: 'Đam mê', emoji: '💪', phonetic: '/ˈpæʃənət/' },
        ]
    },

    // === THÁNG 3 ===
    celebrations_11: {
        name: 'Lễ kỷ niệm',
        level: 1,
        month: 3,
        words: [
            { en: 'Commemorate', vi: 'Tưởng niệm', emoji: '🕯️', phonetic: '/kəˈmeməreɪt/' },
            { en: 'Festive', vi: 'Thuộc lễ hội', emoji: '🎉', phonetic: '/ˈfestɪv/' },
            { en: 'Elaborate', vi: 'Công phu', emoji: '✨', phonetic: '/ɪˈlæbərət/' },
            { en: 'Spectacular', vi: 'Ngoạn mục', emoji: '🎆', phonetic: '/spekˈtækjələr/' },
            { en: 'Solemn', vi: 'Trang nghiêm', emoji: '🙏', phonetic: '/ˈsɒləm/' },
            { en: 'Commemoration', vi: 'Sự kỷ niệm', emoji: '🏛️', phonetic: '/kəˌmeməˈreɪʃən/' },
            { en: 'Significance', vi: 'Tầm quan trọng', emoji: '⭐', phonetic: '/sɪɡˈnɪfɪkəns/' },
            { en: 'Patriotic', vi: 'Yêu nước', emoji: '🇻🇳', phonetic: '/ˌpeɪtriˈɒtɪk/' },
            { en: 'Inaugural', vi: 'Khai mạc', emoji: '🎊', phonetic: '/ɪˈnɔːɡjərəl/' },
            { en: 'Jubilee', vi: 'Lễ kỷ niệm lớn', emoji: '🎂', phonetic: '/ˌdʒuːbɪˈliː/' },
        ]
    },
    cultural_events: {
        name: 'Sự kiện văn hóa',
        level: 1,
        month: 3,
        words: [
            { en: 'Exhibition', vi: 'Triển lãm', emoji: '🖼️', phonetic: '/ˌeksɪˈbɪʃən/' },
            { en: 'Carnival', vi: 'Lễ hội hóa trang', emoji: '🎭', phonetic: '/ˈkɑːrnɪvəl/' },
            { en: 'Pageant', vi: 'Cuộc thi sắc đẹp', emoji: '👑', phonetic: '/ˈpædʒənt/' },
            { en: 'Gala', vi: 'Dạ tiệc', emoji: '🥂', phonetic: '/ˈɡɑːlə/' },
            { en: 'Fundraiser', vi: 'Sự kiện gây quỹ', emoji: '💰', phonetic: '/ˈfʌndreɪzər/' },
            { en: 'Banquet', vi: 'Yến tiệc', emoji: '🍽️', phonetic: '/ˈbæŋkwɪt/' },
            { en: 'Unveiling', vi: 'Lễ khánh thành', emoji: '🎀', phonetic: '/ˌʌnˈveɪlɪŋ/' },
            { en: 'Procession', vi: 'Đoàn rước', emoji: '🎺', phonetic: '/prəˈseʃən/' },
            { en: 'Spectator', vi: 'Khán giả', emoji: '👥', phonetic: '/spekˈteɪtər/' },
            { en: 'Venue', vi: 'Địa điểm tổ chức', emoji: '🏟️', phonetic: '/ˈvenjuː/' },
        ]
    },

    // === THÁNG 5 ===
    volunteer_work: {
        name: 'Công tác tình nguyện',
        level: 2,
        month: 5,
        words: [
            { en: 'Philanthropist', vi: 'Nhà từ thiện', emoji: '💝', phonetic: '/fɪˈlænθrəpɪst/' },
            { en: 'Altruism', vi: 'Lòng vị tha', emoji: '🤲', phonetic: '/ˈæltruɪzəm/' },
            { en: 'Humanitarian', vi: 'Nhân đạo', emoji: '🌍', phonetic: '/hjuːˌmænɪˈteriən/' },
            { en: 'Orphanage', vi: 'Trại mồ côi', emoji: '🏠', phonetic: '/ˈɔːrfənɪdʒ/' },
            { en: 'Fundraising', vi: 'Gây quỹ', emoji: '💰', phonetic: '/ˈfʌndreɪzɪŋ/' },
            { en: 'Non-profit', vi: 'Phi lợi nhuận', emoji: '🤝', phonetic: '/ˌnɒn ˈprɒfɪt/' },
            { en: 'Outreach', vi: 'Hoạt động tiếp cận', emoji: '📢', phonetic: '/ˈaʊtriːtʃ/' },
            { en: 'Donation', vi: 'Sự quyên góp', emoji: '🎁', phonetic: '/doʊˈneɪʃən/' },
            { en: 'Beneficiary', vi: 'Người thụ hưởng', emoji: '👤', phonetic: '/ˌbenɪˈfɪʃəri/' },
            { en: 'Civic duty', vi: 'Nghĩa vụ công dân', emoji: '🏛️', phonetic: '/ˈsɪvɪk ˈdjuːti/' },
        ]
    },
    community_service: {
        name: 'Phục vụ cộng đồng',
        level: 2,
        month: 5,
        words: [
            { en: 'Initiative', vi: 'Sáng kiến', emoji: '💡', phonetic: '/ɪˈnɪʃətɪv/' },
            { en: 'Advocate', vi: 'Ủng hộ / Vận động', emoji: '🗣️', phonetic: '/ˈædvəkeɪt/' },
            { en: 'Empowerment', vi: 'Trao quyền', emoji: '💪', phonetic: '/ɪmˈpaʊərmənt/' },
            { en: 'Sustainability', vi: 'Tính bền vững', emoji: '🌿', phonetic: '/səˌsteɪnəˈbɪləti/' },
            { en: 'Welfare', vi: 'Phúc lợi', emoji: '🏥', phonetic: '/ˈwelfer/' },
            { en: 'Campaign', vi: 'Chiến dịch', emoji: '📢', phonetic: '/kæmˈpeɪn/' },
            { en: 'Awareness', vi: 'Nhận thức', emoji: '💡', phonetic: '/əˈwernəs/' },
            { en: 'Rehabilitation', vi: 'Phục hồi', emoji: '🔄', phonetic: '/ˌriːhəˌbɪlɪˈteɪʃən/' },
            { en: 'Impoverished', vi: 'Nghèo khổ', emoji: '😢', phonetic: '/ɪmˈpɒvərɪʃt/' },
            { en: 'Grassroots', vi: 'Cơ sở / Cấp cơ sở', emoji: '🌱', phonetic: '/ˈɡræsruːts/' },
        ]
    },

    // === THÁNG 6 ===
    competitions: {
        name: 'Các cuộc thi',
        level: 2,
        month: 6,
        words: [
            { en: 'Contestant', vi: 'Thí sinh', emoji: '🏃', phonetic: '/kənˈtestənt/' },
            { en: 'Tournament', vi: 'Giải đấu', emoji: '🏆', phonetic: '/ˈtʊrnəmənt/' },
            { en: 'Championship', vi: 'Chức vô địch', emoji: '🥇', phonetic: '/ˈtʃæmpiənʃɪp/' },
            { en: 'Semifinal', vi: 'Bán kết', emoji: '🏅', phonetic: '/ˌsemiˈfaɪnəl/' },
            { en: 'Elimination', vi: 'Loại trừ', emoji: '❌', phonetic: '/ɪˌlɪmɪˈneɪʃən/' },
            { en: 'Qualification', vi: 'Vòng loại', emoji: '✅', phonetic: '/ˌkwɒlɪfɪˈkeɪʃən/' },
            { en: 'Sportsmanship', vi: 'Tinh thần thể thao', emoji: '🤝', phonetic: '/ˈspɔːrtsmənʃɪp/' },
            { en: 'Opponent', vi: 'Đối thủ', emoji: '⚔️', phonetic: '/əˈpoʊnənt/' },
            { en: 'Referee', vi: 'Trọng tài', emoji: '🧑‍⚖️', phonetic: '/ˌrefəˈriː/' },
            { en: 'Spectator', vi: 'Khán giả', emoji: '👀', phonetic: '/spekˈteɪtər/' },
        ]
    },
    sports_events: {
        name: 'Sự kiện thể thao',
        level: 2,
        month: 6,
        words: [
            { en: 'Marathon', vi: 'Cuộc thi marathon', emoji: '🏃', phonetic: '/ˈmærəθən/' },
            { en: 'Relay', vi: 'Tiếp sức', emoji: '🏅', phonetic: '/ˈriːleɪ/' },
            { en: 'Podium', vi: 'Bục trao giải', emoji: '🥇', phonetic: '/ˈpoʊdiəm/' },
            { en: 'Record-breaking', vi: 'Phá kỷ lục', emoji: '📊', phonetic: '/ˈrekərd ˈbreɪkɪŋ/' },
            { en: 'Stamina', vi: 'Sức chịu đựng', emoji: '💪', phonetic: '/ˈstæmɪnə/' },
            { en: 'Endurance', vi: 'Sức bền', emoji: '🏋️', phonetic: '/ɪnˈdjʊrəns/' },
            { en: 'Tactics', vi: 'Chiến thuật', emoji: '📋', phonetic: '/ˈtæktɪks/' },
            { en: 'Penalty', vi: 'Phạt', emoji: '🟥', phonetic: '/ˈpenəlti/' },
            { en: 'Medal', vi: 'Huy chương', emoji: '🏅', phonetic: '/ˈmedəl/' },
            { en: 'Venue', vi: 'Sân thi đấu', emoji: '🏟️', phonetic: '/ˈvenjuː/' },
        ]
    },

    // === THÁNG 7 ===
    books: {
        name: 'Sách',
        level: 2,
        month: 7,
        words: [
            { en: 'Autobiography', vi: 'Tự truyện', emoji: '📖', phonetic: '/ˌɔːtəbaɪˈɒɡrəfi/' },
            { en: 'Bestseller', vi: 'Sách bán chạy nhất', emoji: '📚', phonetic: '/ˈbestselər/' },
            { en: 'Manuscript', vi: 'Bản thảo', emoji: '📝', phonetic: '/ˈmænjəskrɪpt/' },
            { en: 'Publisher', vi: 'Nhà xuất bản', emoji: '🏢', phonetic: '/ˈpʌblɪʃər/' },
            { en: 'Prologue', vi: 'Lời mở đầu', emoji: '📃', phonetic: '/ˈproʊlɒɡ/' },
            { en: 'Epilogue', vi: 'Phần kết', emoji: '📄', phonetic: '/ˈepɪlɒɡ/' },
            { en: 'Protagonist', vi: 'Nhân vật chính', emoji: '🦸', phonetic: '/proʊˈtæɡənɪst/' },
            { en: 'Plot', vi: 'Cốt truyện', emoji: '📈', phonetic: '/plɒt/' },
            { en: 'Narrative', vi: 'Tường thuật', emoji: '📖', phonetic: '/ˈnærətɪv/' },
            { en: 'Anthology', vi: 'Tuyển tập', emoji: '📚', phonetic: '/ænˈθɒlədʒi/' },
        ]
    },
    literary_genres: {
        name: 'Thể loại văn học',
        level: 2,
        month: 7,
        words: [
            { en: 'Fiction', vi: 'Tiểu thuyết / Hư cấu', emoji: '📕', phonetic: '/ˈfɪkʃən/' },
            { en: 'Non-fiction', vi: 'Phi hư cấu', emoji: '📗', phonetic: '/ˌnɒn ˈfɪkʃən/' },
            { en: 'Poetry', vi: 'Thơ', emoji: '📜', phonetic: '/ˈpoʊɪtri/' },
            { en: 'Drama', vi: 'Kịch', emoji: '🎭', phonetic: '/ˈdrɑːmə/' },
            { en: 'Thriller', vi: 'Truyện ly kỳ', emoji: '😱', phonetic: '/ˈθrɪlər/' },
            { en: 'Mystery', vi: 'Truyện bí ẩn', emoji: '🔍', phonetic: '/ˈmɪstəri/' },
            { en: 'Romance', vi: 'Truyện tình cảm', emoji: '💕', phonetic: '/roʊˈmæns/' },
            { en: 'Science fiction', vi: 'Khoa học viễn tưởng', emoji: '🚀', phonetic: '/ˈsaɪəns ˈfɪkʃən/' },
            { en: 'Biography', vi: 'Tiểu sử', emoji: '👤', phonetic: '/baɪˈɒɡrəfi/' },
            { en: 'Satire', vi: 'Trào phúng', emoji: '😏', phonetic: '/ˈsætaɪər/' },
        ]
    },

    // === THÁNG 9 ===
    world_population: {
        name: 'Dân số thế giới',
        level: 3,
        month: 9,
        words: [
            { en: 'Overpopulation', vi: 'Quá tải dân số', emoji: '🌍', phonetic: '/ˌoʊvərˌpɒpjuˈleɪʃən/' },
            { en: 'Birth rate', vi: 'Tỷ lệ sinh', emoji: '👶', phonetic: '/bɜːrθ reɪt/' },
            { en: 'Mortality rate', vi: 'Tỷ lệ tử vong', emoji: '📉', phonetic: '/mɔːrˈtæləti reɪt/' },
            { en: 'Life expectancy', vi: 'Tuổi thọ trung bình', emoji: '📊', phonetic: '/laɪf ɪkˈspektənsi/' },
            { en: 'Census', vi: 'Điều tra dân số', emoji: '📋', phonetic: '/ˈsensəs/' },
            { en: 'Demographic', vi: 'Thuộc nhân khẩu học', emoji: '📈', phonetic: '/ˌdeməˈɡræfɪk/' },
            { en: 'Fertility', vi: 'Khả năng sinh sản', emoji: '🍼', phonetic: '/fɜːrˈtɪləti/' },
            { en: 'Family planning', vi: 'Kế hoạch hóa gia đình', emoji: '👨‍👩‍👧', phonetic: '/ˈfæməli ˈplænɪŋ/' },
            { en: 'Aging population', vi: 'Dân số già hóa', emoji: '👴', phonetic: '/ˈeɪdʒɪŋ ˌpɒpjuˈleɪʃən/' },
            { en: 'Migration', vi: 'Di cư', emoji: '✈️', phonetic: '/maɪˈɡreɪʃən/' },
        ]
    },
    urbanization: {
        name: 'Đô thị hóa',
        level: 3,
        month: 9,
        words: [
            { en: 'Urbanization', vi: 'Đô thị hóa', emoji: '🏙️', phonetic: '/ˌɜːrbənaɪˈzeɪʃən/' },
            { en: 'Infrastructure', vi: 'Cơ sở hạ tầng', emoji: '🏗️', phonetic: '/ˈɪnfrəstrʌktʃər/' },
            { en: 'Megacity', vi: 'Siêu đô thị', emoji: '🌃', phonetic: '/ˈmeɡəsɪti/' },
            { en: 'Slum', vi: 'Khu ổ chuột', emoji: '🏚️', phonetic: '/slʌm/' },
            { en: 'Congestion', vi: 'Tắc nghẽn', emoji: '🚗', phonetic: '/kənˈdʒestʃən/' },
            { en: 'Sanitation', vi: 'Vệ sinh', emoji: '🚰', phonetic: '/ˌsænɪˈteɪʃən/' },
            { en: 'Commuter', vi: 'Người đi làm xa', emoji: '🚌', phonetic: '/kəˈmjuːtər/' },
            { en: 'Gentrification', vi: 'Quý tộc hóa', emoji: '🏠', phonetic: '/ˌdʒentrɪfɪˈkeɪʃən/' },
            { en: 'Zoning', vi: 'Quy hoạch vùng', emoji: '🗺️', phonetic: '/ˈzoʊnɪŋ/' },
            { en: 'Metropolis', vi: 'Đô thị lớn', emoji: '🌆', phonetic: '/məˈtrɒpəlɪs/' },
        ]
    },

    // === THÁNG 10 ===
    space: {
        name: 'Không gian vũ trụ',
        level: 3,
        month: 10,
        words: [
            { en: 'Galaxy', vi: 'Thiên hà', emoji: '🌌', phonetic: '/ˈɡæləksi/' },
            { en: 'Satellite', vi: 'Vệ tinh', emoji: '🛰️', phonetic: '/ˈsætəlaɪt/' },
            { en: 'Astronaut', vi: 'Phi hành gia', emoji: '👨‍🚀', phonetic: '/ˈæstrənɔːt/' },
            { en: 'Orbit', vi: 'Quỹ đạo', emoji: '🌍', phonetic: '/ˈɔːrbɪt/' },
            { en: 'Spacecraft', vi: 'Tàu vũ trụ', emoji: '🚀', phonetic: '/ˈspeɪskræft/' },
            { en: 'Constellation', vi: 'Chòm sao', emoji: '⭐', phonetic: '/ˌkɒnstəˈleɪʃən/' },
            { en: 'Gravity', vi: 'Trọng lực', emoji: '🍎', phonetic: '/ˈɡrævəti/' },
            { en: 'Black hole', vi: 'Hố đen', emoji: '🕳️', phonetic: '/blæk hoʊl/' },
            { en: 'Cosmos', vi: 'Vũ trụ', emoji: '🌌', phonetic: '/ˈkɒzmɒs/' },
            { en: 'Telescope', vi: 'Kính thiên văn', emoji: '🔭', phonetic: '/ˈtelɪskoʊp/' },
        ]
    },
    astronomy: {
        name: 'Thiên văn học',
        level: 3,
        month: 10,
        words: [
            { en: 'Solar system', vi: 'Hệ mặt trời', emoji: '☀️', phonetic: '/ˈsoʊlər ˈsɪstəm/' },
            { en: 'Lunar eclipse', vi: 'Nguyệt thực', emoji: '🌑', phonetic: '/ˈluːnər ɪˈklɪps/' },
            { en: 'Nebula', vi: 'Tinh vân', emoji: '🌫️', phonetic: '/ˈnebjələ/' },
            { en: 'Comet', vi: 'Sao chổi', emoji: '☄️', phonetic: '/ˈkɒmɪt/' },
            { en: 'Asteroid', vi: 'Tiểu hành tinh', emoji: '🪨', phonetic: '/ˈæstərɔɪd/' },
            { en: 'Light-year', vi: 'Năm ánh sáng', emoji: '💡', phonetic: '/ˈlaɪt jɪr/' },
            { en: 'Supernova', vi: 'Siêu tân tinh', emoji: '💥', phonetic: '/ˌsuːpərˈnoʊvə/' },
            { en: 'Atmosphere', vi: 'Bầu khí quyển', emoji: '🌤️', phonetic: '/ˈætməsfɪr/' },
            { en: 'Meteorite', vi: 'Thiên thạch', emoji: '🌠', phonetic: '/ˈmiːtiəraɪt/' },
            { en: 'Observatory', vi: 'Đài thiên văn', emoji: '🔭', phonetic: '/əbˈzɜːrvətɔːri/' },
        ]
    },

    // === THÁNG 11 ===
    the_post_office: {
        name: 'Bưu chính',
        level: 3,
        month: 11,
        words: [
            { en: 'Parcel', vi: 'Bưu kiện', emoji: '📦', phonetic: '/ˈpɑːrsəl/' },
            { en: 'Postage', vi: 'Bưu phí', emoji: '📮', phonetic: '/ˈpoʊstɪdʒ/' },
            { en: 'Courier', vi: 'Người giao hàng', emoji: '🚚', phonetic: '/ˈkʊriər/' },
            { en: 'Registered mail', vi: 'Thư bảo đảm', emoji: '📧', phonetic: '/ˈredʒɪstərd meɪl/' },
            { en: 'Express delivery', vi: 'Chuyển phát nhanh', emoji: '⚡', phonetic: '/ɪkˈspres dɪˈlɪvəri/' },
            { en: 'Recipient', vi: 'Người nhận', emoji: '👤', phonetic: '/rɪˈsɪpiənt/' },
            { en: 'Zip code', vi: 'Mã bưu chính', emoji: '🔢', phonetic: '/zɪp koʊd/' },
            { en: 'Stamp', vi: 'Tem', emoji: '📬', phonetic: '/stæmp/' },
            { en: 'Mailbox', vi: 'Hộp thư', emoji: '📪', phonetic: '/ˈmeɪlbɒks/' },
            { en: 'Tracking', vi: 'Theo dõi đơn hàng', emoji: '📍', phonetic: '/ˈtrækɪŋ/' },
        ]
    },
    telecommunications: {
        name: 'Viễn thông',
        level: 3,
        month: 11,
        words: [
            { en: 'Fiber optic', vi: 'Cáp quang', emoji: '🔌', phonetic: '/ˈfaɪbər ˈɒptɪk/' },
            { en: 'Bandwidth', vi: 'Băng thông', emoji: '📶', phonetic: '/ˈbændwɪdθ/' },
            { en: 'Transmission', vi: 'Sự truyền tải', emoji: '📡', phonetic: '/trænzˈmɪʃən/' },
            { en: 'Encryption', vi: 'Mã hóa', emoji: '🔒', phonetic: '/ɪnˈkrɪpʃən/' },
            { en: 'Subscriber', vi: 'Thuê bao', emoji: '📱', phonetic: '/səbˈskraɪbər/' },
            { en: 'Roaming', vi: 'Chuyển vùng', emoji: '🌐', phonetic: '/ˈroʊmɪŋ/' },
            { en: 'Connectivity', vi: 'Kết nối', emoji: '🔗', phonetic: '/ˌkɒnekˈtɪvəti/' },
            { en: 'Broadband', vi: 'Băng rộng', emoji: '🌐', phonetic: '/ˈbrɔːdbænd/' },
            { en: 'Wireless', vi: 'Không dây', emoji: '📶', phonetic: '/ˈwaɪərləs/' },
            { en: 'Network', vi: 'Mạng lưới', emoji: '🕸️', phonetic: '/ˈnetwɜːrk/' },
        ]
    },

    // === THÁNG 12 ===
    nature_11: {
        name: 'Thiên nhiên',
        level: 3,
        month: 12,
        words: [
            { en: 'Rainforest', vi: 'Rừng nhiệt đới', emoji: '🌳', phonetic: '/ˈreɪnfɒrɪst/' },
            { en: 'Coral reef', vi: 'Rạn san hô', emoji: '🪸', phonetic: '/ˈkɒrəl riːf/' },
            { en: 'Glacier', vi: 'Sông băng', emoji: '🏔️', phonetic: '/ˈɡlæsiər/' },
            { en: 'Tundra', vi: 'Lãnh nguyên', emoji: '❄️', phonetic: '/ˈtʌndrə/' },
            { en: 'Savanna', vi: 'Đồng cỏ nhiệt đới', emoji: '🦒', phonetic: '/səˈvænə/' },
            { en: 'Wetland', vi: 'Đất ngập nước', emoji: '🌊', phonetic: '/ˈwetlænd/' },
            { en: 'Biodiversity', vi: 'Đa dạng sinh học', emoji: '🦋', phonetic: '/ˌbaɪoʊdaɪˈvɜːrsəti/' },
            { en: 'Photosynthesis', vi: 'Quang hợp', emoji: '🌿', phonetic: '/ˌfoʊtoʊˈsɪnθəsɪs/' },
            { en: 'Erosion', vi: 'Xói mòn', emoji: '🏜️', phonetic: '/ɪˈroʊʒən/' },
            { en: 'Mangrove', vi: 'Rừng ngập mặn', emoji: '🌴', phonetic: '/ˈmæŋɡroʊv/' },
        ]
    },
    environmental_action: {
        name: 'Hành động vì môi trường',
        level: 3,
        month: 12,
        words: [
            { en: 'Activism', vi: 'Hoạt động tích cực', emoji: '✊', phonetic: '/ˈæktɪvɪzəm/' },
            { en: 'Petition', vi: 'Kiến nghị', emoji: '📝', phonetic: '/pəˈtɪʃən/' },
            { en: 'Carbon offset', vi: 'Bù đắp carbon', emoji: '🌱', phonetic: '/ˈkɑːrbən ˈɒfset/' },
            { en: 'Renewable energy', vi: 'Năng lượng tái tạo', emoji: '☀️', phonetic: '/rɪˈnjuːəbəl ˈenərdʒi/' },
            { en: 'Climate change', vi: 'Biến đổi khí hậu', emoji: '🌡️', phonetic: '/ˈklaɪmət tʃeɪndʒ/' },
            { en: 'Deforestation', vi: 'Phá rừng', emoji: '🪓', phonetic: '/diːˌfɒrɪˈsteɪʃən/' },
            { en: 'Reforestation', vi: 'Tái trồng rừng', emoji: '🌲', phonetic: '/ˌriːfɒrɪˈsteɪʃən/' },
            { en: 'Sustainability', vi: 'Tính bền vững', emoji: '🌍', phonetic: '/səˌsteɪnəˈbɪləti/' },
            { en: 'Conservation', vi: 'Bảo tồn', emoji: '🛡️', phonetic: '/ˌkɒnsərˈveɪʃən/' },
            { en: 'Greenwashing', vi: 'Tẩy xanh', emoji: '🧼', phonetic: '/ˈɡriːnwɒʃɪŋ/' },
        ]
    },
};

// ============================================
// PHONICS - CONNECTED SPEECH & INTONATION
// ============================================
GRADE_DATA[11].phonics = [
    { letter: 'Stress shift', sound: 'Chuyển trọng âm', words: [
        { word: 'PREsent (n) → preSENT (v)', highlight: 'PRE/SENT', emoji: '🎁' },
        { word: 'REcord (n) → reCORD (v)', highlight: 'RE/CORD', emoji: '📀' },
        { word: 'CONflict (n) → conFLICT (v)', highlight: 'CON/FLICT', emoji: '⚔️' }
    ]},
    { letter: 'Compound stress', sound: 'Trọng âm từ ghép', words: [
        { word: 'BLACKboard', highlight: 'BLACK', emoji: '📋' },
        { word: 'GREENhouse', highlight: 'GREEN', emoji: '🏡' },
        { word: 'BIRTHday', highlight: 'BIRTH', emoji: '🎂' }
    ]},
    { letter: 'Sentence stress', sound: 'Trọng âm câu', words: [
        { word: 'I LIKE reading BOOKS', highlight: 'LIKE/BOOKS', emoji: '📚' },
        { word: 'She WENT to the PARK', highlight: 'WENT/PARK', emoji: '🌳' },
        { word: 'They PLAY football WELL', highlight: 'PLAY/WELL', emoji: '⚽' }
    ]},
    { letter: 'Intrusive /r/', sound: 'Âm /r/ xen vào', words: [
        { word: 'law(r) and order', highlight: 'r', emoji: '⚖️' },
        { word: 'idea(r) of', highlight: 'r', emoji: '💡' },
        { word: 'media(r) attention', highlight: 'r', emoji: '📺' }
    ]},
    { letter: 'Glottal stop', sound: 'Âm tắc thanh hầu', words: [
        { word: 'buʔton', highlight: 'ʔ', emoji: '🔘' },
        { word: 'kiʔten', highlight: 'ʔ', emoji: '🐱' },
        { word: 'cerʔain', highlight: 'ʔ', emoji: '✅' }
    ]},
    { letter: 'Schwa /ə/', sound: 'Nguyên âm yếu', words: [
        { word: 'tələphone', highlight: 'ə', emoji: '📞' },
        { word: 'compətition', highlight: 'ə', emoji: '🏆' },
        { word: 'pəpulation', highlight: 'ə', emoji: '👥' }
    ]},
    { letter: '-ough', sound: 'Nhiều cách đọc', words: [
        { word: 'through /θruː/', highlight: 'ough', emoji: '➡️' },
        { word: 'though /ðoʊ/', highlight: 'ough', emoji: '🤔' },
        { word: 'tough /tʌf/', highlight: 'ough', emoji: '💪' }
    ]},
    { letter: 'Falling-rising ↘️↗️', sound: 'Giọng xuống-lên', words: [
        { word: 'Well... ↘️↗️ (hesitation)', highlight: '↘️↗️', emoji: '🤔' },
        { word: 'Actually... ↘️↗️ (contrast)', highlight: '↘️↗️', emoji: '☝️' },
        { word: 'But... ↘️↗️ (reservation)', highlight: '↘️↗️', emoji: '😕' }
    ]},
    { letter: 'Chunking', sound: 'Ngắt nhóm từ', words: [
        { word: 'My best friend | lives next door', highlight: '|', emoji: '👫' },
        { word: 'Last summer | we went camping', highlight: '|', emoji: '⛺' },
        { word: 'In the future | I want to travel', highlight: '|', emoji: '✈️' }
    ]},
    { letter: 'Consonant clusters', sound: 'Cụm phụ âm', words: [
        { word: 'Strengths /streŋθs/', highlight: 'str...ŋθs', emoji: '💪' },
        { word: 'Sixths /sɪksθs/', highlight: 'ksθs', emoji: '6️⃣' },
        { word: 'Twelfths /twelfθs/', highlight: 'lfθs', emoji: '🔢' }
    ]},
    { letter: 'Emphasis patterns', sound: 'Nhấn mạnh ý', words: [
        { word: 'I DO like it (emphasis)', highlight: 'DO', emoji: '👍' },
        { word: 'It WAS amazing (emphasis)', highlight: 'WAS', emoji: '🌟' },
        { word: 'She DID finish (emphasis)', highlight: 'DID', emoji: '✅' }
    ]},
];

// ============================================
// CÂU MẪU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[11].sentences = {
    level1: [
        { sentence: ['A', 'true', 'friend', 'is', 'always', 'loyal', 'and', 'sincere'], emoji: '🤝', vi: 'Một người bạn thật sự luôn trung thành và chân thành', extra: ['never', 'or'] },
        { sentence: ['That', 'was', 'the', 'most', 'memorable', 'experience', 'of', 'my', 'life'], emoji: '🌟', vi: 'Đó là trải nghiệm đáng nhớ nhất trong đời tôi', extra: ['boring', 'her'] },
        { sentence: ['The', 'festival', 'was', 'held', 'to', 'commemorate', 'the', 'heroes'], emoji: '🕯️', vi: 'Lễ hội được tổ chức để tưởng niệm các anh hùng', extra: ['forget', 'a'] },
        { sentence: ['She', 'felt', 'overwhelmed', 'by', 'the', 'spectacular', 'fireworks'], emoji: '🎆', vi: 'Cô ấy cảm thấy choáng ngợp bởi pháo hoa ngoạn mục', extra: ['bored', 'a'] },
        { sentence: ['Good', 'friends', 'should', 'be', 'considerate', 'and', 'supportive'], emoji: '💐', vi: 'Bạn tốt nên chu đáo và hay giúp đỡ', extra: ['selfish', 'or'] },
        { sentence: ['He', 'felt', 'nostalgic', 'when', 'looking', 'at', 'old', 'photos'], emoji: '📸', vi: 'Anh ấy cảm thấy hoài niệm khi xem ảnh cũ', extra: ['bored', 'new'] },
        { sentence: ['They', 'reconciled', 'after', 'the', 'misunderstanding'], emoji: '🤝', vi: 'Họ đã hòa giải sau sự hiểu lầm', extra: ['before', 'a'] },
        { sentence: ['The', 'exhibition', 'attracted', 'thousands', 'of', 'spectators'], emoji: '🖼️', vi: 'Triển lãm thu hút hàng ngàn khán giả', extra: ['few', 'a'] },
    ],
    level2: [
        { sentence: ['The', 'philanthropist', 'donated', 'millions', 'to', 'the', 'orphanage'], emoji: '💝', vi: 'Nhà từ thiện đã quyên góp hàng triệu cho trại mồ côi', extra: ['stole', 'a'] },
        { sentence: ['The', 'contestant', 'showed', 'great', 'sportsmanship', 'during', 'the', 'tournament'], emoji: '🏆', vi: 'Thí sinh thể hiện tinh thần thể thao tuyệt vời trong giải đấu', extra: ['poor', 'a'] },
        { sentence: ['This', 'autobiography', 'became', 'a', 'bestseller', 'in', 'many', 'countries'], emoji: '📖', vi: 'Cuốn tự truyện này trở thành sách bán chạy ở nhiều nước', extra: ['few', 'the'] },
        { sentence: ['The', 'referee', 'made', 'a', 'controversial', 'decision', 'during', 'the', 'semifinal'], emoji: '🧑‍⚖️', vi: 'Trọng tài đưa ra quyết định gây tranh cãi trong trận bán kết', extra: ['fair', 'a'] },
        { sentence: ['Community', 'service', 'empowers', 'impoverished', 'communities'], emoji: '💪', vi: 'Phục vụ cộng đồng trao quyền cho các cộng đồng nghèo khổ', extra: ['weakens', 'wealthy'] },
        { sentence: ['The', 'protagonist', 'of', 'the', 'novel', 'faces', 'many', 'challenges'], emoji: '🦸', vi: 'Nhân vật chính của tiểu thuyết đối mặt nhiều thử thách', extra: ['few', 'a'] },
    ],
    level3: [
        { sentence: ['The', 'world', 'population', 'is', 'expected', 'to', 'reach', 'ten', 'billion', 'by', 'twenty', 'fifty'], emoji: '🌍', vi: 'Dân số thế giới dự kiến đạt mười tỷ vào năm 2050', extra: ['decrease', 'in'] },
        { sentence: ['The', 'astronaut', 'orbited', 'the', 'Earth', 'in', 'the', 'spacecraft'], emoji: '🚀', vi: 'Phi hành gia bay quanh quỹ đạo Trái Đất trong tàu vũ trụ', extra: ['left', 'on'] },
        { sentence: ['Express', 'delivery', 'ensures', 'the', 'parcel', 'arrives', 'within', 'two', 'days'], emoji: '📦', vi: 'Chuyển phát nhanh đảm bảo bưu kiện đến trong hai ngày', extra: ['delays', 'after'] },
        { sentence: ['Coral', 'reefs', 'are', 'vital', 'for', 'marine', 'biodiversity'], emoji: '🪸', vi: 'Rạn san hô rất quan trọng cho đa dạng sinh học biển', extra: ['harmful', 'against'] },
        { sentence: ['Climate', 'change', 'is', 'the', 'greatest', 'challenge', 'of', 'our', 'generation'], emoji: '🌡️', vi: 'Biến đổi khí hậu là thách thức lớn nhất của thế hệ chúng ta', extra: ['smallest', 'their'] },
        { sentence: ['Fiber', 'optic', 'cables', 'transmit', 'data', 'at', 'the', 'speed', 'of', 'light'], emoji: '🔌', vi: 'Cáp quang truyền dữ liệu với tốc độ ánh sáng', extra: ['block', 'without'] },
        { sentence: ['The', 'observatory', 'detected', 'a', 'new', 'asteroid', 'near', 'Earth'], emoji: '🔭', vi: 'Đài thiên văn phát hiện một tiểu hành tinh mới gần Trái Đất', extra: ['old', 'far'] },
        { sentence: ['Urbanization', 'leads', 'to', 'congestion', 'and', 'sanitation', 'problems'], emoji: '🏙️', vi: 'Đô thị hóa dẫn đến tắc nghẽn và các vấn đề vệ sinh', extra: ['prevents', 'or'] },
    ],
};

// ============================================
// SPELLING THEO CẤP ĐỘ
// ============================================
GRADE_DATA[11].spelling = {
    level1: [
        { word: 'LOYALTY', emoji: '🛡️', vi: 'Lòng trung thành' },
        { word: 'SINCERE', emoji: '❤️', vi: 'Chân thành' },
        { word: 'NOSTALGIC', emoji: '📸', vi: 'Hoài niệm' },
        { word: 'COMPROMISE', emoji: '⚖️', vi: 'Thỏa hiệp' },
        { word: 'ANXIOUS', emoji: '😰', vi: 'Lo lắng' },
        { word: 'GRATEFUL', emoji: '🙏', vi: 'Biết ơn' },
        { word: 'SPECTACULAR', emoji: '🎆', vi: 'Ngoạn mục' },
        { word: 'PATRIOTIC', emoji: '🇻🇳', vi: 'Yêu nước' },
        { word: 'CARNIVAL', emoji: '🎭', vi: 'Lễ hội hóa trang' },
        { word: 'ACQUAINTANCE', emoji: '🤝', vi: 'Người quen' },
        { word: 'EMBARRASSING', emoji: '😳', vi: 'Xấu hổ' },
        { word: 'COMMEMORATE', emoji: '🕯️', vi: 'Tưởng niệm' },
    ],
    level2: [
        { word: 'PHILANTHROPIST', emoji: '💝', vi: 'Nhà từ thiện' },
        { word: 'TOURNAMENT', emoji: '🏆', vi: 'Giải đấu' },
        { word: 'AUTOBIOGRAPHY', emoji: '📖', vi: 'Tự truyện' },
        { word: 'CHAMPIONSHIP', emoji: '🥇', vi: 'Chức vô địch' },
        { word: 'PROTAGONIST', emoji: '🦸', vi: 'Nhân vật chính' },
        { word: 'SPORTSMANSHIP', emoji: '🤝', vi: 'Tinh thần thể thao' },
        { word: 'HUMANITARIAN', emoji: '🌍', vi: 'Nhân đạo' },
        { word: 'MANUSCRIPT', emoji: '📝', vi: 'Bản thảo' },
        { word: 'BENEFICIARY', emoji: '👤', vi: 'Người thụ hưởng' },
        { word: 'ANTHOLOGY', emoji: '📚', vi: 'Tuyển tập' },
        { word: 'ENDURANCE', emoji: '🏋️', vi: 'Sức bền' },
        { word: 'ELIMINATION', emoji: '❌', vi: 'Loại trừ' },
    ],
    level3: [
        { word: 'OVERPOPULATION', emoji: '🌍', vi: 'Quá tải dân số' },
        { word: 'CONSTELLATION', emoji: '⭐', vi: 'Chòm sao' },
        { word: 'PHOTOSYNTHESIS', emoji: '🌿', vi: 'Quang hợp' },
        { word: 'URBANIZATION', emoji: '🏙️', vi: 'Đô thị hóa' },
        { word: 'INFRASTRUCTURE', emoji: '🏗️', vi: 'Cơ sở hạ tầng' },
        { word: 'TELECOMMUNICATIONS', emoji: '📡', vi: 'Viễn thông' },
        { word: 'OBSERVATORY', emoji: '🔭', vi: 'Đài thiên văn' },
        { word: 'GENTRIFICATION', emoji: '🏠', vi: 'Quý tộc hóa' },
        { word: 'DEFORESTATION', emoji: '🪓', vi: 'Phá rừng' },
        { word: 'SUSTAINABILITY', emoji: '🌍', vi: 'Tính bền vững' },
        { word: 'METEORITE', emoji: '🌠', vi: 'Thiên thạch' },
        { word: 'ENCRYPTION', emoji: '🔒', vi: 'Mã hóa' },
    ],
};

// ============================================
// NGHE HIỂU THEO CẤP ĐỘ
// ============================================
GRADE_DATA[11].listening = {
    level1: [
        { word: 'Acquaintance', options: [{ emoji: '🤝', label: 'Acquaintance' }, { emoji: '👫', label: 'Companion' }, { emoji: '💎', label: 'Trustworthy' }, { emoji: '🛡️', label: 'Loyalty' }], correct: 0 },
        { word: 'Embarrassing', options: [{ emoji: '🌟', label: 'Memorable' }, { emoji: '😳', label: 'Embarrassing' }, { emoji: '🎢', label: 'Thrilling' }, { emoji: '😮', label: 'Overwhelming' }], correct: 1 },
        { word: 'Commemorate', options: [{ emoji: '🎉', label: 'Festive' }, { emoji: '✨', label: 'Elaborate' }, { emoji: '🕯️', label: 'Commemorate' }, { emoji: '🎆', label: 'Spectacular' }], correct: 2 },
        { word: 'Venue', options: [{ emoji: '🖼️', label: 'Exhibition' }, { emoji: '🎭', label: 'Carnival' }, { emoji: '👥', label: 'Spectator' }, { emoji: '🏟️', label: 'Venue' }], correct: 3 },
        { word: 'Reconcile', options: [{ emoji: '🤝', label: 'Reconcile' }, { emoji: '💔', label: 'Betrayal' }, { emoji: '⚡', label: 'Conflict' }, { emoji: '⚖️', label: 'Compromise' }], correct: 0 },
        { word: 'Frustrated', options: [{ emoji: '🙏', label: 'Grateful' }, { emoji: '😤', label: 'Frustrated' }, { emoji: '😌', label: 'Relieved' }, { emoji: '😲', label: 'Astonished' }], correct: 1 },
    ],
    level2: [
        { word: 'Orphanage', options: [{ emoji: '🏠', label: 'Orphanage' }, { emoji: '💝', label: 'Philanthropist' }, { emoji: '🤲', label: 'Altruism' }, { emoji: '💰', label: 'Fundraising' }], correct: 0 },
        { word: 'Referee', options: [{ emoji: '🏃', label: 'Contestant' }, { emoji: '🧑‍⚖️', label: 'Referee' }, { emoji: '⚔️', label: 'Opponent' }, { emoji: '👀', label: 'Spectator' }], correct: 1 },
        { word: 'Manuscript', options: [{ emoji: '📖', label: 'Autobiography' }, { emoji: '📚', label: 'Bestseller' }, { emoji: '📝', label: 'Manuscript' }, { emoji: '🏢', label: 'Publisher' }], correct: 2 },
        { word: 'Satire', options: [{ emoji: '📕', label: 'Fiction' }, { emoji: '🔍', label: 'Mystery' }, { emoji: '💕', label: 'Romance' }, { emoji: '😏', label: 'Satire' }], correct: 3 },
        { word: 'Marathon', options: [{ emoji: '🏃', label: 'Marathon' }, { emoji: '🏅', label: 'Relay' }, { emoji: '🥇', label: 'Podium' }, { emoji: '📊', label: 'Record-breaking' }], correct: 0 },
        { word: 'Stamina', options: [{ emoji: '📋', label: 'Tactics' }, { emoji: '💪', label: 'Stamina' }, { emoji: '🏋️', label: 'Endurance' }, { emoji: '🟥', label: 'Penalty' }], correct: 1 },
        { word: 'Prologue', options: [{ emoji: '📈', label: 'Plot' }, { emoji: '📖', label: 'Narrative' }, { emoji: '📃', label: 'Prologue' }, { emoji: '📄', label: 'Epilogue' }], correct: 2 },
        { word: 'Grassroots', options: [{ emoji: '💡', label: 'Initiative' }, { emoji: '🗣️', label: 'Advocate' }, { emoji: '💪', label: 'Empowerment' }, { emoji: '🌱', label: 'Grassroots' }], correct: 3 },
    ],
    level3: [
        { word: 'Census', options: [{ emoji: '📋', label: 'Census' }, { emoji: '👶', label: 'Birth rate' }, { emoji: '📉', label: 'Mortality rate' }, { emoji: '📊', label: 'Life expectancy' }], correct: 0 },
        { word: 'Satellite', options: [{ emoji: '🌌', label: 'Galaxy' }, { emoji: '🛰️', label: 'Satellite' }, { emoji: '🚀', label: 'Spacecraft' }, { emoji: '🌍', label: 'Orbit' }], correct: 1 },
        { word: 'Courier', options: [{ emoji: '📮', label: 'Postage' }, { emoji: '📧', label: 'Registered mail' }, { emoji: '🚚', label: 'Courier' }, { emoji: '📍', label: 'Tracking' }], correct: 2 },
        { word: 'Mangrove', options: [{ emoji: '🌳', label: 'Rainforest' }, { emoji: '🪸', label: 'Coral reef' }, { emoji: '🏔️', label: 'Glacier' }, { emoji: '🌴', label: 'Mangrove' }], correct: 3 },
        { word: 'Constellation', options: [{ emoji: '⭐', label: 'Constellation' }, { emoji: '🕳️', label: 'Black hole' }, { emoji: '🌌', label: 'Cosmos' }, { emoji: '🔭', label: 'Telescope' }], correct: 0 },
        { word: 'Broadband', options: [{ emoji: '📱', label: 'Subscriber' }, { emoji: '🌐', label: 'Broadband' }, { emoji: '🔒', label: 'Encryption' }, { emoji: '🔗', label: 'Connectivity' }], correct: 1 },
    ],
};
