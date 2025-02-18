import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const images = [
    { src: "/images/cafe-hero.png", alt: "Cafe UNO" },
    { src: "/images/espresso.png", alt: "Espresso" },
    { src: "/images/latte.png", alt: "Latte" },
    { src: "/images/black-coffee.png", alt: "Svart kaffe" },
    { src: "/images/macchiato.png", alt: "Macchiato" },
    { src: "/images/americano.png", alt: "Americano" },
    { src: "/images/cortado.png", alt: "Cortado" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="bg-white text-black w-full min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md w-full">
        <h1 className="font-bold text-lg">CAFÉ UNO</h1>
        <button className="text-xl">☰</button>
      </header>

      {/* Image Below Header */}
      <Image 
        src="/images/cafe uno.png" // Update with the correct image path
        alt="Café UNO"
        width={800} // Adjust width as needed
        height={300} // Adjust height as needed
        className="w-full h-auto object-cover"
      />

      {/* Menu Section */}
      <section className="p-4 flex flex-wrap justify-center w-full">
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {/* Removed individual image displays */}
        </div>
      </section>

      {/* About Section */}
      <section className="p-4 text-center flex flex-col items-center w-full">
        <p className="font-bold">
          Café UNO er en ungdomskafe i hjertet av Hamar sentrum.
        </p>
        <p>UNO har en kaffebar med god kvalitet til snille priser.</p>
      </section>

      {/* Opening Hours */}
      <section className="p-4 text-white flex flex-col items-center w-full" style={{ backgroundColor: '#7D290F' }}>
        <h3 className="text-lg font-bold">Åpningstider</h3>
        <p>Tirsdag, Torsdag<br/>Kl 13:00–19:00</p>
        <p>Lørdag<br/>Kl 11:30–17:30</p>
        <p>Stengt<br/>Mandag, Onsdag, Fredag, Søndag</p>
      </section>

      {/* Image Carousel */}
      <section className="relative w-full flex flex-col items-center">
        <button onClick={prevImage} className="absolute left-4">❮</button>
        <Image 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          width={500} 
          height={300} 
          className="w-full h-48 object-cover" 
        />
        <button onClick={nextImage} className="absolute right-4">❯</button>
        <h2 className="absolute top-4 left-4 text-white text-2xl font-bold">{images[currentIndex].alt}</h2>
      </section>
    </div>
  );
}
