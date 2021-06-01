import {useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Customize from './Components/Customize';
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Success from "./Components/Success";


function App() {
  const [ingredients,setIngredients] = useState({
    basil:false,
    cheese:false,
    mushroom:false,
    olive:false,
    pineapple:false,
    tomato:false
  });

  useEffect(() => {
      let data = localStorage.getItem('ingredients');
      console.log(JSON.parse(data));
      setIngredients(JSON.parse(data));
  }, [])



  return (
    <Router>
        <div>
            <Header />
            
            <Switch>
              <Route exact path='/Pizza-Builder-App/'>
                <Home />
              </Route>
              <Route path='/customize'>
                <Customize ingredients={ingredients} setIngredients={setIngredients}/>
              </Route>
              <Route path ='/checkout'>
                <Checkout ingredients={ingredients} />
              </Route>
              <Route path='/success'>
                <Success />
              </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
