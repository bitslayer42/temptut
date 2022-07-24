let choiceTree = {
    "World": {
        1: {
            "Caption": "Do you want to travel in the US?",
            "Picture": "New York,jpeg",
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
            "Picture": "New York.jpeg",
            "Next": "USACities"
        },
        2: {
            "Caption": "Do you want to experience nature?",
            "Picture": "Waterfall.jpeg",
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
            "Picture": "Tokyo.jpeg",
            "Next": "Asia"
        }   
    }
}