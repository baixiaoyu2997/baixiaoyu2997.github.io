(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{464:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("本文实例是由Ramda编写")])]),t._v(" "),a("h2",{attrs:{id:"什么是函数式编程？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是函数式编程？"}},[t._v("#")]),t._v(" 什么是函数式编程？")]),t._v(" "),a("p",[t._v("形式：数据可以不断的从一个函数的输出可以流入另一个函数输入"),a("br"),t._v("\n函数式编程的思维过程着眼点是函数，而不是过程，它强调的是如何通过函数的组合变换去解决问题，而不是我通过写什么样的语句去解决问题，当你的代码越来越多的时候，这种函数的拆分和组合就会产生出强大的力量。"),a("br"),t._v("\n在我们的编程世界中，我们需要处理的其实也只有“数据”和“关系”，而关系就是函数。我们所谓的编程工作也不过就是在找一种映射关系。")]),t._v(" "),a("h2",{attrs:{id:"函数式编程的特点？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程的特点？"}},[t._v("#")]),t._v(" 函数式编程的特点？")]),t._v(" "),a("ul",[a("li",[t._v("函数是“一等公民”")]),t._v(" "),a("li",[t._v("声明式编程 (Declarative Programming)")]),t._v(" "),a("li",[t._v("惰性执行：函数只在需要的时候执行，即不产生无意义的中间变量")]),t._v(" "),a("li",[t._v("无状态和数据不可变 (Statelessness and Immutable data)")]),t._v(" "),a("li",[t._v("没有副作用（No Side Effects）")]),t._v(" "),a("li",[t._v("纯函数 (pure functions)")])]),t._v(" "),a("h3",{attrs:{id:"纯函数的好处？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纯函数的好处？"}},[t._v("#")]),t._v(" 纯函数的好处？")]),t._v(" "),a("ul",[a("li",[t._v("便于测试和优化：由于纯函数对于相同的输入永远会返回相同的结果，因此我们可以轻松断言函数的执行结果，同时也可以保证函数的优化不会影响其他代码的执行。这十分符合测试驱动开发 TDD（Test-Driven Development） 的思想，这样产生的代码往往健壮性更强。")]),t._v(" "),a("li",[t._v("可缓存性：因为相同的输入总是可以返回相同的输出，因此，我们可以提前缓存函数的执行结果")]),t._v(" "),a("li",[t._v("自文档化：由于纯函数没有副作用，所以其依赖很明确，因此更易于观察和理解")]),t._v(" "),a("li",[t._v("更少的 Bug：使用纯函数意味着你的函数中不存在指向不明的 this，不存在对全局变量的引用，不存在对参数的修改，这些共享状态往往是绝大多数 bug 的源头。")])]),t._v(" "),a("h2",{attrs:{id:"柯里化（currying）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#柯里化（currying）"}},[t._v("#")]),t._v(" 柯里化（Currying）")]),t._v(" "),a("p",[t._v("柯里化的意思是将一个多元函数，转换成一个依次调用的单元函数。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("f(a,b,c) → f(a)(b)(c)\n")])])]),a("p",[t._v("为什么单元函数很重要？如果我们想顺利的组装流水线，那我就必须保证我每个加工站的输出刚好能流向下个工作站的输入。因此，在流水线上的加工站必须都是单元函数。")]),t._v(" "),a("h3",{attrs:{id:"高级柯里化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级柯里化"}},[t._v("#")]),t._v(" 高级柯里化")]),t._v(" "),a("p",[t._v("我们使用的 Lodash，Ramda 这些库中实现的 curry 函数的行为好像和柯里化不太一样呢？\n其实，这些库中的 curry 函数都做了很多优化，导致这些库中实现的柯里化其实不是纯粹的柯里化，我们可以把他们理解为“高级柯里化”。这些版本实现可以根据你输入的参数个数，返回一个柯里化函数或者结果值。即，如果你给的参数个数满足了函数条件，则返回值。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const add = R.curry((x, y, z) =>  x + y + z);\nconst add7 = add(7);\nadd(7)(1) // function\n")])])]),a("h2",{attrs:{id:"函数组合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数组合"}},[t._v("#")]),t._v(" 函数组合")]),t._v(" "),a("p",[t._v("函数组合的目的是将多个函数组合成一个函数。下面来看一个简化版的实现：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("compose")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("g")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3")]),t._v("\n\n")])])]),a("p",[t._v("我们可以看到 compose 就实现了一个简单的功能：形成了一个全新的函数，而这个函数就是一条从 g -> f 的流水线。同时我们可以很轻易的发现 compose 其实是满足结合律的,只要其顺序一致，最后的结果是一致的")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("t")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"实践经验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实践经验"}},[t._v("#")]),t._v(" 实践经验")]),t._v(" "),a("h3",{attrs:{id:"柯里化中把要操作的数据放到最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#柯里化中把要操作的数据放到最后"}},[t._v("#")]),t._v(" 柯里化中把要操作的数据放到最后")]),t._v(" "),a("p",[t._v("因为我们的输出通常是需要操作的数据，这样当我们固定了之前的参数（我们可以称为配置）后，可以变成一个单元函数，直接被函数组合使用，这也是其他的函数式语言遵循的规范：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" split "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" join "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" replaceSpaceWithComma "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" replaceCommaWithDash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("但是如果有些函数没遵循这个约定，我们的函数该如何组合？当然也不是没办法，很多库都提供了占位符的概念，例如 Ramda 提供了一个占位符号（R.__）。假设我们的 split 把 str 放在首位")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" split "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" replaceSpaceWithComma "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("R")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"函数组合中函数要求单输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数组合中函数要求单输入"}},[t._v("#")]),t._v(" 函数组合中函数要求单输入")]),t._v(" "),a("p",[t._v("函数组合有个使用要点，就是中间的函数一定是单输入的，这个很好理解，之前也说过了，因为函数的输出都是单个的（数组也只是一个元素）。")]),t._v(" "),a("h2",{attrs:{id:"函数式编程的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程的优点"}},[t._v("#")]),t._v(" 函数式编程的优点")]),t._v(" "),a("ul",[a("li",[t._v("代码简洁，开发快速")]),t._v(" "),a("li",[t._v("接近自然语言，易于理解")]),t._v(" "),a("li",[t._v('易于"并发编程"')]),t._v(" "),a("li",[t._v("更少的出错概率")])]),t._v(" "),a("h2",{attrs:{id:"函数式编程的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程的缺点"}},[t._v("#")]),t._v(" 函数式编程的缺点")]),t._v(" "),a("ul",[a("li",[t._v("性能")]),t._v(" "),a("li",[t._v("资源占用")]),t._v(" "),a("li",[t._v("递归陷阱")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("学习函数式编程真正的意义在于：让你意识到在指令式编程，面向对象编程之外，还有一种全新的编程思路，一种用函数的角度去抽象问题的思路。"),a("br"),t._v("\n我们完全可以在日常工作中将函数式编程作为一种辅助手段，在条件允许的前提下，借鉴函数式编程中的思路，例如：")]),t._v(" "),a("ul",[a("li",[t._v("多使用纯函数减少副作用的影响。")]),t._v(" "),a("li",[t._v("使用柯里化增加函数适用率。")]),t._v(" "),a("li",[t._v("使用 Pointfree 编程风格，减少无意义的中间变量，让代码更且可读性。")])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/81302150",target:"_blank",rel:"noopener noreferrer"}},[t._v("简明 JavaScript 函数式编程——入门篇"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);