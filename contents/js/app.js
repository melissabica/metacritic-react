$( "#doctors" ).on( "click", function( event ) {
    React.render(
        <DoctorList url='data/doctors.json.data'/>,
        document.getElementById('content')
    )
})

$( "#users" ).on( "click", function( event ) {
    React.render(
        <UserList url='data/users.json.data'/>,
        document.getElementById('content')
    )
})

$( "#restaurants" ).on( "click", function( event ) {
    React.render(
        <RestaurantList url='data/restaurants.json.data'/>,
        document.getElementById('content')
    )
})

$( "#movies" ).on( "click", function( event ) {
    React.render(
        <MovieList url='data/movies.json.data'/>,
        document.getElementById('content')
    )
})

$( "#music" ).on( "click", function( event ) {
    React.render(
        <MusicList url='data/music.json.data'/>,
        document.getElementById('content')
    )
})
