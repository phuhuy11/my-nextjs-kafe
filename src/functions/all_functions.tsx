import React, { useState } from "react";

// Header Component
function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md w-full">
      <h1 className="font-bold text-lg">CAFÉ UNO</h1>
      <button className="text-xl">☰</button>
    </header>
  );
}

// Image Section Component
function ImageSection() {
  return (
    <img
      src="/images/cafe-uno.png"
      alt="Café UNO"
      className="w-full h-auto object-cover"
      width={800}
      height={300}
    />
  );
}

// About Section Component
function AboutSection() {
  return (
    <section className="p-4 text-center flex flex-col items-center w-full">
      <p className="font-bold">
        Café UNO er en ungdomskafe i hjertet av Hamar sentrum.
      </p>
      <p>UNO har en kaffebar med god kvalitet til snille priser.</p>
    </section>
  );
}

// Opening Hours Component
function OpeningHours() {
  return (
    <section className="p-4 text-white flex flex-col items-center w-full" style={{ backgroundColor: "#7D290F" }}>
      <h3 className="text-lg font-bold">Åpningstider</h3>
      <p>
        Tirsdag, Torsdag<br />Kl 13:00–19:00
      </p>
      <p>
        Lørdag<br />Kl 11:30–17:30
      </p>
      <p>
        Stengt<br />Mandag, Onsdag, Fredag, Søndag
      </p>
    </section>
  );
}

// Image Carousel Component
function ImageCarousel() {
  const images = [
    "/images/espresso.png",
    "/images/latte.png",
    "/images/svart-kaffe.png",
    "/images/machiato.png",
    "/images/americano.png",
    "/images/cortado.png"
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative w-full flex flex-col items-center p-4">
      <div className="flex justify-center items-center relative">
        <button onClick={prevImage} className="absolute left-4 text-2xl">❮</button>
        <img
          src={images[currentIndex]}
          alt="Carousel"
          width={250}
          height={300}
          className="w-1/2 h-auto object-cover transition-transform duration-300"
        />
        <button onClick={nextImage} className="absolute right-4 text-2xl">❯</button>
      </div>
    </section>
  );
}

// Main Component (App or Home Page)
function App() {
  return (
    <div>
      <Header />
      <ImageSection />
      <AboutSection />
      <OpeningHours />
      <ImageCarousel />
    </div>
  );
}

export default App;