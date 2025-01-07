import Image from 'next/image'
import CommentSection from '@/components/CommentSection'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center">About Farwa</h1>
      <div className="grid md:grid-cols-2 gap-8 place-items-center h-screen">
        <div>
          <Image 
            src="/pf.jpg" 
            alt="Farwa" 
            width={400} 
            height={400} 
            className="rounded-full shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Developer by Day, Traveler by Heart</h2>
          <p className="mb-4">
            Hi, I&#39;m Farwa! I&#39;m a passionate developer with a love for exploring new places and cultures. 
            This blog is where I share my adventures, tips, and insights from my travels around the world.
          </p>
          <p className="mb-4">
            When I&#39;m not coding or traveling, you can find me trying out new cuisines, learning languages, 
            or planning my next big adventure.
          </p>
        </div>
      </div>
      <CommentSection/>
    </div>
  )
}

