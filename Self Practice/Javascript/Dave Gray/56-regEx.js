// Regular Expression (regEx)
// regexr.com

// Character sets
// /[enl]/g = character set, allows any of the text 'e, n, or l' to be matched (based on the provided text)
// /[^enl]/g = allows any text except 'e, n, or l' to be matched (based on the provided text)
// /a-z/g = (range) all lowercase letters, similarly, /A-Z/g = all uppercase letters
// NOTE: g stands for 'global' flag that is searching through the 'whole text' (not just the first line)
// /\w/g = word characters. a-z, 0-9, underscore
// /\W/g = non word characters. signs and symbols
// /\d/g = digits. 0-9
// /\D/g = non digits. everything except digits a-z, 0-9, underscore, signs and symbols
// /\s/g = whitespace
// /\S/g = everything except whitespace
// /./g = everything except line break
// /^I/gm = starts with 'I' (m = multiline)
// /d$/gm = ends with 'd'
// NOTE: to escape a Character, you use '\' e.g 
// /\./gm = all dots '.'
// /(old)/gm = all occurence of the word 'old' [selecting and capturing]
// /(?:old)/gm = all occurence of the word 'old' [selecting but not capturing]
// /g(?=old)/gm = selecting all the letter 'g' where it is followed by 'old'
// /g(?!old)/gm = selecting all the letter 'g' that are not followed by 'old'
// /[A-Z]\w+/gm = select all the 'characters starting with uppercase' and 'followed by one or more letter'(+ = one or more)
// /[A-Z][a-z]*/gm = select all the 'characters starting with uppercase' and 'followed by zero or more letter' (* = zero or more i.e optional)
// /[A-Z][a-z]*'*/gm = select all the 'characters starting with uppercase' and 'followed by zero or more letter' and "zero or more apostrophe ' sign" (* = zero or more i.e optional)
