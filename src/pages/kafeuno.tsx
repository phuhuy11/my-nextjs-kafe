import Image from "next/image";
import { useState } from "react";

/**
 * Home component for the Café UNO page.
 * This component displays the header, about section, opening hours,
 * and an image carousel showcasing various café images.
 */
export default function Home() {
  // State to track the current index of the displayed images
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Total number of images in the carousel
  const totalImages = 6; // Update this to the total number of images you have

  /**
   * Function to navigate to the next image in the carousel.
   * Wraps around to the first image after the last one.
   */
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  /**
   * Function to navigate to the previous image in the carousel.
   * Wraps around to the last image if currently on the first one.
   */
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="bg-white text-black w-full min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md w-full">
        <h1 className="font-bold text-lg">CAFÉ UNO</h1>
        <button className="text-xl">☰</button>
      </header>

      {/* Image Below Header */}
      <Image 
        src="/images/cafe-uno.png" // Update with the correct image path
        alt="Café UNO"
        width={800} // Adjust width as needed
        height={300} // Adjust height as needed
        className="w-full h-auto object-cover"
      />

      {/* About Section */}
      <section className="p-4 text-center flex flex-col items-center w-full">
        <p className="font-bold">
          Café UNO er en ungdomskafe i hjertet av Hamar sentrum.
        </p>
        <p>UNO har en kaffebar med god kvalitet til snille priser.</p>
      </section>

      {/* Opening Hours Section */}
      <section className="p-4 text-white flex flex-col items-center w-full" style={{ backgroundColor: '#7D290F' }}>
        <h3 className="text-lg font-bold">Åpningstider</h3>
        <p>Tirsdag, Torsdag<br/>Kl 13:00–19:00</p>
        <p>Lørdag<br/>Kl 11:30–17:30</p>
        <p>Stengt<br/>Mandag, Onsdag, Fredag, Søndag</p>
      </section>

      {/* Image Carousel Section */}
      <section className="relative w-full flex flex-col items-center">
        <div className="flex justify-center">
          <button onClick={prevImage} className="absolute left-4">❮</button>
          <div className="flex">
            <Image 
              src={currentIndex === 0 ? "/images/cafe-hero.png" : currentIndex === 1 ? "/images/espresso.png" : currentIndex === 2 ? "/images/latte.png" : currentIndex === 3 ? "/images/black-coffee.png" : currentIndex === 4 ? "/images/macchiato.png" : "/images/americano.png"} 
              alt="Image" 
              width={250} 
              height={300} 
              className="w-1/2 h-auto object-cover" 
            />
            <Image 
              src={currentIndex === 0 ? "/images/espresso.png" : currentIndex === 1 ? "/images/latte.png" : currentIndex === 2 ? "/images/black-coffee.png" : currentIndex === 3 ? "/images/macchiato.png" : currentIndex === 4 ? "/images/americano.png" : "/images/cafe-hero.png"} 
              alt="Image" 
              width={250} 
              height={300} 
              className="w-1/2 h-auto object-cover" 
            />
          </div>
          <button onClick={nextImage} className="absolute right-4">❯</button>
        </div>
      </section>
    </div>
  );
}
