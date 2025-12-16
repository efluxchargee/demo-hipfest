import { sponsors } from '@/constants/sponsors'

export function SponsorSection() {
  return (
    <section className="py-16 md:py-20 ">
      <div className="flex flex-col gap-4 text-white max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[blowbrush]">
          Đối tác chính
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Cảm ơn các đối tác đã đồng hành cùng Hipfest.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center items-center -mx-4">
        {sponsors.map((sponsor, idx) => (
          <div key={idx} className="w-1/2 md:w-1/5 h-auto">
            <div className="p-4 h-full">
              <a
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full"
              >
                <div className="w-full h-full border border-1 border-gray-50/20 rounded-xl p-4 aspect-1/1 shadow-lg backdrop-blur-md transition hover:border-sky-500/80 hover:shadow-[0_0_25px_#3b82f6] hover:bg-white/10 cursor-pointer">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-full object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
