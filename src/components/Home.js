import { Link } from "react-router-dom";
import Pizza from '../assets/pizza.png'

const Home = () => {
    return ( 
        <div className="Home">
        <div className="welcome-page">
            <img src={Pizza} alt="" />
            <div className="content">
                     <h1> Welcome to Your Favourite Pizza Station.</h1>
                     <Link to ="/customize">Customize Your Pizza</Link>
            </div>


        </div>

        </div>
     );
}
 
export default Home;