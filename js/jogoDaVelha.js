const jogoDaVelha = {
    board: ['','','','','','','','','',],
    simbols: ['X','O'],
    container_element: null,
    gameover: false,

    init:function(container){
        this.container_element = container;      
    },

    make_play: function(){


    },

    draw: function(){
        let content = '';

        for (i in this.board){
            content += '<div>' + this.board[i] + '</div>';
        }

        this.container_element.innerHTML = content;

    }

};
//script file
