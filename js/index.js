let i = 0

let changeBG = () => {
    !!i ? $("body").css('background', 'darkgrey') : $("body").css('background', 'white')
    i = !i
}