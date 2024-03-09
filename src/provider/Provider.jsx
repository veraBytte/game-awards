import { v4 as uuidv4 } from 'uuid';
import {createContext} from 'react';

const data = {
    header : [
        {id: uuidv4(), title: "NEWS"        , href : "#", disabled: false},
        {id: uuidv4(), title: "WINNERS"     , href : "#", disabled: false},
        {id: uuidv4(), title: "PLAYERS VOICE", href : "#", disabled: false},
        {id: uuidv4(), title: "ABOUT"       , href : "#", disabled: false},
        {id: uuidv4(), title: "REWIND"      , href : "#", disabled: false},
        {id: uuidv4(), title: "FAQ"         , href : "#", disabled: false},
        {id: uuidv4(), title: "WATCH"       , href : "#", disabled: false},
        {id: uuidv4(), title: "FUTURE CLASS", href : "#", disabled: false}
    ],
    intro : {
        name  : "THE GAME AWARDS",
        place : "PEACOOK THEATER, LOS ANGELES",
        date :  12-12-2024
    },
    news : [
        {
            title : "TGA RETURNS DECEMBER 12,2024",
            textPreview : "TGA 2024 DECEMBER 12",
            src : "https://thegameawards.com/assets/2023/09/2023-09-13-01.jpg"
        },
        {
            title : "TGA DELIVERS 118M LIVESTREAMS",
            textPreview : "118M LIVESTREAMS",
            src : "https://thegameawards.com/assets/2023/09/2023-09-13-01.jpg"
        },
        {
            title : "TRUTH X THE GAME AWARDS",
            textPreview : "",
            src : "https://thegameawards.com/assets/2023/09/2023-09-13-01.jpg"
        },
        {
            title : "2023 HYPE TRAILER RELEASED",
            textPreview : "GEOFF'S HYPE TRAILER",
            src : "https://thegameawards.com/assets/2023/09/2023-09-13-01.jpg"
        },
        {
            title : "THE GAME AWARDS VOTE IN FORTNITE",
            textPreview : "TGA 2024 DECEMBER 12",
            src : "https://thegameawards.com/assets/2023/09/2023-09-13-01.jpg"
        },
        {
            title : "2023 NOMINEES ANNOUNCED",
            textPreview : "NOMINEES ANNOUNCED",
            src : "https://thegameawards.com/assets/2023/09/2023-09-13-01.jpg"
        }
    ],
    explore: {},
    insider: {},    
}

export const GlobalContext = createContext();

export const Provider = ({children}) => {
  return (
    <GlobalContext.Provider value={data}>
      {children}
    </GlobalContext.Provider>
  )
}