import quiz from "../../assets/QuizApp.png";
import about from "../../assets/aphoto.jpg";
export default function () {
  const bars = [
    { id: 1, title: "HTML", value: 80 },
    { id: 2, title: "CSS", value: 70 },
    { id: 3, title: "JavaScript", value: 75 },
    { id: 4, title: "TailwindCss", value: 65 },
    { id: 5, title: "DaisyUi", value: 69 },
    { id: 6, title: "React Js", value: 85 },
    { id: 7, title: "FireBase", value: 60 },
    { id: 8, title: "MongoDB", value: 65 },
  ];
  return (
    <>
      <div name="about">
        <div className="container mx-auto">
          <div className="w-full min-h-screen lg:flex justify-center items-center gap-4 px-8">
            <div className="lg:w-1/2 lg:px-8">
              <div className="flex justify-center items-center ">
                <div>
                  <h1 className="text-3xl font-bold border-b-4 border-black inline ">
                    About Me
                  </h1>
                  <p className="pt-6">
                    Greetings! I'm Mahammad Ali. I have completed MBS in
                    Accounting from National University of Bangladesh. A
                    seasoned Full Stack Web Developer passionate about crafting
                    seamless digital experiences. With a toolbox that includes
                    HTML, CSS, Bootstrap, Tailwind CSS, DaisyUI, React.js,
                    Firebase, and MongoDB, I specialize in creating dynamic,
                    user-friendly applications. My development journey is fueled
                    by a commitment to continuous learning and a design-forward
                    approach, ensuring both functionality and aesthetics in
                    every project. I believe in the power of collaboration and
                    the ability of technology to bring ideas to life.
                  </p>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 px-8 gap-2">
                {bars.map((bar) => (
                  <div
                    key={bar.id}
                    className="flex justify-between items-center gap-2"
                  >
                    <label>{bar.title}</label>
                    <progress
                      className="progress progress-accent"
                      value={bar.value}
                      max="100"
                    ></progress>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 h-full flex justify-center">
              <div className="avatar">
                <div className="rounded-full border-4 border-slate-600 ">
                  <img className="" src={about} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
