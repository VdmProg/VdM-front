$(function(){
    var currentValue = 0;
    var isDrag = false;
    var precoMax = 250000;
    var precoAtual = 0;

    $('.pointer-barra').mousedown(function(){
        isDrag = true;
    })

    $(document).mouseup(function(){
        isDrag = false;
        enableTextSelection();
    })

    $('.barra-preco').mousemove(function(e){
        if (isDrag) {
            disableTextSelection();
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            if (mouseX < 0) {
                mouseX = 0;
            }else if(mouseX > elBase.width()){
                mouseX = elBase.width();
            }
            currentValue = (mouseX / elBase.width()) * 100;
            $('.barra-preco-fill').css('width', currentValue+'%');
            $('.pointer-barra').css('left', mouseX-13+'px');

            precoAtual = (currentValue / 100 ) * precoMax;
            $('.precoPesquisa').html('R$'+precoAtual)
        }
    })

    function disableTextSelection(){
        $('body').css('-webkit-user-select', 'none');
        $('body').css('-noz-user-select', 'none');
        $('body').css('-ms-user-select', 'none');
        $('body').css('-o-user-select', 'none');
        $('body').css('user-select', 'none');
    }

    function enableTextSelection(){
        $('body').css('-webkit-user-select', 'auto');
        $('body').css('-noz-user-select', 'auto');
        $('body').css('-ms-user-select', 'auto');
        $('body').css('-o-user-select', 'auto');
        $('body').css('user-select', 'auto');
    }
})