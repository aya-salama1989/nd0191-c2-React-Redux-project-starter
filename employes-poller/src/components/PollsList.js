import { connect } from "react-redux";
import PollItem from "./PollItem";
import { useState } from "react";

const PollsList = (props) => {
  console.log("ady updated user", props.user);
  console.log("ady updated polls", props.polls);

  const authedUserAnsweredPolls = Object.keys(props.user.answers);

  console.log("authedUserAnsweredPollsr", authedUserAnsweredPolls);

  const answeredPolls = Object.keys(props.polls)
    .sort((a, b) => {
      return props.polls[b].timestamp - props.polls[a].timestamp;
    })
    .filter((pollId) => authedUserAnsweredPolls.includes(pollId));

  console.log("answeredPolls: ", answeredPolls);


  const unAnsweredPolls = Object.keys(props.polls)
    .sort((a, b) => {
      return props.polls[b].timestamp - props.polls[a].timestamp;
    })
    .filter((pollId) => {
      return !authedUserAnsweredPolls.includes(pollId);;
    });

    const [polls, setPolls] = useState(unAnsweredPolls);


  console.log("unAnsweredPolls: ", unAnsweredPolls);

  console.log("polls: ", polls);

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
  console.log("ady updated user", user);
  console.log("ady updated polls", polls);

  return {
    user,
    polls,
  };
};

export default connect(mapStateToProps)(PollsList);
