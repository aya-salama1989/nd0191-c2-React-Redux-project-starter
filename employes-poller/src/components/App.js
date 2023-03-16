import PollsList from "./PollsList";
import { handleInitialData } from "../actions/Shared";
import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { LoadingBar } from "react-redux-loading-bar";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import PollDetails from "./PollDetails";
import AddPoll from "./AddPoll";
import Leaders from "./Leaders";
import Login from "./Login";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        {props.loading === true ? null : (
          <Routes>
            <Route
              path="/"
              exact
              element={
                props.authedUser != null ? (
                  <PollsList />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/poll/:id" element={<PollDetails />} />
            <Route path="/add" element={<AddPoll />} />
            <Route path="/leaderboard" element={<Leaders />} />
            <Route path="/login" exact element={<Login />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({ loading: authedUser === null });

export default connect(mapStateToProps)(App);
