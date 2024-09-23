import About from "./components/about";
import Footer from "./components/footer";
import IntroComponent from "./components/intro";
import Navbar from "./components/nav";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <IntroComponent />
      <About />
      <Footer />
      {/* Your page content */}
    </main>
  );
}
