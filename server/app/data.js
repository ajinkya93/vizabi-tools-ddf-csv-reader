exports.items = [{
  "_id": "55f70fd5dbbfabe3d6a2753f",
  "description": "This graph shows the amount of people in the world across each income level.",
  "opts": {
    "data": {
      "reader": "ddfcsv",
      "path": "http://localhost:3000/api/graphs/stats/vizabi-tools",
      "splash": true
    },
    "ui": {
      "buttons": ["find", "colors", "stack", "axesmc", "show", "fullscreen", "presentation"],
      "buttons_expand": ["colors", "find"]
    }
  },
  "tool": "MountainChart",
  "slug": "mountain",
  "category": "Tools",
  "image": "/tools/public/images/tools/mountainchart.png",
  "title": "Mountain Chart",
  "relateditems": [{
    "_id": "5600af4a188967b26265a73f",
    "_relatedTo": ["55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/answers/how-many-are-rich-and-how-many-are-poor/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=399&preset=160x96&title=media&extension=.jpg",
    "subtitle": "Short answer — Most are in between",
    "title": "How many are rich and how many are poor?",
    "__v": 0
  }, {
    "_id": "560061d4fc0d7c00002110a4",
    "title": "How Reliable is the World Population Forecast?",
    "subtitle": "Short answer — Very reliable",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=136&preset=160x96&title=media&extension=.jpg",
    "link": "http://www.gapminder.org/answers/how-reliable-is-the-world-population-forecast/",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"]
  }, {
    "_id": "5600ad4c188967b26265a73b",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/answers/will-saving-poor-children-lead-to-overpopulation/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=409&preset=160x96&title=media&extension=.jpg",
    "subtitle": "Short answer — No. The opposite.",
    "title": "Will saving poor children lead to overpopulation?",
    "__v": 0
  }, {
    "_id": "5600ae2b188967b26265a73c",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/answers/how-does-income-relate-to-life-expectancy/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=318&preset=160x96&title=media&extension=.jpg",
    "subtitle": "Short answer — Rich people live longer",
    "title": " How Does Income Relate to Life Expectancy?",
    "__v": 0
  }, {
    "_id": "5600ae64188967b26265a73d",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/answers/how-did-babies-per-woman-change-in-the-world/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=125&preset=160x96&title=media&extension=.jpg",
    "subtitle": "Short answer — It dropped",
    "title": "How Did Babies per Woman Change in the World?",
    "__v": 0
  }, {
    "_id": "5600aedc188967b26265a73e",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/posters/gapminder-world-2013/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=209&preset=160x96&title=media&extension=.jpg",
    "subtitle": "This chart compares Life Expectancy & GDP per capita of 182 nations in 2013.",
    "title": "Gapminder World Poster 2013",
    "__v": 0
  }],
  "__v": 5
}, {
  "_id": "55f71e8ccdedc1ff074e9f6d",
  "description": "This graph shows how long people live and how much money they earn. Click the play button to see how countries have developed since 1800.",
  "opts": {
    "data": {
      "reader": "ddfcsv",
      "path": "http://localhost:3000/api/graphs/stats/vizabi-tools",
      "splash": true
    },
    "ui": {
      "buttons": ["find", "colors", "trails", "lock", "size", "moreoptions", "fullscreen"],
      "buttons_expand": ["colors", "find"]
    }
  },
  "tool": "BubbleChart",
  "relateditems": [{
    "_id": "5600aedc188967b26265a73e",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/posters/gapminder-world-2013/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=209&preset=160x96&title=media&extension=.jpg",
    "subtitle": "This chart compares Life Expectancy & GDP per capita of 182 nations in 2013.",
    "title": "Gapminder World Poster 2013",
    "__v": 0
  }, {
    "_id": "5600ad4c188967b26265a73b",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/answers/will-saving-poor-children-lead-to-overpopulation/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=409&preset=160x96&title=media&extension=.jpg",
    "subtitle": "Short answer — No. The opposite.",
    "title": "Will saving poor children lead to overpopulation?",
    "__v": 0
  }, {
    "_id": "560061d4fc0d7c00002110a4",
    "title": "How Reliable is the World Population Forecast?",
    "subtitle": "Short answer — Very reliable",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=136&preset=160x96&title=media&extension=.jpg",
    "link": "http://www.gapminder.org/answers/how-reliable-is-the-world-population-forecast/",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"]
  }, {
    "_id": "5600782dabde580e33c79e24",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d"],
    "link": "http://www.gapminder.org/answers/how-did-the-world-population-change/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=247&preset=160x96&title=media&extension=.jpg",
    "subtitle": "First slowly. Then fast.",
    "title": "How Did The World Population Change?",
    "__v": 0
  }, {
    "_id": "5600ae2b188967b26265a73c",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/answers/how-does-income-relate-to-life-expectancy/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=318&preset=160x96&title=media&extension=.jpg",
    "subtitle": "Short answer — Rich people live longer",
    "title": " How Does Income Relate to Life Expectancy?",
    "__v": 0
  }, {
    "_id": "5600ae64188967b26265a73d",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/answers/how-did-babies-per-woman-change-in-the-world/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=125&preset=160x96&title=media&extension=.jpg",
    "subtitle": "Short answer — It dropped",
    "title": "How Did Babies per Woman Change in the World?",
    "__v": 0
  }],
  "slug": "bubbles",
  "image": "/tools/public/images/tools/bubblechart.png",
  "category": "Tools",
  "title": "Bubble Chart",
  "__v": 4
}, {
  "_id": "56559714e4b03cd696fc6d62",
  "description": "This graph shows the population on a map",
  "opts": {
    "data": {
      "reader": "ddfcsv",
      "path": "http://localhost:3000/api/graphs/stats/vizabi-tools",
      "splash": true
    },
    "ui": {
      "buttons": ["colors", "find", "size", "fullscreen", "presentation"],
      "buttons_expand": ["colors", "find"]
    }
  },
  "tool": "BubbleMap",
  "slug": "map",
  "category": "Tools",
  "image": "/tools/public/images/tools/bubblemap.png",
  "title": "Bubble Map",
  "relateditems": [{
    "_id": "5600af4a188967b26265a73f",
    "_relatedTo": ["55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/answers/how-many-are-rich-and-how-many-are-poor/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=399&preset=160x96&title=media&extension=.jpg",
    "subtitle": "Short answer — Most are in between",
    "title": "How many are rich and how many are poor?",
    "__v": 0
  }, {
    "_id": "560061d4fc0d7c00002110a4",
    "title": "How Reliable is the World Population Forecast?",
    "subtitle": "Short answer — Very reliable",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=136&preset=160x96&title=media&extension=.jpg",
    "link": "http://www.gapminder.org/answers/how-reliable-is-the-world-population-forecast/",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"]
  }, {
    "_id": "5600ad4c188967b26265a73b",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/answers/will-saving-poor-children-lead-to-overpopulation/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=409&preset=160x96&title=media&extension=.jpg",
    "subtitle": "Short answer — No. The opposite.",
    "title": "Will saving poor children lead to overpopulation?",
    "__v": 0
  }, {
    "_id": "5600ae2b188967b26265a73c",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/answers/how-does-income-relate-to-life-expectancy/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=318&preset=160x96&title=media&extension=.jpg",
    "subtitle": "Short answer — Rich people live longer",
    "title": " How Does Income Relate to Life Expectancy?",
    "__v": 0
  }, {
    "_id": "5600ae64188967b26265a73d",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/answers/how-did-babies-per-woman-change-in-the-world/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=125&preset=160x96&title=media&extension=.jpg",
    "subtitle": "Short answer — It dropped",
    "title": "How Did Babies per Woman Change in the World?",
    "__v": 0
  }, {
    "_id": "5600aedc188967b26265a73e",
    "_relatedTo": ["55f71e8ccdedc1ff074e9f6d", "55f70fd5dbbfabe3d6a2753f"],
    "link": "http://www.gapminder.org/posters/gapminder-world-2013/",
    "image": "//cms.gapminder.org/files-api/p3media/file/image?id=209&preset=160x96&title=media&extension=.jpg",
    "subtitle": "This chart compares Life Expectancy & GDP per capita of 182 nations in 2013.",
    "title": "Gapminder World Poster 2013",
    "__v": 0
  }]
}];

exports.menu = {
  "_id": "56002c460faa9de708f37c33",
  "node_id": null,
  "menu_label": "Home",
  "caption": null,
  "url": null,
  "children": [{
    "node_id": null,
    "menu_label": "Facts",
    "caption": null,
    "url": null,
    "children": [{
      "node_id": null,
      "menu_label": "Bubble Chart",
      "caption": "Explore a world in motion with animated statistics",
      "url": "http://www.gapminder.org/world",
      "icon_url": "/images/icons/menu/bubchart.png"
    }, {
      "node_id": null,
      "menu_label": "Answers",
      "caption": "Watch Hans Rosling answer huge fact-questions in less than 90 seconds",
      "url": "http://www.gapminder.org/answers/",
      "icon_url": "/images/icons/menu/answers.png"
    }, {
      "node_id": null,
      "menu_label": "Massive Ignorance",
      "caption": "Beware the shocking results from our Global Knowledge Surveys",
      "url": "http://www.gapminder.org/ignorance",
      "icon_url": "/images/icons/menu/igmo.png"
    }, {
      "node_id": null,
      "menu_label": "Data",
      "caption": "Download tables with stats gathered from hundreds of sources",
      "url": "http://www.gapminder.org/data",
      "icon_url": "/images/icons/menu/data.png"
    }]
  }, {
    "node_id": null,
    "menu_label": "Teach",
    "caption": null,
    "url": null,
    "children": [{
      "node_id": null,
      "menu_label": "Teachers",
      "caption": "See how teachers use Gapminder in classrooms",
      "url": "http://www.gapminder.org/for-teachers",
      "icon_url": "/images/icons/menu/teach.png"
    }, {
      "node_id": null,
      "menu_label": "Slideshows",
      "caption": "Download and edit our modular slides to fit your presentations",
      "url": "http://www.gapminder.org/presentations",
      "icon_url": "/images/icons/menu/slides.png"
    }, {
      "node_id": null,
      "menu_label": "Workshops",
      "caption": "Let your students practice analytical skills without computers",
      "url": "http://www.gapminder.org/workshops",
      "icon_url": "/images/icons/menu/workshops.png"
    }, {
      "node_id": null,
      "menu_label": "Test Questions",
      "caption": "Boost your students confidence by putting their results next to the public’s",
      "url": "http://www.gapminder.org/test-questions",
      "icon_url": "/images/icons/menu/testquestion.png"
    }]
  }, {
    "node_id": null,
    "menu_label": "About",
    "caption": null,
    "url": null,
    "children": [{
      "node_id": null,
      "menu_label": "Our Organization",
      "caption": "Read about the Gapminder Foundation",
      "url": "http://www.gapminder.org/about-gapminder",
      "icon_url": "/images/icons/menu/gapminder.png"
    }, {
      "node_id": null,
      "menu_label": "News",
      "caption": "Stay tuned with our Blog,  Factpod, Facebook & Twitter feeds",
      "url": "http://www.gapminder.org/news",
      "icon_url": "/images/icons/menu/news.png"
    }, {
      "node_id": null,
      "menu_label": "FAQ",
      "caption": "Find answers to the most frequent questions",
      "url": "http://www.gapminder.org/faq_frequently_asked_questions",
      "icon_url": "/images/icons/menu/faq.png"
    }, {
      "node_id": null,
      "menu_label": "Open License",
      "caption": "Copy, change, spread and even sell our free material",
      "url": "http://www.gapminder.org/free-material",
      "icon_url": "/images/icons/menu/license.png"
    }]
  }]
};

exports.metadata = {
  "color": {
    "shades": {
      "geo.region": {
        "fill1": 0,
        "fill2": 1,
        "fill3": 2,
        "shade": 3,
        "print_fill": 4,
        "print_stroke": 5,
        "_default": 0
      }, "_default": {"_default": 0}
    },
    "palettes": {
      "geo.region": {
        "asi": ["#ff5872", "#ff5178", "#ff658a", "#da0025", "#fa4e73", "#b2043a"],
        "eur": ["#ffe700", "#fbdd00", "#fff400", "#fbaf09", "#ffe700", "#b17f4a"],
        "ame": ["#7feb00", "#5de200", "#81f201", "#00b900", "#b5ea32", "#008d36"],
        "afr": ["#00d5e9", "#00c8ec", "#00e1ec", "#0098df", "#77dff7", "#0586c6"],
        "_default": ["#ffb600", "#ffaa14", "#ffc500", "#fb6d19", "#ffb600", "#9b4838"]
      },
      "gdp_pc": {"0": "#62CCE3", "1": "#B4DE79", "2": "#E1CE00", "3": "#F77481"},
      "_continuous": {"0": "#F77481", "1": "#E1CE00", "2": "#B4DE79"},
      "_discrete": {
        "0": "#bcfa83",
        "1": "#4cd843",
        "2": "#ff8684",
        "3": "#e83739",
        "4": "#ffb04b",
        "5": "#ff7f00",
        "6": "#f599f5",
        "7": "#c027d4",
        "8": "#f4f459",
        "9": "#d66425",
        "10": "#7fb5ed",
        "11": "#0ab8d8"
      },
      "_default": {"_default": "#fa5ed6"}
    },
    "selectable": {"geo.region": false}
  },
  "indicatorsDB": {
    "time": {
      "allowCharts": ["*"],
      "use": "indicator",
      "unit": "time",
      "scales": ["time"],
      "sourceLink": ""
    },
    "geo": {
      "allowCharts": ["*"],
      "use": "property",
      "unit": "",
      "scales": ["ordinal"],
      "sourceLink": "https://docs.google.com/spreadsheets/d/1OxmGUNWeADbPJkQxVPupSOK5MbAECdqThnvyPrwG5Os/pub"
    },
    "geo.name": {
      "allowCharts": ["*"],
      "use": "property",
      "unit": "",
      "scales": ["ordinal"],
      "sourceLink": "https://docs.google.com/spreadsheets/d/1OxmGUNWeADbPJkQxVPupSOK5MbAECdqThnvyPrwG5Os/pub"
    },
    "geo.region": {
      "allowCharts": ["*"],
      "use": "property",
      "unit": "",
      "scales": ["ordinal"],
      "sourceLink": "https://docs.google.com/spreadsheets/d/1OxmGUNWeADbPJkQxVPupSOK5MbAECdqThnvyPrwG5Os/pub"
    },
    "size": {"allowCharts": ["none"], "use": "property", "unit": "", "scales": ["ordinal"], "sourceLink": ""},
    "population": {
      "allowCharts": ["mountainchart", "bubblechart", "bubblemap", "linechart", "barchart", "barrankchart"],
      "use": "indicator",
      "unit": "",
      "scaleType": "log",
      "scales": ["linear", "log"],
      "sourceLink": "http://www.gapminder.org/news/data-sources-dont-panic-end-poverty",
      "domain": [14000, 1400000000]
    },
    "lex": {
      "allowCharts": ["mountainchart", "bubblechart", "bubblemap", "linechart", "barchart", "barrankchart"],
      "use": "indicator",
      "unit": "lex",
      "scales": ["linear"],
      "sourceLink": "https://docs.google.com/spreadsheets/d/1H3nzTwbn8z4lJ5gJ_WfDgCeGEXK3PVGcNjQ_U5og8eo/pub?gid=1"
    },
    "fertility_rate": {
      "allowCharts": ["mountainchart", "bubblechart", "bubblemap"],
      "domain": [0, 10],
      "use": "indicator",
      "unit": "fertility_rate",
      "scales": ["linear"],
      "sourceLink": "http://www.gapminder.org/news/data-sources-dont-panic-end-poverty"
    },
    "life_expectancy": {
      "allowCharts": ["mountainchart", "bubblechart", "bubblemap"],
      "use": "indicator",
      "unit": "life_expectancy",
      "scales": ["linear"],
      "sourceLink": "http://www.gapminder.org/news/data-sources-dont-panic-end-poverty"
    },
    "gni_pc_u_usd_cu": {
      "allowCharts": ["mountainchart", "bubblechart", "bubblemap", "linechart", "barchart", "barrankchart"],
      "use": "indicator",
      "unit": "gni_pc_u_usd_cu",
      "scales": ["linear", "log"],
      "sourceLink": "https://gapminder.org"
    },
    "age": {
      "allowCharts": ["popbyage"],
      "use": "indicator",
      "unit": "year",
      "scales": ["linear", "log"],
      "sourceLink": ""
    },
    "_default": {"allowCharts": ["*"], "use": "constant", "unit": "", "scales": ["ordinal"], "sourceLink": ""}
  },
  "indicatorsTree": {
    "id": "_root",
    "children": [{"id": "time"}, {
      "children": [{"id": "geo"}, {"id": "geo.name"}, {"id": "geo.region"}, {"id": "size"}],
      "id": "_properties"
    }, {
      "children": [{
        "children": [{"id": "fertility_rate"}],
        "id": "inequality"
      }, {"id": "life_expectancy"}], "id": "economy"
    }, {"children": [{"id": "life_expectancy"}], "id": "health"}, {"id": "population"}, {"id": "_default"}]
  },
  "entities": [{"geo": "abkh", "name": "Abkhazia"}, {"geo": "abw", "name": "Aruba"}, {
    "geo": "afg",
    "name": "Afghanistan"
  }, {"geo": "ago", "name": "Angola"}, {"geo": "aia", "name": "Anguilla"}, {
    "geo": "akr_a_dhe",
    "name": "Akrotiri and Dhekelia"
  }, {"geo": "ala", "name": "�land"}, {"geo": "alb", "name": "Albania"}, {
    "geo": "and",
    "name": "Andorra"
  }, {"geo": "ant", "name": "Netherlands Antilles"}, {"geo": "are", "name": "United Arab Emirates"}, {
    "geo": "arg",
    "name": "Argentina"
  }, {"geo": "arm", "name": "Armenia"}, {"geo": "asm", "name": "American Samoa"}, {
    "geo": "ata",
    "name": "Antarctica"
  }, {"geo": "atg", "name": "Antigua and Barbuda"}, {"geo": "aus", "name": "Australia"}, {
    "geo": "aut",
    "name": "Austria"
  }, {"geo": "aze", "name": "Azerbaijan"}, {"geo": "bdi", "name": "Burundi"}, {
    "geo": "bel",
    "name": "Belgium"
  }, {"geo": "ben", "name": "Benin"}, {"geo": "bfa", "name": "Burkina Faso"}, {
    "geo": "bgd",
    "name": "Bangladesh"
  }, {"geo": "bgr", "name": "Bulgaria"}, {"geo": "bhr", "name": "Bahrain"}, {
    "geo": "bhs",
    "name": "Bahamas"
  }, {"geo": "bih", "name": "Bosnia and Herzegovina"}, {"geo": "blr", "name": "Belarus"}, {
    "geo": "blz",
    "name": "Belize"
  }, {"geo": "bmu", "name": "Bermuda"}, {"geo": "bol", "name": "Bolivia"}, {
    "geo": "bouisl",
    "name": "Bouvet Island"
  }, {"geo": "bra", "name": "Brazil"}, {"geo": "brb", "name": "Barbados"}, {
    "geo": "brn",
    "name": "Brunei"
  }, {"geo": "btn", "name": "Bhutan"}, {"geo": "bwa", "name": "Botswana"}, {
    "geo": "caf",
    "name": "Central African Republic"
  }, {"geo": "can", "name": "Canada"}, {"geo": "cck", "name": "Cocos Island"}, {
    "geo": "chanisl",
    "name": "Channel Islands"
  }, {"geo": "che", "name": "Switzerland"}, {"geo": "cheslo", "name": "Czechoslovakia"}, {
    "geo": "chl",
    "name": "Chile"
  }, {"geo": "chn", "name": "China"}, {"geo": "civ", "name": "Cote d'Ivoire"}, {
    "geo": "cmr",
    "name": "Cameroon"
  }, {"geo": "cod", "name": "Congo, Dem. Rep."}, {"geo": "cog", "name": "Congo, Rep."}, {
    "geo": "cok",
    "name": "Cook Is"
  }, {"geo": "col", "name": "Colombia"}, {"geo": "com", "name": "Comoros"}, {
    "geo": "cpv",
    "name": "Cape Verde"
  }, {"geo": "cri", "name": "Costa Rica"}, {"geo": "cub", "name": "Cuba"}, {
    "geo": "cxr",
    "name": "Christmas Island"
  }, {"geo": "cym", "name": "Cayman Islands"}, {"geo": "cyp", "name": "Cyprus"}, {
    "geo": "cyp_nor",
    "name": "Northern Cyprus"
  }, {"geo": "cze", "name": "Czech Republic"}, {"geo": "deu", "name": "Germany"}, {
    "geo": "deu_east",
    "name": "East Germany"
  }, {"geo": "deu_west", "name": "West Germany"}, {"geo": "dji", "name": "Djibouti"}, {
    "geo": "dma",
    "name": "Dominica"
  }, {"geo": "dnk", "name": "Denmark"}, {"geo": "dom", "name": "Dominican Republic"}, {
    "geo": "dza",
    "name": "Algeria"
  }, {"geo": "ecu", "name": "Ecuador"}, {"geo": "egy", "name": "Egypt"}, {
    "geo": "eri",
    "name": "Eritrea"
  }, {"geo": "eri_a_eth", "name": "Eritrea and Ethiopia"}, {"geo": "esh", "name": "Western Sahara"}, {
    "geo": "esp",
    "name": "Spain"
  }, {"geo": "est", "name": "Estonia"}, {"geo": "eth", "name": "Ethiopia"}, {
    "geo": "fin",
    "name": "Finland"
  }, {"geo": "fji", "name": "Fiji"}, {"geo": "flk", "name": "Falkland Is (Malvinas)"}, {
    "geo": "fra",
    "name": "France"
  }, {"geo": "fra_antarc", "name": "French Southern and Antarctic Lands"}, {
    "geo": "fra_clipperton",
    "name": "Clipperton"
  }, {"geo": "fro", "name": "Faeroe Islands"}, {"geo": "fsm", "name": "Micronesia, Fed. Sts."}, {
    "geo": "gab",
    "name": "Gabon"
  }, {"geo": "gbg", "name": "Guernsey"}, {"geo": "gbm", "name": "Isle of Man"}, {
    "geo": "gbr",
    "name": "United Kingdom"
  }, {"geo": "geo", "name": "Georgia"}, {"geo": "gha", "name": "Ghana"}, {
    "geo": "gib",
    "name": "Gibraltar"
  }, {"geo": "gin", "name": "Guinea"}, {"geo": "glp", "name": "Guadeloupe"}, {
    "geo": "gmb",
    "name": "Gambia"
  }, {"geo": "gnb", "name": "Guinea-Bissau"}, {"geo": "gnq", "name": "Equatorial Guinea"}, {
    "geo": "grc",
    "name": "Greece"
  }, {"geo": "grd", "name": "Grenada"}, {"geo": "grl", "name": "Greenland"}, {
    "geo": "gtm",
    "name": "Guatemala"
  }, {"geo": "guf", "name": "French Guiana"}, {"geo": "gum", "name": "Guam"}, {
    "geo": "guy",
    "name": "Guyana"
  }, {"geo": "heard_a_mcd", "name": "Heard and McDonald Islands"}, {
    "geo": "hkg",
    "name": "Hong Kong, China"
  }, {"geo": "hnd", "name": "Honduras"}, {"geo": "hos", "name": "Holy See"}, {
    "geo": "hrv",
    "name": "Croatia"
  }, {"geo": "hti", "name": "Haiti"}, {"geo": "hun", "name": "Hungary"}, {
    "geo": "idn",
    "name": "Indonesia"
  }, {"geo": "ind", "name": "India"}, {"geo": "iot", "name": "British Indian Ocean Territory"}, {
    "geo": "irl",
    "name": "Ireland"
  }, {"geo": "irn", "name": "Iran"}, {"geo": "irq", "name": "Iraq"}, {"geo": "isl", "name": "Iceland"}, {
    "geo": "isr",
    "name": "Israel"
  }, {"geo": "ita", "name": "Italy"}, {"geo": "jam", "name": "Jamaica"}, {
    "geo": "jey",
    "name": "Jersey"
  }, {"geo": "jor", "name": "Jordan"}, {"geo": "jpn", "name": "Japan"}, {
    "geo": "kaz",
    "name": "Kazakhstan"
  }, {"geo": "ken", "name": "Kenya"}, {"geo": "kgz", "name": "Kyrgyz Republic"}, {
    "geo": "khm",
    "name": "Cambodia"
  }, {"geo": "kir", "name": "Kiribati"}, {"geo": "kna", "name": "St. Kitts and Nevis"}, {
    "geo": "kor",
    "name": "South Korea"
  }, {"geo": "korea_union", "name": "United Korea (former)"}, {"geo": "kos", "name": "Kosovo"}, {
    "geo": "kwt",
    "name": "Kuwait"
  }, {"geo": "lao", "name": "Lao"}, {"geo": "lbn", "name": "Lebanon"}, {"geo": "lbr", "name": "Liberia"}, {
    "geo": "lby",
    "name": "Libya"
  }, {"geo": "lca", "name": "St. Lucia"}, {"geo": "lie", "name": "Liechtenstein"}, {
    "geo": "lka",
    "name": "Sri Lanka"
  }, {"geo": "lso", "name": "Lesotho"}, {"geo": "ltu", "name": "Lithuania"}, {
    "geo": "lux",
    "name": "Luxembourg"
  }, {"geo": "lva", "name": "Latvia"}, {"geo": "mac", "name": "Macao, China"}, {
    "geo": "maf",
    "name": "St. Martin (French part)"
  }, {"geo": "mar", "name": "Morocco"}, {"geo": "mco", "name": "Monaco"}, {
    "geo": "mda",
    "name": "Moldova"
  }, {"geo": "mdg", "name": "Madagascar"}, {"geo": "mdv", "name": "Maldives"}, {
    "geo": "mex",
    "name": "Mexico"
  }, {"geo": "mhl", "name": "Marshall Islands"}, {"geo": "mkd", "name": "Macedonia, FYR"}, {
    "geo": "mli",
    "name": "Mali"
  }, {"geo": "mlt", "name": "Malta"}, {"geo": "mmr", "name": "Myanmar"}, {
    "geo": "mne",
    "name": "Montenegro"
  }, {"geo": "mng", "name": "Mongolia"}, {"geo": "mnp", "name": "Northern Mariana Islands"}, {
    "geo": "moz",
    "name": "Mozambique"
  }, {"geo": "mrt", "name": "Mauritania"}, {"geo": "msr", "name": "Montserrat"}, {
    "geo": "mtq",
    "name": "Martinique"
  }, {"geo": "mus", "name": "Mauritius"}, {"geo": "mwi", "name": "Malawi"}, {
    "geo": "mys",
    "name": "Malaysia"
  }, {"geo": "myt", "name": "Mayotte"}, {"geo": "nam", "name": "Namibia"}, {
    "geo": "ncl",
    "name": "New Caledonia"
  }, {"geo": "ner", "name": "Niger"}, {"geo": "nfk", "name": "Norfolk Island"}, {
    "geo": "nga",
    "name": "Nigeria"
  }, {"geo": "ngokar", "name": "Ngorno-Karabakh"}, {"geo": "nic", "name": "Nicaragua"}, {
    "geo": "niu",
    "name": "Niue"
  }, {"geo": "nld", "name": "Netherlands"}, {"geo": "nld_curacao", "name": "Cura�ao"}, {
    "geo": "nor",
    "name": "Norway"
  }, {"geo": "north_mar", "name": "Northern Marianas"}, {"geo": "npl", "name": "Nepal"}, {
    "geo": "nru",
    "name": "Nauru"
  }, {"geo": "nzl", "name": "New Zealand"}, {"geo": "omn", "name": "Oman"}, {
    "geo": "pak",
    "name": "Pakistan"
  }, {"geo": "pan", "name": "Panama"}, {"geo": "pcn", "name": "Pitcairn"}, {
    "geo": "per",
    "name": "Peru"
  }, {"geo": "phl", "name": "Philippines"}, {"geo": "plw", "name": "Palau"}, {
    "geo": "png",
    "name": "Papua New Guinea"
  }, {"geo": "pol", "name": "Poland"}, {"geo": "pri", "name": "Puerto Rico"}, {
    "geo": "prk",
    "name": "North Korea"
  }, {"geo": "prt", "name": "Portugal"}, {"geo": "pry", "name": "Paraguay"}, {
    "geo": "pse",
    "name": "West Bank and Gaza"
  }, {"geo": "pse_gaza", "name": "Gaza Strip"}, {"geo": "pse_west_bank", "name": "West Bank"}, {
    "geo": "pyf",
    "name": "French Polynesia"
  }, {"geo": "qat", "name": "Qatar"}, {"geo": "reu", "name": "Reunion"}, {
    "geo": "rou",
    "name": "Romania"
  }, {"geo": "rus", "name": "Russia"}, {"geo": "rwa", "name": "Rwanda"}, {
    "geo": "sau",
    "name": "Saudi Arabia"
  }, {"geo": "scg", "name": "Serbia and Montenegro"}, {
    "geo": "scg_ex_kos",
    "name": "Serbia excluding Kosovo"
  }, {"geo": "sdn", "name": "Sudan"}, {"geo": "sen", "name": "Senegal"}, {
    "geo": "sgero_a_ssandw",
    "name": "South Georgia and the South Sandwich Islands"
  }, {"geo": "sgp", "name": "Singapore"}, {"geo": "shn", "name": "St. Helena"}, {
    "geo": "sjm",
    "name": "Svalbard"
  }, {"geo": "slb", "name": "Solomon Islands"}, {"geo": "sle", "name": "Sierra Leone"}, {
    "geo": "slv",
    "name": "El Salvador"
  }, {"geo": "smr", "name": "San Marino"}, {"geo": "som", "name": "Somalia"}, {
    "geo": "som_somland",
    "name": "Somaliland"
  }, {"geo": "sosset", "name": "South Ossetia"}, {"geo": "spm", "name": "St.-Pierre-et-Miquelon"}, {
    "geo": "srb",
    "name": "Serbia"
  }, {"geo": "ssd", "name": "South Sudan"}, {"geo": "stbar", "name": "St. Barth�lemy"}, {
    "geo": "stmar",
    "name": "St. Martin"
  }, {"geo": "stp", "name": "Sao Tome and Principe"}, {"geo": "sur", "name": "Suriname"}, {
    "geo": "svk",
    "name": "Slovak Republic"
  }, {"geo": "svn", "name": "Slovenia"}, {"geo": "swe", "name": "Sweden"}, {
    "geo": "swz",
    "name": "Swaziland"
  }, {"geo": "sxm", "name": "Sint Maarten (Dutch part)"}, {"geo": "syc", "name": "Seychelles"}, {
    "geo": "syr",
    "name": "Syria"
  }, {"geo": "tca", "name": "Turks and Caicos Islands"}, {"geo": "tcd", "name": "Chad"}, {
    "geo": "tgo",
    "name": "Togo"
  }, {"geo": "tha", "name": "Thailand"}, {"geo": "tjk", "name": "Tajikistan"}, {
    "geo": "tkl",
    "name": "Tokelau"
  }, {"geo": "tkm", "name": "Turkmenistan"}, {"geo": "tls", "name": "Timor-Leste"}, {
    "geo": "ton",
    "name": "Tonga"
  }, {"geo": "transn", "name": "Transnistria"}, {"geo": "tto", "name": "Trinidad and Tobago"}, {
    "geo": "tun",
    "name": "Tunisia"
  }, {"geo": "tur", "name": "Turkey"}, {"geo": "tuv", "name": "Tuvalu"}, {
    "geo": "twn",
    "name": "Taiwan"
  }, {"geo": "tza", "name": "Tanzania"}, {"geo": "uga", "name": "Uganda"}, {
    "geo": "ukr",
    "name": "Ukraine"
  }, {"geo": "ury", "name": "Uruguay"}, {"geo": "usa", "name": "United States"}, {
    "geo": "usa_minor_out_isl",
    "name": "US Minor Outlying Islands"
  }, {"geo": "ussr", "name": "USSR"}, {"geo": "uzb", "name": "Uzbekistan"}, {
    "geo": "vct",
    "name": "St. Vincent and the Grenadines"
  }, {"geo": "ven", "name": "Venezuela"}, {"geo": "vgb", "name": "British Virgin Islands"}, {
    "geo": "vir",
    "name": "Virgin Islands (U.S.)"
  }, {"geo": "virg_isl", "name": "Virgin Islands"}, {"geo": "vnm", "name": "Vietnam"}, {
    "geo": "vut",
    "name": "Vanuatu"
  }, {"geo": "wlf", "name": "Wallis et Futuna"}, {"geo": "wsm", "name": "Samoa"}, {
    "geo": "yem",
    "name": "Yemen"
  }, {"geo": "yem_north", "name": "North Yemen (former)"}, {
    "geo": "yem_south",
    "name": "South Yemen (former)"
  }, {"geo": "yug", "name": "Yugoslavia"}, {"geo": "zaf", "name": "South Africa"}, {
    "geo": "zmb",
    "name": "Zambia"
  }, {"geo": "zwe", "name": "Zimbabwe"}]
};

exports.translation = {
  "buttons/expand": "Expand",
  "buttons/unexpand": "Restore",
  "buttons/trails": "Trails",
  "buttons/lock": "Lock",
  "buttons/find": "Find",
  "buttons/show": "Show",
  "buttons/deselect": "Deselect",
  "buttons/showall": "Show all",
  "buttons/ok": "OK",
  "buttons/colors": "Color",
  "buttons/color": "Color",
  "buttons/size": "Size",
  "buttons/axes": "X and Y",
  "buttons/axesmc": "X and Y",
  "buttons/axis_x": "X axis",
  "buttons/axis_y": "Y axis",
  "buttons/stack": "Stack",
  "buttons/more_options": "Options",
  "buttons/opacity": "Opacity",
  "buttons/opacityNonselect": "Opacity of non-selected",
  "buttons/opacityRegular": "Regular opacity",
  "buttons/presentation": "Present",
  "buttons/desktop": "Desktop",
  "buttons/speed": "Speed",
  "hints/bubbl/setminsize": "Minimum bubble size:",
  "hints/bubbl/setmaxsize": "Maximum bubble size:",
  "hints/bubbl/setsize": "Bubble size:",
  "hints/mount/maxYvalue": "Maximum Y value:",
  "hints/mount/logXstops": "X-axis logarithmic stops:",
  "hints/mount/howtostack": "Stack mountains:",
  "hints/mount/howtomerge": "Merge mountains:",
  "hints/mount/xlimits": "X-axis limits:",
  "hints/mount/probe": "Probeline (extreme poverty at 1.85):",
  "hints/mount/onlyshowthefollowing": "Hide all shapes except:",
  "hints/min": "min",
  "hints/max": "max",
  "hints/dataWarning": "Data doubts",
  "hints/dataWarning-little": "Data",
  "mount/maxYmode/immediate": "Immediate",
  "mount/maxYmode/latest": "Latest",
  "mount/maxYmode/total": "Total",
  "mount/stacking/region": "Regions",
  "mount/stacking/world": "World",
  "mount/stacking/none": "None",
  "mount/merging/region": "Regions",
  "mount/merging/world": "World",
  "mount/merging/none": "None",
  "mount/manualSorting": "Manual sorting of groups:",
  "mount/people": "people",
  "mount/title": "Number of people by income",
  "mount/extremepoverty": "extreme poverty",
  "popbyage/yearOldsIn": "-year-olds in",
  "indicator/life_expectancy": "Life expectancy",
  "indicator/gdp_pc": "GDP per capita",
  "indicator/gdp": "GDP total",
  "indicator/gni_pc_u_usd_cu": "GNI per capita",
  "indicator/population": "Population",
  "indicator/geo.region": "Region",
  "indicator/geo": "Individual",
  "indicator/time": "Time",
  "indicator/geo.category": "Geo category",
  "indicator/geo.name": "Geo name",
  "indicator/u5mr": "Child mortality rate",
  "indicator/size": "Big or mini",
  "indicator/gini": "Gini coefficient",
  "indicator/_default": "Constant",
  "indicator/_indicators": "Indicators",
  "indicator/fertility_rate": "Fertility Rate",
  "indicator/_properties": "Properties",
  "indicator/economy": "Wealth",
  "indicator/inequality": "Income distribution and inequality",
  "indicator/health": "Health",
  "indicator/tfr": "Babies per woman",
  "placeholder/search": "Search",
  "unit/pop": "people",
  "unit/population": "people",
  "unit/gdp_pc": "$/year",
  "unit/gdp": "$/year",
  "unit/gni_pc_u_usd_cu": "$/year",
  "unit/": "",
  "unit/tfr": "",
  "unit/life_expectancy": "Years",
  "unit/fertility_rate": "",
  "unit/time": "",
  "unit/u5mr": "deaths under age 5 per 1000 births",
  "unit/gini": "",
  "unit/mountainchart_hardcoded_income_per_day": "$/day",
  "scaletype/linear": "linear",
  "scaletype/log": "log",
  "scaletype/genericLog": "Generic log",
  "scaletype/time": "Time",
  "scaletype/ordinal": "Ordinal",
  "color/_default": "Single color",
  "check/adaptMinMaxZoom": "Follow bubbles with zoom",
  "check/presentation": "Increase text size for presentation",
  "region/ame": "America",
  "region/asi": "Asia",
  "region/afr": "Africa",
  "region/eur": "Europe",
  "region/all": "World"
};
