(this["webpackJsonpclass-26-solution"]=this["webpackJsonpclass-26-solution"]||[]).push([[0],{145:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(68),i=n.n(s),a=n(18),j=(n(75),n(76),n(0));function o(){return Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"RESTy"})})}n(78);function l(){return Object(j.jsx)("footer",{children:"\xa9 2018"})}n(79),n(34);function u(e){var t=e.handleApiCall,n=r.a.useState(""),c=Object(a.a)(n,2),s=c[0],i=c[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={url:e.target.url.value||"https://pokeapi.co/api/v2/pokemon",json:e.target.JSON.value,method:s};t(n)},children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("span",{children:"URL: "}),Object(j.jsx)("input",{name:"url",type:"text"}),Object(j.jsx)("button",{type:"submit",children:"GO!"})]}),Object(j.jsxs)("label",{className:"methods",children:[Object(j.jsx)("span",{onClick:function(){return i("GET")},id:"get",children:"GET"}),Object(j.jsx)("span",{onClick:function(){return i("POST")},id:"post",children:"POST"}),Object(j.jsx)("span",{onClick:function(){return i("PUT")},id:"put",children:"PUT"}),Object(j.jsx)("span",{onClick:function(){return i("DELETE")},id:"delete",children:"DELETE"})]}),Object(j.jsx)("label",{htmlFor:"w3review",children:"JSON"}),Object(j.jsx)("textarea",{id:"w3review",name:"JSON",rows:"4",cols:"50"})]})})}var d=n(150);function b(e){return Object(j.jsxs)("section",{children:[Object(j.jsx)("pre",{children:e?JSON.stringify(e,void 0,2):Object(j.jsx)(d.a,{})})," ",Object(j.jsx)(d.a,{})]})}var O=n(70),h=n.n(O);function x(){var e=Object(c.useState)({}),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(null),d=Object(a.a)(i,2),O=d[0],x=d[1];return Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)(o,{}),Object(j.jsxs)("div",{"data-testid":"method",children:["Request Method: ",n.method]}),Object(j.jsxs)("div",{children:["URL: ",n.url]}),Object(j.jsx)(u,{handleApiCall:function(e){s(e);var t={};h.a.get(e.url).then((function(e){var n={count:(t={count:e.data.count,Headers:e.headers,body:e.data}).count,results:t};x(n)}))}}),Object(j.jsx)(b,{data:O}),Object(j.jsx)(l,{})]})}var p=document.getElementById("root");i.a.render(Object(j.jsx)(x,{}),p)},75:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.0089e69b.chunk.js.map