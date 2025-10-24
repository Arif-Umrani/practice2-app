// import logo from './logo.svg'; 
import './App.css';
import './app.scss';

import Header from './components/header/header';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
      <Header />

      <main className='main-content'>
        <h3>This is the Main Content of the Page.</h3>
        <h5>Welcome Page:</h5>
        <p>
          Builds the app for production to the build folder. It correctly bundles React in
          production mode and optimizes the build for the best performance.
          The build is minified and the filenames include the hashes.
          Your app is ready to be deployed.
        </p>
      </main>

      <Footer />










      { /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
