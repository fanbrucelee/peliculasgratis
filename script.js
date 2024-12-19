document.addEventListener("DOMContentLoaded", () => {
    const categorias = document.querySelectorAll(".categoria h3");

    categorias.forEach((categoria) => {
        categoria.addEventListener("click", () => {
            alert(`Has hecho clic en: ${categoria.innerText}`);
        });
    });
});
