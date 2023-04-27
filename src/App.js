
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Todolist from './component/Todolist';
import Addtodo from './component/Addtodo';

 
function App() {
  return (
    <div className="App" style={{backgroundColor:"black"}}>
        <Header/>
        <Addtodo/>
        <Todolist/>
        
    </div>
  );
}

export default App;
