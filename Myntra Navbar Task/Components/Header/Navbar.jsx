import logo from "./logo.png";

const Navbar = () => {
    return (
        <div id={"navbar"}>
            <div id={"logo"}>
                <picture>
                    <img src={logo} alt="Logo"/>
                </picture>
            </div>
            <div id={"nav"}>
                <ul id={"nav-items"}>
                    <li className={"nav-list"}><a href="#">Men</a></li>
                    <li className={"nav-list"}><a href="#">Women</a></li>
                    <li className={"nav-list"}><a href="#">Kids</a></li>
                    <li className={"nav-list"}><a href="#">Home & Living</a></li>
                    <li className={"nav-list"}><a href="#">Beauty</a></li>
                    <li className={"nav-list"}><a href="#">Studio</a></li>
                    <div id={"search"}>
                        <input type="text" name="search" id="search-box"
                               placeholder={"Search for products, brands and more"}/>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;