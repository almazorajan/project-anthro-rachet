"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
// main module
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
core_1.enableProdMode();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map