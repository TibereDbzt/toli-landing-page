/* Compose the landing page + scroll-reveal. */
function App() {
  return (
    <React.Fragment>
      <window.NavBar />
      <main>
        <window.Hero />
        <window.Problem />
        <window.Product />
        <window.Athletes />
        <window.DayCompare />
        <window.Why />
        <window.Trusted />
        <window.FAQ />
        <window.FinalCTA />
      </main>
      <window.Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
