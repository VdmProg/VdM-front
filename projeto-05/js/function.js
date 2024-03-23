$(function(){
    var currentValue = 0;
    var isDrag = false;
    var precoMax = 70000;
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
            precoAtual = formatarPreco(precoAtual);
            $('.precoPesquisa').html('R$'+precoAtual);
        }
    })

    function formatarPreco(precoAtual){
        // Número máximo de decimais
        precoAtual = precoAtual.toFixed(2);
        // Divide o valor a partir do ponto
        precoArr = precoAtual.split('.');

        var novo_preco = formatarTotal(precoArr);

        return novo_preco;
    }

    function formatarTotal(precoArr){
        // Verifica se o valor é maior do que 1000
        if(precoArr[0] < 1000){
            return precoArr[0] + ',' + precoArr[1];
        }else if(precoArr[0] < 10000){
            return precoArr[0][0] + '.' + precoArr[0].substr(1,precoArr[0].length) + ',' + precoArr[1];
        }else{
            return precoArr[0][0] + precoArr[0][1] + '.' + precoArr[0].substr(2,precoArr[0].length) + ',' + precoArr[1];
        }
    }

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

    // Veículo - teste

    var imgShow = 3;
    var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
    var curIndex = 0;

    
    function initSlider(){
        var amt = $('.mini-img-wraper').length * 33.3;
        var elScroll = $('.nav-galeria-wraper');
        var elSingle = $('.mini-img-wraper');

        elScroll.css('width', amt+'%');
        elSingle.css('width', 33.3*(100/amt)+'%');
    }

    function navigateSlider(){
        // Ao clicar da seta
        $('.arrow-right-nav').click(function(){
            // Verifica se o index atual é maior do que o número de trios de imagens
            if(curIndex < maxIndex){
                // Aumenta o index atual
                curIndex++;
                // Pôe um offset de 3 imagens após a inicial
                var elOff = $('.mini-img-wraper').eq(curIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left;
                // Anima o scroll para a esquerda
                $('.nav-galeria').animate({
                    'scrollLeft' : elOff+'px',
                });
            }else{
                console.log('Acabou');
            }
        });

        $('.arrow-left-nav').click(function(){
            if(curIndex > 0){
                curIndex--;
                var elOff = $('.mini-img-wraper').eq(curIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({
                    'scrollLeft' : elOff+'px',
                });
            }else{
                console.log('Acabou');
            }
        });
    }

    function clickSlider(){
        $('.mini-img-wraper').click(function(){
            $('.mini-img-wraper').css('background-color', 'transparent');
            $(this).css('background-color', 'rgb(210,210,210');

            var img = $('.mini-img-wraper').children().css('background-image');
            $('.foto-destaque').css('background-image', img);
        })

        $('.mini-img-wraper').eq(0).click();
    }

    initSlider();
    navigateSlider();
    clickSlider();
})