const NFTs=[]
function mintNFT (_name,_eyeColor,_shirtType,_bling){
    const NFT ={
        "name": _name,
        "eyeColor": _eyeColor,
        "shirtType":_shirtType,
        "bling":_bling
    }
    NFTs.push(NFT);
    console.log("Minted :" +_name);
}
function listNFTs(){
    for(let i=0;i<NFTs.length;i++){
        console.log("\nId :" +(i+1));
        console.log("name : \t\t" +NFTs[i].name);
        console.log("eyeColor :\t" +NFTs[i].eyeColor);
        console.log("shirttype :" +NFTs[i].shirtType);
        console.log("bling:\t\t" +NFTs[i].bling);
    }
}
function getTotalSupply(){
    console.log("\n" +NFTs.length);
}
mintNFT("bob","blue","hoodie","chain");
mintNFT("nainsi","blue","hoodie","chain");
mintNFT("sanu","blue","hoodie","chain");
mintNFT("anjali","blue","hoodie","chain");
listNFTs();
getTotalSupply();
