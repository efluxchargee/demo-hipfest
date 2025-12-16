import { categories } from '@/constants/categories'

export function CategoriesSection() {
  return (
    <section className="my-16 md:my-24">
      <div className="flex flex-col gap-4 text-white max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[blowbrush]">
          Hạng mục thi đấu
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Khám phá các hạng mục thi đấu tại Hipfest.
        </p>
      </div>

      <ul className="flex flex-wrap items-center -mx-3">
        {categories.map((item, idx) => (
          <li key={idx} className="flex-1 p-3">
            <div className="w-full h-full">
              <div className="px-3 py-4 md:py-8 w-full h-full cursor-pointer transition">
                <p className="text-center font-[blowbrush] text-4xl md:text-6xl text-white text-shadow-[0_0_5px_#3b82f6,0_0_10px_#3b82f6,0_0_15px_#3b82f6,0_0_20px_#3b82f6] transition hover:text-shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6,0_0_30px_#3b82f6,0_0_40px_#3b82f6]">
                  {item.label.vi}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
