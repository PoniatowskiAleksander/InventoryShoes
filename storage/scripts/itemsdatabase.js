document.querySelector('.itemsdatabase .beforeLoadDiv button').addEventListener('click', function() {
    try {
        document.querySelector('.itemsdatabase .beforeLoadDiv input').files[0].name;
    }
    catch {
        document.querySelector('.error').innerHTML = 'select file!';
        document.querySelector('.error').style['color'] = 'red';
        document.querySelector('.error').style['font-size'] = '0.7em';
        return;
    }
   
    var filename = document.querySelector('.itemsdatabase .beforeLoadDiv input').files[0].name;
    console.log(filename);
    var filepath = 'storage/databases/' + filename;

    fetch(filepath)
        .then(response => response.json())
        .then(data => {
            var data = data.data;
            console.log(data);
            var shoes = data.shoes;
            document.querySelector('.itemsdatabase').innerHTML = document.querySelector('.itemsdatabaseCodeStorage').innerHTML;
            document.querySelector('.itemsdatabase').innerHTML += '<div class="itemsdatabaseMainDiv"></div>';
            addButtonListener()
            for (i of shoes) {
                console.log(i);
                let itemDiv = document.createElement('div');
                itemDiv.classList.add('item');

                // adding item info to itemDiv
                //img
                let itemImg = document.createElement('img');
                itemImg.setAttribute('src', i.ImgLink);
                let itemImgWrap = document.createElement('a');
                itemImgWrap.setAttribute('href', i.stockxLink);
                itemImgWrap.setAttribute('target', '_blank');
                // itemImg.addEventListener('click', function() {
                //     let temp = document.createElement('a');
                //     temp.setAttribute('href', link);
                //     temp.click();
                // })
                itemImgWrap.appendChild(itemImg);
                itemDiv.appendChild(itemImgWrap);

                //item name
                let itemName = document.createElement('div');
                itemName.classList.add('itemNameId');
                let itemNameHeader = document.createElement('header');
                itemNameHeader.innerHTML = 'Item Name';
                let itemNameValue = document.createElement('p');
                itemNameValue.innerHTML = i['Item name'];
                itemName.appendChild(itemNameHeader);
                itemName.appendChild(document.createElement('hr'));
                itemName.appendChild(itemNameValue);

                // item id
                let itemId = document.createElement('div');
                itemId.classList.add('itemNameId');
                let itemIdHeader = document.createElement('header');
                itemIdHeader.innerHTML = 'ID';
                let itemIdValue = document.createElement('p');
                itemIdValue.innerHTML = i.ID;
                itemId.appendChild(itemIdHeader);
                itemId.appendChild(document.createElement('hr'));
                itemId.appendChild(itemIdValue);

                itemDiv.append(itemName);
                itemDiv.append(itemId);

                document.querySelector('.itemsdatabaseMainDiv').append(itemDiv);

                
            }
        })
    
})


function requestHandler(url) {
    let smallHtml = document.getElementsByTagName("div")[0];
    let itemname = smallHtml.getElementsByClassName('chakra-heading')[0].innerText;
    console.log(smallHtml);
    itemname = itemname.replace('\n', ' ');
    console.log(itemname);
    let sku = smallHtml.getElementsByClassName('css-ziwxw9')[0].textContent;
    console.log(sku)
    let imgLink = smallHtml.querySelectorAll('div.css-1iec7mm img')[0].getAttribute('src');
    console.log(imgLink);
    let stockxLink = url;
    console.log(stockxLink);
    
}


function getItemData(url) {
    let website = new XMLHttpRequest();
    website.addEventListener('load', function() {
        document.querySelector('div').innerHTML = this.responseText;
        console.log(this.responseText);
        requestHandler(url);
    });
    website.open('GET', url);
    website.send();
}
function addButtonListener() {    
    document.querySelectorAll('.addButton')[1].addEventListener('click', function() {
        document.body.style['overflow'] = 'hidden';
        console.log('working');
        for (i of document.querySelectorAll('.addItemPopup *')) {
            i.style['display'] = 'block';
        }
        for (i of document.querySelectorAll('.addItemPopup div, .addItemPopup div div, .addItemPopup, .addItemPopup div header')) {
         i.style['display'] = 'flex';
        }
       
        
    })
}