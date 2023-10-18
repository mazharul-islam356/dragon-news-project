import LefetSideNav from "../LeftSideNav/LefetSideNav";
import RightSideNav from "../RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-4">

            <div>
                <LefetSideNav></LefetSideNav>
            </div>
            <div className="col-span-2">
                <h2 className="text-3xl">News Comming Soon Inshallah</h2>
            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>

            </div>
        </div>
    );
};

export default Home;