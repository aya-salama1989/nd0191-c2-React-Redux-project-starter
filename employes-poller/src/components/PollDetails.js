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

const PollDetails = (props) => {
  if (props.poll === null) {
    return <p>There is not such Poll, please try again for a valid one</p>;
  }

  return (
    <div className="poll-detail">
      <div id="poll-detail-user-div">
        <User />
      </div>
      <div id="poll-detail-div">
        <h3>Would You Rather</h3>
        <input type="checkbox"> </input>
        <input type="checkbox"> </input>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, polls, authedUser }, { pollId }) => {

  console.log("polls[pollId]: ", pollId);
  console.log("polls[pollId]: ", polls);
  console.log("polls[pollId]: ", users);


  const poll = polls[pollId] ? polls[pollId] : null;


  const pollCreator = users[poll.author];
  const autherizedUser = users[authedUser];

  console.log("PollDetails: ", pollId);
  return {
    poll,
    pollCreator,
    autherizedUser,
  };
};

export default connect(mapStateToProps)(PollDetails);
