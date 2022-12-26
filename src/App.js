import './App.css';
import Additional from './components/additional/additional';
import Categories from './components/categories/categories';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Latest from './components/latest/latest';

function App() {
  return (
    <div id='app_container'>
      <Header/>
      <Categories/>
      <Latest/>
      <Additional/>
      <Footer/>
    </div>
  );
}

export default App;
