export const categories = [
  {
    id: 'breaking',
    label: 'Breaking',
    value: 'breaking',
    competitive: true,
    formats: [
      {
        label: '1v1',
        value: '1v1',
        rules: {
          vi: '- Thời gian vòng: 30–60s mỗi dancer\n- Loại battle: 1 vs 1 trực tiếp\n- Ban giám khảo: 5 người\n- Tiêu chí đánh giá:\n   * Toprock / Footwork / Power moves / Freezes\n   * Diễn giải theo nhạc và nhịp điệu\n   * Sáng tạo và độ độc đáo\n   * Tương tác với đối thủ\n- Cấm: vũ khí, cử chỉ phản cảm, động tác nguy hiểm\n- Người thắng: điểm tổng cao nhất từ giám khảo\n- Tie-break: vòng phụ hoặc call-out',
          en: '- Round duration: 30–60s per dancer\n- Battle type: direct 1 vs 1\n- Judges: 5-panel scoring\n- Evaluation criteria:\n   * Toprock / Footwork / Power moves / Freezes\n   * Musical interpretation and rhythm\n   * Creativity & originality\n   * Battle interaction with opponent\n- Prohibited: weapons, offensive gestures, dangerous moves\n- Winner: highest total score by judges\n- Tie-break: extra round or call-out',
        },
      },
      {
        label: '2v2',
        value: '2v2',
        rules: {
          vi: '- Thời gian vòng: 30–60s mỗi dancer\n- Loại battle: đội vs đội\n- Số dancer: 2 mỗi đội\n- Ban giám khảo: 5 người\n- Tiêu chí đánh giá:\n   * Đồng bộ & teamwork\n   * Sáng tạo & độc đáo\n   * Nhịp điệu & style tổng thể\n   * Tương tác giữa các đội\n- Cấm: props, cử chỉ phản cảm, động tác nguy hiểm\n- Người thắng: điểm tổng cao nhất\n- Tie-break: vòng phụ hoặc sudden death',
          en: '- Round duration: 30–60s per dancer\n- Battle type: team vs team\n- Crew size: 2 dancers per team\n- Judges: 5-panel scoring\n- Evaluation criteria:\n   * Teamwork & synchronization\n   * Creativity & originality\n   * Style integration & musicality\n   * Interaction between teams\n- Prohibited: props, offensive gestures, dangerous moves\n- Winner: highest total score\n- Tie-break: extra round or sudden death',
        },
      },
      {
        label: 'Crew Battle',
        value: 'crew',
        rules: {
          vi: '- Crew size: 3–8 dancer\n- Thời gian vòng: 60–120s\n- Ban giám khảo: 5 người\n- Tiêu chí đánh giá:\n   * Choreography & formations\n   * Nhịp điệu & musicality\n   * Sáng tạo & độc đáo\n   * Showmanship & tương tác với khán giả\n- Cấm: props nếu không được phép, cử chỉ phản cảm\n- Người thắng: điểm tổng cao nhất\n- Tie-break: vòng phụ hoặc call-out',
          en: '- Crew size: 3–8 dancers\n- Round duration: 60–120s\n- Judges: 5-panel scoring\n- Evaluation criteria:\n   * Choreography & formations\n   * Musicality & rhythm interpretation\n   * Creativity & originality\n   * Showmanship & audience interaction\n- Prohibited: props unless approved, offensive gestures\n- Winner: highest total score\n- Tie-break: extra performance or call-out',
        },
      },
    ],
  },
  {
    id: 'all_style',
    label: 'All-style',
    value: 'all_style',
    competitive: true,
    formats: [
      {
        label: '1v1',
        value: '1v1',
        rules: {
          vi: '- Solo battle kết hợp nhiều style hip-hop\n- Thời gian vòng: 30–60s\n- Ban giám khảo: 5 người\n- Tiêu chí đánh giá:\n   * Đa dạng phong cách\n   * Sáng tạo & độc đáo\n   * Nhịp điệu & diễn giải nhạc\n   * Tương tác với đối thủ\n- Cấm: cử chỉ phản cảm, props\n- Người thắng: điểm tổng cao nhất\n- Tie-break: vòng phụ',
          en: '- Solo battle incorporating multiple hip-hop styles\n- Round duration: 30–60s\n- Judges: 5-panel scoring\n- Evaluation criteria:\n   * Versatility across styles\n   * Creativity & originality\n   * Musicality & rhythm interpretation\n   * Battle interaction with opponent\n- Prohibited: offensive gestures, props\n- Winner: highest total score\n- Tie-break: extra round',
        },
      },
      {
        label: '2v2',
        value: '2v2',
        rules: {
          vi: '- Cặp đôi battle nhiều style\n- Thời gian vòng: 30–60s mỗi dancer\n- Ban giám khảo: 5 người\n- Tiêu chí đánh giá:\n   * Đồng bộ & teamwork\n   * Sáng tạo & độc đáo\n   * Phối hợp nhiều style & musicality\n- Người thắng: điểm tổng cao nhất\n- Tie-break: vòng phụ hoặc sudden death',
          en: '- Pair battle across multiple styles\n- Round duration: 30–60s per dancer\n- Judges: 5-panel scoring\n- Evaluation criteria:\n   * Teamwork & synchronization\n   * Creativity & originality\n   * Style integration & musicality\n- Winner: highest total score\n- Tie-break: extra round or sudden death',
        },
      },
    ],
  },

  {
    id: 'beatbox',
    label: 'Beatbox Battle',
    value: 'beatbox',
    competitive: true,
    formats: [
      {
        label: 'Solo',
        value: 'solo',
        rules: {
          vi: '- Solo performance\n- Thời gian vòng: 60–90s\n- Ban giám khảo: 5 người\n- Tiêu chí đánh giá:\n   * Kỹ thuật & đa dạng âm thanh\n   * Sáng tạo & độc đáo\n   * Nhịp điệu & musicality\n   * Stage presence\n- Cấm: sử dụng thiết bị điện tử\n- Người thắng: điểm tổng cao nhất\n- Tie-break: vòng phụ',
          en: '- Solo performance\n- Round duration: 60–90s\n- Judges: 5-panel scoring\n- Evaluation criteria:\n   * Technical skill & sound variety\n   * Creativity & originality\n   * Rhythm & musicality\n   * Stage presence\n- Prohibited: use of electronic equipment\n- Winner: highest total score\n- Tie-break: extra round',
        },
      },
    ],
  },

  {
    id: 'freestyle_rap',
    label: 'Freestyle Rap / MC Battle',
    value: 'freestyle_rap',
    competitive: true,
    formats: [
      {
        label: 'Solo',
        value: 'solo',
        rules: {
          vi: '- Freestyle 100%, không pre-written lyrics\n- Thời gian vòng: 60–90s\n- Ban giám khảo: 5 người\n- Tiêu chí đánh giá:\n   * Flow & rhythm\n   * Sáng tạo & punchlines\n   * Phản ứng với đối thủ\n   * Stage presence & delivery\n- Cấm: nội dung phản cảm hoặc đạo nhái\n- Người thắng: điểm tổng cao nhất\n- Tie-break: vòng phụ',
          en: '- Freestyle only, no pre-written lyrics\n- Round duration: 60–90s\n- Judges: 5-panel scoring\n- Evaluation criteria:\n   * Flow & rhythm\n   * Creativity & punchlines\n   * Response to opponent\n   * Stage presence & delivery\n- Prohibited: offensive or plagiarized content\n- Winner: highest total score\n- Tie-break: extra round',
        },
      },
    ],
  },
  {
    id: 'graffiti',
    label: 'Graffiti / Live Art',
    value: 'graffiti',
    competitive: false,
    formats: [
      {
        label: 'Solo',
        value: 'solo',
        rules: {
          vi: '- Nghệ sĩ làm việc cá nhân\n- Thời gian: event-defined (1–3 giờ)\n- Tiêu chí đánh giá:\n   * Kỹ thuật & execution\n   * Sáng tạo & độc đáo\n   * Composition & style\n- Cấm: nội dung phản cảm',
          en: '- Artist works individually\n- Time limit: event-defined (1–3 hours)\n- Evaluation criteria:\n   * Technique & execution\n   * Creativity & originality\n   * Composition & style\n- Prohibited: offensive content',
        },
      },
    ],
  },
  {
    id: 'dj',
    label: 'DJ Battle',
    value: 'dj',
    competitive: true,
    formats: [
      {
        label: 'Solo',
        value: 'solo',
        rules: {
          vi: '- Solo DJ performance\n- Thời gian vòng: 3–5 phút\n- Ban giám khảo: 5 người\n- Tiêu chí đánh giá:\n   * Kỹ thuật & scratching\n   * Sáng tạo & độc đáo\n   * Musicality & track selection\n   * Crowd interaction\n- Người thắng: điểm tổng cao nhất\n- Tie-break: extra performance',
          en: '- Solo DJ performance\n- Round duration: 3–5 minutes\n- Judges: 5-panel scoring\n- Evaluation criteria:\n   * Technical skills & scratching\n   * Creativity & originality\n   * Musicality & track selection\n   * Crowd interaction\n- Winner: highest total score\n- Tie-break: extra performance',
        },
      },
    ],
  },
]
