import HistoryIcon from "./../subjects/znam-history.svg";
import MacedonianIcon from "./../subjects/znam-macedonian.svg";
import MathIcon from "./../subjects/znam-mathematics.svg";
import EnglishIcon from "./../subjects/znam-english.svg";
import GeoIcon from "./../subjects/znam-geography.svg";
import PhysicsIcon from "./../subjects/znam-physics.svg";
import ChemistryIcon from "./../subjects/znam-chemistry.svg";
import BiologyIcon from "./../subjects/znam-biology.svg";
import Philosophy from "./../subjects/znam-philosophy.svg";

let subjectName = [
    "МАКЕДОНСКИ", // 0
    "МАТЕМАТИКА", // 1
    "АНГЛИСКИ",   // 2
    "ФИЗИКА",     // 3
    "ХЕМИЈА",     // 4
    "БИОЛОГИЈА",  // 5
    "СОЦИОЛОГИЈА",// 6
    "ФИЛОЗОФИЈА", // 7
    "ИСТОРИЈА"    // 8
];

let subjectIcons = [MacedonianIcon, MathIcon, EnglishIcon, PhysicsIcon, ChemistryIcon, BiologyIcon, GeoIcon, Philosophy, HistoryIcon];
let playable = [0, 3, 4, 5, 6, 7, 8];

export { subjectName, subjectIcons, playable };