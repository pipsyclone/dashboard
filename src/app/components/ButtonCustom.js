const ButtonCustom = (props) => {
    return (
        <>
            <button type={props.type} className={props.className} onClick={props.onclick}>{props.value}</button>
        </>
    )
}

export default ButtonCustom;