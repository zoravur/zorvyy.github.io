(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{236:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(238),o=n(246),c=n(244),l={Handwritten:"Bad Script,Shadows Into Light Two,serif",HandwrittenTitle:"Just Another Hand,sans-serif"},s=r.a.p.withConfig({displayName:"pages__FancyText",componentId:"sc-6kvjaa-0"})(["font-family:",";font-size:1.3em;text-align:",""],l.Handwritten,function(t){return t.align||"left"}),u=r.a.h1.withConfig({displayName:"pages__FancyTitle",componentId:"sc-6kvjaa-1"})(["font-size:4em;font-family:",";text-align:",""],l.HandwrittenTitle,function(t){return t.align||"left"}),d=r.a.div.withConfig({displayName:"pages__ObnoxiousIntro",componentId:"sc-6kvjaa-2"})(["padding:3em 0;"]);e.default=function(){return i.a.createElement(o.a,null,i.a.createElement(c.a,{title:"Home | Zoravur Singh"}),i.a.createElement(d,null,i.a.createElement(s,null,"Hi, I'm"),i.a.createElement(u,{align:"center"},"Zoravur Singh"),i.a.createElement(s,{align:"right"},"and this is my website.")))}},237:function(t,e,n){"use strict";var a=n(0),i=n.n(a),r=n(70),o=n.n(r);n.d(e,"a",function(){return o.a});n(239),n(9).default.enqueue,i.a.createContext({})},239:function(t,e,n){var a;t.exports=(a=n(243))&&a.default||a},240:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return c});n(0);var a=n(238),i=n(241),r=n(237),o=Object(a.a)(r.a).withConfig({displayName:"Styled__Link",componentId:"fo7xqg-0"})(["text-decoration:none;color:",";:hover{color:",";}"],i.a.DarkGrey,function(){return"hsl("+(360*Math.random()|0)+", 100%, 50%)"}),c=a.a.a.withConfig({displayName:"Styled__Anchor",componentId:"fo7xqg-1"})(["text-decoration:none;color:",";:hover{color:",";}"],i.a.DarkGrey,function(){return"hsl("+(360*Math.random()|0)+", 100%, 50%)"})},241:function(t,e,n){"use strict";e.a={MediumGrey:"#999999",DarkGrey:"#444444",Black:"#000000",Accent:"#00a"}},242:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},243:function(t,e,n){"use strict";n.r(e);n(26);var a=n(0),i=n.n(a),r=n(100);e.default=function(t){var e=t.location,n=t.pageResources;return n?i.a.createElement(r.a,Object.assign({location:e,pageResources:n},n.json)):null}},244:function(t,e,n){"use strict";var a=n(245),i=n(0),r=n.n(i),o=n(248),c=n.n(o);function l(t){var e=t.description,n=t.lang,i=t.meta,o=t.title,l=a.data.site,s=e||l.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},e.a=l},245:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},246:function(t,e,n){"use strict";var a=n(242),i=n(0),r=n.n(i),o=(n(247),n(32),n(238)),c=(n(237),n(240)),l=o.a.div.withConfig({displayName:"header__NavBox",componentId:"sc-31ozxh-0"})(["width:100%;display:flex;padding:1em 0;"]),s=o.a.div.withConfig({displayName:"header__NavItem",componentId:"sc-31ozxh-1"})(["width:10ch;"]),u=[{name:"Home",link:"/"},{name:"About",link:"/about"},{name:"Projects",link:"/projects"},{name:"Resume",link:"/resume.pdf",external:"true"}],d=function(t){var e=t.pages;return r.a.createElement(l,null,e.map(function(t){return r.a.createElement(s,{key:t.name},t.external?r.a.createElement(c.a,{href:t.link},t.name):r.a.createElement(c.b,{to:t.link},t.name))}))},m=o.a.div.withConfig({displayName:"header__Header",componentId:"sc-31ozxh-2"})(["margin-bottom:1em;"]),p=function(){return r.a.createElement(m,null,r.a.createElement(d,{pages:u}))};e.a=function(t){var e=t.children;a.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement(p,null),r.a.createElement("main",null,e),r.a.createElement("footer",null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-d4b9cc8b10c0559eff03.js.map