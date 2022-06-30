module.exports = {
  // type 类型(定义之后，可通过上下键选择)
  types: [
    { value: "feat ", name: "✨ Features | 新功能" },
    { value: "fix", name: "🐛 Bug Fixes | Bug 修复" },
    { value: "docs", name: "docs:📝 Documentation | 文档" },
    { value: "style", name: "💎 Styles | 风格" },
    { value: "refactor", name: "📦 Code Refactoring | 代码重构" },
    { value: "perf", name: "🚀 Performance Improvements | 性能优化" },
    { value: "test", name: "🚨 Tests | 测试" },
    { value: "build", name: "⚙️‍ Build System | 构建" },
    { value: "ci", name: "🔧 Continuous Integration | CI 配置" },
    { value: "chore", name: "♻️ Chores | 其他更新(不影响源文件、测试用例等)" },
    { value: "revert", name: "⏪ Reverts | 回退" },
  ],

  // scope 类型(定义之后，可通过上下键选择)
  scopes: [
    ["components", "组件相关"],
    ["hooks", "hook 相关"],
    ["utils", "utils 相关"],
    ["element-ui", "对 element-ui 的调整"],
    ["styles", "样式相关"],
    ["deps", "项目依赖"],
    ["auth", "对 auth 修改"],
    ["other", "其他修改"],
    // 如果选择 custom，后面会让你再输入一个自定义的 scope。也可以不设置此项，把后面的 allowCustomScopes 设置为 true
    ["custom", "以上都不是？我要自定义"],
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`,
    };
  }),

  // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
  // allowCustomScopes: true,

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // 针对每一个 type 去定义对应的 scopes，例如 fix
  /*
  scopeOverrides: {
    fix: [
      { name: 'merge' },
      { name: 'style' },
      { name: 'e2eTest' },
      { name: 'unitTest' }
    ]
  },
  */

  // 交互提示信息
  messages: {
    type: "确保本次提交遵循 Angular 规范！\n选择你要提交的类型:",
    scope: "\n选择一个 scope(可选):",
    // 选择 scope: custom 时会出下面的提示
    customScope: "请输入自定义的 scope:",
    subject: "填写简短精炼的变更描述:\n",
    body: '填写更加详细的变更描述(可选)。使用 "|" 换行:\n',
    breaking: "列举非兼容性重大的变更(可选):\n",
    footer: "列举出所有变更的 ISSUES CLOSED(可选)。 例如: #31, #34:\n",
    confirmCommit: "确认提交？",
  },

  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: ["feat", "fix"],

  // 跳过要询问的步骤
  skipQuestions: ["body", "footer"],

  // subject 限制长度
  subjectLimit: 100,
  breaklineChar: "|", // 支持 body 和 footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
};
