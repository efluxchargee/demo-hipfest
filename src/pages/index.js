import { Container } from '@/common/components/Container'
import { CategoriesSection } from '@/common/Home/CategoriesSection'
import { AboutSection } from '../common/Home/AboutSection'
import { ContactSection } from '../common/Home/ContactSection'
import { CountryFlags } from '../common/Home/CountryFlags'
import { EventsSection } from '../common/Home/EventsSection'
import { JudgesSection } from '../common/Home/JudgesSection'
import { NewsSection } from '../common/Home/NewsSection'
import { SponsorSection } from '../common/Home/SponsorSection'
import { VideosSection } from '../common/Home/VideosSection'
import Footer from '../Layouts/Footer'
import Header from '../Layouts/Header'

export default function Home() {
  return (
    <div className={`min-h-screen`}>
      <Header />

      <div className="bg-white/10">
        <div className="md:max-w-7xl md:mx-auto md:px-6">
          <div className="md:py-10 md:pb-0">
            <div className="md:rounded-lg overflow-hidden shadow-md relative">
              <video
                src="/banner.mp4"
                autoPlay
                loop
                muted
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="px-6 md:px-0">
            <AboutSection />
            <CountryFlags />
            <SponsorSection />
          </div>
        </div>
      </div>

      <Container>
        <CategoriesSection />
        <div className="border-t border-gray-700 my-8" />
        <EventsSection />
        <div className="border-t border-gray-700 my-8" />

        <VideosSection />
        <div className="border-t border-gray-700 my-8" />
        <JudgesSection />
        <div className="border-t border-gray-700 my-8" />
        <NewsSection />
        <div className="border-t border-gray-700 my-8" />

        <ContactSection />
      </Container>

      <Footer />
    </div>
  )
}
