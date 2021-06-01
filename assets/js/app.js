/*
    Package Name: Website JS
    Package URI: https://quentinboitel.live/assets/js/app.js
    Description: Webiste Package
    Author: Quentin Boitel
*/

/**
 * Calcul la position de l'élément par rapport au haut de la page
 * @param {HTMLElement} element
 * @return {number}
 */
function offsetTop(element, acc = 0) {
    if (element.offsetParent) {
        return offsetTop(element.offsetParent, acc + element.offsetTop);
    }
    return acc + element.offsetTop;
}

/**
 * @property {HTMLElement} element
 * @property {{y: number, r: number, variable: boolean}} options
 */
class Parallax {
    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        this.element = element;
        this.options = this.parseAttribute();

        this.onScroll = this.onScroll.bind(this);
        this.onIntersection = this.onIntersection.bind(this);
        this.onResize = this.onResize.bind(this);

        this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
        const observer = new IntersectionObserver(this.onIntersection);
        observer.observe(element);
        this.onScroll();
    }

    parseAttribute() {
        const defaultOptions = {
            y: 0.2,
            r: 0,
            variable: false,
        };
        if (this.element.dataset.parallax.startsWith("{")) {
            return {
                ...defaultOptions,
                ...JSON.parse(this.element.dataset.parallax),
            };
        }
        return {
            ...defaultOptions,
            y: parseFloat(this.element.dataset.parallax)
        };
    }

    /**
     * @param {IntersectionObserverEntry[]} entries
     */
    onIntersection(entries) {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                document.addEventListener("scroll", this.onScroll);
                window.addEventListener("resize", this.onResize);
                this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
            } else {
                document.removeEventListener("scroll", this.onScroll);
                window.removeEventListener("resize", this.onResize);
            }
        }
    }

    onResize() {
        this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
        this.onScroll();
    }

    onScroll() {
        window.requestAnimationFrame(() => {
            const screenY = window.scrollY + window.innerHeight / 2;
            const diffY = this.elementY - screenY;
            const translateY = diffY * -1 * this.options.y;
            if (this.options.variable) {
                this.element.style.setProperty("--parallaxY", `${translateY}px`);
            } else if (diffY > 0) {
                let transform = `translateY(${translateY}px)`;
                if (this.options.r) {
                    transform += ` rotate(${diffY * this.options.r}deg)`;
                }
                this.element.style.setProperty("transform", transform);
            }
        });
    }

    /**
     * @returns {Parallax[]}
     */
    static bind() {
        return Array.from(document.querySelectorAll("[data-parallax]")).map(
            (element) => {
                return new Parallax(element);
            }
        );
    }
}

Parallax.bind();