//object desctructuring
const { src, dest, watch, series } = require("gulp");
//constant
const sass = require("gulp-sass")(require("sass"))

//Object Path
const paths = {
  url_scss: "sass/**/*.scss"
}

//Functions
function compileCss () {
  return src(paths.url_scss)
    .pipe(sass())
    .pipe(dest('./css'))
}

function watchFile(){
    watch("style.scss", compileCss)

}

//name funciones
exports.compileCss = compileCss;
exports.watchFile = watchFile;