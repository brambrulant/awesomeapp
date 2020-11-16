// src/components/Pokemon.js
import React from "react";
export default function Pokemon(pokemon) {
  return (
    <div>
      <div className="Pokemon">
        <h2>{pokemon.name}</h2>
        <p>Weight: {pokemon.weight} kg</p>
        <p>Awesome: {pokemon.awesome ? "YES!" : "nope, not really"}</p>
        <p>Terrifying: {pokemon.terrifying ? "Very" : "nah, lovable"}</p>
        <p>Abilities ({pokemon.abilities.length}):</p>
        <p>
          {pokemon.abilities.map((ability) => {
            return <div>{ability}</div>;
          })}
        </p>
      </div>
    </div>
  );
}
