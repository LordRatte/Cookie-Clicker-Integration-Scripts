if (type Game.lordratte === 'undefined') Game.lordratte = {};
if (type Game.lordratte.duolinguo_streak === 'undefined') Game.lordratte.duolinguo_streak = 0;

Game.customCpsMult.push(function(){
    var user = 'lordratte';
    var url = 'https://www.duolingo.com/users/{}'.replace('{}', user);
    ajax(url, function(r, a){
        console.log(r);
        console.log(a);
    });


    return 1;
});
