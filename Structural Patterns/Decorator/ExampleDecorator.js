const AbstractClass = require("abstract-class-js");


class WebPage { // interface
    display() {
        throw new Error('You have to implement the method doSomething!');
    }
}

class BasicWebPage extends WebPage {
    html = "";
    styleSheet = "";
    scripts = "";

    constructor(_html, _styleSheet, _scripts) {
        this.html = _html;
        this.styleSheet = _styleSheet;
        this.scripts = _scripts;
    }

    display() {
        // do some 
    }
}

class WebPageDecorator extends AbstractClass, WebPage { // decorator class 
    constructor(webPage) {
        this.page = webPage;
    }

    display() {
        this.page.display();
    }
}

class AuthorizedWebPage extends WebPageDecorator {
    constructor(decoratorPage) {
        super(decoratorPage);
    }

    authorizedUser() {
        // do some
    }

    display() {
        super.display();
        this.authorizedUser();
    }
}

class AuthenticatedWebPage extends WebPageDecorator {
    constructor(decoratorPage) {
        super(decoratorPage);
    }

    authenticatedWebPage() {
        // do some
    }

    display () {
        super.display();
        this.authenticatedWebPage();
    }
}


class Program {
    static main() {
        myPage = new BasicWebPage();
        myPage = new AuthorizedWebPage(myPage);
        myPage = new AuthenticatedWebPage(myPage);
        myPage.display();
    }
}