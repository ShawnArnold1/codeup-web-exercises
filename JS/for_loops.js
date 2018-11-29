


for (var i = 0; i<100000000; i++)
{
    var num = Math.floor(Math.random()) * 5) + 1;
        if (num > 5)
            console.log("hey look! It's a " + num);
}

var i = 0;
    while (i < 10)
    {
        console.log(i);
        i++;
    }

    for (var i = 0; i < 10; i++)
    {
        console.log(i);
    }


    function showMultiplactionTable(input)
    {
        for (var num = 1; num <= 10; num++)
        {
            console.log(input + " x " + num + " = " + input * num);
        }
    }

    showMultiplactionTable(7)




for (var i = 0; i < 10; i++)
{
    var num = Math.floor(Math.random() * 180) + 20;
        if (num % 2 == 0)
        {
            console.log(num + " is even");
        }
        else{
            console.log(num + " is odd");
        }
}

function numberTree()
{
    for (var i = 1; i < 10; i++)
    {
        var it = '';
        for
        (
            var j = 0; j < i; j++
        )
        {
            it = it + i;
        }
            console.log(it);
    }
}

numberTree()


for(var i = 1; i < 10; i++)
{
    console.log(String(i))
}


var countBackwardsByFives = function ()
{
    for (var i = 100; i >= 5; i -= 5)
    {
        console.log(i);
    }
}

countBackwardsByFives()