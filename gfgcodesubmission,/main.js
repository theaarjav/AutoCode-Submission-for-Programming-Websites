const puppeteer=require("puppeteer");


const loginlink="https://auth.geeksforgeeks.org/?to=https://www.geeksforgeeks.org/"
const email="aarjavndesai@gmail.com";
const password="123456788765";
const probLink="https://practice.geeksforgeeks.org/problems/second-largest3735/1?page=1&difficulty[]=-2&category[]=Arrays&sortBy=submissions";
// let browserOpen
const code=require("./codes");
(async function(){
    try{
        let browserInstance= await puppeteer.launch({

            headless:false,
            args:['--start-maximized'],
            defaultViewport:null
        })

        let newTab= await browserInstance.newPage();
        await newTab.goto(loginlink);
        // await newTab.click("a[type='button']");
        // await waitAndClick(newTab, "input[type='text']")
        await newTab.type("input[type='text']", email);
        // await waitAndClick(newTab, "input[type='password']")
        await newTab.type("input[type='password']", password);
        await newTab.click(".btn.btn-green.signin-button");
        await waitAndClick(newTab, "button.skip-btn");
        let problemTab= await browserInstance.newPage();
        await problemTab.goto(probLink);
        await waitAndClick(problemTab, "#rcc-confirm-button")
        // await waitAndClick(problemTab, ".problems_custom_input__ediyL");
        // await waitAndClick(problemTab, ".problems_custom_input__ediyL");
        // await waitAndClick(problemTab, ".problems_custom_input__ediyL");
        // await waitAndClick(problemTab, "#__next > div > div > div.problems_problem_page__G7vws.problem_page__container > div > div > div:nth-child(3) > div > div.pushable > div.ui.segment.ui.overlay.bottom.visible.sidebar.problems_output_window__G_LTH.problems_normal_height__Og1iy > div.problems_content__I8YGa > div.problems_content_pane__nexJa > textarea");
        // await waitAndClick(problemTab, ".problems_right_section__iOL26 .pushable .problems_custom_input_textarea__T9IDk");
        // await waitAndClick(problemTab, ".problems_right_section__iOL26 .pushable .problems_custom_input_textarea__T9IDk");
        // await problemTab.keyboard.down('Control');
        // await problemTab.keyboard.down('A');
        // await problemTab.keyboard.down('Backspace');
        // await problemTab.keyboard.up('Backspace');
        // await problemTab.keyboard.down('X');
        // await problemTab.keyboard.down('Control');
        // await problemTab.keyboard.down('A');
        // await problemTab.keyboard.down('X');
        // await problemTab.keyboard.up('A');
        // await problemTab.keyboard.up('Control');
        // await problemTab.keyboard.up('X');
        await waitAndClick(problemTab, "#ace-editor > div.ace_scroller > div > div.ace_layer.ace_text-layer > div:nth-child(7)");
        await problemTab.type("#ace-editor > div.ace_scroller > div > div.ace_layer.ace_text-layer > div:nth-child(7)", code.answers[0]);
        await waitAndClick(problemTab, "#ace-editor > div.ace_scroller > div > div.ace_layer.ace_text-layer > div:nth-child(23)");
        await problemTab.keyboard.down('Backspace');
        await problemTab.keyboard.up('Backspace');
        await problemTab.keyboard.down('Shift');
        await problemTab.keyboard.down('ArrowDown');
        await problemTab.keyboard.down('ArrowDown');
        await problemTab.keyboard.down('ArrowDown');
        await problemTab.keyboard.down('Backspace');
        await waitAndClick(problemTab, "button.ui.button.problems_submit_button__6QoNQ");
        // await problemTab.keyboard.up('Shift');
        // await problemTab.keyboard.down('Control');
        // await problemTab.keyboard.down('V')
        // await problemTab.keyboard.up('Control');
        // await problemTab.keyboard.up('V')
    }catch(error){
        console.log(error);
    }
})()

async function waitAndClick(curr_page, selector){
    await curr_page.waitForSelector(selector);
    return curr_page.click(selector);
}





// await newTab.type("#ace-editor > div.ace_scroller > div > div.ace_layer.ace_text-layer > div:nth-child(8) > span", code.answers[0]);
// await problemTab.keyboard.down('Backspace');
// await waitAndClick(problemTab, "button.problems_submit_button__6QoNQ");