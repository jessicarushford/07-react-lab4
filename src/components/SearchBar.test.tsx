import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

test("searchBar updates state on form input", () => {
  //   1. arrange
  render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );

  //   2. act
  const inputElement = screen.getByRole("textbox");
  fireEvent.change(inputElement, { target: { value: "Jess" } });

  //   3. assert
  const testElement = screen.getByText("Jess");
  expect(testElement).toBeInTheDocument();
});
