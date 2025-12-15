import { events } from '@/constants/events'

export function EventsSection() {
  return (
    <section className="my-16 md:my-24">
      <div className="mb-8 flex flex-col gap-2 text-white">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl font-[blowbrush]">
          Sự kiện mới nhất
        </h2>
        <p className="max-w-2xl text-xl text-gray-300">
          Tham gia các sự kiện hip-hop đỉnh cao tại Unified Stadium.
        </p>
      </div>

      <div className="flex flex-wrap -mx-4">
        {events.map((event, idx) => (
          <div className="h-auto w-full md:w-1/2 lg:w-1/3" key={idx}>
            <div className="h-full p-4 ">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl h-full flex flex-col justify-between transition hover:border-blue-500 hover:shadow-[0_0_10px_#3b82f6,0_0_25px_#3b82f6,0_0_50px_#3b82f6] cursor-pointer">
                <div className="overflow-hidden rounded-t-xl">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full object-cover rounded mb-4 aspect-video"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.name}
                  </h3>
                  <p className="text-gray-300 mb-1">
                    <strong>Thể loại:</strong> {event.category}
                  </p>
                  <p className="text-gray-300 mb-1">
                    <strong>Ngày bắt đầu:</strong> {event.startDate}
                  </p>
                  <p className="text-gray-300 mb-1">
                    <strong>Ngày kết thúc:</strong> {event.endDate}
                  </p>
                  <p className="text-gray-300 mb-1">
                    <strong>Giờ bắt đầu:</strong> {event.startTime}
                  </p>
                  <p className="text-gray-300 mb-1">
                    <strong>Giờ kết thúc:</strong> {event.endTime}
                  </p>
                  <p className="text-gray-300 mb-4">
                    <strong>Địa điểm:</strong> {event.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
