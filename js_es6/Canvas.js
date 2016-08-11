import { Particle } from './Particle';

export class Canvas {

    constructor(props) {
        this.$canvas= document.querySelector(props.canvasSelector);
        this.ctx= this.$canvas.getContext('2d');

        this.resizeHandler();

        this.particles= this.createParticles(20, 5);

        this.functionBinding();
    }


    functionBinding() {
        this.frameIterator= this.frameIterator.bind(this);
        this.resizeHandler= this.resizeHandler.bind(this);
        this.mouseMoveHandler= this.mouseMoveHandler.bind(this);

        window.addEventListener('mousemove', this.mouseMoveHandler);
        window.addEventListener('touchmove', this.mouseMoveHandler);
        window.addEventListener('resize', this.resizeHandler);

        window.requestAnimationFrame(this.frameIterator);
    }


    mouseMoveHandler(e) {
        const ev= {};

        ev.pageX= e.pageX || e.touches[0].pageX;
        ev.pageY= e.pageY || e.touches[0].pageY;

        if(ev.pageX <= 0.3*this.$canvas.width) {
            this.particles[0].setPosition(ev.pageX, ev.pageY);
        } else if(ev.pageX >= 0.7*this.$canvas.width) {
            this.particles[0].setPosition(ev.pageX, ev.pageY);
        } else {
            this.particles[0].setInitialPosition(5);
        }

    }


    resizeHandler() {
        this.$canvas.width= $(window).width();
        this.$canvas.height= $(window).height();
    }

    createParticles(numberOfParticles, particleSize) {
        const particleOffset= this.$canvas.height/numberOfParticles;
        const particles= [];

        for(let i= 0; i< numberOfParticles; i++) {
            particles.push(
                new Particle({
                    pos: {
                        x: this.$canvas.width/2,
                        y: particleOffset*i,
                    },
                    size: particleSize,
                })
            );
        }

        return particles;
    }

    frameIterator() {

        this.drawParticle();

        window.requestAnimationFrame(this.frameIterator);
    }

    drawParticle() {
        this.ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);

        for(let i= 0; i< this.particles.length; i++) {
            const obj= this.particles[i];

            this.ctx.beginPath();

            this.ctx.fillStyle= "#555";

            this.ctx.arc(obj.position.x, obj.position.y, obj.size, 0 ,Math.PI*2);

            this.ctx.fill();
        }
    }
}
