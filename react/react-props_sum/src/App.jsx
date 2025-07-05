export default function App() {
  return <h1><Sum valueA={1} valueB={3}/></h1>;
}



function Sum({valueA, valueB}){
  return valueA + valueB
}


/* 
In this exercise, you will pass two props to a component and use them to calculate the sum.

## Tasks

Open the `./src/App.jsx` file: the `App` component returns a default heading element. Replace this element with a custom `Sum` 
component which calculates the sum of its two props and renders the result.

You can use the following hints as guidelines:

- Write the `Sum` component inside the `src/App.jsx` file:
  - It accepts two props called `valueA` and `valueB` (make sure to destructure them).
  - It returns an HTML element that uses both props to dynamically render something like "1 + 2 = 3" (according to the props).
- Replace the heading in the `App` component’s return statement with your `Sum` component and pass it both props with values of your choice.

*/