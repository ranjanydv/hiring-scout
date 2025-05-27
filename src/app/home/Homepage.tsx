import Filters from './_components/filters';
import Stats from './_components/stats/stats';
import WelcomeText from './_components/welcome-text';

const Homepage = () => {
    return (
        <main className="py-5">
            <section className="space-y-5 mx-auto container">
                <Filters />
                <WelcomeText />
                <Stats />
            </section>
        </main>
    );
};

export default Homepage;
