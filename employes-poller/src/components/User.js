//Avatar, name, number of answes and number of questions per user

const User = ({ userData, ranking }) => {
  console.log("userData", userData);
  return (
    <div className="mainDiv">
      <div className="third">
        <img
          src={
            "https://gravatar.com/avatar/984cd6ea2ab7a97be50364e928f88986?s=400&d=robohash&r=x"
          }
          alt={`Avatar of user`}
          className="avatar"
        />
      </div>
      <div className="twoThird">
        <h4>{`Name: ${userData.name}`}</h4>
        {ranking ? <span className="userDataItem">{`Ranking: ${ranking}`}</span> : false}
        <hr/>
        <span className="userDataItem">{`Asked Questions: ${userData.questions.length}`}</span>
        <span className="userDataItem">{`Answered Questions: ${
          Object.keys(userData.answers).length
        }`}</span>
      </div>
    </div> 
  );
};

export default User;
