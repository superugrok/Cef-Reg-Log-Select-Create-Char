import React from "react";
import { ICreateSectionProps } from "@Types/components/create/create";
import { Switcher } from "../Switcher";
import { SwitchRange } from "../SwitchRange";

export const Apparence = ({ stage }: ICreateSectionProps) => {
  const checkOpen = (event: any) => {
    // Закрываем все details кроме текущего
    let dOpen: HTMLElement = event.target;
    let sOpen = dOpen.getElementsByClassName("details_status");
    sOpen[0].className == "details_status"
      ? sOpen[0].classList.add("details_open")
      : sOpen[0].classList.remove("details_open"); // Check for up arrow
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        const details: any = mutation.target;
        if (!details.open) {
          return;
        }
        document
          .querySelectorAll(".choise_section > details[open]")
          .forEach((el: any) => {
            if (el === details) {
              return;
            }
            let sOpen = el.getElementsByClassName("details_status");
            sOpen[0].classList.remove("details_open");
            el.open = false;
          });
      });
    });
    const config = {
      attributeFilter: ["open"],
    };
    document
      .querySelectorAll(".choise_section > details")
      .forEach((el) => observer.observe(el, config));
  };

  const elements = [
    {
      category: "Причёска",
      content: [
        {
          title: "Причёска",
          element: <Switcher type="hair" />,
        },
        {
          title: "Цвет волос",
          element: <Switcher type="hairColor" />,
        },
      ],
    },
    {
      category: "Глаза",
      content: [
        {
          title: "Тип глаз",
          element: <SwitchRange type="eyes" />,
        },
        {
          title: "Цвет глаз",
          element: <Switcher type="eyesColor" />,
        },
      ],
    },
  ];

  const buildElements = () =>
    elements.map((element, i) => (
      <details onClick={(event: any) => checkOpen(event)} key={i}>
        <summary className="details_hover">
          {element.category}
          <div className="details_igul"></div>
          <div className="details_status"></div>
        </summary>
        {element.content.map((content, i) => (
          <div key={i}>
            <span className="text_title">{content.title}</span>
            {content.element}
          </div>
        ))}
      </details>
    ));

  return (
    <div style={{ display: stage == "apparence" ? "initial" : "none" }}>
      {buildElements()}
    </div>
  );
};
