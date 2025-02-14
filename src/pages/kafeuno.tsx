import { useState } from "react";
import { Menu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const kafeuno: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Navbar */}
      <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
        <h1 className="text-lg font-bold">CAFÉ UNO</h1>
        <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={24} />
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-48 bg-cover bg-center" style={{ backgroundImage: "url('/cafe-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
          <h2 className="text-2xl font-bold">Café UNO</h2>
          <div className="flex gap-3 mt-2">
            <FaInstagram size={24} />
            <FaFacebook size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="p-4">
        <p className="text-gray-700">
          Café UNO er en ungdomskafé i hjertet av Hamar sentrum. UNO har en kafébar
          med god kvalitet til snille priser.
        </p>
      </section>

      {/* Opening Hours */}
      <section className="p-4 bg-gray-100">
        <h3 className="text-lg font-semibold">Åpningstider</h3>
        <p className="text-gray-700">Tirsdag, Torsdag kl 13:00 - 19:00</p>
        <p className="text-gray-700">Lørdag kl 11:30 - 17:30</p>
        <p className="text-gray-700">Stengt Mandag, Onsdag, Fredag, Søndag</p>
      </section>

      {/* Gallery/Grid */}
      <section className="p-4 grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <Card key={i}>
            <CardContent className="h-20 flex items-center justify-center bg-gray-200">
              <span className="text-sm">kafe {i + 1}</span>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default kafeuno;
