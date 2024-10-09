import './app.scss';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';

function App() {
 
  return (
    <div >
      <section id='HomePage'>
          <NavBar/>
          <Hero/>
      </section>
      <section id='Services'><Parallax type={"services"}/></section>
      <section><Services/></section>
      <section id='Portfolio'><Parallax type={"portfolio"}/></section>
      <section >Portfolio 1</section>
      <section >Portfolio 2</section>
      <section >Portfolio 3</section>
      <section id='Contact'>Contact</section>
    </div>
  );
}

export default App;
