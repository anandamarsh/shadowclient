using System;

public static class Program {

    static Random rnd = new Random();

    static int getNextState() {
        return rnd.Next(1, 10);
    }

    static void Main() {
        string line;
        Console.WriteLine("Randomizer is ready");
        while((line = Console.ReadLine()) != "EOT")
          Console.WriteLine(getNextState());
    }

}