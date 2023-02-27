var navbar = 
'<nav class="navbar navbar-expand-md navbar-dark bg-dark">'+
        '<div class="container-fluid">'+
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navigation" aria-controls="main-navigation" aria-expanded="false" aria-label="Toggle navigation">'+
		    '<span class="navbar-toggler-icon"></span>'+
	    '</button>'+
        '<div class="collapse navbar-collapse" id="main-navigation">'+
            '<ul class="navbar-nav">'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="/">Home</a>'+
                '</li>'+
                '<li class="nav-item dropdown">'+
                    '<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Seasons</a>'+
                    '<ul class="dropdown-menu">'+
                    '<li><a class="dropdown-item" href="season44.html">Season 44</a></li>'+
                    '</ul>'+
                '</li>'+
            '</ul>'+
            '</div>'+
        '</div>'+
    '</nav>'

var nav_insert = document.getElementById('nav');
nav_insert.insertAdjacentHTML('beforeend', nav);
