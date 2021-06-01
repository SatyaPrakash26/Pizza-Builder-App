import Pizzaman from '../assets/PizzaMan.png';
import { useHistory } from "react-router-dom";
const Success = () => {
    const history = useHistory();  
    return ( 
               <div className="success">
                    <div>
                        <img src={Pizzaman} alt="pizzaman"/>
                        <h1>
                        We have received your order, Thank you
                        </h1>
                        <h2>
                        Order #{Math.round(Math.random() * 100000)}
                        </h2>
                        <p>
                        Will be ready in 20-30 min.
                        </p>
                        <button onClick={()=> history.push('/Pizza-Builder-App/')}>Home</button>
                    </div>  
               </div>
     );
}
 
export default Success;