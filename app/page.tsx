import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import BackToTopButton from "../components/back-to-top-button";
import CasesCarousel from "../components/cases-carousel";
import ContactForm from "../components/contact-form";
import FAQSection from "../components/faq-section";
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
          { label: "Consultoria Juridica", href: "#servicio-consultoria-juridica" },
          { label: "Consultoria Contable y Fiscal", href: "#servicio-consultoria-contable-y-fiscal" },
          { label: "Auditorias", href: "#servicio-auditorias" },
          { label: "Consultoria Estrategica", href: "#servicio-consultoria-estrategica" },
          { label: "Reclutamiento y Capacitacion", href: "#servicio-reclutamiento-y-capacitacion" },
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
  { type: "link", label: "Casos de exito", href: "#casos" },
  {
    type: "dropdown",
    label: "Legislacion",
    groups: [
      {
        title: "Legislacion general",
        items: [
          { label: "Constitucion Politica de los Estados Unidos Mexicanos", href: "#ley-cpeum" },
          { label: "Ley Federal del Trabajo", href: "#ley-lft" },
          { label: "Ley de Amparo", href: "#ley-lamp" },
          { label: "Codigo Civil Federal", href: "#ley-ccf" },
          { label: "Codigo Nacional de Procedimientos Civiles y Familiares", href: "#ley-cnpcyf" },
          { label: "Codigo Penal Federal", href: "#ley-cpf" },
          { label: "Codigo Nacional de Procedimientos Penales", href: "#ley-cnpp" },
          { label: "Codigo Fiscal de la Federacion", href: "#ley-cff" },
        ],
      },
      {
        title: "Seguridad Social",
        items: [
          { label: "Ley del Seguro Social", href: "#ley-lss" },
          { label: "Reglamento de Afiliacion, Clasificacion, Recaudacion y Fiscalizacion", href: "#ley-lss-acerf" },
          { label: "Reglamento de Prestaciones Medicas del IMSS", href: "#ley-rpmimss" },
          { label: "Reglamento Interior del IMSS", href: "#ley-riimss" },
          { label: "Acuerdos y Criterios del IMSS", href: "#ley-acuerdos-imss" },
        ],
      },
      {
        title: "INFONAVIT",
        items: [
          { label: "Ley del INFONAVIT", href: "#ley-linfonavit" },
          { label: "Reglamento de Inscripcion, Pago de Aportaciones y Entero de Descuentos", href: "#ley-infonavit-aportaciones" },
          { label: "Marco Juridico INFONAVIT", href: "#ley-marco-juridico-infonavit" },
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
          { label: "Resolucion Miscelanea Fiscal", href: "#ley-rmf" },
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
          { label: "Criterios Relevantes de la Suprema Corte de Justicia de la Nacion", href: "#ley-criterios-scjn" },
        ],
      },
    ],
  },
  { type: "link", label: "Contacto", href: "#contacto" },
];

