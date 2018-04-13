var main;
function mainLoad() { }

$(function () {

    $.extend(mainLoad.prototype, {
        bindUIActions: function () {
            $(document)
            .on('click', '.js-teste', this.teste);
        },
        teste: function (e) {
            e.preventDefault();
            return false;
        },
        activeSections: function(){
            var elementos = $('.section');
            elementos = elementos.map(function () {
                return {
                    el: this,
                    pos: $(this).position().top
                };
            });

            $(document).scroll(function () {
                var posicaoScroll = $(document).scrollTop();
                elementos.each(function () {
                    if (this.pos < posicaoScroll) $(this.el).animate({'opacity': 1}, 500);
                })
            })
        },
        init: function () {
            this.bindUIActions();
        }
    });

    if (typeof mainLoad == 'function') {
        main = new mainLoad();

        setTimeout(function () {
            main.init();
            main.loadMenu();
        }, 200);
    }

});
