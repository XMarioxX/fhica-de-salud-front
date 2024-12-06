"use client";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { useContext} from "react";
import { gruposSanguineos } from "../data/grupoRH";
import { tiposAlimentacion } from "../data/alimentacion";
import { DatosMedicosContext } from "@/app/provider/datosMedicosProvider";


export default function DatosMedicos() {
  const { setInputValues, inputValues } = useContext(DatosMedicosContext);

  const calcularIMC = () => {
    const pesoNum = parseFloat(inputValues[1]);
    const tallaNum = parseFloat(inputValues[2]);

    if (!isNaN(pesoNum) && !isNaN(tallaNum) && tallaNum > 0) {
      const imcValue = (pesoNum / (tallaNum * tallaNum)).toFixed(2);
      setInputValues[3](`${imcValue} kg/m²`);
    } else {
      setInputValues[3]("");
    }
  };

  return (
    <div className="space-y-4">
      <Select
        label="Grupo y RH"
        className="w-full"
        isRequired
        selectedKeys={new Set([inputValues[0]])}
        onSelectionChange={(keys) => {
          const selectedKey = Array.from(keys)[0] as string;
          setInputValues[0](selectedKey);
        }}
      >
        {gruposSanguineos.map((grupoSangineo) => (
          <SelectItem key={grupoSangineo.key}>
            {grupoSangineo.label}
          </SelectItem>
        ))}
      </Select>
      <Input
        type="text"
        label="Peso"
        value={inputValues[1]}
        onChange={(e) => setInputValues[1](e.target.value)}
        onBlur={() => {
          setInputValues[1](`${inputValues[1]} kg`);
          calcularIMC();
        }}
        required
        className="w-full"
        isRequired={true}
      />
      <Input
        type="text"
        label="Talla"
        value={inputValues[2]}
        onChange={(e) => setInputValues[2](e.target.value)}
        onBlur={() => {
          setInputValues[2](`${inputValues[2]} m`);
          calcularIMC();
        }}
        required
        className="w-full"
        isRequired={true}
      />
      <Input
        type="text"
        label="IMC"
        isDisabled
        value={inputValues[3]}
        required
        className="w-full"
        isRequired={true}
      />
      <Select
        label="Alimentación"
        className="w-full"
        isRequired
        selectedKeys={new Set([inputValues[4]])}
        onSelectionChange={(keys) => {
          const selectedKey = Array.from(keys)[0] as string;
          setInputValues[4](selectedKey);
        }}
      >
        {tiposAlimentacion.map((tipoAlimentacion) => (
          <SelectItem key={tipoAlimentacion.key}>
            {tipoAlimentacion.label}
          </SelectItem>
        ))}
      </Select>
      <Input
        type="text"
        label="Alergías"
        value={inputValues[5]}
        onChange={(e) => setInputValues[5](e.target.value)}
        className="w-full"
        onFocus={() => {
          setInputValues[5]("");
        }}
        onBlur={() => {
          if (inputValues[5] === "") {
            setInputValues[5]("-");
          }
        }}
      />
        <Input
          type="text"
          label="Tratamientos Actuales"
          value={inputValues[6]}
          onChange={(e) => setInputValues[6](e.target.value)}
          className="w-full"
          onFocus={() => {
            setInputValues[6]("");
          }}
          onBlur={() => {
            if (inputValues[6] === "") {
              setInputValues[6]("-");
            }
          }}
        />
      <Input
        type="text"
        label="Descripción Tratamiento Médicos"
        value={inputValues[7]}
        onChange={(e) => setInputValues[7](e.target.value)}
        className="w-full"
        onFocus={() => {
          setInputValues[7]("");
        }}
        onBlur={() => {
          if (inputValues[7] === "") {
            setInputValues[7]("-");
          }
        }}
      />
    </div>
  );
}
