"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}
// Example
console.log(countVowels("typescript")); // Output: 3
//# sourceMappingURL=script.js.map