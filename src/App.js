import logo from './logo.svg';
import './App.css';


const sites = [
  // {
  //   category: "react",
  //   url: "https://oabanin.github.io/abz-2020/",
  //   title: "abz.agency front end test task",
  //   stack: "Webpack, SASS, Bootstrap 4 grid, pixel perfect, Responsive layout, React hooks, Redux, react-hook-form"
  // },
  {
    category: "react",
    url: "https://oabanin.github.io/starDb",
    title: "starDb",
    stack: "React classes, react-router-dom"
  },

  {
    category: "layout",
    url: "  https://oabanin.github.io/portfolio3/",
    title: "Portfolio 3",
    stack: "Webpack, PUG, SASS, bootstrap, jquery + plugins"
  },
  {
    category: "layout",
    url: "  https://oabanin.github.io/portfolio2/",
    title: "Portfolio 2",
    stack: "HTML5, CSS3 (flexbox), responsive layout, jQuery + plugins"
  },
  {
    category: "layout",
    url: "  https://oabanin.github.io/portfolio1/",
    title: "Portfolio 1",
    stack: "HTML5, CSS3, responsive layout"
  }

];

const getSites = (category) => (
  <ul>
    {sites.filter(site => site.category == category).map(site => (<li key={site.title}>
      <a href={site.url} className="App-link" target="_blank">{site.title}</a> - {site.stack}
    </li>))}
  </ul>
)


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <h1>Примеры работ</h1>
        <h2>NextJS</h2>
        {getSites('next')}
        <h2>React</h2>
        {getSites('react')}
        <h2>HTML, CSS верстка</h2>
        {getSites('layout')}

      </section>
    </div>
  );
}

export default App;
