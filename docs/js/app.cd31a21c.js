(function(t){function e(e){for(var a,s,u=e[0],o=e[1],c=e[2],d=0,p=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,u=1;u<n.length;u++){var o=n[u];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/tasks-app-prototype/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0964":function(t,e,n){"use strict";n("672c")},"276b":function(t,e,n){"use strict";n("dc6a")},"2ab4":function(t,e,n){},3671:function(t,e,n){"use strict";n("f771")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"app-content"},[n("router-view")],1)])},i=[],s=(n("034f"),n("2877")),u={},o=Object(s["a"])(u,r,i,!1,null,null,null),c=o.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g_page"},[n("div",{staticClass:"g_page-body"},[n("div",{staticClass:"g_page-header"},[n("h2",{staticClass:"g_page-header-title"},[t._v(" "+t._s(t.id?"Update Task":"Add Task")+" ")])]),n("div",{staticClass:"g_page-content"},[n("text-field",{staticStyle:{margin:"0 0 15px"},attrs:{isRequired:!0,label:"Title"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("text-field",{staticStyle:{height:"150px",margin:"0 0 15px"},attrs:{label:"Notes",type:"textArea"},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}}),n("date-time-picker",{attrs:{label:"Due Date"},model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}})],1)]),n("task-bar",{scopedSlots:t._u([{key:"left-content",fn:function(){return[n("button",{staticClass:"g_back-btn",on:{click:t.onBack}},[n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M15.535 3.515L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.929L15.535 3.515Z"}})])])]},proxy:!0}])},[n("button",{staticClass:"add-btn",attrs:{disabled:""===t.title},on:{click:t.onAdd}},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M9.52495 17.657L4.57495 12.707L5.98895 11.293L9.64295 14.943L9.52495 14.828L18.01 6.343L19.424 7.757L10.939 16.243L9.52595 17.656L9.52495 17.657Z"}})]),t._v(" "+t._s(t.id?"Update":"Add")+" ")])])],1)},p=[],f=n("5530"),v=n("1da1"),h=(n("96cf"),n("d3b7"),n("25f0"),n("4de4"),n("d81d"),n("1315")),m=n("11c1"),g=function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,localStorage.getItem("task_app");case 2:return e=t.sent,t.abrupt("return",e?JSON.parse(e):{tasks:[]});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,localStorage.setItem("task_app",JSON.stringify(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w={tasks:{create:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(f["a"])(Object(f["a"])({},e),{},{created:h["DateTime"].now().toString(),id:Object(m["v4"])(),updated:h["DateTime"].now().toString()}),t.next=3,g();case 3:return a=t.sent,a.tasks.push(n),t.next=7,b(a);case 7:return t.abrupt("return",n);case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),delete:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:return n=t.sent,n.tasks=n.tasks.filter((function(t){return t.id!==e})),t.next=6,b(n);case 6:return t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),getAll:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:return e=t.sent,t.abrupt("return",e.tasks);case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getById:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:return n=t.sent,t.abrupt("return",n.tasks.filter((function(t){return t.id===e}))[0]);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),update:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(e){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:return n=t.sent,n.tasks=n.tasks.map((function(t){return t.id===e.id?(a=Object(f["a"])(Object(f["a"])(Object(f["a"])({},t),e),{},{updated:h["DateTime"].now().toString()}),a):t})),t.next=6,b(n);case 6:return t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}},k=w,x=k,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("text-field",{attrs:{label:t.label},on:{focus:t.onClick},model:{value:t.formattedValue,callback:function(e){t.formattedValue=e},expression:"formattedValue"}}),n("datetime",{ref:"dateTime",attrs:{"input-class":"input",type:"datetime"},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1)},y=[],C=n("859b"),V=(n("d355"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c_text-field"},[t.label?n("label",[t._v(t._s(t.label))]):t._e(),"textArea"===t.type?n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],domProps:{value:t.inputVal},on:{blur:t.onBlur,focus:t.onFocus,input:function(e){e.target.composing||(t.inputVal=e.target.value)}}}):"checkbox"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.inputVal)?t._i(t.inputVal,null)>-1:t.inputVal},on:{blur:t.onBlur,focus:t.onFocus,change:function(e){var n=t.inputVal,a=e.target,r=!!a.checked;if(Array.isArray(n)){var i=null,s=t._i(n,i);a.checked?s<0&&(t.inputVal=n.concat([i])):s>-1&&(t.inputVal=n.slice(0,s).concat(n.slice(s+1)))}else t.inputVal=r}}}):"radio"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{type:"radio"},domProps:{checked:t._q(t.inputVal,null)},on:{blur:t.onBlur,focus:t.onFocus,change:function(e){t.inputVal=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{type:t.type},domProps:{value:t.inputVal},on:{blur:t.onBlur,focus:t.onFocus,input:function(e){e.target.composing||(t.inputVal=e.target.value)}}}),t.error?n("span",{staticClass:"error"},[t._v(" "+t._s(t.error)+" ")]):t._e()])}),O=[],L={name:"TextField",data:function(){return{error:null,touched:!1}},props:{isRequired:{default:function(){return!1},type:Boolean},label:String,type:{default:function(){return"text"},type:String},value:{default:function(){return""},type:String}},methods:{onBlur:function(){this.validate(),this.$emit("blur")},onFocus:function(){this.touched||(this.touched=!0),this.$emit("focus")},validate:function(){var t=!0;this.touched&&(this.isRequired&&""===this.inputVal?(this.error=this.label?"".concat(this.label," is required"):"Field is required",t=!1):this.error=null),this.isValid=t}},computed:{inputVal:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},watch:{value:function(){this.validate()}}},D=L,T=(n("fced"),Object(s["a"])(D,V,O,!1,null,"0d8fc569",null)),j=T.exports,H={name:"DateTimePicker",components:{Datetime:C["Datetime"],TextField:j},props:{label:String,value:{default:function(){},type:String}},computed:{formattedValue:function(){return this.value?h["DateTime"].fromISO(this.value).toFormat("ff"):null},localValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{onClick:function(){this.$refs.dateTime.isOpen=!0}}},S=H,R=(n("276b"),Object(s["a"])(S,_,y,!1,null,null,null)),B=R.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c_task-bar"},[n("div",{staticClass:"left-content"},[t._t("left-content")],2),n("div",{staticClass:"main-content"},[t._t("default")],2),n("div",{staticClass:"right-content"},[t._t("right-content")],2)])},$=[],Z={name:"TaskBar"},A=Z,F=(n("3671"),Object(s["a"])(A,M,$,!1,null,"12629546",null)),I=F.exports,P={name:"AddTask",components:{DateTimePicker:B,TaskBar:I,TextField:j},data:function(){return{dueDate:void 0,notes:"",title:""}},computed:{id:function(){var t,e;return null===(t=this.$route)||void 0===t||null===(e=t.params)||void 0===e?void 0:e.id}},mounted:function(){this.getTask()},methods:{getTask:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.id){e.next=7;break}return e.next=3,x.tasks.getById(t.id);case 3:n=e.sent,t.dueDate=n.dueDate,t.notes=n.notes,t.title=n.title;case 7:case"end":return e.stop()}}),e)})))()},onAdd:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""===t.title){e.next=10;break}if(n={dueDate:t.dueDate,notes:t.notes,title:t.title},!t.id){e.next=7;break}return e.next=5,x.tasks.update(Object(f["a"])(Object(f["a"])({},n),{},{id:t.id}));case 5:e.next=9;break;case 7:return e.next=9,x.tasks.create(n);case 9:t.$router.go(-1);case 10:case"end":return e.stop()}}),e)})))()},onBack:function(){this.$router.go(-1)}}},N=P,E=(n("8762"),Object(s["a"])(N,d,p,!1,null,"38fe02e2",null)),q=E.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g_page"},[n("div",{staticClass:"g_page-body"},[t._m(0),n("div",{staticClass:"g_page-content"},[void 0===t.items?n("span",{staticClass:"g_message"},[t._v("Loading...")]):0===t.items.length?n("span",{staticClass:"g_message"},[t._v("No Tasks")]):n("ul",{staticClass:"list"},[t._l(t.items,(function(e){return["section-header"===e.type?n("li",{key:e.id,staticClass:"section-header"},[t._v(" "+t._s(e.label)+" ")]):n("list-item",{key:e.id,attrs:{subTitle:t.formatDueDate(e.dueDate),title:e.title,to:"/"+e.id}})]}))],2)])]),n("task-bar",[n("router-link",{staticClass:"add-btn",attrs:{to:"/add-task"}},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M13 13V19H11V13H5V11H11V5H13V11H19V13H13Z"}})])])],1)],1)},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g_page-header"},[n("h2",{staticClass:"g_page-header-title"},[t._v("Tasks")])])}],z=n("2909"),G=n("b85c"),K=n("3835"),Q=(n("159b"),n("4e82"),n("4fad"),n("99af"),n("fb6a"),n("ddb0"),function(t){var e;return e=t?h["DateTime"].fromISO(t):h["DateTime"].now(),e.startOf("day").toString()}),W=function(t){var e=h["DateTime"].fromISO(t);return e.toFormat("HH:mm")},X=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=h["DateTime"].fromISO(t);return e?"".concat(n.toFormat("ccc, d LLL yyyy"),", ").concat(W(t)):h["DateTime"].fromISO(t).toFormat("cccc d LLLL yy")},Y=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},tt=function(t){var e=h["DateTime"].fromISO(t),n=h["DateTime"].now().startOf("day"),a=e.diff(n,"days");a.toObject();var r,i=a.values.days;return i<=1&&(r=Y(e.toRelativeCalendar())),i>1&&i<=7&&(r="".concat(e.toFormat("cccc"))),i>7&&(r=X(t,!1)),r},et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"c_list-item"},[n("router-link",{staticClass:"text",attrs:{to:t.to}},[n("span",{staticClass:"title"},[t._v(t._s(t.title))]),t.subTitle?n("span",{staticClass:"due-date"},[t._v(t._s(t.subTitle))]):t._e()]),n("router-link",{attrs:{to:t.to+"/update"}},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4.41999 20.579C4.13948 20.5785 3.87206 20.4602 3.68299 20.253C3.49044 20.0475 3.39476 19.7695 3.41999 19.489L3.66499 16.795L14.983 5.481L18.52 9.017L7.20499 20.33L4.51099 20.575C4.47999 20.578 4.44899 20.579 4.41999 20.579ZM19.226 8.31L15.69 4.774L17.811 2.653C17.9986 2.46522 18.2531 2.35971 18.5185 2.35971C18.7839 2.35971 19.0384 2.46522 19.226 2.653L21.347 4.774C21.5348 4.96157 21.6403 5.21609 21.6403 5.4815C21.6403 5.74691 21.5348 6.00143 21.347 6.189L19.227 8.309L19.226 8.31Z"}})])])],1)},nt=[],at={name:"ListItem",props:{subTitle:String,title:{required:!0,type:String},to:{required:!0,type:String}}},rt=at,it=(n("ffc4"),Object(s["a"])(rt,et,nt,!1,null,"a6573d8a",null)),st=it.exports,ut={name:"Home",components:{ListItem:st,TaskBar:I},data:function(){return{items:void 0}},methods:{formatDueDate:function(t){if(t)return X(t)}},mounted:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i,s,u,o,c,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.tasks.getAll();case 2:n=e.sent,a=[],r={},i=[],n.forEach((function(t){if(t.dueDate){var e=Q(t.dueDate);void 0===r[e]&&(r[e]=[]),r[e].push(t)}else i.push(t)})),s=Object.entries(r).sort((function(t,e){var n=Object(K["a"])(t,1),a=n[0],r=Object(K["a"])(e,1),i=r[0];return a<i?-1:a>i?1:0})),u=Object(G["a"])(s);try{for(u.s();!(o=u.n()).done;)c=Object(K["a"])(o.value,2),l=c[0],d=c[1],a.push({label:tt(l),type:"section-header"}),d.sort((function(t,e){return t.dueDate<e.dueDate?-1:t.dueDate>e.dueDate?1:0})),a.push.apply(a,Object(z["a"])(d))}catch(p){u.e(p)}finally{u.f()}i.length>0&&(a.push({label:"No Due Date",type:"section-header"}),a.push.apply(a,i)),t.items=a;case 12:case"end":return e.stop()}}),e)})))()}},ot=ut,ct=(n("0964"),Object(s["a"])(ot,J,U,!1,null,"174f887a",null)),lt=ct.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g_page"},[n("div",{staticClass:"g_page-body"},[n("div",{staticClass:"g_page-header"},[n("h2",{staticClass:"g_page-header-title"},[t._v(t._s(t.title))])]),n("div",{staticClass:"g_page-content"},[n("div",{staticClass:"section"},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M15 19H3V17H15V19ZM21 15H3V13H21V15ZM15 11H3V9H15V11ZM21 7H3V5H21V7Z"}})]),n("p",{staticClass:"notes"},[t._v(t._s(t.notes))])]),n("div",{staticClass:"section"},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM11 18.414L7.293 14.707L8.707 13.293L11 15.586L15.293 11.293L16.707 12.707L11 18.413V18.414Z"}})]),n("div",{staticClass:"date-text"},[n("p",{staticClass:"due-date"},[t._v(t._s(t.dueDate||"No Due Date"))]),t.fullDueDate?n("p",{staticClass:"full-due-date"},[t._v(t._s(t.fullDueDate))]):t._e()])])])]),n("task-bar",{scopedSlots:t._u([{key:"left-content",fn:function(){return[n("router-link",{staticClass:"g_back-btn",attrs:{to:"/"}},[n("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M15.535 3.515L7.04999 12L15.535 20.485L16.95 19.071L9.87799 12L16.95 4.929L15.535 3.515Z"}})])])]},proxy:!0},t.task?{key:"right-content",fn:function(){return[n("router-link",{staticClass:"action-btn",attrs:{to:"/"+t.task.id+"/update"}},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4.41999 20.579C4.13948 20.5785 3.87206 20.4602 3.68299 20.253C3.49044 20.0475 3.39476 19.7695 3.41999 19.489L3.66499 16.795L14.983 5.481L18.52 9.017L7.20499 20.33L4.51099 20.575C4.47999 20.578 4.44899 20.579 4.41999 20.579ZM19.226 8.31L15.69 4.774L17.811 2.653C17.9986 2.46522 18.2531 2.35971 18.5185 2.35971C18.7839 2.35971 19.0384 2.46522 19.226 2.653L21.347 4.774C21.5348 4.96157 21.6403 5.21609 21.6403 5.4815C21.6403 5.74691 21.5348 6.00143 21.347 6.189L19.227 8.309L19.226 8.31Z"}})])]),n("button",{staticClass:"action-btn",on:{click:t.deleteTask}},[n("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M17 22H7C5.89543 22 5 21.1046 5 20V7H3V5H7V4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V5H21V7H19V20C19 21.1046 18.1046 22 17 22ZM7 7V20H17V7H7ZM9 4V5H15V4H9Z"}})])])]},proxy:!0}:null],null,!0)})],1)},pt=[],ft={name:"Task",components:{TaskBar:I},data:function(){return{task:void 0}},computed:{dueDate:function(){var t;if(null!==(t=this.task)&&void 0!==t&&t.dueDate){var e,n,a=h["DateTime"].fromISO(null===(e=this.task)||void 0===e?void 0:e.dueDate).toRelativeCalendar(),r=W(null===(n=this.task)||void 0===n?void 0:n.dueDate);return"Due ".concat(a," at ").concat(r)}return null},fullDueDate:function(){var t,e;return null!==(t=this.task)&&void 0!==t&&t.dueDate?X(null===(e=this.task)||void 0===e?void 0:e.dueDate):null},id:function(){var t,e;return null===(t=this.$route)||void 0===t||null===(e=t.params)||void 0===e?void 0:e.id},notes:function(){var t;return null!==(t=this.task)&&void 0!==t&&t.notes?this.task.notes:"No notes"},title:function(){var t,e;return null!==(t=null===(e=this.task)||void 0===e?void 0:e.title)&&void 0!==t?t:""}},mounted:function(){this.getTask()},methods:{getTask:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.id){e.next=5;break}return e.next=3,x.tasks.getById(t.id);case 3:n=e.sent,t.task=n;case 5:case"end":return e.stop()}}),e)})))()},deleteTask:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.id){e.next=4;break}return e.next=3,x.tasks.delete(t.id);case 3:t.$router.go(-1);case 4:case"end":return e.stop()}}),e)})))()}}},vt=ft,ht=(n("5dce"),Object(s["a"])(vt,dt,pt,!1,null,"f4a8f6f8",null)),mt=ht.exports;a["a"].use(l["a"]);var gt=[{path:"/",name:"Home",component:lt},{path:"/add-task",name:"AddTask",component:q},{path:"/:id",name:"Task",component:mt},{path:"/:id/update",name:"UpdateTask",component:q}],bt=new l["a"]({mode:"history",base:"/tasks-app-prototype/",routes:gt}),wt=bt,kt=wt;a["a"].config.productionTip=!1,new a["a"]({router:kt,render:function(t){return t(c)}}).$mount("#app")},"5dce":function(t,e,n){"use strict";n("e4ba")},"60d6":function(t,e,n){},"672c":function(t,e,n){},"85ec":function(t,e,n){},8762:function(t,e,n){"use strict";n("60d6")},c71e:function(t,e,n){},dc6a:function(t,e,n){},e4ba:function(t,e,n){},f771:function(t,e,n){},fced:function(t,e,n){"use strict";n("2ab4")},ffc4:function(t,e,n){"use strict";n("c71e")}});
//# sourceMappingURL=app.cd31a21c.js.map