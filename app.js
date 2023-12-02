// if (typeof jQuery == 'undefined') {
//     console.log('oops! I still have to link my jQuery properly!')
// } else {
//     console.log('I did it! I linked jQuery and this js file!')
// }

$(document).ready(() => {
	const $container = $('#container')
        console.log($container)

    const $school = $('<h1>').text('Hogwarts')
        $container.append($school)

    const $me = $('<h2>').text('Taz Campbell')
        $container.append($me)
            
    const $house = $('<h3>').text('Hufflepuff')
        $container.append($house)
            
    const $pet = $('<h4>').text('Charlie')
        $pet.addClass('cat')
            $container.append($pet)
        
    const $wand = $('<h5>').text('Yew Wand with Dragon Heartstring')
        $container.append($wand)

    const $trunk = $('<ul storage="trunk">')
        $container.append($trunk)

    const $item1 = $('<li>').text('Butter Beer')

    const $item2 = $('<li>').text('Invisibility Cloak')
        $item2.addClass('SECRET')

    const $item3 = $('<li>').text('Marauders Map')
        $item3.addClass('SECRET')

    const $item4 = $('<li>').text('Time Turner')
        $item4.addClass('SECRET')

    const $item5 = $('<li>').text('Cat Backpack') //instead of a leash, b/c there's no way my cat is going to want to be on a leash lol
        $item5.addClass('cat')

    const $item6 = $('<li>').text('Bertie Botts Every Flavor Beans')
        $trunk.append($item1, $item2, $item3, $item4, $item5, $item6)

    const $table = $('<table id="classes"></table>')
        $container.append($table)

    const $tableHead = $('<h5>').text('Spring 2017');
        $tableHead.insertBefore($table)

    const tableElement = $table
    const theadElement = $('<thead>')
        theadElement.append('<tr><th>Day</th><th>Classes</th></tr>')
        tableElement.append(theadElement)

    const $tr1 = $('<tr>')
        $tr1.append('<td>Monday</td>')
        $tr1.append('<td>Herbology, Defense Against the Dark Arts, Quidditch Practice</td>')

    const $tr2 = $('<tr>')
        $tr2.append('<td>Tuesday</td>')
        $tr2.append('<td>Charms, Transfiguration</td>')

    const $tr3 = $('<tr>')
        $tr3.append('<td>Wednesday</td>')
        $tr3.append('<td>Defense Against the Dark Arts, History of Magic</td>')

    const $tr4 = $('<tr>')
        $tr4.append('<td>Thursday</td>')
        $tr4.append('<td>Potions, Herbology, Quidditch Practice</td>')

    const $tr5 = $('<tr>')
        $tr5.append('<td>Friday</td>')
        $tr5.append('<td>History of Magic, Charms, Transfiguration</td>')
        $table.append($tr1, $tr2, $tr3, $tr4, $tr5)

$('#wand').replaceWith('Holly Wand and Unicorn Hair')


}
)