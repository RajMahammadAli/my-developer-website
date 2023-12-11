import profile from "../../assets/profile.png";
export default function () {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="container mx-auto">
          <div className="flex justify-center items-center min-h-screen">
            <div>
              <div className="hero min-h-screen">
                <div className="hero-content flex flex-col lg:flex-row lg:px-32">
                  <img
                    src={profile}
                    className="max-w-sm rounded-lg shadow-2xl"
                  />
                  <div className="lg:pl-40">
                    <h1 className="text-5xl font-bold text-center lg:text-left">
                      Full Stack Web Developer
                    </h1>
                    <p className="py-6 text-center lg:text-left">
                      Welcome to my personal website and developer portfolio! As
                      a React Full Stack Developer, I've crafted this site using
                      HTML, CSS, Bootstrap, Tailwind CSS, and React.js. The
                      backend is powered by Firebase for authentication and
                      hosting, with MongoDB handling data storage.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                      <button className="btn btn-primary text-center">
                        My Portfolio
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}