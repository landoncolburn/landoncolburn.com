import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IProps = {
    label: string;
    value: number | string;
    icon: IconDefinition;
};

const Statistic: React.FC<IProps> = ({ icon, label, value }) => {
    return (
        <div className="flex items-center">
            <div className="flex flex-col m-6 items-start">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon size="lg" icon={icon} />
                    <span className="text-3xl font-bold">{value}</span>
                </div>
                <span className="text-lg text-white/50">{label}</span>
            </div>
        </div>
    );
};

export default Statistic;
