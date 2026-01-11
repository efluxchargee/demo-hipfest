import { sponsors } from '@/constants/sponsors'

export function SponsorSection() {
  return (
    <section className="py-16 md:py-20 ">
      <div className="mt-8 grid grid-cols-4 md:grid-cols-6 gap-4 w-full">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="flex flex-col items-center justify-center gap-2 p-4
              bg-white/10 backdrop-blur-sm rounded-xl border border-white/10
              hover:bg-white/20 hover:scale-105 transition-all duration-300 group aspect-1/1"
          >
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
