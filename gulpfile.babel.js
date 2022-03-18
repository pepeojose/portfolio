const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const autoprefixer = require("autoprefixer")
const babel = require("gulp-babel")
const concat = require("gulp-concat")
const terser = require("gulp-terser")
const plumber = require("gulp-plumber")
const cacheBust = require("gulp-cache-bust")
const clean = require("gulp-purgecss")

const browserSync = require('browser-sync')

const server = browserSync.create()

//Variables/constantes
const cssPlugins = [cssnano(), autoprefixer()]
const production = true

gulp.task('html-min', () => {
    return gulp
        .src('./dev/*.html')
        .pipe(plumber())
        .pipe(
            htmlmin({
                collapseWhitespace: true,
                removeComments: true
            })
        )
        .pipe(gulp.dest('./public'));
});

gulp.task('css', () => {
    return gulp
        .src('./dev/css/*.css')
        .pipe(plumber())
        .pipe(concat('styles.css'))
        .pipe(postcss(cssPlugins))
        .pipe(gulp.dest('./public/css'))
        .pipe(server.stream());
});

gulp.task('pug', () => {
    return gulp
        .src('./dev/views/pages/*.pug')
        .pipe(plumber())
        .pipe(
            pug({
                pretty: production ? false : true
            })
        )
        .pipe(
            cacheBust({
                type: 'timestamp'
            })
        )
        .pipe(gulp.dest('./public/'))
})

gulp.task('styles', () => {
    return gulp
        .src('./dev/scss/styles.scss')
        .pipe(plumber())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(postcss(cssPlugins))

        .pipe(gulp.dest('./public/css'))
        .pipe(server.stream())
})

gulp.task("babel", () => {
    return gulp
        .src("./dev/js/*.js")
        .pipe(plumber())
        .pipe(concat("scripts.js"))
        .pipe(babel())
        .pipe(terser())
        .pipe(gulp.dest("./public/js/"))
})

gulp.task('clean', () => {
    return gulp
        .src('./public/css/styles.css')
        .pipe(plumber())
        .pipe(
            clean({
            content: ['./public/*.html']
            })
        )
        .pipe(gulp.dest('./public/css'))
})

gulp.task('default', () => {
    server.init({
        server: './public'
    })

    gulp.watch('./dev/*.html', gulp.series('html-min')).on('change', server.reload)
    gulp.watch('./dev/css/*.css', gulp.series('css'))
    gulp.watch('./dev/views/**/*.pug', gulp.series('pug')).on('change', server.reload)
    gulp.watch('./dev/scss/**/*.scss', gulp.series('styles'))
    gulp.watch("./dev/js/*.js", gulp.series('babel')).on('change', server.reload)
})