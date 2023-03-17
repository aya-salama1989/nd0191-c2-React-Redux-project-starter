//TODO: add two different tabs and
//filter queastions list on click answered and not answered

import { connect } from "react-redux";
import PollItem from "./PollItem";
import { useState } from "react";
import NavComponent from "./NavComponent";

const PollsList = (props) => {
  const [polls, setPolls] = useState(props.unAnsweredPolls);

  console.log("answeredPolls: ", props.answeredPolls);
  console.log("unAnsweredPolls: ", props.unAnsweredPolls);

  const showAnsweredPolls = () => {
    setPolls(props.answeredPolls);
  };

  const showUnAnsweredPolls = () => {
    setPolls(props.unAnsweredPolls);
  };

  const handlePollItemClick = () => {
    console.log("handlePollItemClick");
  };

  return (
    <div>
      <div className="tab">
        <button className="tablinks" onClick={showAnsweredPolls} data-testid='answered-polls-test-id' >
          Answered Polls
        </button>
        <button className="tablinks" onClick={showUnAnsweredPolls} data-testid='unanswered-polls-test-id'>
          UnAnswered Polls
        </button>
      </div>

      <div className="lists">
        <ul>
          {polls.map((pollId) => (
            <li
              key={pollId}
              className="poll-item"
              onClick={handlePollItemClick}
            >
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
  const authedUserAnsweredPolls = Object.keys(user.answers);
  const sortedPolls = Object.keys(polls).sort((a, b) => {
    return polls[b].timestamp - polls[a].timestamp;
  });

  return {
    answeredPolls: sortedPolls.filter((pollId) =>
      authedUserAnsweredPolls.includes(pollId)
    ),
    unAnsweredPolls: sortedPolls.filter(
      (pollId) => !authedUserAnsweredPolls.includes(pollId)
    ),
  };
};

export default connect(mapStateToProps)(PollsList);
