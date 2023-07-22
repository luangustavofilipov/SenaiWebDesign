const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

// Função Gerar
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

// Função Selecionar Tamanhos
sizes.addEventListener('change',(e)=> {
    size = e.target.value;
    isEmptyInput();
});

// Função Download Imagem
downloadBtn.addEventListener('click', (e)=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null) {
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute('href', imgAtrr);
    }
    else {
        downloadBtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`);
    }
});

// Função Campo Vazio
function isEmptyInput() {
    qrText.value.length > 0 ? generateQRCode() : alert("Entre com o texto ou URL para gerar o QRCode");
};

// Função Gerar QRCode
function generateQRCode() {
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: '#fff',
        colorDark: '#000',
    });
}