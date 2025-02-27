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
var consumers = datauri(__dirname + '/assets/consumers.jpg')
var enterprise = datauri(__dirname + '/assets/enterprise.jpg')
// var collaborate1 = datauri(__dirname + '/assets/collaborate1.jpg')
// var growth1 = datauri(__dirname + '/assets/growth1.jpg')
var growth2 = datauri(__dirname + '/assets/growth2.jpg')
// var growth3 = datauri(__dirname + '/assets/growth3.jpg')
// var growth4 = datauri(__dirname + '/assets/growth4.jpg')
// var growth5 = datauri(__dirname + '/assets/growth5.jpg')
// var growth6 = datauri(__dirname + '/assets/growth6.jpg')
// var growth7 = datauri(__dirname + '/assets/growth7.jpg')
// var growth8 = datauri(__dirname + '/assets/growth8.jpg')
var work1 = datauri(__dirname + '/assets/work1.jpg')
/********************************************************************
  THEME
********************************************************************/
var darkred    = '#80030b' // buttons
var darkgrey   = '#3c3c3c' // font
var grey       = '#7a7d80'
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
          Earn a commission in three easy steps
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
              Invite an Investor to fund the startup
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
              the startup with an investor!
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
      background-color  : black;
    }
    .title {
      margin-top        : 50px;
      padding           : 5px;
      font-size         : ${fontXL}px;
      font-weight       : 900;
      color             : ${smokewhite};
    }
    .description {
      padding           : 20px;
      font-size         : ${fontXM}px;
      font-weight       : 500;
      color             : ${smokewhite};
    }
    .categories {
      margin            : 50px;
      display           : flex;
      width             : 90%;
      height            : 400px;
      flex-direction    : row;
      justify-content   : center;
    }
    .card {
      flex-grow           : 1;
      margin              : 10px;
      display             : flex;
      align-items         : center;
      justify-content     : center;
      background-size     : cover;
      background-repeat   : no-repeat;
      background-position : center;
      color               : ${smokewhite};
      text-decoration     : none;
      font-size           : ${fontM}px;
      font-weight         : 900;
      text-shadow:
       -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
         1px 1px 0 #000;
      transition          : all 0.5s ease;
    }
    .card_hover {
      position            : relative;
      color               : ${darkred};
    }
    .card_hover::after {
      position            : absolute;
      content             : '';
      top                 : 0;
      left                : 0;
      width               : 100%;
      height              : 100%;
      background-color    : ${smokewhite};
      opacity             : .3;
    }
    .button {
      display             : flex;
      align-items         : center;
      justify-content     : center;
      margin-bottom       : 40px;
      padding             : 20px;
      background-color    : ${darkred};
      color               : ${smokewhite};
      font-size           : ${fontS}px;
      font-weight         : 700;
      width               : 150px;
      border-radius       : 50px;
      text-decoration     : none;
      transition          : all 0.5s ease;
    }
    .button:hover {
      background-color    : ${smokewhite};
      color               : ${darkred};
    }
    @media only screen and (max-width: 1270px) {
    }
    @media only screen and (max-width: 1200px) {
    }
    @media only screen and (max-width: 1008px) {
      .title {
        font-size        : ${fontL}px;
      }
      .description {
        font-size        : ${fontM}px;
      }
    }
    @media only screen and (max-width: 768px) {
      .categories {
        flex-direction    : column;
      }
    }
    @media only screen and (max-width: 660px) {
    }
    @media only screen and (max-width: 600px) {
      .title {
        font-size        : ${fontXM}px;
      }
      .description {
        font-size        : ${fontXS}px;
      }
    }
    @media only screen and (max-width: 480px) {
    }
    @media only screen and (max-width: 320px) {
    }
  `
  function template (data) {
    function hover () { this.classList.toggle(css.card_hover) }
    return yo`
      <div class=${css.portfolio}>
        <div class=${css.title}>
          We cater for all your investment needs
        </div>
        <div class=${css.description}>
          Check some of the startups offered by our vetted professionals
        </div>
        <div class=${css.categories}>
          <a onmouseover=${hover} onmouseout=${hover} class=${css.card} style="background-image:url(${consumers})" href="https://www.cofunders.club/en?category=xiao-fei-ying-yong&view=list">
            Consumers
          </a>
          <a onmouseover=${hover} onmouseout=${hover} class=${css.card} style="background-image:url(${enterprise});" href="https://www.cofunders.club/en?category=enterprise&view=list">
            Enterprise
          </a>
        </div>
        <a class=${css.button} href="https://www.cofunders.club/en?category=all&view=list"> Browse all </a>
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
      padding-top       : 30px;
      flex-grow         : 1;
      display           : flex;
      flex-direction    : column;
      align-items       : center;
      width             : 100%;
      padding-bottom    : 30px;
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
    .calls {
      margin            : 25px;
      display           : flex;
      justify-content   : center;
      flex-direction    : row;
      width             : 100%;
    }
    .action {
      min-width         : 200px;
      margin            : 20px;
      display           : flex;
      flex-direction    : column;
      justify-content   : center;
      align-items       : center;
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
    .button {
      display             : flex;
      align-items         : center;
      justify-content     : center;
      margin-top          : 15px;
      padding             : 10px;
      background-color    : ${darkred};
      color               : ${smokewhite};
      font-size           : ${fontXS}px;
      font-weight         : 700;
      width               : 150px;
      border-radius       : 50px;
      text-decoration     : none;
      transition          : all 0.5s ease;
    }
    .button:hover {
      background-color    : ${smokewhite};
      color               : ${darkred};
    }
    @media only screen and (max-width: 1270px) {
    }
    @media only screen and (max-width: 1200px) {
    }
    @media only screen and (max-width: 1008px) {
      .title {
        font-size         : ${fontL}px;
      }
      .description {
        font-size         : ${fontXM}px;
      }
    }
    @media only screen and (max-width: 768px) {
      .description {
        font-size         : ${fontM}px;
      }
    }
    @media only screen and (max-width: 660px) {
      .calls {
        flex-direction    : column;
      }
    }
    @media only screen and (max-width: 600px) {
      .description {
        font-size         : ${fontXS}px;
      }
    }
    @media only screen and (max-width: 480px) {
    }
    @media only screen and (max-width: 320px) {
    }
  `
  function template (data) {
    return yo`
      <div class=${css.call2action}>
        <div class=${css.title}>
          Why join CoFundersClub?
        </div>
        <div class=${css.description}>
          The referral platform that connects investors and entrepreneurs
        </div>
        <div class=${css.calls}>
          <div class=${css.action}>
            <div class=${css.subtitle}>
              For investors & Linkists
            </div>
            <div class=${css.subdescription}>
              Find and connect the best startups with the necessary funding
            </div>
            <div class=${css.button}>
              Become a Linkist
            </div>
          </div>
          <div class=${css.action}>
            <div class=${css.subtitle}>
              For entrepreneurs
            </div>
            <div class=${css.subdescription}>
              Promote your startup to thousands of investors on your area.
            </div>
            <div class=${css.button}>
              Promote your startup
            </div>
          </div>
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
      flex-grow           : 1;
      display             : flex;
      flex-direction      : column;
      align-items         : center;
      justify-content     : center;
      width               : 100%;
      height              : 500px;
      background-image    : url(${work1});
      background-size     : cover;
      background-repeat   : no-repeat;
      background-position : center;
    }
    .quote {
      font-size           : ${fontXL}px;
      font-weight         : 900;
      font-style          : italic;
      text-shadow:
       -1px -1px 0 #fff,
        1px -1px 0 #fff,
        -1px 1px 0 #fff,
         1px 1px 0 #fff;
    }
    .author {
      font-size           : ${fontM}px;
      font-weight         : 900;
      text-shadow:
       -1px -1px 0 #fff,
        1px -1px 0 #fff,
        -1px 1px 0 #fff,
         1px 1px 0 #fff;
    }
    @media only screen and (max-width: 1270px) {
    }
    @media only screen and (max-width: 1200px) {
    }
    @media only screen and (max-width: 1008px) {
    }
    @media only screen and (max-width: 768px) {
      .quote {
        font-size           : ${fontL}px;
      }
    }
    @media only screen and (max-width: 660px) {
    }
    @media only screen and (max-width: 600px) {
      .quote {
        font-size           : ${fontXXM}px;
      }
    }
    @media only screen and (max-width: 480px) {
      .quote {
        font-size           : ${fontXM}px;
      }
      .author {
        font-size           : ${fontS}px;
      }
    }
    @media only screen and (max-width: 320px) {
    }
  `
  function template (data) {
    return yo`
      <div class=${css.testimonials}>
        <div class=${css.quote}>
          "lorem ipsum doobeedoobeedooo"
        </div>
        <div class=${css.author}>
          Dave Xu
        </div>
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
    .socialmedia {
      display             : flex;
      flex-direction      : row;
      justify-content     : space-around;
      margin-top          : 15px;
      padding             : 10px;
      width               : 300px;
    }
    .iconTwitter {
      width               : 50px;
      height              : 50px;
    }
    .iconFacebook {
      width               : 50px;
      height              : 50px;
    }
    .iconMail {
      width               : 50px;
      height              : 50px;
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
        <div class=${css.socialmedia}>
          <a href="#" class=${css.iconFacebook}>
            <svg viewBox="-1 -1 114 114">
              <g>
              	<circle style="fill:#3B5998;" cx="56.098" cy="56.098" r="56.098"/>
              	<path style="fill:#FFFFFF;" d="M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34   c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"/>
              </g>
            </svg>
          </a>
          <a href="#" class=${css.iconTwitter}>
            <svg viewBox="-1 -1 412 412">
              <path style="fill:#76A9EA;" d="M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067  l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336  c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325  c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481  c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0  c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032  c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569  c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0  c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006  c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883  c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201  c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591  l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z"/>
            </svg>
          </a>
          <a href="#" class=${css.iconMail}>
            <svg viewBox="-1 -1 553 553">
            	<g>
            		<path style="fill:#76A9EA;" d="M501.613,491.782c12.381,0,23.109-4.088,32.229-12.16L377.793,323.567c-3.744,2.681-7.373,5.288-10.801,7.767    c-11.678,8.604-21.156,15.318-28.434,20.129c-7.277,4.822-16.959,9.737-29.045,14.755c-12.094,5.024-23.361,7.528-33.813,7.528    h-0.306h-0.306c-10.453,0-21.72-2.503-33.813-7.528c-12.093-5.018-21.775-9.933-29.045-14.755    c-7.277-4.811-16.75-11.524-28.434-20.129c-3.256-2.387-6.867-5.006-10.771-7.809L16.946,479.622    c9.119,8.072,19.854,12.16,32.234,12.16H501.613z"/>
            		<path style="fill:#76A9EA;" d="M31.047,225.299C19.37,217.514,9.015,208.598,0,198.555V435.98l137.541-137.541    C110.025,279.229,74.572,254.877,31.047,225.299z"/>
            		<path style="fill:#76A9EA;" d="M520.059,225.299c-41.865,28.336-77.447,52.73-106.75,73.195l137.486,137.492V198.555    C541.98,208.396,531.736,217.306,520.059,225.299z"/>
            		<path style="fill:#76A9EA;" d="M501.613,59.013H49.181c-15.784,0-27.919,5.33-36.42,15.979C4.253,85.646,0.006,98.97,0.006,114.949    c0,12.907,5.636,26.892,16.903,41.959c11.267,15.061,23.256,26.891,35.961,35.496c6.965,4.921,27.969,19.523,63.012,43.801    c18.917,13.109,35.368,24.535,49.505,34.395c12.05,8.396,22.442,15.667,31.022,21.701c0.985,0.691,2.534,1.799,4.59,3.269    c2.215,1.591,5.018,3.61,8.476,6.107c6.659,4.816,12.191,8.709,16.597,11.683c4.4,2.975,9.731,6.298,15.985,9.988    c6.249,3.685,12.143,6.456,17.675,8.299c5.533,1.842,10.655,2.766,15.367,2.766h0.306h0.306c4.711,0,9.834-0.924,15.368-2.766    c5.531-1.843,11.42-4.608,17.674-8.299c6.248-3.69,11.572-7.02,15.986-9.988c4.406-2.974,9.938-6.866,16.598-11.683    c3.451-2.497,6.254-4.517,8.469-6.102c2.057-1.476,3.605-2.577,4.596-3.274c6.684-4.651,17.1-11.892,31.104-21.616    c25.482-17.705,63.01-43.764,112.742-78.281c14.957-10.447,27.453-23.054,37.496-37.803c10.025-14.749,15.051-30.22,15.051-46.408    c0-13.525-4.873-25.098-14.598-34.737C526.461,63.829,514.932,59.013,501.613,59.013z"/>
            	</g>
            </svg>
          </a>
        </div>
        <hr style="width:50%; border-color: #999999;">
        <br> Ⓒ 2016 CoFundersClub. All rights reserved <br><br><br>
      </div>
    `
  }
  var el = template()
  return el
}
