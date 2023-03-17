import { render } from "@testing-library/react";
import * as React from "react";
import Leaders from "../components/Leaders";
import { MemoryRouter } from "react-router";

import store from "../index";
import { Provider } from "react-redux";

describe("Leaders", () => {
  it("will catch a snapshot for leaders", () => {
    const view = render(
      <MemoryRouter>
        <Provider store={store}>
          <Leaders />
        </Provider>
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
});
