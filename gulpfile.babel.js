import del from 'del';

import gulp from 'gulp';
import sass from 'gulp-sass';
import jade from 'gulp-jade';
import copy from 'gulp-copy';
import sourcemaps from 'gulp-sourcemaps';

let paths = {
  features: ['src/feature/**/*.js'],
  templates: ['src/**/*.jade'],
  scripts: ['static/script/*'],
  styles: ['src/style/**/*'],
  images: ['static/img/*'],
  fonts: ['static/font/*'],
  tests: ['/tests/**/*']
};

gulp.task('clean', ['clean:html', 'clean:css', 'clean:js']);
gulp.task('clean:html', () => del(['compiled/**/*.html']));
gulp.task('clean:css', () => del(['compiled/**/*.css']));
gulp.task('clean:js', () => del(['compiled/**/*.js']));

gulp.task('compile:jade', ['clean:html'], () => {
  return gulp.src(['src/**/*.jade'])
    .pipe(sourcemaps.init())
      .pipe(jade())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('compiled/'));
});

gulp.task('compile:scss', ['clean:css'], () => {
  return gulp.src(['src/**/*.scss'])
    .pipe(sourcemaps.init())
      .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('compiled/'));
});

gulp.task('move:js', ['clean:js'], () => gulp.src(['src/**/*.js']).pipe(copy('compiled/', { prefix: 1 })));
gulp.task('compile', ['compile:scss', 'compile:jade', 'move:js']);

gulp.task('watch', () => {
  gulp.watch(['src/**/*.jade'], ['compile:jade']);
  gulp.watch(['src/**/*.scss'], ['compile:scss']);
  gulp.watch(['src/**/*.js'], ['move:js']);
});

gulp.task('default', ['watch', 'compile']);