const partners = ["GOBIERNO DE XALAPA", "CNBV", "SALYROMERO", "KARLA", "IVAN", "CDMX", "CONSTRUCTORA"];

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
    role: "Directora del Area Juridica",
    title: "LIC. KARLA RUBI RAMIREZ AGUILAR",
    copy: [
      "Profesional del derecho enfocada en la asesoria, representacion y defensa de los intereses de trabajadores, empresas y particulares. Su practica se centra en las areas laboral, corporativa, administrativa y de seguridad social.",
      "Su compromiso con la excelencia profesional, la atencion personalizada y la defensa de los derechos de sus clientes le ha permitido construir relaciones de confianza y ofrecer soluciones juridicas efectivas y oportunas.",
    ],
    imageSrc: "/images/abogada.jpeg",
    imageAlt: "Retrato profesional de la abogada principal de KC Despacho Juridico y Contable.",
    imagePosition: "object-[52%_26%]",
    visualSide: "right" as const,
    items: [
      {
        id: "I",
        title: "Estructura legal",
        copy: "Revision y definicion de marcos societarios, contratos y riesgos clave.",
      },
      {
        id: "II",
        title: "Prevencion y cumplimiento",
        copy: "Criterio practico para evitar contingencias y ordenar decisiones sensibles.",
      },
      {
        id: "III",
        title: "Negociacion y respaldo",
        copy: "Acompanamiento cercano en procesos que requieren firmeza y precision.",
      },
    ],
  },
  {
    role: "Director del Area Contable, Fiscal y de Seguridad Social",
    title: "MTRO. JUAN CARLOS RAMIREZ HERNANDEZ",
    copy: [
      "Especialista en consultoria contable, fiscal y seguridad social, con amplia experiencia en el acompanamiento de empresas y particulares en el cumplimiento de obligaciones fiscales, auditorias, estrategias financieras y gestion ante instituciones de seguridad social.",
      "Su trayectoria profesional se ha distinguido por la implementacion de soluciones orientadas a la prevencion de riesgos, la optimizacion de recursos y el fortalecimiento de la seguridad juridica de sus clientes.",
    ],
    imageSrc: "/images/contador.jpeg",
    imageAlt: "Retrato profesional del contador principal de KC Despacho Juridico y Contable.",
    imagePosition: "object-[48%_24%]",
    visualSide: "left" as const,
    items: [
      {
        id: "I",
        title: "Diagnostico financiero",
        copy: "Lectura precisa de procesos, cifras y puntos de friccion operativa.",
      },
      {
        id: "II",
        title: "Planeacion fiscal",
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

const services = [
  {
    id: "servicio-seguridad-social",
    audience: "Trabajadores",
    title: "Seguridad Social",
    copy: "Acompanamiento en obligaciones patronales, altas, bajas, cumplimiento y atencion de movimientos ante instituciones.",
  },
  {
    id: "servicio-pensiones-y-modalidad-40",
    audience: "Trabajadores",
    title: "Pensiones y Modalidad 40",
    copy: "Orientacion para mejorar tu estrategia pensionaria, revisar escenarios y tomar decisiones con mejor respaldo.",
  },
  {
    id: "servicio-consultoria-juridica",
    audience: "Empresas",
    title: "Consultoria Juridica",
    copy: "Asesoria legal integral para empresas y personas que necesitan claridad, estructura y prevencion de riesgos.",
  },
  {
    id: "servicio-consultoria-contable-y-fiscal",
    audience: "Empresas",
    title: "Consultoria Contable y Fiscal",
    copy: "Planeacion, cumplimiento y optimizacion contable y tributaria con enfoque estrategico y operativo.",
  },
  {
    id: "servicio-auditorias",
    audience: "Empresas",
    title: "Auditorias",
    copy: "Revision de procesos, controles y cumplimiento para detectar riesgos y fortalecer la operacion.",
  },
  {
    id: "servicio-consultoria-estrategica",
    audience: "Empresas",
    title: "Consultoria Estrategica",
    copy: "Acompanamiento para estructurar decisiones clave, ordenar prioridades y alinear crecimiento con ejecucion.",
  },
  {
    id: "servicio-reclutamiento-y-capacitacion",
    audience: "Empresas",
    title: "Reclutamiento y Capacitacion",
    copy: "Apoyo en atraccion de talento, evaluacion de perfiles y formacion para fortalecer equipos de trabajo.",
  },
];

const serviceGroups = [
  { title: "Empresas", description: "Soluciones orientadas a operacion, cumplimiento y crecimiento empresarial." },
  { title: "Trabajadores", description: "Acompanamiento especializado para decisiones individuales y seguridad social." },
] as const;

const legislationGroups = [
  {
    title: "Legislacion general",
    description: "Normatividad base para consulta juridica, laboral, civil, penal y fiscal en el marco federal mexicano.",
    items: [
      {
        id: "ley-cpeum",
        title: "Constitucion Politica de los Estados Unidos Mexicanos",
        copy: "Norma suprema del orden juridico mexicano que reconoce y protege los derechos fundamentales, incluyendo los derechos laborales y de seguridad social.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf",
      },
      {
        id: "ley-lft",
        title: "Ley Federal del Trabajo",
        copy: "Norma principal que regula las relaciones laborales entre trabajadores y empleadores asi como sus derechos y obligaciones.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf",
      },
      {
        id: "ley-lamp",
        title: "Ley de Amparo",
        copy: "Regula el juicio de amparo como medio de proteccion de los derechos humanos frente a actos de autoridad.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LAmp.pdf",
      },
      {
        id: "ley-ccf",
        title: "Codigo Civil Federal",
        copy: "Establece las disposiciones que regulan las relaciones entre particulares en materia de personas, bienes, obligaciones y contratos.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CCF.pdf",
      },
      {
        id: "ley-cnpcyf",
        title: "Codigo Nacional de Procedimientos Civiles y Familiares",
        copy: "Normativa que regula los procedimientos judiciales en materia civil y familiar.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CNPCyF.pdf",
      },
      {
        id: "ley-cpf",
        title: "Codigo Penal Federal",
        copy: "Define los delitos del orden federal y las sanciones aplicables.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPF.pdf",
      },
      {
        id: "ley-cnpp",
        title: "Codigo Nacional de Procedimientos Penales",
        copy: "Regula el procedimiento penal acusatorio en Mexico.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CNPP.pdf",
      },
      {
        id: "ley-cff",
        title: "Codigo Fiscal de la Federacion",
        copy: "Regula las facultades de las autoridades fiscales y los derechos y obligaciones de los contribuyentes.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf",
      },
    ],
  },
  {
    title: "Seguridad Social",
    description: "Ordenamiento aplicable a aseguramiento, afiliacion, prestaciones, organizacion institucional y criterios operativos del IMSS.",
    items: [
      {
        id: "ley-lss",
        title: "Ley del Seguro Social",
        copy: "Norma fundamental que regula los derechos y obligaciones de trabajadores, patrones y del Instituto Mexicano del Seguro Social.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf",
      },
      {
        id: "ley-lss-acerf",
        title: "Reglamento de la Ley del Seguro Social en Materia de Afiliacion, Clasificacion de Empresas, Recaudacion y Fiscalizacion",
        copy: "Regula los procedimientos relacionados con el registro patronal, clasificacion de empresas, afiliacion de trabajadores y determinacion de cuotas.",
        href: "https://www.imss.gob.mx/sites/all/statics/pdf/reglamentos/LSS_ACERF.pdf",
      },
      {
        id: "ley-rpmimss",
        title: "Reglamento de Prestaciones Medicas del IMSS",
        copy: "Establece las reglas para el otorgamiento de servicios medicos y prestaciones en especie a los derechohabientes.",
        href: "https://www.imss.gob.mx/sites/all/statics/pdf/reglamentos/4045_RPMIMSS.pdf",
      },
      {
        id: "ley-riimss",
        title: "Reglamento Interior del IMSS",
        copy: "Define la organizacion, facultades y funcionamiento interno del Instituto Mexicano del Seguro Social.",
        href: "https://www.imss.gob.mx/sites/all/statics/pdf/reglamentos/RIIMSS.pdf",
      },
      {
        id: "ley-acuerdos-imss",
        title: "Acuerdos y Criterios del IMSS",
        copy: "Compilacion de acuerdos, lineamientos y criterios institucionales de aplicacion practica.",
        href: "https://www.imss.gob.mx/conoce-al-imss/marco-normativo",
      },
    ],
  },
  {
    title: "INFONAVIT",
    description: "Normativa vinculada a vivienda para trabajadores, aportaciones patronales, descuentos y consulta juridica institucional.",
    items: [
      {
        id: "ley-linfonavit",
        title: "Ley del INFONAVIT",
        copy: "Regula la integracion y funcionamiento del Instituto del Fondo Nacional de la Vivienda para los Trabajadores.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LINFONAVIT.pdf",
      },
      {
        id: "ley-infonavit-aportaciones",
        title: "Reglamento de Inscripcion, Pago de Aportaciones y Entero de Descuentos",
        copy: "Establece las obligaciones patronales relacionadas con aportaciones y descuentos de creditos de vivienda.",
        href: "https://portalmx.infonavit.org.mx/wps/wcm/connect/infonavit/el+instituto/marco+juridico",
      },
      {
        id: "ley-marco-juridico-infonavit",
        title: "Marco Juridico INFONAVIT",
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
        copy: "Disposiciones que establecen condiciones de seguridad, salud y prevencion de riesgos laborales.",
        href: "https://www.gob.mx/stps/documentos/normas-oficiales-mexicanas-de-seguridad-y-salud-en-el-trabajo",
      },
      {
        id: "ley-jurisprudencia-laboral",
        title: "Jurisprudencia Laboral",
        copy: "Criterios judiciales relevantes para la interpretacion y aplicacion de la legislacion laboral.",
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
        copy: "Norma que establece el regimen aplicable al impuesto sobre la renta.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf",
      },
      {
        id: "ley-liva",
        title: "Ley del Impuesto al Valor Agregado",
        copy: "Regula el impuesto aplicable a la enajenacion de bienes, prestacion de servicios y otras actividades gravadas.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LIVA.pdf",
      },
      {
        id: "ley-rmf",
        title: "Resolucion Miscelanea Fiscal",
        copy: "Compendio anual de reglas emitidas por la autoridad fiscal para la correcta aplicacion de las disposiciones tributarias.",
        href: "https://www.sat.gob.mx/normatividad",
      },
    ],
  },
  {
    title: "Pensiones",
    description: "Marco pensionario aplicable a regimenes previos y vigentes, asi como referencias practicas para modalidad 40 y defensa de derechos pensionarios.",
    items: [
      {
        id: "ley-lss-1973",
        title: "Ley del Seguro Social de 1973",
        copy: "Marco juridico aplicable a trabajadores pertenecientes al regimen pensionario anterior a la reforma de 1997.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/abro/lss/LSS_abro.pdf",
      },
      {
        id: "ley-lss-1997",
        title: "Ley del Seguro Social de 1997",
        copy: "Regulacion vigente del sistema pensionario basado en cuentas individuales.",
        href: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf",
      },
      {
        id: "ley-modalidad-40",
        title: "Modalidad 40",
        copy: "Informacion oficial sobre la Continuacion Voluntaria en el Regimen Obligatorio y sus beneficios para la pension.",
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
    description: "Fuentes de consulta jurisdiccional y criterios interpretativos para analizar precedentes, tesis y resoluciones de impacto juridico.",
    items: [
      {
        id: "ley-tesis-aisladas",
        title: "Tesis Aisladas",
        copy: "Criterios orientadores emitidos por organos jurisdiccionales federales.",
        href: "https://sjf2.scjn.gob.mx/busqueda-principal-tesis",
      },
      {
        id: "ley-jurisprudencias",
        title: "Jurisprudencias",
        copy: "Criterios obligatorios que interpretan la legislacion vigente.",
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
        title: "Criterios Relevantes de la Suprema Corte de Justicia de la Nacion",
        copy: "Precedentes y criterios de alto impacto juridico emitidos por el maximo tribunal del pais.",
        href: "https://www.scjn.gob.mx",
      },
    ],
  },
] as const;

const cases = [
  {
    quote:
      "Estaba a punto de iniciar mi tramite de pension cuando descubri que tenia inconsistencias en mis semanas cotizadas. El despacho me acompano en todo momento, resolvio mis dudas y logro que se corrigiera mi historial. Gracias a su apoyo pude continuar con mi tramite sin contratiempos. Recomiendo ampliamente sus servicios por su profesionalismo y atencion personalizada.",
    author: "Yolanda, V.",
    role: "Cliente del area de Pensiones",
    area: "Pensiones",
  },
  {
    quote:
      "Buscaba una estrategia para mejorar mi futura pension y no sabia si la Modalidad 40 era la mejor opcion para mi. Recibi una asesoria clara, detallada y adaptada a mi situacion. Hoy tengo la tranquilidad de saber que estoy tomando la mejor decision para mi retiro. Recomiendo al despacho al 100%.",
    author: "Yadira, R.",
    role: "Cliente del area de Seguridad Social",
    area: "Seguridad Social",
  },
  {
    quote:
      "Como representante de una empresa, necesitabamos regularizar diversos aspectos relacionados con IMSS e INFONAVIT. El equipo nos brindo acompanamiento durante todo el proceso y nos ayudo a fortalecer nuestros controles internos. Su experiencia y conocimiento hicieron una gran diferencia. Sin duda volveriamos a trabajar con ellos.",
    author: "Griselda, R.",
    role: "Directora Administrativa",
    area: "IMSS e INFONAVIT",
  },
  {
    quote:
      "Tuve un problema relacionado con un riesgo de trabajo y desconocia cuales eran mis derechos. Desde la primera consulta recibi orientacion profesional y seguimiento constante. Gracias a ello pude obtener las prestaciones que me correspondian. Recomiendo ampliamente sus servicios.",
    author: "Natalia, A.",
    role: "Trabajador asesorado en materia de Seguridad Social",
    area: "Seguridad Social",
  },
  {
    quote:
      "Recibimos una revision por parte de las autoridades y necesitabamos apoyo especializado para atenderla correctamente. El despacho nos acompano durante todo el procedimiento, brindandonos seguridad y soluciones oportunas. Su atencion fue excelente y los recomiendo totalmente.",
    author: "Pedro, T.",
    role: "Gerente de Recursos Humanos",
    area: "Revision de autoridades",
  },
  {
    quote:
      "Mi tramite de pension parecia complicado y tenia muchas dudas sobre los requisitos y documentos necesarios. Gracias a la asesoria recibida, el proceso fue mucho mas sencillo de lo que imaginaba. Siempre estuvieron disponibles para resolver mis inquietudes. Los recomiendo por su profesionalismo y compromiso.",
    author: "Cliente en proceso pensionario",
    role: "Caso de pension asesorado",
    area: "Pensiones",
  },
  {
    quote:
      "Contratamos una auditoria preventiva en materia de seguridad social y los resultados superaron nuestras expectativas. Detectaron areas de oportunidad que no habiamos identificado y nos ayudaron a corregirlas oportunamente. Recomiendo al despacho por su conocimiento tecnico y trato cercano.",
    author: "Victor, M.",
    role: "Empresario del sector servicios",
    area: "Auditoria preventiva",
  },
];

const caseDisclaimer =
  "Por razones de confidencialidad y proteccion de datos personales, los nombres y datos especificos de nuestros clientes han sido omitidos.";

const approachItems = [
  {
    id: "1",
    title: "Mision",
    copy: "Brindar servicios juridicos, contables, fiscales y de seguridad social con los mas altos estandares de calidad, profesionalismo y etica, contribuyendo a la proteccion de los intereses y al crecimiento de nuestros clientes mediante soluciones integrales, estrategicas y personalizadas.",
  },
  {
    id: "2",
    title: "Vision",
    copy: "Consolidarnos como una firma lider en consultoria juridica, contable y de seguridad social en Mexico, reconocida por su excelencia profesional, innovacion, confianza y compromiso con los resultados de nuestros clientes.",
  },
  {
    id: "3",
    title: "Meta",
    copy: "Ser el despacho de referencia en materia de seguridad social, pensiones, consultoria juridica y contable, expandiendo nuestra presencia a nivel nacional y fortaleciendo continuamente nuestros servicios para ofrecer soluciones integrales de alto valor.",
  },
];

const values = [
  "Profesionalismo",
  "Etica",
  "Honestidad",
  "Responsabilidad",
  "Confidencialidad",
  "Compromiso",
  "Excelencia",
  "Atencion personalizada",
] as const;

function EmptyVisual({
  label,
  tone = "light",
  className = "",
}: {
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden ${
        tone === "dark"
          ? "bg-[linear-gradient(135deg,rgba(6,27,51,0.96),rgba(3,18,36,0.92))]"
          : "bg-[linear-gradient(135deg,rgba(242,243,245,1),rgba(255,253,248,1))]"
      } ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,154,59,0.18),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(199,154,59,0.1)_48%,transparent_100%)]" />
      <div
        className={`absolute bottom-5 left-5 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] ${
          tone === "dark"
            ? "border-white/14 text-white/46"
            : "border-[var(--color-gold)]/18 text-[color:rgba(8,16,20,0.42)]"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="bg-[var(--color-cream)] text-[var(--color-ink)]">
        <SiteHeader items={navItems} />

        <section className="relative isolate overflow-hidden bg-[var(--color-navy)] text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-banner-1.png"
              alt="Oficinas principales de KC Despacho Juridico y Contable."
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
                  Estrategias integrales para desafios complejos
                </h1>
                <p className="max-w-[50ch] text-pretty text-base leading-7 text-white/80 sm:text-[1.05rem]">
                  Con más de 30 años de experiencia, brindamos asesoría profesional y de excelencia en soluciones jurídicas y contables, 
                  acompañando a las empresas en cada etapa de su crecimiento y consolidación.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a className="kc-button-solid" href="#contacto">
                    Agendar una consulta
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                  </a>
                  <a className="kc-button-outline" href="#casos">
                    Ver casos de exito
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-6 pt-14 text-sm text-white/68" data-reveal="fade">
              <span>Construir con intencion</span>
              <div className="hidden h-px flex-1 bg-white/10 lg:block" />
            </div>
          </div>
        </section>

        <section className="border-y border-black/8 bg-[var(--color-panel-soft)]">
          <div className="kc-marquee mx-auto max-w-[1728px] overflow-hidden px-5 py-5 lg:px-10">
            <div className="kc-marquee-track">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner}-${index}`} className="flex shrink-0 items-center gap-2 text-sm text-[var(--color-muted)]">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-current/30 text-[10px]">
                    +
                  </span>
                  <span className="font-medium tracking-[0.08em]">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1728px] px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
          <div className="border-b border-black/8 pb-14 lg:pb-18">
            <div className="space-y-3" data-reveal="up">
              <p className="kc-kicker">Quienes somos</p>
              <h2 className="text-[2.2rem] font-medium leading-[0.96] tracking-[-0.05em] text-[var(--color-ink)] sm:text-[2.8rem] lg:text-[3.35rem]">
                Una firma construida desde la confianza
              </h2>
            </div>

            <div className="mt-10 grid gap-x-10 gap-y-6 lg:grid-cols-3" data-reveal="up">
              <p className="text-base leading-8 text-[var(--color-muted)] sm:text-[1.04rem]">
                KC Despacho Juridico y Contable es una firma especializada en consultoria juridica, contable, fiscal y de seguridad social, comprometida con brindar soluciones integrales a empresas, trabajadores y particulares.
              </p>
              <p className="text-base leading-8 text-[var(--color-muted)] sm:text-[1.04rem]">
                Con mas de 30 anos de experiencia acumulada, nuestro equipo combina conocimientos tecnicos, vision estrategica y atencion personalizada para ofrecer servicios de excelencia que generan confianza, seguridad juridica y resultados.
              </p>
              <div className="space-y-6 text-base leading-8 text-[var(--color-muted)] sm:text-[1.04rem]">
                <p>
                  Nos distinguimos por nuestro compromiso con la etica profesional, la actualizacion constante y la busqueda de soluciones eficientes para nuestros clientes, brindando atencion profesional en Veracruz, Ciudad de Mexico y Monterrey para atender a clientes de distintas regiones del pais.
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
                          <p className="kc-kicker">Perfil juridico</p>
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
                Servicios disenados para resultados reales
              </h2>
            </div>

            <div className="space-y-10">
              {serviceGroups.map((group, groupIndex) => (
                <div key={group.title} className={groupIndex > 0 ? "border-t border-black/8 pt-10" : ""}>
                  <div className="mb-5 space-y-2" data-reveal="up">
                    <p className="kc-kicker">{group.title}</p>
                    <p className="max-w-[44ch] text-sm leading-6 text-[var(--color-muted)]">{group.description}</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {services
                      .filter((service) => service.audience === group.title)
                      .map((service) => (
                        <article
                          key={service.id}
                          id={service.id}
                          className="group relative overflow-hidden border border-black/10 bg-[var(--color-navy)] text-white"
                          data-reveal="fade"
                        >
                          <div className="relative aspect-[16/10.7] min-h-[320px]">
                            <EmptyVisual label="Imagen pendiente" tone="dark" className="h-full w-full transition-transform duration-700 group-hover:scale-[1.02]" />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,36,0.08)_0%,rgba(3,18,36,0.82)_72%,rgba(3,18,36,0.94)_100%)]" />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 z-10 space-y-2 p-6">
                            <h3 className="max-w-[14ch] text-2xl font-medium leading-tight tracking-[-0.03em]">
                              {service.title}
                            </h3>
                            <p className="max-w-[34ch] text-sm leading-6 text-white/76">{service.copy}</p>
                          </div>
                        </article>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="legislacion" className="mx-auto max-w-[1728px] border-t border-black/10 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start lg:gap-14">
            <div className="space-y-4 lg:sticky lg:top-28" data-reveal="up">
              <p className="kc-kicker">Legislacion</p>
              <h2 className="max-w-[11ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
                Consulta legal con acceso directo a normativa clave
              </h2>
              <p className="max-w-[30ch] text-sm leading-7 text-[var(--color-muted)] sm:text-[1rem]">
                Organizamos el marco normativo en bloques claros para que cada consulta se sienta util, directa y facil de ubicar.
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

        <section id="casos" className="mx-auto max-w-[1728px] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="space-y-8">
            <div className="max-w-[860px] space-y-4" data-reveal="up">
              <p className="kc-kicker">Casos de exito</p>
              <h2 className="max-w-[11ch] text-balance text-4xl font-medium leading-[1] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl">
                Experiencias que respaldan nuestro acompanamiento
              </h2>
              <p className="max-w-[58ch] text-sm leading-7 text-[var(--color-muted)] sm:text-[1rem]">
                Cada caso refleja acompanamiento cercano, criterio tecnico y seguimiento constante en procesos sensibles para personas y empresas.
              </p>
            </div>

            <CasesCarousel cases={cases} disclaimer={caseDisclaimer} />
          </div>
        </section>

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
                  alt="Equipo directivo de KC Despacho Juridico y Contable en oficina principal."
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
                      Principios que sostienen nuestra forma de trabajar y la relacion que construimos con cada cliente.
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
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" data-reveal="fade">
            <div className="space-y-6">
              <div>
                <div className="inline-flex rounded-[20px] border border-white/10 bg-[var(--color-panel)] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/images/logo-02.png"
                    alt="Logo de KC Despacho Juridico y Contable."
                    width={320}
                    height={150}
                    className="h-auto w-[220px] sm:w-[260px]"
                  />
                </div>
                <p className="mt-3 text-sm text-white/65">Asesoria profesional de excelencia</p>
              </div>

              <div className="flex items-center gap-4 text-white/72">
                <a className="text-sm transition-colors hover:text-[var(--color-gold-soft)]" href="https://linkedin.com">
                  LinkedIn
                </a>
                <a className="text-sm transition-colors hover:text-[var(--color-gold-soft)]" href="https://x.com">
                  X
                </a>
                <a className="text-sm transition-colors hover:text-[var(--color-gold-soft)]" href="https://instagram.com">
                  Instagram
                </a>
              </div>
            </div>

            <div className="grid gap-6 text-sm text-white/72 sm:grid-cols-3 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-white/42">Direccion</p>
                <p>Av. Reforma 123, Piso 8</p>
                <p>Col. Juarez, CP 06600</p>
                <p>Ciudad de Mexico, Mexico</p>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-white/42">Enlaces</p>
                <p>Acerca de</p>
                <p>Servicios</p>
                <p>Casos de exito</p>
                <p>Contacto</p>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-white/42">Legal</p>
                <p>Aviso de privacidad</p>
                <p>Terminos y condiciones</p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/4 p-4 backdrop-blur-sm" data-reveal="up">
            <p className="max-w-[30ch] text-sm leading-6 text-white/70">
              Dejanos tus datos y uno de nuestros especialistas se pondra en contacto contigo.
            </p>
            <ContactForm />
          </div>
        </div>
      </footer>

      <BackToTopButton />
      <ScrollEffects />
    </>
  );
}
