// Regular Expression (regEx)
// regexr.com

// Alternation
// /(g|l)ive/gm = select all the words that starts with 'g or l' and followed by 'ive' (| = or)

// Practical examples
// /(^\d{5}$)/gm = zip codes that starts and end with 5 digits (^ = starting symbol)
// /(^\d{5}-?(\d{4}$))/gm = zip codes that starts with 5 digits '-' and end with 4 digit codes (10001-1234)
// /(^\d{5}-?(\d{4}$)?)/gm = zip codes that starts with 5 digits '-' and 'may' end with 4 digit codes (10001-1234 and 10001) (may meaning optional because of '?' at the end)
// /\s{2,}/gm = select any 2 or more whitespaces in a word (Kansas   City) this can be useful, in dealing with user's input.

/* 
/(\+1)?[-. ]?(\d{3})?[-. ]?(\d{3})[-. ]?(\d{4})/gm
may start with +1, may be followed by '-', '.' or 'whitespace', may be followed by 3 digits, may be followed by '-', '.' or 'whitespace', followed by 3 digits, may be followed by '-', '.' or 'whitespace', and ollowed by 4 digits
Examples:
8675309, 867-5309, 867.5309, 867 5309, 867-530-9126, +1-867-530-9126, +1 867 530 9126 etc.
*/

/* NOTE: not all special characters needs to be escaped. e.g:
// -, ., whitespace
*/