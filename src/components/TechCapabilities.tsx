
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Palette,
  Zap,
  Shield,
  BarChart3,
  Cloud,
  Cpu
} from 'lucide-react';

const TechCapabilities = () => {
  const programmingLanguages = [
    { name: 'TypeScript', level: 'Experto', color: 'bg-blue-500' },
    { name: 'JavaScript', level: 'Experto', color: 'bg-yellow-500' },
    { name: 'HTML5', level: 'Experto', color: 'bg-orange-500' },
    { name: 'CSS3', level: 'Experto', color: 'bg-blue-400' },
    { name: 'JSX/TSX', level: 'Experto', color: 'bg-cyan-500' }
  ];

  const frameworks = [
    { name: 'React 18+', description: 'Framework principal con hooks modernos' },
    { name: 'Vite', description: 'Build tool y dev server ultra-rápido' },
    { name: 'Tailwind CSS', description: 'Framework CSS utility-first' },
    { name: 'shadcn/ui', description: 'Componentes UI modernos' },
    { name: 'React Router', description: 'Navegación SPA avanzada' },
    { name: 'React Query', description: 'Estado del servidor optimizado' },
    { name: 'React Hook Form', description: 'Manejo de formularios performante' }
  ];

  const softwareTypes = [
    {
      type: 'SaaS (Software as a Service)',
      icon: <Cloud className="h-5 w-5" />,
      examples: ['Dashboards empresariales', 'CRM/ERP', 'Herramientas de productividad', 'Plataformas de análisis'],
      capabilities: 'Autenticación, subscripciones, multi-tenancy, APIs, integración con servicios externos'
    },
    {
      type: 'PaaS Frontend (Platform as a Service)',
      icon: <Cpu className="h-5 w-5" />,
      examples: ['Admin panels', 'Herramientas de desarrollo', 'Interfaces de configuración', 'Paneles de control'],
      capabilities: 'Interfaces complejas, workflows, gestión de usuarios, configuraciones avanzadas'
    },
    {
      type: 'JAMstack Applications',
      icon: <Zap className="h-5 w-5" />,
      examples: ['Landing pages', 'Blogs', 'Portfolios', 'Documentación', 'E-commerce frontend'],
      capabilities: 'SSG, SEO optimizado, CDN ready, performance extremo'
    },
    {
      type: 'PWA (Progressive Web Apps)',
      icon: <Smartphone className="h-5 w-5" />,
      examples: ['Apps móviles web', 'Herramientas offline', 'Apps de productividad'],
      capabilities: 'Offline-first, push notifications, instalación nativa'
    },
    {
      type: 'Data Visualization Platforms',
      icon: <BarChart3 className="h-5 w-5" />,
      examples: ['Dashboards analíticos', 'Reportes interactivos', 'Business Intelligence'],
      capabilities: 'Charts complejos, filtros dinámicos, exportación de datos'
    },
    {
      type: 'E-commerce Frontends',
      icon: <Globe className="h-5 w-5" />,
      examples: ['Tiendas online', 'Marketplaces', 'Catálogos de productos'],
      capabilities: 'Carrito de compras, checkout, catálogos, búsqueda avanzada'
    }
  ];

  const advancedFeatures = [
    'Autenticación y autorización completa',
    'Integración con APIs REST y GraphQL',
    'Real-time con WebSockets',
    'File uploads y manejo de media',
    'Internacionalización (i18n)',
    'Dark/Light mode',
    'Responsive design avanzado',
    'Animaciones y micro-interacciones',
    'SEO optimization',
    'Performance optimization',
    'Error boundaries y manejo de errores',
    'Testing integration ready'
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-purple-600" />
            Lenguajes de Programación Soportados
          </CardTitle>
          <CardDescription>
            Tecnologías core que domino completamente para el desarrollo web moderno
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programmingLanguages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">{lang.name}</h4>
                  <Badge variant="secondary" className="text-xs">{lang.level}</Badge>
                </div>
                <div className={`w-3 h-3 rounded-full ${lang.color}`}></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-green-600" />
            Stack Tecnológico Completo
          </CardTitle>
          <CardDescription>
            Frameworks y librerías que utilizo para crear aplicaciones robustas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frameworks.map((framework) => (
              <div key={framework.name} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-sm mb-1">{framework.name}</h4>
                <p className="text-xs text-muted-foreground">{framework.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-600" />
            Tipos de Software que Puedo Crear (0 a 100% Funcional)
          </CardTitle>
          <CardDescription>
            Aplicaciones completas que puedo desarrollar desde cero hasta producción
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {softwareTypes.map((software) => (
              <div key={software.type} className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  {software.icon}
                  <h3 className="font-semibold">{software.type}</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Ejemplos:</h4>
                    <div className="flex flex-wrap gap-1">
                      {software.examples.map((example) => (
                        <Badge key={example} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Capacidades:</h4>
                    <p className="text-xs text-muted-foreground">{software.capabilities}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-600" />
            Funcionalidades Avanzadas
          </CardTitle>
          <CardDescription>
            Features complejas que puedo implementar en cualquier aplicación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {advancedFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2 p-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechCapabilities;
