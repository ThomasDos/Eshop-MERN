(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{13:function(e,n,t){"use strict";n.a={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"}},18:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",CLEAR_CART:"CLEAR_CART",UPDATE_CART_IN_FIREBASE:"UPDATE_CART_IN_FIREBASE",SET_CART_FROM_FIREBASE:"SET_CART_FROM_FIREBASE"}},21:function(e,n,t){"use strict";t.d(n,"c",(function(){return c})),t.d(n,"b",(function(){return a})),t.d(n,"e",(function(){return i})),t.d(n,"d",(function(){return o})),t.d(n,"a",(function(){return s})),t.d(n,"g",(function(){return u})),t.d(n,"h",(function(){return l})),t.d(n,"f",(function(){return d})),t.d(n,"j",(function(){return p})),t.d(n,"k",(function(){return b})),t.d(n,"i",(function(){return f}));var r=t(13),c=function(){return{type:r.a.GOOGLE_SIGN_IN_START}},a=function(e){return{type:r.a.EMAIL_SIGN_IN_START,payload:e}},i=function(e){return{type:r.a.SIGN_IN_SUCCESS,payload:e}},o=function(e){return{type:r.a.SIGN_IN_FAILURE,payload:e}},s=function(){return{type:r.a.CHECK_USER_SESSION}},u=function(){return{type:r.a.SIGN_OUT_START}},l=function(){return{type:r.a.SIGN_OUT_SUCCESS}},d=function(e){return{type:r.a.SIGN_OUT_FAILURE,payload:e}},p=function(e){return{type:r.a.SIGN_UP_START,payload:e}},b=function(e){var n=e.user,t=e.additionalData;return{type:r.a.SIGN_UP_SUCCESS,payload:{user:n,additionalData:t}}},f=function(e){return{type:r.a.SIGN_UP_FAILURE,payload:e}}},28:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"}},30:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o})),t.d(n,"d",(function(){return s}));var r=t(17),c=function(e){return e.cart},a=Object(r.a)([c],(function(e){return e.cartItems})),i=Object(r.a)([a],(function(e){return e.reduce((function(e,n){return e+n.quantity}),0)})),o=Object(r.a)([c],(function(e){return e.hidden})),s=Object(r.a)([a],(function(e){return e.reduce((function(e,n){return e+n.price*n.quantity}),0)}))},32:function(e,n,t){"use strict";t.d(n,"f",(function(){return c})),t.d(n,"a",(function(){return a})),t.d(n,"d",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"b",(function(){return s})),t.d(n,"e",(function(){return u}));var r=t(18),c=function(){return{type:r.a.TOGGLE_CART_HIDDEN}},a=function(e){return{type:r.a.ADD_ITEM,payload:e}},i=function(e){return{type:r.a.REMOVE_ITEM,payload:e}},o=function(e){return{type:r.a.CLEAR_ITEM_FROM_CART,payload:e}},s=function(){return{type:r.a.CLEAR_CART}},u=function(e){return{type:r.a.SET_CART_FROM_FIREBASE,payload:e}}},46:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}));var r=t(28),c=function(){return{type:r.a.FETCH_COLLECTIONS_START}},a=function(e){return{type:r.a.FETCH_COLLECTIONS_SUCCESS,payload:e}},i=function(e){return{type:r.a.FETCH_COLLECTIONS_FAILURE,payload:e}}},51:function(e,n,t){"use strict";var r,c,a,i,o=t(11),s=t(52),u=(t(1),t(6)),l=t(7),d=Object(l.b)(r||(r=Object(u.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]))),p=Object(l.b)(c||(c=Object(u.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),b=Object(l.b)(a||(a=Object(u.a)(["\n  background-color: #4285f4;\n  color: white;\n  border: none;\n  padding: 0;\n  margin-left: 1rem;\n  font-size: 12px;\n  height: auto;\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n\n  @media (max-width: 800px) {\n    padding: 0 0.3rem;\n  }\n"]))),f=l.c.button(i||(i=Object(u.a)(['\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  border-radius: 3%;\n\n  text-transform: uppercase;\n  font-family: "Open Sans Condensed";\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n\n  ',"\n\n  @media (max-width: 800px) {\n    min-width: unset;\n    font-size: 0.8rem;\n  }\n"])),(function(e){return e.isGoogleSignIn?b:e.inverted?p:d})),O=(t(84),t(3));n.a=function(e){var n=e.children,t=Object(s.a)(e,["children"]);return Object(O.jsx)(f,Object(o.a)(Object(o.a)({},t),{},{children:n}))}},53:function(e,n,t){"use strict";t(1);var r,c,a=t(6),i=t(7),o=i.c.div(r||(r=Object(a.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),s=i.c.div(c||(c=Object(a.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),u=t(3);n.a=function(){return Object(u.jsx)(o,{children:Object(u.jsx)(s,{})})}},80:function(e,n,t){},81:function(e,n,t){},84:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(40),i=t.n(a),o=t(29),s=t(25),u=t(57),l=t(27),d=t(43),p=(t(74),t(58)),b=t.n(p),f=t(11),O=t(13),h={currentUser:null,error:null},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case O.a.SIGN_IN_SUCCESS:case O.a.SIGN_UP_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{currentUser:n.payload,error:null});case O.a.SIGN_IN_FAILURE:case O.a.SIGN_OUT_FAILURE:case O.a.SIGN_UP_FAILURE:return Object(f.a)(Object(f.a)({},e),{},{error:n.payload});case O.a.SIGN_OUT_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{currentUser:null,error:null});default:return e}},x=t(18),m=t(49),g=function(e,n){return e.find((function(e){return e.id===n.id}))?e.map((function(e){return e.id===n.id?Object(f.a)(Object(f.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(m.a)(e),[Object(f.a)(Object(f.a)({},n),{},{quantity:1})])},v=function(e,n){return e.find((function(e){return e.id===n.id}))?e.map((function(e){return e.id===n.id?Object(f.a)(Object(f.a)({},e),{},{quantity:e.quantity-1}):e})):Object(m.a)(e)},E={hidden:!0,cartItems:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x.a.TOGGLE_CART_HIDDEN:return Object(f.a)(Object(f.a)({},e),{},{hidden:!e.hidden});case x.a.ADD_ITEM:return Object(f.a)(Object(f.a)({},e),{},{cartItems:g(e.cartItems,n.payload)});case x.a.REMOVE_ITEM:return Object(f.a)(Object(f.a)({},e),{},{cartItems:v(e.cartItems,n.payload)});case x.a.CLEAR_ITEM_FROM_CART:return Object(f.a)(Object(f.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==n.payload.id}))});case x.a.CLEAR_CART:return Object(f.a)(Object(f.a)({},e),{},{cartItems:[]});case x.a.SET_CART_FROM_FIREBASE:return Object(f.a)(Object(f.a)({},e),{},{cartItems:n.payload});default:return e}},w={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats",size:"small"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets",size:"small"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers",size:"small"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0;return n.type,e},I=t(28),y={collections:null,isFetching:!1,errorMessage:void 0},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case I.a.FETCH_COLLECTIONS_START:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!0});case I.a.FETCH_COLLECTIONS_SUCCESS:return Object(f.a)(Object(f.a)({},e),{},{collections:n.payload,isFetching:!1});case I.a.FETCH_COLLECTIONS_FAILURE:return Object(f.a)(Object(f.a)({},e),{},{isFetching:!1,errorMessage:n.payload});default:return e}},T={key:"root",storage:b.a,whitelist:["cart"]},k=Object(l.b)({user:j,cart:S,directory:_,shop:C}),U=Object(d.a)(T,k),R=t(65),N=t(4),A=t.n(N),L=t(8),G=t(32),F=t(17),M=Object(F.a)([function(e){return e.user}],(function(e){return e.currentUser})),z=t(42),P=t(37);t(86),t(78);P.a.initializeApp({apiKey:"AIzaSyDpcz5d7_B72r0CSNlQuskbn9ZCPtiPF_w",authDomain:"crwn-db-e095f.firebaseapp.com",projectId:"crwn-db-e095f",storageBucket:"crwn-db-e095f.appspot.com",messagingSenderId:"60310541147",appId:"1:60310541147:web:a5a6d75750e8343501007e",measurementId:"G-HZ9YEWLSM1"});var H=function(){var e=Object(z.a)(A.a.mark((function e(n,t){var r,c,a,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return r=q.doc("users/".concat(n.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=n.displayName,a=n.email,i=new Date,e.prev=9,e.next=12,r.set(Object(f.a)({displayName:c,email:a,createdAt:i},t));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(n,t){return e.apply(this,arguments)}}(),D=function(){var e=Object(z.a)(A.a.mark((function e(n){var t,r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=q.collection("carts").where("userId","==",n),e.next=3,t.get();case 3:if(!(r=e.sent).empty){e.next=11;break}return c=q.collection("carts").doc(),e.next=8,c.set({userId:n,cartItems:[]});case 8:return e.abrupt("return",c);case 11:return e.abrupt("return",r.docs[0].ref);case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),W=function(e){return e.docs.map((function(e){var n=e.data(),t=n.title,r=n.items;return{routeName:encodeURI(t.toLowerCase()),id:e.id,title:t,items:r}})).reduce((function(e,n){return e[n.title.toLowerCase()]=n,e}),{})},B=P.a.auth(),q=P.a.firestore(),V=new P.a.auth.GoogleAuthProvider;V.setCustomParameters({prompt:"select_account"});P.a;var K=t(30),Q=A.a.mark(ne),J=A.a.mark(te),X=A.a.mark(re),Y=A.a.mark(ce),Z=A.a.mark(ae),$=A.a.mark(ie),ee=A.a.mark(oe);function ne(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.c)(Object(G.b)());case 2:case"end":return e.stop()}}),Q)}function te(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(O.a.SIGN_OUT_SUCCESS,ne);case 2:case"end":return e.stop()}}),J)}function re(){var e,n,t;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(L.d)(M);case 2:if(!(e=r.sent)){r.next=18;break}return r.prev=4,r.next=7,D(e.id);case 7:return n=r.sent,r.next=10,Object(L.d)(K.b);case 10:return t=r.sent,r.next=13,n.update({cartItems:t});case 13:r.next=18;break;case 15:r.prev=15,r.t0=r.catch(4),console.log(r.t0);case 18:case"end":return r.stop()}}),X,null,[[4,15]])}function ce(e){var n,t,r;return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=e.payload,c.next=3,D(n.id);case 3:return t=c.sent,c.next=6,t.get();case 6:return r=c.sent,c.next=9,Object(L.c)(Object(G.e)(r.data().cartItems));case 9:case"end":return c.stop()}}),Y)}function ae(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(O.a.SIGN_IN_SUCCESS,ce);case 2:case"end":return e.stop()}}),Z)}function ie(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)([x.a.ADD_ITEM,x.a.REMOVE_ITEM,x.a.CLEAR_ITEM_FROM_CART],re);case 2:case"end":return e.stop()}}),$)}function oe(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.b)(te),Object(L.b)(ie),Object(L.b)(ae)]);case 2:case"end":return e.stop()}}),ee)}var se=t(46),ue=A.a.mark(pe),le=A.a.mark(be),de=A.a.mark(fe);function pe(){var e,n,t;return A.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=q.collection("collections"),r.next=4,e.get();case 4:return n=r.sent,r.next=7,Object(L.b)(W,n);case 7:return t=r.sent,r.next=10,Object(L.c)(Object(se.c)(t));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(L.c)(Object(se.a)(r.t0.message));case 16:case"end":return r.stop()}}),ue,null,[[0,12]])}function be(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(I.a.FETCH_COLLECTIONS_START,pe);case 2:case"end":return e.stop()}}),le)}function fe(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.b)(be)]);case 2:case"end":return e.stop()}}),de)}var Oe=t(21),he=A.a.mark(ke),je=A.a.mark(Ue),xe=A.a.mark(Re),me=A.a.mark(Ne),ge=A.a.mark(Ae),ve=A.a.mark(Le),Ee=A.a.mark(Ge),Se=A.a.mark(Fe),we=A.a.mark(Me),_e=A.a.mark(ze),Ie=A.a.mark(Pe),ye=A.a.mark(He),Ce=A.a.mark(De),Te=A.a.mark(We);function ke(e,n){var t,r;return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(L.b)(H,e,n);case 3:return t=c.sent,c.next=6,t.get();case 6:return r=c.sent,c.next=9,Object(L.c)(Object(Oe.e)(Object(f.a)({id:r.id},r.data())));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(0),c.next=15,Object(L.c)(Object(Oe.d)(c.t0));case 15:case"end":return c.stop()}}),he,null,[[0,11]])}function Ue(){var e,n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.signInWithPopup(V);case 3:return e=t.sent,n=e.user,t.next=7,ke(n);case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(L.c)(Object(Oe.d)(t.t0));case 13:case"end":return t.stop()}}),je,null,[[0,9]])}function Re(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(O.a.GOOGLE_SIGN_IN_START,Ue);case 2:case"end":return e.stop()}}),xe)}function Ne(e){var n,t,r,c,a;return A.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.payload,t=n.email,r=n.password,i.prev=1,i.next=4,B.signInWithEmailAndPassword(t,r);case 4:return c=i.sent,a=c.user,i.next=8,ke(a);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(L.c)(Object(Oe.d)(i.t0));case 14:case"end":return i.stop()}}),me,null,[[1,10]])}function Ae(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(O.a.EMAIL_SIGN_IN_START,Ne);case 2:case"end":return e.stop()}}),ge)}function Le(){var e;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new Promise((function(e,n){var t=B.onAuthStateChanged((function(n){t(),e(n)}),n)}));case 3:if(e=n.sent){n.next=6;break}return n.abrupt("return");case 6:return n.next=8,ke(e);case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,Object(L.c)(Object(Oe.d)(n.t0));case 14:case"end":return n.stop()}}),ve,null,[[0,10]])}function Ge(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(O.a.CHECK_USER_SESSION,Le);case 2:case"end":return e.stop()}}),Ee)}function Fe(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.signOut();case 3:return e.next=5,Object(L.c)(Object(Oe.h)());case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(L.c)(Object(Oe.f)(e.t0));case 11:case"end":return e.stop()}}),Se,null,[[0,7]])}function Me(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(O.a.SIGN_OUT_START,Fe);case 2:case"end":return e.stop()}}),we)}function ze(e){var n,t,r;return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=e.payload,t=n.user,r=n.additionalData,c.next=3,ke(t,r);case 3:case"end":return c.stop()}}),_e)}function Pe(e){var n,t,r,c,a,i;return A.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=e.payload,t=n.email,r=n.password,c=n.displayName,o.prev=1,o.next=4,B.createUserWithEmailAndPassword(t,r);case 4:return a=o.sent,i=a.user,o.next=8,Object(L.c)(Object(Oe.k)({user:i,additionalData:{displayName:c}}));case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(L.c)(Object(Oe.i)(o.t0));case 14:case"end":return o.stop()}}),Ie,null,[[1,10]])}function He(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(O.a.SIGN_UP_START,Pe);case 2:case"end":return e.stop()}}),ye)}function De(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(O.a.SIGN_UP_SUCCESS,ze);case 2:case"end":return e.stop()}}),Ce)}function We(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.b)(Re),Object(L.b)(Ae),Object(L.b)(Ge),Object(L.b)(Me),Object(L.b)(He),Object(L.b)(De)]);case 2:case"end":return e.stop()}}),Te)}var Be=A.a.mark(qe);function qe(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Object(L.b)(fe),Object(L.b)(We),Object(L.b)(oe)]);case 2:case"end":return e.stop()}}),Be)}var Ve=Object(R.a)(),Ke=[Ve];var Qe=Object(l.d)(U,l.a.apply(void 0,Ke));Ve.run(qe);var Je=Object(d.b)(Qe),Xe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ye(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(80);var Ze,$e,en,nn,tn,rn,cn,an,on,sn,un=t(15),ln=t(6),dn=t(7),pn=Object(dn.a)(Ze||(Ze=Object(ln.a)(["\nbody {\n  font-family: 'Open Sans Condensed';\n  padding: 20px 40px;\n\n  @media screen and (max-width: 800px) {\n    padding: 10px;\n  }\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n\n"]))),bn=(t(81),Object(dn.b)($e||($e=Object(ln.a)(["\n  height: 20rem;\n"])))),fn=Object(dn.b)(en||(en=Object(ln.a)(["\n  height: 32rem;\n"]))),On=dn.c.div(nn||(nn=Object(ln.a)(["\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  background-image: ",";\n"])),(function(e){return"url(".concat(e.imageUrl,")")})),hn=dn.c.div(tn||(tn=Object(ln.a)(["\n  height: 5rem;\n  padding: 0 1rem 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  background-color: white;\n  opacity: 0.7;\n  position: absolute;\n\n  @media screen and (min-width: 940px) {\n    padding: 0 2rem 0.5rem;\n  }\n\n  @media screen and (max-width: 800px) {\n    height: 5rem;\n  }\n\n  @media screen and (max-width: 500px) {\n    padding: 0 0.1rem 0.2rem;\n  }\n"]))),jn=dn.c.h1(rn||(rn=Object(ln.a)(["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 1.5rem;\n  color: #4a4a4a;\n\n  @media screen and (max-width: 800px) {\n    font-size: 1rem;\n  }\n\n  @media screen and (max-width: 500px) {\n    font-size: 0.9rem;\n  }\n"]))),xn=dn.c.span(cn||(cn=Object(ln.a)(["\n  font-weight: lighter;\n  font-size: 1rem;\n  @media screen and (max-width: 800px) {\n    font-size: 0.8rem;\n  }\n\n  @media screen and (max-width: 500px) {\n    font-size: 0.7rem;\n  }\n"]))),mn=dn.c.div(an||(an=Object(ln.a)(["\n  min-width: 30%;\n  height: 240px;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  margin: 0 7.5px 15px;\n  overflow: hidden;\n\n  ","\n\n  &:hover {\n    cursor: pointer;\n\n    & "," {\n      transform: scale(1.1);\n      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n    }\n    & "," {\n      opacity: 0.9;\n    }\n  }\n\n  &:first-child {\n    margin-right: 7.5px;\n  }\n\n  &:last-child {\n    margin-left: 7.5px;\n  }\n\n  @media screen and (max-width: 800px) {\n    height: 200px;\n  }\n"])),(function(e){return"large"===e.size?fn:bn}),On,hn),gn=t(3),vn=Object(un.h)((function(e){var n=e.title,t=e.imageUrl,r=e.size,c=e.history,a=e.linkUrl;return Object(gn.jsxs)(mn,{size:r,onClick:function(){return c.push("/"+a)},children:[Object(gn.jsx)(On,{imageUrl:t}),Object(gn.jsxs)(hn,{children:[Object(gn.jsx)(jn,{children:n.toUpperCase()}),Object(gn.jsx)(xn,{children:"SHOP NOW"})]})]})})),En=Object(F.a)([function(e){return e.directory}],(function(e){return e.sections})),Sn=dn.c.div(on||(on=Object(ln.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),wn=Object(F.b)({sections:En}),_n=Object(s.b)(wn)((function(e){var n=e.sections;return Object(gn.jsx)(Sn,{children:n.map((function(e){var n=e.title,t=e.id,r=e.imageUrl,c=e.size,a=e.linkUrl;return Object(gn.jsx)(vn,{title:n,id:t,imageUrl:r,size:c,linkUrl:a},t)}))})})),In=dn.c.div(sn||(sn=Object(ln.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 80px;\n\n  @media screen and (max-width: 500px) {\n    padding: 1rem 4rem;\n  }\n"]))),yn=function(){return Object(gn.jsx)(In,{children:Object(gn.jsx)(_n,{})})};function Cn(){return(Cn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Tn(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var kn=r.createElement("desc",null,"Created with Sketch."),Un=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function Rn(e,n){var t=e.title,c=e.titleId,a=Tn(e,["title","titleId"]);return r.createElement("svg",Cn({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:n,"aria-labelledby":c},a),void 0===t?r.createElement("title",{id:c},"Group"):t?r.createElement("title",{id:c},t):null,kn,Un)}var Nn=r.forwardRef(Rn);t.p;function An(){return(An=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Ln(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var Gn=r.createElement("g",null),Fn=r.createElement("g",null),Mn=r.createElement("g",null),zn=r.createElement("g",null),Pn=r.createElement("g",null),Hn=r.createElement("g",null),Dn=r.createElement("g",null),Wn=r.createElement("g",null),Bn=r.createElement("g",null),qn=r.createElement("g",null),Vn=r.createElement("g",null),Kn=r.createElement("g",null),Qn=r.createElement("g",null),Jn=r.createElement("g",null),Xn=r.createElement("g",null);function Yn(e,n){var t=e.title,c=e.titleId,a=Ln(e,["title","titleId"]);return r.createElement("svg",An({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:n,"aria-labelledby":c},a),t?r.createElement("title",{id:c},t):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Gn,Fn,Mn,zn,Pn,Hn,Dn,Wn,Bn,qn,Vn,Kn,Qn,Jn,Xn)}var Zn,$n,et,nt,tt,rt,ct,at,it,ot,st,ut,lt,dt,pt,bt,ft,Ot,ht,jt,xt,mt=r.forwardRef(Yn),gt=(t.p,dn.c.div(Zn||(Zn=Object(ln.a)(["\n  width: 45px;\n  height: 45px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"])))),vt=Object(dn.c)(mt)($n||($n=Object(ln.a)(["\n  width: 24px;\n  height: 24px;\n"]))),Et=dn.c.span(et||(et=Object(ln.a)(["\n  position: absolute;\n  font-size: 10px;\n  font-weight: bold;\n  bottom: 12px;\n"]))),St=Object(F.b)({itemCount:K.c}),wt=Object(s.b)(St)((function(e){var n=e.dispatch,t=e.itemCount;return Object(gn.jsxs)(gt,{onClick:function(){return n(Object(G.f)())},children:[Object(gn.jsx)(vt,{className:"shopping-icon"}),Object(gn.jsx)(Et,{children:t})]})})),_t=t(51),It=dn.c.div(nt||(nt=Object(ln.a)(["\n  width: 100%;\n  display: flex;\n  height: 7rem;\n  margin-bottom: 1rem;\n"]))),yt=dn.c.img(tt||(tt=Object(ln.a)(["\n  width: 30%;\n"]))),Ct=dn.c.div(rt||(rt=Object(ln.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 1rem 1.5rem;\n"]))),Tt=dn.c.span(ct||(ct=Object(ln.a)(["\n  font-size: 1.2rem;\n"]))),kt=dn.c.span(at||(at=Object(ln.a)([""]))),Ut=function(e){var n=e.item,t=n.imageUrl,r=n.price,c=n.name,a=n.quantity;return Object(gn.jsxs)(It,{children:[Object(gn.jsx)(yt,{src:t,alt:"item"}),Object(gn.jsxs)(Ct,{children:[Object(gn.jsx)(Tt,{children:c}),Object(gn.jsxs)(kt,{children:[a," x $",r]})]})]})},Rt=c.a.memo(Ut),Nt=dn.c.div(it||(it=Object(ln.a)(["\n  position: absolute;\n  width: 340px;\n  height: 340px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid black;\n  background-color: white;\n  top: 90px;\n  right: 40px;\n  z-index: 5;\n\n  button {\n    margin-top: auto;\n  }\n  @media (max-width: 800px) {\n    width: 300px;\n  }\n"]))),At=dn.c.div(ot||(ot=Object(ln.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n"]))),Lt=dn.c.span(st||(st=Object(ln.a)(["\n  font-size: 1.5rem;\n  margin: 50px auto;\n"]))),Gt=Object(F.b)({cartItems:K.b}),Ft=Object(s.b)(Gt)((function(e){var n=e.cartItems,t=e.dispatch,r=Object(un.g)();return Object(gn.jsxs)(Nt,{children:[Object(gn.jsx)(At,{children:n.length?n.map((function(e){return Object(gn.jsx)(Rt,{item:e},e.id)})):Object(gn.jsx)(Lt,{children:"Your cart is empty"})}),Object(gn.jsxs)(_t.a,{onClick:function(){r.push("/checkout"),t(Object(G.f)())},children:[" ","GO TO CHECKOUT"," "]})]})})),Mt=dn.c.div(ut||(ut=Object(ln.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n\n  @media screen and (max-width: 800px) {\n    height: 60px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n"]))),zt=Object(dn.c)(o.b)(lt||(lt=Object(ln.a)(["\n  height: 100%;\n  width: 8rem;\n  padding: 25px;\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: 800px) {\n    width: 50px;\n    padding: 0;\n  }\n"]))),Pt=dn.c.div(dt||(dt=Object(ln.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 800px) {\n    width: 80%;\n  }\n"]))),Ht=Object(dn.c)(o.b)(pt||(pt=Object(ln.a)(["\n  padding: 10px 15px;\n  cursor: pointer;\n"]))),Dt=Object(F.b)({currentUser:M,hidden:K.a}),Wt=Object(s.b)(Dt,(function(e){return{signOutStart:function(n){return e(Object(Oe.g)(n))}}}))((function(e){var n=e.currentUser,t=e.hidden,r=e.signOutStart;return Object(gn.jsxs)(Mt,{children:[Object(gn.jsx)(zt,{to:"/",children:Object(gn.jsx)(Nn,{className:"logo"})}),Object(gn.jsxs)(Pt,{children:[Object(gn.jsx)(Ht,{to:"/shop",children:"SHOP"}),Object(gn.jsx)(Ht,{to:"/contact",children:"CONTACT"}),n?Object(gn.jsx)(Ht,{as:"div",onClick:r,children:"SIGN OUT"}):Object(gn.jsx)(Ht,{to:"/signin",children:"SIGN-IN"}),Object(gn.jsx)(wt,{})]}),t?null:Object(gn.jsx)(Ft,{})]})})),Bt=dn.c.div(bt||(bt=Object(ln.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10rem;\n"]))),qt=dn.c.img(ft||(ft=Object(ln.a)(["\n  width: 12rem;\n  height: 12rem;\n"]))),Vt=dn.c.span(Ot||(Ot=Object(ln.a)(["\n  font-size: 1rem;\n  color: #d8721e;\n  margin-top: 2rem;\n  font-weight: 500;\n"]))),Kt=function(){return Object(gn.jsxs)(Bt,{children:[Object(gn.jsx)(qt,{src:"https://i.imgur.com/qIufhof.png"}),Object(gn.jsx)(Vt,{children:"Sorry, we're doing some work on the site"})]})},Qt=t(53),Jt=t(62),Xt=t(63),Yt=t(66),Zt=t(64),$t=dn.c.div(ht||(ht=Object(ln.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),er=dn.c.div(jt||(jt=Object(ln.a)(["\n  display: inline-block;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 40vh;\n  height: 40vh;\n"])),(function(e){var n=e.imageUrl;return"url(".concat(n,")")})),nr=dn.c.h2(xt||(xt=Object(ln.a)(["\n  font-size: 28px;\n  color: #e09ee5;\n"]))),tr=function(e){Object(Yt.a)(t,e);var n=Object(Zt.a)(t);function t(){var e;return Object(Jt.a)(this,t),(e=n.call(this)).state={hasErrored:!1},e}return Object(Xt.a)(t,[{key:"componentDidCatch",value:function(e,n){console.log(e,">>>>>>>>>>ERROR")}},{key:"render",value:function(){return this.state.hasErrored?Object(gn.jsxs)($t,{children:[Object(gn.jsx)(er,{imageUrl:"https://i.imgur.com/O0DCcQy.png"}),Object(gn.jsx)(nr,{children:"Sorry this page is broken"})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasErrored:!0}}}]),t}(r.Component),rr=Object(r.lazy)((function(){return t.e(7).then(t.bind(null,123))})),cr=Object(r.lazy)((function(){return t.e(8).then(t.bind(null,119))})),ar=Object(r.lazy)((function(){return Promise.all([t.e(3),t.e(6)]).then(t.bind(null,120))})),ir=Object(F.b)({currentUser:M}),or=Object(s.b)(ir,(function(e){return{checkUserSession:function(){return e(Object(Oe.a)())}}}))((function(e){var n=e.checkUserSession,t=e.currentUser;return Object(r.useEffect)((function(){n()}),[n]),Object(gn.jsxs)("div",{className:"App",children:[Object(gn.jsx)(pn,{}),Object(gn.jsx)(Wt,{}),Object(gn.jsx)(tr,{children:Object(gn.jsx)(r.Suspense,{fallback:Object(gn.jsx)(Qt.a,{}),children:Object(gn.jsxs)(un.d,{children:[Object(gn.jsx)(un.b,{component:yn,exact:!0,path:"/"}),Object(gn.jsx)(un.b,{component:Kt,exact:!0,path:"/contact"}),Object(gn.jsx)(un.b,{component:rr,path:"/shop"}),Object(gn.jsx)(un.b,{render:function(){return t?Object(gn.jsx)(un.a,{to:"/"}):Object(gn.jsx)(cr,{})},exact:!0,path:"/signin"}),Object(gn.jsx)(un.b,{component:ar,exact:!0,path:"/checkout"})]})})})]})}));i.a.render(Object(gn.jsx)(c.a.StrictMode,{children:Object(gn.jsx)(s.a,{store:Qe,children:Object(gn.jsx)(o.a,{children:Object(gn.jsx)(u.a,{persistor:Je,children:Object(gn.jsx)(or,{})})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");Xe?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ye(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ye(n,e)}))}}()}},[[85,1,2]]]);
//# sourceMappingURL=main.d52ea736.chunk.js.map