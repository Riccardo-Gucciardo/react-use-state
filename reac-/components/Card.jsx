const Card = ({title,description}) => {
    return(
       <>
       <div className="card">
        <div className="card-body">
            <div className="card-title">{title}</div>
            <p className="card-text">{description}</p>
        </div>
       </div>
        
       
       </>
    )
}

export default Card