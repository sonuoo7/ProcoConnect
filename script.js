// video
const playIcon = document.querySelector(".play__icon");
const video = document.querySelector("#video");
const image = document.querySelector(".video-wrapper img");

playIcon.addEventListener("click", () => {
  image.style.display = "none";
  playIcon.style.display = "none";
  video.style.display = "block";
  video.play();
});

// Testimonal

const testimonialData = [
  {
    content:
      "“We had so many different requirements for the tool that we easily knocked out 99% of them because they didn’t have the customizations and the features that we needed”",
    image: "testimonialImage1.jpg",
    name: "Bob Mathews",
    position: "System Engineer",
    signature: "signature-url-1",
  },
  {
    content:
      "“The tool provided by the team helped us streamline our workflow and increase our productivity by 30%. The customizable features and ease of use were exactly what we needed.”",
    image: "testimonialImage2.jpg",
    name: "Alice Johnson",
    position: "Product Manager",
    signature: "signature-url-2",
  },
  {
    content:
      "User The customer support from the team has been exceptional. Their prompt response and willingness to address our concerns have made our experience with the tool truly remarkable.”",
    name: "John Doe",
    position: "CEO",
    signature: "signature-url-3",
  },
];

const carouselItems = document.querySelectorAll(".carousel-item");
const testimonialText = document.querySelectorAll(".tb-testimonial-text p");
const testimonialImage = document.querySelectorAll(".tb-testimonial-right img");
const testimonialName = document.querySelectorAll(".tb-testimonial-name");
const testimonialPosition = document.querySelectorAll(
  ".tb-testimonial-position"
);
const testimonialSignature = document.querySelectorAll(
  ".tb-testimonial-signature img"
);

// Set initial testimonial data
testimonialText[0].textContent = testimonialData[0].content;
testimonialImage[0].src = testimonialData[0].image;
testimonialName[0].textContent = testimonialData[0].name;
testimonialPosition[0].textContent = testimonialData[0].position;
testimonialSignature[0].src = testimonialData[0].signature;

// Set event listeners for carousel slide events
carouselItems.forEach((item, index) => {
  item.addEventListener("slid.bs.carousel", () => {
    testimonialText.forEach((text) => {
      text.textContent = testimonialData[index].content;
    }); 
    testimonialName.forEach((name) => {
      name.textContent = testimonialData[index].name;
    });
    testimonialPosition.forEach((position) => {
      position.textContent = testimonialData[index].position;
    });
    testimonialSignature.forEach((signature) => {
      signature.src = testimonialData[index].signature;
    });
  });
});
