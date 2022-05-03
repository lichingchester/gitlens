import { exec } from "node:child_process";

console.log("start");

exec("git shortlog", function () {
  console.log(arguments);
});
