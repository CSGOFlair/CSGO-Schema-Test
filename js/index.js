// Reliant on jQueer
$.ajax({url:'https://raw.githubusercontent.com/SteamDatabase/SteamTracking/master/ItemSchema/CounterStrikeGlobalOffensive.vdf', success:function(data)
{
    var schema = JSON.parse(data);
    var test = schema.items_game.rarities.default.drop_sound;
    document.getElementById("drop").innerHTML = test;
}});
