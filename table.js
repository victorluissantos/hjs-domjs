/**
 * @author Santos L. Victor
 * @see Performs color merging in rows of tables 
*/
const table = {
    hover: [],
    __init: function(obj=null, app={}) {
        if (app.hover !== undefined)
            this.hover = app.hover

        if (this.hover.length!=0) {
            this._hover(obj)
        }
    },
    _hover: function(table) {
        elTable = document.querySelectorAll(table + ' tbody tr')
        let s = 0
        for (var i = 0; i < elTable.length; i++) {
            elTable[i].classList.add(this.cleanRef(this.hover[s]))
            s = (s >= (this.hover.length-1))?0:(s+1)
        }
    },
    cleanRef(tx) {
        return tx.replace('.','').replace('#','')
    }
}
