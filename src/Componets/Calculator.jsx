// Calculator.jsx
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState("");
  
    const handleButtonClick = (value) => {
      if (value === "0" && displayValue === "0") {
        // Ignora zeros à esquerda
        return;
      }
  
      // Verifica se o último caractere é um operador
      const lastChar = displayValue.slice(-1);
  
      // Verifica se o novo valor também é um operador
      if (["+","-","*","/"].includes(value)) {
        // Substitui o operador anterior pelo novo
        if (["+","-","*","/"].includes(lastChar)) {
          setDisplayValue(prevValue => prevValue.slice(0, -1) + value);
        } else {
          setDisplayValue(prevValue => prevValue + value);
        }
      } else {
        // Adiciona o valor normalmente
        setDisplayValue(prevValue => {
          // Ignora zeros à esquerda, exceto se for o primeiro dígito após um ponto decimal
          if (prevValue === "0" && value !== ".") {
            return value;
          } else {
            return prevValue + value;
          }
        });
      }
    };
  
    const calculateResult = () => {
      try {
        const result = eval(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue("Error");
      }
    };
  
    const clearDisplay = () => {
      setDisplayValue("");
    };
  
    const toggleSign = () => {
      setDisplayValue((prevValue) => (prevValue.startsWith("-") ? prevValue.slice(1) : "-" + prevValue));
    };

  return (
    <div className="container mx-auto max-w-80 my-8 p-6 bg-black rounded-3xl shadow-md">
      <input
        className="w-full mb-4 p-4 text-right rounded-lg bg-black text-white text-6xl focus:outline-none"
        type="text"
        value={displayValue}
        readOnly
      />
      <div className="grid grid-cols-4 gap-4">
        {/* Primeira Linha */}
        <button
          className="p-4 text-lg rounded-full bg-gray-300 text-black hover:bg-gray-400 focus:outline-none"
          onClick={() => clearDisplay()}
        >
          AC
        </button>
        <button
          className="p-4 text-lg rounded-full bg-gray-300 text-black hover:bg-gray-400 focus:outline-none"
          onClick={() => toggleSign()}
        >
          +/-
        </button>
        <button
          className="p-4 text-lg rounded-full bg-gray-300 text-black hover:bg-gray-400 focus:outline-none"
          onClick={() => handleButtonClick("%")}
        >
          %
        </button>
        <button
          className="p-4 text-lg rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:outline-none"
          onClick={() => handleButtonClick("/")}
        >
          /
        </button>
        {/* Segunda Linha */}
        <button
          className="p-4 text-lgr rounded-full bg-gray-700 text-white hover:bg-gray-800 focus:outline-none"
          onClick={() => handleButtonClick("7")}
        >
          7
        </button>
        <button
          className="p-4 text-lg rounded-full bg-gray-700 text-white hover:bg-gray-800 focus:outline-none"
          onClick={() => handleButtonClick("8")}
        >
          8
        </button>
        <button
          className="p-4 text-lg rounded-full bg-gray-700 text-white hover:bg-gray-800 focus:outline-none"
          onClick={() => handleButtonClick("9")}
        >
          9
        </button>
        <button
          className="p-4 text-lg rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:outline-none"
          onClick={() => handleButtonClick("*")}
        >
          *
        </button>
        {/* Terceira Linha */}
        <button
          className="p-4 text-lg rounded-full bg-gray-700 text-white hover:bg-gray-800 focus:outline-none"
          onClick={() => handleButtonClick("4")}
        >
          4
        </button>
        <button
          className="p-4 text-lg rounded-full bg-gray-700 text-white hover:bg-gray-800 focus:outline-none"
          onClick={() => handleButtonClick("5")}
        >
          5
        </button>
        <button
          className="p-4 text-lg rounded-full bg-gray-700 text-white hover:bg-gray-800 focus:outline-none"
          onClick={() => handleButtonClick("6")}
        >
          6
        </button>
        <button
          className="p-4 text-lg rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:outline-none"
          onClick={() => handleButtonClick("-")}
        >
          -
        </button>
        {/* Quarta Linha */}
        <button
          className="p-4 text-lg rounded-full bg-gray-700 text-white hover:bg-gray-800 focus:outline-none"
          onClick={() => handleButtonClick("1")}
        >
          1
        </button>
        <button
          className="p-4 text-lg rounded-full bg-gray-700 text-white hover:bg-gray-800 focus:outline-none"
          onClick={() => handleButtonClick("2")}
        >
          2
        </button>
        <button
          className="p-4 text-lg rounded-full bg-gray-700 text-white hover:bg-gray-800 focus:outline-none"
          onClick={() => handleButtonClick("3")}
        >
          3
        </button>
        <button
          className="p-4 text-lg rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:outline-none"
          onClick={() => handleButtonClick("+")}
        >
          +
        </button>
        {/* Quinta Linha */}
        <button
          className="p-4 text-lg rounded-full bg-gray-700 text-white col-span-2 hover:bg-gray-800 focus:outline-none"
          onClick={() => handleButtonClick("0")}
        >
          0
        </button>
        <button
          className="p-4 text-lg rounded-full bg-gray-700 text-white hover:bg-gray-800 focus:outline-none"
          onClick={() => handleButtonClick(".")}
        >
          .
        </button>
        <button
          className="p-4 text-lg rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:outline-none"
          onClick={() => calculateResult()}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
