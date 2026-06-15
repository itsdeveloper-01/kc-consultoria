import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import BackToTopButton from "../components/back-to-top-button";
import CasesCarousel from "../components/cases-carousel";
import ContactForm from "../components/contact-form";
import FAQSection from "../components/faq-section";
import NewsSection from "../components/news-section";
import VideoSection from "../components/video-section";
import ScrollEffects from "../components/scroll-effects";
import SiteHeader, { type NavItem } from "../components/site-header";

const navItems: NavItem[] = [
  { type: "link", label: "Nosotros", href: "#acerca" },
  {
    type: "dropdown",
    label: "Servicios",
    groups: [
      {
        title: "Empresas",
        items: [
          { label: "Consultoría Jurídica", href: "#servicio-consultoria-juridica" },
          { label: "Consultoría Contable y Fiscal", href: "#servicio-consultoria-contable-y-fiscal" },
          { label: "Auditorías", href: "#servicio-auditorias" },
          { label: "Consultoría Estratégica", href: "#servicio-consultoria-estrategica" },
          { label: "Reclutamiento y Capacitación", href: "#servicio-reclutamiento-y-capacitacion" },
        ],
      },
      {
        title: "Trabajadores",
        items: [
          { label: "Seguridad Social", href: "#servicio-seguridad-social" },
          { label: "Pensiones y Modalidad 40", href: "#servicio-pensiones-y-modalidad-40" },
        ],
      },
    ],
  },
  { type: "link", label: "Casos de éxito", href: "#casos" },
  {
    type: "dropdown",
    label: "Legislación",
    groups: [
      {
        title: "Legislación general",
        items: [
          { label: "Constitución Política de los Estados Unidos Mexicanos", href: "#ley-cpeum" },
          { label: "Ley Federal del Trabajo", href: "#ley-lft" },
          { label: "Ley de Amparo", href: "#ley-lamp" },
          { label: "Código Civil Federal", href: "#ley-ccf" },
          { label: "Código Nacional de Procedimientos Civiles y Familiares", href: "#ley-cnpcyf" },
          { label: "Código Penal Federal", href: "#ley-cpf" },
          { label: "Código Nacional de Procedimientos Penales", href: "#ley-cnpp" },
          { label: "Código Fiscal de la Federación", href: "#ley-cff" },
        ],
      },
      {
        title: "Seguridad Social",
        items: [
          { label: "Ley del Seguro Social", href: "#ley-lss" },
          { label: "Reglamento de Afiliación, Clasificación, Recaudación y Fiscalización", href: "#ley-lss-acerf" },
          { label: "Reglamento de Prestaciones Médicas del IMSS", href: "#ley-rpmimss" },
          { label: "Reglamento Interior del IMSS", href: "#ley-riimss" },
          { label: "Acuerdos y Criterios del IMSS", href: "#ley-acuerdos-imss" },
        ],
      },
      {
        title: "INFONAVIT",
        items: [
          { label: "Ley del INFONAVIT", href: "#ley-linfonavit" },
          { label: "Reglamento de Inscripción, Pago de Aportaciones y Entero de Descuentos", href: "#ley-infonavit-aportaciones" },
          { label: "Marco Jurídico INFONAVIT", href: "#ley-marco-juridico-infonavit" },
        ],
      },
      {
        title: "Laboral",
        items: [
          { label: "Normas Oficiales Mexicanas de Seguridad y Salud en el Trabajo", href: "#ley-nom-seguridad-salud-trabajo" },
          { label: "Jurisprudencia Laboral", href: "#ley-jurisprudencia-laboral" },
        ],
      },
      {
        title: "Fiscal",
        items: [
          { label: "Ley del Impuesto sobre la Renta", href: "#ley-lisr" },
          { label: "Ley del Impuesto al Valor Agregado", href: "#ley-liva" },
          { label: "Resolución Miscelánea Fiscal", href: "#ley-rmf" },
        ],
      },
      {
        title: "Pensiones",
        items: [
          { label: "Ley del Seguro Social de 1973", href: "#ley-lss-1973" },
          { label: "Ley del Seguro Social de 1997", href: "#ley-lss-1997" },
          { label: "Modalidad 40", href: "#ley-modalidad-40" },
          { label: "Criterios Judiciales en Materia de Pensiones", href: "#ley-criterios-pensiones" },
        ],
      },
      {
        title: "Jurisprudencia y criterios",
        items: [
          { label: "Tesis Aisladas", href: "#ley-tesis-aisladas" },
          { label: "Jurisprudencias", href: "#ley-jurisprudencias" },
          { label: "Criterios de Tribunales Laborales", href: "#ley-criterios-tribunales-laborales" },
          { label: "Criterios Relevantes de la Suprema Corte de Justicia de la Nación", href: "#ley-criterios-scjn" },
        ],
      },
    ],
  },
  { type: "link", label: "Contacto", href: "#contacto" },
];


const principals: {
  role: string;
  title: string;
  copy: string | string[];
  cta?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: string;
  visualSide: "left" | "right";
  items: { id: string; title: string; copy: string }[];
}[] = [
  {
    role: "Directora del Área Jurídica",
    title: "LIC. KARLA RUBI RAMIREZ AGUILAR",
    copy: [
      "Profesional del derecho enfocada en la asesoría, representación y defensa de los intereses de trabajadores, empresas y particulares. Su práctica se centra en las áreas laboral, corporativa, administrativa y de seguridad social.",
      "Su compromiso con la excelencia profesional, la atención personalizada y la defensa de los derechos de sus clientes le ha permitido construir relaciones de confianza y ofrecer soluciones jurídicas efectivas y oportunas.",
    ],
    imageSrc: "/images/abogada.jpeg",
    imageAlt: "Retrato profesional de la abogada principal de KC Despacho Jurídico y Contable.",
    imagePosition: "object-[52%_26%]",
    visualSide: "right" as const,
    items: [
      {
        id: "I",
        title: "Estructura legal",
        copy: "Revisión y definición de marcos societarios, contratos y riesgos clave.",
      },
      {
        id: "II",
        title: "Prevención y cumplimiento",
        copy: "Criterio práctico para evitar contingencias y ordenar decisiones sensibles.",
      },
      {
        id: "III",
        title: "Negociación y respaldo",
        copy: "Acompañamiento cercano en procesos que requieren firmeza y precisión.",
      },
    ],
  },
  {
    role: "Director del Área Contable, Fiscal y de Seguridad Social",
    title: "MTRO. JUAN CARLOS RAMIREZ HERNANDEZ",
    copy: [
      "Especialista en consultoría contable, fiscal y seguridad social, con amplia experiencia en el acompañamiento de empresas y particulares en el cumplimiento de obligaciones fiscales, auditorías, estrategias financieras y gestión ante instituciones de seguridad social.",
      "Su trayectoria profesional se ha distinguido por la implementación de soluciones orientadas a la prevención de riesgos, la optimización de recursos y el fortalecimiento de la seguridad jurídica de sus clientes.",
    ],
    imageSrc: "/images/contador.jpeg",
    imageAlt: "Retrato profesional del contador principal de KC Despacho Jurídico y Contable.",
    imagePosition: "object-[48%_24%]",
    visualSide: "left" as const,
    items: [
      {
        id: "I",
        title: "Diagnóstico financiero",
        copy: "Lectura precisa de procesos, cifras y puntos de fricción operativa.",
      },
      {
        id: "II",
        title: "Planeación fiscal",
        copy: "Estrategias accionables adaptadas a la realidad y etapa de la empresa.",
      },
      {
        id: "III",
        title: "Control y continuidad",
        copy: "Decisiones pensadas para orden, cumplimiento y crecimiento sostenible.",
      },
    ],
  },
];

