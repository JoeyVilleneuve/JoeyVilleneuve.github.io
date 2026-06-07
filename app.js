/* PROJECT DATA -------------------------------------*/
/* Add a project by appending one entry. Order here sets the index shown on cards. */
/* Optional: add  links: [{ label: "Source", url: "https://..." }]  to show buttons in the popup. */
const PROJECTS = [
    {
        id: "feyrun",
        title: "Feyrun",
        category: "Research",
        tech: ["Godot", "GDScript", "HCI Research"],
        cover: "./files/feyrun_cover.png",
        gif: "./files/feyrun.gif",
        alt: "Feyrun gameplay",
        blurb: "An endless runner I built as a research platform for two HCI studies. The first varied how much control players felt over their outcomes to measure the effect on failure attribution and persistence. The second examined how visual aesthetics shape perceived difficulty through cognitive load."
    },
    {
        id: "dungeon-warden",
        title: "Dungeon Warden",
        category: "Games",
        tech: ["Godot", "GDScript", "AI"],
        cover: "./files/dungeon_warden_cover.png",
        gif: "./files/dungeon_warden.gif",
        alt: "Dungeon Warden gameplay",
        blurb: "My fourth-year capstone: a dungeon-defense game where the player places troops and traps to repel waves of adventurers. Features eight unit types, AI pathfinding, and physics-based combat, built in Godot with GDScript."
    },
    {
        id: "mesh-simplification",
        title: "Mesh Simplification Algorithm",
        category: "Tools",
        tech: ["Python", "NumPy"],
        cover: "./files/simplification_cover.png",
        gif: "./files/simplification.gif",
        alt: "Mesh simplification demonstration",
        blurb: "A mesh-simplification algorithm that clusters vertices onto a grid to reduce polygon count while preserving overall form. Written in Python with NumPy."
    },
    {
        id: "let-it-ride",
        title: "Let It Ride",
        category: "Games",
        tech: ["Godot", "GDScript"],
        cover: "./files/let_it_ride_cover.png",
        gif: "./files/let_it_ride.gif",
        alt: "Let It Ride gameplay",
        blurb: "A simulation of the Let It Ride casino game, implementing the full betting flow, hand evaluation, and payout odds. Built in Godot with GDScript."
    },
    {
        id: "bloxorzinator",
        title: "Arduino Bloxorz Controller",
        category: "Tools",
        tech: ["Arduino", "C++"],
        cover: "./files/bloxorzinator_cover.png",
        gif: "./files/bloxorzinator.gif",
        alt: "Arduino Bloxorz controller in use",
        blurb: "A wireless Arduino controller for the puzzle game Bloxorz that maps the block's in-game rolling to physical movement of the device."
    },
    {
        id: "buy-canadian",
        title: "Buy Canadian Simulator",
        category: "Research",
        tech: ["Godot", "GDScript", "Serious Game"],
        cover: "./files/buy_canadian_simulator_cover.png",
        gif: "./files/buy_canadian_simulator.gif",
        alt: "Buy Canadian Simulator gameplay",
        blurb: "A prototype in which the player navigates a busy grocery store to identify and prioritize Canadian products. Built in Godot with GDScript."
    },
    {
        id: "sunken-mariner",
        title: "The Sunken Mariner",
        category: "Games",
        tech: ["C++", "OpenGL"],
        cover: "./files/submarine3D_cover.png",
        gif: "./files/submarine3D.gif",
        alt: "The Sunken Mariner gameplay",
        blurb: "My third-year project: an underwater game where the player explores the seafloor to collect parts and repair a submarine. I hand-built the hierarchical models, shaders, lighting, particle systems, and screen-space effects in C++ with OpenGL."
    },
    {
        id: "submarine-survival",
        title: "Submarine Survival",
        category: "Games",
        tech: ["C++", "OpenGL"],
        cover: "./files/submarine2D_cover.png",
        gif: "./files/submarine2D.gif",
        alt: "Submarine Survival gameplay",
        blurb: "My second-year project: a top-down arcade shooter against escalating waves of sea creatures. I built the hierarchical sprites, shaders, and particle effects in C++ with OpenGL."
    },
    {
        id: "gridlocked",
        title: "GridLocked",
        category: "Research",
        tech: ["Godot", "GDScript", "Serious Game"],
        cover: "./files/gridlocked_cover.png",
        gif: "./files/gridlocked.gif",
        alt: "GridLocked gameplay",
        blurb: "A puzzle prototype for developing children's number sense and spatial reasoning through numbered-tile challenges. Built in Godot with GDScript."
    },
    {
        id: "nutrition-attrition",
        title: "Nutrition Attrition",
        category: "Games",
        tech: ["Godot", "GDScript"],
        cover: "./files/nutrition_attrition_cover.png",
        gif: "./files/nutrition_attrition.gif",
        alt: "Nutrition Attrition gameplay",
        blurb: "My first-year project: a picnic-themed real-time strategy game focused on troop deployment and resource management. Built in Godot with GDScript."
    },
    {
        id: "football-db",
        title: "PostgreSQL Football Database",
        category: "Tools",
        tech: ["PostgreSQL", "Python"],
        cover: "./files/database_cover.png",
        gif: "./files/database.gif",
        alt: "Football database schema",
        blurb: "A PostgreSQL database of over 500,000 tagged match events spanning 1,228 players, 140 matches, and 21 competitions, loaded via a Python script."
    },
    {
        id: "simulations",
        title: "Elevator & EEG Headset Simulations",
        category: "Tools",
        tech: ["C++", "Qt", "UML"],
        cover: "./files/simulation_cover.png",
        gif: "./files/simulation.gif",
        alt: "Hardware simulation interface",
        blurb: "Simulations of an elevator system and an EEG therapy headset, with full UML documentation and accurate behaviour modelling. Written in C++ with Qt."
    },
    {
        id: "art-gallery",
        title: "Art Gallery Website",
        category: "Web",
        tech: ["JavaScript", "Express", "MongoDB"],
        cover: "./files/website_cover.png",
        gif: "./files/website.gif",
        alt: "Art gallery website interface",
        blurb: "A prototype community platform for sharing art, with user profiles, following, likes, and comments. Built with Express, MongoDB, and Pug on an HTML, CSS, and JavaScript front end."
    }
];

