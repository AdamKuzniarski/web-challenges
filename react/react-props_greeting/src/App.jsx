export default function App() {
  return (
    <>
      <Greeting name="Adam" isCoach={false} />
      <Greeting name="Flo" isCoach />
    </>
  );
}

function Greeting({ name, isCoach }) {
  return <h3> {isCoach ? `Hallo Coach ${name} ` : ` Hallo ${name}`}!</h3>;
}

/* ### Create a Component with Props

Open the `./src/App.jsx` file: the `App` component currently returns a default heading element. Replace this element with a custom `Greeting`
 component, which renders a greeting based on its props.

You can use the following hints as guidelines:

- Write the `Greeting` component inside the `src/App.jsx` file:
  - It accepts a prop called `name` (make sure to destructure it).
  - It returns an HTML element that uses the `name` prop to render "Hello, [name]!".
- Replace the heading in the `App` component’s return statement with your `Greeting` component and pass it a `name` prop with a value of your choice.

### Conditional Rendering with Props

Enhance your `Greeting` component to show "Hello, Coach!" if the `name` prop matches the name of one of your coaches. */
