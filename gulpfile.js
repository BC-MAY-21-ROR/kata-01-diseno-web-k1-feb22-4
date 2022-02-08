//object desctructuring
const { src, dest, watch, series } = require("gulp");

const sass = require("gulp-sass")(require("sass"))

//Object Path

//Object
const paths = {
  url_scss: "styles.scss"
}

//Function
function compileCss (paths) {
  return src(paths.url_scss)
    .pipe(sass())
    .pipe(dest('./css'))
}

function watchFile(){
    watch("style.scss", compileCss)

}


exports.compileCss = compileCss;
exports.watchFile = watchFile;