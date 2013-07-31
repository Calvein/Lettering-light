/*!
* Lettering light 0.1.0
*
* Copyright 2013, François Robichet http://francois.robichet.com/
* Dave Rupert <@davatron>
* Thomas Fuchs <@madrobby>
*
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*/
!function($){
    $.fn.lettering = function() {
        var el, i, content
        for (i = this.length - 1; i >= 0; i--) {
            el = this[i]
            if (!el) continue

            content = typeof el.textContent !== 'undefined' ? el.textContent : el.innerText
            el.innerHTML =
                content.replace(
                    /./g,
                    function(c) {
                        return '<span class=char' + (el = -~el) + '>' + c + '</span>'
                    }
                )
        }
        return this
    }
}(jQuery)