class Rectangle {
	constructor(width, height) {
		this.elem = document.createElement('div');

		this.elem.style.width = width + 'px';
		this.elem.style.height = height + 'px';
		this.elem.style.border = '1px solid red';

		document.body.appendChild(this.elem);
	}	

	getWidth(width) {
		return parseInt(this.elem.style.width);
	}

	setWidth(width) {
		this.elem.style.width = width + 'px';
	}

	getHeight(height) {
		return parseInt(this.elem.style.height);
	}
	
	setHeight(height) {
		this.elem.style.height = height + 'px';
	}
}

let figura1 = new Rectangle();
figura1.setWidth(100);
figura1.setHeight(50);
console.log('Ширина: '+figura1.getWidth()+' '+'Высота: '+figura1.getHeight());
let figura2 = new Rectangle();
figura2.setWidth(120);
figura2.setHeight(60);
console.log('Ширина: '+figura2.getWidth()+' '+'Высота: '+figura2.getHeight());