import Image from 'next/image'
import { Container } from '@/common/components/Container'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full z-[999]">
      <Container>
        <div className="text-white py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={70} height={70} />
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Sự Kiện', 'Thể loại', 'Giới thiệu', 'Liên hệ'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-medium hover:text-gray-200 relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg border border-white/40 hover:bg-white/20 transition cursor-pointer">
              Đăng nhập
            </button>
            <button className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 transition cursor-pointer">
              Đăng ký
            </button>
          </div>

          <button className="md:hidden">
            <Menu size={28} />
          </button>
        </div>
      </Container>
    </header>
  )
}
