import Quote from "@/components/quote";
import Eyes from "@/components/eyes";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Timer from "@/components/timer";


export default function Home() {
  return (
    <>
      <main className="h-[100vh] dark:bg-cyan-950 flex flex-col justify-center items-center">
        <div className="fixed top-0 w-full">
          <Nav />
        </div>
        <Timer />
        <Quote />
        <Eyes />
        <Footer />
      </main>
    </>
  );
}
