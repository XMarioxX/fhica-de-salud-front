"use client"
import React, { createContext, useState, PropsWithChildren } from 'react';

const defaultAfiliacionServiciosSaludContext = {
  inputBooleanValues: [
    true,
    true,
    true,
  ],
  inputStringValues: [
    'nombreIP',
    'numeroIP',
    'derechoIP',
    'observacionesIP',
    'nombreA',
    'numeroA',
    'derechoA',
    'observacionesA',
    'nombreP',
    'numeroP',
    'derechoP',
    'observacionesP',
  ],
  setInputBooleanValues: [(value: boolean) => { }],
  setInputStringValues: [(value: string) => { }],
};

export const DatosAfilicacionServiciosSaludContext = createContext(defaultAfiliacionServiciosSaludContext);

export const DatosAfiliacionServiciosSaludProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [institucionesPublicas, setInstitucionesPublicas] = useState<boolean>(false);
  const [aseguradoras, setAseguradoras] = useState<boolean>(false);
  const [particular, setParticular] = useState<boolean>(false);

  const [nombreInstitucionPublica, setNombreInstitucionPublica] = useState<string>('-');
  const [numeroPolizaInstitucionPublica, setNumeroPolizaInstitucionPublica] = useState<string>('-');
  const [derechoHabienciaInstitucionPublica, setDerechoHabienciaInstitucionPublica] = useState<string>('-');
  const [observacionesInstitucionPublica, setObservacionesInstitucionPublica] = useState<string>('-');

  const [nombreAseguradoras, setNombreAseguradoras] = useState<string>('-');
  const [numeroPolizaAseguradoras, setNumeroPolizaAseguradoras] = useState<string>('-');
  const [derechoHabienciaAseguradoras, setDerechoHabienciaAseguradoras] = useState<string>('-');
  const [observacionesAseguradoras, setObservacionesAseguradoras] = useState<string>('-');

  const [nombreParticular, setNombreParticular] = useState<string>('-');
  const [numeroPolizaParticular, setNumeroPolizaParticular] = useState<string>('-');
  const [derechoHabienciaParticular, setDerechoHabienciaParticular] = useState<string>('-');
  const [observacionesParticular, setObservacionesParticular] = useState<string>('-');




  const inputBooleanValues = [
    institucionesPublicas, aseguradoras, particular
  ];

  const inputStringValues = [
    nombreInstitucionPublica,numeroPolizaInstitucionPublica,derechoHabienciaInstitucionPublica,
    observacionesInstitucionPublica, nombreAseguradoras, numeroPolizaAseguradoras,
    derechoHabienciaAseguradoras, observacionesAseguradoras,
    nombreParticular, numeroPolizaParticular, derechoHabienciaParticular,
    observacionesParticular
  ];

  const setInputBooleanValues = [
    setInstitucionesPublicas, setAseguradoras, setParticular
  ];

  const setInputStringValues = [
    setNombreInstitucionPublica, setNumeroPolizaInstitucionPublica, setDerechoHabienciaInstitucionPublica,
    setObservacionesInstitucionPublica, setNombreAseguradoras,setNumeroPolizaAseguradoras,
    setDerechoHabienciaAseguradoras, setObservacionesAseguradoras,
    setNombreParticular, setNumeroPolizaParticular, setDerechoHabienciaParticular,
    setObservacionesParticular
  ];
  
  return (
    <DatosAfilicacionServiciosSaludContext.Provider value={{ inputBooleanValues, inputStringValues, setInputBooleanValues, setInputStringValues }}>
      {children}
    </DatosAfilicacionServiciosSaludContext.Provider>
  );
};
