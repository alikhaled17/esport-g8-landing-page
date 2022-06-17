const scrollToTop = document.getElementById("scroll-to-top");

scrollToTop.addEventListener("click", () => {
  window.scroll(0, 0);
});

// changeActiveDot = (id) => {
//   document
//     .querySelector(".scroll-bar-section.active")
//     .classList.remove("active");
//   let el = document.querySelector(`[data-content="${id}"]`);
//   el.classList.add("active");

//   document.querySelector(".side-list-item.active").classList.remove("active");
//   let el2 = document.querySelector(`[data-section="${id}"]`);
//   el2.classList.add("active");
// };

document.querySelectorAll(".side-list-item").forEach((el, i) => {
  el.addEventListener("click", () => {
    document.querySelector(".side-bar").classList.remove("active");
    let id = el.getAttribute("data-section");
    let sec = document.getElementById(id);
    window.scroll(sec.x, sec.offsetTop);
  });
});

document.querySelectorAll(".nav-item").forEach((el, i) => {
  el.addEventListener("click", () => {
    let id = el.getAttribute("data-nav-content");
    let sec = document.getElementById(id);
    window.scroll(sec.x, sec.offsetTop);
  });
});

// window.addEventListener("scroll", () => {
//   document.querySelectorAll(".section").forEach((secElement, i) => {
//     var secDim = secElement.getBoundingClientRect();
//     if (
//       secDim.top > -(secDim.height / 2) &&
//       secDim.top < window.innerHeight / 2
//     ) {
//       changeActiveDot(secElement.getAttribute("id"));
//     }
//   });
// });

