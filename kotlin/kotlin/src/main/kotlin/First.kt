//* The "main" function is the entry point of the program
fun main() {

    //* "Better Comments" plugin doesn't work here
    //* "println" instead of "System.out.println"
    println("Hello World!")
    //* Semicolons are optional in Kotlin

    //* Variables use "var" keyword for mutable variables
    var num = 2
    num = 1
    //* However, you can't change the type of a variable
    // num = "0"

    // The "val" keyword is used for immutable variables
    val name = "Pedro"
    //* You can't change its value
    // name = "Miles"

    //* You can insert variables into strings using "$"
    println("I'm $name")
    //* But you must use curly braces if you want to use expressions
    println("I'm ${name.uppercase()}!")

    //* Instead of the ternary operator, Kotlin uses "if-else" expressions
    println(if (num > 0) "\"num\" is positive" else "\"num\" is negative")
}