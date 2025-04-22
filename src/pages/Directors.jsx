import { useEffect, useState } from "react";

const directors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
  },
];


function Directors() {
  return (
    <>
      <header>
        {/* What component should go here? */}
      </header>
      <main>
        {/* Director info here! */}
      </main>
    </>
  );
};

export default Directors;
