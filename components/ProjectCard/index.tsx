import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Button from "../Button";

// https://brittanychiang.com

type IProps = {
    name: string;
    image: string;
    text: string;
    tags: string[];
    links?: {
        git?: string;
        demo?: string;
        learnmore?: string;
    };
    reverse?: boolean;
};

const ProjectCard: React.FC<IProps> = ({
    name,
    image,
    links,
    text,
    tags,
    reverse,
}) => {
    return (
        <div
            className={`flex my-6 ${reverse ? "flex-row-reverse" : "flex-row"}`}
        >
            <div
                className={`flex flex-col gap-6 z-30 w-1/2 ${
                    reverse ? "items-end" : "items-start"
                }`}
            >
                <div>
                    <h2 className="font-mono text-green-500">
                        Featured project
                    </h2>
                    <h1 className="font-semibold text-2xl">{name}</h1>
                </div>
                <div className="text-white bg-black p-6 shadow-sm shadow-black">
                    <p>{text}</p>
                </div>
                <div className="flex justify-between max-w-full gap-8">
                    {tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                    ))}
                </div>
                <div
                    className={`flex justify-between items-center max-w-full gap-8 ${
                        reverse ? "flex-row-reverse" : "flex-row"
                    }`}
                >
                    {links?.learnmore && (
                        <Button variant="primary">Learn more</Button>
                    )}
                    {links?.git && (
                        <FontAwesomeIcon size="lg" icon={faGithub} />
                    )}
                    {links?.demo && (
                        <FontAwesomeIcon
                            size="lg"
                            icon={faArrowUpRightFromSquare}
                        />
                    )}
                </div>
            </div>
            <div className="z-0 w-1/2">
                <div
                    className={`block bg-red-500 w-[110%] ${
                        reverse ? "" : "-left-[10%]"
                    } h-full relative group cursor-pointer`}
                >
                    <div className="w-full h-full absolute bg-green-500 opacity-50 z-10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-200"></div>
                    <Image
                        src="/dfm.png"
                        layout="fill"
                        alt={"Image for " + name}
                        className="filter grayscale"
                    />
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;
