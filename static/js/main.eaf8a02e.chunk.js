(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(26),r=n(8),a=n(3),s=(n(36),n(37),n(0)),l=n.n(s),i=(n(38),n(4)),o=n(10),j=n.n(o),u=n(1),d=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},b=function(){var e=Object(r.d)(),t=Object(i.a)(e,1)[0];return Object(u.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"navbar-brand",children:[Object(u.jsx)(r.c,{to:"/",className:d,children:"Home"}),Object(u.jsx)(r.c,{to:"/people?".concat(t.toString()),className:d,children:"People"})]})})})},h=function(){return Object(u.jsxs)("div",{"data-cy":"app",children:[Object(u.jsx)(b,{}),Object(u.jsx)("main",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(a.b,{})})})]})},O=n(5),p=n(7),x="https://mate-academy.github.io/react_people-table/api/people.json";function m(e){return new Promise((function(t){return setTimeout(t,e)}))}function f(){return(f=Object(p.a)(Object(O.a)().mark((function e(){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m(500).then((function(){return fetch(x)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(e){return e.NoError="",e.LoadError="Unable to load people",e.SomethingWentWrong="Something went wrong",e.NoPeople="There are no people on the server",e.NoMatch="There are no people matching the current search criteria",e}({}),g=n(9),N=n(15),y=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({}),w="f",S="m",L=["16","17","18","19","20"],k={query:null,centuries:null,sex:null},M=["Name","Sex","Born","Died"],P=function(e,t){return null===e||void 0===e?void 0:e.toLowerCase().includes(t)},A=l.a.createContext({peopleList:[],isLoading:!1,errorMessage:""}),E=function(e){var t=e.children,n=Object(s.useState)([]),c=Object(i.a)(n,2),r=c[0],a=c[1],l=Object(s.useState)(!1),o=Object(i.a)(l,2),j=o[0],d=o[1],b=Object(s.useState)(v.NoError),h=Object(i.a)(b,2),O=h[0],p=h[1];Object(s.useEffect)((function(){d(!0),function(){return f.apply(this,arguments)}().then((function(e){a(function(e){return e.map((function(t){return Object(N.a)(Object(N.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}))}(e))})).catch((function(){p(v.LoadError)})).finally((function(){d(!1)}))}),[]);var x=Object(s.useMemo)((function(){return{peopleList:r,isLoading:j,errorMessage:O}}),[r,j,O]);return Object(u.jsx)(A.Provider,{value:x,children:t})},F=function(){return Object(u.jsx)("h1",{className:"title",children:"Home Page"})};function C(e,t){var n=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(i.a)(e,2),c=t[0],r=t[1];null===r?n.delete(c):Array.isArray(r)?(n.delete(c),r.forEach((function(e){n.append(c,e)}))):n.set(c,r)})),n.toString()}var q=function(e){return e.Male="Male",e.Female="Female",e.All="All",e}({}),_=n(27),B=["children","params"],T=function(e){var t=e.children,n=e.params,c=Object(_.a)(e,B),a=Object(r.d)(),s=Object(i.a)(a,1)[0];return Object(u.jsx)(r.b,Object(N.a)(Object(N.a)({to:{search:C(s,n)}},c),{},{children:t}))},W=function(e,t){return{centuries:e.includes(t)?e.filter((function(e){return e!==t})):[].concat(Object(g.a)(e),[t])}},D=function(){var e=Object(r.d)(),t=Object(i.a)(e,2),n=t[0],c=t[1],a=n.get("query")||"",s=n.getAll("centuries")||[],l=n.get("sex")||null;return Object(u.jsxs)("nav",{className:"panel",children:[Object(u.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(u.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(u.jsx)(T,{className:j()({"is-active":null===l}),params:{sex:null},children:q.All}),Object(u.jsx)(T,{className:j()({"is-active":l===S}),params:{sex:S},children:q.Male}),Object(u.jsx)(T,{className:j()({"is-active":l===w}),params:{sex:w},children:q.Female})]}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsxs)("p",{className:"control has-icons-left",children:[Object(u.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:a,onChange:function(e){var t={query:e.target.value||null},r=C(n,t);c(r)}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(u.jsx)("div",{className:"level-left",children:L.map((function(e){return Object(u.jsx)(T,{"data-cy":"century",className:j()("button mr-1",{"is-info":s.includes(e)}),params:W(s,e),children:e},e)}))}),Object(u.jsx)("div",{className:"level-right ml-4",children:Object(u.jsx)(T,{"data-cy":"centuryALL",className:"button is-success is-outlined",params:{centuries:null},children:"All"})})]})}),Object(u.jsx)("div",{className:"panel-block",children:Object(u.jsx)(T,{className:"button is-link is-outlined is-fullwidth",params:k,children:"Reset all filters"})})]})},R=(n(40),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),H=function(e){var t=e.person,n=t.name,c=t.sex,a=t.slug,s=Object(r.d)(),l=Object(i.a)(s,1)[0];return Object(u.jsx)(r.b,{className:j()({"has-text-danger":c===w}),to:"/people/".concat(a,"?").concat(l.toString()),children:n})},J=function(e){var t=e.person,n=e.peopleSlug,c=t.slug,r=t.sex,a=t.born,s=t.died,l=t.motherName,i=t.fatherName,o=t.mother,d=t.father;return Object(u.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":n===c}),children:[Object(u.jsx)("td",{children:Object(u.jsx)(H,{person:t})}),Object(u.jsx)("td",{children:r}),Object(u.jsx)("td",{children:a}),Object(u.jsx)("td",{children:s}),Object(u.jsx)("td",{children:o?Object(u.jsx)(H,{person:o}):l||"-"}),Object(u.jsx)("td",{children:d?Object(u.jsx)(H,{person:d}):i||"-"})]})},U=function(){var e=Object(r.d)(),t=Object(i.a)(e,1)[0],n=t.get("sort")||null,c=t.get("order")||null,a="desc"===c,s=function(e){return n===e?c?null:"desc":null},l=function(e){return n===e&&a?null:e};return Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[M.map((function(e){var t=e.toLowerCase(),c=n===t;return Object(u.jsx)("th",{children:Object(u.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e,Object(u.jsx)(T,{params:{sort:l(t)||null,order:s(t)||null},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:j()("fas",{"fa-sort":!c,"fa-sort-up":c&&!a,"fa-sort-down":c&&a})})})})]})},e)})),Object(u.jsx)("th",{children:"Mother"}),Object(u.jsx)("th",{children:"Father"})]})})},I=function(){var e=Object(s.useContext)(A).peopleList,t=Object(r.d)(),n=Object(i.a)(t,1)[0],c=Object(a.r)().peopleSlug,l=n.get("query")||"",o=function(e,t){var n=t.sex,c=t.query,r=t.centuries,a=t.sort,s=t.order,l=e;return n===S&&(l=l.filter((function(e){return e.sex===S}))),n===w&&(l=l.filter((function(e){return e.sex===w}))),c&&(l=l.filter((function(e){var t=c.trim().toLowerCase();if(""===t)return!1;var n=P(e.name,t),r=P(e.motherName,t),a=P(e.fatherName,t);return n||r||a}))),r.length&&(l=l.filter((function(e){var t="".concat(Math.ceil(e.born/100));return r.includes(t)}))),l=Object(g.a)(l).sort((function(e,t){switch(a){case y.Name:case y.Sex:return e[a].localeCompare(t[a]);case y.Born:case y.Died:return e[a]-t[a];default:return 0}})),s&&l.reverse(),l}(e,{sex:n.get("sex"),query:l,centuries:n.getAll("centuries")||[],sort:n.get("sort")||null,order:n.get("order")||null});return Object(u.jsxs)(u.Fragment,{children:[!o.length&&Object(u.jsx)("p",{children:v.NoMatch}),Object(u.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(u.jsx)(U,{}),Object(u.jsx)("tbody",{children:o.map((function(e){return Object(u.jsx)(J,{person:e,peopleSlug:c},e.slug)}))})]})]})},z=function(){var e=Object(s.useContext)(A),t=e.peopleList,n=e.isLoading,c=e.errorMessage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"title",children:"People Page"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(u.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:!!t.length&&Object(u.jsx)(D,{})}),Object(u.jsx)("div",{className:"column",children:Object(u.jsxs)("div",{className:"box table-container",children:[n&&Object(u.jsx)(R,{}),c===v.LoadError&&Object(u.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:v.SomethingWentWrong}),!t.length&&!n&&Object(u.jsx)("p",{"data-cy":"noPeopleMessage",children:v.NoPeople}),!!t.length&&Object(u.jsx)(I,{})]})})]})})]})},G=function(){return Object(u.jsx)("h1",{className:"title",children:"Page not found"})};Object(c.createRoot)(document.getElementById("root")).render(Object(u.jsx)(E,{children:Object(u.jsx)(r.a,{children:Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.c,{path:"/",element:Object(u.jsx)(h,{}),children:[Object(u.jsx)(a.c,{index:!0,element:Object(u.jsx)(F,{})}),Object(u.jsx)(a.c,{path:"home",element:Object(u.jsx)(a.a,{to:"/",replace:!0})}),Object(u.jsx)(a.c,{path:"people/:peopleSlug?",element:Object(u.jsx)(z,{})}),Object(u.jsx)(a.c,{path:"*",element:Object(u.jsx)(G,{})})]})})})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.eaf8a02e.chunk.js.map