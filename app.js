// if (typeof jQuery == 'undefined') {
//     console.log('oops! I still have to link my jQuery properly!')
// } else {
//     console.log('I did it! I linked jQuery and this js file!')
// }

$(document).ready(() => {
	const $container = $('#container')
        console.log($container)

    const $h1 = $('<h1>').text('Hogwarts')
        $container.append($h1)

    const $h2 = $('<h2>').text('Taz Campbell')
        $container.append($h2)
            
    const $h3 = $('<h3>').text('Hufflepuff')
        $container.append($h3)
            
    const $h4 = $('<h4>').text('Charlie')
        $h4.addClass('cat')
            $container.append($h4)
        
    const $h5 = $('<h5>').text('Holly Wand with Unicorn Hair')
        $container.append($h5)

    const $ul = $('<ul storage="trunk">')
        $container.append($ul)

    const $li1 = $('<li>').text('Butter Beer')

    const $li2 = $('<li>').text('Invisibility Cloak')
        $li2.addClass('SECRET')

    const $li3 = $('<li>').text('Marauders Map')
        $li3.addClass('SECRET')

    const $li4 = $('<li>').text('Time Turner')
        $li4.addClass('SECRET')

    const $li5 = $('<li>').text('Cat Backpack') //instead of a leash, b/c there's no way my cat is going to want to be on a leash lol
        $li5.addClass('cat')

    const $li6 = $('<li>').text('Bertie Botts Every Flavor Beans')

        $container.append($li1, $li2, $li3, $li4, $li5, $li6)
}
)