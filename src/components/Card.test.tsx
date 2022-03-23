import { render, screen } from "@testing-library/react";
import { title } from "process";
import { BrowserRouter } from "react-router-dom";
import Gif from "../models/Gif";
import Card from "./Card";

const dummyGif: Gif = {
  id: "abc",
  title: "test-title",
  username: "jess",
  import_datetime: "today",
  url: "www.google.com",
  images: {
    original: {
      url: "test url",
    },
  },
};

test("renders prop title", () => {
  render(
    <BrowserRouter>
      <Card singleGif={dummyGif} />
    </BrowserRouter>
  );
  const titleElement = screen.getByText("test-title");
  expect(titleElement).toBeInTheDocument();
});
