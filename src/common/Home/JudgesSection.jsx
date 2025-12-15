import { judges } from '@/constants/judges'

export function JudgesSection() {
  return (
    <section className="my-16 md:my-24">
      <div className="mb-8 flex flex-col gap-2 text-white">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl font-[blowbrush]">
          Giám khảo đặc biệt
        </h2>
        <p className="max-w-2xl text-xl text-gray-300">
          Đội ngũ giám khảo chuyên nghiệp cho các sự kiện hip-hop.
        </p>
      </div>

      <div className="flex flex-wrap -mx-4">
        {judges.map((judge, idx) => (
          <div className="h-auto w-full md:w-1/4" key={idx}>
            <div className="h-full p-4">
              <div className="bg-gray-800/80 backdrop-blur-sm overflow-hidden rounded-lg h-full flex flex-col justify-between transition hover:border-blue-500 hover:shadow-[0_0_10px_#3b82f6,0_0_25px_#3b82f6,0_0_50px_#3b82f6] cursor-pointer">
                <img
                  src={judge.image}
                  alt={judge.name}
                  className="w-full rounded-t-lg h-auto"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {judge.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{judge.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
