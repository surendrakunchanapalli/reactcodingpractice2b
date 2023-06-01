const Notification = (props) => {
  {className,iconUrl,text}=props;
  const containerClassName=`notification-container ${className}`;
  return (
      <div className={containerClassName}>
            <img className="icon" src={iconUrl}/>
            <p className="message">{text}</p>
      </div>
  )
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="container">
      <Notification
        className="blue-bg"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        className="green-bg"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        className="yellow-bg"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        className="red-bg"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
