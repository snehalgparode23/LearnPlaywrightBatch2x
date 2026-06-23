// 170_Logger.js — Demonstrates DEFAULT vs NON-DEFAULT (named) imports

// ------------------------------------------------------------------
// 1. DEFAULT IMPORT
// ------------------------------------------------------------------
// When a module uses "export default", you can import it with ANY name.
// There is only ONE default export per file.
// Syntax: import anyNameYouWant from './file.js';

import myLogger from "../logger.js";
import loggerFn from "../logger.js";

myLogger("This works!");          // Calls the default export
loggerFn("Same function, different name!");  // Same default export, renamed again

// ------------------------------------------------------------------
// 2. NAMED IMPORT (Non-Default)
// ------------------------------------------------------------------
// When a module uses "export" (without default), you MUST use the
// exact same name inside curly braces { }.
// A file can have MANY named exports.
// Syntax: import { exactName } from './file.js';

import { log2 } from "../logger.js";

log2("This is a named export");

// ------------------------------------------------------------------
// 3. MIXING BOTH — Import default AND named in one line
// ------------------------------------------------------------------
// Syntax: import defaultName, { named1, named2 } from './file.js';

import logDefault, { log2 as secondaryLog } from "../logger.js";

logDefault("Default again!");
secondaryLog("Named export with alias!");

// ------------------------------------------------------------------
// 4. SUMMARY / WHY IT MATTERS
// ------------------------------------------------------------------
// DEFAULT EXPORT  →  Use when a module has ONE main thing to export
//                    (e.g., a single class, a single function)
// NAMED EXPORT    →  Use when a module exports MULTIPLE things
//                    (e.g., utilities, constants, helper functions)
// ------------------------------------------------------------------

console.log("\n--- Logger Demo Complete ---");
