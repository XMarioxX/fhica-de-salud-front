"use client"
import React, { createContext, useState, PropsWithChildren } from 'react';

const defaultHistorialMedicoContext = {
  inputBooleanValues: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  inputStringValues: [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ],
  setInputBooleanValues: [(value: boolean) => { }],
  setInputStringValues: [(value: string) => { }],
};

export const DatosHistorialMedicoContext = createContext(defaultHistorialMedicoContext);

export const DatosHistorialMedicoProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [diabetes, setDiabetes] = useState<boolean>(false);
  const [diabetesEspecifique, setDiabetesEspecifique] = useState<string>('-');

  const [respiratorios, setRespiratorios] = useState<boolean>(false);
  const [respiratoriosEspecifique, setRespiratoriosEspecifique] = useState<string>('-');

  const [hipertension, setHipertension] = useState<boolean>(false);
  const [hipertensionEspecifique, setHipertensionEspecifique] = useState<string>('-');

  const [oftalmicos, setOftalmicos] = useState<boolean>(false);
  const [oftalmicosEspecifique, setOftalmicosEspecifique] = useState<string>('-');

  const [eventoEpileptico, setEventoEpileptico] = useState<boolean>(false);
  const [eventoEpilepticoEspecifique, setEventoEpilepticoEspecifique] = useState<string>('-');

  const [narizYuOidos, setNarizYuOidos] = useState<boolean>(false);
  const [narizYuOidosEspecifique, setNarizYuOidosEspecifique] = useState<string>('-');

  const [problemaCardiaco, setProblemaCardiaco] = useState<boolean>(false);
  const [problemaCardiacoEspecifique, setProblemaCardiacoEspecifique] = useState<string>('-');

  const [neurologicos, setNeurologicos] = useState<boolean>(false);
  const [neurologicosEspecifique, setNeurologicosEspecifique] = useState<string>('-');

  const [desmayoMareo, setDesmayoMareo] = useState<boolean>(false);
  const [desmayoMareoEspecifique, setDesmayoMareoEspecifique] = useState<string>('-');

  const [hematologicos, setHematologicos] = useState<boolean>(false);
  const [hematologicosEspecifique, setHematologicosEspecifique] = useState<string>('-');

  const [asma, setAsma] = useState<boolean>(false);
  const [asmaEspecifique, setAsmaEspecifique] = useState<string>('-');

  const [hepaticos, setHepaticos] = useState<boolean>(false);
  const [hepaticosEspecifique, setHepaticosEspecifique] = useState<string>('-');

  const [toxicomanias, setToxicomanias] = useState<boolean>(false);
  const [toxicomaniasEspecifique, setToxicomaniasEspecifique] = useState<string>('-');

  const [aparatoDigestivo, setAparatoDigestivo] = useState<boolean>(false);
  const [aparatoDigestivoEspecifique, setAparatoDigestivoEspecifique] = useState<string>('-');

  const [cirugiaReciente, setCirugiaReciente] = useState<boolean>(false);
  const [cirugiaRecienteEspecifique, setCirugiaRecienteEspecifique] = useState<string>('-');

  const [tiroideo, setTiroideo] = useState<boolean>(false);
  const [tiroideoEspecifique, setTiroideoEspecifique] = useState<string>('-');

  const [embarazoPuerperio, setEmbarazoPuerperio] = useState<boolean>(false);
  const [embarazoPuerperioEspecifique, setEmbarazoPuerperioEspecifique] = useState<string>('-');

  const [dermatologicos, setDermatologicos] = useState<boolean>(false);
  const [dermatologicosEspecifique, setDermatologicosEspecifique] = useState<string>('-');

  const [transfucion, setTransfucion] = useState<boolean>(false);
  const [transfucionEspecifique, setTransfucionEspecifique] = useState<string>('-');

  const [inmunologicos, setInmunologicos] = useState<boolean>(false);
  const [inmunologicosEspecifique, setInmunologicosEspecifique] = useState<string>('-');

  const [lesionMusculoEsqueletica, setLesionMusculoEsqueletica] = useState<boolean>(false);
  const [lesionMusculoEsqueleticaEspecifique, setLesionMusculoEsqueleticaEspecifique] = useState<string>('-');

  const [urinarios, setUrinarios] = useState<boolean>(false);
  const [urinariosEspecifique, setUrinariosEspecifique] = useState<string>('-');

  const [ortopedicos, setOrtopedicos] = useState<boolean>(false);
  const [ortopedicosEspecifique, setOrtopedicosEspecifique] = useState<string>('-');

  const [covid19, setCovid19] = useState<boolean>(false);
  const [covid19Especifique, setCovid19Especifique] = useState<string>('-');


  const inputBooleanValues = [
    diabetes, respiratorios, hipertension, oftalmicos, eventoEpileptico,
    narizYuOidos, problemaCardiaco, neurologicos, desmayoMareo,
    hematologicos, asma, hepaticos, toxicomanias, aparatoDigestivo,
    cirugiaReciente, tiroideo, embarazoPuerperio, dermatologicos, transfucion,
    inmunologicos, lesionMusculoEsqueletica, urinarios, ortopedicos, covid19
  ];

  const inputStringValues = [
    diabetesEspecifique, respiratoriosEspecifique, hipertensionEspecifique,
    oftalmicosEspecifique, eventoEpilepticoEspecifique, narizYuOidosEspecifique,
    problemaCardiacoEspecifique, neurologicosEspecifique, desmayoMareoEspecifique,
    hematologicosEspecifique, asmaEspecifique, hepaticosEspecifique,
    toxicomaniasEspecifique, aparatoDigestivoEspecifique, cirugiaRecienteEspecifique,
    tiroideoEspecifique, embarazoPuerperioEspecifique, dermatologicosEspecifique,
    transfucionEspecifique, inmunologicosEspecifique, lesionMusculoEsqueleticaEspecifique,
    urinariosEspecifique, ortopedicosEspecifique, covid19Especifique
  ];

  const setInputBooleanValues = [
    setDiabetes, setRespiratorios, setHipertension, setOftalmicos, setEventoEpileptico,
    setNarizYuOidos, setProblemaCardiaco, setNeurologicos, setDesmayoMareo,
    setHematologicos, setAsma, setHepaticos, setToxicomanias, setAparatoDigestivo,
    setCirugiaReciente, setTiroideo, setEmbarazoPuerperio, setDermatologicos,
    setTransfucion, setInmunologicos, setLesionMusculoEsqueletica, setUrinarios,
    setOrtopedicos, setCovid19
  ];

  const setInputStringValues = [
    setDiabetesEspecifique, setRespiratoriosEspecifique, setHipertensionEspecifique,
    setOftalmicosEspecifique, setEventoEpilepticoEspecifique, setNarizYuOidosEspecifique,
    setProblemaCardiacoEspecifique, setNeurologicosEspecifique, setDesmayoMareoEspecifique,
    setHematologicosEspecifique, setAsmaEspecifique, setHepaticosEspecifique,
    setToxicomaniasEspecifique, setAparatoDigestivoEspecifique, setCirugiaRecienteEspecifique,
    setTiroideoEspecifique, setEmbarazoPuerperioEspecifique, setDermatologicosEspecifique,
    setTransfucionEspecifique, setInmunologicosEspecifique, setLesionMusculoEsqueleticaEspecifique,
    setUrinariosEspecifique, setOrtopedicosEspecifique, setCovid19Especifique
  ];

  return (
    <DatosHistorialMedicoContext.Provider value={{ inputBooleanValues, inputStringValues, setInputBooleanValues, setInputStringValues }}>
      {children}
    </DatosHistorialMedicoContext.Provider>
  );
};
