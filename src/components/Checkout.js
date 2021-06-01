import { useHistory } from "react-router-dom";
import Pizza from '../assets/pizzaSlice.png';

const Checkout = ({ingredients}) => {
    const history = useHistory();  
    return ( 
        <div>
           <div className="checkout-container">
               <div className="order">
                    <h1>My Ingredients:</h1>
                    {Object.keys(ingredients).map((ingredient)=>{
                        return(
                            ingredients[ingredient] &&(
                            <p>
                            {ingredient[0].toUpperCase()}
                            {ingredient.substr(1)}
                            </p>
                            )
                        )       
                    })}
                    <button onClick={()=> history.push('/success')}>Confirm</button>
                    <button onClick={()=> history.push('/customize')}>Go Back</button>
               </div>
               <div className="image-box">
                   <img src={Pizza} alt="" />
               </div>

           </div>
        </div>
     );
}
 
export default Checkout;