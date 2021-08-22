(window.webpackJsonp=window.webpackJsonp||[]).push([[709],{1434:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"interface-returnschaineddecorators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interface-returnschaineddecorators"}},[s._v("#")]),s._v(" Interface ReturnsChainedDecorators")]),s._v(" "),a("Badge",{attrs:{text:"Interface",type:"interface"}}),s._v(" "),a("section",{staticClass:"table-features"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[s._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { ReturnsChainedDecorators } "),a("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"token string"},[s._v('"@tsed/schema"')])])])]),a("tr",[a("th",[s._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/tsedio/tsed/blob/v6.63.2/packages/schema/src/decorators/operations/returns.ts#L0-L0"}},[s._v("/packages/schema/src/decorators/operations/returns.ts")])])])])])]),s._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" ReturnsChainedDecorators "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    <T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" propertyKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" | symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" descriptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TypedPropertyDescriptor<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TypedPropertyDescriptor<T> | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[s._v('<span class="token function"><a href="/api/schema/decorators/operations/ContentType.html"><span class="token">ContentType</span></a></span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n\n<span class="token function"><a href="/api/schema/decorators/common/Description.html"><span class="token">Description</span></a></span><span class="token punctuation">(</span>description<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n\n<span class="token function">Examples</span><span class="token punctuation">(</span>examples<span class="token punctuation">:</span> Record&lt;<span class="token keyword">string</span><span class="token punctuation">,</span> <a href="/api/openspec/openspec3/OS3Example.html"><span class="token">OS3Example</span></a>&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">Examples</span><span class="token punctuation">(</span>examples<span class="token punctuation">:</span> Record&lt;<span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">any</span>&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token function">Examples</span><span class="token punctuation">(</span>examples<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n\n<span class="token function"><a href="/api/core/domain/Type.html"><span class="token">Type</span></a></span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <a href="/api/core/domain/Type.html"><span class="token">Type</span></a>&lt;<span class="token keyword">any</span>&gt; | <span class="token keyword">any</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n\n<span class="token function"><a href="/api/schema/decorators/operations/Status.html"><span class="token">Status</span></a></span><span class="token punctuation">(</span>status<span class="token punctuation">:</span> <span class="token keyword">string</span> | <span class="token keyword">number</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n\n<span class="token function">Of</span><span class="token punctuation">(</span>...types<span class="token punctuation">:</span> <a href="/api/schema/utils/GenericValue.html"><span class="token">GenericValue</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n\n<span class="token function">Nested</span><span class="token punctuation">(</span>...generics<span class="token punctuation">:</span> <a href="/api/schema/utils/GenericValue.html"><span class="token">GenericValue</span></a><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n\n<span class="token function"><a href="/api/schema/decorators/operations/Header.html"><span class="token">Header</span></a></span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token keyword">number</span> | <span class="token keyword">string</span> | <span class="token punctuation">(</span><a href="/api/schema/interfaces/JsonHeader.html"><span class="token">JsonHeader</span></a> & <span class="token punctuation">{</span>\n    value?<span class="token punctuation">:</span> <span class="token keyword">string</span> | <span class="token keyword">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n\n<span class="token function">Headers</span><span class="token punctuation">(</span>headers<span class="token punctuation">:</span> <a href="/api/schema/interfaces/JsonHeaders.html"><span class="token">JsonHeaders</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n\n<span class="token function"><a href="/api/mongoose/decorators/Schema.html"><span class="token">Schema</span></a></span><span class="token punctuation">(</span>schema<span class="token punctuation">:</span> <a href="/api/schema/decorators/operations/Partial.html"><span class="token">Partial</span></a>&lt;<a href="/api/schema/domain/JsonSchemaObject.html"><span class="token">JsonSchemaObject</span></a>&gt; | <a href="/api/schema/domain/JsonSchema.html"><span class="token">JsonSchema</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n\n<span class="token function"><a href="/api/schema/decorators/common/Title.html"><span class="token">Title</span></a></span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n\n<span class="token function"><a href="/api/schema/decorators/common/Groups.html"><span class="token">Groups</span></a></span><span class="token punctuation">(</span>...groups<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> this<span class="token punctuation">;</span>\n<span class="token punctuation">[</span>key<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span>\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[s._v("<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" propertyKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" | symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" descriptor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TypedPropertyDescriptor<T>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" TypedPropertyDescriptor<T> | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/schema/decorators/operations/ContentType.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("ContentType")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Set a Content-Type for the current response")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/schema/decorators/common/Description.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Description")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Add a description")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Examples")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("examples"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Record<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Example.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("OS3Example")])]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Add examples")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Examples")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("examples"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Record<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Examples")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("examples"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/core/domain/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/core/domain/Type.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])]),s._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v("> | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Change the model type")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/schema/decorators/operations/Status.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Status")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Change the status")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Of")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("...types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/utils/GenericValue.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("GenericValue")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Add the nested types")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Nested")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("...generics"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/utils/GenericValue.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("GenericValue")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Declare a nested generic models")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/schema/decorators/operations/Header.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Header")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("a",{pre:!0,attrs:{href:"/api/schema/interfaces/JsonHeader.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonHeader")])]),s._v(" & "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     value?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" | "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Add header.")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Headers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/interfaces/JsonHeaders.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonHeaders")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Add headers")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/mongoose/decorators/Schema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Schema")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("a",{pre:!0,attrs:{href:"/api/schema/decorators/operations/Partial.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Partial")])]),s._v("<"),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonSchemaObject.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonSchemaObject")])]),s._v("> | "),a("a",{pre:!0,attrs:{href:"/api/schema/domain/JsonSchema.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("JsonSchema")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Assign partial schema")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/schema/decorators/common/Title.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Title")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),s._v(" "),a("p",[s._v("Add an inline title for the return model.")])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token function"}},[a("a",{pre:!0,attrs:{href:"/api/schema/decorators/common/Groups.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[s._v("Groups")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("...groups"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),a("hr"),s._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);