// const { sum, add } = require('./util') common js module
// import { sum } from './util.js'
// import { appendFile } from 'fs'
import { readFile, appendFile } from 'fs/promises'

const read_file = async (file_name) => {
    const data = await readFile(file_name, "utf-8")
    console.log(data)
}
read_file('sample.txt')

const append_file = async (file_name, content) => {
    await appendFile(file_name, content)
}

console.log(append_file("sample.txt", "Yuhooooo"))
// console.log(sum(12, 3))