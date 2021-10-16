const colors_utils = require("./colors-utils")
// @ponicode
describe("colors_utils.getRandomNotRedRgbColor", () => {
    test("0", () => {
        let callFunction = () => {
            colors_utils.getRandomNotRedRgbColor()
        }
    
        expect(callFunction).not.toThrow()
    })
})
