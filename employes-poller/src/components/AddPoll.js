import { useState } from "react";
import { handleAddPoll } from "../actions/Polls";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generateUID } from "../utils/helpers";
import {getCurrentTimestamp} from "../utils/helpers";

// Validations if empty show ErrorResponse,
// validations if exceeded the limit show console.error();

const AddPoll = ({ dispatch, authedUser }) => {

  console.log("dispatch: ",dispatch.action);

  const navigate = useNavigate();

  console.log("authedUser in add poll: ", authedUser);
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
      id: generateUID(),
      author: authedUser,
      timeStamp:getCurrentTimestamp(),
      optionOne:{text: firstOptionText},
      optionTwo:{text: secondOptionText}
    };

    console.log("e.value: ", newPoll);


    dispatch(handleAddPoll(newPoll));

    // setFirstOptionText("");
    // setSecondOptionText("");

    // navigate("/");
  };
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

export default connect(mapStateToProps)(AddPoll);
