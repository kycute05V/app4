import Header from './components/Header'
import Banner from './components/Banner'
import Slide from './components/Slide';
import Section from './components/Section';
import End from './components/End';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-gradient-to-b from-[#cff5ff] to-white min-h-screen'>
      <div className="container mx-auto ">
        <Header />
        <Banner />
        <Slide />
        <Section />
        <End />
        <Footer />
      </div>
    </div>
  );
}


export default App;