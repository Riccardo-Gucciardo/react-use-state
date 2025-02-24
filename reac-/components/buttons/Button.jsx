

const Button = ( {title,onSelect,isActive} ) => {
    const active = isActive  ? "btn-warning":"btn-primary"
     return(
        <button className={`btn ${active}`} onClick={()=> onSelect()}>{title}</button>
     )
}

export default Button 