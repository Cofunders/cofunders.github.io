var yo = require('yo-yo')
var csjs = require('csjs-inject')
var minixhr = require('minixhr')
/********************************************************************
  THEME
********************************************************************/
var darkred    = '#80030b' // buttons
var darkgrey   = '#3c3c3c' // font
var lightgrey  = '#7a7d80'
var banner     = 'https://user-assets.sharetribe.com/images/communities/cover_photos/31747/hd_header/conference_1.jpg?1476102178'
var fontfamily = 'http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&subset=latin-ext'
var font       = 'Source Sans Pro, helvetica, sans-serif'
/********************************************************************
  INIT
********************************************************************/
csjs`body { margin: 0; font-size: 10px; }`
minixhr(fontfamily, function (data) { csjs`${data}` })
document.body.appendChild(page())
/********************************************************************
  PAGE COMPONENT
********************************************************************/
function page () {
  var css = csjs`
    .page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: left;
      height: 100%;
      font-family: ${font};
    }
  `
  var head = header()
  var main = content()
  var foot = footer()

  function template (data) {
    return yo`
      <div class=${css.page}>
        ${head}
        ${main}
        ${foot}
      </div>
    `
  }
  var el = template()
  return el
}
/********************************************************************
  HEADER COMPONENT
********************************************************************/
function header () {
  var css = csjs`
    .header {
      width               : 100%;
      flex-grow           : 1;
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
      font-size   : 68px;
      font-weight : 900;
      white-space : nowrap;
      color       : white;
    }
    .subtitle {
      font-size   : 26px;
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
        font-size   : 42px;
      }
      .subtitle {
        font-size   : 26px;
      }
    }
    @media only screen and (max-width: 768px) {
      .title {
        font-size   : 32px;
        font-weight : 600;
      }
      .subtitle {
        font-size   : 16px;
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
        font-size   : 28px;
      }
      .subtitle {
        font-size   : 13px;
        font-weight : 500;
      }
    }
  `
  function template (data) {
    return yo`
      <div class=${css.header}>
        <div class=${css.title}>Referrals for Rewards</div>
        <div class=${css.subtitle}>Raise Capital in 10X Speed</div>
      </div>
    `
  }
  var el = template()
  return el
}
/********************************************************************
  CONTENT COMPONENT
********************************************************************/
function content () {
  var css = csjs`
    .content {
      width               : 100%;
      flex-grow           : 1;
      background-color    : white;
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
      <div class=${css.content}>
        ...
      </div>
    `
  }
  var el = template()
  return el
}
/********************************************************************
  FOOTER COMPONENT
********************************************************************/
function footer () {
  var css = csjs`
    .footer {
      width               : 100%;
      flex-grow           : 1;
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
        ...
      </div>
    `
  }
  var el = template()
  return el
}
