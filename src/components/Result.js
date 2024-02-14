import React from 'react';

const Result = ({ imc, classificacao }) => (
  <div>
    <h2>Resultado:</h2>
    <p>IMC: {imc}</p>
    <p>Classificação: {classificacao}</p>
  </div>
);

export default Result;
