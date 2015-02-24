var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Browser Sync Task
gulp.task('browser-sync', function(){

   var files = [
      'index.html'
   ];

   browserSync(files,{

      server: {

         baseDir: './'

      }

   });

});

// Compile Sass
gulp.task('sass', function(){

   return sass('./sass/main.sass', {

         style: 'expanded',
         loadPath: './sass'

      })
      .on('error', function(err) {
         console.error('Error!', err.message);
      })
      .pipe(gulp.dest('./'))
      .pipe(reload({stream: true}));


});


// Watch task

gulp.task('watch', function(){

   gulp.watch('./sass/**/*.sass', ['sass']);

});



gulp.task('default', ['sass', 'browser-sync', 'watch']);
