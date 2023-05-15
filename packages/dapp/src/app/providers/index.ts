
import compose from "compose-function";
import { withWagmi } from "./with-wagmi";
import { withRouter } from "./with-router";
import { notification } from "proccess/Notification";
import {addReferrer} from "proccess/AddReferrer";

export const withProviders = compose(
    withWagmi,
    withRouter,
    notification,
    addReferrer
);