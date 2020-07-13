(window.webpackJsonpfrontendmaster_petapp=window.webpackJsonpfrontendmaster_petapp||[]).push([[0],{1115:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),l=a.n(r),o=(a(29),a(10)),i=a.n(o),s=a(22),u=a(2),m=(a(31),a(3)),d=a.n(m),p=function(e,t,a){var r=Object(n.useState)(t),l=Object(u.a)(r,2),o=l[0],i=l[1],s="use-dropdown-".concat(e.replace(" ","").toLowerCase());console.log("label        =====> ",e),console.log("defaultState =====> ",t),console.log("options      =====> ",a);return[o,function(){return c.a.createElement("label",{htmlFor:s},e,c.a.createElement("select",{id:s,value:o,onChange:function(e){return i(e.target.value)},onBlur:function(e){return i(e.target.value)},disabled:0===a.length},c.a.createElement("option",{value:"All"},"All"),a.map((function(e){return c.a.createElement("option",{value:e,key:e},e)}))))},i]},h=function(e){var t=e.animal,a=e.name,n=e.breed,r=e.media,l=e.id,o=e.location,i="http://placecorgi.com/300/300";return r.length&&(i=r[0].small),c.a.createElement("a",{href:"/details/".concat(l),className:"pet"},c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{src:i,alt:a})),c.a.createElement("div",{className:"info"},c.a.createElement("h1",null,a),c.a.createElement("h2",null,"".concat(t," - ").concat(n," - ").concat(o))))},f=function(e){return console.log(e.pets),c.a.createElement("div",{className:"search"},0===e.pets.length?c.a.createElement("h1",null,"No pets Found"):e.pets.map((function(e){return c.a.createElement(h,{animal:e.type,key:e.id,name:e.name,breed:e.breeds.primary,media:e.photos,location:"".concat(e.contact.address.city),id:e.id})})))},v=function(){var e=Object(n.useState)("Seattle, WA"),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(u.a)(l,2),h=o[0],v=o[1],E=p("Animals","dog",m.ANIMALS),b=Object(u.a)(E,2),g=b[0],y=b[1],j=p("Breeds","",h),O=Object(u.a)(j,3),w=O[0],k=O[1],S=O[2],N=Object(n.useState)([]),A=Object(u.a)(N,2),x=A[0],C=A[1];function B(){return(B=Object(s.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.animals({location:a,breed:w,type:g});case 2:t=e.sent,n=t.animals,C(n||[]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){v([]),S(""),d.a.breeds(g).then((function(e){var t=e.breeds.map((function(e){return e.name}));v(t)}))}),[g]),c.a.createElement("div",{className:"search-params"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){B.apply(this,arguments)}()}},c.a.createElement("label",{htmlFor:"location"},c.a.createElement("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)},placeholder:"Location please"})),c.a.createElement(y,null),c.a.createElement(k,null),c.a.createElement("button",{type:"submit"},"Submit")),c.a.createElement(f,{pets:x}))},E=a(5),b=a(6),g=a(8),y=a(7),j=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={photos:[],active:0},e.handleIndexClick=function(t){e.setState({active:+t.target.dataset.index})},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.photos,n=t.active;return c.a.createElement("div",{className:"carousel"},c.a.createElement("img",{src:a[n],alt:"animal"}),c.a.createElement("div",{className:"carousel-smaller"},a.map((function(t,a){return c.a.createElement("img",{key:t,onClick:e.handleIndexClick,"data-index":a,src:t,className:a===n?"active":"",alt:"animal thumbnail"})}))))}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.media,a=["http://placecorgi.com/600/600"];return t.length&&(a=t.map((function(e){return e.large}))),{photos:a}}}]),a}(n.Component),O=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={loading:!0},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.animal(this.props.id).then((function(t){var a=t.animal;e.setState({name:a.name,animal:a.type,location:"".concat(a.contact.address.city,", \n                           ").concat(a.contact.address.city),description:a.description,media:a.photos,breed:a.breeds.primary,loading:!1})}),console.error)}},{key:"render",value:function(){if(this.state.loading)return c.a.createElement("h1",null,"Loading...");var e=this.state,t=e.animal,a=e.breed,n=e.location,r=e.description,l=e.name,o=e.media;return c.a.createElement("div",{className:"details"},c.a.createElement(j,{media:o}),c.a.createElement("div",null,c.a.createElement("h1",null,l),c.a.createElement("h2",null,"".concat(t," - ").concat(a," - ").concat(n)),c.a.createElement("button",null,"Adopt ",l),c.a.createElement("p",null,r)))}}]),a}(n.Component),w=a(11),k=function(){return c.a.createElement(c.a.StrictMode,null,c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement(w.a,{to:"/"},"Adopt me!")),c.a.createElement(w.b,null,c.a.createElement(v,{path:"/"}),c.a.createElement(O,{path:"/details/:id"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,a){e.exports=a(1115)},29:function(e,t,a){},31:function(e,t,a){}},[[24,1,2]]]);
//# sourceMappingURL=main.06350f89.chunk.js.map