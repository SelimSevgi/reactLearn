import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div
          className="panelActive"
          style={{
            backgroundImage: `url("https://cdn1.ntv.com.tr/gorsel/pAx1_ARvDUuhC0XtmPr7MQ.jpg?width=1000&mode=both&scale=both&v=1661418292796")`,
          }}
        >
          <h3>Nemrut</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage: `url("https://cdn1.ntv.com.tr/gorsel/fCG39XCI_k6uH8wPdTvvIw.jpg?width=1000&mode=both&scale=both&v=1661418292796")`,
          }}
        >
          <h3>Uluabat Gölü</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage: `url("https://cdn1.ntv.com.tr/gorsel/HbPyQ4XXtEOcmtotlbAmrA.jpg?width=1000&mode=both&scale=both&v=1661418292796")`,
          }}
        >
          <h3>Oylat</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage: `url("https://cdn1.ntv.com.tr/gorsel/tkEzF67JzkyshW3u4qrHzA.jpg?width=1000&mode=both&scale=both&v=1661418292796")`,
          }}
        >
          <h3>Gökçeada</h3>
        </div>
        <div
          className="panel"
          style={{
            backgroundImage: `url("https://cdn1.ntv.com.tr/gorsel/Gp0NAvswcEiYsw3seHSwvg.jpg?width=1000&mode=both&scale=both&v=1661418292796")`,
          }}
        >
          <h3>Tortum Şalalesi</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
