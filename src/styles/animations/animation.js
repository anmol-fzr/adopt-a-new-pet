import transition from "./transitions"
import variants from "./variants"




const listAnimation = {
    hidden: {},
    visible: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    },
}
const listItemAnimation = {
    up: {
        hidden: {
            opacity: 0,
            y: "30%",
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    },
    down: {
        hidden: {
            opacity: 0,
            y: "100%",
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    },
}
const animateList = {
    initial: "hidden",
    animate: "visible",
    variants: listAnimation
}

// animations
const animateListItem = {
    up: {
        variants: listItemAnimation.up
    },
    down: {
        variants: listItemAnimation.down
    },
}
const drop = {
    in: {
        hidden: {
            opacity: 0,
            y: "-100%",
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            y: "100%",
        },
    },
}
const fade = {
    in: {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
    },
}
const scale = {
    up: {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
        },
        exit: {
            opacity: 0,
            scale: 0,
        },
    },
    half: {
        hidden: {
            opacity: 0.5,
            scale: 0.5,
        },
        visible: {
            opacity: 1,
            scale: 1,
        },
    },
}
const swipe = {
    top: {
        hidden: {
            opacity: 0,
            y: "-100%",
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    },
    right: {
        hidden: {
            scale: 0,
            opacity: 0,
            x: "-100%",
        },
        visible: {
            scale: 1,
            opacity: 1,
            x: 0,
        },
        exit: {
            scale: 0.5,
            opacity: 0.5,
            x: "100%",
        }
    },
    down: {
        hidden: {
            opacity: 0,
            y: "-100%",
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            y: "100%",
        },
    },
    left: {
        hidden: {
            scale: 0,
            opacity: 0,
            x: "100%",
        },
        visible: {
            scale: 1,
            opacity: 1,
            x: 0,
        },
        exit: {
            scale: 0.5,
            opacity: 0.5,
            x: "-100%",
        }
    },
}
const animation = {
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    variants: fade.in,
    transition,
}
export default animation;
export {
    drop,
    swipe,
    scale,
    fade,
    animateList, animateListItem
}
