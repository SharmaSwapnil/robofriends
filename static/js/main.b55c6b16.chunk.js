(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,a,n){},14:function(e,a,n){"use strict";n.r(a);var r=n(0),t=n.n(r),m=n(3),i=n.n(m),o=(n(13),n(4)),c=n(5),h=n(7),l=n(6),s=(n(1),function(e){var a=e.name,n=e.username,r=e.email,m=e.id;return t.a.createElement("div",{className:"tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5"},t.a.createElement("img",{alt:"pic",src:"https://robohash.org/".concat(m)}),t.a.createElement("h2",null,a),t.a.createElement("p",null,n),t.a.createElement("p",null,r))}),u=function(e){var a=e.robots,n=a.map((function(e,n){return t.a.createElement(s,{key:n,name:a[n].name,username:a[n].username,email:a[n].email,id:a[n].id})}));return t.a.createElement("div",null,n)},d=function(e){e.searchfield;var a=e.searchChange;return t.a.createElement("div",null,t.a.createElement("input",{className:"pa3 ba b--green bg-light-blue",type:"search",placeholder:"Enter the robo name",onChange:a}))},b=[{id:11,name:"Shayesha Sharma",username:"Shayeshu",email:"Sharma@abc.com"},{id:12,name:"Niheera Sharma",username:"Kuhu",email:"Sharma@abc.com"},{id:13,name:"Megha Sharma",username:"Megha",email:"Sharma@abc.com"},{id:14,name:"Narendra Sharma",username:"Dadu",email:"Sharma@abc.com"},{id:15,name:"Madhu Sharma",username:"Madhu",email:"Sharma@abc.com"},{id:16,name:"Niheera Sharma",username:"Kuhu",email:"Sharma@abc.com"},{id:17,name:"Shilpi Sharma",username:"Shilpi",email:"Sharma@abc.com"},{id:18,name:"Shantanu Sharma",username:"Bittu",email:"Sharma@abc.com"},{id:19,name:"Tinkoo Sharma",username:"Tinkoo",email:"Sharma@abc.com"},{id:110,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],S=function(e){Object(h.a)(n,e);var a=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:b,searchfield:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return t.a.createElement("div",{className:"tc"},t.a.createElement("h2",null," Sharma Robos"),t.a.createElement(d,{searchChange:this.onSearchChange}),t.a.createElement(u,{robots:a}))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(t.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.b55c6b16.chunk.js.map