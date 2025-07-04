export default function Button({ clickElement, ariaLabel, children }) {
  
    return (
    <button onClick={clickElement} aria-label={ariaLabel} type="button">
      {children}
    </button>
  );
}

/* 

 <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Image className="round-image" src={avatar} alt="avatar" />
        </button>
*/
