"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[125],{7125:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var a=e(4270),r="Contacts_contactsTitleWrap__vYTVi",c="Contacts_contactsTitle__bCRKZ",s=e(9439),o=e(2791),i="ContactForm_contactForm__y0Rca",u=e(9434),l=e(3634),d=e(6916),m=function(t){return t.contacts.contacts.items},x=function(t){return t.contacts.filter},h=function(t){return t.contacts.isLoading},j=function(t){return t.contacts.error},f=(0,d.P1)([m,x],(function(t,n){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),v=e(184);function b(){var t=(0,o.useState)(""),n=(0,s.Z)(t,2),e=n[0],a=n[1],r=(0,o.useState)(""),c=(0,s.Z)(r,2),d=c[0],x=c[1],h=(0,u.I0)(),j=(0,u.v9)(m),f=function(t){switch(t.currentTarget.name){case"name":a(t.currentTarget.value);break;case"number":x(t.currentTarget.value);break;default:console.warn("error")}};var b=function(){a(""),x("")};return(0,v.jsxs)("form",{className:i,onSubmit:function(t){t.preventDefault(),j.some((function(t){return t.name===e}))?alert("".concat(e," is already in contacts")):(h((0,l.uK)({name:e,number:d})),b())},children:[(0,v.jsxs)("label",{children:["Name ",(0,v.jsx)("br",{}),(0,v.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",maxLength:"30",required:!0,value:e,onChange:f})]}),(0,v.jsxs)("label",{children:["Number ",(0,v.jsx)("br",{}),(0,v.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",maxLength:"20",required:!0,value:d,onChange:f})]}),(0,v.jsx)("button",{type:"submit",children:"Add contact"})]})}var p={contIcon:"ContactItem_contIcon__sakIW",contText:"ContactItem_contText__a3Qsu",contBtn:"ContactItem_contBtn__R6maD"},_=e(719);function C(t){var n=(0,u.I0)();return(0,v.jsxs)("li",{className:p.contactItem,children:[(0,v.jsxs)("div",{className:p.contText,children:[(0,v.jsx)(_.EDj,{className:p.contIcon}),(0,v.jsx)("p",{children:t.name})]}),(0,v.jsxs)("div",{className:p.contText,children:[(0,v.jsx)(_.jIu,{className:p.contIcon}),(0,v.jsx)("p",{children:t.number})]}),(0,v.jsx)("button",{className:p.contBtn,type:"button","data-id":t.id,onClick:function(){return n((0,l.GK)(t.id))},children:(0,v.jsx)(_.czh,{size:18})})]})}function I(){var t=(0,u.v9)(f);return(0,v.jsx)("ul",{className:CSS.contctList,children:t.map((function(t){return(0,v.jsx)(C,{name:t.name,number:t.number,id:t.id,ids:t.id},t.id)}))})}var N="Filter_filter__vxThR",g=e(1538);function T(){var t=(0,u.v9)(x),n=(0,u.I0)();return(0,v.jsx)("div",{className:N,children:(0,v.jsxs)("label",{children:["Find contacts by name ",(0,v.jsx)("br",{}),(0,v.jsx)("input",{type:"text",name:"name",value:t,onChange:function(t){n((0,g.T)(t.currentTarget.value))}})]})})}var k=e(4138),y=function(){var t=(0,u.v9)(h),n=(0,u.v9)(j),e=(0,u.I0)();return(0,o.useEffect)((function(){e((0,l.yF)())}),[e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.q,{children:(0,v.jsx)("title",{children:"Your tasks"})}),(0,v.jsx)(b,{}),(0,v.jsx)(T,{}),(0,v.jsxs)("div",{className:r,children:[(0,v.jsx)("h2",{className:c,children:"Contacts"}),t&&(0,v.jsx)(k.a,{})]}),n&&(0,v.jsx)("p",{children:"Contacts not found"}),(0,v.jsx)(I,{})]})}}}]);
//# sourceMappingURL=125.030db8fc.chunk.js.map