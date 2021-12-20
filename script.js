/* Blur on scroll */

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.section-one').css({
        filter: "blur(" + (scroll/100) + "px)"
    })
})

/* Scroll to activities */

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".second-section").offset().top},
        'slow');
});

/* change icon */

let img = document.querySelector('img');
    let start = img.src;
    let hover = img.getAttribute('data-hover');

    img.onmouseover = () => { img.src = hover; }
    img.onmouseout = () => { img.src = start; }

/*     const guild = bot.guilds.get('815622762416308274');
    const totalUsers = bot.channels.get('853404895943327744');
    console.log(totalUsers); */
/* Guild ID: 853404895943327744 */
/* application token: NzcxNDA2NDExNjk5NTg1MDM1.X5rqNA.tTOM2UVc33Q_PJwFJz3KMvR2fPU */

import { Client } from "discord.js";
const token = "NzcxNDA2NDExNjk5NTg1MDM1.X5rqNA.tTOM2UVc33Q_PJwFJz3KMvR2fPU"

const guildID = "764495726909587476"
discord.bot = new Client();
var memberCount = discord.bot.guilds.get(guildID).members.size()
console.log("There are " + memberCount + " people in this server!")