(this["webpackJsonptokopedia-poke"]=this["webpackJsonptokopedia-poke"]||[]).push([[0],{75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n(24),s=n.n(r),i=n(10),o=n(22),u=n(15),l=n(44),j=n(11),d=n(32),p=u.d,m=n(6),b="@@pokemon/GET_LOADING",O="@@pokemon/GET_DETAIL_LOADING",h="@@pokemon/CATCH_LOADING",f="@@pokemon/GET",x="@@pokemon/GET_DETAIL",v="@@pokemon/ERROR",g={getLoading:!1,getDetailLoading:!1,catchLoading:!1,data:[],meta:{count:0,next:null,previous:null},selected:{id:0,name:"",image:"",moves:[],stats:[],types:[]},errorMessage:""},k={total:0,data:[],errorMessage:""},N={router:{action:"POP",location:{hash:"",pathname:"",search:"",state:""}},pokemon:g,account:k},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(m.a)(Object(m.a)({},e),{},{getLoading:t.data});case O:return Object(m.a)(Object(m.a)({},e),{},{getDetailLoading:t.data});case h:return Object(m.a)(Object(m.a)({},e),{},{catchLoading:t.data});case f:return Object(m.a)(Object(m.a)({},e),{},{data:t.data,meta:t.meta});case x:return Object(m.a)(Object(m.a)({},e),{},{selected:t.data});case v:return Object(m.a)(Object(m.a)({},e),{},{errorMessage:t.data});default:return e}},w="@@account/SET_STORE",C="@@account/ERROR",L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(m.a)(Object(m.a)({},e),{},{errorMessage:t.data});case w:return Object(m.a)(Object(m.a)({},e),t.data);default:return e}},E=function(e){return Object(u.c)({router:Object(o.b)(e),pokemon:y,account:L})},T=Object(j.a)({basename:"/"}),S=[l.a,Object(d.a)(T)],I=p(u.a.apply(void 0,S)),_=Object(u.e)(E(T),N,I);T.listen((function(){window.scrollTo(0,0)}));var A=_,D=n(17),M=function(){return Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)("div",{className:"menu",children:Object(a.jsx)(D.a,{to:"/",children:Object(a.jsx)("img",{src:"https://pokeapi.co/static/pokeapi_256.888baca4.png",alt:"logo"})})}),Object(a.jsx)("div",{className:"menu",children:Object(a.jsx)(D.a,{to:"/mypoke",children:Object(a.jsx)("h3",{children:"myPok\xe9"})})})]})},G=n(4),R=n(5),F=n.n(R),P=n(9),z=n(20),J=n(16),H="poke",K=function(){var e=null,t=localStorage.getItem(H);return t&&(e=JSON.parse(t)),e},Y=function(e){localStorage.setItem(H,JSON.stringify(e))},B=n(31),U=n.n(B),V="https://pokeapi.co/api/v2",q=function(){var e=Object(P.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("".concat(V,"/pokemon"),{params:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(P.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("".concat(V,"/pokemon/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=A.dispatch,X=function(e){return{type:v,data:e}},Z=function(e){return{type:b,data:e}},$=function(e){return{type:O,data:e}},ee=function(e){return{type:h,data:e}},te=function(){var e=Object(P.a)(F.a.mark((function e(t){var n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(Z(!0)),e.prev=1,e.next=4,q(t);case 4:return n=e.sent,a={count:n.data.count,next:n.data.next,previous:n.data.previous},e.abrupt("return",{type:f,data:n.data.results,meta:a});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",X(e.t0.response?e.t0.response.message:"Failed get pokemons"));case 12:return e.prev=12,W(Z(!1)),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(P.a)(F.a.mark((function e(t){var n,a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W($(!0)),e.prev=1,e.next=4,Q(t);case 4:return n=e.sent,a={id:n.data.id,name:n.data.name,image:n.data.sprites.front_default,moves:n.data.moves.map((function(e){return e.move.name})).sort(),stats:n.data.stats.map((function(e){return{name:e.stat.name,value:e.base_stat}})),types:n.data.types.map((function(e){return{slot:e.slot,name:e.type.name}}))},e.abrupt("return",{type:x,data:a});case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",X(e.t0.response?e.t0.response.message:"Failed get pokemon detail"));case 12:return e.prev=12,W($(!1)),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(e,t){var n=!1,a=A.getState().account.data.filter((function(t){return t.name===e}));return 0!==a.length&&a[0].nicknames.includes(t)&&(n=!0),n},ce=function(e,t){var n=A.getState().account;if(0===n.data.length){var a={name:e,nicknames:[t]};n.data=[a]}else if(!ae(e,t)){var c=n.data.filter((function(t){return t.name!==e})),r=n.data.filter((function(t){return t.name===e}));if(0!==r.length)r[0].nicknames.push(t);else{var s={name:e,nicknames:[t]};r.push(s)}n.data=c.concat(r[0])}return n.total+=1,Y(n),{type:"@@pokemon/CATCH_POKEMON"}},re=function(e){var t={limit:0,offset:0},n=e.split("?")[1];if(0!==n.length){var a=n.split("&");if(0!==a.length){var c=a[0].split("=");t.offset=parseInt(c[1]);var r=a[1].split("=");t.limit=parseInt(r[1])}}return t},se=function(){var e=Object(i.d)(),t=Object(G.f)(),n=Object(i.e)((function(e){return e.pokemon})),r=Object(i.e)((function(e){return e.account})),s=Object(c.useState)({limit:24,offset:0}),o=Object(z.a)(s,2),u=o[0],l=o[1],j=Object(c.useCallback)(Object(P.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,te(u);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)}))),[e,u]);Object(c.useEffect)((function(){j()}),[j]);var d=function(){var e=Object(P.a)(F.a.mark((function e(n){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push("/pokemon/".concat(n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"home page",children:[Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h2",{children:"Pok\xe9mon List"}),Object(a.jsxs)("small",{children:["Owned Total: ",r.total]})]}),Object(a.jsx)("div",{className:"list",children:n.getLoading?Object(a.jsx)("div",{className:"spinner-container",children:Object(a.jsx)(J.a,{icon:"spinner",size:"2x",spin:!0})}):Object(a.jsx)(a.Fragment,{children:n.data.map((function(e,t){return Object(a.jsxs)("div",{className:"item",role:"presentation",onClick:function(){return d(e.name)},children:[Object(a.jsx)("p",{className:"name",children:e.name}),Object(a.jsx)("p",{className:"status",children:Object(a.jsxs)("small",{className:"text-muted",children:["Owned: ",r.data.filter((function(t){return t.name===e.name})).length>0?r.data.filter((function(t){return t.name===e.name}))[0].nicknames.length:0]})})]},t)}))})}),Object(a.jsxs)("div",{className:"extra",children:[Object(a.jsx)("button",{className:"prev",type:"button",disabled:!n.meta.previous,onClick:function(){l(re(n.meta.previous||"")),j()},children:Object(a.jsx)(J.a,{icon:"chevron-left",size:"2x"})}),Object(a.jsx)("button",{className:"next",type:"button",disabled:!n.meta.next,onClick:function(){l(re(n.meta.next||"")),j()},children:Object(a.jsx)(J.a,{icon:"chevron-right",size:"2x"})})]})]})},ie=function(){var e=Object(i.d)(),t=Object(G.g)().name,n=Object(c.useState)(""),r=Object(z.a)(n,2),s=r[0],o=r[1],u=Object(c.useState)(!1),l=Object(z.a)(u,2),j=l[0],d=l[1],p=Object(c.useState)(""),m=Object(z.a)(p,2),b=m[0],O=m[1],h=Object(i.e)((function(e){return e.pokemon})),f=Object(c.useCallback)(Object(P.a)(F.a.mark((function n(){return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=e,n.next=3,ne(t);case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)}))),[e,t]);Object(c.useEffect)((function(){f()}),[f]);var x=function(){var t=Object(P.a)(F.a.mark((function t(){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o(""),!ae(h.selected.name,b)){t.next=5;break}o("Nickname has been registered"),t.next=11;break;case 5:return t.t0=e,t.next=8,ce(h.selected.name,b);case 8:t.t1=t.sent,(0,t.t0)(t.t1),d(!1);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=h.selected.types.map((function(e){return e.name})).join(", ");return Object(a.jsxs)("div",{className:"detail page",children:[h.getDetailLoading?Object(a.jsx)("div",{className:"spinner-container",children:Object(a.jsx)(J.a,{icon:"spinner",size:"2x",spin:!0})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"image-wrapper",children:Object(a.jsx)("img",{src:h.selected.image||"",alt:"thumbnail",className:"image"})}),Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h2",{children:h.selected.name}),Object(a.jsx)("p",{children:v})]}),Object(a.jsxs)("div",{className:"status section",children:[Object(a.jsx)("h3",{children:"Status"}),Object(a.jsx)("div",{className:"list",children:h.selected.stats.map((function(e,t){return Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("p",{children:e.name}),Object(a.jsx)("p",{className:"value",children:Object(a.jsx)("b",{children:e.value})})]},t)}))})]}),Object(a.jsxs)("div",{className:"moves section",children:[Object(a.jsx)("h3",{children:"Moves"}),Object(a.jsx)("div",{className:"list",children:h.selected.moves.map((function(e,t){return Object(a.jsx)("div",{className:"item",children:Object(a.jsx)("p",{children:e})},t)}))})]}),Object(a.jsxs)("div",{className:"extra",children:[s&&Object(a.jsx)("div",{className:"alert",children:s}),Object(a.jsx)("button",{className:"catch-btn",type:"button",onClick:function(){var t=Math.random();o(""),e(ee(!0)),setTimeout((function(){if(t<.5)return o("Your pokemon has fleed, try again!"),void e(ee(!1));e(ee(!1)),window.scrollTo({behavior:"smooth",top:0}),e({type:C,data:""}),d(!0)}),2e3)},disabled:h.catchLoading,children:Object(a.jsxs)("h2",{children:["CATCH ",h.catchLoading&&Object(a.jsx)(J.a,{icon:"spinner",spin:!0})]})})]})]}),j&&Object(a.jsx)("div",{className:"modal",children:Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("div",{className:"close",children:Object(a.jsx)(J.a,{icon:"times",size:"lg",onClick:function(){return d(!1)}})}),Object(a.jsxs)("h3",{children:["You've caught a ",h.selected.name," !"]}),Object(a.jsx)("div",{className:"image-wrapper",children:Object(a.jsx)("img",{src:h.selected.image||"",alt:"thumbnail",className:"image"})}),Object(a.jsx)("p",{children:"Nickname"}),Object(a.jsx)("input",{type:"text",autoFocus:!0,onChange:function(e){O(e.target.value)},onKeyUp:function(e){13===e.keyCode&&x()}}),s&&Object(a.jsx)("p",{className:"error",children:Object(a.jsx)("small",{children:s})}),Object(a.jsx)("button",{onClick:x,children:Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"SAVE"})})})]})})]})},oe=function(){var e=Object(G.f)(),t=Object(i.e)((function(e){return e.account})),n=function(){var t=Object(P.a)(F.a.mark((function t(n){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.push("/pokemon/".concat(n));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"mypoke page",children:[Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h2",{children:"MyPok\xe9 List"})}),Object(a.jsx)("div",{className:"list",children:t.data.map((function(e){return Object(a.jsx)(a.Fragment,{children:e.nicknames.map((function(t){return Object(a.jsxs)("div",{className:"item",role:"presentation",onClick:function(){return n(e.name)},children:[Object(a.jsx)("p",{className:"nickname",children:t}),Object(a.jsx)("p",{className:"name",children:Object(a.jsx)("b",{children:e.name})})]},t)}))})}))})]})},ue=function(){return Object(a.jsxs)(G.c,{children:[Object(a.jsx)(G.a,{exact:!0,path:"/",component:se}),Object(a.jsx)(G.a,{exact:!0,path:"/pokemon/:name",component:ie}),Object(a.jsx)(G.a,{exact:!0,path:"/mypoke",component:oe})]})},le=function(){return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(M,{}),Object(a.jsx)(ue,{})]})},je=n(18),de=n(21);je.b.add(de.a,de.b,de.c,de.d,de.e);n(75);A.dispatch((K()||Y({data:[],total:0}),{type:w,data:K()})),s.a.render(Object(a.jsx)(i.a,{store:A,children:Object(a.jsx)(o.a,{history:T,children:Object(a.jsx)(le,{})})}),document.getElementById("root"))}},[[76,1,2]]]);