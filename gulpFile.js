'use strict';

// Example
// gulp

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var bower = require('gulp-bower');
var cache = require('gulp-cache');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var gulpNgConfig = require('gulp-ng-config');
var ignore = require('gulp-ignore');
var inject = require('gulp-inject');
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');
var open = require('gulp-open');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var vendor = require('gulp-concat-vendor');
var server = require('gulp-express');
var gulpFilter = require('gulp-filter');
var mainBowerFiles = require('gulp-main-bower-files');
var file = require('gulp-file');
var runSequence = require('run-sequence');


gulp.task('default', function (callback) {
    runSequence( 'styles','scripts-vendor-concat','icons','index', 'watch','server', callback);
});


gulp.task('icons', function() {
    return gulp.src(['./gh-app/bower_components/bootstrap/fonts/**.*','./gh-app/bower_components/font-awesome/fonts/**.*'])
        .pipe(gulp.dest('./gh-app/src/webapp/fonts'));
});

gulp.task('styles', function () {
    return gulp.src(['./gh-app/bower_components/bootstrap/dist/css/*.min.css','./gh-app/bower_components/morrisjs/*.css','./gh-app/bower_components/angularjs-datepicker/dist/*.css','./gh-app/bower_components/font-awesome/css/*.min.css'])
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./gh-app/src/webapp/css'))
        .pipe(notify({
            message: 'Styles task complete'
        }));

});

gulp.task('scripts-vendor-concat', function () {
    var filterJS = gulpFilter('**/*.js', { restore: true });

    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(filterJS)
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(filterJS.restore)
        .pipe(gulp.dest('./gh-app/src/webapp/js'))
        .pipe(notify({
            message: 'Scripts task complete'
        }));


});


// Création du fichier index.html avec injection des js et css
gulp.task('index', function () {
    return gulp.src('./gh-app/src/webapp/index.html')
        .pipe(inject(gulp.src(['./gh-app/src/webapp/js/vendor.js','./gh-app/src/webapp/**/*.js', './gh-app/src/webapp/css/**/*.css'], {
            read: false
        }), {
            ignorePath: 'gh-app/src/webapp',
            addRootSlash: false
        }))
        .pipe(gulp.dest('./gh-app/src/webapp'))
        .pipe(notify({
            message: 'Index task complete'
        }));
});


gulp.task('watch', function () {
    gulp.watch('./gh-app/src/webapp/scss/**/*.scss', ['styles']);
    gulp.watch(['./gh-app/src/webapp/app/**/*.*.js', './gh-app/src/webapp/css/**/*.css', './gh-app/src/webapp/**/*.html'], ['index']);
    gulp.watch('./node/**/*.js', ['server']);
});



gulp.task('server', function () {
    // Start the server at the beginning of the task
    server.run(['server.js']);

    gulp.watch(['./gh-app/src/webapp/app/**/*.*.js', './node/**/*.js', './gh-app/src/webapp/css/**/*.css', './gh-app/src/webapp/**/*.html'], server.notify);

    gulp.watch('gh-app/src/webapp/scss/**/*.scss', ['styles']);
    gulp.watch(['server.js'], [server.run]);
});