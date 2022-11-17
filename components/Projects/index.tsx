import ProjectCard from "../ProjectCard";

const Projects: React.FC<any> = () => {
    const projects = [
        {
            name: "Lorem ipsum dolor sit amet.",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, non nostrum, cumque maiores consectetur laborum ipsum ea omnis, ducimus aut error quos sit quia ut?",
            image: "",
            links: {
                git: "https://github.com/landoncolburn/",
                demo: "h",
                learnmore: "h",
            },
            tags: ["React", "Node", "Next.js", "Tailwind"],
        },
        {
            name: "Lorem ipsum dolor sit amet.",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, non nostrum, cumque maiores consectetur laborum ipsum ea omnis, ducimus aut error quos sit quia ut?",
            image: "",
            links: {
                git: "https://github.com/landoncolburn/",
                demo: "h",
                learnmore: "h",
            },
            tags: ["React", "Node", "Next.js", "Tailwind"],
        },
    ];

    return (
        <div className="bg-stone-800">
            <div className="max-w-5xl mx-auto pb-24 pt-8">
                <h1 className="text-4xl font-semibold my-10">
                    Featured Projects
                </h1>
                <div className="flex flex-col items-center">
                    {projects.map(({ name, text, image, links, tags }, i) => (
                        <ProjectCard
                            key={i}
                            name={name}
                            text={text}
                            image={image}
                            links={links}
                            tags={tags}
                            reverse={(i - 1) % 2 == 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Projects;
