function IconButton({handleClick, buttonClass, iconClass}) {
    return (
        <button onClick={handleClick} className={buttonClass}>
            <i className={iconClass} ></i>
        </button>
    );
}

export default IconButton;