(function() {
    function Actor(element) {
        this.element = element;
    }
    document.addEventListener("readystatechange", function() {
        var actors = document.getElementsByClassName("actor");
        for(let ix = 0; ix < actors.length; ix++) {
            const actor = actors[ix];
            if (actor.id) {
                window[actor.id] = new Actor(actor);
            }
        }
        if (window.setup) {
            window.setup();
        }
    })
})();
