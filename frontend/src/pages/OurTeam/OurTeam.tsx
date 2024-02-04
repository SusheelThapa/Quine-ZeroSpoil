import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Layout from "@/layout/Layout";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import EY from "@/assets/img/avatar/EY.png";
import LG from "@/assets/img/avatar/LG.png";

const teams = [
  {
    shortName: "SKM",
    fullName: "Saurav Kumar Mahato",
    profileImage: EY,
    position: "Full Stack Developer",
    socialMedia: {
      facebook: "https://www.facebook.com/Saurav.Kr.Mahat0",
      instagram: "https://www.instagram.com/sauravmahato139",
      github: "https://github.com/SauravKumarMahato",
      linkedin: "https://www.linkedin.com/in/saurav-kr-mahato/",
      twitter: "https://twitter.com/SauravKumarMa16",
    },
  },
  {
    shortName: "ST",
    fullName: "Susheel Thapa",
    profileImage: LG,
    position: "Full Stack Developer",
    socialMedia: {
      facebook: "https://www.facebook.com/susheelthapaa/",
      instagram: "https://www.instagram.com/_susheelthapa/",
      github: "https://github.com/SusheelThapa",
      linkedin: "https://www.linkedin.com/in/susheelthapa/",
      twitter: "https://twitter.com/_susheel_thapa",
    },
  },
];

const OurTeam = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <div className="my-12 mb-20 bg-stone-100 py-20 rounded-3xl">
          <div className="flex justify-center items-center flex-col gap-8 mb-20">
            <h2 className="text-6xl text-center font-medium">
              Our Team of{" "}
              <span className="text-blue-500 underline underline-offset-8">
                Professionals
              </span>
            </h2>
            <p className="w-3/5 text-center text-gray-500 textsm">
              Get to know our outstanding team—passionate, diverse, and
              committed to excellence. Meet the faces driving our success and
              join the journey with us. Together, let's achieve remarkable
              results!
            </p>
          </div>
          <div className="flex justify-center gap-64 items-center">
            {teams.map(
              ({
                shortName,
                fullName,
                profileImage,
                position,
                socialMedia,
              }) => {
                return (
                  <div
                    key={shortName}
                    className="flex flex-col justify-center items-center  gap-6"
                  >
                    <Avatar className="w-44 h-44">
                      <AvatarImage src={profileImage} />
                      <AvatarFallback className="bg-gray-200">
                        {shortName}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-2xl text-green-900 font-extrabold text-center">
                      <p>{fullName}</p>
                      <p className="mt-2 text-lg text-orange-400 font-bold">
                        {position}
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-3 text-lg text-gray-400">
                      <Link to={socialMedia.facebook}>
                        <FaFacebook className="hover:text-black" />
                      </Link>
                      <Link to={socialMedia.instagram}>
                        <FaInstagram className="hover:text-black" />
                      </Link>
                      <Link to={socialMedia.github}>
                        <FaGithub className="hover:text-black" />
                      </Link>
                      <Link to={socialMedia.twitter}>
                        <FaXTwitter className="hover:text-black" />
                      </Link>
                      <Link to={socialMedia.linkedin}>
                        <FaLinkedin className="hover:text-black" />
                      </Link>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default OurTeam;
