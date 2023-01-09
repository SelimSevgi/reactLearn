import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// asıl işlemlerin yapıldığı yer src dosyası adı altında bulunmaktadır.
// temel olarak src klasörü içerisinde app.js ve index js. var
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* App kompanentini render etmek için kullanıyoruz */}
    {/* PUBLİC KLASÖRÜ  */}
    {/* build alırken herşey public adı altındaki klasörden çekiyor  */}
    {/* url kısında direk olarak public klasörü alrında bulunan verilere erişim sağlanabilir. */}
    {/* TERMİNAL
    terminalde klasör seçmek ve yerine gitmek için cd kullanılır
    cd .. kalasörden çıkmak için kullanılır
    cd ./___ ise ilgili klasörü seçmek ve içinde kullanılan verilere erişim sağlamak için kullanılır */}
    <App />
  </React.StrictMode>
);
