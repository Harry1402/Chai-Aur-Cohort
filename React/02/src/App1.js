import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const cars=()=>{
    return React.createElement("div",{},[
        React.createElement("h1",{},"racing Car",),
        React.createElement("p",{},"BMW motor1")
    ])
}

const App =()=>{
    return React.createElement(
        "div",
        {},
         [React.createElement("h1",{},"CAR variations by HarryMotor Works   ",),
            React.createElement(cars),
            React.createElement(cars),
            React.createElement(cars),
            React.createElement(cars),
         ]
    )

}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
