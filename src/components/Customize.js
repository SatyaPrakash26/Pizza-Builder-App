import Cheese from '../assets/BaseCheese.png';
import Base from '../assets/PizzaBase.png';
import Olive from '../assets/Olive.png';
import Pineapple from '../assets/Pineapple.png';
import Mushroom from '../assets/Mushroom.png';
import Basil from '../assets/Basil.png';
import Tomato from '../assets/Tomato.png';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom'


const Customize = ({ingredients,setIngredients}) => {
    const changeIngredients = (name)=>{
        console.log(localStorage)
        let newIngredient = JSON.parse(JSON.stringify(ingredients));
        newIngredient[name] = !newIngredient[name];
        setIngredients(newIngredient);
        localStorage.setItem("ingredients", JSON.stringify(newIngredient));
    }
    return (
        <div className="customize">
        
            <div className="container">
                <div className='image-container'>
                    <motion.div transition={{ duration: 1 }} className="">
                        <img src={Base} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                        y: ingredients["mushroom"] ? 100 : -100,
                        opacity: ingredients["mushroom"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z4"
                    >
                        <img src={Mushroom} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{
                        scale: ingredients["cheese"] ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="cheese z1"
                    >
                        <img src={Cheese} alt="Cheese" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                        y: ingredients["olive"] ? 100 : -100,
                        opacity: ingredients["olive"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z4"
                    >
                        <img src={Olive} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                        y: ingredients["pineapple"] ? 100 : -100,
                        opacity: ingredients["pineapple"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z3"
                    >
                        <img src={Pineapple} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                        y: ingredients["basil"] ? 100 : -100,
                        opacity: ingredients["basil"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z4"
                    >
                        <img src={Basil} alt="Pizza Base" height="100%" width="100%" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                        y: ingredients["tomato"] ? 100 : -100,
                        opacity: ingredients["tomato"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="ingredients z4"
                    >
                        <img src={Tomato} alt="Tomato" height="100%" width="100%" />
                    </motion.div>                                                                                                                                     
                </div>
                <div className="menu-box">
                    <h1>Click to add items:</h1>
                    <div className="options">
                        <div className="input">
                            <label htmlFor="olive">Olives</label>
                            <input 
                            type="checkbox" 
                            id="olive" 
                            name="olive" 
                            value="olive" 
                            checked={ingredients["olive"]}
                            onChange={()=>changeIngredients('olive')}/> 
                        </div>
                        <div className="input">
                        <label htmlFor="Pineapples">Pineapples</label>
                            <input 
                            type="checkbox" 
                            id="pineapple" 
                            name="pineapple" 
                            value="pineapple" 
                            checked={ingredients["pineapple"]}
                            onChange={()=>changeIngredients('pineapple')}/>
                            
                        </div>   
                        <div className="input">
                        <label htmlFor="cheese">Cheese</label>
                            <input 
                            type="checkbox" 
                            id="cheese" 
                            name="cheese" 
                            value="cheese" 
                            checked={ingredients['cheese']}
                            onChange={()=>changeIngredients('cheese')}/>
                            
                        </div>  
                        <div className="input">
                        <label htmlFor="basil">Basil</label>
                            <input 
                            type="checkbox" 
                            id="basil" 
                            name="basil" 
                            value="basil" 
                            checked={ingredients['basil']}
                            onChange={()=>changeIngredients('basil')}/>
                            
                        </div> 
                        <div className="input">
                        <label htmlFor="mushroom">Mushroom</label>
                            <input 
                            type="checkbox" 
                            id="mushroom" 
                            name="mushroom" 
                            value="mushroom" 
                            checked={ingredients['mushroom']}
                            onChange={()=>changeIngredients('mushroom')}/>
                            
                        </div>  
                        <div className="input">
                        <label htmlFor="tomato">Tomato</label>
                            <input 
                            type="checkbox" 
                            id="tomato" 
                            name="tomato" 
                            value="tomato" 
                            checked={ingredients['tomato']}
                            onChange={()=>changeIngredients('tomato')}/>  
                        </div>
                    </div> 
                    <div className="checkout-btn">
                        <Link to="/checkout">Checkout</Link>
                    </div>             
                </div>
            </div>
        </div>
      );
}
 
export default Customize;