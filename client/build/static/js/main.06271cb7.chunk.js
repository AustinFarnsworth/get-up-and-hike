(this["webpackJsonpget-up-and-hike"]=this["webpackJsonpget-up-and-hike"]||[]).push([[0],{41:function(e,t,a){},50:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(33),r=a.n(n),o=(a(41),a(11)),i=a(0);var l=function(){var e=localStorage.getItem("user");return Object(i.jsxs)("div",{className:"nav-bar",children:[Object(i.jsxs)("div",{className:"left",children:[" ",e?Object(i.jsxs)("h4",{children:["Welcome ",localStorage.getItem("firstName")," ",localStorage.getItem("lastName")]}):Object(i.jsx)("h4",{})]}),Object(i.jsxs)("div",{className:"center",children:[Object(i.jsx)(o.b,{to:"/",className:"nav-links",children:"Home"}),Object(i.jsx)(o.b,{to:"about",className:"nav-links",children:"About"}),Object(i.jsx)(o.b,{to:"create",className:"nav-links",children:"Create Post"}),Object(i.jsx)(o.b,{to:"login",className:"nav-links",children:"Login"})]}),Object(i.jsxs)("div",{className:"right",children:[Object(i.jsx)("input",{className:"search"}),Object(i.jsx)("i",{className:" search-icon fas fa-search"})]})]})},u=(a(50),a(2)),j=a(4),b=a.n(j),d=a(8),h=a(3),p=a(13),O=a(15),m=Object(s.createContext)(),g=function(e){var t,a=Object(s.useState)([]),c=Object(h.a)(a,2),n=c[0],r=c[1],o=Object(s.useState)([]),l=Object(h.a)(o,2),u=l[0],j=l[1],b=function(e){j(Object(O.a)(Object(O.a)({},e),{},{user:e}))};return Object(i.jsx)(m.Provider,{value:(t={user:u,setUsers:j,addUsers:b},Object(p.a)(t,"addUsers",b),Object(p.a)(t,"blogPosts",n),Object(p.a)(t,"setBlogPosts",r),Object(p.a)(t,"addBlogPost",(function(e){r(Object(O.a)(Object(O.a)({},e),{},{blogPost:e}))})),t),children:e.children})},x=a(36),f=a.n(x).a.create({baseURL:"http://localhost:5001/posts"}),v=a(18),N=a.n(v);a(70);var w=function(e){var t=Object(u.g)().id,a=Object(s.useContext)(m),c=a.blogPosts,n=a.setBlogPosts,r=Object(s.useState)(),o=Object(h.a)(r,2),l=o[0],j=o[1],p=Object(s.useState)(),O=Object(h.a)(p,2),g=O[0],x=O[1],v=Object(s.useState)(),w=Object(h.a)(v,2),k=w[0],S=w[1],y=Object(s.useState)(),C=Object(h.a)(y,2),P=C[0],I=C[1],_=Object(u.f)(),A=localStorage.getItem("user");Object(s.useEffect)((function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/".concat(t));case 2:a=e.sent,j(a.data.blog_title),x(a.data.post_content),S(a.data.user_id),I(a.data.post_author);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var B=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.delete("/".concat(t));case 3:e.sent,n(c.filter((function(e){return e.id!==t}))),N()({title:"Congrats",text:"Post was deleted",icon:"success"}),_.push("/"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),E=k===A;return Object(i.jsx)("div",{className:"single-post-container",children:Object(i.jsxs)("div",{className:"single-post",children:[Object(i.jsx)("img",{src:"/images/snowy-mountains.jpg",alt:"mountians",className:"card-image"}),Object(i.jsx)("h1",{className:"post-title",children:l}),Object(i.jsxs)("h4",{className:"post-author",children:["Written by: ",P]}),Object(i.jsx)("div",{className:"delete-container",children:Object(i.jsx)("span",{className:"delete",children:E?Object(i.jsx)("i",{onClick:function(){return B(t)},class:"fas fa-trash-alt fa-2x"}):Object(i.jsx)("h4",{})})}),Object(i.jsx)("p",{className:"post-info",children:g})]})})};a(71);var k=function(){var e=Object(s.useContext)(m).addBlogPost,t=Object(s.useState)(""),a=Object(h.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(""),o=Object(h.a)(r,2),l=o[0],j=o[1],p=localStorage.getItem("user"),O=localStorage.getItem("firstName"),g=Object(s.useState)(p),x=Object(h.a)(g,2),v=x[0],w=(x[1],Object(s.useState)(O)),k=Object(h.a)(w,2),S=k[0],y=(k[1],Object(u.f)()),C=function(){var t=Object(d.a)(b.a.mark((function t(a){var s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,f.post("/",{blog_title:c,post_content:l,user_id:v,post_author:S});case 4:s=t.sent,e(s.data.data.post),N()({title:"Congrats",text:"Post was created",icon:"success"}),window.location.reload(!1),y.push("/"),t.next=13;break;case 11:t.prev=11,t.t0=t.catch(1);case 13:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return console.log(v),Object(i.jsxs)("div",{className:"create-post",children:[Object(i.jsx)("h2",{children:"Create Blog Post"}),Object(i.jsxs)("form",{children:[Object(i.jsx)("label",{children:"Blog Title: "}),Object(i.jsx)("input",{type:"text",required:!0,placeholder:"Title",value:c,onChange:function(e){return n(e.target.value)}}),Object(i.jsx)("label",{children:"Post Content:"}),Object(i.jsx)("textarea",{required:!0,placeholder:"Post",value:l,onChange:function(e){return j(e.target.value)}}),Object(i.jsx)("button",{className:"blog-button",type:"submit",onClick:C,children:"Add Blog Post"})]})]})};a(72);var S=function(){return Object(i.jsxs)("div",{className:"about-page",children:[Object(i.jsx)("div",{className:"about-page-left",children:Object(i.jsxs)("div",{className:"about-card",children:[Object(i.jsx)("h2",{children:"About the Creator"}),Object(i.jsx)("h3",{children:"Created By Austin Farnsworth"}),Object(i.jsx)("p",{className:"about-info",children:"Get Up And Hike was built by its creator Austin Farnsworth as a capstone project while attending Devmountain specializing in the Web Development program. It is a full stack app built in the PERN stack, PostgreSQL, Express, React, and Node. Austin wanted to take his love for the outdoors and his new found passion for tech and merge them together."}),Object(i.jsx)("h2",{children:"Feel free to reach out at:"}),Object(i.jsxs)("div",{className:"about-icons",children:[Object(i.jsx)("a",{href:"https://www.linkedin.com/in/austin-farnsworth/",children:Object(i.jsx)("i",{class:"fab fa-linkedin fa-3x linkedin"})}),Object(i.jsx)("a",{href:"https://github.com/AustinFarnsworth",children:Object(i.jsx)("i",{class:"fab fa-github fa-3x github"})}),Object(i.jsx)("a",{href:"https://twitter.com/AustinFarnswor1",children:Object(i.jsx)("i",{class:"fab fa-twitter fa-3x twitter"})})]})]})}),Object(i.jsx)("div",{className:"about-page-right",children:Object(i.jsx)("img",{src:"/images/austin-mountain.jpg",alt:"blog creater",className:"about-pic"})})]})};a(73),a(74);var y=function(){return localStorage.getItem("user"),Object(i.jsxs)("div",{className:"header-component",children:[Object(i.jsx)("div",{className:"header-title",children:Object(i.jsx)("span",{className:"title",children:"Get Up and Hike"})}),Object(i.jsx)("img",{className:"header-image",src:"/images/hiking-header.jpeg",alt:"hikers"})]})},C=(a(75),a(76),function(e){var t=Object(s.useContext)(m),a=t.blogPosts,c=t.setBlogPosts,n=(localStorage.getItem("user"),Object(s.useState)()),r=Object(h.a)(n,2),o=(r[0],r[1],Object(u.f)());Object(s.useEffect)((function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("/");case 3:t=e.sent,c(t.data.data.posts),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var l=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.push("/post/".concat(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"card",children:a.map((function(e){return a.sort((function(e,t){return t.id-e.id})),Object(i.jsxs)("div",{className:"square",children:[Object(i.jsx)("img",{src:"/images/snowy-mountains.jpg",alt:"mountians",className:"card-image"}),Object(i.jsx)("h1",{class:"card-title",children:e.blog_title}),Object(i.jsx)("p",{className:"card-info",children:e.post_content}),Object(i.jsx)("div",{className:"bottom-card-container",children:Object(i.jsx)("a",{onClick:function(){return l(e.id)},className:"card-button",children:"Read More"})})]},e.id)}))})});var P=function(){return Object(i.jsx)("div",{className:"post-container",children:Object(i.jsx)(C,{})})};a(77);var I=function(){return localStorage.getItem("user"),Object(i.jsx)("div",{className:"side-bar",children:Object(i.jsxs)("div",{className:"sidebar-items",children:[Object(i.jsx)("span",{className:"sidebar-title",children:"ABOUT GET UP AND HIKE"}),Object(i.jsx)("img",{className:"sidebar-image",src:"/images/free-hiking-trails-in-Joburg.jpeg",alt:"profile-pic"}),Object(i.jsx)("p",{className:"sidebar-info",children:"This is a community blog designed for hikers and outdoor lovers to come together. A place where you can post about your hiking adventures, things you have learned, or wish you knew before going out in the mountains."})]})})};var _=function(){return Object(i.jsxs)("div",{className:"home-page",children:[Object(i.jsx)(y,{}),Object(i.jsxs)("div",{className:"posts-container",children:[Object(i.jsx)(I,{}),Object(i.jsx)(P,{})]})]})};a(78);var A=function(){var e=Object(s.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(h.a)(n,2),l=r[0],j=r[1],p=(Object(s.useContext)(m),localStorage.getItem("user")),O=Object(u.f)(),g=function(){var e=Object(d.a)(b.a.mark((function e(t){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f.post("/login",{email:a,password:l});case 4:s=e.sent,console.log(s.data.rows[0]),localStorage.setItem("user",JSON.stringify(s.data.rows[0].id)),localStorage.setItem("firstName",s.data.rows[0].first_name),localStorage.setItem("lastName",s.data.rows[0].last_name),O.push("/"),window.location.reload(!1),e.next=15;break;case 13:e.prev=13,e.t0=e.catch(1);case 15:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"login-container",children:Object(i.jsxs)("form",{className:"login-form",children:[Object(i.jsx)("h1",{className:"login-header",children:"Welcome"}),Object(i.jsx)("input",{className:"login-input",type:"Email",placeholder:"Email",onChange:function(e){return c(e.target.value)}}),Object(i.jsx)("input",{className:"login-input",type:"Password",placeholder:"Password",onChange:function(e){return j(e.target.value)}}),Object(i.jsx)("div",{className:"button-container",children:p?Object(i.jsx)("button",{className:"login-button",onClick:function(){localStorage.removeItem("user"),localStorage.removeItem("firstName"),localStorage.removeItem("lastName"),O.push("/"),window.location.reload(!1)},children:"Log Out"}):Object(i.jsx)("button",{className:"login-button",onClick:g,children:"Login"})}),Object(i.jsx)(o.b,{to:"/register",className:"nav-links",children:"Register"})]})})};a(79);var B=function(){var e=Object(s.useContext)(m).addUsers,t=Object(s.useState)(""),a=Object(h.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(""),l=Object(h.a)(r,2),j=l[0],p=l[1],O=Object(s.useState)(""),g=Object(h.a)(O,2),x=g[0],v=g[1],N=Object(s.useState)(""),w=Object(h.a)(N,2),k=w[0],S=w[1],y=Object(u.f)(),C=function(){var t=Object(d.a)(b.a.mark((function t(a){var s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.post("/register",{first_name:c,last_name:j,email:x,password:k});case 3:s=t.sent,e(s.data.data.users),y.push("/login"),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"login-container",children:Object(i.jsxs)("form",{className:"login-form",children:[Object(i.jsx)("h2",{className:"register-header",children:"Register"}),Object(i.jsx)("input",{className:"login-input",type:"text",placeholder:"First Name",onChange:function(e){return n(e.target.value)}}),Object(i.jsx)("input",{className:"login-input",type:"text",placeholder:"Last Name",onChange:function(e){return p(e.target.value)}}),Object(i.jsx)("input",{className:"login-input",type:"email",placeholder:" Your Email",onChange:function(e){return v(e.target.value)}}),Object(i.jsx)("input",{className:"login-input",type:"password",placeholder:"Password",onChange:function(e){return S(e.target.value)}}),Object(i.jsx)("input",{className:"login-input",type:"password",placeholder:"Confirm Password"}),Object(i.jsx)("div",{className:"button-container",children:Object(i.jsx)("button",{className:"login-button",type:"submit",onClick:C,children:"Sign up"})}),Object(i.jsx)(o.b,{to:"/login",className:"nav-links",children:"Login"})]})})};var E=function(){var e=localStorage.getItem("user");return Object(i.jsx)(g,{children:Object(i.jsx)("div",{className:"app",children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(l,{}),Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{exact:!0,path:"/",component:_}),Object(i.jsx)(u.a,{exact:!0,path:"/post/:id",component:w}),Object(i.jsx)(u.a,{exact:!0,path:"/about",component:S}),Object(i.jsx)(u.a,{exact:!0,path:"/create",children:e?Object(i.jsx)(k,{}):Object(i.jsx)(B,{})}),Object(i.jsx)(u.a,{exact:!0,path:"/login",component:A}),Object(i.jsx)(u.a,{exact:!0,path:"/register",component:B})]})]})})})};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.06271cb7.chunk.js.map