export default function App() {
  return (
  <>
  <Smiley isHappy/>
  <Smiley/>
  </>
  )
}


function Smiley({isHappy}){
return <h3>{isHappy ? '☺️':'😩'}</h3>
}

/* 

# React Props: Smile

Props are versatile: you can not only pass strings or numbers but also boolean values! Let's use this feature to render smileys. 😉

## Tasks

Open the `./src/App.jsx` file: the `App` component currently returns a heading, which should be replaced by a custom component. Your task is to write a `Smiley`
 component that renders a smiley depending on a prop called `isHappy`.

You can use the following hints as guidelines:

- Write the `Smiley` component inside the `src/App.jsx` file:
  - It accepts a prop called `isHappy` (make sure to destructure it).
  - It returns a semantic HTML element that renders a happy smiley if `isHappy` is `true` and a sad one if its value is `false`.
- Replace the heading in the return statement of your `App` component with your `Smiley` component and pass it the `isHappy` prop (or leave it out if you want to display the sad smiley).

*/