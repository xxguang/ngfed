const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const less = require('gulp-less');
const concat = require('gulp-concat');
// const autoprefix = require('gulp-autoprefixer');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
const del = require('del');

gulp.task('clean', async function () {
  await del('lib/**');
  await del('es/**');
  await del('dist/**');
});

gulp.task('cjs', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'CommonJS',
  });
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/'));
});

gulp.task('es', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'ESNext',
  });
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('es/'));
});

gulp.task('declaration', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

gulp.task('copyReadme', async function () {
  //await gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'));
});

gulp.task('copyFile', async function () {
  await gulp.src('./src/sheet/components/dist/**/*.*').pipe(gulp.dest('es/sheet/components/dist/'));
  await gulp
    .src('./src/sheet/components/dist/**/*.*')
    .pipe(gulp.dest('lib/sheet/components/dist/'));
  await gulp.src('./src/**/*.less').pipe(gulp.dest('es/'));
  await gulp.src('./src/**/*.less').pipe(gulp.dest('lib/'));
});

gulp.task('compileCss', async function () {
  var plugins = [autoprefixer({ browsers: ['last 1 version'] })];

  await gulp
    .src('./src/**/*.less')
    .pipe(less())
    .pipe(concat('index.css'))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('es/style'));

  await gulp
    .src('./src/**/*.less')
    .pipe(less())
    .pipe(concat('index.css'))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('lib/style'));
});

exports.default = gulp.series('clean', 'cjs', 'es', 'declaration', 'copyFile', 'compileCss');
