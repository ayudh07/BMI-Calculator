export default function Section({id, children, predefinedClasses}){
    return (
        <section id={id} className={predefinedClasses}>
            {children}
        </section>
    )
}