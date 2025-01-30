import skills from "./skills.js";
import projects from "./projects.js";

AOS.init();

const skillContainer = document.getElementById("skills");

skills.forEach((skill) => {
  const skillsTemplate = `
    <div  data-aos="fade-up" id="skills" class="flex justify-center items-center">
    <div class="p-5">
    <img class="h-[100px]" src="${skill.image}" alt="" />
    <p class="text-center my-2 uppercase font-semibold">${skill.language}</p>
    </div>
    </div>
    `;

  skillContainer.insertAdjacentHTML("beforeend", skillsTemplate);
});

const projectContainer = document.getElementById("project-container");

projects.forEach((project) => {
    let container = `
        <div data-aos="fade-up" class="w-full h-full p-2">
            <img
                class="w-full h-full object-cover rounded"
                src="${project.image}"
                alt="${project.alt}"
            />
        </div>
        <div class="p-2">
            <div class="mb-2">
                <h1 class="text-xl uppercase font-bold">
                    ${project.title}
                </h1>
                <p>${project.year}</p>
            </div>
            <ul class="flex justify-start gap-2 items-center mb-2">
                ${project.techStack.map((stack) => {
                    return `
                        <li class="rounded p-1 bg-red-400 text-white text-sm">
                            ${stack}
                        </li>
                    `;
                }).join('')} 
            </ul>
            <ul>
                ${project.contribution.map((contribution) => {
                    return `
                        <li class="mb-1 bg-white p-2 rounded border-1 border-[#ccc]">
                            ${contribution}
                        </li>
                    `;
                }).join('')}
            </ul>
        </div>
    `;
    projectContainer.insertAdjacentHTML("beforeend", container);
});

const openSidebarBtn = document.getElementById('open-sidebar');
openSidebarBtn.addEventListener('click', openSidebar);

const closeSidebarBtn = document.querySelectorAll('#close-sidebar');

closeSidebarBtn.forEach((btn) => {
    btn.addEventListener('click', function() {
        closeSidebarBtn.forEach((button) => {
            button.classList.remove('active');
        });
        this.classList.add('active');
        closeSidebar();
    });
});


function closeSidebar() {
    const barMenu = document.querySelector('.sidebar-menu');
    const bar = document.querySelector('.sidebar');

    barMenu.classList.add('close');
    barMenu.classList.remove('open');

    setTimeout(() => {
        bar.classList.remove('open');
        barMenu.classList.remove('close');
    }, 500); 
}


function openSidebar() {
    const barMenu = document.querySelector('.sidebar-menu');
    const bar = document.querySelector('.sidebar');

    bar.classList.add('open');
    barMenu.classList.add('open');
}

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    navbar.classList.add('navbar-hidden');
  } else {
  navbar.classList.remove('navbar-hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});
