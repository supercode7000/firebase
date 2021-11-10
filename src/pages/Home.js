import AllProject from "../components/AllProject"
import AllProject1 from "../components/AllProject1"
import Aside from "../components/Aside"

const Home = () => {
    return (
        <div id="home">
            <Aside />
            <AllProject />
            <AllProject1 />
        </div>
    );
}

export default Home;