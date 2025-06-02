
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Cpu, Database, Globe, Zap, Brain, Shield, Smartphone, Cloud } from 'lucide-react';

const InteractiveTechDemo = () => {
  const [activeDemo, setActiveDemo] = useState('ai-simulation');
  const [aiProgress, setAiProgress] = useState(0);
  const [networkNodes, setNetworkNodes] = useState(5);
  const [securityLevel, setSecurityLevel] = useState(50);
  
  // AI Learning Simulation
  useEffect(() => {
    if (activeDemo === 'ai-simulation') {
      const interval = setInterval(() => {
        setAiProgress(prev => (prev >= 100 ? 0 : prev + 2));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [activeDemo]);

  const techMetrics = [
    { name: 'Global Connectivity', value: 87, icon: Globe, color: 'text-blue-400' },
    { name: 'AI Processing Power', value: aiProgress, icon: Brain, color: 'text-purple-400' },
    { name: 'Security Score', value: securityLevel, icon: Shield, color: 'text-green-400' },
    { name: 'Mobile Adoption', value: 94, icon: Smartphone, color: 'text-orange-400' },
  ];

  const CodeAnimation = () => {
    const [currentLine, setCurrentLine] = useState(0);
    const codeLines = [
      "// Analyzing global tech trends...",
      "const innovation = await processTechData();",
      "if (innovation.impact > threshold) {",
      "  society.transform(innovation);",
      "  console.log('Tech revolution in progress');",
      "}",
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentLine(prev => (prev + 1) % codeLines.length);
      }, 1500);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="bg-[rgb(var(--rich-black-3))] p-4 rounded-lg border border-[rgb(var(--penn-blue))] font-mono text-sm">
        {codeLines.map((line, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index === currentLine 
                ? 'text-[rgb(var(--penn-blue))] opacity-100' 
                : 'text-[rgb(var(--french-gray))] opacity-50'
            }`}
          >
            {line}
          </div>
        ))}
      </div>
    );
  };

  const NetworkVisualization = () => {
    return (
      <div className="relative h-40 bg-[rgb(var(--rich-black-3))] rounded-lg border border-[rgb(var(--penn-blue))] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: networkNodes }, (_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-[rgb(var(--penn-blue))] rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.5}s`,
                position: 'absolute',
                left: `${20 + (i * 15)}%`,
                top: `${30 + Math.sin(i) * 20}%`,
              }}
            />
          ))}
          <svg className="absolute inset-0 w-full h-full">
            {Array.from({ length: networkNodes - 1 }, (_, i) => (
              <line
                key={i}
                x1={`${20 + (i * 15)}%`}
                y1={`${30 + Math.sin(i) * 20}%`}
                x2={`${20 + ((i + 1) * 15)}%`}
                y2={`${30 + Math.sin(i + 1) * 20}%`}
                stroke={`rgb(var(--penn-blue))`}
                strokeWidth="1"
                opacity="0.6"
              />
            ))}
          </svg>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[rgb(var(--rich-black-2))] to-[rgb(var(--rich-black))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Interactive Tech Impact Demo</span>
          </h2>
          <p className="text-xl text-[rgb(var(--french-gray))] max-w-2xl mx-auto">
            Experience real-time visualizations of technology's influence on society through our interactive demonstrations.
          </p>
        </div>

        <Tabs value={activeDemo} onValueChange={setActiveDemo} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 bg-[rgb(var(--rich-black-3))] mb-8">
            <TabsTrigger value="ai-simulation" className="data-[state=active]:bg-[rgb(var(--penn-blue))]">
              <Brain className="h-4 w-4 mr-2" />
              AI Learning
            </TabsTrigger>
            <TabsTrigger value="network-analysis" className="data-[state=active]:bg-[rgb(var(--penn-blue))]">
              <Globe className="h-4 w-4 mr-2" />
              Global Network
            </TabsTrigger>
            <TabsTrigger value="security-monitor" className="data-[state=active]:bg-[rgb(var(--penn-blue))]">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="code-evolution" className="data-[state=active]:bg-[rgb(var(--penn-blue))]">
              <Cpu className="h-4 w-4 mr-2" />
              Code Evolution
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ai-simulation" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[rgb(var(--rich-black))] border-[rgb(var(--penn-blue))] hover-glow">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--french-gray))] flex items-center">
                    <Brain className="h-6 w-6 mr-2 text-[rgb(var(--penn-blue))]" />
                    AI Learning Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Progress value={aiProgress} className="h-3" />
                    <p className="text-[rgb(var(--french-gray))] text-sm">
                      Simulating AI model training: {aiProgress}% complete
                    </p>
                    <div className="text-xs text-[rgb(var(--french-gray))] opacity-70">
                      Demonstrating how AI systems learn and adapt over time
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[rgb(var(--rich-black))] border-[rgb(var(--penn-blue))] hover-glow">
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--french-gray))]">Real-Time Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {techMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <metric.icon className={`h-4 w-4 ${metric.color}`} />
                          <span className="text-sm text-[rgb(var(--french-gray))]">{metric.name}</span>
                        </div>
                        <span className={`font-semibold ${metric.color}`}>{metric.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="network-analysis" className="space-y-6">
            <Card className="bg-[rgb(var(--rich-black))] border-[rgb(var(--penn-blue))] hover-glow">
              <CardHeader>
                <CardTitle className="text-[rgb(var(--french-gray))] flex items-center">
                  <Globe className="h-6 w-6 mr-2 text-[rgb(var(--penn-blue))]" />
                  Global Network Visualization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <NetworkVisualization />
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[rgb(var(--french-gray))]">Network Nodes: {networkNodes}</span>
                  <div className="space-x-2">
                    <Button 
                      size="sm" 
                      onClick={() => setNetworkNodes(Math.max(3, networkNodes - 1))}
                      className="bg-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))/0.8]"
                    >
                      -
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => setNetworkNodes(Math.min(8, networkNodes + 1))}
                      className="bg-[rgb(var(--penn-blue))] hover:bg-[rgb(var(--penn-blue))/0.8]"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security-monitor" className="space-y-6">
            <Card className="bg-[rgb(var(--rich-black))] border-[rgb(var(--penn-blue))] hover-glow">
              <CardHeader>
                <CardTitle className="text-[rgb(var(--french-gray))] flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-[rgb(var(--penn-blue))]" />
                  Cybersecurity Monitor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[rgb(var(--french-gray))]">Security Level</span>
                    <span className="font-semibold text-green-400">{securityLevel}%</span>
                  </div>
                  <Progress value={securityLevel} className="h-3" />
                  <div className="flex space-x-2">
                    <Button 
                      size="sm"
                      onClick={() => setSecurityLevel(Math.max(0, securityLevel - 10))}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Simulate Attack
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => setSecurityLevel(Math.min(100, securityLevel + 15))}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Deploy Defense
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="code-evolution" className="space-y-6">
            <Card className="bg-[rgb(var(--rich-black))] border-[rgb(var(--penn-blue))] hover-glow">
              <CardHeader>
                <CardTitle className="text-[rgb(var(--french-gray))] flex items-center">
                  <Cpu className="h-6 w-6 mr-2 text-[rgb(var(--penn-blue))]" />
                  Live Code Evolution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CodeAnimation />
                <p className="mt-4 text-sm text-[rgb(var(--french-gray))] opacity-70">
                  Watch how technology continues to evolve and shape our world through code
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InteractiveTechDemo;
