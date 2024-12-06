"use client";
import React, { createContext, useState, PropsWithChildren } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  inputValues: string[];
  setInputFunctions: ((value: string) => void)[];
}

const defaultThemeContext: ThemeContextType = {
  theme: 'light', 
  toggleTheme: () => {},
  inputValues: ['', '', '', '', '', ''],
  setInputFunctions: [(value: string) => {}],
};

export const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export const ThemeProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [input3, setInput3] = useState<string>('');
  const [input4, setInput4] = useState<string>('');
  const [input5, setInput5] = useState<string>('');
  const [input6, setInput6] = useState<string>('');

  const inputValues = [input1, input2, input3, input4, input5, input6];
  const setInputFunctions = [setInput1, setInput2, setInput3, setInput4, setInput5, setInput6];

  const toggleTheme = () => {
    console.log("Cambiando tema...");
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, inputValues, setInputFunctions }}>
      {children}
    </ThemeContext.Provider>
  );
};
