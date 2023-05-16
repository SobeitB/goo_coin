import { createEvent, createStore } from "effector";
import { NotificationI } from "shared/config/notification";

function notificationState() {
  const createNotification = createEvent<NotificationI | null>();
  const $notification = createStore<NotificationI | null>(null);

  $notification.on(createNotification, (_, value) => value);

  return { createNotification, $notification };
}

export const notificationStore = notificationState();

export const deleteNotification = () => {
  notificationStore.createNotification(null);
};

export { catchErrorNotification } from "./catchNewNotification";
export {sharedCatch}from './sharedCatch.ts'