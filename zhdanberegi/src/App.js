
import './App.css';
import Photo from "./pic/IMAGE 2023-01-27 02:16:50.jpg"
import Inst from "./pic/pngegg.png"
import Tel from "./pic/kisspng-telegram-encapsulated-postscript-transfer-5b17060586a686.1271014115282355255515.png"
function App() {
  return (
    <div className="App">
<div class="container">
      <div class="containtersmall">
        <div class="mainphoto">
          <img src={Photo} alt="myphoto" />
        </div>
        <div class="boxforlinks">
          <div class="instagram">
            <a href="https://www.instagram.com/zhdan.music/">
              <img src={Inst} alt="myinst"
            /></a>
          </div>
          <div class="telegram">
            <a id="links" href="https://t.me/zhdan_music">
              <img
                src={Tel}
                alt="myinst"
            /></a>
          </div>
        </div>
        <div class="boxforstores">
          <a class="main-link" href="https://music.yandex.ru/album/24679873/track/110846882">
            Cлушать на Яндекс.Музыка
          </a>
          <a
            class="main-link"
            href="https://open.spotify.com/track/0TLI31v3sMSI5bzMHh1p7O?si=eYoEWwlFS6u7c3dC_STraw"
          >
            Cлушать на Spotify
          </a>
          <a
            class="main-link"
            href="https://music.apple.com/qa/album/%D0%B1%D0%B5%D1%80%D0%B5%D0%B3%D0%B8-remix/1666534924?i=1666534927"
          >
            Cлушать на Apple Music
          </a>
          <a
            class="main-link"
            href="https://vk.com/audio2000291079_456244656_85b79d1eb84394a21e"
          >
            Cлушать на VK Музыка
          </a>
          <a
            class="main-link originalsong"
            href="https://zhdan-beregi.vercel.app/"
          >
            Послушать оригинал
          </a>
        </div>
        <div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
