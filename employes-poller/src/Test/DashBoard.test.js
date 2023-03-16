import PollsList from "../components/PollsList";
import { render, screen } from "@testing-library/react";
import * as React from "react";
// import { Provider } from "react-redux";
// import { store } from '../index'

describe("DashBoard", () => {
  // it("will catch a snapshot for DashBoard", () => {
  //   const view = render(
  //     //   <Provider store={store}>
  //     <PollsList />
  //     //   </Provider>
  //   );
  //   expect(view).toMatchSnapshot();
  // });

  it("will have expected elements", () => {

    const answeredTab = screen.getAllByTestId("answered-polls-test-id");
    expect(answeredTab).toBeInTheDocument();

    const unAnsweredTab = screen.getAllByTestId("unanswered-polls-test-id");
    expect(unAnsweredTab).toBeInTheDocument();
  });
});
