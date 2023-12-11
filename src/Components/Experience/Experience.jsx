import axios from "axios";
import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";

export default function () {
  const [experiences, setExperiences] = useState([]);
  console.log(experiences);

  useEffect(() => {
    axios
      .get("../../../public/experience.json")
      .then((res) => {
        setExperiences(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div>
        <div>
          <div className="container mx-auto p-6">
            <div className="w-full min-h-screen flex justify-center items-center ">
              <div className="w-full text-center md:text-left">
                <h1 className="text-3xl font-bold border-b-4 border-black inline ">
                  Experience
                </h1>
                <p className="mt-8">
                  "In my journey as a self-taught Full Stack Web Developer, I've
                  honed my skills in HTML, CSS, and leveraged the power of
                  frameworks like Bootstrap and Tailwind CSS for creating sleek
                  and responsive user interfaces. My expertise extends to
                  React.js, where I've built dynamic and interactive web
                  applications, integrating components seamlessly. With DaisyUI,
                  I've enhanced my UI toolkit, adding flair to my designs.
                  Exploring the backend, I've utilized Firebase for
                  authentication and hosting, ensuring a secure and scalable
                  environment. MongoDB serves as the backbone of my data
                  management strategy, providing efficiency and flexibility.
                  This comprehensive tech stack has empowered me to bring my
                  ideas to life, creating a diverse range of projects showcased
                  in my portfolio."
                </p>
                <div className="mt-16">
                  <div className="w-full flex flex-wrap justify-center">
                    {experiences?.map((experience) => (
                      <ExperienceCard
                        key={experience.id}
                        experience={experience}
                      ></ExperienceCard>
                    ))}
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
