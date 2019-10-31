const siteContent = {
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png",
	},
	cta: {
		h1: "DOM Is Awesome",
		button: "Get Started",
		"img-src": "img/header-img.png",
	},
	"main-content": {
		"features-h4": "Features",
		"features-content":
			"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content":
			"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"middle-img-src": "img/mid-page-accent.jpg",
		"services-h4": "Services",
		"services-content":
			"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content":
			"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content":
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io",
	},
	footer: {
		copyright: "Copyright Great Idea! 2018",
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//# NavSection

const links = document.querySelectorAll("nav a");
const linksArr = Array.from(links);
linksArr[0].textContent = siteContent["nav"]["nav-item-1"];
linksArr[1].textContent = siteContent["nav"]["nav-item-2"];
linksArr[2].textContent = siteContent["nav"]["nav-item-3"];
linksArr[3].textContent = siteContent["nav"]["nav-item-4"];
linksArr[4].textContent = siteContent["nav"]["nav-item-5"];
linksArr.forEach = color

//$ CTA Section

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const ctaTitle = document.querySelector(".cta-text h1");
ctaTitle.innerHTML= siteContent["cta"]["h1"].replace(/\s/g, "<br />");
//$figure out how to do a break with .textContent in the place of InnerHTML

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent =
  siteContent.cta["button"];
  

  //!Main-Content Section

  const midImg =document.getElementById("middle-img");
  midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

  const sectionHead = document.querySelectorAll(".main-content h4");
  sectionHead[0].textContent = siteContent["main-content"]["features-h4"]
  sectionHead[1].textContent = siteContent["main-content"]["about-h4"]
  sectionHead[2].textContent = siteContent["main-content"]["services-h4"]
  sectionHead[3].textContent = siteContent["main-content"]["product-h4"]
  sectionHead[4].textContent = siteContent["main-content"]["vision-h4"]

  const sectionInfo = document.querySelectorAll(".main-content p");
  sectionInfo[0].textContent =siteContent["main-content"]["features-content"]
  sectionInfo[1].textContent =siteContent["main-content"]["about-content"]
  sectionInfo[2].textContent =siteContent["main-content"]["services-content"]
  sectionInfo[3].textContent =siteContent["main-content"]["product-content"]
  sectionInfo[4].textContent =siteContent["main-content"]["vision-content"]

//% Contact Section

const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent.contact["contact-h4"]

const contactInfo = document.querySelectorAll(".contact p")
const contactArr = Array.from(contactInfo)
contactArr[0].textContent=siteContent["contact"]["address"]
contactArr[1].textContent=siteContent["contact"]["phone"];
contactArr[2].textContent=siteContent["contact"]["email"];

//! Footer Section

const footerInfo = document.querySelector("footer p");
footerInfo.textContent=siteContent["footer"]["copyright"]