// Regular Expression (regEx)
// regexr.com

// Quantifiers
// /\d{3}/gm = select 3 digits in a row
// /\d{3,}/gm = select 3 or more digits in a row
// /\d{3,4}/gm = select 3 or 4 digits in a row
// NOTE: aside using '*' as optional, '?' can be used as optional
// /(hear)t/gm = select words that start with 'hear' followed by 't'
// /(hear)?t/gm = select words that start with 'hear' followed by 't' or any word that constains 't'
// NOTE: aside using ? as optional, it is also used as a 'lazy selector' i.e to select few character options instead of many character options (greedy). example:
/*
/h\w+/gm = selects any word that contains 'h' followed by all characters of that word (greedy selector) e.g 'heart'
/h\w+?/gm = selects any word that contains 'h' followed one character of that word (lazy selector) e.g 'he' in the word 'heart'
*/
