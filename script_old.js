const fileInput = document.querySelector("input")
const downloadBtn = document.querySelector("button")

downloadBtn.addEventListener("click", (e) => {
    e.preventDefault(); // ignore reload  while clicking the dowload button
    console.log('btn is clicked')
    downloadBtn.innerText= "Downloding file..."
    fetchFile(fileInput.value)

})


function fetchFile(url) {

    // fetching file & returning response as blob
    fetch(url).then(res => res.blob()).then(file => {
        // URL.createObjURL creates a url of passed object
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;   // passing tempUrl as href value of <a> tag..
        aTag.download = url.replace(/^.*[\\\/]/, '');
        // passing file last name & extention as  download value of <a> tag..
        document.body.appendChild(aTag)  // add <a> tag inside the body 
        console.log(tempUrl);
        aTag.click() // click <a> tag so that download the file 
        aTag.remove() // click <a>  tag once file will be downloaded 
        URL.revokeObjectURL(tempUrl); 
        downloadBtn.innerText = "Download File";

    }).catch(err => {
        console.log(err)
    })

}