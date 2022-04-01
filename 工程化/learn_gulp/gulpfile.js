const gulp = require("gulp");
const { dest, src, watch, series, parallel } = require("gulp");
// html文件处理
const htmlmin = require("gulp-htmlmin");
// css补充前缀
const autoprefixer = require("gulp-autoprefixer");
//css压缩
const cssmin = require("gulp-minify-css");
// scss解析
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const sourcemaps = require("gulp-sourcemaps");
// 删除
const del = require("del");
//js压缩
const concat = require("gulp-concat");
const concatDir = require("gulp-concat-dir");
const uglify = require("gulp-uglify");
// 用于ES6转化ES5
const babel = require("gulp-babel");
// npm install @babel/core @babel/cli @babel/preset-env @babel/polyfill gulp-babel -D

const htmlReplace = require("gulp-html-replace");
// html文件压缩
function miniHtml() {
  var options = {
    removeComments: true, //清除HTML注释
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    minifyJS: true, //压缩页面JS
    minifyCSS: true, //压缩页面CSS
  };
  return gulp.src("build/**/*.html").pipe(htmlmin(options)).pipe(dest("build"));
}
//css添加浏览器前缀
function buildAutoprefixer() {
  return (
    src(["src/assets/styles/**/*.css"])
      // 补全前缀
      .pipe(
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
          ],
          grid: true,
        })
      )
      .pipe(cssmin({ compatibility: "ie8" }))
      .pipe(concat("all.min.css"))
      .pipe(dest("build/assets/styles"))
  );
}
// miniJs
function miniJs() {
  return gulp
    .src("src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("all.min.js"))
    .pipe(sourcemaps.write())
    .pipe(dest("build/assets/js"));
}

// 修改html文件标签
function htmlReplaceLink() {
  return gulp
    .src("src/**/*.html")
    .pipe(
      // 这里需要注意的是需要在html需要替换的地方用对应的
      // < !--build: css-- >< !--endbuild -->
      // < !--build: js-- >< !--endbuild --> 包裹起来,否则htmlReplace无效
      htmlReplace({
        css: "./assets/styles/all.min.css",
        js: "./assets/js/all.min.js",
      })
    )
    .pipe(dest("build"));
}
// sass解析
function sassToCss() {
  return gulp
    .src("src/sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ compress: true }).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest("src/assets/styles"));
}
// 监听scss文件修改
function watcher() {
  watch(["src/sass/**/*.scss"], series(sassToCss, buildAutoprefixer));
}
// move
function move() {
  return gulp.src("src/assets/images/**").pipe(dest("build/assets/images"));
}

gulp.task("dev", watcher);

gulp.task(
  "build",
  series(move, sassToCss, buildAutoprefixer, miniJs, htmlReplaceLink , miniHtml)
);

// TODO: bower-sync 配置浏览器热重载