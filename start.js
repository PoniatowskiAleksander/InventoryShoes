document.querySelector('.startmenu button').addEventListener('click', function() {
    if (document.querySelector('.startmenu input').value != '') {
        let filename = document.querySelector('.startmenu input').files[0].name;
        console.log(filename);
        fetch('storage/'+filename)
            .then(response => response.json())
            .then(data => {
                var data = data.data;
                console.log();
            })
        setTimeout(() => {
            document.querySelector('.startmenu').display = 'none';
            for (i of document.querySelectorAll('.startmenu')) {
                i.style['display'] = 'none';
            }
            document.body.style['background-color'] = '#fff';
            document.body.style['overflow'] = 'visible';
        }, 5000)

        document.querySelector('.startmenu').classList.add('bodyDisappear');
        
        document.querySelector('.startmenu').classList.add('disappear');
        
    };
})