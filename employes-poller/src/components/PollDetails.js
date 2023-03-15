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
import { useState, useEffect } from "react";
import { withRouter } from "../utils/helpers";
import Error from "./Error";

const PollDetails = (props) => {
  const [myAnswer, setMyAnswer] = useState(null);

  useEffect(() => {
    const answersMap = new Map();
    if (answered) {
      for (const [key, value] of Object.entries(authedUserData.answers)) {
        answersMap.set(key, value);
      }
    }
    const userAnswer = answersMap.get(currentPoll.id);
    setMyAnswer(userAnswer);
  }, []);

  const currentPoll = props.polls[props.pollId];
  const pollCreator = props.users[currentPoll.author];

  const authedUserData = props.users[props.authedUser];
  const answered = Object.keys(authedUserData.answers).includes(currentPoll.id);

  if (currentPoll === null || currentPoll === undefined) {
    return <Error />;
  }

  const totalNumberOfVotes =
    currentPoll.optionOne.votes.length + currentPoll.optionTwo.votes.length;
  const optionOneVotesPercentage = Math.round(
    (currentPoll.optionOne.votes.length / totalNumberOfVotes) * 100
  );
  const optionTwoVotesPercentage = Math.round(
    (currentPoll.optionTwo.votes.length / totalNumberOfVotes) * 100
  );

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
          style={{
            borderColor: "green",
            borderWidth: myAnswer === currentPoll.optionOne.text ? "5px" : "0",
          }}
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
          style={{
            borderColor: "green",
            borderWidth: myAnswer === currentPoll.optionTwo.text ? "5px" : "0",
          }}
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
