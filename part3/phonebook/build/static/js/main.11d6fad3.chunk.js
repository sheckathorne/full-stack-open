(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{24:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t(19),c=t.n(r),o=(t(24),t(10)),u=t(6),i=t(5),s=t(4),l=t.n(s),d="/api/persons",j={getAll:function(){return l.a.get(d).then((function(e){return e.data}))},create:function(e){return l.a.post(d,e).then((function(e){return e.data}))},update:function(e,n){return l.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return l.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))}},h=t(0),b=function(e){var n=e.filter,t=e.handleFilterChange;return Object(h.jsx)("form",{children:Object(h.jsxs)("div",{children:["filter shown with: ",Object(h.jsx)("input",{value:n,onChange:t})]})})},f=function(e){var n=e.newPerson,t=e.handleNameChange,a=e.handleNumberChange,r=e.handleClick;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:n.name,onChange:t})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:n.number,onChange:a})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",onClick:r,children:"add"})})]})})},m=function(e){var n=e.persons,t=e.deletePerson;return Object(h.jsx)(h.Fragment,{children:n.map((function(e){return Object(h.jsx)(O,{person:e,handleDelete:function(){return t(e.id)}},e.id)}))})},O=function(e){var n=e.person,t=e.handleDelete;return Object(h.jsxs)("p",{children:[n.name," ",n.number," ",Object(h.jsx)("button",{onClick:t,children:"delete"})]})},p=function(e){var n=e.type,t=e.message;return null===t?null:Object(h.jsx)("div",{className:n,children:t})},g=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)({name:"",number:""}),s=Object(i.a)(c,2),l=s[0],d=s[1],O=Object(a.useState)(""),g=Object(i.a)(O,2),x=g[0],v=g[1],C=Object(a.useState)({type:"",message:null}),w=Object(i.a)(C,2),y=w[0],k=w[1];Object(a.useEffect)((function(){j.getAll().then((function(e){r(e)}))}),[]);var F=x.length>0?t.filter((function(e){return e.name.toLowerCase().includes(x.toLowerCase())})):t;return Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{type:y.type,message:y.message}),Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(b,{filter:x,handleFilterChange:function(e){v(e.target.value)}}),Object(h.jsx)("h2",{children:"add a new"}),Object(h.jsx)(f,{newPerson:l,handleNameChange:function(e){d(Object(u.a)(Object(u.a)({},l),{},{name:e.target.value,id:Math.max.apply(Math,Object(o.a)(t.map((function(e){return e.id}))))+1}))},handleNumberChange:function(e){d(Object(u.a)(Object(u.a)({},l),{},{number:e.target.value,id:Math.max.apply(Math,Object(o.a)(t.map((function(e){return e.id}))))+1}))},handleClick:function(e){e.preventDefault(),j.create(l).then((function(e){r(t.concat(e)),d({name:"",number:""})})).catch((function(e){var n=e.response.data.substring(e.response.data.indexOf("ValidationError: ")+17,e.response.data.indexOf(" Value: "));k({type:"error",message:"".concat(n)}),setTimeout((function(){k({type:"",message:null})}),5e3)}))}}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(m,{persons:F,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Do you want to delete ".concat(n.name," from the phonebook?"))&&j.remove(e).then((function(n){r(t.filter((function(n){return n.id!==e})))}))}})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),c(e),o(e)}))};c.a.render(Object(h.jsx)(g,{}),document.getElementById("root")),x()}},[[45,1,2]]]);
//# sourceMappingURL=main.11d6fad3.chunk.js.map