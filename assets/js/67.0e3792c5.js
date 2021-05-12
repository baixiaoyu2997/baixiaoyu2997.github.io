(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{497:function(e,n,t){"use strict";t.r(n);var o=t(2),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),t("p",[e._v("本文介绍如何使用"),t("code",[e._v("vue-class-component")]),e._v("来编写组件")]),e._v(" "),t("h2",{attrs:{id:"类组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类组件"}},[e._v("#")]),e._v(" 类组件")]),e._v(" "),t("p",[e._v("使用"),t("code",[e._v("@Component")]),e._v("装饰vue类组件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import Vue from 'vue'\nimport Component from 'vue-class-component'\n\n// HelloWorld class will be a Vue component\n@Component\nexport default class HelloWorld extends Vue {}\n")])])]),t("h3",{attrs:{id:"data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[e._v("#")]),e._v(" Data")]),e._v(" "),t("p",[e._v("初始数据可以写成类属性")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template>\n  <div>{{ message }}</div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport Component from 'vue-class-component'\n\n@Component\nexport default class HelloWorld extends Vue {\n  // Declared as component data\n  message = 'Hello World!'\n}\n<\/script>\n")])])]),t("blockquote",[t("p",[e._v("注意，如果初始值为"),t("code",[e._v("undefined")]),e._v("，类属性将不会响应，这意味着属性的变化将不会被检测到,为了避免这种情况，初始值可以设置成"),t("code",[e._v("null")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import Vue from 'vue'\nimport Component from 'vue-class-component'\n\n@Component\nexport default class HelloWorld extends Vue {\n  // `message` will be reactive with `null` value\n  message = null\n\n  data() {\n    return {\n      // 如果通过`data hook`设置的值为undefined，那么值是动态的\n      hello: undefined\n    }\n  }\n}\n")])])]),t("h3",{attrs:{id:"方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),t("p",[e._v("组件方法可以直接声明为类原型方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template>\n  <button v-on:click=\"hello\">Click</button>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport Component from 'vue-class-component'\n\n@Component\nexport default class HelloWorld extends Vue {\n  // Declared as component method\n  hello() {\n    console.log('Hello World!')\n  }\n}\n<\/script>\n")])])]),t("h3",{attrs:{id:"计算属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算属性"}},[e._v("#")]),e._v(" 计算属性")]),e._v(" "),t("p",[e._v("计算属性可以声明为类属性getter / setter")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template>\n  <input v-model=\"name\">\n</template>\n\n<script>\nimport Vue from 'vue'\nimport Component from 'vue-class-component'\n\n@Component\nexport default class HelloWorld extends Vue {\n  firstName = 'John'\n  lastName = 'Doe'\n\n  // Declared as computed property getter\n  get name() {\n    return this.firstName + ' ' + this.lastName\n  }\n\n  // Declared as computed property setter\n  set name(value) {\n    const splitted = value.split(' ')\n    this.firstName = splitted[0]\n    this.lastName = splitted[1] || ''\n  }\n}\n<\/script>\n")])])]),t("h3",{attrs:{id:"hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),t("p",[e._v("data、render和所有Vue生命周期钩子也可以直接声明为类原型方法，但是不能在实例本身上调用它们。在声明自定义方法时，应该避免使用这些保留名。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import Vue from 'vue'\nimport Component from 'vue-class-component'\n\n@Component\nexport default class HelloWorld extends Vue {\n  // Declare mounted lifecycle hook\n  mounted() {\n    console.log('mounted')\n  }\n\n  // Declare render function\n  render() {\n    return <div>Hello World!</div>\n  }\n}\n")])])]),t("h3",{attrs:{id:"其他选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他选项"}},[e._v("#")]),e._v(" 其他选项")]),e._v(" "),t("p",[e._v("除了上面的选项，所有其他的选项通过装饰器"),t("code",[e._v("@Component")]),e._v("传入")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template>\n  <OtherComponent />\n</template>\n\n<script>\nimport Vue from 'vue'\nimport Component from 'vue-class-component'\nimport OtherComponent from './OtherComponent.vue'\n\n@Component({\n  // Specify `components` option.\n  // See Vue.js docs for all available options:\n  // https://vuejs.org/v2/api/#Options-Data\n  components: {\n    OtherComponent\n  }\n})\nexport default class HelloWorld extends Vue {}\n<\/script>\n")])])]),t("h2",{attrs:{id:"额外的hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#额外的hooks"}},[e._v("#")]),e._v(" 额外的Hooks")]),e._v(" "),t("p",[e._v("如果你使用一些Vue插件(如Vue Router)，您可能需要类组件来解析它们提供的钩子。在这种情况下，"),t("code",[e._v("Component.registerhook")]),e._v("允许您注册这样的钩子:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// class-component-hooks.js\nimport Component from 'vue-class-component'\n\n// Register the router hooks with their names\nComponent.registerHooks([\n  'beforeRouteEnter',\n  'beforeRouteLeave',\n  'beforeRouteUpdate'\n])\n")])])]),t("p",[e._v("注册了钩子后，类组件将其实现为类原型方法:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import Vue from 'vue'\nimport Component from 'vue-class-component'\n\n@Component\nexport default class HelloWorld extends Vue {\n  // The class component now treats beforeRouteEnter,\n  // beforeRouteUpdate and beforeRouteLeave as Vue Router hooks\n  beforeRouteEnter(to, from, next) {\n    console.log('beforeRouteEnter')\n    next()\n  }\n\n  beforeRouteUpdate(to, from, next) {\n    console.log('beforeRouteUpdate')\n    next()\n  }\n\n  beforeRouteLeave(to, from, next) {\n    console.log('beforeRouteLeave')\n    next()\n  }\n}\n")])])]),t("p",[e._v("建议在单独的文件中编写此注册代码，因为您必须在任何组件定义之前注册它们。你可以通过将钩子注册的import语句放在主文件的顶部来确保执行顺序:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// main.js\n\n// Make sure to register before importing any components\nimport './class-component-hooks'\n\nimport Vue from 'vue'\nimport App from './App'\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n})\n")])])]),t("h2",{attrs:{id:"自定义装饰器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义装饰器"}},[e._v("#")]),e._v(" 自定义装饰器")]),e._v(" "),t("p",[e._v("您可以通过创建自己的decorator来扩展此库的功能。Vue类组件提供了"),t("code",[e._v("createDecorator")]),e._v("方法来创建自定义decorator。"),t("code",[e._v("createDecorator")]),e._v("期望一个回调函数作为第一个参数，这个回调函数将收到以下参数:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("options")]),e._v(": Vue组件选项对象。此对象的更改将影响所提供的组件。")]),e._v(" "),t("li",[t("code",[e._v("key")]),e._v(": 应用decorator的属性或方法键。")]),e._v(" "),t("li",[t("code",[e._v("parameterIndex")]),e._v(": The index of a decorated argument if the custom decorator is used for an argument.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// decorators.js\nimport { createDecorator } from 'vue-class-component'\n\n// 声明 Log 装饰器.\nexport const Log = createDecorator((options, key) => {\n  // 保留原来的方法供以后使用。\n  const originalMethod = options.methods[key]\n\n  // 为原方法包裹一层，添加自己的逻辑\n  options.methods[key] = function wrapperMethod(...args) {\n    // Print a log.\n    console.log(`Invoked: ${key}(`, ...args, ')')\n\n    // Invoke the original method.\n    originalMethod.apply(this, args)\n  }\n})\n")])])]),t("p",[e._v("使用它作为方法装饰器:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import Vue from 'vue'\nimport Component from 'vue-class-component'\nimport { Log } from './decorators'\n\n@Component\nclass MyComp extends Vue {\n  // It prints a log when `hello` method is invoked.\n  @Log\n  hello(value) {\n    // ...\n  }\n}\n")])])]),t("h2",{attrs:{id:"extend-和-mixins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extend-和-mixins"}},[e._v("#")]),e._v(" Extend 和 Mixins")]),e._v(" "),t("h3",{attrs:{id:"extend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extend"}},[e._v("#")]),e._v(" Extend")]),e._v(" "),t("p",[e._v("可以使用原生的继承语法进行继承:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// super.js\nimport Vue from 'vue'\nimport Component from 'vue-class-component'\n\n// Define a super class component\n@Component\nexport default class Super extends Vue {\n  superValue = 'Hello'\n}\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import Super from './super'\nimport Component from 'vue-class-component'\n\n// Extending the Super class component\n@Component\nexport default class HelloWorld extends Super {\n  created() {\n    console.log(this.superValue) // -> Hello\n  }\n}\n")])])]),t("p",[e._v("注意，每个超类都必须是类组件,换句话说，它需要作为祖先继承Vue构造函数，并由"),t("code",[e._v("@Component")]),e._v("装饰器进行装饰")]),e._v(" "),t("h3",{attrs:{id:"mixins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mixins"}},[e._v("#")]),e._v(" Mixins")]),e._v(" "),t("p",[e._v("Vue类组件提供了mixin助手函数，以类的方式使用mixin。通过使用mixin helper, TypeScript可以推断mixin类型并在组件类型上继承它们。")]),e._v(" "),t("p",[e._v("声明mixins文件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// mixins.js\nimport Vue from 'vue'\nimport Component from 'vue-class-component'\n\n// You can declare mixins as the same style as components.\n@Component\nexport class Hello extends Vue {\n  hello = 'Hello'\n}\n\n@Component\nexport class World extends Vue {\n  world = 'World'\n}\n")])])]),t("p",[e._v("在类组件中使用mixins：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import Component, { mixins } from 'vue-class-component'\nimport { Hello, World } from './mixins'\n\n// Use `mixins` helper function instead of `Vue`.\n// `mixin`可以接收任意数量的参数。\n@Component\nexport class HelloWorld extends mixins(Hello, World) {\n  created () {\n    console.log(this.hello + ' ' + this.world + '!') // -> Hello World!\n  }\n}\n")])])]),t("p",[e._v("与超类一样，所有mixin都必须声明为类组件。")])])}),[],!1,null,null,null);n.default=a.exports}}]);