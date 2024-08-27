import Complement from "@/components/complement";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Timer from "@/components/timer";


export default function Home() {
  return (
  <>
   
    <main className="h-full felx flex-col justify-center items-center dark:bg-cyan-950">
    <CustomCursor/>
    <Nav/>
    <Timer/>
    <Complement/>
    <Footer/>
    </main>
    </>
  );
}
