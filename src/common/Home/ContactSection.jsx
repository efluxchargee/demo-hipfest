export function ContactSection() {
  return (
    <section className="my-16 md:my-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[blowbrush] text-white mb-4">
          Liên hệ với chúng tôi
        </h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-300">
          Có câu hỏi hoặc muốn tham gia Hipfest? Hãy liên hệ với chúng tôi!
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Họ tên
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Nhập họ tên của bạn"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-white text-sm font-medium mb-2">
                Tin nhắn
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Nhập tin nhắn của bạn"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Gửi tin nhắn
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
