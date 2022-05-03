'use strict';

var node_child_process = require('node:child_process');

console.log("start");
node_child_process.exec("git shortlog", function () {
    console.log(arguments);
});
//# sourceMappingURL=index.js.map
