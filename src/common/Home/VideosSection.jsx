import { videos } from '@/constants/videos'

export function VideosSection() {
  const getVideoId = (url) => {
    const match = url.match(/[?&]v=([^#\&\?]*)/)
    return match ? match[1] : ''
  }

  return (
    <section className="my-16 md:my-24">
      <div className="mb-8 flex flex-col gap-4 text-white">
        <h2 className="font-bold  text-3xl md:text-4xl lg:text-5xl font-[blowbrush]">
          Videos
        </h2>
        <p className="max-w-2xl text-xl text-gray-300">
          Xem các video nổi bật từ Hipfest.
        </p>
      </div>

      <div className="flex flex-wrap -mx-4">
        {videos.map((video, idx) => (
          <div className="h-auto w-1/2" key={idx}>
            <div className="p-4">
              <div className="h-full flex flex-col justify-between transition">
                <iframe
                  src={`https://www.youtube.com/embed/${getVideoId(video.url)}`}
                  title={video.title}
                  className="w-full aspect-video rounded"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
