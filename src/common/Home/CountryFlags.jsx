import vietnam from '@/assets/flags/1.vietnam.png'
import france from '@/assets/flags/2.France.svg.png'
import india from '@/assets/flags/3.India.svg.png'
import indonesia from '@/assets/flags/4.Indonesia.svg.png'
import japan from '@/assets/flags/5.Japan.svg.png'
import laos from '@/assets/flags/6.Laos.svg.png'
import malaysia from '@/assets/flags/7.Malaysia.svg.png'
import norway from '@/assets/flags/8.Norway.svg.png'
import russia from '@/assets/flags/9.Russia.svg.png'
import singapore from '@/assets/flags/10.Singapore.svg.png'
import korea from '@/assets/flags/11.Korea.svg.png'
import spain from '@/assets/flags/12.Spain.svg.png'
import thailand from '@/assets/flags/12.Thailand.svg.png'
import netherlands from '@/assets/flags/14.Netherlands.svg.png'
import china from '@/assets/flags/15.China.svg.png'
import philippines from '@/assets/flags/16.Philippines.svg.png'
import taiwan from '@/assets/flags/17.Chinese_Taipei_for_Olympic_Games.svg'
import unitedStates from '@/assets/flags/18.United_States.svg.png'

export function CountryFlags() {
  const countries = [
    { code: 'VN', name: 'Vietnam', flag: vietnam.src },
    { code: 'RU', name: 'Russia', flag: russia.src },
    { code: 'US', name: 'United States', flag: unitedStates.src },
    { code: 'KR', name: 'Korea', flag: korea.src },
    { code: 'FR', name: 'France', flag: france.src },
    { code: 'IN', name: 'India', flag: india.src },
    { code: 'ID', name: 'Indonesia', flag: indonesia.src },
    { code: 'JP', name: 'Japan', flag: japan.src },
    { code: 'LA', name: 'Laos', flag: laos.src },
    { code: 'MY', name: 'Malaysia', flag: malaysia.src },
    { code: 'NO', name: 'Norway', flag: norway.src },

    { code: 'SG', name: 'Singapore', flag: singapore.src },

    { code: 'ES', name: 'Spain', flag: spain.src },
    { code: 'TH', name: 'Thailand', flag: thailand.src },
    { code: 'NL', name: 'Netherlands', flag: netherlands.src },
    { code: 'CN', name: 'China', flag: china.src },
    { code: 'PH', name: 'Philippines', flag: philippines.src },
    { code: 'TW', name: 'Chinese Taipei for Olympic Games', flag: taiwan.src },
  ]

  return (
    <section>
      <div className="grid grid-cols-6 md:grid-cols-9 gap-4 w-full">
        {countries.map((country) => (
          <div
            key={country.code}
            className="flex flex-col items-center justify-center gap-2
              bg-white/10 backdrop-blur-sm rounded-xl
              hover:bg-white/20  transition-all duration-300 group"
          >
            <img
              src={country.flag}
              alt={country.name}
              className="w-full aspect-4/3 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
