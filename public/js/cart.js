//Thay doi so luong san pham trong gio hang
const element= document.querySelectorAll(`input[name="quantity"]`);
if(element.length>0){
    element.forEach(input=> {
        input.addEventListener("change",(e)=>{
            const productId=input.getAttribute("item-id");
            const value=e.target.value;
            window.location.href=`/cart/update/${productId}/${value}`;
        })
    });
}
