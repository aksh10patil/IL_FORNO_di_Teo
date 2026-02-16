import Image from "next/image";

export default function LandingPage() {

  // Data for the Menu Section
  const menuItems = [
    { name: "Cosmic Cookie", price: "$4.50", desc: "Dark chocolate chunks with sea salt.", img: "/cookie.png", rotate: "rotate-2" },
    { name: "Nebula Muffin", price: "$5.00", desc: "Blueberry explosion with lemon glaze.", img: "/muffin.png", rotate: "-rotate-1" },
    { name: "Galaxy Glaze", price: "$3.75", desc: "Sugar-free vanilla bean donut.", img: "/donut.png", rotate: "rotate-3" },
    { name: "Meteor Bar", price: "$6.00", desc: "Oat & honey protein power bar.", img: "/bar.png", rotate: "-rotate-2" },
  ];

  return (
    <main className="w-full min-h-screen font-display overflow-x-hidden">

      {/* =========================================
          HERO SECTION (TEAL)
      ========================================= */}
      <section className="relative bg-brand-teal pt-24 pb-32 md:pb-48">

        {/* Main Heading */}
        <div className="container mx-auto px-4 text-center z-10 relative">
          <h1 className="text-6xl md:text-8xl text-brand-purple leading-tight uppercase drop-shadow-sm">
            A New Taste Of <br /> Wellness
          </h1>
        </div>

        {/* --- CENTRAL GRID LAYOUT --- */}
        <div className="container mx-auto px-4 mt-8 md:mt-12 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">

            {/* Left Text */}
            <div className="md:col-span-3 text-center md:text-right">
              <p className="text-brand-purple text-lg md:text-2xl font-sans font-bold uppercase tracking-tight leading-snug transform -rotate-2">
                Healthy snacking has <br /> never been this <br /> delicious.
              </p>
            </div>

            {/* Center Cupcake Composition */}
            <div className="md:col-span-6 relative flex justify-center h-[400px] md:h-[500px]">

              {/* The Cupcake Image */}
              <div className="relative w-64 h-64 md:w-96 md:h-96 z-10 mt-10">
                <Image
                  src="/cupcake.png"
                  alt="Chocolate Caramel Cupcake"
                  fill
                  className="object-contain drop-shadow-2xl scale-110"
                  priority
                />
              </div>

              {/* STICKER 1: SUGAR-FREE */}
              <div className="absolute top-10 left-4 md:left-12 rotate-[-15deg] z-20 hover:scale-110 transition-transform cursor-default">
                <div className="relative">
                  <svg width="140" height="70" viewBox="0 0 200 100" className="fill-brand-yellow drop-shadow-md">
                    <path d="M10,50 Q30,10 90,20 Q180,10 190,50 Q180,90 100,80 Q20,90 10,50 Z" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-brand-pink text-xl md:text-2xl pt-1">SUGAR-FREE</span>
                </div>
              </div>

              {/* STICKER 2: LACTOSE-FREE */}
              <div className="absolute top-8 right-4 md:right-10 rotate-[10deg] z-20 hover:scale-110 transition-transform cursor-default">
                <div className="relative">
                  <svg width="150" height="70" viewBox="0 0 200 100" className="fill-brand-brown drop-shadow-md">
                    <path d="M20,50 Q50,5 150,15 Q190,40 180,70 Q140,95 60,85 Q10,80 20,50 Z" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl pt-1">LACTOSE-FREE</span>
                </div>
              </div>

              {/* STICKER 3: HIGH-PROTEIN */}
              <div className="absolute bottom-20 right-0 md:-right-4 rotate-[-10deg] z-20 hover:scale-110 transition-transform cursor-default">
                <div className="relative">
                  <svg width="160" height="70" viewBox="0 0 200 100" className="fill-brand-pink drop-shadow-md">
                    <path d="M15,40 Q40,10 110,15 Q195,20 185,60 Q160,95 80,85 Q5,80 15,40 Z" />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-brand-yellow text-xl md:text-2xl pt-1">HIGH-PROTEIN</span>
                </div>
              </div>

            </div>

            {/* Right Text */}
            <div className="md:col-span-3 text-center md:text-left">
              <p className="text-brand-purple text-lg md:text-2xl font-sans font-bold uppercase tracking-tight leading-snug transform rotate-2">
                It's also incredibly <br /> satisfying and <br /> fulfilling.
              </p>
            </div>

          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[150px] fill-brand-cream">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.71,96.2,116.39,97.74,171.79,93.45c61.64-4.77,112.55-25.13,149.6-37.01Z"></path>
          </svg>
        </div>
      </section>

      {/* =========================================
          "FROM OUR OVEN" SECTION (CREAM)
      ========================================= */}
      <section id="our-story" className="bg-brand-cream pb-24 text-center relative z-10">
        <div className="container mx-auto px-4">

          <h2 className="text-5xl md:text-7xl text-brand-brown uppercase drop-shadow-sm mb-4">
            From Our Oven To <br /> Your Heart
          </h2>

          <p className="text-brand-brown/80 font-sans text-sm md:text-lg tracking-wide font-semibold max-w-2xl mx-auto mb-12">
            Sharing Our Love for Healthy Baking Across 24 Countries. We use only the finest organic ingredients sourced from local farmers who care.
          </p>

          {/* ADDED: Baking Image Collage */}
          <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[500px]">
            {/* Main Image Frame with Wobbly Border */}
            <div className="absolute inset-0 bg-brand-teal rounded-[3rem] rotate-2 transform hover:rotate-1 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-white rounded-[3rem] -rotate-1 overflow-hidden border-4 border-brand-purple">
              {/* Replace with your baking image */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <Image
                  src="/baking.png" // Put a picture of someone baking here
                  alt="Baker icing a cake"
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
                {/* Fallback Text if no image */}
                <span className="absolute text-brand-purple/20 text-4xl uppercase font-bold">Baking Image Here</span>
              </div>
            </div>
          </div>

          {/* Background Blobs */}
          <div className="absolute top-0 left-1/4 w-64 h-96 bg-yellow-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
          <div className="absolute top-10 right-1/4 w-72 h-80 bg-orange-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
        </div>
      </section>

      {/* =========================================
          "WHY WE STAND OUT" SECTION (PURPLE)
      ========================================= */}
      <section className="bg-brand-purple py-20 relative">
        {/* Decorative Top Curve */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-brand-cream">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.71,96.2,116.39,97.74,171.79,93.45c61.64-4.77,112.55-25.13,149.6-37.01Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 pt-10">
          <h2 className="text-center text-brand-yellow text-5xl md:text-6xl mb-16 uppercase">Why We Stand Out</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-brand-teal p-8 rounded-3xl transform -rotate-1 hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl mb-4 border-2 border-brand-purple">🌱</div>
              <h3 className="text-3xl text-brand-purple mb-2">100% Organic</h3>
              <p className="font-sans text-brand-purple/80 font-semibold">No chemicals, no nonsense. Just pure earth-grown goodness in every single bite.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-brand-pink p-8 rounded-3xl transform rotate-2 hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl mb-4 border-2 border-brand-purple">🌾</div>
              <h3 className="text-3xl text-brand-yellow mb-2">Gluten Free</h3>
              <p className="font-sans text-white font-semibold">Sensitive tummy? We've got you. Our special almond flour blend is gentle and tasty.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-brand-cream p-8 rounded-3xl transform -rotate-1 hover:rotate-0 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl mb-4 border-2 border-brand-purple">💖</div>
              <h3 className="text-3xl text-brand-brown mb-2">Made with Love</h3>
              <p className="font-sans text-brand-brown/80 font-semibold">Hand-mixed in small batches by people who actually care about your snacking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          "MUST TRY" MENU SECTION (CREAM)
      ========================================= */}
      <section id="shop-snacks" className="bg-brand-cream py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-brand-yellow text-brand-purple px-4 py-1 rounded-full font-sans font-bold uppercase tracking-wider text-sm border-2 border-brand-purple">Menu</span>
            <h2 className="text-6xl text-brand-purple mt-4 uppercase">Crowd Favorites</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className={`group bg-white p-4 rounded-3xl border-2 border-brand-brown/10 hover:border-brand-purple transition-all duration-300 transform ${item.rotate} hover:rotate-0 hover:shadow-xl`}>
                <div className="h-48 bg-brand-teal/20 rounded-2xl relative mb-4 overflow-hidden">
                  {/* Replace with item images */}
                  <Image src={item.img} alt={item.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2 right-2 bg-brand-pink text-white font-sans font-bold px-3 py-1 rounded-full text-sm">
                    {item.price}
                  </div>
                </div>
                <h3 className="text-2xl text-brand-brown mb-1">{item.name}</h3>
                <p className="font-sans text-sm text-gray-500 mb-4 h-10 leading-tight">{item.desc}</p>
                <button className="w-full bg-brand-purple text-brand-yellow font-display text-xl py-2 rounded-xl hover:bg-brand-pink transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          TESTIMONIALS (TEAL)
      ========================================= */}
      <section className="bg-brand-teal py-20 rounded-t-[3rem] -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl text-brand-purple text-center uppercase mb-16">Sweet Words</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-none shadow-lg relative">
              <div className="text-brand-yellow text-4xl absolute -top-4 -left-2 rotate-12">❝</div>
              <p className="font-sans text-brand-brown text-lg italic mb-4">
                "I honestly cannot believe these are sugar-free. The cosmic cookie literally changed my life. I ordered 3 boxes!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-pink rounded-full"></div>
                <div className="font-display text-xl text-brand-purple">Sarah J.</div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-tl-3xl rounded-tr-3xl rounded-br-none rounded-bl-3xl shadow-lg relative mt-0 md:mt-8">
              <div className="text-brand-yellow text-4xl absolute -top-4 -right-2 -rotate-12">❝</div>
              <p className="font-sans text-brand-brown text-lg italic mb-4">
                "Finally, a protein snack that doesn't taste like cardboard. The texture is fluffy and moist. 10/10 recommend."
              </p>
              <div className="flex items-center gap-3 justify-end">
                <div className="font-display text-xl text-brand-purple">Mike T.</div>
                <div className="w-10 h-10 bg-brand-purple rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTACT / FOOTER (BROWN)
      ========================================= */}
      <footer id="wholesale" className="bg-brand-brown text-brand-cream pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">

            {/* Contact Text */}
            <div>
              <h2 className="text-5xl md:text-7xl uppercase mb-6 leading-none">
                Craving <br /><span className="text-brand-pink">More?</span>
              </h2>
              <p className="font-sans text-xl opacity-80 mb-8 max-w-md">
                Sign up for our newsletter to get secret recipes, new flavor drops, and a 15% discount code!
              </p>

              {/* Newsletter Form */}
              <div className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Your sweet email..."
                  className="flex-1 bg-brand-cream/10 border-2 border-brand-cream/20 rounded-full px-6 py-3 text-brand-cream placeholder-brand-cream/50 font-sans focus:outline-none focus:border-brand-pink"
                />
                <button className="bg-brand-pink text-brand-brown font-display text-xl px-6 py-3 rounded-full hover:scale-105 transition-transform">
                  Join!
                </button>
              </div>
            </div>

            {/* Links & Socials */}
            <div className="grid grid-cols-2 gap-8 md:text-right">
              <div>
                <h3 className="text-2xl text-brand-teal mb-4">Explore</h3>
                <ul className="font-sans space-y-2 opacity-80">
                  <li><a href="#" className="hover:text-brand-yellow">Our Story</a></li>
                  <li><a href="#" className="hover:text-brand-yellow">Shop All</a></li>
                  <li><a href="#" className="hover:text-brand-yellow">Locations</a></li>
                  <li><a href="#" className="hover:text-brand-yellow">Wholesale</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl text-brand-teal mb-4">Say Hello</h3>
                <ul className="font-sans space-y-2 opacity-80">
                  <li><a href="#" className="hover:text-brand-yellow">Instagram</a></li>
                  <li><a href="#" className="hover:text-brand-yellow">TikTok</a></li>
                  <li><a href="#" className="hover:text-brand-yellow">Facebook</a></li>
                  <li>hello@wellness.bakery</li>
                </ul>
              </div>
            </div>

          </div>

          <div className="border-t border-brand-cream/10 pt-8 text-center font-sans text-sm opacity-40">
            © 2024 IL FORNO di Teo. All rights reserved. Made with sugar-free love.
          </div>
        </div>
      </footer>

    </main>
  );
}