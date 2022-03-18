import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PastActivityMock from "./../../../../Utils/Mocks/PastActivitiesMock.json";
import UpcomingActivityMock from "./../../../../Utils/Mocks/UpcomingActivitiesMock.json";
import DisplayActivities from "./DisplayActivities";

describe("Upcoming Activity Component Tests", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: UpcomingActivityMock,
          }),
      })
    );
  });

  test("No Data Present When No Upcoming Activities", async () => {
    render(
      <DisplayActivities
        endpoint="upcoming_activities"
        activityType="Upcoming Activities"
      />
    );

    const upcoming = await waitFor(() =>
      screen.getByTestId("display-activities")
    );

    expect(upcoming).toHaveTextContent("Upcoming Activities");

    expect(upcoming).toHaveTextContent(
      "Once actions are scheduled, they’ll appear here"
    );
  });
});

describe("Past Activity Component Tests", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: PastActivityMock,
          }),
      })
    );
  });

  test("All activity cards render", async () => {
    render(
      <DisplayActivities
        endpoint="past_activities"
        activityType="Past Activities"
      />
    );

    const past = await waitFor(() => screen.getByTestId("display-activities"));

    expect(past).toHaveTextContent("Past Activities");

    const cards = await waitFor(() =>
      screen.getAllByTestId("activity-card-wrapper")
    );

    expect(cards.length).toEqual(9);
  });
});

describe("Error Shows When Fetch Fails", () => {
  beforeEach(() => {
    global.fetch = jest.fn(
      () =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              data: PastActivityMock,
            }),
          //the below data breaks the call
        }).data
    );
  });

  test("Should see an error message", async () => {
    render(
      <DisplayActivities
        endpoint="past_activities"
        activityType="Past Activities"
      />
    );

    const error = await waitFor(() =>
      screen.getByText(
        "There was a problem retrieving the requested data. Please reload the page and try again."
      )
    );

    expect(error).toBeInTheDocument();
  });
});
