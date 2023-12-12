import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ImProfile } from "react-icons/im";

export default function () {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <span>
            <FaLinkedin size={25} />
          </span>
        </>
      ),
      href: "https://www.linkedin.com/in/mahammad-ali-025b64111/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <span>
            <FaGithub size={25} />
          </span>
        </>
      ),
      href: "https://github.com/RajMahammadAli",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <span>
            <IoMdMail size={25} />
          </span>
        </>
      ),
      href: "mailto:ali.rc.raj@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <span>
            <ImProfile size={25} />
          </span>
        </>
      ),
      href: "/resume.pdf",
      download: true,
      style: "rounded-br-md",
    },
  ];
  return (
    <>
      <div>
        <ul className="hidden lg:flex flex-col top-[35%] left-0 fixed z-10">
          {links.map((link) => (
            <li
              key={link.id}
              className={
                " bg-gray-600 flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
                " " +
                link.style
              }
            >
              <a
                className="flex justify-between items-center w-full text-white"
                href={link.href}
                download={link.download}
                target="_blank"
                rel="noreferrer"
              >
                {link.child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
