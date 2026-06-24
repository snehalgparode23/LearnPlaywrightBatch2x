# Understanding `export default` vs `export` (Named Exports) in JavaScript / TypeScript

## Quick Comparison Table

| Feature | `export default` | `export` (Named) |
|---------|------------------|------------------|
| **Keyword** | `export default` | `export` |
| **How many per file?** | Only **ONE** | **Many** (unlimited) |
| **Import syntax** | `import anyName from './file.js'` | `import { exactName } from './file.js'` |
| **Can rename on import?** | Yes, automatically | Yes, but only with `as` alias |
| **Best used for** | One main thing per file | Multiple utilities/constants |

---

## 1. What is a Named Export (`export`)?

A **named export** is the standard way to export multiple things from a single file. You must use the **exact same name** when importing.

### Example from `utils.js`

```javascript
// utils.js — Named Exports
export let BASE_URL = "https://api.staging.com";

export function formatTestName(name) {
    return "TC_" + name.toUpperCase();
}
```

### How to import it (from `169_Utils.js`)

```javascript
// You MUST use the exact names: BASE_URL and formatTestName
import { BASE_URL, formatTestName } from "../utils.js";

console.log(BASE_URL);                    // https://api.staging.com
console.log(formatTestName("login"));     // TC_LOGIN
```

### You can also rename (alias) on import

```javascript
import { BASE_URL as bul_util, formatTestName } from "../utils.js";

console.log(bul_util);  // Same value, different local name
```

---

## 2. What is a Default Export (`export default`)?

A **default export** is used when a file has **one main thing** to export. You can give it **any name** when importing.

### Example from `logger.js`

```javascript
// logger.js — Has BOTH default and named exports
export default function log(message) {
    console.log("[LOG] - default " + message);
}

export function log2(message) {
    console.log("[LOGS] " + message);
}
```

### How to import the default export

```javascript
// The name 'myLogger' is YOUR choice — it can be anything!
import myLogger from "../logger.js";

myLogger("Hello!");  // [LOG] - default Hello!
```

You could also call it `logger`, `logFn`, `defaultLog` — **any name works** because it's the default.

---

## 3. Importing BOTH Default and Named Together

A file can have **one default** AND **many named** exports. You can import them together:

```javascript
// From logger.js
import logDefault, { log2 } from "../logger.js";

logDefault("I am the default!");   // [LOG] - default I am the default!
log2("I am named!");               // [LOGS] I am named!
```

**Syntax breakdown:**
```javascript
import defaultName, { named1, named2 } from './file.js';
//       ↑ no braces          ↑ inside braces
```

---

## 4. Real-World Analogy

| Export Type | Analogy |
|-------------|---------|
| **Named Export** | A toolbox with labeled tools: `hammer`, `screwdriver`, `wrench`. You ask for each by its exact name. |
| **Default Export** | A single Swiss Army Knife. There's only one, and you can call it whatever you want: "myKnife", "tool", "gadget". |

---

## 5. Common Mistakes to Avoid

### ❌ Mistake 1: Trying to import named export without braces
```javascript
import formatTestName from "../utils.js";  // ERROR!
// Missing { } for a named export
```

### ❌ Mistake 2: Using wrong name for named import
```javascript
import { formatTestname } from "../utils.js";  // ERROR!
// Wrong case: formatTestname !== formatTestName
```

### ❌ Mistake 3: Multiple default exports in one file
```javascript
export default function a() {}
export default function b() {}  // ERROR! Only one default allowed.
```

### ✅ Correct: Mixing default + named in same file
```javascript
export default function main() {}     // Only ONE default
export function helper1() {}          // Named
export function helper2() {}          // Named
export const CONFIG = {};             // Named
```

---

## 6. When to Use What?

| Scenario | Recommended Export |
|----------|-------------------|
| Single class or main function per file | `export default` |
| Utility file with many helper functions | `export` (named) |
| Config/constants file | `export` (named) |
| Component file (React/Vue/Angular) | `export default` for the component |
| Mixed — main thing + helpers | `export default` + named extras |

---

## 7. Running the Examples

```bash
# From the project root:
node chapter_20_Typescript_Basics/EXPORT_IMPORT/169_Utils.js
node chapter_20_Typescript_Basics/EXPORT_IMPORT/170_Logger.js
```

---

*This file is part of the Learn Playwright Batch 2X learning project.*
