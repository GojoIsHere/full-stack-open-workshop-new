let container = document.getElementById("root");
let root = ReactDOM.createRoot(container);

let a = React.createElement('h1',{},"hello");
let b = React.createElement('h1',{id : "name"}, `Sushil`);

root.render([a,b]);