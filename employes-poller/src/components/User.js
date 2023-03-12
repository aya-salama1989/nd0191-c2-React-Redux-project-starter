//Avatar, name, number of answes and number of questions per user

const User = () => {
  return (
    <div>
      <div
        className="contact-avatar"
        style={{
          backgroundImage: `url(${"https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png"})`,
        }}
      ></div>
      <h6>{"name: any name"}</h6>
      <span>{"Questions: 4"}</span>
      <span>{"Answers: 12"}</span>
      <span>{"Rating: 1"}</span>
    </div>
  );
};

export default User;
