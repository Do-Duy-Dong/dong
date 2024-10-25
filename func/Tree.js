let cnt=0;
function createTree(arr,parentId=""){
    const tree=[];
    arr.forEach(item => {
        if(item.parent_id==parentId){
            cnt++;
            const newItem=item;
            newItem.index=cnt;
            const children=createTree(arr,item._id);
            if(children.length>0){
                newItem.children=children;
            }
            tree.push(newItem);
        }
    });
    return tree;
}

module.exports=(arr)=>{
    cnt=0;
    const tree=createTree(arr);
    return tree
}