const FILTERS = ["All", "Games", "Research", "Tools", "Web"];

/* PUBLICATIONS DATA --------------------------------*/
/* Add a paper by appending one entry. url is optional; omit it to hide the link. */
const PUBLICATIONS = [
    {
        title: "Serious Games for Cognitive Bias Mitigation: A Review of Learning Mechanisms and Design Approaches",
        authors: "J. Villeneuve, H. Zhou, E. Melcer",
        venue: "Foundations of Digital Games (FDG)",
        year: "2026",
        url: ""
    },
    {
        title: "Delivering Sleep Hygiene Interventions Through Smartwatch-Based Serious Sleep Games",
        authors: "N.H. Hoang, J. Villeneuve, H. Morrison, A. Tu, T. Karunarathna, D. Hwang, S. Chen, K. Khotchasing, Z. Liang, E. Melcer",
        venue: "Sleep Medicine 138",
        year: "2026",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S1389945725022609"
    }
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ELEMENT HELPERS ----------------------------------*/
function el(tag, className, attrs) {
    const node = document.createElement(tag);
    if (className) {
        node.className = className;
    }
    if (attrs) {
        for (const key in attrs) {
            node.setAttribute(key, attrs[key]);
        }
    }
    return node;
}

/* Inline placeholder used only if an image asset is missing. */
function placeholder(label) {
    const svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 200'>" +
        "<rect width='320' height='200' fill='#1a1d2b'/>" +
        "<rect x='1' y='1' width='318' height='198' fill='none' stroke='#00e0a8' stroke-width='1.5'/>" +
        "<text x='160' y='106' fill='#00e0a8' font-family='monospace' font-size='13' text-anchor='middle'>" +
        label + "</text></svg>";
    return "data:image/svg+xml," + encodeURIComponent(svg);
}

function attachFallback(img, label) {
    img.addEventListener("error", function handle() {
        img.removeEventListener("error", handle);
        img.src = placeholder(label);
    });
}

/* CARD + MODAL BUILDERS ----------------------------*/
function buildCard(project, displayIndex) {
    const card = el("button", "project_card", {
        "type": "button",
        "data-modal": "modal-" + project.id,
        "aria-haspopup": "dialog",
        "aria-label": "View details for " + project.title
    });
    card.style.animationDelay = (displayIndex * 0.05) + "s";

    const coverWrap = el("span", "card_cover_wrap");
    const cover = el("img", "card_cover", {
        "src": project.cover,
        "alt": project.alt,
        "loading": "lazy"
    });
    attachFallback(cover, project.title);

    if (!prefersReducedMotion && project.gif) {
        card.addEventListener("mouseenter", function () {
            cover.src = project.gif;
        });
        card.addEventListener("mouseleave", function () {
            cover.src = project.cover;
        });
    }

    const indexTag = el("span", "card_index");
    indexTag.textContent = String(displayIndex + 1).padStart(2, "0");
    coverWrap.append(cover, indexTag);

    const body = el("span", "card_body");
    const cat = el("span", "card_cat");
    cat.textContent = project.category;
    const title = el("span", "card_title");
    title.textContent = project.title;
    const tags = el("span", "tag_row");
    project.tech.forEach(function (techName) {
        const tag = el("span", "tag");
        tag.textContent = techName;
        tags.appendChild(tag);
    });
    body.append(cat, title, tags);

    card.append(coverWrap, body);
    card.addEventListener("click", function () {
        cover.src = project.cover;
        const dialog = document.getElementById("modal-" + project.id);
        if (dialog && typeof dialog.showModal === "function") {
            dialog.showModal();
        }
    });
    return card;
}

function buildModal(project) {
    const dialog = el("dialog", "modal", {
        "id": "modal-" + project.id,
        "aria-labelledby": "modal-" + project.id + "-title"
    });

    const inner = el("div", "modal_inner");

    const head = el("div", "modal_head");
    const heading = el("h2", null, { "id": "modal-" + project.id + "-title" });
    heading.textContent = project.title;
    const close = el("button", "modal_close", {
        "type": "button",
        "aria-label": "Close dialog"
    });
    close.innerHTML = "&times;";
    close.addEventListener("click", function () {
        dialog.close();
    });
    head.append(heading, close);

    const media = el("div", "modal_media");
    const gif = el("img", null, { "src": project.gif, "alt": project.alt });
    attachFallback(gif, project.title);
    media.appendChild(gif);

    const tags = el("ul", "tag_row");
    project.tech.forEach(function (techName) {
        const tag = el("li", "tag");
        tag.textContent = techName;
        tags.appendChild(tag);
    });

    const body = el("p", "modal_body");
    body.textContent = project.blurb;

    inner.append(head, media, tags, body);

    if (project.links && project.links.length) {
        const links = el("div", "modal_links");
        project.links.forEach(function (link) {
            const anchor = el("a", "btn btn_ghost", {
                "href": link.url,
                "target": "_blank",
                "rel": "noopener"
            });
            anchor.textContent = link.label;
            links.appendChild(anchor);
        });
        inner.appendChild(links);
    }

    dialog.appendChild(inner);

    /* Close when the backdrop (the dialog box itself) is clicked. */
    dialog.addEventListener("click", function (event) {
        if (event.target === dialog) {
            dialog.close();
        }
    });
    return dialog;
}

/* RENDERING ----------------------------------------*/
function renderProjects(filter) {
    const grid = document.querySelector(".projects_grid");
    const count = document.querySelector(".filter_count");
    grid.innerHTML = "";

    const visible = PROJECTS.filter(function (project) {
        return filter === "All" || project.category === filter;
    });

    visible.forEach(function (project, displayIndex) {
        grid.appendChild(buildCard(project, displayIndex));
    });

    count.textContent = visible.length + (visible.length === 1 ? " project" : " projects");
}

function renderFilters() {
    const bar = document.querySelector(".filter_bar");
    FILTERS.forEach(function (filter) {
        const btn = el("button", "filter_btn", {
            "type": "button",
            "aria-pressed": filter === "All" ? "true" : "false"
        });
        btn.textContent = filter;
        btn.addEventListener("click", function () {
            bar.querySelectorAll(".filter_btn").forEach(function (other) {
                other.setAttribute("aria-pressed", "false");
            });
            btn.setAttribute("aria-pressed", "true");
            renderProjects(filter);
        });
        bar.appendChild(btn);
    });
}

function renderModals() {
    const root = document.querySelector(".modal_root");
    PROJECTS.forEach(function (project) {
        root.appendChild(buildModal(project));
    });
}

function renderPublications() {
    const list = document.querySelector(".pub_list");
    if (!list) {
        return;
    }
    PUBLICATIONS.forEach(function (pub) {
        const item = el("li", "pub_item");

        const title = el("p", "pub_title");
        title.textContent = pub.title;

        const authors = el("p", "pub_authors");
        pub.authors.split(/(J\. Villeneuve)/).forEach(function (part) {
            if (part === "J. Villeneuve") {
                const strong = el("strong");
                strong.textContent = part;
                authors.appendChild(strong);
            } else if (part) {
                authors.appendChild(document.createTextNode(part));
            }
        });

        const meta = el("p", "pub_meta");
        meta.textContent = pub.venue + " · " + pub.year;

        item.append(title, authors, meta);

        if (pub.url) {
            const link = el("a", "pub_link", {
                "href": pub.url,
                "target": "_blank",
                "rel": "noopener"
            });
            link.textContent = "Read";
            item.appendChild(link);
        }

        list.appendChild(item);
    });
}

/* NAVIGATION ---------------------------------------*/
function initNav() {
    const hamburger = document.querySelector(".navbar_hamburger");
    const links = document.querySelector(".navbar_links");
    if (!hamburger || !links) {
        return;
    }

    function setMenu(open) {
        hamburger.classList.toggle("is-active", open);
        links.classList.toggle("is-open", open);
        hamburger.setAttribute("aria-expanded", open);
    }

    hamburger.addEventListener("click", function () {
        setMenu(!links.classList.contains("is-open"));
    });
    links.querySelectorAll(".navbar_link").forEach(function (link) {
        link.addEventListener("click", function () {
            setMenu(false);
        });
    });
}

/* INIT ---------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    renderModals();
    renderFilters();
    renderProjects("All");
    renderPublications();
    initNav();
});