"use client"
import React, { createContext, useState, PropsWithChildren, useEffect } from 'react';

const defaultDatosMedicosContext = {
  inputValues: [
    '',
    '',
    '',
    '',
    '',
  ],
  setInputValues: [(value: string) => { }],
};

export const DatosMedicosContext = createContext(defaultDatosMedicosContext);

export const DatosMedicosProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [grupoRH, setGrupoRH] = useState<string>("A+");
  const [alergias, setAlergias] = useState<string>("-");
  const [tratamientosActuales	, setTratamientosActuales	] = useState<string>("-");
  const [descripcionTratamientoMedico	, setDescripcionTratamientoMedico	] = useState<string>("-");
  const [peso, setPeso] = useState<string>("78 kg");
  const [talla, setTalla] = useState<string>("1.76 m");
  const [imc, setImc] = useState<string>("56.09");
  const [alimentacion, setAlimentacion] = useState<string>("N/A");


  const inputValues = [
    grupoRH, peso, talla,
    imc, alimentacion, alergias, tratamientosActuales,
    descripcionTratamientoMedico
  ];

  const setInputValues = [
    setGrupoRH, setPeso,setTalla,setImc, setAlimentacion,
    setAlergias, setTratamientosActuales,
    setDescripcionTratamientoMedico
  ];

  return (
    <DatosMedicosContext.Provider value={{ inputValues, setInputValues}}>
      {children}
    </DatosMedicosContext.Provider>
  );
};
