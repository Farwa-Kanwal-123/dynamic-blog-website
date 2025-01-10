'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'  
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const FeatureAdventure = () => {
  return (
    <section className="bg-white py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-12 text-center text-blue-800">Featured Adventures</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {id:1, title: "Bali Bliss", description: "Exploring the Island of Gods", img: "/bali-bliss.jpeg" },
          {id:2, title: "Tokyo Nights", description: "Neon lights and sushi delights", img: "/tokyo-night.jpeg" },
          {id:3, title: "Amazon Expedition", description: "Into the heart of the rainforest", img: "/amazone-apedation.jpeg" }
        ].map((adventure) => (
          <Card key={adventure.id} className="hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">{adventure.title}</CardTitle>
              <CardDescription>{adventure.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={adventure.img}
                alt={adventure.title}
                width={300}
                height={200}
                className="rounded-md w-[300px] h-[200px]"
              />
            </CardContent>
            <CardFooter>
              <Link href={`/blog/${adventure.id}`}>
                <Button variant="ghost" className="bg-blue-600 hover:bg-blue-800 text-white hover:text-white">Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default FeatureAdventure