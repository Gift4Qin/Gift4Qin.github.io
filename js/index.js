function showElementBasedOnDate() {
    
    var today = new Date();
    var month = today.getMonth() + 1; // 获取当前月份，0是一月
    var date = today.getDate(); // 获取当前日期
  
    // 定义一个对象来存储日期和对应的链接
    var dateLinks = {
        '10-28': 'birthday/index.html',
        '11-2': 'birthday/index.html',
        '1-1': 'https://www.baidu.com',
        '1-28': 'https://www.baidu.com'
    };

    // 根据日期设置href属性
    var dateString = `${month}-${date}`;
    var matchedLink = dateLinks[dateString];

    if (matchedLink) {
        document.getElementById('message').innerHTML = 'Bingo!今天是个特殊的日子!';
        document.getElementById('web').href = matchedLink;
    } else {
        document.getElementById('message').innerHTML = 'Sorry!网站好像没什么变化!';
        document.getElementById('button').style.display = 'none';
    }

}
  
// 当页面加载完成后执行这个函数
window.onload = showElementBasedOnDate;