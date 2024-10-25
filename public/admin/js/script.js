const buttonStatus=document.querySelectorAll("[button-status]");

//button trả về mảng
if(buttonStatus.length>0){
    let url=new URL(window.location.href);

    buttonStatus.forEach((button)=>{
        button.addEventListener("click",()=>{
            const status=button.getAttribute("button-status");  //lấy value của button-status

            if(status){
                url.searchParams.set("status",status);  //Đặt lại status trên url
            }
            else{
                url.searchParams.delete("status");
            }
           
            window.location.href= url.href;
            console.log(url.href);
            
            
        })
    })
};
//End Button


//Form Search
const formSearch=document.querySelector("#form-search");
if(formSearch){
    let url=new URL(window.location.href);

    formSearch.addEventListener("submit",(e)=>{
        e.preventDefault();         //sau đó phải cài thủ công 
        const keyword=e.target.elements.keyword.value;

        if(keyword){
            url.searchParams.set("keyword",keyword);    //nếu ko có key thì sẽ tự tạo mới
        } else{
            url.searchParams.delete("keyword");
        }
        window.location.href=url.href;
     });
}
//Button Pagination
const buttonPagiantion=document.querySelectorAll("[button-pagination]");
if(buttonPagiantion){
    let url=new URL(window.location.href);
    buttonPagiantion.forEach((button)=>{
        button.addEventListener("click",()=>{
            const page=button.getAttribute("button-pagination");

            url.searchParams.set("page",page);

            window.location.href=url.href;
                })   
    });
    //B1: Lấy giá trị page ở thẻ button
    //B2: Set giá trị đấy lên page trên url
    //B3: Hiển thị sản phẩm bằng lấy giá trị của page = req
}

//End Button Pagination

//checkbox-mutil
const checkboxMulti=document.querySelector("[checkbox-multi]");
if(checkboxMulti){
    const inputCheckAll=checkboxMulti.querySelector("input[name='checkall']");
    const inputsid=checkboxMulti.querySelectorAll("input[name='id']");
    inputCheckAll.addEventListener("click",()=>{
        if(inputCheckAll.checked){
            inputsid.forEach(input=>{
                input.checked=true;
            });
        }
        else{
            inputsid.forEach(input=>{
                input.checked=false;
            });
        }
    })
    // logic bỏ tick 1 cái thì checkall bỏ tick
    inputsid.forEach(input=>{
        input.addEventListener("click",()=>{
            const countChecked=document.querySelectorAll("input[name='id']:checked").length;
            if( countChecked==inputsid.length){
                inputCheckAll.checked=true;
            }
            else inputCheckAll.checked=false;
        })
    });


}
//Form change multi

const formChangeMulti=document.querySelector("[form-change-multi]");
if(formChangeMulti){
    formChangeMulti.addEventListener("submit",(e)=>{
        e.preventDefault();

        const checkboxMulti=document.querySelector("[checkbox-multi]");
        const inputsChecked=checkboxMulti.querySelectorAll("input[name='id']:checked");
        const typeChange=e.target.elements.type.value;
        console.log(typeChange);
        if(typeChange=="delete"){
            const isConfirm=confirm("Sure?");
            if(!isConfirm){
                return;
            }
        }

        if(inputsChecked.length>0){
            let ids=[];
            const inputIds=formChangeMulti.querySelector("input[name='ids']");// Ô nhập của form
            inputsChecked.forEach(input=>{
            const id=input.value;
            if(typeChange == "change-position"){
                const position=input.closest("tr").querySelector("input[name='position']").value;
                const id1=`${id}-${position}`;
                ids.push(id1);
            }
                else {ids.push(id);}
        });
        inputIds.value=ids.join(", ");
        formChangeMulti.submit();
}
    else{
        alert("chon ban ghi");
    

}})
}
    
//Delete item

    const buttonDelete=document.querySelectorAll("[button-delete]");
    if(buttonDelete.length>0){
        const formDeleteItem=document.querySelector("#form-delete-status")
        const path=formDeleteItem.getAttribute("data-path");


        buttonDelete.forEach((button)=>{
            button.addEventListener("click",()=>{
                const isConfirm=confirm("Are u sure");
                if(isConfirm){
                    const id=button.getAttribute("data-id");
                    const action=`${path}/${id}?_method=DELETE`;
                    formDeleteItem.action=action;
                    formDeleteItem.submit();
                }
            });
        });
    }


//preview upload image
const uploadImage=document.querySelector("[upload-image]");
if(uploadImage){
    const uploadImageInput=document.querySelector("[upload-image-input]");
    const uploadImagePreview=document.querySelector("[upload-image-preview]");
    
    uploadImageInput.addEventListener("change",e=>{
        // console.log(e);
        const [file]=uploadImageInput.files;//(e.target.file)//lấy object thứ 0 của file
        console.log(file);
        if(file){
            uploadImagePreview.src=URL.createObjectURL(file);
        }
    });
}

//Sort
const divSort=document.querySelector("[sort]");
    if(divSort){
        let url=new URL(window.location.href);
        const sortSelect=divSort.querySelector("[sort-select]");
        sortSelect.addEventListener("change",e=>{
            const [sortKey,sortValue]=e.target.value.split("-");
            url.searchParams.set("sortKey",sortKey);
            url.searchParams.set("sortValue",sortValue);
           window.location.href=url.href;

        });
     
    //Đặt mặc định giá trị thẻ Select đc chọn
    const sortKey=url.searchParams.get("sortKey");
    const sortValue=url.searchParams.get("sortValue");
    if(sortKey&& sortValue){
    const option=divSort.querySelector(`option[value=${sortKey}-${sortValue}]`);
    option.selected=true;
    }
    }
// onchange khac gi vs addEvent
// the input co nhung thuoc tinh gi console log(e)
