import path from 'path'
// @ts-ignore
import sassTrue from 'sass-true'
import glob from 'glob'

// /**
//  * @jest-environment node
//  */
describe('SASS', () => {
  const sassTestFiles = glob.sync(path.resolve(process.cwd(), 'src/**/*.test.scss'))

  sassTestFiles.forEach(file => sassTrue.runSass({ file }, { describe, it }))
})
