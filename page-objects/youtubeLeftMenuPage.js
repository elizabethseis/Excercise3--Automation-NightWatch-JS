module.exports={

    elements:{
        leftMenuBtn: '#guide-icon',

        paginaPrincipalLink:{
         locateStrategy: 'xpath',
         selector:'//span[@class="title style-scope ytd-guide-entry-renderer"][contains(text(),"Home")]'},
        
         tendenciasLink:{
            locateStrategy: 'xpath',
            selector:'//span[@class="title style-scope ytd-guide-entry-renderer"][contains(text(),"Trending")]'},
        
            historialLink:{
            locateStrategy: 'xpath',
            selector: '//ytd-guide-section-renderer[2]//div[1]//ytd-guide-entry-renderer[2]//a[1]//paper-item[1]//span[1]'},
    },

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