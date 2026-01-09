export function CountryFlags() {
  const asianCountries = [
    { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵' },
    { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
    { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
    { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
    { code: 'CN', name: 'China', flag: '🇨🇳' },
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
    { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
    { code: 'HK', name: 'Hong Kong', flag: '🇭🇰' },
    { code: 'TW', name: 'Taiwan', flag: '🇹🇼' },
    { code: 'BD', name: 'Bangladesh', flag: '🇧🇩' },
    { code: 'PK', name: 'Pakistan', flag: '🇵🇰' },
    { code: 'LK', name: 'Sri Lanka', flag: '🇱🇰' },
    { code: 'MM', name: 'Myanmar', flag: '🇲🇲' },
    { code: 'KH', name: 'Cambodia', flag: '🇰🇭' },
    { code: 'LA', name: 'Laos', flag: '🇱🇦' },
    { code: 'BN', name: 'Brunei', flag: '🇧🇳' },
    { code: 'TL', name: 'Timor-Leste', flag: '🇹🇱' },
    { code: 'NP', name: 'Nepal', flag: '🇳🇵' },
    { code: 'BT', name: 'Bhutan', flag: '🇧🇹' },
    { code: 'MV', name: 'Maldives', flag: '🇲🇻' },
    { code: 'MN', name: 'Mongolia', flag: '🇲🇳' },
    { code: 'KZ', name: 'Kazakhstan', flag: '🇰🇿' },
    { code: 'KG', name: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: 'TJ', name: 'Tajikistan', flag: '🇹🇯' },
    { code: 'TM', name: 'Turkmenistan', flag: '🇹🇲' },
    { code: 'UZ', name: 'Uzbekistan', flag: '🇺🇿' },
  ]

  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
        {asianCountries.map((country) => (
          <div
            key={country.code}
            className="flex flex-col items-center justify-center gap-2 p-4
              bg-white/10 backdrop-blur-sm rounded-xl border border-white/20
              hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
          >
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
              {country.flag}
            </div>
            <div className="text-sm font-bold text-white text-center">
              {country.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
