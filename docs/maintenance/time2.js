// window.onload ：等待网页中所有标签加载完成后，再执行事件中的代码
      // 网页加载事件：保障代码运行时，网页标签已经加载完成
      window.onload = function () {
        var _countdown = document.getElementById("countdown");
        var _time;

        // 倒计时函数
        function countDownFn() {
          // 获取当前时间
          var date = new Date();
          // 获取中秋时间
          var tgt = new Date("2022-12-24 23:50:00");
          // 获取时间差
          var distance = tgt - date;
          if (distance <= 0) {
            alert("目标时间不能小于当前时间");
            clearInterval(_time);
            return;
          }
          console.log(distance, "时间差");

          // 计算剩余时间
          var d = Math.floor(distance / (1000 * 60 * 60 * 24));
          var h = Math.floor((distance / (1000 * 60 * 60)) % 24);
          var m = Math.floor((distance / (1000 * 60)) % 60);
          var ms = distance % 1000;

          var time =
            d.toString().padStart(2, "0") +
            "天" +
            h.toString().padStart(2, "0") +
            "时" +
            m.toString().padStart(2, "0") +
            "分" +
            ms.toString().padStart(3, "0");

          _countdown.innerText = time;
        }

        _time = setInterval(function () {
          countDownFn();
        }, 80);
      };