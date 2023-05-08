export const NotificationType = {
  Success: "SUCCESS",
  Error: "ERROR",
};

const Notification = ({ message, type }) => {
  if (message === null) {
    return null;
  }

  return (
    <div
      className="cmp-notification"
      style={{ color: type === NotificationType.Success ? "green" : "red" }}
    >
      {message}
    </div>
  );
};

export default Notification;
