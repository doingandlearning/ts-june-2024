<!--  -->**Exercise: Module System with TypeScript**

**Objective**: To understand how the module system works in Node.js with TypeScript. By the end of this exercise, you should be able to set up a TypeScript project, create functions in one module, and import them into another module to use them.

---

### **Setup**

1. Initialize a new directory for your project:

   ```bash
   mkdir ts-node-modules
   cd ts-node-modules
   ```

2. Initialize a new Node.js project and install the necessary packages:

   ```bash
   npm init -y
   npm install typescript tsx @types/node --save-dev
   ```

3. Initialize a TypeScript configuration file:
   ```bash
   tsc --init
   ```

---

### **Task 1: Project Configuration**

1. Configure the TypeScript compiler for Node.js by editing the `tsconfig.json`:

   ```json
   {
     "compilerOptions": {
       "target": "es2018",
       "module": "commonjs",
       "strict": true,
       "esModuleInterop": true,
       "outDir": "./dist"
     },
     "include": ["src/**/*.ts"]
   }
   ```

2. Update the `scripts` field in your `package.json`:

   ```json
   "scripts": {
     "start": "tsx src/main.ts",
     "build": "tsc"
   }
   ```

3. Create a `src` directory where you'll place your TypeScript files.

---

### **Task 2: Create Modules and Functions**

1. Inside the `src` directory, create a new file called `mathFunctions.ts`:

   ```typescript
   // src/mathFunctions.ts

   export function add(a: number, b: number): number {
     return a + b;
   }

   export function subtract(a: number, b: number): number {
     return a - b;
   }
   ```

2. Inside the `src` directory, create another file called `main.ts`:

   ```typescript
   // src/main.ts

   import { add, subtract } from "./mathFunctions";

   console.log("Addition:", add(5, 3)); // Expected output: Addition: 8
   console.log("Subtraction:", subtract(5, 3)); // Expected output: Subtraction: 2
   ```

---

### **Task 3: Compile and Run**

1. Compile your TypeScript code:

   ```bash
   npm run build
   ```

   This will produce JavaScript files in the `dist` directory.

2. Run the compiled code:

   ```bash
   npm start
   ```

   You should see the expected outputs for the addition and subtraction operations.

---

### **Challenge (Optional)**

1. Expand the `mathFunctions.ts` module by adding functions for multiplication and division.
2. Import and use these new functions in the `main.ts` module, then compile and run to see the results.

---

**Conclusion**:

You have successfully set up a Node.js project with TypeScript, created modular functions, and used them in a different module. This exercise gives you a foundational understanding of how the module system works in Node.js with TypeScript, and how it seamlessly integrates ES module syntax with Node's CommonJS module system after compilation.
