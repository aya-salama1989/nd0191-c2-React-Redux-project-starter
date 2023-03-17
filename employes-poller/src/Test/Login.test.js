import Login from "../components/Login";
import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";

import store from "../index";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

describe("login", () => {
  it("will return a snapshot", () => {
    const view = render(
      <MemoryRouter>
      <Provider store={store}>
        <Login />
      </Provider>
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
});

describe("login content", () => {
  it("will pass if all Dom items exists", () => {
    render( <MemoryRouter>
      <Provider store={store}>
        <Login />
      </Provider>
      </MemoryRouter>);
    const nameInput = screen.queryByTestId("testId-name-input");
    const passwrodInput = screen.queryByTestId("testId-password-input");
    const submitButton = screen.queryByTestId("testId-submit-button");
    expect(nameInput).toBeInTheDocument();
    expect(passwrodInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("will check if Password text is typed as password text", () => {});

  it("will show error message onSubmit with wrong auth data", () => {
    render( <MemoryRouter>
      <Provider store={store}>
        <Login />
      </Provider>
      </MemoryRouter>);
    const submitButton = screen.getByTestId("testId-submit-button");
    fireEvent.click(submitButton);
    expect(screen.getByText("Invalide user Log In")).toBeInTheDocument();
  });

  it("will onSubmit with right auth data", () => {
    //navigate to dashboard
  });
});
