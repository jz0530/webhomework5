# Quiz 后台管理

Vue 2 + Element UI 实现的后台管理练习：用户管理、题目管理两个页面，包含查询表单、数据表格、分页和添加弹窗。

## 技术栈

- Vue 2.7.16
- Element UI 2.15.14
- Vue Router 3.5.1
- Vue CLI 5

## 运行

```bash
npm install
npm run serve
```

浏览器打开 http://localhost:8080 ，默认进入用户管理页。

## 打包

```bash
npm run build
```

产物在 `dist/`，资源使用相对路径，可直接部署到 Vercel 等静态托管。

## 目录结构

```
src/
├─ App.vue                # 根组件，放 router-view
├─ main.js                # 入口，注册 Element UI 与路由
├─ router/index.js        # /user、/question 以及 / 重定向
└─ views/element/
   ├─ UserView.vue        # 用户管理
   └─ QuestionView.vue    # 题目管理
```

## 已实现

- 整体布局：`el-container`，900px 高、2px 红色边框、40px 标题、200px 侧栏
- 侧栏「系统信息管理」菜单，用户管理 / 题目管理通过 `router-link` 切换
- 用户管理：用户名查询、四行示例数据（日期图标、用户名标签、密码）、编辑 / 删除按钮、分页（总数 1000）
- 题目管理：题目查询、五行选择题数据、编辑 / 删除按钮、分页
- 两个「添加」弹窗，确定按钮关闭弹窗

## 说明

目前为纯前端演示：查询、编辑、删除只打印日志或弹出提示，添加弹窗不会真正写入数据，分页总数为演示值，尚未接入后端接口。