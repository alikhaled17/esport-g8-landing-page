document.getElementById('scroll-to-top').addEventListener('click', () => {
    window.scroll(0,0);
})

changeActiveDot = (id) => {
    document.querySelector('.scroll-bar-section.active').classList.remove('active')
    let el = document.querySelector(`[data-content="${id}"]`)
    el.classList.add('active')

    document.querySelector('.side-list-item.active').classList.remove('active')
    let el2 = document.querySelector(`[data-section="${id}"]`)
    el2.classList.add('active')
}


document.querySelectorAll('.side-list-item').forEach((el,  i) => {
    el.addEventListener("click", ()=>{
        document.querySelector('.side-bar').classList.remove('active');
        let id = el.getAttribute('data-section')
        let sec = document.getElementById(id)
        window.scroll(sec.x, sec.offsetTop + 150 );
    })
})

document.querySelectorAll('.nav-item').forEach((el,  i) => {
    el.addEventListener("click", ()=>{
        let id = el.getAttribute('data-nav-content')
        let sec = document.getElementById(id)
        window.scroll(sec.x, sec.offsetTop);
    })
})

window.addEventListener("scroll", () => {
    document.querySelectorAll(".section").forEach((secElement, i) => {
        var secDim = secElement.getBoundingClientRect();
        if(secDim.top > -(secDim.height /2) && secDim.top < (window.innerHeight/2) ) {
            changeActiveDot(secElement.getAttribute('id'))
        }
    });
})


