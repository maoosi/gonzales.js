import mitt from 'mitt'

class Gonzales {

    /**
        --- CORE ---
    **/

    constructor (selector, options = {}) {
        this.options = {
            hideDefault: options.hideDefault || true
        }

        this.selector = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector

        this.el = this.selector.cloneNode(true)

        this.selector.parentNode.removeChild(this.selector)

        this.emitter = mitt()

        this.node = false
        this.defaultStyle = false
        this.posX = -9999
        this.posY = -9999

        return this
    }

    /**
        --- GLOBAL HELPERS ---
    **/

    _throttle (callback, delay, scope) {
        let last
        let timer

        return function () {
            let context = scope || this
            let now = +new Date()
            let args = arguments

            if (last && now < last + delay) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    last = now
                    callback.apply(context, args)
                }, delay)
            } else {
                last = now
                callback.apply(context, args)
            }
        }
    }

    /**
        --- API ---
    **/

    activate () {
        this._showNode()
    }

    deactivate () {
        this._hideNode()
    }

    destroy () {
        this._destroyNode()
    }

    on (...args) { return this.emitter.on(...args) }
    off (...args) { return this.emitter.off(...args) }

    /**
        --- FUNCTIONS ---
    **/

    _createNode () {
        if (!this.node) {
            this.node = document.createElement('div')
            this.node.setAttribute('style', 'display:none;position:absolute;z-index:9999;left:' + this.posX + 'px;top:' + this.posY + 'px;width:0;height:0;overflow:visible;pointer-events:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;')
            this.node.appendChild(this.el)
            document.body.appendChild(this.node)
        }
    }

    _destroyNode () {
        this._hideNode()

        if (this.node) {
            this.node.parentNode.removeChild(this.node)
            this.node = false
        }
    }

    _showNode () {
        this._createNode()

        if (this.node) {
            this.node.style.display = 'block'
            this._bindEvents()
            this._hideDefault()
        }
    }

    _hideNode () {
        if (this.node) {
            this.node.style.display = 'none'
            this._unbindEvents()
            this._showDefault()
        }
    }

    _hideDefault () {
        if (this.options.hideDefault && !this._defaultStyleExists()) {
            this.defaultStyle = document.createElement('style')
            this.defaultStyle.type = 'text/css'
            this.defaultStyle.innerHTML = '* { cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII="), auto !important; }'
            document.body.appendChild(this.defaultStyle)
            window.gonzalesjs = true
        }
    }

    _showDefault () {
        if (this.defaultStyle) {
            this.defaultStyle.parentNode.removeChild(this.defaultStyle)
            this.defaultStyle = false
            window.gonzalesjs = false
        }
    }

    _defaultStyleExists () {
        return (typeof window.gonzalesjs !== 'undefined' && window.gonzalesjs === true)
    }

    _mousemove (x, y) {
        this.posX = x
        this.posY = y
        this.node.style.left = this.posX + 'px'
        this.node.style.top = this.posY + 'px'
    }

    _bindEvents () {
        this.mousemove = this._throttle((event) => {
            this._mousemove(event.clientX, event.clientY)
        }, 2)

        this.mousedown = () => {
            this.emitter.emit('mousedown', this.el)
        }

        this.mouseup = () => {
            this.emitter.emit('mouseup', this.el)
        }

        window.addEventListener('mousemove', this.mousemove, false)
        window.addEventListener('mouseup', this.mouseup, false)
        window.addEventListener('mousedown', this.mousedown, false)
    }

    _unbindEvents () {
        window.removeEventListener('mousemove', this.mousemove, false)
        window.removeEventListener('mouseup', this.mouseup, false)
        window.removeEventListener('mousedown', this.mousedown, false)
    }

}

export default (...args) => { return new Gonzales(...args) }
