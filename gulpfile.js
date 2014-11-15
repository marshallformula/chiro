var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var del = require('del');
var vinyl = require('vinyl-paths');


gulp.task('clean',function(){
    gulp.src('dist/**/*')
        .pipe(vinyl(del));
});

gulp.task('jade', function(){
    gulp.src('jade/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('dist'));
});


gulp.task('lesscss', function(){
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});


gulp.task('default',['clean','jade','lesscss'], function(){
    gulp.watch('jade/*',['jade']);
    gulp.watch('less/*',['lesscss']);

});


