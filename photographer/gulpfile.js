
// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));

// gulp.task('sass', function () {
//     return gulp.src('src/sass/style.sass')
//         .pipe(sass())
//         .pipe(gulp.dest('src/style/style.css'))
// });

const fileinclude = require('gulp-file-include');
const gulp = require('gulp');

gulp.task('fileinclude', async function () {
    gulp.src(['index.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./includes'));
});