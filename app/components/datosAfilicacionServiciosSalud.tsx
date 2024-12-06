"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/table";
import { Switch } from "@nextui-org/switch";
import { Input } from "@nextui-org/input";
import { Check, X } from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { DatosAfilicacionServiciosSaludContext } from "../provider/datosAfiliaciónServiciosSaludProvider";
import { datosAfiliacionServiciosSalud } from "@/app/data/datosAfiliacionServiciosSalud";


export default function DatosAfilicacionServiciosSalud() {
  const { setInputStringValues, setInputBooleanValues, inputBooleanValues, inputStringValues } = useContext(DatosAfilicacionServiciosSaludContext);

  return (
    <>
      <Table>
        <TableHeader>
          <TableColumn>Proveedor</TableColumn>
          <TableColumn>Nombre del Proveedor</TableColumn>
          <TableColumn>No. de Poliza</TableColumn>
          <TableColumn>Derechohabiencia</TableColumn>
          <TableColumn>Observaciones</TableColumn>
        </TableHeader>
        <TableBody>
          {datosAfiliacionServiciosSalud.map((item, index)=>(
            <TableRow key={index}>
            <TableCell>
                <Switch
                  checked={inputBooleanValues[index]}
                  onChange={(e) => {
                    console.log(inputBooleanValues[index]);
                    setInputBooleanValues[index](e.target.checked);
      
                    if (!e.target.checked) {                      
                      setInputStringValues[item.valor1]("-");
                      setInputStringValues[item.valor2]("-");
                      setInputStringValues[item.valor3]("-");
                      setInputStringValues[item.valor4]("-");
                    }
                  }}
                  thumbIcon={({ isSelected, className }) =>
                    isSelected ? <Check className={className} /> : <X className={className} />
                  }
                >{item.label}</Switch>
            </TableCell>
            <TableCell>
              <Input 
              size="sm" 
              isDisabled={!inputBooleanValues[index]} 
              value={inputStringValues[item.valor1]}
              onFocus={() => {
                setInputStringValues[item.valor1]("");
              }}
              onBlur={() => {
                if (inputStringValues[item.valor1] === "") {
                  setInputStringValues[item.valor1]("-");
                }
              }}
              onChange={(e) => {
                setInputStringValues[item.valor1](e.target.value);
              }}
              />
            </TableCell>
            <TableCell>
              <Input 
              size="sm" 
              isDisabled={!inputBooleanValues[index]} 
              value={inputStringValues[item.valor2]}
              onFocus={() => {
                setInputStringValues[item.valor2]("");
              }}
              onBlur={() => {
                if (inputStringValues[item.valor2] === "") {
                  setInputStringValues[item.valor2]("-");
                }
              }}
              onChange={(e) => {
                setInputStringValues[item.valor2](e.target.value);
              }}
              />
            </TableCell>
            <TableCell>
              <Input 
              size="sm" 
              isDisabled={!inputBooleanValues[index]} 
              value={inputStringValues[item.valor3]}
              onFocus={() => {
                setInputStringValues[item.valor3]("");
              }}
              onBlur={() => {
                if (inputStringValues[item.valor3] === "") {
                  setInputStringValues[item.valor3]("-");
                }
              }}
              onChange={(e) => {
                setInputStringValues[item.valor3](e.target.value);
              }}
              />
            </TableCell>
            <TableCell>
              <Input 
              size="sm" 
              isDisabled={!inputBooleanValues[index]} 
              value={inputStringValues[item.valor4]}
              onFocus={() => {
                setInputStringValues[item.valor4]("");
              }}
              onBlur={() => {
                if (inputStringValues[item.valor4] === "") {
                  setInputStringValues[item.valor4]("-");
                }
              }}
              onChange={(e) => {
                setInputStringValues[item.valor4](e.target.value);
              }}
              />
            </TableCell>
          </TableRow>
          ))}
          
          
        </TableBody>
      </Table>
    </>
  );
}
