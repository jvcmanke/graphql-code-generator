(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1456:function(e,n,t){"use strict";t.r(n),t.d(n,"plugin",(function(){return s})),t.d(n,"validate",(function(){return p}));var r=t(575),a=t.n(r),i=t(576),o=t(382),_=t(412),u=t(370),c=t(361),l={ts:[".ts",".tsx"],js:[".js",".jsx"],json:[".json"]},s=function(){var e=Object(i.a)(a.a.mark((function e(n,t,r,i){var s,p,f,d,m,O,v,h,b,E,y,g,T;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object.assign({module:"es2015",federation:!1,apolloClientVersion:3,useExplicitTyping:!1},r),p=parseInt(s.apolloClientVersion),f=s.federation?Object(_.h)(n):n,d=s.useExplicitTyping,e.next=6,Object(u.g)({schema:f,document:Object(c.parse)("\n      {\n        __schema {\n          types {\n            kind\n            name\n            possibleTypes {\n              name\n            }\n          }\n        }\n      }\n    ")});case 6:if(m=e.sent,O=Object(o.extname)(i.outputFile).toLowerCase(),m.data){e.next=10;break}throw new Error('Plugin "fragment-matcher" couldn\'t introspect the schema');case 10:if(v=function(e){return"UNION"===e.kind||"INTERFACE"===e.kind},h=function(e,n){var t;return Object.assign({},e,((t={})[n.name]=n.possibleTypes.map((function(e){return e.name})),t))},b=2===p?{__schema:Object.assign({},m.data.__schema,{types:m.data.__schema.types.filter((function(e){return"UNION"===e.kind||"INTERFACE"===e.kind}))})}:{possibleTypes:m.data.__schema.types.filter(v).reduce(h,{})},E=JSON.stringify(b,null,2),!l.json.includes(O)){e.next=16;break}return e.abrupt("return",E);case 16:if(!l.js.includes(O)){e.next=19;break}return y="es2015"===s.module?"export default":"module.exports =",e.abrupt("return","\n      "+y+" "+E+"\n    ");case 19:if(!l.ts.includes(O)){e.next=23;break}return 2===p?g="IntrospectionResultData":3===p&&(g="PossibleTypesResultData"),d?T="export type "+g+" = "+E+";":2===p?T="export interface "+g+" {\n        __schema: {\n          types: {\n            kind: string;\n            name: string;\n            possibleTypes: {\n              name: string;\n            }[];\n          }[];\n        };\n      }":3===p&&(T="export interface "+g+" {\n        possibleTypes: {\n          [key: string]: string[]\n        }\n      }"),e.abrupt("return","\n      "+T+"\n      const result: "+g+" = "+E+";\n      export default result;\n    ");case 23:throw new Error("Extension "+O+" is not supported");case 24:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(a.a.mark((function e(n,t,r,i){var _,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_=Object(o.extname)(i).toLowerCase(),(u=Object.values(l).reduce((function(e,n){return[].concat(e,n)}),[])).includes(_)){e.next=4;break}throw new Error('Plugin "fragment-matcher" requires extension to be one of '+u.map((function(e){return e.replace(".","")})).join(", ")+"!");case 4:if("commonjs"!==r.module||!l.ts.includes(_)){e.next=6;break}throw new Error('Plugin "fragment-matcher" doesn\'t support commonjs modules combined with TypeScript!');case 6:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}()},369:function(e,n,t){"use strict";function r(e){return"function"==typeof(null==e?void 0:e.then)}t.d(n,"a",(function(){return r}))},370:function(e,n,t){"use strict";t.d(n,"g",(function(){return E})),t.d(n,"h",(function(){return y})),t.d(n,"a",(function(){return D})),t.d(n,"b",(function(){return P})),t.d(n,"d",(function(){return M})),t.d(n,"c",(function(){return k})),t.d(n,"f",(function(){return W})),t.d(n,"e",(function(){return K})),t.d(n,"i",(function(){return S}));var r=t(335);var a=t(340),i=t(348),o=t(369),_=t(413),u=t(567);var c=t(432),l=t(331),s=t(431),p=t(334),f=t(378),d=t(345),m=t(339),O=t(333),v=t(344),h=t(469),b=t(379);function E(e,n,t,r,a,i,o,_){return g(1===arguments.length?e:{schema:e,document:n,rootValue:t,contextValue:r,variableValues:a,operationName:i,fieldResolver:o,typeResolver:_})}function y(e){var n=g(e);if(Object(o.a)(n))throw new Error("GraphQL execution failed to complete synchronously.");return n}function g(e){var n=e.schema,t=e.document,r=e.rootValue,a=e.contextValue,i=e.variableValues,_=e.operationName,u=e.fieldResolver,l=e.typeResolver;D(n,t,i);var s=P(n,t,r,a,i,_,u,l);if(Array.isArray(s))return{errors:s};var p=function(e,n,t){var r=Object(h.a)(e.schema,n),a=M(e,r,n.selectionSet,Object.create(null),Object.create(null)),i=void 0;try{var _="mutation"===n.operation?function(e,n,t,r,a){return i=Object.keys(a),_=function(i,_){var u=a[_],l=Object(c.a)(r,_,n.name),s=I(e,n,t,u,l);return void 0===s?i:Object(o.a)(s)?s.then((function(e){return i[_]=e,i})):(i[_]=s,i)},u=Object.create(null),i.reduce((function(e,n){return Object(o.a)(e)?e.then((function(e){return _(e,n)})):_(e,n)}),u);var i,_,u}(e,r,t,i,a):j(e,r,t,i,a);return Object(o.a)(_)?_.then(void 0,(function(n){return e.errors.push(n),Promise.resolve(null)})):_}catch(u){return e.errors.push(u),null}}(s,s.operation,r);return T(s,p)}function T(e,n){return Object(o.a)(n)?n.then((function(n){return T(e,n)})):0===e.errors.length?{data:n}:{errors:e.errors,data:n}}function D(e,n,t){n||Object(i.a)(0,"Must provide document."),Object(f.a)(e),null==t||Object(_.a)(t)||Object(i.a)(0,"Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.")}function P(e,n,t,r,a,i,o,_){for(var u,c,s,f=Object.create(null),d=0,m=n.definitions;d<m.length;d++){var O=m[d];switch(O.kind){case p.a.OPERATION_DEFINITION:if(null==i){if(void 0!==s)return[new l.a("Must provide operation name if query contains multiple operations.")];s=O}else(null===(u=O.name)||void 0===u?void 0:u.value)===i&&(s=O);break;case p.a.FRAGMENT_DEFINITION:f[O.name.value]=O}}if(!s)return null!=i?[new l.a('Unknown operation named "'.concat(i,'".'))]:[new l.a("Must provide an operation.")];var v=null!==(c=s.variableDefinitions)&&void 0!==c?c:[],h=Object(b.c)(e,v,null!=a?a:{},{maxErrors:50});return h.errors?h.errors:{schema:e,fragments:f,rootValue:t,contextValue:r,operation:s,variableValues:h.coerced,fieldResolver:null!=o?o:K,typeResolver:null!=_?_:W,errors:[]}}function j(e,n,t,r,a){for(var i,_,u,l=Object.create(null),s=!1,p=0,f=Object.keys(a);p<f.length;p++){var d=f[p],m=I(e,n,t,a[d],Object(c.a)(r,d,n.name));void 0!==m&&(l[d]=m,Object(o.a)(m)&&(s=!0))}return s?(i=l,_=Object.keys(i),u=_.map((function(e){return i[e]})),Promise.all(u).then((function(e){return e.reduce((function(e,n,t){return e[_[t]]=n,e}),Object.create(null))}))):l}function M(e,n,t,r,a){for(var i=0,o=t.selections;i<o.length;i++){var _=o[i];switch(_.kind){case p.a.FIELD:if(!w(e,_))continue;var u=(s=_).alias?s.alias.value:s.name.value;r[u]||(r[u]=[]),r[u].push(_);break;case p.a.INLINE_FRAGMENT:if(!w(e,_)||!N(e,_,n))continue;M(e,n,_.selectionSet,r,a);break;case p.a.FRAGMENT_SPREAD:var c=_.name.value;if(a[c]||!w(e,_))continue;a[c]=!0;var l=e.fragments[c];if(!l||!N(e,l,n))continue;M(e,n,l.selectionSet,r,a)}}var s;return r}function w(e,n){var t=Object(b.b)(m.e,n,e.variableValues);if(!0===(null==t?void 0:t.if))return!1;var r=Object(b.b)(m.d,n,e.variableValues);return!1!==(null==r?void 0:r.if)}function N(e,n,t){var r=n.typeCondition;if(!r)return!0;var a=Object(v.a)(e.schema,r);return a===t||!!Object(O.C)(a)&&e.schema.isSubType(a,t)}function I(e,n,t,r,a){var i,_=r[0].name.value,u=S(e.schema,n,_);if(u){var l=u.type,p=null!==(i=u.resolve)&&void 0!==i?i:e.fieldResolver,f=k(e,u,r,n,a);try{var d,m=p(t,Object(b.a)(u,r[0],e.variableValues),e.contextValue,f);return d=Object(o.a)(m)?m.then((function(n){return A(e,l,r,f,a,n)})):A(e,l,r,f,a,m),Object(o.a)(d)?d.then(void 0,(function(n){return R(Object(s.a)(n,r,Object(c.b)(a)),l,e)})):d}catch(O){return R(Object(s.a)(O,r,Object(c.b)(a)),l,e)}}}function k(e,n,t,r,a){return{fieldName:n.name,fieldNodes:t,returnType:n.type,parentType:r,path:a,schema:e.schema,fragments:e.fragments,rootValue:e.rootValue,operation:e.operation,variableValues:e.variableValues}}function R(e,n,t){if(Object(O.L)(n))throw e;return t.errors.push(e),null}function A(e,n,t,i,_,p){if(p instanceof Error)throw p;if(Object(O.L)(n)){var f=A(e,n.ofType,t,i,_,p);if(null===f)throw new Error("Cannot return null for non-nullable field ".concat(i.parentType.name,".").concat(i.fieldName,"."));return f}return null==p?null:Object(O.J)(n)?function(e,n,t,r,a,i){var _=n.ofType,p=!1,f=Object(u.a)(i,(function(n,i){var u=Object(c.a)(a,i,void 0);try{var l;return l=Object(o.a)(n)?n.then((function(n){return A(e,_,t,r,u,n)})):A(e,_,t,r,u,n),Object(o.a)(l)?(p=!0,l.then(void 0,(function(n){return R(Object(s.a)(n,t,Object(c.b)(u)),_,e)}))):l}catch(f){return R(Object(s.a)(f,t,Object(c.b)(u)),_,e)}}));if(null==f)throw new l.a('Expected Iterable, but did not find one for field "'.concat(r.parentType.name,".").concat(r.fieldName,'".'));return p?Promise.all(f):f}(e,n,t,i,_,p):Object(O.I)(n)?function(e,n){var t=e.serialize(n);if(void 0===t)throw new Error('Expected a value of type "'.concat(Object(r.a)(e),'" but ')+"received: ".concat(Object(r.a)(n)));return t}(n,p):Object(O.C)(n)?function(e,n,t,r,a,i){var _,u=null!==(_=n.resolveType)&&void 0!==_?_:e.typeResolver,c=e.contextValue,l=u(i,c,r,n);if(Object(o.a)(l))return l.then((function(o){return x(e,q(o,e,n,t,r,i),t,r,a,i)}));return x(e,q(l,e,n,t,r,i),t,r,a,i)}(e,n,t,i,_,p):Object(O.N)(n)?x(e,n,t,i,_,p):void Object(a.a)(0,"Cannot complete value of unexpected output type: "+Object(r.a)(n))}function q(e,n,t,a,i,o){if(null==e)throw new l.a('Abstract type "'.concat(t.name,'" must resolve to an Object type at runtime for field "').concat(i.parentType.name,".").concat(i.fieldName,'". Either the "').concat(t.name,'" type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.'),a);var _=Object(O.K)(e)?e.name:e;if("string"!=typeof _)throw new l.a('Abstract type "'.concat(t.name,'" must resolve to an Object type at runtime for field "').concat(i.parentType.name,".").concat(i.fieldName,'" with ')+"value ".concat(Object(r.a)(o),', received "').concat(Object(r.a)(e),'".'));var u=n.schema.getType(_);if(null==u)throw new l.a('Abstract type "'.concat(t.name,'" was resolve to a type "').concat(_,'" that does not exist inside schema.'),a);if(!Object(O.N)(u))throw new l.a('Abstract type "'.concat(t.name,'" was resolve to a non-object type "').concat(_,'".'),a);if(!n.schema.isSubType(t,u))throw new l.a('Runtime Object type "'.concat(u.name,'" is not a possible type for "').concat(t.name,'".'),a);return u}function x(e,n,t,r,a,i){if(n.isTypeOf){var _=n.isTypeOf(i,e.contextValue,r);if(Object(o.a)(_))return _.then((function(r){if(!r)throw F(n,i,t);return C(e,n,t,a,i)}));if(!_)throw F(n,i,t)}return C(e,n,t,a,i)}function F(e,n,t){return new l.a('Expected value of type "'.concat(e.name,'" but got: ').concat(Object(r.a)(n),"."),t)}function C(e,n,t,r,a){return j(e,n,a,r,U(e,n,t))}var L,B,U=(L=function(e,n,t){for(var r=Object.create(null),a=Object.create(null),i=0;i<t.length;i++){var o=t[i];o.selectionSet&&(r=M(e,n,o.selectionSet,r,a))}return r},function(e,n,t){B||(B=new WeakMap);var r,a=B.get(e);if(a){if(r=a.get(n)){var i=r.get(t);if(void 0!==i)return i}}else a=new WeakMap,B.set(e,a);r||(r=new WeakMap,a.set(n,r));var o=L(e,n,t);return r.set(t,o),o});var W=function(e,n,t,r){if(Object(_.a)(e)&&"string"==typeof e.__typename)return e.__typename;for(var a=t.schema.getPossibleTypes(r),i=[],u=0;u<a.length;u++){var c=a[u];if(c.isTypeOf){var l=c.isTypeOf(e,n,t);if(Object(o.a)(l))i[u]=l;else if(l)return c.name}}return i.length?Promise.all(i).then((function(e){for(var n=0;n<e.length;n++)if(e[n])return a[n].name})):void 0},K=function(e,n,t,r){if(Object(_.a)(e)||"function"==typeof e){var a=e[r.fieldName];return"function"==typeof a?e[r.fieldName](n,t,r):a}};function S(e,n,t){return t===d.a.name&&e.getQueryType()===n?d.a:t===d.c.name&&e.getQueryType()===n?d.c:t===d.d.name?d.d:n.getFields()[t]}},412:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(process){__webpack_require__.d(__webpack_exports__,"a",(function(){return ApolloFederation})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DetailedError})),__webpack_require__.d(__webpack_exports__,"c",(function(){return addFederationReferencesToSchema})),__webpack_require__.d(__webpack_exports__,"d",(function(){return federationSpec})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getBaseType})),__webpack_require__.d(__webpack_exports__,"f",(function(){return isComplexPluginOutput})),__webpack_require__.d(__webpack_exports__,"g",(function(){return isUsingTypes})),__webpack_require__.d(__webpack_exports__,"h",(function(){return removeFederation})),__webpack_require__.d(__webpack_exports__,"i",(function(){return resolveExternalModuleAndFn}));var _home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(383),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(569),param_case__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(570),graphql__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(333),graphql__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(358),graphql__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(334),graphql__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(361),graphql__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1449),lodash__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(568),lodash__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);function resolveExternalModuleAndFn(pointer){var importExternally=function importExternally(moduleName){return eval("require('"+moduleName+"')")};if("function"==typeof pointer)return pointer;var _pointer$split=pointer.split("#"),moduleName=_pointer$split[0],functionName=_pointer$split[1];"change-case"===moduleName&&(moduleName=Object(param_case__WEBPACK_IMPORTED_MODULE_3__.a)(functionName));var _importExternally=importExternally("path"),resolve=_importExternally.resolve,localFilePath=resolve(process.cwd(),moduleName),_importExternally2=importExternally("fs"),existsSync=_importExternally2.existsSync,localFileExists=existsSync(localFilePath),importFrom=importExternally("import-from"),loadedModule=localFileExists?importExternally(localFilePath):importFrom(process.cwd(),moduleName);if(!(functionName in loadedModule)&&"function"!=typeof loadedModule)throw new Error(functionName+" couldn't be found in module "+moduleName+"!");return loadedModule[functionName]||loadedModule}function isComplexPluginOutput(e){return"object"==typeof e&&e.hasOwnProperty("content")}function mergeOutputs(e){var n={content:"",prepend:[],append:[]};return Array.isArray(e)&&e.forEach((function(e){var t,r;"string"==typeof e?n.content+=e:(n.content+=e.content,(t=n.prepend).push.apply(t,e.prepend||[]),(r=n.append).push.apply(r,e.append||[]))})),[].concat(n.prepend,[n.content],n.append).join("\n")}function isWrapperType(e){return Object(graphql__WEBPACK_IMPORTED_MODULE_4__.J)(e)||Object(graphql__WEBPACK_IMPORTED_MODULE_4__.L)(e)}function getBaseType(e){return isWrapperType(e)?getBaseType(e.ofType):e}function isOutputConfigArray(e){return Array.isArray(e)}function isConfiguredOutput(e){return"object"==typeof e&&e.plugins}function normalizeOutputParam(e){if(isOutputConfigArray(e))return{documents:[],schema:[],plugins:isConfiguredOutput(e)?e.plugins:e};if(isConfiguredOutput(e))return e;throw new Error('Invalid "generates" config!')}function normalizeInstanceOrArray(e){return Array.isArray(e)?e:e?[e]:[]}function normalizeConfig(e){var n;return"string"==typeof e?[(n={},n[e]={},n)]:Array.isArray(e)?e.map((function(e){var n;return"string"==typeof e?((n={})[e]={},n):e})):"object"==typeof e?Object.keys(e).reduce((function(n,t){var r;return[].concat(n,[(r={},r[t]=e[t],r)])}),[]):[]}function hasNullableTypeRecursively(e){return!Object(graphql__WEBPACK_IMPORTED_MODULE_4__.L)(e)||!(!Object(graphql__WEBPACK_IMPORTED_MODULE_4__.J)(e)&&!Object(graphql__WEBPACK_IMPORTED_MODULE_4__.L)(e))&&hasNullableTypeRecursively(e.ofType)}function isUsingTypes(e,n,t){var r=0,a=[];return Object(graphql__WEBPACK_IMPORTED_MODULE_5__.c)(e,{SelectionSet:{enter:function(e,r,i,o){if(!o.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))){var _=e.selections||[];if(t&&_.length>0){var u=function(){if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.FRAGMENT_DEFINITION)return i.typeCondition.name.value;if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.FIELD){var e=a[a.length-1];if(!e)throw new Error("Unable to find parent type! Please make sure you operation passes validation");var n=e.getFields()[i.name.value];if(!n)throw new Error('Unable to find field "'+i.name.value+'" on type "'+e+'"!');return getBaseType(n.type).name}if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.OPERATION_DEFINITION){if("query"===i.operation)return t.getQueryType().name;if("mutation"===i.operation)return t.getMutationType().name;if("subscription"===i.operation)return t.getSubscriptionType().name}else if(i.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.INLINE_FRAGMENT)return i.typeCondition?i.typeCondition.name.value:a[a.length-1].name;return null}();a.push(t.getType(u))}}},leave:function(e){var n=e.selections||[];t&&n.length>0&&a.pop()}},Field:{enter:function(e,i,o,_,u){if(!e.name.value.startsWith("__")&&!u.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))){var c=e.selectionSet&&e.selectionSet.selections||[],l=c.filter((function(e){return e.kind===graphql__WEBPACK_IMPORTED_MODULE_6__.a.FRAGMENT_SPREAD&&!n.includes(e.name.value)}));if((0===c.length||l.length>0)&&r++,t){var s=a[a.length-1];if(s&&Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(s)){var p=s.getFields()[e.name.value];if(!p)throw new Error('Unable to find field "'+e.name.value+'" on type "'+s+'"!');hasNullableTypeRecursively(p.type)&&r++}}}}},enter:{VariableDefinition:function(e,t,a,i,o){o.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))||r++},InputValueDefinition:function(e,t,a,i,o){o.find((function(e){return e.kind&&"FragmentDefinition"===e.kind&&n.includes(e.name.value)}))||r++}}}),r>0}var federationSpec=Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)("\n  scalar _FieldSet\n\n  directive @external on FIELD_DEFINITION\n  directive @requires(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n  directive @key(fields: _FieldSet!) on OBJECT | INTERFACE\n");function addFederationReferencesToSchema(e){var n=e.getTypeMap();for(var t in n){var r=e.getType(t);if(Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(r)&&isFederationObjectType(r)){var a,i=r.toConfig();i.fields=Object.assign(((a={})[resolveReferenceFieldName]={type:r},a),i.fields);var o=new graphql__WEBPACK_IMPORTED_MODULE_4__.f(i);o.astNode=o.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_8__.c)(o)).definitions[0],o.astNode.fields.unshift({kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.FIELD_DEFINITION,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.NAME,value:resolveReferenceFieldName},type:{kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.NAMED_TYPE,name:{kind:graphql__WEBPACK_IMPORTED_MODULE_6__.a.NAME,value:t}}}),n[t]=o}}return e}function removeFederation(e){var n=e.getQueryType().getFields();delete n._entities,delete n._service;var t=e.getTypeMap();return delete t._Service,delete t._Entity,delete t._Any,e}var resolveReferenceFieldName="__resolveReference",ApolloFederation=function(){function e(e){var n=e.enabled,t=e.schema;this.enabled=!1,this.enabled=n,this.schema=t,this.providesMap=this.createMapOfProvides()}var n=e.prototype;return n.filterTypeNames=function(e){return this.enabled?e.filter((function(e){return"_FieldSet"!==e})):e},n.filterFieldNames=function(e){return this.enabled?e.filter((function(e){return e!==resolveReferenceFieldName})):e},n.skipDirective=function(e){return this.enabled&&["external","requires","provides","key"].includes(e)},n.skipScalar=function(e){return this.enabled&&"_FieldSet"===e},n.skipField=function(e){var n=e.fieldNode,t=e.parentType;return!!(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(t)&&isFederationObjectType(t))&&this.isExternalAndNotProvided(n,t)},n.isResolveReferenceField=function(e){var n="string"==typeof e.name?e.name:e.name.value;return this.enabled&&n===resolveReferenceFieldName},n.transformParentType=function(e){var n=this,t=e.fieldNode,r=e.parentType,a=e.parentTypeSignature;if(this.enabled&&Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(r)&&isFederationObjectType(r)&&(isTypeExtension(r)||t.name.value===resolveReferenceFieldName)){var i=getDirectivesByName("key",r);if(i.length){var o=["{ __typename: '"+r.name+"' } &"],_=getDirectivesByName("requires",t).map(this.extractKeyOrRequiresFieldSet),u=this.translateFieldSet(lodash__WEBPACK_IMPORTED_MODULE_9__.merge.apply(void 0,[{}].concat(_)),a),c=i.map((function(e){var t=n.extractKeyOrRequiresFieldSet(e);return n.translateFieldSet(t,a)})),l=c.length>1?["(",")"]:["",""],s=l[0],p=l[1];return o.push([s,c.join(" | "),p].join("")),_.length&&o.push("& "+u),o.join(" ")}}return a},n.isExternalAndNotProvided=function(e,n){return this.isExternal(e)&&!this.hasProvides(n,e)},n.isExternal=function(e){return getDirectivesByName("external",e).length>0},n.hasProvides=function(e,n){var t=this.providesMap[Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(e)?e.name:e.name.value];return!(!t||!t.length)&&t.includes(n.name.value)},n.translateFieldSet=function(e,n){return"GraphQLRecursivePick<"+n+", "+JSON.stringify(e)+">"},n.extractKeyOrRequiresFieldSet=function(e){var n=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;return Object(graphql__WEBPACK_IMPORTED_MODULE_5__.c)(Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)("{"+n+"}"),{leave:{SelectionSet:function(e){return e.selections.reduce((function(e,n){return e[n.name]=n.selection,e}),{})},Field:function(e){return{name:e.name.value,selection:!e.selectionSet||e.selectionSet}},Document:function(e){return e.definitions.find((function(e){return"OperationDefinition"===e.kind&&"query"===e.operation})).selectionSet}}})},n.extractProvidesFieldSet=function(e){var n=e.arguments.find((function(e){return"fields"===e.name.value})).value.value;if(/[{}]/gi.test(n))throw new Error("Nested fields in _FieldSet is not supported in the @provides directive");return n.split(/\s+/g)},n.createMapOfProvides=function(){var e=this,n={};return Object.keys(this.schema.getTypeMap()).forEach((function(t){var r=e.schema.getType(t);Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(r)&&Object.values(r.getFields()).forEach((function(t){var r,a=getDirectivesByName("provides",t.astNode).map(e.extractProvidesFieldSet).reduce((function(e,n){return[].concat(e,n)}),[]),i=getBaseType(t.type);n[i.name]||(n[i.name]=[]),(r=n[i.name]).push.apply(r,a)}))})),n},e}();function isFederationObjectType(e){var n=Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(e)?e.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_8__.c)(e)).definitions[0]:e,t=n.name.value,r=n.directives,a=!["Query","Mutation","Subscription"].includes(t),i=!t.startsWith("__"),o=r.some((function(e){return"key"===e.name.value}));return a&&i&&o}function getDirectivesByName(e,n){var t;return(t=Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(n)?n.astNode:n)&&t.directives?t.directives.filter((function(n){return n.name.value===e})):[]}function isTypeExtension(e){var n;return null===(n=(Object(graphql__WEBPACK_IMPORTED_MODULE_4__.N)(e)?e.astNode||Object(graphql__WEBPACK_IMPORTED_MODULE_7__.parse)(Object(graphql__WEBPACK_IMPORTED_MODULE_8__.c)(e)).definitions[0]:e).fields)||void 0===n?void 0:n.some((function(e){return getDirectivesByName("external",e).length}))}var DetailedError=function(e){function n(t,r,a){var i;return(i=e.call(this,t)||this).message=t,i.details=r,i.source=a,Object.setPrototypeOf(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(i),n.prototype),Error.captureStackTrace(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(i),n),i}return Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.a)(n,e),n}(Object(_home_runner_work_graphql_code_generator_graphql_code_generator_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_2__.a)(Error));function isDetailedError(e){return e.details}}).call(this,__webpack_require__(351))}}]);