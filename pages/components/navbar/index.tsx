import { useRouter } from "next/router"
import { global } from 'styled-jsx/css';


export default function NavBar(){
const router=useRouter();

    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
 <button className="transparente" onClick={()=>router.push("/")} > <h1  style={{color:"white"}}  >TAURUS</h1></button>
</nav>

        </>
    )

}