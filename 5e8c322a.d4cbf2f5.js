(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{137:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||u[d]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),i=n(6),o=(n(0),n(137)),a={id:"index",title:"react-virtuoso",slug:"/api",sidebar_label:"README",hide_title:!0},c={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"react-virtuoso",description:"npm version",source:"@site/docs/api/index.md",slug:"/api",permalink:"/api",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/index.md",version:"current",sidebar_label:"README"},s=[{value:"Get Started",id:"get-started",children:[]},{value:"Grouped Mode",id:"grouped-mode",children:[]},{value:"Grid",id:"grid",children:[]},{value:"Works With Your UI Library of Choice",id:"works-with-your-ui-library-of-choice",children:[]},{value:"Documentation and Demos",id:"documentation-and-demos",children:[]},{value:"Author",id:"author",children:[]},{value:"Contributing",id:"contributing",children:[{value:"Fixes and new Features",id:"fixes-and-new-features",children:[]},{value:"Docs",id:"docs",children:[]}]},{value:"License",id:"license",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{src:"https://user-images.githubusercontent.com/13347/101237112-ec4c6000-36de-11eb-936d-4b6b7ec94976.png",width:"229"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"//badge.fury.io/js/react-virtuoso"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://badge.fury.io/js/react-virtuoso.svg",alt:"npm version"})))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"React Virtuoso")," is the most powerful React virtual list component, full stop. Here's why in no particular order:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Variable sized items out of the box; no manual measurements or hard-coded item heights is necessary;"),Object(o.b)("li",{parentName:"ul"},"Support for ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"//virtuoso.dev/prepend-items/"}),"reverse (bottom up) scrolling and prepending items")," (chat, feeds, etc);"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"//virtuoso.dev/grouped-by-first-letter/"}),"Grouped mode with sticky headers"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"//virtuoso.dev/grid-responsive-columns/"}),"Responsive grid layout"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"//virtuoso.dev/auto-resizing/"}),"Automatic handling of content resize"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"//virtuoso.dev/customize-structure/"}),"Custom Header, Footer, and empty list components"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"//virtuoso.dev/top-items/"}),"Pinned top items"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"//virtuoso.dev/endless-scrolling/"}),"Endless scrolling"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"//virtuoso.dev/press-to-load-more/"}),"press to load more"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"//virtuoso.dev/initial-index/"}),"Initial top most item index"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"//virtuoso.dev/scroll-to-index/"}),"Scroll to index method"),".")),Object(o.b)("p",null,"For live examples and documentation, check the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"//virtuoso.dev"}),"documentation website"),"."),Object(o.b)("h2",{id:"get-started"},"Get Started"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install react-virtuoso\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react'\nimport * as ReactDOM from 'react-dom'\nimport { Virtuoso } from 'react-virtuoso'\n\nconst App = () => {\n  return (\n    <Virtuoso style={{ height: '400px' }} totalCount={200} itemContent={index => <div>Item {index}</div>} />\n  )\n}\n\nReactDOM.render(<App />, document.getElementById('root'))\n")),Object(o.b)("h2",{id:"grouped-mode"},Object(o.b)("a",Object(r.a)({parentName:"h2"},{href:"//virtuoso.dev/grouped-by-first-letter/"}),"Grouped Mode")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"GroupedVirtuoso"),' component is a variant of the "flat" ',Object(o.b)("inlineCode",{parentName:"p"},"Virtuoso"),", with the following differences:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Instead of ",Object(o.b)("inlineCode",{parentName:"li"},"totalCount"),", the component exposes ",Object(o.b)("inlineCode",{parentName:"li"},"groupCounts: number[]")," property, which specifies the amount of items in each group.\nFor example, passing ",Object(o.b)("inlineCode",{parentName:"li"},"[20, 30]")," will render two groups with 20 and 30 items each;"),Object(o.b)("li",{parentName:"ul"},"In addition the ",Object(o.b)("inlineCode",{parentName:"li"},"itemContent")," property, the component requires an additional ",Object(o.b)("inlineCode",{parentName:"li"},"groupContent")," property,\nwhich renders the ",Object(o.b)("strong",{parentName:"li"},"group header"),". The ",Object(o.b)("inlineCode",{parentName:"li"},"groupContent")," callback receives the zero-based group index as a parameter.")),Object(o.b)("h2",{id:"grid"},Object(o.b)("a",Object(r.a)({parentName:"h2"},{href:"//virtuoso.dev/grid-responsive-columns/"}),"Grid")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"VirtuosoGrid")," component displays ",Object(o.b)("strong",{parentName:"p"},"same sized items")," in multiple columns.\nThe layout and item sizing is controlled through CSS class properties, which allows you to use media queries, min-width, percentage, etc."),Object(o.b)("h2",{id:"works-with-your-ui-library-of-choice"},"Works With Your UI Library of Choice"),Object(o.b)("p",null,"You can customize the markup up to your requirements - check ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"//virtuoso.dev/material-ui-endless-scrolling/"}),"the Material UI list demo"),".\nIf you need to support reordering, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"//virtuoso.dev/react-sortable-hoc/"}),"check the React Sortable HOC example"),"."),Object(o.b)("h2",{id:"documentation-and-demos"},"Documentation and Demos"),Object(o.b)("p",null,"For in-depth documentation and live examples of the supported features and live demos, check the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"//virtuoso.dev"}),"documentation website"),"."),Object(o.b)("h2",{id:"author"},"Author"),Object(o.b)("p",null,"Petyo Ivanov ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"//twitter.com/petyosi"}),"@petyosi"),"."),Object(o.b)("h2",{id:"contributing"},"Contributing"),Object(o.b)("h3",{id:"fixes-and-new-features"},"Fixes and new Features"),Object(o.b)("p",null,"To run the tests, use ",Object(o.b)("inlineCode",{parentName:"p"},"npm run test"),'.\nA holistic, "e2e" test suite is runnable with ',Object(o.b)("inlineCode",{parentName:"p"},"npm run e2e"),", with the pages being ",Object(o.b)("inlineCode",{parentName:"p"},"e2e/*.tsx")," and the tests ",Object(o.b)("inlineCode",{parentName:"p"},"e2e/*.test.ts"),". "),Object(o.b)("p",null,"A convenient way to debug something is by previewing one of the e2e test cases.\nTo do that, run ",Object(o.b)("inlineCode",{parentName:"p"},"npm run preview e2e/hello.tsx"),". There are several other examples in the ",Object(o.b)("inlineCode",{parentName:"p"},"e2e")," directory."),Object(o.b)("h3",{id:"docs"},"Docs"),Object(o.b)("p",null,"The documentation site is built with docusaurus and the content is available in the ",Object(o.b)("inlineCode",{parentName:"p"},"site/docs")," directory.\nThe API reference is generated from the doc comments in ",Object(o.b)("inlineCode",{parentName:"p"},"src/components.tsx"),"."),Object(o.b)("h2",{id:"license"},"License"),Object(o.b)("p",null,"MIT License."))}b.isMDXComponent=!0}}]);