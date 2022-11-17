const Newsletter: React.FC<any> = () => {
    return (
        <div className="bg-green-400 text-black h-48 flex flex-col items-center">
            <span className="text-2xl font-medium text-black mt-8">
                Join the newsletter to keep up to date on my work!
            </span>
            <div className="m-8">
                <input
                    className="py-4 px-8 text-lg"
                    placeholder="Email address"
                    type="text"
                />
                <button className="bg-black text-white py-4 px-8 text-lg">
                    Join!
                </button>
            </div>
        </div>
    );
};
export default Newsletter;
