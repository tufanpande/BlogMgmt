


const data = [
    { name: "raktim" },
    { name: "rahul" },
    { name: "rojal" },
    { name: "prabin" },
    { name: "des" },
    { name: "tufan" },
    { name: "prativa" },
    { name: "anita" },
    { name: "ashish" },
    { name: "test" }
];


const paginate=({data, limit, page }) =>{
    const dataLength= data.length;
    const startIndex= (+page-1)*limit;
    const endIndex= startIndex+limit;
    const result= data.slice(startIndex,endIndex);
    return{data:result,page,limit,total:dataLength};

};
const result= paginate({limit:4,page:1,data});
console.log({result});
    