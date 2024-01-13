import { useState } from "react";
import "./App.css";
import AvailableDocuments from "./components/AvailableDocuments";
import SelectDocuments, { IDocument } from "./components/SelectDocuments";

function App() {
  const [selectedDocuments, setSelectedDocuments] = useState<IDocument[]>([]);

  return (
    <div className="px-5 py-5 flex justify-center">
      <div className="w-full h-full border grid-cols-2  max-w-screen-lg border-gray-300 rounded-lg items-stretch grid  justify-center gap-6 py-5 px-3">
        <AvailableDocuments
          selectedDocuments={selectedDocuments}
          setSelectedDocuments={setSelectedDocuments}
        />
        <SelectDocuments
          selectedDocuments={selectedDocuments}
          setSelectedDocuments={setSelectedDocuments}
        />
      </div>
    </div>
  );
}

export default App;
