import React from "react";

function OpeningHours() {
  return (
    <section
      style={{ backgroundColor: "#7D290F" }} // Debugging: forces background color
      className="py-8 px-4 text-white flex flex-col items-center w-full bg-primary"
    >
      <h3 className="text-xl font-bold mb-6">Åpningstider</h3>
      <p className="mb-6">
        Tirsdag, Torsdag<br />Kl 13:00–19:00
      </p>
      <p className="mb-6">
        Lørdag<br />Kl 11:30–17:30
      </p>
      <p>
        Stengt<br />Mandag, Onsdag, Fredag, Søndag
      </p>
    </section>
  );
}

export default OpeningHours;
