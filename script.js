document.addEventListener("DOMContentLoaded", () => {
    const $boton = document.querySelector("#btnCrearPdf");
    $boton.addEventListener("click", () =>{
        const $elementoParaConvertir = document.body;
        html2pdf()
        .set({
            margin: 1,
            filename: 'QRdocumento.pdf',
            image : {
                tipe: 'jpeg',
                quality: 0.98
            },
            html2canvas: {
                scale: 3,
                letterRendering: true,
            },
            jsPDF: {
                unit: "in",
                format :"a3",
                orientation: 'portrait',
            }
        })
        .from($elementoParaConvertir)
        .save()
        .catch(err => console.log(err));
    })
})