import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import ContentSection from './components/ContentSection';

function App() {
  return (
    <div className="_vd4">
      <Navbar />
      <Header/>
      <ContentSection reversed={true}/>
      <ContentSection reversed={false}/>
      <ContentSection reversed={true}/>
    </div>
  );
}

export default App;
