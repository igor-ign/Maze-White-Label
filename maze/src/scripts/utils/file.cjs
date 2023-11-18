const fs = require("fs")

function showFileNotFoundMessageAndExitProcess(file) {
    console.log(`File ${file} not found`)
    process.exit(1)
}

// @ts-ignore 
function writeFile(file, string) {
    if (fs.existsSync(file)) {
        fs.writeFileSync(file, string)

        return true
    }

    showFileNotFoundMessageAndExitProcess(file)
}

function readFile(file) {
    if (fs.existsSync(file)) {
        const fileData = fs.readFileSync(file, "utf8", () => {
            console.log(`An error ocurred while reading ${file}`)
            process.exit(1)
        })

        return fileData
    }

    showFileNotFoundMessageAndExitProcess(file)
}

module.exports = {
    writeFile,
    readFile
}