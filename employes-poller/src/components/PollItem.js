//Poll items question text + author +date of creation

import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Link } from "react-router-dom";

const PollItem = (props) => {
  return (
    <Link  to={`/questions/${props.pollId}`}  className = "poll-list-item">
      <h4>{props.pollText} </h4>
      <span>created by: {props.authorName.name}</span>
      <span>creation Date: {props.pollDate}</span>
    </Link>
  );
};

const mapStateToProps = ({ polls, users }, { pollId }) => {
  const poll = polls[pollId];
  const authorName = users[poll.author];
  const pollDate = formatDate(poll.timestamp);
  const pollText = `Would you rather ${poll.optionOne.text} or ${poll.optionTwo.text}?`;

  return {
    pollId,
    pollText,
    authorName,
    pollDate,
  };
};

export default connect(mapStateToProps)(PollItem);
