const htmlCreator = require('./views');

module.exports = (req,res,creator) => {

    const posts = [
        {id: 1, title: 'First post', desc: 'description for first post'},
        {id: 2, title: 'Second post', desc: 'description for second post'},
        {id: 3, title: 'Third post', desc: 'description for third post'},
        {id: 4, title: 'Fourth post', desc: 'description for fourth post'},
    ];

    const url = req.url.match(/[^/]{1,}/g);
    if (!Array.isArray(url)) {
        return res.end(htmlCreator("This is home page", 'home'));
    }
    const routesMap = {
        home: ["This is home page", 'home'],
        posts: ["This is Posts List page", 'home'],
        about: ["This is about page", 'about'],
    };
    // if (url[0] in routesMap) {
    //     if (url[1] && url[0] === 'posts') {
    //         return res.end(htmlCreator(`This is Posts ID = ${url[1]} page`, routesMap[url[0]][1], url[1]));
    //     }
    //     return res.end(htmlCreator(routesMap[url[0]][0], routesMap[url[0]][1]));
    // }

    if (url[0] in routesMap) {
        if (url[1] && url[0] === 'posts' && posts[url[1] - 1]) {
            return res.end(htmlCreator(posts[url[1] - 1].desc, routesMap[url[0]][1], posts[url[1] - 1].title));
        }
        return res.end(htmlCreator(routesMap[url[0]][0], routesMap[url[0]][1]));
    }

    switch(url[0]){
        case 'home':
            return res.end(htmlCreator("This is home page", 'home'));
        case 'posts':
            return res.end(htmlCreator("This is Posts List page", 'home'));
        case 'about':
            return res.end(htmlCreator("This is about page", 'about'));
        case 'contacts':
            return res.end(htmlCreator("This is contacts page"));
        default:
            return res.end(htmlCreator("Page not found, 404"));
    }
};