let Data = {
    "en" : {
        
        "esportsmallnav" : [
            "Home",
            "E-Sports",
            "Festival",
            "Music",
            "Summit",
            "Game & Learn",
            "اللغة العربية",
            "",
            "© 2022 Gamers8. All rights reserved"
        ],
        "esportnav" : [
            "E-Sports",
            "Festival",
            "Music",
            "Summit",
            "Game & Learn",
            "اللغة العربية",
        ],
        "header" : [
            "The Gate To the Next World",
            "eight-week mega-festival",
            "6 international esports tournaments",
            "$15,000,000 prize pool",
            "World's top artists",
            "Countless events, shows, and experiences",
            "SCROLL DOWN <br> & DISCOVER"
        ],
        "introduction" : [
            "Gamers8 will be the ultimate destination for Gamers, Esports Enthusiasts & Fans, as well as Families and Children of All Ages, offering Elite & Competitive Tournaments, Entertainment, Activities & Attractions, Incredible Music Concerts & Shows, and so much more. To Top it all off the festival will end with a gaming & esports summit, that brings together sector leaders and experts from around the world.",
        ],
        "professional": [
            "Professional Esports",
            "Tournaments will be played in the purpose-built venue right in the middle of the Gamers8 event where fans can enjoy top-level esports and attend countless other activities."
        ],
        "festival": [
            "Festival",
            "The Gamers8 festival will be home to countless events, shows, and experiences that bring the virtual world of gaming out into the physical realm."
        ],
        "saudi": [
            "The elite competitions will host the biggest esports teams in the world across six different titles with a total prize pool of a staggering $15 million. All hosted in a state-of-the-art costume-prepared venue."
        ],
        "music": [
            "MUSIC CONCERTS",
            "No Festival is complete without the world’s best artists giving fans a musical experience to remember."
        ],
        "summit": [
            "SUMMIT FACTSHEET",
            "The Summit will provide highly engaging and innovative formats to provide a platform for every stakeholder of the gaming & sports ecosystem. Furthermore, the youth will be at the center of the event, thanks to the participation of leading academic institutions and organizations.",
            "<i class='fa-solid fa-location-dot'></i> Gamers8 Festival - Boulevard",
            "<img src='./assets/images/calender.svg' id='calender-icon' alt=''>To be confirmed",
            "2 days full of Events, shows & activities",
            "Riyadh Kingdom of Saudi Arabia",
            "Leading Speakers in E-Sports World",
            "Engage with leading organizations in the ecosystem",
        ],
        "game": ["Game & Learn"],
        "footer": ["© 2022 Gamers8. All rights reserved"],
        "scroll": [
            "Main",
            "E-Sports",
            "Festival",
            "Music",
            "Summit",
            "Game & Learn"
        ]
    },
    "ar": {
        "esportsmallnav" : [
            "الرئيسية",
            "الرياضات الإلكترونية",
            "فعاليات المهرجان",
            "حفلات",
            "المؤتمر",
            "العب وتعلم",
            "English",
            "",
            "© مهرجان Gamers8 - كل الحقوق محفوظة"
        ],
        "esportnav" : [
            "الرياضات الإلكترونية",
            "فعاليات المهرجان",
            "حفلات",
            "المؤتمر",
            "العب وتعلم",
            "English",
        ],
        "header" : [
            "موسم الجيمرز بوابتك الى العالم القادم",
            "مهرجان ضخم لمدة ثمانية أسابيع",
            "ستة بطولات دولية للرياضات الإلكترونية",
            "15 مليون دولار مجموع جوائز",
            "أفضل الفنانين فى العالم",
            "أحداث وعروض وتجارب لا تعد ولا تحصى",
            "مرر للاسفل  <br> واكتشف المزيد"
        ],
        "introduction" : [
            "ستكون موسم الجيمرز الوجهة النهائية للاعبين لمحبي الرياضات الإلكترونية وعشاقها ، فضلاً عن العائلات والأطفال من جميع الأعمار ، حيث تقدم بطولات النخبة والتنافسية والترفيه والأنشطة والعروض الترفيهية والحفلات الموسيقية والعروض المذهلة وغير ذلك الكثير. لتحتل المرتبة الأولى ، سينتهي المهرجان بقمة الألعاب والرياضات الإلكترونية ، التي تجمع قادة القطاع والخبراء من جميع أنحاء العالم.",
        ],
        "professional": [
            "الرياضات الإلكترونية للنخبة",
            "ستُقام البطولات في المكان المُعد لهذا الغرض في منتصف حدث موسم الجيمرز مباشرةً حيث يمكن للجماهير الاستمتاع بالرياضات الإلكترونية عالية المستوى وحضور عدد لا يحصى من الأنشطة الأخرى."
        ],
        "festival": [
            "فعاليات المهرجان",
            "سيكون موسم الجيمرز موطنًا لعدد لا يحصى من الأحداث والعروض والتجارب التي تنقل عالم الألعاب الافتراضي إلى العالم المادي."
        ],
        "saudi": [
            "ستستضيف مسابقات النخبة أكبر فرق الرياضات الإلكترونية في العالم عبر ستة ألقاب مختلفة بجوائز إجمالية تبلغ 15 مليون دولار. استضافت جميعها في مكان مجهز على أحدث طراز."
        ],
        "music": [
            "حفلات موسيقية",
            "لا يكتمل أي مهرجان بدون أن يمنح أفضل الفنانين في العالم المعجبين تجربة موسيقية لا تنسى."
        ],
        "summit": [
            "معلومات عن المؤتمر",
            "ستوفر القمة تنسيقات جذابة ومبتكرة للغاية لتوفير منصة لكل أصحاب المصلحة في النظام البيئي للألعاب والرياضة. علاوة على ذلك ، سيكون الشباب في قلب الحدث ، وذلك بفضل مشاركة المؤسسات والمنظمات الأكاديمية الرائدة.",
            "<i class='fa-solid fa-location-dot'></i> مهرجان Gamers8 - البوليفارد",
            "<img src='./assets/images/calender.svg' id='calender-icon' class='ar' alt=''> سيتم التحديد لاحقاَ",
            "يومان مليئان بالفعاليات والعروض والأنشطة",
            "الرياض - المملكة العربية السعودية",
            "المتحدثون الرائدون في عالم الرياضة الإلكترونية",
            "الانخراط مع المنظمات الرائدة في النظام البيئي",
        ],
        "game": ["العب وتعلم"],
        "footer": ["© مهرجان Gamers8 - كل الحقوق محفوظة"],
        "scroll": [
            "الرئيسية",
            "رياضات الكترونية",
            "فعاليات المهرجان",
            "حفلات",
            "المؤتمر",
            "العب وتعلم"
        ]
    } 
}

let lang = "en" 

function $(query) {
    return document.querySelector(query)
}

