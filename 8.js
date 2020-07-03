
let money = Number(prompt("Enter Money")) 
let แบงค์พัน = 0;
let แบงค์ห้าร้อย = 0;
let แบงค์ร้อย = 0;
let แบงค์ห้าสิบ = 0;
let แบงค์ยี่สิบ= 0;
let เหรียญสิบ= 0;
let เหรียญห้า = 0;
let เหรียญสอง = 0;
let เหรียญบาท = 0;

function toChange(money){
for (let i=money; money-1000>=0; i++){
        money-=1000
        แบงค์พัน++
    }
for (let i=money; money-500>=0; i++){
        money-=500
        แบงค์ห้าร้อย++
    }
for (let i=money; money-100>=0; i++){
        money-=100
        แบงค์ร้อย++
    }
for (let i=money; money-50>=0; i++){
        money-=50
        แบงค์ห้าสิบ++ 
    }
for (let i=money; money-20>=0; i++){
        money-=20
        แบงค์ยี่สิบ++ 
    } 
    for (let i=money; money-10>=0; i++){
        money-=10
        เหรียญสิบ++ 
    }
    for (let i=money; money-5>=0; i++){
        money-=5
        เหรียญห้า++ 
    }
    for (let i=money; money-2>=0; i++){
        money-=2
        เหรียญสอง++ 
    }
    for (let i=money; money-1>=0; i++){
        money-=1
        เหรียญบาท++ 
    }
    return (`แบงค์พัน:${แบงค์พัน}, แบงค์ห้าร้อย: ${แบงค์ห้าร้อย}, แบงค์ร้อย: ${แบงค์ร้อย}, แบงค์ห้าสิบ: ${แบงค์ห้าสิบ }
    ,แบงค์ยี่สิบ: ${แบงค์ยี่สิบ}, เหรียญสิบ: ${เหรียญสิบ}, เหรียญห้า: ${เหรีย์ห้า}, เหรียญสอง: ${เหรียญสอง}, เหรียญบาท: ${เหรียญบาท}`)
}
toChange(money);
