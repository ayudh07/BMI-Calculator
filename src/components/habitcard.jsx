export default function HabitCard({ imgurl, alttext, title, description }) {
  return (
    <div
      className="habit-card d-flex flex-column
    justify-content-start align-items-start"
    >
      <img src={imgurl} alt={alttext} className="icon"/>
      <div className="d-flex flex-column gap-32">
        <span className="title">{title}</span>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
