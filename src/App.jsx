import Section from "./components/Section";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import CookiesPopup from "./components/CookiesPopup";

function App() {
  return (
    <>
      <Section>
        <Header />
        <Hero/>
        <Content/>
        <CookiesPopup/>
      </Section>
    </>
  );
}

export default App;
