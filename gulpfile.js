var gulp = require("gulp")
var gulp_if = require("gulp-if")
var gulp_util = require("gulp-util")
var gulp_uglify = require("gulp-uglify")
var gulp_rename = require("gulp-rename")

var watchify = require("watchify")
var browserify = require("browserify")

var chalk = require("chalk")
var yargs = require("yargs")
var vinyl_buffer = require("vinyl-buffer")
var vinyl_source = require("vinyl-source-stream")

browserify = browserify(watchify.args).add("./source/viditor.js")

gulp.task("default", function() {
    browserify.bundle()
        .pipe(vinyl_source("viditor.js"))
        .pipe(vinyl_buffer())
        .pipe(gulp_if(yargs.argv.min, gulp_uglify()))
        .pipe(gulp_if(yargs.argv.min, gulp_rename("viditor.min.js")))
        .pipe(gulp.dest("./dist"))
})

gulp.task("watch", function() {
    gulp.start("default")
    browserify = watchify(browserify).on("update", function() {
        gulp.start("default")
    })
})

process.on("uncaughtException", function (error) {
    console.log(chalk.red(error))
    gulp_util.beep()
})
