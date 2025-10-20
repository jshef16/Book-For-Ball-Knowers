import DarkVeil from "./Background";
import HomeScreenText from "./HomeScreenText";
import PageGoal from "./PageGoal"
import Shelf from "./Shelf";

import '../style/Home.css';

function Home() {
    return (
        <div className="home-screen">
            <section className="veil-section-top">
                <DarkVeil />
                <HomeScreenText />
            </section>

            <section className="veil-section-bottom">
                <DarkVeil />
                <h1 className="road-to-the-playoffs">Road to the Playoffs <span className="of-prose">(of prose)</span></h1>
                <PageGoal />
                <Shelf />
            </section>
        </div>
    );
}

export default Home;