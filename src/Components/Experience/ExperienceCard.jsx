export default function ({ experience }) {
  const { thumbnail, title, style } = experience;
  console.log(style);
  return (
    <>
      <div className={`w-20 h-20 m-8  group`}>
        <div>
          <img
            className="w-28 group-hover:scale-105 duration-500"
            src={thumbnail}
            alt={title}
          />
          <h1 className="text-center mt-6 ">{title}</h1>
        </div>
      </div>
    </>
  );
}
