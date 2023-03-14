//Avatar, name, number of answes and number of questions per user

const User = ({userData}) => {
  console.log("userData", userData);
  return (
    <div>
    <img src={'https://gravatar.com/avatar/984cd6ea2ab7a97be50364e928f88986?s=400&d=robohash&r=x'} alt={`Avatar of user`} className="avatar" />

      <h4>{`Name: ${userData.name}`}</h4>  
      <span>{"Rating: 1"}</span>
      <hr/>
      <span>{`Questions: ${userData.questions.length}`}</span>
      <hr/>
      <span>{`Answers: ${Object.keys(userData.answers).length}`}</span> 
    </div>
  );
};

export default User;
