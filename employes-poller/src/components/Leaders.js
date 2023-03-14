import { connect } from "react-redux";

const Leaders = ( props ) => {
  console.log(props.users);

  return <li>What </li>;
};

const mapStateToProps = ({ users }) => {
  console.log("users: ", users);
  return {
    users,
  };
};

export default connect(mapStateToProps)(Leaders);
