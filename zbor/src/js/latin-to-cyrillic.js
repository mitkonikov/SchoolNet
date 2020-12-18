let sMapping = {
    "a": "а",
    "b": "б",
    "v": "в",
    "g": "г",
    "d": "д",
    "e": "е",
    "z": "з",
    "i": "и",
    "j": "ј",
    "k": "к",
    "l": "л",
    "m": "м",
    "n": "н",
    "o": "о",
    "p": "п",
    "r": "р",
    "s": "с",
    "t": "т",
    "u": "у",
    "f": "ф",
    "h": "х",
    "c": "ц"
}

let lMapping = {
    "gj": "ѓ",
    "zh": "ж",
    "dz": "ѕ",
    "lj": "љ",
    "nj": "њ",
    "kj": "ќ",
    "ch": "ч",
    "dzj": "џ",
    "sh": "ш"
}

export function isLatin(text) {
    let reg = new RegExp('([a-z]|[A-Z]| )+');
    return reg.test(text);
}

export function cyrillic(text) {
    let result = "";

    for (let i = 0; i < text.length; ++i) {
        if (i + 2 < text.length) {
            let snip = text[i] + text[i + 1] + text[i + 2];
            if (lMapping.hasOwnProperty(snip)) {
                result += lMapping[snip];
                i += 2;
                continue;
            }
        }

        if (i + 1 < text.length) {
            let snip = text[i] + text[i + 1];
            if (lMapping.hasOwnProperty(snip)) {
                result += lMapping[snip];
                i += 1;
                continue;
            }
        }
        
        if (sMapping.hasOwnProperty(text[i])) {
            result += sMapping[text[i]];
        }
    }

    return result;
}