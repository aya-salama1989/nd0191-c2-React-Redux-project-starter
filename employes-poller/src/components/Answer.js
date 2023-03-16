// import { connect } from "react-redux";
// import { useEffect, useState } from "react";
// const Answer = (props) => {

//   const [myAnswer, setMyAnswer] = useState(null);

//   useEffect(() => {
//     const answersMap = new Map();
//     if (answered) {
//       for (const [key, value] of Object.entries(authedUserData.answers)) {
//         answersMap.set(key, value);
//       }
//     }
//     const userAnswer = answersMap.get(currentPoll.id);
//     setMyAnswer(userAnswer);
//   }, []);

//   const currentPoll = props.polls[props.pollId];

//   const authedUserData = props.users[props.authedUser];
//   const answered = Object.keys(authedUserData.answers).includes(currentPoll.id);

 
//   const totalNumberOfVotes =
//     currentPoll.optionOne.votes.length + currentPoll.optionTwo.votes.length;
//   const optionOneVotesPercentage = Math.round(
//     (currentPoll.optionOne.votes.length / totalNumberOfVotes) * 100
//   );
//   const optionTwoVotesPercentage = Math.round(
//     (currentPoll.optionTwo.votes.length / totalNumberOfVotes) * 100
//   );


//   const handleOnCheckChange =()=>{

//   }


//   return (
//     <div>
//       <input
//         type="checkbox"
//         value="optionOne"
//         disabled={answered}
//         onChange={handleOnCheckChange}
//         id="cb-optionOne"
//         style={{
//           borderColor: "green",
//           borderWidth: myAnswer === currentPoll.optionOne.text ? "5px" : "0",
//         }}
//       />
//       <span>{currentPoll.optionOne.text}</span>
//       {answered ? (
//         <span
//           className="span-statistic"
//           style={{ display: answered ? "block" : "none" }}
//         >
//           , answered by {currentPoll.optionOne.votes.length} users,{" "}
//           {optionOneVotesPercentage}% of all users
//         </span>
//       ) : (
//         false
//       )}
//     </div>
//   );
// };

// const mapStateToProps = ({ users, authedUser }) => {
//   return {
//     users,
//     authedUser,
//   };
// };

// export default connect(mapStateToProps)(Answer);
