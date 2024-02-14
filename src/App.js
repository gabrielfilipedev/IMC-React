import React, { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import './components/App.css';

const calcularIMC = ({ altura, peso }) => {
  const imc = (peso / (altura * altura)).toFixed(2);
  let classificacao = '';

  if (imc < 18.5) {
    classificacao = 'Abaixo do Peso';
  } else if (imc < 24.9) {
    classificacao = 'Peso Normal';
  } else if (imc < 29.9) {
    classificacao = 'Sobrepeso';
  } else if (imc < 34.9) {
    classificacao = 'Obesidade Grau I';
  } else if (imc < 39.9) {
    classificacao = 'Obesidade Grau II';
  } else {
    classificacao = 'Obesidade Grau III';
  }

  return { imc, classificacao };
};

function App() {
  const [result, setResult] = useState(null);

  const handleSubmit = (data) => {
    const { imc, classificacao } = calcularIMC(data);
    setResult({ imc, classificacao });
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <Form onSubmit={handleSubmit} />
      {result && <Result {...result} />}
    </div>
  );
}

export default App;
