const fs = require('fs-extra');
const path = require('path');

const postsDir = path.join(__dirname, 'src', 'posts');
const publicDir = path.join(__dirname, 'public', 'posts');

// 清空目标目录
fs.emptyDirSync(publicDir);

// 复制图片
fs.readdirSync(postsDir).forEach((postFolder) => {
  const postPath = path.join(postsDir, postFolder);
  if (fs.statSync(postPath).isDirectory()) {
    const publicPostPath = path.join(publicDir, postFolder);
    fs.ensureDirSync(publicPostPath);

    fs.readdirSync(postPath).forEach((file) => {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
        fs.copyFileSync(
          path.join(postPath, file),
          path.join(publicPostPath, file),
        );
      }
    });
  }
});

console.log('All images are copied to public/posts/{slugs} directory!');
