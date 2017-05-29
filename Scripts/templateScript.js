var high = ""

function selected()
{
    let elem = document.activeElement
    
    if(elem.id === "body")
    {
        high = elem.value.substring(elem.selectionStart,
                                    elem.selectionEnd); 
    }

    else
    {
        high = ""
    }
}

function highlight()
{
    let body = document.getElementById("body")
    let val = body.value
    body.value = val.replace(high, "&ltstrong&gt"+high+"&lt/strong&gt")
}


function getTemplate()
{
    let template = {};
    
    template["Body"] = document.getElementById("body").value.split("\n");
    template["CC"] = document.getElementById("cc").value;
    template["Subject"] = document.getElementById("sub").value;
    body = template["body"]
    document.getElementById("template").innerHTML = JSON.stringify(template)

    window.location = "#template"
}

function seeTemplate()
{
    let values = document.getElementById("body").value.split("\n")
    let i = 0
    let len = values.length
    let body = ""
    
    for(i = 0; i < len; i++)
    {
        let temp = (values[i].replace(/&lt/g,"<").replace(/&gt/g,">") + "<br/><br/>")
        body += temp
    }
    
    document.getElementById("templateLook").innerHTML = body
    window.location = "#templateLook"
}