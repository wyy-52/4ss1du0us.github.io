document.querySelector("#poem_sentence")&&(document.querySelector("#poem_sentence").innerHTML="正在加载中...",document.querySelector("#poem_title").innerHTML="",document.querySelector("#poem_info").innerHTML=""),jinrishici.load((function(e){var n=document.querySelector("#poem_sentence"),t=document.querySelector("#poem_info"),o=document.querySelector("#poem_title"),r=e.data.content;r=r.substr(0,r.length-1),n&&t&&o&&setInterval((function(){n.innerHTML='<b style="color: #00C4B6; font-weight: normal">'+r+"</b>",o.innerHTML="《"+e.data.origin.title+"》",t.innerHTML=e.data.origin.dynasty+" · "+e.data.origin.author}),1e3)}));