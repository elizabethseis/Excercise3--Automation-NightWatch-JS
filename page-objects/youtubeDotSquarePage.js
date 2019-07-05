module.exports={
    elements:{
        
        accederBtn:{
            locateStrategy: 'xpath',
            selector:'//ytd-button-renderer[@class="style-scope ytd-masthead style-suggestive size-small"]//yt-formatted-string[@id="text"] '},

        
        dotBtn:{
         locateStrategy: 'xpath',
         selector:'//ytd-topbar-menu-button-renderer[2]//div[1]//a[1]//yt-icon-button[1]//button[1]//yt-icon[1]'},
        
         youtubeTVLink:{
            locateStrategy: 'xpath',
            selector:'//yt-formatted-string[contains(text(),"YouTube TV")]'},
        
        youtubeMusic:{
            locateStrategy: 'xpath',
            selector: '//yt-formatted-string[contains(text(),"YouTube Music")]'},

        youtubeKids:{
                locateStrategy: 'xpath',
                selector:'//yt-formatted-string[contains(text(),"YouTube Kids")]'},
               
        youtubeCreadoresLink:{
                   locateStrategy: 'xpath',
                   selector:'//yt-formatted-string[contains(text(),"Creator Academy")]'},
               
        youtubeArtistasLink:{
                   locateStrategy: 'xpath',
                   selector: '//yt-multi-page-menu-section-renderer[3]//div[2]//ytd-compact-link-renderer[2]//a[1]//paper-item[1]'},
            
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
