import Image from 'next/image'

const DestiantionGallery = () => {
  return (
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
  )
}

export default DestiantionGallery