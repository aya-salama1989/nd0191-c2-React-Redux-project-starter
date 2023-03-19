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
import NavComponent from "./NavComponent";
import ErrorPage from "./ErrorPage";
import { Navigate, useLocation } from "react-router-dom";


function App(props) {
  const location = useLocation();

  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  console.log("Apps props.authedUser", props.authedUser);

  console.log("props.authedUser !== null", props.authedUser !== null);

  const isUserAuthorized = props.authedUser !== null;

  console.log("!isUserAuthorized", !isUserAuthorized);

  function ProtectedRoute ({children})  {
    return isUserAuthorized? (
      children
    ) : (
      <Navigate to="/login" replace state={{ path: location.pathname }}/>
    );
  };

  return (
    <Fragment>
      {!isUserAuthorized ? null : <NavComponent />}
      <LoadingBar />
      <Routes>

        <Route
          path="/"
          exact
          element={
            <ProtectedRoute>
              <PollsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/questions/:id"
          element={
            <ProtectedRoute >
              <PollDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute >
              <AddPoll />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute >
              <Leaders />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(App);
