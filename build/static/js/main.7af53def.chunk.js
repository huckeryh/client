(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(8),r=a.n(c),o=a(3),i=a(2);a(4);var m=function(){const[e,t]=Object(l.useState)([{id:1,isOpen:!1,selectedOption:null,modification:"",cost:0}]),[a,c]=Object(l.useState)(!1),r=[{label:"--select item--",cost:0},{label:"Pizza",cost:10},{label:"Pasta",cost:8},{label:"Salad",cost:5}],i=t=>e.reduce((e,t)=>e+(e=>{const t=(e.modification,0);return e.cost+t})(t),0);return n.a.createElement("div",{className:"1"},n.a.createElement("button",null,n.a.createElement(o.b,{to:"/"},"Return to Tables")),n.a.createElement("h2",{style:{textAlign:"center"}},"Server Name"),n.a.createElement("h1",{style:{textAlign:"center"}},"Table 1"),n.a.createElement("p",{style:{textAlign:"left"}},"Order ETA:",n.a.createElement("span",{style:{float:"right"}},"Order Total: $",i())),n.a.createElement("hr",null),e.map(a=>n.a.createElement("div",{key:a.id,className:"order-container"},n.a.createElement("h1",null,"Order ",a.id),n.a.createElement("div",{className:"dropdown-container"},n.a.createElement("div",{className:"dropdown-trigger",onClick:()=>t(e=>e.map(e=>e.id===a.id?{...e,isOpen:!e.isOpen}:e))},a.selectedOption||"--Select item--"),a.isOpen&&n.a.createElement("ul",{className:"dropdown-list"},r.map((l,c)=>n.a.createElement("li",{key:c,onClick:()=>((a,l)=>{const n=r.find(e=>e.label===l),c=e.map(e=>e.id===a?{...e,selectedOption:l,cost:n?n.cost:0,isOpen:!1}:e);t(c)})(a.id,l.label)},l.label)))),n.a.createElement("label",null,"Modification:",n.a.createElement("input",{type:"text",value:a.modification,onChange:e=>{return l=a.id,n=e.target.value,void t(e=>e.map(e=>e.id===l?{...e,modification:n}:e));var l,n}})),n.a.createElement("p",null,"Item Cost: $",a.cost))),n.a.createElement("hr",null),n.a.createElement("button",{onClick:()=>{const a={id:e.length+1,isOpen:!1,selectedOption:null,modification:"",cost:0};t([...e,a])}},"New Order +"),n.a.createElement("hr",null),n.a.createElement("button",{onClick:()=>{c(!0)}},"Confirm Order"),a&&n.a.createElement("div",{className:"confirmation-popup-overlay"},n.a.createElement("div",{className:"confirmation-popup"},n.a.createElement("p",null,"Submit the order to the kitchen?"),n.a.createElement("p",null,"ETA:***ENTER ETA HERE***"),n.a.createElement("p",null,"Total: $",i()),n.a.createElement("button",null,n.a.createElement(o.b,{to:"/"},"Yes")),n.a.createElement("button",{onClick:()=>{c(!1)}},"No"))))};var s=function(){const[e,t]=Object(l.useState)([{id:1,isOpen:!1,selectedOption:null,modification:"",cost:0}]),[a,c]=Object(l.useState)(!1),r=[{label:"--select item--",cost:0},{label:"Pizza",cost:10},{label:"Pasta",cost:8},{label:"Salad",cost:5}],i=t=>e.reduce((e,t)=>e+(e=>{const t=(e.modification,0);return e.cost+t})(t),0);return n.a.createElement("div",{className:"1"},n.a.createElement("button",null,n.a.createElement(o.b,{to:"/"},"Return to Tables")),n.a.createElement("h2",{style:{textAlign:"center"}},"Server Name"),n.a.createElement("h1",{style:{textAlign:"center"}},"Table 2"),n.a.createElement("p",{style:{textAlign:"left"}},"Order ETA:",n.a.createElement("span",{style:{float:"right"}},"Order Total: $",i())),n.a.createElement("hr",null),e.map(a=>n.a.createElement("div",{key:a.id,className:"order-container"},n.a.createElement("h1",null,"Order ",a.id),n.a.createElement("div",{className:"dropdown-container"},n.a.createElement("div",{className:"dropdown-trigger",onClick:()=>t(e=>e.map(e=>e.id===a.id?{...e,isOpen:!e.isOpen}:e))},a.selectedOption||"--Select item--"),a.isOpen&&n.a.createElement("ul",{className:"dropdown-list"},r.map((l,c)=>n.a.createElement("li",{key:c,onClick:()=>((a,l)=>{const n=r.find(e=>e.label===l),c=e.map(e=>e.id===a?{...e,selectedOption:l,cost:n?n.cost:0,isOpen:!1}:e);t(c)})(a.id,l.label)},l.label)))),n.a.createElement("label",null,"Modification:",n.a.createElement("input",{type:"text",value:a.modification,onChange:e=>{return l=a.id,n=e.target.value,void t(e=>e.map(e=>e.id===l?{...e,modification:n}:e));var l,n}})),n.a.createElement("p",null,"Item Cost: $",a.cost))),n.a.createElement("hr",null),n.a.createElement("button",{onClick:()=>{const a={id:e.length+1,isOpen:!1,selectedOption:null,modification:"",cost:0};t([...e,a])}},"New Order +"),n.a.createElement("hr",null),n.a.createElement("button",{onClick:()=>{c(!0)}},"Confirm Order"),a&&n.a.createElement("div",{className:"confirmation-popup-overlay"},n.a.createElement("div",{className:"confirmation-popup"},n.a.createElement("p",null,"Submit the order to the kitchen?"),n.a.createElement("p",null,"ETA:***ENTER ETA HERE***"),n.a.createElement("p",null,"Total: $",i()),n.a.createElement("button",null,n.a.createElement(o.b,{to:"/"},"Yes")),n.a.createElement("button",{onClick:()=>{c(!1)}},"No"))))};var d=function(){const[e,t]=Object(l.useState)([{id:1,isOpen:!1,selectedOption:null,modification:"",cost:0}]),[a,c]=Object(l.useState)(!1),r=[{label:"--select item--",cost:0},{label:"Pizza",cost:10},{label:"Pasta",cost:8},{label:"Salad",cost:5}],i=t=>e.reduce((e,t)=>e+(e=>{const t=(e.modification,0);return e.cost+t})(t),0);return n.a.createElement("div",{className:"1"},n.a.createElement("button",null,n.a.createElement(o.b,{to:"/"},"Return to Tables")),n.a.createElement("h2",{style:{textAlign:"center"}},"Server Name"),n.a.createElement("h1",{style:{textAlign:"center"}},"Table 3"),n.a.createElement("p",{style:{textAlign:"left"}},"Order ETA:",n.a.createElement("span",{style:{float:"right"}},"Order Total: $",i())),n.a.createElement("hr",null),e.map(a=>n.a.createElement("div",{key:a.id,className:"order-container"},n.a.createElement("h1",null,"Order ",a.id),n.a.createElement("div",{className:"dropdown-container"},n.a.createElement("div",{className:"dropdown-trigger",onClick:()=>t(e=>e.map(e=>e.id===a.id?{...e,isOpen:!e.isOpen}:e))},a.selectedOption||"--Select item--"),a.isOpen&&n.a.createElement("ul",{className:"dropdown-list"},r.map((l,c)=>n.a.createElement("li",{key:c,onClick:()=>((a,l)=>{const n=r.find(e=>e.label===l),c=e.map(e=>e.id===a?{...e,selectedOption:l,cost:n?n.cost:0,isOpen:!1}:e);t(c)})(a.id,l.label)},l.label)))),n.a.createElement("label",null,"Modification:",n.a.createElement("input",{type:"text",value:a.modification,onChange:e=>{return l=a.id,n=e.target.value,void t(e=>e.map(e=>e.id===l?{...e,modification:n}:e));var l,n}})),n.a.createElement("p",null,"Item Cost: $",a.cost))),n.a.createElement("hr",null),n.a.createElement("button",{onClick:()=>{const a={id:e.length+1,isOpen:!1,selectedOption:null,modification:"",cost:0};t([...e,a])}},"New Order +"),n.a.createElement("hr",null),n.a.createElement("button",{onClick:()=>{c(!0)}},"Confirm Order"),a&&n.a.createElement("div",{className:"confirmation-popup-overlay"},n.a.createElement("div",{className:"confirmation-popup"},n.a.createElement("p",null,"Submit the order to the kitchen?"),n.a.createElement("p",null,"ETA:***ENTER ETA HERE***"),n.a.createElement("p",null,"Total: $",i()),n.a.createElement("button",null,n.a.createElement(o.b,{to:"/"},"Yes")),n.a.createElement("button",{onClick:()=>{c(!1)}},"No"))))};var E=function(){const[e,t]=Object(l.useState)([{id:1,isOpen:!1,selectedOption:null,modification:"",cost:0}]),[a,c]=Object(l.useState)(!1),r=[{label:"--select item--",cost:0},{label:"Pizza",cost:10},{label:"Pasta",cost:8},{label:"Salad",cost:5}],i=t=>e.reduce((e,t)=>e+(e=>{const t=(e.modification,0);return e.cost+t})(t),0);return n.a.createElement("div",{className:"1"},n.a.createElement("button",null,n.a.createElement(o.b,{to:"/"},"Return to Tables")),n.a.createElement("h2",{style:{textAlign:"center"}},"Server Name"),n.a.createElement("h1",{style:{textAlign:"center"}},"Table 4"),n.a.createElement("p",{style:{textAlign:"left"}},"Order ETA:",n.a.createElement("span",{style:{float:"right"}},"Order Total: $",i())),n.a.createElement("hr",null),e.map(a=>n.a.createElement("div",{key:a.id,className:"order-container"},n.a.createElement("h1",null,"Order ",a.id),n.a.createElement("div",{className:"dropdown-container"},n.a.createElement("div",{className:"dropdown-trigger",onClick:()=>t(e=>e.map(e=>e.id===a.id?{...e,isOpen:!e.isOpen}:e))},a.selectedOption||"--Select item--"),a.isOpen&&n.a.createElement("ul",{className:"dropdown-list"},r.map((l,c)=>n.a.createElement("li",{key:c,onClick:()=>((a,l)=>{const n=r.find(e=>e.label===l),c=e.map(e=>e.id===a?{...e,selectedOption:l,cost:n?n.cost:0,isOpen:!1}:e);t(c)})(a.id,l.label)},l.label)))),n.a.createElement("label",null,"Modification:",n.a.createElement("input",{type:"text",value:a.modification,onChange:e=>{return l=a.id,n=e.target.value,void t(e=>e.map(e=>e.id===l?{...e,modification:n}:e));var l,n}})),n.a.createElement("p",null,"Item Cost: $",a.cost))),n.a.createElement("hr",null),n.a.createElement("button",{onClick:()=>{const a={id:e.length+1,isOpen:!1,selectedOption:null,modification:"",cost:0};t([...e,a])}},"New Order +"),n.a.createElement("hr",null),n.a.createElement("button",{onClick:()=>{c(!0)}},"Confirm Order"),a&&n.a.createElement("div",{className:"confirmation-popup-overlay"},n.a.createElement("div",{className:"confirmation-popup"},n.a.createElement("p",null,"Submit the order to the kitchen?"),n.a.createElement("p",null,"ETA:***ENTER ETA HERE***"),n.a.createElement("p",null,"Total: $",i()),n.a.createElement("button",null,n.a.createElement(o.b,{to:"/"},"Yes")),n.a.createElement("button",{onClick:()=>{c(!1)}},"No"))))};a(7);var u=function(){const[e,t]=Object(l.useState)(null),a=e=>{t(e)};return n.a.createElement("div",null,n.a.createElement("h2",{style:{textAlign:"center"}},"***PULL SERVER NAME***"),n.a.createElement("h2",{style:{textAlign:"center"}},"***PULL RESTAURANT NAME***"),n.a.createElement("hr",null),n.a.createElement("h1",{style:{textAlign:"center"}},"Assigned Tables"),n.a.createElement("table",{className:"tables-grid"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"table-table ".concat(1===e?"selected":"")},n.a.createElement("button",{onClick:()=>a(1)},"Table 1")),n.a.createElement("td",{className:"table-table ".concat(2===e?"selected":"")},n.a.createElement("button",{onClick:()=>a(2)},"Table 2"))),n.a.createElement("tr",null,n.a.createElement("td",{className:"table-table ".concat(3===e?"selected":"")},n.a.createElement("button",{onClick:()=>a(3)},"Table 3")),n.a.createElement("td",{className:"table-table ".concat(4===e?"selected":"")},n.a.createElement("button",{onClick:()=>a(4)},"Table 4"))))),n.a.createElement("h1",{style:{textAlign:"center"}},n.a.createElement(o.b,{to:"/AddOrders/".concat(e)},n.a.createElement("button",{disabled:null===e},null!==e?"Add Order for Table ".concat(e):"Add order"))),n.a.createElement("h3",{style:{textAlign:"center"}},n.a.createElement(o.b,{to:"/Orders/".concat(e)},n.a.createElement("button",{disabled:null===e},null!==e?"View Order for Table ".concat(e):"View order"))))};var p=function(){return n.a.createElement("div",null,n.a.createElement("button",null,n.a.createElement(o.b,{to:"/"},"Return to Tables")),n.a.createElement("h2",{style:{textAlign:"center"}},"Server Name"),n.a.createElement("h3",{style:{textAlign:"center"}},"Table 1"))};var b=function(){return n.a.createElement("div",null,n.a.createElement("button",null,n.a.createElement(o.b,{to:"/"},"Return to Tables")),n.a.createElement("h2",{style:{textAlign:"center"}},"Server Name"),n.a.createElement("h3",{style:{textAlign:"center"}},"Table 2"))};var O=function(){return n.a.createElement("div",null,n.a.createElement("button",null,n.a.createElement(o.b,{to:"/"},"Return to Tables")),n.a.createElement("h2",{style:{textAlign:"center"}},"Server Name"),n.a.createElement("h3",{style:{textAlign:"center"}},"Table 3"))};var h=function(){return n.a.createElement("div",null,n.a.createElement("button",null,n.a.createElement(o.b,{to:"/"},"Return to Tables")),n.a.createElement("h2",{style:{textAlign:"center"}},"Server Name"),n.a.createElement("h3",{style:{textAlign:"center"}},"Table 4"))};var v=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",element:n.a.createElement(u,null)}),n.a.createElement(i.a,{exact:!0,path:"/AddOrders/1",element:n.a.createElement(m,null)}),n.a.createElement(i.a,{exact:!0,path:"/AddOrders/2",element:n.a.createElement(s,null)}),n.a.createElement(i.a,{exact:!0,path:"/AddOrders/3",element:n.a.createElement(d,null)}),n.a.createElement(i.a,{exact:!0,path:"/AddOrders/4",element:n.a.createElement(E,null)}),n.a.createElement(i.a,{exact:!0,path:"/Orders/1",element:n.a.createElement(p,null)}),n.a.createElement(i.a,{exact:!0,path:"/Orders/2",element:n.a.createElement(b,null)}),n.a.createElement(i.a,{exact:!0,path:"/Orders/3",element:n.a.createElement(O,null)}),n.a.createElement(i.a,{exact:!0,path:"/Orders/4",element:n.a.createElement(h,null)}))))};var f=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:c,getTTFB:r}=t;a(e),l(e),n(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null))),f()},4:function(e,t,a){},7:function(e,t,a){},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.7af53def.chunk.js.map