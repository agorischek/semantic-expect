import { assess } from "./prompt.js";

const rule = "Must mention a color";
const content = "The sofa looks nice.";

const result = await assess(rule, content);

console.log(result);
