import { lightFetch } from "../../js/common";

export function searchByText(text: string) {
    return lightFetch({
        word: {
            select: ["ID", "Word_Text", "Wiki_Frq"],
            where: { Word_Text: "%" + text + "%", limit: 5 },
        },
    }) as Promise<{
        word: [{
            ID: number,
            Word_Text: string,
            Wiki_Frq: number
        }]
    }>;
}