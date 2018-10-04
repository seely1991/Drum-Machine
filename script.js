let bank = 'normal';

const q = {
	id: 'q',
	display: 'closed hh',
	normal: "https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/hats/7[kb]909-collapsed-hat.aif.mp3",
	weird: 'https://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/Zico%20Alpha%20FX/64[kb]fx_006.mp3.mp3'
};
const w = {
	id: 'w',
	display: 'open hh',
	normal: "https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/hats/14[kb]909-lofi-ohh.aif.mp3",
	weird: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/23[kb]biting-celery.aif.mp3'
};
const _e = {
	id: 'e',
	display: 'crash',
	normal: "https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/crashes/92[kb]909-bright-crash.aif.mp3",
	weird: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/61[kb]catcall.aif.mp3'
};
const a = {
	id: 'a',
	display: 'kick',
	normal: "https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/16[kb]808bd.aif.mp3",
	weird: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/59[kb]gronk.aif.mp3'
}
const s = {
	id: 's',
	display: 'snare',
	normal: "https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/snares/29[kb]909sd.aif.mp3",
	weird: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/35[kb]crow-caw.wav.mp3'
};
const d = {
	id: 'd',
	display: 'rim',
	normal: "https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/snares/8[kb]hisd808.aif.mp3",
	weird: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/25[kb]fartysnap.wav.mp3'
};
const z = {
	id: 'z',
	display: 'clap',
	normal: "https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/claps/13[kb]707_HCP.WAV.mp3",
	weird: 'https://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/SOUND%20FX%20CHEESY%20LO-FI/18[kb]Clown-Toy-Whistle.aif.mp3'
};
const x = {
	id: 'x',
	display: 'tom1',
	normal: "https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/35[kb]hitom.aif.mp3",
	weird: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/various%20weird%20hits/103[kb]tigerlike.aif.mp3'
};
const c = {
	id: 'c',
	display: 'tom2',
	normal: "https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/86[kb]hietom.aif.mp3",
	weird: 'https://sampleswap.org/samples-ghost/SFX%20and%20UNUSUAL%20SOUNDS/SOUND%20FX%20CHEESY%20LO-FI/61[kb]Aaaaaagh.aif.mp3'
};

const playKey = (key) => {
	new Audio(key[bank]).play()
};

const checkKey = (e) => {
	switch (e.key) {
		case ('q'):
			new Audio(q[bank]).play();
			$("#button-q").css('background-color', '#DDDDDD');
			$("#display").html(q.display);
			break;
		case ('w'):
			new Audio(w[bank]).play();
			$("#button-w").css('background-color', '#DDDDDD');
			$("#display").html(w.display);
			break;
		case ('e'):
			new Audio(_e[bank]).play();
			$("#button-e").css('background-color', '#DDDDDD');
			$("#display").html(_e.display);
			break;
		case ('a'):
			new Audio(a[bank]).play();
			$("#button-a").css('background-color', '#DDDDDD');
			$("#display").html(a.display);
			break;
		case ('s'):
			new Audio(s[bank]).play();
			$("#button-s").css('background-color', '#DDDDDD');
			$("#display").html(s.display);
			break;
		case ('d'):
			new Audio(d[bank]).play();
			$("#button-d").css('background-color', '#DDDDDD');
			$("#display").html(d.display);
			break;
		case ('z'):
			new Audio(z[bank]).play();
			$("#button-z").css('background-color', '#DDDDDD');
			$("#display").html(z.display);
			break;
		case ('x'):
			new Audio(x[bank]).play();
			$("#button-x").css('background-color', '#DDDDDD');
			$("#display").html(x.display);
			break;
		case ('c'):
			new Audio(c[bank]).play();
			$("#button-c").css('background-color', '#DDDDDD');
			$("#display").html(c.display);
			break;
	}
}

const defaultColors = () => {
	$("button").css('background', '#FFFFFF')
} 

window.addEventListener("keydown", checkKey);
window.addEventListener("keyup", defaultColors);

$("#slider").on('click', function() {
	if (bank === 'normal') {
		$("#slider-button").animate({left: '25px'}, 'fast');
		bank = 'weird'
	}else{
		$("#slider-button").animate({left: '5px'}, 'fast');
		bank = 'normal'
	}	
})




