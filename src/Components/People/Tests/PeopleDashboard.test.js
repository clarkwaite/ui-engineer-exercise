import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import PeopleDashboard from "../PeopleDashboard/PeopleDashboard";

describe("PeopleDashboard Tests", () => {
  test("PeopleDashboard Component Selector Works", async () => {
    render(<PeopleDashboard />);

    await waitFor(() => screen.getByTestId("PeopleDashboardContainer"));

    fireEvent.click(screen.getByText("Tracking"));

    expect(screen.getByTestId("PeopleDashboardContainer")).toHaveTextContent(
      "Tracking Component"
    );

    fireEvent.click(screen.getByText("Activity"));

    const page = screen.getByTestId("PeopleDashboardContainer");

    expect(page).not.toHaveTextContent("Tracking Component");
    expect(page).toHaveTextContent("Log a Call");
  });
});
