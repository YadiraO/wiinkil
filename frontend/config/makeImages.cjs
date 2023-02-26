const fs = require('fs')
const path = require('path')
const env = process.env

function _main_() {
    const _path = `${env.PWD}/src/resources/images`
    const list = fs.readdirSync(_path)
    const allFiles = _readList(list)
    const keys_string = _extract_names(allFiles)

    let result = `// Autogenerated file run "yarn mk-images"\n\nexport const imageRepository = \n${JSON.stringify(
        allFiles,
        true,
        2
    )}\n\nexport type iKeyNames = ${keys_string}`

    fs.writeFileSync(`${env.PWD}/src/resources/imageRepository.ts`, result)

    console.log('result terminated')
}

function _extract_names(allFiles) {
    const arr = Object.keys(allFiles)
    let txt = '\n '

    for (const item of arr) {
        txt += ` '${item}'\n|`
    }

    return txt.substring(0, txt.length - 1)
}

function _deeperLevel(json, file, item, root) {
    for (const key in file) {
        if (Object.hasOwnProperty.call(file, key)) {
            const keyName = root
                ? `${item.replace('.json', '')}:${key}`
                : `${item}.${key}`
            if (typeof file[key] === 'object') {
                _deeperLevel(json, file[key], keyName, false)
            } else {
                json[keyName] = file[key]
            }
        }
    }
}

function _readList(list) {
    const json = {}
    for (const item of list) {
        const file = JSON.parse(
            fs.readFileSync(
                `${env.PWD}/src/resources/images/${item}`,
                'utf8',
                (err, data) => {
                    if (err) {
                        return {}
                    }
                }
            )
        )
        _deeperLevel(json, file, item, true)
    }
    return json
}

_main_()
