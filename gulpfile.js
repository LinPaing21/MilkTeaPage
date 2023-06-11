const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('shelby/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({content: ['templates/**/*.html']}))
        .pipe(dest('css'))
}

function watchTask() {
    watch(['shelby/**/*.scss', 'templates/**/*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask);