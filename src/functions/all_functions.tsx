import Image from "next/image";
import { useState } from "react";

// Header Component
const Header = () => (

  <header className="flex justify-between items-center p-4 bg-white shadow-md w-full">
    <h1 className="font-bold text-lg">CAFÉ UNO</h1>
    <button className="text-xl">☰</button>
  </header>
);

// Image Section Component
const ImageSection = () => (
<Image
src="/images/cafe-uno.png" // Update with the correct image path
alt="Café UNO"
width={800} // Adjust width as needed
height={300} // Adjust height as needed
className="w-full h-auto object-cover"
/>
);

// About Section Component
const AboutSection = () => (

  <section className="p-4 text-center flex flex-col items-center w-full">
    <p className="font-bold">
      Café UNO er en ungdomskafe i hjertet av Hamar sentrum.
    </p>
    <p>UNO har en kaffebar med god kvalitet til snille priser.</p>
  </section>
);

// Opening Hours Component
const OpeningHours = () => (

  <section className="p-4 text-white flex flex-col items-center w-full" style={{ backgroundColor: '#7D290F' }}>
    <h3 className="text-lg font-bold">Åpningstider</h3>
    <p>Tirsdag, Torsdag<br/>Kl 13:00–19:00</p>
    <p>Lørdag<br/>Kl 11:30–17:30</p>
    <p>Stengt<br/>Mandag, Onsdag, Fredag, Søndag</p>
  </section>
);

// Image Carousel Component
const ImageCarousel = () => {
const [currentIndex, setCurrentIndex] = useState(0);

const totalImages = 6; // Update this to the total number of images you have

const nextImage = () => {
setCurrentIndex((prevIndex) => (prevIndex + 2) % totalImages);
};

const prevImage = () => {
setCurrentIndex((prevIndex) => (prevIndex - 2 + totalImages) % totalImages);
};

return (
<section className="relative w-full flex flex-col items-center">
<div className="flex justify-center items-center">
<button onClick={prevImage} className="absolute left-4 transform -translate-y-1/2">❮</button>
<div className="flex">
<Image
src={currentIndex === 0 ? "/images/espresso.png" : currentIndex === 2 ? "/images/svart-kaffe.png" : "/images/americano.png"}
alt="Image"
width={250}
height={300}
className="w-1/2 h-auto object-cover"
/>
<Image
src={currentIndex === 0 ? "/images/latte.png" : currentIndex === 2 ? "/images/machiato.png" : "/images/cortado.png"}
alt="Image"
width={250}
height={300}
className="w-1/2 h-auto object-cover"
/>