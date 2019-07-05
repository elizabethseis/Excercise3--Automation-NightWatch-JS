module.exports={
    url:'https://www.youtube.com',

    commands:[{
        clickBtn(selector){
            return this
            .click(selector)
            
        },
        waitElement(selector){
            return this
            .waitForElementVisible(selector)
            
        }
    }]
}