const audienceCards = [
  {
    id: "empresas",
    audience: "Para Empresas",
    intro:
      "Asesoramos en el cumplimiento de obligaciones ante IMSS, INFONAVIT y otras autoridades, ayudando a prevenir riesgos, optimizar procesos y fortalecer la seguridad jurídica de tu organización.",
    description:
      "Nuestros servicios para empresas están orientados a prevenir riesgos, optimizar procesos y fortalecer el cumplimiento en materia de seguridad social.",
    items: [
      "Registro patronal y cumplimiento de obligaciones ante IMSS e INFONAVIT.",
      "Auditorías preventivas y diagnósticos de seguridad social.",
      "Corrección de inconsistencias y regularización patronal.",
      "Atención de requerimientos, auditorías y actos de fiscalización.",
      "Determinación y revisión de cuotas obrero-patronales.",
      "Estrategias de prevención de contingencias laborales y de seguridad social.",
      "Asesoría en subcontratación, prestación de servicios especializados y REPSE.",
      "Defensa jurídica en procedimientos administrativos y medios de impugnación.",
      "Capacitación a áreas de Recursos Humanos y nóminas.",
    ],
  },
  {
    id: "trabajadores",
    audience: "Para Trabajadores",
    intro:
      "Brindamos orientación y acompañamiento en trámites, pensiones, incapacidades, riesgos de trabajo, semanas cotizadas y demás derechos en materia de seguridad social, para que recibas las prestaciones que te corresponden.",
    description:
      "Protegemos y defendemos los derechos de los trabajadores ante instituciones de seguridad social, brindando acompañamiento personalizado en cada etapa del trámite o procedimiento.",
    items: [
      "Pensiones por cesantía, vejez e invalidez.",
      "Revisión de semanas cotizadas y corrección de inconsistencias.",
      "Asesoría en modalidad 40 y continuidad voluntaria.",
      "Recuperación y aclaración de derechos ante IMSS e INFONAVIT.",
      "Trámites relacionados con incapacidades y riesgos de trabajo.",
      "Orientación sobre prestaciones de seguridad social.",
      "Defensa de derechos derivados de negativas o resoluciones administrativas.",
      "Asesoría para obtener la mejor estrategia de pensión conforme al régimen aplicable.",
    ],
  },
];

const servicioCards = [
  {
    id: "servicio-consultoria-contable-y-fiscal",
    title: "Consultoría Contable y Fiscal",
    description:
      "Brindamos soluciones integrales para una correcta gestión contable y fiscal, ayudando a maximizar recursos y garantizar el cumplimiento normativo.",
  },
  {
    id: "servicio-consultoria-juridica-corporativa",
    title: "Consultoría Jurídica Corporativa",
    description:
      "Asesoría legal estratégica para proteger y fortalecer tu empresa en cada etapa de su crecimiento, desde su constitución hasta la toma de decisiones clave.",
  },
  {
    id: "servicio-consultoria-juridica-laboral",
    title: "Consultoría Jurídica Laboral",
    description:
      "Asesoría y representación legal a trabajadores para la defensa de sus derechos laborales. Te acompañamos en casos de despido injustificado, cálculo de finiquito o liquidación, prestaciones, contratos de trabajo, acoso laboral y cualquier situación que afecte tu relación laboral.",
  },
  {
    id: "servicio-auditorias",
    title: "Auditorías",
    description:
      "Evaluamos procesos, controles y cumplimiento normativo para identificar riesgos, detectar oportunidades de mejora y fortalecer la operación de tu empresa.",
  },
  {
    id: "servicio-consultoria-estrategica",
    title: "Consultoría Estratégica",
    description:
      "Impulsamos el crecimiento de tu negocio mediante análisis, planeación y estrategias enfocadas en mejorar la competitividad y alcanzar tus objetivos.",
  },
  {
    id: "servicio-reclutamiento-y-capacitacion",
    title: "Reclutamiento y Capacitación Empresarial",
    description:
      "Atraemos el talento adecuado para tu organización y fortalecemos las habilidades de tu equipo mediante programas de capacitación orientados a resultados.",
  },
];

