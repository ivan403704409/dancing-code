var aLi = []
var h = 80
var lineLen = 4

let animation = ['normal', 'point', 'angle', 'lineAngle', 'line', 'randomX', 'randomXY']

function normal(argument) {
	aLi.forEach(function (li, index) {
		li.style.transform = `translate(0,0)`
	})
	setTimeout(() => {
		next()
	}, 2000)
}

function next(type) {
	if(type){
		window[type]()
		return
	}
	var type = animation[random(0, animation.length-1)]
	console.log(type)
	window[type]()
}

// 获取是第几行
function getRow(index) {
	return Math.ceil((index+1)/lineLen)
}
// 获取是第几列
function getCol(index) {
	return index%lineLen + 1
}

function line() {
	aLi.forEach(function (li, index) {
		var line = getRow(index)
		var disY = ((lineLen/2)-line)*h + h/2 + 'px'
		setTimeout(() => {
			li.style.transform = `translateY(${disY})`
		}, index*120)
	})
	setTimeout(() => {
		next('normal')
	}, 3000)
}

function lineAngle() {
	aLi.forEach(function (li, index) {
		var line = getRow(index)
		var col = getCol(index)
		var disX = ((lineLen/2)-line)*h + h/2 + 'px'
		// var disY = ((lineLen/2)-col)*h + h/2 + 'px'
		var disY = (col - (lineLen/2))*h + h/2 + 'px'
		setTimeout(() => {
			li.style.transform = `translate(${disX},${disY})`
		}, index*120)
	})
	setTimeout(() => {
		next()
	}, 3000)
}

function point() {
	aLi.forEach(function (li, index) {
		var line = getRow(index)
		var col = getCol(index)
		var disX = ((lineLen/2)-col)*h + h/2 + 'px'
		var disY = ((lineLen/2)-line)*h + h/2 + 'px'
		setTimeout(() => {
			li.style.transform = `translate(${disX},${disY})`
		}, index*120)
	})
	setTimeout(() => {
		next()
	}, 3000)
}

function angle() {
	aLi.forEach(function (li, index) {
		var line = getRow(index)
		var col = getCol(index)
		console.log(col)
		var disX = ((lineLen/2)-line)*h + h/2 + 'px'
		var disY = ((lineLen/2)-col)*h + h/2 + 'px'
		setTimeout(() => {
			li.style.transform = `translate(${disX},${disY})`
		}, index*120)
	})
	setTimeout(() => {
		next()
	}, 3000)
}

function randomX(argument) {
	aLi.forEach(function (li, index) {
		var line = getRow(index)
		var disY = ((lineLen/2)-line)*h + h/2 + 'px'
		var disX = random(-80*4, 80*4) + 'px'
		li.style.transform = `translate(${disX},${disY})`
	})
	setTimeout(() => {
		next()
	}, 2000)
}

function randomXY(argument) {
	aLi.forEach(function (li, index) {
		var line = getRow(index)
		var disX = random(-80*5, 80*5) + 'px'
		var disY = random(-80*5, 80*5) + 'px'
		li.style.transform = `translate(${disX},${disY})`
	})
	setTimeout(() => {
		next()
	}, 2000)
}

// 随机生成字符
function setLayout() {
	let html = ''
	for(var i=0; i<16; i++){
		html+=`<li>${String.fromCharCode(random(0xFB50,0xFDFF))}</li>`
	}
	document.getElementById('app').innerHTML = html
	aLi = document.querySelectorAll('li')
}
setLayout()
normal()

function random(m,n) {
	return m + Math.round(Math.random()*Math.abs(n-m))
}


