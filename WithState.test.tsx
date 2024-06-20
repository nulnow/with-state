import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { WithState } from "./WithState";

describe("WithState", () => {
  it("Renders without crashing", async () => {
    render(
      <WithState initialState={0}>
        {({ state: counter, setState: setCounter }) => {
          return (
            <>
              <div>Counter: {counter}</div>
              <button
                data-testid="button"
                onClick={() => setCounter(counter + 1)}
              >
                Increment
              </button>
            </>
          );
        }}
      </WithState>,
    );

    const button = screen.getByTestId("button");

    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);

    expect(screen.getByText("Counter: 3")).toBeInTheDocument();
  });
});
