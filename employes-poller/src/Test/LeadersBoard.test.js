import { render } from "@testing-library/react";
import * as React from "react";
import Leaders from "../components/Leaders";
import { Provider } from "react-redux";
import { store } from '../index'


describe("Leaders", () => {
  it("will catch a snapshot for leaders", () => {
    const view = render(
        <Provider store={store}>
          <Leaders />
        </Provider>
    );
    expect(view).toMatchSnapshot();
  });
});
