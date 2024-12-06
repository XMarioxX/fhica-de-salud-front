"use client";
import { Input } from "@nextui-org/input";
import { useState, useContext, createContext } from "react";
import { Button } from "@nextui-org/button";
import { Tabs, Tab } from "@nextui-org/tabs";

import axios from "axios";
import DatosIdentificacion from "./components/datosIdentificación";
import DatosMedicos from "./components/datosMedicos";
import DatosHistorialMedico from "./components/datosHistorialMedico";
import { DatosHistorialMedicoContext } from "./provider/datosHistorialMedicoProvider";
import DatosAfilicacionServiciosSalud from "@/app/components/datosAfilicacionServiciosSalud";
import { DatosAfilicacionServiciosSaludContext } from "./provider/datosAfiliaciónServiciosSaludProvider";
import { DatosIdentificacionContext } from "./provider/datosIdentificaciónProvider";
import { DatosMedicosContext } from "./provider/datosMedicosProvider";
import DatosAntecedentesPsicologicos from "./components/datosAntecedentesPsicologicos";
import { DatosAntecedentesPsicologicosContext } from "./provider/datosAntecedentesPsicologicosProvider";

export default function Home() {

  const {
    inputBooleanValues: inputBooleanValuesHistorial,
    inputStringValues: inputStringValuesHistorial
  } = useContext(DatosHistorialMedicoContext);

  const {
    inputBooleanValues: inputBooleanValuesAfiliacion,
    inputStringValues: inputStringValuesAfiliacion
  } = useContext(DatosAfilicacionServiciosSaludContext);

  const { inputValues: inputValuesIdentificacion } = useContext(DatosIdentificacionContext);

  const { inputValues: inputValuesMedicos } = useContext(DatosMedicosContext);

  const { inputBooleanValues: inputBooleanValuesPsicologicos, inputStringValues: inputStringValuesPsicologicos } = useContext(DatosAntecedentesPsicologicosContext);

  const [
    diabetesEspecifique,
    respiratoriosEspecifique,
    hipertensionEspecifique,
    oftalmicosEspecifique,
    eventoEpilepticoEspecifique,
    narizYuOidosEspecifique,
    problemaCardiacoEspecifique,
    neurologicosEspecifique,
    desmayoMareoEspecifique,
    hematologicosEspecifique,
    asmaEspecifique,
    hepaticosEspecifique,
    toxicomaniasEspecifique,
    aparatoDigestivoEspecifique,
    cirugiaRecienteEspecifique,
    tiroideoEspecifique,
    embarazoPuerperioEspecifique,
    dermatologicosEspecifique,
    transfucionEspecifique,
    inmunologicosEspecifique,
    lesionMusculoEsqueleticaEspecifique,
    urinariosEspecifique,
    ortopedicosEspecifique,
    covid19Especifique
  ] = inputStringValuesHistorial;

  const [
    diabetes,
    respiratorios,
    hipertension,
    oftalmicos,
    eventoEpileptico,
    narizYuOidos,
    problemaCardiaco,
    neurologicos,
    desmayoMareo,
    hematologicos,
    asma,
    hepaticos,
    toxicomanias,
    aparatoDigestivo,
    cirugiaReciente,
    tiroideo,
    embarazoPuerperio,
    dermatologicos,
    transfucion,
    inmunologicos,
    lesionMusculoEsqueletica,
    urinarios,
    ortopedicos,
    covid19
  ] = inputBooleanValuesHistorial;

  const [
    institucionesPublicas,
    aseguradoras,
    particular
  ] = inputBooleanValuesAfiliacion;

  const [
    nombreInstitucionPublica,
    numeroPolizaInstitucionPublica,
    derechoHabienciaInstitucionPublica,
    observacionesInstitucionPublica,
    nombreAseguradoras,
    numeroPolizaAseguradoras,
    derechoHabienciaAseguradoras,
    observacionesAseguradoras,
    nombreParticular,
    numeroPolizaParticular,
    derechoHabienciaParticular,
    observacionesParticular
  ] = inputStringValuesAfiliacion;

  const [
    nombreCompleto,
    correo,
    provincia,
    cum,
    fechaNacimiento,
    grupo,
    seccion,
    alerta
  ] = inputValuesIdentificacion;

  const [
    grupoRH,
    peso,
    talla,
    imc,
    alimentacion,
    alergias, 
    tratamientosActuales,
    descripcionTratamientoMedico
  ] = inputValuesMedicos;

  const [
    cambiosAlimentacion,
    aislamientoPersonal,
    sensacionVacio,
    impotenciaDesesperanza,
    confusion,
    pensamiento,
    pensarLastimarse,
    alteracionesSueno,
    agotamientoExcesivo,
    doloresInexplicables,
    aumentoToxicomania,
    cambioHumor,
    escucharVoces,
    dificultadTareasDiarias
  ] = inputBooleanValuesPsicologicos;

  const [
    cambioAlimentacionEspecifique,
    aislamientoPersonalEspecifique,
    sensacionVacioEspecifique,
    impotenciaDesesperanzaEspecifique,
    confusionEspecifique,
    pensamientoEspecifique,
    pensarLastimarseEspecifique,
    alteracionesSuenoEspecifique,
    agotamientoExcesivoEspecifique,
    doloresInexplicablesEspecifique,
    aumentoToxicomaniaEspecifique,
    cambioHumorEspecifique,
    escucharVocesEspecifique,
    dificultadTareasDiariasEspecifique
  ] = inputStringValuesPsicologicos;



  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const data = {
      nombre: nombreCompleto,
      email: correo,
      provincia,
      cum,
      fecha_nacimiento: fechaNacimiento,
      grupo,
      seccion,
      alerta: alerta===""?'-':alerta,
      grupoRH,
      peso,
      talla,
      imc,
      alimentacion,
      alergias: alergias===""?'-':alergias,
      tratamientosActuales: tratamientosActuales===""?'-':tratamientosActuales,
      descripcionTratamientoMedico: tratamientosActuales===""?'-':descripcionTratamientoMedico,
      // Proveedores
      nombreProveedorInstituciones: nombreInstitucionPublica,
      numeroPolizaProveedorInstituciones: numeroPolizaInstitucionPublica,
      derechoHabienciaProveedorInstituciones: derechoHabienciaInstitucionPublica,
      observacionesProveedorInstituciones: observacionesInstitucionPublica,
      nombreProveedorAseguradoras: nombreAseguradoras,
      numeroPolizaProveedorAseguradoras: numeroPolizaAseguradoras,
      derechoHabienciaProveedorAseguradoras: derechoHabienciaAseguradoras,
      observacionesProveedorAseguradoras: observacionesAseguradoras,
      nombreProveedorParticular: nombreParticular,
      numeroPolizaProveedorParticular: numeroPolizaParticular,
      derechoHabienciaProveedorParticular: derechoHabienciaParticular,
      observacionesProveedorParticular: observacionesParticular,
      // Historial médico - Especifique (inputStringValuesHistorial)
      diabetesEspecifique,
      respiratoriosEspecifique,
      hipertensionEspecifique,
      oftalmicosEspecifique,
      eventoEpilepticoEspecifique,
      narizOidosEspecifique: narizYuOidosEspecifique,
      problemaCardiacoEspecifique,
      neurologicosEspecifique,
      desmayoMareoEspecifique,
      hematologicosEspecifique,
      asmaEspecifique,
      hepaticosEspecifique,
      toxicomaniasEspecifique,
      aparatoDigestivoEspecifique,
      cirugiaRecienteEspecifique,
      tiroideoEspecifique,
      embarazoPuerperioEspecifique,
      dermatologicoEspecifique: dermatologicosEspecifique,
      transfucionEspecifique,
      inmunologicosEspecifique,
      lesionMusculoEsqueleticaEspecifique,
      urinariosEspecifique,
      ortopedicosEspecifique,
      covidEspecifique: covid19Especifique,
      // Historial médico - Booleanos (inputBooleanValuesHistorial)
      diabetes: diabetes ? 'Si' : 'No',
      respiratorios: respiratorios ? 'Si' : 'No',
      hipertension: hipertension ? 'Si' : 'No',
      oftalmicos: oftalmicos ? 'Si' : 'No',
      eventoEpileptico: eventoEpileptico ? 'Si' : 'No',
      narizOidos: narizYuOidos ? 'Si' : 'No',
      problemaCardiaco: problemaCardiaco ? 'Si' : 'No',
      neurologicos: neurologicos ? 'Si' : 'No',
      desmayoMareo: desmayoMareo ? 'Si' : 'No',
      hematologicos: hematologicos ? 'Si' : 'No',
      asma: asma ? 'Si' : 'No',
      hepaticos: hepaticos ? 'Si' : 'No',
      toxicomanias: toxicomanias ? 'Si' : 'No',
      aparatoDigestivo: aparatoDigestivo ? 'Si' : 'No',
      cirugiaReciente: cirugiaReciente ? 'Si' : 'No',
      tiroideo: tiroideo ? 'Si' : 'No',
      embarazoPuerperio: embarazoPuerperio ? 'Si' : 'No',
      dermatologico: dermatologicos ? 'Si' : 'No',
      transfucion: transfucion ? 'Si' : 'No',
      inmunologicos: inmunologicos ? 'Si' : 'No',
      lesionMusculoEsqueletica: lesionMusculoEsqueletica ? 'Si' : 'No',
      urinarios: urinarios ? 'Si' : 'No',
      ortopedicos: ortopedicos ? 'Si' : 'No',
      covid: covid19 ? 'Si' : 'No',
      // Psicologicos
      cambioAlimentacion: cambiosAlimentacion ? 'Si' : 'No',
      aislamientoPersonal: aislamientoPersonal ? 'Si' : 'No',
      sensacionVacio: sensacionVacio ? 'Si' : 'No',
      impotenciaDesesperanza: impotenciaDesesperanza ? 'Si' : 'No',
      confunsion: confusion ? 'Si' : 'No',
      pensamiento: pensamiento ? 'Si' : 'No',
      pensarLastimarse: pensarLastimarse ? 'Si' : 'No',
      alteracionesSueño: alteracionesSueno ? 'Si' : 'No',
      agotamientoExcesivo: agotamientoExcesivo ? 'Si' : 'No',
      doloresInexplicables: doloresInexplicables ? 'Si' : 'No',
      aumentoToxicomania: aumentoToxicomania ? 'Si' : 'No',
      cambioHumor: cambioHumor ? 'Si' : 'No',
      escucharVoces: escucharVoces ? 'Si' : 'No',
      dificultadTareasDiarias: dificultadTareasDiarias ? 'Si' : 'No',
      //Psicologicos String
      cambioAlimentacionEspecifique,
      aislamientoPersonalEspecifique,
      sensacionVacioEspecifique,
      impotenciaDesesperanzaEspecifique,
      confunsionEspecifique: confusionEspecifique,
      pensamientoEspecifique,
      pensarLastimarseEspecifique,
      alteracionesSueñoEspecifique:alteracionesSuenoEspecifique,
      agotamientoExcesivoEspecifique,
      doloresInexplicablesEspecifique,
      aumentoToxicomaniaEspecifique,
      cambioHumorEspecifique,
      escucharVocesEspecifique,
      dificultadTareasDiariasEspecifique
    };

    console.log(data);

    try {
      const response = await axios.post("http://localhost:8000/api/ficha-medica/", data);
      console.log("Respuesta de la API:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const isFormValid = () => {

    return (
      nombreCompleto.trim() !== "" &&
      correo.trim() !== "" &&
      provincia.trim() !== "" &&
      cum.trim() !== "" &&
      fechaNacimiento.trim() !== "" &&
      grupo.trim() !== "" &&
      seccion.trim() !== "" &&
      peso.trim() !== "" &&
      talla.trim() !== "" &&
      alimentacion.trim() !== "" &&
      grupoRH.trim() !== ""
    );
  };


  return (
    <div className="min-h-screen w-full bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8 px-4 sm:px-6 lg:px-8">
          Ficha Médica
        </h2>
        
        <div className="sm:p-6 lg:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Tabs 
              className="w-full"
              classNames={{
                tabList: "gap-4 w-full relative rounded-none p-0 border-b border-divider md:gap-6 justify-start overflow-x-auto",
                cursor: "w-full",
                tab: "max-w-fit px-2 h-12",
                tabContent: "group-data-[selected=true]:text-primary"
              }}
            >
              <Tab 
                key="datos_Identificacion" 
                title="Datos Identificación"
                className="p-0 sm:p-2"
              >
                <div className="mt-4 space-y-4">
                  <DatosIdentificacion />
                </div>
              </Tab>
              
              <Tab 
                key="datos_Medicos" 
                title="Datos Médicos"
                className="p-0 sm:p-2"
              >
                <div className="mt-4">
                  <DatosMedicos />
                </div>
              </Tab>
              
              <Tab 
                key="datos_Servicios_Salud" 
                title="Servicios Salud"
                className="p-0 sm:p-2"
              >
                <div className="mt-4">
                  <DatosAfilicacionServiciosSalud />
                </div>
              </Tab>
              
              <Tab 
                key="Historial_Medico" 
                title="Historial Médico"
                className="p-0 sm:p-2"
              >
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DatosHistorialMedico />
                </div>
              </Tab>
              
              <Tab 
                key="antecedentes_Psicologicos" 
                title="Antecedentes Psicológicos"
                className="p-0 sm:p-2"
              >
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DatosAntecedentesPsicologicos />
                </div>
              </Tab>
            </Tabs>

            <div className="mt-6 px-4 sm:px-6 lg:px-8">
              <Button
                type="submit"
                color="primary"
                className="w-full max-w-md mx-auto block"
                size="lg"
                isDisabled={!isFormValid()}
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
