const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("html", done => {
    gulp.src("*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());

    done();
});
gulp.task("htmlcon", done => {
    gulp.src("html/*.html")
        .pipe(gulp.dest("dist/html"))
        .pipe(connect.reload());

    done();
});

gulp.task("copyjs", done => {
    gulp.src("js/*.js").pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());

    done();
})
gulp.task("copyImg", done => {

    gulp.src("images/**/*").pipe(gulp.dest("dist/images"))
        .pipe(connect.reload());
    done();

});
gulp.task("font", done => {
    gulp.src("font/**")
        .pipe(gulp.dest("dist/font"))
        .pipe(connect.reload());

    done();
});


gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());

    done();
});

gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    })

    done();
});

gulp.task("build", gulp.series("html", "copyjs", "copyImg", "htmlcon", "font", "sass"));

gulp.task("watch", done => {
    gulp.watch("*.html", gulp.series("html"));
    gulp.watch("html/*.html", gulp.series("htmlcon"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    gulp.watch("images/**", gulp.series("copyImg"))
    gulp.watch("font/**", gulp.series("font"));
    gulp.watch("js/*.js", gulp.series("copyjs"))


    done();
});

gulp.task("default", gulp.series("build", "server", "watch"));