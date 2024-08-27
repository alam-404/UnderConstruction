import Quote from "@/components/quote";
import Eyes from "@/components/eyes";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Timer from "@/components/timer";
import CustomCursor from "@/components/CustomCursor";


export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="h-[100vh] dark:bg-cyan-950 flex flex-col justify-center items-center">
        <div className="fixed top-0 w-full">
          <Nav />
        </div>
        <Eyes />
        <Timer />
        <Quote />
        <Footer />
      </main>
    </>
  );
}
