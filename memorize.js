document.addEventListener('DOMContentLoaded', (event) => {
	
	const elements = document.querySelectorAll('form[onMemorize="all"')

	let config = {
		enviroment:null,
		_init:function(args={})
		{
			if(args.enviroment !== undefined)
				this.enviroment = args.enviroment
		},
		load:function(key=null)
		{
			return window.localStorage.getItem(key)
		},
		save:function(key, value)
		{
			if(this.load(key) !== null) {
				console.log('Overwrited with success!')
			} else {
				console.log('Saved with success!')
			}
			window.localStorage.setItem(key, value)
		}
	}

	const cript = {
		salt:'DSa87h7dsF67483yfd32',
		_init:function(pSalt=null) {
			if(pSalt != null)
				this.salt
		},
		encript:function(key=null)
		{
			return key
		},
		decript:function(key=null)
		{
			return key
		}
	}

	addEvent = function(inputs=null, event='click')
	{
		for (var i = inputs.length - 1; i >= 0; i--) {

			let iName = inputs[i].getAttribute('name')
			let iId = inputs[i].getAttribute('id')
			let iValue = inputs[i].value
			let key = cript.encript(iName+iId)
			inputs[i].value = config.load(key)

			inputs[i].addEventListener('focusout', function(src) {
				let el = src.srcElement
				let iName = el.getAttribute('name')
				let iId = el.getAttribute('id')
				let iValue = el.value
				let key = cript.encript(iName+iId)
				config.save(key, iValue)
			}, false)
		}
	}

	let init = (() => {
		console.log('=====================================================')
		console.log('Build by: SantosL. Victor <victorluissantos@live.com>')
		console.log('_____________________________________________________')
		for (var e = elements.length - 1; e >= 0; e--) {

			let id = elements[e].getAttribute('id')
			let inputs = elements[e].querySelectorAll('input')
			this.addEvent(inputs)

			let selects = elements[e].querySelectorAll('select')
			this.addEvent(selects, 'change')
		}
	})()
});