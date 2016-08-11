

export class Particle {

    constructor(props) {
        this._pos= props.pos;
        this._originalPos= Object.create(props.pos);

        this._size= props.size;
    }

    get size() {
        return this._size;
    }
    set size(newSize) {
        this._size= newSize;
    }

    get position() {
        return this._pos;
    }
    set position(newPosition) {
        this._pos= newPosition;
    }

    get initialPosition() {
        return this._originalPos;
    }

    setPosition(x, y) {
        this.position= { x, y };
    }

    setInitialPosition() {
        this.position= this._originalPos;
    }
}
