(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),i=n.n(s),o=(n(12),n(4)),r=n(6),u=n(0);function l(e){var t=e.todo,n=e.index,a=e.markCompleteTask,c=e.removeTask;return Object(u.jsxs)("div",{className:"task",style:{textDecoration:t.isCompleted?"line-through":""},children:[n+1,".",t.name,"  ",Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"button",onClick:function(){return a(n)},children:"Done"}),Object(u.jsx)("button",{className:"button2",onClick:function(){return c(n)},children:"Clear"})]})]})}function d(e){var t=e.addTask,n=c.a.useState(""),a=Object(r.a)(n,2),s=a[0],i=a[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),""!==s&&(t(s),i(""))},children:["    ",Object(u.jsx)("input",{type:"text",placeholder:"enter new task",value:s,onChange:function(e){return i(e.target.value)}})]})})}var j=function(){var e=c.a.useState([{name:"Play with the app",isCompleted:!1}]),t=Object(r.a)(e,2),n=t[0],a=t[1],s=function(e){var t=Object(o.a)(n);t[e].isCompleted=!0,a(t)},i=function(e){var t=Object(o.a)(n);t.splice(e,1),a(t)};return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("div",{id:"Heading",children:"React Todo App"}),Object(u.jsxs)("div",{className:"list",children:[n.map((function(e,t){return Object(u.jsx)(l,{index:t,todo:e,markCompleteTask:s,removeTask:i},t)})),"     ",Object(u.jsx)(d,{addTask:function(e){a([].concat(Object(o.a)(n),[{name:e,isCompleted:!1}]))}})," "]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.882bd313.chunk.js.map