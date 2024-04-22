import CTA from "./components/CTA/CTA";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import { FormContextProvider } from "./context/FormContext";
import Toast from "./components/Toast/Toast";
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <FormContextProvider>
      <div style={{ position: "relative" }}>
        <Nav isFooter={false} />
        <CTA />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Nav isFooter={true} />
        <Toast />
      </div>
    </FormContextProvider>
  );
}

export default App;
