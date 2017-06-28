var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
// var stylelint = require('stylelint');
// var cssnano = require('cssnano');
var assets = require('postcss-assets');

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 5 versions']}),
        cssnext,
        precss,
        // stylelint,
        // cssnano,
        assets
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});