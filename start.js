document.querySelector('.startmenu button').addEventListener('click', function() {
    if (document.querySelector('.startmenu input').value != '') {
        let filename = document.querySelector('.startmenu input').files[0].name;
        console.log(filename);
        fetch('storage/'+filename)
            .then(response => response.json())
            .then(data => {
                var data = data.data;
                console.log(data.shoes[0].nam);
            })
        setTimeout(() => {
            document.querySelector('.startmenu').display = 'none';
            for (i of document.querySelectorAll('.startmenu')) {
                i.style['display'] = 'none';
            }
            document.body.style['background-color'] = '#524F4D';
            document.body.style['overflow'] = 'visible';
            document.querySelector('nav').style['display'] = 'flex';
        }, 5000)

        document.querySelector('.startmenu').classList.add('bodyDisappear');
        
        document.querySelector('.startmenu').classList.add('disappear');
        
    };
})