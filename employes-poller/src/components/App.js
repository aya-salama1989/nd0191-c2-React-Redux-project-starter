import PollsList from "./PollsList";
import { handleInitialData } from "../actions/Shared";
import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import { Route, Routes } from "react-router";
import PollDetails from "./PollDetails";
import AddPoll from "./AddPoll";
import Leaders from "./Leaders";
import Login from "./Login";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  console.log("Apps props.authedUser", props.authedUser);

  return (
    <Fragment>
      {console.log("Apps props.authedUser", props.authedUser)}
      <LoadingBar />
      <Routes>
        {props.authedUser === null || props.authedUser === undefined ? (
          <Route path="/" element={<Login />} />
        ) : (
          <>
            <Route path="/" exact element={<PollsList />} />
            <Route path="/poll/:id" element={<PollDetails />} />
            <Route path="/add" element={<AddPoll />} />
            <Route path="/leaderboard" element={<Leaders />} />
          </>
        )}
      </Routes>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(App);
