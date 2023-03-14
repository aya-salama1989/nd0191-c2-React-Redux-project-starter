// When a poll is clicked on the home page, the following is shown:

// Text “Would You Rather”;
// Avatar of the user who posted the polling question; and
// Two options.
// For answered polls, each of the two options contains the following:

// Text of the option;
// Number of people who voted for that option; and
// Percentage of people who voted for that option.
// The option selected by the logged-in user should be clearly marked.

import { connect } from "react-redux";
import User from "./User";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollDetails = (props) => {
  const currentPoll = props.polls[props.pollId];
  const pollCreator = props.users[currentPoll.author];

  const [isChecked, setCheckedAnswer] = useState("");

  if (currentPoll === null || currentPoll === undefined) {
    return (
      <div>
        <h1>404 Not Available</h1>
        <p>There is not such Poll, please try again for a valid one</p>
      </div>
    );
  }

  const authedUserData = props.users[props.authedUser];
  const answered = Object.keys(authedUserData.answers).includes(currentPoll.id);

  const totalNumberOfVotes =
    currentPoll.optionOne.votes.length + currentPoll.optionTwo.votes.length;
  const optionOneVotesPercentage = Math.round(
    (currentPoll.optionOne.votes.length / totalNumberOfVotes) * 100
  );
  const optionTwoVotesPercentage = Math.round(
    (currentPoll.optionTwo.votes.length / totalNumberOfVotes) * 100
  );

  let selectedAnswer = null;

  if (answered) {
    const answersMap = new Map();
    for (const [key, value] of Object.entries(authedUserData.answers)) {
      answersMap.set(key, value);
    }

    const currentPullId = currentPoll.id;

    if (answersMap.has(currentPullId)) {
      selectedAnswer =  answersMap.get(currentPullId);
    }
    
  }

  const handleOnCheckChange = (e) => {
    console.log(e.target.value);
    //onHandleCheck, show statistics and disable user interaction
  };

  return (
    <div className="poll-detail">
      <div id="poll-detail-user-div" className="third">
        <User userData={pollCreator} />
      </div>
      <div id="poll-detail-div" className="twoThird">
        <h3>Would You Rather</h3>
        <input
          type="checkbox"
          value="optionOne"
          disabled={answered}
          onChange={handleOnCheckChange}
          id="cb-optionOne"
          checked={isChecked}
        />
        <span>{currentPoll.optionOne.text}</span>
        {answered ? (
          <span
            className="span-statistic"
            style={{ display: answered ? "block" : "none" }}
          >
            , answered by {currentPoll.optionOne.votes.length} users,{" "}
            {optionOneVotesPercentage}% of all users
          </span>
        ) : (
          false
        )}

        <hr />
        <input
          type="checkbox"
          value="optionTwo"
          disabled={answered}
          onChange={handleOnCheckChange}
          id="cb-optionTwo"
        />
        <span>{currentPoll.optionTwo.text}</span>
        {answered ? (
          <span className="span-statistic">
            , answered by {currentPoll.optionTwo.votes.length} users,{" "}
            {optionTwoVotesPercentage}% of all users{" "}
          </span>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, polls, authedUser }, props) => {
  const pollId = props.router.params.id;

  return {
    pollId,
    polls,
    users,
    authedUser,
  };
};

export default withRouter(connect(mapStateToProps)(PollDetails));
