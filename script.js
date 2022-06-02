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
      "The Gate ",
      "To the Next World",
      "Weeks mega festival",
      "International esports tournaments",
      "Prize pool",
      "World's top artists",
      "Countless shows & experiences",
      "SCROLL DOWN <br> & DISCOVER",
    ],
    introduction: [
      "Gamers8 will be the ultimate destination for Gamers, Esports Enthusiasts & Fans, as well as Families and Children of All Ages, offering Elite & Competitive Tournaments, Entertainment, Activities & Attractions, Incredible Music Concerts & Shows, and so much more. To Top it all off the festival will end with a gaming & esports summit, that brings together sector leaders and experts from around the world.",
    ],
    professional: [
      "Professional Esports",
      "Tournaments will be played in the purpose-built venue right in the middle of the Gamers8 event where fans can enjoy top-level esports and attend countless other activities.",
    ],
    festival: [
      "Festival",
      "The Gamers8 festival will be home to countless events, shows, and experiences that bring the virtual world of gaming out into the physical realm.",
    ],
    saudi: [
      "./assets/images/saudi-esports-logo-en.png",
      "The elite competitions will host the biggest esports teams in the world across six different titles with a total prize pool of a staggering $15 million. All hosted in a state-of-the-art costume-prepared venue.",
    ],
    music: [
      "MUSIC CONCERTS",
      "No Festival is complete without the world’s best artists giving fans a musical experience to remember.",
    ],
    summit: [
      "SUMMIT FACTSHEET",
      "The Summit will provide highly engaging and innovative formats to provide a platform for every stakeholder of the gaming & sports ecosystem. Furthermore, the youth will be at the center of the event, thanks to the participation of leading academic institutions and organizations.",
      "<img src='./assets/images/pin.svg' alt=''>Gamers8 Festival",
      "<img src='./assets/images/calender.svg' class='calender-icon' id='calender-icon' alt=''>To be confirmed",
      "2 days full of Events, shows & activities",
      "Riyadh Kingdom of Saudi Arabia",
      "Leading Speakers in E-Sports World",
      "Engage with leading organizations in the ecosystem",
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
      "    أسابيع",
      " بطولات دولية للرياضات الإلكترونية",
      " مجموع جوائز البطولات",
      "أفضل الفنانين حول العالم",
      "  عروض وتجارب ",
      "مرر للاسفل  <br> واكتشف المزيد",
    ],
    introduction: [
      "سيكون موسم الجيمرز هو الوجهة النهائية للاعبي و محبي الرياضات الإلكترونية وعشاقها ،و كذلك العائلات والأطفال لجميع الأعمار ، حيث تقدم بطولات النخبة والتنافسية والترفيه والأنشطة والعروض الترفيهية والحفلات الموسيقية والعروض المذهلة وغير ذلك الكثير.",
    ],
    professional: [
      "الرياضات الإلكترونية للنخبة",
      "ستُقام البطولات في المكان المُعد لهذا الغرض في منتصف حدث موسم الجيمرز  حيث يمكن للجماهير الاستمتاع بالرياضات الإلكترونية عالية المستوى وحضور عدد لا يحصى من الأنشطة الأخرى.",
    ],
    festival: [
      "فعاليات الموسم",
      "سيكون موسم الجيمرز موطنًا للكثير من الأحداث والعروض والتجارب التي تنقل عالم الألعاب الافتراضي إلى الواقع .",
    ],
    saudi: [
      "./assets/images/saudi-esports-logo-ar.png",
      "ستستضيف مسابقات النخبة أكبر فرق الرياضات الإلكترونية في العالم عبر ستة ألقاب مختلفة بجوائز إجمالية تبلغ 15 مليون دولار.",
    ],
    music: ["حفلات موسيقية", "أفضل التجارب الموسيقية التي لن تنسى"],
    summit: [
      "معلومات عن المؤتمر",
      "سيوفر المؤتمر منصة لكل الشغوفين في مجال الرياضات والألعاب الإلكترونية، بسبب تواجد كبار المؤثرين والصناع والمبدعين والقادة في قطاع الرياضات والألعاب الإلكترونية.",
      "<img src='./assets/images/pin.svg' alt=''>موسم الجيمرز",
      "<img src='./assets/images/calender.svg' class='calender-icon' id='calender-icon' class='ar' alt=''>سيتم التحديد لاحقاَ",
      "يومان مليئان بالفعاليات والعروض والأنشطة",
      "الرياض - المملكة العربية السعودية",
      "المتحدثون الرائدون في عالم الرياضات الإلكترونية",
      "المشاركة مع كبري المنظمات الرائدة في القطاع ",
    ],
    game: ["العب وتعلم"],
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
