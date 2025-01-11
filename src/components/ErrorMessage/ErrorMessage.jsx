import toast from "react-hot-toast";

const ErrorMessage = ({
  icon = "⚠️",
  message = "Opps... something went wrong",
  border = "#6b6c79",
  color = "#646cff",
}) => {
  toast(message, {
    icon,
    position: "bottom-center",
    style: {
      border: `1px solid ${border}`,
      padding: "16px",
      color,
    },
  });

  return null;
};

export default ErrorMessage;
