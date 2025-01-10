import Hero from '@/components/Hero'
import FeatureAdventure from '@/components/FeatureAdventure'
import Testimonials from '@/components/Testimonials'
import DestiantionGallery from '@/components/DestiantionGallery'
import NewsletterSignp from '@/components/NewsletterSignp'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      {/* Hero Section */}
      <Hero/>
      {/* Featured Adventures Section */}
      <FeatureAdventure/>
      {/* Testimonials Section with Carousel */}
      <Testimonials/>
       {/* Featured Destinations Gallery */}
      <DestiantionGallery/>
      {/* Newsletter Signup */}
      <NewsletterSignp/>
    </div>
  )
}

