class Gonzales {

    /**
        --- CORE ---
    **/

    constructor () {
        this.cursors = []
        return this
    }

    /**
        --- API ---
    **/

    add (id, el) {
        this.cursors.push({
            id: id,
            el: el
        })
    }

    destroy () {
        this.cursors = []
    }

    /**
        --- FUNCTIONS ---
    **/

    // TODO

}

export default (...args) => { return new Gonzales(...args) }
