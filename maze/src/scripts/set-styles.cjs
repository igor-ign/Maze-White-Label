const path = require("path")
const { writeFile, readFile } = require("./utils/file.cjs")

const STYLES_PATH = path.resolve(__dirname, '..', 'styles', 'index.scss')
const STYLES_IMPORT = `@import 'variables/${process.env.REACT_APP_BRAND_NAME}-colors'`

function changeColorVariableFileImportByBrand() {
    const stylesExportFileData = readFile(STYLES_PATH)
    const filePerLine = stylesExportFileData.split(';')

    filePerLine[0] = STYLES_IMPORT
    const newStylesImportContent = filePerLine.join(";")
    writeFile(STYLES_PATH, newStylesImportContent)
}

module.exports = {
    changeColorVariableFileImportByBrand
}

