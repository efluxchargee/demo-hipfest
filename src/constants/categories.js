export const categories = [
  {
    id: 'breaking',
    type: 'dance',
    icon: 'breaking',
    label: {
      vi: 'Breaking (B-boy / B-girl)',
      en: 'Breaking (B-boy / B-girl)',
    },
    overview: {
      vi: 'Hình thức battle cốt lõi của văn hóa hip-hop...',
      en: 'A core hip-hop battle format...',
    },
    key_elements: {
      vi: ['Toprock', 'Footwork', 'Power moves', 'Freezes', 'Transitions'],
      en: ['Toprock', 'Footwork', 'Power moves', 'Freezes', 'Transitions'],
    },
    judging_criteria: {
      vi: ['Kỹ thuật', 'Nhạc tính', 'Độ khó', 'Sáng tạo', 'Chiến thuật battle'],
      en: [
        'Technique',
        'Musicality',
        'Difficulty',
        'Creativity',
        'Battle strategy',
      ],
    },
    formats: ['1v1', '2v2', 'crew'],
  },

  {
    id: 'all_style',
    type: 'dance',
    icon: 'all-style',
    label: {
      vi: 'All-style Dance Battle',
      en: 'All-style Dance Battle',
    },
    overview: {
      vi: 'Battle tự do kết hợp nhiều phong cách street dance.',
      en: 'A freestyle battle combining multiple street dance styles.',
    },
    key_elements: {
      vi: ['Đa dạng phong cách', 'Groove', 'Nhạc tính', 'Character'],
      en: ['Versatility', 'Groove', 'Musicality', 'Character'],
    },
    judging_criteria: {
      vi: ['Độ đa dạng', 'Khả năng bắt nhạc', 'Sáng tạo', 'Tương tác'],
      en: ['Versatility', 'Musicality', 'Creativity', 'Interaction'],
    },
    formats: ['1v1', '2v2'],
  },

  {
    id: 'rap_battle',
    type: 'music',
    icon: 'mic',
    label: {
      vi: 'Rap / Freestyle / MC Battle',
      en: 'Rap / Freestyle / MC Battle',
    },
    overview: {
      vi: 'Battle rap freestyle nơi MC thể hiện kỹ năng ngôn từ.',
      en: 'A freestyle rap battle where MCs showcase lyrical skills.',
    },
    key_elements: {
      vi: ['Flow', 'Punchline', 'Wordplay', 'Delivery'],
      en: ['Flow', 'Punchlines', 'Wordplay', 'Delivery'],
    },
    judging_criteria: {
      vi: ['Nội dung', 'Đối đáp', 'Phong thái', 'Kết nối khán giả'],
      en: ['Content', 'Rebuttals', 'Delivery', 'Crowd connection'],
    },
    formats: ['solo_freestyle', 'mc_battle'],
  },

  {
    id: 'beatbox',
    type: 'music',
    icon: 'beatbox',
    label: {
      vi: 'Beatbox Battle',
      en: 'Beatbox Battle',
    },
    overview: {
      vi: 'Battle sử dụng âm thanh tạo ra từ miệng.',
      en: 'A vocal sound battle.',
    },
    key_elements: {
      vi: ['Kỹ thuật', 'Âm sắc', 'Cấu trúc bài', 'Sáng tạo'],
      en: ['Technicality', 'Sound variety', 'Structure', 'Creativity'],
    },
    judging_criteria: {
      vi: ['Độ sạch', 'Độ khó', 'Bố cục', 'Trình diễn'],
      en: ['Clarity', 'Difficulty', 'Structure', 'Performance'],
    },
    formats: ['solo', 'tag_team', 'loop_station'],
  },

  {
    id: 'dj',
    type: 'music',
    icon: 'dj',
    label: {
      vi: 'DJ Showcase / DJ Battle',
      en: 'DJ Showcase / DJ Battle',
    },
    overview: {
      vi: 'DJ trình diễn hoặc thi đấu kỹ năng mix, scratch.',
      en: 'A DJ showcase or battle.',
    },
    key_elements: {
      vi: ['Scratching', 'Beat juggling', 'Mixing', 'Chọn nhạc'],
      en: ['Scratching', 'Beat juggling', 'Mixing', 'Track selection'],
    },
    judging_criteria: {
      vi: ['Kỹ thuật', 'Sáng tạo', 'Flow set nhạc', 'Tương tác khán giả'],
      en: ['Technique', 'Creativity', 'Set flow', 'Crowd control'],
    },
    formats: ['showcase', 'battle'],
  },

  {
    id: 'graffiti',
    type: 'art',
    icon: 'graffiti',
    label: {
      vi: 'Graffiti / Live Art',
      en: 'Graffiti / Live Art',
    },
    overview: {
      vi: 'Nghệ sĩ street art sáng tác trực tiếp.',
      en: 'Street artists create live artwork.',
    },
    key_elements: {
      vi: ['Letter structure', 'Can control', 'Màu sắc', 'Bố cục'],
      en: ['Letter structure', 'Can control', 'Color usage', 'Composition'],
    },
    judging_criteria: {
      vi: ['Kỹ thuật', 'Thẩm mỹ', 'Phong cách cá nhân', 'Sáng tạo'],
      en: ['Technique', 'Aesthetics', 'Personal style', 'Originality'],
    },
    formats: ['live_painting', 'showcase'],
  },
]
