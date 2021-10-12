// 

// 手写一个promise
function MyPromise(executor) {
    let self = this;                       // 保留this。防止后面方法出现this只想不明的问题
    self.status = 'pending';               // promise的默认状态是pending
    self.success = undefined;              // 保存成功回调传递的值
    self.error = undefined;                // 保存失败回调传递的值
  
    function resolve(success) {
      if (self.status === 'pending') {
        self.status = 'resolved';          // 成功函数将其状态修改为resolved
        self.success=success;              // 将成功的值保存起来
      }
    }
    function reject(error) {
      if (self.status === 'pending') {
        self.status = 'rejected';          // 失败函数将其函数修改为rejected
        self.error=error;                  // 将失败的值保存起来
      }
    }
    executor(resolve, reject);
  }
  
  MyPromise.prototype.then = function(onResolved,onRejected) {
    let self = this;
    if (self.status === 'resolved'); {
        onResolved(self.success);           // 将resolve函数保留的成功值传递作为参数
    }
    if (self.status === 'rejected') {
        onRejected(self.error);             // 将reject函数保留的失败值传递作为参数
    }
  }
  
  new MyPromise((resolve, reject) => {
    console.log('start');
    resolve('success data');
  }).then(res => {
    console.log("res", res);
  })