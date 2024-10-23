var APP_DATA = {
  "scenes": [
    {
      "id": "0-alice-lee-plaza",
      "name": "Alice Lee Plaza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.9358909278253265,
        "pitch": 0,
        "fov": 1.5174502044215883
      },
      "linkHotspots": [
        {
          "yaw": 0.015920637313016073,
          "pitch": -0.1006475062387544,
          "rotation": 0.7853981633974483,
          "target": "1-conservatory-lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8389316454382918,
          "pitch": -0.3533560800399407,
          "title": "wall",
          "text": "Text"
        },
        {
          "yaw": 2.568771978219111,
          "pitch": 0.08224517723679803,
          "title": "welcome to engineering !",
          "text": "the tree"
        },
        {
          "yaw": -2.468172541517845,
          "pitch": -0.33070213201306586,
          "title": "a house",
          "text": "new one"
        }
      ]
    },
    {
      "id": "1-conservatory-lounge",
      "name": "Conservatory Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5174502044215883
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-conservatory-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-conservatory-foyer",
      "name": "Conservatory Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.001188389513924193,
          "pitch": 0,
          "rotation": 7.0685834705770345,
          "target": "0-alice-lee-plaza"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Lounge",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
