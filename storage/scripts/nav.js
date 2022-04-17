document.getElementsByClassName('databaseButton')[0].addEventListener('click', function() {
    for (i of document.querySelectorAll('.inventory, .inventory *')){
        i.style['display'] = 'none';
    }
    for (i of document.querySelectorAll('.itemsdatabase *')) {
        i.style['display'] = 'block';
    }
    for (i of document.querySelectorAll(
        '.itemsdatabase, .itemNameId, .item, .itemsdatabase .beforeLoadDiv, .itemsdatabase .beforeLoadDiv p')
        ) {
        i.style['display'] = 'flex';
    }
})


