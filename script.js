const scrollToTop = document.getElementById("scroll-to-top");

scrollToTop.addEventListener("click", () => {
  window.scroll(0, 0);
});

changeActiveDot = (id) => {
  document
    .querySelector(".scroll-bar-section.active")
    .classList.remove("active");
  let el = document.querySelector(`[data-content="${id}"]`);
  el.classList.add("active");

  document.querySelector(".side-list-item.active").classList.remove("active");
  let el2 = document.querySelector(`[data-section="${id}"]`);
  el2.classList.add("active");
};

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

window.addEventListener("scroll", () => {
  document.querySelectorAll(".section").forEach((secElement, i) => {
    var secDim = secElement.getBoundingClientRect();
    if (
      secDim.top > -(secDim.height / 2) &&
      secDim.top < window.innerHeight / 2
    ) {
      changeActiveDot(secElement.getAttribute("id"));
    }
  });
});

let Data = {
  en: {
    esportsmallnav: [
      "Home",
      "E-Sports",
      "Festival",
      "Music",
      "Summit",
      "Game & Learn",
      "اللغة العربية",
      "",
      "© 2022 Gamers8. All rights reserved",
    ],
    esportnav: [
      "E-Sports",
      "Festival",
      "Music",
      "Summit",
      "Game & Learn",
      "اللغة العربية",
    ],

    header: [
      "Your Portal ",
      "To the Next World",
      "8 Week mega festival",
      "6 International Esports tournaments",
      "$15m Prize pool",
      "World's top artists",
      "More than 1,000 activities and attractions",
      "SCROLL DOWN <br> & DISCOVER",
    ],
    introduction: [
      "Gamers8 will be the ultimate destination for gamers, Esports enthusiasts and fans, and families and children of all ages, offering elite and competitive tournaments, entertainment, activities and attractions, incredible music concerts and shows, and so much more. To top it all off, Gamers8 will end with a gaming and Esports summit, that brings together sector leaders and experts from around the world.",
    ],
    professional: [
      "Professional Esports",
      "Tournaments will be played in a purpose-built venue right in the middle of the gaming dreamland, where fans can enjoy top-level Esports and an abundance of other entertainment activities.",
    ],
    festival: [
      "Festival",
      "The Gamers8 festival will be home to countless, fun-packed events, shows and futuristic experiences that bring the virtual world of gaming out into the physical realm. With more than 1,000 activities and attractions, there truly is something for everyone.",
    ],
    saudi: [
      "./assets/images/saudi-esports-logo-en.png",
      "The best teams in the world will converge at the state of the art, purpose-built venue at Riyadh Boulevard City to compete across six different titles – with a staggering $15 million prize pool.",
    ],
    music: [
      "MUSIC CONCERTS",
      "No Festival is complete without the world’s best artists giving fans a musical experience to remember.",
    ],
    summit: [
      "Summit Factsheet",
      "The Summit will provide a platform for highly engaging and innovative formats for every stakeholder of the Esports and gaming ecosystem. In addition, youth will be at the center of the event, thanks to the participation of leading academic institutions and organizations.",
      "<img src='./assets/images/pin.svg' alt=''>Gamers8 Festival",
      "<img src='./assets/images/calender.svg' class='calender-icon' id='calender-icon' alt=''>To be confirmed",
      "2 Days full of events, shows and activities",
      "Riyadh, Kingdom of Saudi Arabia",
      "Leading speakers in the Esports world",
      "Interaction with leading organizations in the ecosystem",
    ],
    game: ["Game & Learn"],
    footer: [
      "© 2022 Gamers8. All rights reserved",
      "./assets/images/saudi-esports-logo-en.png",
    ],
    scroll: ["Main", "E-Sports", "Festival", "Music", "Summit", "Game & Learn"],
  },
  ar: {
    esportsmallnav: [
      "الرئيسية",
      "الرياضات الإلكترونية",
      "فعاليات الموسم",
      "حفلات",
      "المؤتمر",
      "العب وتعلم",
      "English",
      "",
      "© موسم الجيمرز - كل الحقوق محفوظة",
    ],
    esportnav: [
      "الرياضات الإلكترونية",
      "فعاليات الموسم",
      "حفلات",
      "المؤتمر",
      "العب وتعلم",
      "English",
    ],
    header: [
      "موسم الجيمرز ",
      "بوابتك الى العالم القادم",
      "مهرجان ضخم على مدار 8 أسابيع",
      "6 بطولات في منافسات النخبة",
      "15 مليون دولار أمريكي مجموع جوائز البطولات",
      "نخبة الفنانين حول العالم",
      "أكثر من 1000 نشاط ترفيهي",
      "مرر للاسفل  <br> واكتشف المزيد",
    ],
    introduction: [
      "يُقدم موسم الجيمرز تجربة خاصة لعشاق ومحبي الرياضات والألعاب الإلكترونية، من خلال العديد من البطولات التنافسية بمشاركة أفضل اللاعبين والفرق على مستوى العالم، بالإضافة إلى الفعاليات والأنشطة التعليمية والترفيهية والحفلات الموسيقية المقدمة للجميع. ويختتم الموسم بقمة العالم القادم التي تجمع قادة قطاع الرياضات والألعاب الإلكترونية والخبراء من جميع أنحاء العالم.",
    ],
    professional: [
      "منافسات النخبة",
      "تقام بطولات منافسات النخبة في موقع ضخم مخصص للحدث العالمي ومزود بأحدث التقنيات لتقديم أفضل تجربة للمشاركين وللجماهير",
    ],
    festival: [
      "العروض الترفيهية",
      "سيكون موسم الجيمرز موطناً لأكثر من 1000 نشاط ترفيهي والتي تنقل عالم الألعاب الافتراضي إلى الواقع",
    ],
    saudi: [
      "./assets/images/saudi-esports-logo-ar.png",
      "تتنافس نخبة الفرق العالمية من خلال 6 بطولات لأشهر الألعاب وبمجموع جوائز مالية يبلغ 15 مليون دولار أمريكي، تقام في موقع ضخم صُمم خصيصاً للمنافسات في بوليفارد رياض سيتي",
    ],
    music: ["حفلات موسيقية", "أفضل التجارب الموسيقية التي لن تنسى"],
    summit: [
      "قمة العالم القادم",
      'تقدم "قمة العالم القادم" تجربة إبداعية وتفاعلية لجميع أصحاب المصلحة في قطاع الرياضات والألعاب الإلكترونية وسيكون جيل الشباب محط اهتمام القمة بمشاركة أبرز المعاهد والمنظمات الأكاديمية',
      "<img src='./assets/images/pin.svg' alt=''>موسم الجيمرز",
      "<img src='./assets/images/calender.svg' class='calender-icon' id='calender-icon' class='ar' alt=''>سيتم تحديده لاحقاً",
      "يومان من الفعاليات والعروض والأنشطة",
      "الرياض، المملكة العربية السعودية",
      "متحدثون من قادة قطاع الرياضات الإلكترونية",
      "التفاعل مع الجهات الرائدة في القطاع",
    ],
    game: ["إلعب وتعلَّم"],
    footer: [
      "© موسم الجيمرز - كل الحقوق محفوظة",
      "./assets/images/saudi-esports-logo-ar.png",
    ],
    scroll: [
      "الرئيسية",
      "رياضات الكترونية",
      "فعاليات الموسم",
      "حفلات",
      "المؤتمر",
      "العب وتعلم",
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

  $(".eg8-header .header-title > h1 .first-title").innerHTML =
    PageData.header[0];
  $(".eg8-header .header-title > h1 .second-title").innerHTML =
    PageData.header[1];
  $(".eg8-header .more-info > div:nth-child(1) p").innerHTML =
    PageData.header[2];
  $(".eg8-header .more-info > div:nth-child(2) p").innerHTML =
    PageData.header[3];
  $(".eg8-header .more-info > div:nth-child(3) p").innerHTML =
    PageData.header[4];
  $(".eg8-header .more-info > div:nth-child(4) p").innerHTML =
    PageData.header[5];
  $(".eg8-header .more-info > div:nth-child(5) p").innerHTML =
    PageData.header[6];
  $(".eg8-header .scroll-down-note p").innerHTML = PageData.header[7];

  $(".introduction-text p").innerHTML = PageData.introduction[0];

  $(".professional-esports .content h2").innerHTML = PageData.professional[0];
  $(".professional-esports .content p").innerHTML = PageData.professional[1];

  $(".festival .content h2").innerHTML = PageData.festival[0];
  $(".festival .content p").innerHTML = PageData.festival[1];

  $(".saudi-esports .content .saudi-esports-img img").src = PageData.saudi[0];
  $(".saudi-esports .content p").innerHTML = PageData.saudi[1];

  $(".music-concert .content h2").innerHTML = PageData.music[0];
  $(".music-concert .content p").innerHTML = PageData.music[1];

  $(".summit-factsheet .info > h2").innerHTML = PageData.summit[0];
  $(".summit-factsheet .info > p").innerHTML = PageData.summit[1];
  $(".summit-factsheet .info .summit-date span:nth-child(1)").innerHTML =
    PageData.summit[2];
  $(".summit-factsheet .info .summit-date span:nth-child(2)").innerHTML =
    PageData.summit[3];
  $(".summit-factsheet .more-info > div:nth-child(1) p").innerHTML =
    PageData.summit[4];
  $(".summit-factsheet .more-info > div:nth-child(2) p").innerHTML =
    PageData.summit[5];
  $(".summit-factsheet .more-info > div:nth-child(3) p").innerHTML =
    PageData.summit[6];
  $(".summit-factsheet .more-info > div:nth-child(4) p").innerHTML =
    PageData.summit[7];

  $(".game-learn h2").innerHTML = PageData.game[0];

  $(".eg8-footer .copyrights").innerHTML = PageData.footer[0];
  $(".eg8-footer .footer-logos .footer-logo3").src = PageData.footer[1];

  $(
    ".scroll-bar-container .scroll-bar-section:nth-child(1) small:nth-child(2)"
  ).innerHTML = PageData.scroll[0];
  $(
    ".scroll-bar-container .scroll-bar-section:nth-child(2) small:nth-child(2)"
  ).innerHTML = PageData.scroll[1];
  $(
    ".scroll-bar-container .scroll-bar-section:nth-child(3) small:nth-child(2)"
  ).innerHTML = PageData.scroll[2];
  $(
    ".scroll-bar-container .scroll-bar-section:nth-child(4) small:nth-child(2)"
  ).innerHTML = PageData.scroll[3];
  $(
    ".scroll-bar-container .scroll-bar-section:nth-child(5) small:nth-child(2)"
  ).innerHTML = PageData.scroll[4];
  $(
    ".scroll-bar-container .scroll-bar-section:nth-child(6) small:nth-child(2)"
  ).innerHTML = PageData.scroll[5];

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

const locator = $("#locator");

window.addEventListener("scroll", () => {
  const locatorPosition = locator.getBoundingClientRect().top;
  if (locatorPosition < 0) {
    scrollToTop.classList.add("shown");
  } else {
    scrollToTop.classList.remove("shown");
  }
});
