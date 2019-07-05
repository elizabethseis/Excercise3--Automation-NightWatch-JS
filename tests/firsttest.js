module.exports={
    before(browser){

        const page1= browser.page.youtubeHomePage();
        

        page1.navigate()
        browser.windowMaximize('current')
        
        
    },
    'Excercise 3'(browser){
        const page2= browser.page.youtubeLeftMenuPage();
        const page3= browser.page.youtubeDotSquarePage();
        const page4= browser.page.youtubeResultsPage();
        page2.waitElement('@leftMenuBtn')
        page2.clickBtn('@leftMenuBtn')
        page2.clickBtn('@leftMenuBtn')
        page2.verify.visible('@paginaPrincipalLink')
        page2.verify.visible('@tendenciasLink')
        page2.verify.visible('@historialLink')
        page3.assert.containsText('@accederBtn','SIGN IN')
        page3.waitElement('@dotBtn')
        page3.clickBtn('@dotBtn')
        page3.assert.containsText('@youtubeTVLink','YouTube TV','YouTube TV is displayed')
        page3.assert.containsText('@youtubeMusic','YouTube Music','YouTube Music is displayed')
        page3.assert.containsText('@youtubeKids','YouTube Kids','YouTube Kids is displayed')
        page3.assert.containsText('@youtubeCreadoresLink','Creator Academy','Creator Academy is displayed')
        page3.assert.containsText('@youtubeArtistasLink','YouTube for Artists','YouTube for Artists is displayed')
        page4.setValues('@searchTxt','Automating with Node.js – 001')
        page4.clickBtn('@searchBtn')
        page4.waitElement('@video1Link')
        page4.assert.containsText('@video1Link','Automating with Node.js - 001','Automating with Node.js - 001 is the first title displayed')
        page4.clickBtn('@video1Link')
        page4.waitElement('@visualizacionesLink')
        page4.getTexto('@visualizacionesLink')
        page4.assert.containsText('@nameVideoLink','Automation with Selenium')
    },

    afterEach : function(browser) {
        const page5= browser.page.youtubeResultsPage()
        page5.assert.containsText('@nameVideoLink','Automating with Node.js - 001')
        .saveScreenshot('./reports/Successful.png')
    },
    after(browser) {
        
        browser.end();
      }
    
}