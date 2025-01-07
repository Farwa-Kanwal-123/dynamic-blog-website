import { notFound } from 'next/navigation'
import Image from 'next/image'
import CommentSection from '@/components/CommentSection'

const blogPosts = [
  { 
    id: 1, 
    title: "My Adventure in Bali", 
    date: "2023-06-01", 
    image: "/bali-bliss.jpeg",
    content: `Bali, often referred to as the Island of the Gods, was a dream destination that exceeded all my expectations. My two-week journey through this Indonesian paradise was filled with unforgettable experiences, breathtaking landscapes, and encounters with some of the warmest people I've ever met.

    I started my adventure in Ubud, the cultural heart of Bali. The lush, emerald green rice terraces of Tegalalang were a sight to behold. I spent hours wandering through the terraces, marveling at the ingenious irrigation system that's been used for centuries. The early morning light created a magical atmosphere, with mist rising from the paddies and local farmers beginning their day's work.

    One of the highlights of my trip was the sunrise hike up Mount Batur, an active volcano in Bali's northeast. We set off at 2 AM, climbing in the dark with only our headlamps to light the way. The challenging ascent was worth every step when we reached the summit. As the sun rose, it painted the sky in brilliant hues of orange and pink, revealing a stunning panorama of the surrounding landscape and Lake Batur below. The sense of accomplishment mixed with the sheer beauty of the moment is something I'll never forget.

    The beaches of Bali were next on my itinerary. I spent a few days in Nusa Dua, known for its pristine white sand beaches and crystal-clear waters. The contrast between the lively beach clubs and the serene, less crowded stretches of coastline offered a perfect balance. I tried my hand at surfing for the first time, and while I spent more time in the water than on the board, the thrill of catching even a small wave was exhilarating.

    No trip to Bali would be complete without immersing oneself in the local culture. I was fortunate enough to witness a traditional Kecak fire dance at the clifftop Uluwatu Temple. As the sun set over the Indian Ocean, dozens of bare-chested men formed a circle and began chanting "cak" in a hypnotic rhythm. The performance told the story of the Ramayana, and the combination of the setting, the music, and the dance was truly mesmerizing.

    To get a taste of Balinese cuisine, I joined a cooking class in a small village outside Ubud. We started by visiting a local market, where our guide taught us about the various spices and ingredients essential to Balinese cooking. Back at the class, we prepared dishes like Nasi Goreng (fried rice), Satay Lilit (minced fish satay), and Dadar Gulung (coconut pancakes). The flavors were incredible, and I left with recipes that I still use to bring a bit of Bali into my kitchen at home.

    Throughout my journey, I was continually struck by the warmth and hospitality of the Balinese people. Whether it was the staff at my homestay in Ubud, the local guide who showed me hidden waterfalls off the tourist track, or the elderly woman who invited me to participate in a small temple ceremony, everyone I met greeted me with genuine smiles and a willingness to share their culture.

    As my time in Bali came to an end, I found myself already planning my return. This island paradise offered so much more than just beautiful beaches and scenic landscapes. It was a place of spiritual awakening, cultural richness, and natural wonder. Bali had captured my heart, and I knew that the memories of this adventure would stay with me for a lifetime.`
  },
  { 
    id: 2, 
    title: "Exploring the Streets of Tokyo", 
    date: "2023-05-15", 
    image:"/tokyo-streets.jpeg",
    content: `Tokyo, a metropolis where the ultra-modern seamlessly blends with ancient traditions, was a sensory overload in the best possible way. My week-long adventure in Japan's capital was a whirlwind of neon lights, tranquil gardens, technological marvels, and culinary delights that left me utterly captivated.

    My journey began in the heart of the city's pop culture scene - Shibuya. Stepping out of the station and onto the famous Shibuya Crossing was like being thrust into a real-life video game. Thousands of people crossed the intersection from all directions in a perfectly choreographed dance. The energy was palpable, with giant video screens, blaring advertisements, and the constant buzz of the city surrounding me.

    Contrasting the modern frenzy, I found peace in the gardens of the Imperial Palace. Once the site of Edo Castle, the palace grounds are now a beautiful park in the center of Tokyo. I joined a guided tour that took us through the East Gardens, where I admired the traditional Japanese landscape design, complete with carefully pruned trees, tranquil ponds, and ornate bridges. The sight of the ancient stone walls juxtaposed against the backdrop of skyscrapers perfectly encapsulated Tokyo's blend of old and new.

    Speaking of old and new, my visit to Asakusa was a journey back in time. The Senso-ji Temple, Tokyo's oldest Buddhist temple, was a magnificent sight. I approached through the Nakamise Shopping Street, a centuries-old market street leading to the temple. The aroma of freshly grilled sembei (rice crackers) and the sight of traditional crafts and souvenirs transported me to an older Japan. At the temple itself, I was mesmerized by the giant red lantern at the Kaminarimon Gate and the intricate details of the five-story pagoda.

    For a taste of the future, I visited the teamLab Borderless digital art museum in Odaiba. This mind-bending experience blurred the lines between art and technology. I wandered through rooms where flowers bloomed and withered beneath my feet, stood in the center of a whirlwind of butterflies, and saw waterfalls of light cascade around me. It was an immersive, interactive experience that challenged my perceptions and left me in awe of the possibilities when art meets cutting-edge technology.

    Of course, no trip to Tokyo would be complete without indulging in its renowned culinary scene. I started my gastronomic journey at the outer Tsukiji Market (the inner market has moved to Toyosu). Even at 5 AM, the market was bustling with activity. I queued up for what turned out to be the freshest, most delectable sushi I've ever tasted. Each piece was a work of art, the flavors so clean and pure that it redefined my understanding of what sushi could be.

    But Tokyo's food scene is diverse, and I made sure to explore it thoroughly. I slurped ramen at a tiny shop in a back alley of Shinjuku, where the rich, porky tonkotsu broth was a comfort after a long day of sightseeing. I tried okonomiyaki (savory pancakes) at a lively restaurant in Harajuku, cooking it myself on a hot plate built into the table. And I couldn't resist the allure of a high-tech conveyor belt sushi restaurant, where I ordered via touch screen and watched as my selections zoomed to me on a miniature bullet train.

    The efficiency and cleanliness of Tokyo were impressive. The trains ran with clockwork precision, and despite the city's massive population, the streets were immaculately clean. I was touched by the consideration and politeness of the people - from the station attendants who bowed as each train departed to the strangers who helped me navigate when I looked lost.

    As my week in Tokyo came to an end, I realized that I had only scratched the surface of what this incredible city had to offer. The harmonious coexistence of centuries-old traditions and cutting-edge technology, the unparalleled food scene, and the kindness of its people had left an indelible mark on me. Tokyo had shown me a glimpse of the future while honoring its past, and I left with a promise to return and delve even deeper into the wonders of this extraordinary metropolis.`
  },
  { 
    id: 3, 
    title: "A Week in the Amazon Rainforest", 
    date: "2023-04-22", 
    image:  "/amazone-rainforest.jpeg",
    content: `My expedition into the heart of the Amazon rainforest was a transformative journey that opened my eyes to the raw beauty, incredible biodiversity, and pressing importance of this vital ecosystem. For one unforgettable week, I was immersed in a world so vastly different from my own, surrounded by the sights, sounds, and sensations of one of the most biodiverse places on Earth.

    My adventure began with a flight into Manaus, Brazil, followed by a boat ride deep into the rainforest. As we ventured further from civilization, the dense canopy of trees seemed to envelop us, and the cacophony of forest sounds grew louder. I arrived at an eco-lodge, a sustainable haven nestled in the heart of the jungle, which would be my base for the next week.

    Each day in the Amazon brought new wonders and adventures. Our first excursion was an early morning bird-watching trip. As dawn broke, the forest came alive with a symphony of bird calls. Armed with binoculars and guided by our knowledgeable local guide, João, we spotted a myriad of colorful species. The sight of a pair of scarlet macaws, their vibrant red feathers a stark contrast against the green canopy, took my breath away. Toucans with their oversized, colorful bills hopped from branch to branch, while tiny hummingbirds flitted between flowers with incredible speed and precision.

    One of the most memorable experiences was a night walk through the rainforest. As darkness fell, the forest transformed. The daytime chorus of birds gave way to a different set of sounds - the low, throaty calls of frogs, the chirping of crickets, and occasionally, the distant roar of a howler monkey. Our flashlights revealed a world of nocturnal creatures. We spotted several species of tree frogs, their eyes reflecting our light, perched on broad leaves. A Brazilian wandering spider, one of the most venomous in the world, crossed our path, its legs spanning wider than my hand. The highlight was finding a slow-moving sloth, its algae-covered fur providing perfect camouflage in the dim light.

    A canoe trip through the flooded forests was another unforgettable adventure. During the rainy season, the Amazon River and its tributaries overflow, creating a unique ecosystem where we could paddle amongst the treetops. The tranquil waters reflected the lush greenery above, creating a mirror-like effect that was almost disorienting. As we silently glided through this surreal landscape, we were lucky enough to spot a group of pink river dolphins. These unusual creatures, with their pink hue and long snouts, surfaced near our canoe, their curious eyes meeting ours before they gracefully disappeared beneath the dark waters.

    The Amazon's incredible biodiversity wasn't limited to animals. João, our guide, was a wealth of knowledge about the rainforest's flora. He showed us plants used for centuries by indigenous peoples for medicine, food, and crafts. We tasted fruits I'd never heard of before, like the tangy camu camu and the creamy cupuaçu. João demonstrated how to extract water from a vine for drinking, and showed us the rubber trees that once drove the economy of this region.

    One of the most impactful experiences of my trip was visiting a local indigenous community. After a warm welcome, we were invited to learn about their way of life, which has remained largely unchanged for generations. They demonstrated traditional hunting techniques using blow darts, showed us how they make cassava bread, and shared stories of their ancestors and their deep connection to the forest. What struck me most was their commitment to preserving the rainforest - not just for themselves, but for the entire planet. They spoke passionately about the challenges they face from deforestation and climate change, and their efforts to protect their ancestral lands.

    As the week drew to a close, I found myself profoundly changed by my time in the Amazon. The sheer scale of the rainforest, its incredible diversity of life, and the intricate interconnectedness of every plant, animal, and person within this ecosystem left me in awe. I gained a deeper appreciation for the crucial role the Amazon plays in our planet's health - as the 'lungs of the Earth', absorbing carbon dioxide and producing oxygen, and as a treasure trove of biodiversity, much of which is still unknown to science.

    Leaving the Amazon, I carried with me not just memories of an incredible adventure, but a renewed commitment to environmental conservation. The Amazon rainforest is not just a distant, exotic location - it's a vital part of our world's ecosystem, and its preservation is crucial for all of us. My week in the Amazon was more than just a travel experience; it was a wake-up call, a reminder of the beauty and fragility of our natural world, and an inspiration to do my part in protecting it for future generations.`
  },
  { 
    id: 4, 
    title: "Sailing the Greek Islands", 
    date: "2023-07-10", 
    image:  "/greek-island.jpeg",
    content: `Sailing through the Greek Islands was a dream come true, a journey that combined the thrill of adventure with the serenity of the Aegean Sea. For two unforgettable weeks, I island-hopped through the Cyclades, each destination offering its own unique charm and beauty.

    My voyage began in Athens, where I boarded a sleek sailboat that would be my home for the next fortnight. As we set sail from the historic port of Piraeus, the anticipation of the adventure ahead filled me with excitement. Our first stop was the island of Mykonos, famous for its windmills and vibrant nightlife. The narrow, winding streets of Mykonos Town were a labyrinth of white-washed buildings adorned with bright blue doors and cascading bougainvillea. I spent my evenings sipping ouzo in Little Venice, watching the sunset paint the sky in hues of pink and orange.

    From Mykonos, we sailed to the sacred island of Delos, the mythical birthplace of Apollo and Artemis. Walking among the ancient ruins, I felt transported back in time. The famous Terrace of the Lions and the intricate mosaics in the House of Dionysus were testaments to the island's rich history and importance in ancient Greek culture.

    Our next destination was Naxos, the largest of the Cyclades islands. Here, I hiked through lush valleys dotted with olive groves and ancient marble quarries. The highlight was climbing Mount Zas, the highest peak in the Cyclades, where, according to mythology, Zeus spent his youth. The panoramic view from the top was breathtaking, with the Aegean stretching endlessly in every direction.

    Santorini, with its iconic blue-domed churches and dramatic cliffs, was a photographer's paradise. I watched the famous Oia sunset, where crowds gather each evening to witness the sun dip below the horizon in a spectacular display of color. The next day, I toured the ancient ruins of Akrotiri, a Minoan Bronze Age settlement preserved by volcanic ash, often called the "Pompeii of the Aegean."

    The small island of Folegandros was a hidden gem, far from the tourist crowds. Here, I experienced authentic Greek island life, dining on fresh seafood in family-run tavernas and swimming in secluded coves accessible only by boat. The hike up to the Church of Panagia, perched dramatically on a cliff overlooking the Aegean, was a spiritual experience I'll never forget.

    Our final stop before returning to Athens was the island of Milos, known for its otherworldly landscapes and the discovery site of the Venus de Milo statue. The lunar-like terrain of Sarakiniko beach, with its smooth white rocks contrasting against the turquoise sea, was unlike anything I'd ever seen. I spent a day exploring the colorful fishing village of Klima, where traditional boathouses are painted in vibrant hues.

    Throughout the journey, the Aegean Sea was our constant companion. Days were spent swimming in crystal-clear waters, snorkeling among colorful fish, and sunbathing on deck. Nights were for stargazing, the lack of light pollution revealing a sky full of stars that seemed close enough to touch.

    As we sailed back to Athens, I reflected on the incredible diversity of experiences packed into two short weeks. From ancient ruins to pristine beaches, from bustling towns to serene landscapes, the Greek Islands offered a perfect blend of history, culture, and natural beauty. The warmth of the Greek people, the flavors of the Mediterranean cuisine, and the rhythmic lapping of waves against our boat had woven together to create an unforgettable tapestry of memories.

As I disembarked in Athens, I knew that this sailing adventure through the Greek Islands had not just been a vacation, but a journey of discovery - of ancient histories, of natural wonders, and of the enduring spirit of Greece itself. The islands had revealed their secrets to me, one by one, and I left with a deep appreciation for this corner of the world where myth and reality intertwine seamlessly against the backdrop of the timeless Aegean Sea.`
  },
  { 
    id: 5, 
    title: "Safari Adventure in Tanzania", 
    date: "2023-08-05", 
    image: "/safari-adventure.jpeg",
    content: `The moment our small plane touched down on the dusty airstrip in the Serengeti, I knew I was in for an extraordinary adventure. My week-long safari in Tanzania promised close encounters with Africa's most iconic wildlife and breathtaking landscapes that seemed to stretch to infinity.

    Our first stop was the Serengeti National Park, a name that evokes images of vast savannas teeming with wildlife. As we set out on our first game drive, the landscape unfolded before us like a scene from a nature documentary. Herds of wildebeest and zebra grazed peacefully, their numbers so vast they seemed to merge with the horizon. Our guide, Jabari, explained that we had arrived during the Great Migration, one of nature's most spectacular shows.

    On our second day, we witnessed a pride of lions stalking a herd of impalas. The tension in the air was palpable as we watched the lead lioness inch closer to her unsuspecting prey. The sudden burst of speed, the chaos of the scattering herd, and the successful takedown was a raw, powerful reminder of the circle of life playing out before our eyes.

    One of the most magical moments came at dawn on our third day. As the sun peeked over the horizon, painting the sky in pastel hues, we spotted a leopard lounging on a branch of an acacia tree. Its spotted coat gleamed in the early morning light as it surveyed its domain with regal indifference to our presence.

    From the Serengeti, we journeyed to the Ngorongoro Crater, a UNESCO World Heritage site. Descending into the crater was like entering a lost world. This natural enclosure, formed by a collapsed volcano, is home to an incredible concentration of wildlife. Here, we saw rhinos for the first time - a mother and calf grazing peacefully near a watering hole. These endangered creatures, with their prehistoric appearance, were a poignant reminder of the importance of conservation efforts.

    The birdlife in the crater was equally impressive. Flocks of flamingos turned the alkaline lakes pink, while eagles soared overhead, their keen eyes searching for prey. At one point, we watched a group of hyenas scavenging on the remains of a wildebeest, showcasing nature's efficient cleanup crew at work.

    Our safari wasn't just about wildlife viewing; it was also an immersion into the culture of Tanzania. We visited a Maasai village, where we were welcomed with traditional songs and dances. The Maasai, with their vibrant red clothing and intricate beadwork, shared with us their customs and way of life that have remained largely unchanged for centuries. I even tried my hand at the adumu, the famous Maasai jumping dance, much to the amusement of our hosts.

    The accommodations throughout our safari were a perfect blend of comfort and wilderness immersion. From luxury lodges with panoramic views of the Serengeti plains to tented camps that allowed us to fall asleep to the sounds of the African night, each stay was an experience in itself. One unforgettable night was spent in a treehouse-style lodge, where I watched elephants amble by from the privacy of my balcony.

    On our final day, we took a hot air balloon ride over the Serengeti. Floating silently above the landscape at dawn, watching the savanna come to life below us, was a transcendent experience. Herds of animals cast long shadows in the early morning light, and the vastness of the African wilderness stretched out in every direction.

    As I reflect on my safari adventure in Tanzania, I'm struck by the raw beauty and delicate balance of the ecosystems we witnessed. The experience was more than just seeing animals in their natural habitat; it was about understanding the interconnectedness of all life and the vital importance of preserving these wild spaces.

    The memories of golden savannas, majestic wildlife, and warm-hearted people will stay with me forever. Tanzania showed me the untamed heart of Africa, a place where nature still reigns supreme and where every sunrise brings the promise of new wonders. This safari was not just a trip, but a profound reminder of our place in the natural world and the responsibility we have to protect it for future generations.`
  },
  { 
    id: 6, 
    title: "Trekking the Inca Trail", 
    date: "2023-09-20", 
    image:"/mountain-trail.jpeg",
    content: `The ancient Inca Trail to Machu Picchu had long been on my bucket list, and as I stood at the trailhead in the Sacred Valley of Peru, I could hardly contain my excitement. This four-day trek through the Andes would not only test my physical limits but also immerse me in the rich history and stunning landscapes of the Inca civilization.

    Our journey began in the quaint town of Ollantaytambo, where we met our guides and porters. These local Quechua people, descendants of the Incas themselves, would be our lifelines on this challenging trek. Their knowledge of the trail and the ancient sites we'd encounter was invaluable, and their strength and endurance were nothing short of inspirational.

    The first day of hiking was relatively gentle, allowing us to acclimatize to the altitude. We walked alongside the Urubamba River, its rushing waters a constant companion as we ascended through lush cloud forests. Our guide, Carlos, pointed out various medicinal plants used by the Incas and still utilized by local communities today. By late afternoon, we reached our first campsite, where the porters had already set up our tents and prepared a delicious meal. As night fell, the Southern Cross appeared in the sky, a celestial signpost that had guided the Incas centuries ago.

    Day two presented the greatest challenge of our trek - Dead Woman's Pass. At 4,215 meters (13,828 feet) above sea level, it's the highest point of the Inca Trail. The ascent was grueling, with each step at this altitude requiring extra effort. But the sense of accomplishment upon reaching the top was indescribable. The panoramic views of snow-capped peaks and deep valleys were our reward, along with a deeper appreciation for the incredible feat of engineering that the Inca Trail represents.

    The third day was my favorite, filled with diverse landscapes and fascinating Inca ruins. We passed through cloud forests dripping with orchids and home to colorful birds like the cock-of-the-rock. The trail led us to several impressive Inca sites, including Runkurakay, a circular ruin thought to be a watchtower, and Sayacmarca, an intricate complex perched on a steep ridge. Carlos's explanations brought these ancient stones to life, painting a vivid picture of Inca life and beliefs.

    As we hiked, I marveled at the ingenuity of the Inca stone masons. The trail itself is a masterpiece, with much of the original stonework still intact after centuries. Steps cut into the living rock, tunnels carved through the mountains, and bridges spanning dizzying gorges all spoke to the advanced engineering skills of this ancient civilization.

    Our final day began long before dawn. We woke at 3:30 AM to reach the Sun Gate (Inti Punku) in time for sunrise. As the first rays of light crept over the mountains, Machu Picchu was gradually revealed below us, the lost city of the Incas emerging from the morning mist. The sight was breathtaking, made all the more special by the knowledge that we had walked the same path as the Incas to reach this sacred place.

    Descending into Machu Picchu, we spent the day exploring the ancient city. The precision of the stonework, the mysterious purpose of structures like the Intihuatana stone, and the sheer improbability of this city's location all contributed to a sense of awe. Standing in the main plaza, surrounded by the peaks of Huayna Picchu and Machu Picchu Mountain, I felt a profound connection to the Inca people who had lived and worshipped here centuries ago.

    As the day drew to a close and we prepared to descend to the modern town of Aguas Calientes, I reflected on the journey. The Inca Trail had been more than just a trek; it was a pilgrimage through history, a test of physical and mental endurance, and a humbling reminder of the incredible achievements of ancient civilizations.

    The aching muscles and blistered feet were a small price to pay for the memories created on this adventure. From the camaraderie formed with my fellow trekkers, to the insights gained from our knowledgeable guides, to the indescribable feeling of watching the sunrise over Machu Picchu, every moment of the journey was precious.

    As I boarded the train back to Cusco, I knew that the Inca Trail had changed me. It had shown me the power of human perseverance, the beauty of the Andean landscapes, and the enduring legacy of one of history's most fascinating civilizations. The trail may have ended, but the spirit of the Inca adventure would stay with me forever.`
  },
  { 
    id: 7, 
    title: "Northern Lights in Iceland", 
    date: "2023-10-15", 
    image:  "/nothren-lights.webp",
    content: `The land of fire and ice had always called to me, but it was the promise of the aurora borealis that finally drew me to Iceland. As our plane descended into Keflavík International Airport, the rugged, otherworldly landscape below hinted at the adventures to come.

    My journey began in Reykjavík, Iceland's capital and largest city. Despite its small size, Reykjavík pulsed with energy and creativity. I spent my first day exploring the city, from the iconic Hallgrímskirkja church with its striking modernist design to the vibrant street art that adorned many buildings. The Harpa Concert Hall, with its honeycomb glass facade reflecting the changing light, was a particular highlight.

    But I hadn't come to Iceland just for its urban charms. The next morning, I set out on the famous Golden Circle route. Our first stop was Þingvellir National Park, a UNESCO World Heritage site where the North American and Eurasian tectonic plates are slowly drifting apart. Walking through the rift valley, I marveled at the visible evidence of the earth's geological processes.

    Next came the Geysir geothermal area, where we watched the Strokkur geyser erupt every few minutes, sending a plume of boiling water up to 30 meters into the air. The smell of sulphur and the steam rising from the ground created an almost primordial atmosphere.

    The final stop on the Golden Circle was Gullfoss, or "Golden Falls." The sheer power of this two-tiered waterfall was awe-inspiring. As I stood at the edge, feeling the spray on my face and watching rainbows form in the mist, I understood why Icelanders have such a deep connection to their natural environment.

    The following days were filled with more natural wonders. I hiked on the Sólheimajökull glacier, carefully navigating the blue-tinged ice with crampons and an ice axe. The alien landscape of the glacier, with its deep crevasses and ice formations, was unlike anything I'd ever experienced.

    At the black sand beach of Reynisfjara, I watched powerful waves crash against the basalt sea stacks known as Reynisdrangar. Local legend says these are trolls turned to stone by the rising sun. Given the mystical atmosphere of the place, it wasn't hard to believe.

    One of the most memorable experiences was snorkeling in the Silfra fissure in Þingvellir National Park. Despite the near-freezing water temperatures, the opportunity to float between two continental plates in water of unparalleled clarity was too good to pass up. The vibrant blues and greens of the underwater landscape were mesmerizing.

    But of course, the main event of my trip was yet to come. For several nights, we ventured out into the countryside, away from any light pollution, in hopes of seeing the Northern Lights. The first few nights were disappointing - cloudy skies obscured any chance of seeing the aurora.

    But on our fourth night, luck was on our side. As we stood in a remote field, cameras at the ready, a faint green glow appeared on the horizon. Slowly, it grew stronger, swirling and dancing across the sky in shades of green, pink, and purple. The aurora borealis, nature's most spectacular light show, was unfolding before our eyes.

    For hours, we stood in awe, watching the lights shift and change. Sometimes they were gentle waves of green, other times they exploded across the sky in vibrant curtains of color. It was a humbling reminder of the beauty and mystery of our natural world.

    As my time in Iceland came to an end, I reflected on all I had experienced. This small island nation had shown me the raw power of nature, from erupting geysers and calving glaciers to the ethereal dance of the Northern Lights. I had walked between continents, bathed in geothermal hot springs, and witnessed landscapes that seemed to belong to another world entirely.

    But beyond the natural wonders, it was the spirit of Iceland and its people that left a lasting impression. Their respect for the environment, their resilience in the face of harsh conditions, and their rich cultural traditions were inspiring.

    As I boarded my flight home, I knew that Iceland had changed me. It had rekindled my sense of wonder at the natural world and reminded me of the importance of preserving these wild places. The memories of glaciers, waterfalls, and those magical Northern Lights would stay with me forever, a testament to the raw beauty of this land of fire and ice.`
  },
  { 
    id: 8, 
    title: "Cultural Immersion in Marrakech", 
    date: "2023-11-01", 
    image: "/culture.jpeg",
    content: `The moment I stepped out of the airport in Marrakech, my senses were overwhelmed. The warm, dry air carried the scents of spices and grilled meats, while the cacophony of car horns, calls to prayer, and animated conversations in Arabic and Berber created a symphony of urban life. I knew then that my week in Morocco's Red City would be an unforgettable cultural immersion.

    My riad, a traditional Moroccan house with an interior garden, was tucked away in the heart of the medina, the old walled city. After winding through narrow alleys barely wide enough for two people to pass, I entered a haven of tranquility. The intricate tilework, carved wooden doors, and the gentle sound of water from the central fountain immediately transported me to another time.

    The next morning, I dove headfirst into the bustling souks. These labyrinthine markets are the lifeblood of Marrakech, where you can find everything from handwoven carpets and leather goods to exotic spices and traditional medicines. The art of bargaining is a way of life here, and I quickly learned to engage in the friendly back-and-forth with shopkeepers, often over glasses of sweet mint tea.

    One of the most memorable experiences was a cooking class where I learned to make traditional Moroccan dishes. We started with a trip to the market to buy ingredients, learning about the various spices that give Moroccan cuisine its distinctive flavors. Back in the kitchen, under the patient guidance of our chef, we prepared a fragrant tagine, fluffy couscous, and crispy briouats (savory pastries). The highlight was learning to make authentic Moroccan mint tea, poured from a great height to create a frothy top.

    No visit to Marrakech would be complete without experiencing Djemaa el-Fna, the main square that comes alive at night with food stalls, musicians, storytellers, and snake charmers. As darkness fell, the square transformed into a carnival of sights, sounds, and smells. I sampled local delicacies like snail soup and sheep's head (not for the faint-hearted!), watched in awe as acrobats performed death-defying stunts, and listened to the hypnotic rhythms of Gnawa musicians.

    To escape the hustle and bustle of the medina, I spent a day exploring the Jardin Majorelle. These botanical gardens, once owned by Yves Saint Laurent, are a peaceful oasis of exotic plants, vibrant blue buildings, and trickling fountains. The adjacent Yves Saint Laurent Museum provided fascinating insights into the designer's life and his love affair with Marrakech.

    One of the most spiritually enriching experiences was visiting the Ben Youssef Madrasa, a 14th-century Islamic college. The stunning architecture, with its intricate stucco work, cedar wood carvings, and zellij tilework, was a testament to the rich artistic heritage of Morocco. As I wandered through the quiet courtyards and chambers, I felt a deep sense of reverence for the scholars who once studied here.

To gain a deeper understanding of Moroccan culture, I arranged a visit to a local hammam, or public bathhouse. This centuries-old tradition of communal bathing is an integral part of Moroccan life. The process of steaming, scrubbing, and massaging was both invigorating and relaxing, leaving me with a newfound appreciation for this aspect of Moroccan self-care.

Venturing beyond the city walls, I took a day trip to the Atlas Mountains. The dramatic change in landscape from the arid city to the lush, green foothills was striking. In a small Berber village, I was welcomed into a family's home for lunch. Sitting on colorful rugs, we shared a meal of tender lamb tagine and freshly baked bread, while our host explained the traditional Berber way of life.

On my final evening in Marrakech, I watched the sunset from a rooftop terrace. As the call to prayer echoed across the city and the sky turned a brilliant orange, I reflected on my week of cultural immersion. Marrakech had challenged my senses, expanded my culinary horizons, and offered a glimpse into a way of life both ancient and vibrant.

The city's blend of tradition and modernity, its warm hospitality, and its rich tapestry of sights, sounds, and flavors had left an indelible mark on me. As I prepared to leave, I knew that the spirit of Marrakech - the smell of spices, the sound of the muezzin's call, the feel of intricate tilework under my fingers - would stay with me long after I returned home. This cultural odyssey had not just been a trip, but a transformative experience that broadened my understanding of Morocco and its people.`
  },
  { 
    id: 9, 
    title: "Diving the Great Barrier Reef", 
    date: "2023-12-10", 
    image: "/greek-reef.jpeg",
    content: `The anticipation built as our boat cut through the crystal-clear waters of the Coral Sea. I was on my way to fulfill a lifelong dream: diving in the Great Barrier Reef, the world's largest coral reef system and one of the seven natural wonders of the world. As a certified diver, I had explored reefs before, but I knew this experience would be on an entirely different scale.

    Our journey began in Cairns, a tropical city in Queensland, Australia, that serves as the gateway to the Great Barrier Reef. The night before our first dive, we attended a briefing where marine biologists explained the delicate ecosystem we were about to enter and the importance of responsible diving practices. Their passion for the reef was contagious, and I went to bed that night with visions of colorful corals and exotic fish swimming through my dreams.

    Early the next morning, we boarded our dive boat and set out for the Outer Reef. As we cruised across the Coral Sea, the anticipation among the divers was palpable. After about two hours, the captain announced that we had reached our first dive site: a place called "Wonderwall" due to its impressive coral formations.

    As I took that giant stride into the water, the cool embrace of the ocean welcomed me. Descending into the blue, the first thing that struck me was the clarity of the water. Visibility seemed endless. Then, as we reached about 10 meters depth, the reef came into view, and I was speechless (thankfully, my regulator was firmly in place!).

    The sheer diversity of life was overwhelming. Massive brain corals sat alongside delicate fan corals, their polyps swaying gently in the current. Schools of vibrant parrotfish munched on algae, their beaks making an audible crunching sound. A curious sea turtle glided by, eyeing us with what seemed like ancient wisdom.

    Our dive guide pointed out a clownfish darting in and out of its anemone home, reminding me of a certain animated film, but seeing it in real life was far more magical. In a small cave, we spotted a moray eel, its mouth opening and closing as it watched us warily.

    As we moved along the reef wall, a large shadow passed overhead. Looking up, we saw a manta ray, its wingspan easily 3 meters across, gracefully gliding through the water. It was a moment of pure awe, a reminder of the majesty of these marine creatures and the vastness of their ocean home.

    Over the next few days, we explored different dive sites across the Great Barrier Reef, each with its own unique characteristics. At a site called the "Cod Hole," we encountered massive potato cod, some over a meter long, that were so accustomed to divers they would swim right up to us, curious about these bubble-blowing visitors.

    One of the most memorable dives was a night dive at a site called "Gotham City." As darkness fell, we entered the water equipped with underwater torches. The reef at night was a completely different world. Bioluminescent plankton sparkled like underwater fireflies when we waved our hands through the water. Nocturnal creatures emerged from their daytime hiding spots - crayfish waved their long antennae, lionfish hovered motionless, their venomous spines fully extended.

    Between dives, we had opportunities to learn more about the reef ecosystem and the challenges it faces. Climate change, leading to rising sea temperatures and ocean acidification, poses a significant threat to the delicate balance of the reef. Witnessing the beauty and fragility of this ecosystem firsthand made these issues feel much more urgent and personal.

    On our final day, we visited a research station where scientists are working on coral restoration projects. We learned about initiatives to grow more resilient corals and efforts to reduce crown-of-thorns starfish populations, which can devastate large areas of the reef. It was heartening to see the dedication of these researchers and to learn about ways that everyday people can contribute to reef conservation efforts.

    As we made our last ascent and the boat came into view, I felt a mix of emotions. There was elation from the incredible experiences I'd had and the underwater wonders I'd witnessed. But there was also a tinge of sadness, knowing that I was leaving this magical underwater world behind.

    Back on dry land, sorting through my underwater photos and reliving the memories, I realized that my dive trip to the Great Barrier Reef had been more than just an adventure. It had been an education, a humbling encounter with one of nature's greatest treasures, and a call to action. The Great Barrier Reef, in all its colorful, teeming, fragile beauty, is a reminder of the incredible diversity of life on our planet and our responsibility to protect it.

    As I packed my bags to return home, I knew that the Great Barrier Reef had left an indelible mark on me. The vivid colors, the graceful marine life, and the intricate ecosystems would forever be etched in my memory. But more than that, I left with a renewed commitment to ocean conservation and a deep appreciation for the underwater world that covers so much of our blue planet. The Great Barrier Reef may be a wonder of the natural world, but its future depends on the choices and actions of all of us who are privileged enough to witness its beauty.`
  }
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">{post.title}</h1>
      <p className="text-gray-600 mb-6 sm:mb-8">{post.date}</p>
      <Image 
        src={post.image}
        alt={post.title}
        width={2000}
        height={2000}
        className="rounded-lg shadow-lg mb-6 sm:mb-8 w-full h-[500px] object-fit"
      />
      <div className="prose max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-800">{paragraph}</p>
        ))}
      </div>

      <CommentSection/>
    </div>
  )
}

