export function CategoryCard({ category }) {
  return (
    <div className="w-full h-full group relative flex flex-col justify-start rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-md transition hover:border-sky-500/80 hover:shadow-[0_0_25px_#3b82f6] hover:bg-white/10 cursor-pointer">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white uppercase">
            {category.label}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-wide text-gray-300">
            {category.competitive ? 'Competitive' : 'Showcase / Exhibition'}
          </p>
        </div>

        {category.competitive && (
          <span className="rounded-full bg-sky-600/90 px-3 py-1 text-xs font-semibold text-white">
            Battle
          </span>
        )}
      </div>

      <div className="mt-4 space-y-3 flex-1">
        {category.formats.map((format) => (
          <div
            key={format.value}
            className="rounded-xl bg-black/30 p-3 text-sm text-gray-100 ring-1 ring-white/5"
          >
            <div className="mb-1 flex items-center justify-between">
              <span className="text-white ">{format.label}</span>
            </div>
            <p className="line-clamp-3 whitespace-pre-line text-gray-300">
              {format.rules.vi}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button className="text-gray-300 underline-offset-4 hover:text-white hover:underline cursor-pointer">
          Xem chi tiết luật
        </button>

        <button className="rounded-lg bg-sky-600 px-3 py-1.5 font-semibold text-white transition hover:bg-sky-700 cursor-pointer">
          Đăng ký hạng mục
        </button>
      </div>

      <div
        className="
          pointer-events-none absolute inset-0 rounded-2xl 
          bg-gradient-to-br from-sky-500/20 via-sky-500/10 to-sky-500/20 
          opacity-0 blur-2xl transition 
          group-hover:opacity-60
        "
      />
    </div>
  )
}
