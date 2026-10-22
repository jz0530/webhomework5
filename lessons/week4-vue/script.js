
new Vue({
  el: '#app',
  data: { message: 'hello vue!', url: 'https://www.baidu.com', age: 20, count: 0, addrs: ['北京', '上海', '西安', '成都', '杭州'], mountedMessage: '' },
  methods: { handle: function () { this.count++; alert('you have clicked me once!'); } },
  mounted: function () { this.mountedMessage = 'Vue 挂载完毕！这里可以编写页面初始化操作。'; }
});