const legislationGroups = [
  {
    title: "Legislación general",
    description: "Normatividad base para consulta jurídica, laboral, civil, penal y fiscal en el marco federal mexicano.",
    items: [
      {
        id: "ley-cpeum",
        title: "Constitución Política de los Estados Unidos Mexicanos",
        copy: "Norma suprema del orden jurídico mexicano que reconoce y protege los derechos fundamentales, incluyendo los derechos laborales y de seguridad social.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf",
      },
      {
        id: "ley-lft",
        title: "Ley Federal del Trabajo",
        copy: "Norma principal que regula las relaciones laborales entre trabajadores y empleadores así como sus derechos y obligaciones.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf",
      },
      {
        id: "ley-lamp",
        title: "Ley de Amparo",
        copy: "Regula el juicio de amparo como medio de protección de los derechos humanos frente a actos de autoridad.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LAmp.pdf",
      },
      {
        id: "ley-ccf",
        title: "Código Civil Federal",
        copy: "Establece las disposiciones que regulan las relaciones entre particulares en materia de personas, bienes, obligaciones y contratos.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CCF.pdf",
      },
      {
        id: "ley-cnpcyf",
        title: "Código Nacional de Procedimientos Civiles y Familiares",
        copy: "Normativa que regula los procedimientos judiciales en materia civil y familiar.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CNPCyF.pdf",
      },
      {
        id: "ley-cpf",
        title: "Código Penal Federal",
        copy: "Define los delitos del orden federal y las sanciones aplicables.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPF.pdf",
      },
      {
        id: "ley-cnpp",
        title: "Código Nacional de Procedimientos Penales",
        copy: "Regula el procedimiento penal acusatorio en México.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CNPP.pdf",
      },
      {
        id: "ley-cff",
        title: "Código Fiscal de la Federación",
        copy: "Regula las facultades de las autoridades fiscales y los derechos y obligaciones de los contribuyentes.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf",
      },
    ],
  },
  {
    title: "Seguridad Social",
    description: "Ordenamiento aplicable a aseguramiento, afiliación, prestaciones, organización institucional y criterios operativos del IMSS.",
    items: [
      {
        id: "ley-lss",
        title: "Ley del Seguro Social",
        copy: "Norma fundamental que regula los derechos y obligaciones de trabajadores, patrones y del Instituto Mexicano del Seguro Social.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf",
      },
      {
        id: "ley-lss-acerf",
        title: "Reglamento de la Ley del Seguro Social en Materia de Afiliación, Clasificación de Empresas, Recaudación y Fiscalización",
        copy: "Regula los procedimientos relacionados con el registro patronal, clasificación de empresas, afiliación de trabajadores y determinación de cuotas.",
        href: "https://www.imss.gob.mx/sites/all/statics/pdf/reglamentos/LSS_ACERF.pdf",
      },
      {
        id: "ley-rpmimss",
        title: "Reglamento de Prestaciones Médicas del IMSS",
        copy: "Establece las reglas para el otorgamiento de servicios médicos y prestaciones en especie a los derechohabientes.",
        href: "https://www.imss.gob.mx/sites/all/statics/pdf/reglamentos/4045_RPMIMSS.pdf",
      },
      {
        id: "ley-riimss",
        title: "Reglamento Interior del IMSS",
        copy: "Define la organización, facultades y funcionamiento interno del Instituto Mexicano del Seguro Social.",
        href: "https://www.imss.gob.mx/sites/all/statics/pdf/reglamentos/RIIMSS.pdf",
      },
      {
        id: "ley-acuerdos-imss",
        title: "Acuerdos y Criterios del IMSS",
        copy: "Compilación de acuerdos, lineamientos y criterios institucionales de aplicación práctica.",
        href: "https://www.imss.gob.mx/conoce-al-imss/marco-normativo",
      },
    ],
  },
  {
    title: "INFONAVIT",
    description: "Normativa vinculada a vivienda para trabajadores, aportaciones patronales, descuentos y consulta jurídica institucional.",
    items: [
      {
        id: "ley-linfonavit",
        title: "Ley del INFONAVIT",
        copy: "Regula la integración y funcionamiento del Instituto del Fondo Nacional de la Vivienda para los Trabajadores.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LINFONAVIT.pdf",
      },
      {
        id: "ley-infonavit-aportaciones",
        title: "Reglamento de Inscripción, Pago de Aportaciones y Entero de Descuentos",
        copy: "Establece las obligaciones patronales relacionadas con aportaciones y descuentos de créditos de vivienda.",
        href: "https://portalmx.infonavit.org.mx/wps/wcm/connect/infonavit/el+instituto/marco+juridico",
      },
      {
        id: "ley-marco-juridico-infonavit",
        title: "Marco Jurídico INFONAVIT",
        copy: "Consulta integral de reglamentos, acuerdos y disposiciones vigentes emitidas por el Instituto.",
        href: "https://portalmx.infonavit.org.mx/wps/portal/infonavitmx/mx2/el_instituto/marco_juridico",
      },
    ],
  },
  {
    title: "Laboral",
    description: "Marco complementario en seguridad, salud y criterios jurisdiccionales para interpretar y aplicar la normativa laboral vigente.",
    items: [
      {
        id: "ley-nom-seguridad-salud-trabajo",
        title: "Normas Oficiales Mexicanas de Seguridad y Salud en el Trabajo",
        copy: "Disposiciones que establecen condiciones de seguridad, salud y prevención de riesgos laborales.",
        href: "https://www.gob.mx/stps/documentos/normas-oficiales-mexicanas-de-seguridad-y-salud-en-el-trabajo",
      },
      {
        id: "ley-jurisprudencia-laboral",
        title: "Jurisprudencia Laboral",
        copy: "Criterios judiciales relevantes para la interpretación y aplicación de la legislación laboral.",
        href: "https://sjf2.scjn.gob.mx/busqueda-principal-tesis",
      },
    ],
  },
  {
    title: "Fiscal",
    description: "Normativa tributaria esencial para consulta sobre renta, valor agregado y criterios operativos emitidos por la autoridad fiscal.",
    items: [
      {
        id: "ley-lisr",
        title: "Ley del Impuesto sobre la Renta",
        copy: "Norma que establece el régimen aplicable al impuesto sobre la renta.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf",
      },
      {
        id: "ley-liva",
        title: "Ley del Impuesto al Valor Agregado",
        copy: "Regula el impuesto aplicable a la enajenación de bienes, prestación de servicios y otras actividades gravadas.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LIVA.pdf",
      },
      {
        id: "ley-rmf",
        title: "Resolución Miscelánea Fiscal",
        copy: "Compendio anual de reglas emitidas por la autoridad fiscal para la correcta aplicación de las disposiciones tributarias.",
        href: "https://www.sat.gob.mx/normatividad",
      },
    ],
  },
  {
    title: "Pensiones",
    description: "Marco pensionario aplicable a regímenes previos y vigentes, así como referencias prácticas para modalidad 40 y defensa de derechos pensionarios.",
    items: [
      {
        id: "ley-lss-1973",
        title: "Ley del Seguro Social de 1973",
        copy: "Marco jurídico aplicable a trabajadores pertenecientes al régimen pensionario anterior a la reforma de 1997.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/abro/lss/LSS_abro.pdf",
      },
      {
        id: "ley-lss-1997",
        title: "Ley del Seguro Social de 1997",
        copy: "Regulación vigente del sistema pensionario basado en cuentas individuales.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf",
      },
      {
        id: "ley-modalidad-40",
        title: "Modalidad 40",
        copy: "Información oficial sobre la Continuación Voluntaria en el Régimen Obligatorio y sus beneficios para la pensión.",
        href: "https://www.imss.gob.mx/tramites/imss02007",
      },
      {
        id: "ley-criterios-pensiones",
        title: "Criterios Judiciales en Materia de Pensiones",
        copy: "Resoluciones y criterios relevantes para la defensa de derechos pensionarios.",
        href: "https://sjf2.scjn.gob.mx/busqueda-principal-tesis",
      },
    ],
  },
  {
    title: "Jurisprudencia y criterios",
    description: "Fuentes de consulta jurisdiccional y criterios interpretativos para analizar precedentes, tesis y resoluciones de impacto jurídico.",
    items: [
      {
        id: "ley-tesis-aisladas",
        title: "Tesis Aisladas",
        copy: "Criterios orientadores emitidos por órganos jurisdiccionales federales.",
        href: "https://sjf2.scjn.gob.mx/busqueda-principal-tesis",
      },
      {
        id: "ley-jurisprudencias",
        title: "Jurisprudencias",
        copy: "Criterios obligatorios que interpretan la legislación vigente.",
        href: "https://sjf2.scjn.gob.mx/busqueda-principal-tesis",
      },
      {
        id: "ley-criterios-tribunales-laborales",
        title: "Criterios de Tribunales Laborales",
        copy: "Resoluciones relevantes en materia laboral y de seguridad social.",
        href: "https://sjf2.scjn.gob.mx/busqueda-principal-tesis",
      },
      {
        id: "ley-criterios-scjn",
        title: "Criterios Relevantes de la Suprema Corte de Justicia de la Nación",
        copy: "Precedentes y criterios de alto impacto jurídico emitidos por el máximo tribunal del país.",
        href: "https://www.scjn.gob.mx",
      },
    ],
  },
] as const;

