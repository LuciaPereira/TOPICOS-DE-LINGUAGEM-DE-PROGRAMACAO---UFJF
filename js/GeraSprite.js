import SpriteMoeda from "./SpriteMoeda.js";

export default class GeraSprite {
  constructor(cena) {
    this.cena = cena;  }

  geraPosicao() {
    const x = Math.floor(Math.random() * 14);
    const y = Math.floor(Math.random() * 10);

    const posicao = { x: x * 64 + this.cena.mapa.SIZE / 2, y: y * 64 + this.cena.mapa.SIZE / 2 };
    if (this.cena.mapa.tiles[y][x] != 1) return posicao;
    this.geraPosicao();
  }

  create(imageKey, tags) {
    const sprite = new SpriteMoeda({
      ...this.geraPosicao(),
      image: this.cena.assets?.img(imageKey),
      tags: tags,
      p: 0,
      poses: [{ row: 0, init: 0, end: 7, vel: 5, action: "rotate" }]
    });
    this.cena.adicionar(sprite);
  }
}