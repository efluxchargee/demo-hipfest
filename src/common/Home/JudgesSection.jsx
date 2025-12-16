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
              <div
                className="bg-red-800/20 bg-[radial-gradient(circle_at_center,rgba(248, 0, 0, 0.1)_1px,transparent_1px)] bg-[length:20px_20px] backdrop-blur-sm overflow-hidden rounded-lg h-full flex flex-col justify-between transition hover:border-red-500 hover:shadow-[0_0_10px_#ff0000cc,0_0_25px_#ff0000cc,0_0_50px_#ff0000cc] cursor-pointer relative"
                style={{
                  border: '2px solid',
                  borderImage:
                    'repeating-linear-gradient(45deg, #ff0000cc, rgba(255, 0, 0, 0.8) 5px, transparent 5px, transparent 10px) 1',
                }}
              >
                <svg
                  className="absolute top-1 left-1 w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12 L4 8 L8 16 L12 8 L16 16 L20 8 L24 12"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                  />
                </svg>
                <svg
                  className="absolute bottom-1 right-1 w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12 L4 16 L8 8 L12 16 L16 8 L20 16 L24 12"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1"
                  />
                </svg>
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
