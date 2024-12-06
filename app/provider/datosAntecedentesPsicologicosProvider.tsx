"use client";
import React, { createContext, PropsWithChildren, useState } from 'react'

const defaultAntecedentesPsicologicosContext = {
    inputBooleanValues: [
        true,
        true,
        true,
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

export const DatosAntecedentesPsicologicosContext = createContext(defaultAntecedentesPsicologicosContext);

export const DatosAntecedentesPsicologicosProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [cambiosAlimentacion, setCambiosAlimentacion] = useState<boolean>(false);
    const [cambioAlimentacionEspecifique, setCambioAlimentacionEspecifique] = useState<string>('-');

    const [aislamientoPersonal, setAislamientoPersonal] = useState<boolean>(false);
    const [aislamientoPersonalEspecifique, setAislamientoPersonalEspecifique] = useState<string>('-');

    const [sensacionVacio, setSensacionVacio] = useState<boolean>(false);
    const [sensacionVacioEspecifique, setSensacionVacioEspecifique] = useState<string>('-');

    const [impotenciaDesesperanza, setImpotenciaDesesperanza] = useState<boolean>(false);
    const [impotenciaDesesperanzaEspecifique, setImpotenciaDesesperanzaEspecifique] = useState<string>('-');

    const [confusion, setConfusion] = useState<boolean>(false);
    const [confusionEspecifique, setConfusionEspecifique] = useState<string>('-');

    const [pensamiento, setPensamiento] = useState<boolean>(false);
    const [pensamientoEspecifique, setPensamientoEspecifique] = useState<string>('-');

    const [pensarLastimarse, setPensarLastimarse] = useState<boolean>(false);
    const [pensarLastimarseEspecifique, setPensarLastimarseEspecifique] = useState<string>('-');

    const [alteracionesSueno, setAlteracionesSueno] = useState<boolean>(false);
    const [alteracionesSuenoEspecifique, setAlteracionesSuenoEspecifique] = useState<string>('-');

    const [agotamientoExcesivo, setAgotamientoExcesivo] = useState<boolean>(false);
    const [agotamientoExcesivoEspecifique, setAgotamientoExcesivoEspecifique] = useState<string>('-');

    const [doloresInexplicables, setDoloresInexplicables] = useState<boolean>(false);
    const [doloresInexplicablesEspecifique, setDoloresInexplicablesEspecifique] = useState<string>('-');

    const [aumentoToxicomania, setAumentoToxicomania] = useState<boolean>(false);
    const [aumentoToxicomaniaEspecifique, setAumentoToxicomaniaEspecifique] = useState<string>('-');

    const [cambioHumor, setCambioHumor] = useState<boolean>(false);
    const [cambioHumorEspecifique, setCambioHumorEspecifique] = useState<string>('-');

    const [escucharVoces, setEscucharVoces] = useState<boolean>(false);
    const [escucharVocesEspecifique, setEscucharVocesEspecifique] = useState<string>('-');

    const [dificultadTareasDiarias, setDificultadTareasDiarias] = useState<boolean>(false);
    const [dificultadTareasDiariasEspecifique, setDificultadTareasDiariasEspecifique] = useState<string>('-');

    const inputBooleanValues = [
        cambiosAlimentacion, aislamientoPersonal, sensacionVacio,
        impotenciaDesesperanza, confusion, pensamiento, pensarLastimarse,
        alteracionesSueno, agotamientoExcesivo, doloresInexplicables,
        aumentoToxicomania, cambioHumor, escucharVoces, dificultadTareasDiarias
    ];

    const inputStringValues = [
        cambioAlimentacionEspecifique, aislamientoPersonalEspecifique, sensacionVacioEspecifique,
        impotenciaDesesperanzaEspecifique, confusionEspecifique, pensamientoEspecifique, pensarLastimarseEspecifique,
        alteracionesSuenoEspecifique, agotamientoExcesivoEspecifique, doloresInexplicablesEspecifique,
        aumentoToxicomaniaEspecifique, cambioHumorEspecifique, escucharVocesEspecifique, dificultadTareasDiariasEspecifique
    ];

    const setInputBooleanValues = [
        setCambiosAlimentacion, setAislamientoPersonal, setSensacionVacio,
        setImpotenciaDesesperanza, setConfusion, setPensamiento, setPensarLastimarse,
        setAlteracionesSueno, setAgotamientoExcesivo, setDoloresInexplicables,
        setAumentoToxicomania, setCambioHumor, setEscucharVoces, setDificultadTareasDiarias
    ];

    const setInputStringValues = [
        setCambioAlimentacionEspecifique, setAislamientoPersonalEspecifique, setSensacionVacioEspecifique,
        setImpotenciaDesesperanzaEspecifique, setConfusionEspecifique, setPensamientoEspecifique, setPensarLastimarseEspecifique,
        setAlteracionesSuenoEspecifique, setAgotamientoExcesivoEspecifique, setDoloresInexplicablesEspecifique,
        setAumentoToxicomaniaEspecifique, setCambioHumorEspecifique, setEscucharVocesEspecifique, setDificultadTareasDiariasEspecifique
    ];

    return (
        <DatosAntecedentesPsicologicosContext.Provider value={{ inputBooleanValues, inputStringValues, setInputBooleanValues, setInputStringValues }}>
            {children}
        </DatosAntecedentesPsicologicosContext.Provider>
    );
};