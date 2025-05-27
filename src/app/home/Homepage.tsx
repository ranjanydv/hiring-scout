import Filters from './_components/filters';
import Stats from './_components/stats/stats';
import SummaryAndSuggestions from './_components/summary/summary-and-suggestions';
import WelcomeText from './_components/welcome-text';

const Homepage = () => {
    return (
        <main className="px-4 lg:px-0 py-5">
            <section className="space-y-5 mx-auto container">
                <Filters />
                <WelcomeText />
                <Stats />
				<SummaryAndSuggestions />
            </section>
        </main>
    );
};

export default Homepage;
