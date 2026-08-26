// const gameName= new String('Deepika')
// //undefined

// console.log(gameName);

// String {'Deepika'}0: "D"1: "e"2: "e"3: "p"4: "i"5: "k"6: "a"
// length: 7

// // ## 🔤 String Methods with Examples

// // ```js
// // let str = "Deepika";
// // ```

// // ### Basic Info
// // - **length** → `str.length` → `7`

// // ---

// // ### Character Access
// // - **charAt()** → `str.charAt(2)` → `"e"`
// // - **charCodeAt()** → `str.charCodeAt(0)` → `68` (Unicode for "D")
// // - **codePointAt()** → `str.codePointAt(0)` → `68`

// // ---

// // ### Searching
// // - **indexOf()** → `str.indexOf("p")` → `3`
// // - **lastIndexOf()** → `str.lastIndexOf("a")` → `6`
// // - **includes()** → `str.includes("ika")` → `true`
// // - **startsWith()** → `str.startsWith("Dee")` → `true`
// // - **endsWith()** → `str.endsWith("ka")` → `true`
// // - **search()** → `str.search(/pi/)` → `3`

// // ---

// // ### Substrings
// // - **slice()** → `str.slice(2, 5)` → `"epi"`
// // - **substring()** → `str.substring(0, 4)` → `"Deep"`
// // - **substr()** → `str.substr(2, 3)` → `"epi"`

// // ---

// // ### Modification
// // - **concat()** → `str.concat(" Rocks")` → `"Deepika Rocks"`
// // - **repeat()** → `str.repeat(2)` → `"DeepikaDeepika"`
// // - **replace()** → `str.replace("Dee", "Ree")` → `"Reepika"`
// // - **replaceAll()** → `"banana".replaceAll("a", "o")` → `"bonono"`
// // - **padStart()** → `str.padStart(10, "*")` → `"***Deepika"`
// // - **padEnd()** → `str.padEnd(10, "-")` → `"Deepika---"`

// // ---

// // ### Case Conversion
// // - **toUpperCase()** → `str.toUpperCase()` → `"DEEPIKA"`
// // - **toLowerCase()** → `str.toLowerCase()` → `"deepika"`
// // - **toLocaleUpperCase()** → `str.toLocaleUpperCase()` → `"DEEPIKA"`
// // - **toLocaleLowerCase()** → `str.toLocaleLowerCase()` → `"deepika"`

// // ---

// // ### Trimming
// // - **trim()** → `"  Deepika  ".trim()` → `"Deepika"`
// // - **trimStart()** → `"  Deepika".trimStart()` → `"Deepika"`
// // - **trimEnd()** → `"Deepika   ".trimEnd()` → `"Deepika"`

// // ---

// // ### Matching
// // - **match()** → `str.match(/ee/)` → `["ee"]`
// // - **matchAll()** → `[...str.matchAll(/e/g)]` → `[["e"], ["e"]]`
// // - **normalize()** → `"\u00F1".normalize("NFD")` → `"ñ"`
// `normalize()` converts a string into a standard Unicode form so visually identical text can be compared reliably.

// Example:

// ```js
// const composed = "\u00F1"; // ñ
// const decomposed = "n\u0303"; // n + combining ~

// console.log(composed === decomposed); // false

// console.log(decomposed.normalize("NFC") === composed); // true
// ```

// Common forms:

// - `NFC`: composed form, e.g. `ñ`
// - `NFD`: decomposed form, e.g. `n` + combining `~`
// - `NFKC` / `NFKD`: compatibility normalization, also converts visually similar Unicode characters

// Why use it? User input may contain equivalent characters represented differently, which can break comparisons, searching, sorting, or validation.
// // ---

// // ### Iteration
// // - **[Symbol.iterator]** → `[...str]` → `["D","e","e","p","i","k","a"]`

// // ---

// // ### Value Conversion
// // - **toString()** → `str.toString()` → `"Deepika"`
// // - **valueOf()** → `str.valueOf()` → `"Deepika"`

// // ---

// // ### HTML Wrappers (rarely used now)
// // - **bold()** → `str.bold()` → `"<b>Deepika</b>"`
// // - **italics()** → `str.italics()` → `"<i>Deepika</i>"`
// // - **big()** → `str.big()` → `"<big>Deepika</big>"`
// // - **small()** → `str.small()` → `"<small>Deepika</small>"`
// // - **blink()** → `str.blink()` → `"<blink>Deepika</blink>"`
// // - **fixed()** → `str.fixed()` → `"<tt>Deepika</tt>"`
// // - **strike()** → `str.strike()` → `"<strike>Deepika</strike>"`
// // - **sub()** → `str.sub()` → `"<sub>Deepika</sub>"`
// // - **sup()** → `str.sup()` → `"<sup>Deepika</sup>"`
// // - **fontcolor()** → `str.fontcolor("red")` → `"<font color=\"red\">Deepika</font>"`
// // - **fontsize()** → `str.fontsize(5)` → `"<font size=\"5\">Deepika</font>"`
// // - **link()** → `str.link("https://example.com")` → `"<a href=\"https://example.com\">Deepika</a>"`

// // ---
