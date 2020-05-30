(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{61:function(e,t,a){e.exports=a(94)},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),o=a.n(s),c=a(24),l=a(21),i=a(55),u=a(16),m=a(17),p=a(19),h=a(18),d=a(20),f=a(100),g=a(23),b=a(4),E=a(97),v=a(98),y=a(99),O=a(6),j=a.n(O),N=a(14),k=a(30),w=a.n(k),x=w.a.create({baseURL:"https://gateway.marvel.com:443/v1/public",params:{apikey:"4b06c3ba829b4f67df951727a1a31477"}}),S=a(96),H=function(e){var t=e.hero;return r.a.createElement(S.a,{lg:2,md:4,sm:6,className:"hero-box my-5"},r.a.createElement(g.b,{to:"/hero/".concat(t.id),style:{textDecoration:"none",color:"grey"}},r.a.createElement("div",null,r.a.createElement("img",{src:t.thumbnail.path+"/standard_large."+t.thumbnail.extension,alt:"hero",className:"neumorphism-1"})),r.a.createElement("br",null),r.a.createElement("button",{className:"my-2 neumorphism-1 p-1 "},t.name)))},C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).renderNumber=function(){if(a.props.heros)return r.a.createElement("div",{variant:"primary",className:"neumorphism-1 py-3"},a.props.heros.length," of total"," ",a.props.totalNumberOfHero)},a.renderHeroList=function(){return a.props.heros?a.props.heros.map(function(e){return r.a.createElement(H,{hero:e,key:e.id})}):r.a.createElement(E.a,{animation:"border"})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getHeros()}},{key:"renderLoadMoreButton",value:function(){var e=this;if(this.props.heros&&this.props.heros.length<this.props.totalNumberOfHero)return r.a.createElement(v.a,{variant:"light",onClick:function(){return e.props.getHeros(e.props.heros.length)},className:"my-4"},"Load more"," ")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,this.renderHeroList()),this.renderNumber(),this.renderLoadMoreButton())}}]),t}(n.Component),L={getHeros:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var t=Object(N.a)(j.a.mark(function t(a,n){var r;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("/characters",{params:{offset:e}});case 2:r=t.sent,a({type:"GET_HEROS",payload:r.data.data});case 4:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}},_=Object(c.b)(function(e){return{heros:Object.values(e.heros),totalNumberOfHero:e.totalNumberOfHero}},L)(C),D=a(101),V=a(102),T=a(59),A=(a(91),function(e){var t=Object(n.useState)({}),a=Object(T.a)(t,2),s=a[0],o=a[1];Object(n.useEffect)(function(){!function(){var t=Object(N.a)(j.a.mark(function t(){var a;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("/characters/".concat(e.heroId,"/").concat(e.typeOfList));case 2:a=t.sent,o(a.data.data);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},[]);return r.a.createElement("div",{className:"mb-5"},r.a.createElement("h5",null,"Appear in ",s.total," ",e.typeOfList),r.a.createElement("div",{className:"list"},s.results?s.results.map(function(e){return r.a.createElement("div",{className:"media mb-2",style:{textAlign:"left"},key:e.id},r.a.createElement("img",{src:e.thumbnail.path+"/standard_medium."+e.thumbnail.extension,alt:"comic",className:"mr-3",height:"64px",width:"64px"}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h6",{className:"mt-0 mb-1"},e.title),e.description))}):r.a.createElement(E.a,{animation:"grow",variant:"primary"})))}),I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={details:{}},a.componentDidMount=Object(N.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.props.getHero(a.props.match.params.id),!a.props.hero){e.next=7;break}return e.next=4,w.a.get(a.props.hero.urls[0].url);case 4:t=e.sent,console.log(t.data),console.log(a.props.hero);case 7:case"end":return e.stop()}},e)})),a.componentDidUpdate=function(){a.props.hero||a.props.getHero(a.props.match.params.id)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){if(this.props.hero){var e=this.props.hero;return r.a.createElement("div",{className:"mb-5",style:{color:"grey"}},r.a.createElement("div",{className:"sticky-top p-2",style:{backgroundColor:"#dde1e7"}},r.a.createElement("h2",null,e.name)),r.a.createElement("img",{alt:"hero",src:e.thumbnail.path+"/detail."+e.thumbnail.extension,className:"my-3 neumorphism-1"}),r.a.createElement("div",{className:"m-3"},e.description),r.a.createElement("h3",null,"Appearance"),r.a.createElement(D.a,{className:"my-3 neumorphism-1",defaultActiveKey:"0"},r.a.createElement(V.a,null,r.a.createElement(V.a.Header,null,r.a.createElement(D.a.Toggle,{eventKey:"0"},"Comics")),r.a.createElement(D.a.Collapse,{eventKey:"0"},r.a.createElement(V.a.Body,{className:"neumorphism-2"},r.a.createElement(A,{typeOfList:"comics",heroId:this.props.match.params.id})))),r.a.createElement(V.a,null,r.a.createElement(V.a.Header,null,r.a.createElement(D.a.Toggle,{eventKey:"1"},"Events")),r.a.createElement(D.a.Collapse,{eventKey:"1"},r.a.createElement(V.a.Body,{className:"neumorphism-2"},r.a.createElement(A,{heroId:this.props.match.params.id,typeOfList:"events"})))),r.a.createElement(V.a,null,r.a.createElement(V.a.Header,null,r.a.createElement(D.a.Toggle,{eventKey:"2"},"Series")),r.a.createElement(D.a.Collapse,{eventKey:"2"},r.a.createElement(V.a.Body,{className:"neumorphism-2"},r.a.createElement(A,{heroId:this.props.match.params.id,typeOfList:"series"}))))))}return r.a.createElement("div",null,"Loading ...")}}]),t}(n.Component),B={getHero:function(e){return function(){var t=Object(N.a)(j.a.mark(function t(a,n){var r;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("/characters/".concat(e));case 2:r=t.sent,a({type:"GET_HERO",payload:r.data.data});case 4:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}},K=Object(c.b)(function(e,t){return{hero:e.heros[t.match.params.id]}},B)(I),R=function(){var e=Object(b.f)();return r.a.createElement("h1",{style:{marginTop:"5%",marginBottom:"5%",textDecoration:"none",cursor:"pointer"},onClick:function(){e.push("/")}},"Marvel Wikipedia")},M=a(103),G=(a(92),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={totalSuggestions:0,baseSugestion:[],suggestion:[],formValue:"",isLoadingData:!1},a.renderSuggestion=function(){return a.state.suggestion.map(function(e){return r.a.createElement(g.b,{onClick:function(){a.setState({suggestion:[],formValue:""})},to:"/hero/".concat(e.id),key:e.id},r.a.createElement(v.a,{variant:"outline-dark",className:"m-2 "},e.name))})},a.handleInputChange=function(){var e=Object(N.a)(j.a.mark(function e(t){var n,r,s;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.setState({formValue:t.target.value}),3!==(n=t.target.value).length){e.next=10;break}return a.setState({isLoadingData:!0}),e.next=6,x.get("/characters",{params:{nameStartsWith:t.target.value,limit:50}});case 6:r=e.sent,a.setState({baseSugestion:r.data.data.results,totalSuggestions:r.data.data.total,suggestion:r.data.data.results,isLoadingData:!1}),e.next=11;break;case 10:n.length>3?(s=a.state.baseSugestion.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())}),a.setState({suggestion:s})):0===n.length&&a.setState({suggestion:[]});case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"renderButton",value:function(){var e=this;return!this.state.isLoadingData&&this.state.suggestion.length>0?r.a.createElement("button",{onClick:function(){e.setState({suggestion:[],formValue:""})}},"close suggestion"):this.state.isLoadingData&&this.state.formValue.length>0?r.a.createElement("button",null,r.a.createElement(E.a,{animation:"border",as:"span",size:"sm"})):this.state.formValue.length>=3&&0===this.state.suggestion.length?r.a.createElement("p",null,"No result for "+this.state.formValue):null}},{key:"renderInputWarning",value:function(){if(this.state.formValue.length>=1&&this.state.formValue.length<3)return r.a.createElement(M.a,{variant:"danger"},"Enter ".concat(3-this.state.formValue.length," more characters"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"mb-5"},r.a.createElement("input",{placeholder:"Search for ...","aria-describedby":"basic-addon2",autoComplete:"off",value:this.state.formValue,onChange:this.handleInputChange,className:"mb-3"}),this.renderInputWarning(),r.a.createElement("div",{className:"",style:{textAlign:"left"}},this.renderSuggestion()),this.renderButton())}}]),t}(n.Component)),W=(a(93),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{style:{textAlign:"center"}},r.a.createElement(g.a,{basename:"/"},r.a.createElement(R,null),r.a.createElement(G,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,component:_}),r.a.createElement(b.a,{path:"/hero/:id",exact:!0,component:K}))))}}]),t}(n.Component)),U=a(43),J=a(28),X=a(58),q=Object(l.c)({heros:function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_HEROS":return Object(U.a)({},a,(e=n.payload.results,t="id",Object.assign.apply(Object,[{}].concat(Object(X.a)(e.map(function(e){return Object(J.a)({},e[t],e)}))))));case"GET_HERO":return Object(U.a)({},a,Object(J.a)({},n.payload.results[0].id,n.payload.results[0]));default:return a}},totalNumberOfHero:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_HEROS":return t.payload.total;default:return e}}}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,F=Object(l.e)(q,z(Object(l.a)(i.a)));o.a.render(r.a.createElement(c.a,{store:F},r.a.createElement(W,null)),document.querySelector("#root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.2988c7b3.chunk.js.map