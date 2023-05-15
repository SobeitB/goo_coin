import { Fragment, useEffect } from "react";
import { useStore } from "effector-react";

import { BodyIcon, BodyNotification, BorderType } from "./styled";

import { deleteNotification, notificationStore } from "shared/lib/notification";
import { NotificationType } from "shared/config/notification";
import success  from "./img/success.svg";
import error from "./img/error.svg";

export const Notification = () => {
  const stateNotification = useStore(notificationStore.$notification);

  useEffect(() => {

    if (stateNotification) {
      setTimeout(() => {
        deleteNotification?.();
      }, 7000);
    } else {
      deleteNotification?.();
      notificationStore.createNotification(stateNotification);
    }
  }, [stateNotification]);

  if (!stateNotification) return null

  return (
    <BodyNotification theme={stateNotification.type}>

      {stateNotification.type !== NotificationType.INFO &&
        <BodyIcon>
          <BorderType theme={stateNotification.type}>
            <img
              src={stateNotification.type === NotificationType.ERROR ? error : success}
            />
          </BorderType>
        </BodyIcon>
      }

      {Array.isArray(stateNotification.text) ? (
        <Fragment>
          {stateNotification.text.map((textElement) => (
            <Fragment key={textElement?.toString()}>{textElement}</Fragment>
          ))}
        </Fragment>
      ) : (
        stateNotification.text
      )}

    </BodyNotification>
  );
};

export { NotificationText } from "./styled";
