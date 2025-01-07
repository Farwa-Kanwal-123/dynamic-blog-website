import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const blogPosts = [
  { id: 1, title: "My Adventure in Bali", date: "2023-06-01", image: "/bali-bliss.jpeg", excerpt: "Exploring the Island of Gods, from pristine beaches to lush rice terraces..." },
  { id: 2, title: "Exploring the Streets of Tokyo", date: "2023-05-15", image: "/tokyo-streets.jpeg", excerpt: "Navigating the neon-lit streets and tranquil gardens of Japan's bustling capital..." },
  { id: 3, title: "A Week in the Amazon Rainforest", date: "2023-04-22", image: "/amazone-rainforest.jpeg", excerpt: "Venturing deep into the heart of the world's largest rainforest..." },
  { id: 4, title: "Sailing the Greek Islands", date: "2023-07-10", image: "/greek-island.jpeg", excerpt: "Island hopping through the crystal-clear waters of the Aegean Sea..." },
  { id: 5, title: "Safari Adventure in Tanzania", date: "2023-08-05", image: "/safari-adventure.jpeg", excerpt: "Witnessing the great migration in the Serengeti and exploring the Ngorongoro Crater..." },
  { id: 6, title: "Trekking the Inca Trail", date: "2023-09-20", image: "/mountain-trail.jpeg", excerpt: "A challenging hike through the Andes, culminating in the wonder of Machu Picchu..." },
  { id: 7, title: "Northern Lights in Iceland", date: "2023-10-15", image: "/nothren-lights.webp", excerpt: "Chasing the aurora borealis and exploring Iceland's otherworldly landscapes..." },
  { id: 8, title: "Cultural Immersion in Marrakech", date: "2023-11-01", image: "/culture.jpeg", excerpt: "Getting lost in the vibrant souks and riads of Morocco's Red City..." },
  { id: 9, title: "Diving the Great Barrier Reef", date: "2023-12-10", image: "/greek-reef.jpeg", excerpt: "Exploring the underwater wonders of the world's largest coral reef system..." }
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 bg-gradient-to-b from-blue-50 to-green-50">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-blue-800">Travel Adventures</h1>
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-semibold text-blue-700">{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <Image 
                src={post.image}
                alt={post.title}
                width={400}
                height={400}
                className="rounded-md mb-4 w-full h-48 object-fit"
              />
              <p className="text-gray-600 text-sm sm:text-base">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${post.id}`}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300 ease-in-out">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

