(this["webpackJsonpdaviddotflac.github.io"]=this["webpackJsonpdaviddotflac.github.io"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(4),o=n.n(i),r=(n(16),n(9)),s=n(20),l=n(5),d=n(6),u=n(11),h=n(10),j=n(1),f=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var c;Object(l.a)(this,n),c=e.call(this,t);var a=new Date,i=a.getFullYear(),o=a.getMonth()+1,r=a.getDate();return c.state={time:(new Date).toLocaleTimeString(),date:o+"."+r+"."+i.toString().slice(2,4)},c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){return t.updateTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"updateTime",value:function(){this.setState({time:(new Date).toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})})}},{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:Object(j.jsxs)("span",{className:"time",children:[this.state.time," ",this.state.date]})})})}}]),n}(c.Component);var p=function(){var t=Object(c.useState)(),e=Object(r.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){fetch("text.json",{headers:{"content-type":"application/json",accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){a(t.text)}))}),[n]),Object(j.jsxs)(s.a,{children:[Object(j.jsx)("h1",{className:"title",children:"david.flac"}),Object(j.jsx)(f,{}),Object(j.jsxs)("p",{children:[" ",n," "]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{children:"Links:"}),Object(j.jsx)("a",{className:"link standalone-link",href:"https://soundcloud.com/daviddotflac",target:"_blank",rel:"noopener noreferrer",title:"https://soundcloud.com/daviddotflac",children:"https://soundcloud.com/daviddotflac"}),Object(j.jsx)("a",{className:"link standalone-link",href:"https://twitter.com/daviddotflac_",target:"_blank",rel:"noopener noreferrer",title:"https://twitter.com/daviddotflac_",children:"https://twitter.com/daviddotflac_"})]})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),i(t),o(t)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),b()}},[[18,1,2]]]);
//# sourceMappingURL=main.e5eed49b.chunk.js.map