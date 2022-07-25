let choiceTree = {
    "World": {
        1: {
            "Caption": "Do you want to travel in the US?",
            "Picture": "USA,jpeg",
            "Next": "USA"
        },
        2: {
            "Caption": "Do you want to travel abroad?",
            "Picture": "Paris.jpeg",
            "Next": "Abroad"
        }
    },
    "USA": {
        1: {
            "Caption": "Do you want to visit cities?",
            "Picture": "NewYork.jpeg",
            "Next": "USACities"
        },
        2: {
            "Caption": "Do you want to experience nature?",
            "Picture": "Fjord.jpeg",
            "Next": "Nature"
        }        
    },
    "Abroad": {
        1: {
            "Caption": "Europe",
            "Picture": "Rome,jpeg",
            "Next": "Europe"
        },
        2: {
            "Caption": "Carribean",
            "Picture": "Island.jpeg",
            "Next": "Carribean"
        },
        3: {
            "Caption": "Asia",
            "Picture": "Japan.jpeg",
            "Next": "Asia"
        }   
    },
    "USACities": {
        1: {
            "Caption": "Do you want to visit cities?",
            "Picture": "NewYork.jpeg",
            "Next": "USACities"
        }
    },
    "Nature": {
        1: {
            "Caption": "Do you want to experience nature?",
            "Picture": "Fjord.jpeg",
            "Next": "Nature"
        }        
    },
    "Europe": {
        1: {
            "Caption": "Europe",
            "Picture": "Rome,jpeg",
            "Next": "Europe"
        }, 
    },
    "Carribean": {
        1: {
            "Caption": "Carribean",
            "Picture": "Island.jpeg",
            "Next": "Carribean"
        },   
    },
    "Asia": {
        1: {
            "Caption": "Asia",
            "Picture": "Japan.jpeg",
            "Next": "Asia"
        }   
    },
}