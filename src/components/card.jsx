
export default function Card({variant, title, icon, description, children, styles}){
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
            <div className="card" style={styles}>
                <div className="card-body d-flex flex-column">
                    <div className="card-headers d-flex align-items-center">
                        <img src={icon} alt={title} className="icon"/>
                        <span className="card-titles">{title}</span>
                    </div>
                    <p className="description">{description}</p>
                </div>
            </div>
        )
    }
}