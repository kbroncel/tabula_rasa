"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const browserify = require("gulp-browserify");
const babel = require("gulp-babel");

gulp.task("sass", function(){
    return gulp.src("./src/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./assets/css"));
});

gulp.task("makeItWork", function(){
    return gulp.src("./src/js/**/*.js")
    .pipe(browserify())
    .pipe(babel({presets: ["env"]}))
    .pipe(gulp.dest("./assets/js"));
});

gulp.task("watch", function(){
    gulp.watch("./src/scss/**/*.scss", ["sass"]);
    gulp.watch("./src/js/**/*.js", ["makeItWork"]);
});