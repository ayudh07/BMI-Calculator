
export default function Card({variant, title, icon, description, children}){
    if(variant ==='other'){
        return (
            <div className="card">
                <div className="card-body">
                    {children}
                </div>
            </div>
        )
    }else{
        return (
            <div className="card">
                <div className="card-body">
                    <div className="card-header">
                    <img src={icon} alt={title} />
                    <h5 className="card-title">{title}</h5>
                    </div>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        )
    }
}