(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[6],{120:function(n,e,t){"use strict";t.r(e);t(1);var i,c,r,a,d,s,o,l,j,m,h,p,x,b=t(25),u=t(17),O=t(30),f=t(32),g=t(6),w=t(7),v=w.c.div(i||(i=Object(g.a)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n\n  @media screen and (max-width: 800px) {\n    font-size: 18px;\n  }\n"]))),y=w.c.div(c||(c=Object(g.a)(["\n  width: 23%;\n  padding-right: 15px;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),z=w.c.span(r||(r=Object(g.a)(["\n  width: 23%;\n  @media screen and (max-width: 800px) {\n    padding-left: 0.4rem;\n  }\n"]))),I=w.c.span(a||(a=Object(g.a)(["\n  width: 23%;\n  padding-left: 20px;\n  display: flex;\n  font-size: 1.3rem;\n\n  @media screen and (max-width: 800px) {\n    width: 22%;\n  }\n"]))),C=w.c.div(d||(d=Object(g.a)(["\n  cursor: pointer;\n  font-weight: 500;\n  @media (max-width: 800px) {\n    font-size: 1rem;\n    margin-left: -0.2rem;\n  }\n"]))),k=w.c.div(s||(s=Object(g.a)(["\n  margin: 0 10px;\n"]))),P=w.c.div(o||(o=Object(g.a)(["\n  padding-left: 12px;\n  font-size: 1.4rem;\n  cursor: pointer;\n  font-weight: bold;\n"]))),A=t(3),G=Object(b.b)(null,(function(n){return{clearItemFromCart:function(e){return n(Object(f.c)(e))},removeItem:function(e){return n(Object(f.d)(e))},addItem:function(e){return n(Object(f.a)(e))}}}))((function(n){var e=n.cartItem,t=n.cartItem,i=t.name,c=t.imageUrl,r=t.price,a=t.quantity,d=n.clearItemFromCart,s=n.removeItem,o=n.addItem;return Object(A.jsxs)(v,{children:[Object(A.jsx)(y,{children:Object(A.jsx)("img",{src:c,alt:"item"})}),Object(A.jsx)(z,{children:i}),Object(A.jsxs)(I,{children:[Object(A.jsx)(C,{onClick:function(){1===a?d(e):s(e)},children:"\u276e"}),Object(A.jsx)(k,{children:a}),Object(A.jsx)(C,{onClick:function(){o(e)},children:"\u276f"})]}),Object(A.jsx)(z,{children:r}),Object(A.jsx)(P,{onClick:function(){return d(e)},children:"\u2715"})]})})),L=t(100),N=t.n(L),S=t(101),_=t.n(S),D=function(n){var e=100*n.price;return Object(A.jsx)(N.a,{label:"Pay Now",name:"CRWN Clothing",billingAddress:!0,shippingAddress:!0,image:"https://m.media-amazon.com/images/I/31Sy2HGtAcL._AC_SS450_.jpg",amount:e,panelLabel:"Pay Now",token:function(n){_()({url:"payment",method:"post",data:{amount:e,token:n}}).then((function(n){alert("succesful payment")})).catch((function(n){console.log("Payment Error: ",n),alert("There was an issue with your payment! Please make sure you use the provided credit card.")}))},stripeKey:"pk_test_51ImF5vJalqDgRUAn3ewHxKjORGb5Dz1s2aljAEM4lCfDgHVZrGFLGhLgZCJaguG8UKjCrcSrMz9Zt2YzP6SvZemB0056ENqged"})},E=w.c.div(l||(l=Object(g.a)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n\n  @media screen and (max-width: 800px) {\n    width: 90%;\n  }\n"]))),F=w.c.div(j||(j=Object(g.a)(["\n  width: 100%;\n  padding: 10px 0;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n\n  @media (max-width: 800px) {\n    font-size: 0.8rem;\n  }\n"]))),J=w.c.div(m||(m=Object(g.a)(["\n  text-transform: capitalize;\n  width: 23%;\n\n  &:last-child {\n    width: 8%;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 22%;\n    &:last-child {\n      width: 12%;\n    }\n  }\n"]))),R=w.c.div(h||(h=Object(g.a)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n\n  @media (max-width: 800px) {\n    font-size: 30px;\n  }\n"]))),Z=w.c.div(p||(p=Object(g.a)(["\n  text-align: center;\n  margin: 10rem 0 2.5rem 0;\n  font-size: 24px;\n  color: red;\n"]))),q=w.c.div(x||(x=Object(g.a)(["\n  margin-left: auto;\n  button {\n    width: 10rem;\n    span {\n      font-size: 1.3rem !important;\n    }\n  }\n"]))),H=Object(u.b)({cartItems:O.b,total:O.d});e.default=Object(b.b)(H)((function(n){var e=n.cartItems,t=n.total;return Object(A.jsxs)(E,{children:[Object(A.jsxs)(F,{children:[Object(A.jsx)(J,{children:Object(A.jsx)("span",{children:"Product"})}),Object(A.jsx)(J,{children:Object(A.jsx)("span",{children:"Description"})}),Object(A.jsx)(J,{children:Object(A.jsx)("span",{children:"Quantity"})}),Object(A.jsx)(J,{children:Object(A.jsx)("span",{children:"Price"})}),Object(A.jsx)(J,{children:Object(A.jsx)("span",{children:"Remove"})})]}),e.map((function(n){return Object(A.jsx)(G,{cartItem:n},n.id)})),Object(A.jsx)(R,{children:Object(A.jsxs)("span",{children:["TOTAL : $",Number(t)]})}),Object(A.jsxs)(Z,{children:["* Please use the following test credit card for payments*",Object(A.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/22 - CVV: 123"]}),Object(A.jsx)(q,{children:Object(A.jsx)(D,{price:t})})]})}))}}]);
//# sourceMappingURL=6.e468b175.chunk.js.map