import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
    <div className="text-center mb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-blue-800">Welcome to Farwa&#39;s Travel Adventures</h1>
      <p className="text-xl sm:text-2xl text-gray-600 mb-8">Explore the world through my eyes and experiences</p>
      <Link href="/blog">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
          Explore My Adventures
        </Button>
      </Link>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1">
        <Image
          src="/travel-collage.jpeg"
          alt="Travel Collage"
          width={600}
          height={400}
          className="rounded-lg shadow-2xl w-full h-auto"
        />
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">Discover Breathtaking Destinations</h2>
        <p className="text-gray-600 mb-6">
          Join me on my journey as I explore hidden gems, experience diverse cultures, and create unforgettable memories around the globe. From the bustling streets of Tokyo to the serene beaches of Bali, every adventure is a story waiting to be told.
        </p>
        <Link href="/about">
          <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
            Learn More About Me
          </Button>
        </Link>
      </div>
    </div>
  </section>
  )
}

export default Hero