(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(5),p=a(10),r=(a(2),a(343)),c={id:"c-sharp",title:"C#"},i={unversionedId:"plugins/c-sharp",id:"plugins/c-sharp",isDocsHomePage:!1,title:"C#",description:"{@import ../generated-config/c-sharp.md}",source:"@site/docs/plugins/c-sharp.md",slug:"/plugins/c-sharp",permalink:"/docs/plugins/c-sharp",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/c-sharp.md",version:"current",sidebar:"sidebar",previous:{title:"Java Apollo Android",permalink:"/docs/plugins/java-apollo-android"},next:{title:"C# Operations",permalink:"/docs/plugins/c-sharp-operations"}},o=[],b={toc:o};function s(e){var t=e.components,a=Object(p.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("p",{parentName:"p"},"This plugin generates C# ",Object(r.b)("inlineCode",{parentName:"p"},"class")," identifier for your schema types."),Object(r.b)("h2",{parentName:"p"},"Installation"),Object(r.b)("img",{alt:"c-sharp plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/c-sharp?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),Object(r.b)("div",Object(n.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(r.b)("path",Object(n.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(r.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"yarn add -D @graphql-codegen/c-sharp\n")))),Object(r.b)("h2",{parentName:"p"},"API Reference"),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"enumValues")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"EnumValuesMap")),Object(r.b)("p",{parentName:"p"},"Overrides the default value of enum values declared in your GraphQL schema."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"namespaceName")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"GraphQLCodeGen")),Object(r.b)("p",{parentName:"p"},"Allow you to customize the namespace name."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/c-sharp/my-org/my-app/MyTypes.cs:\n    plugins:\n      - c-sharp\n    config:\n      namespaceName: MyCompany.MyNamespace\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"className")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"Types")),Object(r.b)("p",{parentName:"p"},"Allow you to customize the parent class name."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/c-sharp/my-org/my-app/MyGeneratedTypes.cs:\n    plugins:\n      - c-sharp\n    config:\n      className: MyGeneratedTypes\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"listType")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"IEnumerable")),Object(r.b)("p",{parentName:"p"},"Allow you to customize the list type"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/c-sharp/my-org/my-app/Types.cs:\n    plugins:\n      - c-sharp\n    config:\n      listType: Map\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"emitRecords")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Emit C# 9.0+ records instead of classes"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/c-sharp/my-org/my-app/Types.cs:\n    plugins:\n      - c-sharp\n    config:\n      emitRecords: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"scalars")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(r.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(r.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(r.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(r.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(r.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(r.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"typesSuffix")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(r.b)("p",{parentName:"p"},"Suffixes all the generated types."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesSuffix: I\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Automatically adds ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(r.b)("h4",{parentName:"p"},"Usage Examples"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")),Object(r.b)("h3",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"h3"},"useTypeImports")),Object(r.b)("p",{parentName:"p"},"type: ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",{parentName:"p"},"Will use ",Object(r.b)("inlineCode",{parentName:"p"},"import type {}")," rather than ",Object(r.b)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option')))}s.isMDXComponent=!0},343:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var n=a(2),p=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,p=function(e,t){if(null==e)return{};var a,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var b=p.a.createContext({}),s=function(e){var t=p.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return p.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return p.a.createElement(p.a.Fragment,{},t)}},d=p.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,O=m["".concat(c,".").concat(d)]||m[d]||l[d]||r;return a?p.a.createElement(O,i(i({ref:t},b),{},{components:a})):p.a.createElement(O,i({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<r;b++)c[b]=a[b];return p.a.createElement.apply(null,c)}return p.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);