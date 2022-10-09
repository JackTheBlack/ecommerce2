import { useRouter } from "next/router"
import { global } from 'styled-jsx/css';
import Image from 'next/image'

export default function NavBar(){
const router=useRouter();

    return(
        <>
        <nav style={{backgroundColor:"#000000"}} >
 <button className="transparente" onClick={()=>router.push("/")} ><Image src={require("../../../utils/logo.png")}  width={150} height={70} /></button>
</nav>

        </>
    )

}