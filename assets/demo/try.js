
const url = 'https://corona.ps/API/governorates'

var response = $.ajax({
    type: "GET",
    url: url,
    async: false
}).responseText;

var data = JSON.parse(response);
var Gov = [];
for(var i = 0;i<data.data.Governorates.length;i++){
    Gov.push(data.data.Governorates[i].Name)
};

var cases = [];
for(var i = 0;i<data.data.Governorates.length;i++){
    cases.push(data.data.Governorates[i].Cases)
};

