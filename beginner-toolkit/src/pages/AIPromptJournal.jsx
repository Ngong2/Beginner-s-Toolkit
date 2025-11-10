import React, { useState } from "react";

function AIPromptJournal() {
  const [prompts, setPrompts] = useState([]);
  const [input, setInput] = useState("");

  const addPrompt = () => {
    if (input.trim() !== "") {
      setPrompts([...prompts, input]);
      setInput("");
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">AI Prompt Journal</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter AI prompt..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l"
        />
        <button
          onClick={addPrompt}
          className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="list-disc list-inside">
        {prompts.map((prompt, idx) => (
          <li key={idx} className="mb-1 text-gray-700">{prompt}</li>
        ))}
      </ul>
    </div>
  );
}

export default AIPromptJournal;
