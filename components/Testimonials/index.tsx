import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

const Testimonials: React.FC<any> = () => {
    const testimonials = [
        {
            comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio quos corporis quidem repudiandae cupiditate fugiat quaerat nisi veniam aliquid.",
            author: "Maya Colburn",
            date: new Date(),
        },
        {
            comment:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti exercitationem similique expedita id esse assumenda?",
            author: "Emily Breton",
            date: new Date(),
        },
    ];

    return (
        <div className="bg-stone-700">
            <div className="max-w-5xl mx-auto pb-24 pt-8">
                <h1 className="text-4xl font-semibold my-10">Testimonials</h1>
                <div className="flex justify-center">
                    {testimonials.map(({ comment, author, date }, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-start max-w-lg"
                        >
                            <FontAwesomeIcon
                                size="xl"
                                className="text-white/25"
                                icon={faQuoteLeft}
                            />
                            <span className="text-2xl font-medium">
                                {comment}
                            </span>
                            <span className="text-sm text-white/25">
                                {author} |{" "}
                                {date.toLocaleDateString("en-US", options)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Testimonials;
