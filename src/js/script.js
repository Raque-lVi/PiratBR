
var mas_opcoes = document.getElementById("mas_opcoes");
var barrinha = document.getElementById("barrinha");
var categoria = document.getElementById("categoria");

var gostou_h2 = document.getElementById("gostou_h2");
var gostou_h1 = document.getElementById("gostou_h1");




var clic = 0;

mas_opcoes.addEventListener("click",function(){

    categoria.style.display = "block";

});

barrinha.addEventListener("click", function () {

    categoria.style.display = "none";
    
});

gostou_h2.addEventListener("click", function () {
    
    if (gostou_h2.style.opacity != "0") {

        gostou_h1.style.opacity = "25";
        gostou_h1.style.cursor = "pointer";

        gostou_h2.style.opacity = "0";
        gostou_h2.style.cursor = "default";
    }

});

gostou_h1.addEventListener("click", function(){

    if (gostou_h1.style.opacity != "0") {

        gostou_h2.style.opacity = "25";
        gostou_h2.style.cursor = "pointer"

        gostou_h1.style.opacity = "0";
        gostou_h1.style.cursor = "default";
    }

});



/// carrossel's



var Listafilme = [
    {titulo: "rocky", tipo: "ação", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/rocky.jpeg?v=1704373182566", descricao: "Rocky (bra: Rocky, um Lutador) é um filme de drama esportivo estadunidense de 1976 dirigido por John G. Avildsen e escrito e estrelado por Sylvester Stallone como Rocky Balboa, um pugilista ítalo-estadunidense de classe trabalhadora, sem instrução, mas bondoso, que trabalha como cobrador de dívidas de um agiota nas favelas da Filadélfia. Rocky, um lutador de clube de pequeno porte, recebe uma chance no campeonato mundial de pesos pesados. O filme também é estrelado por Talia Shire como Adrian, Burt Young como o irmão de Adrian, Paulie, Burgess Meredith como o treinador de Rocky, Mickey Goldmill, e Carl Weathers como o campeão, Apollo Creed." },
    {titulo: "os mercenarios", tipo: "ação", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/osmercenarios.jpeg?v=1704373177242", descricao: "Os Mercenários é um filme de ação que conta a história de um grupo de mercenários liderados por Barney Ross (Sylvester Stallone) que são contratados pelo governo americano para deporem um ditador numa ilha tropical1234. O grupo é composto por especialistas em facas, artes marciais e wrestling13. O filme é repleto de cenas de luta, tiros e artes marciais1."},
    {titulo: "missao impossivel", tipo: "ação", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/missaoimpossivel.jpeg?v=1704373173860", descricao: "Missão Impossível é um filme de ação que conta a história de um grupo especial de agentes que cai em uma cilada durante uma missão em Praga12. O americano Ethan Hunt (Tom Cruise) descobre que apenas ele e outra agente sobreviveram. Tomado como informante, ele foge e começa a agir por conta própria"},
    {titulo: "rambo", tipo: "ação", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/rambo.jpeg?v=1704373181053", descricao: "Sinopse Uma guerra civil acontece há quase 60 anos na fronteira com a Birmânia, envolvendo os birmaneses e a tribo Karen. John Rambo vive no norte da Tailândia, onde pilota um barco no Rio Salween. Cansado de lutar, Rambo leva uma vida simples e solitária, apenas acompanhando o fluxo de rebeldes e refugiados."},
    {titulo: "carga explosiva", tipo: "ação", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/cargaexplosiva.jpeg?v=1704373165977", descricao: "Sinopse Frank Martin (Jason Statham) é um ex-soldado do exército norte-americano, que agora trabalha transportando cargas e vive em uma vila tranquila, na costa do Mediterrâneo. Martin segue sempre à risca o lema de nunca saber o que está transportando nem para quem é a carga, a fim de evitar problemas."},
    {titulo: "policial em apuros", tipo: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/policialemapuros.jpeg?v=1704373180079", img: "ação", descricao: "Policial em Apuros 2 é uma comédia de ação12que conta a história de Ben e James, dois policiais que precisam ir para Miami resolver um caso de tráfico de drogas312. Ben está prestes a se casar com a irmã de James, que não aprova o seu noivado312. Juntos, eles enfrentam muitas confusões e perigos na cidade12"},
    
    {titulo: "todo poderoso", tipo: "comedia", img:"https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/todopoderoso.jpeg?v=1704373184075", descricao: ""},
    {titulo: "policial em apuros", tipo: "comedia", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/policialemapuros.jpeg?v=1704373180079", descricao: "Policial em Apuros 2 é uma comédia de ação12que conta a história de Ben e James, dois policiais que precisam ir para Miami resolver um caso de tráfico de drogas312. Ben está prestes a se casar com a irmã de James, que não aprova o seu noivado312. Juntos, eles enfrentam muitas confusões e perigos na cidade12"},
    {titulo: "pense como eles tambem", tipo: "comedia", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/pensecomoelestambem.jpeg?v=1704373178541", descricao: "é um filme de comédia romântica estadunidense de 2014, dirigido por Tim Story e a sequência do filme de 2012 Think Like a Man baseado no livro de Steve Harvey Act Like a Lady, Think Like a Man"},
    {titulo: "gente grande", tipo: "comedia", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/gentegrande.jpeg?v=1704373169843", descricao: "Gente Grande é uma comédia sobre cinco amigos que se reúnem após o enterro do seu antigo técnico de basquete para agir feito crianças123. Eles e suas famílias passam o ferido de 4 de julho em uma casa no lago, e comemoram muitos anos depois o campeonato que eles venceram1. O filme foi dirigido por Dennis Dugan e estrelado por Adam Sandler, Kevin James, Chris Rock e David Spade"},
    {titulo: "esse é meu garoto", tipo: "comedia", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/esseemeugaroto.jpeg?v=1704373168810", descricao: "é um filme que conta a história de Donny (Adam Sandler), que teve um filho, Todd (Andy Samberg), quando ainda era adolescente. Donny cuidou de Todd até que ele completasse 18 anos, mas depois disso eles ficaram anos sem se ver. Quando Todd está prestes a se casar, Donny reaparece em sua vida, mesmo sem ter sido convidado para a cerimônia"},
    {titulo: "uma linda mulher", tipo: "comedia", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/umalindamulher.jpeg?v=1704373158730", descricao: "Pretty Woman é um filme de comédia romântica americano de 1990, ambientado em Los Angeles. Escrito por J. F. Lawton e dirigido por Garry Marshall, o filme é estrelado por Richard Gere e Julia Roberts"},

    {titulo: "viva a vida é uma festa", tipo: "Infantis", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/vivaavidaeumafesta.jpeg?v=1704373162225", descricao: "Viva - A Vida é uma Festa é um filme de animação que narra a aventura de Miguel, um menino de 12 anos que sonha em ser músico1234. Porém, sua família é contra a música e ele precisa enfrentar essa resistência13. Em um festival de música, ele rouba um objeto que o leva ao mundo dos mortos, onde ele descobre um mistério sobre sua origem e sua paixão234. O filme aborda temas como vida, morte, família e cultura mexicana5."},
    {titulo: "up", tipo: "Infantis", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/up2.jpg?v=1704373161130", descricao: "Up: Altas Aventuras é um filme da Pixar que conta a história de Carl Fredricksen, um viúvo solitário e ranzinza de 78 anos, que embarca numa aventura para realizar um sonho de juventude que mantinha com a mulher, Ellie. Os dois queriam descobrir o Paraíso das Cachoeiras, um ponto pouco conhecido situado na América do Sul1. O filme é uma história de aventura e amizade, que começa quando Carl amarra milhares de balões em sua casa e voa para a América do Sul"},
    {titulo: "toy story", tipo: "Infantis", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/toystory.jpeg?v=1704373185256", descricao: "Toy Story é um filme de animação, aventura e comédia americano lançado em 19951. É conhecido por ser o primeiro filme da história do cinema a ter sido compilado inteiramente por ferramentas de computação gráfica1. A história do cowboy Woody e seu amigo astronauta Buzz Lightyear foi a primeira animação da parceria Disney e Pixar, além de ser um dos primeiros longa-metragem da história do cinema a ser 100% produzido em computação gráfica"},
    {titulo: "luca 1", tipo: "Infantis", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/luca1.jpeg?v=1704373173276", descricao: "se passa em uma bela cidade litorânea na Riviera italiana, o filme de animação original é uma história de amadurecimento sobre um jovem que vive um verão inesquecível repleto de gelato, macarrão e passeios de scooter sem fim."},
    {titulo: "barbie", tipo: "Infantis", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/barbie.jpeg?v=1704373164873", descricao: "Barbie é um filme dirigido por Greta Gerwing e estrelado por Margot Robbie (Barbie) e Ryan Gosling (Ken)12. A produção acompanha a história da boneca que, após ser expulsa da Barbieland, parte para o mundo real em busca da verdadeira felicidade123. O filme será ambientado em Barbieland, lugar onde a boneca é expulsa por 'não estar à altura dos padrões de beleza'2. Barbie precisa lutar com as dificuldades de não ser mais apenas uma boneca3"},

    {titulo: "uma linda mulher", tipo: "romance", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/umalindamulher.jpeg?v=1704373158730", descricao: "Pretty Woman é um filme de comédia romântica americano de 1990, ambientado em Los Angeles. Escrito por J. F. Lawton e dirigido por Garry Marshall, o filme é estrelado por Richard Gere e Julia Roberts"},
    {titulo: "idas e vindas do amor", tipo: "romance", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/idasevindasdoamor.jpeg?v=1704373171643", descricao: "Idas e Vindas do Amor O cotidiano de 10 pessoas se interliga no dia dos namorados. 117 min EUA, 2010 Por Redação Guia da Semana No Dia dos Namorados, o romântico Reed (Ashton Kutcher) decide tomar uma importante decisão e pede a sua namorada Morley (Jessica Alba) em casamento."},
    {titulo: "depois do universo", tipo: "romance", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/depoisdouniverso.jpeg?v=1704373167864", descricao: "Depois do Universo é um filme dirigido por Diego Freitas com Giulia Be, Henry Zaga. Sinopse: Nina (Giulia Be) é uma talentosa pianista que precisa lidar com o lúpus, uma doença autoimune que ataca seus rins. Ela vê seus sonhos se perderem entre sessões de hemodiálise"},
    {titulo: "como eu era antes de voce", tipo: "romance", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/comoeueraantesdevoce.jpeg?v=1704373166911", descricao: " é um filme baseado no livro homônimo de Jojo Moyes. O filme conta a história de Will Traynor, um homem rico e bem-sucedido que sofre um acidente de moto e fica tetraplégico123. Louisa, uma jovem do interior, é contratada para cuidar de Will e os dois acabam se apaixonando2. O filme é uma poesia romântica e inspiradora3."},
    {titulo: "amor a primeira vista", tipo: "romance", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/amoraprimeiravista.jpeg?v=1704373162961", descricao: "Amor à Primeira Vista é um filme que conta a história de Hadley Sullivan e Oliver12. Hadley perde seu voo de Nova York para Londres e conhece Oliver no aeroporto1. Eles pegam um voo longo juntos e desenvolvem uma relação mais próxima1. O filme é um drama romântico que segue dois estranhos que se envolvem após um encontro casual em um aeroporto3."},

    {titulo: "o luminado", tipo: "terro", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/oiluminado.jpeg?v=1704373176216", descricao: "é um documentário de longa metragem que revela o olhar sobre a fotografia de cinema pelas lentes de alguns dos maiores profissionais da recente cinematografia brasileira."},
    {titulo: "o exorcista", tipo: "terro", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/oexorcista.jpeg?v=1704373175133", descricao: "O Exorcista é um filme de terror sobrenatural de 1973, baseado no livro de William Peter Blatty, que também escreveu o roteiro e produziu o filme12. O filme, dirigido por William Friedkin, conta a história de uma garota de 12 anos que é possuída por um demônio e a tentativa de sua mãe de salvá-la por meio de um exorcismo realizado por dois padres católicos12. O filme foi inspirado em um caso real de possessão"},
    {titulo: "invocacao do mal", tipo: "terro", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/invocacaodomal.jpeg?v=1704373172662", descricao: "Invocação do Mal é um filme baseado em uma história real da família Perron, que viveu por uma década em uma casa assombrada1. A família é ajudada pelos investigadores paranormais Ed e Lorraine Warren23. Eles são chamados para ajudar a família aterrorizada por uma presença obscura em uma fazenda isolada. Forçados a confrontar uma poderosa entidade demoníaca, se veem presos no caso mais terrível de suas vidas"},
    {titulo: "hereditario", tipo: "terro", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/hereditario.jpeg?v=1704373170684", descricao: "Hereditário é um filme de terror norte-americano dirigido por Ari Aster12345. O filme conta a história de uma família que está de luto pela perda da matriarca Ellen2. A narrativa é perturbadora e arrepiante, e o filme é considerado um dos mais lamentáveis dos últimos tempos14. O título do filme é uma referência aos distúrbios mentais que acometem a família Graham e que são passados de geração a geração3."},
    {titulo: "a profecia", tipo: "terro", img: "https://cdn.glitch.global/d8affcc3-ce7e-4926-9528-49930692b6ba/aprofecia.jpeg?v=1704373163967", descricao: "A Profecia é um filme de terror que conta a história de um casal que adota um bebê sem saber que ele é o AntiCristo12. O filme mostra as mortes misteriosas que acontecem ao redor da família e as pistas que revelam a verdadeira origem do menino32. O filme é um remake do clássico de 1976, com Liev Schreiber e Julia Stiles nos papéis principais1."},

    //{titulo: "", tipo: "", img: "", descricao: ""},
    


]


var images1 = [];

function imagem_List(tipo) {
    images1 = [];
    for (let i = 0; i < Listafilme.length; i++) {
        if (Listafilme[i].tipo == tipo){
            images1.push(Listafilme[i].img)
            
        }}
    console.log(images1);
    return images1;
}

function upImg(tipo, nu, img){
    images1 = imagem_List(tipo);
        
    if (tipo == "ação"){
        var img1 = document.getElementById("img1");
        var img2 = document.getElementById("img2");
        var img3 = document.getElementById("img3");
        var img4 = document.getElementById("img4");
        var img5 = document.getElementById("img5");

    }
    else if (tipo == "comedia"){
        var img1 = document.getElementById("img6");
        var img2 = document.getElementById("img7");
        var img3 = document.getElementById("img8");
        var img4 = document.getElementById("img9");
        var img5 = document.getElementById("img10");

    }
    else if (tipo == "Infantis"){
        var img1 = document.getElementById("img11");
        var img2 = document.getElementById("img12");
        var img3 = document.getElementById("img13");
        var img4 = document.getElementById("img14");
        var img5 = document.getElementById("img15");

    }
    else if (tipo == "romance"){
        var img1 = document.getElementById("img16");
        var img2 = document.getElementById("img17");
        var img3 = document.getElementById("img18");
        var img4 = document.getElementById("img19");
        var img5 = document.getElementById("img20");

    }
    else if (tipo == "terro"){
        var img1 = document.getElementById("img21");
        var img2 = document.getElementById("img22");
        var img3 = document.getElementById("img23");
        var img4 = document.getElementById("img24");
        var img5 = document.getElementById("img25");

        

    }
    if (nu == true){
        upLinha(images1, img1,img2,img3,img4,img5);
    }
    else{
        if (img == 1){
            return img1
        }else if (img == 2){
            return img2
        }else if (img == 3){
            return img3
        }else if (img == 4){
            return img4
        }else if (img == 5){
            return img5
        }

    }
    }

var vez = 0

function upLinha(images1, img1, img2, img3, img4, img5) {

    
    let x = menos1(images1,img5);

    img4.src = images1[x];

    x = maisX(x,images1)

    img3.src = images1[x];

    x = maisX(x,images1)

    img2.src = images1[x];

    x = maisX(x,images1)

    img1.src = images1[x];

    x = maisX(x,images1)

    img5.src = images1[x];


}

function maisX(v, images1) {
    if (v <= 0 ) {
        v = images1.length - 1;
    }
    else{
        v = v - 1;
    };
    return v
}

function menos1(images1, img5){
    
    let v = 0
    for (let i = 0; i < images1.length; i++) {
        if (images1[i] == img5.src){
            v = i;
        }}
    console.log(v)
    return v

}


function proxPag(tipo, img) {
    resposta = upImg(tipo, false, img);

    let index = document.getElementById("index");
    let footer = document.getElementById("footer");
    let main = document.getElementById("main")
    let quaseTudo = document.getElementById("quaseTudo");

    index.style.display = "none";
    footer.style.display = "none";
    main.style.display = "none";
    quaseTudo.style.display = "block";

    let nome;
    let descri;
    let imagem;

    for (let i = 0; i < Listafilme.length; i++) {
        if (Listafilme[i].img == resposta.src){
            nome = Listafilme[i].titulo;
            descri = Listafilme[i].descricao;
            imagem = Listafilme[i].img;
        }}
    
    let p_img = document.getElementById("p_img_descri");
    let src_img = document.getElementById("src_img");
    let h1 = document.getElementById("h1");

    src_img.src = imagem;
    p_img.innerHTML = descri;
    h1.innerHTML = nome;

    addOutrasOpcoes(tipo,imagem)
        
    }

function addOutrasOpcoes(tipo,imagem_Descricao) {
    images1 = imagem_List(tipo);

    for (let i = 0; i < images1.length; i++) {
        if (images1[i] == imagem_Descricao){
            images1.slice(i,1);
            
        }}

    let tipo_img1 = document.getElementById("tipo_img1");
    let tipo_img2 = document.getElementById("tipo_img2");
    let tipo_img3 = document.getElementById("tipo_img3");
    let tipo_img4 = document.getElementById("tipo_img4");

    v = 1;
    tipo_img1.src = images1[v];
    v++;
    tipo_img2.src = images1[v];
    v++;
    tipo_img3.src = images1[v];
    v++;
    tipo_img4.src = images1[v];
    
}
function pesquisar() {
    var pesquisa = document.getElementById("imputt").value;

    let nome;
    let descri;
    let imagem = "";
    let tipo

    for (let i = 0; i < Listafilme.length; i++) {
        if (Listafilme[i].titulo == pesquisa){
            nome = Listafilme[i].titulo;
            descri = Listafilme[i].descricao;
            imagem = Listafilme[i].img;
            tipo = Listafilme[i].tipo;
        }
    }

    if (imagem != ""){
        let index = document.getElementById("index");
        let footer = document.getElementById("footer");
        let main = document.getElementById("main")
        let quaseTudo = document.getElementById("quaseTudo");

        index.style.display = "none";
        footer.style.display = "none";
        main.style.display = "none";
        quaseTudo.style.display = "block";

        let p_img = document.getElementById("p_img_descri");
        let src_img = document.getElementById("src_img");
        let h1 = document.getElementById("h1");

        src_img.src = imagem;
        p_img.innerHTML = descri;
        h1.innerHTML = nome;

        addOutrasOpcoes(tipo,imagem)
    }

    



}


/*function pesquisar() {
    var pesquisa = document.getElementById("imputt");

    if (pesquisa.value == "UP" || pesquisa.value == "up" ){
        window.location.href = 'about.html';
    }
}*/

function dessaparecer() {
    let index = document.getElementById("index");
    let footer = document.getElementById("footer");
    let main = document.getElementById("main")
    let quaseTudo = document.getElementById("quaseTudo");

    index.style.display = "block";
    footer.style.display = "block";
    main.style.display = "block";
    quaseTudo.style.display = "none";

}









