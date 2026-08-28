Here are the detailed English notes on **How JavaScript Works Behind the Scenes** (corresponding to the segment around the **5 hours 55 minutes** mark in the video):

---

### **1. JavaScript Execution Context**
Whenever JavaScript executes your code, the very first thing it creates is the **Global Execution Context (GEC)**. 
* This GEC is allocated to and represented by a special variable called **`this`**.
* **Value of `this` in Different Environments:**
  * **In Browsers:** The global object is **`window`**, meaning `this` evaluates to the `window` object.
  * **In Standalone Environments (like Node.js):** The global object is an **empty object `{}`**.
* JavaScript is a **single-threaded** language; everything is executed and processed one step at a time in a single thread.

#### **Types of Execution Contexts:**
1. **Global Execution Context**
2. **Function/Functional Execution Context**
3. **Eval Execution Context** (which is essentially a property of the global object)

---

### **2. The Two Phases of Execution**
JavaScript executes any given code file in **two distinct phases**:

1. **Memory Creation Phase (or simply the Creation Phase):**
   In this phase, memory space is allocated for all declared variables and functions, but the code is not actually executed yet.
   * All variables are initialized with a default value of **`undefined`**.
   * All functions have their **complete definition** stored in memory.

2. **Execution Phase:**
   In this phase, the actual calculations, operations, and variable assignments take place line-by-line.

---

### **3. Step-by-Step Code Execution Trace**
Using the example code provided in the video:
```javascript
let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
```

The execution flow runs through the following cycles:

#### **Cycle 1: Memory Creation Phase**
First, the global environment is set up and assigned to `this`. Then, the memory phase maps variables:
* `val1` ➡️ `undefined`
* `val2` ➡️ `undefined`
* `addNum` ➡️ Stores the **entire function definition**
* `result1` ➡️ `undefined`
* `result2` ➡️ `undefined`

#### **Cycle 2: Execution Phase**
* `val1` is assigned the value of `10`.
* `val2` is assigned the value of `5`.
* When line 7 is reached, the function **`addNum(val1, val2)`** is invoked. 
* Any function invocation creates a **New Execution Context** (consisting of its own *New Variable Environment* and *Execution Thread*).

#### **Inside the Function's Local Execution Context:**
The two-phase lifecycle runs again specifically for this function:
1. **Local Memory Phase:**
   * `num1` ➡️ `undefined`
   * `num2` ➡️ `undefined`
   * `total` ➡️ `undefined`
2. **Local Execution Phase:**
   * `num1` is assigned `10`.
   * `num2` is assigned `5`.
   * `total` calculates the addition and is assigned the value of `15`.
   * **Return**: The value of `total` (`15`) is returned back to the parent Global Execution Context.
   * **Deletion**: Once the value is returned, this temporary function execution context is **completely deleted** from memory.

* Back in the Global Execution Context, `result1` is assigned the value of `15`.
* Next, on line 8, `result2 = addNum(10, 2)` triggers the exact same cycle again: a new local context is created, memory is allocated, execution calculates `12`, the value is returned, and the context is deleted.

---

### **4. Call Stack**
The Call Stack keeps track of execution contexts and manages function nested-calls:
* At the very bottom of the Call Stack, the **Global Execution Context** is always loaded first and remains there.
* It operates strictly on a **LIFO (Last In First Out)** mechanism.
* When a function is called, it is pushed onto the stack; when it completes its execution, it is popped off the stack.
* **Nested Calls Example:** If function `one()` is called, which calls `two()`, which in turn calls `three()`:
  * **Loading order:** `Global` ➡️ `one` ➡️ `two` ➡️ `three`
  * **Unloading order (LIFO):** `three` is popped off first, followed by `two`, and then `one`.

---
