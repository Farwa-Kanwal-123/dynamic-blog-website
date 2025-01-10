'use client'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Card, CardContent } from '@/components/ui/card'


export default function Testimonials() {
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
  )
}