function showData() {

    let PageData;
    if(lang === "en") {
        PageData = Data.en
    } else {
        PageData = Data.ar
    }

    $(".nav-container .nav-item:nth-child(2) small").innerHTML = PageData.esportnav[0];
    $(".nav-container .nav-item:nth-child(3) small").innerHTML = PageData.esportnav[1];
    $(".nav-container .nav-item:nth-child(4) small").innerHTML = PageData.esportnav[2];
    $(".nav-container .nav-item:nth-child(5) small").innerHTML = PageData.esportnav[3];
    $(".nav-container .nav-item:nth-child(6) small").innerHTML = PageData.esportnav[4];
    $(".chng-to-arabic").innerHTML = PageData.esportnav[5];
    
    $(".eg8-header .header-title > h1").innerHTML = PageData.header[0];
    $(".eg8-header .more-info > div:nth-child(1) p").innerHTML = PageData.header[1];
    $(".eg8-header .more-info > div:nth-child(2) p").innerHTML = PageData.header[2];
    $(".eg8-header .more-info > div:nth-child(3) p").innerHTML = PageData.header[3];
    $(".eg8-header .more-info > div:nth-child(4) p").innerHTML = PageData.header[4];
    $(".eg8-header .more-info > div:nth-child(5) p").innerHTML = PageData.header[5];
    $(".eg8-header .scroll-down-note span").innerHTML = PageData.header[6];

    $(".introduction-text p").innerHTML = PageData.introduction[0];

    $(".professional-esports .content h1").innerHTML = PageData.professional[0];
    $(".professional-esports .content p").innerHTML = PageData.professional[1];
    
    $(".festival .content h1").innerHTML = PageData.festival[0];
    $(".festival .content p").innerHTML = PageData.festival[1];

    $(".saudi-esports .content p").innerHTML = PageData.saudi[0];

    $(".music-concert .content h1").innerHTML = PageData.music[0];
    $(".music-concert .content p").innerHTML = PageData.music[1];
    
    $(".summit-factsheet .info > h1").innerHTML = PageData.summit[0];
    $(".summit-factsheet .info > p").innerHTML = PageData.summit[1];
    $(".summit-factsheet .info .summit-date span:nth-child(1)").innerHTML = PageData.summit[2];
    $(".summit-factsheet .info .summit-date span:nth-child(2)").innerHTML = PageData.summit[3];
    $(".summit-factsheet .more-info > div:nth-child(1) p").innerHTML = PageData.summit[4];
    $(".summit-factsheet .more-info > div:nth-child(2) p").innerHTML = PageData.summit[5];
    $(".summit-factsheet .more-info > div:nth-child(3) p").innerHTML = PageData.summit[6];
    $(".summit-factsheet .more-info > div:nth-child(4) p").innerHTML = PageData.summit[7];

    $(".game-learn h1").innerHTML = PageData.game[0];

    $(".eg8-footer .copyrights").innerHTML = PageData.footer[0];
    
    $(".scroll-bar-container .scroll-bar-section:nth-child(1) small:nth-child(2)").innerHTML = PageData.scroll[0];
    $(".scroll-bar-container .scroll-bar-section:nth-child(2) small:nth-child(2)").innerHTML = PageData.scroll[1];
    $(".scroll-bar-container .scroll-bar-section:nth-child(3) small:nth-child(2)").innerHTML = PageData.scroll[2];
    $(".scroll-bar-container .scroll-bar-section:nth-child(4) small:nth-child(2)").innerHTML = PageData.scroll[3];
    $(".scroll-bar-container .scroll-bar-section:nth-child(5) small:nth-child(2)").innerHTML = PageData.scroll[4];
    $(".scroll-bar-container .scroll-bar-section:nth-child(6) small:nth-child(2)").innerHTML = PageData.scroll[5];
    
    $(".side-bar .side-list-item:nth-child(1) small").innerHTML = PageData.esportsmallnav[0];
    $(".side-bar .side-list-item:nth-child(2) small").innerHTML = PageData.esportsmallnav[1];
    $(".side-bar .side-list-item:nth-child(3) small").innerHTML = PageData.esportsmallnav[2];
    $(".side-bar .side-list-item:nth-child(4) small").innerHTML = PageData.esportsmallnav[3];
    $(".side-bar .side-list-item:nth-child(5) small").innerHTML = PageData.esportsmallnav[4];
    $(".side-bar .side-list-item:nth-child(6) small").innerHTML = PageData.esportsmallnav[5];

    $(".side-bar .change-to-arabic").innerHTML = PageData.esportsmallnav[6];
    $(".side-bar .side-footer-head span:nth-child(1)").innerHTML = PageData.esportsmallnav[7];
    $(".side-bar .side-copyrights").innerHTML = PageData.esportsmallnav[8];
    
}

function changeLang() {
    if(lang === "en") {
        lang = "ar"
        showData()
        document.body.classList.add('ar')
        document.getElementById('prize-pool').setAttribute("src", "./assets/images/prize-pool-ar.png")
    } else {
        lang = "en"
        showData()
        document.body.classList.remove('ar')
        document.getElementById('prize-pool').setAttribute("src", "./assets/images/prize-pool.png")
    }
}

document.querySelector(".chng-to-arabic").addEventListener("click", changeLang)
showData()

document.getElementById('list-icon').addEventListener("click", () => {
    document.querySelector('.side-bar').classList.add('active');
})

document.getElementById('close-side').addEventListener("click", () => {
    document.querySelector('.side-bar').classList.remove('active');
})

document.querySelector(".side-bar .change-to-arabic").addEventListener('click', changeLang)