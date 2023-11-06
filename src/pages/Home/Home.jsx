import Bannar from "../../components/Bannar"
import Category from "../../components/Category/Category";
import Extra1 from "../../components/ExtraSection/Extra1";
import Extra2 from "../../components/ExtraSection/Extra2/Extra2";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <div className="max-w-7xl mx-auto">
                <Extra1></Extra1>
                <Extra2></Extra2>
                <Category></Category>
            </div>
        </div>
    );
};

export default Home;