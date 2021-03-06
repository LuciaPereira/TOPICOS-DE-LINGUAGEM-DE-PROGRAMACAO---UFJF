export default class AssetManager{
    constructor(mixer = null){
        this.aCarregar = 0;
        this.carregadas = 0;
        this.imagens = new Map();
        this.audios = new Map();
        this.mixer = mixer;

    }
    carregaImagem(chave, source){
        const img = new Image();
        //const that = this;
        img.addEventListener("load",()=>{
            console.log(`Imagem ${this.carregadas}/${this.aCarregar} carregada`);
            this.carregadas++;
        });
        img.src= source;
        this.imagens.set(chave, img);
        this.aCarregar++;
    }
    carregaAudio(chave, source){
        const audio = new Audio();
        //const that = this;
        
        audio.addEventListener("loadeddata",()=>{
            console.log(`Audio ${this.carregadas}/${this.aCarregar} carregada`);
            this.carregadas++;
        });
        audio.src= source;
        this.audios.set(chave, audio);
        this.aCarregar++;
    }


    img(chave){
        return this.imagens.get(chave);
    }
    audio(chave){
        return this.audios.get(chave);
    }
    progresso(){
        if(this.aCarregar>0){
            return `${((this.carregadas / this.aCarregar) * 100).toFixed(2)}%`;
        }
        return "Nada a carregar";
    }
    acabou(){
        return this.carregadas === this.aCarregar;
    }
    play(chave){
        this.mixer?.play(this.audio(chave));
    }
}