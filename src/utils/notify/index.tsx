// libs
import Notification from "rc-notification";
import { NotificationInstance } from "rc-notification/es/Notification";
// icons
import { ReactComponent as ErrorIcon } from "./icons/error.svg";
import { ReactComponent as SuccessIcon } from "./icons/success.svg";
import { ReactComponent as InfoIcon } from "./icons/info.svg";
import { ReactComponent as WarningIcon } from "./icons/warning.svg";

let notification: NotificationInstance;
Notification.newInstance(
  {
    maxCount: 5,
    style: {
      top: 15,
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  (n) => {
    notification = n;
  },
);

const configs = {
  duration: 3,
  closable: true,
};

const styles = {
  display: "flex",
  alignItems: "center",
  color: "#000000d9",
  padding: "0 3px",
};

export const notify = {
  success: (content: string) =>
    notification.notice({
      ...configs,
      content: (
        <div style={styles}>
          <SuccessIcon />
          <span style={{ marginLeft: 8 }}>{content}</span>
        </div>
      ),
    }),
  error: (content: string) =>
    notification.notice({
      ...configs,
      content: (
        <div style={styles}>
          <ErrorIcon />
          <span style={{ marginLeft: 8 }}>{content}</span>
        </div>
      ),
    }),
  info: (content: string) =>
    notification.notice({
      ...configs,
      content: (
        <div style={styles}>
          <InfoIcon />
          <span style={{ marginLeft: 8 }}>{content}</span>
        </div>
      ),
    }),
  warn: (content: string) =>
    notification.notice({
      ...configs,
      content: (
        <div style={styles}>
          <WarningIcon />
          <span style={{ marginLeft: 8 }}>{content}</span>
        </div>
      ),
    }),
};
