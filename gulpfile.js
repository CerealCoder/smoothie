var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Browser Sync Task
gulp.task('browser-sync', function(){

   var files = [
      'index.html',
      'main.css'
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
      .pipe(prefix({

         browsers: ['last 2 versions', '> 1%', 'ie 8', 'ie 7'],
         cascade: true,
         remove: true
      }))
      .pipe(gulp.dest('./'))
      .pipe(reload({stream: true}));


});


// Watch task

gulp.task('watch', function(){

   gulp.watch('./sass/**/*.sass', ['sass']);

});



gulp.task('default', ['sass', 'browser-sync', 'watch']);
