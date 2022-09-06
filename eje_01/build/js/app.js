'use strict'
const grande = document.querySelector('.grande');
const puntos = document.querySelectorAll('.punto');

puntos.forEach( (punto, i) =>{
	punto.addEventListener('click', ()=>{

		let posicion = i;
		let operacion = posicion * -33.33;

		grande.style.transform = `translateX(${ operacion }%)`;

		puntos.forEach((punto, i)=>{
			punto.classList.remove('activo');
		});
		punto.classList.add('activo')

	})
})

