"use client"
import React, { createContext, useState, PropsWithChildren, useEffect } from 'react';

const defaultDatosIdentificacionContext = {
  inputValues: [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ],
  setInputValues: [(value: string) => { }],
};

export const DatosIdentificacionContext = createContext(defaultDatosIdentificacionContext);

export const DatosIdentificacionProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [nombreCompleto, setNombreCompleto] = useState<string>("Eduardo Sánchez Ferreira");
  const [correo, setCorreo] = useState<string>("edd2891@hotmail.com");
  const [provincia, setProvincia] = useState<string>("Michoacán");
  const [cum, setCum] = useState<string>("11111");
  const [fechaNacimiento, setFechaNacimiento] = useState<string>("1963-06-10");
  const [grupo, setGrupo] = useState<string>("7");
  const [seccion, setSeccion] = useState<string>("Comunidad");
  const [alerta, setAlerta] = useState<string>("No");
  

  const inputValues = [
    nombreCompleto,correo,provincia, cum, fechaNacimiento,
    grupo, seccion, alerta, 
  ];

  const setInputValues = [
    setNombreCompleto,setCorreo,setProvincia, setCum,setFechaNacimiento,
    setGrupo, setSeccion, setAlerta, 
  ];

  return (
    <DatosIdentificacionContext.Provider value={{ inputValues, setInputValues}}>
      {children}
    </DatosIdentificacionContext.Provider>
  );
};
