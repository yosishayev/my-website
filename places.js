$(document).ready(function () {

    // Get the query parameters from the URL
    var searchParams = new URLSearchParams(window.location.search);

    // Extract the values from the query parameters
    var param1 = searchParams.get('param1');
    var param2 = searchParams.get('param2');


        $.ajax({
            type: 'GET',
            url: 'readPlace.php',
            data: { ulam: param1, loc: param2},
            success: function (response) {
                console.log(response);
                display_place(JSON.parse(response));
            },
            error: function (error) {
                console.log("failed");
            }
        });
});
//display places photos and details
function display_place(data) {
    let j = 0;
    let div = document.createElement("div");
    for (let i = 0; i < data.length / 3;i++) {
        let r_div = document.createElement("div");
        r_div.className = "sup_3div";
        for (let k = 0; k < 3; k++, j++) {
            console.log("j: " + j);
            console.log("k: " + k);
            if (j == data.length)
                break;
            console.log(data[j]);
            let photographer_div = document.createElement("div");
            photographer_div.className = "sup_div";

            let img = document.createElement("img");
            let a = document.createElement("a");
            a.href = data[j].url;
            a.appendChild(img);
            img.className = "sup_img";

            img.src = "images/" + data[j].profession + " " + data[j].location + "/" + data[j].full_name + ".jpg";
            let text_div = document.createElement("div");
            text_div.className = "sup_text";

            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            let p4 = document.createElement("p");
            p1.innerText = data[j].full_name;
            p2.innerText = data[j].location;
            p3.innerText = data[j].phone;
            p4.innerText = data[j].mail;
            r_div.appendChild(photographer_div);
            photographer_div.appendChild(a);
            photographer_div.appendChild(text_div);
            text_div.appendChild(p1);
            text_div.appendChild(p2);
            text_div.appendChild(p3);
            text_div.appendChild(p4);

        }
        div.appendChild(r_div);
        if (j == data.length)
            break;

    }
    document.getElementById("main").appendChild(div);
}