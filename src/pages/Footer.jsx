import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <>
      <footer className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
            <a href="/">
              <img
                src={footerLogo}
                alt="logo"
                width={150}
                height={46}
                className="m-0"
              />
            </a>
            <p className="mt-6 text-base leading-8 font-montserrat text-white sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>

            <div className="flex items-center gap-5 mt-8 ">
              {socialMedia.map((icon, index) => (
                <div
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                  key={index}
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-2xl font-montserrat leading-normal font-medium mb-6 text-white underline">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link, indexx) => (
                    <li
                      className="mt-3 font-montserrat  text-base leading-normal text-white hover:text-gray-500"
                      key={indexx}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start gap-3 items-center font-montserrat cursor-pointer">
            <img src={copyrightSign} alt="copyright" width={20} height={20} />
            <p> CopyRight. All right reserved. Tejas Wagh</p>
          </div>
          <p className=" font-montserrat cursor-pointer">
            Terms & Conditions &copy;2023
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
