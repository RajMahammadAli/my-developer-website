export default function ({ portfolio }) {
  const { thumbnail, title, description, href } = portfolio;
  return (
    <>
      <div className="group card w-96 bg-base-100 shadow-xl overflow-hidden">
        <figure className="group-hover:scale-105 duration-300">
          <img src={thumbnail} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-sm">{description}</p>
          <div className="card-actions justify-center">
            <a href={href} target="_blank" className="btn btn-primary">
              Demo
            </a>
            <button className="btn btn-primary">Code</button>
          </div>
        </div>
      </div>
    </>
  );
}
