// export * as T from "./enum.js";
const T = require("./enum.js");
module.exports.T = T;

const encrypt = require("./encrypt.js");
Object.assign(module.exports, encrypt);
// export * from "./encrypt.js";
