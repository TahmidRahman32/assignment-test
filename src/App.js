import './App.css';
import Heder from './components/Header/Heder';
import Container from './components/Container/Container';
import Blogs from './components/Blogs/Blogs';


function App() {
  return (
    <div className="App">
      <Heder></Heder>
      <Container></Container>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
