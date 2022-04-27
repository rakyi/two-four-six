'use strict';

function TwoFourSix() {
  const [count, setCount] = React.useState(0);
  return (
    <main className="container">
      <h1 className="mt-5">Two Four Six</h1>
      <p>You clicked {count} times</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </main>
  );
}

const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(<TwoFourSix></TwoFourSix>);