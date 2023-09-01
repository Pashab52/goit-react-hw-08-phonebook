"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[338],{6338:function(t,e,n){n.r(e),n.d(e,{default:function(){return q}});var a=n(9439),r=n(4270),c="Contacts_contactsTitleWrap__vYTVi",o="Contacts_contactsTitle__bCRKZ",s=n(2791),l="ContactForm_contactForm__y0Rca",i="ContactForm_contactBtn__Hbm5v",u=n(9434),d=n(3634),m=n(6916),h=function(t){return t.contacts.contacts.items},x=function(t){return t.contacts.filter},_=function(t){return t.contacts.isLoading},f=function(t){return t.contacts.error},b=(0,m.P1)([h,x],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),j=n(184);function v(){var t=(0,s.useState)(""),e=(0,a.Z)(t,2),n=e[0],r=e[1],c=(0,s.useState)(""),o=(0,a.Z)(c,2),m=o[0],x=o[1],_=(0,u.I0)(),f=(0,u.v9)(h),b=function(t){switch(t.currentTarget.name){case"name":r(t.currentTarget.value);break;case"number":x(t.currentTarget.value);break;default:console.warn("error")}};var v=function(){r(""),x("")};return(0,j.jsxs)("form",{className:l,onSubmit:function(t){t.preventDefault(),f.some((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):(_((0,d.uK)({name:n,number:m})),v())},autoComplete:"off",children:[(0,j.jsxs)("label",{children:["Name ",(0,j.jsx)("br",{}),(0,j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",maxLength:"30",required:!0,value:n,onChange:b})]}),(0,j.jsxs)("label",{children:["Number ",(0,j.jsx)("br",{}),(0,j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",maxLength:"20",required:!0,value:m,onChange:b})]}),(0,j.jsx)("button",{className:i,type:"submit",children:"Add contact"})]})}var p={contIcon:"ContactItem_contIcon__sakIW",contText:"ContactItem_contText__a3Qsu",contBtn:"ContactItem_contBtn__R6maD",contBtnEdit:"ContactItem_contBtnEdit__fD6zg ContactItem_contBtn__R6maD"},C=n(7692),g=n(6355);function y(t){var e=(0,u.I0)();return(0,j.jsxs)("li",{className:p.contactItem,children:[(0,j.jsxs)("div",{className:p.contText,children:[(0,j.jsx)(C.EDj,{className:p.contIcon}),(0,j.jsx)("p",{children:t.name})]}),(0,j.jsxs)("div",{className:p.contText,children:[(0,j.jsx)(C.jIu,{className:p.contIcon}),(0,j.jsx)("p",{children:t.number})]}),(0,j.jsx)("button",{className:p.contBtnEdit,type:"button",onClick:function(){return t.onEditBtnClick(t.contact)},children:(0,j.jsx)(g.tU3,{style:{width:"26"}})}),(0,j.jsx)("button",{className:p.contBtn,type:"button",onClick:function(){return e((0,d.GK)(t.id))},children:(0,j.jsx)(g.aHS,{style:{width:"26"}})})]})}function N(t){var e=t.onEditBtnClick,n=(0,u.v9)(b);return(0,j.jsx)("ul",{className:CSS.contctList,children:n.map((function(t){return(0,j.jsx)(y,{name:t.name,number:t.number,id:t.id,contact:t,onEditBtnClick:e},t.id)}))})}var k="Filter_filter__vxThR",w=n(1538);function I(){var t=(0,u.v9)(x),e=(0,u.I0)();return(0,j.jsx)("div",{className:k,children:(0,j.jsxs)("label",{children:["Find contacts by name ",(0,j.jsx)("br",{}),(0,j.jsx)("input",{type:"text",name:"name",value:t,onChange:function(t){e((0,w.T)(t.currentTarget.value))}})]})})}var T=n(4138),M=n(4164),B="Modal_modal__DJDMv",F="Modal_overlay__r63M6";function E(t){(0,s.useEffect)((function(){return document.body.classList.add("modal-open"),window.addEventListener("keydown",e),function(){document.body.classList.remove("modal-open"),window.removeEventListener("keydown",e)}}));var e=function(e){"Escape"===e.code&&t.onModalClose()},n=document.querySelector("#modal-root");return(0,M.createPortal)((0,j.jsx)("div",{className:F,onClick:function(e){e.currentTarget===e.target&&t.onModalClose()},children:(0,j.jsx)("div",{className:B,children:t.children})}),n)}var S="ModalForm_modalLabel__Np9tD",L="ModalForm_modalInput__1pVKU",Z="ModalForm_modalForm__m17Aq",A="ModalForm_modalTitle__qgrmc",z="ModalForm_modalCloseBtn__gITG7";function D(t){var e=(0,s.useState)(t.contact.name),n=(0,a.Z)(e,2),r=n[0],c=n[1],o=(0,s.useState)(t.contact.number),l=(0,a.Z)(o,2),i=l[0],m=l[1],x=t.contact.id,_=(0,u.I0)(),f=(0,u.v9)(h),b=function(t){switch(t.currentTarget.name){case"name":c(t.currentTarget.value);break;case"number":m(t.currentTarget.value);break;default:console.warn("error")}};var v=function(){c(""),m("")};return(0,j.jsxs)("form",{className:Z,onSubmit:function(e){e.preventDefault(),f.some((function(t){return t.name===r}))&&t.contact.number===i?alert("".concat(r," is already in contacts")):(_((0,d.mP)({id:x,name:r,number:i})),t.onModalClose(),v())},children:[(0,j.jsx)("button",{className:z,type:"button",children:(0,j.jsx)(g.aHS,{size:14})}),(0,j.jsx)("h2",{className:A,children:"Edit contact"}),(0,j.jsxs)("label",{className:S,children:["Name ",(0,j.jsx)("br",{}),(0,j.jsx)("input",{className:L,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",maxLength:"30",required:!0,value:r,onChange:b})]}),(0,j.jsxs)("label",{children:["Number ",(0,j.jsx)("br",{}),(0,j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",maxLength:"20",required:!0,value:i,onChange:b})]}),(0,j.jsx)("button",{type:"submit",children:"Save"})]})}var q=function(){var t=(0,u.v9)(_),e=(0,u.v9)(f),n=(0,s.useState)(!1),l=(0,a.Z)(n,2),i=l[0],m=l[1],h=(0,s.useState)({}),x=(0,a.Z)(h,2),b=x[0],p=x[1],C=(0,u.I0)();(0,s.useEffect)((function(){C((0,d.yF)())}),[C]);var g=function(){m(!1)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.q,{children:(0,j.jsx)("title",{children:"Your tasks"})}),(0,j.jsx)(v,{}),(0,j.jsx)(I,{}),(0,j.jsxs)("div",{className:c,children:[(0,j.jsx)("h2",{className:o,children:"Contacts"}),t&&(0,j.jsx)(T.a,{})]}),e&&(0,j.jsx)("p",{children:"Contacts not found"}),(0,j.jsx)(N,{onEditBtnClick:function(t){p(t),m(!0)}}),i&&(0,j.jsx)(E,{onModalClose:g,children:(0,j.jsx)(D,{contact:b,onModalClose:g})})]})}}}]);
//# sourceMappingURL=338.35a109ed.chunk.js.map