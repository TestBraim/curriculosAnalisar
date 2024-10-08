// URLs dos PDFs
const pdfFiles = [
    'CurrículoBrayan.pdf',
    'Brayan-Pletsch-Currículo.pdf',
    'Curriculo-de-outra-pessoa-1.pdf',
    'Curriculo-de-outra-pessoa-2.pdf'
];

// Função para carregar e renderizar os PDFs nos canvas
function renderPreview(pdfPath, canvasId) {
    const loadingTask = pdfjsLib.getDocument(pdfPath);
    
    loadingTask.promise.then(pdf => {
        // Pega a primeira página do PDF
        pdf.getPage(1).then(page => {
            const scale = 0.5; // Define um tamanho de escala para o preview
            const viewport = page.getViewport({ scale: scale });

            // Obtém o contexto do canvas
            const canvas = document.getElementById(canvasId);
            const context = canvas.getContext('2d');

            // Define as dimensões do canvas
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Renderiza a página do PDF no canvas
            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);
        });
    });
}

// Renderiza os previews dos PDFs
window.onload = function() {
    renderPreview(pdfFiles[0], 'preview1');
    renderPreview(pdfFiles[1], 'preview2');
    renderPreview(pdfFiles[2], 'preview3');
    renderPreview(pdfFiles[3], 'preview4');
};
