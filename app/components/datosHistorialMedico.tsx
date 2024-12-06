"use client";
import { Switch } from "@nextui-org/switch";
import { useContext } from "react";
import { X, Check } from "@phosphor-icons/react";
import { DatosHistorialMedicoContext } from "@/app/provider/datosHistorialMedicoProvider";
import { datosHistorialMedico } from "@/app/data/datosHistorialMedico";
import { Input } from "@nextui-org/input";

export default function DatosHistorialMedico() {
  const { setInputStringValues, setInputBooleanValues, inputBooleanValues, inputStringValues } = useContext(DatosHistorialMedicoContext);

  return (
    <>
      {datosHistorialMedico.map((item, index) => (
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
  );
}
