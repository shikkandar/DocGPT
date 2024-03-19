
import '../../assets/css/Notifications.css';

const Notifications = ({ message, buttonName }: { message: string; buttonName: string }) => {
  return (
    <div className="notification">
      <h3>{message}</h3>
      <button className="ok">{buttonName}</button>
      <button className="cancel">Cancel</button>
    </div>
  );
};

export default Notifications;