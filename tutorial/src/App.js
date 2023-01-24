// src klasörü altundaki logo.svg import etmek gerekiyor
import GenisleyenKart from "./project/genisleyenKartlar";
import PropsTutorialPage from "./tutorials/PropsTutorialFromPrototurk";
import StateTutorialFromPrototurk from "./tutorials/StateTutorialFromPrototurk";

function App() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <h1>PropsTutorialFromPrototurk</h1>
      <PropsTutorialPage />
      <h1>PropsTutorialFromPrototurk</h1>
      <StateTutorialFromPrototurk />
      <h1>Genişleyen kartlar</h1>
      <GenisleyenKart />
    </div>
  );
}

export default App;
