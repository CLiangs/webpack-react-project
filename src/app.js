import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const DOM = document.getElementById("app");
const render = () => {
  ReactDOM.render(<App />, DOM);
};

if (module.hot) {
  // NOTE: accept参数值不接受动态的依赖，
  // ES6的模块引入是静态分析的,
  // 故而可以在编译时正确判断到底加载了什么代码，
  // babel的转移时不要对exports做转换需要保留；
  // 需要禁用模块处理babel配置需要modules为false
  // 否则热加载不生效；
  module.hot.accept(["./components/App"], () => {
    ReactDOM.unmountComponentAtNode(DOM);
    render();
  });
}
render();
