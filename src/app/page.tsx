// import Image from 'next/image'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
//       <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
//         <div className="text-center mb-8 sm:mb-12 md:mb-16">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-800">Welcome to Farwa's Travel Adventures</h1>
//           <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">Explore the world through my eyes and experiences</p>
//           <Link href="/blog">
//             <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full text-base sm:text-lg transition duration-300 ease-in-out transform hover:scale-105">
//               Explore My Adventures
//             </Button>
//           </Link>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//           <div className="order-2 md:order-1">
//             <Image 
//               src="/travel-collage.jpeg" 
//               alt="Travel Collage" 
//               width={600} 
//               height={400} 
//               className="rounded-lg shadow-2xl w-full h-auto"
//             />
//           </div>
//           <div className="order-1 md:order-2">
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-800">Discover Breathtaking Destinations</h2>
//             <p className="text-gray-600 mb-6">
//               Join me on my journey as I explore hidden gems, experience diverse cultures, and create unforgettable memories around the globe. From the bustling streets of Tokyo to the serene beaches of Bali, every adventure is a story waiting to be told.
//             </p>
//             <Link href="/about">
//               <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
//                 Learn More About Me
//               </Button>
//             </Link>
//           </div>
//         </div>

//         <div className="mt-12 sm:mt-16 md:mt-20">
//           <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center text-blue-800">Featured Adventures</h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {[
//               { title: "Bali Bliss", description: "Exploring the Island of Gods", img:"/bali-bliss.jpeg" },
//               { title: "Tokyo Nights", description: "Neon lights and sushi delights", img:"/tokyo-night.jpeg" },
//               { title: "Amazon Expedition", description: "Into the heart of the rainforest", img:"/amazone-apedation.jpeg" }
//             ].map((adventure, index) => (
//               <Card key={index} className="shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
//                 <CardHeader>
//                   <CardTitle className="text-xl sm:text-2xl">{adventure.title}</CardTitle>
//                   <CardDescription>{adventure.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <Image 
//                     src={adventure.img} 
//                     alt={adventure.title} 
//                     width={300} 
//                     height={200} 
//                     className="rounded-md w-[300px] h-[200px]"
//                   />
//                 </CardContent>
//                 <CardFooter>
//                   <Link href="/blog">
//                     <Button variant="ghost" className="bg-blue-600 hover:bg-blue-800 text-white hover:text-white">Read More</Button>
//                   </Link>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {
  const testimonials = [
    { name: "Sarah L.", quote: "Farwa's travel stories inspire me to explore the world. Her writing makes me feel like I'm right there with her!" },
    { name: "Mike T.", quote: "The photography on this blog is stunning. Each post is a visual feast that transports me to far-off lands." },
    { name: "Elena R.", quote: "I love the detailed cultural insights in each post. It's more than just travel - it's a window into different ways of life." },
    { name: "John D.", quote: "Farwa's tips have saved me time and money on my own travels. This blog is a must-read for any aspiring globetrotter!" },
    { name: "Aisha K.", quote: "The way Farwa describes local cuisines makes my mouth water. I've tried recreating some dishes she's mentioned!" }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-blue-800">Welcome to Farwa&339;s Travel Adventures</h1>
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

      {/* Featured Adventures Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-blue-800">Featured Adventures</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Bali Bliss", description: "Exploring the Island of Gods", img: "/bali-bliss.jpeg" },
              { title: "Tokyo Nights", description: "Neon lights and sushi delights", img: "/tokyo-night.jpeg" },
              { title: "Amazon Expedition", description: "Into the heart of the rainforest", img: "/amazone-apedation.jpeg" }
            ].map((adventure, index) => (
              <Card key={index} className="hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
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
                  <Link href="/blog">
                    <Button variant="ghost" className="bg-blue-600 hover:bg-blue-800 text-white hover:text-white">Read More</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Carousel */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-blue-800">What Readers Say</h2>
          <div className="max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <Card className="bg-white h-64 flex flex-col justify-center">
                    <CardContent>
                      <p className="italic text-gray-600 text-lg mb-4">{testimonial.quote}</p>
                      <p className="text-right font-semibold text-blue-800">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

       {/* Featured Destinations Gallery */}
       <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-blue-800">Featured Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { city: "Paris", image: "/pic1.jpg" },
              { city: "New York", image: "/pic2.jpg" },
              { city: "Tokyo", image: "/pic3.jpg" },
              { city: "Bali", image: "/pic4.jpg" },
              { city: "Rome", image: "/pic5.jpg" },
              { city: "Sydney", image: "/pic6.jpg" },
              { city: "Marrakech", image: "/pic7.jpeg" },
              { city: "Rio de Janeiro", image: "/pic8.jpg" }
            ].map(({ city, image }, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src={image}
                  alt={`${city} cityscape`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center p-4">
                  <h3 className="text-white text-xl font-semibold">{city}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Newsletter Signup */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Stay Updated on My Adventures</h2>
          <p className="mb-8">Sign up for my newsletter and never miss a story!</p>
          <form className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-white text-black"
            />
            <Button type="submit" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-100">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}

