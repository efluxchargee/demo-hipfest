import { news } from '@/constants/news'

export function NewsSection() {
  return (
    <section className="my-16 md:my-24">
      <div className="mb-8 flex flex-col gap-2 text-white">
        <h2 className="font-bold  text-3xl md:text-4xl lg:text-5xl font-[blowbrush]">
          Tin tức
        </h2>
        <p className="max-w-2xl text-xl text-gray-300">
          Cập nhật những tin tức mới nhất về Hipfest.
        </p>
      </div>

      <div className="flex flex-wrap -mx-4">
        {news.map((item, idx) => (
          <div className="h-auto w-full lg:w-1/2" key={idx}>
            <div className="h-full p-4">
              <div className="bg-gray-800/80 backdrop-blur-sm border-2  rounded-lg h-full flex flex-col justify-between transition hover:border-blue-500 hover:shadow-[0_0_10px_#3b82f6,0_0_25px_#3b82f6,0_0_50px_#3b82f6] cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover rounded mb-4 aspect-video"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{item.content}</p>
                  <p className="text-gray-400 text-xs">{item.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
