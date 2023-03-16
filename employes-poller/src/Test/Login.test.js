import Login from "../components/Login";
import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";
//TODO: 1- snapshot test 2- elements exist test
//3- onButton click check login succcess and failure
//4- check if passwrod text is password text

describe("login", () => {
  it("will return a snapshot", () => {
    const view =  render(<Login/>);
    expect(view).toMatchSnapshot();
  });
});

describe("login content", () => {
  it("will return a snapshot", () => {
    const nameInput = screen.getByTestId("testId-name-input");
    const passwrodInput = screen.getByTestId("testId-password-input");
    const submitButton = screen.getByTestId("testId-submit-button");
    expect(nameInput).toBeInTheDocument();
    expect(passwrodInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("will check if Password text is typed as password text", () => {

  });

  it("will show error message onSubmit with wrong auth data", () => {
    render(<Login/>);
    const submitButton = screen.getByTestId("testId-submit-button");
    fireEvent.click(submitButton);

    expect(screen.getByText('Invalide user Log In')).toBeInTheDocument();
  });

  it("will onSubmit with right auth data", () => {
    //navigate to dashboard
  });
});
