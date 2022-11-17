import {
    faTwitter,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC<any> = () => {
    const socials = [
        {
            name: "Twitter",
            link: "https://twitter.com/landoncolburn/",
            icon: faTwitter,
        },
        {
            name: "Github",
            link: "https://github.com/landoncolburn/",
            icon: faGithub,
        },
        {
            name: "Linkedin",
            link: "https://linkedin.com/landoncolburn/",
            icon: faLinkedin,
        },
        { name: "Email", link: "", icon: faEnvelope },
    ];

    return (
        <div className="bg-stone-800 h-48 p-8">
            <div className="mx-auto max-w-4xl flex flex-col items-center">
                <div className="text-2xl">
                    <span className="font-semibold">Landon&nbsp;</span>
                    <span className="font-light">Colburn</span>
                </div>
                <div className="flex justify-between mt-6">
                    {socials.map(({ name, link, icon }, i) => (
                        <div
                            key={i}
                            className="w-12 h-12 m-2 rounded-full bg-white/25 flex justify-center items-center"
                        >
                            <FontAwesomeIcon icon={icon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Footer;
