import Suggestion from './suggestion';
import Summary from './summary';

const SummaryAndSuggestions = () => {
    return (
        <section className="gap-2 gap-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto mt-16 container">
            <Summary />
            <Suggestion />
        </section>
    );
};

export default SummaryAndSuggestions;
