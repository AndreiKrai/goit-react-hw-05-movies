"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[906],{436:function(t,e,r){r.d(e,{CK:function(){return h},EO:function(){return o},Jh:function(){return d},Pt:function(){return f},Yp:function(){return p},yO:function(){return l}});var n=r(861),a=r(757),c=r.n(a),s=r(44),i="https://api.themoviedb.org/3",u="08cfb1cba341ef968995af439d190569",o=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("".concat(i,"/trending/movie/day?api_key=").concat(u));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(u));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("".concat(i,"/search/movie?query=").concat(e,"&page=1&api_key=").concat(u));case 2:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("".concat(i,"/person/").concat(e,"?api_key=").concat(u));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},906:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(861),a=r(885),c=r(757),s=r.n(c),i=r(436),u=r(791),o=r(689),p=r(731),l=r(184);function d(){var t,e,r,c,d=(0,o.UO)().movieId,f=(0,u.useState)(null),h=(0,a.Z)(f,2),m=h[0],v=h[1],x=(0,u.useState)(!0),w=(0,a.Z)(x,2),g=w[0],j=w[1],k=(0,o.TH)();if((0,u.useEffect)((function(){function t(){return(t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.Yp)(d);case 2:e=t.sent,v(e),j(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[d]),g)return(0,l.jsx)("p",{children:"Is loading"});var y=m.genres.map((function(t){return t.name})),b=m.title,N=m.poster_path,Z=m.id,_=m.overview,P=m.vote_average;return(0,l.jsx)("div",{children:m&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"card d-flex flex-row p-2",children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(N),className:"card-img-top w-25",alt:"".concat(b)}),(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("h2",{className:"card-title",children:"".concat(b)}),(0,l.jsx)("p",{className:"card-text",children:"User Score ".concat(P)}),(0,l.jsx)("h3",{className:"card-title",children:"Overview"}),(0,l.jsx)("p",{className:"card-text",children:"".concat(_)}),(0,l.jsx)("h3",{className:"card-title",children:"Genres"}),(0,l.jsx)("p",{className:"card-text",children:"".concat(y)}),(0,l.jsx)(p.rU,{to:"".concat(null===(t=k.state)||void 0===t||null===(e=t.from)||void 0===e?void 0:e.pathname).concat(null===(r=k.state)||void 0===r||null===(c=r.from)||void 0===c?void 0:c.search),className:"btn btn-primary",children:"Go back"})]})]}),(0,l.jsx)("h3",{children:"Aditional information"}),(0,l.jsxs)("ul",{className:"list-group list-group-flush",children:[(0,l.jsx)("li",{className:"list-group-item",children:(0,l.jsx)(p.rU,{state:k.state,to:"casts",className:"list-group-item list-group-item-action ","aria-current":"true",children:"Cast"},Z)}),(0,l.jsx)("li",{className:"list-group-item",children:(0,l.jsx)(p.rU,{state:k.state,to:"reviews",className:"list-group-item list-group-item-action ","aria-current":"true",children:"Reviews"},Z)})]}),(0,l.jsx)(o.j3,{})]})})}}}]);
//# sourceMappingURL=906.a622d2cb.chunk.js.map