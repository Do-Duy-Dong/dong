const tablePermission=document.querySelector("[table-permission]");
if(tablePermission){

    //Gửi data checked lên sever
    const button=document.querySelector("[button-submit]");

    button.addEventListener("click",()=>{
        let per=[];
        const rows=tablePermission.querySelectorAll("[data-name]");
        rows.forEach(row=>{
            const name=row.getAttribute("data-name");
            const inputs= row.querySelectorAll("input");
            if(name=="id"){
                inputs.forEach(input=>{
                    const id=input.value;
                    per.push({
                        id:id,
                        permission:[]
                    })
                })
            } else{
                inputs.forEach((input,index)=>{
                    const check=input.checked;
                    if(check){
                        per[index].permission.push(name);
                    }
                })
                
            }                     
        });
        if(per.length>0){
            const formChange=document.querySelector("#form-change-permission");
            const inputPermission=formChange.querySelector(`input[name="permission"]`);
            inputPermission.value=JSON.stringify(per);
            formChange.submit();
        }
        // console.log(per);
    })
// GIữ nguyên trạng thái checked
const data=document.querySelector("[data-records]");
const record=JSON.parse(data.getAttribute("data-records"));

record.forEach((item,index)=>{
    const permissions=item.permission;
    permissions.forEach(permission=>{
        const div= tablePermission.querySelector(`[data-name=${permission}]`);
        const input=div.querySelectorAll("input")[index];
        input.checked=true;
    });
});
}