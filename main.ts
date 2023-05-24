/**
 * Samuel Martos Carmet s2a
 */
let distancia = sonar.ping(
DigitalPin.P1,
DigitalPin.P0,
PingUnit.Centimeters
)
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )
    if (distancia <= 4) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (distancia <= 8) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (distancia <= 12) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (distancia <= 16) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (distancia <= 20) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (distancia <= 24) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else if (distancia <= 28) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    } else if (distancia == 0) {
        basic.showNumber(0)
    } else {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    basic.showNumber(distancia)
})
