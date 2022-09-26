input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    save = number
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    let J = 0
    basic.showNumber(a)
    a = number + 9
    basic.showNumber(b)
    b = number - 9
    basic.showNumber(c)
    c = number ** 2
    basic.showNumber(d)
    d = number / 3
    basic.showNumber(e)
    e = number % 4
    basic.showNumber(f)
    f = Math.sqrt(number)
    basic.showNumber(g)
    g = Math.round(3 / 4)
    basic.showNumber(h)
    h = Math.ceil(3 / 9)
    basic.showNumber(I)
    I = number ** 3
    basic.showNumber(J)
    I = randint(1, 100)
})
let I = 0
let h = 0
let g = 0
let f = 0
let e = 0
let d = 0
let c = 0
let b = 0
let a = 0
let save = 0
let number = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
