import Content from './components/Content';
import Header from './components/Header';
import { contents } from './assets/data/data';
import './App.scss';

function App() {
  return (
    <main>
      <Header />
      <section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;
