'use strict';

new TypeIt('.home_job', {
    loop: true,
    speed: 100
})
.type('I AM FRONT-END DEVELOPER')
.pause(1000)
.move(null, {to: 'END'})
.delete()
.type('I AM BACK-END DEVELOPER')
.pause(1000)
.move(null, {to: 'END'})
.delete()
.type('I AM FULL-STACK DEVELOPER')
.pause(1000)
.move(null, {to: 'END'})
.delete()
.type('I LOVE AND ENJOY CODING')
.pause(1000)
.move(null, {to: 'END'})
.delete()
.go()