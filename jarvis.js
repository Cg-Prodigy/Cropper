const p_pic=document.getElementById("p_image");
const p_modal = document.getElementById("imageCropper");
const p_img=document.getElementById("prev-img")
const modal=new bootstrap.Modal(p_modal);
let cropper;
let image;
p_pic.addEventListener("change",(e)=>{
    cropImage(e.target.files[0]);
})

function cropImage(file){
    if (file){
        let aspect_ratio;
        let reader=new FileReader();
        reader.addEventListener("load",(e)=>{
            if (cropper){
                cropper.destroy();
            }
            p_img.setAttribute("src",e.target.result);
            cropper=new Cropper(p_img,{
                aspectRatio:0,
            })

            modal.show(); 
        });
        reader.readAsDataURL(file);
    }

}
