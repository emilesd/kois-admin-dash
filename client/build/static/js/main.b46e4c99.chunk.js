(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{167:function(e,t,a){},245:function(e,t,a){e.exports=a.p+"static/media/user.a9210b59.png"},256:function(e,t,a){e.exports=a.p+"static/media/scvlogo.001b21b6.png"},257:function(e,t,a){e.exports=a.p+"static/media/koislogo.e5789706.png"},263:function(e,t,a){e.exports=a(554)},554:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=a(7),l=a.n(i),s=a(18),u=(a(269),a(167),a(556)),m=a(558),p=a(10),d=a(561),f=a(40),g=a(43),h=a(23),E=Object(h.a)(),v=a(260);function b(e){var t=e.component,a=e.isPrivate,n=Object(v.a)(e,["component","isPrivate"]),c=localStorage.getItem("_kToken");return a&&!c?r.a.createElement(g.a,{to:"/login"}):r.a.createElement(g.b,Object.assign({},n,{component:t}))}b.defaultProps={isPrivate:!1};var y=function(){return r.a.createElement("h1",null,"Welcome to Kois")},w=a(90),k=a(239),x=a(240),j=a(45),O=a.n(j),T=function(){function e(){Object(k.a)(this,e)}return Object(x.a)(e,null,[{key:"register",value:function(e){var t,a,n,r;return l.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.name,a=e.email,n=e.password,r=e._AUTH,c.abrupt("return",new Promise((function(e,c){return l.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,l.a.awrap(O.a.post("".concat("","/api/auth/user"),{name:t,email:a,password:n},{headers:{Authorization:"Token ".concat(r),"Content-Type":"application/json"}}).then(e).catch(e));case 2:case"end":return c.stop()}}))})));case 2:case"end":return c.stop()}}))}},{key:"login",value:function(e){var t,a;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.email,a=e.password,n.abrupt("return",new Promise((function(e,n){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(O.a.post("".concat("","/api/auth/login"),{email:t,password:a}).then(e).catch(e));case 2:case"end":return n.stop()}}))})));case 2:case"end":return n.stop()}}))}},{key:"getUsers",value:function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(O.a.get("".concat("","/api/auth/user"),{headers:{Authorization:"Token ".concat(e),"Content-Type":"application/json"}}).then(t).catch(t));case 2:case"end":return a.stop()}}))})));case 1:case"end":return t.stop()}}))}},{key:"getUser",value:function(e){var t,a;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,a=e._AUTH,n.abrupt("return",new Promise((function(e,n){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(O.a.get("".concat("","/api/auth/user/").concat(t),{headers:{Authorization:"Token ".concat(a),"Content-Type":"application/json"}}).then(e).catch(e));case 2:case"end":return n.stop()}}))})));case 2:case"end":return n.stop()}}))}},{key:"createPoint",value:function(e){var t,a;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.data,a=e._AUTH,n.abrupt("return",new Promise((function(e,n){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(O.a.post("".concat("","/api/common/point"),JSON.stringify({data:t}),{headers:{Authorization:"Token ".concat(a),"Content-Type":"application/json"}}).then(e).catch((function(){return e({error:!0})})));case 2:case"end":return n.stop()}}))})));case 2:case"end":return n.stop()}}))}},{key:"getPoints",value:function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(O.a.get("".concat("","/api/common/point"),{headers:{Authorization:"Token ".concat(e),"Content-Type":"application/json"}}).then(t).catch(t));case 2:case"end":return a.stop()}}))})));case 1:case"end":return t.stop()}}))}},{key:"getPoint",value:function(e){var t,a;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,a=e._AUTH,n.abrupt("return",new Promise((function(e,n){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(O.a.get("".concat("","/api/common/point/").concat(t),{headers:{Authorization:"Token ".concat(a),"Content-Type":"application/json"}}).then(e).catch(e));case 2:case"end":return n.stop()}}))})));case 2:case"end":return n.stop()}}))}},{key:"updatePoint",value:function(e){var t,a,n;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.id,a=e.data,n=e._AUTH,r.abrupt("return",new Promise((function(e,r){return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,l.a.awrap(O.a.post("".concat("","/api/common/point/").concat(t),JSON.stringify({data:a}),{headers:{Authorization:"Token ".concat(n),"Content-Type":"application/json"}}).then(e).catch((function(){return e({error:!0})})));case 2:case"end":return r.stop()}}))})));case 2:case"end":return r.stop()}}))}},{key:"deletePoint",value:function(e){var t,a;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,a=e._AUTH,n.abrupt("return",new Promise((function(e,n){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(O.a.delete("".concat("","/api/common/point/").concat(t),{headers:{Authorization:"Token ".concat(a),"Content-Type":"application/json"}}).then(e).catch(e));case 2:case"end":return n.stop()}}))})));case 2:case"end":return n.stop()}}))}}]),e}(),I=a(33),P=a.n(I),N=r.a.useEffect,S=r.a.useState,C=function(e){var t=Object(g.g)(),a=S({email:"",password:""}),n=Object(s.a)(a,2),c=n[0],o=n[1];N((function(){localStorage.removeItem("_kToken")}),[]);var i=function(){var e=c.email,t=c.password;return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)&&t.length>4};return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"email",className:"bmd-label-floating"},"E-po\u0161ta"),r.a.createElement("input",{id:"email",type:"email",className:"form-control",value:c.email,minLength:"5",onChange:function(e){o({email:e.target.value,password:c.password})}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"password",className:"bmd-label-floating"},"Geslo"),r.a.createElement("input",{id:"password",type:"password",minLength:"5",className:"form-control",value:c.password,onChange:function(e){o({email:c.email,password:e.target.value})}})),r.a.createElement(w.a,{type:"primary",icon:"login",shape:"round",className:"login-form-button",onClick:function(){var e;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(i()){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,l.a.awrap(T.login(c));case 4:200==(e=a.sent).status?(P.a.fire({icon:"success",title:"Prijava je bila uspe\u0161na!"}).then((function(){t.push("/"),window.location.reload()})),localStorage.setItem("_kToken",e.data.token)):P.a.fire({icon:"error",title:"Prijava ni bila uspe\u0161na!"});case 6:case"end":return a.stop()}}))},disabled:!i()},"Prijava"))},z=a(557),_=a(89),A=a(244),F=function(e){var t=e.title,a=e.link,n=e.icon,c=e.css,o=e.shape;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,{to:a},r.a.createElement(w.a,{type:c||"primary",icon:n,shape:o||"round",size:"large"},t)))},U=z.a.Meta,H=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];function o(){var e,t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=localStorage.getItem("_kToken"),a.next=3,l.a.awrap(T.getPoints(e));case 3:200==(t=a.sent).status&&c(t.data);case 5:case"end":return a.stop()}}))}return Object(n.useEffect)((function(){o()}),[]),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{title:"Dodaj to\u010dko",link:"/new/point",icon:"plus"}),r.a.createElement("hr",null),r.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap",position:"relative"}},a.map((function(e,t){var a=e.tabs,n=e._id;return r.a.createElement(z.a,{key:t,hoverable:!0,style:{flex:"0 1 calc(25% - 16px)",margin:"8px"},cover:r.a.createElement("img",{src:a[0].images[0]})},r.a.createElement(U,{title:a[0].title}),r.a.createElement("hr",null),r.a.createElement(_.a,{title:"Podroben ogled"},r.a.createElement(w.a,{style:{float:"right",marginLeft:"10px"},type:"secondary",shape:"circle",icon:"fullscreen",size:"large",href:"/details/point/".concat(n)})),r.a.createElement(_.a,{title:"Uredi"},r.a.createElement(w.a,{style:{float:"right",marginLeft:"10px"},type:"primary",shape:"circle",icon:"edit",size:"large",href:"/edit/point/".concat(n)})),r.a.createElement(_.a,{title:"Odstrani to\u010dko"},r.a.createElement(w.a,{style:{float:"right"},type:"danger",shape:"circle",icon:"delete",size:"large",onClick:function(){return function(e){var t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t=localStorage.getItem("_kToken"),P.a.fire({title:"Ali ste prepri\u010dani?",text:"To\u010dko boste popolnoma odstranili iz kois sistema!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Da odstrani jo!"}).then((function(a){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a.value){n.next=5;break}return n.next=3,l.a.awrap(T.deletePoint({id:e,_AUTH:t}));case 3:200==n.sent.status&&(P.a.fire("Uspe\u0161no odstranjeno!","To\u010dka je bila odstranjena.","success"),o());case 5:case"end":return n.stop()}}))}));case 2:case"end":return a.stop()}}))}(n)}})))})))):r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{size:"large"}))},D=a(559),B=a(555),L=a(245),q=a.n(L),R=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){!function(){var e,t;l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=localStorage.getItem("_kToken"),a.next=3,l.a.awrap(T.getUsers(e));case 3:200==(t=a.sent).status&&c(t.data);case 5:case"end":return a.stop()}}))}()}),[]),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{title:"Dodaj administratorja",link:"/new/admin",icon:"plus"}),r.a.createElement("hr",null),r.a.createElement(D.a,{itemLayout:"horizontal",dataSource:a,renderItem:function(e){return r.a.createElement(D.a.Item,null,r.a.createElement(D.a.Item.Meta,{avatar:r.a.createElement(B.a,{src:q.a}),title:e.name,description:e.email}))}})):r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{size:"large"}))},M=a(34),Y=a(121),J=a(560),W=a(248),K=a.n(W),$=a(562),G=function(e){var t=e.content,a=e.toggle,n=e.visibility,c=e.title,o=e.confirm;return r.a.createElement($.a,{title:c,visible:n,onOk:o||a,onCancel:a,cancelButtonProps:{style:{display:"none"}},width:"50vw"},t)},V=function(e){var t=e.type,a=Object(n.useState)(!1),c=Object(s.a)(a,2),o=c[0],i=c[1],u=Object(n.useState)(null),m=Object(s.a)(u,2),d=m[0],f=m[1],g=Object(n.useState)(null),h=Object(s.a)(g,2),E=h[0],v=h[1],b=Object(n.useState)({lat:46.4441,lng:15.197}),y=Object(s.a)(b,2),k=y[0],x=y[1],j=Object(n.useState)([]),O=Object(s.a)(j,2),I=O[0],N=O[1],S=Object(n.useState)({title:"",images:"",description:""}),C=Object(s.a)(S,2),z=C[0],F=C[1],U=function(e){var t=e.position;e.address,e.places;x(t)};Object(n.useEffect)((function(){return"edit"==t?function(){var e,t,a,n,r;return l.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=localStorage.getItem("_kToken"),t=window.location.href,a=t.substr(t.lastIndexOf("/")+1),c.next=5,l.a.awrap(T.getPoint({id:a,_AUTH:e}));case 5:200==(n=c.sent).status&&(r=n.data.location,N(n.data.tabs),x({lat:r.lat,lng:r.lon}));case 7:case"end":return c.stop()}}))}():null}),[]);var H=function(){["pointForm","updatePointForm"].includes(d)&&1==o&&F({title:"",images:"",description:""}),i(!o)};return"edit"!=t||I?o?r.a.createElement(G,{title:{pointForm:"Dodaj zavihek",updatePointForm:"Posodobi zavihek",locationPicker:"Izbirnik lokacije"}[d],content:function(){switch(d){case"locationPicker":return r.a.createElement(K.a,{containerElement:r.a.createElement("div",{style:{height:"100%"}}),mapElement:r.a.createElement("div",{style:{height:"400px"}}),defaultPosition:k,onChange:U});case"pointForm":case"updatePointForm":return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1",className:"bmd-label-floating"},"Naslov"),r.a.createElement("input",{type:"text",className:"form-control",value:z.title,onChange:function(e){F(Object(M.a)({},z,{title:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1",className:"bmd-label-floating"},"Povezave slik"),r.a.createElement("textarea",{className:"form-control",value:z.images,onChange:function(e){F(Object(M.a)({},z,{images:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1",className:"bmd-label-floating"},"Opis"),r.a.createElement("textarea",{className:"form-control",value:z.description,onChange:function(e){F(Object(M.a)({},z,{description:e.target.value}))}})));default:return"<p>Pri\u0161lo je do napake!</p>"}}(),visibility:o,toggle:H,confirm:function(){if(["pointForm","updatePointForm"].includes(d)){var e=z.title,t=z.images,a=z.description;if(t=t.split("\n"),"pointForm"==d)N([].concat(Object(Y.a)(I),[{title:e,description:a,images:t}])),F({title:"",images:"",description:""});else{var n=I;n[E]={title:e,description:a,images:t},N(Object(Y.a)(n)),F({title:"",images:"",description:""})}i(!1)}else i(!1)}}):r.a.createElement(J.a,{style:{minWidth:"50%"}},r.a.createElement(J.a.Item,null,r.a.createElement(w.a,{onClick:function(){H(),f("locationPicker")},icon:"select",shape:"round",htmlType:"button",className:"login-form-button"},"Izberi lokacijo"),r.a.createElement("span",null," ",r.a.createElement(p.a,{type:"environment",style:{color:"#66c"}})," zemljepisna dol\u017eina:",r.a.createElement("b",null,k.lng)," zemljepisna \u0161irina:"," ",r.a.createElement("b",null,k.lat)),r.a.createElement("hr",null)),r.a.createElement(J.a.Item,null,r.a.createElement(w.a,{icon:"plus",shape:"round",onClick:function(){H(),f("pointForm")}},"Dodaj zavihek"),r.a.createElement(D.a,{itemLayout:"horizontal",dataSource:I,renderItem:function(e,t){return r.a.createElement(D.a.Item,{actions:[r.a.createElement(_.a,{title:"Uredi zavihek"},r.a.createElement(w.a,{type:"primary",shape:"circle",icon:"edit",size:"large",onClick:function(){return function(e){v(e),H(),f("updatePointForm");var t=I[e];F(Object(M.a)({},t,{images:t.images.join("\n")}))}(t)}})),r.a.createElement(_.a,{title:"Odstrani zavihek"},r.a.createElement(w.a,{type:"danger",shape:"circle",icon:"delete",size:"large",onClick:function(){return function(e){P.a.fire({title:"Ali ste prepri\u010dani?",text:"Zavihek boste popolnoma odstranili iz to\u010dke!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Da!"}).then((function(t){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:t.value&&N(Object(Y.a)(I.filter((function(t,a){return a!=e}))));case 1:case"end":return a.stop()}}))}))}(t)}}))]},r.a.createElement(D.a.Item.Meta,{avatar:r.a.createElement(B.a,{src:e.images[0]}),title:e.title,description:(e.description.length>100?e.description.substr(0,100):e.description)+"..."}))}}),r.a.createElement("hr",null)),r.a.createElement(J.a.Item,null,r.a.createElement(w.a,{onClick:"edit"==t?function(){var e,t,a,n;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=localStorage.getItem("_kToken"),t=window.location.href,a=t.substr(t.lastIndexOf("/")+1),n={location:Object(M.a)({},k,{lon:k.lng}),tabs:I},r.next=6,l.a.awrap(T.updatePoint({id:a,data:n,_AUTH:e}));case 6:200==r.sent.status&&P.a.fire({icon:"success",title:"To\u010dka je bila uspe\u0161no posodobljena!"});case 8:case"end":return r.stop()}}))}:function(){var e,t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=localStorage.getItem("_kToken"),t={location:Object(M.a)({},k,{lon:k.lng}),tabs:I},a.next=4,l.a.awrap(T.createPoint({data:t,_AUTH:e}));case 4:200==a.sent.status&&(P.a.fire({icon:"success",title:"To\u010dka je bila uspe\u0161no dodana!"}),N([]));case 6:case"end":return a.stop()}}))},type:"primary",icon:"environment",shape:"round",htmlType:"submit",className:"login-form-button"},"edit"==t?"Posodobi":"Dodaj"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{size:"large"}))},Z=r.a.useState,Q=function(){var e=Z({name:"",email:"",password:""}),t=Object(s.a)(e,2),a=t[0],n=t[1],c=function(){var e=a.name,t=a.email,n=a.password;return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)&&n.length>4&&e.length>4};return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"name",className:"bmd-label-floating"},"Ime & Priimek"),r.a.createElement("input",{id:"name",type:"text",className:"form-control",value:a.name,minLength:"5",onChange:function(e){n(Object(M.a)({},a,{name:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"email",className:"bmd-label-floating"},"E-po\u0161ta"),r.a.createElement("input",{id:"email",type:"email",className:"form-control",value:a.email,minLength:"5",onChange:function(e){n(Object(M.a)({},a,{email:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"password",className:"bmd-label-floating"},"Geslo"),r.a.createElement("input",{id:"password",type:"password",minLength:"5",className:"form-control",value:a.password,onChange:function(e){n(Object(M.a)({},a,{password:e.target.value}))}})),r.a.createElement(w.a,{type:"primary",icon:"login",shape:"round",className:"login-form-button",onClick:function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(c()){t.next=2;break}return t.abrupt("return");case 2:return e=localStorage.getItem("_kToken"),t.next=5,l.a.awrap(T.register(Object(M.a)({},a,{_AUTH:e})));case 5:200==t.sent.status&&P.a.fire({icon:"success",title:"Uporabnik je bil uspe\u0161no dodan!"});case 7:case"end":return t.stop()}}))},disabled:!c()},"Registracija"))},X=a(86),ee=a(254),te=a.n(ee),ae=a(255),ne=a.n(ae),re=a(73),ce=a.n(re),oe=X.a.Option,ie=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),i=Object(s.a)(o,2),u=i[0],m=i[1],p=Object(n.useState)(null),d=Object(s.a)(p,2),f=d[0],g=d[1],h=Object(n.useState)(null),E=Object(s.a)(h,2),v=E[0],b=E[1];function y(e,t){var a,n;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=localStorage.getItem("_kToken"),r.next=3,l.a.awrap(T.getUser({id:e,_AUTH:a}));case 3:200==(n=r.sent).status&&("created"==t?g(n.data._doc.name):b(n.data._doc.name));case 5:case"end":return r.stop()}}))}if(Object(n.useEffect)((function(){!function(){var e,t,a,n;l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=localStorage.getItem("_kToken"),t=window.location.href,a=t.substr(t.lastIndexOf("/")+1),r.next=5,l.a.awrap(T.getPoint({id:a,_AUTH:e}));case 5:200==(n=r.sent).status&&(c(n.data),y(n.data.userUpdated,"updated"),y(n.data.userCreated,"created"));case 7:case"end":return r.stop()}}))}()}),[]),a){var w=a.tabs,k=w[u],x=a.location,j=x.lat,O=x.lon,I=te()(O,j),P=[{key:"To\u010dka je bila ustvarjena:",value:ce()(a.createdAt).format("DD. MM. YYYY")},{key:"To\u010dko je ustvarjil/a:",value:f},{key:"To\u010dka je bila posodobljena:",value:ce()(a.updatedAt).format("DD. MM. YYYY")},{key:"To\u010dko je posodobil/a:",value:v}];return r.a.createElement(r.a.Fragment,null,w.length>1&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(X.a,{defaultValue:w[0].title,style:{width:"100%"},onChange:m},w.map((function(e,t){return r.a.createElement(oe,{value:t},e.title)})))),r.a.createElement("hr",null)),r.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner",style:{height:"70vh"}},k.images.map((function(e,t){return r.a.createElement("div",{className:"carousel-item ".concat(0==t?"active":"")},r.a.createElement("img",{className:"d-block w-100",src:e,alt:"Kois Image"}))}))),k.images.length>1&&r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))),r.a.createElement("h1",{style:{marginTop:20}},k.title),r.a.createElement("hr",null),r.a.createElement("span",{stlye:{padding:30},dangerouslySetInnerHTML:{__html:k.description.replace(/\n/g,"<br />")}}),r.a.createElement("hr",null),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("div",{style:{margin:20,width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("ul",{class:"list-group"},P.map((function(e){return r.a.createElement("a",{class:"list-group-item"},r.a.createElement("div",{class:"bmd-list-group-col"},r.a.createElement("p",{class:"list-group-item-heading"},e.key),r.a.createElement("p",{class:"list-group-item-text"},r.a.createElement("b",null,e.value))))})))),r.a.createElement("div",{style:{margin:20,width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},dangerouslySetInnerHTML:{__html:ne()(I)}})))}return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{size:"large"}))},le=function(){var e=[{path:"/login",component:r.a.createElement(C,null),authRequired:!1},{path:"/points",component:r.a.createElement(H,null),authRequired:!0},{path:"/admins",component:r.a.createElement(R,null),authRequired:!0},{path:"/new/point",component:r.a.createElement(V,{type:"new"}),authRequired:!0},{path:"/new/admin",component:r.a.createElement(Q,{type:"new"}),authRequired:!0},{path:"/edit/point/:id",component:r.a.createElement(V,{type:"edit"}),authRequired:!0},{path:"/details/point/:id",component:r.a.createElement(ie,null),authRequired:!0},{path:"",component:r.a.createElement(y,null),authRequired:!1}];return r.a.createElement(g.d,null,e.map((function(e,t){var a=e.path,n=e.component,c=e.authRequired;return r.a.createElement(b,{key:t,path:a,isPrivate:c||!1},n)})))},se=a(256),ue=a.n(se),me=a(257),pe=a.n(me),de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{padding:20}},r.a.createElement("img",{style:{width:"100%",marginBottom:15},src:ue.a}),r.a.createElement("img",{style:{width:"100%",padding:15,paddingBottom:0},src:pe.a})),r.a.createElement("hr",null))},fe=a(165),ge=function(e){var t=e.title,a=e.link,n=e.icon;return r.a.createElement("span",{id:a},r.a.createElement(p.a,{type:n}),r.a.createElement("span",null,t))},he=function(){return r.a.createElement(fe.a,{theme:"dark",style:{background:"#345"},mode:"inline"},r.a.createElement(fe.a.Item,{key:"/"},r.a.createElement(ge,{link:"/",title:"Domov",icon:"home"})),r.a.createElement(fe.a.Item,{key:"/points"},r.a.createElement(ge,{link:"/points",title:"To\u010dke",icon:"environment"})),r.a.createElement(fe.a.Item,{key:"/admins"},r.a.createElement(ge,{link:"/admins",title:"Administratorji",icon:"user"})),r.a.createElement(fe.a.Item,{key:"/login"},r.a.createElement(ge,{link:"/login",title:"Odjava",icon:"logout"})))},Ee=function(){return r.a.createElement(fe.a,{theme:"dark",style:{background:"#345"},mode:"inline"},r.a.createElement(fe.a.Item,{key:"/"},r.a.createElement(ge,{link:"/",title:"Domov",icon:"home"})),r.a.createElement(fe.a.Item,{key:"/login"},r.a.createElement(ge,{link:"/login",title:"Prijava",icon:"login"})))},ve=u.a.Header,be=u.a.Content,ye=u.a.Footer,we=u.a.Sider,ke=m.a.Title;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(localStorage.getItem("_kToken")||void 0),i=Object(s.a)(o,2),m=i[0],h=i[1];return Object(n.useEffect)((function(){document.querySelectorAll(".ant-menu-item").forEach((function(e){e.addEventListener("click",(function(t){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if("/login"!=e.firstChild.id){t.next=5;break}return t.next=3,l.a.awrap(localStorage.removeItem("_kToken"));case 3:return t.next=5,l.a.awrap(h(void 0));case 5:window.location=e.firstChild.id;case 6:case"end":return t.stop()}}))}))}))}),[]),r.a.createElement(g.c,{history:E},r.a.createElement(u.a,{style:{minHeight:"100vh"}},r.a.createElement(f.a,null,r.a.createElement(we,{style:{background:"#345"},width:"300",collapsible:!0,collapsed:a,onCollapse:c},!a&&r.a.createElement(de,null),m?r.a.createElement(he,null):r.a.createElement(Ee,null)),r.a.createElement(u.a,null,r.a.createElement(ve,{style:{background:"#002140",padding:10,borderLeft:"1px solid white",boxShadow:"0 4px 2px -2px gray"}},r.a.createElement(ke,{style:{color:"#fff"}},r.a.createElement(p.a,{type:"dashboard"})," Kois Administracija")),r.a.createElement(be,{style:{margin:"0 16px"}},r.a.createElement(d.a,{style:{margin:"16px 0"}}),r.a.createElement("div",{id:"container",style:{padding:24,background:"#fff",minHeight:"40vh"}},r.a.createElement(le,null))),r.a.createElement(ye,{style:{textAlign:"center"}},"Samo Pritrznik & Janez Sedeljsak 2019/20 \xa9")))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[263,1,2]]]);
//# sourceMappingURL=main.b46e4c99.chunk.js.map