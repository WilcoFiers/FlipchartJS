'use strict';

const gulp = require('gulp');
const gutil = require("gulp-util");
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const path = require('path');
const watch = require('gulp-watch');
const server = require('gulp-server-livereload');

gulp.task('pack:lib', function () {
  return gulp.src(path.join(__dirname, './lib/flipchart.js'))
  	.pipe(plumber())
    .pipe(webpack( require('./config/webpack-lib') ))
    .pipe(gulp.dest('.'));
});

gulp.task('pack:app', function () {
  return gulp.src(path.join(__dirname, './app/flipchart.jsx'))
  	.pipe(plumber())
    .pipe(webpack( require('./config/webpack-app') ))
    .pipe(gulp.dest('.'));
});

gulp.task('pack', ['pack:lib', 'pack:app']);


gulp.task('watch:lib', function () {
	watch('./lib/**/*.js', function () {
		gulp.start('pack:lib');
	});
});

gulp.task('watch:app', function () {
	watch('./app/**/*.{js,jsx}', function () {
		gulp.start('pack:app');
	});
});

gulp.task('watch', ['watch:lib', 'watch:app']);


gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(server({
		defaultFile: 'flipchart.html',
    	livereload: {
			enable: true,
			filter: function (filename, cb) {
				if (/node_module/.test(filename)) {
					return false;
				}
				cb(/(dist)|(assets)|\.html/.test(filename));
        	},
        },
    	directoryListing: true,
    	open: true
    }));
});

gulp.task('serve', function () {
	gulp.start('pack');
	gulp.start('webserver');
	gulp.start('watch');
});