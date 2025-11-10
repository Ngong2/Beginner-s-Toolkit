import React from "react";
import HelloWorld from "./components/HelloWorld";
import AIPromptJournal from "./pages/AIPromptJournal";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Beginner Toolkit</h1>
      <HelloWorld />
      <AIPromptJournal />
    </div>
  );
}

export default App;
