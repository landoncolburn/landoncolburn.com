import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";

// https://blog.anurag.tech/how-i-structure-my-next-js-projects
interface IDynamicData {
    stats: {
        projectCount: number;
        starsCount: number;
        followersCount: number;
        yearsCount: number;
    };
}

const Home: NextPage<IDynamicData> = (data) => {
    return (
        <div>
            <div className="bg-stone-800">
                <Header />
                <Banner stats={data.stats} />
            </div>
            <Testimonials />
            <Projects />
            <Newsletter />
            <Footer />
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const githubProfile = await fetch(
        "https://api.github.com/users/landoncolburn",
        {
            headers: {
                Accept: "application/vnd.github+json",
            },
        },
    )
        .then((res) => res.json())
        .then((data) => {
            console.log("Re-fetching projects.");
            return data;
        });

    const projectCount = githubProfile.public_repos;
    const followersCount = githubProfile.followers;

    const starsCount = await fetch(
        "https://api.github.com/users/landoncolburn/repos?sort=pushed",
        {
            headers: {
                Accept: "application/vnd.github+json",
            },
        },
    )
        .then((res) => res.json())
        .then((repos) => {
            console.log("Re-fetching stars.");
            return repos
                .map((repo: any) => repo.stargazers_count)
                .reduce((sum: number, stars: number) => sum + stars, 0);
        });

    const yearsCount = new Date().getFullYear() - 2017;

    return {
        props: {
            stats: {
                projectCount,
                starsCount,
                followersCount,
                yearsCount,
            },
        },
        revalidate: 3600,
    };
};

export default Home;
