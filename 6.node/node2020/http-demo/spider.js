const https = require('https')
const cheerio = require('cheerio')

const url = 'https://www.lagou.com'

function filterMenu(html){
    let $ = cheerio.load(html);
    let menu = $('.menu_main');
    let menuData = [];
    menu.each(function(index, value){
        let menuTitle = $(value).find('h2').text();
        let menuLists = $(value).find('a');
        let menuList = [];
        menuLists.each(function(index, value){
            menuList.push($(value).text())
        });
        menuData.push({
            menuTitle: menuTitle,
            menuList: menuList
        });
    });
    return menuData;
}

function printMenu(menu){
    menu.forEach(function(value){
        console.log(value.menuTitle + '\n');
        value.menuList.forEach(function(value){
            console.log(value)
        })
    })
}

https.get(url, function(res){
    let html = '';

    res.on('data', function(data){
        html += data
    })

    res.on('end', function(){
        let res = filterMenu(html);
        printMenu(res)
    })

    res.on('err', function(err){
        console.log(err)
    })
})