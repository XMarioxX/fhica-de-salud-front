"use client";
import { useContext, useEffect } from 'react';
import { ThemeContext } from '@/app/provider/themeProvider';
import { datosIdentificacion } from '@/app/data/datosIdentificacion';

const ChildComponent = () => {
  const { theme, toggleTheme, inputValues, setInputFunctions } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Valores de los inputs: ", inputValues);
  }, [inputValues]);

  return (
    <div style={{ background: theme === 'dark' ? '#333' : '#FFF', color: theme === 'dark' ? '#FFF' : '#000', padding: '20px' }}>
      <h2>Componente Hijo</h2>
      <p>El tema actual es: {theme}</p>
      <button onClick={toggleTheme}>Cambiar Tema</button>

      <div>
        {datosIdentificacion.map((item, index) => (
          <div key={item.key}>
            <label>{item.label}: </label>
            <input 
              type="text" 
              value={inputValues[index]} 
              onChange={(e) => setInputFunctions[index](e.target.value)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildComponent;
