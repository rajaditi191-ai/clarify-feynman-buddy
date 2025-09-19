import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Brain, Calendar, MessageCircle, Lightbulb, Search } from "lucide-react";
import heroImage from "@/assets/hero-books.jpg";
import aiTutorImage from "@/assets/ai-tutor.jpg";
import scheduleImage from "@/assets/study-schedule.jpg";

interface ConceptAnalysis {
  simplifiedExplanation: string;
  complexWords: Array<{
    word: string;
    definition: string;
  }>;
  keyPoints: string[];
}

export const FeynmanAssistant = () => {
  const [activeTab, setActiveTab] = useState("concept");
  const [concept, setConcept] = useState("");
  const [analysis, setAnalysis] = useState<ConceptAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeConcept = async () => {
    if (!concept.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate AI analysis - in a real app, this would call an AI API
    setTimeout(() => {
      setAnalysis({
        simplifiedExplanation: `Let me explain ${concept} in simple terms:\n\nImagine you're explaining this to a 10-year-old. ${concept} is like a puzzle piece that fits into a bigger picture. The key is to break it down into smaller, understandable parts that connect to things we already know.\n\nThink of it as building blocks - each part supports the next, creating a solid foundation of understanding.`,
        complexWords: [
          { word: "paradigm", definition: "A typical example or pattern of something; a model" },
          { word: "methodology", definition: "A system of methods used in a particular area of study" },
          { word: "synthesis", definition: "The combination of ideas to form a theory or system" }
        ],
        keyPoints: [
          "Break complex ideas into simple components",
          "Use analogies and real-world examples", 
          "Connect new concepts to existing knowledge",
          "Practice explaining without jargon",
          "Test understanding by teaching others"
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const renderConceptAnalyzer = () => (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 gradient-learning rounded-full shadow-glow">
          <Brain className="h-8 w-8 text-learning-foreground" />
        </div>
        <h2 className="text-3xl font-bold text-foreground">Feynman Concept Analyzer</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Enter any complex concept and I'll help you break it down into simple, understandable terms using the Feynman Technique.
        </p>
      </div>

      <Card className="card-learning border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            What concept would you like to understand?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="e.g., Quantum mechanics, Machine learning, Photosynthesis..."
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            className="input-focus min-h-[100px] text-lg"
          />
          <Button 
            onClick={analyzeConcept} 
            disabled={!concept.trim() || isAnalyzing}
            className="btn-learning w-full text-lg py-6"
          >
            {isAnalyzing ? (
              <>
                <Lightbulb className="mr-2 h-5 w-5 animate-pulse" />
                Analyzing Concept...
              </>
            ) : (
              <>
                <Search className="mr-2 h-5 w-5" />
                Simplify This Concept
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {analysis && (
        <div className="space-y-6">
          <Card className="card-learning">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Lightbulb className="h-5 w-5" />
                Simplified Explanation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed whitespace-pre-line text-lg">
                {analysis.simplifiedExplanation}
              </p>
            </CardContent>
          </Card>

          <Card className="card-learning">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-learning">
                <BookOpen className="h-5 w-5" />
                Complex Words Explained
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {analysis.complexWords.map((item, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4 py-2">
                    <Badge variant="secondary" className="mb-2 text-sm font-semibold">
                      {item.word}
                    </Badge>
                    <p className="text-muted-foreground">{item.definition}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-learning">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-success">
                <Brain className="h-5 w-5" />
                Key Learning Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {analysis.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 gradient-success rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );

  const renderAITutor = () => (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <img 
          src={aiTutorImage} 
          alt="AI Tutor" 
          className="w-24 h-24 mx-auto rounded-full shadow-learning"
        />
        <h2 className="text-3xl font-bold text-foreground">AI Learning Tutor</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Chat with your personal AI tutor for detailed explanations, examples, and guided learning.
        </p>
      </div>
      
      <Card className="card-learning min-h-[500px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Chat with AI Tutor
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-20 text-muted-foreground">
            <MessageCircle className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p>AI Tutor feature coming soon!</p>
            <p className="text-sm mt-2">This will include real-time chat with AI for personalized learning assistance.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderStudyPlanner = () => (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <img 
          src={scheduleImage} 
          alt="Study Schedule" 
          className="w-24 h-24 mx-auto rounded-full shadow-learning"
        />
        <h2 className="text-3xl font-bold text-foreground">Personalized Study Planner</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Create a customized learning schedule based on the Feynman Technique principles.
        </p>
      </div>
      
      <Card className="card-learning min-h-[500px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Your Learning Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-20 text-muted-foreground">
            <Calendar className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p>Study Planner feature coming soon!</p>
            <p className="text-sm mt-2">This will include personalized timetables and learning milestones.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen gradient-books relative overflow-hidden">
      {/* Floating background books */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-primary opacity-20 rounded animate-float" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-learning opacity-15 rounded animate-float-delayed" />
        <div className="absolute bottom-32 left-20 w-10 h-10 bg-success opacity-10 rounded animate-float-slow" />
        <div className="absolute top-60 left-1/2 w-4 h-4 bg-warning opacity-20 rounded animate-float" />
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          <div 
            className="absolute inset-0 opacity-20 rounded-3xl"
            style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="relative z-10 py-16 px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
              Feynman Learning Assistant
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto">
              Master any concept by explaining it simply. Break down complexity into understanding.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => setActiveTab("concept")}
                variant={activeTab === "concept" ? "default" : "outline"}
                size="lg"
                className={activeTab === "concept" ? "btn-learning" : ""}
              >
                <Brain className="mr-2 h-5 w-5" />
                Concept Analyzer
              </Button>
              <Button
                onClick={() => setActiveTab("tutor")}
                variant={activeTab === "tutor" ? "default" : "outline"}
                size="lg"
                className={activeTab === "tutor" ? "btn-learning" : ""}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                AI Tutor
              </Button>
              <Button
                onClick={() => setActiveTab("planner")}
                variant={activeTab === "planner" ? "default" : "outline"}
                size="lg"
                className={activeTab === "planner" ? "btn-learning" : ""}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Study Planner
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === "concept" && renderConceptAnalyzer()}
          {activeTab === "tutor" && renderAITutor()}
          {activeTab === "planner" && renderStudyPlanner()}
        </div>
      </div>
    </div>
  );
};