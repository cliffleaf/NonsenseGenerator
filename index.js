function getTextToInject() {
    contents = document.querySelectorAll("input");
    contentObject = contents[0].value.trim();
    contentAction = contents[1].value.trim();

    if (contentObject == "" || contentAction == "") {
        return "";
    }

    paragraph1 = `${contentObject}${contentAction}是怎么回事呢？${contentObject}相信大家都很熟悉，但是${contentAction}是怎么回事呢？下面就让小编带大家一起了解吧。`
    paragraph2 = `${contentObject}${contentAction}，其实就是${contentObject}${contentAction}。那么${contentObject}为什么会${contentAction}呢，相信大家都很好奇是怎么回事。大家可能会感到很惊讶，${contentObject}怎么会${contentAction}呢？`
    paragraph3 = `但事实就是这样，小编也感到非常惊讶。那么这就是关于${contentObject}${contentAction}的事情了，大家有没有觉得很神奇呢？`
    paragraph4 = "看了今天的内容，大家有什么想法呢？欢迎在评论区告诉小编一起讨论哦。";

    var finalContent = paragraph1.concat("\n\n", paragraph2).concat("\n\n", paragraph3).concat("\n\n", paragraph4);

    return finalContent;
}


function buttonListener() {
    finalContent = getTextToInject();
    if (finalContent == "") {
        document.getElementById("error-msg").innerText = "主题或事件不能为空";
        document.querySelector("textarea").value = "";
    }
    else {
        document.getElementById("error-msg").innerText = "";
        document.querySelector("textarea").value = finalContent; // innerText does not work
    }
}


generateButton = document.getElementsByClassName("btn")[0];
generateButton.addEventListener("click", buttonListener);
