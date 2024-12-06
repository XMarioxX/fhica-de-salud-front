"use client";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { DatePicker } from "@nextui-org/date-picker";
import { useContext } from "react";
import { secciones } from "../data/secciones";
import { provincias } from "../data/provincias";
import { parseDate, DateValue } from "@internationalized/date";
import { DatosIdentificacionContext } from "@/app/provider/datosIdentificaciónProvider";

export default function DatosIdentificacion() {
  const { setInputValues, inputValues } = useContext(DatosIdentificacionContext);

  // Convert string to valid DateValue for DatePicker
  const parseValidDate = (dateString: string): DateValue | null => {
    try {
      return parseDate(dateString);
    } catch {
      return null;
    }
  };

  return (
    <>
      <Input
        type="text"
        label="Nombre Completo"
        value={inputValues[0]}
        onChange={(e) => setInputValues[0](e.target.value)}
        required
        className="w-full"
        isRequired={true}
      />
      <Input
        type="text"
        label="Correo Electronico"
        value={inputValues[1]}
        onChange={(e) => setInputValues[1](e.target.value)}
        required
        className="w-full"
        isRequired={true}
      />
      <Select
        label="Provincia"
        className="w-full"
        isRequired
        selectedKeys={new Set([inputValues[2]])}
        onSelectionChange={(keys) => {
          
          const selectedKey = Array.from(keys)[0] as string;
          console.log(selectedKey);
          setInputValues[2](selectedKey);
        }}
      >
        {provincias.map((provincia) => (
          <SelectItem key={provincia.key}>
            {provincia.label}
          </SelectItem>
        ))}
      </Select>
      <Input
        type="text"
        label="CUM"
        value={inputValues[3]}
        onChange={(e) => {
          console.log(e.target.value);
          
          setInputValues[3](e.target.value)
        }}
        required
        className="w-full"
        isRequired={true}
      />
      <DatePicker
        className="w-full"
        label="Fecha de Nacimiento"
        showMonthAndYearPickers
        isRequired
        value={parseValidDate(inputValues[4])}
        onChange={(newDate) => {
          if (newDate) {
            setInputValues[4](newDate.toString());
          }
        }}
      />
      <Input
        type="text"
        label="Grupo"
        value={inputValues[5]}
        onChange={(e) => setInputValues[5](e.target.value)}
        required
        className="w-full"
        isRequired={true}
      />
      <Select
        label="Sección"
        className="w-full"
        isRequired
        selectedKeys={new Set([inputValues[6]])}
        onSelectionChange={(keys) => {
          const selectedKey = Array.from(keys)[0] as string;
          setInputValues[6](selectedKey);
        }}
      >
        {secciones.map((seccion) => (
          <SelectItem
            key={seccion.key}
            color={
              seccion.color as
                | "warning"
                | "success"
                | "primary"
                | "danger"
                | "secondary"
            }
          >
            {seccion.label}
          </SelectItem>
        ))}
      </Select>
      <Input
        type="text"
        label="Alerta"
        value={inputValues[7]}
        onChange={(e) => setInputValues[7](e.target.value)}
        required
        className="w-full"
      />
    </>
  );
}
