(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return x});n(32);var a=n(0),r=n.n(a),o=n(238),i=n(266),c=n(271),l=n(246),s=n(244),m=n(240),u=n(241),d=o.a.div.withConfig({displayName:"projects__ProjectList",componentId:"sc-1bxmbzc-0"})(["display:flex;flex-direction:column;"]),p=o.a.div.withConfig({displayName:"projects__ProjectItemBox",componentId:"sc-1bxmbzc-1"})(["width:100%;padding:1em;margin:0 0 1em;box-shadow:0px 0px 10px 0px rgba(0,0,0,0.2);"]),f=o.a.div.withConfig({displayName:"projects__ProjectHeader",componentId:"sc-1bxmbzc-2"})(["display:flex;justify-content:space-between;font-size:1.4rem;"]),h=o.a.span.withConfig({displayName:"projects___StyledSpan",componentId:"sc-1bxmbzc-3"})(["color:",""],function(e){return e._css}),g=o.a.span.withConfig({displayName:"projects___StyledSpan2",componentId:"sc-1bxmbzc-4"})(["color:",""],function(e){return e._css2}),y=function(e){var t=e.name,n=e.owner;return r.a.createElement("span",null,r.a.createElement(h,{_css:u.a.MediumGrey},n.login," / "),r.a.createElement(g,{_css2:u.a.Black},t))},b=function(e){var t=e.owner,n=e.name,a=e.description,o=e.url;return r.a.createElement(p,{key:n},r.a.createElement(f,null,r.a.createElement(y,{name:n,owner:t}),r.a.createElement(m.a,{href:o},r.a.createElement(i.a,{icon:c.a}))),r.a.createElement("p",null,a))};t.default=function(e){var t=e.data.github.user.pinnedItems.nodes;return r.a.createElement(l.a,null,r.a.createElement(s.a,{title:"Projects | Zoravur Singh"}),r.a.createElement("h2",null,"Projects"),r.a.createElement("p",null,"Here are some things that I've done."),r.a.createElement(d,null,t.map(b)),r.a.createElement(m.b,{to:"/"},"Go back to the homepage"))};var x="2363321158"},237:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(70),i=n.n(o);n.d(t,"a",function(){return i.a});n(239),n(9).default.enqueue,r.a.createContext({})},239:function(e,t,n){var a;e.exports=(a=n(243))&&a.default||a},240:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return c});n(0);var a=n(238),r=n(241),o=n(237),i=Object(a.a)(o.a).withConfig({displayName:"Styled__Link",componentId:"fo7xqg-0"})(["text-decoration:none;color:",";:hover{color:",";}"],r.a.DarkGrey,function(){return"hsl("+(360*Math.random()|0)+", 100%, 50%)"}),c=a.a.a.withConfig({displayName:"Styled__Anchor",componentId:"fo7xqg-1"})(["text-decoration:none;color:",";:hover{color:",";}"],r.a.DarkGrey,function(){return"hsl("+(360*Math.random()|0)+", 100%, 50%)"})},241:function(e,t,n){"use strict";t.a={MediumGrey:"#999999",DarkGrey:"#444444",Black:"#000000",Accent:"#00a"}},242:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},243:function(e,t,n){"use strict";n.r(t);n(26);var a=n(0),r=n.n(a),o=n(100);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},244:function(e,t,n){"use strict";var a=n(245),r=n(0),o=n.n(r),i=n(248),c=n.n(i);function l(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,l=a.data.site,s=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},245:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},246:function(e,t,n){"use strict";var a=n(242),r=n(0),o=n.n(r),i=(n(247),n(32),n(238)),c=(n(237),n(240)),l=i.a.div.withConfig({displayName:"header__NavBox",componentId:"sc-31ozxh-0"})(["width:100%;display:flex;padding:1em 0;"]),s=i.a.div.withConfig({displayName:"header__NavItem",componentId:"sc-31ozxh-1"})(["width:10ch;"]),m=[{name:"Home",link:"/"},{name:"About",link:"/about"},{name:"Projects",link:"/projects"},{name:"Resume",link:"/resume.pdf",external:"true"}],u=function(e){var t=e.pages;return o.a.createElement(l,null,t.map(function(e){return o.a.createElement(s,{key:e.name},e.external?o.a.createElement(c.a,{href:e.link},e.name):o.a.createElement(c.b,{to:e.link},e.name))}))},d=i.a.div.withConfig({displayName:"header__Header",componentId:"sc-31ozxh-2"})(["margin-bottom:1em;"]),p=function(){return o.a.createElement(d,null,o.a.createElement(u,{pages:m}))};t.a=function(e){var t=e.children;a.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement(p,null),o.a.createElement("main",null,t),o.a.createElement("footer",null)))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-42fe3cecde25943e9a2b.js.map