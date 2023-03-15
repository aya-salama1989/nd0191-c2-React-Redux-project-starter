
import { connect } from "react-redux";
const Answer =(props)=>{
    return(  

        <div>
                    <input
        type="checkbox"
        value="optionOne"
        disabled={answered}
        onChange={handleOnCheckChange}
        id="cb-optionOne"
        style={{ borderColor: "green", borderWidth: myAnswer === currentPoll.optionOne.text ? "5px" : "0" }}
      />
      <span>{currentPoll.optionOne.text}</span>
      {answered ? (
        <span
          className="span-statistic"
          style={{ display: answered ? "block" : "none" }}
        >, answered by {currentPoll.optionOne.votes.length} users,{" "}
          {optionOneVotesPercentage}% of all users
        </span>
      ) : (
        false
      )}
        </div>
    );
}

const mapStateToProps =({users, authedUser})=>{

    return{
        users,
        authedUser
    }

}

export default connect(mapStateToProps)(Answer);