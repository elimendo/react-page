import { Link, useLocation } from "react-router-dom"


function Nav(){
    let location = useLocation()
return <>
<div>
    <Link to="/"> About Me </Link>
    <Link to="/contact"> Contact </Link>
    <Link to="/portfolio"> portfolio </Link>
    <Link to="resume"> Resume </Link>
    
</div>

</>
}
export default Nav