import { connect } from "react-redux";
import PollItem from "./PollItem";
import { useState, useEffect } from "react";

const PollsList = (props) => {
  const authedUserAnsweredPolls = Object.keys(props.user.answers);

  console.log("questions: ", props.user.questions);

  const answeredPolls = Object.keys(props.polls)
    .filter((pollId) => authedUserAnsweredPolls.includes(pollId))
    .sort((a, b) => {
      return props.polls[b].timestamp - props.polls[a].timestamp;
    });

  const unAnsweredPolls = Object.keys(props.polls)
    .filter((pollId) => !authedUserAnsweredPolls.includes(pollId))
    .sort((a, b) => {
      return props.polls[b].timestamp - props.polls[a].timestamp;
    });

    const [polls, setPolls] = useState(unAnsweredPolls);



    useEffect(() => {
      const userAddedQuestions = props.user.questions.filter(
        (quetion) => !unAnsweredPolls.includes(quetion) && !answeredPolls.includes(quetion) 
      );
      const defaultList = unAnsweredPolls.concat(userAddedQuestions)
      setPolls(defaultList);

    })




  const showAnsweredPolls = () => {
    setPolls(answeredPolls);
  };

  const showUnAnsweredPolls = () => {
    setPolls(unAnsweredPolls);
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
  return {
    users,
    user,
    polls,
  };
};

export default connect(mapStateToProps)(PollsList);
