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
        title: 'Actualización de cuentas y enlaces contables desde Intranet',
        objective: 'Automatizar actualización de cuentas y enlaces contables',
        scope: 'Módulo para actualización directa desde Intranet con validaciones de cuentas, auxiliares, períodos y reglas de consistencia.',
        status: 'En ejecución con avances funcionales implementados'
      },
      {
        title: 'Fortalecimiento del backend institucional',
        objective: 'Mejorar arquitectura backend para trazabilidad y migración progresiva',
        scope: 'Pool de conexiones, manejo de contexto de usuario, autenticación integrada Oracle, centralización de roles y permisos, base para migración desde Oracle Forms.',
        status: 'En ejecución con desarrollo ampliamente avanzado'
      }
    ]
  });
}
