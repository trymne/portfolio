export default class Card extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.innerHTML = this._getTemplate();
    }

    render(){
        this.renderTitle();
    }

    renderTitle(){
        this.shadowRoot.getElementById('card-title').innerHTML = this.title;
    }

    renderText(){
        this.shadowRoot.getElementById("intro").innerHTML = this.intro;
        let html = '';
        this.text.forEach(element => {
            html += `<p>${element}</p>`;
        });
        this.shadowRoot.getElementById('text').innerHTML = html;
    }



    _setContent(data){
        this._initData(data);
        this.render();
    }


    _initData(data){
        this.title = data.title;
        this.intro = data.intro;
        this.text = [...data.text];
        console.log(this.text);
    }

    _getTemplate(){
        return `
        <style>
        article>p{
            position: relative;
            top: 280px;
            transition: transform .4s;
            left: -5px;
            margin: 10px;
            font-size: 0.95rem;
        }

        p {
            margin: 10px;
            font-size: 0.95rem;
        }
        
        article>p::before {
            content: '';
            width: 150%;
            position: absolute;
            height: 200%;
            box-shadow: inset 5px 0 0 500px rgb(86,185,249);
            z-index: -1;
        }

        h2 {
            font-size: 1.3rem;
            text-align: center;
            margin: 10px;
        }

        div:hover article>p {
            transform: translateY(-330px);
        }

        </style>
        <div>
        <h2 id="card-title"></h2>
        <p id="intro"></p>
        <article id="text"></article>
        </div>
        `
    }

}

customElements.define("card-info", Card);