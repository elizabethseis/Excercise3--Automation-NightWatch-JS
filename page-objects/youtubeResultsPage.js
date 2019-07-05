module.exports={
    elements:{
        
        searchTxt:{
         locateStrategy: 'xpath',
         selector:'//input[@id="search"]'},

        searchBtn:{
            locateStrategy: 'xpath',
            selector:'//yt-icon[@class="style-scope ytd-searchbox"]'},
        
        video1Link:{
            locateStrategy: 'xpath',
            selector:'//a[contains(text(),"Automating with Node.js - 001")]'},
        
        visualizacionesLink:{
            locateStrategy: 'xpath',
            selector: '//span[@class="view-count style-scope yt-view-count-renderer"]'},

        nameVideoLink:{
            locateStrategy: 'xpath',
            selector: '//yt-formatted-string[contains(text(),"Automating with Node.js - 001")]'},

       
    },

    commands:[{
        clickBtn(selector){
            return this
            .click(selector)
            
        },
        waitElement(selector){
            return this
            .waitForElementVisible(selector)
            
        },
        setValues(selector, value){
            return this
            .setValue(selector,value)
            
        },
        getTexto(selector){
            return this
            .getText(selector,function(result){
                console.log(result.value);
                });
            
        },
        
    }]
}