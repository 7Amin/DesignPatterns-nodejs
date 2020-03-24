public interface CoffeeMachineInterface {
    public void chooseFirstSelection();
    public void chooseSecondSelection();
    public void chooseThirdSelection();
}

public class CoffeeTouchscreenAdapter implements CoffeeMachineInterface{
    public CoffeeTouchscreenAdapter(OldCoffeeMachine oldCoffeeMachine){
        this.oldCoffeeMachine = oldCoffeeMachine;
    }

    public void chooseFirstSelection() {
        this.oldCoffeeMachine.selectA();
    }

    public void chooseSecondSelection(){
        this.oldCoffeeMachine.selectB();
    }

    public void chooseThirdSelection(){
        this.oldCoffeeMachine.selectC();
    }
}

public class OldCoffeeMachine {
    public void selectA(){

    }

    public void selectB(){

    }

    public void selectC(){

    }
}
