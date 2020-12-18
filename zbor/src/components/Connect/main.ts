import { lightFetch, getRandomInt } from "../../js/common";
import { cyrillic, isLatin } from "../../js/latin-to-cyrillic";

/** Gets a random word from the words table */
export const onSearch = (callback: Function) => {
    lightFetch({
        word: {
            select: ["ID", "Word_Text", "Mistake"],
            where: { ID: getRandomInt(0, 30000), limit: 1 },
        },
    }).then((res) => {
        let wordFromAPI = res.word[0];
        if (parseInt(wordFromAPI.Mistake) === 1) {
            onSearch(callback);
        } else {
            wordFromAPI.Word = wordFromAPI.Word_Text.toUpperCase();
            callback({ wordFrom: wordFromAPI });
        }
    });
}

/** Gets a word similar to the users input */
export const onSearchLike = (wordLike: string, callback) => {
    let converted = "";
    if (isLatin(wordLike)) {
        converted = cyrillic(wordLike);
    } else {
        converted = wordLike;
    }

    lightFetch({
        word: {
            select: ["ID", "Word_Text"],
            where: { Word_Text: converted + "%", limit: 1 },
        },
    }).then((res) => {
        let wordToAPI = res.word[0];
        wordToAPI.Word = wordToAPI.Word_Text.toUpperCase();
        callback({ wordTo: wordToAPI });
    });
}