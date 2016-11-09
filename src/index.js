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
var fontM   = fontXXS*2.0
var fontXM  = fontXXS*2.3
var fontXXM = fontXXS*2.7
var fontL   = fontXXS*3.2
var fontXL  = fontXXS*4.2
var fontXXL = fontXXS*6.8
// var banner     = 'https://user-assets.sharetribe.com/images/communities/cover_photos/31747/hd_header/conference_1.jpg?1476102178'
var banner     = growth2
var fontfamily = 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&subset=latin-ext'
var font       = 'Source Sans Pro, helvetica, sans-serif'
/********************************************************************
  INIT
********************************************************************/
csjs`
html { box-sizing: border-box; display: table; min-width: 100%; margin: 0; }
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
      font-size   : ${fontXXM}px;
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
        font-size   : ${fontXXM}px;
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
        font-size   : ${fontXXM}px;
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
      padding          : 20px;
      display          : flex;
      flex-direction   : row;
      align-items      : stretch;
      justify-content  : stretch;
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
      font-size        : ${fontXXM}px;
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
      font-size        : ${fontXXM}px;
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
      .search {
        width            : 600px;
        height           : 80px;
      }
      .iconbox {
        width            : 80px;
      }
      .icon {
        top              : -18px;
        transform        : scale(.3);
      }
      .input {
        font-size        : ${fontXM}px;
        padding-right    : 50px;
        padding-left     : 10px;
      }
      .button {
        padding          : 10px;
        font-size        : ${fontM}px;
        width            : 80px;
      }
    }
    @media only screen and (max-width: 768px) {
      .search {
        padding          : 10px;
        width            : 400px;
        height           : 50px;
      }
      .iconbox {

      }
      .icon {
        top              : -22px;
        transform        : scale(.2);
      }
      .input {
        font-size        : ${fontXS}px;
      }
      .button {
        font-size        : ${fontXS}px;
      }
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
      padding-top       : 50px;
      padding-bottom    : 50px;
      width             : 100%;
    }
    .title {
      font-size         : ${fontXL}px;
      font-weight       : 700;
    }
    .description {
      padding           : 10px;
      font-size         : ${fontXXM}px;
      font-weight       : 700;
    }
    .steps {
      display           : flex;
      flex-direction    : row;
      padding           : 20px;
      align-items       : stretch;
      justify-content   : center;
      width             : 100%;
    }
    .subtitle {
      font-size         : ${fontXXM}px;
      text-align        : center;
    }
    .subdescription {
      margin-top        : 15px;
      font-size         : ${fontS}px;
      text-align        : center;
    }
    .step {
      display           : flex;
      flex-direction    : column;
      width             : 30%;
      margin            : 5px;
    }
    .icon1 {
      align-self        : center;
      width             : 50px;
    }
    .icon2 {
      align-self        : center;
      width             : 50px;
    }
    .icon3 {
      align-self        : center;
      width             : 50px;
    }
    @media only screen and (max-width: 1270px) {
    }
    @media only screen and (max-width: 1200px) {
      .step {
        min-width         : 300px;
      }
    }
    @media only screen and (max-width: 1008px) {
      .step {
        min-width         : 220px;
      }
      .subtitle {
        font-size         : ${fontM}px;
      }
      .subdescription {
        font-size         : ${fontXS}px;
      }
    }
    @media only screen and (max-width: 768px) {
      .steps {
        flex-direction    : column;
      }
      .step {
        width             : 100%;
        margin            : 5px;
      }
      .subtitle {
        font-size         : ${fontXM}px;
      }
      .subdescription {
        font-size         : ${fontS}px;
      }
    }
    @media only screen and (max-width: 660px) {
    }
    @media only screen and (max-width: 600px) {
      .title {
        font-size         : ${fontL}px;
      }
      .description {
        font-size         : ${fontXM}px;
        font-weight       : 600;
      }
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
          <div class=${css.step}>
            <svg class=${css.icon1} viewBox="0 0 512 512">
              <g>
              	<path style="fill:${darkred};" d="M256,96C144.341,96,47.559,161.021,0,256c47.559,94.979,144.341,160,256,160c111.656,0,208.439-65.021,256-160   C464.441,161.021,367.656,96,256,96z M382.225,180.852c30.082,19.187,55.572,44.887,74.719,75.148   c-19.146,30.261-44.639,55.961-74.719,75.148C344.428,355.257,300.779,368,256,368c-44.78,0-88.428-12.743-126.225-36.852   c-30.08-19.188-55.57-44.888-74.717-75.148c19.146-30.262,44.637-55.962,74.717-75.148c1.959-1.25,3.938-2.461,5.929-3.65   C130.725,190.866,128,205.613,128,221c0,70.691,57.308,128,128,128c70.691,0,128-57.309,128-128   c0-15.387-2.725-30.134-7.703-43.799C378.285,178.39,380.266,179.602,382.225,180.852z M256,205c0,26.51-21.49,48-48,48   s-48-21.49-48-48s21.49-48,48-48S256,178.49,256,205z"/>
              </g>
            </svg>
            <div class=${css.subtitle}>
              1. Find the perfect startup
            </div>
            <div class=${css.subdescription}>
              Easily compare startups by idea, current valuation & ratings
            </div>
          </div>
          <div class=${css.step}>
          <svg class=${css.icon2} viewBox="0 0 489.9 489.9">
          	<g>
          		<path style="fill:${darkred};" d="M90.3,96.956c-3.8,3.9-3.8,10.2,0.2,14c3.9,3.8,10.2,3.8,14-0.2c35.8-36.7,83.8-57.2,135-57.8    c50-0.6,97.4,18,133.7,52.2l-18.2,0.2c-5.5,0.1-9.8,4.5-9.8,10c0.1,5.4,4.5,9.8,9.9,9.8h0.1l42.2-0.5c5.5-0.1,9.8-4.5,9.8-10    l-0.4-42.1c-0.1-5.4-4.5-9.8-9.9-9.8h-0.1c-5.5,0.1-9.8,4.5-9.8,10l0.2,18.4c-40.1-38-92.6-58.6-147.9-58    C182.7,33.956,129.8,56.556,90.3,96.956z"/>
          		<path style="fill:${darkred};" d="M378.9,379.056c-35.8,36.7-83.8,57.2-135,57.8c-50,0.6-97.4-18-133.7-52.2l18.2-0.2    c5.5-0.1,9.8-4.5,9.8-10c-0.1-5.4-4.5-9.8-9.9-9.8h-0.1l-42.2,0.5c-5.5,0.1-9.8,4.5-9.8,10l0.5,42.2c0.1,5.4,4.5,9.8,9.9,9.8h0.1    c5.5-0.1,9.8-4.5,9.8-10l-0.2-18.4c39.5,37.4,90.9,58,145.4,58c0.8,0,1.7,0,2.5,0c56.5-0.7,109.5-23.3,149-63.7    c3.8-3.9,3.8-10.2-0.2-14C389,375.056,382.8,375.156,378.9,379.056z"/>
          		<path style="fill:${darkred};" d="M78.2,240.256c0-3.3-1.7-6.4-4.4-8.2c-1.8-1.2-2.8-3.2-2.8-5.3v-36.1c0-12.5,10.1-22.6,22.6-22.6    h7.8c12.5,0,22.6,10.1,22.6,22.6v36.1c0,2.1-1.1,4.1-2.8,5.3c-2.8,1.8-4.4,4.9-4.4,8.2v34.8c0,4.4,2.5,8.4,6.5,10.3    c4.5,2.2,27.8,14,49.4,31.7c1.7,1.4,2.7,3.6,2.7,5.9v24.7c0,5.5,4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9v-24.7c0-8.2-3.6-15.9-10-21.2    c-18.9-15.6-39.2-26.9-48.6-31.8v-25.1c4.6-4.8,7.3-11.3,7.3-18.1v-36.1c0-23.4-19-42.4-42.4-42.4h-7.8c-23.4,0-42.4,19-42.4,42.4    v36.1c0,6.8,2.6,13.3,7.3,18.1v25.1c-9.5,4.9-29.7,16.3-48.6,31.8c-6.3,5.2-10,12.9-10,21.2v24.7c0,5.5,4.4,9.9,9.9,9.9    s9.9-4.4,9.9-9.9v-24.7c0-2.3,1-4.4,2.7-5.9c21.5-17.7,44.9-29.5,49.4-31.7c3.9-1.9,6.5-6,6.5-10.3v-34.8H78.2z"/>
          		<path style="fill:${darkred};" d="M479.9,301.856c-18.9-15.6-39.2-26.9-48.6-31.8v-25.1c4.6-4.8,7.3-11.3,7.3-18.1v-36.1    c0-23.4-19-42.4-42.4-42.4h-7.8c-23.4,0-42.4,19-42.4,42.4v36.1c0,6.8,2.6,13.3,7.3,18.1v25c-9.5,4.9-29.7,16.3-48.6,31.8    c-6.3,5.2-10,12.9-10,21.2v24.7c0,5.5,4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9v-24.7c0-2.3,1-4.4,2.7-5.9c21.5-17.7,44.9-29.5,49.4-31.7    c3.9-1.9,6.4-6,6.4-10.3v-34.8c0-3.3-1.7-6.4-4.4-8.2c-1.8-1.2-2.8-3.2-2.8-5.3v-36.1c0-12.5,10.1-22.6,22.6-22.6h7.8    c12.5,0,22.6,10.1,22.6,22.6v36.1c0,2.1-1.1,4.1-2.8,5.3c-2.8,1.8-4.4,4.9-4.4,8.2v34.8c0,4.4,2.5,8.4,6.4,10.3    c4.5,2.2,27.9,14,49.4,31.7c1.7,1.4,2.7,3.6,2.7,5.9v24.7c0,5.5,4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9v-24.7    C489.8,314.756,486.2,307.056,479.9,301.856z"/>
          	</g>
          </svg>
            <div class=${css.subtitle}>
              2. Connect an Investor
            </div>
            <div class=${css.subdescription}>
              Invite an Investor to meet and fund the startup
            </div>
          </div>
          <div class=${css.step}>
            <svg class=${css.icon3} viewBox="0 0 489.8 489.8">
            	<g>
            		<path style="fill:${darkred};" d="M268.5,286.9h-11.6v-70.5v-9.1h47.7c6.6,0,12-5.4,12-12s-5.4-12-12-12h-47.7V66.1L281.8,91c4.7,4.7,12.3,4.7,17,0    s4.7-12.3,0-17l-45.3-45.3c-2.3-2.3-5.3-3.5-8.5-3.5s-6.2,1.3-8.5,3.5l-45.4,45.4c-4.7,4.7-4.7,12.3,0,17c2.3,2.3,5.4,3.5,8.5,3.5    s6.1-1.2,8.5-3.5l24.8-24.9v117.1h-11.6c-35.2,0-63.8,28.6-63.8,63.8s28.6,63.8,63.8,63.8h11.6v69.4v10.2h-49.3    c-6.6,0-12,5.4-12,12s5.4,12,12,12h49.3v38.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-38.1h11.6c35.2,0,63.8-28.6,63.8-63.8    S303.7,286.9,268.5,286.9z M221.3,286.9c-21.9,0-39.8-17.9-39.8-39.8s17.9-39.8,39.8-39.8h11.6v9.1v70.5H221.3z M268.5,390.5    h-11.6v-10.2v-69.4h11.6c21.9,0,39.8,17.9,39.8,39.8C308.3,372.7,290.5,390.5,268.5,390.5z"/>
            		<path style="fill:${darkred};" d="M437.2,281.3h-6.5v-52.4v-4.5h34.7c6.6,0,12-5.4,12-12s-5.4-12-12-12h-34.7v-82.7l14.9,14.9c4.7,4.7,12.3,4.7,17,0    s4.7-12.3,0-17l-35.4-35.4c-4.7-4.7-12.3-4.7-17,0l-35.5,35.5c-4.7,4.7-4.7,12.3,0,17c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5    l14.9-14.9v82.5h-6.5c-28.9,0-52.5,23.5-52.5,52.5s23.5,52.5,52.5,52.5h6.5v51.6v5.3h-35.7c-6.6,0-12,5.4-12,12s5.4,12,12,12h35.9    v27.2c0,6.6,5.4,12,12,12s12-5.4,12-12v-27.2h6.5c28.9,0,52.5-23.5,52.5-52.5S466.2,281.3,437.2,281.3z M400.3,281.3    c-15.7,0-28.5-12.8-28.5-28.5s12.8-28.5,28.5-28.5h6.5v4.5v52.4h-6.5V281.3z M437.2,362.2h-6.5v-5.3v-51.6h6.5    c15.7,0,28.5,12.8,28.5,28.5C465.7,349.4,452.9,362.2,437.2,362.2z"/>
            		<path style="fill:${darkred};" d="M89.5,281.3H83v-52.4v-4.5h34.7c6.6,0,12-5.4,12-12s-5.4-12-12-12H83v-82.7l14.9,14.9c4.7,4.7,12.3,4.7,17,0    s4.7-12.3,0-17L79.6,80.3c-4.7-4.7-12.3-4.7-17,0l-35.5,35.5c-4.7,4.7-4.7,12.3,0,17c2.3,2.3,5.4,3.5,8.5,3.5s6.1-1.2,8.5-3.5    L59,117.9v82.5h-6.5C23.6,200.4,0,223.9,0,252.9s23.5,52.5,52.5,52.5H59v51.5v5.3H23.2c-6.6,0-12,5.4-12,12s5.4,12,12,12h35.9    v27.2c0,6.6,5.4,12,12,12s12-5.4,12-12v-27.2h6.5c28.9,0,52.5-23.5,52.5-52.5S118.4,281.3,89.5,281.3z M52.6,281.3    c-15.7,0-28.5-12.8-28.5-28.5s12.8-28.5,28.5-28.5h6.5v4.5v52.4h-6.5V281.3z M89.5,362.2H83v-5.3v-51.6h6.5    c15.7,0,28.5,12.8,28.5,28.5C118,349.4,105.2,362.2,89.5,362.2z"/>
            	</g>
            </svg>
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
