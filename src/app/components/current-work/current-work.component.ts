import { Component, signal } from '@angular/core';

interface ProjectItem {
  title: string;
  objective: string;
  scope: string;
  status: string;
  technologies?: string[];
}

interface CurrentWorkData {
  title: string;
  currentPosition: string;
  institution: string;
  period: string;
  description: string;
  completedProjects: ProjectItem[];
  ongoingProjects: ProjectItem[];
}

@Component({
  selector: 'app-current-work',
  imports: [],
  templateUrl: './current-work.component.html',
  styleUrl: './current-work.component.scss'
})
export class CurrentWorkComponent {
  currentWorkData = signal<CurrentWorkData>({
    title: 'Trabajo Actual',
    currentPosition: 'Desarrollador de Software',
    institution: 'Gobierno Autónomo Descentralizado Municipal de La Libertad',
    period: 'Septiembre 2025 - Presente',
    description: 'Desarrollo y mantenimiento de soluciones institucionales en el sistema Intranet, enfocado en procesos de nómina, contabilidad y sistemas financieros con Oracle y tecnologías modernas.',
    completedProjects: [
      {
        title: 'Desarrollo de roles complementarios de pago en sistema Intranet',
        objective: 'Desarrollar e incorporar procesos de roles de pago que anteriormente se realizaban manualmente',
        scope: 'Implementación de roles de Fondos de Reserva, Beneficio Sindical Obreros, Horas Obreros, Cesados, Quincena y Jubilación con funcionalidades de carga masiva, validación y procesamiento.',
        status: 'Implementado en producción y operativo'
      },
      {
        title: 'Control y actualización masiva de acumulación de fondos de reserva IESS',
        objective: 'Optimizar validación de información previa al cierre de roles de horas obreros',
        scope: 'Desarrollo de interfaz de consulta, actualización individual/masiva, carga mediante CSV/Excel para fondos de reserva y aporte cónyuge.',
        status: 'Implementado en producción y operativo'
      },
      {
        title: 'Procesamiento de Rol Décimo Tercero y Décimo Tercero Horas',
        objective: 'Incorporar procesos de décimo tercer sueldo en sistema Intranet',
        scope: 'Carga mediante Excel, validación de retenciones judiciales, procesamiento y cierre de roles con controles operativos.',
        status: 'Implementado en producción y operativo'
      },
      {
        title: 'Generación de asientos contables LM y TR con enlaces de pago',
        objective: 'Generar asientos contables derivados de roles de pago',
        scope: 'Generación de asientos LM (Liquidación Mensual) y TR (Transferencias), enlaces automáticos con órdenes de pago, integración con flujo financiero.',
        status: 'Implementado en producción y operativo'
      },
      {
        title: 'Verificación de enlaces contables y cuentas previo a generación de asientos',
        objective: 'Fortalecer control previo a generación de asientos contables',
        scope: 'Verificación automática de cuentas y enlaces, generación de reportes en Excel para validación contable.',
        status: 'Implementado en producción y operativo'
      },
      {
        title: 'Reverso y reprocesamiento de roles',
        objective: 'Fortalecer controles operativos de procesos de nómina',
        scope: 'Reverso para reprocesamiento y reverso administrativo de roles cerrados, aplicable a módulos Intranet y roles Oracle heredados.',
        status: 'Implementado en producción y operativo'
      },
      {
        title: 'Segmentación de roles de nombramiento',
        objective: 'Implementar segmentación por tipo de vínculo laboral',
        scope: 'División de rol de nombramiento en: Definitivo, Provisional y Libre Remoción con flujo completo de procesamiento y contabilidad.',
        status: 'Implementado en producción y operativo'
      },
      {
        title: 'Módulo de procesamiento de Rol Décimo Cuarto',
        objective: 'Implementar décimo cuarto como rol independiente',
        scope: 'Nuevo proceso con flujo operativo completo: carga, validación, procesamiento, asientos contables y enlaces de pago.',
        status: 'Implementado en producción y operativo'
      },
      {
        title: 'Regeneración de transferencias SPI',
        objective: 'Ajustar transferencias SPI cuando existen modificaciones en asientos contables',
        scope: 'Módulo para regeneración automática de transferencias SPI con consulta, búsqueda y ajuste automático.',
        status: 'Implementado en producción y operativo'
      },
      {
        title: 'Visualización e impresión de comprobantes de ingreso y egreso',
        objective: 'Optimizar tiempos de atención y reducir dependencia de Sistemas',
        scope: 'Consulta, visualización e impresión automatizada de comprobantes con filtros por año, mes, tipo de asiento y documento.',
        status: 'Implementado en producción y operativo'
      },
      {
        title: 'Exportación de transferencias SPI para sistema de pagos interbancarios',
        objective: 'Optimizar preparación de archivos para pagos SPI',
        scope: 'Consulta optimizada, exportación en formato Excel con estructura adecuada para carga directa en sistema SPI.',
        status: 'Implementado en producción y operativo'
      },
      {
        title: 'Gestión de certificados provisionales en contratos de arriendo',
        objective: 'Automatizar controles operativos y emisión documental',
        scope: 'Generación automática de certificados, controles de secuencias, terminación masiva de contratos CRT, emisión documental.',
        status: 'Implementado en producción y operativo'
      },
      {
        title: 'Anulación masiva de atrasos para servidores bajo jornada especial',
        objective: 'Automatizar anulación de atrasos conforme resolución administrativa',
        scope: 'Proceso masivo de anulación por período para servidores amparados en Resolución 0170-2024.',
        status: 'Implementado en producción y operativo'
      },
      {
        title: 'Reverso y control de estados para contratos de arriendo',
        objective: 'Fortalecer gestión operativa de contratos',
        scope: 'Reverso de estados contractuales con controles, trazabilidad mediante observaciones obligatorias para cada reverso.',
        status: 'Implementado en producción y operativo'
      }
    ],
    ongoingProjects: [
      {
        title: 'Desarrollo de módulo para actualización de cuentas y enlaces contables desde Intranet',
        objective: 'Automatizar desde Intranet la actualización de cuentas y enlaces contables asociados a rubros de nómina, fortaleciendo el control previo a la generación de asientos y reduciendo la dependencia de ajustes manuales.',
        scope: 'Como continuidad a las mejoras implementadas en la verificación de cuentas y enlaces contables previos a la generación de asientos, actualmente se encuentra en ejecución el desarrollo de un módulo orientado a permitir la actualización de dicha información directamente desde Intranet.\n\nActualmente, si durante la verificación de cuentas y enlaces se detectan inconsistencias o correcciones necesarias, gran parte de los ajustes continúa realizándose manualmente por tratarse de un proceso sensible y con impacto contable.\n\nA partir del seguimiento funcional realizado y la experiencia adquirida, se ha venido desarrollando un flujo controlado para incorporar estas actualizaciones dentro del sistema, contemplando validaciones relacionadas con:\n\n• Cuentas contables y auxiliares\n• Enlaces contables asociados a rubros\n• Validación por período\n• Reglas de consistencia entre rubros y cuentas\n• Controles operativos para actualización segura de información\n\nActualmente el desarrollo ya permite actualizar cierta información asociada a cuentas de rubros, encontrándose en evolución para incorporar validaciones adicionales y completar el flujo integral de actualización contable desde Intranet.',
        status: 'Proyecto en ejecución con avances funcionales ya implementados para actualización parcial de cuentas asociadas a rubros, encontrándose actualmente en proceso de ampliación del flujo operativo, incorporación de validaciones adicionales y fortalecimiento de controles para completar su integración dentro del sistema Intranet, con enfoque en garantizar consistencia contable, trazabilidad y seguridad en futuras actualizaciones operativas.'
      },
      {
        title: 'Fortalecimiento Backend: Pool de Conexiones y Autenticación Oracle',
        objective: 'Modernizar arquitectura backend con pool de conexiones, contexto de usuario real y autenticación integrada Oracle para migración progresiva desde Oracle Forms.',
        scope: 'Arquitectura Actual:\n• Conexiones vía usuario técnico único WEBSERVICES (variables de entorno)\n• Limitación: sin trazabilidad de usuario real autenticado\n\nImplementación en Ejecución:\n\n1. Pool de Conexiones y Contexto de Usuario:\n• Implementación de connection pooling con manejo de contexto\n• Captura y propagación de usuario real autenticado en operaciones DB\n• Integración con triggers Oracle para registro de auditoría\n• Reducción de parámetros usuario en llamadas backend\n\n2. Autenticación Integrada:\n• Prioridad de autenticación mediante usuarios Oracle institucionales\n• Mantenimiento de esquema WEBSERVICES para usuarios específicos\n• Fortalecimiento de seguridad con tokens JWT\n• Unificación de flujos: autenticación + autorización + trazabilidad\n\n3. Gestión Centralizada de Permisos:\n• Administración dinámica de roles y pantallas desde Intranet\n• Validación de accesos basada en permisos DB\n• Prevención de accesos no autorizados por URL directa\n• Migración de validaciones desde frontend a backend\n\n4. Base para Migración Progresiva:\n• Experiencia aplicada: migración exitosa de roles de pago Oracle → Intranet\n• Estructura escalable para futuras migraciones funcionales\n• Control gradual y validado de transición tecnológica',
        status: 'Fase Avanzada: Implementación funcional completa de pool de conexiones y contexto de usuario. Autenticación Oracle integrada con JWT en pruebas. Módulo de permisos centralizado en desarrollo. Próxima fase: pruebas funcionales y validación de seguridad previo a producción.'
      }
    ]
  });
}
