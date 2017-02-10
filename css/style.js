import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "h1": {
        "fontFamily": "\"Roboto\",sans-serif"
    },
    "h2": {
        "fontFamily": "\"Roboto\",sans-serif"
    },
    "h3": {
        "fontFamily": "\"Roboto\",sans-serif"
    },
    "h4": {
        "fontFamily": "\"Roboto\",sans-serif"
    },
    "h5": {
        "fontFamily": "\"Roboto\",sans-serif"
    },
    "h6": {
        "fontFamily": "\"Roboto\",sans-serif"
    },
    "custom-nav li a": {
        "fontFamily": "\"Roboto\",sans-serif",
        "fontSize": 14,
        "fontWeight": "500",
        "lineHeight": 14,
        "paddingTop": 25,
        "paddingRight": 20,
        "paddingBottom": 25,
        "paddingLeft": 20,
        "textTransform": "uppercase",
        "WebkitTransition": "all 0.3s ease-out 0s",
        "MsTransition": "all 0.3s ease-out 0s",
        "OTransition": "all 0.3s ease-out 0s",
        "transition": "all 0.3s ease-out 0s"
    },
    "nav brand-logo": {
        "fontWeight": "bold",
        "textTransform": "uppercase"
    },
    "nav brand-logo img": {
        "height": 45,
        "marginTop": 10
    },
    "side-nav a": {
        "textTransform": "uppercase"
    },
    "side-nav li:hover": {
        "color": "#fff"
    },
    "side-nav li a:hover": {
        "color": "#fff"
    },
    "main-wrapper": {
        "display": "inline",
        "width": "100%",
        "float": "left"
    },
    "preloader": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "backgroundColor": "#fff",
        "zIndex": 99999
    },
    "progress": {
        "backgroundColor": "#ccc"
    },
    "home": {
        "backgroundImage": "url(\"img/home-img1.jpg\")",
        "backgroundPosition": "100% 100%",
        "backgroundSize": "100% 100%",
        "display": "inline",
        "float": "left",
        "height": 420,
        "position": "relative",
        "width": "100%"
    },
    "home overlay-section": {
        "background": "rgba(0, 0, 0, 0.7) none repeat scroll 0 0",
        "height": "100%",
        "width": "100%"
    },
    "home-inner": {
        "display": "inline",
        "float": "left",
        "paddingTop": 57,
        "paddingRight": 100,
        "paddingBottom": 57,
        "paddingLeft": 100,
        "textAlign": "center",
        "position": "relative",
        "width": "100%"
    },
    "home-title": {
        "color": "#fff",
        "fontSize": 72,
        "fontWeight": "700",
        "marginBottom": 15,
        "textTransform": "uppercase"
    },
    "home-inner>p": {
        "color": "#fff",
        "fontSize": 18,
        "fontWeight": "300",
        "marginBottom": 38,
        "textTransform": "uppercase"
    },
    "call-to-about": {
        "bottom": -68,
        "left": "47.5%",
        "position": "absolute"
    },
    "about": {
        "backgroundColor": "#fafafa",
        "float": "left",
        "display": "inline",
        "paddingTop": 80,
        "paddingRight": 0,
        "paddingBottom": 80,
        "paddingLeft": 0,
        "width": "100%"
    },
    "about-inner": {
        "display": "inline",
        "minHeight": 300,
        "float": "left",
        "width": "100%"
    },
    "about-inner-left": {
        "display": "inline",
        "textAlign": "center",
        "float": "left",
        "width": "100%"
    },
    "profile-img": {
        "border": "5px solid #fff",
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
        "height": 130,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 140
    },
    "about-inner-right": {
        "minHeight": 250,
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "about-inner-right>p": {
        "color": "#727272",
        "fontSize": 15,
        "lineHeight": 28,
        "marginBottom": 35
    },
    "about-inner-right>h3": {
        "marginTop": 0,
        "fontSize": 24,
        "fontWeight": "600",
        "textTransform": "uppercase"
    },
    "personal-information": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "personal-information>h3": {
        "marginTop": 0,
        "fontSize": 24,
        "fontWeight": "600",
        "textTransform": "uppercase"
    },
    "personal-information ul li": {
        "borderBottom": "1px solid #eeeeee",
        "color": "#727272",
        "fontSize": 15,
        "marginBottom": 12,
        "paddingBottom": 12
    },
    "resume-btn": {
        "marginTop": 160,
        "marginLeft": 50
    },
    "pro-bar-containercolor-wisteria": {
        "backgroundColor": "#eee"
    },
    "resume": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "skill": {
        "backgroundColor": "#fff",
        "display": "inline",
        "paddingTop": 60,
        "paddingRight": 0,
        "paddingBottom": 60,
        "paddingLeft": 0,
        "float": "left",
        "width": "100%"
    },
    "skill-inner": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "skill-inner p": {
        "color": "#727272",
        "fontSize": 16,
        "lineHeight": 30,
        "fontWeight": "400"
    },
    "title": {
        "fontSize": 48,
        "fontWeight": "700",
        "lineHeight": 1.1,
        "marginBottom": 35,
        "textTransform": "uppercase"
    },
    "skill-progress-bar": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "skill-progress-bar span": {
        "color": "#727272",
        "display": "inline-block",
        "fontSize": 16,
        "fontWeight": "bold",
        "marginBottom": 5,
        "textTransform": "uppercase"
    },
    "pro-bar-container": {
        "borderRadius": 0,
        "height": 30
    },
    "pro-bar": {
        "borderRadius": 0,
        "height": 30
    },
    "experience": {
        "display": "inline",
        "paddingTop": 60,
        "paddingRight": 0,
        "paddingBottom": 60,
        "paddingLeft": 0,
        "float": "left",
        "width": "100%"
    },
    "experience-inner": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "experience-inner title": {
        "color": "#fff"
    },
    "experience-inner > p": {
        "color": "#fff",
        "fontSize": 16,
        "fontWeight": "400",
        "lineHeight": 30
    },
    "experience-slider": {
        "display": "inline",
        "float": "left",
        "marginTop": 55,
        "paddingLeft": 20,
        "width": "100%"
    },
    "experience-title": {
        "borderBottom": "1px solid #eee",
        "color": "#727272",
        "fontSize": 17,
        "fontWeight": "400",
        "lineHeight": 1.7,
        "marginBottom": 0,
        "marginTop": 0,
        "paddingTop": 15,
        "paddingRight": 20,
        "paddingBottom": 15,
        "paddingLeft": 20,
        "textAlign": "center"
    },
    "experience-slider card card-content": {
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "card-subtitle": {
        "borderBottom": "1px solid #eee",
        "display": "block",
        "paddingBottom": 10
    },
    "reveal-title": {
        "color": "#727272 !important",
        "fontSize": "20px !important"
    },
    "experience-slider card-reveal p": {
        "color": "#727272",
        "fontSize": 15,
        "lineHeight": 25
    },
    "prev": {
        "left": "12%",
        "marginTop": "11.3%",
        "position": "absolute"
    },
    "next": {
        "right": "12%",
        "marginTop": "11.3%",
        "position": "absolute"
    },
    "prev1": {
        "left": "12%",
        "marginTop": "11.3%",
        "position": "absolute"
    },
    "next1": {
        "right": "12%",
        "marginTop": "11.3%",
        "position": "absolute"
    },
    "edcuation": {
        "backgroundColor": "#fafafa",
        "display": "inline",
        "paddingTop": 60,
        "paddingRight": 0,
        "paddingBottom": 60,
        "paddingLeft": 0,
        "float": "left",
        "width": "100%"
    },
    "education-inner": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "portfolio": {
        "display": "inline",
        "paddingBottom": 100,
        "float": "left",
        "width": "100%"
    },
    "portfolio-top": {
        "display": "inline",
        "paddingTop": 60,
        "float": "left",
        "width": "100%"
    },
    "portfolio-top-inner": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "portfolio-top-inner h2": {
        "color": "#fff"
    },
    "controls": {
        "display": "inline",
        "float": "left",
        "width": "100%",
        "marginBottom": 20
    },
    "filter": {
        "backgroundColor": "#fff",
        "fontSize": 14,
        "fontWeight": "bold",
        "marginRight": 5
    },
    "filter:hover": {
        "color": "#fff"
    },
    "filter:focus": {
        "color": "#fff"
    },
    "portfolio-bottom": {
        "display": "inline",
        "paddingTop": 50,
        "width": "100%",
        "float": "left"
    },
    "portfolio-bottom-inner": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "portfolio-list": {
        "display": "inline",
        "float": "left",
        "marginLeft": "-1%",
        "width": "100%"
    },
    "portfolio-list mix": {
        "display": "block",
        "float": "left",
        "height": 320,
        "marginBottom": "1.33%",
        "marginLeft": "1%",
        "width": "32.33%",
        "WebkitTransition": "all 0.2s ease 0s",
        "OTransition": "all 0.2s ease 0s",
        "transition": "all 0.2s ease 0s"
    },
    "portfolio-list mix a": {
        "display": "block",
        "position": "relative",
        "height": "100%",
        "overflow": "hidden"
    },
    "portfolio-list mix > a::before": {
        "background": "rgba(0, 0, 0, 0) none repeat scroll 0 0",
        "border": "0 solid transparent",
        "content": "",
        "height": "100.5%",
        "left": 0,
        "position": "absolute",
        "top": 0,
        "transition": "border-width 0.2s ease 0s, border-color 0.2s ease 0s",
        "width": "100.5%"
    },
    "portfolio-list mix:hover > a::before": {
        "opacity": 0.8,
        "WebkitTransition": "background-color 0.5s ease-in-out",
        "MozTransition": "background-color 0.5s ease-in-out",
        "OTransition": "background-color 0.5s ease-in-out",
        "MsTransition": "background-color 0.5s ease-in-out",
        "transition": "background-color 0.5s ease-in-out"
    },
    "portfolio-list mix a img": {
        "width": "100%",
        "height": "100%"
    },
    "view-icon": {
        "color": "#fff",
        "top": "42%",
        "visibility": "hidden",
        "fontSize": "50px !important",
        "left": "-1%",
        "position": "absolute",
        "textAlign": "center",
        "WebkitTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "portfolio-list mix:hover view-icon": {
        "left": "43%",
        "visibility": "visible"
    },
    "portfolio-list mix:hover": {
        "boxShadow": "0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    "portfolio-detail": {
        "display": "none",
        "float": "left",
        "textAlign": "center",
        "width": "100%"
    },
    "portfolio-popup": {
        "backgroundColor": "#fff",
        "bottom": 0,
        "display": "none",
        "left": 0,
        "position": "fixed",
        "right": 0,
        "textAlign": "center",
        "top": 0,
        "opacity": 0,
        "zIndex": 99999,
        "overflowY": "scroll",
        "WebkitTransition": "all 0.5s",
        "MozTransition": "all 0.5s",
        "MsTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "portfolio-popup-area": {
        "display": "block",
        "float": "left",
        "paddingTop": 40,
        "paddingRight": "15%",
        "paddingBottom": 40,
        "paddingLeft": "15%",
        "width": "100%"
    },
    "portfolio-popup portfolio-detail": {
        "display": "inline"
    },
    "portfolio-popupportfolio-popup-show": {
        "alignItems": "center",
        "display": "flex"
    },
    "portfolio-popup-inner": {
        "color": "#333",
        "display": "inline",
        "width": "100%",
        "WebkitTransition": "all 0.5s",
        "MozTransition": "all 0.5s",
        "MsTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "portfolio-popup-inner-show": {
        "marginLeft": 0
    },
    "portfolio-popup-inner img": {
        "maxWidth": "80%"
    },
    "portfolio-popup-inner h2": {
        "color": "#000",
        "fontSize": 35,
        "lineHeight": 1.5,
        "marginTop": 15
    },
    "modal-close-btn": {
        "border": "2px solid #000",
        "borderRadius": "50%",
        "color": "#000",
        "display": "inline-block",
        "height": 40,
        "lineHeight": 35,
        "opacity": 0.5,
        "position": "absolute",
        "right": "2%",
        "textAlign": "center",
        "top": "2%",
        "WebkitTransition": "all 0.5s",
        "MozTransition": "all 0.5s",
        "MsTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "transition": "all 0.5s",
        "width": 40
    },
    "modal-close-btn:hover": {
        "boxShadow": "0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)",
        "color": "#000",
        "opacity": 1
    },
    "modal-close-btn:focus": {
        "boxShadow": "0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)",
        "color": "#000",
        "opacity": 1
    },
    "view-project-btn": {
        "border": "2px solid #333",
        "color": "#000",
        "display": "inline-block",
        "marginTop": 10,
        "paddingTop": 6,
        "paddingRight": 15,
        "paddingBottom": 6,
        "paddingLeft": 15,
        "textDecoration": "none",
        "WebkitTransition": "all 0.5s",
        "MozTransition": "all 0.5s",
        "MsTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "view-project-btn:hover": {
        "boxShadow": "0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)",
        "borderColor": "#000",
        "color": "#000",
        "textDecoration": "none"
    },
    "view-project-btn:focus": {
        "boxShadow": "0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15)",
        "borderColor": "#000",
        "color": "#000",
        "textDecoration": "none"
    },
    "facts": {
        "backgroundImage": "url(\"img/home-img3.jpg\")",
        "backgroundPosition": "center center",
        "backgroundSize": "100% 100%",
        "display": "inline",
        "float": "left",
        "position": "relative",
        "width": "100%"
    },
    "facts row": {
        "marginBottom": 0
    },
    "facts-overlay": {
        "background": "rgba(255, 255, 255, 0.92) none repeat scroll 0 0",
        "height": "100%",
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0,
        "width": "100%"
    },
    "facts-inner": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "single-facts": {
        "background": "#fff none repeat scroll 0 0",
        "display": "inline",
        "float": "left",
        "textAlign": "center",
        "boxShadow": "0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50,
        "width": "100%"
    },
    "single-facts i": {
        "color": "#dbdbdb",
        "display": "inline-block",
        "fontSize": 60,
        "marginBottom": 13
    },
    "counter": {
        "display": "block",
        "fontSize": 50,
        "fontWeight": "bold",
        "lineHeight": 1.1,
        "marginBottom": 20
    },
    "counter-text": {
        "display": "block",
        "color": "#727272",
        "fontSize": 13,
        "textTransform": "uppercase"
    },
    "testimonial": {
        "display": "inline",
        "paddingTop": 60,
        "paddingRight": 0,
        "paddingBottom": 60,
        "paddingLeft": 0,
        "float": "left",
        "width": "100%"
    },
    "testimonial-inner": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "testimonial-inner h2": {
        "color": "#fff"
    },
    "testimonial-inner p": {
        "color": "#fff"
    },
    "testimonial-slider-area": {
        "display": "inline",
        "float": "left",
        "marginTop": 60,
        "width": "100%",
        "position": "relative"
    },
    "testimonial-slider": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "single-testimonial": {
        "backgroundColor": "#fff",
        "borderRadius": 2,
        "marginTop": 0.5,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "overflow": "hidden",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "position": "relative",
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
    },
    "testimonial-img": {
        "display": "inline",
        "float": "left",
        "height": 150,
        "width": "25%"
    },
    "testimonial-img img": {
        "height": "100%",
        "width": "100%"
    },
    "testimonial-content": {
        "float": "left",
        "display": "inline",
        "paddingLeft": 15,
        "width": "75%"
    },
    "testimonial-content h3": {
        "float": "left",
        "fontSize": 24,
        "marginBottom": 0,
        "marginTop": -10,
        "textAlign": "left",
        "width": "100%"
    },
    "testimonial-content > span": {
        "color": "#777777",
        "display": "block",
        "fontSize": 13
    },
    "testimonial-content p": {
        "color": "#777777",
        "fontStyle": "italic"
    },
    "prev2": {
        "left": "-8%",
        "marginTop": "8.3%",
        "position": "absolute"
    },
    "next2": {
        "marginTop": "8.3%",
        "position": "absolute",
        "right": "-6%"
    },
    "blog": {
        "backgroundColor": "#fafafa",
        "display": "inline",
        "float": "left",
        "paddingTop": 60,
        "paddingRight": 0,
        "paddingBottom": 60,
        "paddingLeft": 0,
        "width": "100%"
    },
    "blog-inner": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "blog-area": {
        "display": "inline",
        "float": "left",
        "marginTop": 50,
        "width": "100%"
    },
    "blog-post": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "blog-post-content": {
        "paddingTop": "0 !important"
    },
    "blog-post-content h2": {
        "fontSize": 20,
        "lineHeight": 25,
        "marginBottom": 5,
        "marginTop": 0,
        "textAlign": "center"
    },
    "blog-post-content h2 a": {
        "fontSize": 20,
        "lineHeight": 25,
        "marginBottom": 5,
        "marginTop": 0,
        "textAlign": "center"
    },
    "meta-media": {
        "float": "left",
        "marginBottom": 15,
        "textAlign": "center",
        "width": "100%"
    },
    "single-meta": {
        "color": "#777",
        "display": "inline-block",
        "marginRight": 10
    },
    "blog-post card-action": {
        "float": "left",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "width": "100%"
    },
    "blog-post card card-image": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "post-comment": {
        "display": "inline-block",
        "float": "left"
    },
    "post-comment i": {
        "display": "inline-block",
        "float": "left",
        "fontSize": 20,
        "lineHeight": 27,
        "marginRight": 3
    },
    "post-comment span": {
        "display": "inline-block",
        "fontSize": 16
    },
    "readmore-btn": {
        "borderRadius": 1,
        "fontSize": 13,
        "fontWeight": "500",
        "float": "right",
        "paddingTop": 4,
        "paddingRight": 0,
        "paddingBottom": 4,
        "paddingLeft": 10,
        "textTransform": "uppercase",
        "WebkitTransition": "all 0.3s ease 0s",
        "OTransition": "all 0.3s ease 0s",
        "transition": "all 0.3s ease 0s"
    },
    "readmore-btn:hover": {
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
        "color": "#fff !important",
        "paddingRight": 10
    },
    "allpost-btn": {
        "backgroundColor": "#fff",
        "color": "#727272",
        "fontSize": 14,
        "marginTop": 5,
        "paddingLeft": 20,
        "paddingRight": 20
    },
    "allpost-btn:hover": {
        "backgroundColor": "#fff",
        "color": "#727272",
        "fontSize": 14,
        "marginTop": 5,
        "paddingLeft": 20,
        "paddingRight": 20
    },
    "footer": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "footer-top": {
        "display": "inline",
        "paddingTop": 60,
        "paddingRight": 0,
        "paddingBottom": 60,
        "paddingLeft": 0,
        "float": "left",
        "width": "100%"
    },
    "footer-top-inner": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "footer-top-inner>h2": {
        "color": "#fff"
    },
    "footer-top-inner>p": {
        "color": "#fff"
    },
    "contact": {
        "display": "inline",
        "float": "left",
        "marginTop": 50,
        "width": "100%"
    },
    "contact-form": {
        "background": "#fff none repeat scroll 0 0",
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
        "display": "inline",
        "borderRadius": 4,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "float": "left",
        "width": "100%"
    },
    "contact-form input-label": {
        "fontSize": 15,
        "left": 0
    },
    "input[type=\"text\"]": {
        "borderColor": "#ccc"
    },
    "input[type=\"password\"]": {
        "borderColor": "#ccc"
    },
    "input[type=\"email\"]": {
        "borderColor": "#ccc"
    },
    "input[type=\"url\"]": {
        "borderColor": "#ccc"
    },
    "input[type=\"time\"]": {
        "borderColor": "#ccc"
    },
    "input[type=\"date\"]": {
        "borderColor": "#ccc"
    },
    "input[type=\"datetime-local\"]": {
        "borderColor": "#ccc"
    },
    "input[type=\"tel\"]": {
        "borderColor": "#ccc"
    },
    "input[type=\"number\"]": {
        "borderColor": "#ccc"
    },
    "input[type=\"search\"]": {
        "borderColor": "#ccc"
    },
    "textareamaterialize-textarea": {
        "borderColor": "#ccc"
    },
    "textarea-input textarea": {
        "minHeight": 116
    },
    "submit-btn:hover": {
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
        "color": "#fff",
        "paddingLeft": 10
    },
    "submit-btn:focus": {
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
        "color": "#fff",
        "paddingLeft": 10
    },
    "contact-map": {
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
        "borderRadius": 4,
        "height": 500,
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "contact-map iframe": {
        "borderRadius": 4,
        "marginBottom": -5
    },
    "footer-bottom": {
        "backgroundColor": "#fff",
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "footer-inner": {
        "display": "inline",
        "float": "left",
        "paddingTop": 20,
        "position": "relative",
        "textAlign": "center",
        "width": "100%"
    },
    "design-info": {
        "color": "#555",
        "display": "inline-block",
        "fontSize": 14,
        "lineHeight": 25,
        "marginTop": 20
    },
    "design-info a": {
        "color": "#555"
    },
    "copyright-info": {
        "color": "#555",
        "display": "inline-block",
        "float": "right",
        "fontSize": 14,
        "lineHeight": 25
    },
    "up-btn": {
        "backgroundColor": "#fff",
        "color": "#000",
        "left": "47.7%",
        "position": "absolute",
        "top": -28
    },
    "up-btn i": {
        "color": "#000"
    },
    "up-btn:hover": {
        "backgroundColor": "#fff"
    },
    "up-btn:focus": {
        "backgroundColor": "#fff"
    },
    "banner": {
        "display": "inline",
        "float": "left",
        "width": "100%",
        "minHeight": 200
    },
    "parallax-container": {
        "height": 200,
        "overflow": "hidden",
        "position": "relative"
    },
    "parallax": {
        "bottom": 0,
        "left": -1,
        "position": "absolute",
        "right": 0,
        "top": 0,
        "zIndex": -1
    },
    "overlay-header": {
        "opacity": 0.7,
        "height": "100%",
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "width": "100%"
    },
    "overlay-content": {
        "height": "100%",
        "left": 0,
        "paddingTop": 30,
        "paddingRight": 0,
        "paddingBottom": 30,
        "paddingLeft": 0,
        "position": "absolute",
        "right": 0,
        "top": 0,
        "width": "100%",
        "zIndex": 10
    },
    "header-title": {
        "color": "#fff",
        "fontSize": 40,
        "fontWeight": "900",
        "lineHeight": 40,
        "marginBottom": 10,
        "textTransform": "uppercase"
    },
    "overlay-content meta-media": {
        "textAlign": "left"
    },
    "overlay-content single-meta": {
        "color": "#fff"
    },
    "overlay-content single-meta a": {
        "color": "#fff"
    },
    "overlay-content post-comment": {
        "float": "none"
    },
    "overlay-content post-comment:hover": {
        "color": "#fff !important"
    },
    "blog-head h1": {
        "lineHeight": 75
    },
    "blog-archive": {
        "paddingTop": 22
    },
    "blog-archive card-image": {
        "height": 350
    },
    "blog-archive card-image img": {
        "height": "100%"
    },
    "blog-details": {
        "backgroundColor": "#fafafa",
        "display": "inline-block",
        "float": "left",
        "minHeight": 500,
        "width": "100%"
    },
    "blog-content": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "blog-image": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "blog-image img": {
        "width": "100%"
    },
    "blog-content h1": {
        "fontSize": 40,
        "marginBottom": 10,
        "lineHeight": 43,
        "marginTop": 10
    },
    "blog-content h2": {
        "fontSize": 35,
        "marginBottom": 10,
        "lineHeight": 37,
        "marginTop": 10
    },
    "blog-content h3": {
        "fontSize": 26,
        "lineHeight": 28,
        "marginBottom": 5,
        "marginTop": 5
    },
    "blog-content h4": {
        "fontSize": 20,
        "lineHeight": 23,
        "marginBottom": 5,
        "marginTop": 5
    },
    "blog-content h5": {
        "fontSize": 16,
        "lineHeight": 18,
        "marginTop": 5
    },
    "blog-content blockquote": {
        "backgroundColor": "#fff",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "blog-content blockquote p": {
        "color": "#555",
        "fontSize": 17,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "blog-content cite": {
        "fontSize": 13,
        "fontStyle": "italic"
    },
    "blog-content ul": {
        "paddingLeft": 25
    },
    "blog-content ol": {
        "paddingLeft": 25
    },
    "blog-content ul>li": {
        "listStyle": "disc",
        "color": "#555"
    },
    "blog-content ul>li ul li": {
        "listStyle": "circle"
    },
    "blog-content ul>li ul li ul>li": {
        "listStyle": "square"
    },
    "blog-content-bottom": {
        "borderBottom": "1px solid #ccc",
        "borderTop": "1px solid #ccc",
        "display": "inline",
        "float": "left",
        "marginBottom": 20,
        "marginTop": 20,
        "paddingTop": 16,
        "width": "100%"
    },
    "share-area": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "share-area h4": {
        "color": "#555",
        "fontSize": 18,
        "fontWeight": "normal",
        "marginBottom": 10,
        "textTransform": "uppercase"
    },
    "tag-area h4": {
        "color": "#555",
        "fontSize": 18,
        "fontWeight": "normal",
        "marginBottom": 10,
        "textTransform": "uppercase"
    },
    "share-area h4 i": {
        "marginRight": 5
    },
    "tag-area h4 i": {
        "marginRight": 5
    },
    "share-area a": {
        "color": "#555",
        "display": "inline-block",
        "fontSize": 18,
        "marginRight": 15,
        "marginTop": 5,
        "WebkitTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "tag-area": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "tag-area a": {
        "color": "#555",
        "display": "inline-block",
        "marginRight": 5,
        "marginTop": 5
    },
    "sidebar": {
        "display": "inline-block",
        "float": "left",
        "minHeight": 300,
        "width": "100%"
    },
    "related-post": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "related-post h2": {
        "fontSize": 30
    },
    "related-post-content": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "related-post-content card": {
        "paddingBottom": 18
    },
    "comments-area": {
        "display": "inline",
        "float": "left",
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 35,
        "paddingRight": 0,
        "paddingBottom": 35,
        "paddingLeft": 20,
        "width": "100%"
    },
    "comments-title": {
        "fontSize": 22,
        "fontWeight": "bold",
        "marginBottom": 25,
        "marginTop": 0,
        "textTransform": "uppercase"
    },
    "comments": {
        "float": "left",
        "display": "inline",
        "width": "100%"
    },
    "commentlist li": {
        "backgroundColor": "#fff",
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
        "display": "inline",
        "float": "left",
        "marginBottom": 10,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "position": "relative",
        "width": "100%"
    },
    "media-left": {
        "float": "left",
        "marginRight": 10
    },
    "commentlist media-object": {
        "display": "block",
        "height": 60,
        "marginRight": 10,
        "width": 60
    },
    "comments-date": {
        "color": "#888",
        "display": "block",
        "fontSize": 14,
        "marginBottom": 10
    },
    "reply-btn": {
        "color": "#ccc",
        "display": "inline-block",
        "fontSize": 15,
        "lineHeight": 16,
        "paddingTop": 8,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "position": "absolute",
        "right": 10,
        "textTransform": "uppercase",
        "top": 10,
        "MozTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "WebkitTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "reply-btn:before": {
        "content": "'\\f112'",
        "fontFamily": "FontAwesome",
        "left": 0,
        "marginRight": 3
    },
    "reply-btn:hover": {
        "textDecoration": "none",
        "color": "#fff",
        "outline": "none"
    },
    "children": {
        "marginLeft": 50
    },
    "author-comments author-name": {
        "color": "#fff"
    },
    "author-comments comments-date": {
        "color": "#222"
    },
    "author-comments p": {
        "color": "#fff"
    },
    "author-comments reply-btn": {
        "color": "#222"
    },
    "author-comments reply-btn:hover": {
        "color": "#222"
    },
    "comments-pagination-area": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "comments-pagination": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "textAlign": "left"
    },
    "comments-pagination li": {
        "display": "inline-block"
    },
    "comments-pagination li a": {
        "background": "#fff none repeat scroll 0 0",
        "border": "1px solid #fff",
        "color": "#ccc",
        "display": "inline-block",
        "fontSize": 15,
        "fontWeight": "bold",
        "height": 30,
        "lineHeight": 15,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "textAlign": "center",
        "width": 30,
        "MozTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "WebkitTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "comments-pagination li a:hover": {
        "textDecoration": "none",
        "outline": "none"
    },
    "commentlist>li:last-child": {
        "marginBottom": 0
    },
    "author-name": {
        "fontSize": 25,
        "marginBottom": 0
    },
    "respond": {
        "background": "#fff none repeat scroll 0 0",
        "display": "inline",
        "float": "left",
        "marginTop": 30,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 30,
        "paddingLeft": 20,
        "width": "100%"
    },
    "respond reply-title": {
        "fontSize": 25
    },
    "respond comment-notes": {
        "fontSize": 15
    },
    "respond required": {
        "color": "red"
    },
    "respond label": {
        "display": "block"
    },
    "respond input[type=\"text\"]": {
        "backgroundColor": "#f8f8f8",
        "color": "#555",
        "marginBottom": 10,
        "height": 35,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "width": "65%",
        "border": "none",
        "outline": "none",
        "MozTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "WebkitTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "respond input[type=\"email\"]": {
        "backgroundColor": "#f8f8f8",
        "color": "#555",
        "marginBottom": 10,
        "height": 35,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "width": "65%",
        "border": "none",
        "outline": "none",
        "MozTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "WebkitTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "respond input[type=\"url\"]": {
        "backgroundColor": "#f8f8f8",
        "color": "#555",
        "marginBottom": 10,
        "height": 35,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "width": "65%",
        "border": "none",
        "outline": "none",
        "MozTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "WebkitTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "respond textarea": {
        "backgroundColor": "#f8f8f8",
        "border": "none",
        "color": "#555",
        "marginBottom": 5,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "outline": "none",
        "width": "100%"
    },
    "form-submit input": {
        "backgroundColor": "#fff",
        "border": "1px solid #ccc",
        "color": "#000",
        "fontSize": 16,
        "marginTop": 5,
        "paddingTop": 8,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "MozTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "WebkitTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "custom-pagination li a": {
        "lineHeight": 30
    },
    "single-sidebar": {
        "display": "inline",
        "float": "left",
        "width": "100%"
    },
    "single-sidebar h3": {
        "color": "#343434",
        "fontSize": 25,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0,
        "textAlign": "left",
        "textTransform": "uppercase"
    },
    "recent-news": {
        "borderBottom": "1px solid #f1f1f1",
        "display": "inline",
        "float": "left",
        "marginBottom": 20,
        "paddingBottom": 20,
        "width": "100%"
    },
    "recent-news:last-child": {
        "borderBottom": "0 none",
        "marginBottom": 0,
        "paddingBottom": 0
    },
    "recent-img": {
        "height": 70,
        "width": "25%",
        "display": "inline",
        "float": "left"
    },
    "recent-img img": {
        "width": "100%",
        "height": "100%"
    },
    "recent-body": {
        "display": "inline",
        "float": "right",
        "width": "70%"
    },
    "recent-body h4": {
        "color": "#444",
        "fontSize": 18,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 20,
        "textTransform": "uppercase"
    },
    "recent-body h4 a": {
        "color": "#343434"
    },
    "recent-body p": {
        "fontSize": 14,
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "cat-item": {
        "borderBottom": "1px solid #f1f1f1"
    },
    "single-sidebar ul": {
        "marginTop": 0
    },
    "single-sidebar ul li a": {
        "display": "block",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "cat-item a": {
        "display": "block",
        "fontSize": 14,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "textTransform": "uppercase"
    },
    "archives li a": {
        "borderBottom": "1px solid #f1f1f1",
        "fontSize": 14,
        "textTransform": "uppercase"
    },
    "tagcloud": {
        "float": "left",
        "display": "inline",
        "width": "100%"
    },
    "tagcloud a": {
        "border": "1px solid #f1f1f1",
        "fontSize": 14,
        "lineHeight": 3.7,
        "marginTop": 0,
        "marginRight": 3,
        "marginBottom": 7,
        "marginLeft": 0,
        "paddingTop": 8,
        "paddingRight": 13,
        "paddingBottom": 8,
        "paddingLeft": 13,
        "WebkitTransition": "all 0.5s ease 0s",
        "OTransition": "all 0.5s ease 0s",
        "transition": "all 0.5s ease 0s"
    },
    "tagcloud a:hover": {
        "color": "#fff",
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
    },
    "tagcloud a:focus": {
        "color": "#fff",
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
    },
    "blog-navigation": {
        "display": "inline",
        "float": "left",
        "marginTop": 22,
        "width": "100%"
    },
    "blog-navigation-left": {
        "display": "inline",
        "float": "left"
    },
    "blog-navigation-right": {
        "display": "inline",
        "float": "right"
    },
    "prev-post": {
        "border": "1px solid #ccc",
        "color": "#222",
        "display": "inline-block",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "WebkitTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "next-post": {
        "border": "1px solid #ccc",
        "color": "#222",
        "display": "inline-block",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "WebkitTransition": "all 0.5s",
        "OTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "prev-post:hover": {
        "color": "#fff",
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
    },
    "prev-post:focus": {
        "color": "#fff",
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
    },
    "next-post:hover": {
        "color": "#fff",
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
    },
    "next-post:focus": {
        "color": "#fff",
        "boxShadow": "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
    }
});