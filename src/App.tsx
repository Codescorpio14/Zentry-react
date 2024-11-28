import {
  NavBar,
  Hero,
  About,
  Features,
  Story,
  Contact,
  Footer,
} from "./components";
import Vault from "./components/Vault";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden snap-y snap-mandatory">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Vault />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
