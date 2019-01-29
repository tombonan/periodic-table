import { elementsList } from "../json/elements.js";

export default function filterElement(id) {
    return elementsList
        .filter(elem => {
            if (elem.number === id) {
                return true;
            }
            return false;
        });
}
