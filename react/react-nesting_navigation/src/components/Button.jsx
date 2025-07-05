export default function Button({  children, ariaLabel, handleClick }) {
  return (
    <button aria-label={ariaLabel} type="button" onClick={handleClick}>
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