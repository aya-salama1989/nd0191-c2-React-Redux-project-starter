import { connect } from "react-redux";
import PollItem from "./PollItem";
import { useState, useEffect } from "react";

const PollsList = (props) => {
  const [polls, setPolls] = useState(props.unAnsweredPolls);

  useEffect(() => {
    const userAddedQuestions = props.userQuestions.filter(
      (quetion) =>
        !props.unAnsweredPolls.includes(quetion) &&
        !props.answeredPolls.includes(quetion)
    );
    const defaultList = props.unAnsweredPolls.concat(userAddedQuestions);
    setPolls(defaultList);
  }, [props.userQuestions]);

  const showAnsweredPolls = () => {
    setPolls(props.answeredPolls);
  };

  const showUnAnsweredPolls = () => {
    setPolls(props.unAnsweredPolls);
  };

  return (
    <div>
      <div className="tab">
        <button
          className="tablinks"
          onClick={showAnsweredPolls}
          data-testid="answered-polls-test-id"
        >
          Answered Polls
        </button>
        <button
          className="tablinks"
          onClick={showUnAnsweredPolls}
          data-testid="unanswered-polls-test-id"
        >
          UnAnswered Polls
        </button>
      </div>

      <div className="lists">
        <ul>
          {polls.map((pollId) => (
            <li key={pollId} className="poll-item">
              <PollItem pollId={pollId} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ polls, authedUser, users }) => {
  const user = users[authedUser];


  const authedUserAnsweredPolls =
    (user !== null || user !== undefined) && Object.keys(user.answers);

  const answeredPolls = Object.keys(polls)
    .filter((pollId) => authedUserAnsweredPolls.includes(pollId))
    .sort((a, b) => {
      return polls[b].timestamp - polls[a].timestamp;
    });

  const unAnsweredPolls = Object.keys(polls)
    .filter((pollId) => !authedUserAnsweredPolls.includes(pollId))
    .sort((a, b) => {
      return polls[b].timestamp - polls[a].timestamp;
    });

    const userQuestions = user.questions

  return {
    answeredPolls,
    unAnsweredPolls,
    userQuestions
  };
};

export default connect(mapStateToProps)(PollsList);