let Data = {
  en: {
    esportsmallnav: [
      "Home",
      "Esports",
      "Festival",
      "Concerts",
      "Next World Summit",
      "Game & Learn",
      "اللغة العربية",
      "",
      "© 2022 Gamers8. All rights reserved",
    ],
    esportnav: [
      "Esports",
      "Festival",
      "Concerts",
      "Next World Summit",
      "Game & Learn",
      "اللغة العربية",
    ],

    header: [
      "Esports tournaments",
      "SCROLL DOWN <br> & DISCOVER",
    ],
    esportIntroduction: [
      "The world’s biggest Esports teams will be battling for a staggering $15 million prize pool this summer in Riyadh, the capital city of the Kingdom of Saudi Arabia. Each tournament promises to be an unforgettable experience for the whole Esports community.",
      "<span>Save the date</span><br>From 14th July till 8th September",
      "More details coming soon"
    ],
    tournaments: {
      title: "All Tournaments",
      cards: [
        {
          tourLogo: "/rocket-leage.png",
          tourName: "Rocket League",
          tourLocation: "Esports & Elite Zone - Boulevard",
          tourDate: "14<sup>th</sup> July 2022 - 17<sup>th</sup> July 2022 "
        },
        {
          tourLogo: "/dota.png",
          tourName: "Dota 2",
          tourLocation: "Esports & Elite Zone - Boulevard",
          tourDate: "21<sup>th</sup> July 2022 - 24<sup>th</sup> July 2022 "
        },
        {
          tourLogo: "/fortnite.png",
          tourName: "Fortnite",
          tourLocation: "Esports & Elite Zone - Boulevard",
          tourDate: "28<sup>th</sup> July 2022 - 31<sup>th</sup> July 2022 "
        },
        {
          tourLogo: "/rainbow-six.png",
          tourName: "Rainbow Six",
          tourLocation: "Esports & Elite Zone - Boulevard",
          tourDate: "4<sup>th</sup> August 2022 - 7<sup>th</sup> August 2022 "
        },
        {
          tourLogo: "/pubg.png",
          tourName: "PUBG MOBILE",
          tourLocation: "Esports & Elite Zone - Boulevard",
          tourDate: "11<sup>th</sup> August 2022 - 20<sup>th</sup> August 2022 "
        },
      ]
    },
    contacts: {
      title: "Stay Connected",
      channels: [
        {
          channelLink: "https://www.facebook.com/Gamers8GG/",
          channelLogo: "/facebook-app-symbol.svg",
          channelName: "Join our Facebook",
        },
        {
          channelLink: "https://www.youtube.com/channel/UCENNtCRTPTdH_IGXs42LuHQ",
          channelLogo: "/tube.svg",
          channelName: "Join our Youtube",
        },
        {
          channelLink: "https://www.instagram.com/gamers8gg/",
          channelLogo: "/instgram.svg",
          channelName: "Join our Instagram",
        },
        {
          channelLink: "https://www.twitch.tv/gamers8_en",
          channelLogo: "/txto.svg",
          channelName: "Join our Twitch",
        },
        {
          channelLink: "https://twitter.com/Gamers8GG",
          channelLogo: "/twitter.svg",
          channelName: "Join our Twitter",
        },
        {
          channelLink: "https://www.tiktok.com/@gamers8gg",
          channelLogo: "/tiktok.svg",
          channelName: "Join our Tiktok",
        }
      ],
      hashs: [
        "#Gamers8",
        "#Next_World_is_here!",
        "#Your_Gateway_to_Glory",
      ]
    },
    game: ["Game & Learn"],
    footer: [
      "© 2022 Gamers8. All rights reserved",
      "./assets/images/SAOC-LOGO-EN.png",
      "./assets/images/saudi-esports-logo-en.png",
    ],
    scroll: [
      "Main",
      "Esports",
      "Festival",
      "Concerts",
      "Summit",
      "Game & Learn",
    ],
  },
  ar: {
    esportsmallnav: [
      "الرئيسية",
      "منافسات النخبة",
      " العروض الترفيهية",
      "الحفلات الموسيقية",
      "قمة العالم القادم",
      "إلعب  وتعلَّم",
      "English",
      "",
      "© موسم الجيمرز - كل الحقوق محفوظة",
    ],
    esportnav: [
      " منافسات النخبة",
      " العروض الترفيهية",
      "الحفلات الموسيقية",
      "قمة العالم القادم",
      "إلعب  وتعلَّم",
      "English",
    ],
    header: [
      "بطولات الالعاب الالكترونية",
      "مرر للاسفل  <br> واكتشف المزيد",
    ],
    esportIntroduction: [
      "بجائزة مُدهِشه بقيمة 15 مليون دولار سوف تتنافس عليها أكبر الفِرق في العالم هذا الصيف في الرياض، عاصمة المملكة العربية السعودية. كل بطولة ستكون تجربة من الخيـال ولن ينساها مجتمع الرياضات الإلكترونية بأكمله.",
      "<span>احفظوا التاريخ</span><br>من 14 يوليو إلى 8 سبتمبر",
      "تابعنا وبتعرف أكثر"
    ],
    tournaments: {
      title: "كل البطولات",
      cards: [
        {
          tourLogo: "/rocket-leage.png",
          tourName: "Rocket League",
          tourLocation: "منطقة الالعاب الالكترونية - البوليفارد",
          tourDate: "١٤ يوليو ٢٠٢٢ - ١٧ يوليو ٢٠٢٢"
        },
        {
          tourLogo: "/dota.png",
          tourName: "Dota 2",
          tourLocation: "منطقة الالعاب الالكترونية - البوليفارد",
          tourDate: "٢١ يوليو ٢٠٢٢ - ٢٤ يوليو ٢٠٢٢"
        },
        {
          tourLogo: "/fortnite.png",
          tourName: "Fortnite",
          tourLocation: "منطقة الالعاب الالكترونية - البوليفارد",
          tourDate: "٢٨ يوليو ٢٠٢٢ - ٣١ يوليو ٢٠٢٢ "
        },
        {
          tourLogo: "/rainbow-six.png",
          tourName: "Rainbow Six",
          tourLocation: "منطقة الالعاب الالكترونية - البوليفارد",
          tourDate: "٤ اغسطس ٢٠٢٢ - ٧ اغسطس ٢٠٢٢ "
        },
        {
          tourLogo: "/pubg.png",
          tourName: "PUBG MOBILE",
          tourLocation: "منطقة الالعاب الالكترونية - البوليفارد",
          tourDate: "١١ اغسطس ٢٠٢٢ - ٢٠ اغسطس ٢٠٢٢ "
        },
      ]
    },
    contacts: {
      title: "ابقَ دوماً على إتصال",
      channels: [
        {
          channelLink: "https://www.facebook.com/Gamers8GG/",
          channelLogo: "/facebook-app-symbol.svg",
          channelName: "انضم الينا علي فيسبوك",
        },
        {
          channelLink: "https://www.youtube.com/channel/UCENNtCRTPTdH_IGXs42LuHQ",
          channelLogo: "/tube.svg",
          channelName: "انضم الينا علي يوتيوب",
        },
        {
          channelLink: "https://www.instagram.com/gamers8gg/",
          channelLogo: "/instgram.svg",
          channelName: "انضم الينا علي انستجرام",
        },
        {
          channelLink: "https://www.twitch.tv/gamers8_en",
          channelLogo: "/txto.svg",
          channelName: "انضم الينا علي تويتش",
        },
        {
          channelLink: "https://twitter.com/Gamers8GG",
          channelLogo: "/twitter.svg",
          channelName: "انضم الينا علي تويتر",
        },
        {
          channelLink: "https://www.tiktok.com/@gamers8gg",
          channelLogo: "/tiktok.svg",
          channelName: "انضم الينا علي تيك توك",
        }
      ],
      hashs: [
        "#جيمرز8",
        "#العالم_القادم_هنا!",
        "#بوابتك_للمجد",
      ]
    },
    game: ["إلعب وتعلَّم"],
    footer: [
      "© موسم الجيمرز - كل الحقوق محفوظة",
      "./assets/images/SAOC-LOGO-AR.png",
      "./assets/images/saudi-esports-logo-ar.png",
    ],
    scroll: [
      "الرئيسية",
      " منافسات النخبة",
      " العروض الترفيهية",
      "الحفلات الموسيقية",
      "القمة",
      "إلعب  وتعلَّم",
    ],
  },
};

