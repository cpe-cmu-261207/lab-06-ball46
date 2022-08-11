import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import UserCardDetail from "../components/UserCardDetail";
import { useState } from "react";

export default function UserCard(props) {
  const [isMouseClick, setIsMouseClick] = useState(false);
  return (
    <div className="border-bottom">
      {/* main section */}
      <div
        className="d-flex align-items-center p-3"
        onClick={() => {
          isMouseClick ? setIsMouseClick(false) : setIsMouseClick(true);
        }}
      >
        <img src={props.imgUrl} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {isMouseClick ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {isMouseClick ? <UserCardDetail key={props.name} {...props} /> : ""}
    </div>
  );
}
