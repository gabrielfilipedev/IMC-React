import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ altura, peso });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Altura (m):
        <input
          type="number"
          step="0.01"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
        />
      </label>
      <label>
        Peso (kg):
        <input
          type="number"
          step="0.1"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
        />
      </label>
      <button type="submit">Calcular</button>
    </form>
  );
};

export default Form;
