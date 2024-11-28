package car.example.setter.injection;

import car.example.constructor.injection.Car;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationSetterInjection.xml");

        car.example.setter.injection.Car myCar = (car.example.setter.injection.Car) context.getBean("myCar");
        myCar.displayDetails();
    }
}
