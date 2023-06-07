basic.forever(function () {
    if (input.lightLevel() < 128) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.InBackground)
        basic.showString("BAJO")
    } else {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.soaring), SoundExpressionPlayMode.InBackground)
        basic.showString("ALTO")
    }
})
