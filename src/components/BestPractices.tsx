
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { 
  Lightbulb, 
  Target, 
  Rocket, 
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';

const BestPractices = () => {
  const promptTips = [
    {
      category: 'Especificidad',
      tip: 'Sé específico sobre el tipo de aplicación y sus funcionalidades core',
      example: 'En lugar de "crea una app", usa "crea un dashboard de e-commerce con gestión de inventario, análisis de ventas y sistema de usuarios"'
    },
    {
      category: 'Diseño',
      tip: 'Describe el estilo visual y la experiencia de usuario deseada',
      example: 'Especifica: "diseño moderno con glassmorphism, paleta de colores azul/blanco, animaciones suaves"'
    },
    {
      category: 'Funcionalidad',
      tip: 'Lista las características específicas que necesitas',
      example: 'Detalla: "formularios con validación, autenticación JWT, dashboard con gráficos, sistema de notificaciones"'
    },
    {
      category: 'Responsividad',
      tip: 'Siempre menciona la importancia del diseño responsive',
      example: 'Incluye: "optimizado para móviles, tabletas y desktop con navegación adaptativa"'
    }
  ];

  const dosList = [
    'Divide proyectos grandes en pasos más pequeños',
    'Especifica el tipo de datos que manejará la app',
    'Menciona integraciones con APIs externas si las necesitas',
    'Describe el flujo de usuario paso a paso',
    'Solicita implementación de mejores prácticas de seguridad',
    'Pide optimizaciones de performance específicas',
    'Incluye consideraciones de accesibilidad (a11y)',
    'Especifica el tipo de navegación (SPA, multi-page, etc.)'
  ];

  const dontsList = [
    'No pidas tecnologías no soportadas (Next.js, Vue, Angular)',
    'Evita solicitudes demasiado vagas o generales',
    'No esperes funcionalidades de backend sin integración externa',
    'No pidas cambios en múltiples áreas a la vez',
    'Evita terminología técnica muy específica sin contexto',
    'No asumas que conozco el contexto de tu negocio',
    'No pidas features que requieran acceso a servicios no disponibles'
  ];

  const optimizationStrategies = [
    {
      title: 'Performance First',
      description: 'Solicita lazy loading, code splitting y optimización de imágenes desde el inicio'
    },
    {
      title: 'Component Architecture',
      description: 'Pide componentes reutilizables y modulares para facilitar el mantenimiento'
    },
    {
      title: 'State Management',
      description: 'Especifica si necesitas estado global complejo o si el estado local es suficiente'
    },
    {
      title: 'Error Handling',
      description: 'Solicita manejo de errores robusto y mensajes de feedback para el usuario'
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-orange-600" />
            Mejores Prácticas para Prompts Efectivos
          </CardTitle>
          <CardDescription>
            Consejos para obtener resultados óptimos en el desarrollo de tu aplicación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {promptTips.map((tip, index) => (
              <div key={index} className="border-l-4 border-l-blue-500 pl-4 py-2">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{tip.category}</Badge>
                </div>
                <p className="text-sm mb-2">{tip.tip}</p>
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded text-xs">
                  <strong>Ejemplo:</strong> {tip.example}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              QUÉ SÍ HACER
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {dosList.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              QUÉ NO HACER
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {dontsList.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5 text-purple-600" />
            Estrategias de Optimización
          </CardTitle>
          <CardDescription>
            Enfoques para maximizar la calidad y escalabilidad de tu aplicación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {optimizationStrategies.map((strategy, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h3 className="font-semibold text-sm mb-2">{strategy.title}</h3>
                <p className="text-xs text-muted-foreground">{strategy.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Alert>
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Consejo Pro</AlertTitle>
        <AlertDescription>
          Para proyectos complejos, comienza con un MVP (Producto Mínimo Viable) y ve añadiendo funcionalidades 
          progresivamente. Esto permite iterar rápidamente y obtener feedback continuo sobre el desarrollo.
        </AlertDescription>
      </Alert>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Recuerda</AlertTitle>
        <AlertDescription>
          Puedo crear aplicaciones completamente funcionales, pero para integraciones con servicios externos 
          (bases de datos, APIs de terceros, pagos) necesitarás configurar esos servicios por separado. 
          Te ayudo con toda la lógica frontend y la interfaz de usuario.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default BestPractices;
