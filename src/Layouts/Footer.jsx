import { Container } from '@/common/components/Container'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="mb-12 pb-8 border-b border-gray-700">
          <div className="max-w-md text-left">
            <h4 className="text-xl font-semibold mb-2">Đăng ký nhận tin</h4>
            <p className="text-gray-300 mb-6 text-sm">
              Nhận thông tin mới nhất về Hipfest và các sự kiện hip-hop.
            </p>
            <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded transition"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/logo-footer.png"
              alt="Hipfest Logo"
              className="w-32 h-auto mb-4"
            />

            <p className="text-gray-300 mb-4">
              Sự kiện hip-hop hàng đầu Việt Nam, nơi quy tụ các nghệ sĩ, dancer
              và nhạc sĩ từ khắp nơi trên thế giới.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/hipfest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                YouTube
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-[blowbrush]">
              Liên kết
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Sự kiện
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Giám khảo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                >
                  Tin tức
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-[blowbrush]">
              Liên hệ
            </h4>
            <p className="text-gray-300 mb-2">Email: info@hipfest.vn</p>
            <p className="text-gray-300 mb-2">Điện thoại: +84 123 456 789</p>
            <p className="text-gray-300">Địa chỉ: Unified Stadium, Việt Nam</p>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 font-[blowbrush]">
              Theo dõi chúng tôi
            </h4>
            <div className="bg-gray-700 rounded p-2">
              <iframe
                name="f14d41e2838f6ce0c"
                data-testid="fb:page Facebook Social Plugin"
                title="fb:page Facebook Social Plugin"
                allowFullScreen
                allow="encrypted-media"
                src="https://www.facebook.com/v2.8/plugins/page.php?adapt_container_width=true&app_id=376344886070765&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfdb85305aeb8342b9%26domain%3Dhipfestvn.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fhipfestvn.com%252Ffb2b3948f6c44a276%26relation%3Dparent.parent&container_width=710&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fhipfest%2F&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&tabs=messages&width="
                style={{
                  border: 0,
                  visibility: 'visible',
                  width: '100%',
                  height: '130px',
                }}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Hipfest. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </Container>
    </footer>
  )
}
