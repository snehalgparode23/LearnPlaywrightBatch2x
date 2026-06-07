# JavaScript String Cheat Sheet

A quick-reference guide for all common JavaScript string methods with one-liner examples.

---

## Basic Info

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `length` | Returns the number of characters in a string | `"hello".length` | `5` |

---

## Accessing Characters

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `charAt(index)` | Returns character at the specified index | `"hello".charAt(1)` | `"e"` |
| `charCodeAt(index)` | Returns Unicode value of character at index | `"A".charCodeAt(0)` | `65` |
| `at(index)` | Returns character at index (supports negatives) | `"hello".at(-1)` | `"o"` |
| `[index]` | Bracket notation to access a character | `"hello"[0]` | `"h"` |

---

## Searching & Checking

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `indexOf(sub)` | Returns first index of substring, or `-1` | `"banana".indexOf("na")` | `2` |
| `lastIndexOf(sub)` | Returns last index of substring, or `-1` | `"banana".lastIndexOf("na")` | `4` |
| `includes(sub)` | Checks if string contains substring | `"hello".includes("ell")` | `true` |
| `startsWith(sub)` | Checks if string starts with substring | `"hello".startsWith("he")` | `true` |
| `endsWith(sub)` | Checks if string ends with substring | `"hello".endsWith("lo")` | `true` |
| `search(regex)` | Returns index of first regex match, or `-1` | `"hello".search(/e/)` | `1` |
| `match(regex)` | Returns array of matches or `null` | `"abc123".match(/\d+/)` | `["123"]` |
| `matchAll(regex)` | Returns iterator of all regex matches | `...[..."a1b2".matchAll(/\d/g)]` | `["1", "2"]` |

---

## Extracting Substrings

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `slice(start, end)` | Extracts section from start to end (excludes end) | `"hello".slice(1, 4)` | `"ell"` |
| `substring(start, end)` | Similar to slice but does not accept negatives | `"hello".substring(1, 4)` | `"ell"` |
| `substr(start, length)` | Extracts `length` characters from start | `"hello".substr(1, 3)` | `"ell"` |
| `split(sep)` | Splits string into array by separator | `"a,b,c".split(",")` | `["a", "b", "c"]` |

---

## Modifying Case

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `toUpperCase()` | Converts string to uppercase | `"hello".toUpperCase()` | `"HELLO"` |
| `toLowerCase()` | Converts string to lowercase | `"HELLO".toLowerCase()` | `"hello"` |
| `toLocaleUpperCase()` | Locale-aware uppercase conversion | `"i".toLocaleUpperCase("tr")` | `"İ"` |
| `toLocaleLowerCase()` | Locale-aware lowercase conversion | `"I".toLocaleLowerCase("tr")` | `"ı"` |

---

## Trimming & Padding

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `trim()` | Removes whitespace from both ends | `"  hello  ".trim()` | `"hello"` |
| `trimStart()` | Removes whitespace from the start | `"  hello".trimStart()` | `"hello"` |
| `trimEnd()` | Removes whitespace from the end | `"hello  ".trimEnd()` | `"hello"` |
| `padStart(len, pad)` | Pads string from start to reach target length | `"5".padStart(3, "0")` | `"005"` |
| `padEnd(len, pad)` | Pads string from end to reach target length | `"5".padEnd(3, "0")` | `"500"` |

---

## Replacing Content

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `replace(old, new)` | Replaces first match with new substring | `"hello".replace("l", "x")` | `"hexlo"` |
| `replaceAll(old, new)` | Replaces all matches with new substring | `"hello".replaceAll("l", "x")` | `"hexxo"` |

---

## Concatenation & Repeating

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `concat(str2)` | Joins two or more strings | `"he".concat("llo")` | `"hello"` |
| `repeat(count)` | Repeats the string `count` times | `"ha".repeat(3)` | `"hahaha"` |

---

## Comparison

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `localeCompare(str)` | Compares two strings for sorting | `"a".localeCompare("b")` | `-1` |

---

## Template-like Utilities

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `raw` | Returns raw strings (escape sequences unchanged) | ``String.raw`C:\n` `` | `"C:\n"` |
| `valueOf()` | Returns the primitive string value | `new String("hi").valueOf()` | `"hi"` |
| `toString()` | Returns the string representation | `(123).toString()` | `"123"` |

---

## Unicode & Normalization

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `codePointAt(index)` | Returns Unicode code point at index | `"🙂".codePointAt(0)` | `128578` |
| `fromCodePoint(num)` | Creates string from Unicode code point | `String.fromCodePoint(128578)` | `"🙂"` |
| `fromCharCode(num)` | Creates string from UTF-16 code units | `String.fromCharCode(65)` | `"A"` |
| `normalize()` | Returns Unicode normalized form | `"é".normalize("NFD")` | `"e\u0301"` |

---

## Well-known Symbol Methods

| Method | Description | Example | Output |
|--------|-------------|---------|--------|
| `String[Symbol.iterator]` | Iterates over characters | `[..."hi"]` | `["h", "i"]` |

---

## Quick Reference Summary

| Category | Methods |
|----------|---------|
| **Info** | `length` |
| **Access** | `charAt`, `charCodeAt`, `at`, `[]` |
| **Search** | `indexOf`, `lastIndexOf`, `includes`, `startsWith`, `endsWith`, `search`, `match`, `matchAll` |
| **Extract** | `slice`, `substring`, `substr`, `split` |
| **Case** | `toUpperCase`, `toLowerCase`, `toLocaleUpperCase`, `toLocaleLowerCase` |
| **Trim/Pad** | `trim`, `trimStart`, `trimEnd`, `padStart`, `padEnd` |
| **Replace** | `replace`, `replaceAll` |
| **Join** | `concat`, `repeat` |
| **Compare** | `localeCompare` |
| **Unicode** | `codePointAt`, `fromCodePoint`, `fromCharCode`, `normalize` |

---

*Happy coding! Feel free to expand this cheat sheet as you learn.*
