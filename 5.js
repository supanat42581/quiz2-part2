let inputDay = "12-13-1996"
let arrayText = inputDay.split("-")
let year = Number(arrayText[2]) + 543
let month = ""
let day = arrayText[0]
let result = ""
switch (arrayText[1]) {
    case "1":
        month = "มกราคม"; break;
    case "2":
        if (arrayText[0] >=28) result = "error"
        month = "กุมภาพันธ์"; break;
    case "3":
        month = "มีนาคม"; break;
    case "4":
        if (arrayText[0] === "31") result = "error"
        month = "เมษายน";break;
    case "5":
        month = "พฤษภาคม";break;
    case "6":
        if (arrayText[0] === "31") result = "error"
        month = "มิถุนายน"; break;  
    case "7":
        month = "กรกฎาคม"; break;
    case "8":
        month = "สิงหาคม"; break;
    case "9":
        if (arrayText[0] === "31") result = "error"
        month = "กันยายน"; break;
    case "10":
        month = "ตุลาคม"; break;
    case "11":
        if (arrayText[0] === "31") result = "error"
        month = "พฤศจิกายน"; break;
    case "12":
        month = "ธันวาคม"; break;
    default:
        result = "error"
}
function changeStringToThaiDate() {
    if (result === "error") {
        console.log("error")
    } else {
        console.log(`วันที่ ${day} เดือน${month} พ.ศ. ${year}`)
    }
    return result
}
changeStringToThaiDate()




