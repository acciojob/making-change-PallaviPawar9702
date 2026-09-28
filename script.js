const makeChange = (c) => {
	let q = Math.floot(c/25);
	c = c % 25
	let d = Math.floot(c/10);
	c = c % 10
	let n = Math.floot(c/5);
	c = c % 5

	let p = c;
	return{
		q: q,
		d: d,
		n: n,
		p: p
	}
  // your name here
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
