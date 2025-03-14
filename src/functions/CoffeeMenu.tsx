import React from "react";

interface CoffeeItemProps {
  name: string;
  description: string;
  image: string;
  imagePosition?: "right" | "left";
}

function CoffeeItem({ name, description, image, imagePosition = "right" }: CoffeeItemProps) {
  // Set order for text and image
  const contentOrder = imagePosition === "right" ? "order-first" : "order-last";
  const imageOrder = imagePosition === "right" ? "order-last" : "order-first";

  return (
    <div className="flex bg-[#2B4326] text-white w-full rounded-sm overflow-hidden items-center">
      {/* Text Section */}
      <div className={`flex flex-col justify-center flex-grow p-2 ${contentOrder}`}>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-xs text-gray-300">{description}</p>
      </div>

      {/* Image Section - Use Same Styling as ImageSection.tsx */}
      <div className={`w-20 h-20 flex items-center justify-center ${imageOrder}`}>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-auto max-w-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function CoffeeMenu() {
  const coffeeItems = [
    { name: "Latte", description: "kaffe det er latte", image: "/images/latte 1.png" },
    { name: "Americano", description: "god bless USA", image: "/images/americano.png" },
    { name: "Svart", description: "kélsvart", image: "/images/svartest kaffe1.png" },
    { name: "Machiato", description: "Rå smakk", image: "/images/machiato.png" }
  ];

  return (
    <section className="bg-[#f6e9cc] px-4 py-2">
      <h2 className="text-2xl font-bold mb-3">kaffe</h2>
      <div className="space-y-3">
        {coffeeItems.map((item, index) => (
          <CoffeeItem 
            key={index}
            name={item.name}
            description={item.description}
            image={item.image}
            imagePosition={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>

      {/* Pastry Section */}
      <div className="mt-3">
        <div className="bg-[#2B4326] text-white p-2 rounded-sm">
          <h3 className="text-lg font-bold">Kanel bolle 30kr</h3>
          <p className="text-xs text-gray-300">med glasur</p>
        </div>
        <div className="mt-1">
          <img 
            src="/images/cinnamon-roll.png" 
            alt="Kanel bolle" 
            className="w-full h-auto max-w-screen"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default CoffeeMenu;
