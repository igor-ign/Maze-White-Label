const path = require("path")
const { writeFile } = require("./utils/file.cjs")

const IMAGES_PATH = path.resolve(__dirname, '..', 'assets', 'images', 'index.js')
const IMAGES_IMPORT = `export * from './${process.env.REACT_APP_BRAND_NAME}/index.js'`

function setBrandImages() {
    writeFile(IMAGES_PATH, IMAGES_IMPORT)
}

module.exports = {
    setBrandImages
}