import swal from "sweetalert";

export function ThankYouForContact() {
    swal(
        "Благодариме што нè контактиравте! 🎉",
        "Вашата порака ќе биде разгледана од страна на администраторот во најбрзо време. Ќе ве контактираме.",
        "success"
    );
}

export function ThankYouForContribution() {
    swal({
        title: "Благодариме!",
        text: "Благодариме на придонесот!",
        icon: "success"
    });
}

export function LimitOnRequests() {
    swal(
        "Жалам 😟",
        "Не дозволуваме толку често да не контактирате поради безбедносни причини. Обидете се за саат време повторно. А ние ќе ви ја чуваме пораката на ова исто место. 📝",
        "success"
    );
}