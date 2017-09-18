import Gonzales from '../'


/* ===============
  FUNCTIONS
=============== */

var gonzales = null
var cursorEl = null

const init = () => {
    cursorEl = document.createElement('div')
    document.body.appendChild(cursorEl)

    gonzales = Gonzales()
}

const destroy = () => {
    gonzales.destroy()

    gonzales = null
    cursorEl = null
}


/* ===============
  HOOKS
=============== */

beforeEach(() => { init() })
afterEach(() => { destroy() })


/* ===============
  API TESTS
=============== */

describe('API', () => {

    test('`.add(id, el)` should add a new cursor', () => {
        gonzales.add('test-el', cursorEl)
        expect(gonzales.cursors.length === 1).toBe(true)
    })

})
