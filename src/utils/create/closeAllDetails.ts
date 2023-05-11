export const checkOpen = (sectionClass: string) => {
  // Закрываем все details кроме текущего
  // Sanzhar - Gives an error, dynamically targeted elements, or maybe I am not understanding observables here...
  // Gives an error in initial project as well

  // let dOpen: HTMLElement = event.target;
  // let sOpen = dOpen.getElementsByClassName("details_status");
  // Global fix later, for now better to select through document
  const sOpen = document.getElementsByClassName("details_status");
  sOpen[0].className == "details_status"
    ? sOpen[0].classList.add("details_open")
    : sOpen[0].classList.remove("details_open"); // Check for up arrow
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(function (mutation) {
      const details: any = mutation.target;
      if (!details.open) {
        return;
      }
      document
        .querySelectorAll(`${sectionClass} > details[open]`)
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
    .querySelectorAll(`${sectionClass} > details`)
    .forEach((el) => observer.observe(el, config));
};
