new VTTCue({
	el: '.corpo',
	data: {
		images: [
			{
				image: 'img/01.webp',
				title: "Marvel's Spiderman Miles Morale",
				text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
			},
			{
				image: 'img/02.webp',
				title: 'Ratchet & Clank: Rift Apart',
				text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
			},
			{
				image: 'img/03.webp',
				title: 'Fortnite',
				text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
			},
			{
				image: 'img/04.webp',
				title: 'Stray',
				text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
			},
			{
				image: 'img/05.webp',
				title: "Marvel's Avengers",
				text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
			},
		],
		numero: 0
		
	},
	methods: {
		cambiaSopra(){
			numero--;
			if(numero < 0){
				numero = 4;
			}
			containerImmagine.style.backgroundImage = `url('${images[numero].image}')`;
			titolo.innerHTML = images[numero].title;
			paragrafo.innerHTML = images[numero].text;
		},

		cambiaSotto(){
			numero++;
			if(numero > 4){
				numero = 0;
			}
			containerImmagine.style.backgroundImage = `url('${images[numero].image}')`;
			titolo.innerHTML = images[numero].title;
			paragrafo.innerHTML = images[numero].text;
		}

	}

})

// Crea array di oggetti
const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

// Crea l'HTML
const corpo = document.getElementById("corpo");
const container = document.createElement('div');
const containerImmagine = document.createElement('div');
const containerImmagini = document.createElement('div');
const bottoneSopra = document.createElement('button');
const bottoneSotto = document.createElement('button');
const iconaSu = document.createElement('i');
const iconaGiu = document.createElement('i');
const titolo = document.createElement("h2");
const paragrafo = document.createElement("p");
container.classList.add("container-fluid", "contenitore");
containerImmagine.classList.add("image", "m-auto");
containerImmagine.setAttribute("id", "image");
containerImmagine.appendChild(titolo);
containerImmagine.appendChild(paragrafo);
container.append(containerImmagine);
containerImmagini.classList.add("containerImmagini");
containerImmagini.setAttribute("id", "immagini");
container.append(containerImmagini);
bottoneSopra.classList.add("b1", "mt-3", "rounded-circle");
bottoneSopra.setAttribute("id", "b1");
bottoneSotto.classList.add("b2", "mb-3", "rounded-circle");
bottoneSotto.setAttribute("id", "b2");

iconaSu.classList.add("fa-solid", "fa-angle-up");
iconaGiu.classList.add("fa-solid", "fa-chevron-down");
bottoneSopra.append(iconaSu);
bottoneSotto.append(iconaGiu);


corpo.append(container);
titolo.innerHTML = images[0].title;
paragrafo.innerHTML = images[0].text;

// Aggiunge gli event listener ai bottoni
var numero = 0;
bottoneSopra.addEventListener("click", function(){
    numero--;
    if(numero < 0){
        numero = 4;
    }
    containerImmagine.style.backgroundImage = `url('${images[numero].image}')`;
    titolo.innerHTML = images[numero].title;
    paragrafo.innerHTML = images[numero].text;
})

bottoneSotto.addEventListener("click", function(){
    numero++;
    if(numero > 4){
        numero = 0;
    }
    containerImmagine.style.backgroundImage = `url('${images[numero].image}')`;
    titolo.innerHTML = images[numero].title;
    paragrafo.innerHTML = images[numero].text;
})

// Aggiunge le altre immagini
var img1, img2, img3, img4, img5;
const arrayImmagini = [img1, img2, img3, img4, img5];
for (let index = 0; index < arrayImmagini.length; index++) {
    arrayImmagini[index] = document.createElement("div");
    arrayImmagini[index].style.backgroundImage = `url('${images[index].image}')`;
    containerImmagini.appendChild(arrayImmagini[index]);
    if(index == 0){
        arrayImmagini[index].appendChild(bottoneSopra);
        arrayImmagini[index].classList.add("b1");
    }else if(index == 4){
        arrayImmagini[index].appendChild(bottoneSotto);
        arrayImmagini[index].classList.add("b2");
    }
}