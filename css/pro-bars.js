import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "pro-bar-container": {
        "MozBoxSizing": "content-box",
        "WebkitBoxSizing": "content-box",
        "boxSizing": "content-box",
        "width": "100%",
        "height": 15,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "border": "2px solid #222",
        "WebkitBorderRadius": 20,
        "MozBorderRadius": 20,
        "borderRadius": 20,
        "background": "#222",
        "overflow": "hidden"
    },
    "pro-bar-containercolor-turquoise": {
        "borderColor": "#1abc9c",
        "background": "#1abc9c"
    },
    "pro-bar-containercolor-green-sea": {
        "borderColor": "#16a085",
        "background": "#16a085"
    },
    "pro-bar-containercolor-emerald": {
        "borderColor": "#2ecc71",
        "background": "#2ecc71"
    },
    "pro-bar-containercolor-nephritis": {
        "borderColor": "#27ae60",
        "background": "#27ae60"
    },
    "pro-bar-containercolor-peter-river": {
        "borderColor": "#3498db",
        "background": "#3498db"
    },
    "pro-bar-containercolor-belize-hole": {
        "borderColor": "#2980b9",
        "background": "#2980b9"
    },
    "pro-bar-containercolor-amethyst": {
        "borderColor": "#9b59b6",
        "background": "#9b59b6"
    },
    "pro-bar-containercolor-wisteria": {
        "borderColor": "#8e44ad",
        "background": "#8e44ad"
    },
    "pro-bar-containercolor-wet-asphalt": {
        "borderColor": "#34495e",
        "background": "#34495e"
    },
    "pro-bar-containercolor-midnight-blue": {
        "borderColor": "#2c3e50",
        "background": "#2c3e50"
    },
    "pro-bar-containercolor-sun-flower": {
        "borderColor": "#f1c40f",
        "background": "#f1c40f"
    },
    "pro-bar-containercolor-orange": {
        "borderColor": "#f39c12",
        "background": "#f39c12"
    },
    "pro-bar-containercolor-carrot": {
        "borderColor": "#e67e22",
        "background": "#e67e22"
    },
    "pro-bar-containercolor-pumpkin": {
        "borderColor": "#d35400",
        "background": "#d35400"
    },
    "pro-bar-containercolor-alizarin": {
        "borderColor": "#e74c3c",
        "background": "#e74c3c"
    },
    "pro-bar-containercolor-pomegranate": {
        "borderColor": "#c0392b",
        "background": "#c0392b"
    },
    "pro-bar-containercolor-clouds": {
        "borderColor": "#ecf0f1",
        "background": "#ecf0f1"
    },
    "pro-bar-containercolor-silver": {
        "borderColor": "#bdc3c7",
        "background": "#bdc3c7"
    },
    "pro-bar-containercolor-concrete": {
        "borderColor": "#95a5a6",
        "background": "#95a5a6"
    },
    "pro-bar-containercolor-asbestos": {
        "borderColor": "#7f8c8d",
        "background": "#7f8c8d"
    },
    "pro-bar": {
        "MozBoxSizing": "content-box",
        "WebkitBoxSizing": "content-box",
        "boxSizing": "content-box",
        "width": "0%",
        "height": 15,
        "WebkitBorderRadius": 20,
        "MozBorderRadius": 20,
        "borderRadius": 20,
        "background": "#444"
    },
    "pro-barbar-100": {
        "width": "100%"
    },
    "pro-barbar-99": {
        "width": "99%"
    },
    "pro-barbar-98": {
        "width": "98%"
    },
    "pro-barbar-97": {
        "width": "97%"
    },
    "pro-barbar-96": {
        "width": "96%"
    },
    "pro-barbar-95": {
        "width": "95%"
    },
    "pro-barbar-94": {
        "width": "94%"
    },
    "pro-barbar-93": {
        "width": "93%"
    },
    "pro-barbar-92": {
        "width": "92%"
    },
    "pro-barbar-91": {
        "width": "91%"
    },
    "pro-barbar-90": {
        "width": "90%"
    },
    "pro-barbar-89": {
        "width": "89%"
    },
    "pro-barbar-88": {
        "width": "88%"
    },
    "pro-barbar-87": {
        "width": "87%"
    },
    "pro-barbar-86": {
        "width": "86%"
    },
    "pro-barbar-85": {
        "width": "85%"
    },
    "pro-barbar-84": {
        "width": "84%"
    },
    "pro-barbar-83": {
        "width": "83%"
    },
    "pro-barbar-82": {
        "width": "82%"
    },
    "pro-barbar-81": {
        "width": "81%"
    },
    "pro-barbar-80": {
        "width": "80%"
    },
    "pro-barbar-79": {
        "width": "79%"
    },
    "pro-barbar-78": {
        "width": "78%"
    },
    "pro-barbar-77": {
        "width": "77%"
    },
    "pro-barbar-76": {
        "width": "76%"
    },
    "pro-barbar-75": {
        "width": "75%"
    },
    "pro-barbar-74": {
        "width": "74%"
    },
    "pro-barbar-73": {
        "width": "73%"
    },
    "pro-barbar-72": {
        "width": "72%"
    },
    "pro-barbar-71": {
        "width": "71%"
    },
    "pro-barbar-70": {
        "width": "70%"
    },
    "pro-barbar-69": {
        "width": "69%"
    },
    "pro-barbar-68": {
        "width": "68%"
    },
    "pro-barbar-67": {
        "width": "67%"
    },
    "pro-barbar-66": {
        "width": "66%"
    },
    "pro-barbar-65": {
        "width": "65%"
    },
    "pro-barbar-64": {
        "width": "64%"
    },
    "pro-barbar-63": {
        "width": "63%"
    },
    "pro-barbar-62": {
        "width": "62%"
    },
    "pro-barbar-61": {
        "width": "61%"
    },
    "pro-barbar-60": {
        "width": "60%"
    },
    "pro-barbar-59": {
        "width": "59%"
    },
    "pro-barbar-58": {
        "width": "58%"
    },
    "pro-barbar-57": {
        "width": "57%"
    },
    "pro-barbar-56": {
        "width": "56%"
    },
    "pro-barbar-55": {
        "width": "55%"
    },
    "pro-barbar-54": {
        "width": "54%"
    },
    "pro-barbar-53": {
        "width": "53%"
    },
    "pro-barbar-52": {
        "width": "52%"
    },
    "pro-barbar-51": {
        "width": "51%"
    },
    "pro-barbar-50": {
        "width": "50%"
    },
    "pro-barbar-49": {
        "width": "49%"
    },
    "pro-barbar-48": {
        "width": "48%"
    },
    "pro-barbar-47": {
        "width": "47%"
    },
    "pro-barbar-46": {
        "width": "46%"
    },
    "pro-barbar-45": {
        "width": "45%"
    },
    "pro-barbar-44": {
        "width": "44%"
    },
    "pro-barbar-43": {
        "width": "43%"
    },
    "pro-barbar-42": {
        "width": "42%"
    },
    "pro-barbar-41": {
        "width": "41%"
    },
    "pro-barbar-40": {
        "width": "40%"
    },
    "pro-barbar-39": {
        "width": "39%"
    },
    "pro-barbar-38": {
        "width": "38%"
    },
    "pro-barbar-37": {
        "width": "37%"
    },
    "pro-barbar-36": {
        "width": "36%"
    },
    "pro-barbar-35": {
        "width": "35%"
    },
    "pro-barbar-34": {
        "width": "34%"
    },
    "pro-barbar-33": {
        "width": "33%"
    },
    "pro-barbar-32": {
        "width": "32%"
    },
    "pro-barbar-31": {
        "width": "31%"
    },
    "pro-barbar-30": {
        "width": "30%"
    },
    "pro-barbar-29": {
        "width": "29%"
    },
    "pro-barbar-28": {
        "width": "28%"
    },
    "pro-barbar-27": {
        "width": "27%"
    },
    "pro-barbar-26": {
        "width": "26%"
    },
    "pro-barbar-25": {
        "width": "25%"
    },
    "pro-barbar-24": {
        "width": "24%"
    },
    "pro-barbar-23": {
        "width": "23%"
    },
    "pro-barbar-22": {
        "width": "22%"
    },
    "pro-barbar-21": {
        "width": "21%"
    },
    "pro-barbar-20": {
        "width": "20%"
    },
    "pro-barbar-19": {
        "width": "19%"
    },
    "pro-barbar-18": {
        "width": "18%"
    },
    "pro-barbar-17": {
        "width": "17%"
    },
    "pro-barbar-16": {
        "width": "16%"
    },
    "pro-barbar-15": {
        "width": "15%"
    },
    "pro-barbar-14": {
        "width": "14%"
    },
    "pro-barbar-13": {
        "width": "13%"
    },
    "pro-barbar-12": {
        "width": "12%"
    },
    "pro-barbar-11": {
        "width": "11%"
    },
    "pro-barbar-10": {
        "width": "10%"
    },
    "pro-barbar-9": {
        "width": "9%"
    },
    "pro-barbar-8": {
        "width": "8%"
    },
    "pro-barbar-7": {
        "width": "7%"
    },
    "pro-barbar-6": {
        "width": "6%"
    },
    "pro-barbar-5": {
        "width": "5%"
    },
    "pro-barbar-4": {
        "width": "4%"
    },
    "pro-barbar-3": {
        "width": "3%"
    },
    "pro-barbar-2": {
        "width": "2%"
    },
    "pro-barbar-1": {
        "width": "1%"
    },
    "pro-barbar-0": {
        "width": "0%"
    },
    "pro-barcolor-turquoise": {
        "background": "#1abc9c"
    },
    "pro-barcolor-green-sea": {
        "background": "#16a085"
    },
    "pro-barcolor-emerald": {
        "background": "#2ecc71"
    },
    "pro-barcolor-nephritis": {
        "background": "#27ae60"
    },
    "pro-barcolor-peter-river": {
        "background": "#3498db"
    },
    "pro-barcolor-belize-hole": {
        "background": "#2980b9"
    },
    "pro-barcolor-amethyst": {
        "background": "#9b59b6"
    },
    "pro-barcolor-wisteria": {
        "background": "#8e44ad"
    },
    "pro-barcolor-wet-asphalt": {
        "background": "#34495e"
    },
    "pro-barcolor-midnight-blue": {
        "background": "#2c3e50"
    },
    "pro-barcolor-sun-flower": {
        "background": "#f1c40f"
    },
    "pro-barcolor-orange": {
        "background": "#f39c12"
    },
    "pro-barcolor-carrot": {
        "background": "#e67e22"
    },
    "pro-barcolor-pumpkin": {
        "background": "#d35400"
    },
    "pro-barcolor-alizarin": {
        "background": "#e74c3c"
    },
    "pro-barcolor-pomegranate": {
        "background": "#c0392b"
    },
    "pro-barcolor-clouds": {
        "background": "#ecf0f1"
    },
    "pro-barcolor-silver": {
        "background": "#bdc3c7"
    },
    "pro-barcolor-concrete": {
        "background": "#95a5a6"
    },
    "pro-barcolor-asbestos": {
        "background": "#7f8c8d"
    },
    "pro-bar-candy": {
        "width": "100%",
        "height": 15,
        "WebkitBorderRadius": 20,
        "MozBorderRadius": 20,
        "borderRadius": 20,
        "backgroundImage": "linear-gradient(-45deg, rgba(255, 255, 255, 0.25) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 75%, transparent 75%, transparent)",
        "backgroundRepeat": "repeat-x",
        "backgroundSize": "30px 30px"
    },
    "pro-bar-candycandy-ltr": {
        "WebkitAnimation": "progressStripeLTR .6s linear infinite",
        "MozAnimation": "progressStripeLTR .6s linear infinite",
        "MsAnimation": "progressStripeLTR .6s linear infinite",
        "OAnimation": "progressStripeLTR .6s linear infinite",
        "animation": "progressStripeLTR .6s linear infinite"
    },
    "pro-bar-candycandy-rtl": {
        "WebkitAnimation": "progressStripeRTL .6s linear infinite",
        "MozAnimation": "progressStripeRTL .6s linear infinite",
        "MsAnimation": "progressStripeRTL .6s linear infinite",
        "OAnimation": "progressStripeRTL .6s linear infinite",
        "animation": "progressStripeRTL .6s linear infinite"
    }
});