import { useState } from "react";
import { handleAddPoll } from "../actions/Polls";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import PropTypes from 'prop-types';

const AddPoll = ({ dispatch, authedUser }) => {

  const navigate = useNavigate();

  const [firstOptionText, setFirstOptionText] = useState("");
  const [secondOptionText, setSecondOptionText] = useState("");

  const handleOptionOne = (e) => {
    const text = e.target.value;
    setFirstOptionText(text);
  };

  const handleOptionTwo = (e) => {
    const text = e.target.value;
    setSecondOptionText(text);
  };

  const handleAddNewPoll = (e) => {
    e.preventDefault();

    const newPoll = {
      author: authedUser,
      optionOneText: firstOptionText,
      optionTwoText: secondOptionText,
    };

    dispatch(handleAddPoll(newPoll));

    setFirstOptionText("");
    setSecondOptionText("");

    navigate("/");
  };

  const validInputs =
    firstOptionText === null ||
    firstOptionText === "" ||
    firstOptionText === undefined ||
    secondOptionText === null ||
    secondOptionText === "" ||
    secondOptionText === undefined;

  return (
    <div>
      <form onSubmit={handleAddNewPoll}>
        <h3>Would you reather</h3>
        <label>
          Option One:
          <textarea
            placeholder="Enter your first option here"
            value={firstOptionText}
            onChange={handleOptionOne}
            className="add-poll-input"
            maxLength={120}
          />
        </label>
        <label>
          Option Two:
          <textarea
            placeholder="Enter your second option here"
            value={secondOptionText}
            onChange={handleOptionTwo}
            maxLength={120}
            className="add-poll-input"
          />
        </label>
        <input
          className="add-poll-input"
          type="submit"
          disabled={validInputs}
          value={"Add new Poll"}
        />
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  console.log("authedUser: ", authedUser);
  return {
    authedUser,
  };
};


AddPoll.prototype = {
  authedUser: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}


export default connect(mapStateToProps)(AddPoll);
