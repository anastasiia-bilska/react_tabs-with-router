(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c.n(n),s=c(4),i=(c(14),c(15),c(16),c(2)),b=c(6),j=c.n(b),r=c(1),l=function(e){var t=e.to,c=e.title;return Object(r.jsx)(s.c,{to:t,className:function(e){return j()("navbar-item",{"is-active":e.isActive})},children:c})},o=c(0),d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=Object(o.memo)((function(){var e=Object(i.h)().tabId,t=Object(o.useMemo)((function(){return d.find((function(t){return t.id===e}))}),[e,d]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:d.map((function(e){return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":e.id===(null===t||void 0===t?void 0:t.id)}),children:Object(r.jsx)(s.b,{to:e.id,children:e.title})},e.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:(null===t||void 0===t?void 0:t.content)||"Please select a tab"})]})})),m=Object(o.memo)((function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})})),x=Object(o.memo)((function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})})),O=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(l,{to:"/",title:"Home"}),Object(r.jsx)(l,{to:"/tabs",title:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)(x,{})}),Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)(m,{})}),Object(r.jsx)(i.b,{path:"home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsx)(i.b,{path:"/tabs",element:Object(r.jsx)(h,{}),children:Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(h,{})})})]})})})]})};a.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.767824f9.chunk.js.map