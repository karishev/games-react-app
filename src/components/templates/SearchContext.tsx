import { createContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

const initialState = {
  input: "",
  setInput: () => {},
};

export const SearchContext = createContext<ContextProps>(initialState);

interface Searchprops {
  children: React.ReactNode;
}

export const SearchProvider: React.FC<Searchprops> = ({ children }) => {
  const [input, setInput] = useState("");
  return (
    <SearchContext.Provider value={{ input: input, setInput: setInput }}>
      {children}
    </SearchContext.Provider>
  );
};