const bibliotecaGroups = [
  {
    title: "Guías y Artículos",
    description:
      "Recursos prácticos para entender tus derechos, obligaciones y trámites ante las instituciones de seguridad social.",
    items: [
      {
        id: "guia-semanas-cotizadas",
        title: "¿Cómo saber cuántas semanas cotizadas tengo en el IMSS?",
        href: "https://serviciosdigitales.imss.gob.mx/semanascotizadas-web/usuarios/IngresoAsegurado",
      },
      {
        id: "guia-modalidad-40",
        title: "Modalidad 40: ventajas, requisitos y errores más comunes.",
        href: "https://www.imss.gob.mx/tramites/imss02007",
      },
      {
        id: "guia-finiquito-liquidacion",
        title: "Diferencia entre finiquito y liquidación.",
        href: "https://www.gob.mx/profedet/articulos/finiquito-y-liquidacion",
      },
      {
        id: "guia-imss-niega-pension",
        title: "¿Qué hacer si el IMSS niega una pensión?",
        href: "https://www.gob.mx/profedet",
      },
      {
        id: "guia-corregir-datos-imss",
        title: "Guía para corregir datos personales ante el IMSS.",
        href: "https://www.imss.gob.mx/tramites/imss02001",
      },
      {
        id: "guia-obligaciones-imss",
        title: "Obligaciones patronales ante el IMSS",
        href: "https://www.imss.gob.mx/patrones",
      },
      {
        id: "guia-obligaciones-infonavit",
        title: "Obligaciones patronales ante INFONAVIT",
        href: "https://portalmx.infonavit.org.mx",
      },
      {
        id: "guia-riesgos-trabajo",
        title: "Riesgos de trabajo: derechos y obligaciones",
        href: "https://www.imss.gob.mx/faq/riesgos-de-trabajo",
      },
      {
        id: "guia-repse",
        title: "REPSE: aspectos clave para las empresas",
        href: "https://repse.stps.gob.mx",
      },
      {
        id: "guia-auditoria-imss",
        title: "Cómo prepararse para una auditoría del IMSS",
        href: "https://www.imss.gob.mx/patrones",
      },
    ],
  },
  {
    title: "Formatos y Recursos Descargables",
    description:
      "Accede directamente a los formatos, trámites y herramientas oficiales que necesitas para gestionar tus obligaciones o ejercer tus derechos.",
    items: [
      {
        id: "formato-checklist-pension",
        title: "Checklist para solicitar una pensión",
        href: "https://www.imss.gob.mx/pensiones",
      },
      {
        id: "formato-modalidad-40",
        title: "Guía de documentos para Modalidad 40",
        href: "https://www.imss.gob.mx/tramites/imss02007",
      },
      {
        id: "formato-calendario-patronal",
        title: "Calendario de obligaciones patronales",
        href: "https://www.sat.gob.mx/consultas/29684/calendario-del-contribuyente",
      },
      {
        id: "formato-semanas-cotizadas",
        title: "Consulta de semanas cotizadas",
        href: "https://serviciosdigitales.imss.gob.mx/semanascotizadas-web/usuarios/IngresoAsegurado",
      },
      {
        id: "formato-tramites-imss",
        title: "Formatos y escritos administrativos del IMSS",
        href: "https://www.imss.gob.mx/tramites",
      },
      {
        id: "formato-tramites-infonavit",
        title: "Formatos y trámites INFONAVIT",
        href: "https://portalmx.infonavit.org.mx",
      },
    ],
  },
  {
    title: "Actualizaciones Jurídicas",
    description:
      "Mantente al día con los cambios normativos, criterios judiciales y disposiciones fiscales que impactan tu actividad.",
    layout: "list" as const,
    items: [
      { id: "act-dof", title: "Diario Oficial de la Federación", href: "https://www.dof.gob.mx" },
      { id: "act-reformas-laborales", title: "Reformas laborales", href: "https://www.gob.mx/stps" },
      { id: "act-seguridad-social", title: "Actualizaciones en Seguridad Social", href: "https://www.imss.gob.mx" },
      { id: "act-infonavit", title: "Cambios y novedades INFONAVIT", href: "https://www.infonavit.org.mx" },
      { id: "act-tribunales", title: "Criterios relevantes de tribunales", href: "https://sjf2.scjn.gob.mx/busqueda-principal-tesis" },
      { id: "act-scjn", title: "Jurisprudencia de la Suprema Corte", href: "https://www.scjn.gob.mx" },
      { id: "act-fiscal", title: "Actualizaciones fiscales", href: "https://www.sat.gob.mx" },
      { id: "act-rmf", title: "Resolución Miscelánea Fiscal vigente", href: "https://www.sat.gob.mx/normatividad" },
    ],
  },
];

