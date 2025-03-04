import React from "react";

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

export default OpeningHours; 