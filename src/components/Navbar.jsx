
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20, display:"flex" , justifyContent:"space-evenly",color:"white"}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
<Link style={{textDecoration:"none", color:"white"}} to= "/">Home</Link>
<Link style={{textDecoration:"none", color:"white"}} to= "/about">About</Link>
<Link style={{textDecoration:"none", color:"white"}} to= "/products">Products</Link>
<Link style={{textDecoration:"none", color:"white"}} to= "/products/men">Men</Link>
<Link style={{textDecoration:"none", color:"white"}} to= "/products/women">Women</Link>
<Link style={{textDecoration:"none", color:"white"}} to= "/products/kids">Kids</Link>
<Link style={{textDecoration:"none", color:"white"}} to= "/products/homedecor">Home Decor</Link>

    </nav>
  );
  
};
