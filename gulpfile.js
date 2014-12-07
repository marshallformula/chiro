var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var del = require('del');
var vinyl = require('vinyl-paths');
var bower = require('gulp-bower');
var concat = require('gulp-concat');


gulp.task('clean',function(){
    gulp.src('dist/**/*.html')
        .pipe(vinyl(del));

    gulp.src('dist/css')
        .pipe(vinyl(del));
});

gulp.task('bower', function(){
    return bower();
});

gulp.task('jade', function(){
    gulp.src('app/jade/**/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('dist'));
});


gulp.task('lesscss', function(){
    gulp.src('app/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});


gulp.task('scripts', function(){
    return gulp.src('app/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default',['clean','jade','lesscss','scripts'], function(){
    gulp.watch('app/jade/**/*.jade',['jade']);
    gulp.watch('app/less/**/*.less',['lesscss']);
    gulp.watch('app/js/**/*.js', ['scripts']);

});

gulp.task('build', ['bower','jade','lesscss','scripts']);


