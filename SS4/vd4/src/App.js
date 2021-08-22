import logo from './logo.svg';
import './App.css';
import './components/Content/Content.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import ContentSection from './components/ContentSection';
import Footer from './components/Footer';
import Content from './components/Content/Content.js';

function App() {
  return (
    <div className="_vd4">
      <Navbar />
      <Header />
      <div className="container">

        <div className="row pt-5">
        <Content reversed={false} img={"assets/img/01.jpg"} />
        <Content reversed={false} img={"assets/img/02.jpg"} />
        <Content reversed={false} img={"assets/img/03.jpg"} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
