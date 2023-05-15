import { Notification } from "shared/ui/Notification";

export const notification = (component: () => React.ReactNode) => () => {
  return (
    <>
      {component()}
      <Notification />
    </>
  );
};
