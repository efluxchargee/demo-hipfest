import { Container } from '@/common/components/Container'
import { categories } from '@/constants/categories'
import { EventsSection } from '../common/Home/EventsSection'
import { JudgesSection } from '../common/Home/JudgesSection'
import { NewsSection } from '../common/Home/NewsSection'
import { VideosSection } from '../common/Home/VideosSection'
import { AboutSection } from '../common/Home/AboutSection'
import { ContactSection } from '../common/Home/ContactSection'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import { CategoriesSection } from '@/common/Home/CategoriesSection'

export default function Home() {
  return (
    <div className={`min-h-screen`}>
      <Header />
      <div className="bg-white/10">
        <div className=" md:max-w-7xl md:mx-auto md:px-6 ">
          <div className="md:py-10 md:pb-0">
            <div className="rounded-lg overflow-hidden shadow-md">
              <video
                src="/banner.mp4"
                autoPlay
                loop
                muted
                className="w-full h-auto"
              />
            </div>
          </div>
          <AboutSection />
        </div>
      </div>

      <Container>
        <CategoriesSection />
        <EventsSection />
        <VideosSection />
        <JudgesSection />
        <NewsSection />
        <div className="border-t border-gray-700 my-8"></div>
        <ContactSection />
      </Container>
      <Footer />
    </div>
  )
}
