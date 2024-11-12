import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Results({ element }) {
  const { name } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center justify-center select-none">
      <h1 className="font-pixeloid text-2xl">Results</h1>
      <p className="font-pixeloid-mono text-sm mt-2">
        <strong>{name}</strong>, you answered all the questions. Here is the Pokémon you are most like:
      </p>
      {element ? (
        <div className="flex flex-col items-center justify-center max-w-64 w-full border rounded-md my-4 px-4 py-2">
          <section className="flex items-center justify-between w-full">
            <h2 className="text-neutral-700 font-pixeloid-mono capitalize text-sm">
              {element.name}
            </h2>
            <h2 className="text-neutral-700 font-pixeloid-mono text-sm">{element.dex}</h2>
          </section>
          <div className="w-4/5 my-2 h-[1px] bg-neutral-300"></div>
          <img className="max-w-32" src={element.image} alt={element.name} />
          <div className="w-4/5 my-2 h-[1px] bg-neutral-300"></div>
          <section className="flex items-center justify-center w-full space-x-2">
            {element.types && element.types.length > 0 ? (
              element.types.map((type, index) => (
                <div key={index} className="border flex items-center justify-center px-2 py-1 rounded">
                  <img className="w-6" src={`icons/types/${type}.png`} alt={type} />
                  <span className="ml-2 capitalize font-pixeloid-mono text-sm">{type}</span>
                </div>
              ))
            ) : (
              <p>No types available.</p>
            )}
          </section>
        </div>
      ) : (
        <p>No data :[. Try again!</p>
      )}
      <a className="flex items-center justify-center border max-w-64 w-full h-8 rounded-md bg-blue-400 text-neutral-100 font-pixeloid font-bold text-sm hover:bg-blue-600 transition-all" href="/">
        <span>Start Over</span>
      </a>
    </div>
  );
}
