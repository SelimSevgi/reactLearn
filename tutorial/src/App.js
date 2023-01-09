// src klasörü altundaki logo.svg import etmek gerekiyor
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      {/* public klasörü içerisindeki verilere erişim için (fotoğraf vb.)
      statik olarak görseli çekmek için. 
      kalıcı bir resim kalacaksa public klasörü içerinde kullanımalı ve çağrılmalıdır. 
      */}
      <img src="./logo192.png"></img>
      {/* src klassörü altındaki logo ya erişim sağlamak için
      <img src="./logo.svg"></img>  bu şekilde kullanım olmuyor  */}
      {/* src klasörü veya public klasörü içerinde çağrılan verilen her zaman değişikliğe uğrayabilir. */}
      {/* import edilen dosyayı çağırmak için */}
      <img src={logo}></img>
      {/* package.json içerisindeki
       verilen bilgileri source kısımda açık olaark görülmemesi için // build
      kısmına GENERATE_SOURCEMAP = false */}
    </div>
  );
}

export default App;
