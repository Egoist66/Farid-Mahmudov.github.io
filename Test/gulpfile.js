const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const kit = require('gulp-kit');




// Static server
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "src",
            port: 3000,
            notify: false

        }
    });
});


gulp.task('buildStyles', function () {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false,
            overrideBrowserslist: ['last 3 versions'],

        }))
        .pipe(gulp.dest('src/styles'));
})

gulp.task('kit', function () {
    return gulp.src("src/*.kit")
        .pipe(kit())
        .pipe(gulp.dest('src'))
        .pipe(browserSync.reload({ stream: true }));
})


gulp.task('watch', function () {

    gulp.watch("src/sass/*.+(scss|sass)", gulp.parallel("buildStyles"));
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/*.kit', gulp.parallel('kit'));



})




gulp.task('default', gulp.parallel('kit', 'watch', 'server', 'buildStyles'));




