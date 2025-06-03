
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bold, Italic, Code, Link, Image, Eye, Edit } from 'lucide-react';

const MarkdownEditor = () => {
  const [content, setContent] = useState(`# Welcome to Tech Expo Nexus

## About This Project

This is a **collaborative platform** for students to share their innovative projects and participate in tech bootcamps.

### Features
- Real-time collaboration
- Rich markdown editing
- Media embedding
- Project showcasing

\`\`\`javascript
function hello() {
  console.log("Hello, Tech Expo!");
}
\`\`\`

> "Innovation distinguishes between a leader and a follower." - Steve Jobs
`);

  const renderMarkdown = (text: string) => {
    // Simple markdown rendering for preview
    return text
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-electric-blue mb-4">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold text-glacier-white mb-3">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium text-glacier-white mb-2">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-electric-blue">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-cyber-cyan">$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-soft-charcoal px-2 py-1 rounded text-cyber-cyan">$1</code>')
      .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-electric-blue pl-4 text-glacier-white/80 italic mb-4">$1</blockquote>')
      .replace(/\n/g, '<br />');
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card className="tech-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-glacier-white flex items-center">
            <Edit className="h-6 w-6 mr-2 text-electric-blue" />
            Markdown Editor
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <div className="mb-4 flex flex-wrap gap-2">
            <Button variant="ghost" size="sm" className="text-glacier-white hover:text-electric-blue">
              <Bold className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-glacier-white hover:text-electric-blue">
              <Italic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-glacier-white hover:text-electric-blue">
              <Code className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-glacier-white hover:text-electric-blue">
              <Link className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-glacier-white hover:text-electric-blue">
              <Image className="h-4 w-4" />
            </Button>
          </div>
          
          <Tabs defaultValue="edit" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-soft-charcoal">
              <TabsTrigger value="edit" className="data-[state=active]:bg-electric-blue data-[state=active]:text-tech-dark">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </TabsTrigger>
              <TabsTrigger value="preview" className="data-[state=active]:bg-electric-blue data-[state=active]:text-tech-dark">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="edit" className="mt-4">
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[400px] bg-soft-charcoal border-electric-blue/30 text-glacier-white resize-none font-mono"
                placeholder="Start writing your markdown content..."
              />
            </TabsContent>
            
            <TabsContent value="preview" className="mt-4">
              <div 
                className="min-h-[400px] p-4 bg-soft-charcoal rounded-lg border border-electric-blue/30 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
              />
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-end space-x-4 mt-6">
            <Button variant="outline" className="border-electric-blue/30 text-glacier-white hover:bg-electric-blue/10">
              Save Draft
            </Button>
            <Button className="tech-button">
              Publish Content
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarkdownEditor;
