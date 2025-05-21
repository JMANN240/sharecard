
const dataDiv = document.querySelector('#data-div');

const namePositionDiv = document.querySelector('#name-position-div');
const linesDiv = document.querySelector('#lines-div');

const nameInput = document.querySelector('#name-input');
const positionInput = document.querySelector('#position-input');

const line1Input = document.querySelector('#line1-input');
const line2Input = document.querySelector('#line2-input');
const line3Input = document.querySelector('#line3-input');
const line4Input = document.querySelector('#line4-input');

const copyLinkButton = document.querySelector('#copy-link-button');

const linkDiv = document.querySelector('#link-div');
const linkParagraph = document.querySelector('#link-paragraph');

const params = new URLSearchParams(window.location.search);

const encodedData = params.get('data');

if (encodedData !== null) {
	const data = JSON.parse(LZString.decompressFromEncodedURIComponent(encodedData));
	
	const readOnly = data.r;
	const name = data.n;
	const position = data.p;
	const line1 = data.a;
	const line2 = data.b;
	const line3 = data.c;
	const line4 = data.d;
	
	if (readOnly) {
		namePositionDiv.innerHTML = '';

		const nameHeader = document.createElement('h1');
		nameHeader.innerHTML = name;
		namePositionDiv.appendChild(nameHeader);

		const positionHeader = document.createElement('h3');
		positionHeader.innerHTML = position;
		namePositionDiv.appendChild(positionHeader);

		linesDiv.innerHTML = '';

		const line1Paragraph = document.createElement('p');
		line1Paragraph.innerHTML = line1;
		linesDiv.appendChild(line1Paragraph);

		const line2Paragraph = document.createElement('p');
		line2Paragraph.innerHTML = line2;
		linesDiv.appendChild(line2Paragraph);

		const line3Paragraph = document.createElement('p');
		line3Paragraph.innerHTML = line3;
		linesDiv.appendChild(line3Paragraph);

		const line4Paragraph = document.createElement('p');
		line4Paragraph.innerHTML = line4;
		linesDiv.appendChild(line4Paragraph);
	} else {
		input.value = text;
	}
}

copyLinkButton.addEventListener('click', () => {
	if (nameInput !== null) {
		const data = {
			r: true,
			n: nameInput.value,
			p: positionInput.value,
			a: line1Input.value,
			b: line2Input.value,
			c: line3Input.value,
			d: line4Input.value,
		};

		const encodedData = LZString.compressToEncodedURIComponent(JSON.stringify(data));

		const link = window.location.href.split('?')[0] + '?data=' + encodedData;

		navigator.clipboard.writeText(link);

		linkDiv.style.display = 'flex';
		linkParagraph.innerHTML = link;
	}
});
