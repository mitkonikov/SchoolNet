import React, { useRef, useState, useEffect } from "react";

const api = "api/"

let lightFetch = body => {
    return fetch(domain() + api + "light", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => response.json())
    .catch(error => console.log(error));
};

let queryFetch = body => {
    return fetch(domain() + api + "query", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => response.json())
    .catch(error => console.log(error));
};

let updateFetch = body => {
    return fetch(domain() + api + "update", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => response.json())
    .catch(error => console.log(error));
};

let domain = () => {
    let loc = window.location.href;
    let atMK = loc.indexOf(".mk");
    return loc.substring(0, atMK + 4);
}

let getRandomInt = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
}

const useFitText = () => {
    const MIN_FONT_SIZE = 20;
    const MAX_FONT_SIZE = 100;
    const RESOLUTION = 5;

    const ref = useRef(null);
    
    const [state, setState] = useState({
        fontSize: MAX_FONT_SIZE,
        fontSizePrev: MIN_FONT_SIZE,
        fontSizeMax: MAX_FONT_SIZE,
        fontSizeMin: MIN_FONT_SIZE
    });
    const { fontSize, fontSizeMax, fontSizeMin, fontSizePrev } = state;

    useEffect(() => {
        const isDone = Math.abs(fontSize - fontSizePrev) <= RESOLUTION;
        const isOverflow =
            !!ref.current &&
            (ref.current.scrollHeight > ref.current.offsetHeight ||
                ref.current.scrollWidth > ref.current.offsetWidth);
        const isAsc = fontSize > fontSizePrev;

        // return if the font size has been adjusted "enough" (change within RESOLUTION)
        // reduce font size by one increment if it's overflowing
        if (isDone) {
            if (isOverflow) {
                const fontSizeNew =
                    fontSizePrev < fontSize
                        ? fontSizePrev
                        : fontSize - (fontSizePrev - fontSize);
                setState({
                    fontSize: fontSizeNew,
                    fontSizeMax,
                    fontSizeMin,
                    fontSizePrev
                });
            }
            return;
        }

        // binary search to adjust font size
        let delta;
        let newMax = fontSizeMax;
        let newMin = fontSizeMin;
        if (isOverflow) {
            delta = isAsc ? fontSizePrev - fontSize : fontSizeMin - fontSize;
            newMax = Math.min(fontSizeMax, fontSize);
        } else {
            delta = isAsc ? fontSizeMax - fontSize : fontSizePrev - fontSize;
            newMin = Math.max(fontSizeMin, fontSize);
        }
        setState({
            fontSize: fontSize + delta / 2,
            fontSizeMax: newMax,
            fontSizeMin: newMin,
            fontSizePrev: fontSize
        });
    }, [fontSize, fontSizeMax, fontSizeMin, fontSizePrev, ref]);

    return { fontSize: `${fontSize}%`, ref };
};

const ReactLazyPreload = importStatement => {
    const Component = React.lazy(importStatement);
    Component.preload = importStatement;
    return Component;
};

export { lightFetch, queryFetch, updateFetch, useFitText, ReactLazyPreload, domain, getRandomInt };