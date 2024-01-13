import Accordion from "./Common/Accordion";
import Toggle from "./Common/Toggle";
import documents from "../mockData/documents.json";
import Input from "./Common/Input";

export interface IDocument {
  id: number;
  name: string;
}

export default function AvailableDocuments({
  selectedDocuments,
  setSelectedDocuments,
}: {
  selectedDocuments: IDocument[];
  setSelectedDocuments: React.Dispatch<React.SetStateAction<IDocument[]>>;
}) {
  const selectAllDocuments = (status: boolean) => {
    if (status) {
      documents.forEach((d) => {
        d.documents.forEach((doc) => {
          handleDocumentSelect(doc.name, doc.id);
        });
      });
    } else {
      setSelectedDocuments([]);
    }
  };

  const handleDocumentSelect = (name: string, id: number) => {
    if (selectedDocuments.findIndex((c) => c.id === id) < 0) {
      setSelectedDocuments(
        (prevSelectedDocuments: IDocument[]): IDocument[] => [
          ...prevSelectedDocuments,
          {
            id,
            name,
          },
        ]
      );
    }
  };
  return (
    <div className=" bg-white px-3 py-3 border rounded-md border-orange500 flex flex-col justify-normal gap-5">
      <div className="flex flex-col gap-3">
        <p className="text-gray-900 text-base font-semibold">
          Available Documents
        </p>
        <Input />
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-900 text-base font-semibold">
          {documents?.length} Available Documents
        </p>
        <Toggle toggle={selectAllDocuments} />
      </div>
      <div className="border border-orange-500 rounded-md">
        <Accordion
          onDocumentSelect={handleDocumentSelect}
          accordionItems={documents}
        />
      </div>
    </div>
  );
}
