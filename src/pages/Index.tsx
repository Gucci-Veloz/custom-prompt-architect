
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PromptGenerator from '@/components/PromptGenerator';
import TechCapabilities from '@/components/TechCapabilities';
import BestPractices from '@/components/BestPractices';
import { 
  Sparkles, 
  Code, 
  Lightbulb, 
  Zap, 
  Target,
  Rocket,
  Globe,
  Database
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <Sparkles className="h-12 w-12 text-blue-600 animate-pulse" />
              <div className="absolute inset-0 h-12 w-12 text-blue-400 animate-ping opacity-20">
                <Sparkles className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Lovable AI Specialist
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Plantilla especializada para maximizar el rendimiento, escalabilidad y potencia 
            en el desarrollo de aplicaciones web modernas
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="text-sm">
              <Code className="h-3 w-3 mr-1" />
              React + TypeScript
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Globe className="h-3 w-3 mr-1" />
              Web Applications
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Zap className="h-3 w-3 mr-1" />
              High Performance
            </Badge>
            <Badge variant="secondary" className="text-sm">
              <Target className="h-3 w-3 mr-1" />
              Scalable Architecture
            </Badge>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-muted-foreground">Lenguajes Soportados</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Database className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">6+</div>
                <div className="text-sm text-muted-foreground">Tipos de Software</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Rocket className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-muted-foreground">Funcionalidad Completa</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-bold">∞</div>
                <div className="text-sm text-muted-foreground">Posibilidades</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="generator" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto mb-8">
            <TabsTrigger value="generator" className="flex items-center gap-2 py-3">
              <Sparkles className="h-4 w-4" />
              Generador de Prompts
            </TabsTrigger>
            <TabsTrigger value="capabilities" className="flex items-center gap-2 py-3">
              <Code className="h-4 w-4" />
              Capacidades Técnicas
            </TabsTrigger>
            <TabsTrigger value="best-practices" className="flex items-center gap-2 py-3">
              <Lightbulb className="h-4 w-4" />
              Mejores Prácticas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="generator" className="space-y-6">
            <PromptGenerator />
          </TabsContent>

          <TabsContent value="capabilities" className="space-y-6">
            <TechCapabilities />
          </TabsContent>

          <TabsContent value="best-practices" className="space-y-6">
            <BestPractices />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-none">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">¿Listo para crear tu próxima aplicación?</h3>
              <p className="text-muted-foreground mb-4">
                Utiliza el generador de prompts para obtener resultados óptimos y crear aplicaciones 
                web modernas, escalables y de alto rendimiento.
              </p>
              <div className="flex justify-center">
                <Badge variant="outline" className="text-sm">
                  Powered by Lovable AI ✨
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
