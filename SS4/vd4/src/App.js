import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="_vd4">
      <Navbar />
      <Header />
      <ContentSection reversed={true} img={"assets/img/01.jpg"} />
      <ContentSection reversed={false} img={"assets/img/02.jpg"} />
      <ContentSection reversed={true} img={"assets/img/03.jpg"} />
      <Footer />
    </div>
  );
}

export default App;
