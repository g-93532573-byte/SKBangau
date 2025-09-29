input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.No)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    led.unplot(2, 2)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E C5 F D G E C A ", 369), music.PlaybackMode.InBackground)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Chessboard)
})
