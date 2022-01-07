var images = ["https://i.postimg.cc/8cQfyLBJ/Mom.jpg", "https://i.postimg.cc/VvhfGwc7/Dad.jpg", "https://i.postimg.cc/mgfRt8ZF/Me.jpg"];
var names = ["Sasmita Sahoo(Mom)", "Anil Kumar Sahu(Dad)", "Ananya Anindita(Me)"];
var i = 0;

function update() {
    i++;
    var numbers_of_family_member_in_array = 2
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }

    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];

    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}