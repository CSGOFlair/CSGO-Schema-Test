// Reliant on jQueer
function start()
{
    $.ajax({url:'raw.githubusercontent.com/SteamDatabase/SteamTracking/master/ItemSchema/CounterStrikeGlobalOffensive.vdf',     success:function(data)
    {
        var schema = JSON.parse(data);
        var test = schema["items_game"].rarities.default.drop_sound;
        document.getElementById("drop").innerHTML = test || data || "ugh";
    }});
}
