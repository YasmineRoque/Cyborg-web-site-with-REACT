import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import SectionHeader from "../components/SectionHeader/SectionHeader";

test("renders Cyborg text in h4 tag", () => {
  const titleValue = "Cyborg"
  render(<SectionHeader>{titleValue}</SectionHeader>);
  const titleElement = screen.getByText(titleValue);
  expect(titleElement).toBeInTheDocument();
  expect(titleElement.tagName).toBe("H4");
});
