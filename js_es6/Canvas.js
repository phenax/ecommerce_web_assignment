import { Particle } from './Particle';

export class Canvas {

    constructor(props) {
        this.$canvas= document.querySelector(props.canvasSelector);
        this.ctx= this.$canvas.getContext('2d');

        this.resizeHandler();

        this.particles= this.createParticles(400, 1);

        this.functionBinding();

        this.handlers= {
            mousemove(e) {},
            resize(e) {},
        };
    }


    functionBinding() {
        this.resizeHandler= this.resizeHandler.bind(this);
        this.mouseMoveHandler= this.mouseMoveHandler.bind(this);

        window.addEventListener('mousemove', this.mouseMoveHandler);
        window.addEventListener('touchmove', this.mouseMoveHandler);
        window.addEventListener('resize', this.resizeHandler);


        this.drawOnCanvas();
    }


    mouseMoveHandler(e) {
        const ev= {};

        ev.pageX= e.pageX || e.touches[0].pageX || 0;
        ev.pageY= e.pageY || e.touches[0].pageY || 0;

        this.handlers.mousemove(ev);
    }


    resizeHandler(e) {
        this.$canvas.width= $(window).width();
        this.$canvas.height= $(window).height();

        if(e) {
            this.drawOnCanvas();
            this.handlers.resize(e);
        }
    }

    createParticles(numberOfParticles, particleSize) {
        const particleOffset= this.$canvas.height/numberOfParticles;
        const particles= [];

        const randomNum= (min, max)=> (Math.random()*(max - min) + min);

        for(let i= 0; i< numberOfParticles; i++) {
            particles.push(
                new Particle({
                    pos: {
                        x: randomNum(0, this.$canvas.width*2),
                        y: randomNum(0, this.$canvas.height*2),
                    },
                    size: particleSize,
                })
            );
        }

        return particles;
    }

    drawOnCanvas() {
        this.ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);

        this.ctx.fillStyle= "rgba(255,255,255, 0.7)";

        // Render all particles on the canvas
        for(let i= 0; i< this.particles.length; i++) {
            const obj= this.particles[i];

            this.ctx.beginPath();

            this.ctx.arc(obj.position.x, obj.position.y, obj.size, 0 ,Math.PI*2);

            this.ctx.fill();
        }

        // Amount of change in angle(not exactly but yeah)
        const amount= 0.8;

        // Amount of spins for the spiral
        const spin= parseInt((
            Math.sqrt(Math.pow(this.$canvas.width, 2) +
            Math.pow(this.$canvas.height, 2))
        ) * 0.4);



        this.ctx.beginPath();

        this.ctx.moveTo(this.$canvas.width/2, this.$canvas.height/2);

        for (let i= 0; i< spin; i++) {

            const angle = amount * i;

            const x =(1 + 2*angle)*Math.cos(angle);
            const y=(1 + 2*angle)*Math.sin(angle);

            this.ctx.lineTo(x + this.$canvas.width/2, y + this.$canvas.height/2);
        }

        // color
        this.ctx.strokeStyle= `rgba(100, 100, 100, 0.2)`;

        // Size of the lines
        this.ctx.lineWidth= 1;

        // Rounded line ends
        this.ctx.lineCap = 'round';

        // Render the polyline
        this.ctx.stroke();
    }
}
