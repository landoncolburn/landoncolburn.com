import Image from "next/image";
import Button from "../Button";
import Statistic from "../Statistic";

import {
    faStar,
    faProjectDiagram,
    faPeopleGroup,
    faCalendar,
} from "@fortawesome/free-solid-svg-icons";

const Banner: React.FC<any> = ({ stats }) => {
    return (
        <div className="flex flex-col max-w-3xl mx-auto py-12 pb-24 gap-12">
            <div className="w-full flex justify-center">
                <div className="flex-grow flex justify-between items-end">
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl text-white/50">Hi there, I am</p>
                        <p className="text-6xl font-semibold">
                            Landon
                            <br />
                            Colburn
                        </p>
                        <p className="uppercase font-mono text-green-500 text-md">
                            Full stack developer
                        </p>
                        <p>
                            Frontend and backend development, specializing in
                            topics like networking, cryptography and artificial
                            intelligence.
                        </p>
                        <div className="flex gap-2">
                            <Button variant="primary">Learn more</Button>
                            <Button variant="secondary">Projects</Button>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <Image
                            src="/memoji.png"
                            alt="Picture of Landon's memoji"
                            width="256"
                            height="256"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <Statistic
                    icon={faProjectDiagram}
                    label="Projects"
                    value={stats.projectCount}
                />
                <Statistic
                    icon={faStar}
                    label="Stars"
                    value={stats.starsCount}
                />
                <Statistic
                    icon={faPeopleGroup}
                    label="Followers"
                    value={stats.followersCount}
                />
                <Statistic
                    icon={faCalendar}
                    label="Years"
                    value={stats.yearsCount}
                />
            </div>
        </div>
    );
};

export default Banner;
