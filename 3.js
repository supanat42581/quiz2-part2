

function thaiTypeof( result ){
    if(typeof result == "string"){
        return "ข้อความ"
    }else if(typeof result == "object"){
        return "ออปเจ็คต์"
    }else if (typeof result == "number"){
        return "ตัวเลข"
    }
    }
 console.log(thaiTypeof("hello")); 
 console.log(thaiTypeof({})); 
 console.log(thaiTypeof(555)); 
