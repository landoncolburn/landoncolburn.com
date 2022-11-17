import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const ScrollPrompt: React.FC<any> = () => {
    return (
        <div className="flex justify-center fixed left-0 right-0 bottom-0">
            <div className="text-black flex items-center gap-2 bg-white px-4 py-2 my-10 rounded-full">
                <span>Scroll for more</span>
                <FontAwesomeIcon size="sm" icon={faArrowDown} />
            </div>
        </div>
    );
};

export default ScrollPrompt;
