import { categories } from '@/constants/categories'

export function CategoriesSection() {
  return (
    <section className="my-16 md:my-24">
      <ul className="flex flex-wrap items-center -mx-3">
        {categories.map((item, idx) => (
          <li key={idx} className="flex-1 p-3">
            <div className="w-full h-full">
              <div className="px-3 md:px-6 py-8 md:py-12 w-full h-full cursor-pointer transition">
                <p className="text-center font-[blowbrush] text-6xl md:text-6xl lg:text-8xl text-white text-shadow-[0_0_5px_#3b82f6,0_0_10px_#3b82f6,0_0_15px_#3b82f6,0_0_20px_#3b82f6] transition hover:text-shadow-[0_0_10px_#3b82f6,0_0_20px_#3b82f6,0_0_30px_#3b82f6,0_0_40px_#3b82f6]">
                  {item.label}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
