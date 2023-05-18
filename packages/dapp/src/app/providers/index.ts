
import compose from "compose-function";
import { withWagmi } from "./with-wagmi";
import { withRouter } from "./with-router";
import { withAos } from "./with-aos";
import { notification } from "proccess/Notification";
import {addReferrer} from "proccess/AddReferrer";

export const withProviders = compose(
    withAos,
    withWagmi,
    withRouter,
    notification,
    addReferrer,
);