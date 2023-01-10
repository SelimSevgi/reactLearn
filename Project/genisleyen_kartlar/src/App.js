import React, { useEffect, useState } from "react";
const data = [
  {
    title: "Nemrut",
    url: "url(https://cdn1.ntv.com.tr/gorsel/pAx1_ARvDUuhC0XtmPr7MQ.jpg?width=1000&mode=both&scale=both&v=1661418292796)",
  },
  {
    title: "Uluabat Gölü",
    url: "url(https://cdn1.ntv.com.tr/gorsel/fCG39XCI_k6uH8wPdTvvIw.jpg?width=1000&mode=both&scale=both&v=1661418292796)",
  },
  {
    title: "Oylat",
    url: "url(https://cdn1.ntv.com.tr/gorsel/HbPyQ4XXtEOcmtotlbAmrA.jpg?width=1000&mode=both&scale=both&v=1661418292796)",
  },
  {
    title: "Gökçeada",
    url: "url(https://cdn1.ntv.com.tr/gorsel/tkEzF67JzkyshW3u4qrHzA.jpg?width=1000&mode=both&scale=both&v=1661418292796)",
  },
  {
    title: "Tortum Şalalesi",
    url: "url(https://cdn1.ntv.com.tr/gorsel/Gp0NAvswcEiYsw3seHSwvg.jpg?width=1000&mode=both&scale=both&v=1661418292796)",
  },
];

function App() {
  const [selectedInx, setInx] = useState(0);

  // useEffect(() => {
  //   const panels = document.querySelectorAll(".panel");
  //   console.log(panels);
  // }, []);

  // panels.forEach((panel) => [
  //   panel.addEventListener("click", () => {
  //     removeActive();
  //     panel.classList.add("active");
  //   }),
  // ]);
  // function removeActive() {
  //   panels.forEach((panel) => {
  //     console.log({ panel });
  //     panel.classList.remove("active");
  //   });
  // }
  const handleSelectedIndex = () => {
    return "Selim";
  };

  console.log(handleSelectedIndex());

  return (
    <div className="App">
      <div className="container">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setInx(index)}
            className={`panel ${index === selectedInx && "active"}`}
            style={{
              backgroundImage: item.url,
            }}
          >
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