const cases = [
  {
    quote:
      "Estaba a punto de iniciar mi trámite de pensión cuando descubrí que tenía inconsistencias en mis semanas cotizadas. El despacho me acompañó en todo momento, resolvió mis dudas y logró que se corrigiera mi historial. Gracias a su apoyo pude continuar con mi trámite sin contratiempos. Recomiendo ampliamente sus servicios por su profesionalismo y atención personalizada.",
    author: "Yolanda, V.",
    role: "Cliente del área de Pensiones",
    area: "Pensiones",
  },
  {
    quote:
      "Buscaba una estrategia para mejorar mi futura pensión y no sabía si la Modalidad 40 era la mejor opción para mí. Recibí una asesoría clara, detallada y adaptada a mi situación. Hoy tengo la tranquilidad de saber que estoy tomando la mejor decisión para mi retiro. Recomiendo al despacho al 100%.",
    author: "Yadira, R.",
    role: "Cliente del área de Seguridad Social",
    area: "Seguridad Social",
  },
  {
    quote:
      "Como representante de una empresa, necesitábamos regularizar diversos aspectos relacionados con IMSS e INFONAVIT. El equipo nos brindó acompañamiento durante todo el proceso y nos ayudó a fortalecer nuestros controles internos. Su experiencia y conocimiento hicieron una gran diferencia. Sin duda volveríamos a trabajar con ellos.",
    author: "Griselda, R.",
    role: "Directora Administrativa",
    area: "IMSS e INFONAVIT",
  },
  {
    quote:
      "Tuve un problema relacionado con un riesgo de trabajo y desconocía cuáles eran mis derechos. Desde la primera consulta recibí orientación profesional y seguimiento constante. Gracias a ello pude obtener las prestaciones que me correspondían. Recomiendo ampliamente sus servicios.",
    author: "Natalia, A.",
    role: "Trabajador asesorado en materia de Seguridad Social",
    area: "Seguridad Social",
  },
  {
    quote:
      "Recibimos una revisión por parte de las autoridades y necesitábamos apoyo especializado para atenderla correctamente. El despacho nos acompañó durante todo el procedimiento, brindándonos seguridad y soluciones oportunas. Su atención fue excelente y los recomiendo totalmente.",
    author: "Pedro, T.",
    role: "Gerente de Recursos Humanos",
    area: "Revisión de autoridades",
  },
  {
    quote:
      "Mi trámite de pensión parecía complicado y tenía muchas dudas sobre los requisitos y documentos necesarios. Gracias a la asesoría recibida, el proceso fue mucho más sencillo de lo que imaginaba. Siempre estuvieron disponibles para resolver mis inquietudes. Los recomiendo por su profesionalismo y compromiso.",
    author: "Cliente en proceso pensionario",
    role: "Caso de pensión asesorado",
    area: "Pensiones",
  },
  {
    quote:
      "Contratamos una auditoría preventiva en materia de seguridad social y los resultados superaron nuestras expectativas. Detectaron áreas de oportunidad que no habíamos identificado y nos ayudaron a corregirlas oportunamente. Recomiendo al despacho por su conocimiento técnico y trato cercano.",
    author: "Victor, M.",
    role: "Empresario del sector servicios",
    area: "Auditoría preventiva",
  },
];

const caseDisclaimer =
  "Por razones de confidencialidad y protección de datos personales, los nombres y datos específicos de nuestros clientes han sido omitidos.";

const approachItems = [
  {
    id: "1",
    title: "Misión",
    copy: "Brindar servicios jurídicos, contables, fiscales y de seguridad social con los más altos estándares de calidad, profesionalismo y ética, contribuyendo a la protección de los intereses y al crecimiento de nuestros clientes mediante soluciones integrales, estratégicas y personalizadas.",
  },
  {
    id: "2",
    title: "Visión",
    copy: "Consolidarnos como una firma líder en consultoría jurídica, contable y de seguridad social en México, reconocida por su excelencia profesional, innovación, confianza y compromiso con los resultados de nuestros clientes.",
  },
  {
    id: "3",
    title: "Meta",
    copy: "Ser el despacho de referencia en materia de seguridad social, pensiones, consultoría jurídica y contable, expandiendo nuestra presencia a nivel nacional y fortaleciendo continuamente nuestros servicios para ofrecer soluciones integrales de alto valor.",
  },
];

const values = [
  "Profesionalismo",
  "Ética",
  "Honestidad",
  "Responsabilidad",
  "Confidencialidad",
  "Compromiso",
  "Excelencia",
  "Atención personalizada",
] as const;


