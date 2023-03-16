import { connect } from "react-redux";
import User from "./User";

const Leaders = (props) => {
  console.log(props.rankedUsers);

  return (
    <ul>
      {Object.values(props.rankedUsers).map((user, i) => (
        <User userData={user} ranking={i + 1} key={user.id} />
      ))}
    </ul>
  );
};

const mapStateToProps = ({ users }) => {
  const rankedUsers = Object.values(users).sort((user1, user2) => {
    const secondUserRank =
      Object.keys(user2.answers).length + user2.questions.length;
    const firstUserRank =
      Object.keys(user1.answers).length + user1.questions.length;
    return secondUserRank - firstUserRank;
  });

  return {
    rankedUsers,
  };
};

export default connect(mapStateToProps)(Leaders);
