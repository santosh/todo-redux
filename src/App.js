import Header from './features/header/Header';
import TodoList from './features/todo/TodoList';
import Footer from './features/footer/Footer';

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Just Another Todo</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>What's the Plan for Today?</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
