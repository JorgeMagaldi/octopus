function TenracleAction () {
    servos.P0.run(100)
    basic.pause(4000)
    servos.P0.stop()
    basic.pause(1000)
    servos.P0.run(-100)
    basic.pause(4000)
    servos.P0.stop()
}
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        servos.P0.run(100)
    }
    servos.P0.stop()
    while (input.buttonIsPressed(Button.B)) {
        servos.P0.run(-100)
    }
    servos.P0.stop()
    if (input.logoIsPressed() && input.soundLevel() > 128) {
        TenracleAction()
    }
})
