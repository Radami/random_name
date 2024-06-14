function TextButton({handleClick, buttonText, buttonClass}) {
    return (
        <button onClick={handleClick} className={buttonClass}>
            {buttonText}
        </button>
    );
}

export default TextButton;