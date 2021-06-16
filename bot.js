const puppeteer = require('puppeteer');
const { installMouseHelper } = require('./install-mouse-helper');

(async () => {

    const sleep = async(milliseconds) => { // FUNÇÃO PARA ESPERAR
        const date = Date.now(); 
        let currentDate = null; 
        do { 
            currentDate = Date.now(); 
            } 
        while (currentDate - date < milliseconds); 
    }


    const moveAndClick = (mouse, x, y) => { // Faz o mouse mover e clicar
        mouse.move(x, y);
        mouse.click(x, y);
            }    


    const browser = await puppeteer.launch({headless: false, defaultViewport: { width: 2560, height: 1080 }, args: ['--start-fullscreen'], isLandscape: true}); // MUDA RESOLUÇÃO 
    const page = await browser.newPage();
    const baseURL = 'https://test.chatbot.reload.co/quiz_bot_tester';;
    await installMouseHelper(page);

    await Promise.all([
        page.goto(baseURL),
        page.waitForNavigation({ waitUntil: 'networkidle2' }),
        page.waitForSelector('[alt=Vamos]') // Aguarda a animação inicial até carregar a intro
    ]);



    // COMEÇO DAS PÁGINAS
    sleep(500)
    moveAndClick(page.mouse, 300, 470); // Passa da primeira página



    await page.waitForSelector('[class="sc-pJurq cTjcEC"]') // Página de Termos
    sleep(200)
    await page.click('[class="sc-pJurq cTjcEC"]');



    await page.waitForSelector('[class="sc-pJUVA gaqhQz"]') // Página de Metas
    await page.click('[class="sc-pJUVA gaqhQz"]');
    await page.waitForSelector('[class="sc-oUoif gsebta isNextButton"]') // Botão Página de Metas
    await page.click('[class="sc-oUoif gsebta isNextButton"]');


    await page.waitForSelector('[class="sc-qYsuA kGvpfs"]') // Página de Gênero
    sleep(200)
    await page.click('[class="sc-qYsuA kGvpfs"]');



    await page.waitForSelector('[value="Madre de Deus, Bahia, Brazil"]'); // Página de Cidade, Estado, País
    await page.click('[class="sc-oUoif gsebta isNextButton"]');
    

    sleep(1000)
    await page.mouse.click(1277,470); // Página de Idade
    await page.mouse.click(1176,669); 
    await page.click('[class="sc-oUoif gsebta isNextButton"]'); // Botão Página de Idade



    sleep(500)
    await page.waitForSelector('[class="sc-pRgDJ MaYRg"]'); // Página Dimensões
    await page.click('[class="sc-pRgDJ MaYRg"]'); 
    await page.click('[class="sc-oUoif gsebta isNextButton"]'); // Botão de Próximo


    sleep(500)
    await page.waitForSelector('[class="sc-pRtcU kHAyPM"]'); // Página Peso
    await page.mouse.click(1265, 275); 
    


    await page.waitForSelector('[class="sc-oUbqx duufyi"]'); // Página Alcool 
    sleep(500)
    await page.mouse.click(886, 328);    


    sleep(500)
    await page.waitForSelector('[class="sc-qWgaf hUwOjB"]'); // Página Fumante
    await page.mouse.click(1173, 270);    


    await page.waitForSelector('[class="sc-pkHUE sc-ptfmh sc-paWCZ Uhdss"]'); // Páginas Diversas (EXERCÍCIOS)
    await page.click('[class="sc-pkHUE sc-ptfmh sc-paWCZ Uhdss"]');


    await page.waitForSelector('[class="sc-pkHUE sc-ptfmh sc-paWCZ Uhdss"]'); // Páginas Diversas (EXERCÍCIOS)
    await page.click('[class="sc-pkHUE sc-ptfmh sc-paWCZ Uhdss"]');


    await page.waitForSelector('[class="sc-pkHUE sc-ptfmh sc-paWCZ Uhdss"]'); // Páginas Diversas (EXERCÍCIOS)
    await page.click('[class="sc-pkHUE sc-ptfmh sc-paWCZ Uhdss"]');


    await page.waitForSelector('[class="sc-pkHUE sc-ptfmh sc-paWCZ Uhdss"]'); // Páginas Diversas (EXERCÍCIOS)
    await page.click('[class="sc-pkHUE sc-ptfmh sc-paWCZ Uhdss"]');
  

    await page.waitForSelector('[class="sc-pkHUE sc-ptfmh sc-paWCZ Uhdss"]'); // Páginas Diversas (EXERCÍCIOS)
    await page.click('[class="sc-pkHUE sc-ptfmh sc-paWCZ Uhdss"]');


    sleep(1000)
    await page.waitForSelector('[class="sc-pQrUA sc-oUMOe kODwBj"]'); // Página Horas de Sono
    sleep(500)
    await page.mouse.click(1278,730);
    await page.click('[class="sc-oUoif gsebta isNextButton"]');


    sleep(500)
    await page.waitForSelector('[class="sc-oUbqx duufyi"]'); // Página Qualidade Sono Satisfação
    await page.mouse.click(1077, 340);  



    await page.waitForSelector('[class="sc-oUoif gsebta isNextButton"]'); // Página Hora de Dormir
    sleep(500)
    await page.click('[class="sc-oUoif gsebta isNextButton"]');


    
    await page.waitForSelector('[class="sc-qXUgY kbUwSQ"]'); // Páginas Diversas / Qualidade de Sono
    sleep(500)
    await page.mouse.click(1102, 791);  


    await page.waitForSelector('[class="sc-qXUgY kbUwSQ"]'); // Páginas Diversas / Qualidade de Sono
    sleep(500)
    await page.mouse.click(1102, 791);  


    await page.waitForSelector('[class="sc-qXUgY kbUwSQ"]'); // Páginas Diversas / Qualidade de Sono
    sleep(500)
    await page.mouse.click(1102, 791);  


    await page.waitForSelector('[class="sc-qXUgY kbUwSQ"]'); // Páginas Diversas / Qualidade de Sono
    sleep(500)
    await page.mouse.click(1102, 791);  


    await page.waitForSelector('[class="sc-qXUgY kbUwSQ"]'); // Páginas Diversas / Qualidade de Sono
    sleep(500)
    await page.mouse.click(1102, 791);  



    await page.waitForSelector('[class="sc-pHIdM FLUZt"]'); // Página Estresse Rotina Diária
    sleep(500)
    await page.mouse.click(1375, 327);   



    await page.waitForSelector('[class="sc-pHIdM FLUZt"]'); // Página Nível de Energia Atual
    sleep(500)
    await page.mouse.click(1375, 327);   



    await page.waitForSelector('[class="sc-pTTZH jbrDtF"]'); // Páginas Diversas Humor / Padrão Emocional 
    sleep(800)
    await page.mouse.click(1120, 839); 


    await page.waitForSelector('[class="sc-pTTZH jbrDtF"]'); // Páginas Diversas Humor / Padrão Emocional 
    sleep(800)
    await page.mouse.click(1120, 839); 




    await page.waitForSelector('[class="sc-pZnSc blVtOH"]'); // Páginas Voltar
    sleep(500)
    await page.mouse.click(1283, 1035); 



    await page.waitForSelector('[class="sc-pHIdM FLUZt"]'); // Página Nível de Energia Atual
    sleep(1000)
    await page.mouse.click(1375, 327); 



    await page.waitForSelector('[class="sc-pTTZH jbrDtF"]'); // Páginas Diversas Humor / Padrão Emocional 
    sleep(800)
    await page.mouse.click(1120, 839); 


    await page.waitForSelector('[class="sc-pTTZH jbrDtF"]'); // Páginas Diversas Humor / Padrão Emocional 
    sleep(800)
    await page.mouse.click(1120, 839); 


    await page.waitForSelector('[class="sc-pTTZH jbrDtF"]'); // Páginas Diversas Humor / Padrão Emocional 
    sleep(800)
    await page.mouse.click(1120, 839); 


    await page.waitForSelector('[class="sc-pTTZH jbrDtF"]'); // Páginas Diversas Humor / Padrão Emocional 
    sleep(800)
    await page.mouse.click(1120, 839); 



    await page.waitForSelector('[class="sc-psDXd iBA-dpN"]'); // Página Problema Cognitivo
    sleep(800)
    await page.mouse.click(1121, 783); 


    await page.waitForSelector('[class="sc-pkUyL bQnweG"]'); // Página Café
    sleep(800)
    await page.mouse.click(1077, 366); 


    await page.waitForSelector('[class="sc-pHKzq izKVhe"]'); // Página Hábitos e Estilo de Vida
    sleep(1000)
    await page.mouse.click(1121, 789); 


    await page.waitForSelector('[class="sc-pHKzq izKVhe"]'); // Página Hábitos e Estilo de Vida
    sleep(800)
    await page.mouse.click(1121, 789); 


    await page.waitForSelector('[class="sc-pHKzq izKVhe"]'); // Página Hábitos e Estilo de Vida
    sleep(800)
    await page.mouse.click(1121, 789); 


    await page.waitForSelector('[class="sc-pHKzq izKVhe"]'); // Página Hábitos e Estilo de Vida
    sleep(800)
    await page.mouse.click(1121, 789); 


    await page.waitForSelector('[class="sc-pHKzq izKVhe"]'); // Página Hábitos e Estilo de Vida
    sleep(800)
    await page.mouse.click(1121, 789); 


    await page.waitForSelector('[class="sc-pHKzq izKVhe"]'); // Página Hábitos e Estilo de Vida
    sleep(800)
    await page.mouse.click(1121, 789); 

   
    sleep(1000)
    await page.waitForSelector('[class="sc-qXjgK sZlfd"]'); // Página Dieta
    sleep(1000)
    await page.mouse.click(1079, 469);


    await page.waitForSelector('[class="sc-qXJKU cHKXqv"]'); // Páginas Diversas (FREQUÊNCIA QUE COME)
    sleep(1000)
    await page.mouse.click(1277, 812);


    await page.waitForSelector('[class="sc-qXJKU cHKXqv"]'); // Páginas Diversas (FREQUÊNCIA QUE COME)
    sleep(800)
    await page.mouse.click(1277, 812);


    await page.waitForSelector('[class="sc-qXJKU cHKXqv"]'); // Páginas Diversas (FREQUÊNCIA QUE COME)
    sleep(800)
    await page.mouse.click(1277, 812);


    await page.waitForSelector('[class="sc-qXJKU cHKXqv"]'); // Páginas Diversas (FREQUÊNCIA QUE COME)
    sleep(800)
    await page.mouse.click(1277, 812);


    await page.waitForSelector('[class="sc-qXJKU cHKXqv"]'); // Páginas Diversas (FREQUÊNCIA QUE COME)
    sleep(800)
    await page.mouse.click(1277, 812);


    await page.waitForSelector('[class="sc-qXJKU cHKXqv"]'); // Páginas Diversas (FREQUÊNCIA QUE COME)
    sleep(800)
    await page.mouse.click(1277, 812);


    await page.waitForSelector('[class="sc-qXJKU cHKXqv"]'); // Páginas Diversas (FREQUÊNCIA QUE COME)
    sleep(800)
    await page.mouse.click(1277, 812);


    await page.waitForSelector('[class="sc-qXJKU cHKXqv"]'); // Páginas Diversas (FREQUÊNCIA QUE COME)
    sleep(800)
    await page.mouse.click(1277, 812);


    await page.waitForSelector('[class="sc-qXJKU cHKXqv"]'); // Páginas Diversas (FREQUÊNCIA QUE COME)
    sleep(800)
    await page.mouse.click(1277, 812);


    await page.waitForSelector('[class="sc-qXJKU cHKXqv"]'); // Páginas Diversas (FREQUÊNCIA QUE COME)
    sleep(800)
    await page.mouse.click(1277, 812);


    await page.waitForSelector('[class="sc-qXJKU cHKXqv"]'); // Páginas Diversas (FREQUÊNCIA QUE COME)
    sleep(800)
    await page.mouse.click(1277, 812);


    await page.waitForSelector('[class="sc-qXJKU cHKXqv"]'); // Páginas Diversas (FREQUÊNCIA QUE COME)
    sleep(800)
    await page.mouse.click(1277, 812);


    await page.waitForSelector('[class="sc-qXJKU cHKXqv"]'); // Páginas Diversas (FREQUÊNCIA QUE COME)
    sleep(800)
    await page.mouse.click(1277, 812);


    sleep(500)
    await page.waitForSelector('[class="sc-qWgaf hUwOjB"]'); // Página Intolerância / Sensibilidade Alimentar
    sleep(500)
    await page.mouse.click(1177, 327); 


    await page.waitForSelector('[class="sc-qWgaf hUwOjB"]'); // Página Alergia
    sleep(500)
    await page.mouse.click(1177, 327); 


    await page.waitForSelector('[class="sc-qWgaf hUwOjB"]'); // Página Suplemento
    sleep(500)
    await page.mouse.click(1177, 269); 


    await page.waitForSelector('[class="sc-oUoif gsebta isNextButton"]'); // Página Sintomas a Aliviar
    sleep(500)
    await page.mouse.click(1350, 1035); 


    await page.waitForSelector('[class="sc-qWgaf hUwOjB"]'); // Página Condição de Saúde
    sleep(500)
    await page.mouse.click(1177, 269); 


    await page.waitForSelector('[class="sc-qWgaf hUwOjB"]'); // Página Final
    sleep(500)
    await page.mouse.click(1177, 269); 


    sleep(5000)
    browser.close(); // FECHA O BROWSER
    

})();




