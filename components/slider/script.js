const sliderContent = [
    "LuminPad",
    "PulseEar",
    "ZenithWatch",
    "AeroCharge",
    "NimbusCam",
    "EcclipsDrive",
  ];
  
  let currentImageIndex = 2;
  let currentContentIndex = 1;
  const totalImages = 10;
  let isAnimating = false;
  
  function splitTextIntoSpans(selector) {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      let text = element.innerText;
      let splitText = text
        .split("")
        .map(function (char) {
          return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
        })
        .join("");
  
      element.innerHTML = splitText; // Correct property is innerHTML, not innerHtml
    });
  }
  
  // Example usage of splitTextIntoSpans
//   splitTextIntoSpans('.copy p');
  
  // GSAP animation
  gsap.to(".slide-next-img", {
    clipPath: "polygon(0, 0, 100%, 0, 100%, 100%, 0%, 100%)",
    duration: 1.5,
    ease: "power3.out",
    delay: 6,
  });
  