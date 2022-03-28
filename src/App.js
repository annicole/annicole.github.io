
import './App.css';
import Table from './components/DataTable/Table';
import Header from './components/Navbar/Header';
import TestimonialsContent from './components/MiddleContent/TestimonialsContent';

function App() {
  return (
    <div className="App">
      <Header/>
      <TestimonialsContent />
      <Table />
    </div>
  );
}

export default App;
