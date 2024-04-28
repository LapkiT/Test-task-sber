import {encoded, translations} from "./data.js";

console.log("Let's rock")
console.log(encoded, translations)

function decodeData(encodedData, translationsDict) {
    const decodedData = [];
    const uniqueIds = new Set();

    for (const item of encodedData) {
        const decodedItem = {};
        for (const key in item) {
            if (key.endsWith('Id') && item[key] !== null && !['groupId', 'service', 'formatSize', 'ca'].includes(key)) {
                if (translationsDict[item[key]] !== undefined) {
                    uniqueIds.add(item[key]);
                    decodedItem[key] = translationsDict[item[key]];
                } else {
                    decodedItem[key] = item[key];
                }
            } else {
                decodedItem[key] = item[key];
            }
        }
        decodedData.push(decodedItem);
    }

    console.log("Decoded Data:", decodedData);
    console.log("Unique IDs:", Array.from(uniqueIds));
}

decodeData(encoded, translations);