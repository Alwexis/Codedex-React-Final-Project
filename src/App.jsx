import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import Question from "./components/Question";
import Results from "./components/Results";
import { UserProvider } from "./components/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const questions = [
    {
      question: "How do you react to an unexpected challenge?",
      options: [
        { answer: "I get excited and jump right in without thinking.", type: "Charmander" },
        { answer: "I like to plan first; I want to do it right.", type: "Bulbasaur" },
        { answer: "I weigh the pros and cons before acting.", type: "Squirtle" },
        { answer: "I see it as a learning opportunity and feel excited!", type: "Pikachu" }
      ]
    },
    {
      question: "If someone needs help, what do you do?",
      options: [
        { answer: "I offer to help without hesitation.", type: "Pikachu" },
        { answer: "I like to help, but I prefer to plan first.", type: "Bulbasaur" },
        { answer: "I think if I have the energy or time before committing.", type: "Squirtle" },
        { answer: "Helping is the best! I jump in to help without thinking twice.", type: "Charmander" }
      ]
    },
    {
      question: "What place would you like to explore?",
      options: [
        { answer: "A rocky mountain filled with challenges.", type: "Charmander" },
        { answer: "A mysterious forest with many secrets.", type: "Bulbasaur" },
        { answer: "A cool, calm cave by the water.", type: "Squirtle" },
        { answer: "An open field where I can run and play freely.", type: "Pikachu" }
      ]
    },
    {
      question: "Which of these traits describes you best?",
      options: [
        { answer: "Energetic and adventurous.", type: "Charmander" },
        { answer: "Patient and meticulous.", type: "Bulbasaur" },
        { answer: "Calm and reliable.", type: "Squirtle" },
        { answer: "Cheerful and optimistic.", type: "Pikachu" }
      ]
    },
    {
      question: "How do you face your fears?",
      options: [
        { answer: "I face my fears head-on and with bravery.", type: "Charmander" },
        { answer: "I mentally prepare myself and seek support.", type: "Bulbasaur" },
        { answer: "I prefer to stay calm and analyze the situation.", type: "Squirtle" },
        { answer: "I try to remember the good things and keep moving forward.", type: "Pikachu" }
      ]
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userName, setUserName] = useState("");
  const [element, setElement] = useState({});

  function handleAnswer(answer) {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function handleUserFormSubmit(name) {
    setUserName(name);
  }

  function determineElement(answers) {
    const counts = { Charmander: 0, Bulbasaur: 0, Squirtle: 0, Pikachu: 0 };
    answers.forEach(function (answer) {
      counts[questions[answers.length - 1].options[answer].type] += 1;
    });
    return Object.keys(counts).reduce(function (a, b) {
      return counts[a] > counts[b] ? a : b;
    });
  }

  useEffect(
    function () {
      async function fetchPokemonData(pokemon) {
        let _r = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        let data = await _r.json();
        let types = data.types.map((type) => type.type.name);
        return {
          name: pokemon,
          dex: data.id,
          image: data.sprites.other["official-artwork"].front_default,
          types: types
        };
      }

      if (currentQuestionIndex === questions.length) {
        const selectedElement = determineElement(answers);
        fetchPokemonData(selectedElement.toLowerCase()).then((pokemonData) => setElement(pokemonData));
      }
    },
    [currentQuestionIndex]
  );

  return (
    <UserProvider value={{ name: userName, setName: setUserName }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<UserForm onSubmit={handleUserFormSubmit} />}
          />
          <Route
            path="/quiz"
            element={
              currentQuestionIndex < questions.length ? (
                <Question
                  question={questions[currentQuestionIndex].question}
                  options={questions[currentQuestionIndex].options}
                  onAnswer={handleAnswer}
                />
              ) : (
                <Results element={element} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
