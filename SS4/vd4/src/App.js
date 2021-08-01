import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import ContentSection from './components/ContentSection';

function App() {
  return (
    <div className="_vd4">
      <Navbar />
      <Header />
      <ContentSection reversed={true} img={"assets/img/01.jpg"} />
      <ContentSection reversed={false} img={"assets/img/02.jpg"} />
      <ContentSection reversed={true} img={"assets/img/03.jpg"} />
    </div>
  );
}

export default App;
