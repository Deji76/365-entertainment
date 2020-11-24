function showUpdatedContent(){
    select_type();
    let search_str = document.getElementById('mySearch').value.trim().toLowerCase();
    let titles = document.getElementsByClassName('title');
    for (let t=0;t<titles.length;t++){
        let title = titles[t].innerHTML.split('<br>')[0].trim().toLowerCase();
        if(title.indexOf(search_str)===-1){
            titles[t].closest('div.container').style.display='none';
        }
        // else{
        //     titles[t].closest('div.container').style.display='block';
        // }
    }
}
function select_type(){
    let search_str = document.getElementById('mySearch').value.trim().toLowerCase();
    let s_option = document.getElementById('movies').value;
    console.log(s_option);
    if(s_option==='All' || s_option==='Genre'){
        let ms = document.getElementsByClassName('container');
        for(let i=0;i<ms.length;i++){
            ms[i].style.display='flex';
        }
    }
    else if(s_option==='Action'){
        let ms = document.getElementsByClassName('action');
        for(let i=0;i<ms.length;i++){
            ms[i].style.display='flex';
        }
        ms = document.getElementsByClassName('drama');
        for(let i=0;i<ms.length;i++){
            ms[i].style.display='none';
        }
        ms = document.getElementsByClassName('sci_fi');
        for(let i=0;i<ms.length;i++){
            ms[i].style.display='none';
        }
    }
    else if(s_option==='Drama'){
        let ms = document.getElementsByClassName('action');
        for(let i=0;i<ms.length;i++){
            ms[i].style.display='none';
        }
        ms = document.getElementsByClassName('drama');
        for(let i=0;i<ms.length;i++){
            ms[i].style.display='flex';
        }
        ms = document.getElementsByClassName('sci_fi');
        for(let i=0;i<ms.length;i++){
            ms[i].style.display='none';
        }

    }
    else if(s_option==='Sci fi'){
        let ms = document.getElementsByClassName('action');
        for(let i=0;i<ms.length;i++){
            ms[i].style.display='none';
        }
        ms = document.getElementsByClassName('drama');
        for(let i=0;i<ms.length;i++){
            ms[i].style.display='none';
        }
        ms = document.getElementsByClassName('sci_fi');
        for(let i=0;i<ms.length;i++){
            ms[i].style.display='flex';
        }

    }

    let titles = document.getElementsByClassName('title');
    for (let t=0;t<titles.length;t++){
        let title = titles[t].innerHTML.split('<br>')[0].trim().toLowerCase();
        if(title.indexOf(search_str)===-1){
            titles[t].closest('div.container').style.display='none';
        }
    }
}
