module.exports=(req,objectPage,totalProduct)=>{
    if(req.page){
        objectPage.currentPage=parseInt(req.page);
       }

       objectPage.skip=(objectPage.currentPage-1)*objectPage.limitItem;
         
       objectPage.totalPage= Math.ceil(totalProduct/objectPage.limitItem);
   
       return objectPage;
}