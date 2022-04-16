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
    var filepath = 'storage/' + filename;

    fetch(filepath)
        .then(response => response.json())
        .then(data => {
            var data = data.data;
            console.log(data);
            var shoes = data.shoes;
            document.querySelector('.itemsdatabase').innerHTML = '<div class="itemsdatabaseMainDiv"></div>';
            for (i of shoes) {
                console.log(i);
                

            }
        })
    
})