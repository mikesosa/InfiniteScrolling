(this["webpackJsonpinfinite-scrolling"]=this["webpackJsonpinfinite-scrolling"]||[]).push([[0],{15:function(e,t,a){e.exports=a(23)},20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),l=a.n(i),c=(a(20),a(2)),o=a(3),s=a(8),m=a(4),u=a(9),h=(a(21),a(26)),f=a(24),p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={displayData:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state.displayData.push(this.props.url),r.a.createElement(f.a,{className:"column"},this.state.displayData.map((function(e,t){return r.a.createElement("img",{key:t,src:e,alt:t})})))}}]),t}(r.a.Component),d=a(25),E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,this.props.urls.map((function(e,t){return r.a.createElement(p,{key:t,url:e})})))}}]),t}(r.a.Component),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={imgsUrl:[],statiscUrl:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"fetchRow",value:function(){for(var e=[],t=0;t<4;t++){var a=Math.floor(50*Math.random()),n=new Request("https://api.adorable.io/avatar/250/".concat(a));e.push(n.url)}this.setState({imgsUrl:e})}},{key:"render",value:function(){var e=this,t=window.innerHeight;window.addEventListener("scroll",(function(t){document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&e.fetchRow()}));var a={marginBottom:t/2};return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{fluid:!0},r.a.createElement("h1",null,"Infinite Scrolling"),r.a.createElement("span",null,"Please Scroll Down"),r.a.createElement("div",{style:a},r.a.createElement("h4",{className:"mt-4"},"Find Me"),r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://twitter.com/micael_sosa",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-twitter"}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://github.com/mikesosa?tab=repositories",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github"}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/mike-sosa/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin"}))))),r.a.createElement(E,{urls:this.state.imgsUrl})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(22);l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.26939933.chunk.js.map