import profile from "../../assets/profile.png";
import { Link } from "react-scroll";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
export default function () {
  return (
    <>
      <div name="home">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="hero min-h-screen">
              <div className="hero-content flex flex-col lg:flex-row lg:px-32">
                <img src={profile} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="lg:pl-40">
                  <h1 className="text-4xl font-bold text-center lg:text-left">
                    Hello,
                  </h1>
                  <h1 className="text-4xl font-bold text-center lg:text-left py-2">
                    I am{" "}
                    <span className="text-violet-900">
                      <Typewriter
                        words={["Mahammad Ali", "Frontend Developer"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </span>
                  </h1>
                  <p className="py-6 text-center lg:text-left">
                    Welcome to my personal website and developer portfolio! As a
                    React Full Stack Developer, I've crafted this site using
                    HTML, CSS, Bootstrap, Tailwind CSS, and React.js. The
                    backend is powered by Firebase for authentication and
                    hosting, with MongoDB handling data storage.
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <button className="btn btn-primary group">
                      <Link className="flex gap-2" to="portfolio" smooth={true}>
                        My PortFolio
                        <span className="group-hover:rotate-90 duration-300">
                          <FaLongArrowAltRight />
                        </span>
                      </Link>
                    </button>
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
