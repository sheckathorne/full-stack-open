(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{24:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(19),c=t.n(a),o=(t(24),t(10)),i=t(5),u=t(7),d=t(4),h=t.n(d),s="/api/persons",l={getAll:function(){return h.a.get(s).then((function(e){return e.data}))},create:function(e){return h.a.post(s,e).then((function(e){return e.data}))},update:function(e,n){return h.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return h.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))}},b=t(0),j=function(e){var n=e.filter,t=e.handleFilterChange;return Object(b.jsx)("form",{children:Object(b.jsxs)("div",{children:["filter shown with: ",Object(b.jsx)("input",{value:n,onChange:t})]})})},f=function(e){var n=e.newPerson,t=e.handleNameChange,r=e.handleNumberChange,a=e.handleClick;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:n.name,onChange:t})]}),Object(b.jsxs)("div",{children:["number: ",Object(b.jsx)("input",{value:n.number,onChange:r})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",onClick:a,children:"add"})})]})})},m=function(e){var n=e.persons,t=e.deletePerson;return Object(b.jsx)(b.Fragment,{children:n.map((function(e){return Object(b.jsx)(O,{person:e,handleDelete:function(){return t(e.id)}},e.id)}))})},O=function(e){var n=e.person,t=e.handleDelete;return Object(b.jsxs)("p",{children:[n.name," ",n.number," ",Object(b.jsx)("button",{onClick:t,children:"delete"})]})},p=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)({name:"",number:""}),d=Object(u.a)(c,2),h=d[0],s=d[1],O=Object(r.useState)(""),p=Object(u.a)(O,2),x=p[0],g=p[1];Object(r.useEffect)((function(){l.getAll().then((function(e){a(e)}))}),[]);var v=x.length>0?t.filter((function(e){return e.name.toLowerCase().includes(x.toLowerCase())})):t;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(j,{filter:x,handleFilterChange:function(e){g(e.target.value)}}),Object(b.jsx)("h2",{children:"add a new"}),Object(b.jsx)(f,{newPerson:h,handleNameChange:function(e){s(Object(i.a)(Object(i.a)({},h),{},{name:e.target.value,id:Math.max.apply(Math,Object(o.a)(t.map((function(e){return e.id}))))+1}))},handleNumberChange:function(e){s(Object(i.a)(Object(i.a)({},h),{},{number:e.target.value,id:Math.max.apply(Math,Object(o.a)(t.map((function(e){return e.id}))))+1}))},handleClick:function(e){if(e.preventDefault(),t.find((function(e){return e.name.toLowerCase()===h.name.toLowerCase()}))){if(window.confirm("".concat(h.name," has already been added to the phonebook, replace the old number with a new one"))){var n=t.find((function(e){return e.name.toLowerCase()===h.name.toLowerCase()})).id;l.update(n,h).then((function(e){a(t.map((function(t){return t.id!==n?t:e})))}))}s({name:"",number:""})}else l.create(h).then((function(e){a(t.concat(e)),s({name:"",number:""})}))}}),Object(b.jsx)("h2",{children:"Numbers"}),Object(b.jsx)(m,{persons:v,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Do you want to delete ".concat(n.name," from the phonebook?"))&&l.remove(e).then((function(n){a(t.filter((function(n){return n.id!==e})))}))}})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),c(e),o(e)}))};c.a.render(Object(b.jsx)(p,{}),document.getElementById("root")),x()}},[[45,1,2]]]);
//# sourceMappingURL=main.fca228fe.chunk.js.map