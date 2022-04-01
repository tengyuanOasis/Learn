const setTemplate = () => {
	let template = ``;
	for (let i = 0; i < 52; i++) {
		let img_name = 100000000 + i;
		template += `<img src="./images/ia_${img_name}.jpg" alt=""></img>`;
	}
	return template;
};
document.getElementById("root").innerHTML = setTemplate();
