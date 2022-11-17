const Header: React.FC<any> = () => {
    const tabs = [
        { name: "Services", link: "" },
        { name: "Projects", link: "" },
        { name: "Blog", link: "" },
        { name: "Contact", link: "" },
    ];

    return (
        <div className="max-w-7xl h-36 flex justify-between items-center p-16 text-white mx-auto">
            <div className="text-2xl">
                <span className="font-semibold">Landon&nbsp;</span>
                <span className="font-light">Colburn</span>
            </div>
            <div className="flex list-none">
                {tabs.map(({ name, link }, i) => (
                    <li key={i} className="mx-3 px-3">
                        {name}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Header;
