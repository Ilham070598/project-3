
'use strict';

document.addEventListener('DOMContentLoaded', () =>{


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим  не пидр..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    
     addForm.addEventListener('submit', (event) => {
        
        event.preventDefault();

    let NewFilm = addInput.value;
    const favorite = checkbox.checked;
    
    if (NewFilm){
    if (NewFilm.length > 21) {
        NewFilm = `${NewFilm.substring(0, 22)}...`}
    
    if (favorite) {
         console.log("Добавляем ваш любимый фильм");}
         
        movieDB.movies.push(NewFilm);
        sortArr(movieDB.movies);
        
        createMovieList(movieDB.movies, movieList);
        
    }
    
    
    event.target.reset()
    


});
    
    
    const deleteADV = (arr) => {   
    arr.forEach(item => {
        item.remove()
    }); 
    };
    
    
    const makeChanges = () => {
        genre.textContent = "Драма";
    
        poster.style.backgroundImage = 'url(img/bg.jpg)';    
    }
    
    const sortArr = (arr) => {
        arr.sort();
    }
    
    
    function createMovieList(films, parent) {
        parent.innerHTML = "";

        sortArr(films);
        
        films.forEach((film, i) => {
            parent.innerHTML +=
            `<li class="promo__interactive-item"> 
            ${i + 1} ${film}
            <div class="delete"></div></li>`
            });

            document.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    createMovieList(films, parent);
                });
            });

            
    }
    


    
    
    sortArr(movieDB.movies)
    createMovieList(movieDB.movies, movieList);
    deleteADV(adv);
    makeChanges();
    
    
     
});