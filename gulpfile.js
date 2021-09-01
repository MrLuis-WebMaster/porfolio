const { src, dest, watch , parallel } = require('gulp');
const sass = require('gulp-dart-sass');
const autoprefixer = require('autoprefixer');
const postcss    = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');
const cache = require('gulp-cache');

const paths = {
    scss: 'assets/scss/**/*.scss',
    // js: 'assets/js/**/*.js',
    // imagenes: 'src/img/**/*'
}

// css es una función que se puede llamar automaticamente
function css() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        // .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe( dest('./assets/css') );
}


// function javascript() {
//     return src(paths.js)
//       .pipe(sourcemaps.init())
//       .pipe(concat('bundle.js')) // final output file name
//       .pipe(terser())
//       .pipe(sourcemaps.write('.'))
//       .pipe(rename({ suffix: '.min' }))
//       .pipe(dest('./assets/js'))
// }




function watchArchivos() {
    watch( paths.scss, css );
    // watch( paths.js, javascript );
}
  
exports.default = parallel(css, watchArchivos ); 