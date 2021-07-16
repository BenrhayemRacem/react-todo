(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{24:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),o=n.n(c),i=(n(24),n(25),n(37)),l=n(38),s=n(32),d=n(40),u=n(33),j=n(34),b=n(35),O=n(6),f=n(18),h=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):"list"===e?[]:"primary"},m="add-to-do",p="edit-to-do",g="delete-to-do",x="submit-to-do",y="change-color",v="save-list",D="init-alert",E=function(e,t){switch(t.type){case m:return Object(O.a)(Object(O.a)({},e),{},{toDo:t.payload.title});case g:var n=e.toDoList.filter((function(e){return e.id!==t.payload.id}));return Object(O.a)(Object(O.a)({},e),{},{toDoList:n,toDo:"",alert:{variant:"danger",message:"element deleted"}});case p:return Object(O.a)(Object(O.a)({},e),{},{isEditing:!0,toDo:t.payload.title,editId:t.payload.id});case x:if(t.payload.event.preventDefault(),!e.toDo)return Object(O.a)(Object(O.a)({},e),{},{alert:{variant:"danger",message:"cannot add an empty string"}});if(e.toDo&&e.isEditing){var a=e.toDoList.map((function(t){return t.id===e.editId?Object(O.a)(Object(O.a)({},t),{},{title:e.toDo}):Object(O.a)({},t)}));return Object(O.a)(Object(O.a)({},e),{},{toDoList:a,alert:{variant:"success",message:"element updated successfully"}})}var r=[{id:(new Date).toLocaleTimeString(),title:e.toDo}];return Object(O.a)(Object(O.a)({},e),{},{toDoList:e.toDoList.concat(r),toDo:"",alert:{variant:"success",message:"element added successfully"}});case y:return Object(O.a)(Object(O.a)({},e),{},{color:t.payload.color});case v:return localStorage.setItem("list",JSON.stringify(e.toDoList)),Object(O.a)({},e);case D:return Object(O.a)(Object(O.a)({},e),{},{alert:{variant:"",message:""}});default:return Object(O.a)({},e)}},S=n(3),L=r.a.createContext(null),C={toDo:"",toDoList:h("list"),isEditing:!1,alert:{variant:"",message:""},editId:"",color:h("color")},T=function(e){var t=e.children,n=Object(a.useReducer)(E,C),r=Object(f.a)(n,2),c=r[0],o=r[1];return Object(a.useEffect)((function(){o({type:v})}),[c.toDoList]),Object(a.useEffect)((function(){localStorage.setItem("color",JSON.stringify(c.color))}),[c.color]),Object(a.useEffect)((function(){var e=setTimeout((function(){return o({type:D})}),3e3);return function(){return clearTimeout(e)}}),[c.alert]),Object(S.jsx)(L.Provider,{value:Object(O.a)(Object(O.a)({},c),{},{handleAddToDoElement:function(e){o({type:m,payload:{title:e}})},handleDeleteToDoElement:function(e){o({type:g,payload:{id:e}})},handleSubmit:function(e){o({type:x,payload:{event:e}})},handleEditingToDoElement:function(e,t){o({type:p,payload:{title:e,id:t}})},handleColorChange:function(e){o({type:y,payload:{color:e}})}}),children:t})},I=function(){return Object(a.useContext)(L)},w=function(e){var t=I(),n=t.color,a=t.handleEditingToDoElement,r=t.handleDeleteToDoElement,c="warning"===n||"light"===n?"black":"white",o=e.elementIndex,i=e.element;return Object(S.jsx)(s.a,{xs:6,md:4,children:Object(S.jsxs)(d.a,{bg:n,style:{color:c},children:[Object(S.jsx)(d.a.Header,{children:o+1}),Object(S.jsx)(d.a.Body,{children:Object(S.jsx)(d.a.Title,{children:i.title})}),Object(S.jsx)(u.a,{variant:n,onClick:function(){return a(i.title,i.id)},children:Object(S.jsx)(j.a,{})}),Object(S.jsx)(u.a,{variant:n,onClick:function(){return r(i.id)},children:Object(S.jsx)(b.a,{})})]})})},k=function(){return I().toDoList.map((function(e,t){return Object(S.jsx)(w,{element:e,elementIndex:t},e.id)}))},J=["primary","secondary","success","danger","warning","info","light","dark"],N=n(36),A=function(){var e=I().handleColorChange;return Object(S.jsx)(N.a,{"aria-label":"coloring",size:"lg",className:"mb-2",children:J.map((function(t,n){return Object(S.jsx)(u.a,{variant:t,onClick:function(){return e(t)},children:"...."},n)}))})},B=n(39),H=function(){var e=I().alert;return Object(S.jsx)(B.a,{variant:e.variant,children:Object(S.jsx)(B.a.Heading,{children:e.message})})},z=function(){var e=I(),t=e.handleAddToDoElement,n=e.toDo,a=e.color,r=e.isEditing,c=e.handleSubmit;return Object(S.jsxs)("form",{onSubmit:c,children:[Object(S.jsx)("label",{children:"what is your plan ? "}),Object(S.jsx)("input",{type:"text",value:n,onChange:function(e){return t(e.target.value)},placeholder:"e.g/ /\r Sunday\r : fishing "})," ",Object(S.jsx)(u.a,{type:"submit",variant:a,children:r?"edit":"add element"})]})};var M=function(){return Object(S.jsxs)(i.a,{children:[Object(S.jsx)(H,{}),Object(S.jsxs)(l.a,{children:[Object(S.jsx)(s.a,{children:Object(S.jsx)(z,{})}),Object(S.jsx)(s.a,{children:Object(S.jsx)(A,{})})]}),Object(S.jsx)(l.a,{children:Object(S.jsx)(k,{})})]})};o.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(T,{children:Object(S.jsx)(M,{})})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.c46b3c07.chunk.js.map