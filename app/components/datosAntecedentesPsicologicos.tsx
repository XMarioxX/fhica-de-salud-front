"use client"
import React, { useContext } from 'react'
import { Switch } from "@nextui-org/switch";
import { X, Check } from "@phosphor-icons/react";
import { Input } from "@nextui-org/input";
import { datosAntecedentesPsicologicos } from '../data/datosAntecedentesPsicologicos';
import { DatosAntecedentesPsicologicosContext } from '../provider/datosAntecedentesPsicologicosProvider';

const DatosAntecedentesPsicologicos = () => {
    const { setInputStringValues, setInputBooleanValues, inputBooleanValues, inputStringValues } = useContext(DatosAntecedentesPsicologicosContext);
    
  return (
    <>
        {datosAntecedentesPsicologicos.map((item, index) => (
        <div key={item.key} className="flex items-start">
          <Switch
            className=""
            checked={inputBooleanValues[index]}
            onChange={(e) => {
              setInputBooleanValues[index](e.target.checked);

              if (!e.target.checked) {
                setInputStringValues[index]("-");
              }
            }}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? <Check className={className} /> : <X className={className} />
            }
          >{item.label}</Switch>
          <Input
            label={item.label}
            className="ml-4"
            isDisabled={!inputBooleanValues[index]}
            value={inputStringValues[index]}
            onFocus={() => {
              setInputStringValues[index]("");
            }}
            onBlur={() => {
              if (inputStringValues[index] === "") {
                setInputStringValues[index]("-");
              }
            }}
            onChange={(e) => {
              setInputStringValues[index](e.target.value);
            }}
          />
        </div>
      ))}
    </>
  )
}

export default DatosAntecedentesPsicologicos