"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{4387:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r,a,c,i=t(9439),o=t(9637),u=t(2791),s=t(7689),d=t(7737),l=t(168),h=t(5867),f=h.default.li(r||(r=(0,l.Z)(["\n  text-align: justify;\n  margin-bottom: 16px;\n"]))),v=h.default.p(a||(a=(0,l.Z)(["\n  font-weight: bold;\n"]))),p=h.default.a(c||(c=(0,l.Z)(["\n  font-weight: bold;\n  text-decoration: underline;\n  &:hover {\n    color: #0b615a;\n  }\n"]))),g=t(184),m=function(){var e=(0,s.UO)().movieId,n=(0,u.useState)([]),t=(0,i.Z)(n,2),r=t[0],a=t[1],c=(0,u.useState)(""),l=(0,i.Z)(c,2),h=l[0],m=l[1];return(0,u.useEffect)((function(){e&&(0,d.C)("reviews",e).then((function(e){var n=e.results;n.length?(a(n),m("")):m("There are no reviews yet :(")})).catch((function(){return m("We are sorry, but something went wrong :( Please, try again later")}))}),[e]),(0,g.jsx)("div",{children:""===h?(0,g.jsx)("div",{children:(0,g.jsx)("ul",{children:r.map((function(e){return(0,g.jsxs)(f,{children:[(0,g.jsxs)(v,{children:["Author: ",e.author]}),(0,g.jsx)("p",{children:e.content.length<500?e.content:"".concat(e.content.slice(0,500),"...")}),e.content.length>500&&(0,g.jsx)(p,{href:e.url,target:"blank",children:"Read full review"})]},e.id)}))})}):(0,g.jsx)(o.j,{children:h})})}},9637:function(e,n,t){t.d(n,{V:function(){return o},j:function(){return u}});var r,a,c=t(168),i=t(5867),o=i.default.h2(r||(r=(0,c.Z)(["\n  margin-bottom: 20px;\n"]))),u=i.default.p(a||(a=(0,c.Z)(["\n  font-size: 24px;\n  margin: 24px 0;\n"])))},7737:function(e,n,t){t.d(n,{C:function(){return s}});var r=t(5861),a=t(7757),c=t.n(a),i=t(340),o="81bc6a75d9ad77927c9b3f7e8ad30411",u="https://api.themoviedb.org/3";function s(e,n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(n,t,r){var a,s,d;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={trending:"/trending/movie/day",movieById:"/movie/".concat(t),searchByQuery:"/search/movie",cast:"/movie/".concat(t,"/credits"),reviews:"/movie/".concat(t,"/reviews")},s=new URLSearchParams({query:r,include_adult:!0}),e.next=4,i.Z.get("".concat(u).concat(a[n],"?api_key=").concat(o,"&").concat("searchByQuery"===n?s:""));case 4:return d=e.sent,e.abrupt("return",d.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=387.dd07f16e.chunk.js.map