import React from "react";
import data from "../../data/data";
import { Story } from "../Story/Story";
import { StoryProp } from "../../types/globalTypes";


export function Rundwon() {

  const {name,stories} = data;

  const story:StoryProp = {
    id: "1",
    storyPlannedDuration: 0,
    items: [],
  }



  return (
    <div>
    {/* <h1>{name}</h1> */}
    <Story story={stories[0]}/>
    </div>
  )
}
