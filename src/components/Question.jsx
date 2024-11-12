import React from "react";

export default function Question({ question, options, onAnswer }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-pixeloid select-none">{question}</h2>
      <section className="flex flex-wrap items-center justify-center max-w-sm">
        {options.map(function (option, index) {
          return (
            <button
              key={index}
              onClick={function () {
                onAnswer(index);
              }}
              className="max-w-40 min-w-40 max-h-32 min-h-32 border px-4 py-2 mx-2 my-2 rounded-md shadow-md font-pixeloid-mono text-xs font-thin hover:scale-105 hover:bg-neutral-100 transition-all"
            >
              {option.answer}
            </button>
          );
        })}
      </section>
    </div>
  );
}