export default function Home() {
  return (
    <>
      <main className="bg-[var(--color-cream)] text-[var(--color-ink)]">
        <SiteHeader items={navItems} />

        <section className="relative isolate overflow-hidden bg-[var(--color-navy)] text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-banner-1.png"
              alt="Oficinas principales de KC Despacho Jurídico y Contable."
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,18,36,0.86)_0%,rgba(3,18,36,0.74)_28%,rgba(3,18,36,0.34)_58%,rgba(3,18,36,0.68)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,36,0.28)_0%,rgba(3,18,36,0.08)_32%,rgba(3,18,36,0.52)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,154,59,0.18),transparent_28%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[760px] max-w-[1728px] flex-col justify-between px-5 pb-10 pt-28 sm:px-8 lg:min-h-[820px] lg:px-10 lg:pt-36">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,680px)_1fr] lg:items-center">
              <div className="max-w-[660px] space-y-7" data-reveal="up">
                <h1 className="max-w-[11ch] text-balance text-5xl font-medium leading-[0.92] tracking-[-0.065em] text-white sm:text-6xl lg:text-[5.25rem]">
                  Estrategias integrales para desafíos complejos
                </h1>
                <p className="max-w-[50ch] text-left text-pretty text-base leading-7 text-white/80 sm:text-[1.05rem]">
                  Con más de 30 años de experiencia, brindamos asesoría profesional y de excelencia en soluciones jurídicas y contables,
                  acompañando a las empresas en cada etapa de su crecimiento y consolidación.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a className="kc-button-solid" href="#contacto">
                    Agendar una consulta
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                  </a>
                  <a className="kc-button-outline" href="#casos">
                    Ver casos de éxito
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1728px] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="border-b border-black/8 pb-14 lg:pb-18">
            <div className="space-y-3" data-reveal="up">
              <p className="kc-kicker">Quiénes somos</p>
              <h2 className="text-[2.2rem] font-medium leading-[0.96] tracking-[-0.05em] text-[var(--color-ink)] sm:text-[2.8rem] lg:text-[3.35rem]">
                Una firma construida desde la confianza
              </h2>
            </div>

            <div className="mt-10 grid gap-x-10 gap-y-6 lg:grid-cols-3" data-reveal="up">
              <p className="text-base leading-8 text-[var(--color-muted)] sm:text-[1.04rem]">
                KC Despacho Jurídico y Contable es una firma especializada en consultoría jurídica, contable, fiscal y de seguridad social, comprometida con brindar soluciones integrales a empresas, trabajadores y particulares.
              </p>
              <p className="text-base leading-8 text-[var(--color-muted)] sm:text-[1.04rem]">
                Con más de 30 años de experiencia acumulada, nuestro equipo combina conocimientos técnicos, visión estratégica y atención personalizada para ofrecer servicios de excelencia que generan confianza, seguridad jurídica y resultados.
              </p>
              <div className="space-y-6 text-base leading-8 text-[var(--color-muted)] sm:text-[1.04rem]">
                <p>
                  Nos distinguimos por nuestro compromiso con la ética profesional, la actualización constante y la búsqueda de soluciones eficientes para nuestros clientes, brindando atención profesional en Veracruz, Ciudad de México y Monterrey para atender a clientes de distintas regiones del país.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="acerca" className="mx-auto max-w-[1728px] px-5 py-[4.5rem] sm:px-8 lg:px-10 lg:py-[7.5rem]">
          <div className="space-y-14 lg:space-y-[4.75rem]">
            {principals.map((principal, index) => (
              <div
                key={principal.role}
                className={`grid gap-x-12 gap-y-8 lg:gap-x-16 lg:gap-y-10 ${
                  principal.visualSide === "left"
                    ? "lg:grid-cols-[minmax(0,1.14fr)_minmax(360px,0.86fr)]"
                    : "lg:grid-cols-[minmax(360px,0.86fr)_minmax(0,1.14fr)]"
                } ${index > 0 ? "border-t border-black/8 pt-14 lg:pt-[4.75rem]" : ""}`}
              >
                {principal.visualSide === "left" ? (
                  <>
                    <div
                      className="group order-2 self-start overflow-hidden border border-black/10 bg-[var(--color-surface)] shadow-[0_28px_80px_rgba(6,27,51,0.09)] lg:order-1"
                      data-reveal="fade"
                    >
                      <div className="relative aspect-[1.2/1] min-h-[360px] w-full overflow-hidden">
                        <Image
                          src={principal.imageSrc}
                          alt={principal.imageAlt}
                          fill
                          sizes="(max-width: 1023px) 100vw, 58vw"
                          className={`object-cover transition-transform duration-700 group-hover:scale-[1.02] ${principal.imagePosition}`}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,248,0.03)_0%,rgba(3,18,36,0.12)_100%)]" />
                      </div>
                    </div>

                    <div className="order-1 space-y-10 lg:order-2 lg:self-center lg:pt-6">
                      <div className="space-y-6" data-reveal="up">
                        <div className="space-y-3">
                          <p className="kc-kicker">Perfil contable</p>
                          <h3 className="max-w-[16ch] text-balance text-[2rem] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--color-ink)] sm:text-[2.35rem] lg:text-[2.75rem]">
                            {principal.title}
                          </h3>
                          <p className="text-[0.96rem] font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                            {principal.role}
                          </p>
                        </div>

                        <div className="max-w-[52ch] space-y-5">
                          {(Array.isArray(principal.copy) ? principal.copy : [principal.copy]).map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-base leading-8 text-[var(--color-muted)] sm:text-[1.04rem]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-6 border-t border-black/8 pt-8 sm:grid-cols-3 sm:gap-5 lg:pt-9">
                        {principal.items.map((item) => (
                          <article key={item.id} className="space-y-3" data-reveal="up">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold)]/28 text-xs text-[var(--color-gold)]">
                              {item.id}
                            </div>
                            <h4 className="max-w-[14ch] text-[1.08rem] font-medium leading-6 text-[var(--color-ink)]">{item.title}</h4>
                            <p className="max-w-[24ch] text-sm leading-6 text-[var(--color-muted)]">{item.copy}</p>
                          </article>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-8 lg:self-center lg:pt-6">
                      <div className="space-y-6" data-reveal="up">
                        <div className="space-y-3">
                          <p className="kc-kicker">Perfil jurídico</p>
                          <h3 className="max-w-[16ch] text-balance text-[2rem] font-medium leading-[0.98] tracking-[-0.045em] text-[var(--color-ink)] sm:text-[2.35rem] lg:text-[2.75rem]">
                            {principal.title}
                          </h3>
                          <p className="text-[0.96rem] font-medium uppercase tracking-[0.16em] text-[var(--color-gold)]">
                            {principal.role}
                          </p>
                        </div>

                        <div className="max-w-[52ch] space-y-5">
                          {(Array.isArray(principal.copy) ? principal.copy : [principal.copy]).map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-base leading-8 text-[var(--color-muted)] sm:text-[1.04rem]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-6 border-t border-black/8 pt-8 sm:grid-cols-3 sm:gap-5 lg:pt-9">
                        {principal.items.map((item) => (
                          <article key={item.id} className="space-y-3" data-reveal="up">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold)]/28 text-xs text-[var(--color-gold)]">
                              {item.id}
                            </div>
                            <h4 className="max-w-[14ch] text-[1.08rem] font-medium leading-6 text-[var(--color-ink)]">{item.title}</h4>
                            <p className="max-w-[24ch] text-sm leading-6 text-[var(--color-muted)]">{item.copy}</p>
                          </article>
                        ))}
                      </div>
                    </div>

                    <div
                      className="group self-start overflow-hidden border border-black/10 bg-[var(--color-surface)] shadow-[0_28px_80px_rgba(6,27,51,0.09)]"
                      data-reveal="fade"
                    >
                      <div className="relative aspect-[1.2/1] min-h-[360px] w-full overflow-hidden">
                        <Image
                          src={principal.imageSrc}
                          alt={principal.imageAlt}
                          fill
                          sizes="(max-width: 1023px) 100vw, 58vw"
                          className={`object-cover transition-transform duration-700 group-hover:scale-[1.02] ${principal.imagePosition}`}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,248,0.03)_0%,rgba(3,18,36,0.12)_100%)]" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-[1728px] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
            <div className="space-y-3 lg:sticky lg:top-28" data-reveal="up">
              <p className="kc-kicker">Servicios</p>
              <h2 className="max-w-[10ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
                Servicios diseñados para resultados reales
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2" data-reveal="up">
                <h3 className="text-2xl font-medium leading-snug tracking-[-0.03em] text-[var(--color-ink)] sm:text-3xl">
                  Servicio especializado en Seguridad Social
                </h3>
                <p className="max-w-[58ch] text-sm leading-7 text-[var(--color-muted)] sm:text-[1rem]">
                  Protegemos el patrimonio de las empresas y aseguramos el acceso de los trabajadores a los derechos que les corresponden en materia de seguridad social.
                </p>
              </div>

              {audienceCards.map((card) => (
                <article
                  key={card.id}
                  id={card.id}
                  className="overflow-hidden border border-black/10 bg-[var(--color-navy)] text-white shadow-[0_28px_80px_rgba(6,27,51,0.12)]"
                  data-reveal="fade"
                >
                  <div className="space-y-2 border-b border-white/10 p-6 sm:p-8 lg:p-10">
                    <p className="kc-kicker text-[var(--color-gold)]">{card.audience}</p>
                    <p className="max-w-[60ch] text-base leading-8 text-white/80 sm:text-[1.04rem]">{card.intro}</p>
                  </div>

                  <div className="p-6 sm:p-8 lg:p-10">
                    <p className="mb-6 max-w-[60ch] text-sm leading-7 text-white/60">{card.description}</p>
                    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 border-t border-white/8 pt-3">
                          <span className="mt-[3px] shrink-0 text-[var(--color-gold)]">•</span>
                          <span className="text-sm leading-6 text-white/76">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}

              <div className="space-y-2 pt-2" data-reveal="up">
                <h3 className="text-2xl font-medium leading-snug tracking-[-0.03em] text-[var(--color-ink)] sm:text-3xl">
                  Otros servicios
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {servicioCards.map((card) => (
                  <article
                    key={card.id}
                    id={card.id}
                    className="group flex min-h-[220px] flex-col justify-between border border-white/10 bg-[var(--color-navy)] p-5 shadow-[0_28px_80px_rgba(6,27,51,0.12)] transition-[border-color,background-color] duration-200 hover:border-[var(--color-gold)]/30 hover:bg-[rgba(3,18,36,0.6)]"
                    data-reveal="up"
                  >
                    <div className="space-y-3">
                      <span className="text-[var(--color-gold)]">•</span>
                      <h3 className="text-[1.08rem] font-medium leading-6 text-white transition-colors duration-200 group-hover:text-[var(--color-gold-soft)]">{card.title}</h3>
                      <p className="text-sm leading-6 text-white/60">{card.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="legislacion" className="mx-auto max-w-[1728px] border-t border-black/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start lg:gap-14">
            <div className="space-y-4 lg:sticky lg:top-28" data-reveal="up">
              <p className="kc-kicker">Legislación</p>
              <h2 className="max-w-[11ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
                Consulta legal con acceso directo a normativa clave
              </h2>
              <p className="max-w-[30ch] text-sm leading-7 text-[var(--color-muted)] sm:text-[1rem]">
                Organizamos el marco normativo en bloques claros para que cada consulta se sienta útil, directa y fácil de ubicar.
              </p>
            </div>

            <div className="space-y-8 lg:space-y-10">
              {legislationGroups.map((group) => (
                <section
                  key={group.title}
                  className="border border-black/8 bg-[var(--color-panel)] p-5 shadow-[0_24px_70px_rgba(6,27,51,0.04)] sm:p-6 lg:p-7"
                >
                  <div
                    className="mb-6 flex flex-col gap-4 border-b border-black/8 pb-5 lg:grid lg:grid-cols-[minmax(220px,0.38fr)_minmax(0,1fr)] lg:items-start"
                    data-reveal="up"
                  >
                    <div className="space-y-2">
                      <p className="kc-kicker">{group.title}</p>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-gold)]/22 text-sm text-[var(--color-gold)]">
                        §
                      </span>
                    </div>
                    <p className="max-w-[58ch] text-sm leading-7 text-[var(--color-muted)] sm:text-[1rem]">{group.description}</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {group.items.map((item) => (
                      <article
                        key={item.id}
                        id={item.id}
                        className="flex min-h-[220px] flex-col justify-between border border-black/8 bg-[rgba(248,243,235,0.38)] p-5 transition-colors hover:border-[var(--color-gold)]/24 hover:bg-[rgba(248,243,235,0.7)]"
                        data-reveal="up"
                      >
                        <div className="space-y-3">
                          <h3 className="max-w-[16ch] text-[1.08rem] font-medium leading-6 text-[var(--color-ink)]">
                            {item.title}
                          </h3>
                          <p className="max-w-[30ch] text-sm leading-6 text-[var(--color-muted)]">{item.copy}</p>
                        </div>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 pt-5 text-sm font-medium text-[var(--color-gold)] transition-colors hover:text-[var(--color-ink)]"
                        >
                          Consultar
                          <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                        </a>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id="biblioteca" className="mx-auto max-w-[1728px] border-t border-black/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start lg:gap-14">
            <div className="space-y-4 lg:sticky lg:top-28" data-reveal="up">
              <p className="kc-kicker">Biblioteca</p>
              <h2 className="max-w-[11ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
                Conocimiento al alcance de todos
              </h2>
              <p className="max-w-[30ch] text-sm leading-7 text-[var(--color-muted)] sm:text-[1rem]">
                Reunimos guías, artículos y recursos clave para que puedas informarte, prepararte y tomar mejores decisiones.
              </p>
            </div>

            <div className="space-y-8 lg:space-y-10">
              {bibliotecaGroups.map((group) => (
                <section
                  key={group.title}
                  className="border border-black/8 bg-[var(--color-panel)] p-5 shadow-[0_24px_70px_rgba(6,27,51,0.04)] sm:p-6 lg:p-7"
                >
                  <div
                    className="mb-6 flex flex-col gap-4 border-b border-black/8 pb-5 lg:grid lg:grid-cols-[minmax(220px,0.38fr)_minmax(0,1fr)] lg:items-start"
                    data-reveal="up"
                  >
                    <div className="space-y-2">
                      <p className="kc-kicker">{group.title}</p>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-gold)]/22 text-sm text-[var(--color-gold)]">
                        ✦
                      </span>
                    </div>
                    <p className="max-w-[58ch] text-sm leading-7 text-[var(--color-muted)] sm:text-[1rem]">{group.description}</p>
                  </div>

                  {"layout" in group && group.layout === "list" ? (
                    <ul className="-mx-5 sm:-mx-6 lg:-mx-7">
                      {group.items.map((item) => (
                        <li key={item.id} data-reveal="up">
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between gap-6 border-t border-black/8 px-5 py-4 transition-[background-color] duration-150 hover:bg-[rgba(248,243,235,0.7)] sm:px-6 lg:px-7"
                          >
                            <span className="text-sm font-medium text-[var(--color-ink)] sm:text-[0.95rem]">{item.title}</span>
                            <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-gold)]">
                              Consultar
                              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {group.items.map((item) => (
                        <article
                          key={item.id}
                          id={item.id}
                          className="flex h-full flex-col border border-black/8 bg-[rgba(248,243,235,0.38)] p-5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--color-gold)]/24 hover:bg-[rgba(248,243,235,0.7)]"
                          data-reveal="up"
                        >
                          <h3 className="text-[1.04rem] font-medium leading-6 text-[var(--color-ink)]">{item.title}</h3>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-[var(--color-gold)] transition-colors duration-150 hover:text-[var(--color-ink)]"
                          >
                            Consultar
                            <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                          </a>
                        </article>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id="casos" className="mx-auto max-w-[1728px] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="space-y-8">
            <div className="max-w-[860px] space-y-4" data-reveal="up">
              <p className="kc-kicker">Casos de éxito</p>
              <h2 className="max-w-[11ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
                Experiencias que respaldan nuestro acompañamiento
              </h2>
              <p className="max-w-[58ch] text-sm leading-7 text-[var(--color-muted)] sm:text-[1rem]">
                Cada caso refleja acompañamiento cercano, criterio técnico y seguimiento constante en procesos sensibles para personas y empresas.
              </p>
            </div>

            <CasesCarousel cases={cases} disclaimer={caseDisclaimer} />
          </div>
        </section>

        <NewsSection />

        <VideoSection />

        <section className="mx-auto max-w-[1728px] border-t border-black/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mb-8 space-y-3" data-reveal="up">
            <p className="kc-kicker">Nuestro enfoque</p>
            <h2 className="max-w-[11ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
              Principios que orientan nuestra firma
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
            <div className="space-y-6">
              <div className="overflow-hidden border border-black/10 bg-[var(--color-panel)] shadow-[0_24px_80px_rgba(6,27,51,0.08)]" data-reveal="fade">
                <Image
                  src="/images/mision-vision.png"
                  alt="Equipo directivo de KC Despacho Jurídico y Contable en oficina principal."
                  width={1672}
                  height={941}
                  sizes="(max-width: 1023px) 100vw, 58vw"
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="border border-black/10 bg-[var(--color-panel)] p-6" data-reveal="up">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="kc-kicker">Nuestros valores</p>
                    <p className="max-w-[36ch] text-sm leading-7 text-[var(--color-muted)]">
                      Principios que sostienen nuestra forma de trabajar y la relación que construimos con cada cliente.
                    </p>
                  </div>

                  <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {values.map((value) => (
                      <div key={value} className="flex items-center gap-3 border-t border-black/8 pt-3">
                        <span className="text-[var(--color-gold)]">•</span>
                        <span className="text-sm font-medium text-[var(--color-ink)]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-0 border border-[var(--color-gold)]/25 bg-[var(--color-panel)]" data-reveal="up">
              {approachItems.map((item, index) => (
                <article
                  key={item.id}
                  className={`grid gap-3 px-6 py-5 lg:grid-cols-[44px_1fr] lg:items-start ${
                    index < approachItems.length - 1 ? "border-b border-black/10" : ""
                  }`}
                >
                  <span className="text-sm font-medium text-[var(--color-gold)]">{item.id}</span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-[var(--color-ink)]">{item.title}</h3>
                    <p className="text-sm leading-6 text-[var(--color-muted)]">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FAQSection />
      </main>

      <footer id="contacto" className="overflow-hidden bg-[var(--color-navy)] text-white">
        <div className="mx-auto grid max-w-[1728px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-14">

          {/* Left info column */}
          <div className="space-y-8" data-reveal="fade">

            {/* Logo + social */}
            <div className="space-y-5">
              <div>
                <div className="inline-flex rounded-sm bg-[var(--color-panel)] px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/images/logoKC-rectangular.png"
                    alt="Logo de KC Despacho Jurídico y Contable."
                    width={280}
                    height={80}
                    className="h-auto w-[180px] object-contain sm:w-[210px]"
                  />
                </div>
                <p className="mt-3 text-sm text-white/55">Asesoría profesional de excelencia</p>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <a className="text-sm transition-colors duration-150 hover:text-[var(--color-gold-soft)]" href="https://linkedin.com">LinkedIn</a>
                <a className="text-sm transition-colors duration-150 hover:text-[var(--color-gold-soft)]" href="https://x.com">X</a>
                <a className="text-sm transition-colors duration-150 hover:text-[var(--color-gold-soft)]" href="https://instagram.com">Instagram</a>
              </div>
            </div>

            {/* Intro */}
            <p className="max-w-[52ch] text-sm leading-7 text-white/60">
              En KC Despacho Jurídico y Contable brindamos asesoría profesional en materia jurídica, contable, fiscal y de seguridad social. Si deseas agendar una consulta o recibir información sobre nuestros servicios, estaremos encantados de atenderte.
            </p>

            {/* Locations */}
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-white/38">Nuestras Ubicaciones</p>
              <div className="grid gap-5 sm:grid-cols-3">
                <div className="space-y-1 border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-gold)]">Xalapa, Veracruz</p>
                  <p className="text-sm leading-6 text-white/60">Victoria Nueva No. XX, Col. Centro, CP 910030</p>
                  <a
                    href="https://maps.app.goo.gl/JMgQ34xX47gThncy7"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-white/40 transition-colors duration-150 hover:text-[var(--color-gold-soft)]"
                  >
                    Ver en Maps <ArrowUpRight className="h-3 w-3" strokeWidth={1.8} />
                  </a>
                </div>
                <div className="space-y-1 border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-gold)]">Ciudad de México</p>
                  <p className="text-sm leading-6 text-white/60">Calle No. XX, Col. Tizapán San Ángel, CP 010800</p>
                  <a
                    href="https://maps.app.goo.gl/99jZcXJUzP2uZthL7"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-white/40 transition-colors duration-150 hover:text-[var(--color-gold-soft)]"
                  >
                    Ver en Maps <ArrowUpRight className="h-3 w-3" strokeWidth={1.8} />
                  </a>
                </div>
                <div className="space-y-1 border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-gold)]">Monterrey, N.L.</p>
                  <p className="text-sm leading-6 text-white/60">Plaza Fiesta San Agustín, Av. Diego Rivera 1000, CP 66260</p>
                  <a
                    href="https://maps.app.goo.gl/iNTdiJkNysatfgPt6"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-white/40 transition-colors duration-150 hover:text-[var(--color-gold-soft)]"
                  >
                    Ver en Maps <ArrowUpRight className="h-3 w-3" strokeWidth={1.8} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-1">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/38">Teléfono</p>
                <a
                  href="tel:+5222818150000"
                  className="text-sm text-white/70 transition-colors duration-150 hover:text-white"
                >
                  (228) 181-0000
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/38">WhatsApp</p>
                <a
                  href="https://wa.me/5222818150000"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 transition-colors duration-150 hover:text-white"
                >
                  (228) 181-0000
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/38">Correo</p>
                <a
                  href="mailto:contacto@kcdespacho.com"
                  className="text-sm text-white/70 transition-colors duration-150 hover:text-white"
                >
                  contacto@kcdespacho.com
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/38">Horario</p>
                <p className="text-sm text-white/70">Lun – Vie</p>
                <p className="text-sm text-white/70">9:00 a.m. – 6:00 p.m.</p>
              </div>
            </div>

            {/* Legal */}
            <div className="flex items-center gap-4 border-t border-white/8 pt-5 text-xs text-white/30">
              <span>© 2026 KC Despacho Jurídico y Contable</span>
              <span>·</span>
              <a href="#" className="transition-colors duration-150 hover:text-white/60">Aviso de privacidad</a>
              <span>·</span>
              <a href="#" className="transition-colors duration-150 hover:text-white/60">Términos y condiciones</a>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="self-start rounded-[24px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm sm:p-8" data-reveal="up">
            <div className="mb-6 border-b border-white/10 pb-6">
              <p className="kc-kicker mb-2">Contacto</p>
              <p className="text-base leading-7 text-white/80">
                Si deseas agendar una consulta o recibir información sobre nuestros servicios, estaremos encantados de atenderte.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </footer>

      <BackToTopButton />
      <ScrollEffects />
    </>
  );
}
