import { Initialize } from "../auth/passport.logic";

export const misc = () => {
    (String as any).prototype.multiReplace = (array) => {
        let result = "";
        
        for (let c = 0; c < this.length; ++c) { // for every letter in the string
            let replaced = false;
            for (let r in array) { // check for replacements in the array
                if (this[c] == r) {
                    result += array[r];
                    replaced = true;
                    break;
                }
            }

            if (!replaced) result += this[c];
        }

        return result;
    }
}