import { Card, styled } from "@mui/material";
import { useContext, useRef } from "react";
import { SearchContext } from "../../templates/SearchContext";

export const Search = () => {
  const userInput = useRef<HTMLInputElement>(null!);

  const { setInput } = useContext(SearchContext);

  const HandleInput = () => {
    setInput(userInput.current.value);
  };

  return (
    <>
      <StyledInput
        ref={userInput}
        onChange={HandleInput}
        placeholder="Search"
      />
      <Card></Card>
    </>
  );
};

const StyledInput = styled("input")({
  backgroundColor: "lightgray",
  borderRadius: 20,
  marginLeft: "2rem",
  position: "relative",
  border: "1px solid black",
  height: "2.5rem",
  fontSize: 16,
  width: "auto",
  padding: "10px 12px",
  marginTop: "1rem",
});
