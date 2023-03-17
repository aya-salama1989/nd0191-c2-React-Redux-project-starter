import PollsList from "../components/PollsList";
import { render, screen } from "@testing-library/react";
import * as React from "react";

import store from "../index";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

describe("DashBoard", () => {
  it("will catch a snapshot for DashBoard", () => {
    const view = render(
      <MemoryRouter>
        <Provider store={store}>
          <PollsList />
        </Provider>
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });

  it("will have expected elements", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PollsList />
        </Provider>
      </MemoryRouter>
    );
    const answeredTab = screen.getAllByTestId("answered-polls-test-id");
    expect(answeredTab).toBeInTheDocument();

    const unAnsweredTab = screen.getAllByTestId("unanswered-polls-test-id");
    expect(unAnsweredTab).toBeInTheDocument();
  });
});
