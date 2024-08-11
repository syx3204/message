// build.js
const fs = require('fs');

// 读取原始 HTML 文件
fs.readFile('./index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // 获取 GitHub Token
  const githubToken = process.env.GITHUB_TOKEN;

  // 替换占位符
  const result = data.replace(/MY_GITHUB_TOKEN/g, githubToken);

  // 写回文件
  fs.writeFile('./index.html', result, 'utf8', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('GitHub Token injected successfully.');
    }
  });
});
