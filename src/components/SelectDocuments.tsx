import CloseIcon from "./Icons/CloseIcon";
import CheckIcon from "./Icons/CheckIcon";
import Input from "./Common/Input";
import { useEffect, useMemo, useState } from "react";

export interface IDocument {
  id: number;
  name: string;
}

export default function DocumentSelection({
  selectedDocuments,
  setSelectedDocuments,
}: {
  selectedDocuments: IDocument[];
  setSelectedDocuments: React.Dispatch<React.SetStateAction<IDocument[]>>;
}) {
  const [searchedDocuments, setSearchDocument] = useState<IDocument[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");

  const docsToRender = useMemo(() => {
    if (!!searchKey) {
      return searchedDocuments;
    } else {
      return selectedDocuments;
    }
  }, [selectedDocuments, searchedDocuments, searchKey]);

  const removeObjectById = (id: number) => {
    const newArray = selectedDocuments.filter((item) => item.id !== id);
    setSelectedDocuments(newArray);
  };

  const filterArrayBySearch = (searchText: string) => {
    const newArray = selectedDocuments.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setSearchDocument(newArray);
  };

  useEffect(() => {
    !!searchKey && filterArrayBySearch(searchKey);
  }, [searchKey]);

  return (
    <div className="h-full bg-white px-3 py-3 border rounded-md flex flex-col justify-normal gap-5">
      <div className="flex flex-col gap-3">
        <p className="text-gray-900 font-semibold text-base">
          Selected Documents
        </p>
        <Input onChange={(e) => setSearchKey(e.target.value)} />
      </div>

      {docsToRender.length > 0 ? (
        <div
          className={
            "bg-white-100 border border-[#0E9F6E] rounded-md w-[99%] mx-auto"
          }
        >
          <div className="flex flex-col justify-evenly items-start text-gray-900 w-full gap-5 py-3">
            {docsToRender.map((content, index) => (
              <div className="flex justify-between items-center w-full px-3">
                <div className="flex justify-start gap-2 items-center">
                  <button className="w-[20px] h-[20px] flex justify-center items-center">
                    <CheckIcon />
                  </button>
                  <p key={index}>{content.name}</p>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    removeObjectById(content.id);
                  }}
                >
                  <CloseIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={"bg-gray-100 border rounded-md w-[99%] h-full mx-auto"}>
          <div className="flex flex-col justify-evenly items-start text-gray-900 w-full gap-5 py-3">
            <div className={`flex  justify-center items-center w-full `}>
              <div
                className={`flex flex-col mt-5 justify-center items-center gap-10  max-w-sm`}
              >
                <img src="/icon.png" alt="icon" />
                <p className="text-center text-sm text-gray-400 align-center">
                  Select documents from the left panel to have employees review
                  them and provide a signature acknowledging review
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
