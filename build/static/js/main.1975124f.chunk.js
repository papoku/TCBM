(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a(285)},110:function(e,t,a){},111:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(15),i=a.n(o),s=(a(110),a(20)),c=a(21),u=a(23),l=a(22),p=a(24),h=(a(111),a(35)),m=a(98),d=a.n(m),f=a(100),b=a.n(f),v=a(63),g=a.n(v);var y=Object(h.withStyles)({root:{flexGrow:1},appbar:{alignItems:"center"}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(d.a,{className:t.appbar,position:"static",color:"default"},r.a.createElement(b.a,null,r.a.createElement(g.a,{variant:"h6",color:"inherit"},e.content))))}),k=a(104),w=a.n(k),O=a(103),E=a.n(O),j=a(31),C=a.n(j),x=a(47),N=a(32),S=a.n(N),_="",I="https://data.foli.fi/gtfs/v0/".concat(_,"/routes"),M="https://data.foli.fi/gtfs/v0/".concat(_,"/trips/route"),T="https://data.foli.fi/gtfs/v0/".concat(_,"/shapes"),L=function(){var e=Object(x.a)(C.a.mark(function e(){var t;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://data.foli.fi/gtfs/v0/");case 3:t=e.sent,_=t.data.latest,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("API is not responsding !!\n'".concat(e.t0));case 10:return e.abrupt("return",S.a.get(I));case 11:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),P=function(e){return e&&S.a.get("".concat(M,"/").concat(e))},D=function(e){return e&&S.a.get("".concat(T,"/").concat(e))},U=function(){return S.a.get("https://data.foli.fi/siri/vm")},W=a(17),z=a.n(W);a(197);delete z.a.Icon.Default.prototype._getIconUrl,z.a.Icon.Default.mergeOptions({iconRetinaUrl:a(198),iconUrl:a(199),shadowUrl:a(200)}),z.a.Map=z.a.Map.extend({openPopup:function(e){return this._popup=e,this.addLayer(e).fire("popupopen",{popup:this._popup})}});var A={width:"100%",height:"450px"},B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).mapCreator=function(){a.layergroup&&a.layergroup.clearLayers(),U().then(function(){var e=Object(x.a)(C.a.mark(function e(t){var n,r,o,i,s,c,u,l,p,h,m,d,f;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.data.result.vehicles,r=[],o=[],i=[],!n){e.next=8;break}for(s in n)n[s].hasOwnProperty("publishedlinename")&&n[s].publishedlinename===a.props.lineNumber&&(o.push(z.a.marker([n[s].latitude,n[s].longitude]).bindPopup(a.popupContent(n[s].originname,n[s].destinationname),{autoClose:!1})),i.push(z.a.popup({keepInView:!0,autoClose:!1,closeOnClick:!1}).setLatLng([n[s].latitude,n[s].longitude]).setContent(a.props.lineNumber)),r.push(n[s]));e.next=9;break;case 8:throw"No Vehicles found !!";case 9:return a.marker=0!==o.length?o:a.marker,a.popUps=i,e.next=13,P(a.props.routeId);case 13:if(!(c=e.sent)||0===r.length){e.next=46;break}u="",l=!0,p=!1,h=void 0,e.prev=19,m=c.data[Symbol.iterator]();case 21:if(l=(d=m.next()).done){e.next=29;break}if((f=d.value).trip_id!==r[0].__tripref){e.next=26;break}return u=f.shape_id,e.abrupt("break",29);case 26:l=!0,e.next=21;break;case 29:e.next=35;break;case 31:e.prev=31,e.t0=e.catch(19),p=!0,h=e.t0;case 35:e.prev=35,e.prev=36,l||null==m.return||m.return();case 38:if(e.prev=38,!p){e.next=41;break}throw h;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",D(u));case 46:throw"No line is active now!!";case 47:case"end":return e.stop()}},e,null,[[19,31,35,43],[36,,38,42]])}));return function(t){return e.apply(this,arguments)}}()).then(function(e){a.createShape(e),a.timer=setTimeout(a.mapCreator,15e3)}).catch(function(e){window.dispatchEvent(new CustomEvent("notification",{detail:{message:e}})),a.clearTimer()})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.map=z.a.map("map",{center:[60.4518,22.2666],zoom:16,layers:[z.a.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})]}),this.marker=z.a.marker([60.4518,22.2666])}},{key:"componentDidUpdate",value:function(e){this.props.lineNumber!==e.lineNumber&&(this.clearTimer(),this.mapCreator())}},{key:"componentWillUnmount",value:function(){this.clearTimer()}},{key:"clearTimer",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null)}},{key:"popupContent",value:function(e,t){return"<strong>Line:</strong>".concat(this.props.lineNumber,"<br>\n        <strong>Origin:</strong>").concat(e,"<br>\n        <strong>Destination:</strong>").concat(t)}},{key:"createShape",value:function(e){var t=e.data.map(function(e){return[e.lat,e.lon]});this.drawShape(t)}},{key:"drawShape",value:function(e){this.polyline=z.a.polyline(e,{weight:5,stroke:!0,smoothFactor:1,color:"red"}).addTo(this.map),this.layergroup=z.a.featureGroup(this.marker).addLayer(this.polyline).addTo(this.map),this.layergroup.eachLayer(function(e){e.openPopup()}),this.timer||this.map.fitBounds(this.layergroup&&this.layergroup.getBounds())}},{key:"render",value:function(){return r.a.createElement("div",{id:"map",style:A})}}]),t}(n.Component),F=a(36),G=a(102),J=a.n(G),R=a(101),V=a.n(R),H=function(e){function t(e,a){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e,a))).onClosed=function(){n.setState({notificationMessage:""})},window.addEventListener("notification",n.onNotification.bind(Object(F.a)(Object(F.a)(n)))),n.state={notificationMessage:""},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onNotification",value:function(e){var t=e.detail.message;t&&this.setState({notificationMessage:t})}},{key:"getNotificationStyle",value:function(){return{base:{top:"10%",bottom:"auto",left:"50%",transform:this.state.notificationMessage?"translate3d(-50%, 0, 0)":"translate3d(-50%, -50px, 0)"}}}},{key:"render",value:function(){var e=this.getNotificationStyle();return r.a.createElement("div",null,r.a.createElement(V.a,{style:e.base,open:!!this.state.notificationMessage,autoHideDuration:6e3,onClose:this.onClosed,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},this.state.notificationMessage),action:[r.a.createElement(J.a,{key:"undo",color:"secondary",size:"small",onClick:this.onClosed},"Close")]}))}}]),t}(r.a.Component),q=function(e){function t(e,a){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e,a))).handleChange=function(e,t){n.setState({selected:e.target.value,routeId:t.key})},n.state={routes:[],selected:"",routeId:""},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;L().then(function(t){t&&200===t.status&&e.setState({routes:t.data})}).catch(function(e){return window.dispatchEvent(new CustomEvent("notification",{detail:{message:e}}))})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:"mapWrapper"},r.a.createElement("div",null,r.a.createElement(E.a,{id:"outlined-select-currency",select:!0,label:"Select",className:"textField",value:this.state.selected,onChange:this.handleChange,SelectProps:{MenuProps:{className:e.menu}},helperText:"Please select your bus",margin:"normal",variant:"outlined"},this.state.routes&&this.state.routes.map(function(e){return r.a.createElement(w.a,{key:e.route_id,value:e.route_short_name},e.route_short_name+" - "+e.route_long_name)}))),r.a.createElement(B,{lineNumber:this.state.selected,routeId:this.state.routeId}),r.a.createElement(H,null))}}]),t}(r.a.Component),K=Object(h.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},menu:{width:200}}})(q),Q=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:""},r.a.createElement(y,{content:"Realtime Turku city bus location mapping"})),r.a.createElement("div",{className:"bodyWrapper"},r.a.createElement(K,{callback:this.handlechange})),r.a.createElement("footer",null,r.a.createElement(y,{content:"Copyright"})))}}]),t}(n.Component);i.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.1975124f.chunk.js.map