let lang = "en";

function $(query) {
  return document.querySelector(query);
}

function showData() {
  let PageData;
  if (lang === "en") {
    PageData = Data.en;
  } else {
    PageData = Data.ar;
  }

  $(".eg8-navbar .nav-item:nth-child(2) small").innerHTML =
    PageData.esportnav[0];
  $(".eg8-navbar .nav-item:nth-child(3) small").innerHTML =
    PageData.esportnav[1];
  $(".eg8-navbar .nav-item:nth-child(4) small").innerHTML =
    PageData.esportnav[2];
  $(".eg8-navbar .nav-item:nth-child(5) small").innerHTML =
    PageData.esportnav[3];
  $(".eg8-navbar .nav-item:nth-child(6) small").innerHTML =
    PageData.esportnav[4];
  $(".chng-to-arabic").innerHTML = PageData.esportnav[5];

  $(".esport8-header .header-title h2").innerHTML =
    PageData.header[0];
  $(".esport8-header .scroll-down-note p").innerHTML = PageData.header[1];

  $(".esport-introduction-text p").innerHTML = PageData.esportIntroduction[0];
  $(".esport-introduction-text h2").innerHTML = PageData.esportIntroduction[1];
  $(".esport-introduction-text .follow-up").innerHTML = PageData.esportIntroduction[2];

 
  let cards = ''
  for (let i = 0; i < PageData.tournaments.cards.length; i++) {
    const element = PageData.tournaments.cards[i];

    let htmlEllement = `
    <div class="tour-card">
      <div class="tournament-container speakerCard">
        <img class="outer" src="./assets/images/tour-outer.svg" alt="top line" />
        
        <div class="tournament-clipped" >

          <div class="tournament-details">
            <div class="tournament-details-logo">
                <img src="./assets/images${element.tourLogo}" alt="" />
            </div>
            <div class="tournament-details-name">
                <h6 class="tournament-details-name">${element.tourName}</h6>
            </div>
            <div class="tournament-details-location">
                <img src="./assets/images/Group 21114.png" alt="location" />
                <p>${element.tourLocation}</p>
            </div>
            <div class="tournament-details-date">
                <img src="./assets/images/Group 22532.png" alt="Date" />
                <p>${element.tourDate}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
    `;
    cards = cards + " " + htmlEllement;
  }
  $('.tournaments .main-title').innerHTML = PageData.tournaments.title;
  $('.tournaments .tournaments-cards').innerHTML = cards;


  let channels = ''
  for (let i = 0; i < PageData.contacts.channels.length; i++) {
    const element = PageData.contacts.channels[i];
    let channelEllement = `
    <a target="_blank" href="${element.channelLink}" class="social-channel">
      <img src="./assets/images${element.channelLogo}" alt="">
      <span>${element.channelName}</span>
    </a>
    `;
    channels = channels + " " + channelEllement;
  }
  $('.contacts .contact-channels').innerHTML = channels;
  

  let hashs = ''
  for (let i = 0; i < PageData.contacts.hashs.length; i++) {
    const element = PageData.contacts.hashs[i];
    let hashEllement = `
    <span class="hash">${element}</span>
    `;
    hashs = hashs + " " + hashEllement;
  }
  $('.contacts .hashs').innerHTML = hashs;
  $('.contacts .main-title').innerHTML = PageData.contacts.title;


  // $(".game-learn h2").innerHTML = PageData.game[0];

  $(".eg8-footer .copyrights").innerHTML = PageData.footer[0];
  $(".eg8-footer .footer-logos .footer-logo2").src = PageData.footer[1];
  $(".eg8-footer .footer-logos .footer-logo3").src = PageData.footer[2];

  // $(
  //   ".scroll-bar-container .scroll-bar-section:nth-child(1) small:nth-child(2)"
  // ).innerHTML = PageData.scroll[0];
  // $(
  //   ".scroll-bar-container .scroll-bar-section:nth-child(2) small:nth-child(2)"
  // ).innerHTML = PageData.scroll[1];
  // $(
  //   ".scroll-bar-container .scroll-bar-section:nth-child(3) small:nth-child(2)"
  // ).innerHTML = PageData.scroll[2];
  // $(
  //   ".scroll-bar-container .scroll-bar-section:nth-child(4) small:nth-child(2)"
  // ).innerHTML = PageData.scroll[3];
  // $(
  //   ".scroll-bar-container .scroll-bar-section:nth-child(5) small:nth-child(2)"
  // ).innerHTML = PageData.scroll[4];
  // $(
  //   ".scroll-bar-container .scroll-bar-section:nth-child(6) small:nth-child(2)"
  // ).innerHTML = PageData.scroll[5];

  $(".side-bar .side-list-item:nth-child(1) small").innerHTML =
    PageData.esportsmallnav[0];
  $(".side-bar .side-list-item:nth-child(2) small").innerHTML =
    PageData.esportsmallnav[1];
  $(".side-bar .side-list-item:nth-child(3) small").innerHTML =
    PageData.esportsmallnav[2];
  $(".side-bar .side-list-item:nth-child(4) small").innerHTML =
    PageData.esportsmallnav[3];
  $(".side-bar .side-list-item:nth-child(5) small").innerHTML =
    PageData.esportsmallnav[4];
  $(".side-bar .side-list-item:nth-child(6) small").innerHTML =
    PageData.esportsmallnav[5];

  $(".side-bar .change-to-arabic").innerHTML = PageData.esportsmallnav[6];
  $(".side-bar .side-footer-head span:nth-child(1)").innerHTML =
    PageData.esportsmallnav[7];
  $(".side-bar .side-copyrights").innerHTML = PageData.esportsmallnav[8];
}

function changeLang() {
  if (lang === "en") {
    lang = "ar";
    showData();
    document.body.classList.add("ar");
    document
      .getElementById("prize-pool")
      .setAttribute("src", "./assets/images/prize-pool-ar.png");
  } else {
    lang = "en";
    showData();
    document.body.classList.remove("ar");
    document
      .getElementById("prize-pool")
      .setAttribute("src", "./assets/images/prize-pool.png");
  }
}

document.querySelector(".chng-to-arabic").addEventListener("click", changeLang);
showData();

document.getElementById("list-icon").addEventListener("click", () => {
  document.querySelector(".side-bar").classList.add("active");
});

document.getElementById("close-side").addEventListener("click", () => {
  document.querySelector(".side-bar").classList.remove("active");
});

document
  .querySelector(".side-bar .change-to-arabic")
  .addEventListener("click", changeLang);

// const locator = $("#locator");

// window.addEventListener("scroll", () => {
//   const locatorPosition = locator.getBoundingClientRect().top;
//   if (locatorPosition < 0) {
//     scrollToTop.classList.add("shown");
//   } else {
//     scrollToTop.classList.remove("shown");
//   }
// });
