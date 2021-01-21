import { queryFetch } from "../../js/common";
import { LimitOnRequests, ThankYouForContact } from "../../js/messages";

export const contactFetch = (message: string) => {
    queryFetch({
        command: "contact",
        data: {
            message,
        },
    }).then((data) => {
        if (typeof data == "undefined") return;
        if (data.status === "success") {
            ThankYouForContact();
        } else if (data.status === "error") {
            if (data.message === "limit") {
                LimitOnRequests();

                localStorage.setItem(
                    "contactMessage",
                    message
                );
            }
        }
    });
}