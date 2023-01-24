// src klasörü altundaki logo.svg import etmek gerekiyor
import PropsTutorialPage from "./tutorials/PropsTutorialFromPrototurk";
import StateTutorialFromPrototurk from "./tutorials/StateTutorialFromPrototurk";

function App() {
  return (
    <div className="App">
      {/* public klasörü içerisindeki verilere erişim için (fotoğraf vb.)
      statik olarak görseli çekmek için. 
      kalıcı bir resim kalacaksa public klasörü içerinde kullanımalı ve çağrılmalıdır. 
      */}
      <h1>PropsTutorialFromPrototurk</h1>
      <PropsTutorialPage />
      <h1>PropsTutorialFromPrototurk</h1>
      <StateTutorialFromPrototurk />
      {/* src klassörü altındaki logo ya erişim sağlamak için
      <img src="./logo.svg"></img>  bu şekilde kullanım olmuyor  */}
      {/* src klasörü veya public klasörü içerinde çağrılan verilen her zaman değişikliğe uğrayabilir. */}
      {/* import edilen dosyayı çağırmak için */}
      {/* package.json içerisindeki
       verilen bilgileri source kısımda açık olaark görülmemesi için // build
      kısmına GENERATE_SOURCEMAP = false */}
    </div>
  );
}

export default App;
