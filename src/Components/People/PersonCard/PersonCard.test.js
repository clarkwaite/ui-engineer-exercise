import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PeopleMock from "./../../../Utils/Mocks/PeopleMock.json";
import PersonCard from "./PersonCard";

describe("Person Card Component Tests", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(PeopleMock),
      })
    );
  });

  test("Person Card Renders", async () => {
    render(<PersonCard name={"people"} />);

    const person = await waitFor(() =>
      screen.getByTestId("person-card-container")
    );

    expect(person).toHaveTextContent("Gary Glover");
  });
});
