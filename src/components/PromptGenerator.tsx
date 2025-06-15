
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Copy, Sparkles, Code, Rocket } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PromptGenerator = () => {
  const [projectType, setProjectType] = useState('');
  const [complexity, setComplexity] = useState('');
  const [features, setFeatures] = useState('');
  const [designStyle, setDesignStyle] = useState('');
  const [customRequirements, setCustomRequirements] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const { toast } = useToast();

  const projectTypes = [
    'SaaS Dashboard',
    'E-commerce Platform',
    'Landing Page',
    'Portfolio Website',
    'Blog Platform',
    'Task Management App',
    'Social Media App',
    'Real Estate Platform',
    'Educational Platform',
    'Healthcare App',
    'Financial Dashboard',
    'Food Delivery App'
  ];

  const complexityLevels = [
    'Básico - Funcionalidades esenciales',
    'Intermedio - Múltiples features integradas',
    'Avanzado - Arquitectura compleja y escalable'
  ];

  const designStyles = [
    'Moderno y Minimalista',
    'Corporativo Profesional',
    'Creativo y Colorido',
    'Dark Mode Premium',
    'Glassmorphism',
    'Neomorphism',
    'Material Design',
    'Apple-inspired'
  ];

  const generatePrompt = () => {
    if (!projectType || !complexity || !designStyle) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa al menos el tipo de proyecto, complejidad y estilo de diseño.",
        variant: "destructive"
      });
      return;
    }

    const prompt = `Crea una aplicación ${projectType.toLowerCase()} con nivel de complejidad ${complexity.toLowerCase()}.

🎨 **DISEÑO Y UX:**
- Estilo: ${designStyle}
- Implementa un diseño responsive y moderno
- Utiliza Tailwind CSS con animaciones fluidas
- Incorpora micro-interacciones y estados hover elegantes
- Asegúrate de que sea accesible (a11y)

⚡ **FUNCIONALIDADES CORE:**
${features ? `- ${features.split(',').map(f => f.trim()).join('\n- ')}` : '- Implementa las funcionalidades típicas de este tipo de aplicación'}

🏗️ **ARQUITECTURA Y TECNOLOGÍAS:**
- Utiliza componentes React modulares y reutilizables
- Implementa TypeScript para type safety
- Usa shadcn/ui para componentes base
- Integra React Query para manejo de estado server
- Aplica patrones de diseño escalables

📱 **RESPONSIVIDAD:**
- Design mobile-first
- Breakpoints optimizados para tablet y desktop
- Navegación adaptativa según el dispositivo

🎯 **PERFORMANCE:**
- Lazy loading donde sea apropiado
- Optimización de imágenes
- Code splitting para mejor tiempo de carga

${customRequirements ? `\n🔧 **REQUISITOS ESPECÍFICOS:**\n${customRequirements}` : ''}

Por favor, implementa esto paso a paso, comenzando con la estructura base y luego añadiendo funcionalidades progresivamente. Asegúrate de que cada componente sea completamente funcional antes de proceder al siguiente.`;

    setGeneratedPrompt(prompt);
    toast({
      title: "¡Prompt generado!",
      description: "Tu prompt optimizado está listo para usar."
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    toast({
      title: "¡Copiado!",
      description: "El prompt ha sido copiado al portapapeles."
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-500" />
            Generador de Prompts Optimizados para Lovable
          </CardTitle>
          <CardDescription>
            Crea prompts especializados para obtener el máximo rendimiento, escalabilidad y potencia
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="project-type">Tipo de Proyecto *</Label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el tipo de proyecto" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="complexity">Nivel de Complejidad *</Label>
              <Select value={complexity} onValueChange={setComplexity}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona la complejidad" />
                </SelectTrigger>
                <SelectContent>
                  {complexityLevels.map((level) => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="design-style">Estilo de Diseño *</Label>
            <Select value={designStyle} onValueChange={setDesignStyle}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona el estilo de diseño" />
              </SelectTrigger>
              <SelectContent>
                {designStyles.map((style) => (
                  <SelectItem key={style} value={style}>{style}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="features">Funcionalidades Específicas</Label>
            <Input
              id="features"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              placeholder="Ej: autenticación, dashboard, pagos, notificaciones (separadas por comas)"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-requirements">Requisitos Adicionales</Label>
            <Textarea
              id="custom-requirements"
              value={customRequirements}
              onChange={(e) => setCustomRequirements(e.target.value)}
              placeholder="Describe cualquier requisito específico, integración especial, o característica única..."
              rows={3}
            />
          </div>

          <Button onClick={generatePrompt} className="w-full" size="lg">
            <Rocket className="h-4 w-4 mr-2" />
            Generar Prompt Optimizado
          </Button>
        </CardContent>
      </Card>

      {generatedPrompt && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Code className="h-5 w-5 text-green-600" />
                Tu Prompt Optimizado
              </span>
              <Button onClick={copyToClipboard} variant="outline" size="sm">
                <Copy className="h-4 w-4 mr-2" />
                Copiar
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border">
              <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200">
                {generatedPrompt}
              </pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PromptGenerator;
