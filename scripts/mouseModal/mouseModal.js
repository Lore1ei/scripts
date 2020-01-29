let add = document.querySelectorAll('.advantage-description'),
mainItem = document.querySelectorAll('.advantage-item'),
x,
y,
z,
contain;

function go() {

	function offsetY(el) {
		let rect = el.getBoundingClientRect();
		return rect.top;
	}

	function offsetX(sm){
		let rects = sm.getBoundingClientRect();
		return rects.left;
	}

	mainItem.forEach(element => {
		element.addEventListener('mousemove', second);
		element.addEventListener('mouseout', four);
	});

	function second(event){
		mainItem.forEach((element,i) => {
			element.setAttribute('data' ,`sub-${i}`);
			contain = this.getAttribute('data');
			st = this;
			third(contain);
			x = event.clientX;
			y = event.clientY;
		});
	}

	function third(contain) {
		add.forEach((element,i) => {
		element.classList.add(`sub-${i}`);
		if(element.classList.contains(contain)){
			element.style.display = 'block';
			element.style.top = y - offsetY(st) + 'px';
			element.style.left = x - offsetX(st) + 'px';
		}else{
			element.style.display = 'none';
	}

	});
	}
	function four(e) {
		add.forEach(element => {
		element.style.display ='none'
	});
	}

}
go();