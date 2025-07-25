export default function Counter({ onIncrement, onDecrement, people }) {
  console.log(people);
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onIncrement}
        >
          +
        </button>

        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onDecrement}
          disabled={people <= 0}
        >
          -
        </button>
      </div>
    </>
  );
}
