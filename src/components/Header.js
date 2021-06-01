import img from '../assets/logo.png'
const Header = () => {
    return ( 
        <div className ="navbar">
            <div className="navitems">
                <img src={img} alt="" />
                <h1> Pizza Customization </h1>
            </div>

        </div>
     );
}
 
export default Header;