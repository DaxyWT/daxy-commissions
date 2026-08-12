const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const modal = document.querySelector('#modal');
const modalContent = document.querySelector('#modal-content');
const closeModal = document.querySelector('.modal-close');

const commissionInfo = {
  base: { title: 'MY BASE STYLE', text: `
    <h4>LINEART</h4>
    <p>Head only / PFP: <b>$5</b><br>Half Body: <b>$5</b><br>Full Body: <b>$5</b></p>
    <h4>FLAT COLOR</h4>
    <p>Head only / PFP: <b>$5</b><br>Half Body: <b>$10</b><br>Full Body: <b>$20</b></p>
    <p><i>Flat-color shading: +$5</i></p>
    <h4>FULL COLOR</h4>
    <p>Head only / PFP: <b>$10</b><br>Half Body: <b>$20</b><br>Full Body: <b>$30</b></p>` },
  fnf: { title: 'FNF STYLE', text: `
    <h4>LINEART</h4><p><b>$2</b></p>
    <h4>FLAT COLOR</h4><p><b>$3</b></p>
    <h4>FULL COLOR</h4><p><b>$5</b></p>
    <h4>SPRITE</h4><p><b>$40</b><br>Idle + 4 Sing/Misses poses + Hey pose.</p>
    <p><i>+$5 if the character is complex.</i></p>
    <p>I choose the poses if you're unsure; I'll show you options to pick from.</p>` },
  animation: { title: 'ANIMATION — NSFW ONLY', text: `
    <h4>5 SEC LOOP</h4>
    <p>LINEART: <b>$15</b><br>FLAT COLOR: <b>$25</b><br>FULL COLOR: <b>$50</b></p>
    <p><i>I don't do complicated poses yet because I'm new to animation and need practice.</i></p>` }
};

document.querySelectorAll('.card').forEach(card => card.addEventListener('click', () => {
  const info = commissionInfo[card.dataset.modal];
  modalContent.innerHTML = `<h3>${info.title}</h3>${info.text}<a class="btn pink" href="https://discord.gg/swqQ2S8nz8" target="_blank" rel="noopener">CONTACT ON DISCORD</a>`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}));

function closeTheModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); }
closeModal.addEventListener('click', closeTheModal);
modal.addEventListener('click', e => { if (e.target === modal) closeTheModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeTheModal(); });
const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const viewerClose = document.getElementById("viewerClose");

document.querySelectorAll(".gallery-item img").forEach(img => {

    img.addEventListener("click", () => {

        viewerImage.src = img.src;
        viewerImage.alt = img.alt;

        imageViewer.classList.add("active");

    });

});

viewerClose.addEventListener("click", () => {
    imageViewer.classList.remove("active");
});

imageViewer.addEventListener("click", (event) => {

    if (event.target === imageViewer) {
        imageViewer.classList.remove("active");
    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        imageViewer.classList.remove("active");
    }

});