import { useCallback } from "react";

export function useFilter(name, type) {
  // Normalize 'name', 'type', to lowercase or set them to an empty string if they're null or undefined.
  // This ensures consistent comparison and avoids potential errors with toLowerCase().
  name = (name ?? '').toLowerCase();
  type = (type ?? '').toLowerCase();

  return useCallback(
    function (data) {
      const isNameMatch = !name || data.name.toLowerCase().includes(name);
      const isTypeMatch = type === 'municipios' || data.type.includes(type);
      return isNameMatch && isTypeMatch;
    },
    [name, type]
  );
}


// Lista de documetos
export const datosBibliotecaDigital = {
  cardInfo: ["A-Z", "Año"],
  category_mun: [
    "Municipios",
    "Mineral de la Reforma",
    "Pachuca de Soto",
    "Villa de Tezontepec",
    "Alfajayucan",
    "Tizayuca",
  ],
  cards: [
    {
      "name": "Comités Vecinales - Visión Plural para el Desarrollo Municipal",
      "municipio": ["mineral de la reforma"],
      "description": "El proyecto consiste en un órgano de representación vecinal electo democraticamente por los demás vecinos con el objetivo de fortelecer el proceso de planeación democrática y participativa en la toma de decisiones del desarrollo municipal.",
      "año": "2023",
      "ftSrc": "https://drive.google.com/file/d/16MMmKWs44mL3Vu2k8oherIeTOwJgML1j/view?usp=sharing",
      "peSrc": "https://drive.google.com/file/d/1diMwlq4ji-hc-jL27ffq_NCy7w2xRE60/view?usp=sharing",
      "projectsIndex": "1"
    },
    {
      "name": "Plataformas de Participación Ciudadana para la Construcción y Actualización del PMD 2020-2023",
      "municipio": ["pachuca de soto"],
      "description": "Creación y desarrollo de una plataforma alineada a los Planes Nacional y Estatal de Desarrollo derivado de un análisis profundo de las problemáticas relacionadas con la\nparticipación ciudadana, con la finalidad de recaudar las propuestas por parte de la ciudadanía y poder consultar y visualizar la informaciónde una manera mas dinámica.",
      "año": "2023",
      "ftSrc": "https://drive.google.com/file/d/1n76uMhyQSX5ZSkN43UT4gG5-7iICuWLV/view?usp=sharing",
      "peSrc": "https://drive.google.com/file/d/1f8j33GabW9HPgdVKJIz3blY7Qs_MvIgv/view?usp=drive_link",
      "projectsIndex": "2"
    },
    {
      "name": "Matriz de Indicadores Resultados 3T",
      "municipio": ["villa de tezontepec"],
      "description": "Creación de una Matriz de Indicadores de Resultados (MIR) de mejora continua, con el objetivo de crear programas presupuestales eficientes, optimizar el presupuesto y satisfacer las necesidades reales y actuales de la Ciudadanía.",
      "año": "2023",
      "ftSrc": "https://drive.google.com/file/d/1BazpOVCmj5CYxB8UeJRqxtlQjYWJqurD/view?usp=sharing",
      "peSrc": "https://drive.google.com/file/d/17vRAM85J5Zb7cAztneEhW6tqPTF34cUs/view?usp=sharing",
      "projectsIndex": "3"
    },
    {
      "name": "Observatorio de Políticas Públicas",
      "municipio": ["alfajayucan"],
      "description": "El proyecto consiste en un módulo de Observatorio de Políticas Públicas  que brinda información estratégica sobre el avance en la atención de problemas públicos con temáticas alineadas al Plan Municipal de Desarrollo y con dos componentes Diagnóstico y Acciones y Resultados, con el objetivo de mejorar la transparencia y rendición de cuentas del ejercicio del gasto público.",
      "año": "2023",
      "ftSrc": "https://drive.google.com/file/d/1-ZjpyZUnZfVSVAD7Ayi1ut2eEv0wiwJn/view?usp=sharing",
      "peSrc": "https://drive.google.com/file/d/1acVD8pHTXgPp2MBBs2L06rktDcKllYv-/view?usp=sharing",
      "projectsIndex": "4"
    },
    {
      "name": "Sistema de Evaluación del Desempeño",
      "municipio": ["tizayuca"],
      "description": "El Sistema de Evaluación de Desempeño del municipio es un instrumento utilizado para conocer el grado de cumplimiento de los resultados de los programas presupuestarios ejecutados por las unidades administrativas de la administración pública municipal, y tiene como finalidad lograr el cumplimiento de objetivos institucionales a través del seguimiento, monitoreo y evaluación de los indicadores estratégicos y de gestión, de los programas, planes y políticas públicas ejecutadas por la administración pública municipal.",
      "año": "2023",
      "ftSrc": "https://drive.google.com/file/d/1lVxO0L5KcfKuDaoUVyb3GBbeSue5o881/view?usp=sharing",
      "peSrc": "https://drive.google.com/file/d/1dtU2ahN8nxI2d_B3pwfrBup_Uq2zoX6F/view?usp=sharing",
      "projectsIndex": "5"
    }  
  ]
};

