// * Real class
class Movie {

    // * Variables
    String title;
    String genre;
    int rating;

    // * Methods
    void playIt() {
        System.out.println("Playing the movie");
    }
}


// * Tester class
//! In Java, there can be more than one class (or interface) in a file
//! But only one of them can be public (or not) and that one must match the filename
public class Tester {

    // * The main method here will test the real class
    public static void main(String[] args) {

        // * An instance of the real class is created
        Movie movie = new Movie();
        System.out.println(movie.genre);

        // * Then we assign values to the variables of the object
        movie.title = "Lost in Cubicle Space";
        movie.genre = "Comedy";
        movie.rating = 5;
        System.out.println(movie.genre);

        // * We can also call its methods
        movie.playIt();
    }
}
