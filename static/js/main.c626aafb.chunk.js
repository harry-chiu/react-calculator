(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{12:function(e,n,t){e.exports=t(20)},19:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(8),i=t.n(c),l=t(1),o=t(2),u=t(3);function f(){var e=Object(o.a)(["\n    width: 344px;\n    font-size: 64px;\n    padding: 8px 0;\n    text-align: right;\n"]);return f=function(){return e},e}function s(){var e=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: ",";\n    width: ",";\n    height: 80px;\n    border-radius: ",";\n    background: ",";\n    padding-left: ",";\n    margin-left: 8px;\n    cursor: pointer;\n    font-size: 24px;\n\n    &:hover {\n        background: ","\n    }\n\n    &:first-child {\n        margin-left: 0;\n    }\n\n    &:last-child {\n        color: ",";\n        background: ",";\n\n        &:hover {\n            background: ",";\n        }\n    }\n"]);return s=function(){return e},e}function m(){var e=Object(o.a)(["\n    display: flex;\n    justify-content: center;\n    margin-top: 8px;\n"]);return m=function(){return e},e}function d(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    max-width: 480px;\n    width: 100%;\n    height: 100%;\n    background: #000000;\n    color: #ffffff;\n\n    @media(min-width: 480px) {\n        max-width: 414px;\n    }\n"]);return d=function(){return e},e}var g=u.a.div(d()),p=u.a.div(m()),k=u.a.div(s(),(function(e){return e.justify||"center"}),(function(e){return e.large?"168px":"80px"}),(function(e){return e.large?"40px":"50%"}),(function(e){return e.light?"#666666":"#333333"}),(function(e){return e.large?"32px":"0"}),(function(e){return e.light?"#777777":"#444444"}),(function(e){return e.active?"#FF9800":"#ffffff"}),(function(e){return e.active?"#ffffff":"#FF9800"}),(function(e){return e.active?"#ffffff":"#FFA726"})),v=u.a.div(f()),E=function(){var e=Object(r.useState)(0),n=Object(l.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(0),o=Object(l.a)(i,2),u=o[0],f=o[1],s=Object(r.useState)(0),m=Object(l.a)(s,2),d=m[0],E=m[1],h=Object(r.useState)(""),b=Object(l.a)(h,2),x=b[0],C=b[1],j=Object(r.useState)(!1),O=Object(l.a)(j,2),w=O[0],y=O[1],S=function(e){var n=e.target.innerText;if(y(!1),0===d&&(E(parseInt(n)),c(parseInt(n))),!(d.toString().replace(".","").length>=8)){if(/\./.test(d))return/^0.0+(?![0-9])/.test(d+n)?(E(d+n),void c(d+n)):(E(parseFloat(d+n)),void c(parseFloat(d+n)));E(parseInt(d+n)),c(parseInt(d+n))}},F=function(e){var n=e.target.innerText;if(E(0),y(!0),!x)return f(d),void C(n);switch(x){case"+":f(u+d),c(u+d);break;case"-":f(u-d),c(u-d);break;case"\xd7":f(u*d),c(u*d);break;case"\xf7":f(u/d),c(u/d);break;case"=":f(d),c(d)}C(n)},I=function(){return d||x?"C":"AC"};return a.a.createElement(g,null,a.a.createElement(v,null,t.toLocaleString()),a.a.createElement(p,null,a.a.createElement(k,{light:!0,onClick:function(){if("C"===I()){if(u&&t)return f(0),c(0),void C("");if(d)return E(0),void c(0);if(x)return C(""),void c(u)}"AC"===I()&&(c(0),E(0),f(0),C(""),y(!1))}},I()),a.a.createElement(k,{light:!0,onClick:function(){if(!d)return f(-1*u),void c(-1*u);E(-1*d),c(-1*d)}},"+/-"),a.a.createElement(k,{light:!0,onClick:function(){if(!d)return f(u/100),void c(u/100);E(d/100),c(d/100)}},"%"),a.a.createElement(k,{onClick:F,active:w&&"\xf7"===x},"\xf7")),a.a.createElement(p,null,a.a.createElement(k,{onClick:S},"7"),a.a.createElement(k,{onClick:S},"8"),a.a.createElement(k,{onClick:S},"9"),a.a.createElement(k,{onClick:F,active:w&&"\xd7"===x},"\xd7")),a.a.createElement(p,null,a.a.createElement(k,{onClick:S},"4"),a.a.createElement(k,{onClick:S},"5"),a.a.createElement(k,{onClick:S},"6"),a.a.createElement(k,{onClick:F,active:w&&"-"===x},"-")),a.a.createElement(p,null,a.a.createElement(k,{onClick:S},"1"),a.a.createElement(k,{onClick:S},"2"),a.a.createElement(k,{onClick:S},"3"),a.a.createElement(k,{onClick:F,active:w&&"+"===x},"+")),a.a.createElement(p,null,a.a.createElement(k,{large:!0,justify:"flex-start",onClick:S},"0"),a.a.createElement(k,{onClick:function(){d.toString().match(/\./)||d.toString().length>=8||(E(d+"."),c(d+"."))}},"."),a.a.createElement(k,{onClick:F},"=")))};t(19);i.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.c626aafb.chunk.js.map