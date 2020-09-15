(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),o=(n(0),n(167)),i=n(170),s={title:"Recoil 0.0.11"},c={permalink:"/blog/2020/09/15/0.0.11-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2020-09-15-0.0.11-released.mdx",source:"@site/blog/2020-09-15-0.0.11-released.mdx",description:"Today we are releasing Recoil 0.0.11. It contains bug fixes, new features, better performance, and experimental compatibility with Concurrent Mode. Thank you so much to everyone who contributed to this release!",date:"2020-09-15T00:00:00.000Z",tags:[],title:"Recoil 0.0.11",readingTime:5.145,truncated:!1,nextItem:{title:"Recoil 0.0.10",permalink:"/blog/2020/06/18/0.0.10-released"}},l=[{value:"Experimental Concurrent Mode Support",id:"experimental-concurrent-mode-support",children:[]},{value:"Performance",id:"performance",children:[]},{value:"Types and Packaging",id:"types-and-packaging",children:[]},{value:"Support for Multiple React Roots",id:"support-for-multiple-react-roots",children:[]},{value:"Developer Tool APIs",id:"developer-tool-apis",children:[]},{value:"Other New APIs",id:"other-new-apis",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Breaking Changes",id:"breaking-changes",children:[]},{value:"Future Work",id:"future-work",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Today we are releasing Recoil 0.0.11. It contains bug fixes, new features, better performance, and experimental compatibility with Concurrent Mode. Thank you so much to everyone who contributed to this release!"),Object(o.b)("h2",{id:"experimental-concurrent-mode-support"},"Experimental Concurrent Mode Support"),Object(o.b)("p",null,"Recoil now supports ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/concurrent-mode-intro.html"}),"Concurrent Mode")," when used with the ",Object(o.b)("inlineCode",{parentName:"p"},"experimental")," release of React. Please try this out and report any problems!"),Object(o.b)("p",null,"Concurrent Mode, which enables smoother, more consistent user experiences, is the future of React. But up until now it's been incompatible with any kind of external state. This is because, in Concurrent Mode, renders can be spread out over time: React can pause the rendering of components, then later pick up where it left off, starting from the partial component tree that it already built:"),Object(o.b)("img",{alt:"React pauses while rendering a tree of components. Some components are rendered before the pause while others are rendered after the pause.",src:Object(i.a)("img/blog/2020-09-02-0.0.11-released/concurrent2.png")}),Object(o.b)("p",null,"This presents a problem with external state. Since React now relinquishes control flow, anything could happen between the time when rendering starts and when it is completed. If the external state changes during this time, it will result in an inconsistent UI, as the earlier-rendered components will observe the older state, while the later-rendered components will observe the new state:"),Object(o.b)("img",{alt:"If components depend on some external state, and that state changes while rendering is paused, then components rendered before the pause will observe the old state, while components rendered after the pause will observe the new state.",src:Object(i.a)("img/blog/2020-09-02-0.0.11-released/concurrent3.png")}),Object(o.b)("p",null,"This inconsistency could cause problems up to crashing the app."),Object(o.b)("p",null,"Recoil now takes advantage of experimental APIs in React to handle this situation by restarting with a fresh tree when Recoil state has changed during a render. These APIs also make Recoil more efficient and remove the need to re-render components when they're first mounted."),Object(o.b)("p",null,"Avoid using React experimental releases in production.  And, no matter what release of React or state management library you use, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://gist.github.com/sebmarkbage/75f0838967cd003cd7f9ab938eb1958f"}),"avoid bugs by always keeping side-effects in a ",Object(o.b)("inlineCode",{parentName:"a"},"useEffect()")," hook, not during render"),"!  (@davidmccabe, @bvaughn)"),Object(o.b)("h2",{id:"performance"},"Performance"),Object(o.b)("p",null,"Several changes improve Recoil's performance. Previously, Recoil sometimes had to re-render components in certain circumstances: when reading from selectors that had unknown dependencies and when reading from atoms that had been initialized from external storage. Now, Recoil never has to perform a second render in response to reading an atom or selector. (@davidmccabe)"),Object(o.b)("p",null,"Secondly, when used with the ",Object(o.b)("inlineCode",{parentName:"p"},"experimental")," release of React, Recoil no longer has to perform a second render when components are initially mounted. Recoil also no longer has to do any work to look up atom or selector values when it re-renders for reasons other than that atom or selector changing. (@davidmccabe, @bvaughn)."),Object(o.b)("p",null,"The basic hooks such as ",Object(o.b)("inlineCode",{parentName:"p"},"useRecoilValue()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"useRecoilState()")," have been optimized and are now about 8","\xd7"," faster. They now typically take less than 2","\xd7"," as long as ",Object(o.b)("inlineCode",{parentName:"p"},"useState()")," to execute. This improves the performance of apps that use a large number of atoms in many components. (@davidmccabe)"),Object(o.b)("p",null,"Recoil recursively freezes the contents of atoms and selectors. This prevents bugs, but can be slow with large objects. It now happens only in the development build. (#361 ","\u2014"," @drarmstr)"),Object(o.b)("p",null,"Recoil now avoids re-rendering components or re-evaluating selectors if you set an atom to its already-set value or reset it when it is already reset (#399, #386 ","\u2014"," @drarmstr)."),Object(o.b)("p",null,"Finally, this release also fixes a memory leak introduced in the previous release. If you've been experiencing poor performance in apps that frequently update atoms, this was likely the cause. (#471 ","\u2014"," @davidmccabe)"),Object(o.b)("h2",{id:"types-and-packaging"},"Types and Packaging"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://flow.org/"}),"Flow types")," are now exported with the package in addition to TypeScript. Flow is the type system used at Facebook and that Recoil is actually written in. (#338, #468, #541 ","\u2014"," @Brianzchen, @Komalov, @mondaychen)"),Object(o.b)("p",null,"TypeScript typing is also improved (#492, #545, #548, #568, #575 ","\u2014"," @csantos42, @SergeyVolynkin, @drarmstr, @hachibeeDI)."),Object(o.b)("p",null,"In addition to NPM packages, we now provide ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/introduction/installation#cdn"}),"Common JS and UMD modules via CDN")," (#413 ","\u2014"," @mondaychen, @pocket7878)."),Object(o.b)("h2",{id:"support-for-multiple-react-roots"},"Support for Multiple React Roots"),Object(o.b)("p",null,"You can now ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/core/useRecoilBridgeAcrossReactRoots"}),"share state between multiple React roots"),".  For example, if your app uses both React DOM and another renderer such as ThreeJS, you can now share Recoil state between them. As always when using multiple React roots, they may be momentarily out of sync. (#298, #516 ","\u2014"," @drarmstr, @inlet)"),Object(o.b)("h2",{id:"developer-tool-apis"},"Developer Tool APIs"),Object(o.b)("p",null,"This release includes ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/core/Snapshot#developer-tools"}),"experimental APIs")," intended for developer tools. We are creating a set of developer tools internally and there are also multiple open-source projects underway. We are releasing these APIs to help validate their design. (@drarmstr)"),Object(o.b)("h2",{id:"other-new-apis"},"Other New APIs"),Object(o.b)("p",null,"You can now use a Promise as the default value of an atom. When read it will behave like an async selector. (@drarmstr)"),Object(o.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(o.b)("p",null,"This update has many fixes related to test infrastructure and differences between the open-source and Facebook-internal environments. (#368, #360, #362, #363, #392, #431, #402, #538, #539, #549, #561, #576 ","\u2014"," @aaronabramov, @Komalov, @drarmstr, @jacques-blom, @mondaychen, @dsainati1, @csantos42, @behnammodi, @habond, @benhalverson)."),Object(o.b)("p",null,"It also fixes bugs when using multiple ",Object(o.b)("inlineCode",{parentName:"p"},"<RecoilRoot>"),"s or pre-loading selectors in a snapshot (#534 ","\u2014"," @davemccabe)."),Object(o.b)("h2",{id:"breaking-changes"},"Breaking Changes"),Object(o.b)("p",null,"This update may break certain tests that don't use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/test-utils.html#act"}),Object(o.b)("inlineCode",{parentName:"a"},"act()")," function from ",Object(o.b)("inlineCode",{parentName:"a"},"react-test-utils"))," to perform actions affecting React components. These tests sometimes worked anyway due to Recoil's extra renders. Use ",Object(o.b)("inlineCode",{parentName:"p"},"act()")," to fix any such tests."),Object(o.b)("p",null,"Recoil will now throw an exception if a state updater function provided to Recoil causes another atom update within its own execution. State updater functions are supposed to be pure, so this has always been against the API contract. But it happened to work in some cases before, and now it doesn't. Code that does this can be changed to perform the effects with ",Object(o.b)("inlineCode",{parentName:"p"},"useRecoilCallback()"),"."),Object(o.b)("h2",{id:"future-work"},"Future Work"),Object(o.b)("p",null,"In a future release, Recoil will automatically free the memory used by atoms and selectors that are no longer used, and will perform better with larger numbers of atoms. (@davidmccabe)"),Object(o.b)("p",null,"We are also working on APIs for synchronizing Recoil atoms with external data sources such as the URL, local storage, or a server. (@drarmstr)"),Object(o.b)("p",null,"Developer tools are in development. (@maxijb, @habond, @drarmstr)"),Object(o.b)("p",null,"Thanks for reading this far and for using Recoil! More releases are coming soon."))}u.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(h,s({ref:t},l,{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},168:function(e,t,n){"use strict";var r=n(0),a=n(35);t.a=function(){return Object(r.useContext)(a.a)}},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(168);function a(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);