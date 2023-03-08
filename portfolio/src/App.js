import "./App.css";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import "./js/index";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./js/index";
    script.async = true;
    document.body.appendChild(script);
  });

  <div className="App">
    <div>
      <meta charSet="UTF-8" />
      {/* <script
        crossorigin
        src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
      ></script> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Menu to Full Grid Layout | Codrops</title>
      <meta name="description" content />
      <meta name="keywords" content />
      <meta name="author" content="Codrops" />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/yuz0mhb.css" />
      <link rel="stylesheet" type="text/css" href="css/base.css" />
      <svg className="hidden">
        <symbol id="icon-arrow" viewBox="0 0 511.996 511.996">
          <title>Arrow left</title>
          <path d="M462.51 220.392H172.707l67.017-68.342a7.133 7.133 0 00.014-9.956l-39.544-40.612a7.13 7.13 0 00-10.204 0L44.383 251.028a7.128 7.128 0 000 9.941L189.99 410.514c1.338 1.375 3.176 2.15 5.099 2.15s3.76-.775 5.105-2.15l39.544-40.612a7.126 7.126 0 00-.014-9.956l-67.017-68.342H462.51c3.93 0 7.12-3.19 7.12-7.12v-56.97a7.124 7.124 0 00-7.12-7.122z" />
        </symbol>
      </svg>
      <main>
        <div className="frame">
          <h1 className="frame__title">Menu to Full Grid Layout</h1>
          <div className="frame__links">
            <a href="https://tympanus.net/Development/DiagonalThumbnails/">
              Previous demo
            </a>
            <a href="https://tympanus.net/codrops/?p=51021">Article</a>
            <a href>GitHub</a>
          </div>
        </div>
        <div className="bg-gallery-wrap">
          <div className="bg-gallery bg-gallery--1">
            <img
              className="bg-gallery__item"
              src="img/1.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/2.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/3.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/4.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/5.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/6.jpg"
              alt="Some image"
            />
          </div>
          <div className="bg-gallery bg-gallery--2">
            <img
              className="bg-gallery__item"
              src="img/7.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/8.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/9.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/10.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/11.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/12.jpg"
              alt="Some image"
            />
          </div>
          <div className="bg-gallery bg-gallery--3">
            <img
              className="bg-gallery__item"
              src="img/13.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/14.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/15.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/16.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/17.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/18.jpg"
              alt="Some image"
            />
          </div>
          <div className="bg-gallery bg-gallery--4">
            <img
              className="bg-gallery__item"
              src="img/19.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/20.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/21.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/22.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/23.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/24.jpg"
              alt="Some image"
            />
          </div>
          <div className="bg-gallery bg-gallery--5">
            <img
              className="bg-gallery__item"
              src="img/25.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/26.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/27.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/28.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/29.jpg"
              alt="Some image"
            />
            <img
              className="bg-gallery__item"
              src="img/30.jpg"
              alt="Some image"
            />
          </div>
        </div>
        <nav className="menu" id="menu">
          <div className="menu__headline">
            <span className="menu__headline-deco" />
            <span className="menu__headline-text">
              <span>Choose a project</span>
            </span>
          </div>
          <a className="menu__item menu__item--selected" href="#content-1">
            <span className="menu__item-title">Nostalgia</span>
            <span className="menu__item-deco">|</span>
            <span className="menu__item-cta">
              <span>explore</span>
            </span>
          </a>
          <a className="menu__item" href="#content-2">
            <span className="menu__item-title">361 KM</span>
            <span className="menu__item-deco">|</span>
            <span className="menu__item-cta">
              <span>explore</span>
            </span>
          </a>
          <a className="menu__item" href="#content-3">
            <span className="menu__item-title">Moonbox</span>
            <span className="menu__item-deco">|</span>
            <span className="menu__item-cta">
              <span>explore</span>
            </span>
          </a>
          <a className="menu__item" href="#content-4">
            <span className="menu__item-title">Beta Z</span>
            <span className="menu__item-deco">|</span>
            <span className="menu__item-cta">
              <span>explore</span>
            </span>
          </a>
          <a className="menu__item" href="#content-5">
            <span className="menu__item-title">Pink Dream</span>
            <span className="menu__item-deco">|</span>
            <span className="menu__item-cta">
              <span>explore</span>
            </span>
          </a>
        </nav>
        <section className="page page--preview">
          <div className="content" id="content-1" data-bgcolor="#da9b5b">
            <a className="content__back" href="#menu" aria-label="Back to menu">
              <svg className="icon icon--arrow">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </a>
            <h2 className="content__title">
              <span>Nostalgia</span>
            </h2>
            <p className="content__intro">
              <span>
                A sequential collaboration between Nathan Cutward and Henry
                Baldimore aiming to capture light.
              </span>
            </p>
            <span className="content__date">
              <span>February, 2020</span>
            </span>
            <div className="gallery">
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/1.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Amber Van Cult
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/2.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Sky Tone No. 5
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/3.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  From the inside
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/4.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Lonely Friend
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/5.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Framed Walls
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/6.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Nesta Gut
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/3.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Brighton Flies
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/2.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Never Story
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/1.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Quilt Fan
                </figcaption>
              </figure>
            </div>
          </div>
          {/* /content */}
          <div className="content" id="content-2" data-bgcolor="#716d6e">
            <a className="content__back" href="#menu" aria-label="Back to menu">
              <svg className="icon icon--arrow">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </a>
            <h2 className="content__title">
              <span>361 KM</span>
            </h2>
            <p className="content__intro">
              <span>
                What is that lighthouse over there? We will find out soon with
                Terrance Love.
              </span>
            </p>
            <span className="content__date">
              <span>March, 2020</span>
            </span>
            <div className="gallery">
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/7.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Amber Van Cult
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/8.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Sky Tone No. 5
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/9.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  From the inside
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/10.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Lonely Friend
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/11.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Framed Walls
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/12.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Nesta Gut
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/8.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Brighton Flies
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/9.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Never Story
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/7.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Quilt Fan
                </figcaption>
              </figure>
            </div>
          </div>
          {/* /content */}
          <div className="content" id="content-3" data-bgcolor="#a197da">
            <a className="content__back" href="#menu" aria-label="Back to menu">
              <svg className="icon icon--arrow">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </a>
            <h2 className="content__title">
              <span>Moonbox</span>
            </h2>
            <p className="content__intro">
              <span>
                Nothing short of a miracle. What a surprise to your millenial
                birthday.
              </span>
            </p>
            <span className="content__date">
              <span>February, 2020</span>
            </span>
            <div className="gallery">
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/13.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Amber Van Cult
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/14.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Sky Tone No. 5
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/15.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  From the inside
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/16.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Lonely Friend
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/17.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Framed Walls
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/18.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Nesta Gut
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/13.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Brighton Flies
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/15.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Never Story
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/14.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Quilt Fan
                </figcaption>
              </figure>
            </div>
          </div>
          {/* /content */}
          <div className="content" id="content-4" data-bgcolor="#d4da97">
            <a className="content__back" href="#menu" aria-label="Back to menu">
              <svg className="icon icon--arrow">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </a>
            <h2 className="content__title">
              <span>Beta Z</span>
            </h2>
            <p className="content__intro">
              <span>
                Pointless you say? Of course, that's the whole idea behind
                reckless yogurt.
              </span>
            </p>
            <span className="content__date">
              <span>February, 2020</span>
            </span>
            <div className="gallery">
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/19.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Amber Van Cult
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/20.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Sky Tone No. 5
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/21.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  From the inside
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/22.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Lonely Friend
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/23.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Framed Walls
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/24.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Nesta Gut
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/20.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Brighton Flies
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/21.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Never Story
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/19.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Quilt Fan
                </figcaption>
              </figure>
            </div>
          </div>
          {/* /content */}
          <div className="content" id="content-5" data-bgcolor="#ce1452">
            <a className="content__back" href="#menu" aria-label="Back to menu">
              <svg className="icon icon--arrow">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </a>
            <h2 className="content__title">
              <span>Pink Dream</span>
            </h2>
            <p className="content__intro">
              <span>
                When you say Pasha, I get excited. But wait for winter, it will
                blow your mind!
              </span>
            </p>
            <span className="content__date">
              <span>February, 2020</span>
            </span>
            <div className="gallery">
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/25.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Amber Van Cult
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/26.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Sky Tone No. 5
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/27.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  From the inside
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/28.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Lonely Friend
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/29.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Framed Walls
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/30.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Nesta Gut
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/26.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Brighton Flies
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/27.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Never Story
                </figcaption>
              </figure>
              <figure className="gallery__figure">
                <img
                  className="gallery__figure-img"
                  src="img/25.jpg"
                  alt="Some image"
                />
                <figcaption className="gallery__figure-caption">
                  Quilt Fan
                </figcaption>
              </figure>
            </div>
          </div>
          {/* /content */}
        </section>
        {/* /page */}
      </main>
      <svg className="cursor" width={30} height={30} viewBox="0 0 30 30">
        <circle className="cursor__inner" cx={15} cy={15} r="7.5" />
      </svg>
    </div>
  </div>;
}

export default App;
