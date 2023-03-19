
import { connect } from "react-redux";
import User from "./User";
import { useState, useEffect } from "react";
import { withRouter } from "../utils/helpers";
import { setUserAnswer } from "../actions/Users";

const PollDetails = (props) => {
  const [myAnswer, setMyAnswer] = useState(null);

  const currentPoll = props.polls[props.pollId];
  const pollCreator = props.users[currentPoll.author];

  const authedUserData = props.users[props.authedUser];
  const answered = Object.keys(authedUserData.answers).includes(currentPoll.id);

  console.log(props.users);
  useEffect(() => {
    const answersMap = new Map();
    if (answered) {
      for (const [key, value] of Object.entries(authedUserData.answers)) {
        answersMap.set(key, value);
      }
    }
    const userAnswer = answersMap.get(currentPoll.id);
    setMyAnswer(userAnswer);
  }, [authedUserData.answers, answered, currentPoll.id]);

  const totalNumberOfVotes =
    currentPoll.optionOne.votes.length + currentPoll.optionTwo.votes.length;
  const optionOneVotesPercentage = Math.round(
    (currentPoll.optionOne.votes.length / totalNumberOfVotes) * 100
  );
  const optionTwoVotesPercentage = Math.round(
    (currentPoll.optionTwo.votes.length / totalNumberOfVotes) * 100
  );

  const handleOnCheckChange = (e) => {
    //onHandleCheck, show statistics and disable user interaction
    console.log(e.target.value);
    if (answered) return;
    props.setUserAnswer(props.authedUser, props.pollId, e.target.value);
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
          checked={answered && myAnswer === "optionOne"}
          onChange={handleOnCheckChange}
          id="cb-optionOne"
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
          checked={answered && myAnswer === "optionTwo"}
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

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    setUserAnswer: (userId, pollId, answer) =>
      dispatch(setUserAnswer(userId, pollId, answer)),
  };
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PollDetails)
);
