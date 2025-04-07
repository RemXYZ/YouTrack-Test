import { jsx as _jsx } from "react/jsx-runtime";
import * as ReactDOM from "react-dom/client";
var App = function () {
    return _jsx("div", { children: "Hello, world!" });
};
var container = document.getElementById("root");
if (container) {
    var root = ReactDOM.createRoot(container);
    root.render(_jsx(App, {}));
}
else {
    console.error("Brak elementu #root");
}
