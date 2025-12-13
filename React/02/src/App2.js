import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const cars=(Property)=>{
    return React.createElement("div",{},[
        React.createElement("h1",{},Property.CarType,),
        React.createElement("p",{},Property.CarName)
    ])
}

const App =()=>{
    return React.createElement(
        "div",
        {},
         [React.createElement("h1",{},"CAR variations by HarryMotor Works   ",),
            React.createElement(cars ,{
                CarType :"racingCar",
                CarName :"BMW"
            }),
            React.createElement(cars,{
                CarType :"LuxuryCar",
                CarName :"Rolys"
            }),
            React.createElement(cars,{
                CarType :"SportsCar",
                CarName :"Audi"
            }),
            React.createElement(cars,{
                CarType :"racingCar",
                CarName :"Ducati"
            }),
         ]
    )

}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
