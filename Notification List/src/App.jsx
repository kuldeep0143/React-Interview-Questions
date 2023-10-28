import { useState } from "react";
import "./App.css";

const useNotification = () => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = ({ type, message }) => {
    const newNotification = {
      id: Date.now(),
      type,
      message,
    };
    setNotifications([...notifications, newNotification]);

    setTimeout(() => {
      removeNotification(newNotification.id);
    }, 2000);
  };

  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((notifications) => notifications.id !== id)
    );
  };
  return { showNotification, notifications };
};

function App() {
  const { showNotification, notifications } = useNotification();

  const handleClick = (e) => {
    const { target } = e;
    const type = target.getAttribute("data-type");

    showNotification({
      type,
      message: `${type} Notification`,
    });
  };

  return (
    <div>
      <h1>Add Notification</h1>
      <div>
        <button onClick={handleClick} data-type="INFO">
          Info
        </button>
        <button onClick={handleClick} data-type="SUCCESS">
          Success
        </button>
        <button onClick={handleClick} data-type="WARNING">
          Warning
        </button>
        <button onClick={handleClick} data-type="ERROR">
          Error
        </button>
      </div>

      {/* Display Notification  */}
      <div>
        {notifications.map((notification)=> (
          <div key={notification.id}>
            {notification.message}
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
