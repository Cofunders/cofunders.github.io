var yo = require('yo-yo')
var csjs = require('csjs-inject')
var minixhr = require('minixhr')
var datauri = require('datauri')
// var path = require('path')
// var urify = require('urify')
/********************************************************************
  ASSETS
********************************************************************/
// var collaborate1 = urify(path.join(__dirname, '/assets/collaborate1.jpg'))
// var growth1 = urify(path.join(__dirname, '/assets/growth1.jpg'))
// var growth2 = urify(path.join(__dirname, '/assets/growth2.jpg'))
// var growth3 = urify(path.join(__dirname, '/assets/growth3.jpg'))
// var growth4 = urify(path.join(__dirname, '/assets/growth4.jpg'))
// var growth5 = urify(path.join(__dirname, '/assets/growth5.jpg'))
// var growth6 = urify(path.join(__dirname, '/assets/growth6.jpg'))
// var growth7 = urify(path.join(__dirname, '/assets/growth7.jpg'))
// var growth8 = urify(path.join(__dirname, '/assets/growth8.jpg'))
// var work1 = urify(path.join(__dirname, '/assets/work1.jpg'))
var collaborate1 = datauri(__dirname + '/assets/collaborate1.jpg')
var growth1 = datauri(__dirname + '/assets/growth1.jpg')
var growth2 = datauri(__dirname + '/assets/growth2.jpg')
var growth3 = datauri(__dirname + '/assets/growth3.jpg')
var growth4 = datauri(__dirname + '/assets/growth4.jpg')
var growth5 = datauri(__dirname + '/assets/growth5.jpg')
var growth6 = datauri(__dirname + '/assets/growth6.jpg')
var growth7 = datauri(__dirname + '/assets/growth7.jpg')
var growth8 = datauri(__dirname + '/assets/growth8.jpg')
var work1 = datauri(__dirname + '/assets/work1.jpg')
/********************************************************************
  THEME
********************************************************************/
var darkred    = '#80030b' // buttons
var darkgrey   = '#3c3c3c' // font
var lightgrey  = '#7a7d80'
var smokewhite = '#efefef'
var fontXXS = '10'
var fontXS  = fontXXS*1.3
var fontS   = fontXXS*1.6
var fontM   = fontXXS*2.7
var fontL   = fontXXS*3.2
var fontXL  = fontXXS*4.2
var fontXXL = fontXXS*6.8
// var banner     = 'https://user-assets.sharetribe.com/images/communities/cover_photos/31747/hd_header/conference_1.jpg?1476102178'
var banner     = growth2
var fontfamily = 'http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&subset=latin-ext'
var font       = 'Source Sans Pro, helvetica, sans-serif'
/********************************************************************
  INIT
********************************************************************/
csjs`
html { box-sizing: border-box; display: table; min-width: 100vw; margin: 0; }
*, *:before, *:after { box-sizing: inherit; }
body { margin: 0; display: flex; flex-flow: column; min-height: 100vh; }
`
var app = page()
minixhr(fontfamily, function (data) {
  csjs`${data}`
  setTimeout(function () { document.body.appendChild(app) },100)
})
/********************************************************************
  PAGE COMPONENT
********************************************************************/
function page () {
  var css = csjs`
    .page {
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: left;
      font-family: ${font};
    }
  `
  var header = headerComponent()
  var pitch = pitchComponent()
  var portfolio = portfolioComponent()
  var call2action = call2actionComponent()
  var testimonials = testimonialsComponent()
  var footer = footerComponent()

  function template (data) {
    return yo`
      <div class=${css.page}>
        ${header}
        ${pitch}
        ${portfolio}
        ${call2action}
        ${testimonials}
        ${footer}
      </div>
    `
  }
  var el = template()
  return el
}
/********************************************************************
  HEADER COMPONENT
********************************************************************/
function headerComponent () {
  var css = csjs`
    .header {
      width               : 100%;
      height              : 65vmin;
      background-image    : url(${banner});
      background-size     : cover;
      background-repeat   : no-repeat;
      background-position : center;
      display             : flex;
      align-items         : center;
      justify-content     : center;
      flex-direction      : column;
    }
    .title {
      font-size   : ${fontXXL}px;
      text-shadow:
       -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
         1px 1px 0 #000;
      font-weight : 900;
      white-space : nowrap;
      color       : white;
    }
    .subtitle {
      font-size   : ${fontM}px;
      text-shadow:
       -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
         1px 1px 0 #000;
      font-weight : 600;
      white-space : nowrap;
      color       : white;
    }
    @media only screen and (max-width: 1270px) {
    }
    @media only screen and (max-width: 1200px) {
    }
    @media only screen and (max-width: 1008px) {
      .title {
        font-size   : ${fontXL}px;
      }
      .subtitle {
        font-size   : ${fontM}px;
      }
    }
    @media only screen and (max-width: 768px) {
      .title {
        font-size   : ${fontL}px;
        font-weight : 600;
      }
      .subtitle {
        font-size   : ${fontS}px;
        font-weight : 500;
      }
    }
    @media only screen and (max-width: 660px) {
    }
    @media only screen and (max-width: 600px) {
    }
    @media only screen and (max-width: 480px) {
    }
    @media only screen and (max-width: 320px) {
      .title {
        font-size   : ${fontM}px;
      }
      .subtitle {
        font-size   : ${fontXS}px;
        font-weight : 500;
      }
    }
  `
  var search = searchComponent()
  function template (data) {
    return yo`
      <div class=${css.header}>
        <div class=${css.title}>Referrals for Rewards</div>
        <div class=${css.subtitle}>Raise Capital in 10X Speed</div>
        ${search}
      </div>
    `
  }
  var el = template()
  return el
}
/********************************************************************
  SEARCH COMPONENT
********************************************************************/
function searchComponent () {
  var css = csjs`
    .search {
      margin-top       : 20px;
      display          : flex;
      flex-direction   : row;
      padding          : 20px;
      background-color : rgba(0, 0, 0, 0.5);
      width            : 700px;
      height           : 100px;
    }
    .iconbox {
      background-color : ${darkred};
      width            : 80px;
      border-top-left-radius     : 50px;
      border-bottom-left-radius  : 50px;
    }
    .icon {
      position         : relative;
      top              : -10px;
      transform        : scale(.4);
    }
    .input {
      flex-grow        : 1;
      font-size        : ${fontM}px;
      padding-right    : 50px;
      padding-left     : 10px;
      border           : none;
    }
    .button {
      position         : relative;
      flex-grow        : 1;
      padding          : 10px;
      background-color : ${darkred};
      color            : ${smokewhite};
      font-size        : ${fontM}px;
      width            : 80px;
      border           : none;
      border-top-right-radius     : 50px;
      border-bottom-right-radius  : 50px;
    }
    @media only screen and (max-width: 1270px) {
    }
    @media only screen and (max-width: 1200px) {
    }
    @media only screen and (max-width: 1008px) {
    }
    @media only screen and (max-width: 768px) {
    }
    @media only screen and (max-width: 660px) {
    }
    @media only screen and (max-width: 600px) {
    }
    @media only screen and (max-width: 480px) {
    }
    @media only screen and (max-width: 320px) {
    }
  `
  function template (data) {
    return yo`
      <form class=${css.search} action="https://www.cofunders.club/" method="GET">
        <div class=${css.iconbox}>
          <svg class=${css.icon} viewBox="0 0 16 16">
            <path fill="${smokewhite}" d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/>
          </svg>
        </div>
        <input class=${css.input} placeholder="What are you looking for?" type="text">
        <input class=${css.button} type="submit" value="Search">
        <input type="hidden" name="view" value="grid">
      </form>
    `
  }
  var el = template()
  return el
}
/********************************************************************
  PITCH COMPONENT
********************************************************************/
function pitchComponent () {
  var css = csjs`
    .pitch {
      flex-grow         : 1;
      display           : flex;
      flex-direction    : column;
      align-items       : center;
      width             : 100%;
      background-color  : lightblue;
    }
    .title {

    }
    .description {

    }
    .steps {

    }
    .step1 {

    }
    .step2 {

    }
    .step3 {

    }
    @media only screen and (max-width: 1270px) {
    }
    @media only screen and (max-width: 1200px) {
    }
    @media only screen and (max-width: 1008px) {
    }
    @media only screen and (max-width: 768px) {
    }
    @media only screen and (max-width: 660px) {
    }
    @media only screen and (max-width: 600px) {
    }
    @media only screen and (max-width: 480px) {
    }
    @media only screen and (max-width: 320px) {
    }
  `
  function template (data) {
    return yo`
      <div class=${css.pitch}>
        <div class=${css.title}>
          How CofundersClub works
        </div>
        <div class=${css.description}>
          Making Profit in three easy steps
        </div>
        <div class=${css.steps}>
          <div class=${css.step1}>
            <div class=${css.subtitle}>
              1. Find the perfect startup
            </div>
            <div class=${css.subdescription}>
              Easily compare startups by idea, current valuation & ratings
            </div>
          </div>
          <div class=${css.step2}>
            <div class=${css.subtitle}>
              2. Connect an Investor
            </div>
            <div class=${css.subdescription}>
              Invite an Investor to meet and fund the startup
            </div>
          </div>
          <div class=${css.step3}>
            <div class=${css.subtitle}>
              3. You earn a comission
            </div>
            <div class=${css.subdescription}>
              Once an investment happens, you earn a commission for connecting
              the startup with the investor!
            </div>
          </div>
        </div>
      </div>
    `
  }
  var el = template()
  return el
}
/********************************************************************
  PORTFOLIO COMPONENT
********************************************************************/
function portfolioComponent () {
  var css = csjs`
    .portfolio {
      flex-grow         : 1;
      display           : flex;
      flex-direction    : column;
      align-items       : center;
      width             : 100%;
      background-color  : lightgreen;
    }
    .title {

    }
    .description {

    }
    .categories {

    }
    .card {

    }
    .button {

    }
    @media only screen and (max-width: 1270px) {
    }
    @media only screen and (max-width: 1200px) {
    }
    @media only screen and (max-width: 1008px) {
    }
    @media only screen and (max-width: 768px) {
    }
    @media only screen and (max-width: 660px) {
    }
    @media only screen and (max-width: 600px) {
    }
    @media only screen and (max-width: 480px) {
    }
    @media only screen and (max-width: 320px) {
    }
  `
  function template (data) {
    return yo`
      <div class=${css.portfolio}>
        <div class=${css.title}>
          We cater for all your investment needs
        </div>
        <div class=${css.description}>
          Check some of the startups offered by our vetted professionals
        </div>
        <div class=${css.categories}>
          <a class=${css.card} href="https://www.cofunders.club/en?category=xiao-fei-ying-yong&view=list">
            Consumers
          </a>
          <a class=${css.card} href="https://www.cofunders.club/en?category=enterprise&view=list">
            Enterprise
          </a>
        </div>
        <a href="https://www.cofunders.club/en?category=all&view=list"> Browse all </a>
      </div>
    `
  }
  var el = template()
  return el
}
/********************************************************************
  CALL2ACTION COMPONENT
********************************************************************/
function call2actionComponent () {
  var css = csjs`
    .call2action {
      flex-grow         : 1;
      display           : flex;
      flex-direction    : column;
      align-items       : center;
      width             : 100%;
      background-color  : violet;
    }
    @media only screen and (max-width: 1270px) {
    }
    @media only screen and (max-width: 1200px) {
    }
    @media only screen and (max-width: 1008px) {
    }
    @media only screen and (max-width: 768px) {
    }
    @media only screen and (max-width: 660px) {
    }
    @media only screen and (max-width: 600px) {
    }
    @media only screen and (max-width: 480px) {
    }
    @media only screen and (max-width: 320px) {
    }
  `
  function template (data) {
    return yo`
      <div class=${css.call2action}>
       ... call 2 action ...
      </div>
    `
  }
  var el = template()
  return el
}
/********************************************************************
  TESTIMONIALS COMPONENT
********************************************************************/
function testimonialsComponent () {
  var css = csjs`
    .testimonials {
      flex-grow         : 1;
      display           : flex;
      flex-direction    : column;
      align-items       : center;
      width             : 100%;
      background-color  : purple;
    }
    @media only screen and (max-width: 1270px) {
    }
    @media only screen and (max-width: 1200px) {
    }
    @media only screen and (max-width: 1008px) {
    }
    @media only screen and (max-width: 768px) {
    }
    @media only screen and (max-width: 660px) {
    }
    @media only screen and (max-width: 600px) {
    }
    @media only screen and (max-width: 480px) {
    }
    @media only screen and (max-width: 320px) {
    }
  `
  function template (data) {
    return yo`
      <div class=${css.testimonials}>
       ... testimonials ...
      </div>
    `
  }
  var el = template()
  return el
}
/********************************************************************
  FOOTER COMPONENT
********************************************************************/
function footerComponent () {
  var css = csjs`
    .footer {
      flex-grow           : 1;
      width               : 100%;
      background-color    : black;
      color               : white;
      display             : flex;
      align-items         : center;
      justify-content     : center;
      flex-direction      : column;
    }
    @media only screen and (max-width: 1270px) {
    }
    @media only screen and (max-width: 1200px) {
    }
    @media only screen and (max-width: 1008px) {
    }
    @media only screen and (max-width: 768px) {
    }
    @media only screen and (max-width: 660px) {
    }
    @media only screen and (max-width: 600px) {
    }
    @media only screen and (max-width: 480px) {
    }
    @media only screen and (max-width: 320px) {
    }
  `
  function template (data) {
    return yo`
      <div class=${css.footer}>
        lorem ipsum blabla bla m3h m3h lorem ipsum<br>
        lorem ipsum blabla bla m3h m3h lorem ipsum<br>
        lorem ipsum blabla bla m3h m3h lorem ipsum<br>
        lorem ipsum blabla bla m3h m3h lorem ipsum<br>
        lorem ipsum blabla bla m3h m3h lorem ipsum<br>
        lorem ipsum blabla bla m3h m3h lorem ipsum<br>
        lorem ipsum blabla bla m3h m3h lorem ipsum<br>
        lorem ipsum blabla bla m3h m3h lorem ipsum<br>
        lorem ipsum blabla bla m3h m3h lorem ipsum<br>
        lorem ipsum blabla bla m3h m3h lorem ipsum<br>
        lorem ipsum blabla bla m3h m3h lorem ipsum<br>
      </div>
    `
  }
  var el = template()
  return el
}
